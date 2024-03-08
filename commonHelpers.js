import{r as s,h as C,u as M,c as S,a as T,b as j}from"./assets/apple-books-logo-6e028442.js";import{a as g,i as _}from"./assets/vendor-722ab571.js";const b=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?b.classList.add("active"):b.classList.remove("active")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function L(){window.scrollTo({top:0,behavior:"smooth"})}const v=document.querySelector(".loader");function m(){v.classList.remove("hidden")}function l(){v.classList.add("hidden")}const p="https://books-backend.p.goit.global/books";async function H(){const t=`${p}/category-list`;return(await g.get(t)).data}async function f(){const t=`${p}/top-books`;return(await g.get(t)).data}async function $(t){t=t.trim();const o={category:t},e=`${p}/category`;return(await g.get(e,{params:o})).data}async function E(t){t=t.trim();const o=`${p}/${t}`;return(await g.get(o)).data}let y;function I({_id:t,author:o,contributor:e,title:a,book_image:n,list_name:r}){return y=r,`<li class="book-li-item">
                <button type="button" class="book-item" id="${t}" aria-label="${a} ${e}">
                <div class="book-wrapper">
                <img class="book-img" src="${n}" alt="${a} ${e}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${o}</p>
                </div>
                </button>
            </li>`}function q({books:t}){const o=t.map(I).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${y}</h3>
                    <ul class="books-category-list">`+o+`</ul>
                    <button class="button see-more-btn" data-js="${y}" aria-label="See more">SEE MORE</button>
                </li>`}function A(t){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+t.map(q).join("")+"</ul>"}function h(t){const o=A(t);s.mainContainer.innerHTML=o}function c(t){_.error({title:"Error",message:t})}async function U(){m();try{const t=await f();h(t)}catch(t){c(t)}l()}U();const w=document.querySelector(".categories-list");function O(t){return`<li class="category-item"><button type="button" class="category-button" data-category="${t}" aria-label="${t}">${t}</button></li>`}function R(t){const e='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+t.map(O).join("");w.innerHTML=e}async function u(t){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${t}"]`).classList.add("js-current-category")}async function W(t){if(t.preventDefault(),t.target.classList.contains("category-button"))if(s.mainContainer.innerHTML="",u(t.target.dataset.category),t.target.dataset.category==="all categories"){try{const o=await f();m(),h(o),u(t.target.dataset.category),l()}catch(o){c(o)}return}else try{const o=await $(`${t.target.dataset.category}`);s.mainContainer.innerHTML=await B(`${t.target.dataset.category}`,o),u(t.target.dataset.category),l()}catch(o){c(o)}}async function B(t,o){const e=t.split(" ");return` 
    <h2 class="block_books-title"
  >${e.splice(0,e.length/2).join(" ")} <span class="block_books-colortitle">${e.splice(e.length/2,e.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await z(o)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function z(t){return t.map(x).join("")}function x({author:t,book_image:o,title:e,description:a,_id:n,contributor:r}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${n}" aria-label="${e} ${r}">  
    <div class="books_wrapper"> 
    <img class="books_image" src="${o}"  alt="${a}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${e}</p>  
    <p class="books_info-author">${t}</p>  
    </div>
    </button>
    </li>`}async function D(t){if(t.preventDefault(),t.target.classList.contains("see-more-btn")){L();const o=t.target.dataset.js;s.mainContainer.innerHTML="",m();try{const e=await $(`${o}`);s.mainContainer.insertAdjacentHTML("beforeend",await B(`${o}`,e)),u(`${o}`),l()}catch(e){c(e)}}else if(t.target.classList.contains("all-categories_btn")){L(),s.mainContainer.innerHTML="";try{const o=await f();m(),h(o),u("all categories"),l()}catch(o){c(o)}}}const K=()=>{const t={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};t.modalShopigListBtn.addEventListener("click",P),t.openModalBtn.forEach(i=>{i.addEventListener("click",e)}),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",o),document.addEventListener("keydown",n);function o(i){i.target===i.currentTarget&&a()}function e(){t.modal.classList.toggle("is-hidden"),t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",n),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",o)):(r(),d())}function a(){t.modal.classList.add("is-hidden"),r(),d()}function n(i){i.key==="Escape"&&a()}function r(){document.body.classList.remove("no-scroll")}function d(){t.openModalBtn.forEach(i=>{i.removeEventListener("click",e)}),t.closeModalBtn.removeEventListener("click",a),t.modal.removeEventListener("click",o),document.removeEventListener("keydown",n)}};async function P(t){const o=t.target.previousElementSibling.previousElementSibling.firstElementChild.id,e=await E(o);C(e)}let k;s.booksContainer.addEventListener("click",Q);async function Q(t){if(k=t.target.closest(".book-item"),s.modalWindowContent.innerHTML="",k){s.modalWindow.classList.remove("is-hidden"),K();try{s.body.classList.add("no-scroll");let o=k.id,e=await E(o);Y(e)}catch(o){c(o)}}}function V({book_image:t,contributor:o,description:e,_id:a,title:n,author:r,buy_links:d}){return`<img class="modal-img" src="${t}" alt="${n} ${o}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${n}</h2>
                <h3 class="modal-book-author">${r}</h3>
                <p class="modal-book-desc">${e}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${d[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${T}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${d[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${j}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function Y(t){M(!S(t._id));const o=V(t);s.modalWindowContent.insertAdjacentHTML("afterbegin",o)}async function F(){m();try{const o=(await H()).map(e=>e.list_name).toSorted();R(o)}catch(t){c(t)}l()}w.addEventListener("click",W);s.mainContainer.addEventListener("click",D);F();
//# sourceMappingURL=commonHelpers.js.map
