(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{8273:function(e,s,i){"use strict";i.r(s),i.d(s,{CountUp:function(){return a}});var t=function(){return(t=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var a in s=arguments[i])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e}).apply(this,arguments)},a=function(){function e(e,s,i){var a=this;this.endVal=s,this.options=i,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var s=e-a.startTime;a.remaining=a.duration-s,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(s,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(s,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(s/a.duration);var i=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=i?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),s<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(e){var s,i,t,n=(Math.abs(e).toFixed(a.options.decimalPlaces)+"").split(".");if(s=n[0],i=n.length>1?a.options.decimal+n[1]:"",a.options.useGrouping){t="";for(var l=0,r=s.length;l<r;++l)0!==l&&l%3==0&&(t=a.options.separator+t),t=s[r-l-1]+t;s=t}return a.options.numerals&&a.options.numerals.length&&(s=s.replace(/[0-9]/g,function(e){return a.options.numerals[+e]}),i=i.replace(/[0-9]/g,function(e){return a.options.numerals[+e]})),(e<0?"-":"")+a.options.prefix+s+i+a.options.suffix},this.easeOutExpo=function(e,s,i,t){return i*(1-Math.pow(2,-10*e/t))*1024/1023+s},this.options=t(t({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(s),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return a.handleScroll(a)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var s=window.innerHeight+window.scrollY,i=e.el.getBoundingClientRect(),t=i.top+i.height+window.pageYOffset;t<s&&t>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>t&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var s=this.countDown?1:-1;this.endVal=e+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var s=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=s:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=s:this.el.innerHTML=s},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var s=Number(e);return this.ensureNumber(s)?s:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},8703:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-3",function(){return i(5055)}])},6269:function(e,s,i){"use strict";var t=i(5893),a=i(7294);let n=()=>{let[e]=(0,a.useState)(new Date("11/09/2022").getTime()),[s,i]=(0,a.useState)({days:0,hours:0,minutes:0,seconds:0});(0,a.useEffect)(()=>{setInterval(()=>n(),1e3)});let n=()=>{if(e){let s=new Date().getTime(),t=e-s,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3),c=[1,2,3,4,5,6,7,8,9];a="".concat(a),c.includes(n)?n="0".concat(n):c.includes(l)?l="0".concat(l):c.includes(r)&&(r="0".concat(r)),i({days:a,hours:n,minutes:l,seconds:r})}};return(0,t.jsxs)("ul",{className:"lab-ul date",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"count-title days",children:s.days||"0"}),(0,t.jsx)("p",{className:"days_text",children:"Day"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"count-title",children:(0,t.jsx)("span",{className:"hours",children:s.hours||"00"})}),(0,t.jsx)("p",{className:"hours_text",children:"Hour"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"count-title",children:(0,t.jsx)("span",{className:"minutes",children:s.minutes||"00"})}),(0,t.jsx)("p",{className:"minu_text",children:"Minute"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"count-title",children:(0,t.jsx)("span",{className:"seconds",children:s.seconds||"00"})}),(0,t.jsx)("p",{className:"seco_text",children:"Secound"})]})]})};s.Z=n},5055:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return L}});var t=i(5893),a=i(1664),n=i.n(a);let l=[{iconName:"icofont-google-map",text:"New Elefent Road, Dhaka."},{iconName:"icofont-phone",text:"+880 123 456 789"},{iconName:"icofont-envelope",text:"info@Edukon.com"}],r=[{iconName:"icofont-facebook",siteLink:"#",className:"facebook"},{iconName:"icofont-twitter",siteLink:"#",className:"twitter"},{iconName:"icofont-linkedin",siteLink:"#",className:"linkedin"},{iconName:"icofont-instagram",siteLink:"#",className:"instagram"},{iconName:"icofont-pinterest",siteLink:"#",className:"pinterest"}],c=[{text:"All Courses",link:"#"},{text:"Forms and Admision materials",link:"#"},{text:"Professional Courses",link:"#"},{text:"Course Outline",link:"#"},{text:"Policy",link:"#"},{text:"FAQs",link:"#"},{text:"Online Course",link:"#"}],o=[{text:"Summer Sessions",link:"#"},{text:"Events",link:"#"},{text:"Gallery",link:"#"},{text:"Forums",link:"#"},{text:"Privacy Policy",link:"#"},{text:"Terms of Use",link:"#"}],d=[{iconName:"icofont-twitter",desc:(0,t.jsxs)("p",{children:["Aminur islam ",(0,t.jsx)("a",{href:"#",children:"@CodexCoder Edukon #HTML_Template"})," Grab your item, 50% Big Sale Offer !!"]})},{iconName:"icofont-twitter",desc:(0,t.jsxs)("p",{children:["Somrat islam ",(0,t.jsx)("a",{href:"#",children:"@CodexCoder Edukon #HTML_Template"})," Grab your item, 50% Big Sale Offer !!"]})}],h=[{text:"Faculty",link:"#"},{text:"Staff",link:"#"},{text:"Students",link:"#"},{text:"Alumni",link:"#"}],m=()=>(0,t.jsxs)("footer",{className:"style-2",children:[(0,t.jsx)("div",{className:"footer-top padding-tb",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"footer-item our-address",children:(0,t.jsx)("div",{className:"footer-inner",children:(0,t.jsxs)("div",{className:"footer-content",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("img",{src:"/assets/images/logo/01.png",alt:"education",width:"180px"})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("p",{children:"URevise theme number one world class university in the world There are student are studing always in this university for all time."}),(0,t.jsx)("ul",{className:"lab-ul office-address",children:l.map((e,s)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:e.iconName}),e.text]},s))}),(0,t.jsx)("ul",{className:"lab-ul social-icons",children:r.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.siteLink,className:e.className,children:(0,t.jsx)("i",{className:e.iconName})})},s))})]})]})})})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"footer-item",children:(0,t.jsx)("div",{className:"footer-inner",children:(0,t.jsxs)("div",{className:"footer-content",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h4",{children:"Courses"})}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("ul",{className:"lab-ul",children:c.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.link,children:e.text})},s))})})]})})})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"footer-item",children:(0,t.jsx)("div",{className:"footer-inner",children:(0,t.jsxs)("div",{className:"footer-content",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h4",{children:"Quick Links"})}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("ul",{className:"lab-ul",children:o.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.link,children:e.text})},s))})})]})})})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"footer-item twitter-post",children:(0,t.jsx)("div",{className:"footer-inner",children:(0,t.jsxs)("div",{className:"footer-content",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h4",{children:"Recent Tweets"})}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("ul",{className:"lab-ul",children:d.map((e,s)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:e.iconName}),e.desc]},s))})})]})})})})]})})}),(0,t.jsx)("div",{className:"footer-bottom",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"footer-bottom-list",children:h.map((e,s)=>(0,t.jsx)("a",{href:e.link,children:e.text},s))})})})})]});var u=i(7294);let x=()=>{let[e,s]=(0,u.useState)(!1),[i,a]=(0,u.useState)(!1),[l,r]=(0,u.useState)(!1),[c,o]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>200?r(!0):r(!1)})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{className:"header-section style-3 ".concat(l?"header-fixed fadeInUp":""),children:[(0,t.jsx)("div",{className:"header-top ".concat(i?"open":""),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"header-top-area",children:[(0,t.jsxs)("div",{className:"header-top-contact",children:[(0,t.jsx)("a",{href:"#",className:"lab-btn",children:(0,t.jsx)("span",{children:"For Your Question"})}),(0,t.jsx)("a",{href:"tel:+880123456789",children:"+880 123 456 789"}),(0,t.jsx)("a",{href:"mailto:contact@yourmail.com",children:"contact@yourmail.com"})]}),(0,t.jsxs)("div",{className:"header-top-reglog",children:[(0,t.jsx)(n(),{href:"/login",className:"login",children:"Login"}),(0,t.jsx)(n(),{href:"/signup",className:"signup",children:"Register"})]})]})})}),(0,t.jsx)("div",{className:"header-bottom",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"header-wrapper",children:[(0,t.jsx)("div",{className:"logo-search-acte",children:(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("img",{src:"/assets/images/logo/01.png",alt:"logo",width:"180px"})})})}),(0,t.jsxs)("div",{className:"menu-area",children:[(0,t.jsx)("div",{className:"menu",children:(0,t.jsxs)("ul",{className:"lab-ul ".concat(e?"active":""),children:[(0,t.jsxs)("li",{className:"menu-item-has-children",children:[(0,t.jsx)("a",{href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-bs-offset":"0,0",children:"Home"}),(0,t.jsxs)("ul",{className:"lab-ul dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/",children:"Home One"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-2",children:"Home Two"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-3",children:"Home Three"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-4",children:"Home Four"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-5",children:"Home Five"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-6",children:"Home Six"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/index-7",children:"Home Seven"})})]})]}),(0,t.jsxs)("li",{className:"menu-item-has-children",children:[(0,t.jsx)("a",{href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-bs-offset":"0,0",children:"Courses"}),(0,t.jsxs)("ul",{className:"lab-ul dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/course",children:"Course"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/course-single",children:"Course Details"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/course-view",children:"Course View"})})]})]}),(0,t.jsxs)("li",{className:"menu-item-has-children",children:[(0,t.jsx)("a",{href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-bs-offset":"0,0",children:"Blog"}),(0,t.jsxs)("ul",{className:"lab-ul dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/blog",children:"Blog Grid"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/blog-2",children:"Blog Style 2"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/blog-3",children:"Blog Style 3"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/blog-single",children:"Blog Single"})})]})]}),(0,t.jsxs)("li",{className:"menu-item-has-children",children:[(0,t.jsx)("a",{href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-bs-offset":"0,0",children:"Pages"}),(0,t.jsxs)("ul",{className:"lab-ul dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/about",children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/team",children:"Team"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/instructor",children:"Instructor"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/shop",children:"Shop Page"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/shop-single",children:"Shop Details Page"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/cart-page",children:"Shop Cart Page"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/search-page",children:"Search Page"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/search-none",children:"Search None"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/404",children:"404"})})]})]}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/contact",children:"Contact"})})]})}),(0,t.jsx)("div",{className:"search-icon",onClick:()=>o(!c),children:(0,t.jsx)("i",{className:"icofont-search"})}),(0,t.jsxs)("div",{className:"header-bar d-lg-none ".concat(e?"active":""),onClick:()=>s(!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}),(0,t.jsx)("div",{className:"ellepsis-bar d-lg-none",onClick:()=>a(!i),children:(0,t.jsx)("i",{className:"icofont-info-square"})})]})]})})})]}),(0,t.jsxs)("div",{className:"menu-search-form ".concat(c?"open":""),children:[(0,t.jsx)("div",{className:"search-close",onClick:()=>o(!c)}),(0,t.jsxs)("form",{children:[(0,t.jsx)("input",{type:"text",name:"search",placeholder:"Search here..."}),(0,t.jsx)("button",{type:"submit",children:(0,t.jsx)("i",{className:"icofont-search"})})]})]})]})};var p=i(7857);let j=[{iconName:"icofont-users-alt-4",count:"12600",desc:"Students Enrolled"},{iconName:"icofont-graduate-alt",count:"50",desc:"Certified Trainer"},{iconName:"icofont-notification",count:"350",desc:"Professional Courses"},{iconName:"icofont-clock-time",count:"50",desc:"Years of Experience"}],f=()=>(0,t.jsx)("div",{className:"achievement-section style-3 padding-tb",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"counter-part",children:(0,t.jsx)("div",{className:"row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center",children:j.map((e,s)=>(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"count-item",children:(0,t.jsxs)("div",{className:"count-inner",children:[(0,t.jsx)("div",{className:"count-icon",children:(0,t.jsx)("i",{className:e.iconName})}),(0,t.jsxs)("div",{className:"count-content",children:[(0,t.jsxs)("h2",{children:[(0,t.jsx)("span",{className:"count",children:(0,t.jsx)(p.ZP,{end:e.count})}),(0,t.jsx)("span",{children:"+"})]}),(0,t.jsx)("p",{children:e.desc})]})]})})},s))})})})})}),g=()=>(0,t.jsx)("section",{className:"banner-section style-3",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-6",children:(0,t.jsxs)("div",{className:"banner-content",children:[(0,t.jsx)("h2",{className:"title",children:"Build Skills With Experts Any Time Anywhere"}),(0,t.jsx)("p",{className:"desc",children:"Professor is Best & Perfect Venue to Grow up Your Knowledge"}),(0,t.jsx)(n(),{href:"/login",className:"lab-btn",children:(0,t.jsx)("span",{children:"Get Started Now"})})]})})})})})}),N=[{imgUrl:"assets/images/blog/10.jpg",imgAlt:"blog thumb Musa Mahlangove",title:"Learn Basic Web Design with HTML and CSS",author:"Ummi Nishat",date:"April 23,2022",desc:"Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent.",btnText:"Read More"},{imgUrl:"assets/images/blog/11.jpg",imgAlt:"blog thumb Musa Mahlangove",title:"Scottish Creatives To Receive Funded Business.",author:"Begrass Tyson",date:"April 23,2022",desc:"Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent.",btnText:"Read More"},{imgUrl:"assets/images/blog/12.jpg",imgAlt:"blog thumb Musa Mahlangove",title:"Learn Basic Web Design with PHP and Laravel",author:"Musa Mahlangove",date:"April 23,2022",desc:"Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent.",btnText:"Read More"}],v=()=>(0,t.jsx)("div",{className:"blog-section padding-tb",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header text-center",children:[(0,t.jsx)("span",{className:"subtitle",children:"Don’t Miss the Day"}),(0,t.jsx)("h2",{className:"title",children:"Upcomming Events"})]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4",children:N.map((e,s)=>(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"post-item style-3",children:(0,t.jsxs)("div",{className:"post-inner",children:[(0,t.jsx)("div",{className:"post-thumb",children:(0,t.jsx)(n(),{href:"/blog-single",children:(0,t.jsx)("img",{src:"".concat(e.imgUrl),alt:"".concat(e.imgAlt)})})}),(0,t.jsxs)("div",{className:"post-content",children:[(0,t.jsx)(n(),{href:"/blog-single",children:(0,t.jsx)("h4",{children:e.title})}),(0,t.jsx)("div",{className:"meta-post",children:(0,t.jsxs)("ul",{className:"lab-ul",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-ui-user"}),e.author]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-calendar"}),e.date]})]})}),(0,t.jsx)("p",{children:e.desc}),(0,t.jsx)(n(),{href:"/blog-single",className:"lab-btn",children:(0,t.jsx)("span",{children:e.btnText})})]})]})})},s))})})]})});var b=i(965),w=i(719);let y=[{imgUrl:"assets/images/clients/01.jpg",imgAlt:"education thumb Musa Mahlangove",desc:"Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",name:"Angel Mili",degi:"Assistant principal"},{imgUrl:"assets/images/clients/02.jpg",imgAlt:"education thumb Musa Mahlangove",desc:"Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",name:"Musa Mahlangove",degi:"Assistant principal"},{imgUrl:"assets/images/clients/03.jpg",imgAlt:"education thumb Musa Mahlangove",desc:"Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.",name:"Umme Nishat",degi:"Assistant principal"}],V=()=>(0,t.jsx)("div",{className:"clients-section padding-tb",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header text-center",children:[(0,t.jsx)("span",{className:"subtitle",children:"Don’t Miss the Day"}),(0,t.jsx)("h2",{className:"title",children:"The People Says About Us"})]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"clients-slider overflow-hidden",children:(0,t.jsx)("div",{className:"swiper-wrapper",children:(0,t.jsx)(w.tq,{spaceBetween:20,slidesPerView:2,loop:"true",autoplay:{delay:5e3,disableOnInteraction:!1},modules:[b.pt],breakpoints:{0:{width:0,slidesPerView:1},768:{width:768,slidesPerView:2},1200:{width:1200,slidesPerView:2.8}},children:y.map((e,s)=>(0,t.jsx)(w.o5,{children:(0,t.jsx)("div",{className:"client-item",children:(0,t.jsxs)("div",{className:"client-inner",children:[(0,t.jsx)("div",{className:"client-thumb",children:(0,t.jsx)("img",{src:"".concat(e.imgUrl),alt:"".concat(e.imgAlt)})}),(0,t.jsxs)("div",{className:"client-content",children:[(0,t.jsx)("p",{children:e.desc}),(0,t.jsxs)("div",{className:"client-info",children:[(0,t.jsx)("h6",{className:"client-name",children:e.name}),(0,t.jsx)("span",{className:"client-degi",children:e.degi})]})]})]})})},s))})})})})]})}),S=[{imgUrl:"assets/images/course/13.jpg",imgAlt:"course Musa Mahlangove",courseName:"Web Design",coursePrice:"$199.00",courseTitle:"Learn Basic Web Design with HTML & CSS",user:"200",commentCount:"23",btnText:"Read More"},{imgUrl:"assets/images/course/14.jpg",imgAlt:"course Musa Mahlangove",courseName:"PHP",coursePrice:"Free",courseTitle:"Learn Basic Web Design with HTML & CSS",user:"200",commentCount:"23",btnText:"Read More"},{imgUrl:"assets/images/course/15.jpg",imgAlt:"course Musa Mahlangove",courseName:"English",coursePrice:"$199.00",courseTitle:"Learn Basic Web Design with HTML & CSS",user:"200",commentCount:"23",btnText:"Read More"}],k=()=>(0,t.jsx)("div",{className:"course-section style-2 padding-tb",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsx)("span",{className:"subtitle",children:"Don’t Miss"}),(0,t.jsx)("h2",{className:"title",children:"Lincon’s Courses"}),(0,t.jsxs)("div",{className:"course-navigations",children:[(0,t.jsx)("div",{className:"course-navi course-navi-next",children:(0,t.jsx)("i",{className:"icofont-double-left"})}),(0,t.jsx)("div",{className:"course-navi course-navi-prev",children:(0,t.jsx)("i",{className:"icofont-double-right"})})]})]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"course-slider p-2",children:(0,t.jsx)("div",{className:"swiper-wrapper",children:(0,t.jsx)(w.tq,{spaceBetween:20,slidesPerView:2,loop:"true",autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{prevEl:".course-navi-prev",nextEl:".course-navi-next"},modules:[b.pt,b.W_],breakpoints:{0:{width:0,slidesPerView:1},768:{width:768,slidesPerView:2},1200:{width:1200,slidesPerView:2.85}},children:S.map((e,s)=>(0,t.jsx)(w.o5,{children:(0,t.jsx)("div",{className:"course-item style-3",children:(0,t.jsxs)("div",{className:"course-inner text-center",children:[(0,t.jsxs)("div",{className:"course-thumb",children:[(0,t.jsx)("img",{src:"".concat(e.imgUrl),alt:"".concat(e.imgAlt)}),(0,t.jsxs)("ul",{className:"course-info lab-ul",children:[(0,t.jsx)("li",{children:(0,t.jsx)("span",{className:"course-name",children:e.courseName})}),(0,t.jsx)("li",{children:(0,t.jsx)("span",{className:"price",children:e.coursePrice})}),(0,t.jsx)("li",{children:(0,t.jsxs)("span",{className:"ratting",children:[(0,t.jsx)("i",{className:"icofont-ui-rate-blank"}),(0,t.jsx)("i",{className:"icofont-ui-rate-blank"}),(0,t.jsx)("i",{className:"icofont-ui-rate-blank"}),(0,t.jsx)("i",{className:"icofont-ui-rate-blank"}),(0,t.jsx)("i",{className:"icofont-ui-rate-blank"})]})})]})]}),(0,t.jsxs)("div",{className:"course-content",children:[(0,t.jsx)("a",{href:"course-single.html",children:(0,t.jsx)("h4",{children:e.courseTitle})}),(0,t.jsxs)("div",{className:"course-details",children:[(0,t.jsxs)("div",{className:"couse-count",children:[(0,t.jsx)("i",{className:"icofont-users-alt-3"})," ",e.user]}),(0,t.jsxs)("div",{className:"couse-topic",children:[(0,t.jsx)("i",{className:"icofont-speech-comments"})," ",e.commentCount]})]}),(0,t.jsx)("a",{href:"course-single.html",className:"lab-btn",children:(0,t.jsx)("span",{children:e.btnText})})]})]})})},s))})})})})]})}),M=[{imgUrl:"assets/images/event/01.jpg",imgAlt:"event Musa Mahlangove",Date:"13",MonthYear:"Nav 2021",title:"The Way of Higher Education & Its Difficulties",Time:"08:30 am",Place:" National Auditorium, Dhaka"}],E=[{Date:"13",MonthYear:"Nav 2021",title:"Convocation and Celebration 2021",Time:"08:30 am",Place:" National Auditorium, Dhaka"},{Date:"15",MonthYear:"Nav 2021",title:"Convocation and Celebration 2021",Time:"08:30 am",Place:" National Auditorium, Dhaka"},{Date:"18",MonthYear:"Nav 2021",title:"Convocation and Celebration 2021",Time:"08:30 am",Place:" National Auditorium, Dhaka"},{Date:"25",MonthYear:"Nav 2021",title:"Convocation and Celebration 2021",Time:"08:30 am",Place:" National Auditorium, Dhaka"}],P=()=>(0,t.jsx)("div",{className:"event-section padding-tb",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header text-center",children:[(0,t.jsx)("span",{className:"subtitle",children:"Don’t Miss the Day"}),(0,t.jsx)("h2",{className:"title",children:"Upcomming Events"}),(0,t.jsx)("p",{className:"desc",children:"Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn"})]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsxs)("div",{className:"row row-cols-lg-2 row-cols-1 g-4",children:[M.map((e,s)=>(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"event-left",children:(0,t.jsx)("div",{className:"event-item",children:(0,t.jsxs)("div",{className:"event-inner",children:[(0,t.jsx)("div",{className:"event-thumb",children:(0,t.jsx)("img",{src:"".concat(e.imgUrl),alt:"".concat(e.imgAlt)})}),(0,t.jsxs)("div",{className:"event-content",children:[(0,t.jsx)("div",{className:"event-date-info",children:(0,t.jsxs)("div",{className:"edi-box",children:[(0,t.jsx)("h4",{children:e.Date}),(0,t.jsx)("p",{children:e.MonthYear})]})}),(0,t.jsxs)("div",{className:"event-content-info",children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("h3",{children:e.title})}),(0,t.jsxs)("ul",{className:"lab-ul",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-clock-time"})," ",e.Time]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-google-map"}),e.Place]})]})]})]})]})})})},s)),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"event-right",children:E.map((e,s)=>(0,t.jsx)("div",{className:"event-item",children:(0,t.jsx)("div",{className:"event-inner",children:(0,t.jsxs)("div",{className:"event-content",children:[(0,t.jsx)("div",{className:"event-date-info",children:(0,t.jsxs)("div",{className:"edi-box",children:[(0,t.jsx)("h4",{children:e.Date}),(0,t.jsx)("p",{children:e.MonthYear})]})}),(0,t.jsxs)("div",{className:"event-content-info",children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("h5",{children:e.title})}),(0,t.jsxs)("ul",{className:"lab-ul",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-clock-time"})," ",e.Time]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"icofont-google-map"})," ",e.Place]})]})]})]})})},s))})})]})})]})}),A=[{imgUrl:"assets/images/feature/01.png",imgAlt:"feature Musa Mahlangove",title:"Book & Library",titleSpan:"Facelities",btnText:"View More"},{imgUrl:"assets/images/feature/02.png",imgAlt:"feature Musa Mahlangove",title:"Online & Offline",titleSpan:"Courses",btnText:"View More"},{imgUrl:"assets/images/feature/03.png",imgAlt:"feature Musa Mahlangove",title:"Certification After",titleSpan:"Course Complete",btnText:"View More"},{imgUrl:"assets/images/feature/04.png",imgAlt:"feature Musa Mahlangove",title:"Professional and",titleSpan:"Ingenious Instructor",btnText:"View More"},{imgUrl:"assets/images/feature/05.png",imgAlt:"feature Musa Mahlangove",title:"Air Condition Class",titleSpan:"Room",btnText:"View More"},{imgUrl:"assets/images/feature/06.png",imgAlt:"feature Musa Mahlangove",title:"Best Industry",titleSpan:"Leader",btnText:"View More"}],T=()=>(0,t.jsx)("div",{className:"feature-section padding-tb",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-header text-center",children:[(0,t.jsx)("span",{className:"subtitle",children:"Why Choose Us"}),(0,t.jsx)("h2",{className:"title",children:"Get Everything for Learning"})]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"row g-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center",children:A.map((e,s)=>(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"feature-item",children:(0,t.jsxs)("div",{className:"feature-inner",children:[(0,t.jsx)("div",{className:"feature-thumb",children:(0,t.jsx)("img",{src:"".concat(e.imgUrl),alt:"".concat(e.imgAlt)})}),(0,t.jsxs)("div",{className:"feature-content",children:[(0,t.jsx)(n(),{href:"/course-single",children:(0,t.jsxs)("h5",{children:[e.title," ",(0,t.jsx)("span",{children:e.titleSpan})]})}),(0,t.jsxs)(n(),{href:"/course-single",className:"lab-btn-text",children:[e.btnText," ",(0,t.jsx)("span",{})]})]})]})})},s))})})]})}),C=()=>(0,t.jsx)("div",{className:"newsletters-section padding-tb",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"newsletter-area",children:[(0,t.jsx)("div",{className:"news-mass",children:(0,t.jsx)("i",{className:"icofont-email"})}),(0,t.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-12",children:(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsx)("h2",{className:"title",children:"Subscribe to Newsletter"}),(0,t.jsx)("p",{children:"Subscribe free and get the notification and latest offers of our courses."})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-12",children:(0,t.jsxs)("div",{className:"section-wrapper",children:[(0,t.jsx)("h5",{children:"Enter Your Name & Email Press to Submit Button"}),(0,t.jsxs)("form",{className:"newsletter-form",children:[(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name"}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email address"}),(0,t.jsx)("button",{type:"submit",className:"lab-btn",children:(0,t.jsx)("span",{children:"Get Started Now"})})]})]})})]})]})})});var D=i(6269);let O=(0,t.jsxs)("h2",{className:"title fw-normal text-white",children:["Join on Day Long Free Workshop for ",(0,t.jsx)("span",{className:"fw-bold",children:"Advance"})," ",(0,t.jsx)("span",{className:"theme-color fw-bold",children:"PHP"})," ",(0,t.jsx)("span",{className:"fw-bold",children:"Language"})]}),F=()=>(0,t.jsx)("div",{className:"workshop-section padding-tb",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row row-cols-xl-2 row-cols-1",children:(0,t.jsxs)("div",{className:"col",children:[(0,t.jsxs)("div",{className:"section-header",children:[(0,t.jsx)("span",{className:"subtitle",children:"Save The Day"}),O]}),(0,t.jsx)("div",{className:"section-wrapper",children:(0,t.jsx)("div",{className:"workshop-date",children:(0,t.jsx)(D.Z,{})})})]})})})}),U=()=>(0,t.jsx)("div",{className:"workshop-join",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"section-wrapper",children:[(0,t.jsx)("div",{className:"workshop-title",children:(0,t.jsx)("h5",{children:"Just Create Your Free Account Now & Join the Workshop"})}),(0,t.jsx)("div",{className:"workshop-join-form",children:(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{className:"input-area",children:[(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Username"}),(0,t.jsx)("input",{type:"email",name:"name",placeholder:"Email"}),(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Phone"})]}),(0,t.jsx)("div",{className:"submit-area",children:(0,t.jsx)("button",{type:"submit",className:"lab-btn",children:(0,t.jsx)("span",{children:"Join Now"})})})]})})]})})}),R=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{}),(0,t.jsx)(g,{}),(0,t.jsx)(T,{}),(0,t.jsx)(k,{}),(0,t.jsx)(f,{}),(0,t.jsx)(P,{}),(0,t.jsx)(F,{}),(0,t.jsx)(U,{}),(0,t.jsx)(v,{}),(0,t.jsx)(V,{}),(0,t.jsx)(C,{}),(0,t.jsx)(m,{})]});var L=R},7857:function(e,s,i){"use strict";var t=i(7294),a=i(8273);function n(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,t)}return i}function l(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?n(Object(i),!0).forEach(function(s){var t,a;t=e,a=i[s],s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))})}return e}function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function c(e,s){if(null==e)return{};var i,t,a=function(e,s){if(null==e)return{};var i,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)i=n[t],s.indexOf(i)>=0||(a[i]=e[i]);return a}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)i=n[t],!(s.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect;function d(e){var s=t.useRef(e);return o(function(){s.current=e}),t.useCallback(function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return s.current.apply(void 0,i)},[])}var h=function(e,s){var i=s.decimal,t=s.decimals,n=s.duration,l=s.easingFn,r=s.end,c=s.formattingFn,o=s.numerals,d=s.prefix,h=s.separator,m=s.start,u=s.suffix,x=s.useEasing,p=s.enableScrollSpy,j=s.scrollSpyDelay,f=s.scrollSpyOnce;return new a.CountUp(e,r,{startVal:m,duration:n,decimal:i,decimalPlaces:t,easingFn:l,formattingFn:c,numerals:o,separator:h,prefix:d,suffix:u,useEasing:x,useGrouping:!!h,enableScrollSpy:p,scrollSpyDelay:j,scrollSpyOnce:f})},m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],u={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},x=function(e){var s=t.useMemo(function(){return l(l({},u),e)},[e]),i=s.ref,a=s.startOnMount,n=s.enableReinitialize,r=s.delay,o=s.onEnd,x=s.onStart,p=s.onPauseResume,j=s.onReset,f=s.onUpdate,g=c(s,m),N=t.useRef(),v=t.useRef(),b=t.useRef(!1),w=d(function(){return h("string"==typeof i?i:i.current,g)}),y=d(function(e){var s=N.current;if(s&&!e)return s;var i=w();return N.current=i,i}),V=d(function(){var e=function(){return y(!0).start(function(){null==o||o({pauseResume:S,reset:k,start:E,update:M})})};r&&r>0?v.current=setTimeout(e,1e3*r):e(),null==x||x({pauseResume:S,reset:k,update:M})}),S=d(function(){y().pauseResume(),null==p||p({reset:k,start:E,update:M})}),k=d(function(){y().el&&(v.current&&clearTimeout(v.current),y().reset(),null==j||j({pauseResume:S,start:E,update:M}))}),M=d(function(e){y().update(e),null==f||f({pauseResume:S,reset:k,start:E})}),E=d(function(){k(),V()}),P=d(function(e){a&&(e&&k(),V())});return t.useEffect(function(){b.current?n&&P(!0):(b.current=!0,P())},[n,b,P,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),t.useEffect(function(){return function(){k()}},[k]),{start:E,pauseResume:S,reset:k,update:M,getCountUp:y}},p=["className","redraw","containerProps","children","style"];s.ZP=function(e){var s=e.className,i=e.redraw,a=e.containerProps,n=e.children,o=e.style,h=c(e,p),m=t.useRef(null),u=t.useRef(!1),j=x(l(l({},h),{},{ref:m,startOnMount:"function"!=typeof n||0===e.delay,enableReinitialize:!1})),f=j.start,g=j.reset,N=j.update,v=j.pauseResume,b=j.getCountUp,w=d(function(){f()}),y=d(function(s){e.preserveValue||g(),N(s)}),V=d(function(){if("function"==typeof e.children&&!(m.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}b()});return(t.useEffect(function(){V()},[V]),t.useEffect(function(){u.current&&y(e.end)},[e.end,y]),t.useEffect(function(){i&&u.current&&w()},[w,i,i&&e]),t.useEffect(function(){!i&&u.current&&w()},[w,i,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),t.useEffect(function(){u.current=!0},[]),"function"==typeof n)?n({countUpRef:m,start:f,reset:g,update:N,pauseResume:v,getCountUp:b}):t.createElement("span",r({className:s,ref:m,style:o},a),void 0!==e.start?b().formattingFn(e.start):"")}}},function(e){e.O(0,[664,719,774,888,179],function(){return e(e.s=8703)}),_N_E=e.O()}]);