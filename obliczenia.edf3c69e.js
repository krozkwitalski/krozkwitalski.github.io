var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},e=t.parcelRequire94c2;null==e&&((e=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,o){a[t]=o},t.parcelRequire94c2=e);var n=e("geIQo"),d=e("aokan"),r=e("3i35a"),l=e("8VULN");const i={};Object.entries(n.sondaze).forEach(([t,o])=>{i[t]=(0,r.NaPolDemo)(o)}),(0,d.rysujWynikWyborow)({średnia_100:(0,r.NormalizujWynik)((0,r.NaPolDemo)(n.srednia)),średnia:(0,r.NaPolDemo)(n.srednia),...i},"sondaze",{laczOpozycje:!1});const c={};c["średnia"]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(n.sredniaSondazy)),Object.entries(n.sondaze).forEach(([t,o])=>c[t]=(0,r.NaPolDemo)((0,r.PodzialMandatowKraj)(o))),(0,d.rysujWynikWyborow)(c,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const s={},f={},u=document.createElement("p");u.setAttribute("class","symulacje");let y="";for(const t of n.PARTIE)y+=`<td>${t}</td>`;let m="<table>";m+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Prognoza ilości głos\xf3w (na komitety powyżej progu)</th><th colspan="5">Progonoza podziału mandat\xf3w</th><th colspan="5">Głosy powyżej ceny mandatu</th><th colspan="5">Głosy brakujące do następnego mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th>${y}<th>Cena mandatu</th>${y}${y}${y}</tr>`;const h={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},p={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},P={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},z={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},O={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};for(const t of((0,n.okregi).forEach(t=>{let o=(0,r.NormalizujWynik)((0,r.PoparcieWOkregu)(n.sredniaSondazy,t).wynikWOkregu),a=(0,r.PodzialMandatowWOkregu)(o,t),e={PIS:o.PIS,KONF:o.KONF},d=["KO","TD","LEWICA"],i=l.komentarze[t.miasto].rekomendacjePartii||[];for(let t of i)e[t]=o[t]+.3/i.length;if(i.length)for(let t of d)i.includes(t)||(e[t]=o[t]-.3/(d.length-i.length));else for(let t of["KO","TD","LEWICA"])e[t]=o[t];let c=(0,r.PodzialMandatowWOkregu)(e,t);s[t.miasto]=(0,r.NaPolDemo)(a),f[t.miasto]=(0,r.NaDemo)(a);// Tabelka
let u=(0,n.glosy2019)[t.nr-1].reduce((t,o)=>t+o,0),y=t=>Math.round(u*t/100),I=t=>Math.round(u*t/100%a.cenaMandatu),g=t=>Math.max(0,(I(t)+8)%a.cenaMandatu-10),E=t=>g(t)?a.cenaMandatu-g(t):0;for(let a of(m+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${u}</td>`,n.PARTIE)){let t=y(o[a]);h[a]+=t,m+=`<td>${t}</td>`}m+=`<td>${a.cenaMandatu}</td>`;let w=t=>Math.round(u*t/100%c.cenaMandatu),T=t=>Math.max(0,(w(t)+8)%c.cenaMandatu-10);for(let t of n.PARTIE)p[t]+=a[t]||0,m+=`<td>${a[t]||0}</td>`;for(let t of n.PARTIE){let a=g(o[t]);z[t]+=a,m+=`<td>${a}</td>`}for(let t of n.PARTIE){let a=E(o[t]);m+=`<td>${a}</td>`}for(let t of(// Wiersz alternatywny
m+=`</tr><tr><td colspan="4">Podział przy przesunięciu 0.3% głos\xf3w:</td>`,n.PARTIE)){let o=y(e[t]);m+=`<td>${o}</td>`}for(let t of(m+=`<td>${c.cenaMandatu}</td>`,n.PARTIE))P[t]+=c[t]||0,m+=`<td>${c[t]||0}</td>`;for(let t of n.PARTIE){let o=T(e[t]);O[t]+=T(e[t]),m+=`<td>${o}</td>`}m+="</tr>"}),m+=`<tr><td colspan="3">Suma</td><td>${Object.values(h).reduce((t,o)=>t+=o,0)}</td>`,n.PARTIE))m+=`<td>${h[t]}</td>`;for(const t of(m+="<td>-</td>",n.PARTIE))m+=`<td>${p[t]}</td>`;for(const t of n.PARTIE)m+=`<td>${z[t]}</td>`;for(const t of(m+='</tr><tr><td colspan="10">Alternatywny wynik wg. rekomendacji</td>',n.PARTIE))m+=`<td>${P[t]}</td>`;for(const t of n.PARTIE)m+=`<td>${O[t]}</td>`;m+="</tr>",u.innerHTML=m+"</table>",document.getElementById("tabela").appendChild(u),(0,d.rysujWynikWyborow)(s,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,d.rysujWynikWyborow)(f,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0});//# sourceMappingURL=obliczenia.edf3c69e.js.map

//# sourceMappingURL=obliczenia.edf3c69e.js.map
