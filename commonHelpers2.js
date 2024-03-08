import{a as y,b as S}from"./assets/apple-books-logo-f870ee45.js";import{P as v}from"./assets/vendor-30319b8a.js";const B="/project-js-TBTE/assets/books-stack-mobile-487658af.png",h="/project-js-TBTE/assets/books-stack-a8e7c57b.png",L=document.querySelector("#pagination"),p="storage-of-books",g=document.querySelector(".shopping-list"),m=document.createElement("li");m.classList.add("empty-message");m.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${B} 767w, 
            ${h} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${h}" 
    alt="Empty Book Stack"  
  />
`;async function b(){try{return await new Promise((o,t)=>{const s=localStorage.getItem(p);o(s?JSON.parse(s):[])})}catch(e){throw console.error("Error getting stored books:",e),e}}function $(e){const{title:o,category:t,list_name:s,author:c,_id:l,buy_links:n,book_image:i}=e,d=document.createElement("div");return d.classList.add("book-card"),d.innerHTML=`
    <div class="card-book">
  <img class="book-cover" src="${i}" alt="${o}" id="${l}" />
  <div class="shopping-list-img-description">
    <h2 class="book-title">${o}</h2>
    <h3 class="book-category">${t}</h3>
    <p class="book-description">${s}</p>
    <p class="book-author">${c}</p>
    <ul class="storage-shops">
      <li class="list-shop">
        <a href="${n[0].url}" target="_blank" class="storage-shop-link">
          <img class="amazon" width="32" height="11"  src="${y}" alt="Shop Logo" />
        </a>
      </li>
      <li class="list-shop">
        <a href="${n[1].url}" target="_blank" class="storage-shop-link">
          <img class="book-shop" width="16" height="16" src="${S}" alt="Shop Logo" />
        </a>
      </li>
    </ul>
    <button class="remove-book-btn" data-book-id="${l}">
      <svg width="38" height="38" class="remove-icon">
        <use href="./images/icons.svg#icon-dump"></use>
      </svg>
    </button>
  </div>
</div>
  `,d}function f(){const e=localStorage.getItem(p);if(e){const o=JSON.parse(e).length;return Number(o)}else return console.log("Значення відсутнє у локальному сховищі."),0}let a=f();console.log("Stored books length:",a);const r=new v(L,{totalItems:a,itemsPerPage:3,visiblePages:3,page:1});console.log(r);document.querySelector(".container-pagination").classList.add("is-hidden");async function k(e,o){try{const t=await b();if(g.innerHTML="",Array.isArray(t)&&t.length>0){console.log(t);const s=(o-1)*3,c=s+3;t.slice(s,c).forEach(n=>{const i=document.createElement("li");i.appendChild($(n)),g.appendChild(i)}),t.length>=4?document.querySelector(".container-pagination").classList.remove("is-hidden"):document.querySelector(".container-pagination").classList.add("is-hidden")}else g.appendChild(m),document.querySelector(".container-pagination").classList.add("is-hidden")}catch(t){console.error("Error rendering books:",t)}}function w(){r.reset(),a=f(),r.setTotalItems(a)}r.on("beforeMove",e=>{const o=e.page;k(a,o),console.log(o)});k(a,1);let u;async function E(e){try{u=(await b()).filter(t=>t._id!==e),localStorage.setItem(p,JSON.stringify(u)),w(),k(a,1)}catch(o){console.error("Error removing book from localStorage:",o)}}const T=document.querySelector(".shopping-list");T.addEventListener("click",async e=>{const o=e.target.closest(".remove-book-btn");if(o){const t=o.getAttribute("data-book-id");console.log("Remove button clicked for book ID:",t),await E(t),r.reset()}});
//# sourceMappingURL=commonHelpers2.js.map
