import"./assets/modulepreload-polyfill-3cfb730f.js";import{r,h as _,u as H,c as R,a as P,b as U}from"./assets/apple-books-logo-9a765457.js";import{f as y,h as E,i as W,g as x,c as z,o as O,s as D,a as V,e as K}from"./assets/vendor-c3fabd4a.js";import{f as F}from"./assets/config-905a1586.js";const k=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?k.classList.add("active"):k.classList.remove("active")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function v(){window.scrollTo({top:0,behavior:"smooth"})}const $=document.querySelector(".loader");function p(){$.classList.remove("hidden")}function m(){$.classList.add("hidden")}const f="https://books-backend.p.goit.global/books";async function Q(){const t=`${f}/category-list`;return(await y.get(t)).data}async function w(){const t=`${f}/top-books`;return(await y.get(t)).data}async function B(t){t=t.trim();const e={category:t},o=`${f}/category`;return(await y.get(o,{params:e})).data}async function C(t){t=t.trim();const e=`${f}/${t}`;return(await y.get(e)).data}let b;function N({_id:t,author:e,contributor:o,title:a,book_image:n,list_name:s}){return b=s,`<li class="book-li-item">
                <button type="button" class="book-item" id="${t}" aria-label="${a} ${o}">
                <div class="book-wrapper">
                <img class="book-img" src="${n}" alt="${a} ${o}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${e}</p>
                </div>
                </button>
            </li>`}function Y({books:t}){const e=t.map(N).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${b}</h3>
                    <ul class="books-category-list">`+e+`</ul>
                    <button class="button see-more-btn" data-js="${b}" aria-label="See more">SEE MORE</button>
                </li>`}function G(t){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+t.map(Y).join("")+"</ul>"}function L(t){const e=G(t);r.mainContainer.innerHTML=e}function l(t){E.error({title:"Error",message:t})}async function J(){p();try{const t=await w();L(t)}catch(t){l(t)}m()}J();const S=document.querySelector(".categories-list");function X(t){return`<li class="category-item"><button type="button" class="category-button" data-category="${t}" aria-label="${t}">${t}</button></li>`}function Z(t){const o='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+t.map(X).join("");S.innerHTML=o}async function g(t){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${t}"]`).classList.add("js-current-category")}async function tt(t){if(t.preventDefault(),t.target.classList.contains("category-button"))if(r.mainContainer.innerHTML="",g(t.target.dataset.category),t.target.dataset.category==="all categories"){try{const e=await w();p(),L(e),g(t.target.dataset.category),m()}catch(e){l(e)}return}else try{const e=await B(`${t.target.dataset.category}`);r.mainContainer.innerHTML=await M(`${t.target.dataset.category}`,e),g(t.target.dataset.category),m()}catch(e){l(e)}}async function M(t,e){const o=t.split(" ");return` 
    <h2 class="block_books-title"
  >${o.splice(0,o.length/2).join(" ")} <span class="block_books-colortitle">${o.splice(o.length/2,o.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await et(e)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function et(t){return t.map(ot).join("")}function ot({author:t,book_image:e,title:o,description:a,_id:n,contributor:s}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${n}" aria-label="${o} ${s}">  
    <div class="books_wrapper"> 
    <img class="books_image" src="${e}"  alt="${a}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${o}</p>  
    <p class="books_info-author">${t}</p>  
    </div>
    </button>
    </li>`}async function at(t){if(t.preventDefault(),t.target.classList.contains("see-more-btn")){v();const e=t.target.dataset.js;r.mainContainer.innerHTML="",p();try{const o=await B(`${e}`);r.mainContainer.insertAdjacentHTML("beforeend",await M(`${e}`,o)),g(`${e}`),m()}catch(o){l(o)}}else if(t.target.classList.contains("all-categories_btn")){v(),r.mainContainer.innerHTML="";try{const e=await w();p(),L(e),g("all categories"),m()}catch(e){l(e)}}}const I=document.querySelector(".js-search"),nt=document.querySelector(".search-city"),st=document.getElementById("js-info-weather-city"),rt=document.querySelector("p.forecast-text");I.addEventListener("submit",it);async function it(t){t.preventDefault();const e=t.target.elements.city.value.trim()||"";try{const o=await ct(e),a=o.location.country,n=o.current.condition.icon,s=o.current.temp_c,c=o.current.condition.text,i=`
                <h2 class="country-city-title">${a}, ${e}</h2>
                <img class="weather-city-image" src="${n}" alt="${c}">
                <p class="weather-city-info">Temp.: ${Math.floor(s)} &deg;C</p>
                <p class="weather-city-info">${c}</p>
        `;st.innerHTML=i,rt.textContent=lt(c),t.target.elements.city.value="",nt.blur()}catch(o){E.error({title:"Error",message:o.message})}I.reset()}async function ct(t){const e="https://api.weatherapi.com/v1";return await(await y.get(`${e}/current.json`,{params:{key:"14c56bddeab14583a6e164909231107",q:t,lang:"en"}})).data}function lt(t){const e="Rain taps softly, like music, setting the scene for books. Rainy days are cozy, perfect for getting lost in books",o="Snow falls gently, making reading by the fire even better. Snowy weather creates a peaceful setting for immersive reading sessions",a="Sunny days make reading outside under trees delightful. Sunlight makes reading enjoyable with its warm and bright rays",n="Any weather is book weather! Embrace reading anytime, anywhere",s="Soft light filters through the clouds, ideal for cozy reading. Cloudy days offer a calm atmosphere, perfect for uninterrupted reading";return t.toLowerCase().includes("cloudy")?s:t.toLowerCase().includes("rain")?e:t.toLowerCase().includes("snow")?o:t.toLowerCase().includes("sunny")?a:n}const dt=()=>{const t={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};t.modalShopigListBtn.addEventListener("click",ut),t.openModalBtn.forEach(i=>{i.addEventListener("click",o)}),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e),document.addEventListener("keydown",n);function e(i){i.target===i.currentTarget&&a()}function o(){t.modal.classList.toggle("is-hidden"),t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",n),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e)):(s(),c())}function a(){t.modal.classList.add("is-hidden"),s(),c()}function n(i){i.key==="Escape"&&a()}function s(){document.body.classList.remove("no-scroll")}function c(){t.openModalBtn.forEach(i=>{i.removeEventListener("click",o)}),t.closeModalBtn.removeEventListener("click",a),t.modal.removeEventListener("click",e),document.removeEventListener("keydown",n)}};async function ut(t){const e=t.target.previousElementSibling.previousElementSibling.firstElementChild.id,o=await C(e);_(o)}let h;r.booksContainer.addEventListener("click",mt);async function mt(t){if(h=t.target.closest(".book-item"),r.modalWindowContent.innerHTML="",h){r.modalWindow.classList.remove("is-hidden"),dt();try{r.body.classList.add("no-scroll");let e=h.id,o=await C(e);pt(o)}catch(e){l(e)}}}function gt({book_image:t,contributor:e,description:o,_id:a,title:n,author:s,buy_links:c}){return`<img class="modal-img" src="${t}" alt="${n} ${e}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${n}</h2>
                <h3 class="modal-book-author">${s}</h3>
                <p class="modal-book-desc">${o}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${c[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${P}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${c[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${U}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function pt(t){H(!R(t._id));const e=gt(t);r.modalWindowContent.insertAdjacentHTML("afterbegin",e)}const yt=document.querySelector(".header-sign-in-btn"),j=document.querySelector(".auth-pop-up-close-btn"),q=document.querySelector(".backdrop-auth-pop-up");yt.addEventListener("click",ft);function ft(){q.classList.toggle("is-hidden"),j.addEventListener("click",T)}function T(){q.classList.toggle("is-hidden"),j.removeEventListener("click",T)}W(F);const d=x();window.location.hostname==="localhost"&&z(d,"http://127.0.0.1:9099");const A=document.getElementById("email");document.getElementById("user-name");const ht=document.getElementById("password"),u=document.getElementById("quickstart-sign-in");document.getElementById("quickstart-sign-up");const kt=document.getElementById("quickstart-password-reset");function bt(){if(d.currentUser)D(d);else{const t=A.value,e=ht.value;if(t.length<4){alert("Please enter an email address.");return}if(e.length<4){alert("Please enter a password.");return}V(d,t,e).catch(function(o){const a=o.code,n=o.message;alert(a==="auth/wrong-password"?"Wrong password.":n),console.log(o),u.disabled=!1})}u.disabled=!0}function wt(){const t=A.value;K(d,t).then(function(){alert("Password Reset Email Sent!")}).catch(function(e){const o=e.code,a=e.message;(o=="auth/invalid-email"||o=="auth/user-not-found")&&alert(a),console.log(e)})}O(d,function(t){t?(t.displayName,t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,u.textContent="Sign out"):u.textContent="Sign in",u.disabled=!1});u.addEventListener("click",bt,!1);kt.addEventListener("click",wt,!1);async function Lt(){p();try{const e=(await Q()).map(o=>o.list_name).toSorted();Z(e)}catch(t){l(t)}m()}S.addEventListener("click",tt);r.mainContainer.addEventListener("click",at);Lt();
//# sourceMappingURL=commonHelpers2.js.map
