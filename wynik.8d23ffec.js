var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=t.parcelRequire94c2;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var a=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,a.call(n.exports,n,n.exports),n.exports}var I=Error("Cannot find module '"+t+"'");throw I.code="MODULE_NOT_FOUND",I}).register=function(t,e){o[t]=e},t.parcelRequire94c2=a);var n=a("a4zWM"),I=a("geIQo"),O=a("3i35a"),d=a("cWeek");const r=[{TD:53958,LEWICA:47715,PIS:174643,KONF:31770,KO:169540},{TD:39215,LEWICA:25806,PIS:107797,KONF:19478,KO:120188},{TD:106624,LEWICA:88089,PIS:206899,KONF:54132,KO:286713},{TD:80426,LEWICA:52959,PIS:162603,KONF:34266,KO:186914},{TD:84308,LEWICA:60473,PIS:183131,KONF:34232,KO:158719},{TD:102894,LEWICA:37083,PIS:294847,KONF:54325,KO:131712},{TD:59577,LEWICA:25691,PIS:231882,KONF:35594,KO:79501},{TD:77933,LEWICA:47911,PIS:143530,KONF:33672,KO:195091},{TD:54283,LEWICA:55770,PIS:122433,KONF:25428,KO:187527},{TD:54479,LEWICA:25340,PIS:184929,KONF:30247,KO:86083},{TD:77313,LEWICA:41188,PIS:221031,KONF:36383,KO:138038},{TD:54585,LEWICA:22036,PIS:156308,KONF:28754,KO:88408},{TD:127693,LEWICA:83633,PIS:232430,KONF:58435,KO:232799},{TD:49487,LEWICA:13594,PIS:229587,KONF:37301,KO:68804},{TD:75229,LEWICA:16152,PIS:196433,KONF:32241,KO:68690},{TD:75526,LEWICA:28848,PIS:195218,KONF:28877,KO:99146},{TD:54690,LEWICA:20874,PIS:190418,KONF:28593,KO:82003},{TD:83681,LEWICA:26149,PIS:262236,KONF:44299,KO:100902},{TD:227127,LEWICA:230648,PIS:345380,KONF:124220,KO:741286},{TD:110086,LEWICA:51556,PIS:231905,KONF:51573,KO:257470},{TD:61155,LEWICA:34763,PIS:150022,KONF:31150,KO:161241},{TD:60938,LEWICA:19750,PIS:241790,KONF:38080,KO:70054},{TD:83676,LEWICA:32828,PIS:347688,KONF:63854,KO:119259},{TD:114898,LEWICA:29478,PIS:258277,KONF:59648,KO:126971},{TD:90599,LEWICA:57967,PIS:155318,KONF:38406,KO:257009},{TD:92793,LEWICA:56887,PIS:199709,KONF:49203,KO:258909},{TD:64778,LEWICA:34601,PIS:163506,KONF:34909,KO:127677},{TD:47698,LEWICA:30497,PIS:117756,KONF:21256,KO:94313},{TD:51681,LEWICA:35673,PIS:116827,KONF:26934,KO:139711},{TD:47525,LEWICA:26117,PIS:145230,KONF:30527,KO:114404},{TD:69825,LEWICA:44509,PIS:162458,KONF:35240,KO:193596},{TD:37221,LEWICA:81646,PIS:112389,KONF:21512,KO:114519},{TD:90975,LEWICA:45048,PIS:310266,KONF:43197,KO:137941},{TD:46101,LEWICA:24269,PIS:105373,KONF:19590,KO:95410},{TD:63007,LEWICA:31631,PIS:126432,KONF:27119,KO:129339},{TD:87628,LEWICA:46222,PIS:194416,KONF:37838,KO:154990},{TD:69740,LEWICA:39761,PIS:162192,KONF:29208,KO:100580},{TD:72996,LEWICA:32378,PIS:120301,KONF:28370,KO:144114},{TD:98589,LEWICA:73345,PIS:116666,KONF:35182,KO:262779},{TD:39776,LEWICA:28101,PIS:101023,KONF:19379,KO:124625},{TD:69957,LEWICA:52032,PIS:159575,KONF:32942,KO:222427}];var l=a("8VULN");const K=document.createElement("p");K.setAttribute("class","symulacje");let c="";for(const t of I.PARTIE)c+=`<td>${t}</td>`;let E="<table>";E+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Ilości głos\xf3w (na komitety powyżej progu)</th><th colspan="5">Podział mandat\xf3w</th><th colspan="5">Głosy powyżej ceny mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th>${c}<th>Cena mandatu</th>${c}${c}</tr>`;const P={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},T={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},A={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},W={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},u={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};let s=0;for(const t of((0,I.okregi).forEach(t=>{let e=r[t.nr-1],o=(0,O.PodzialMandatowWOkregu)(e,t,{log:!1,inputWGlosach:!0}),a={PIS:e.PIS,KONF:e.KONF},n=["KO","TD","LEWICA"],d=l.komentarze[t.miasto].rekomendacjePartii||[],K=Math.round((e.KO+e.LEWICA+e.TD)*.3/100);for(let t of(s+=K,d))a[t]=e[t]-K/d.length;if(d.length)for(let t of n)d.includes(t)||(a[t]=e[t]+K/(n.length-d.length));else for(let t of["KO","TD","LEWICA"])a[t]=e[t];let c=(0,O.PodzialMandatowWOkregu)(a,t,{log:!1,inputWGlosach:!0}),f=Object.values(e).reduce((t,e)=>t+e,0),L=t=>Math.round((t+1)%o.cenaMandatu)-1;for(let o of(E+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${f}</td>`,I.PARTIE)){let t=e[o];P[o]+=t,E+=`<td>${t}</td>`}E+=`<td>${Math.round(o.cenaMandatu)}</td>`;let C=t=>Math.round((t+1)%c.cenaMandatu)-1;for(let t of I.PARTIE)T[t]+=o[t]||0,E+=`<td>${o[t]||0}</td>`;for(let t of I.PARTIE){let o=L(e[t]);W[t]+=o,E+=`<td>${o}</td>`}for(let t of(// Wiersz alternatywny
E+=`</tr><tr><td colspan="4">Rekomendacja: ${d.join(",")}; Mandaty bez przesunięcia ${K} głos\xf3w:</td>`,I.PARTIE)){let e=a[t];E+=`<td>${e}</td>`}for(let t of(E+=`<td>${Math.round(c.cenaMandatu)}</td>`,I.PARTIE)){A[t]+=c[t]||0;let e="";(c[t]||0)>(o[t]||0)?e=' style="background-color: green"':(c[t]||0)<(o[t]||0)&&(e=' style="background-color: red"'),E+=`<td ${e}>${c[t]||0}</td>`}for(let t of I.PARTIE){let e=C(a[t]);u[t]+=C(a[t]),E+=`<td>${e}</td>`}E+="</tr>"}),E+=`<tr><td colspan="3">Suma</td><td>${Object.values(P).reduce((t,e)=>t+=e,0)}</td>`,I.PARTIE))E+=`<td>${P[t]}</td>`;for(const t of(E+="<td>-</td>",I.PARTIE))E+=`<td>${T[t]}</td>`;for(const t of I.PARTIE)E+=`<td>${W[t]}</td>`;for(const t of(E+=`</tr><tr><td colspan="10">Alternatywny wynik bez przesunięcia ${s} głos\xf3w</td>`,I.PARTIE)){let e="";(T[t]||0)>(A[t]||0)?e=' style="background-color: green"':(T[t]||0)<(A[t]||0)&&(e=' style="background-color: red"'),E+=`<td${e}>${A[t]}</td>`}for(const t of I.PARTIE)E+=`<td>${u[t]}</td>`;E+="</tr>",K.innerHTML=E+"</table>",document.getElementById("tabela").appendChild(K);const f=function(t){let e={PIS:{},KO:{},TD:{},LEWICA:{},KONF:{}};for(let o=1;o<=d.ILE_SYMULACJI;o++){let o={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},a={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};for(let e of I.okregi){let{wynikWOkregu:n,odchylenieWOkregu:d}=(0,O.PoparcieWOkregu)(t,e),r=(0,O.NormalizujWynik)(n),l=(t,e)=>Math.round(t*e)/e,{procentWOkreguLosoweUncapped:K,procentWOkreguLosoweCapped:c}=(0,O.losowanieWyniku)(r,d,l),E=(0,O.PodzialMandatowWOkregu)(K,e),P=(0,I.glosy2019)[e.nr-1].reduce((t,e)=>t+e,0),T=t=>Math.round(P*t/100),A=t=>//   (glosy % mandatyWOkregu.cenaMandatu)
    // );
    Math.max(0,(t%E.cenaMandatu+8)%E.cenaMandatu-10);// console.log(procentWOkreguLosoweUncapped, mandatyWOkregu);
for(let t of I.PARTIE){let e=T(K[t]),n=A(e);// console.log(partia, glosyPartia, reszta);
o[t]+=n||0,a[t]+=E[t]||0}}// console.log(sumaMandatow, sumaReszt);
for(let t of I.PARTIE){let a=`${1e4*Math.round(o[t]/1e4)}`;// console.log(rozkladReszt);
e[t][a]?e[t][a]+=1:e[t][a]=1}}// FOR
return e}(I.sondaze.PKW_20231017);// const rozkladReszt = RESZTY;
for(const t of(console.log(f),I.PARTIE))!function(t,e){let o=document.createElement("canvas");document.getElementById("HistogramReszt"+e).appendChild(o);let a=I.KOLOR_PARTII[e];new n.default(o,{type:"bar",data:{labels:Object.keys(t),datasets:[{label:"częstość dla "+e,data:Object.entries(t).map(([t,e])=>e),backgroundColor:a}]}})}//# sourceMappingURL=wynik.8d23ffec.js.map
(f[t],t);
//# sourceMappingURL=wynik.8d23ffec.js.map
