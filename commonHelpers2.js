import{a as h,b}from"./assets/apple-books-logo-4c193094.js";import"./assets/vendor-25a77764.js";const u="/project-js-TBTE/assets/books-stack-mobile-487658af.png",l="/project-js-TBTE/assets/books-stack-a8e7c57b.png",d="storage-of-books",r=document.querySelector(".shopping-list"),c=document.createElement("div");c.classList.add("empty-message");c.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${u} 767w, 
            ${l} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${l}" 
    alt="Empty Book Stack"  
  />
`;async function g(){try{return await new Promise((s,t)=>{const e=localStorage.getItem(d);s(e?JSON.parse(e):[])})}catch(o){throw console.error("Error getting stored books:",o),o}}async function k(){try{const o=await g();r.innerHTML="",Array.isArray(o)&&o.length>0?o.forEach(s=>{const t=document.createElement("li");t.appendChild(y(s)),r.appendChild(t)}):r.appendChild(c)}catch(o){console.error("Error rendering books:",o)}}function y(o){const{title:s,category:t,list_name:e,author:p,_id:i,buy_links:n,book_image:m}=o,a=document.createElement("div");return a.classList.add("book-card"),a.innerHTML=`
    <div class="card-book">
  <img class="book-cover" src="${m}" alt="${s}" id="${i}" />
  <div class="shopping-list-img-description">
    <h2 class="book-title">${s}</h2>
    <h3 class="book-category">${t}</h3>
    <p class="book-description">${e}</p>
    <p class="book-author">${p}</p>
    <ul class="storage-shops">
      <li class="list-shop">
        <a href="${n[0].url}" target="_blank" class="storage-shop-link">
          <img class="amazon" width="32" height="11"  src="${h}" alt="Shop Logo" />
        </a>
      </li>
      <li class="list-shop">
        <a href="${n[1].url}" target="_blank" class="storage-shop-link">
          <img class="book-shop" width="16" height="16" src="${b}" alt="Shop Logo" />
        </a>
      </li>
    </ul>
    <button class="remove-book-btn" data-book-id="${i}">
      <svg width="38" height="38" class="remove-icon">
        <use href="/images/icons.svg#icon-dump"></use>
      </svg>
    </button>
  </div>
</div>
  `,a}async function f(o){try{const t=(await g()).filter(e=>e._id!=o);localStorage.setItem(d,JSON.stringify(t)),k(t)}catch(s){console.error("Error removing book from localStorage:",s)}}const v=document.querySelector(".shopping-list");v.addEventListener("click",async o=>{const s=o.target.closest(".remove-book-btn");if(s){const t=s.getAttribute("data-book-id");console.log("Remove button clicked for book ID:",t),await f(t)}});k();
//# sourceMappingURL=commonHelpers2.js.map
