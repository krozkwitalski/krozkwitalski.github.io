var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},o=t.parcelRequire94c2;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in e){var o=e[t];delete e[t];var d={id:t,exports:{}};return a[t]=d,o.call(d.exports,d,d.exports),d.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,a){e[t]=a},t.parcelRequire94c2=o);var d=o("geIQo"),n=o("aokan"),r=o("3i35a");const i={};Object.entries(d.sondaze).forEach(([t,a])=>{i[t]=(0,r.NaPolDemo)(a)}),(0,n.rysujWynikWyborow)({średnia:(0,r.NaPolDemo)(d.srednia),...i},"sondaze",{laczOpozycje:!1});const h={};h["średnia"]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(d.sredniaSondazy)),Object.entries(d.sondaze).forEach(([t,a])=>h[t]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(a))),(0,n.rysujWynikWyborow)(h,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const c={},l={},s=document.createElement("p");s.setAttribute("class","symulacje");let y="<table>";y+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Prognoza ilości głos\xf3w (na komitety powyżej progu)</th><th>Progonoza podziału mandat\xf3w</th><th>Głosy powyżej ceny mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th><th>Cena mandatu</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th></tr>`,(0,d.okregi).forEach(t=>{let a=(0,r.PoparcieWOkregu)(d.sredniaSondazy,t),e=(0,r.PodzialMandatowWOkregu)(a,t);c[t.miasto]=(0,r.NaPolDemo)(e),l[t.miasto]=(0,r.NaDemo)(e);// Tabelka
let o=(0,d.glosy2019)[t.nr-1].reduce((t,a)=>t+a,0),n=t=>Math.round(o*t/100),i=t=>Math.round(o*t/100%e.cenaMandatu);y+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${o}</td><td>${n(a.PIS)}</td>
  <td>${n(a.KO)}</td><td>${n(a.LEWICA)}</td>
  <td>${n(a.TD)}</td><td>${n(a.KONF)}</td><td>${e.cenaMandatu}</td><td>${e.PIS||0}</td>
  <td>${e.KO||0}</td><td>${e.LEWICA||0}</td>
  <td>${e.TD||0}</td><td>${e.KONF||0}</td></tr><td>${i(a.PIS)}</td>
  <td>${i(a.KO)}</td><td>${i(a.LEWICA)}</td>
  <td>${i(a.TD)}</td><td>${i(a.KONF)}</td>`}),setTimeout(function(){(0,n.rysujWynikWyborow)(c,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,n.rysujWynikWyborow)(l,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0})},200),s.innerHTML=y+"</table>",document.getElementById("tabela").appendChild(s);//# sourceMappingURL=obliczenia.90bd631d.js.map

//# sourceMappingURL=obliczenia.90bd631d.js.map
