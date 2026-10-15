import { $, $$, escapeHTML, appCard, toast } from './shared.js';
import { configured, db } from './firebase.js';
import { collection, getDocs, query, where, orderBy, limit } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
const sampleApps=[
{id:'sample-notes',name:'NoteFlow',category:'Productivity',version:'2.4.0',size:'18 MB',price:0,shortDescription:'A clean workspace for your everyday notes and ideas.',logoUrl:'',connectUrl:'',isFeatured:true},
{id:'sample-design',name:'Pixel Studio',category:'Design',version:'1.8.2',size:'42 MB',price:120,shortDescription:'Create beautiful designs with a simple creative toolkit.',logoUrl:'',connectUrl:'',isFeatured:true},
{id:'sample-focus',name:'Focus Timer',category:'Productivity',version:'1.3.1',size:'12 MB',price:0,shortDescription:'Plan focused sessions and keep your day organized.',logoUrl:'',connectUrl:''},
{id:'sample-wallet',name:'Pocket Ledger',category:'Finance',version:'1.1.0',size:'21 MB',price:80,shortDescription:'Track everyday expenses with clear summaries.',logoUrl:'',connectUrl:''},
{id:'sample-learn',name:'LearnSpace',category:'Education',version:'3.0.0',size:'35 MB',price:0,shortDescription:'Explore learning resources in one convenient place.',logoUrl:'',connectUrl:''},
{id:'sample-photo',name:'PhotoCraft',category:'Photography',version:'2.2.0',size:'56 MB',price:150,shortDescription:'Organize and polish your favourite photos.',logoUrl:'',connectUrl:''}
];
let apps=sampleApps;
function render(list){const grid=$('#appGrid');if(!grid)return;grid.innerHTML=list.length?list.map(appCard).join(''):`<div class="empty" style="grid-column:1/-1"><div class="big-icon">⌕</div><strong>No apps found</strong><p>Try another search or category.</p></div>`}
async function loadApps(){if(configured){try{const q=query(collection(db,'apps'),where('isPublished','==',true),orderBy('updatedAt','desc'),limit(80));const snap=await getDocs(q);apps=snap.docs.map(d=>({id:d.id,...d.data()}));}catch(e){console.error(e);toast('Could not load Firebase apps. Check rules and indexes.')}}render(apps);const featured=apps.filter(a=>a.isFeatured);const fg=$('#featuredGrid');if(fg)fg.innerHTML=(featured.length?featured:apps.slice(0,4)).map(appCard).join('')}
function filterApps(){const term=($('#appSearch')?.value||'').toLowerCase();const cat=$('[data-category].active')?.dataset.category||'all';render(apps.filter(a=>(cat==='all'||(a.category||'').toLowerCase()===cat.toLowerCase())&&[a.name,a.category,a.shortDescription,a.description].join(' ').toLowerCase().includes(term)))}
document.addEventListener('DOMContentLoaded',()=>{if($('#appGrid'))loadApps();$('#appSearch')?.addEventListener('input',filterApps);$$('[data-category]').forEach(b=>b.addEventListener('click',()=>{$$('[data-category]').forEach(x=>x.classList.remove('active'));b.classList.add('active');filterApps()}))});
