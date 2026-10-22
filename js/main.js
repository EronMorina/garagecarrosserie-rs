/* ===== Business data — replace the bracketed placeholders before going live ===== */
const CONFIG = {
  phone: '+41 22 785 18 50',          // repris de l'enseigne de l'atelier — à confirmer
  whatsapp: '+41 78 737 02 14',        // format international
  email: 'info@garagecarrosserie-rs.ch',
  address: 'Rue du Pré-Bouvier 10, 1242 Satigny, Genève',
  waMessage: 'Bonjour Carrosserie RS Suisse, je souhaiterais obtenir des informations concernant mon véhicule.',
  formEndpoint: '/api/devis'            // envoi par e-mail via la boîte Infomaniak (voir api/devis.js)
};

const SERVICES = [
  {id:'carrosserie', anchor:'carrosserie', title:'Réparation de carrosserie', img:'img/cay-rear.jpg', alt:'Arrière d’un Porsche Cayenne blanc à l’atelier',
   short:'Bosses, rayures profondes, éléments enfoncés ou dégâts après un accrochage : nous remettons en état les éléments extérieurs de votre véhicule dans le respect de ses lignes d’origine.',
   tags:['Accrochage','Pare-chocs','Portières','Ailes'],
   inc:['Diagnostic des dommages visibles et cachés','Réparation ou remplacement des éléments extérieurs','Ajustement des ouvrants et des jeux de carrosserie','Remise en peinture des zones réparées','Contrôle final avant restitution'],
   faq:[['Faut-il remplacer ou réparer ?','Cela dépend de l’état de l’élément. Lorsque la réparation est fiable, nous la privilégions ; sinon nous vous proposons un remplacement, toujours expliqué dans le devis.'],['Puis-je envoyer des photos d’abord ?','Oui. Elles nous permettent de vous donner une première orientation avant de voir le véhicule.']]},
  {id:'peinture', anchor:'peinture-service', title:'Peinture automobile', img:'img/911-door.jpg', alt:'Portière d’une Porsche 911 rouge, peinture brillante',
   short:'Préparation des surfaces, recherche de teinte et application en cabine de peinture pour une finition uniforme, raccordée au reste de la carrosserie.',
   tags:['Raccord de teinte','Cabine','Vernis','Retouches'],
   inc:['Préparation : ponçage, masticage, apprêt','Recherche de la teinte d’origine','Application de la base et du vernis en cabine','Séchage maîtrisé','Lustrage et contrôle sous lumière'],
   faq:[['La teinte sera-t-elle identique ?','Nous recherchons la teinte d’origine et contrôlons le raccord avec les éléments voisins, sous plusieurs éclairages.'],['Peut-on peindre un seul élément ?','Oui, c’est même le cas le plus fréquent. Selon la teinte, un fondu sur l’élément voisin peut être nécessaire pour un raccord invisible.']]},
  {id:'tolerie', anchor:'tolerie', title:'Tôlerie & redressage', img:'img/tolerie-1.webp', alt:'Débosselage du hayon d’une voiture noire à l’atelier', more:[['img/tolerie-2.webp','Redressage de la tôle au débosseleur, contrôlé sous la lumière de l’atelier']],
   short:'Redressage et remise en forme des panneaux déformés, ou remplacement de l’élément lorsque la réparation n’est pas la bonne solution.',
   tags:['Panneaux','Redressage','Bas de caisse'],
   inc:['Évaluation de la déformation','Redressage et remise en forme de la tôle','Remplacement d’élément si nécessaire','Préparation pour la peinture','Vérification des alignements'],
   faq:[['Le redressage est-il durable ?','Un panneau correctement redressé puis protégé retrouve sa forme et sa tenue. Lorsque ce n’est pas possible, nous vous le disons.'],['Combien de temps faut-il ?','La durée dépend de l’ampleur des dégâts. Nous vous donnons une estimation avec le devis.']]},
  {id:'pare-brise', anchor:'pare-brise', title:'Remplacement de pare-brise', img:'img/pare-brise-1.jpg', alt:'Dépose d’un pare-brise à l’atelier, ventouses et outil de découpe en place',
   short:'Remplacement du pare-brise et des vitrages, avec une pose soignée et une vérification de l’étanchéité.',
   tags:['Pare-brise','Vitrage','Étanchéité'],
   inc:['Contrôle de l’impact ou de la fissure','Dépose de l’ancien vitrage','Pose et collage du nouveau pare-brise','Contrôle de l’étanchéité et des finitions','Nettoyage du véhicule'],
   faq:[['Mon assurance couvre-t-elle le pare-brise ?','De nombreux contrats incluent le bris de glace, mais cela dépend de votre couverture. Nous vous aidons à le vérifier.'],['Puis-je rouler juste après ?','Un temps de séchage de la colle est nécessaire. Nous vous indiquons le délai lors de la remise du véhicule.']]},
  {id:'polissage', anchor:'polissage', title:'Polissage de carrosserie', img:'img/911-nose.jpg', alt:'Capot d’une Porsche 911 rouge avec reflets nets après polissage',
   short:'Correction des micro-rayures et des voiles, polissage en plusieurs passes pour rendre à la peinture sa profondeur et sa brillance.',
   tags:['Micro-rayures','Correction','Brillance'],
   inc:['Lavage et décontamination de la peinture','Évaluation de l’état du vernis','Polissage correctif en une ou plusieurs passes','Finition brillance','Contrôle sous lumière'],
   faq:[['Le polissage retire-t-il toutes les rayures ?','Il élimine les micro-rayures et les voiles. Une rayure qui a traversé le vernis demande une retouche ou une remise en peinture.'],['À quelle fréquence polir ?','Un polissage correctif n’est pas à refaire souvent : un entretien régulier suffit ensuite à préserver le résultat.']]}
];

