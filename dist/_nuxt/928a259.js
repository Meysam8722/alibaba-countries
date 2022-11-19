(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{370:function(t,e,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("39ae668f",content,!0,{sourceMap:!1})},375:function(t,e,r){"use strict";r(370)},376:function(t,e,r){var n=r(36)(!1);n.push([t.i,".new-font-text[data-v-75e5f226],span[data-v-75e5f226]{font-family:NunitoSans}span[data-v-75e5f226]{font-size:16px}.v-btn[data-v-75e5f226]{text-transform:unset!important}",""]),t.exports=n},395:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(93),{name:"CountryDetails",props:{selectedCountry:{type:String,required:!0}},data:function(){return{country:[],alphaCodes:"",attrs:{class:"mb-6",boilerplate:!0,elevation:2},borderCountries:[]}},computed:{darkMode:function(){return this.$store.getters.getDarkMode}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",url:"https://restcountries.com/v2/alpha/".concat(t.selectedCountry.toLowerCase())},e.next=3,t.$axios(r).then((function(e){t.country=e.data,t.makeBorderCountriesString()})).catch((function(t){console.log(t.response)}));case 3:case"end":return e.stop()}}),e)})))()},methods:{makeBorderCountriesString:function(){var i,t="";for(i=0;i<this.country.borders.length;i++)t+=this.country.borders[i].toLowerCase(),i!==this.country.borders.length-1&&(t+=",");this.alphaCodes=t,this.getBorderCountries()},getBorderCountries:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",url:"https://restcountries.com/v2/alpha?codes=".concat(t.alphaCodes)},e.next=3,t.$axios(r).then((function(e){t.borderCountries=e.data})).catch((function(t){console.log(t.response.data)}));case 3:case"end":return e.stop()}}),e)})))()},goToBorderCountry:function(t){this.$router.push("/details/"+t.alpha3Code)}}}),c=(r(375),r(84)),l=r(112),d=r.n(l),v=r(364),f=r(470),_=r(476),h=r(249),m=r(471),C=r(472),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"pr-3 pr-sm-16",attrs:{cols:"12",sm:"6"}},[r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"600",type:"card"}})],1),t._v(" "),r("v-skeleton-loader",t._b({attrs:{"max-width":"600",type:"article, actions"}},"v-skeleton-loader",t.attrs,!1))],1)],1):t.$fetchState.error?r("v-container",[r("div",{staticClass:"d-flex flex-row justify-center align-center mt-10"},[t._v("\n    An error occurred!\n  ")])]):r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"pr-3 pr-sm-16",attrs:{cols:"12",sm:"6"}},[r("v-img",{attrs:{src:t.country.flag,"aspect-ratio":"4/3","max-height":"300"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-row",{class:t.darkMode?"white--text":"ultraDarkBlue--text"},[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("span",[r("strong",[t._v("Native Name:")]),t._v(" "+t._s(t.country.nativeName)),r("br")]),t._v(" "),r("span",[r("strong",[t._v("Population:")]),t._v(" "+t._s(t.country.population)),r("br")]),t._v(" "),r("span",[r("strong",[t._v("Region:")]),t._v(" "+t._s(t.country.region)),r("br")]),t._v(" "),r("span",[r("strong",[t._v("Sub Region:")]),t._v(" "+t._s(t.country.subregion)),r("br")]),t._v(" "),r("span",[r("strong",[t._v("Capital:")]),t._v(" "+t._s(t.country.capital)),r("br")])]),t._v(" "),r("v-col",{staticClass:"pl-3 pl-sm-16",attrs:{cols:"12",sm:"6"}},[r("span",[r("strong",[t._v("Top Level domain:")]),t._v("\n            "+t._s(t.country.topLevelDomain&&t.country.topLevelDomain[0])),r("br")]),t._v(" "),r("span",{staticClass:"font-weight-bold"},[t._v("Currencies:")]),t._v(" "),t._l(t.country.currencies,(function(e,n){return r("span",{key:e.code},[t._v(t._s(e.name+(n===t.country.currencies.length-1?"":", ")))])})),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"font-weight-bold"},[t._v("Languages:")]),t._v(" "),t._l(t.country.languages,(function(e,n){return r("span",{key:e.iso639_1},[t._v(t._s(e.name+(n===t.country.languages.length-1?"":", "))+"\n          ")])}))],2)],1),t._v(" "),r("div",{staticClass:"d-flex flex-column mt-6"},[r("span",{staticClass:"font-weight-bold",class:t.darkMode?"white--text":"ultraDarkBlue--text"},[t._v("Border Countries:")]),t._v(" "),r("div",{staticClass:"d-flex flex-row mt-3 flex-wrap"},t._l(t.borderCountries,(function(e,n){return r("v-btn",{key:n,staticClass:"ma-3 ml-0 new-font-text",class:t.darkMode?"white--text":"ultraDarkBlue--text",staticStyle:{"font-weight":"600"},attrs:{color:t.darkMode?"darkBlue":"white"},on:{click:function(r){return t.goToBorderCountry(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)])],1)],1)],1)}),[],!1,null,"75e5f226",null);e.default=component.exports;d()(component,{VBtn:v.a,VCol:f.a,VContainer:_.a,VImg:h.a,VRow:m.a,VSkeletonLoader:C.a})}}]);