import{r as s,h as C,u as M,c as S,a as T,b as j}from"./assets/apple-books-logo-7f18d984.js";import{a as g,i as _}from"./assets/vendor-25a77764.js";const b=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?b.classList.add("active"):b.classList.remove("active")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function L(){window.scrollTo({top:0,behavior:"smooth"})}const v=document.querySelector(".loader");function m(){v.classList.remove("hidden")}function l(){v.classList.add("hidden")}const p="https://books-backend.p.goit.global/books";async function H(){const o=`${p}/category-list`;return(await g.get(o)).data}async function f(){const o=`${p}/top-books`;return(await g.get(o)).data}async function $(o){o=o.trim();const t={category:o},e=`${p}/category`;return(await g.get(e,{params:t})).data}async function E(o){o=o.trim();const t=`${p}/${o}`;return(await g.get(t)).data}let y;function I({_id:o,author:t,contributor:e,title:a,book_image:n,list_name:r}){return y=r,`<li class="book-li-item">
                <button type="button" class="book-item" id="${o}" aria-label="${a} ${e}">
                <div class="book-wrapper">
                <img class="book-img" src="${n}" alt="${a} ${e}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${t}</p>
                </div>
                </button>
            </li>`}function q({books:o}){const t=o.map(I).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${y}</h3>
                    <ul class="books-category-list">`+t+`</ul>
                    <button class="button see-more-btn" data-js="${y}" aria-label="See more">SEE MORE</button>
                </li>`}function A(o){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+o.map(q).join("")+"</ul>"}function h(o){const t=A(o);s.mainContainer.innerHTML=t}function c(o){_.error({title:"Error",message:o})}async function U(){m();try{const o=await f();h(o)}catch(o){c(o)}l()}U();const w=document.querySelector(".categories-list");function O({list_name:o}){return`<li class="category-item"><button type="button" class="category-button" data-category="${o}" aria-label="${o}">${o}</button></li>`}function R(o){const e='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+o.map(O).join("");w.innerHTML=e}async function u(o){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${o}"]`).classList.add("js-current-category")}async function W(o){if(o.preventDefault(),o.target.classList.contains("category-button"))if(s.mainContainer.innerHTML="",u(o.target.dataset.category),o.target.dataset.category==="all categories"){try{const t=await f();m(),h(t),u(o.target.dataset.category),l()}catch(t){c(t)}return}else try{const t=await $(`${o.target.dataset.category}`);s.mainContainer.innerHTML=await B(`${o.target.dataset.category}`,t),u(o.target.dataset.category),l()}catch(t){c(t)}}async function B(o,t){const e=o.split(" ");return` 
    <h2 class="block_books-title"
  >${e.splice(0,e.length/2).join(" ")} <span class="block_books-colortitle">${e.splice(e.length/2,e.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await z(t)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function z(o){return o.map(x).join("")}function x({author:o,book_image:t,title:e,description:a,_id:n,contributor:r}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${n}" aria-label="${e} ${r}">  
    <div class="books_wrapper"> 
    <img class="books_image" src="${t}"  alt="${a}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${e}</p>  
    <p class="books_info-author">${o}</p>  
    </div>
    </button>
    </li>`}async function D(o){if(o.preventDefault(),o.target.classList.contains("see-more-btn")){L();const t=o.target.dataset.js;s.mainContainer.innerHTML="",m();try{const e=await $(`${t}`);s.mainContainer.insertAdjacentHTML("beforeend",await B(`${t}`,e)),u(`${t}`),l()}catch(e){c(e)}}else if(o.target.classList.contains("all-categories_btn")){L(),s.mainContainer.innerHTML="";try{const t=await f();m(),h(t),u("all categories"),l()}catch(t){c(t)}}}const K=()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};o.modalShopigListBtn.addEventListener("click",P),o.openModalBtn.forEach(i=>{i.addEventListener("click",e)}),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",t),document.addEventListener("keydown",n);function t(i){i.target===i.currentTarget&&a()}function e(){o.modal.classList.toggle("is-hidden"),o.modal.classList.toggle("is-open"),o.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",n),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",t)):(r(),d())}function a(){o.modal.classList.add("is-hidden"),r(),d()}function n(i){i.key==="Escape"&&a()}function r(){document.body.classList.remove("no-scroll")}function d(){o.openModalBtn.forEach(i=>{i.removeEventListener("click",e)}),o.closeModalBtn.removeEventListener("click",a),o.modal.removeEventListener("click",t),document.removeEventListener("keydown",n)}};async function P(o){const t=o.target.previousElementSibling.previousElementSibling.firstElementChild.id;console.log(t);const e=await E(t);C(e)}let k;s.booksContainer.addEventListener("click",Q);async function Q(o){if(k=o.target.closest(".book-item"),s.modalWindowContent.innerHTML="",k){s.modalWindow.classList.remove("is-hidden"),K();try{s.body.classList.add("no-scroll");let t=k.id,e=await E(t);Y(e)}catch(t){c(t)}}}function V({book_image:o,contributor:t,description:e,_id:a,title:n,author:r,buy_links:d}){return`<img class="modal-img" src="${o}" alt="${n} ${t}" id="${a}" width="278" height="408">
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
            </div>`}function Y(o){M(!S(o._id));const t=V(o);s.modalWindowContent.insertAdjacentHTML("afterbegin",t)}async function F(){m();try{const o=await H();R(o)}catch(o){c(o)}l()}w.addEventListener("click",W);s.mainContainer.addEventListener("click",D);F();
//# sourceMappingURL=commonHelpers.js.map