const GALLERY = [
  ['911-34','Porsche 911 Carrera','Atelier'],
  ['amg-int','Mercedes-AMG GT 4 portes','Finition mate'],
  ['911-nose','Porsche 911','Brillance'],
  ['cay-side','Porsche Cayenne','Atelier'],
  ['911-wheel','Porsche 911','Détail'],
  ['hero','Porsche 911 Carrera','Atelier'],
  ['911-side','Porsche 911 Carrera','Profil'],
  ['cay-rear','Porsche Cayenne Turbo','Atelier'],
  ['cay-booth','Porsche Cayenne Coupé','Zone peinture']
];

const FAQ = [
  ['Combien coûte une réparation de carrosserie ?','Le prix dépend de l’élément touché, de l’étendue des dégâts, de la peinture et des pièces éventuelles. Chaque véhicule est différent : nous établissons un devis détaillé après évaluation. Vous pouvez commencer par nous envoyer des photos.'],
  ['Puis-je envoyer des photos pour recevoir une première estimation ?','Oui. Une vue d’ensemble et un gros plan des dégâts nous permettent de vous donner une première orientation. Le devis définitif est établi après examen du véhicule à l’atelier.'],
  ['Travaillez-vous avec les assurances ?','Nous vous accompagnons dans vos démarches et vous fournissons un devis détaillé à transmettre à votre assureur. La prise en charge reste soumise aux conditions de votre contrat et à la décision de votre assurance.'],
  ['Comment fonctionne la franchise ?','La franchise est la part des frais qui reste à votre charge selon votre contrat. Selon votre situation et les conditions de votre assurance, nous cherchons avec vous une solution adaptée, comme dans un garage partenaire. Le plus simple est de nous expliquer votre cas.'],
  ['Combien de temps dure une réparation ?','La durée varie selon les dégâts, les pièces nécessaires et les travaux de peinture. Nous vous indiquons une estimation lors du devis et vous tenons informé en cas de changement.'],
  ['Proposez-vous un véhicule de remplacement ?','Oui. Pour toute réparation à partir de CHF 1’500.–, nous mettons gratuitement à votre disposition un véhicule de remplacement pendant toute la durée des travaux.'],
  ['À partir de quel montant le véhicule de remplacement est-il gratuit ?','Dès CHF 1’500.– de réparation. Pour un montant inférieur, contactez-nous : nous verrons ensemble la meilleure solution pour votre mobilité.']
];

