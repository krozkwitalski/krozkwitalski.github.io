(this.webpackJsonpbudget_visualization=this.webpackJsonpbudget_visualization||[]).push([[0],{220:function(e,t,a){},221:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(1),s=a.n(i),o=a(52),r=a.n(o),c=(a(220),a(78)),d=a(11),l=a(10),j=a(17),u=a(13),h=a(12),p=(a(221),a(170)),b=a(443),y=a(34),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.gminaChangeFn,a=e.powiaty;return a?Object(n.jsx)("select",{id:"demo",onChange:function(e){return t(e.target.value)},children:Array.from(a.entries(),(function(e){var t=Object(y.a)(e,2),a=t[0],i=t[1];return Object(n.jsx)("optgroup",{label:a,children:Array.from(i.gminy.entries(),(function(e){var t=Object(y.a)(e,2),a=t[0],i=t[1];return Object(n.jsx)("option",{value:i,children:a},i)}))},a)}))}):Object(n.jsx)(s.a.Fragment,{})}}]),a}(s.a.Component),O=a(441),z=a(442),x=a(436),f=a(437),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.dane,t=e.dochody,a=e.wydatki;return Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",children:[Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(x.a,{viewBox:""}),Object(n.jsx)(b.a,{className:"pomaranczowy",children:"Dochody:"}),Object(n.jsx)(b.a,{children:t})]}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(f.a,{viewBox:""}),Object(n.jsx)(b.a,{className:"pomaranczowy",children:"Wydatki:"}),Object(n.jsx)(b.a,{children:a})]})]})}}]),a}(s.a.Component),w=a(444),v=a(438),k=a(439),C=a(440),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.dotacje_ue,t=e.gmina,a=e.gmina_pc,i=e.powiat,s=e.powiat_pc,o=e.wojewodztwo,r=e.wojewodztwo_pc;return Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(b.a,{children:"Dotacje UE od 2014 dla projekt\xf3w realizowanych w:"}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(v.a,{viewBox:""}),Object(n.jsx)(b.a,{className:"pomaranczowy",children:"Gminie:"}),"\xa0",Object(n.jsxs)(b.a,{children:[" ",t," (",a," na mieszka\u0144ca)"]})]}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(k.a,{viewBox:""}),Object(n.jsx)(b.a,{className:"pomaranczowy",children:"Powiecie:"}),"\xa0",Object(n.jsxs)(b.a,{children:[i," (",s," na mieszka\u0144ca)"]})]}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(C.a,{viewBox:""}),Object(n.jsx)(b.a,{className:"pomaranczowy",children:"Wojew\xf3dztwie:"}),"\xa0",Object(n.jsxs)(b.a,{children:[o," (",r," na mieszka\u0144ca)"]})]})]})}}]),a}(s.a.Component),D=a(9),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.podregion,a=e.zgony;return console.log(a),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("br",{}),Object(n.jsxs)(b.a,{children:["Podregion ",t,": wszystkie zgony wg. tygodnia:"]}),Object(n.jsxs)(D.e,{syncId:"zgony",width:1060,height:500,data:a,margin:{top:10,right:30,left:20,bottom:10},children:[Object(n.jsx)(D.a,{strokeDasharray:"5 5"}),Object(n.jsx)(D.i,{dataKey:"tydzien",axisLine:{strokeWidth:2},ticks:[1,5,10,15,20,25,30,36,42,47,52]}),Object(n.jsx)(D.j,{axisLine:{strokeWidth:2}}),Object(n.jsx)(D.c,{iconSize:20,wrapperStyle:{bottom:-10}}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2014",stroke:"#92daad"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2015",stroke:"#82ca9d"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2016",stroke:"#72ba8d"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2017",stroke:"#62aa7d"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2018",stroke:"#529a6d"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2019",stroke:"#428a5d"}),Object(n.jsx)(D.d,{type:"monotone",dot:!1,dataKey:"2020",stroke:"#ff2222"})]})]})}}]),a}(s.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dane,a=e.opis;if(""===a)return Object(n.jsx)(s.a.Fragment,{});var i=a?a.split("|"):[],o=Object(y.a)(i,2),r=o[0],c=o[1],d=c?c.split(","):[],l=[[],["#003f5c"],["#003f5c","#ffa600"],["#003f5c","#bc5090","#ffa600"],["#003f5c","#7a5195","#ef5675","#ffa600"],["#003f5c","#58508d","#bc5090","#ff6361","#ffa600"],["#003f5c","#444e86","#955196","#dd5182","#ff6e54","#ffa600"],["#003f5c","#374c80","#7a5195","#bc5090","#ef5675","#ff764a","#ffa600"],["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"]];return Object(n.jsxs)(b.a,{children:[Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{children:r}),Object(n.jsxs)(D.e,{syncId:a,width:1060,height:500,data:t,margin:{top:10,right:30,left:30,bottom:10},children:[Object(n.jsx)(D.a,{strokeDasharray:"5 5"}),Object(n.jsx)(D.i,{dataKey:"rok",tickSize:12,tickMargin:10}),Object(n.jsx)(D.j,{yAxisId:"left",orientation:"left",axisLine:{strokeWidth:2},tickSize:8}),Object(n.jsx)(D.j,{yAxisId:"right",orientation:"right",axisLine:{strokeWidth:2},tickSize:18}),d.map((function(e,t){return console.log(e.indexOf("R:")),Object(n.jsx)(D.d,{type:"monotone",name:e.replace(":R"," (prawa o\u015b)"),dataKey:"dane"+t,stroke:l[d.length][t],strokeWidth:2,yAxisId:e.indexOf(":R")>-1?"right":"left"},t)})),Object(n.jsx)(D.c,{iconSize:20,wrapperStyle:{bottom:-10}})]})]})}}]),a}(s.a.Component),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).RADIAN=Math.PI/180,n.state={activeIndex:-1,verticalOffset:0},n.onPieClick=function(e,t){var a=e.midAngle,i=Math.sin(-n.RADIAN*(a||0));n.setState({verticalOffset:i<0&&n.state.activeIndex!==t?80:0,activeIndex:n.state.activeIndex===t?-1:t})},n.legendRenderer=n.legendRenderer.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"legendRenderer",value:function(e,t,a){return a===this.state.activeIndex?Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:e})}):Object(n.jsx)("span",{children:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.dane,i=t.opis,o=void 0===i?"bla":i,r=a.slice(0,8);a.length>8&&r.push({name:"Pozosta\u0142e",value:a.slice(8).reduce((function(e,t){return e+t.value}),0)});var c=["grey","#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"].reverse();return Object(n.jsxs)(s.a.Fragment,{children:[o?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{className:"intro",dangerouslySetInnerHTML:{__html:o}})]}):Object(n.jsx)(s.a.Fragment,{}),Object(n.jsxs)(D.g,{width:1200,height:400+(this.state.activeIndex>=0?80:0),children:[Object(n.jsx)(D.f,{data:r,dataKey:"value",nameKey:"name",cx:"50%",cy:200+this.state.verticalOffset,innerRadius:40,outerRadius:172,label:!1,startAngle:450,endAngle:90,activeIndex:this.state.activeIndex,onClick:this.onPieClick,activeShape:function(t){var a=t.cx,i=t.cy,s=t.midAngle,o=t.innerRadius,r=t.outerRadius,c=t.startAngle,d=t.endAngle,l=t.percent,j=t.value,u="#f9c00c",h=Math.sin(-e.RADIAN*s),p=Math.cos(-e.RADIAN*s),b=a+(r+20)*p,y=i+(r+20)*h,g=a+(r+60)*p,O=i+(r+60)*h,z=g,x=i+(r/.86+36)*(h>=0?1:-1)-10,f=p<0?"start":"end",m=e.props.procentCalosci,w=e.props.jednostka.indexOf("tys.")>-1?Math.round(j/1e3):e.props.jednostka.indexOf("mln.")>-1?Math.round(j/1e6):j;return Object(n.jsxs)("g",{children:[Object(n.jsx)(D.h,{cx:a+14*p,cy:i+14*h,innerRadius:o,outerRadius:r+6,startAngle:c,endAngle:d,fill:u,stroke:"black"}),Object(n.jsx)("path",{d:"M".concat(b,",").concat(y,"L").concat(g,",").concat(O,"L").concat(z,",").concat(x),stroke:u,fill:"none"}),Object(n.jsx)("circle",{cx:z,cy:x,r:2,fill:u,stroke:"none"}),Object(n.jsx)("text",{x:z+24*(p<0?1:-1),y:x,textAnchor:f,fill:"#333",children:w+" "+e.props.jednostka}),Object(n.jsx)("text",{x:z+24*(p<0?1:-1),y:x,dy:36,textAnchor:f,fill:"#999",children:"(".concat((100*l).toFixed(2),"%").concat(100===m?"":" / "+(1*m*l).toFixed(2)+"%",")")})]})},children:r.map((function(t,a){return Object(n.jsx)(D.b,{fill:a===e.state.activeIndex?"#f9c00c":c[a]},"cell-".concat(a))}))}),Object(n.jsx)(D.c,{layout:"vertical",verticalAlign:"top",align:"right",formatter:this.legendRenderer})]})]})}}]),a}(s.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderBudzet",value:function(e){return this.isShown("budzet")&&e?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsxs)(b.a,{className:"intro",children:["Bud\u017cet za rok ",Object(n.jsx)("strong",{children:"2019"})]}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(O.a,{fontSize:"large",className:"icon",viewBox:""}),Object(n.jsx)(m,{dane:e})]}),Object(n.jsx)("br",{})]}):Object(n.jsx)(s.a.Fragment,{})}},{key:"renderSmieci",value:function(e){return this.isShown("smieci")&&e?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(b.a,{className:"intro",children:"Gospodarka Odpadami Komunalnymi"}),Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(z.a,{fontSize:"large",className:"icon",viewBox:""}),Object(n.jsx)(m,{dane:e})]}),Object(n.jsx)("br",{})]}):Object(n.jsx)(s.a.Fragment,{})}},{key:"isShown",value:function(e){var t;return(null===(t=this.props.selected)||void 0===t?void 0:t.indexOf(e))>-1}},{key:"render",value:function(){var e=this.props,t=e.cytat,a=e.autor,i=e.dane,o=e.dzial,r=e.grupaDzial,c=e.grupaRozdzial,d=e.zgony,l=e.gus_comps,j=e.wlasne_dane;console.log(this.props);var u=i||{},h=u.gmina,p=u.typ_gminy,y=u.ludnosc,g=u.gospodarka_odpadami_komunalnymi,O=u.budzet,z=u.dotacje_ue,x=u.children,f=x?x[parseInt(o||"0")]:null,m=(null===x||void 0===x?void 0:x.reduce((function(e,t){return e+t.value}),0))||1,v=100*((null===f||void 0===f?void 0:f.value)||0)/m,k=i&&i.grupyRozdzialy&&c&&i.grupyRozdzialy[c]?100*i.grupyRozdzialy[c].reduce((function(e,t){return e+t.value}),0)/m:0,C=f?f.children:[];return Object(n.jsx)(w.b,{injectFirst:!0,children:Object(n.jsx)("div",{id:"main_section",children:Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(b.a,{className:"wstep",children:Object(n.jsxs)(b.a,{className:"prawa",children:[Object(n.jsx)(b.a,{children:"\xa0"}),Object(n.jsx)(b.a,{className:"nazwa_gminy",children:Object(n.jsx)("strong",{children:h})}),Object(n.jsx)(b.a,{children:null===p||void 0===p?void 0:p.replace(h||"ble","")}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("strong",{children:y})," mieszka\u0144c\xf3w"]}),Object(n.jsx)(b.a,{children:"\xa0"}),Object(n.jsx)(b.a,{children:"\xa0"})]})}),Object(n.jsxs)(b.a,{className:"tlo",children:[""!==t?Object(n.jsx)(b.a,{children:Object(n.jsx)("i",{children:t})}):"",""!==a?Object(n.jsxs)(b.a,{className:"autor",children:[a,"\xa0\xa0\xa0\xa0\xa0\xa0"]}):"",Object(n.jsx)(b.a,{children:"\xa0"}),this.renderBudzet(O),this.renderSmieci(g),this.isShown("dotacje_ue")&&z?Object(n.jsx)(S,{dotacje_ue:z}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("wlasny")&&j?j.map((function(e,t){return Object(n.jsx)(I,{dane:j[t].dane,opis:j[t].opis,procentCalosci:100,jednostka:j[t].jednostka})})):Object(n.jsx)(s.a.Fragment,{}),this.isShown("dzialy")&&x?Object(n.jsx)(I,{dane:x,opis:"Wydatki wg. dzia\u0142\xf3w bud\u017cetu:",procentCalosci:100,jednostka:"tys. z\u0142"}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("rozdzialy")&&C?Object(n.jsx)(I,{dane:C,opis:"Rozdzia\u0142 wydatk\xf3w z <b>"+(null===i||void 0===i?void 0:i.children[o].name)+"</b>:",procentCalosci:v,jednostka:"tys. z\u0142"}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("grupy-dzialy")&&i&&r&&i.grupyDzialy&&i.grupyDzialy[r]?Object(n.jsx)(I,{dane:i.grupyDzialy[r],opis:"Wydatki z grupy <b>"+r+"</b> wg dzia\u0142u:",procentCalosci:100,jednostka:"tys. z\u0142"}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("grupy-rozdzialy")&&i&&c&&i.grupyRozdzialy&&i.grupyRozdzialy[c]?Object(n.jsx)(I,{dane:i.grupyRozdzialy[c],opis:"Wydatki z grupy <b>"+c+"</b> wg rozdzia\u0142u:",procentCalosci:k,jednostka:"tys. z\u0142"}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("gus")?l.map((function(e,t){return Object(n.jsx)(R,{dane:e.dane,opis:e.opis},t)})):Object(n.jsx)(s.a.Fragment,{}),this.isShown("zgony")&&d?Object(n.jsx)(_,{zgony:d.zgony,podregion:d.podregion}):Object(n.jsx)(s.a.Fragment,{})]})]})})})}}]),a}(s.a.Component),W=a(80),E=a.n(W),F=a(446),K=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.wojewodztwoChangeFn,a=e.wojewodztwa;return Object(n.jsx)("select",{id:"demo",style:{marginBottom:10},onChange:function(e){return t(e.target.value)},children:a.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})}}]),a}(s.a.Component),P=a(185),L=a.n(P),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.moduly,a=e.zmianaModuluFn;return Object(n.jsx)("div",{style:{width:"520px"},children:Object(n.jsx)(L.a,{options:t,selected:t.slice(3),handleOnChange:function(e){return a(e)}})})}}]),a}(s.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.grupaChangeFn,a=e.grupy;return Object(n.jsx)("select",{id:"SelektorGrupy",style:{marginBottom:10},onChange:function(e){return t(e.target.value)},children:a.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})}}]),a}(s.a.Component),N=a(109),G=E.a.create({baseURL:"/",adapter:E.a.defaults.adapter?Object(F.a)(E.a.defaults.adapter):void 0}),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).classes=void 0,n.componentRef=void 0,n.WOJEWODZTWA=["DOLNO\u015aL\u0104SKIE","KUJAWSKO-POMORSKIE","LUBELSKIE","LUBUSKIE","\u0141\xd3DZKIE","MA\u0141OPOLSKIE","MAZOWIECKIE","OPOLSKIE","PODKARPACKIE","PODLASKIE","POMORSKIE","\u015aL\u0104SKIE","\u015aWI\u0118TOKRZYSKIE","WARMI\u0143SKO-MAZURSKIE","WIELKOPOLSKIE","ZACHODNIOPOMORSKIE"],n.MODULY=["budzet","smieci","dotacje_ue","wlasny","dzialy","rozdzialy","grupy-dzialy","grupy-rozdzialy","zgony","gus"],n.GRUPY=["Wynagrodzenia i sk\u0142adki","Wydatki na zadania statutowe","Dotacje na zadania bie\u017c\u0105ce","\u015awiadczenia na rzecz os\xf3b fizycznych","Wynagrodzenia finansowane programami UE","Wsp\xf3\u0142finansowanie wynagrodze\u0144 program\xf3w UE","Wynagrodzenia dla innych program\xf3w zagranicznych","Wydatki finansowane programami UE","Wsp\xf3\u0142finansowanie wydatk\xf3w program\xf3w UE","Wydatki dla innych program\xf3w zagranicznych","Dotacje bie\u017c\u0105ce z program\xf3w UE","Wsp\xf3\u0142finansowanie dotacji bie\u017c\u0105cych z program\xf3w UE","Dotacje bie\u017c\u0105ce z innych program\xf3w zagranicznych","\u015awiadczenia dla os\xf3b fizycznych finansowane z UE","Wsp\xf3\u0142finansowane \u015bwiadcze\u0144 dla os\xf3b fizycznych z UE","\u015awiadczenia dla os\xf3b fizycznych z innych program\xf3w zagranicznych","Wyp\u0142aty z por\u0119cze\u0144 i gwarancji udzielonych przez gmin\u0119","Obs\u0142uga d\u0142ugu","Inwestycje ze \u015brodk\xf3w gminy","Inwestycje ze \u015brodk\xf3w UE","Wsp\xf3\u0142finansowanie inwestycji ze \u015brodk\xf3w UE","Dotacje do inwestycji ze \u015brodk\xf3w gminy","Dotacje do inwestycji ze \u015brodk\xf3w UE","Wsp\xf3\u0142finansowanie dotacji do inwestycji ze \u015brodk\xf3w UE","Zakup i obj\u0119cie akcji i udzia\u0142\xf3w","Wniesienie wk\u0142ad\xf3w do sp\xf3\u0142ek prawa handlowego"],n.componentRef=s.a.createRef(),n.handleChangeAutor=n.handleChangeAutor.bind(Object(j.a)(n)),n.handleChangeCytat=n.handleChangeCytat.bind(Object(j.a)(n)),n.handleChangeMultiple=n.handleChangeMultiple.bind(Object(j.a)(n)),n.pobierzDaneGminy=n.pobierzDaneGminy.bind(Object(j.a)(n)),n.pobierzListePowiatow=n.pobierzListePowiatow.bind(Object(j.a)(n)),n.handleChangeGrupyDzialy=n.handleChangeGrupyDzialy.bind(Object(j.a)(n)),n.handleChangeGrupyRozdzialy=n.handleChangeGrupyRozdzialy.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.state={cytat:"np: Krak\xf3w w 2019 realizowa\u0142 dobr\u0105 polityk\u0119 bud\u017cetow\u0105. Wprawdzie wydatki przewy\u017cszy\u0142y dochody, ale \u015brodki te zosta\u0142y wydane na wk\u0142ad w\u0142asny w projekty inwestycyjne dofinansowane przez UE, kt\xf3re b\u0119d\u0105 procentowa\u0107 w przysz\u0142ych latach.",autor:"np.: Maciej Pikor, Lider Polska 2050 w Ma\u0142opolsce",select:n.MODULY.slice(3),dzial:"0",grupaDzial:"Wynagrodzenia i sk\u0142adki",grupaRozdzial:"Wynagrodzenia i sk\u0142adki",gus_input:[{gus_opis:"Procent mieszka\u0144c\xf3w pod\u0142\u0105czonych do kanalizacji|miasto,og\xf3\u0142em,wie\u015b",gus_id:"60308,60309,60310"},{gus_opis:"Emisja zanieczyszcze\u0144|gazowych bez CO2,py\u0142owych:R",gus_id:"1509,1508"},{gus_opis:"Tereny zieleni|parki,ziele\u0144ce,ziele\u0144 uliczna,ziele\u0144 lokalna,ziele\u0144 osiedlowa",gus_id:"73847,73848,73849,73850,73852"},{gus_opis:"Dzieci, m\u0142odzie\u017c i doro\u015bli wg rodzaju plac\xf3wki:|\u017c\u0142obki,przedszkola,podstawowe,zawodowe,gimnazja,licea",gus_id:"377227,151864,151867,455415,2394,455392"},{gus_opis:"Uczniowie przypadaj\u0105cy na 1 oddzia\u0142 w szko\u0142ach:|podstawowych,liceach,zawodowych",gus_id:"454078,454099,454088"},{gus_opis:"Etaty nauczycielskie wg rodzaju szko\u0142y:|przedszkola,podstawowe,zawodowe,gimnazja,licea",gus_id:"288152,377896,378306,378248,378626"}],gus_comps:[{},{},{},{},{},{}],wlasne_dane:[{dane:[{name:"Pierwsza warto\u015b\u0107",value:321e3},{name:"Druga warto\u015b\u0107",value:227e3},{name:"Trzecia warto\u015b\u0107",value:146e3},{name:"Czwarta warto\u015b\u0107",value:11e4},{name:"Pi\u0105ta warto\u015b\u0107",value:109e3},{name:"Sz\xf3sta warto\u015b\u0107",value:87e3},{name:"Si\xf3dma warto\u015b\u0107",value:77e3},{name:"\xd3sma warto\u015b\u0107",value:66e3},{name:"Pozosta\u0142e",value:88e3}],opis:"Wykres dla dowolnych danych - zmie\u0144 warto\u015bci w panelu po prawej i zobacz efekt",procentCalosci:100,jednostka:"tys. z\u0142"}],zgony:{podregion:"",zgony:[]}},n}return Object(l.a)(a,[{key:"handleChangeAutor",value:function(e){this.setState(Object.assign({},this.state,{autor:e}))}},{key:"handleChangeCytat",value:function(e){this.setState(Object.assign({},this.state,{cytat:e}))}},{key:"handleChangeMultiple",value:function(e){this.setState(Object.assign({},this.state,{select:e}))}},{key:"handleChangeLiczbaDzialow",value:function(e){this.setState(Object.assign({},this.state,{liczbaDzialow:e}))}},{key:"handleChangeLiczbaRozdzialow",value:function(e){this.setState(Object.assign({},this.state,{liczbaRozdzialow:e}))}},{key:"handleChangeDzial",value:function(e){this.setState(Object.assign({},this.state,{dzial:e}))}},{key:"handleChangeGrupyDzialy",value:function(e){this.setState(Object.assign({},this.state,{grupaDzial:e}))}},{key:"handleChangeGrupyRozdzialy",value:function(e){this.setState(Object.assign({},this.state,{grupaRozdzial:e}))}},{key:"handleChangeWlasny",value:function(e,t,a){var n=JSON.parse(t);this.setState(Object.assign({},this.state,{wlasne_dane:[{opis:e,dane:n,procentCalosci:100,jednostka:a}]}))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"isShown",value:function(e){return this.state.select.indexOf(e)>-1}},{key:"render",value:function(){var e=this,t=this.state,a=t.cytat,i=t.autor,o=t.select,r=t.dzial,c=t.grupaDzial,d=t.grupaRozdzial,l=t.gus_input,j=t.dane,u=t.powiaty,h=t.zgony,y=t.gus_comps,O=t.wlasne_dane;return Object(n.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(n.jsx)(A,{dane:j,ref:this.componentRef,cytat:a,autor:i,selected:o,dzial:r,grupaDzial:c,grupaRozdzial:d,zgony:h,gus_comps:y,wlasne_dane:O}),Object(n.jsx)("form",{onSubmit:this.handleSubmit,children:Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",style:{padding:10},children:[Object(n.jsx)("strong",{children:"Wyb\xf3r Jednostki Samorz\u0105du:"}),Object(n.jsx)(K,{wojewodztwa:this.WOJEWODZTWA,wojewodztwoChangeFn:this.pobierzListePowiatow}),Object(n.jsx)(g,{powiaty:u,gminaChangeFn:this.pobierzDaneGminy}),Object(n.jsx)("hr",{}),Object(n.jsx)("strong",{children:"Komentarz eksperta:"}),Object(n.jsx)("textarea",{name:"cytat",onChange:function(t){return e.handleChangeCytat(t.target.value)},value:a,style:{marginBottom:10}}),Object(n.jsx)("input",{type:"text",name:"autor",onChange:function(t){return e.handleChangeAutor(t.target.value)},value:i}),Object(n.jsx)("hr",{}),Object(n.jsx)("strong",{children:"Elementy grafiki:"}),Object(n.jsx)(U,{moduly:this.MODULY,zmianaModuluFn:this.handleChangeMultiple}),Object(n.jsx)("hr",{}),this.isShown("wlasny")?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("input",{type:"text",name:"wlasny.opis",onChange:function(t){return e.handleChangeWlasny(t.target.value,JSON.stringify(O[0].dane),O[0].jednostka)},value:O[0].opis}),Object(n.jsx)("textarea",{className:"json",name:"wlasny.dane",onChange:function(t){return e.handleChangeWlasny(O[0].opis||"",t.target.value,O[0].jednostka)},value:JSON.stringify(O[0].dane,null,4),style:{marginBottom:10}}),Object(n.jsx)("input",{type:"text",name:"wlasny.jednostka",onChange:function(t){return e.handleChangeWlasny(O[0].opis||"",JSON.stringify(O[0].dane),t.target.value)},value:O[0].jednostka}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("rozdzialy")?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Dzia\u0142 do szczeg\xf3\u0142owego wy\u015bwietlenia"}),Object(n.jsx)("input",{type:"text",name:"dzial",value:r,style:{marginBottom:10},onChange:function(t){return e.handleChangeDzial(t.target.value)}}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("grupy-dzialy")?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Podzia\u0142 wydatk\xf3w z grupy na dzia\u0142y:"}),Object(n.jsx)(M,{grupy:this.GRUPY,grupaChangeFn:this.handleChangeGrupyDzialy}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(s.a.Fragment,{}),this.isShown("grupy-rozdzialy")?Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("strong",{children:"Podzia\u0142 wydatk\xf3w z grupy na rozdzia\u0142y:"}),Object(n.jsx)(M,{grupy:this.GRUPY,grupaChangeFn:this.handleChangeGrupyRozdzialy}),Object(n.jsx)("hr",{})]}):Object(n.jsx)(s.a.Fragment,{}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("strong",{children:"Wykresy z danych GUS:"}),"(",Object(n.jsx)("a",{target:"_blank",href:"https://bdl.stat.gov.pl/BDL/metadane/cechy/2398#",children:"\u017ar\xf3d\u0142o"}),")"]}),this.isShown("gus")?l.map((function(t,a){return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(N.DebounceInput,{type:"text",name:"gus_opis",value:t.gus_opis,style:{marginBottom:10},onChange:function(n){return e.pobierzGUSComps(a,(null===j||void 0===j?void 0:j.kod_gus)||"",t.gus_id,n.target.value.trim())},debounceTimeout:2e3}),Object(n.jsx)(N.DebounceInput,{type:"text",name:"gus_id",value:t.gus_id,style:{marginBottom:10},onChange:function(n){return e.pobierzGUSComps(a,(null===j||void 0===j?void 0:j.kod_gus)||"",n.target.value.trim(),t.gus_opis)},debounceTimeout:2e3}),Object(n.jsx)("hr",{})]},a)})):Object(n.jsx)(s.a.Fragment,{}),Object(n.jsx)("button",{onClick:function(){return Object(p.exportComponentAsPNG)(e.componentRef)},children:"Export PNG"})]})})]})}},{key:"componentDidMount",value:function(){this.pobierzListePowiatow("DOLNO\u015aL\u0104SKIE")}},{key:"pobierzListePowiatow",value:function(e){var t=this,a="/files/"+e.replaceAll("\u015a","S").replaceAll("\u0104","A").replaceAll("\u0143","N").replaceAll("\u0141","L")+".json";G.get(a).then((function(e){var a=new Map;for(var n in e.data)if(e.data.hasOwnProperty(n)){var i=new Map;for(var s in e.data[n])e.data[n].hasOwnProperty(s)&&i.set(s,e.data[n][s]);var o={gminy:i};a.set(n,o)}t.setState(Object.assign({},t.state,{powiaty:a}));var r=a.values().next().value.gminy.values().next().value;t.pobierzDaneGminy(r)}))}},{key:"pobierzDaneGminy",value:function(e){var t=this,a="/files/"+e+"-panel.json";G.get(a).then((function(e){var a=e.data;console.log(a),t.setState(Object.assign({},t.state,{dane:a})),a.podregion_eurostat&&t.pobierzZgony(a.podregion_eurostat),a.kod_gus&&t.state.gus_input.forEach((function(e,n){t.pobierzGUSComps(n,a.kod_gus||"",e.gus_id,e.gus_opis)}))}))}},{key:"pobierzGUSComps",value:function(e,t,a,n){var i=this;this.setState(Object.assign({},this.state,{gus_opis:n,gus_id:a}));var s=a.split(",").map((function(e){return parseInt(e)})),o="https://bdl.stat.gov.pl/api/v1/data/by-unit/"+t+"?lang=pl&page-size=100";s.forEach((function(e){o+="&var-id="+e})),G.get(o).then((function(t){var a,o=[{rok:2015},{rok:2016},{rok:2017},{rok:2018},{rok:2019}],r=Object(c.a)(t.data.results);try{for(r.s();!(a=r.n()).done;)for(var d=a.value,l=0;l<s.length;l++)if(s[l]===d.id){var j,u=Object(c.a)(d.values);try{for(u.s();!(j=u.n()).done;){var h,p=j.value,b=Object(c.a)(o);try{for(b.s();!(h=b.n()).done;){var y=h.value;y.rok===Number.parseInt(p.year)&&(y["dane"+l]=p.val)}}catch(z){b.e(z)}finally{b.f()}}}catch(z){u.e(z)}finally{u.f()}}}catch(z){r.e(z)}finally{r.f()}var g={opis:n,dane:o},O=i.state.gus_comps;O[e]=g,i.setState(Object.assign({},i.state,{gus_comps:O}))}))}},{key:"pobierzZgony",value:function(e){var t=this,a="/files/"+e+".json";G.get(a).then((function(e){var a=e.data;t.setState(Object.assign({},t.state,{zgony:a}))}))}}]),a}(s.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,449)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))};r.a.render(Object(n.jsxs)(s.a.StrictMode,{children:[Object(n.jsx)(B,{}),","]}),document.getElementById("root")),J()}},[[424,1,2]]]);
//# sourceMappingURL=main.9644fa36.chunk.js.map