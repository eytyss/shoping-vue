(function(i){function e(e){for(var t,a,c=e[0],n=e[1],l=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=n[t]);s&&s(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),p()}function p(){for(var i,e=0;e<o.length;e++){for(var p=o[e],t=!0,a=1;a<p.length;a++){var c=p[a];0!==r[c]&&(t=!1)}t&&(o.splice(e--,1),i=n(n.s=p[0]))}return i}var t={},a={app:0},r={app:0},o=[];function c(i){return n.p+"js/"+({about:"about"}[i]||i)+"."+{about:"99a99dc9","chunk-1fe84834":"f29d5683","chunk-6622df00":"cf490bbe","chunk-80b4fc06":"316b4ee2","chunk-d3e4d2b6":"8236533c"}[i]+".js"}function n(e){if(t[e])return t[e].exports;var p=t[e]={i:e,l:!1,exports:{}};return i[e].call(p.exports,p,p.exports,n),p.l=!0,p.exports}n.e=function(i){var e=[],p={"chunk-1fe84834":1,"chunk-6622df00":1,"chunk-80b4fc06":1,"chunk-d3e4d2b6":1};a[i]?e.push(a[i]):0!==a[i]&&p[i]&&e.push(a[i]=new Promise((function(e,p){for(var t="css/"+({about:"about"}[i]||i)+"."+{about:"31d6cfe0","chunk-1fe84834":"96dff02c","chunk-6622df00":"0404ccfd","chunk-80b4fc06":"0404ccfd","chunk-d3e4d2b6":"0404ccfd"}[i]+".css",r=n.p+t,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===t||d===r))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],d=l.getAttribute("data-href");if(d===t||d===r)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var t=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+i+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete a[i],s.parentNode.removeChild(s),p(o)},s.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(s)})).then((function(){a[i]=0})));var t=r[i];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,p){t=r[i]=[e,p]}));e.push(t[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=c(i);var h=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(s);var p=r[i];if(0!==p){if(p){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+i+" failed.\n("+t+": "+a+")",h.name="ChunkLoadError",h.type=t,h.request=a,p[1](h)}r[i]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},n.m=i,n.c=t,n.d=function(i,e,p){n.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:p})},n.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,e){if(1&e&&(i=n(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var p=Object.create(null);if(n.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)n.d(p,t,function(e){return i[e]}.bind(null,t));return p},n.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},n.p="/shoping-vue/",n.oe=function(i){throw console.error(i),i};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var s=d;o.push([0,"chunk-vendors"]),p()})({0:function(i,e,p){i.exports=p("56d7")},"034f":function(i,e,p){"use strict";p("85ec")},"56d7":function(i,e,p){"use strict";p.r(e);p("e260"),p("e6cf"),p("cca6"),p("a79d");var t=p("2b0e"),a=function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{attrs:{id:"app"}},[p("TheHeader"),p("router-view")],1)},r=[],o=function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{attrs:{id:"nav"}},[p("router-link",{attrs:{to:"/AllProducts"}},[i._v("All Products")]),p("router-link",{attrs:{to:"/smartphones"}},[i._v("Smartphones")]),p("router-link",{attrs:{to:"/tablets"}},[i._v("Tablets")]),p("router-link",{attrs:{to:"/cart"}},[i._v("Cart")]),i.socketCart>0?p("span",{staticClass:"counter-cart"},[i._v(" "+i._s(i.socketCart)+" ")]):i._e()],1)},c=[],n={computed:{socketCart:function(){return this.$store.getters["quantity"]}}},l=n,d=(p("e4ab"),p("2877")),h=Object(d["a"])(l,o,c,!1,null,null,null),s=h.exports,m={components:{TheHeader:s}},y=m,g=(p("034f"),Object(d["a"])(y,a,r,!1,null,null,null)),P=g.exports,f=(p("d3b7"),p("3ca3"),p("ddb0"),p("8c4f")),u=function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{staticClass:"home"},[p("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},S=[],b=function(){var i=this,e=i.$createElement,p=i._self._c||e;return p("div",{staticClass:"hello"})},G=[],v={name:"HelloWorld",props:{msg:String}},j=v,A=(p("cd3d"),Object(d["a"])(j,b,G,!1,null,"407a8148",null)),B=A.exports,T={name:"Home",components:{HelloWorld:B}},W=T,C=Object(d["a"])(W,u,S,!1,null,null,null);C.exports;t["a"].use(f["a"]);var k=[{path:"/",name:"All Products",component:function(){return p.e("chunk-6622df00").then(p.bind(null,"a89e"))}},{path:"/about",name:"About",component:function(){return p.e("about").then(p.bind(null,"f820"))}},{path:"/AllProducts",name:"All Products",component:function(){return p.e("chunk-6622df00").then(p.bind(null,"a89e"))}},{path:"/smartphones",name:"smartphones",component:function(){return p.e("chunk-80b4fc06").then(p.bind(null,"21a1"))}},{path:"/tablets",name:"Tablets",component:function(){return p.e("chunk-d3e4d2b6").then(p.bind(null,"160b"))}},{path:"/cart",name:"cart",component:function(){return p.e("chunk-1fe84834").then(p.bind(null,"b789"))}}],E=new f["a"]({routes:k}),_=E,w=(p("c740"),p("a434"),p("2f62"));t["a"].use(w["a"]);var O=new w["a"].Store({state:{cart:[],total:0,qty:0,products:[{id:1,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Graphite",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGraphite.eb49cd62.jpg",price:999},{id:2,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Silver",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProSilver.a28ba0fd.jpg",price:999},{id:3,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Gold",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGold.aa8ea08f.jpg",price:999},{id:4,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Pacific Blue",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProPacificBlue.3560edf5.jpg",price:999},{id:5,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Graphite",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGraphite.eb49cd62.jpg",price:1199},{id:6,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Silver",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProSilver.a28ba0fd.jpg",price:1199},{id:7,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Gold",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGold.aa8ea08f.jpg",price:1199},{id:8,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Pacific Blue",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProPacificBlue.3560edf5.jpg",price:1199},{id:9,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Graphite",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGraphite.eb49cd62.jpg",price:1399},{id:10,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProSilver.a28ba0fd.jpg",price:1399},{id:11,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Gold",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProGold.aa8ea08f.jpg",price:1399},{id:12,type:"Smartphone",brand:"Apple",model:"iPhone 12 Pro",color:"Pacific Blue",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhone12ProPacificBlue.3560edf5.jpg",price:1399},{id:13,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"64 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:399},{id:14,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"64 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:399},{id:15,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"Red",capacity:"64 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSERed.229e99ad.jpg",price:399},{id:14,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:499},{id:15,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:499},{id:16,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"Red",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSERed.229e99ad.jpg",price:499},{id:17,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:599},{id:18,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"White",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSEWhite.b06067b3.jpg",price:599},{id:19,type:"Smartphone",brand:"Apple",model:"iPhone SE",color:"Red",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPhoneSERed.229e99ad.jpg",price:599},{id:20,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Space Gray",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1299},{id:21,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Silver",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1299},{id:22,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Space Gray",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1499},{id:23,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Silver",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1499},{id:24,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1599},{id:25,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1599},{id:26,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Space Gray",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1699},{id:27,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Silver",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1699},{id:28,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Space Gray",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:29,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi",color:"Silver",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1799},{id:30,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1546},{id:31,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1546},{id:32,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1599},{id:33,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1599},{id:34,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1699},{id:35,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1699},{id:36,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:37,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1799},{id:38,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1899},{id:39,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1899},{id:40,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Space Gray",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1999},{id:41,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi",color:"Silver",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1999},{id:42,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:43,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:44,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1899},{id:45,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1899},{id:46,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:47,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:48,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1699},{id:49,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1699},{id:50,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1799},{id:51,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1799},{id:52,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Space Gray",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1899},{id:53,type:"Tablet",brand:"Apple",model:"iPad Pro 11-inch display Wifi + Cellular",color:"Silver",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1899},{id:54,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Space Gray",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:1999},{id:55,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Silver",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:1999},{id:56,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Space Gray",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:2099},{id:55,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Silver",capacity:"256 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:2099},{id:56,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Space Gray",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:2199},{id:57,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Silver",capacity:"512 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:2199},{id:58,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Space Gray",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:2299},{id:59,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Silver",capacity:"1 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:2299},{id:60,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Space Gray",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSpaceGray.260a1523.jpg",price:2399},{id:61,type:"Tablet",brand:"Apple",model:"iPad Pro 12.9-inch display Wifi + Cellular",color:"Silver",capacity:"2 TB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/iPadProSilver.14f40de9.jpg",price:2399},{id:62,type:"Smartphone",brand:"Samsung",model:"S21 5G",color:"Phantom Grey",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/S21PhantomGrey.80353423.jpg",price:799},{id:63,type:"Smartphone",brand:"Samsung",model:"S21 5G",color:"Phantom Pink",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/S21PhantomPink.257b54ed.jpg",price:799},{id:64,type:"Smartphone",brand:"Samsung",model:"S21 5G",color:"Phantom Violet",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/S21PhantomViolet.3df3d7e4.jpg",price:799},{id:65,type:"Smartphone",brand:"Samsung",model:"S21 5G",color:"Phantom White",capacity:"128 GB",imgSrc:"https://shopping-cart-demo-sith.netlify.app/img/S21PhantomWhite.72f4d7e2.jpg",price:799}]},getters:{products:function(i){return i.products},totalSum:function(i){return i.total},quantity:function(i){return i.qty},cart:function(i){return i.cart}},mutations:{addProductToCart:function(i,e){var p=e,t=i.cart.findIndex((function(i){return i.id===p.id}));if(t>=0)i.cart[t].qty++;else{var a={id:p.id,type:p.type,brand:p.brand,model:p.model,color:p.color,capacity:p.capacity,imgSrc:p.imgSrc,price:p.price,qty:1};i.cart.push(a)}i.qty++,i.total+=p.price},removeProductFromCart:function(i,e){var p=e.id,t=i.cart.findIndex((function(i){return i.id===p})),a=i.cart[t];i.cart.splice(t,1),i.qty-=a.qty,i.total-=a.price*a.qty}},actions:{},modules:{}});t["a"].config.productionTip=!1,new t["a"]({router:_,store:O,render:function(i){return i(P)}}).$mount("#app")},"58d0":function(i,e,p){},"85ec":function(i,e,p){},a9b4:function(i,e,p){},cd3d:function(i,e,p){"use strict";p("58d0")},e4ab:function(i,e,p){"use strict";p("a9b4")}});
//# sourceMappingURL=app.54e532ea.js.map