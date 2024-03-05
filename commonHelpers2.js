import"./assets/dark-theme-fa88a2e5.js";import"./assets/vendor-25a77764.js";const u="storage-of-books";JSON.parse(localStorage.getItem(u));const y="/project-js-TBTE/assets/books-stack-mobile-487658af.png",l="/project-js-TBTE/assets/books-stack-a8e7c57b.png",d="storage-of-books",c=document.querySelector(".shopping-list"),i=document.createElement("div");i.classList.add("empty-message");i.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${y} 767w, 
            ${l} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${l}" 
    alt="Empty Book Stack"  
  />
`;async function k(){try{return await new Promise((s,t)=>{const e=localStorage.getItem(d);s(e?JSON.parse(e):[])})}catch(o){throw console.error("Error getting stored books:",o),o}}async function p(){try{const o=await k();c.innerHTML="",Array.isArray(o)&&o.length>0?o.forEach(s=>{const t=document.createElement("li");t.appendChild(v(s)),c.appendChild(t)}):c.appendChild(i)}catch(o){console.error("Error rendering books:",o)}}function v(o){const{title:s,category:t,description:e,author:g,_id:n,buy_links:r,book_image:m}=o,a=document.createElement("div");return a.classList.add("book-card"),a.innerHTML=`
    <div class="card-book">
      <img
        class="book-cover"
        src="${m}"
        alt="${s}"
        id="${n}"
      />
      <div class="shopping-list-img-description">
        <h2 class="book-title">${s}</h2>
        <h3 class="book-category">${t}</h3>
        <p class="book-description">${e}</p>
        <p class="book-author">${g}</p>
         <ul class="storage-shops">
          ${r&&Array.isArray(r)?r.map((b,h)=>`
              <li class="list-shop">
                <a href="${b.url}" target="_blank" class="modal-shop-link">
                  <img class="list-book-shop" src="${h===0?amazonLogo:appleBooksLogo}" alt="Shop Logo" /></a>
              </li>`).join(""):""} </ul>
        <button class="remove-book-btn" data-book-id="${n}">
          <svg width="38" height="38" class="remove-icon">
            <use href="/images/icons.svg#icon-dump"></use>
          </svg>
        </button>
      </div>
    </div>
  `,a}async function f(o){try{const t=(await k()).filter(e=>e._id!=o);localStorage.setItem(d,JSON.stringify(t)),p(t)}catch(s){console.error("Error removing book from localStorage:",s)}}const S=document.querySelector(".shopping-list");S.addEventListener("click",async o=>{const s=o.target.closest(".remove-book-btn");if(s){const t=s.getAttribute("data-book-id");console.log("Remove button clicked for book ID:",t),await f(t)}});p();
//# sourceMappingURL=commonHelpers2.js.map