const $ = (s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const svg = id=>`<svg><use href="#${id}"/></svg>`;
const isPh = v=>/^\[.*\]$/.test(v);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// the site has more than one page: every part below checks that its section is on this page,
// and links to homepage sections get this prefix when used from another page
const HOME = document.getElementById('devis') ? '' : 'index.html';

/* ===== Languages =====
   French is the source text: it lives in index.html and in the data above.
   js/i18n.js gives the German and English version of each French text. */
const LANGS = {fr:'fr-CH', de:'de-CH', en:'en'};
const isLang = l=>Object.hasOwn(LANGS,l);
const norm = s=>String(s).replace(/[’']/g,"'").replace(/\s+/g,' ').trim();
const DICT = new Map(Object.entries(typeof I18N!=='undefined'?I18N:{}).map(([k,v])=>[norm(k),v]));
const missing = new Set();
// French on arrival; another language only via a ?lang= link or the visitor's own earlier choice
let lang = (()=>{
  const q=new URLSearchParams(location.search).get('lang'); if(isLang(q)) return q;
  try{ const s=localStorage.getItem('lang'); if(isLang(s)) return s; }catch(e){}
  return 'fr';
})();
// translate a French text into the current language; {name} placeholders are filled from vars
function tr(s,vars){
  let out=s;
  if(lang!=='fr'&&norm(s)){ const e=DICT.get(norm(s)); if(e&&e[lang]) out=e[lang]; else missing.add(norm(s)); }
  return vars?out.replace(/\{(\w+)\}/g,(m,k)=>k in vars?vars[k]:m):out;
}
const onLang=[]; // parts built by JS re-render themselves through these on a language switch

/* fill business info */
const digits = v=>v.replace(/[^\d+]/g,'');
$$('[data-cfg]').forEach(el=>{
  const k = el.dataset.cfg;
  if (k==='tel-link'){ if(!isPh(CONFIG.phone)) el.href='tel:'+digits(CONFIG.phone); return; }
  if (k==='wa-link') return;
  const v = CONFIG[k]; if (v==null) return;
  el.innerHTML = isPh(v) ? `<span class="ph">${esc(v)}</span>` : k==='email' ? `<a href="mailto:${esc(v)}">${esc(v)}</a>` : esc(v);
});
$('#yr').textContent = new Date().getFullYear();
function setWaLinks(){
  if(isPh(CONFIG.whatsapp)) return;
  $$('[data-cfg="wa-link"]').forEach(el=>{ el.href='https://wa.me/'+digits(CONFIG.whatsapp).replace('+','')+'?text='+encodeURIComponent(tr(CONFIG.waMessage)); el.target='_blank'; el.rel='noopener'; });
}
setWaLinks(); onLang.push(setWaLinks);
// the map and the directions page open in the site's language
function setMapLang(){
  const dir=$('#mapDir'), map=$('#mapFrame'); if(!dir||!map) return;
  const d=new URL(dir.href), m=new URL(map.src);
  d.searchParams.set('hl',lang); dir.href=d;
  if(m.searchParams.get('hl')!==lang){ m.searchParams.set('hl',lang); map.src=m; }
}
setMapLang(); onLang.push(setMapLang);

/* static page text: remember the French of every text and attribute once, then swap it per language */
const I18N_ATTRS=['alt','aria-label','placeholder','title'];
const translatable=s=>/\p{L}/u.test(s)&&!isPh(s.trim());
const skipI18n=el=>el.closest('script,style,[data-i18n-skip]');
const staticText=[], staticAttr=[], staticHead=[document.title, $('meta[name="description"]').content];
for(let w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;(n=w.nextNode());)
  if(translatable(n.nodeValue)&&!skipI18n(n.parentElement)) staticText.push([n,n.nodeValue]);
$$(I18N_ATTRS.map(a=>`[${a}]`).join()).forEach(el=>{ if(!skipI18n(el)) I18N_ATTRS.forEach(a=>{ const v=el.getAttribute(a); if(v&&translatable(v)) staticAttr.push([el,a,v]); }); });
function applyLang(first){
  document.documentElement.lang=LANGS[lang];
  staticText.forEach(([n,fr])=>{ n.nodeValue=fr.replace(/^(\s*)([\s\S]*?)(\s*)$/,(m,a,t,z)=>a+tr(t)+z); });
  staticAttr.forEach(([el,a,fr])=>el.setAttribute(a,tr(fr)));
  document.title=tr(staticHead[0]); $('meta[name="description"]').content=tr(staticHead[1]);
  $$('.lang [data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===lang));
  if(!first) onLang.forEach(f=>f());
  // open the page with ?i18n-debug to list texts that still need a translation
  if(missing.size&&/[?&]i18n-debug/.test(location.search)) console.warn(`Texts without a ${lang} translation:`,[...missing]);
}
function setLang(l){
  if(!isLang(l)||l===lang) return;
  lang=l; missing.clear();
  try{ localStorage.setItem('lang',l); }catch(e){}
  applyLang();
}
document.addEventListener('click',e=>{ const b=e.target.closest('.lang [data-lang]'); if(b) setLang(b.dataset.lang); });

/* nav */
const nav = $('#nav');
const onScroll = ()=>nav.classList.toggle('is-solid', scrollY>40);
addEventListener('scroll', onScroll, {passive:true}); onScroll();
// while an overlay is open, make everything else inert so keyboard focus can't wander behind it
function isolate(keep){ $$('body > *').forEach(el=>{ if(el.tagName!=='SCRIPT'&&!(el instanceof SVGElement)) el.inert=!!keep&&!keep.includes(el); }); }
const burger=$('#burger'), menu=$('#menu');
function setMenu(open){
  burger.setAttribute('aria-expanded',open); menu.classList.toggle('is-open',open);
  menu.setAttribute('aria-hidden',!open); document.body.style.overflow=open?'hidden':'';
  isolate(open?[nav,menu]:null);
  if(open) nav.classList.add('is-solid'); else onScroll();
}
burger.addEventListener('click',()=>setMenu(burger.getAttribute('aria-expanded')!=='true'));
$$('a',menu).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
// the burger disappears on wide screens, so don't leave the menu stuck open
matchMedia('(min-width:1340px)').addEventListener('change',e=>{ if(e.matches&&menu.classList.contains('is-open')) setMenu(false); });
// active link: highlight the section in view, or nothing for sections without a nav link
const links=$$('.nav__links a:not([aria-current])');
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ const id=e.target.id||'top'; links.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+id)); }}),{rootMargin:'-45% 0px -50% 0px'});
$$('main > section').forEach(s=>io.observe(s));

