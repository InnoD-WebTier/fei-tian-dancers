"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/fei-tian-dancers/index.html","8832794fd9bf56a90a30616a7bb612f3"],["/fei-tian-dancers/static/css/main.5ea30db4.css","f434dc975e8de7e800c25319e3c5d597"],["/fei-tian-dancers/static/js/main.20b79318.js","f3c768fb42d9ca932290822a3557d038"],["/fei-tian-dancers/static/media/AileenLuo.8f23ba9a.png","8f23ba9a7ace6236cc461e4be9e12030"],["/fei-tian-dancers/static/media/AnyaFang.a6697f5c.png","a6697f5cf19b5d58ea5e01f946f21b3a"],["/fei-tian-dancers/static/media/ChelseaYim.af5a9d8a.png","af5a9d8ad6e8a1f189193018d091a224"],["/fei-tian-dancers/static/media/EmilyTang.3041f111.png","3041f11154948da6f0bc42dbc1ca7913"],["/fei-tian-dancers/static/media/FluorinePascal.55836354.png","558363548a3c6380660a3dcea37dd4f7"],["/fei-tian-dancers/static/media/IreneLee.6849a149.png","6849a1493598b472aef841f263bc194b"],["/fei-tian-dancers/static/media/JaritaLee.7b4691e9.png","7b4691e9b4c8e2cbb7e334fba4cf95ed"],["/fei-tian-dancers/static/media/JessicaYu.108ace2c.png","108ace2cdc20f86b5b923c16ba8c510a"],["/fei-tian-dancers/static/media/blessings1.d625b314.png","d625b3140218992b76d8329b61740729"],["/fei-tian-dancers/static/media/blessings2.42eac184.png","42eac1842772763f67d47628f695834c"],["/fei-tian-dancers/static/media/blessings3.5546a498.png","5546a4982686448e77a6e162bdb06be0"],["/fei-tian-dancers/static/media/facebook.ae7001d6.png","ae7001d62ab9399ca013f3eae2026c36"],["/fei-tian-dancers/static/media/feitiandancerslogo.f202eea7.jpg","f202eea7ee81524923cab9f5f4ea5401"],["/fei-tian-dancers/static/media/group.80986bc5.jpg","80986bc552344357f41adca3e07e16c3"],["/fei-tian-dancers/static/media/hues1.54b135df.png","54b135df264d8d04a8486fdadc2f9fa5"],["/fei-tian-dancers/static/media/hues2.c1b2fd09.png","c1b2fd09262a1abe367981ec0030207a"],["/fei-tian-dancers/static/media/hues3.0fda7583.png","0fda758303e045975c62789559816d77"],["/fei-tian-dancers/static/media/kang1.dc93a21a.png","dc93a21a226aef72c2409f95de496201"],["/fei-tian-dancers/static/media/kang2.14f27f71.png","14f27f71b8bfe4e39d3e4e4c26fa7cd5"],["/fei-tian-dancers/static/media/kang3.4b4a91af.png","4b4a91af6c3d6b5609fac4ffc085e4c4"],["/fei-tian-dancers/static/media/mail.20a2e1dd.png","20a2e1dd62aeb83b712598e0c300b0b6"],["/fei-tian-dancers/static/media/murmurs1.2efceed7.png","2efceed79d47fa055d7cf7ce550a16ab"],["/fei-tian-dancers/static/media/murmurs2.6c981f90.png","6c981f90ffbe7ad9710eda802590df31"],["/fei-tian-dancers/static/media/murmurs3.9c380d08.png","9c380d080f686941d3149033c901b9f2"],["/fei-tian-dancers/static/media/qian1.0fe54252.png","0fe54252d962d22b7dac876d79b8ca2b"],["/fei-tian-dancers/static/media/qian2.368f3038.png","368f3038929692d43b4512700f7b6d02"],["/fei-tian-dancers/static/media/qian3.42f17c3d.png","42f17c3d38a7a808ba74702e6461818e"],["/fei-tian-dancers/static/media/red_flowers1.79181ff8.png","79181ff8bc9beac13c8593c11c002da5"],["/fei-tian-dancers/static/media/red_flowers2.b0349267.png","b034926766debd0e6e69f7e2ed555c98"],["/fei-tian-dancers/static/media/sil1.85e65381.png","85e6538101d0b5a7253978718b70ff6b"],["/fei-tian-dancers/static/media/sil2.e45099c7.png","e45099c7fa90875a9aa13a869cd48078"],["/fei-tian-dancers/static/media/sil3.7a3276df.png","7a3276dfe11a7c5f139ed770b667ecd4"],["/fei-tian-dancers/static/media/sword1.7e21deeb.png","7e21deeb42080994da483053b815d3c5"],["/fei-tian-dancers/static/media/sword2.774b2728.png","774b2728c266ccd74554635728a2fe3b"],["/fei-tian-dancers/static/media/sword3.003122c4.png","003122c4d3298c9e0925384caa184c03"],["/fei-tian-dancers/static/media/youtube.069b8754.png","069b8754503adf97ab97e7aa70ff981f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/fei-tian-dancers/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});