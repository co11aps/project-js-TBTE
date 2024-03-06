import{S as b,N as l}from"./vendor-25a77764.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))I(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const y of t.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&I(y)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function I(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n={homeLink:document.querySelector("a.home-link"),shoppingListLink:document.querySelector("a.shopping-list-link"),homeLinkMob:document.querySelector(".home-link-mob"),shoppingListLinkMob:document.querySelector(".shopping-list-link-mob"),openBtn:document.querySelector(".burger-menu-btn"),closeBtn:document.querySelector(".x-cross-menu-btn"),menu:document.querySelector(".backdrop-menu"),booksContainer:document.querySelector(".main-content"),modalWindow:document.querySelector(".backdrop-pop-up"),modalWindowContent:document.querySelector(".modal-pop-up-content"),categoriesList:document.querySelector(".categories-list"),mainContainer:document.querySelector(".main-content"),iconUse:document.querySelector(".header-use-logo"),toTopButton:document.getElementById("to-top-button")};switch(window.location.href){case n.homeLink.href:n.homeLink.classList.add("active-link");break;case n.shoppingListLink.href:n.shoppingListLink.classList.add("active-link");break}const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAABCCAMAAADXNGueAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMAUExURUdwTAAAAO0aLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAOMiJv8Af+0aLe4aLQAAAAAAAAAAAAAAAAAAAAAAAOsUJwAAAOsULQAAAAAAAAAAAAAAAAAAAO4aLe0aLAAAAO4bLAAAAAAAAAAAAAAAAOwZLAAAAO0aLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO0ZK+0bLQAAAO4bLe0bLQAAAO0bLO0bLQAAAAAAAAAAAO8aLAAAAAAAAAAAAO4bLAAAAAAAAAAAAAAAAAAAAAAAAO4aLO0aLO4aKu0aLe0bL+wbLOwZLO0aLAAAAO4aLe0aLAAAAAAAAPYqOwAAAO8aLOMWJwAAAAAAAO0aLAAAAAAAAAAAAAAAAAAAAO0bLewZIO0aLOwZK+4bLAAAAAAAAO8ZL+0aLO0aLPQbLO0cK+4aLuwaLAAAAO4aLTMmHe0bLOsZKe0aLO0bK+0aLewaLO4aLAAAAO0bLO4aLAAAAOscLe0aLO4aLAAAAAAAAO0aK+waLAAAAAAAAAAAAAAAAO0bLO0YLu0aLe0ZLO0aLOwbLe0cLO0aLe0bL+4bLO0bLO8WTu0ZLPAaLO8aLO4aLfIbKewcLO0bLfEdM+0aLe4bLe4aLO4ZLO8aLewbLe4aLPEaLO0bLQAAAO0cLQAAAO8bLu0aK+4aLe0aLQAAAAAAAOwaKwAAAO0bLe4XL+0aLO4bLewbLewbLusaKwAAAAAAAO4bLe0ZLO4aLO0bLAAAAO8bLO4aLegXL+4aLe0bLe0bLe0aLe0bLO0bLOwaKwAAAO4bLOsaLu4bLe0cLuwbLe4aK+4dK+QbLgAAAO4ZLu0bLQAAAEUUvHIAAAD+dFJOUwDR/hSQJAE3lSZz+pKzBlx/2wk8fQ8pavIa5BgE/b8S/o4c8Fo92iswAnxphMz4IRZga/cMBTMBBgLReev1qTjudQz8EWYx4UnW4DIuVYl4oG1EO7psyjTd4udADVC/Qk7Yzy74IG6yP61RHu5Ub2NLsNjhyx7OH7M26Vn6n9QQBLpcC2FGjESjV3IL9QqJZM+mvDSicBcwfaiCgJycGfFi+5tY34a1x1mCbcTCa5NdjJgofCrjN0jIrsQl6+cDcyJ/3hIb8wiDkXZoWoiVOfacpnlvrKtntn5fKo8OHbaxQle3UMVGw9uWXkoVmfDWpL7tiL6yJ8dv0rBqHE49iR04zQAACoBJREFUeNrtm3lYVdUWwLcg9wok6FWRUfEKIiDOA49BUAFBEEHAAVQgEBMEkdSccZ6HHDKHz9TEWXNOXw4V+Syzspyy4mVWz+qlla83D+e01t5nuueee0H9/L73ffesP84ezj57+J2911p7n3sJ0UUXXf7P5ceCEydGv6VzqFcufLGdA3H6+RWdhX154QwnyLnXdRp2pP+VbzlJzp9Yf0FHoikJ+zbP4iylcNNZnYuV1O2u5TRk54a/6WwsQV2fwO2cunW/BqxZ9y/qfGT56EVu1raiSPKBCpMTvdae1gkJ0ie6uHjDFIxlq1DdjX5AiW3VIVGJvMN99xGLTlWhuk4SNtOZtW0VIV/N3uTIjuk7a7ZtvsfdTBCSZ1SooiFv10qMbSB3VwoZjilFVxFDtpT+RIXqfcw8+R1Gf6EZU/s4KqpddPxXd4npl1SohrKpFyWp+dEOO6susbly9a6QPulkQar4BZa9UdRhbzqwrhKm0YN9wl75FwtU08Qt9O9Z+l1H3hzPmPAH5mceZhmvW3hVwoZ5yj2W3uzIfsIGLvowW3NOq39Hc1YrUH3ICp0Wdzzn6xyX1P+coiLJZQHE36liqpMd9mn9aca78h76suOiyuZugSL6UABx6n30BPpcf8im2e65WGToIOHuGCA2+ZKjknrOqXYBhtPEWRM1HZMLrszOvnlgI0ZT90hTbNVNuD7nqKjuc4tpmHBPUuRvFChO84aOkZbe5EjyFQRvOyiphIeCi0k2Pi/r8gc3bk2/+OMrL+/45JycOQg30/8EZ91BUc3nJswVoqmDOHuyku6mD8CsS3BMVK9ye2S1VWwP1RrGExT7nxyS1IWflN73FTuk9rA9cmSho+5s/lPMHVAk37NJaruwEyQ/c9xfHBLVUI77TJFc9a0tVC+JRcA7fc0hUd3iuMHK9MkJ2qQeSp+Z/y3tdVAMaQuXV8xMMjxpP7r27t3br4FlDa6emW6JyWaa8IcHQ5R3lyR2hatLx44de8qZraBUlyfs4lYVKszQkt1SgQLFrBrVbwRPJWZc5ZPRcoNKWjaIU3BGDGuTb9TOhxBniDRX3B/C8/GQ3QiyXeTc1pB85glRgXKab5HxsjYq+Xs8OKGLhajpV16W44/ZA9Mjoar+uoeizQ4mNSr/gZCe+FRQvcZxhy0yLmqSmrFA9ig4bpMQbUf7Gxs/AAOvx2rf8H33R0H1+UBeKTFWqEgbSOc9FVSL1fuU9ZqovpQL/FkyBD07Qwdy8+FVDu9U85ioOvGPgqqakWqf4TYx51iVJiqfdb79yFNBFc1xNywyCjRRrZYL/MBx61ksDrvdV5gdS7o+TvNh/COhGkdBlXiw1NijI61RCfIUUO3iuHN9SL2e1Rq5wH7ugbCZTqMdL1Xqc3OLicsTl6Bt8jMajWk0LwRibdEG9E5cHjTcX9lYEFRwFG4bQxmqtuXLl4k6z9CltCLc8gV8jg16pykMm6jWR2WVJAaHUn6sNQmVR1piRWmIgAo75UNG5Wfm0U6X/bciPNmH1sTumJeVlNo0lKlOHDddke4TpYlKYSVnc/8SVag3XQ4RQc5CRtykWJrjHtaTjHXn+QFIKAk0WS6UqExhpY1yVYviRaVTTVEdyYVrQDOq6F2WUv0dX2KSyx/DnEzLAVBUXsNo1TjKphBpIaMKbkTrz2WomkAQ1AqLZADUj2kL3mHoVOAdz5Y4oNghNlDVzZANGsofZ2mikj9nzS2U7UA/YaCxa+NoukrSt2CD1kIQBpnPQHibrTDvlJFw8RQfdxnAW6AaFsgS2NexvgCteUqAtMJREIh7V2tU8TXswTlWqII7yzZARIUXfh0pQz+nJgX68OkKdqeDUHCmzTNQLmqVhfduH1XRzllvSXZ+vNSPY/jyqwKaVB7PQw9iGCFG6GWEiZhgzD3KSDJMshQv4nEtkI8RJ6FP+NdQdG04iMmNvuB+3edA4Gsg/jDUgIUexAhPt5baHqGhl5xp8xmJ+Gb4YBUqD2TYNN/L86CM6nv6gioMh+Da3URCaugbpfzaBCfh43tDtVHttvwEGs3VswCjFScRpFeir8hqDkzjY1Q7+EBqJCGhk2C0i4gnU/2Q4JORLvSwmcL+KdV6DKxNP5hHfBlZBNdxmA+PtxfVmwHtn68WqjBhOt1WocLGnzXJah2BeLunB5fuNQdDdB5WUAmrwsRmFegLP1iD3s7aqNDlvCMn/6qN6geFLttn0VO3Q7y0bFag8s7pKwyoHMImZB4ASyMm1ALpzUBgEUXYQNVONF1p1GNrg8Vx+Ur7FpxygRoLsAZhLmc1WKDCWR9OLFHxnSAdiraXH4YtHIWIkekqfB3NYY372FiBeB5cIKVqtVFdlhdo1FxVBSFbqEIYiOZm2SR3yg1RGSLgfQ2H6T6eEC+l4zjQoI2qpehCdiSfKsuXisU/xtQWDbWOkW4aqA6yRWmBKoW5Gn2VLXSTUJEOdlDNx0Nz8dtenZM2qldl1bZD0U0RFloyd7CAqEyalovLZKFgepYQchyCHo0FuR3aIFTzxPJJYvF86qEHyx0Y62cf1V64ZqlQCahRt7URW4hrGKpLhYojluk2jmDOCPc/48YovLCIdMGSRyAJYgYuuUbSU0TlwdyDQzCJ/FGXVmv46jxfooXqqLBQVPIs1hfgxlrtZWzaebh9VDgNK1SoglhVzSDaWK65QajIDvxdrPDB6rQNVOfYcfo757enWvS8feMsc1tzOPVq6HBBZTNUBrbLB1kmvsQMYT9UTpTeBmrvrqEqVLgRGFnGCuXJ2imEHSp4j7+Wc21pe4jVg6oSFZkz2xWoUCWBZ5IruJtZ5gaiIm/gLz3ZIedoWyd7Z4UPYdFWL3mAN3OPviHpcJ0UOmoLrsbgdLCIHrGSbjCiu9fYz0BaeTY/KFXQAh8cF5aRW61CFYpBVYtexD+ub4BZbjEv1mK7XB8qGsxZlDQk3gqVAVV+TZ4H8e+4dIBXQ1FNP4/qaqOouDRlPjvLstwvLg2U+hyYDuNAle7OC5mthGkleNfl1DV2x2tTFWzJW5dRER96JxDJeCuP/EIilKRGmOtBFRdj7YKKW++9rAXobmyXhqIib9LvoVPYoai2zMZyNyer/nKTPE7oyrpKuvnFkXVYmIEOdDpOpi7xvG9boazrPGYcq5opdFbZrxTssJ5qVMTUiblsnfsaLU9tZs5j+ynee9LMFfVYQDC9B7GBqqXWqEivMHZO4T6+BWkwKjyKAae9iJB/2EL1AF2Es9YfAE3GZTndk8XBu3QLB4NjKs/JFzb/35TkK45QksMzj4SoTku9juTMhK5Vu7q6UqhmiLCHe8V1y0xctMK6tyuyglrnePZmdjQUylOV0woioJa6eHl5gZvlAgFrKW1h6yyDM6veBwLFntJ/+JHMxORR1G8W77i4urrYO1+4tAFxPD8YP4jaEMf89qchkV/QHyvc+MAmqvd0SCKrt53sfoXnaut0SNJB8Cn7rAbriCSZss3uxNqkE1JIUbZtWKdSdT6WRzKzz2txKn5xx1wdjlr6D/5ypeo/boWrU/X/5GrLhaI197MnF9bW1v40+c7+glU6EV100UUXXXTRRRdN+Q0Cv1MF7ygmTwAAAABJRU5ErkJggg==",z="data:image/png;base64,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",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAABuCAMAAACnWq7TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJYUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADF7DS4AAADHdFJOUwB7PXoTGfunpc7eCmwhqdxR+lblnrCbBo0fKoAgtP7q9TaC/ecBBAOB7u8S6SSjxu3z8vFN4xFtdwLH1RsFqkKDrhb2FybbxEEiVUXfXOJOyTLgR+ZGEFLYuDdbf2WJCDtfK3M1clP42YZx93aaUDC2On2YDPQciEkPOWsNlK91HdYtKG+rFR4vZynT3Z9hyIrhwq3RsrydomTLrE/5oUQlC7oav11XpI+XlkjXlTPrMVp+brumPPCx2lnFLJLkymaZjEOow8DUkCr9AAAEc0lEQVR42u2aZ1cbRxSGX0B0ew0GYgsTBUeWANFsTDc9FGOaQ3Gvce+99544vffee++9zt/KBwtpZnelXU60yebwPt927p2ZnedoZ+8sAIQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII+ce0tF94+qneiuI04c8t29nc1rG9sNU0sTtVh2daeSpPWuUTBsoevMeYOuTXp2VOI1FnSxeLGJzXy3rzLjGNVbWsErFZXKvkrjSaklStSFdokH62auQXjKkN6VUt0eRGJXIOl9XUHBxJt8VbeNsqZQg5caJVR3atT35VWsWjIh7+rZKp2bkinqoiNaBFO85UI/mYoR+l+ngk+XYlkIVkNTMFdwhb3Ik0q5S5SLJKyX1jc3/4xt61SL0/O7KGATNTCVIlmo+6U5UQomZXEAAOWCYemlzCiPnMCVIlXst2qyohPvACutSFzc9fO1i9SGnrCK9gWbH0cnRAlegMuFaVmFUP9EnXg+8HAQCt2+TS4ctbC2iXBA7XOqFKFARdq0p0ouRY9CrvYmRpD0hJ3wAAtkv71KC30BFV4pES16ryJZ+SrvZNLsyTpK4LwFLp6RsvgkOqxDsBB1VdzTFw2bYq8eHReVHaAaB1zeHH1IL8OwCnpd/UqBeOqRIdDqq616yq1O3V88OsGVifpY5WUSJ3O1U7tyCkn/DrbuCkVM6P9sBBVaLRhqo5Evlq8GZ2lKBO1V8FEteazFTlSTY2LlGH9kYilYf7TMumGcBX0o5eVwm7qtqi0/bbViVKrVXJ3KYGZyrBOHtVcYmVKrys9hgLH0n2jsYYsQFYKp1mhisRW9UNte/y6Kx3q5Ffdar849L+udstqrrUHssAwFMaMh9vT9tHAL6Vl69pmqZpq+UPEJqmadp1APW6I8H1yKx71chvOlW5hfL2U+ESVfVGVRN15iflgw1dAIAFdvZQL4CmhWrbvsDkw60LNOhVZVcOxxr4v1M1pvaYAD4zHpGz/mgcuRKc7GJbFap1jU9uDQAo361/ZU0YVOFQyHFVlzIl/rTc1gPPqUNfwTy1YcH5xt913zXtqyo1OWqW7TCWc0VGVThd47QqG8VCXuTbbuFm3QtwPDCk1A6fl5uMZl/VAWGLn2GiSqlyHVF1YbaBT+yXoPk3lH3q41lGvp+CqqaHbc1aa6oK+33/4l411YONGDhjmZI3BVXo8dtI/QLmqrB2h3tVpWN5YlVhm88yczA1lips8blV1U8Xz6bZUFXvMSDffabH4/FE3gRrQxbj9XUjpipc9blTVa8XPwgbqkwojP0Xm1deineDO8/cqkFiqEKKG1XVnFhhOHAkQhXgXfeE+WO4qHNkTjgnliqccJsqX++6LpOzWWJUAfBsemjD49WXKo69KIR/T6huyer8lJU9G6MJJzNkqoLRyJYMlR/Rrza8oMz0rBpUS8KqDAs+xf440WfOld636fXwkeN4hiXvmalKlRI28L8YCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDyv+Rv4yABJpa/Q7IAAAAASUVORK5CYII=",L="/project-js-TBTE/assets/international-medical-corps-e03cad16.png",u="/project-js-TBTE/assets/medicins-sans-frontiers-4acb6969.png",S="data:image/png;base64,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",P="/project-js-TBTE/assets/action-against-hunger-9cadeb3c.png",B="data:image/png;base64,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",p="/project-js-TBTE/assets/sergiy-prytula-646b520d.png",m=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:g},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:z},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:f},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:L},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:u},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:S},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:P},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:B},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:p}],h=document.querySelector(".swiper-wrapper"),H=document.querySelector(".button-next"),w=m.map((A,o)=>`<div class="swiper-slide"><span class="fund-number">
      ${(o+1).toString().padStart(2,"0")}
        </span>
  <a class="fund-link" href="${A.url}" target="blank" rel="noopener noreferrer nofollow">
     <img class="fund-logo" src="${A.img}" alt="${A.title}" height="32"/>
  </a>
