import"./assets/modulepreload-polyfill-3cfb730f.js";import{r as s,h as _,u as H,c as R,a as x,b as P}from"./assets/apple-books-logo-18da0369.js";import{e as y,f as E,i as U,g as W,o as z,s as O,a as D,d as V}from"./assets/vendor-695d5387.js";import{f as K}from"./assets/config-905a1586.js";const k=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?k.classList.add("active"):k.classList.remove("active")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function v(){window.scrollTo({top:0,behavior:"smooth"})}const $=document.querySelector(".loader");function p(){$.classList.remove("hidden")}function u(){$.classList.add("hidden")}const f="https://books-backend.p.goit.global/books";async function F(){const t=`${f}/category-list`;return(await y.get(t)).data}async function L(){const t=`${f}/top-books`;return(await y.get(t)).data}async function B(t){t=t.trim();const e={category:t},o=`${f}/category`;return(await y.get(o,{params:e})).data}async function C(t){t=t.trim();const e=`${f}/${t}`;return(await y.get(e)).data}let b;function N({_id:t,author:e,contributor:o,title:a,book_image:n,list_name:r}){return b=r,`<li class="book-li-item">
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
            </li>`}function Q({books:t}){const e=t.map(N).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${b}</h3>
                    <ul class="books-category-list">`+e+`</ul>
                    <button class="button see-more-btn" data-js="${b}" aria-label="See more">SEE MORE</button>
                </li>`}function Y(t){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+t.map(Q).join("")+"</ul>"}function w(t){const e=Y(t);s.mainContainer.innerHTML=e}function l(t){E.error({title:"Error",message:t})}async function G(){p();try{const t=await L();w(t)}catch(t){l(t)}u()}G();const S=document.querySelector(".categories-list");function J(t){return`<li class="category-item"><button type="button" class="category-button" data-category="${t}" aria-label="${t}">${t}</button></li>`}function X(t){const o='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+t.map(J).join("");S.innerHTML=o}async function m(t){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${t}"]`).classList.add("js-current-category")}async function Z(t){if(t.preventDefault(),t.target.classList.contains("category-button"))if(s.mainContainer.innerHTML="",m(t.target.dataset.category),t.target.dataset.category==="all categories"){try{const e=await L();p(),w(e),m(t.target.dataset.category),u()}catch(e){l(e)}return}else try{const e=await B(`${t.target.dataset.category}`);s.mainContainer.innerHTML=await M(`${t.target.dataset.category}`,e),m(t.target.dataset.category),u()}catch(e){l(e)}}async function M(t,e){const o=t.split(" ");return` 
    <h2 class="block_books-title"
  >${o.splice(0,o.length/2).join(" ")} <span class="block_books-colortitle">${o.splice(o.length/2,o.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await tt(e)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function tt(t){return t.map(et).join("")}function et({author:t,book_image:e,title:o,description:a,_id:n,contributor:r}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${n}" aria-label="${o} ${r}">  
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
    </li>`}async function ot(t){if(t.preventDefault(),t.target.classList.contains("see-more-btn")){v();const e=t.target.dataset.js;s.mainContainer.innerHTML="",p();try{const o=await B(`${e}`);s.mainContainer.insertAdjacentHTML("beforeend",await M(`${e}`,o)),m(`${e}`),u()}catch(o){l(o)}}else if(t.target.classList.contains("all-categories_btn")){v(),s.mainContainer.innerHTML="";try{const e=await L();p(),w(e),m("all categories"),u()}catch(e){l(e)}}}const I=document.querySelector(".js-search"),at=document.querySelector(".search-city"),nt=document.getElementById("js-info-weather-city"),st=document.querySelector("p.forecast-text");I.addEventListener("submit",rt);async function rt(t){t.preventDefault();const e=t.target.elements.city.value.trim()||"";try{const o=await it(e),a=o.location.country,n=o.current.condition.icon,r=o.current.temp_c,c=o.current.condition.text,i=`
                <h2 class="country-city-title">${a}, ${e}</h2>
                <img class="weather-city-image" src="${n}" alt="${c}">
                <p class="weather-city-info">Temp.: ${Math.floor(r)} &deg;C</p>
                <p class="weather-city-info">${c}</p>
        `;nt.innerHTML=i,st.textContent=ct(c),t.target.elements.city.value="",at.blur()}catch(o){E.error({title:"Error",message:o.message})}I.reset()}async function it(t){const e="https://api.weatherapi.com/v1";return await(await y.get(`${e}/current.json`,{params:{key:"14c56bddeab14583a6e164909231107",q:t,lang:"en"}})).data}function ct(t){const e="Rain taps softly, like music, setting the scene for books. Rainy days are cozy, perfect for getting lost in books",o="Snow falls gently, making reading by the fire even better. Snowy weather creates a peaceful setting for immersive reading sessions",a="Sunny days make reading outside under trees delightful. Sunlight makes reading enjoyable with its warm and bright rays",n="Any weather is book weather! Embrace reading anytime, anywhere",r="Soft light filters through the clouds, ideal for cozy reading. Cloudy days offer a calm atmosphere, perfect for uninterrupted reading";return t.toLowerCase().includes("cloudy")?r:t.toLowerCase().includes("rain")?e:t.toLowerCase().includes("snow")?o:t.toLowerCase().includes("sunny")?a:n}const lt=()=>{const t={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};t.modalShopigListBtn.addEventListener("click",dt),t.openModalBtn.forEach(i=>{i.addEventListener("click",o)}),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e),document.addEventListener("keydown",n);function e(i){i.target===i.currentTarget&&a()}function o(){t.modal.classList.toggle("is-hidden"),t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",n),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e)):(r(),c())}function a(){t.modal.classList.add("is-hidden"),r(),c()}function n(i){i.key==="Escape"&&a()}function r(){document.body.classList.remove("no-scroll")}function c(){t.openModalBtn.forEach(i=>{i.removeEventListener("click",o)}),t.closeModalBtn.removeEventListener("click",a),t.modal.removeEventListener("click",e),document.removeEventListener("keydown",n)}};async function dt(t){const e=t.target.previousElementSibling.previousElementSibling.firstElementChild.id,o=await C(e);_(o)}let h;s.booksContainer.addEventListener("click",ut);async function ut(t){if(h=t.target.closest(".book-item"),s.modalWindowContent.innerHTML="",h){s.modalWindow.classList.remove("is-hidden"),lt();try{s.body.classList.add("no-scroll");let e=h.id,o=await C(e);gt(o)}catch(e){l(e)}}}function mt({book_image:t,contributor:e,description:o,_id:a,title:n,author:r,buy_links:c}){return`<img class="modal-img" src="${t}" alt="${n} ${e}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${n}</h2>
                <h3 class="modal-book-author">${r}</h3>
                <p class="modal-book-desc">${o}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${c[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${x}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${c[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${P}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function gt(t){H(!R(t._id));const e=mt(t);s.modalWindowContent.insertAdjacentHTML("afterbegin",e)}const j=document.querySelector(".auth-pop-up-close-btn"),T=document.querySelector(".backdrop-auth-pop-up");s.headerSignInBtn.addEventListener("click",pt);function pt(){T.classList.toggle("is-hidden"),j.addEventListener("click",q)}function q(){T.classList.toggle("is-hidden"),j.removeEventListener("click",q)}U(K);const g=W(),A=document.getElementById("email");document.getElementById("user-name");const yt=document.getElementById("password"),d=document.getElementById("quickstart-sign-in");document.getElementById("quickstart-sign-up");const ft=document.getElementById("quickstart-password-reset");function ht(){if(g.currentUser)O(g);else{const t=A.value,e=yt.value;if(t.length<4){alert("Please enter an email address.");return}if(e.length<4){alert("Please enter a password.");return}D(g,t,e).catch(function(o){const a=o.code,n=o.message;alert(a==="auth/wrong-password"?"Wrong password.":n),console.log(o),d.disabled=!1})}d.disabled=!0}function kt(){const t=A.value;V(g,t).then(function(){alert("Password Reset Email Sent!")}).catch(function(e){const o=e.code,a=e.message;(o=="auth/invalid-email"||o=="auth/user-not-found")&&alert(a),console.log(e)})}z(g,function(t){if(t){const e=t.displayName;t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,d.textContent="Sign out",s.headerSignInBtn.textContent=e}else s.headerSignInBtn.textContent="Sign in",d.textContent="Sign in";d.disabled=!1});d.addEventListener("click",ht,!1);ft.addEventListener("click",kt,!1);async function bt(){p();try{const e=(await F()).map(o=>o.list_name).toSorted();X(e)}catch(t){l(t)}u()}S.addEventListener("click",Z);s.mainContainer.addEventListener("click",ot);bt();
//# sourceMappingURL=commonHelpers2.js.map
