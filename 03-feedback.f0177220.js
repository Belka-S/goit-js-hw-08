!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire0fbb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire0fbb=r);var o=r("1WSnx");const a=document.querySelector("form.feedback-form");let l={};const f="feedback-form-state",i=JSON.parse(localStorage.getItem(f));addEventListener("load",(function(e){i&&Object.keys(i).forEach((e=>{a.querySelector(`[name="${e}"`).value=i[e]}))})),a.addEventListener("input",(0,o.debounce)((function(e){i&&(l=i);l[e.target.name]=e.target.value,localStorage.setItem(f,JSON.stringify(l))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(f),Object.keys(l).forEach((e=>delete l[e]))}))}();
//# sourceMappingURL=03-feedback.f0177220.js.map
