(function(e){function t(t){for(var a,i,l=t[0],o=t[1],u=t[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/nidmterms-ui/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},1062:function(e,t,r){"use strict";var a=r("eecf"),n=r.n(a);n.a},"180b":function(e,t,r){e.exports=r.p+"img/nidm-terms-background.46014f3b.png"},"1a6b":function(e,t,r){},"1bf0":function(e,t,r){},4879:function(e,t,r){"use strict";var a=r("1a6b"),n=r.n(a);n.a},"4b5d":function(e,t,r){"use strict";var a=r("ab7b"),n=r.n(a);n.a},"4bb8":function(e,t,r){"use strict";var a=r("ee01"),n=r.n(a);t["default"]=n.a},"4d55":function(e,t,r){"use strict";var a=r("7a7e"),n=r("4bb8"),s=(r("dc67"),r("2877")),i=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"09bc5ed8",null);t["default"]=i.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{staticClass:"navbar-logo",attrs:{src:r("9d64"),alt:"Nidm-terms Logo"}})]),a("span",{staticClass:"community-name"},[e._v("NIDM Terminology")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1)],1)],1),a("router-view")],1)},s=[],i=r("5f5b");a["default"].use(i["a"]);var l={name:"App",data:function(){return{terms:[],sourceList:[],interlexTerms:[],selectedTerm:null,selectedFile:null,image:{backgroundImage:"url(https://vuejs.org/images/logo.png)"}}},methods:{doNext:function(){this.$router.push("/annotate")}}},o=l,u=(r("034f"),r("2877")),c=Object(u["a"])(o,n,s,!1,null,null,null),d=c.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.results?r("div",[e._v(" "+e._s(e.results)+" "),r("div",{staticClass:"details"},e._l(e.results,(function(t){return r("ul",{key:t["_source"]["ilx"],staticClass:"list-group",attrs:{term:t}},[e._v(" "+e._s(t["_source"]["label"])+" ")])})),0)]):e._e()},f=[],b={name:"TermDetail",props:["results"]},v=b,h=(r("4879"),Object(u["a"])(v,p,f,!1,null,"5105084a",null)),g=h.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._m(0),r("input",{attrs:{type:"file"},on:{change:e.onFileSelected}})]),e.sourceList.length?r("div",[r("div",{attrs:{id:"main-content"}},[e._m(1),r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.showForm?r("TermProperties",{key:e.selectedTerm,attrs:{init:e.responses[e.selectedTerm],selectedTerm:e.selectedTerm},on:{saveResponse:e.setResponse}}):e._e()],1)],1),r("div",{attrs:{id:"sidebar-left"}},[e._m(2),e.sourceList.length?r("SourceVariableList",{attrs:{terms1:e.sourceList},on:{termSearchResult:e.searchList,termSelect:e.showTermProperties}}):e._e()],1),r("div",{attrs:{id:"sidebar-right"}},[e._m(3),r("InterlexSearchList",{attrs:{terms:e.interlexTerms}})],1)]):e._e()])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-left"},[r("b",[e._v(" Upload a CSV or TSV file to annotate: ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Term Properties")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Terms")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Interlex Search")])])}],T=r("bc3a"),x=r.n(T),S=r("369b"),O=r.n(S),C=(r("92bd"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"list-group"},e._l(e.terms1,(function(t){return r("TermListItem",{key:t,attrs:{term:t},on:{termSelect:e.onTermSelect}})})),1),r("TermDetail",{attrs:{results:e.results}})],1)}),k=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"list-group-item",on:{click:e.onTermSelect}},[r("span",{staticClass:"align-middle"},[e._v(" "+e._s(e.term)+" ")])])},L=[],I={name:"TermListItem",props:{term:String},methods:{onTermSelect:function(){this.$emit("termSelect",this.term)}}},j=I,A=(r("81ba"),Object(u["a"])(j,w,L,!1,null,"e15c89aa",null)),V=A.exports,$="CfufpoSNVXujv7h14HFHI4dL9p36mxCJ",E={name:"SourceVariableList",props:{terms1:Array},data:function(){return{results:[]}},components:{TermDetail:g,TermListItem:V},methods:{onTermSelect:function(e){var t=this;this.$emit("termSelect",e),x.a.get("https://scicrunch.org/api/1/elastic/interlex/term/_search?q=".concat(e),{params:{key:$}}).then((function(e){t.$emit("termSearchResult",e.data.hits.hits)}))}}},P=E,M=Object(u["a"])(P,C,k,!1,null,"5d5355fe",null),N=M.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"list-group"},e._l(e.terms,(function(e){return r("InterlexTerm",{key:e["_id"],attrs:{term:e}})})),1)},D=[],R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"list-group-item",on:{click:e.onTermSelect}},[r("span",{staticClass:"align-middle"},[r("b",[e._v(e._s(e.term["_source"].label)+" ")]),r("br"),e._v(" Description: "+e._s(e.term["_source"].definition)+" ")])])},q=[],J={name:"InterlexTerm",props:{term:Object},methods:{onTermSelect:function(){this.$emit("termSelect",this.term)}}},U=J,H=(r("f419"),Object(u["a"])(U,R,q,!1,null,"29a1103a",null)),z=H.exports,G={name:"InterlexSearchList",props:{terms:Array,terms1:Array},components:{InterlexTerm:z},methods:{onTermSelect:function(e){this.$emit("termSelect",e)}}},X=G,B=Object(u["a"])(X,F,D,!1,null,"4927eba8",null),W=B.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"panel panel-default"},[r("div",{staticClass:"panel-body"},[r("vue-form-generator",{key:e.selectedTerm,attrs:{schema:e.schema,model:e.model,options:e.formOptions}}),r("b-button",{on:{click:e.onSave}},[e._v("Save")])],1)])])},Z=[],K=(r("ac1f"),r("5319"),r("4309")),Q=r.n(K),ee={name:"TermProperties",props:{selectedTerm:String,init:Object},components:{"vue-form-generator":Q.a.component},data:function(){return{model:{label:"",sourceVariable:"",description:"",url:"",valueType:"",isAbout:[],isPartOf:[],datumType:"",unitCode:"",maxValue:"",minValue:"",allowableValues:[],choices:[],derivative:"",citation:"",measureOf:"",provenance:""},schema:{fields:[{type:"input",inputType:"text",label:"Label",model:"label",hint:"Label for the term",readonly:!1,featured:!0,disabled:!1,validator:Q.a.validators.string},{type:"input",inputType:"text",label:"Source variable",model:"sourceVariable",readonly:!1,hint:"Variable name from dataset",featured:!0,required:!1,disabled:!1,validator:Q.a.validators.string},{type:"input",inputType:"text",label:"Description",model:"description",featured:!0,required:!1,hint:"An explanation of the nature, scope, or meaning of the new term.",validator:Q.a.validators.string},{type:"input",inputType:"text",label:"valueType",model:"valueType",hint:"A value representation such as integer, float, string, date/time",featured:!0,readonly:!1,required:!1,validator:Q.a.validators.string},{type:"input",inputType:"text",label:"datumType",model:"datumType",hint:"What type of datum it is (e.g. range,count,scalar etc.): see IAO definitions",readonly:!1,featured:!0,disabled:!1,validator:Q.a.validators.string},{type:"input",inputType:"text",label:"Unit",model:"hasUnit",hint:"Unit of measurement following BIDS specification",readonly:!1,featured:!0,disabled:!1,validator:Q.a.validators.string},{type:"input",inputType:"number",label:"Max Value",model:"maximumValue",readonly:!1,featured:!0,disabled:!1,validator:Q.a.validators.number},{type:"input",inputType:"number",label:"Min Value",model:"minimumValue",readonly:!1,featured:!0,disabled:!1,validator:Q.a.validators.number},{type:"input",inputType:"text",label:"isAbout",model:"isAbout",readonly:!1,featured:!0,disabled:!1,required:!1,hint:"An explanation of the nature, scope, or meaning of the new term.",validator:Q.a.validators.array},{type:"input",inputType:"text",label:"allowableValues",model:"allowableValues",readonly:!1,featured:!0,disabled:!1},{type:"input",inputType:"text",label:"isPartOf",model:"isPartOF",readonly:!1,featured:!0,disabled:!1,required:!1,validator:Q.a.validators.array}]},formOptions:{validateAfterLoad:!0,validateAfterChanged:!0}}},methods:{prettyJSON:function(e){if(e)return e=JSON.stringify(e,void 0,4),e=e.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"}))},onSave:function(){this.$emit("saveResponse",this.selectedTerm,this.model)}},mounted:function(){this.init&&(this.model=this.init)}},te=ee,re=(r("1062"),Object(u["a"])(te,Y,Z,!1,null,"64323900",null)),ae=re.exports,ne="CfufpoSNVXujv7h14HFHI4dL9p36mxCJ",se={name:"Annotate",components:{TermProperties:ae,InterlexSearchList:W,SourceVariableList:N},data:function(){return{terms:[],sourceList:[],interlexTerms:[],selectedTerm:null,selectedFile:null,image:{backgroundImage:"static/images/nidm-terms-background.png"},showForm:!1,responses:{}}},methods:{onFileSelected:function(e){var t=this,r=e.target.files[0];O.a.parse(r,{complete:function(e){t.sourceList=e.data[0]}})},searchList:function(e){this.interlexTerms=e},showTermProperties:function(e){this.selectedTerm=e,this.showForm=!0},onTermChange:function(e){var t=this;x.a.get("https://scicrunch.org/api/1/term/elastic/search?term=".concat(e),{params:{key:ne}}).then((function(e){t.terms=e.data.data.hits.hits}))},setResponse:function(e,t){this.responses[e]=t}}},ie=se,le=(r("4b5d"),Object(u["a"])(ie,y,_,!1,null,null,null)),oe=le.exports,ue=r("4d55");a["default"].use(m["a"]);var ce=new m["a"]({routes:[{path:"/",name:"Landing",component:ue["default"]},{path:"/interlex/search?q=:term",name:"TermDetail",component:g},{path:"/annotate",name:"Annotate",component:oe}]});new a["default"]({el:"#app",router:ce,components:{App:d},render:function(e){return e(d)}})},"7a7e":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"landing"}},[a("div",{staticClass:"wrapper"},[a("div",[a("b-card",{staticClass:"text-center text-md-left ",attrs:{overlay:"","img-src":r("180b"),"img-alt":"Card Image","text-variant":"white",title:"TERMINOLOGIES FOR THE NEUROIMAGING COMMUNITY"}})],1),a("div",{staticClass:"container text-center"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{title:"Explore terms"}},[a("b-card-text",[a("router-link",{staticClass:"card-link",attrs:{to:{path:"explore"}}},[e._v("Explore the terminology")])],1)],1),a("b-card",{attrs:{title:"Add Term"}},[a("b-card-text",[a("router-link",{staticClass:"card-link",attrs:{to:{path:"create"}}},[e._v("Suggest a term for the NIDM Terminologies")])],1)],1),a("b-card",{attrs:{title:"Annotate"}},[a("b-card-text",[a("router-link",{staticClass:"card-link",attrs:{to:{path:"annotate"}}},[e._v("Annotate terms in a CSV/TSV file")])],1)],1)],1)],1)])])},n=[]},"7c56":function(e,t,r){},"81ba":function(e,t,r){"use strict";var a=r("7c56"),n=r.n(a);n.a},"85ec":function(e,t,r){},"9d64":function(e,t,r){e.exports=r.p+"img/logo.4cbaeba8.png"},ab7b:function(e,t,r){},dc67:function(e,t,r){"use strict";var a=r("ef9c"),n=r.n(a);n.a},ee01:function(e,t){},eecf:function(e,t,r){},ef9c:function(e,t,r){},f419:function(e,t,r){"use strict";var a=r("1bf0"),n=r.n(a);n.a}});
//# sourceMappingURL=app.ee55171b.js.map