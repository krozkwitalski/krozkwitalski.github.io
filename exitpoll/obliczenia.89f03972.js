var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},e=t.parcelRequire94c2;null==e&&((e=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var d={id:t,exports:{}};return a[t]=d,e.call(d.exports,d,d.exports),d.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,a){o[t]=a},t.parcelRequire94c2=e);var d=e("geIQo"),n=e("aokan"),r=e("3i35a");const i={};Object.entries(d.sondaze).forEach(([t,a])=>{i[t]=(0,r.NaPolDemo)(a)}),(0,n.rysujWynikWyborow)({średnia:(0,r.NaPolDemo)(d.srednia),...i},"sondaze",{laczOpozycje:!1});const c={};c["średnia"]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(d.sredniaSondazy)),Object.entries(d.sondaze).forEach(([t,a])=>c[t]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(a))),(0,n.rysujWynikWyborow)(c,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const l={},s={},h=document.createElement("p");h.setAttribute("class","symulacje");const y="<th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th>";let u="<table>";u+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Prognoza ilości głos\xf3w (na komitety powyżej progu)</th><th colspan="5">Progonoza podziału mandat\xf3w</th><th colspan="5">Głosy powyżej ceny mandatu</th><th colspan="5">Głosy brakujące do następnego mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th>${y}<th>Cena mandatu</th>${y}${y}${y}</tr>`,(0,d.okregi).forEach(t=>{let a=(0,r.PoparcieWOkregu)(d.sredniaSondazy,t),o=(0,r.PodzialMandatowWOkregu)(a,t);l[t.miasto]=(0,r.NaPolDemo)(o),s[t.miasto]=(0,r.NaDemo)(o);// Tabelka
let e=(0,d.glosy2019)[t.nr-1].reduce((t,a)=>t+a,0),n=t=>Math.round(e*t/100),i=t=>Math.round(e*t/100%o.cenaMandatu),c=t=>Math.max(0,i(t)-15),h=t=>c(t)?o.cenaMandatu-c(t):0;u+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${e}</td><td>${n(a.PIS)}</td>
  <td>${n(a.KO)}</td><td>${n(a.LEWICA)}</td>
  <td>${n(a.TD)}</td><td>${n(a.KONF)}</td><td>${o.cenaMandatu}</td><td>${o.PIS||0}</td>
  <td>${o.KO||0}</td><td>${o.LEWICA||0}</td>
  <td>${o.TD||0}</td><td>${o.KONF||0}</td><td>${c(a.PIS)}</td>
  <td>${c(a.KO)}</td><td>${c(a.LEWICA)}</td>
  <td>${c(a.TD)}</td><td>${c(a.KONF)}</td><td>${h(a.PIS)}</td>
    <td>${h(a.KO)}</td><td>${h(a.LEWICA)}</td>
    <td>${h(a.TD)}</td><td>${h(a.KONF)}</td></tr>`}),setTimeout(function(){(0,n.rysujWynikWyborow)(l,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,n.rysujWynikWyborow)(s,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0})},200),h.innerHTML=u+"</table>",document.getElementById("tabela").appendChild(h);//# sourceMappingURL=obliczenia.89f03972.js.map

//# sourceMappingURL=obliczenia.89f03972.js.map