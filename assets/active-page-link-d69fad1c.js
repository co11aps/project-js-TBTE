import{d as a}from"./vendor-a6446209.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const u=window.location.pathname,h=document.querySelector(".home-link-mob"),g=document.querySelector(".shopping-list-link-mob");u.includes("index.html")?h.classList.add("active-link"):u.includes("shopping-list.html")&&g.classList.add("active-link");const c=document.querySelector(".burger-menu-btn"),l=document.querySelector(".x-cross-menu-btn"),p=document.querySelector(".backdrop-menu");c.addEventListener("click",y);l.addEventListener("click",L);function y(){p.classList.toggle("is-open"),c.classList.toggle("is-close"),l.classList.toggle("is-open")}function L(){p.classList.toggle("is-open"),c.classList.toggle("is-close"),l.classList.toggle("is-open")}const r=document.querySelector(".darksvg"),s=document.querySelector(".lightsvg"),k=document.querySelector(".checkbox");s.style.display="block";r.style.display="none";k.addEventListener("click",b);function b(m){s.style.display==="block"?S():v()}function S(){s.style.display="none",r.style.display="block"}function v(){r.style.display="none",s.style.display="block"}const o={homeLinc:a.querySelector("a.home-link"),shoppingListLinc:a.querySelector("a.shopping-list-link")};switch(window.location.href){case o.homeLinc.href:o.homeLinc.classList.add("active-link");break;case o.shoppingListLinc.href:o.shoppingListLinc.classList.add("active-link");break}
//# sourceMappingURL=active-page-link-d69fad1c.js.map
