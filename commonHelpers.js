import"./assets/active-page-link-3e1ebfed.js";import{a as n}from"./assets/vendor-4af391ac.js";const r="https://books-backend.p.goit.global/books";async function l(){const o=`${r}/category-list`;return(await n.get(o)).data}async function u(){const o=`${r}/top-books`;return(await n.get(o)).data}let s;const k=document.querySelector(".main-content");function p({_id:o,author:t,contributor:e,title:a,book_image:c,list_name:i}){return s=i,`<li class="book-item" id="${o}">
                <div class="book-wrapper">
                <img class="book-img" src="${c}" alt="${a} ${e}">
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${t}</p>
                </div>
            </li>`}function m({books:o}){const t=o.map(p).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${s}</h3>
                    <ul class="books-category-list">`+t+`</ul>
                    <button class="button see-more-btn" data-category-home="${s}">See More</button>
                </li>`}function g(o){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+o.map(m).join("")+"</ul>"}function b(o){const t=g(o);k.innerHTML=t}const d=document.querySelector(".categories-list");function y({list_name:o}){return`<li class="category-item">
          <a href="${o}" class="category-link">${o}</a>
          </li>`}function f(o){console.log(o);const e='<li class="category-item js-current-category" data-category="all categories"><a href="./index.html" class="category-link">All categories</a> </li>'+o.map(y).join("");d.innerHTML=e}async function h(){const o=await u();b(o)}async function $(){const o=await l();f(o)}$();h();
//# sourceMappingURL=commonHelpers.js.map
