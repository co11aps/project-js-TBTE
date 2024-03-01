import"./assets/active-page-link-5e7c9dee.js";import{a as l}from"./assets/vendor-4af391ac.js";const i="https://books-backend.p.goit.global/books";async function c(){const o=`${i}/top-books`;return(await l.get(o)).data}let e;const k=document.querySelector(".main-content");function u({_id:o,author:t,contributor:s,title:a,book_image:n,list_name:r}){return e=r,`<li class="book-item" id="${o}">
                <div class="book-wrapper">
                <img class="book-img" src="${n}" alt="${a} ${s}">
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${t}</p>
                </div>
            </li>`}function p({books:o}){const t=o.map(u).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${e}</h3>
                    <ul class="books-category-list">`+t+`</ul>
                    <button class="button see-more-btn" data-category-home="${e}">See More</button>
                </li>`}function m(o){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+o.map(p).join("")+"</ul>"}function b(o){const t=m(o);k.innerHTML=t}async function d(){const o=await c();b(o)}d();
//# sourceMappingURL=commonHelpers.js.map
