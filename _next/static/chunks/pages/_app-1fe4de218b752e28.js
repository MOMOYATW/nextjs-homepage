(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3452)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,a){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,r=n(7273).Z,o=a(n(7294)),l=n(1003),i=n(7795),u=n(4465),c=n(2692),s=n(8245),f=n(9246),_=n(227),d=n(3468);let v=new Set;function p(e,t,n,a){if(l.isLocalURL(t)){if(!a.bypassPrefetchedCheck){let r=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(v.has(o))return;v.add(o)}Promise.resolve(e.prefetch(t,n,a)).catch(e=>{})}}function h(e){return"string"==typeof e?e:i.formatUrl(e)}let b=o.default.forwardRef(function(e,t){let n,a;let{href:i,as:v,children:b,prefetch:m,passHref:y,replace:x,shallow:g,scroll:j,locale:N,onClick:k,onMouseEnter:C,onTouchStart:M,legacyBehavior:E=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let w=!1!==m,P=o.default.useContext(c.RouterContext),S=o.default.useContext(s.AppRouterContext),T=null!=P?P:S,R=!P,{href:I,as:L}=o.default.useMemo(()=>{if(!P){let e=h(i);return{href:e,as:v?h(v):e}}let[t,n]=l.resolveHref(P,i,!0);return{href:t,as:v?l.resolveHref(P,v):n||t}},[P,i,v]),D=o.default.useRef(I),A=o.default.useRef(L);E&&(a=o.default.Children.only(n));let H=E?a&&"object"==typeof a&&a.ref:t,[K,X,B]=f.useIntersection({rootMargin:"200px"}),U=o.default.useCallback(e=>{(A.current!==L||D.current!==I)&&(B(),A.current=L,D.current=I),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[L,H,I,B,K]);o.default.useEffect(()=>{T&&X&&w&&p(T,I,L,{locale:N})},[L,I,X,N,w,null==P?void 0:P.locale,T]);let F={ref:U,onClick(e){E||"function"!=typeof k||k(e),E&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,a,r,i,u,c,s,f){let{nodeName:_}=e.currentTarget,d="A"===_.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:i,locale:c,scroll:u}):t[r?"replace":"push"](a||n,{forceOptimisticNavigation:!f})};s?o.default.startTransition(v):v()}(e,T,I,L,x,g,j,N,R,w)},onMouseEnter(e){E||"function"!=typeof C||C(e),E&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),T&&(w||!R)&&p(T,I,L,{locale:N,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof M||M(e),E&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),T&&(w||!R)&&p(T,I,L,{locale:N,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||y||"a"===a.type&&!("href"in a.props)){let V=void 0!==N?N:null==P?void 0:P.locale,Z=(null==P?void 0:P.isLocaleDomain)&&_.getDomainLocale(L,V,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);F.href=Z||d.addBasePath(u.addLocale(L,V,null==P?void 0:P.defaultLocale))}return E?o.default.cloneElement(a,F):o.default.createElement("a",Object.assign({},O,F),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!o,[s,f]=a.useState(!1),[_,d]=a.useState(null);a.useEffect(()=>{if(o){if(!c&&!s&&_&&_.tagName){let e=function(e,t,n){let{id:a,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=i.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=l.get(a)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},i.push(n),l.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),l.delete(a);let t=i.findIndex(e=>e.root===a.root&&e.margin===a.margin);t>-1&&i.splice(t,1)}}}(_,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let a=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(a)}},[_,c,n,t,s]);let v=a.useCallback(()=>{f(!1)},[]);return[d,s,v]};var a=n(7294),r=n(4686);let o="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(5893);n(4744);var r=n(7294),o=n(1664),l=n.n(o),i=n(7537),u=n.n(i);let c=e=>{let{href:t,text:n,active:r}=e;return(0,a.jsx)(l(),{href:t,className:u().nav__link+" ".concat(r?u().nav__link_active:""),children:n})};var s=n(8394),f=n.n(s);let _=[{text:"Posts",href:"/"},{text:"Tags",href:"/"},{text:"About",href:"/"},{text:"RSS",href:"/"}],d=()=>{let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(-1);return(0,a.jsx)("header",{className:f().header,children:(0,a.jsxs)("nav",{className:f().nav,children:[(0,a.jsx)(l(),{href:"/",onClick:()=>{o(-1),t(!1)},children:(0,a.jsx)("h1",{className:"logo",children:"Davy's Blog"})}),(0,a.jsxs)("div",{onClick:()=>t(!e),className:"".concat(f().nav__menu_bar," ").concat(e?f().nav__menu_bar_active:""),children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]}),(0,a.jsx)("div",{className:"".concat(f().nav__menu_list," ").concat(e?f().nav__menu_list_active:f().nav__menu_list_inactive),children:_.map((e,r)=>(0,a.jsx)("div",{onClick:()=>{o(r),t(!1)},children:(0,a.jsx)(c,{...e,active:n===r})},e.text))})]})})};var v=n(3794),p=n.n(v);let h=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:p().copyright,children:(0,a.jsx)("span",{children:"\xa9 2022 Davy Tao. All rights reserved."})})});function b(e){let{Component:t,pageProps:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)(t,{...n}),(0,a.jsx)(h,{})]})}},4744:function(){},3794:function(e){e.exports={copyright:"Footer_copyright__0_Me0"}},7537:function(e){e.exports={nav__link:"NavItem_nav__link___4Qbo",nav__link_active:"NavItem_nav__link_active___6TE3"}},8394:function(e){e.exports={header:"Navbar_header__VcZdC",nav:"Navbar_nav__b3Hnv",nav__menu_list:"Navbar_nav__menu_list__RRwcf",nav__menu_list_active:"Navbar_nav__menu_list_active__OOKHO","scale-up-ver-top":"Navbar_scale-up-ver-top__V8idv","fade-in-right":"Navbar_fade-in-right__Qmkag",nav__menu_list_inactive:"Navbar_nav__menu_list_inactive__a_JMo","scale-down-ver-top":"Navbar_scale-down-ver-top__CGXNX",nav__menu_bar:"Navbar_nav__menu_bar__BXdgh",nav__menu_bar_active:"Navbar_nav__menu_bar_active__As6V7"}},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);