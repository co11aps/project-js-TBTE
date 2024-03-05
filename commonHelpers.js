import{h as w,u as M,c as B}from"./assets/storage-eae902fb.js";import{a as f,i as v}from"./assets/vendor-25a77764.js";const I=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?I.classList.add("active"):I.classList.remove("active")});I.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function k(){window.scrollTo({top:0,behavior:"smooth"})}const C=document.querySelector(".loader");function g(){C.classList.remove("hidden")}function l(){C.classList.add("hidden")}const y="https://books-backend.p.goit.global/books";async function S(){const o=`${y}/category-list`;return(await f.get(o)).data}async function H(){const o=`${y}/top-books`;return(await f.get(o)).data}async function E(o){o=o.trim();const e={category:o},t=`${y}/category`;return(await f.get(t,{params:e})).data}async function h(o){o=o.trim();const e=`${y}/${o}`;return(await f.get(e)).data}let u;const c=document.querySelector(".main-content");function Z({_id:o,author:e,contributor:t,title:a,book_image:s,list_name:r}){return u=r,`<li class="book-item" id="${o}">
                <div class="book-wrapper">
                <img class="book-img" src="${s}" alt="${a} ${t}" width="335" height="485">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${e}</p>
                </div>
            </li>`}function U({books:o}){const e=o.map(Z).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${u}</h3>
                    <ul class="books-category-list">`+e+`</ul>
                    <button class="button see-more-btn" data-js="${u}">SEE MORE</button>
                </li>`}function T(o){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+o.map(U).join("")+"</ul>"}function p(o){const e=T(o);c.innerHTML=e}function i(o){v.error({title:"Error",message:o})}async function Q(){g();try{const o=await H();p(o)}catch(o){i(o)}l()}Q();const b=document.querySelector(".categories-list");function R({list_name:o}){return`<li class="category-item" data-category="${o}">${o}</li>`}function j(o){const t='<li class="category-item js-current-category" data-category="all categories">All categories</li>'+o.map(R).join("");b.innerHTML=t}async function d(o){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`li[data-category="${o}"]`).classList.add("js-current-category")}async function V(o){if(o.preventDefault(),o.target.classList.contains("category-item"))if(c.innerHTML="",d(o.target.dataset.category),o.target.dataset.category==="all categories"){try{const e=await H();g(),p(e),d(o.target.dataset.category),l()}catch(e){i(e)}return}else try{const e=await E(`${o.target.dataset.category}`);c.innerHTML=await L(`${o.target.dataset.category}`,e),d(o.target.dataset.category),l()}catch(e){i(e)}}async function L(o,e){const t=o.split(" ");return` 
    <h2 class="block_books-title"
  >${t.splice(0,t.length/2).join(" ")} <span class="block_books-colortitle">${t.splice(t.length/2,t.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await X(e)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function X(o){return o.map(D).join("")}function D({author:o,book_image:e,title:t,description:a,_id:s}){return`<li class="book-item" id=${s} >  
    <div class="books_wrapper"> 
    <img class="books_image" src="${e}"  alt="${a}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${t}</p>  
    <p class="books_info-author">${o}</p>  
    </div>  
    </li>`}async function Y(o){if(o.preventDefault(),o.target.classList.contains("see-more-btn")){k();const e=o.target.dataset.js;c.innerHTML="",g();try{const t=await E(`${e}`);c.insertAdjacentHTML("beforeend",await L(`${e}`,t)),d(`${e}`),l()}catch(t){i(t)}}else if(o.target.classList.contains("all-categories_btn")){k(),c.innerHTML="";try{const e=await H();g(),p(e),d("all categories"),l()}catch(e){i(e)}}}const O=()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};o.modalShopigListBtn.addEventListener("click",K),o.openModalBtn.forEach(n=>{n.addEventListener("click",t)}),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",e),document.addEventListener("keydown",s);function e(n){n.target===n.currentTarget&&a()}function t(){o.modal.classList.toggle("is-hidden"),o.modal.classList.toggle("is-open"),o.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",s),o.closeModalBtn.addEventListener("click",a),o.modal.addEventListener("click",e)):(r(),A())}function a(){o.modal.classList.add("is-hidden"),r(),A()}function s(n){n.key==="Escape"&&a()}function r(){document.body.classList.remove("no-scroll")}function A(){o.openModalBtn.forEach(n=>{n.removeEventListener("click",t)}),o.closeModalBtn.removeEventListener("click",a),o.modal.removeEventListener("click",e),document.removeEventListener("keydown",s)}};async function K(o){const e=o.target.previousElementSibling.firstElementChild.id;console.log(e);const t=await h(e);w(t)}const q="data:image/png;base64,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",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOBSURBVHgB7VdLaBRBEH3Vm2QUo1HxRwwSc0jUgx9UFBRB3Ysiinrw5FHPgiiK4E3EP3hSUMSj4kVQRMQcRESIYOIlgpIoYmJiovn4ySYzXdbO7uxOz28nEG+p0Dvd1a+737yq7p4A01YwSurku1YztL0VRAvAsARNSGssf8AENPdAZ9royHgnJkOCb1stTPqeTLMGU2bURVpl6chYd6gnROBmzQpW/Fq66ooeRHON8yfibKmtF1Xe+REqNITwRH7q3LFccJTr/hLnT8RVscZ9ZpO9QcK+UXOANTVKAaQEn16dA31xvkg8U4tzM7MrlgRxZjtiCHCADCLaUYSj+gg1u/3rVhkkNDe5SjFMq54Natoj6FnScIDhbvCXVhngewcZRku3AbObgEwN8OcbuL8N+NVrYPJzE+n6WBLSbUEHPBtPgdYeA6w5pr/vDfTTw8DIZ6C2ASp7C2jYZmJyQ+C2C+CO67I4l1/OoVo/zgiHtpXyy0eN+0CbzoYIuLZ4Ayh7B3nSau/DEAHXrLmgredFxYNGWLSmDGKV8LLZs1kNSDKq3wyuWwnMX5mIw4wlBQLGQnEkHCpB3BqnOAfmr66MyUdCk5cSZi4hQgnmMpG81JVpVFVEuHPmd4fnoKQZXMnIIFV5AaQAFef2pEgmoXwoTheOVBiUT063nZQThhKUSglMRgnPzM0RTEyYUqV5S50So+O7DRLM5tvTFCrBPrKUGA5WZrzSLKBTYIq7w9+MJ6EDCF+dx4aAga78wS93xLpojD0O/BDM32FgUTNo5rxiBwI5kZyYXBrkbZCv7dCPToN73krDKTjlOFabj0LtPFlSS7degX59Qwj8dIm6awlZtf96cWf4X848rAxhJs4seCaubGnm2oVyGw7lLxVExUbtOCU35QfQ3GXQL68FeotTy1cMZshHWm7E18fPq88NZiOVEB1GCylRnGBkIDypz3TrZaBxC7j9gTAKfaR5VEWd0eD4nL8RTMweTpNoJRYC/vhCKhn5FilrVbojAm3vKVH/BJNm2WytHpfil7oo98k+HwcwHHiSQ60IkCwLIe2JE4s6ZeIW/CdjUcG61LcccUrkeY47OCSUbXe7Tn0ZkWt8d5BYKJtqr/Z3/M6hWWTpmnxo4ov8djDRJutib+g/scSDP3d8yaoMYwPbVA/F1ZissRoncr47GfuVdWXwPaatgv0DKz/i8wlwU7gAAAAASUVORK5CYII=",x=document.querySelector(".main-content"),W=document.querySelector(".backdrop-pop-up"),P=document.querySelector(".modal-pop-up-content");document.querySelector("body");let m;x.addEventListener("click",$);async function $(o){if(m=o.target.closest(".book-item"),P.innerHTML="",m){W.classList.remove("is-hidden"),O();try{let e=m.id,t=await h(e);N(t)}catch(e){i(e)}}}function z({book_image:o,contributor:e,description:t,_id:a,title:s,author:r,buy_links:A}){return`<img class="modal-img" src="${o}" alt="${s} ${e}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${s}</h2>
                <h3 class="modal-book-author">${r}</h3>
                <p class="modal-book-desc">${t}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${A[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${q}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${A[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${F}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function N(o){M(!B(o._id));const e=z(o);P.insertAdjacentHTML("afterbegin",e)}async function G(){g();try{const o=await S();j(o)}catch(o){i(o)}l()}b.addEventListener("click",V);c.addEventListener("click",Y);G();
//# sourceMappingURL=commonHelpers.js.map
