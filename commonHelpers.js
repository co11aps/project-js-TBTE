import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as g,g as f,c as p,o as h,s as w,a as E,b as I,u as y,d as v,e as B}from"./assets/vendor-930f8b07.js";import{f as k}from"./assets/config-905a1586.js";g(k);const a=f();window.location.hostname==="localhost"&&p(a,"http://127.0.0.1:9099");const d=document.getElementById("email"),u=document.getElementById("password"),C=document.getElementById("user-name"),o=document.getElementById("quickstart-sign-in"),S=document.getElementById("quickstart-sign-up"),P=document.getElementById("quickstart-password-reset"),l=document.getElementById("quickstart-verify-email"),c=document.getElementById("quickstart-sign-in-status"),r=document.getElementById("quickstart-account-details");function U(){if(a.currentUser)w(a);else{const e=d.value,t=u.value;if(e.length<4){alert("Please enter an email address.");return}if(t.length<4){alert("Please enter a password.");return}E(a,e,t).catch(function(s){const n=s.code,i=s.message;alert(n==="auth/wrong-password"?"Wrong password.":i),console.log(s),o.disabled=!1})}o.disabled=!0}function b(){const e=d.value,t=u.value,s=C.value;if(e.length<4){alert("Please enter an email address.");return}if(t.length<4){alert("Please enter a password.");return}I(a,e,t).then(n=>y(n.user,{displayName:s,photoURL:"https://example.com/jane-q-user/profile.jpg"})).catch(function(n){const i=n.code,m=n.message;i=="auth/weak-password"?alert("The password is too weak."):alert(m),console.log(n)})}function q(){v(a.currentUser).then(function(){alert("Email Verification Sent!")})}function x(){const e=d.value;B(a,e).then(function(){alert("Password Reset Email Sent!")}).catch(function(t){const s=t.code,n=t.message;(s=="auth/invalid-email"||s=="auth/user-not-found")&&alert(n),console.log(t)})}h(a,function(e){if(l.disabled=!0,e){e.displayName,e.email;const t=e.emailVerified;e.photoURL,e.isAnonymous,e.uid,e.providerData,c.textContent="Signed in",o.textContent="Sign out",r.textContent=JSON.stringify(e,null,"  "),t||(l.disabled=!1)}else c.textContent="Signed out",o.textContent="Sign in",r.textContent="null";o.disabled=!1});o.addEventListener("click",U,!1);S.addEventListener("click",b,!1);l.addEventListener("click",q,!1);P.addEventListener("click",x,!1);
//# sourceMappingURL=commonHelpers.js.map
