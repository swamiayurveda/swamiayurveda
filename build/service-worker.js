"use strict";var precacheConfig=[["/swamiayurveda/build/index.html","ff244046967b07102b359c6d80d18cd1"],["/swamiayurveda/build/static/js/main.6a559d33.js","c4c4d5997a96552df6587fd85b8a5378"],["/swamiayurveda/build/static/media/air.399061ad.svg","399061ad99f822e416545f55f704ca1d"],["/swamiayurveda/build/static/media/body.a3d7ad2a.svg","a3d7ad2a5ee9c9c1b473553a76e4a865"],["/swamiayurveda/build/static/media/books.f8e57db4.svg","f8e57db45666e023cd7a632b6d4db350"],["/swamiayurveda/build/static/media/earth.719c61c3.svg","719c61c31c21744be0593fae9b88c0b3"],["/swamiayurveda/build/static/media/ether.d1f25fa6.svg","d1f25fa6319afc7a3cf7792379b919ef"],["/swamiayurveda/build/static/media/fire.156d37c1.svg","156d37c13739d69e89fc768f35d3dea1"],["/swamiayurveda/build/static/media/heart-gray-unfilled.788db5d6.svg","788db5d6c8a9fc3706fbfd6bef28702e"],["/swamiayurveda/build/static/media/heart-red-filled.258c628b.svg","258c628b39c1150c9243166c1f95735d"],["/swamiayurveda/build/static/media/icon-tertiary.f5e387dd.png","f5e387ddcf70f5b13689a32d73cc7bec"],["/swamiayurveda/build/static/media/icon.6daa6568.png","6daa6568ad55f7add961a7605cc9bbf7"],["/swamiayurveda/build/static/media/land.8f991cdd.svg","8f991cdd8ecaaed8b540d309ec621e8e"],["/swamiayurveda/build/static/media/mortar.a77cf917.svg","a77cf91701005ce4b28af0ab93eaacd7"],["/swamiayurveda/build/static/media/plant.45a7b701.svg","45a7b7012c18c0fca6ff5cd7fca40c89"],["/swamiayurveda/build/static/media/plant2.ed1259a2.svg","ed1259a230c8a0347b3f478271a989a1"],["/swamiayurveda/build/static/media/style.f85db4ba.css","f85db4ba3cda17d70fd882f2eff3689a"],["/swamiayurveda/build/static/media/sunflower.b1a9c86b.svg","b1a9c86b0f6084b6f5a32ee39a6d7ca4"],["/swamiayurveda/build/static/media/water.e5017cd9.svg","e5017cd9e68c4226519f8b2d348fd23d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/swamiayurveda/build/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});