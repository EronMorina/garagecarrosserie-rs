/* Quote form → email, sent through the Infomaniak mailbox.
   Runs on Vercel as /api/devis. Needs two environment variables set in Vercel
   (Settings → Environment Variables): SMTP_USER (the mailbox address) and
   SMTP_PASS (its password). Optional: MAIL_TO to deliver somewhere else. */
const nodemailer = require('nodemailer');

const MAX_PHOTOS = 10;
const FIELDS = [ // [form field, label in the email]
  ['prenom','Prénom'], ['nom','Nom'], ['telephone','Téléphone'], ['email','E-mail'],
  ['marque','Marque'], ['modele','Modèle'], ['annee','Année'],
  ['service','Service'], ['description','Description'],
  ['assure','Véhicule assuré'], ['assurance','Assurance'], ['franchise','Franchise'],
  ['contact','Recontacter par'], ['langue','Langue du client']
];
const REQUIRED = ['prenom','nom','telephone','email','marque','modele','service','description'];

const clean = (v, max=2000) => String(v ?? '').replace(/\r\n?/g,'\n').trim().slice(0, max);
const oneLine = v => clean(v, 200).replace(/\s+/g,' ');
const escHtml = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const isEmail = v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

// short timeouts so a blocked connection fails in seconds instead of leaving the form spinning
const transportFor = (port, user, pass) => nodemailer.createTransport({
  host: 'mail.infomaniak.com', port, secure: port === 465, requireTLS: port !== 465,
  auth: { user, pass },
  connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 20000
});

module.exports = async (req, res) => {
  const { SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'method' });
  if (!SMTP_USER || !SMTP_PASS) return res.status(500).json({ ok:false, error:'not-configured' });

  const b = (req.body && typeof req.body === 'object') ? req.body : {};
  if (b.website) return res.status(200).json({ ok:true }); // hidden field only bots fill in

  const d = Object.fromEntries(FIELDS.map(([k]) => [k, k === 'description' ? clean(b[k]) : oneLine(b[k])]));
  if (REQUIRED.some(k => !d[k]) || !isEmail(d.email)) return res.status(400).json({ ok:false, error:'invalid' });

  const photos = (Array.isArray(b.photos) ? b.photos : []).slice(0, MAX_PHOTOS)
    .filter(p => p && typeof p.data === 'string' && /^[A-Za-z0-9+/=]+$/.test(p.data))
    .map((p, i) => ({ filename: `photo-${i + 1}.jpg`, content: Buffer.from(p.data, 'base64'), contentType: 'image/jpeg' }));

  const rows = FIELDS.filter(([k]) => d[k]);
  const text = rows.map(([k, label]) => `${label} : ${d[k]}`).join('\n') + `\n\nPhotos jointes : ${photos.length}`;
  const html = `<table cellpadding="6" style="border-collapse:collapse;font:14px Arial,sans-serif">${
    rows.map(([k, label]) => `<tr><td style="color:#5B636B;vertical-align:top;white-space:nowrap">${label}</td><td>${escHtml(d[k]).replace(/\n/g,'<br>')}</td></tr>`).join('')
  }<tr><td style="color:#5B636B">Photos jointes</td><td>${photos.length}</td></tr></table>`;

  try {
    await transportFor(465, SMTP_USER, SMTP_PASS).sendMail({
      from: { name: 'Site web — Carrosserie RS Suisse', address: SMTP_USER },
      to: MAIL_TO || SMTP_USER,
      replyTo: { name: `${d.prenom} ${d.nom}`, address: d.email }, // "Répondre" goes straight to the customer
      subject: `Demande de devis — ${d.prenom} ${d.nom} · ${d.service} · ${d.marque} ${d.modele}`,
      text, html, attachments: photos
    });
    return res.status(200).json({ ok:true });
  } catch (err) {
    console.error('devis: sending failed', err && err.code, err && err.message);
    return res.status(502).json({ ok:false, error:'send', code: (err && err.code) || 'ERROR' });
  }
};
