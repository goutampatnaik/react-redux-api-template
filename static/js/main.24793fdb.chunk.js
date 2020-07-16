(this["webpackJsonpreact-redux-api-template"]=this["webpackJsonpreact-redux-api-template"]||[]).push([[0],[,,,,function(e,t,a){e.exports={DisplayItem:"displayItem_DisplayItem__1Un9M",Img:"displayItem_Img__1nJXk",Info:"displayItem_Info__2t1ub",Button:"displayItem_Button__3JbRB",Name:"displayItem_Name__1-0Pm",Address:"displayItem_Address__14gJ7",City:"displayItem_City__1TkLp"}},function(e,t,a){e.exports={Container:"search_Container__2Il_U",InputContainer:"search_InputContainer__3uT_B"}},function(e,t,a){e.exports={Header:"header_Header__2lI_C",FavoritesContainer:"header_FavoritesContainer__1wCoZ",Name:"header_Name__73gX1",Address:"header_Address__2JzT2",City:"header_City__mD04Y"}},,,,,,,,,,function(e,t,a){e.exports={Button:"button_Button__1NOk3",Alt:"button_Alt__3hVnq"}},,,function(e,t,a){e.exports={DisplayList:"displayList_DisplayList__3AkdP"}},function(e,t,a){e.exports={Container:"manageSearch_Container__1px2f"}},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(26),a(27),a(3)),o=a(1),s=a(5),u=a.n(s),m=a(11),d=a(16),p=a.n(d);var f=function(e){var t=e.onClickHandler,a=e.submit,n=e.alt,c=e.disabled,l=Object(m.a)(e,["onClickHandler","submit","alt","disabled"]);return r.a.createElement("button",{type:a&&"submit",className:"".concat(p.a.Button," ").concat(n&&p.a.Alt),onClick:t,disabled:c},l.children)},_={searchTerm:"",resultsPerPage:[5,10,15],pageNumber:1};var E=function(e){var t=e.totalRecords,a=e.clickHandler,c=Object(n.useRef)(""),l=Object(n.useRef)(0),o=Object(n.useRef)(0),s=Object(n.useState)([]),m=Object(i.a)(s,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){for(var e=Math.ceil(t/l.current.value),a=[],n=1;n<=e;n++)a.push(n);p(a)}),[t,l.current.value]),r.a.createElement("form",{className:u.a.Container},r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"search-term"},"Search Term"),r.a.createElement("input",{name:"search-term",className:u.a.TextInput,ref:c,placeholder:"enter city name"})),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"per-page"},"Per page"),r.a.createElement("select",{name:"per-page",ref:l,onChange:function(){return p([])}},_.resultsPerPage.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"go-to-page"},"Go to Page"),r.a.createElement("select",{name:"go-to-page",ref:o,disabled:0===d.length},d.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement(f,{submit:!0,onClickHandler:function(e){e.preventDefault(),a({searchTerm:c.current.value,pageNumber:o.current.value,resultsPerPage:l.current.value})}},"Search")))},b=a(2),v=a(4),h=a.n(v);var g=function(e){var t=e.onClickHandler,a=Object(m.a)(e,["onClickHandler"]),n=a.name,c=a.address,l=a.city,i=a.image_url,o=a.isFavorite;return r.a.createElement("div",{className:h.a.DisplayItem},r.a.createElement("img",{className:h.a.Img,src:i,alt:n}),r.a.createElement("button",{className:h.a.Button,onClick:function(){return t(Object(b.a)({},a))}},o?"Remove":"Add"),r.a.createElement("div",{className:h.a.Info},r.a.createElement("label",{className:h.a.Name},n),r.a.createElement("label",{className:h.a.Address},c),r.a.createElement("label",{className:h.a.City},l)))};var y=a(19),O=a.n(y);var I=function(e){var t=Object(o.c)((function(e){return e.apiData})).records,a=Object(o.c)((function(e){return e.favoritesData})).favoriteItems,n=Object(o.b)(),c=function(e){var t;e.isFavorite?(t=e.id,n(function(e){return{type:"REMOVE_FROM_FAVORITES",payload:e}}(t))):function(e){n(function(e){return{type:"ADD_TO_FAVORITES",payload:e}}(e))}(e)},l=null;return t&&(l=t.length?t.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e,{onClickHandler:c,isFavorite:void 0!==a.find((function(t){return t.id===e.id}))}))})):"No records found!"),r.a.createElement("div",{className:O.a.DisplayList},l)},j=a(20),C=a.n(j),N="https://opentable.herokuapp.com/api/restaurants?city=".concat("SEARCH_TERM","&per_page=").concat("RESULTS_PER_PAGE","&page=").concat("PAGE_NUMBER");var P=function(e){var t=Object(n.useState)({searchTerm:_.searchTerm,pageNumber:_.pageNumber[0],resultsPerPage:_.resultsPerPage[0]}),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)({totalRecords:0,perPage:_.resultsPerPage[0],currentPage:1}),f=Object(i.a)(p,2),b=f[0],v=f[1],h=Object(o.b)(),g=Object(n.useCallback)((function(e,t,a){!function(e){h(function(e){return{type:"SET_API_DATA",payload:e}}(e))}(e),d(t),v(a)}),[h]);return Object(n.useEffect)((function(){if(c.searchTerm){var e=N.replace("SEARCH_TERM",c.searchTerm).replace("PAGE_NUMBER",c.pageNumber).replace("RESULTS_PER_PAGE",c.resultsPerPage);fetch(e).then((function(e){return e.json()})).then((function(e){if(e.error)throw Error(e.error);g(e.restaurants.map((function(e){return{id:e.id,name:e.name,address:e.address,city:e.city,image_url:e.image_url}})),!1,{totalRecords:e.total_entries,perPage:e.per_page,currentPage:e.current_page})})).catch((function(e){g([],!1,{totalRecords:0,perPage:_.resultsPerPage[0],currentPage:1}),console.error(e)}))}}),[c,g]),r.a.createElement("div",{className:C.a.Container},r.a.createElement("p",null,"Enter name of a city and click Search to view a list of restaurants."),r.a.createElement(E,{clickHandler:function(e){d(!0),l(e)},totalRecords:b.totalRecords}),m?r.a.createElement("p",null,"Please wait while we fetch your search results..."):r.a.createElement(I,null))},A=a(6),R=a.n(A),k=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(o.c)((function(e){return e.favoritesData})).favoriteItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:R.a.Header},r.a.createElement("span",{style:{textAlign:"left",width:"85%"}},r.a.createElement("h3",null,"Search API Template with Redux")),r.a.createElement("span",{style:{width:"auto",marginTop:"10px"}},r.a.createElement(f,{disabled:!l.length,onClickHandler:function(){c((function(e){return!e}))}},r.a.createElement("span",null,l.length)))),a?r.a.createElement("div",{className:R.a.FavoritesContainer,onClick:function(){c((function(e){return!e}))}},r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("label",{className:R.a.Name},e.name),r.a.createElement("label",{className:R.a.Address},e.address),r.a.createElement("label",{className:R.a.City},e.city))})))):null)};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(8),w={records:null};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_API_DATA":return Object(b.a)(Object(b.a)({},e),{},{records:t.payload});default:return e}},F=a(12),x=function(e,t){return e.find((function(e){return e.id===t.id}))?Object(F.a)(e):[].concat(Object(F.a)(e),[t])},H={favoriteItems:[]};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITES":return Object(b.a)(Object(b.a)({},e),{},{favoriteItems:x(Object(F.a)(e.favoriteItems),t.payload)});case"REMOVE_FROM_FAVORITES":return Object(b.a)(Object(b.a)({},e),{},{favoriteItems:e.favoriteItems.filter((function(e){return e.id!==t.payload}))});default:return e}},M=Object(S.b)({apiData:D,favoritesData:B}),L=Object(S.c)(M);l.a.render(r.a.createElement(o.a,{store:L},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.24793fdb.chunk.js.map