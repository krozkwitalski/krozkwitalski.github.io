var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},o=t.parcelRequire94c2;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in a){var o=a[t];delete a[t];var d={id:t,exports:{}};return e[t]=d,o.call(d.exports,d,d.exports),d.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},t.parcelRequire94c2=o);var d=o("geIQo"),r=o("aokan"),n=o("3i35a");const i={};Object.entries(d.sondaze).forEach(([t,e])=>{i[t]=(0,n.NaPolDemo)(e)}),(0,r.rysujWynikWyborow)({średnia:(0,n.NaPolDemo)(d.srednia),...i},"sondaze",{laczOpozycje:!1});const h={};h["średnia"]=(0,n.NaPolDemo)((0,n.PodzialMandatowKraj)(d.sredniaSondazy)),Object.entries(d.sondaze).forEach(([t,e])=>h[t]=(0,n.NaPolDemo)((0,n.PodzialMandatowKraj)(e))),(0,r.rysujWynikWyborow)(h,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const l={},c={},s=document.createElement("p");s.setAttribute("class","symulacje");let y="<table>";y+="<tr><th>nr OW</th><th>blah</th></tr><tr><th>nr OW</th><th>Nazwa</th><th>Mandaty</th><th>Głosy ważne</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th><th>Cena mandatu</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th></tr>",(0,d.okregi).forEach(t=>{let e=(0,n.PoparcieWOkregu)(d.sredniaSondazy,t),a=(0,n.PodzialMandatowWOkregu)(e,t);l[t.miasto]=(0,n.NaPolDemo)(a),c[t.miasto]=(0,n.NaDemo)(a);// Tabelka
let o=(0,d.glosy2019)[t.nr-1].reduce((t,e)=>t+e,0),r=t=>Math.round(o*t/100);y+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${o}</td><td>${r(e.PIS)}</td>
  <td>${r(e.KO)}</td><td>${r(e.LEWICA)}</td>
  <td>${r(e.TD)}</td><td>${r(e.KONF)}</td><td>${a.cenaMandatu}</td><td>${a.PIS||0}</td>
  <td>${a.KO||0}</td><td>${a.LEWICA||0}</td>
  <td>${a.TD||0}</td><td>${a.KONF||0}</td></tr>`}),setTimeout(function(){(0,r.rysujWynikWyborow)(l,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,r.rysujWynikWyborow)(c,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0})},200),s.innerHTML=y+"</table>",document.getElementById("tabela").appendChild(s);//# sourceMappingURL=obliczenia.16bd20bf.js.map

//# sourceMappingURL=obliczenia.16bd20bf.js.map