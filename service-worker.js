!function(){"use strict";var e={7145:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(r,a){function i(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(4615),a=n(7162),i=n(5836),o="/offline.html",c=new a.CacheFirst;(0,i.warmStrategyCache)({urls:[o],strategy:c});const u=n(9819);(0,r.registerRoute)((({request:e})=>"navigate"===e.mode),new a.NetworkFirst({cacheName:"pages",plugins:[new u.CacheableResponsePlugin({statuses:[200]})]})),(0,r.registerRoute)((({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),new a.StaleWhileRevalidate({cacheName:"assets",plugins:[new u.CacheableResponsePlugin({statuses:[200]})]})),(0,r.setCatchHandler)((({event:e})=>s(void 0,void 0,void 0,(function*(){return"document"===e.request.destination?c.handle({event:e,request:o}):Response.error()}))))},5414:function(e,t,n){n.d(t,{v:function(){return s}}),n(7524),n(3125),n(3119),n(120),n(4895);class s{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}},3709:function(e,t,n){n.d(t,{x:function(){return r}});var s=n(5414);n(4895);class r{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new s.v(e)}}},4895:function(){try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},3125:function(e,t,n){n.d(t,{V:function(){return s}}),n(913);class s extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}},7524:function(e,t,n){n(3125),n(913)},2536:function(e,t,n){n.d(t,{x:function(){return a}}),n(913);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a={updateDetails:e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(s.googleAnalytics),getPrecacheName:e=>e||r(s.precache),getPrefix:()=>s.prefix,getRuntimeName:e=>e||r(s.runtime),getSuffix:()=>s.suffix}},3119:function(e,t,n){n.d(t,{C:function(){return s}}),n(913);const s=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},120:function(e,t,n){n.d(t,{k:function(){return s}}),n(913);const s=null},6902:function(e,t,n){function s(e){return new Promise((t=>setTimeout(t,e)))}n.d(t,{V:function(){return s}}),n(913)},913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},7565:function(e,t,n){n.d(t,{f:function(){return s}}),n(913);const s=new Set},6550:function(){try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},7977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},9144:function(){try{self["workbox:recipes:6.5.3"]&&_()}catch(e){}},2e3:function(e,t,n){n.d(t,{t:function(){return r}}),n(7524),n(120);var s=n(5188);n(9080);class r extends s.A{constructor(e,t,n){super((({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)}}},5188:function(e,t,n){n.d(t,{A:function(){return a}}),n(7524);var s=n(1505),r=n(8179);n(9080);class a{constructor(e,t,n=s.g){this.handler=(0,r.M)(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=(0,r.M)(e)}}},1491:function(e,t,n){n.d(t,{F:function(){return i}}),n(7524),n(3119);var s=n(1505),r=(n(120),n(8179)),a=n(3125);n(9080);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const s=n.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:n});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:n,request:e,event:t,params:r})}catch(e){c=Promise.reject(e)}const u=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async s=>{if(u)try{return await u.handle({url:n,request:e,event:t,params:r})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw s}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:s}){const r=this._routes.get(n.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:n,event:s});if(i)return r=i,(Array.isArray(r)&&0===r.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t=s.g){this._defaultHandlerMap.set(t,(0,r.M)(e))}setCatchHandler(e){this._catchHandler=(0,r.M)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a.V("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a.V("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},9080:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},5917:function(e,t,n){n.d(t,{X:function(){return o}}),n(120);var s=n(3125),r=n(5188),a=n(2e3),i=n(3486);function o(e,t,n){let o;if("string"==typeof e){const s=new URL(e,location.href),a=({url:e})=>e.href===s.href;o=new r.A(a,t,n)}else if(e instanceof RegExp)o=new a.t(e,t,n);else if("function"==typeof e)o=new r.A(e,t,n);else{if(!(e instanceof r.A))throw new s.V("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}return(0,i.u)().registerRoute(o),o}n(9080)},6226:function(e,t,n){n.d(t,{H:function(){return r}});var s=n(3486);function r(e){(0,s.u)().setCatchHandler(e)}n(9080)},1505:function(e,t,n){n.d(t,{g:function(){return s}}),n(9080);const s="GET"},3486:function(e,t,n){n.d(t,{u:function(){return a}});var s=n(1491);let r;n(9080);const a=()=>(r||(r=new s.F,r.addFetchListener(),r.addCacheListener()),r)},8179:function(e,t,n){n.d(t,{M:function(){return s}}),n(7524),n(9080);const s=e=>e&&"object"==typeof e?e:{handle:e}},4868:function(e,t,n){n.d(t,{b:function(){return a}}),n(7524),n(120);var s=n(3125),r=n(951);n(1094),n(6873);class a extends r._{async _handle(e,t){let n,r=await t.cacheMatch(e);if(r);else try{r=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}if(!r)throw new s.V("no-response",{url:e.url,error:n});return r}}},495:function(e,t,n){n.d(t,{n:function(){return i}}),n(7524),n(120);var s=n(3125),r=n(8878),a=n(951);n(1094),n(6873);class i extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(r.S),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[],r=[];let a;if(this._networkTimeoutSeconds){const{id:s,promise:i}=this._getTimeoutPromise({request:e,logs:n,handler:t});a=s,r.push(i)}const i=this._getNetworkPromise({timeoutId:a,request:e,logs:n,handler:t});r.push(i);const o=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await i)());if(!o)throw new s.V("no-response",{url:e.url});return o}_getTimeoutPromise({request:e,logs:t,handler:n}){let s;return{promise:new Promise((t=>{s=setTimeout((async()=>{t(await n.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:s}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:s}){let r,a;try{a=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(r=e)}return e&&clearTimeout(e),!r&&a||(a=await s.cacheMatch(t)),a}}},8757:function(e,t,n){n.d(t,{j:function(){return i}}),n(7524),n(120);var s=n(3125),r=n(8878),a=n(951);n(1094),n(6873);class i extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(r.S)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(n);let r,a=await t.cacheMatch(e);if(a);else try{a=await n}catch(e){e instanceof Error&&(r=e)}if(!a)throw new s.V("no-response",{url:e.url,error:r});return a}}},951:function(e,t,n){n.d(t,{_:function(){return i}});var s=n(2536),r=n(3125),a=(n(120),n(3119),n(6358));n(6873);class i{constructor(e={}){this.cacheName=s.x.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,s="params"in e?e.params:void 0,r=new a.G(this,{event:t,request:n,params:s}),i=this._getResponse(r,n,t);return[i,this._awaitComplete(i,r,n,t)]}async _getResponse(e,t,n){let s;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(s=await this._handle(t,e),!s||"error"===s.type)throw new r.V("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:r,event:n,request:t}),s)break;if(!s)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))s=await r({event:n,request:t,response:s});return s}async _awaitComplete(e,t,n,s){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:n,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:n,response:r,error:a}),t.destroy(),a)throw a}}},6358:function(e,t,n){function s(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}n.d(t,{G:function(){return h}}),n(7524),n(913);class r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}n(120);var a=n(7565),i=n(3119),o=n(6902),c=n(3125);function u(e){return"string"==typeof e?new Request(e):e}n(6873);class h{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new r,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=u(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(e){if(e instanceof Error)throw new c.V("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:r,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:s.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=u(e);let n;const{cacheName:s,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},r),{cacheName:s});n=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:s,matchOptions:r,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=u(e);await(0,o.V)(0);const r=await this.getCacheKey(n,"write");if(!t)throw new c.V("cache-put-with-no-response",{url:(0,i.C)(r.url)});const h=await this._ensureResponseSafeToCache(t);if(!h)return!1;const{cacheName:l,matchOptions:d}=this._strategy,f=await self.caches.open(l),p=this.hasCallback("cacheDidUpdate"),g=p?await async function(e,t,n,r){const a=s(t.url,n);if(t.url===a)return e.match(t,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),o=await e.keys(t,i);for(const t of o)if(a===s(t.url,n))return e.match(t,r)}(f,r.clone(),["__WB_REVISION__"],d):null;try{await f.put(r,p?h.clone():h)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of a.f)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:l,oldResponse:g,newResponse:h.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=u(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[n]=s}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),s=s=>{const r=Object.assign(Object.assign({},s),{state:n});return t[e](r)};yield s}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}},6873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}},8878:function(e,t,n){n.d(t,{S:function(){return s}}),n(6873);const s={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}},1094:function(e,t,n){n(120),n(3119),n(6873)},9819:function(e,t,n){n.r(t),n.d(t,{CacheableResponse:function(){return s.v},CacheableResponsePlugin:function(){return r.x}});var s=n(5414),r=n(3709);n(4895)},5836:function(e,t,n){n.r(t),n.d(t,{googleFontsCache:function(){return P},imageCache:function(){return M},offlineFallback:function(){return z},pageCache:function(){return I},staticResourceCache:function(){return A},warmStrategyCache:function(){return U}});var s=n(5917),r=n(8757),a=n(4868),i=n(3709),o=(n(7524),n(2536));function c(e){e.then((()=>{}))}n(913),n(3119),n(120);var u=n(7565),h=n(3125);const l=(e,t)=>t.some((t=>e instanceof t));let d,f;const p=new WeakMap,g=new WeakMap,w=new WeakMap,m=new WeakMap,y=new WeakMap;let _={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return g.get(e);if("objectStoreNames"===t)return e.objectStoreNames||w.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(R(this),e),b(p.get(this))}:function(...e){return b(t.apply(R(this),e))}:function(e,...n){const s=t.call(R(this),e,...n);return w.set(s,e.sort?e.sort():[e]),b(s)}:(e instanceof IDBTransaction&&function(e){if(g.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));g.set(e,t)}(e),l(e,d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,_):e);var t}function b(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(b(e.result)),s()},a=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&p.set(t,e)})).catch((()=>{})),y.set(t,e),t}(e);if(m.has(e))return m.get(e);const t=v(e);return t!==e&&(m.set(e,t),y.set(t,e)),t}const R=e=>y.get(e),x=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=C.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!x.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let i=a.store;return s&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),r&&a.done]))[0]};return k.set(t,a),a}var E;E=_,_={...E,get:(e,t,n)=>q(e,t)||E.get(e,t,n),has:(e,t)=>!!q(e,t)||E.has(e,t)},n(6550);const N="cache-entries",T=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class D{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(N,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),b(n).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const n={url:e=T(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},s=(await this.getDb()).transaction(N,"readwrite",{durability:"relaxed"});await s.store.put(n),await s.done}async getTimestamp(e){const t=await this.getDb(),n=await t.get(N,this._getId(e));return null==n?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let s=await n.transaction(N).store.index("timestamp").openCursor(null,"prev");const r=[];let a=0;for(;s;){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s=await s.continue()}const i=[];for(const e of r)await n.delete(N,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+T(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const i=indexedDB.open(e,t),o=b(i);return s&&i.addEventListener("upgradeneeded",(e=>{s(b(i.result),e.oldVersion,e.newVersion,b(i.transaction),e)})),n&&i.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class S{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new D(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const e of t)await n.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,c(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<n}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class L{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:n,cachedResponse:s})=>{if(!s)return null;const r=this._isResponseDateFresh(s),a=this._getCacheExpiration(n);c(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return r?s:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this._getCacheExpiration(e);await n.updateTimestamp(t.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),u.f.add(t))}_getCacheExpiration(e){if(e===o.x.getRuntimeName())throw new h.V("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new S(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function P(e={}){const t=`${e.cachePrefix||"google-fonts"}-stylesheets`,n=`${e.cachePrefix||"google-fonts"}-webfonts`,o=e.maxAgeSeconds||31536e3,c=e.maxEntries||30;(0,s.X)((({url:e})=>"https://fonts.googleapis.com"===e.origin),new r.j({cacheName:t})),(0,s.X)((({url:e})=>"https://fonts.gstatic.com"===e.origin),new a.b({cacheName:n,plugins:[new i.x({statuses:[0,200]}),new L({maxAgeSeconds:o,maxEntries:c})]}))}function U(e){self.addEventListener("install",(t=>{const n=e.urls.map((n=>e.strategy.handleAll({event:t,request:new Request(n)})[1]));t.waitUntil(Promise.all(n))}))}function M(e={}){const t=e.cacheName||"images",n=e.matchCallback||(({request:e})=>"image"===e.destination),r=e.maxAgeSeconds||2592e3,o=e.maxEntries||60,c=e.plugins||[];c.push(new i.x({statuses:[0,200]})),c.push(new L({maxEntries:o,maxAgeSeconds:r}));const u=new a.b({cacheName:t,plugins:c});(0,s.X)(n,u),e.warmCache&&U({urls:e.warmCache,strategy:u})}function A(e={}){const t=e.cacheName||"static-resources",n=e.matchCallback||(({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),a=e.plugins||[];a.push(new i.x({statuses:[0,200]}));const o=new r.j({cacheName:t,plugins:a});(0,s.X)(n,o),e.warmCache&&U({urls:e.warmCache,strategy:o})}n(9144);var O=n(495);function I(e={}){const t=e.cacheName||"pages",n=e.matchCallback||(({request:e})=>"navigate"===e.mode),r=e.networkTimeoutSeconds||3,a=e.plugins||[];a.push(new i.x({statuses:[0,200]}));const o=new O.n({networkTimeoutSeconds:r,cacheName:t,plugins:a});(0,s.X)(n,o),e.warmCache&&U({urls:e.warmCache,strategy:o})}var K=n(6226);function j(e,t){const n=t();return e.waitUntil(n),n}function V(e){if(!e)throw new h.V("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h.V("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}n(7977);class W{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class F{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let B;var H=n(951);class $ extends H._{constructor(e={}){e.cacheName=o.x.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push($.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const s=t.params||{};if(!this._fallbackToNetwork)throw new h.V("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const r=s.integrity,a=e.integrity,i=!a||a===r;n=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||r:void 0})),r&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new h.V("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,s]of this.plugins.entries())s!==$.copyRedirectedCacheableResponsesPlugin&&(s===$.defaultPrecacheCacheabilityPlugin&&(e=n),s.cacheWillUpdate&&t++);0===t?this.plugins.push($.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}$.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},$.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await async function(e,t){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new h.V("cross-origin-copy-response",{origin:n});const s=e.clone(),r={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(r):r,i=function(){if(void 0===B){const e=new Response("");if("body"in e)try{new Response(e.body),B=!0}catch(e){B=!1}B=!1}return B}()?s.body:await s.blob();return new Response(i,a)}(e):e}};class X{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new $({cacheName:o.x.getPrecacheName(e),plugins:[...t,new F({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=V(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h.V("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h.V("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return j(e,(async()=>{const t=new W;this.strategy.plugins.push(t);for(const[t,n]of this._urlsToCacheKeys){const s=this._cacheKeysToIntegrities.get(n),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:s,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:a,event:e}))}const{updatedURLs:n,notUpdatedURLs:s}=t;return{updatedURLs:n,notUpdatedURLs:s}}))}activate(e){return j(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h.V("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let G;const Q=()=>(G||(G=new X),G);function J(e){return Q().matchPrecache(e)}function z(e={}){const t=e.pageFallback||"offline.html",n=e.imageFallback||!1,s=e.fontFallback||!1;self.addEventListener("install",(e=>{const r=[t];n&&r.push(n),s&&r.push(s),e.waitUntil(self.caches.open("workbox-offline-fallbacks").then((e=>e.addAll(r))))})),(0,K.H)((async e=>{const r=e.request.destination,a=await self.caches.open("workbox-offline-fallbacks");return"document"===r?await J(t)||await a.match(t)||Response.error():"image"===r&&!1!==n?await J(n)||await a.match(n)||Response.error():"font"===r&&!1!==s&&(await J(s)||await a.match(s))||Response.error()}))}},4615:function(e,t,n){n.r(t),n.d(t,{NavigationRoute:function(){return r},RegExpRoute:function(){return a.t},Route:function(){return s.A},Router:function(){return o.F},registerRoute:function(){return i.X},setCatchHandler:function(){return c.H},setDefaultHandler:function(){return h}}),n(7524),n(120);var s=n(5188);n(9080);class r extends s.A{constructor(e,{allowlist:t=[/./],denylist:n=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=n}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const n=e.pathname+e.search;for(const e of this._denylist)if(e.test(n))return!1;return!!this._allowlist.some((e=>e.test(n)))}}var a=n(2e3),i=n(5917),o=n(1491),c=n(6226),u=n(3486);function h(e){(0,u.u)().setDefaultHandler(e)}},7162:function(e,t,n){n.r(t),n.d(t,{CacheFirst:function(){return s.b},CacheOnly:function(){return i},NetworkFirst:function(){return o.n},NetworkOnly:function(){return u},StaleWhileRevalidate:function(){return h.j},Strategy:function(){return a._},StrategyHandler:function(){return l.G}});var s=n(4868),r=(n(7524),n(120),n(3125)),a=n(951);n(1094),n(6873);class i extends a._{async _handle(e,t){const n=await t.cacheMatch(e);if(!n)throw new r.V("no-response",{url:e.url});return n}}var o=n(495),c=n(6902);class u extends a._{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let n,s;try{const n=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,c.V)(1e3*this._networkTimeoutSeconds);n.push(e)}if(s=await Promise.race(n),!s)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(n=e)}if(!s)throw new r.V("no-response",{url:e.url,error:n});return s}}var h=n(8757),l=n(6358)}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(7145)}();