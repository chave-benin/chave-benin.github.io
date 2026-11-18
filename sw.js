/* Chavé – cache hors connexion. Changer VERSION à chaque mise à jour importante. */
var VERSION="chave-v6";
var CORE=["./","index.html","en.js","favicon.png","img/logo-mark.webp","img/logo-mot.webp","img/agent-chave.webp","fonts/jakarta-latin.woff2","fonts/jakarta-latin-ext.woff2","icons/icon-192.png","mentions-legales.html","confidentialite.html"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  if(r.mode==="navigate"||r.destination==="document"){
    /* pages : réseau d'abord (toujours à jour), cache si hors connexion */
    e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(VERSION).then(function(c){c.put(r,cp)});return res}).catch(function(){return caches.match(r).then(function(m){return m||caches.match("index.html")})}));
  }else{
    /* fichiers : cache d'abord, mis à jour en arrière-plan */
    e.respondWith(caches.match(r).then(function(m){var f=fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(VERSION).then(function(c){c.put(r,cp)})}return res}).catch(function(){return m});return m||f}));
  }
});
