(this["webpackJsonpreact-redux-api-template"]=this["webpackJsonpreact-redux-api-template"]||[]).push([[0],[,,,function(e,t,a){e.exports={Container:"favoriteItems_Container__1b04g",Hide:"favoriteItems_Hide__20Jq1",Favorites:"favoriteItems_Favorites__3m94u",TextContent:"favoriteItems_TextContent__32_I6",Name:"favoriteItems_Name__2TAaV",Address:"favoriteItems_Address__3X4s5",City:"favoriteItems_City__3bViK",RemoveButton:"favoriteItems_RemoveButton__2b4RM"}},,function(e,t,a){e.exports={DisplayItem:"displayItem_DisplayItem__1Un9M",Img:"displayItem_Img__1nJXk",Info:"displayItem_Info__2t1ub",Button:"displayItem_Button__3JbRB",Name:"displayItem_Name__1-0Pm",Address:"displayItem_Address__14gJ7",City:"displayItem_City__1TkLp"}},function(e,t,a){e.exports={Container:"search_Container__2Il_U",InputContainer:"search_InputContainer__3uT_B"}},,,,,,function(e,t,a){e.exports={Header:"header_Header__2lI_C",HeaderText:"header_HeaderText__2MVE8",ButtonContainer:"header_ButtonContainer__3W07V"}},,,,,function(e,t,a){e.exports={Button:"button_Button__1NOk3",Alt:"button_Alt__3hVnq"}},,,function(e,t,a){e.exports={DisplayList:"displayList_DisplayList__3AkdP"}},function(e,t,a){e.exports={Container:"manageSearch_Container__1px2f"}},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(27),a(28),a(4)),i=a(1),s=a(6),u=a.n(s),m=a(11),d=a(17),f=a.n(d);var _=function(e){var t=e.onClickHandler,a=e.submit,n=e.alt,c=e.disabled,l=Object(m.a)(e,["onClickHandler","submit","alt","disabled"]);return r.a.createElement("button",{type:a&&"submit",className:"".concat(f.a.Button," ").concat(n&&f.a.Alt),onClick:t,disabled:c},l.children)},p={searchTerm:"",resultsPerPage:[5,10,15],pageNumber:1};var v=function(e){var t=e.totalRecords,a=e.clickHandler,c=Object(n.useRef)(""),l=Object(n.useRef)(0),i=Object(n.useRef)(0),s=Object(n.useState)([]),m=Object(o.a)(s,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){for(var e=Math.ceil(t/l.current.value),a=[],n=1;n<=e;n++)a.push(n);f(a)}),[t,l.current.value]),r.a.createElement("form",{className:u.a.Container},r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"search-term"},"Search Term"),r.a.createElement("input",{name:"search-term",className:u.a.TextInput,ref:c,placeholder:"enter city name"})),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"per-page"},"Per page"),r.a.createElement("select",{name:"per-page",ref:l,onChange:function(){return f([])}},p.resultsPerPage.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement("label",{htmlFor:"go-to-page"},"Go to Page"),r.a.createElement("select",{name:"go-to-page",ref:i,disabled:0===d.length},d.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",{className:u.a.InputContainer},r.a.createElement(_,{submit:!0,onClickHandler:function(e){e.preventDefault(),a({searchTerm:c.current.value,pageNumber:i.current.value,resultsPerPage:l.current.value})}},"Search")))},E=a(2),b=a(5),h=a.n(b);var g=function(e){var t=e.onClickHandler,a=Object(m.a)(e,["onClickHandler"]),n=a.name,c=a.address,l=a.city,o=a.image_url,i=a.isFavorite;return r.a.createElement("div",{className:h.a.DisplayItem},r.a.createElement("img",{className:h.a.Img,src:o,alt:n}),r.a.createElement("button",{className:h.a.Button,onClick:function(){return t(Object(E.a)({},a))}},i?"Remove":"Add"),r.a.createElement("div",{className:h.a.Info},r.a.createElement("label",{className:h.a.Name},n),r.a.createElement("label",{className:h.a.Address},c),r.a.createElement("label",{className:h.a.City},l)))};function I(e){return{type:"REMOVE_FROM_FAVORITES",payload:e}}var O=a(20),y=a.n(O);var C=function(e){var t=Object(i.c)((function(e){return e.apiData})).records,a=Object(i.c)((function(e){return e.favoritesData})).favoriteItems,n=Object(i.b)(),c=function(e){var t;e.isFavorite?(t=e.id,n(I(t))):function(e){n(function(e){return{type:"ADD_TO_FAVORITES",payload:e}}(e))}(e)},l=null;return t&&(l=t.length?t.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e,{onClickHandler:c,isFavorite:void 0!==a.find((function(t){return t.id===e.id}))}))})):"No records found!"),r.a.createElement("div",{className:y.a.DisplayList},l)},N=a(21),j=a.n(N),P="https://opentable.herokuapp.com/api/restaurants?city=".concat("SEARCH_TERM","&per_page=").concat("RESULTS_PER_PAGE","&page=").concat("PAGE_NUMBER");var R=function(e){var t=Object(n.useState)({searchTerm:p.searchTerm,pageNumber:p.pageNumber[0],resultsPerPage:p.resultsPerPage[0]}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)({totalRecords:0,perPage:p.resultsPerPage[0],currentPage:1}),_=Object(o.a)(f,2),E=_[0],b=_[1],h=Object(i.b)(),g=Object(n.useCallback)((function(e,t,a){!function(e){h(function(e){return{type:"SET_API_DATA",payload:e}}(e))}(e),d(t),b(a)}),[h]);return Object(n.useEffect)((function(){if(c.searchTerm){var e=P.replace("SEARCH_TERM",c.searchTerm).replace("PAGE_NUMBER",c.pageNumber).replace("RESULTS_PER_PAGE",c.resultsPerPage);fetch(e).then((function(e){return e.json()})).then((function(e){if(e.error)throw Error(e.error);g(e.restaurants.map((function(e){return{id:e.id,name:e.name,address:e.address,city:e.city,image_url:e.image_url}})),!1,{totalRecords:e.total_entries,perPage:e.per_page,currentPage:e.current_page})})).catch((function(e){g([],!1,{totalRecords:0,perPage:p.resultsPerPage[0],currentPage:1}),console.error(e)}))}}),[c,g]),r.a.createElement("div",{className:j.a.Container},r.a.createElement("p",null,"Enter name of a city and click Search to view a list of restaurants."),r.a.createElement(v,{clickHandler:function(e){d(!0),l(e)},totalRecords:E.totalRecords}),m?r.a.createElement("p",null,"Please wait while we fetch your search results..."):r.a.createElement(C,null))},A=a(12),T=a.n(A),k=a(3),S=a.n(k);var x=function(e){var t=e.favoriteItems,a=e.show,n=Object(i.b)();return r.a.createElement("div",{className:"".concat(S.a.Container," ").concat(a||S.a.Hide)},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:S.a.Favorites},r.a.createElement("div",{className:S.a.TextContent},r.a.createElement("label",{className:S.a.Name},e.name),r.a.createElement("label",{className:S.a.Address},e.address),r.a.createElement("label",{className:S.a.City},e.city)),r.a.createElement("div",{className:S.a.RemoveButton,onClick:function(){return n((t=e.id,n(I(t))));var t}},"\u2715")))}))))},H=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(i.c)((function(e){return e.favoritesData})).favoriteItems,s=l.length;return Object(n.useEffect)((function(){c((function(e){return e&&s}))}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.Header},r.a.createElement("div",{className:T.a.HeaderText},r.a.createElement("h3",null,"Search API Template with Redux")),r.a.createElement("div",{className:T.a.ButtonContainer},r.a.createElement(_,{alt:!0,disabled:!s,onClickHandler:function(){c((function(e){return!e}))}},r.a.createElement("span",null,s)))),r.a.createElement(x,{show:a,favoriteItems:l}))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(8),D={records:null};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_API_DATA":return Object(E.a)(Object(E.a)({},e),{},{records:t.payload});default:return e}},M=a(13),V=function(e,t){return e.find((function(e){return e.id===t.id}))?Object(M.a)(e):[].concat(Object(M.a)(e),[t])},L={favoriteItems:[]};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITES":return Object(E.a)(Object(E.a)({},e),{},{favoriteItems:V(Object(M.a)(e.favoriteItems),t.payload)});case"REMOVE_FROM_FAVORITES":return Object(E.a)(Object(E.a)({},e),{},{favoriteItems:e.favoriteItems.filter((function(e){return e.id!==t.payload}))});default:return e}},U=Object(B.b)({apiData:F,favoritesData:J}),G=Object(B.c)(U);l.a.render(r.a.createElement(i.a,{store:G},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.6c9f808a.chunk.js.map