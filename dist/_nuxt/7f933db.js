(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("dc093880",content,!0,{sourceMap:!1})},226:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3618ecb6",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{darkMode:function(){return this.$store.getters.getDarkMode}}},o=(n(296),n(84)),c=n(112),d=n.n(c),l=n(363),f=n(366),h=n(364),v=n(356),m=n(365),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{elevation:"2",color:t.darkMode?"darkBlue":"white","max-height":"60px"}},[n("div",{staticClass:"d-flex flex-row justify-space-between align-center full-width mx-0 mx-sm-10"},[n("h3",{class:t.darkMode?"white--text":"ultraDarkBlue--text"},[t._v("\n        Where in the world?\n      ")]),t._v(" "),n("v-btn",{staticClass:"mr-n3 mr-sm-n4",class:t.darkMode?"white--text":"ultraDarkBlue--text",attrs:{text:""},on:{click:function(e){return t.$store.commit("setDarkMode",!t.darkMode)}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-weather-night ")]),t._v(" "),n("span",{staticStyle:{"font-weight":"600"}},[t._v("Dark Mode")])],1)],1)]),t._v(" "),n("v-main",{class:t.darkMode?"main-dark-container":"main-light-container"},[n("Nuxt")],1)],1)}),[],!1,null,"7bcec93e",null);e.a=component.exports;d()(component,{VApp:l.a,VAppBar:f.a,VBtn:h.a,VIcon:v.a,VMain:m.a})},259:function(t,e,n){n(260),t.exports=n(261)},283:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(!e.state.authenticated)return n("/login")}},290:function(t,e,n){"use strict";n(224)},291:function(t,e,n){var r=n(36)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},296:function(t,e,n){"use strict";n(226)},297:function(t,e,n){var r=n(36)(!1);r.push([t.i,".full-width[data-v-7bcec93e]{width:100%!important}.main-light-container[data-v-7bcec93e]{background-color:#fafafa}.main-dark-container[data-v-7bcec93e]{background-color:#202c37}h3[data-v-7bcec93e]{font-weight:900}h3[data-v-7bcec93e],span[data-v-7bcec93e]{font-family:NunitoSans}@media only screen and (max-width:600px){h3[data-v-7bcec93e]{font-size:14px}span[data-v-7bcec93e]{font-size:12px}}.v-btn[data-v-7bcec93e]{text-transform:unset!important}",""]),t.exports=r},335:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"getters",(function(){return c}));var r=function(){return{darkMode:!1}},o={setDarkMode:function(t,e){t.darkMode=e}},c={getDarkMode:function(t){return t.darkMode}}},72:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(290),n(84)),c=n(112),d=n.n(c),l=n(363),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;d()(component,{VApp:l.a})}},[[259,8,3,9]]]);