/* hero parallax */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&$('#heroImg')){ const h=$('#heroImg'); addEventListener('scroll',()=>{ const y=scrollY; if(y<1000) h.style.transform=`translate3d(0,${y*0.18}px,0)`; },{passive:true}); }

/* services */
(function(){
  const list=$('#svcList'), stage=$('#svcStage'), cap=$('#svcCap'), dots=$('#svcDots'); let cur=0;
  if(!list) return;
  const pics=s=>[[s.img,s.alt],...(s.more||[])];
  const items=SERVICES.map((s,i)=>{
    const li=document.createElement('li'); li.className='svc__item'; li.id=s.anchor; list.appendChild(li);
    pics(s).forEach(([src],n)=>{ const im=document.createElement('img'); im.src=src; im.alt=''; im.loading=i||n?'lazy':'eager'; im.dataset.id=s.id; im.dataset.n=n; stage.prepend(im); });
    return li;
  });
  function render(){
    items.forEach((li,i)=>{ const s=SERVICES[i];
      li.innerHTML=`<h3><button class="svc__btn" aria-controls="b-${s.id}"><span class="svc__t">${tr(s.title)}</span><span class="ic">${svg('i-arrow')}</span></button></h3>
      <div class="svc__body" id="b-${s.id}"><div><div class="svc__body-in">
        <div class="svc__pics${pics(s).length>1?' is-multi':''}">${pics(s).map(([src,alt])=>`<img class="svc__mimg" src="${src}" alt="${esc(tr(alt))}" loading="lazy">`).join('')}</div>
        <p>${tr(s.short)}</p><div class="svc__tags">${s.tags.map(t=>`<span>${tr(t)}</span>`).join('')}</div>
        <div><button class="link" data-open="${s.id}">${tr('En savoir plus')} ${svg('i-arrow')}</button></div>
      </div></div></div>`;
    });
    activate(cur);
  }
  function activate(i){
    cur=i;
    items.forEach((li,j)=>{ li.classList.toggle('is-on',i===j); $('.svc__btn',li).setAttribute('aria-expanded',i===j); $('.svc__body',li).inert=i!==j; });
    cap.textContent=tr(SERVICES[i].title);
    const k=pics(SERVICES[i]).length;
    dots.innerHTML='<i></i>'.repeat(k>1?k:0);
    $('#svcPrev').hidden=$('#svcNext').hidden=k<2;
    showPic(0); restartTimer();
  }
  function restartTimer(){
    clearInterval(timer);
    if(pics(SERVICES[cur]).length>1) timer=setInterval(()=>{ if(!paused) showPic(shown+1); },4000);
  }
  let timer=null, shown=0, paused=false;
  function showPic(n){
    const s=SERVICES[cur], k=pics(s).length; shown=(n+k)%k;
    $$('img',stage).forEach(im=>im.classList.toggle('is-on',im.dataset.id===s.id&&+im.dataset.n===shown));
    $$('i',dots).forEach((d,j)=>d.classList.toggle('is-on',j===shown));
  }
  // hovering the large photo holds it still
  stage.addEventListener('mouseenter',()=>paused=true); stage.addEventListener('mouseleave',()=>paused=false);
  // arrows: switch by hand, and give the visitor a full 4 s before the next automatic change
  $('#svcPrev').addEventListener('click',()=>{ showPic(shown-1); restartTimer(); });
  $('#svcNext').addEventListener('click',()=>{ showPic(shown+1); restartTimer(); });
  render(); onLang.push(render);
  list.addEventListener('click',e=>{ const b=e.target.closest('.svc__btn'); if(b) activate(items.indexOf(b.closest('.svc__item'))); });
  // anchors like the nav's "Carrosserie" open their item (also when the URL already has that hash)
  const fromHash=h=>{ const i=SERVICES.findIndex(s=>'#'+s.anchor===h); if(i>-1) activate(i); };
  addEventListener('hashchange',()=>fromHash(location.hash));
  document.addEventListener('click',e=>{ const a=e.target.closest('a[href^="#"]'); if(a) fromHash(a.getAttribute('href')); });
  fromHash(location.hash);
})();

