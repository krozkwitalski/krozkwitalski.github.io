(this.webpackJsonpbudget_visualization=this.webpackJsonpbudget_visualization||[]).push([[0],{218:function(e,a,t){},219:function(e,a,t){},414:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(1),o=t.n(i),r=t(54),c=t.n(r),s=(t(218),t(22)),l=t(11),d=t(10),j=t(17),u=t(13),b=t(12),y=(t(219),t(169)),h=t(432),p=t(35),g=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.gminaChangeFn,t=e.powiaty;return t?Object(n.jsx)("select",{id:"demo",onChange:function(e){return a(e.target.value)},children:Array.from(t.entries(),(function(e){var a=Object(p.a)(e,2),t=a[0],i=a[1];return Object(n.jsx)("optgroup",{label:t,children:Array.from(i.gminy.entries(),(function(e){var a=Object(p.a)(e,2),t=a[0],i=a[1];return Object(n.jsx)("option",{value:i,children:t},i)}))},t)}))}):Object(n.jsx)(o.a.Fragment,{})}}]),t}(o.a.Component),O=t(430),z=t(431),x=t(425),m=t(426),w=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dane,a=e.dochody,t=e.wydatki;return Object(n.jsxs)(h.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(x.a,{viewBox:""}),Object(n.jsx)(h.a,{className:"pomaranczowy",children:"Dochody:"}),Object(n.jsx)(h.a,{children:a})]}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(m.a,{viewBox:""}),Object(n.jsx)(h.a,{className:"pomaranczowy",children:"Wydatki:"}),Object(n.jsx)(h.a,{children:t})]})]})}}]),t}(o.a.Component),v=t(433),f=t(427),k=t(428),C=t(429),D=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dotacje_ue,a=e.gmina,t=e.gmina_pc,i=e.powiat,o=e.powiat_pc,r=e.wojewodztwo,c=e.wojewodztwo_pc;return Object(n.jsxs)(h.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(h.a,{children:"Dotacje UE od 2014 dla projekt\xf3w realizowanych w:"}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(f.a,{viewBox:""}),Object(n.jsx)(h.a,{className:"pomaranczowy",children:"Gminie:"}),"\xa0",Object(n.jsxs)(h.a,{children:[" ",a," (",t," na mieszka\u0144ca)"]})]}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(k.a,{viewBox:""}),Object(n.jsx)(h.a,{className:"pomaranczowy",children:"Powiecie:"}),"\xa0",Object(n.jsxs)(h.a,{children:[i," (",o," na mieszka\u0144ca)"]})]}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(C.a,{viewBox:""}),Object(n.jsx)(h.a,{className:"pomaranczowy",children:"Wojew\xf3dztwie:"}),"\xa0",Object(n.jsxs)(h.a,{children:[r," (",c," na mieszka\u0144ca)"]})]})]})}}]),t}(o.a.Component),K=t(6),F=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dane;return console.log(e),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.a,{children:"Etaty nauczycielskie wg rodzaju szko\u0142y:"}),Object(n.jsxs)(K.e,{syncId:"nauczyciele",width:530,height:250,data:e,margin:{top:5,right:15,left:10,bottom:5},children:[Object(n.jsx)(K.a,{strokeDasharray:"5 5"}),Object(n.jsx)(K.h,{dataKey:"rok"}),Object(n.jsx)(K.i,{}),Object(n.jsx)(K.c,{}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"przedszkola",stroke:"#0884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"podstawowe",stroke:"#8884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"gimnazja",stroke:"#0884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"zawodowe",stroke:"#080408"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"licea",stroke:"#82ca9d"})]})]})}}]),t}(o.a.Component),S=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.podregion,t=e.zgony;return console.log(t),Object(n.jsxs)(h.a,{children:[Object(n.jsxs)(h.a,{children:["Podregion ",a,": wszystkie zgony wg. tygodnia:"]}),Object(n.jsxs)(K.e,{syncId:"zgony",width:530,height:250,data:t,margin:{top:5,right:15,left:10,bottom:5},children:[Object(n.jsx)(K.a,{strokeDasharray:"5 5"}),Object(n.jsx)(K.h,{dataKey:"tydzien"}),Object(n.jsx)(K.i,{}),Object(n.jsx)(K.c,{}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2014",stroke:"#92daad"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2015",stroke:"#82ca9d"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2016",stroke:"#72ba8d"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2017",stroke:"#62aa7d"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2018",stroke:"#529a6d"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2019",stroke:"#428a5d"}),Object(n.jsx)(K.d,{type:"linear",dot:!1,dataKey:"2020",stroke:"#ff2222"})]})]})}}]),t}(o.a.Component),R=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dane;return console.log(e),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.a,{children:"Dzieci, m\u0142odzie\u017c i doro\u015bli wg rodzaju plac\xf3wki:"}),Object(n.jsxs)(K.e,{syncId:"uczniowie",width:530,height:250,data:e,margin:{top:5,right:15,left:10,bottom:5},children:[Object(n.jsx)(K.a,{strokeDasharray:"5 5"}),Object(n.jsx)(K.h,{dataKey:"rok"}),Object(n.jsx)(K.i,{}),Object(n.jsx)(K.c,{}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"zlobki",stroke:"#880408"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"przedszkola",stroke:"#0884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"podstawowe",stroke:"#8884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"gimnazja",stroke:"#0884d8"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"zawodowe",stroke:"#080408"}),Object(n.jsx)(K.d,{type:"monotone",dataKey:"licea",stroke:"#82ca9d"})]})]})}}]),t}(o.a.Component),E=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.dane,t=e.opis,i=t.split("|"),o=Object(p.a)(i,2),r=o[0],c=o[1],s=c?c.split(","):[],l=["#0088FE","#00C49F","#778888","#FF8042","#FFFF33"];return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.a,{children:r}),Object(n.jsxs)(K.e,{syncId:t,width:530,height:250,data:a,margin:{top:5,right:15,left:10,bottom:5},children:[Object(n.jsx)(K.a,{strokeDasharray:"5 5"}),Object(n.jsx)(K.h,{dataKey:"rok"}),Object(n.jsx)(K.i,{}),Object(n.jsx)(K.c,{}),s.map((function(e,a){return Object(n.jsx)(K.d,{type:"monotone",name:e,dataKey:"dane"+a,stroke:l[a]})}))]})]})}}]),t}(o.a.Component),I=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"renderBudzet",value:function(e){var a;return(null===(a=this.props.selected)||void 0===a?void 0:a.indexOf("budzet"))>-1&&e?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)(h.a,{className:"intro",children:["Bud\u017cet za rok ",Object(n.jsx)("strong",{children:"2019"})]}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(O.a,{fontSize:"large",className:"icon",viewBox:""}),Object(n.jsx)(w,{dane:e})]}),Object(n.jsx)("br",{})]}):""}},{key:"renderSmieci",value:function(e){var a;return(null===(a=this.props.selected)||void 0===a?void 0:a.indexOf("smieci"))>-1&&e?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(h.a,{className:"intro",children:"Gospodarka Odpadami Komunalnymi"}),Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(z.a,{fontSize:"large",className:"icon",viewBox:""}),Object(n.jsx)(w,{dane:e})]}),Object(n.jsx)("br",{})]}):""}},{key:"render",value:function(){var e=this.props,a=e.cytat,t=e.autor,i=e.selected,r=e.dane,c=e.dzial,s=e.liczbaDzialow,l=e.liczbaRozdzialow,d=e.grupaDzial,j=e.grupaRozdzial,u=e.zgony,b=e.nauczyciele,y=e.uczniowie,p=e.gus_comps;console.log(this.props);var g=r||{},O=g.gmina,z=g.ludnosc,x=g.gospodarka_odpadami_komunalnymi,m=g.budzet,w=g.dotacje_ue,f=g.children,k=f?f[parseInt(c||"0")]:null,C=k?k.children:[],I=Number.parseInt(s||"10")||10,_=Number.parseInt(l||"10")||10,A=["#0088FE","#00C49F","#778888","#FF8042","#FFFF33"];return Object(n.jsx)(v.b,{injectFirst:!0,children:Object(n.jsx)("div",{id:"main_section",children:Object(n.jsxs)(h.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(h.a,{className:"intro",children:[O," (",z," mieszka\u0144c\xf3w)"]}),Object(n.jsx)("br",{}),""!==a?Object(n.jsx)(h.a,{className:"intro",children:Object(n.jsx)("i",{children:a})}):"",""!==t?Object(n.jsxs)(h.a,{className:"autor",children:[t,"\xa0\xa0\xa0\xa0\xa0\xa0"]}):"",Object(n.jsx)("br",{}),this.renderBudzet(m),this.renderSmieci(x),(null===i||void 0===i?void 0:i.indexOf("dotacje_ue"))>-1&&w?Object(n.jsx)(D,{dotacje_ue:w}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("dzialy"))>-1&&f?Object(n.jsxs)(K.g,{width:600,height:Math.max(25*Math.min(I,f.length),200),children:[Object(n.jsx)(K.f,{data:f.slice(0,I),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:20,outerRadius:86,label:!1,startAngle:450,endAngle:90,children:f.map((function(e,a){return Object(n.jsx)(K.b,{fill:A[a%A.length]},"cell-".concat(a))}))}),Object(n.jsx)(K.c,{layout:"vertical",verticalAlign:"top",align:"right"})]}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("rozdzialy"))>-1&&C?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)(h.a,{className:"intro",children:["Wydatki w ramach dzia\u0142u: ",(null===k||void 0===k?void 0:k.name)||""]}),Object(n.jsxs)(K.g,{width:600,height:Math.max(25*Math.min(_,C.length),175),children:[Object(n.jsx)(K.f,{data:C.slice(0,_),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:20,outerRadius:86,label:!1,startAngle:450,endAngle:90,children:C.map((function(e,a){return Object(n.jsx)(K.b,{fill:A[a%A.length]},"cell-".concat(a))}))}),Object(n.jsx)(K.c,{layout:"vertical",verticalAlign:"top",align:"right"})]})]}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("grupy-dzialy"))>-1&&r&&d&&r.grupyDzialy&&r.grupyDzialy[d]?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)(h.a,{className:"intro",children:["Wydatki na ",d," wg dzia\u0142u"]}),Object(n.jsxs)(K.g,{width:600,height:Math.max(25*Math.min(_,r.grupyDzialy[d].length),175),children:[Object(n.jsx)(K.f,{data:r.grupyDzialy[d].slice(0,_),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:20,outerRadius:86,label:!1,startAngle:450,endAngle:90,children:r.grupyDzialy[d].map((function(e,a){return Object(n.jsx)(K.b,{fill:A[a%A.length]},"cell-".concat(a))}))}),Object(n.jsx)(K.c,{layout:"vertical",verticalAlign:"top",align:"right"})]})]}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("grupy-rozdzialy"))>-1&&r&&j&&r.grupyRozdzialy&&r.grupyRozdzialy[j]?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)(h.a,{className:"intro",children:["Wydatki na ",j," wg rozdzia\u0142u"]}),Object(n.jsxs)(K.g,{width:600,height:Math.max(25*Math.min(_,r.grupyRozdzialy[j].length),175),children:[Object(n.jsx)(K.f,{data:r.grupyRozdzialy[j].slice(0,_),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:20,outerRadius:86,label:!1,startAngle:450,endAngle:90,children:r.grupyRozdzialy[j].map((function(e,a){return Object(n.jsx)(K.b,{fill:A[a%A.length]},"cell-".concat(a))}))}),Object(n.jsx)(K.c,{layout:"vertical",verticalAlign:"top",align:"right"})]})]}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("nauczyciele"))>-1&&b?Object(n.jsx)(F,{dane:b}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("uczniowie"))>-1&&y?Object(n.jsx)(R,{dane:y}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("zgony"))>-1&&u?Object(n.jsx)(S,{zgony:u.zgony,podregion:u.podregion}):Object(n.jsx)(o.a.Fragment,{}),(null===i||void 0===i?void 0:i.indexOf("gus"))>-1?p.map((function(e,a){return Object(n.jsx)(E,{dane:e.dane,opis:e.opis})})):Object(n.jsx)(o.a.Fragment,{})]})})})}}]),t}(o.a.Component),_=t(37),A=t.n(_),M=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.wojewodztwoChangeFn,t=e.wojewodztwa;return Object(n.jsx)("select",{id:"demo",style:{marginBottom:10},onChange:function(e){return a(e.target.value)},children:t.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})}}]),t}(o.a.Component),U=t(184),L=t.n(U),P=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.moduly,t=e.zmianaModuluFn;return Object(n.jsx)(L.a,{options:a,selected:a,handleOnChange:function(e){return t(e)}})}}]),t}(o.a.Component),N=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.grupaChangeFn,t=e.grupy;return Object(n.jsx)("select",{id:"SelektorGrupy",style:{marginBottom:10},onChange:function(e){return a(e.target.value)},children:t.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})}}]),t}(o.a.Component),W=function(e){Object(u.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).classes=void 0,n.componentRef=void 0,n.wojewodztwa=["DOLNO\u015aL\u0104SKIE","KUJAWSKO-POMORSKIE","LUBELSKIE","LUBUSKIE","\u0141\xd3DZKIE","MA\u0141OPOLSKIE","MAZOWIECKIE","OPOLSKIE","PODKARPACKIE","PODLASKIE","POMORSKIE","\u015aL\u0104SKIE","\u015aWI\u0118TOKRZYSKIE","WARMI\u0143SKO-MAZURSKIE","WIELKOPOLSKIE","ZACHODNIOPOMORSKIE"],n.MODULY=["budzet","smieci","dotacje_ue","dzialy","rozdzialy","grupy-rozdzialy","grupy-dzialy","nauczyciele","uczniowie","zgony","gus"],n.GRUPY=["Wynagrodzenia i sk\u0142adki","Wydatki na zadania statutowe","Dotacje na zadania bie\u017c\u0105ce","\u015awiadczenia na rzecz os\xf3b fizycznych","Wynagrodzenia finansowane programami UE","Wsp\xf3\u0142finansowanie wynagrodze\u0144 program\xf3w UE","Wynagrodzenia dla innych program\xf3w zagranicznych","Wydatki finansowane programami UE","Wsp\xf3\u0142finansowanie wydatk\xf3w program\xf3w UE","Wydatki dla innych program\xf3w zagranicznych","Dotacje bie\u017c\u0105ce z program\xf3w UE","Wsp\xf3\u0142finansowanie dotacji bie\u017c\u0105cych z program\xf3w UE","Dotacje bie\u017c\u0105ce z innych program\xf3w zagranicznych","\u015awiadczenia dla os\xf3b fizycznych finansowane z UE","Wsp\xf3\u0142finansowane \u015bwiadcze\u0144 dla os\xf3b fizycznych z UE","\u015awiadczenia dla os\xf3b fizycznych z innych program\xf3w zagranicznych","Wyp\u0142aty z por\u0119cze\u0144 i gwarancji udzielonych przez gmin\u0119","Obs\u0142uga d\u0142ugu","Inwestycje ze \u015brodk\xf3w gminy","Inwestycje ze \u015brodk\xf3w UE","Wsp\xf3\u0142finansowanie inwestycji ze \u015brodk\xf3w UE","Dotacje do inwestycji ze \u015brodk\xf3w gminy","Dotacje do inwestycji ze \u015brodk\xf3w UE","Wsp\xf3\u0142finansowanie dotacji do inwestycji ze \u015brodk\xf3w UE","Zakup i obj\u0119cie akcji i udzia\u0142\xf3w","Wniesienie wk\u0142ad\xf3w do sp\xf3\u0142ek prawa handlowego"],n.componentRef=o.a.createRef(),n.handleChangeAutor=n.handleChangeAutor.bind(Object(j.a)(n)),n.handleChangeCytat=n.handleChangeCytat.bind(Object(j.a)(n)),n.handleChangeMultiple=n.handleChangeMultiple.bind(Object(j.a)(n)),n.pobierzDaneGminy=n.pobierzDaneGminy.bind(Object(j.a)(n)),n.pobierzListePowiatow=n.pobierzListePowiatow.bind(Object(j.a)(n)),n.handleChangeGrupyDzialy=n.handleChangeGrupyDzialy.bind(Object(j.a)(n)),n.handleChangeGrupyRozdzialy=n.handleChangeGrupyRozdzialy.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.state={cytat:"np: Krak\xf3w w 2019 realizowa\u0142 dobr\u0105 polityk\u0119 bud\u017cetow\u0105. Wprawdzie wydatki przewy\u017cszy\u0142y dochody, ale \u015brodki te zosta\u0142y wydane na wk\u0142ad w\u0142asny w projekty inwestycyjne dofinansowane przez UE, kt\xf3re b\u0119d\u0105 procentowa\u0107 w przysz\u0142ych latach.",autor:"np.: Maciej Pikor, Lider Polska 2050 w Ma\u0142opolsce",select:n.MODULY,liczbaDzialow:"10",dzial:"0",liczbaRozdzialow:"10",grupaDzial:"Wynagrodzenia i sk\u0142adki",grupaRozdzial:"Wynagrodzenia i sk\u0142adki",gus_opis:"Procent mieszka\u0144c\xf3w pod\u0142\u0105czonych do kanalizacji|miasto,og\xf3\u0142em,wie\u015b",gus_id:"60308,60309,60310",gus_comps:[],zgony:{podregion:"",zgony:[]},nauczyciele:[],uczniowie:[]},n}return Object(d.a)(t,[{key:"handleChangeAutor",value:function(e){this.setState(Object.assign({},this.state,{autor:e}))}},{key:"handleChangeCytat",value:function(e){this.setState(Object.assign({},this.state,{cytat:e}))}},{key:"handleChangeMultiple",value:function(e){this.setState(Object.assign({},this.state,{select:e}))}},{key:"handleChangeLiczbaDzialow",value:function(e){this.setState(Object.assign({},this.state,{liczbaDzialow:e}))}},{key:"handleChangeLiczbaRozdzialow",value:function(e){this.setState(Object.assign({},this.state,{liczbaRozdzialow:e}))}},{key:"handleChangeDzial",value:function(e){this.setState(Object.assign({},this.state,{dzial:e}))}},{key:"handleChangeGrupyDzialy",value:function(e){this.setState(Object.assign({},this.state,{grupaDzial:e}))}},{key:"handleChangeGrupyRozdzialy",value:function(e){this.setState(Object.assign({},this.state,{grupaRozdzial:e}))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this,a=this.state,t=a.cytat,i=a.autor,r=a.select,c=a.dzial,s=a.liczbaDzialow,l=a.liczbaRozdzialow,d=a.grupaDzial,j=a.grupaRozdzial,u=a.gus_opis,b=a.gus_id,p=a.dane,O=a.powiaty,z=a.zgony,x=a.nauczyciele,m=a.uczniowie,w=a.gus_comps,v=this.wojewodztwa;return Object(n.jsxs)(h.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(I,{dane:p,ref:this.componentRef,cytat:t,autor:i,selected:r,dzial:c,liczbaDzialow:s,liczbaRozdzialow:l,grupaDzial:d,grupaRozdzial:j,zgony:z,nauczyciele:x,uczniowie:m,gus_comps:w}),Object(n.jsx)("form",{onSubmit:this.handleSubmit,children:Object(n.jsxs)(h.a,{display:"flex",flexDirection:"column",style:{padding:10},children:[Object(n.jsx)("strong",{children:"Wyb\xf3r Jednostki Samorz\u0105du:"}),Object(n.jsx)(M,{wojewodztwa:v,wojewodztwoChangeFn:this.pobierzListePowiatow}),Object(n.jsx)(g,{powiaty:O,gminaChangeFn:this.pobierzDaneGminy}),Object(n.jsx)("hr",{}),Object(n.jsx)("strong",{children:"Komentarz eksperta:"}),Object(n.jsx)("textarea",{name:"cytat",onChange:function(a){return e.handleChangeCytat(a.target.value)},value:t,style:{marginBottom:10}}),Object(n.jsx)("input",{type:"text",name:"autor",onChange:function(a){return e.handleChangeAutor(a.target.value)},value:i}),Object(n.jsx)("hr",{}),Object(n.jsx)("strong",{children:"Elementy grafiki:"}),Object(n.jsx)(P,{moduly:this.MODULY,zmianaModuluFn:this.handleChangeMultiple}),Object(n.jsx)("hr",{}),(null===r||void 0===r?void 0:r.indexOf("dzialy"))>-1?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Max. liczba dzia\u0142\xf3w na wykresie:"}),Object(n.jsx)("input",{type:"text",name:"liczbaDzialow",value:s,style:{marginBottom:10},onChange:function(a){return e.handleChangeLiczbaDzialow(a.target.value)}})]}):Object(n.jsx)(o.a.Fragment,{}),(null===r||void 0===r?void 0:r.indexOf("rozdzialy"))>-1?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Dzia\u0142 do szczeg\xf3\u0142owego wy\u015bwietlenia"}),Object(n.jsx)("input",{type:"text",name:"dzial",value:c,style:{marginBottom:10},onChange:function(a){return e.handleChangeDzial(a.target.value)}}),Object(n.jsx)("strong",{children:"Max. liczba rozdzia\u0142\xf3w na wykresie:"}),Object(n.jsx)("input",{type:"text",name:"liczbaRozdzialow",value:l,style:{marginBottom:10},onChange:function(a){return e.handleChangeLiczbaRozdzialow(a.target.value)}}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(o.a.Fragment,{}),(null===r||void 0===r?void 0:r.indexOf("grupy-dzialy"))>-1?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Podzia\u0142 wydatk\xf3w z grupy na dzia\u0142y:"}),Object(n.jsx)(N,{grupy:this.GRUPY,grupaChangeFn:this.handleChangeGrupyDzialy}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(o.a.Fragment,{}),(null===r||void 0===r?void 0:r.indexOf("grupy-rozdzialy"))>-1?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Podzia\u0142 wydatk\xf3w z grupy na rozdzia\u0142y:"}),Object(n.jsx)(N,{grupy:this.GRUPY,grupaChangeFn:this.handleChangeGrupyRozdzialy}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(o.a.Fragment,{}),(null===r||void 0===r?void 0:r.indexOf("gus"))>-1?Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsxs)("strong",{children:["Dodatkowy wykres z danych GUS: (",Object(n.jsx)("a",{target:"_blank",href:"https://bdl.stat.gov.pl/BDL/metadane/cechy/2398#",children:"\u017ar\xf3d\u0142o"}),")"]}),Object(n.jsx)("input",{type:"text",name:"gus_opis",value:u,style:{marginBottom:10},onChange:function(a){return e.pobierzGUSComps((null===p||void 0===p?void 0:p.kod_gus)||"",b,a.target.value)}}),Object(n.jsx)("input",{type:"text",name:"gus_id",value:b,style:{marginBottom:10},onChange:function(a){return e.pobierzGUSComps((null===p||void 0===p?void 0:p.kod_gus)||"",a.target.value,u)}}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(o.a.Fragment,{}),Object(n.jsx)("button",{onClick:function(){return Object(y.exportComponentAsPNG)(e.componentRef)},children:"Export PNG"})]})})]})}},{key:"pobierzDaneGminy",value:function(e){var a=this,t="/files/"+e+"-panel.json";A.a.get(t).then((function(e){var t=e.data;console.log(t),a.setState(Object.assign({},a.state,{dane:t})),t.podregion_eurostat&&a.pobierzZgony(t.podregion_eurostat),t.kod_gus&&(a.pobierzNauczycieli(t.kod_gus),a.pobierzUczniowie(t.kod_gus),a.pobierzGUSComps(t.kod_gus,a.state.gus_id,a.state.gus_opis))}))}},{key:"pobierzListePowiatow",value:function(e){var a=this,t="/files/"+e.replaceAll("\u015a","S").replaceAll("\u0104","A").replaceAll("\u0143","N").replaceAll("\u0141","L")+".json";A.a.get(t).then((function(e){var t=new Map;for(var n in e.data)if(e.data.hasOwnProperty(n)){var i=new Map;for(var o in e.data[n])e.data[n].hasOwnProperty(o)&&i.set(o,e.data[n][o]);var r={gminy:i};t.set(n,r)}a.setState(Object.assign({},a.state,{powiaty:t}));var c=t.values().next().value.gminy.values().next().value;a.pobierzDaneGminy(c)}))}},{key:"pobierzZgony",value:function(e){var a=this,t="/files/"+e+".json";A.a.get(t).then((function(e){var t=e.data;a.setState(Object.assign({},a.state,{zgony:t}))}))}},{key:"pobierzNauczycieli",value:function(e){var a=this,t={288152:"przedszkola",288154:"przedszkola",288155:"przedszkola",288156:"przedszkola",377896:"podstawowe",377897:"podstawowe",377895:"podstawowe",378306:"zawodowe",378248:"gimnazja",378626:"licea",378627:"licea",378628:"licea",378629:"licea",378630:"licea",378631:"licea"},n="https://bdl.stat.gov.pl/api/v1/data/by-unit/"+e+"?lang=pl&page-size=100";for(var i in t)n+="&var-id="+i;var o=[{rok:2015},{rok:2016},{rok:2017},{rok:2018},{rok:2019}];A.a.get(n).then((function(e){var n,i=Object(s.a)(e.data.results);try{for(i.s();!(n=i.n()).done;){var r,c=n.value,l=Object(s.a)(c.values);try{for(l.s();!(r=l.n()).done;){var d,j=r.value,u=Object(s.a)(o);try{for(u.s();!(d=u.n()).done;){var b=d.value;b.rok===Number.parseInt(j.year)&&(void 0!==b[t[c.id]]?b[t[c.id]]+=j.val:b[t[c.id]]=j.val)}}catch(y){u.e(y)}finally{u.f()}}}catch(y){l.e(y)}finally{l.f()}}}catch(y){i.e(y)}finally{i.f()}a.setState(Object.assign({},a.state,{nauczyciele:o}))}))}},{key:"pobierzUczniowie",value:function(e){var a=this,t={377227:"zlobki",151864:"przedszkola",151867:"podstawowe",46733:"podstawowe",46726:"podstawowe",455415:"zawodowe",2394:"gimnazja",455392:"licea"},n="https://bdl.stat.gov.pl/api/v1/data/by-unit/"+e+"?lang=pl&page-size=100";for(var i in t)n+="&var-id="+i;var o=[{rok:2015},{rok:2016},{rok:2017},{rok:2018},{rok:2019}];A.a.get(n).then((function(e){var n,i=Object(s.a)(e.data.results);try{for(i.s();!(n=i.n()).done;){var r,c=n.value,l=Object(s.a)(c.values);try{for(l.s();!(r=l.n()).done;){var d,j=r.value,u=Object(s.a)(o);try{for(u.s();!(d=u.n()).done;){var b=d.value;b.rok===Number.parseInt(j.year)&&(void 0!==b[t[c.id]]?b[t[c.id]]+=j.val:b[t[c.id]]=j.val)}}catch(y){u.e(y)}finally{u.f()}}}catch(y){l.e(y)}finally{l.f()}}}catch(y){i.e(y)}finally{i.f()}a.setState(Object.assign({},a.state,{uczniowie:o}))}))}},{key:"pobierzGUSComps",value:function(e,a,t){var n=this;this.setState(Object.assign({},this.state,{gus_opis:t,gus_id:a}));var i=a.split(",").map((function(e){return parseInt(e)})),o="https://bdl.stat.gov.pl/api/v1/data/by-unit/"+e+"?lang=pl&page-size=100";i.forEach((function(e){o+="&var-id="+e}));var r=[];A.a.get(o).then((function(e){var a,o=[{rok:2015},{rok:2016},{rok:2017},{rok:2018},{rok:2019}],c=Object(s.a)(e.data.results);try{for(c.s();!(a=c.n()).done;)for(var l=a.value,d=0;d<i.length;d++)if(i[d]===l.id){var j,u=Object(s.a)(l.values);try{for(u.s();!(j=u.n()).done;){var b,y=j.value,h=Object(s.a)(o);try{for(h.s();!(b=h.n()).done;){var p=b.value;p.rok===Number.parseInt(y.year)&&(p["dane"+d]=y.val)}}catch(O){h.e(O)}finally{h.f()}}}catch(O){u.e(O)}finally{u.f()}}}catch(O){c.e(O)}finally{c.f()}var g={opis:t,dane:o};r.push(g),n.setState(Object.assign({},n.state,{gus_comps:r}))}))}},{key:"componentDidMount",value:function(){this.pobierzListePowiatow("DOLNO\u015aL\u0104SKIE")}}]),t}(o.a.Component),G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,437)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),o(e),r(e)}))};c.a.render(Object(n.jsxs)(o.a.StrictMode,{children:[Object(n.jsx)(W,{}),","]}),document.getElementById("root")),G()}},[[414,1,2]]]);
//# sourceMappingURL=main.2c6de714.chunk.js.map