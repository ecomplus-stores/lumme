/*! For license information please see chunk.855495f2fc1494b6f171.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{213:function(t,e,n){"use strict";var o=n(29),r=n(215).left,i=n(216),s=n(217),c=n(218),a=n(220),d=i("reduce"),u=s("reduce",{1:0});o({target:"Array",proto:!0,forced:!d||!u||!a&&c>79&&c<83},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},215:function(t,e,n){var o=n(56),r=n(51),i=n(71),s=n(55),c=function(t){return function(e,n,c,a){o(n);var d=r(e),u=i(d),l=s(d.length),f=t?l-1:0,p=t?-1:1;if(c<2)for(;;){if(f in u){a=u[f],f+=p;break}if(f+=p,t?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:l>f;f+=p)f in u&&(a=n(a,u[f],f,d));return a}};t.exports={left:c(!1),right:c(!0)}},216:function(t,e,n){"use strict";var o=n(11);t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},217:function(t,e,n){var o=n(18),r=n(11),i=n(14),s=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],d=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!r((function(){if(d&&!o)return!0;var t={length:-1};d?s(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,u,l)}))}},218:function(t,e,n){var o,r,i=n(7),s=n(219),c=i.process,a=c&&c.versions,d=a&&a.v8;d?r=(o=d.split("."))[0]+o[1]:s&&(!(o=s.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=s.match(/Chrome\/(\d+)/))&&(r=o[1]),t.exports=r&&+r},219:function(t,e,n){var o=n(35);t.exports=o("navigator","userAgent")||""},220:function(t,e,n){var o=n(57),r=n(7);t.exports="process"==o(r.process)},246:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(31),r=n(247);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s={selector:"vue-portal-target-".concat(r())},c=function(t){return s.selector=t},a="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":i(document)),d=o.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(t){return{updatedNodes:t.nodes}},render:function(t){var e=this.updatedNodes&&this.updatedNodes();return e?e.length<2&&!e[0].text?e:t(this.tag||"DIV",e):t()},destroyed:function(){var t=this.$el;t.parentNode.removeChild(t)}}),u=o.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(s.selector)}},tag:{type:String,default:"DIV"}},render:function(t){if(this.disabled){var e=this.$scopedSlots&&this.$scopedSlots.default();return e?e.length<2&&!e[0].text?e:t(this.tag,e):t()}return t()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var t=this;this.$nextTick((function(){t.disabled||t.slotFn===t.$scopedSlots.default||(t.container.updatedNodes=t.$scopedSlots.default),t.slotFn=t.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(t){t?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(a)return document.querySelector(this.selector)},insertTargetEl:function(){if(a){var t=document.querySelector("body"),e=document.createElement(this.tag);e.id=this.selector.substring(1),t.appendChild(e)}},mount:function(){var t=this.getTargetEl(),e=document.createElement("DIV");this.prepend&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),this.container=new d({el:e,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.name||"portal",u),e.defaultSelector&&c(e.defaultSelector)}"undefined"!=typeof window&&window.Vue&&window.Vue===o&&o.use(l)},247:function(t,e){for(var n="-_",o=36;o--;)n+=o.toString(36);for(o=36;o---10;)n+=o.toString(36).toUpperCase();t.exports=function(t){var e="";for(o=t||21;o--;)e+=n[64*Math.random()|0];return e}},366:function(t,e,n){"use strict";n.r(e);n(213),n(5),n(163);var o=n(1),r=n(31),i=n.n(r),s=n(268);e.default=(t={},e="search-engine")=>{const n=document.getElementById(e);if(n){const r=document.getElementById("".concat(e,"-dock"));let c;const a=window.storefront&&window.storefront.getScopedSlots,d=new URLSearchParams(window.location.search),u={...t.props,term:d.get("term"),page:parseInt(d.get("page"),10)||1,brands:d.getAll("brands[]"),categories:d.getAll("categories[]"),defaultFilters:d.getAll("filters[]").reduce(((t,e)=>{const[n,o]=e.split(":");return t[n]||(t[n]=[]),t[n].push(o),t}),{})},{sort:l}=n.dataset;l&&(u.defaultSort=l),["brands","categories"].forEach((t=>{if(n.dataset[t]){try{u[t]=JSON.parse(n.dataset[t])}catch(t){return void console.error(t)}u[t]&&u[t].length<2&&(u["isFixed".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))]=!0),u.hasPopularItems=!1}}));const{resource:f}=window.document.body.dataset;switch(f){case"brands":case"categories":if(!u[f]||!u[f].length)return void console.error(new Error("Skipping SearchEngine with empty '".concat(f,"' filter")))}const p=new i.a({data:{countRequests:0,canShowItems:!r,term:u.term},render(t){const i=this,d={"update:term"(t){i.term=t}};return r&&(d.fetch=function({fetching:t}){t.then((t=>{i.countRequests++;const e=()=>{i.canShowItems=!0,Object(o.$)("#search-engine-snap").remove()};if(!i.canShowItems)if(i.countRequests>1)e();else if(t&&t.hits)if(c&&c.length===t.hits.hits.length){let n=!0;const{hits:o}=t.hits;for(let t=0;t<o.length;t++)if(!c.find('[data-product-id="'.concat(o[t]._id,'"]')).length){n=!1;break}n||e()}else e()}))}),t(s.a,{attrs:{id:r?null:e},props:{...u,term:i.term,canShowItems:i.canShowItems,loadMoreSelector:r?"#search-engine-load":null},on:d,scopedSlots:"function"==typeof a?a(n,t,!r):void 0})}});if(r){Object(o.$)(n).append(Object(o.$)("<div>",{id:"search-engine-load"}));const t=()=>p.$mount(r);if(c=Object(o.$)("#search-engine-snap .product-item"),c.length){const e=new window.MutationObserver((()=>{clearTimeout(n),e.disconnect(),setTimeout(t,150)}));e.observe(c[0],{childList:!0});const n=setTimeout((()=>{e.disconnect(),t()}),3e3)}else t()}else p.$mount(n)}}}}]);
//# sourceMappingURL=chunk.855495f2fc1494b6f171.js.map