</div>`).join("");h.innerHTML=w;const Q={modules:[l],navigation:{nextEl:".button-next"},rewind:!0,allowTouchMove:!1,direction:"vertical",slidesPerView:6,slidesPerGroup:6,spaceBetween:10};new b(".mySwiper",Q);H.addEventListener("click",()=>{H.classList.toggle("button-next-up")});const C=document.querySelector(".home-link-mob"),d=document.querySelector(".shopping-list-link-mob");switch(window.location.href){case C.href:C.classList.add("active-link");break;case d.href:d.classList.add("active-link");break}const s=document.querySelector(".burger-menu-btn"),r=document.querySelector(".x-cross-menu-btn"),E=document.querySelector(".backdrop-menu");s.addEventListener("click",U);r.addEventListener("click",O);function U(){E.classList.toggle("is-open"),s.classList.toggle("is-close"),r.classList.toggle("is-open")}function O(){E.classList.toggle("is-open"),s.classList.toggle("is-close"),r.classList.toggle("is-open")}document.querySelector(".header-use-logo");function M(A){localStorage.setItem("theme",A),document.documentElement.className=A}function R(){const A=localStorage.getItem("theme");M(A==="dark"?"light":"dark")}document.getElementById("slider").addEventListener("change",R);function x(){localStorage.getItem("theme")==="dark"?(M("dark"),document.getElementById("slider").checked=!0):(M("light"),document.getElementById("slider").checked=!1)}x();const c="storage-of-books",a=JSON.parse(localStorage.getItem(c))||[];function V(A){a.push(A),localStorage.setItem(c,JSON.stringify(a))}function T(A){const o=k(A._id);if(Z(o),o){const i=a.findIndex(I=>I._id===A._id);a.splice(i,1),localStorage.setItem(c,JSON.stringify(a));return}V(A)}function k(A){return a.find(i=>i._id===A)}function Z(A){A?(document.querySelector(".modal-pop-up-btn").textContent="Add to shopping list",document.querySelector(".modal-pop-up-message").classList.add("hidden")):(document.querySelector(".modal-pop-up-btn").textContent="Remove from the shopping list",document.querySelector(".modal-pop-up-message").classList.remove("hidden"))}const D="data:image/png;base64,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",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOBSURBVHgB7VdLaBRBEH3Vm2QUo1HxRwwSc0jUgx9UFBRB3Ysiinrw5FHPgiiK4E3EP3hSUMSj4kVQRMQcRESIYOIlgpIoYmJiovn4ySYzXdbO7uxOz28nEG+p0Dvd1a+737yq7p4A01YwSurku1YztL0VRAvAsARNSGssf8AENPdAZ9royHgnJkOCb1stTPqeTLMGU2bURVpl6chYd6gnROBmzQpW/Fq66ooeRHON8yfibKmtF1Xe+REqNITwRH7q3LFccJTr/hLnT8RVscZ9ZpO9QcK+UXOANTVKAaQEn16dA31xvkg8U4tzM7MrlgRxZjtiCHCADCLaUYSj+gg1u/3rVhkkNDe5SjFMq54Natoj6FnScIDhbvCXVhngewcZRku3AbObgEwN8OcbuL8N+NVrYPJzE+n6WBLSbUEHPBtPgdYeA6w5pr/vDfTTw8DIZ6C2ASp7C2jYZmJyQ+C2C+CO67I4l1/OoVo/zgiHtpXyy0eN+0CbzoYIuLZ4Ayh7B3nSau/DEAHXrLmgredFxYNGWLSmDGKV8LLZs1kNSDKq3wyuWwnMX5mIw4wlBQLGQnEkHCpB3BqnOAfmr66MyUdCk5cSZi4hQgnmMpG81JVpVFVEuHPmd4fnoKQZXMnIIFV5AaQAFef2pEgmoXwoTheOVBiUT063nZQThhKUSglMRgnPzM0RTEyYUqV5S50So+O7DRLM5tvTFCrBPrKUGA5WZrzSLKBTYIq7w9+MJ6EDCF+dx4aAga78wS93xLpojD0O/BDM32FgUTNo5rxiBwI5kZyYXBrkbZCv7dCPToN73krDKTjlOFabj0LtPFlSS7degX59Qwj8dIm6awlZtf96cWf4X848rAxhJs4seCaubGnm2oVyGw7lLxVExUbtOCU35QfQ3GXQL68FeotTy1cMZshHWm7E18fPq88NZiOVEB1GCylRnGBkIDypz3TrZaBxC7j9gTAKfaR5VEWd0eD4nL8RTMweTpNoJRYC/vhCKhn5FilrVbojAm3vKVH/BJNm2WytHpfil7oo98k+HwcwHHiSQ60IkCwLIe2JE4s6ZeIW/CdjUcG61LcccUrkeY47OCSUbXe7Tn0ZkWt8d5BYKJtqr/Z3/M6hWWTpmnxo4ov8djDRJutib+g/scSDP3d8yaoMYwPbVA/F1ZissRoncr47GfuVdWXwPaatgv0DKz/i8wlwU7gAAAAASUVORK5CYII=";export{D as a,v as b,k as c,T as h,Z as u};
//# sourceMappingURL=apple-books-logo-a7a64a8f.js.map