/* footer service links (every page) */
function renderFootSvc(){ $('#footSvc').innerHTML=SERVICES.map(s=>`<li><a href="${HOME}#${s.anchor}" data-open="${s.id}">${tr(s.title)}</a></li>`).join(''); }
renderFootSvc(); onLang.push(renderFootSvc);

/* drawer */
const drawer=$('#drawer'); let lastFocus=null, drawerId=null;
function renderDrawer(){
  const s=SERVICES.find(x=>x.id===drawerId);
  $('#dImg').src=s.img; $('#dImg').alt=tr(s.alt);
  const others=SERVICES.filter(x=>x.id!==drawerId);
  $('#dBody').innerHTML=`<span class="eyebrow">${tr('Service')}</span><h2 id="dTitle" style="font-size:clamp(1.8rem,4vw,2.6rem)">${tr(s.title)}</h2><p class="lead" style="color:#3E454C">${tr(s.short)}</p>
    <div><h4>${tr('Ce que comprend l’intervention')}</h4><ul class="inc">${s.inc.map(x=>`<li>${tr(x)}</li>`).join('')}</ul></div>
    <div class="faq-mini"><h4>${tr('Questions fréquentes')}</h4>${s.faq.map(([q,a])=>`<details><summary>${tr(q)}</summary><p>${tr(a)}</p></details>`).join('')}</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn--red" href="${HOME}#devis" data-service="${serviceToForm(s.id)}" data-close>${tr('Demander un devis')} ${svg('i-arrow')}</a><a class="btn btn--ghost" href="${HOME}#contact" data-close>${tr('Nous contacter')}</a></div>
    <div><h4>${tr('Services associés')}</h4><div class="rel">${others.map(o=>`<button data-open="${o.id}">${tr(o.title)}</button>`).join('')}</div></div>`;
}
onLang.push(()=>{ if(drawer.classList.contains('is-open')) renderDrawer(); });
function openService(id){
  if(!SERVICES.some(x=>x.id===id)) return;
  drawerId=id; renderDrawer();
  if(!drawer.classList.contains('is-open')){ lastFocus=document.activeElement; }
  drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; isolate([drawer]);
  $('.drawer__panel').scrollTop=0; setTimeout(()=>$('.drawer__close').focus(),50);
}
// restore=false when a link inside the drawer navigates elsewhere on the page, so focus doesn't jump back
function closeDrawer(restore=true){ drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden','true'); document.body.style.overflow=''; isolate(null); if(restore) lastFocus&&lastFocus.focus&&lastFocus.focus(); }
function serviceToForm(id){ return {carrosserie:'Carrosserie',peinture:'Peinture',tolerie:'Tôlerie','pare-brise':'Pare-brise',polissage:'Polissage'}[id]||'Autre'; }
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]'); if(o){ e.preventDefault(); openService(o.dataset.open); return; }
  const closer=e.target.closest('#drawer [data-close]'); if(closer) closeDrawer(closer.tagName!=='A');
  const svcLink=e.target.closest('[data-service]');
  if(svcLink){ const r=$(`input[name="service"][value="${svcLink.dataset.service}"]`); if(r) r.checked=true; if(svcLink.dataset.insured){ $('#a-oui').checked=true; toggleIns(); } }
});

