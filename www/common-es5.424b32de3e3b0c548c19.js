(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9qPz":function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return C})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return r}));var o=n("imtE"),i=n("kBU6");const r=t=>new Promise((e,n)=>{Object(o.l)(()=>{s(t),a(t).then(n=>{n.animation&&n.animation.destroy(),c(t),e(n)},e=>{c(t),n(e)})})}),s=t=>{const e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},a=async t=>{const e=await l(t);return e?d(e,t):u(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await n.e(101).then(n.bind(null,"/b1p"))).iosTransitionAnimation:(await n.e(102).then(n.bind(null,"HdOP"))).mdTransitionAnimation},d=async(t,e)=>{await m(e,!0);const n=t(e.baseEl,e);h(e.enteringEl,e.leavingEl);const o=await p(n,e);return e.progressCallback&&e.progressCallback(void 0),o&&g(e.enteringEl,e.leavingEl),{hasCompleted:o,animation:n}},u=async t=>{const e=t.enteringEl,n=t.leavingEl;return await m(t,!1),h(e,n),g(e,n),{hasCompleted:!0}},m=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[b(t.enteringEl),b(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)];await Promise.all(n),await f(t.viewIsReady,t.enteringEl)},f=async(t,e)=>{t&&await t(e)},p=(t,e)=>{const n=e.progressCallback,o=new Promise(e=>{t.onFinish(t=>e(1===t))});return n?(t.progressStart(!0),n(t)):t.play(),o},h=(t,e)=>{y(e,i.c),y(t,i.a)},g=(t,e)=>{y(t,i.b),y(e,i.d)},y=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},v=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),b=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(b))}},w=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},C=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a}));const o=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-".concat(t)]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n)}return!1}},OlR4:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("mrSG"),i=n("8Y7J"),r=n("sZkV");let s=(()=>{class t{constructor(t,e,n){this.loadingController=t,this.alertController=e,this.toastController=n}presentLoading(){return o.a(this,void 0,void 0,(function*(){this.loading=yield this.loadingController.create({message:"Espere porfavor...",backdropDismiss:!0}),yield this.loading.present()}))}presentAlertConfirm(t,e,n,i,r,s){return o.a(this,void 0,void 0,(function*(){const o=yield this.alertController.create({header:t,message:e,buttons:[{text:r,role:"cancel",cssClass:"secondary",handler:s},{text:n,handler:i}]});yield o.present()}))}hideLoading(){return o.a(this,void 0,void 0,(function*(){this.loading.dismiss()}))}presentToast(t){return o.a(this,void 0,void 0,(function*(){this.toast&&this.toast.dismiss(),this.toast=yield this.toastController.create({message:t,duration:2e3,color:"danger",position:"middle"}),this.toast.present()}))}presentToastDown(t){return o.a(this,void 0,void 0,(function*(){this.toast&&this.toast.dismiss(),this.toast=yield this.toastController.create({message:t,duration:5e3,color:"primary",position:"bottom"}),this.toast.present()}))}}return t.ngInjectableDef=i.Kb({factory:function(){return new t(i.Lb(r.Cb),i.Lb(r.a),i.Lb(r.Kb))},token:t,providedIn:"root"}),t})()},TMBv:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o="".concat(t*e/n-t,"ms"),i=2*Math.PI*e/n;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,i="".concat(t*o-t,"ms"),r=2*Math.PI*o;return{r:5,style:{top:"".concat(9*Math.sin(r),"px"),left:"".concat(9*Math.cos(r),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/n-t,"ms")}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/n-t,"ms")}})}}},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let o=n.length-1;o>=0;o--){const t=n[o];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)i(s[e])}});const o=r(e);for(let t=0;t<o.length;t++)i(o[t]);const s=document.createElement("div");s.appendChild(e);const c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),o=e.name;if(!s.includes(o.toLowerCase())){t.removeAttribute(o);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}const e=r(t);for(let n=0;n<e.length;n++)i(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));const o=async(t,e,n,o,i)=>{if(t)return t.attachViewToDom(e,n,i,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>r.classList.add(t)),i&&Object.assign(r,i),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o}));const o=()=>{const t=window.TapticEngine;t&&t.selection()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);