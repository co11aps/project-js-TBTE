import"./assets/dark-theme-11e956bf.js";const u="storage-of-books";JSON.parse(localStorage.getItem(u));const y="/project-js-TBTE/assets/books-stack-mobile-487658af.png",l="/project-js-TBTE/assets/books-stack-a8e7c57b.png",d="storage-of-books",c=document.querySelector(".shopping-list"),n=document.createElement("div");n.classList.add("empty-message");n.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${y} 767w, 
            ${l} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${l}" 
    alt="Empty Book Stack"  
  />
`;async function k(){try{return await new Promise((s,e)=>{const t=localStorage.getItem(d);s(t?JSON.parse(t):[])})}catch(o){throw console.error("Error getting stored books:",o),o}}async function g(){try{const o=await k();c.innerHTML="",Array.isArray(o)&&o.length>0?o.forEach(s=>{const e=document.createElement("li");e.appendChild(v(s)),c.appendChild(e)}):c.appendChild(n)}catch(o){console.error("Error rendering books:",o)}}function v(o){const{title:s,category:e,description:t,author:p,_id:i,buy_links:r,book_image:m}=o,a=document.createElement("div");return a.classList.add("book-card"),a.innerHTML=`
    <div class="card-book">
      <img
        class="book-cover"
        src="${m}"
        alt="${s}"
        id="${i}"
      />
      <div class="shopping-list-img-description">
        <h2 class="book-title">${s}</h2>
        <h3 class="book-category">${e}</h3>
        <p class="book-description">${t}</p>
        <p class="book-author">${p}</p>
         <ul class="storage-shops">
          ${r&&Array.isArray(r)?r.map((b,h)=>`
              <li class="list-shop">
                <a href="${b.url}" target="_blank" class="modal-shop-link">
                  <img class="list-book-shop" src="${h===0?amazonLogo:appleBooksLogo}" alt="Shop Logo" /></a>
              </li>`).join(""):""} </ul>
        <button class="remove-book-btn" data-book-id="${i}">
          <svg width="38" height="38" class="remove-icon">
            <use href="/images/icons.svg#icon-dump"></use>
          </svg>
        </button>
      </div>
    </div>
  `,a}async function f(o){try{const e=(await k()).filter(t=>t._id!=o);localStorage.setItem(d,JSON.stringify(e)),g(e)}catch(s){console.error("Error removing book from localStorage:",s)}}const S=document.querySelector(".shopping-list");S.addEventListener("click",async o=>{const s=o.target.closest(".remove-book-btn");if(s){const e=s.getAttribute("data-book-id");console.log("Remove button clicked for book ID:",e),await f(e)}});g();
//# sourceMappingURL=commonHelpers2.js.map
