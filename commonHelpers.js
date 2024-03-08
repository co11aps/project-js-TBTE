import{r as n,h as S,u as T,c as j,a as _,b as H}from"./assets/apple-books-logo-a850551a.js";import{a as g,i as y}from"./assets/vendor-722ab571.js";const b=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?b.classList.add("active"):b.classList.remove("active")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function v(){window.scrollTo({top:0,behavior:"smooth"})}const $=document.querySelector(".loader");function m(){$.classList.remove("hidden")}function d(){$.classList.add("hidden")}const p="https://books-backend.p.goit.global/books";async function q(){const t=`${p}/category-list`;return(await g.get(t)).data}async function h(){const t=`${p}/top-books`;return(await g.get(t)).data}async function w(t){t=t.trim();const o={category:t},e=`${p}/category`;return(await g.get(e,{params:o})).data}async function E(t){t=t.trim();const o=`${p}/${t}`;return(await g.get(o)).data}let f;function I({_id:t,author:o,contributor:e,title:a,book_image:s,list_name:r}){return f=r,`<li class="book-li-item">
                <button type="button" class="book-item" id="${t}" aria-label="${a} ${e}">
                <div class="book-wrapper">
                <img class="book-img" src="${s}" alt="${a} ${e}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${o}</p>
                </div>
                </button>
            </li>`}function A({books:t}){const o=t.map(I).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${f}</h3>
                    <ul class="books-category-list">`+o+`</ul>
                    <button class="button see-more-btn" data-js="${f}" aria-label="See more">SEE MORE</button>
                </li>`}function U(t){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+t.map(A).join("")+"</ul>"}function L(t){const o=U(t);n.mainContainer.innerHTML=o}function l(t){y.error({title:"Error",message:t})}async function W(){m();try{const t=await h();L(t)}catch(t){l(t)}d()}W();const B=document.querySelector(".categories-list");function x(t){return`<li class="category-item"><button type="button" class="category-button" data-category="${t}" aria-label="${t}">${t}</button></li>`}function R(t){const e='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+t.map(x).join("");B.innerHTML=e}async function u(t){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${t}"]`).classList.add("js-current-category")}async function z(t){if(t.preventDefault(),t.target.classList.contains("category-button"))if(n.mainContainer.innerHTML="",u(t.target.dataset.category),t.target.dataset.category==="all categories"){try{const o=await h();m(),L(o),u(t.target.dataset.category),d()}catch(o){l(o)}return}else try{const o=await w(`${t.target.dataset.category}`);n.mainContainer.innerHTML=await C(`${t.target.dataset.category}`,o),u(t.target.dataset.category),d()}catch(o){l(o)}}async function C(t,o){const e=t.split(" ");return` 
    <h2 class="block_books-title"
  >${e.splice(0,e.length/2).join(" ")} <span class="block_books-colortitle">${e.splice(e.length/2,e.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await O(o)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function O(t){return t.map(D).join("")}function D({author:t,book_image:o,title:e,description:a,_id:s,contributor:r}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${s}" aria-label="${e} ${r}">  
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
    </li>`}async function K(t){if(t.preventDefault(),t.target.classList.contains("see-more-btn")){v();const o=t.target.dataset.js;n.mainContainer.innerHTML="",m();try{const e=await w(`${o}`);n.mainContainer.insertAdjacentHTML("beforeend",await C(`${o}`,e)),u(`${o}`),d()}catch(e){l(e)}}else if(t.target.classList.contains("all-categories_btn")){v(),n.mainContainer.innerHTML="";try{const o=await h();m(),L(o),u("all categories"),d()}catch(o){l(o)}}}const M=document.querySelector(".js-search"),P=document.querySelector(".search-city"),V=document.getElementById("js-info-weather-city");M.addEventListener("submit",Q);async function Q(t){t.preventDefault();const o=t.target.elements.city.value.trim()||"";try{const e=await F(o),a=e.location.country,s=e.current.condition.icon,r=e.current.temp_c,c=e.current.condition.text,i=`
                <h2 class="country-city-title">${a}, ${o}</h2>
                <img class="weather-city-image" src="${s}" alt="${c}">
                <p class="weather-city-info">Temperature: ${Math.floor(r)} &deg;C</p>
                <p class="weather-city-info">${c}</p>
        `;V.innerHTML=i,(r<0||c.toLowerCase().includes("cloudy")||c.toLowerCase().includes("rain"))&&y.info({title:"Reading Weather",message:"The weather is perfect for reading a book!",position:"center",timeout:1e4,messageColor:"blue",backgroundColor:"yellow",messageSize:"32px"}),t.target.elements.city.value="",P.blur()}catch(e){y.error({title:"Error",message:e.message})}M.reset()}async function F(t){const o="https://api.weatherapi.com/v1";return await(await g.get(`${o}/current.json`,{params:{key:"14c56bddeab14583a6e164909231107",q:t,lang:"en"}})).data}const Y=()=>{const t={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};t.modalShopigListBtn.addEventListener("click",G),t.openModalBtn.forEach(i=>{i.addEventListener("click",e)}),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",o),document.addEventListener("keydown",s);function o(i){i.target===i.currentTarget&&a()}function e(){t.modal.classList.toggle("is-hidden"),t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",s),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",o)):(r(),c())}function a(){t.modal.classList.add("is-hidden"),r(),c()}function s(i){i.key==="Escape"&&a()}function r(){document.body.classList.remove("no-scroll")}function c(){t.openModalBtn.forEach(i=>{i.removeEventListener("click",e)}),t.closeModalBtn.removeEventListener("click",a),t.modal.removeEventListener("click",o),document.removeEventListener("keydown",s)}};async function G(t){const o=t.target.previousElementSibling.previousElementSibling.firstElementChild.id,e=await E(o);S(e)}let k;n.booksContainer.addEventListener("click",J);async function J(t){if(k=t.target.closest(".book-item"),n.modalWindowContent.innerHTML="",k){n.modalWindow.classList.remove("is-hidden"),Y();try{n.body.classList.add("no-scroll");let o=k.id,e=await E(o);X(e)}catch(o){l(o)}}}function N({book_image:t,contributor:o,description:e,_id:a,title:s,author:r,buy_links:c}){return`<img class="modal-img" src="${t}" alt="${s} ${o}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${s}</h2>
                <h3 class="modal-book-author">${r}</h3>
                <p class="modal-book-desc">${e}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${c[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${_}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${c[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${H}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function X(t){T(!j(t._id));const o=N(t);n.modalWindowContent.insertAdjacentHTML("afterbegin",o)}async function Z(){m();try{const o=(await q()).map(e=>e.list_name).toSorted();R(o)}catch(t){l(t)}d()}B.addEventListener("click",z);n.mainContainer.addEventListener("click",K);Z();
//# sourceMappingURL=commonHelpers.js.map