/* process progress line */
(function(){
  const list=$('#procList'); if(!list) return;
  const fill=$('.proc__fill',list), lis=$$('li',list);
  function upd(){
    const r=list.getBoundingClientRect(), mid=innerHeight*0.6;
    const p=Math.min(1,Math.max(0,(mid-r.top)/r.height));
    fill.style.setProperty('--p',p.toFixed(3));
    lis.forEach(li=>{ const b=li.getBoundingClientRect(); li.classList.toggle('is-done',b.top+24<mid); });
  }
  // the line stops at the middle of the last step's number box (its text can be taller than the box)
  function measure(){ const last=lis[lis.length-1]; list.style.setProperty('--line-end',(list.offsetHeight-last.offsetTop-24)+'px'); upd(); }
  addEventListener('scroll',upd,{passive:true}); addEventListener('resize',measure); addEventListener('load',measure); onLang.push(measure); measure();
})();

/* gallery + lightbox */
(function(){
  const g=$('#gal'); if(!g) return;
  function render(){
    g.innerHTML='';
    GALLERY.forEach(([f,t,c],i)=>{
      const b=document.createElement('button'); b.className='g'+(i+1); b.setAttribute('aria-label',tr('Agrandir : {t}',{t}));
      b.innerHTML=`<img src="img/${f}.jpg" alt="${esc(t)} — ${esc(tr(c))}" loading="lazy"><span class="cap"><span>${tr(c)}</span><b>${t}</b></span>`;
      b.addEventListener('click',()=>open(i)); g.appendChild(b);
    });
  }
  render(); onLang.push(render);
  const lb=$('#lb'), img=$('#lbImg'), cap=$('#lbCap'); let cur=0, last=null;
  function show(i){ cur=(i+GALLERY.length)%GALLERY.length; const [f,t,c]=GALLERY[cur]; img.src=`img/${f}.jpg`; img.alt=t; cap.textContent=`${String(cur+1).padStart(2,'0')} / ${String(GALLERY.length).padStart(2,'0')} — ${t}`; }
  function open(i){ last=document.activeElement; show(i); lb.classList.add('is-open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; isolate([lb]); $('#lbClose').focus(); }
  function close(){ lb.classList.remove('is-open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; isolate(null); last&&last.focus(); }
  $('#lbClose').onclick=close; $('#lbPrev').onclick=()=>show(cur-1); $('#lbNext').onclick=()=>show(cur+1);
  lb.addEventListener('click',e=>{ if(e.target===lb||e.target.classList.contains('lb__stage')) close(); });
  let sx=0; lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
  lb.addEventListener('touchend',e=>{ const d=e.changedTouches[0].clientX-sx; if(Math.abs(d)>50) show(cur+(d<0?1:-1)); });
  document.addEventListener('keydown',e=>{
    if(!lb.classList.contains('is-open')) return;
    if(e.key==='Escape')close(); if(e.key==='ArrowRight')show(cur+1); if(e.key==='ArrowLeft')show(cur-1);
  });
})();
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape'||$('#lb.is-open')) return; // the photo viewer handles its own keys
  if(drawer.classList.contains('is-open')) closeDrawer();
  else if(menu.classList.contains('is-open')) setMenu(false);
});

/* faq */
function renderFaq(){
  if(!$('#faqList')) return;
  const open=$$('#faqList details').map(d=>d.open); // keep the open answers open across a language switch
  $('#faqList').innerHTML=FAQ.map(([q,a],i)=>`<details${(open.length?open[i]:i===0)?' open':''}><summary>${tr(q)}<i aria-hidden="true"></i></summary><p class="ans">${tr(a)}</p></details>`).join('');
}
renderFaq(); onLang.push(renderFaq);

/* quote form */
function toggleIns(){ const x=$('#insExtra'); if(x) x.classList.toggle('is-on',$('#a-oui').checked); }
(function(){
const form=$('#quoteForm'); if(!form) return;
$$('input[name="assure"]').forEach(r=>r.addEventListener('change',toggleIns));
// photos
let files=[], urls=[], skipped=0;
const MAX_PHOTOS=10;
const drop=$('#drop'), inp=$('#q-photos'), thumbs=$('#thumbs'), note=$('#photoNote');
function renderThumbs(){
  urls.forEach(u=>URL.revokeObjectURL(u)); urls=[];
  thumbs.innerHTML='';
  files.forEach((f,i)=>{ const fig=document.createElement('figure'); const u=URL.createObjectURL(f); urls.push(u);
    fig.innerHTML=`<img src="${u}" alt="${tr('Photo {n}',{n:i+1})}"><button type="button" aria-label="${tr('Retirer la photo {n}',{n:i+1})}">×</button>`;
    $('button',fig).onclick=()=>{ files.splice(i,1); skipped=0; renderNote(); renderThumbs(); }; thumbs.appendChild(fig); });
}
function renderNote(){ note.textContent=skipped?tr('{max} photos maximum : {n} photo(s) n’ont pas été ajoutée(s).',{max:MAX_PHOTOS,n:skipped}):''; }
onLang.push(renderThumbs,renderNote);
function addFiles(list){
  const imgs=[...list].filter(f=>f.type.startsWith('image/')), room=MAX_PHOTOS-files.length;
  files.push(...imgs.slice(0,room));
  skipped=Math.max(0,imgs.length-room); renderNote();
  renderThumbs();
}
inp.addEventListener('change',()=>{ addFiles(inp.files); inp.value=''; });
['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('is-over');}));
['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('is-over');}));
drop.addEventListener('drop',e=>addFiles(e.dataTransfer.files));
// validation
function check(){
  let firstBad=null;
  const rules=[['q-prenom',v=>v.trim()],['q-nom',v=>v.trim()],['q-tel',v=>v.replace(/\D/g,'').length>=9],['q-mail',v=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)],['q-marque',v=>v.trim()],['q-modele',v=>v.trim()],['q-desc',v=>v.trim().length>=5]];
  rules.forEach(([id,fn])=>{ const el=$('#'+id), ok=!!fn(el.value); el.closest('.f').classList.toggle('err',!ok); el.setAttribute('aria-invalid',!ok); if(!ok&&!firstBad) firstBad=el; });
  const svcOk=!!$('input[name="service"]:checked'); $('#f-service').classList.toggle('err',!svcOk); if(!svcOk&&!firstBad) firstBad=$('#s-carro');
  const cOk=$('#q-consent').checked; $('#f-consent').classList.toggle('err',!cOk); if(!cOk&&!firstBad) firstBad=$('#q-consent');
  return firstBad;
}
form.addEventListener('input',e=>{ const f=e.target.closest('.f'); if(f&&f.classList.contains('err')) check(); });
// photos are shrunk to JPEG in the browser so a request with 10 photos stays under the server's 4.5 MB limit
async function shrink(file,max,q){
  try{
    const bmp=await createImageBitmap(file), s=Math.min(1,max/Math.max(bmp.width,bmp.height));
    const c=document.createElement('canvas'); c.width=Math.round(bmp.width*s); c.height=Math.round(bmp.height*s);
    c.getContext('2d').drawImage(bmp,0,0,c.width,c.height); bmp.close&&bmp.close();
    return c.toDataURL('image/jpeg',q).split(',')[1];
  }catch(e){ return null; } // a format this browser can't read is left out
}
async function photoPayload(){
  let out=(await Promise.all(files.map(f=>shrink(f,1400,.72)))).filter(Boolean);
  if(out.reduce((n,d)=>n+d.length,0)>3.6e6) out=(await Promise.all(files.map(f=>shrink(f,1000,.6)))).filter(Boolean);
  return out.map(data=>({data}));
}
let status=null; // 'sending' | 'error' | null
const statusEl=$('#formStatus'), submitBtn=$('button[type="submit"]',form);
function renderStatus(){
  statusEl.textContent=status==='sending'?tr('Envoi en cours…'):status==='error'?tr('L’envoi n’a pas abouti. Réessayez, ou contactez-nous par téléphone ou WhatsApp.'):'';
  statusEl.classList.toggle('is-err',status==='error');
  submitBtn.disabled=status==='sending';
}
onLang.push(renderStatus);
form.addEventListener('submit',async e=>{
  e.preventDefault();
  if(status==='sending') return;
  const bad=check(); if(bad){ bad.focus(); return; }
  const data=Object.fromEntries(new FormData(form)); delete data.photos; delete data.consent;
  data.langue=lang; // so the reply can be written in the visitor's language
  status='sending'; renderStatus();
  try{
    data.photos=await photoPayload();
    const ctl=new AbortController(), timer=setTimeout(()=>ctl.abort(),45000); // never leave the form spinning
    const r=await fetch(CONFIG.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:ctl.signal}).finally(()=>clearTimeout(timer));
    if(!r.ok) throw new Error('HTTP '+r.status);
  }catch(err){ status='error'; renderStatus(); return; }
  status=null; renderStatus();
  sent={name:data.prenom.trim(), via:(data.contact||'Téléphone').toLowerCase().replace('whatsapp','WhatsApp')};
  renderOk();
  $('#formBody').hidden=true; $('#formOk').hidden=false; $('#formOk').focus();
});
let sent=null;
function renderOk(){ if(!sent) return; $('#okTitle').textContent=tr('Merci {name}, votre demande a bien été envoyée.',{name:sent.name}); $('#okVia').textContent=tr(sent.via); }
onLang.push(renderOk);
$('#formReset').addEventListener('click',()=>{ form.reset(); files=[]; skipped=0; sent=null; status=null; renderStatus(); renderNote(); renderThumbs(); toggleIns(); $$('.f.err',form).forEach(f=>f.classList.remove('err')); $$('[aria-invalid]',form).forEach(el=>el.removeAttribute('aria-invalid')); $('#formOk').hidden=true; $('#formBody').hidden=false; $('#q-prenom').focus(); });
})();

/* apply the chosen language to the static page text */
applyLang(true);
