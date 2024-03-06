import{h as S,u as C,c as T,a as j,b as q}from"./assets/apple-books-logo-4752b1e4.js";import{a as g,i as _}from"./assets/vendor-25a77764.js";const y=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?y.classList.add("active"):y.classList.remove("active")});y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function L(){window.scrollTo({top:0,behavior:"smooth"})}const v=document.querySelector(".loader");function m(){v.classList.remove("hidden")}function i(){v.classList.add("hidden")}const p="https://books-backend.p.goit.global/books";async function H(){const o=`${p}/category-list`;return(await g.get(o)).data}async function f(){const o=`${p}/top-books`;return(await g.get(o)).data}async function $(o){o=o.trim();const t={category:o},e=`${p}/category`;return(await g.get(e,{params:t})).data}async function E(o){o=o.trim();const t=`${p}/${o}`;return(await g.get(t)).data}let b;const c=document.querySelector(".main-content");function I({_id:o,author:t,contributor:e,title:a,book_image:s,list_name:l}){return b=l,`<li class="book-li-item">
                <button type="button" class="book-item" id="${o}" aria-label="${a} ${e}">
                <div class="book-wrapper">
                <img class="book-img" src="${s}" alt="${a} ${e}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${t}</p>
                </div>
                </button>
            </li>`}function A({books:o}){const t=o.map(I).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${b}</h3>
                    <ul class="books-category-list">`+t+`</ul>
                    <button class="button see-more-btn" data-js="${b}" aria-label="See more">SEE MORE</button>
                </li>`}function U(o){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+o.map(A).join("")+"</ul>"}function h(o){const t=U(o);c.innerHTML=t}function r(o){_.error({title:"Error",message:o})}async function O(){m();try{const o=await f();h(o)}catch(o){r(o)}i()}O();const w=document.querySelector(".categories-list");function R({list_name:o}){return`<li class="category-item" data-category="${o}">${o}</li>`}function z(o){const e='<li class="category-item js-current-category" data-category="all categories">All categories</li>'+o.map(R).join("");w.innerHTML=e}async function u(o){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`li[data-category="${o}"]`).classList.add("js-current-category")}async function W(o){if(o.preventDefault(),o.target.classList.contains("category-item"))if(c.innerHTML="",u(o.target.dataset.category),o.target.dataset.category==="all categories"){try{const t=await f();m(),h(t),u(o.target.dataset.category),i()}catch(t){r(t)}return}else try{const t=await $(`${o.target.dataset.category}`);c.innerHTML=await B(`${o.target.dataset.category}`,t),u(o.target.dataset.category),i()}catch(t){r(t)}}async function B(o,t){const e=o.split(" ");return` 
    <h2 class="block_books-title"
  >${e.splice(0,e.length/2).join(" ")} <span class="block_books-colortitle">${e.splice(e.length/2,e.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await x(t)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function x(o){return o.map(D).join("")}function D({author:o,book_image:t,title:e,description:a,_id:s}){return`<li class="book-item" id=${s} >  
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
    </li>`}async function K(o){if(o.preventDefault(),o.target.classList.contains("see-more-btn")){L();const t=o.target.dataset.js;c.innerHTML="",m();try{const e=await $(`${t}`);c.insertAdjacentHTML("beforeend",await B(`${t}`,e)),u(`${t}`),i()}catch(e){r(e)}}else if(o.target.classList.contains("all-categories_btn")){L(),c.innerHTML="";try{const t=await f();m(),h(t),u("all categories"),i()}catch(t){r(t)}}}const P=()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};o.modalShopigListBtn.addEventListener("click",Q),o.openModalBtn.forEach(n=>{n.addEventListener("click",e)}),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",t),document.addEventListener("keydown",s);function t(n){n.target===n.currentTarget&&a()}function e(){o.modal.classList.toggle("is-hidden"),o.modal.classList.toggle("is-open"),o.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",s),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",t)):(l(),d())}function a(){o.modal.classList.add("is-hidden"),l(),d()}function s(n){n.key==="Escape"&&a()}function l(){document.body.classList.remove("no-scroll")}function d(){o.openModalBtn.forEach(n=>{n.removeEventListener("click",e)}),o.closeModalBtn.removeEventListener("click",a),o.modal.removeEventListener("click",t),document.removeEventListener("keydown",s)}};async function Q(o){const t=o.target.previousElementSibling.firstElementChild.id;console.log(t);const e=await E(t);S(e)}const V=document.querySelector(".main-content"),Y=document.querySelector(".backdrop-pop-up"),M=document.querySelector(".modal-pop-up-content"),F=document.querySelector("body");let k;V.addEventListener("click",G);async function G(o){if(k=o.target.closest(".book-item"),M.innerHTML="",k){Y.classList.remove("is-hidden"),P();try{F.classList.add("no-scroll");let t=k.id,e=await E(t);N(e)}catch(t){r(t)}}}function J({book_image:o,contributor:t,description:e,_id:a,title:s,author:l,buy_links:d}){return`<img class="modal-img" src="${o}" alt="${s} ${t}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${s}</h2>
                <h3 class="modal-book-author">${l}</h3>
                <p class="modal-book-desc">${e}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${d[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${j}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${d[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${q}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function N(o){C(!T(o._id));const t=J(o);M.insertAdjacentHTML("afterbegin",t)}async function X(){m();try{const o=await H();z(o)}catch(o){r(o)}i()}w.addEventListener("click",W);c.addEventListener("click",K);X();
//# sourceMappingURL=commonHelpers.js.map
