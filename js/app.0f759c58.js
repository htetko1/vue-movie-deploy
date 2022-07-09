(function(){"use strict";var e={1643:function(e,t,n){var o=n(9242),r=n(3396);const i=(0,r._)("h1",null,[(0,r._)("span",null,"Vue"),(0,r.Uk)("Movies")],-1);function a(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("main",null,[(0,r.Wm)(o)])],64)}var u=n(89);const l={},s=(0,u.Z)(l,[["render",a]]);var c=s,v=n(2483),f=n(7139);const m={class:"home"},p={class:"feature-card"},h=(0,r._)("img",{src:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",alt:"f9",class:"feature-img"},null,-1),d=(0,r._)("div",{class:"detail"},[(0,r._)("h3",null,"Guardians of the Galaxy Vol. 2"),(0,r._)("p",null,"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.")],-1),w=(0,r._)("input",{type:"submit",value:"Search"},null,-1),_={class:"movies-list"},g={class:"product-img"},y=["src"],b={class:"type"},k={class:"detail"},M={class:"year"};function O(e,t,n,i,a,u){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",p,[(0,r.Wm)(l,{to:"/movie/58054f8a"},{default:(0,r.w5)((()=>[h,d])),_:1})]),(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)((e=>i.SearchMovies()),["prevent"])),class:"search-box"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"What are you looking for?","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),w],32),(0,r._)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.imdbID},[(0,r.Wm)(l,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:(0,r.w5)((()=>[(0,r._)("div",g,[(0,r._)("img",{src:e.Poster,alt:"Movie Poster"},null,8,y),(0,r._)("div",b,(0,f.zw)(e.Type),1)]),(0,r._)("div",k,[(0,r._)("p",M,(0,f.zw)(e.Year),1),(0,r._)("h3",null,(0,f.zw)(e.Title),1)])])),_:2},1032,["to"])])))),128))])])}var z=n(4870),j={apikey:"c72849f8"},T={setup(){const e=(0,z.iH)(""),t=(0,z.iH)([]),n=()=>{""!=e.value&&fetch(`http://www.omdbapi.com/?apikey=${j.apikey}&s=${e.value}`).then((e=>e.json())).then((n=>{t.value=n.Search,e.value=""}))};return{search:e,movies:t,SearchMovies:n}}};const D=(0,u.Z)(T,[["render",O]]);var x=D;const S={class:"movie-detail"},N=["src"];function P(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("h2",null,(0,f.zw)(o.movie.Title),1),(0,r._)("p",null,(0,f.zw)(o.movie.Year),1),(0,r._)("img",{src:o.movie.Poster,alt:"Movie Poster"},null,8,N),(0,r._)("p",null,(0,f.zw)(o.movie.Plot),1)])}var W={setup(){const e=(0,z.iH)({}),t=(0,v.yj)();return(0,r.wF)((()=>{fetch(`http://www.omdbapi.com/?apikey=${j.apikey}&i=${t.params.id}&plot=full`).then((e=>e.json())).then((t=>{e.value=t}))})),{movie:e,route:t}}};const Y=(0,u.Z)(W,[["render",P]]);var V=Y;const E=[{path:"/",name:"home",component:x},{path:"/movie/:id",name:"MovieDetail",component:V}],H=(0,v.p7)({history:(0,v.r5)(),routes:E});var I=H,F=n(65),G=(0,F.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(c).use(G).use(I).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var c=l(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkvue_movies"]=self["webpackChunkvue_movies"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1643)}));o=n.O(o)})();
//# sourceMappingURL=app.0f759c58.js.map