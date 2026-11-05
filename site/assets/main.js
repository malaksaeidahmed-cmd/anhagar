const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const EN={skip:'Skip',n1:'Services',n2:'Results',n3:'Partners',cta:'Book a call',h1a:'We Turn',h1b:'Heads',
sub:'Your growth partner: ads, branding, production and web for 50+ brands across Egypt and the Gulf.',cta2:'Book a strategy call',
s1:'brands in Egypt & the Gulf',s2:'million EGP in sales from one campaign',s3:'peak return on ad spend (ROAS)',
h2s:'What we do',a1:'Campaigns & media buying',a1p:'Large budgets on Meta, TikTok and Google, with conversion tuning and high-value audience targeting.',
a2:'Brand identity',a2p:'New and rebuilt brand identities with complete guidelines.',a3:'Cinematic production',a3p:'Products, food, production lines and interiors, shot to show quality.',
a4:'Packaging & print',a4p:'Boxes, sweets tins, coffee bags and perfume packs that lift perceived value.',a5:'Motion & AI ads',a5p:'2D/3D videos and AI-generated ad content.',
a6:'Websites & stores',a6p:'Fast websites and online stores built to convert.',h2w:'Results, in numbers',
c1:'Leading retail brand',c1m:'35,000,000+ EGP in sales · ROAS ×30',c2:'Halawany El-Shibi',c2m:'1,930 mango kunafa orders + 669 Salizone · 0.44–1.04 EGP/message',
c3:'Malek El-Shawerma',c3m:'43,302 engagements · 0.0115 EGP each',c4:'Woody Kitchens',c4m:'393,098 unique reach · 2.54 EGP per 1,000',
c5:'El-Mutawakel Foods',c5m:'22,492 engagements + 263 purchase orders · 0.0132 EGP each',c6:"Lo'loat El-Dokki & Yehia El-Attar",c6m:'4,964 new followers · 0.26–0.34 EGP each',
h2c:'Partners in growth',k1:'<b>Food & restaurants:</b> Malek El-Shawerma, Halawany El-Shibi, Kababgy Farahat El-Sharkawy, Foul El-Sheikh Yehia El-Attar, Lo\'loat El-Dokki, El-Mutawakel, Dr. Family Foods and 15+ more.',
k2:'<b>Furniture & contracting:</b> Woody, Nile Eagle, Modern Home, NPCO, Al-Amir Contracting, United EGY.',
k3:'<b>Beauty, sports & services:</b> Mesty, Naqaa Store, Leen, Kanje Beauty, Cosmomedical, Best Soccer Teams, Energy Sport, Crazy 360, Jemaria International.',
h2t:'Ready to be our next success story?',ctp:'Book a strategy session and we will map your growth plan.',wa:'Message us on WhatsApp',addr:'New Maadi, Cairo'};
// language
$$('[data-t]').forEach(e=>e.dataset.ar=e.innerHTML);
function setLang(l){const en=l==='en';document.documentElement.lang=l;document.documentElement.dir=en?'ltr':'rtl';
 $$('[data-t]').forEach(e=>e.innerHTML=en?EN[e.dataset.t]:e.dataset.ar);$('#lang').textContent=en?'AR':'EN';
 document.title=en?'Anhager Egypt | Advertising Agency — We Turn Heads':'أنهاجر إيجيبت | وكالة دعاية وإعلان في مصر — We Turn Heads';
 try{localStorage.lang=l}catch(e){}}
$('#lang').onclick=()=>setLang(document.documentElement.lang==='ar'?'en':'ar');
try{const q=new URLSearchParams(location.search).get('lang')||localStorage.lang;if(q==='en')setLang('en')}catch(e){}
// loader (short, skippable)
const L=$('#loader'),C=$('#count');let n=0,done=false;
const finish=()=>{if(done)return;done=true;C.textContent=100;L.classList.add('out');counters()};
$('#skip').onclick=finish;
if(reduce||sessionStorage.seen)finish();else{sessionStorage.seen=1;const t=setInterval(()=>{n+=Math.ceil(Math.random()*9);if(n>=100){clearInterval(t);finish()}else C.textContent=n},60)}
// counters
function counters(){$$('[data-n]').forEach(e=>{const to=+e.dataset.n,s=e.dataset.s||'',p=e.dataset.p||'';let t0;
 const f=t=>{t0??=t;const k=Math.min((t-t0)/1200,1);e.textContent=p+Math.round(to*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)};reduce?e.textContent=p+to+s:requestAnimationFrame(f)})}
// work orb
const orb=$('#orb');
$$('.rows li').forEach(li=>{li.onmouseenter=()=>{orb.textContent=li.dataset.m;orb.classList.add('on')};li.onmouseleave=()=>orb.classList.remove('on')});
addEventListener('mousemove',e=>{orb.style.transform=orb.classList.contains('on')?`translate(${e.clientX}px,${e.clientY}px)`:`translate(${e.clientX}px,${e.clientY}px) scale(.4)`});
// WhatsApp number: edit here
$('#wa').href='https://wa.me/20XXXXXXXXXX?text='+encodeURIComponent('مرحبًا، عايز أحجز استشارة');
// 3D head that turns toward the cursor ("We Turn Heads")
(async()=>{const cv=$('#head');try{
 const gl=cv.getContext('webgl2')||cv.getContext('webgl');if(!gl||reduce)throw 0;
 const T=await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js');
 const r=new T.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,1.75));
 const sc=new T.Scene(),cam=new T.PerspectiveCamera(40,1,.1,50);cam.position.z=5;
 const g=new T.IcosahedronGeometry(1.25,5),p=g.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),k=1+.08*Math.sin(x*4)*Math.cos(y*3+z*2);p.setXYZ(i,x*k*.88,y*k*1.1,z*k)}g.computeVertexNormals();
 const head=new T.Group(),m=new T.MeshStandardMaterial({color:0x12204f,metalness:.9,roughness:.25});
 head.add(new T.Mesh(g,m));
 const eye=new T.MeshBasicMaterial({color:0xf2b84b});
 [-.42,.42].forEach(x=>{const e=new T.Mesh(new T.SphereGeometry(.13,24,24),eye);e.position.set(x,.2,1.18);head.add(e)});
 const ring=new T.Mesh(new T.TorusGeometry(1.9,.015,12,160),eye);ring.rotation.x=1.2;head.add(ring);sc.add(head);
 sc.add(new T.AmbientLight(0x5566aa,.6));const l1=new T.PointLight(0xf2b84b,60,20);l1.position.set(3,3,4);sc.add(l1);const l2=new T.PointLight(0x4a6cff,40,20);l2.position.set(-4,-1,3);sc.add(l2);
 let mx=0,my=0,vis=true;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1});
 new IntersectionObserver(a=>vis=a[0].isIntersecting).observe(cv);
 const fit=()=>{const w=cv.clientWidth,h=cv.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;head.position.x=innerWidth>800?(document.dir==='rtl'?-1.6:1.6):0;cam.updateProjectionMatrix()};fit();addEventListener('resize',fit);
 (function loop(){requestAnimationFrame(loop);if(!vis||document.hidden)return;
  head.rotation.y+=(mx*.9-head.rotation.y)*.06;head.rotation.x+=(my*.5-head.rotation.x)*.06;ring.rotation.z+=.004;r.render(sc,cam)})();
}catch(e){cv.style.display='none'}})();
