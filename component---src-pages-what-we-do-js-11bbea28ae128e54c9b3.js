webpackJsonp([0xd5e7247fb8ae],{9:function(e,t,a){var r,n;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===n)for(var i in r)l.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(a.default=a,e.exports=a):(r=[],n=function(){return a}.apply(t,r),!(void 0!==n&&(e.exports=n)))}()},16:function(e,t){},12:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(1),i=r(o),u=a(9),s=r(u),c=a(17),d=r(c);a(16);var f=function(e){var t,a=e.children,r=e.href,o=e.to,u=e.type,c=n(e,["children","href","to","type"]),f=o?d.default:r?"a":"button";return i.default.createElement(f,l({className:(0,s.default)("button",(t={},t["button--"+u]=u,t)),to:o,href:r},c),a)};t.default=f,e.exports=t.default},36:function(e,t){},28:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(1),i=r(o),u=a(8),s=r(u);a(36);var c=["(max-width: 600px)","(min-width: 601px)","(min-width: 1201px)"],d=function(e){var t=e.images,a=t.filter(function(e){return e}),r=a[0];return i.default.createElement("picture",null,t.map(function(e,t){return i.default.createElement("source",{srcSet:e,media:c[t],key:t})}),i.default.createElement("img",{alt:"",className:"hero-img",src:r,role:"presentation"}))},f=function(e){var t=e.images,a=e.maxHeight,r=e.text,o=n(e,["images","maxHeight","text"]);return i.default.createElement("div",l({className:"hero"},o),i.default.createElement("div",{className:"hero-inner",style:{maxHeight:a}},i.default.createElement("div",{className:"hero-content"},i.default.createElement(s.default,null,i.default.createElement("h2",{className:"hero-text"},r))),i.default.createElement(d,{images:t})))};t.default=f,e.exports=t.default},146:function(e,t){"use strict";t.__esModule=!0;var a=[{title:"User Experience",text:"We're huge proponents of user-centered design, products will live or die based on the quality of the user experience. Working with small and large clients has provided us with a solid foundation of principles that delight users and keep them coming back."},{title:"Development",text:"We've built sites and applications that serve millions of monthly users. We take advantage of the latest technology and trends to build the highest quality products."},{title:"User Interface Design",text:"Clean and consistent design is one of the corner stones of a successful application or product. We design for the user and thoroughly test all our decisions."},{title:"Branding",text:"If you need a complete branding experience, we can work with you to develop a brand users will fall in love with. From logos to typography and colors, we can help you stand out from the crowd."},{title:"Marketing",text:"There's not a point in building a great product if no one knows about it. We're able to help craft a marketing strategy that gets your product in front of your target market and focuses on conversions and user engagement."}];t.default=a,e.exports=t.default},320:function(e,t,a){e.exports=a.p+"static/about-hero-medium.15d78823.jpg"},321:function(e,t,a){e.exports=a.p+"static/about-hero-small.e5c74c82.jpg"},322:function(e,t,a){e.exports=a.p+"static/about-hero.e5834b85.jpg"},252:function(e,t){},152:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n),o=a(17),i=(r(o),a(8)),u=r(i),s=a(28),c=r(s),d=a(12),f=r(d),p=a(322),m=r(p),h=a(320),g=r(h),v=a(321),y=r(v),x=a(146),b=r(x);a(252);var E=function(){return l.default.createElement("div",{className:"page page-about"},l.default.createElement(c.default,{images:[y.default,g.default,m.default],text:"We Build Quality Digital Products",maxHeight:"33vh"}),l.default.createElement(u.default,null,l.default.createElement("div",{className:"page-intro"},l.default.createElement("p",{className:"lede"},l.default.createElement("span",{className:"logo"},"Turn",l.default.createElement("strong",null,"Two"))," ","is a premier digital product development consultancy. With over a decade of experience, we've partnered with Fortune 500's as well as small startups to produce quality digital products and applications. With a focus on gaming and the esports industry, we are the choice to bring your product to life."),l.default.createElement("p",null,l.default.createElement(f.default,null,"Get Started"))),l.default.createElement("h2",{className:"header-underline"},"We Build Products"),l.default.createElement("p",{style:{marginBottom:48}},"We help clients bring their ideas to life, from concept to final product. Whether you are starting with an idea or have an existing product, we have the experience to jump in and execute. We can help"," ",l.default.createElement("strong",null,"modernize"),", ",l.default.createElement("strong",null,"update"),", or"," ",l.default.createElement("strong",null,"rebuild")," your exsiting product. We're up-to-date with the current industry trends and technniques."),l.default.createElement("div",{className:"services"},b.default.map(function(e,t){return l.default.createElement("div",{className:"service",key:t},l.default.createElement("h3",{className:"service-title header-underline"},e.title),l.default.createElement("p",{className:"service-text"},e.text))}))))};t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-what-we-do-js-11bbea28ae128e54c9b3.js.map