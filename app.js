const properties = [
  {id:1,title:"The Willow Residence",type:"House",location:"Lekki Phase 1, Lagos",city:"Lekki",price:185000000,beds:4,baths:4,area:310,tag:"Featured",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80"],subtitle:"Contemporary family living",description:"A bright, contemporary home with generous living spaces, a calm neutral palette and room for entertaining. This sample listing demonstrates the kind of property information a real estate platform can present.",amenities:["4 bedrooms","4 bathrooms","Parking space","Fitted kitchen","Private garden","Gated community"]},
  {id:2,title:"Olive Court Apartment",type:"Apartment",location:"Ikeja GRA, Lagos",city:"Ikeja",price:68500000,beds:3,baths:3,area:168,tag:"New listing",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=80"],subtitle:"Light-filled urban comfort",description:"An inviting apartment concept with an open-plan living area, comfortable bedrooms and a clean, modern finish. Listing information is illustrative for this frontend demonstration.",amenities:["3 bedrooms","3 bathrooms","Balcony","Fitted kitchen","24-hour security","Dedicated parking"]},
  {id:3,title:"Palm Haven Villa",type:"Villa",location:"Ajah, Lagos",city:"Ajah",price:132000000,beds:5,baths:5,area:390,tag:"Popular",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80"],subtitle:"Space to slow down",description:"A spacious villa concept designed to show how a listing page can communicate space, amenities and the character of a property to prospective buyers.",amenities:["5 bedrooms","5 bathrooms","Outdoor terrace","Garden","Family lounge","Secure compound"]},
  {id:4,title:"The Courtyard Duplex",type:"Duplex",location:"Wuye, Abuja",city:"Abuja",price:98000000,beds:4,baths:4,area:285,tag:"Featured",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80"],subtitle:"Modern design, thoughtful details",description:"A modern duplex listing concept with a focus on clear property details and a straightforward enquiry flow. All property information in this demo is fictional.",amenities:["4 bedrooms","4 bathrooms","Private courtyard","Fitted kitchen","Guest parking","Gated estate"]},
  {id:5,title:"Cedar Lane Family Home",type:"House",location:"Bodija, Ibadan",city:"Ibadan",price:47500000,beds:3,baths:3,area:220,tag:"Great value",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=80"],subtitle:"Easygoing family living",description:"A sample family home listing for demonstrating search, filtering, and property detail interactions in HomeFind.",amenities:["3 bedrooms","3 bathrooms","Family lounge","Storage space","Parking","Quiet neighbourhood"]},
  {id:6,title:"Sage View Penthouse",type:"Apartment",location:"Victoria Island, Lagos",city:"Victoria Island",price:215000000,beds:3,baths:3,area:205,tag:"Premium",image:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"],subtitle:"Elevated city living",description:"A premium apartment concept showcasing a compact summary, photo gallery and enquiry actions. The details are sample data and are not a verified property offer.",amenities:["3 bedrooms","3 bathrooms","City views","Concierge concept","Gym access","Secure parking"]},
  {id:7,title:"Meadow Park Residence",type:"House",location:"Gwarinpa, Abuja",city:"Abuja",price:79000000,beds:4,baths:3,area:270,tag:"New listing",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"],subtitle:"Room for the whole family",description:"A sample listing for a family residence with practical features and room to grow. Listing data is provided for interface demonstration only.",amenities:["4 bedrooms","3 bathrooms","Garden","Study area","Parking","Estate security"]},
  {id:8,title:"Amber Loft Apartment",type:"Apartment",location:"Yaba, Lagos",city:"Yaba",price:39500000,beds:2,baths:2,area:112,tag:"Great value",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"],subtitle:"Smart use of space",description:"A compact apartment concept that demonstrates how a property marketplace can present smaller homes in a consistent format.",amenities:["2 bedrooms","2 bathrooms","Open-plan lounge","Fitted kitchen","Access control","Nearby transit"]},
  {id:9,title:"Terrace at Greenfield",type:"Duplex",location:"Oluyole, Ibadan",city:"Ibadan",price:62500000,beds:4,baths:3,area:245,tag:"Featured",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"],subtitle:"A fresh take on family space",description:"An illustrative terrace property record for demonstrating how visitors can browse homes across different cities and property types.",amenities:["4 bedrooms","3 bathrooms","Terrace","Family lounge","Parking","Gated compound"]}
];
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(value);
const readStore = (key, fallback) => { try { const v=JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; } };
const saveStore = (key,value) => { try { localStorage.setItem(key,JSON.stringify(value)); } catch {} };
let savedIds = readStore("homefind_saved",[]).filter(id => Number.isInteger(id));
let users = readStore("homefind_users",[]);
let currentUser = readStore("homefind_current_user",null);
let visibleCount = 6;
let activeFilters = {location:"",type:"all",price:"all"};
let lastFocusedElement = null;

function toast(message, type="success") {
  const item=document.createElement("div"); item.className=`toast ${type==="error"?"error":""}`; item.textContent=message;
  $("#toastRegion").append(item); window.setTimeout(()=>item.remove(),3600);
}
function renderProperties() {
  const query=activeFilters.location.trim().toLowerCase();
  let results=properties.filter(p=>{
    const matchesLocation=!query || `${p.location} ${p.city} ${p.title}`.toLowerCase().includes(query);
    const matchesType=activeFilters.type==="all" || p.type===activeFilters.type;
    const matchesPrice=activeFilters.price==="all" || p.price<=Number(activeFilters.price);
    return matchesLocation&&matchesType&&matchesPrice;
  });
  const sort=$("#sortFilter")?.value || "featured";
  if(sort==="price-low") results.sort((a,b)=>a.price-b.price);
  if(sort==="price-high") results.sort((a,b)=>b.price-a.price);
  const shown=results.slice(0,visibleCount);
  $("#resultsCount").textContent=`Showing ${shown.length} of ${results.length} ${results.length===1?"property":"properties"}`;
  $("#propertyGrid").innerHTML=shown.map(cardTemplate).join("");
  $("#emptyState").classList.toggle("hidden",results.length!==0);
  $("#propertyGrid").classList.toggle("hidden",results.length===0);
  $("#loadMoreButton").classList.toggle("hidden",results.length<=visibleCount);
  bindPropertyButtons();
}
function cardTemplate(p) {
  const saved=savedIds.includes(p.id);
  return `<article class="property-card">
    <div class="property-image-wrap">
      <img class="property-image" src="${p.image}" alt="${p.title} property interior" loading="lazy" onerror="this.onerror=null;this.classList.add('image-unavailable');this.alt='Property image unavailable'">
      <span class="property-badge">${p.tag}</span>
      <button class="favorite-btn ${saved?"is-saved":""}" data-favorite="${p.id}" aria-label="${saved?"Remove from":"Add to"} saved properties" aria-pressed="${saved}">${saved?"♥":"♡"}</button>
    </div>
    <div class="property-info">
      <div class="property-location"><span aria-hidden="true">⌖</span>${p.location}</div>
      <div class="property-title-row"><h3 class="property-title">${p.title}</h3><span class="property-price">${compactMoney(p.price)}</span></div>
      <p class="property-subtitle">${p.subtitle}</p>
      <div class="property-meta"><span>▱ ${p.beds} beds</span><span>♧ ${p.baths} baths</span><span>□ ${p.area} m²</span><span class="meta-spacer"></span><button class="details-arrow" data-details="${p.id}" aria-label="View ${p.title} details">↗</button></div>
    </div>
  </article>`;
}
function compactMoney(value){
  if(value >= 1000000000) return `₦${(value/1000000000).toFixed(value % 1000000000 === 0 ? 0 : 1)}bn`;
  if(value >= 1000000) return `₦${(value/1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}m`;
  return money(value);
}
function bindPropertyButtons(){
  $$("[data-favorite]").forEach(btn=>btn.addEventListener("click",()=>toggleFavorite(Number(btn.dataset.favorite))));
  $$("[data-details]").forEach(btn=>btn.addEventListener("click",()=>openProperty(Number(btn.dataset.details))));
  $$(".property-card .property-image").forEach(img=>img.addEventListener("click",()=>{const id=Number(img.closest(".property-card").querySelector("[data-details]").dataset.details);openProperty(id)}));
}
function toggleFavorite(id){
  if(savedIds.includes(id)) {savedIds=savedIds.filter(n=>n!==id);toast("Removed from saved properties.");}
  else {savedIds.push(id);toast("Property saved to your favourites.");}
  saveStore("homefind_saved",savedIds);renderProperties();
}
function openModal(html, wide=false){
  lastFocusedElement=document.activeElement;
  $("#modalContent").innerHTML=html; $("#modalPanel").classList.toggle("modal-wide",wide);
  $("#modalBackdrop").classList.remove("hidden"); document.body.style.overflow="hidden"; $("#modalClose").focus();
}
function closeModal(){ $("#modalBackdrop").classList.add("hidden"); document.body.style.overflow=""; $("#modalContent").innerHTML=""; if(lastFocusedElement?.focus)lastFocusedElement.focus(); }
function openProperty(id){
  const p=properties.find(item=>item.id===id);if(!p)return;
  openModal(`<div class="detail-layout">
    <div><img class="detail-image" src="${p.image}" alt="${p.title}"><div class="detail-thumbs">${p.gallery.map((src,i)=>`<img src="${src}" alt="${p.title} view ${i+1}" loading="lazy">`).join("")}</div></div>
    <div><div class="eyebrow dark-eyebrow">${p.tag.toUpperCase()} · ${p.type.toUpperCase()}</div><h2 class="detail-title" id="modalTitle">${p.title}</h2><div class="property-location">⌖ ${p.location}</div><div class="detail-price">${money(p.price)}</div><p class="detail-description">${p.description}</p><div class="detail-amenities">${p.amenities.map(a=>`<span>✓ ${a}</span>`).join("")}</div><div class="detail-actions"><button class="btn btn-dark" id="contactAgent">Contact agent ↗</button><button class="btn btn-outline" id="detailFavorite">${savedIds.includes(p.id)?"♥ Saved":"♡ Save"}</button></div><p class="form-footnote">Demo listing: property details are illustrative and have not been verified.</p></div>
  </div>`,true);
  $("#contactAgent").addEventListener("click",()=>openContact(p));
  $("#detailFavorite").addEventListener("click",()=>{toggleFavorite(p.id);$("#detailFavorite").textContent=savedIds.includes(p.id)?"♥ Saved":"♡ Save";});
  $$(".detail-thumbs img").forEach(img=>img.addEventListener("click",()=>{$(".detail-image").src=img.src;}));
}
function openContact(p){
  openModal(`<div class="eyebrow dark-eyebrow">PROPERTY ENQUIRY</div><h2 class="modal-heading" id="modalTitle">Ask about this property</h2><p class="modal-intro">Send an enquiry about <strong>${p.title}</strong>. This demo will show a local confirmation; it will not send a real message.</p>
  <form id="contactForm"><div class="form-field"><label for="contactName">Your name</label><input id="contactName" name="name" required placeholder="Enter your name"></div><div class="form-field"><label for="contactEmail">Email address</label><input id="contactEmail" name="email" type="email" required placeholder="you@example.com"></div><div class="form-field"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" rows="3">Hello, I would like to know more about ${p.title}.</textarea></div><button class="btn btn-dark form-submit" type="submit">Submit enquiry ↗</button></form>`);
  $("#contactForm").addEventListener("submit",e=>{e.preventDefault();closeModal();toast("Demo enquiry recorded in this session. No message was sent.");});
}
function authModal(mode="login"){
  const signup=mode==="signup";
  openModal(`<div class="eyebrow dark-eyebrow">WELCOME TO HOMEFIND</div><h2 class="modal-heading" id="modalTitle">${signup?"Create your account":"Welcome back"}</h2><p class="modal-intro">${signup?"Save favourite homes and keep your search organised.":"Log in to continue exploring your saved properties."}</p><p class="demo-note">Frontend demo only: accounts are stored in this browser and are not secure production authentication.</p>
  <form id="authForm">${signup?`<div class="form-field"><label for="authName">Full name</label><input id="authName" name="name" required autocomplete="name" placeholder="Your full name"></div>`:""}<div class="form-field"><label for="authEmail">Email address</label><input id="authEmail" name="email" type="email" required autocomplete="email" placeholder="you@example.com"></div><div class="form-field"><label for="authPassword">Password</label><input id="authPassword" name="password" type="password" required minlength="6" autocomplete="${signup?"new-password":"current-password"}" placeholder="At least 6 characters"></div>${signup?`<div class="form-field"><label for="authRole">I am here to</label><select id="authRole" name="role"><option value="buyer">Find a property</option><option value="agent">List properties (demo)</option></select></div>`:""}<button class="btn btn-dark form-submit" type="submit">${signup?"Create account":"Log in"} ↗</button></form><p class="form-footnote">${signup?"Already have an account?":"New to HomeFind?"} <button class="inline-action" id="switchAuth">${signup?"Log in":"Create an account"}</button></p>`);
  $("#authForm").addEventListener("submit",e=>{
    e.preventDefault();const fd=new FormData(e.currentTarget);const email=String(fd.get("email")).trim().toLowerCase();const password=String(fd.get("password"));
    if(signup){
      if(users.some(u=>u.email===email)){toast("An account with that email already exists in this demo.", "error");return;}
      const user={name:String(fd.get("name")).trim(),email,role:String(fd.get("role")),password};users.push(user);saveStore("homefind_users",users);currentUser={name:user.name,email:user.email,role:user.role};saveStore("homefind_current_user",currentUser);closeModal();updateAuthButtons();toast("Your demo account has been created.");
    }else{
      const user=users.find(u=>u.email===email&&u.password===password);
      if(!user){toast("Account not found. Create a demo account first.", "error");return;}
      currentUser={name:user.name,email:user.email,role:user.role};saveStore("homefind_current_user",currentUser);closeModal();updateAuthButtons();toast(`Welcome back, ${user.name.split(" ")[0]}.`);
    }
  });
  $("#switchAuth").addEventListener("click",()=>authModal(signup?"login":"signup"));
}
function updateAuthButtons(){
  $("#loginButton").textContent=currentUser?"My account":"Log in";
  $("#signupButton").textContent=currentUser?"Log out":"Create account ↗";
}
function openAccount(){
  if(!currentUser){authModal("login");return;}
  const saved=properties.filter(p=>savedIds.includes(p.id));
  openModal(`<div class="eyebrow dark-eyebrow">YOUR HOMEFIND SPACE</div><h2 class="modal-heading" id="modalTitle">Hello, ${escapeHTML(currentUser.name.split(" ")[0])}.</h2><p class="modal-intro">Keep track of the places you have saved while exploring.</p><div class="account-panel"><strong>${escapeHTML(currentUser.name)}</strong><p>${escapeHTML(currentUser.email)} · ${escapeHTML(currentUser.role==="agent"?"Property lister demo":"Home seeker")}</p></div><h3 style="font-family:Manrope;font-size:14px;margin:0 0 12px">Saved properties (${saved.length})</h3><div class="saved-list">${saved.length?saved.map(p=>`<div class="saved-item"><img src="${p.image}" alt=""><div><strong>${p.title}</strong><small>${p.location} · ${compactMoney(p.price)}</small></div><button data-account-detail="${p.id}">View ↗</button></div>`).join(""):`<p class="modal-intro">You have not saved any properties yet. Select the heart on a listing to save it here.</p>`}</div><button class="btn btn-outline form-submit" id="logoutButton" style="margin-top:20px">Log out</button>`,true);
  $$("[data-account-detail]").forEach(btn=>btn.addEventListener("click",()=>openProperty(Number(btn.dataset.accountDetail))));
  $("#logoutButton").addEventListener("click",()=>{currentUser=null;saveStore("homefind_current_user",null);closeModal();updateAuthButtons();toast("You have logged out of the demo.");});
}
function openSaved(){
  const saved=properties.filter(p=>savedIds.includes(p.id));
  openModal(`<div class="eyebrow dark-eyebrow">YOUR SHORTLIST</div><h2 class="modal-heading" id="modalTitle">Saved properties</h2><p class="modal-intro">Your favourite listings are kept in this browser for the demo.</p><div class="saved-list">${saved.length?saved.map(p=>`<div class="saved-item"><img src="${p.image}" alt=""><div><strong>${p.title}</strong><small>${p.location} · ${compactMoney(p.price)}</small></div><button data-saved-detail="${p.id}">View ↗</button></div>`).join(""):`<p class="modal-intro">No saved properties yet. Tap the heart on a listing to add it to your shortlist.</p>`}</div>`,true);
  $$("[data-saved-detail]").forEach(btn=>btn.addEventListener("click",()=>openProperty(Number(btn.dataset.savedDetail))));
}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

$("#searchForm").addEventListener("submit",e=>{e.preventDefault();activeFilters={location:$("#locationInput").value,type:$("#typeFilter").value,price:$("#priceFilter").value};visibleCount=9;renderProperties();$("#properties").scrollIntoView({behavior:"smooth"});});
$("#sortFilter").addEventListener("change",renderProperties);
$$(".quick-search").forEach(btn=>btn.addEventListener("click",()=>{$("#locationInput").value=btn.dataset.location;activeFilters.location=btn.dataset.location;activeFilters.type=$("#typeFilter").value;activeFilters.price=$("#priceFilter").value;visibleCount=9;renderProperties();$("#properties").scrollIntoView({behavior:"smooth"});}));
$("#resetFilters").addEventListener("click",()=>{$("#locationInput").value="";$("#typeFilter").value="all";$("#priceFilter").value="all";$("#sortFilter").value="featured";activeFilters={location:"",type:"all",price:"all"};visibleCount=6;renderProperties();});
$("#loadMoreButton").addEventListener("click",()=>{visibleCount=properties.length;renderProperties();});
$("#viewAllLink").addEventListener("click",e=>{e.preventDefault();activeFilters={location:"",type:"all",price:"all"};$("#locationInput").value="";$("#typeFilter").value="all";$("#priceFilter").value="all";visibleCount=properties.length;renderProperties();});
$("#loginButton").addEventListener("click",()=>currentUser?openAccount():authModal("login"));
$("#signupButton").addEventListener("click",()=>currentUser?(()=>{currentUser=null;saveStore("homefind_current_user",null);updateAuthButtons();toast("You have logged out of the demo.");})():authModal("signup"));
$("#ctaExplore").addEventListener("click",()=>$("#properties").scrollIntoView({behavior:"smooth"}));
$("#footerSaved").addEventListener("click",openSaved);
$("#footerAccount").addEventListener("click",openAccount);
$("#modalClose").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal();});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&!$("#modalBackdrop").classList.contains("hidden")) closeModal();
  if(e.key==="Escape"&&$("#mainNav").classList.contains("is-open")){
    $("#mainNav").classList.remove("is-open");
    $("#menuToggle").setAttribute("aria-expanded","false");
    $("#menuToggle").setAttribute("aria-label","Open navigation");
    $("#menuToggle").focus();
  }
});
$("#menuToggle").addEventListener("click",()=>{const open=$("#mainNav").classList.toggle("is-open");$("#menuToggle").setAttribute("aria-expanded",String(open));$("#menuToggle").setAttribute("aria-label",open?"Close navigation":"Open navigation");});
$$(".nav-link").forEach(link=>link.addEventListener("click",()=>{$("#mainNav").classList.remove("is-open");$("#menuToggle").setAttribute("aria-expanded","false");}));
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#newsletterEmail").value.trim();if(email){toast("Thanks for your interest! Newsletter signup is a frontend demo.");e.currentTarget.reset();}});
$("#year").textContent=new Date().getFullYear();
updateAuthButtons();renderProperties();


// Progressive enhancement: reveal newly rendered property cards gently.
// The page remains fully usable if IntersectionObserver is unavailable.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  const observeCards = () => $$(".property-card:not(.is-visible)").forEach(card => revealObserver.observe(card));
  const grid = $("#propertyGrid");
  if (grid) new MutationObserver(observeCards).observe(grid, { childList: true });
  observeCards();
}

// Close the mobile navigation when a visitor clicks elsewhere on the page.
document.addEventListener("click", event => {
  const nav = $("#mainNav");
  const toggle = $("#menuToggle");
  if (nav && toggle && nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }
});
