import"./assets/mobile-menu-352624be.js";const l="storage-of-books";JSON.parse(localStorage.getItem(l));const c="storage-of-books",a=document.querySelector(".shopping-list"),r=document.createElement("div");r.classList.add("empty-message");r.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
<img 
  class="book-stack-image"
  srcset="/images/books-stack-mobile.png 767w, 
          /images/books-stack.png 768w" 
  sizes="(max-width: 767px) 265px, 100vw" 
  src="/images/books-stack-mobile.png" 
  alt="Empty Book Stack"  
/>
`;async function i(){try{const o=await new Promise((e,t)=>{const s=localStorage.getItem(c);e(s?JSON.parse(s):[])});return console.log("Stored books:",o),o}catch(o){throw console.error("Error getting stored books:",o),o}}async function n(){try{const o=await i();a.innerHTML="",Array.isArray(o)&&o.length>0?o.forEach(e=>{const t=document.createElement("li");t.appendChild(d(e)),a.appendChild(t)}):a.appendChild(r)}catch(o){console.error("Error rendering books:",o)}}function d(o){const e=document.createElement("div");return e.classList.add("book-card"),e.innerHTML=`
    <ul class="card-list">
      <li class="card-book">
        <div class="information-card">
          <div>
            <img class="book-cover" src="${o.image}" alt="${o.title}" />
          </div>
          <div class="data-or-books-container" >
            <h2 class="book-title">${o.title}</h2>
            <h3 class="book-category">${o.bookCategory}</h3>
            <p class="book-description">${o.title}</p>
            <p class="book-author">${o.author}</p>
            <ul class="market-place-list">
              <li class="market-link" width="32" height="11">
                <img class="market-image" src="/images/amazon-logo.png" alt="Marketplace-Image">
              </li>
              <li class="market-link" width="16" height="16">
                <img class="market-image" src="/images/apple-books-logo.png" alt="Marketplace-Image">
              </li>
            </ul>
            <button class="remove-book-btn" data-book-id="${o._id}">
              <svg width="38" height="38" class="remove-icon">
                <use href="/images/icons.svg#icon-dump"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
  `,e}async function g(o){try{const t=(await i()).filter(s=>s._id!=o);localStorage.setItem(c,JSON.stringify(t)),n(t)}catch(e){console.error("Error removing book from localStorage:",e)}}const m=document.querySelector(".shopping-list");m.addEventListener("click",async o=>{const e=o.target.closest(".remove-book-btn");if(e){const t=e.getAttribute("data-book-id");console.log("Remove button clicked for book ID:",t),await g(t)}});n();
//# sourceMappingURL=commonHelpers2.js.map
