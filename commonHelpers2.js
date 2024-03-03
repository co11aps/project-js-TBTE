import"./assets/buttom-switch-7aa7b941.js";const n="storage-of-books";JSON.parse(localStorage.getItem(n));const c="storage-of-books",r=document.querySelector(".shopping-list"),s=document.createElement("div");s.classList.add("empty-message");s.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img src="images/books-stack-mobile.png" alt="Empty Book Stack" />
`;async function i(){try{return await new Promise((e,t)=>{const a=localStorage.getItem(c);e(a?JSON.parse(a):[])})}catch(o){throw console.error("Error getting stored books:",o),o}}async function d(){try{const o=await i();r.innerHTML="",o.length>0?o.forEach(e=>{const t=document.createElement("li");t.appendChild(l(e)),r.appendChild(t)}):r.appendChild(s)}catch(o){console.error("Error rendering books:",o)}}function l(o){const e=document.createElement("div");return e.classList.add("book-card"),e.innerHTML=`
    <img class="book-cover" src="${o.image}" alt="${o.title} />
    <div class="book-details">
      <h2 class="book-title">${o.title}</h2>
      <p class="book-category">${o.bookCategory}</p>
      <p class="book-description">${o.title}</p>
      <p class="book-author">${o.author}</p>
      <div class="book-links">
        ${p(o.marketplaces)}
      </div>
      <button class="remove-book-btn" onclick="removeBook('${o._id}')">R</button>
    </div>
  `,e}function p(o){return o&&Array.isArray(o)&&o.length?o.map(e=>`<a href="${e}" target="_blank">${e}</a>`).join(""):""}d();
//# sourceMappingURL=commonHelpers2.js.map
