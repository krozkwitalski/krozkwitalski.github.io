var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},o=t.parcelRequire94c2;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in a){var o=a[t];delete a[t];var d={id:t,exports:{}};return e[t]=d,o.call(d.exports,d,d.exports),d.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){a[t]=e},t.parcelRequire94c2=o);var d=o("geIQo"),n=o("aokan"),r=o("3i35a");const i={};Object.entries(d.sondaze).forEach(([t,e])=>{i[t]=(0,r.NaPolDemo)(e)}),(0,n.rysujWynikWyborow)({średnia:(0,r.NaPolDemo)(d.srednia),...i},"sondaze",{laczOpozycje:!1});const l={};l["średnia"]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(d.sredniaSondazy)),Object.entries(d.sondaze).forEach(([t,e])=>l[t]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(e))),(0,n.rysujWynikWyborow)(l,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const c={},h={},s=document.createElement("p");s.setAttribute("class","symulacje");let y="<table>";y+="<th>nr Okręgu</th><th>Mandaty</th><th>Głosy ważne</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th><th>Cena mandatu</th><th>PiS</th><th>KO</th><th>Lewica</th><th>Trzecia Droga</th><th>Konfederacja</th>",(0,d.okregi).forEach(t=>{let e=(0,r.PoparcieWOkregu)(d.sredniaSondazy,t),a=(0,r.PodzialMandatowWOkregu)(e,t);c[t.miasto]=(0,r.NaPolDemo)(a),h[t.miasto]=(0,r.NaDemo)(a);// Tabelka
let o=(0,d.glosy2019)[t.nr-1].reduce((t,e)=>t+e,0),n=t=>Math.round(o*t/100);y+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${o}</td><td>${n(e.PIS)}</td>
  <td>${n(e.KO)}</td><td>${n(e.LEWICA)}</td>
  <td>${n(e.TD)}</td><td>${n(e.KONF)}</td><td>${a.cenaMandatu}</td><td>${a.PIS}</td>
  <td>${a.KO}</td><td>${a.LEWICA}</td>
  <td>${a.TD}</td><td>${a.KONF}</td></tr>`}),setTimeout(function(){(0,n.rysujWynikWyborow)(c,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,n.rysujWynikWyborow)(h,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0})},200),s.innerHTML=y+"</table>",document.getElementById("tabela").appendChild(s);//# sourceMappingURL=obliczenia.db1fc234.js.map

//# sourceMappingURL=obliczenia.db1fc234.js.map
