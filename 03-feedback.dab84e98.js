var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire0fbb;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire0fbb=o);var n=o("kEUo3");const a=document.querySelector("form.feedback-form");let l={};const f="feedback-form-state",i=JSON.parse(localStorage.getItem(f));addEventListener("load",(function(e){i&&Object.keys(i).forEach((e=>{a.querySelector(`[name="${e}"`).value=i[e]}))})),a.addEventListener("input",(0,n.debounce)((function(e){i&&(l=i);l[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(l))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(f),Object.keys(l).forEach((e=>delete l[e]))}));
//# sourceMappingURL=03-feedback.dab84e98.js.map
