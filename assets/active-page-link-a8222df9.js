(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const l=document.querySelector(".home-link-mob"),u=document.querySelector(".shopping-list-link-mob");switch(window.location.href){case l.href:l.classList.add("active-link");break;case u.href:u.classList.add("active-link");break}const n=document.querySelector(".burger-menu-btn"),i=document.querySelector(".x-cross-menu-btn"),a=document.querySelector(".backdrop-menu");n.addEventListener("click",p);i.addEventListener("click",f);function p(){a.classList.toggle("is-open"),n.classList.toggle("is-close"),i.classList.toggle("is-open")}function f(){a.classList.toggle("is-open"),n.classList.toggle("is-close"),i.classList.toggle("is-open")}const d=document.querySelector(".darksvg"),g=document.querySelector(".lightsvg");document.querySelector(".header-container");document.querySelector(".header-svg-burger");document.querySelector(".x-cross-btn-svg");document.querySelector(".nav-mobil");const h=document.querySelector(".checkbox");g.style.display="block";d.style.display="none";h.addEventListener("click",L);function L(){g.classList.toggle("is-open"),d.classList.toggle("is-open")}const o={homeLinc:document.querySelector("a.home-link"),shoppingListLinc:document.querySelector("a.shopping-list-link")};switch(window.location.href){case o.homeLink.href:o.homeLink.classList.add("active-link");break;case o.shoppingListLink.href:o.shoppingListLink.classList.add("active-link");break}
//# sourceMappingURL=active-page-link-a8222df9.js.map
