var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},I=e.parcelRequire94c2;null==I&&((I=function(e){if(e in t)return t[e].exports;if(e in o){var I=o[e];delete o[e];var O={id:e,exports:{}};return t[e]=O,I.call(O.exports,O,O.exports),O.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire94c2=I);var O=I("a4zWM"),a=I("geIQo"),d=I("3i35a");I("cWeek");const n=[{TD:53958,LEWICA:47715,PIS:174643,KONF:31770,KO:169540},{TD:39215,LEWICA:25806,PIS:107797,KONF:19478,KO:120188},{TD:106624,LEWICA:88089,PIS:206899,KONF:54132,KO:286713},{TD:80426,LEWICA:52959,PIS:162603,KONF:34266,KO:186914},{TD:84308,LEWICA:60473,PIS:183131,KONF:34232,KO:158719},{TD:102894,LEWICA:37083,PIS:294847,KONF:54325,KO:131712},{TD:59577,LEWICA:25691,PIS:231882,KONF:35594,KO:79501},{TD:77933,LEWICA:47911,PIS:143530,KONF:33672,KO:195091},{TD:54283,LEWICA:55770,PIS:122433,KONF:25428,KO:187527},{TD:54479,LEWICA:25340,PIS:184929,KONF:30247,KO:86083},{TD:77313,LEWICA:41188,PIS:221031,KONF:36383,KO:138038},{TD:54585,LEWICA:22036,PIS:156308,KONF:28754,KO:88408},{TD:127693,LEWICA:83633,PIS:232430,KONF:58435,KO:232799},{TD:49487,LEWICA:13594,PIS:229587,KONF:37301,KO:68804},{TD:75229,LEWICA:16152,PIS:196433,KONF:32241,KO:68690},{TD:75526,LEWICA:28848,PIS:195218,KONF:28877,KO:99146},{TD:54690,LEWICA:20874,PIS:190418,KONF:28593,KO:82003},{TD:83681,LEWICA:26149,PIS:262236,KONF:44299,KO:100902},{TD:227127,LEWICA:230648,PIS:345380,KONF:124220,KO:741286},{TD:110086,LEWICA:51556,PIS:231905,KONF:51573,KO:257470},{TD:61155,LEWICA:34763,PIS:150022,KONF:31150,KO:161241},{TD:60938,LEWICA:19750,PIS:241790,KONF:38080,KO:70054},{TD:83676,LEWICA:32828,PIS:347688,KONF:63854,KO:119259},{TD:114898,LEWICA:29478,PIS:258277,KONF:59648,KO:126971},{TD:90599,LEWICA:57967,PIS:155318,KONF:38406,KO:257009},{TD:92793,LEWICA:56887,PIS:199709,KONF:49203,KO:258909},{TD:64778,LEWICA:34601,PIS:163506,KONF:34909,KO:127677},{TD:47698,LEWICA:30497,PIS:117756,KONF:21256,KO:94313},{TD:51681,LEWICA:35673,PIS:116827,KONF:26934,KO:139711},{TD:47525,LEWICA:26117,PIS:145230,KONF:30527,KO:114404},{TD:69825,LEWICA:44509,PIS:162458,KONF:35240,KO:193596},{TD:37221,LEWICA:81646,PIS:112389,KONF:21512,KO:114519},{TD:90975,LEWICA:45048,PIS:310266,KONF:43197,KO:137941},{TD:46101,LEWICA:24269,PIS:105373,KONF:19590,KO:95410},{TD:63007,LEWICA:31631,PIS:126432,KONF:27119,KO:129339},{TD:87628,LEWICA:46222,PIS:194416,KONF:37838,KO:154990},{TD:69740,LEWICA:39761,PIS:162192,KONF:29208,KO:100580},{TD:72996,LEWICA:32378,PIS:120301,KONF:28370,KO:144114},{TD:98589,LEWICA:73345,PIS:116666,KONF:35182,KO:262779},{TD:39776,LEWICA:28101,PIS:101023,KONF:19379,KO:124625},{TD:69957,LEWICA:52032,PIS:159575,KONF:32942,KO:222427}];var K=I("8VULN");const r=document.createElement("p");r.setAttribute("class","symulacje");let l="";for(const e of a.PARTIE)l+=`<td>${e}</td>`;let E="<table>";E+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Ilości głos\xf3w (na komitety powyżej progu)</th><th colspan="5">Podział mandat\xf3w</th><th colspan="5">Głosy powyżej ceny mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th>${l}<th>Cena mandatu</th>${l}${l}</tr>`;const c={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},T={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},P={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},A={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},s={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};let W=0;for(const e of((0,a.okregi).forEach(e=>{let t=n[e.nr-1],o=(0,d.PodzialMandatowWOkregu)(t,e,{log:!1,inputWGlosach:!0}),I={PIS:t.PIS,KONF:t.KONF},O=["KO","TD","LEWICA"],r=K.komentarze[e.miasto].rekomendacjePartii||[],l=Math.round((t.KO+t.LEWICA+t.TD)*.032/100);for(let e of(W+=l,r))I[e]=t[e]-l/r.length;if(r.length)for(let e of O)r.includes(e)||(I[e]=t[e]+l/(O.length-r.length));else for(let e of["KO","TD","LEWICA"])I[e]=t[e];let f=(0,d.PodzialMandatowWOkregu)(I,e,{log:!1,inputWGlosach:!0}),C=Object.values(t).reduce((e,t)=>e+t,0),L=e=>Math.round((e+1)%o.cenaMandatu)-1;for(let o of(E+=`<tr><td>${e.nr}</td><td>${e.miasto}</td><td>${e.mandaty}</td><td>${C}</td>`,a.PARTIE)){let e=t[o];c[o]+=e,E+=`<td>${e}</td>`}E+=`<td>${Math.round(o.cenaMandatu)}</td>`;let N=e=>Math.round((e+1)%f.cenaMandatu)-1;for(let e of a.PARTIE)T[e]+=o[e]||0,E+=`<td>${o[e]||0}</td>`;for(let e of a.PARTIE){let o=L(t[e]);A[e]+=o,E+=`<td>${o}</td>`}for(let e of(// Wiersz alternatywny
E+=`</tr><tr><td colspan="4">Rekomendacja: ${r.join(",")}; Mandaty bez przesunięcia ${l} głos\xf3w:</td>`,a.PARTIE)){let t=I[e];E+=`<td>${t}</td>`}for(let e of(E+=`<td>${Math.round(f.cenaMandatu)}</td>`,a.PARTIE)){P[e]+=f[e]||0;let t="";(f[e]||0)>(o[e]||0)?t=' style="background-color: green"':(f[e]||0)<(o[e]||0)&&(t=' style="background-color: red"'),E+=`<td ${t}>${f[e]||0}</td>`}for(let e of a.PARTIE){let t=N(I[e]);s[e]+=N(I[e]),E+=`<td>${t}</td>`}E+="</tr>"}),E+=`<tr><td colspan="3">Suma</td><td>${Object.values(c).reduce((e,t)=>e+=t,0)}</td>`,a.PARTIE))E+=`<td>${c[e]}</td>`;for(const e of(E+="<td>-</td>",a.PARTIE))E+=`<td>${T[e]}</td>`;for(const e of a.PARTIE)E+=`<td>${A[e]}</td>`;for(const e of(E+=`</tr><tr><td colspan="10">Alternatywny wynik bez przesunięcia ${W} głos\xf3w</td>`,a.PARTIE)){let t="";(T[e]||0)>(P[e]||0)?t=' style="background-color: green"':(T[e]||0)<(P[e]||0)&&(t=' style="background-color: red"'),E+=`<td${t}>${P[e]}</td>`}for(const e of a.PARTIE)E+=`<td>${s[e]}</td>`;E+="</tr>",r.innerHTML=E+"</table>",document.getElementById("tabela").appendChild(r);// const rozkladReszt = RozkladResztWOkregach(sredniaSondazy);
// console.log(rozkladReszt);
const f={PIS:{15e4:1,16e4:4,17e4:8,18e4:18,19e4:33,2e5:61,21e4:68,22e4:145,23e4:249,24e4:374,25e4:573,26e4:810,27e4:1134,28e4:1599,29e4:2207,3e5:2890,31e4:3682,32e4:4503,33e4:5617,34e4:6582,35e4:7568,36e4:8713,37e4:9674,38e4:10327,39e4:11054,4e5:11277,41e4:11450,42e4:11516,43e4:11161,44e4:10590,45e4:9744,46e4:9114,47e4:8350,48e4:7414,49e4:6367,5e5:5285,51e4:4560,52e4:3684,53e4:2855,54e4:2362,55e4:1751,56e4:1337,57e4:992,58e4:684,59e4:534,6e5:388,61e4:251,62e4:153,63e4:112,64e4:60,65e4:35,66e4:30,67e4:25,68e4:13,69e4:6,7e5:3,71e4:1,72e4:2},KO:{21e4:3,22e4:1,23e4:6,24e4:8,25e4:16,26e4:29,27e4:67,28e4:106,29e4:170,3e5:243,31e4:373,32e4:596,33e4:830,34e4:1208,35e4:1660,36e4:2271,37e4:3009,38e4:3771,39e4:4719,4e5:5737,41e4:6614,42e4:7807,43e4:8765,44e4:9742,45e4:10477,46e4:11020,47e4:11459,48e4:11656,49e4:11669,5e5:11488,51e4:10520,52e4:10034,53e4:9226,54e4:8245,55e4:7095,56e4:6139,57e4:5184,58e4:4170,59e4:3441,6e5:2747,61e4:2069,62e4:1595,63e4:1223,64e4:886,65e4:620,66e4:399,67e4:311,68e4:201,69e4:147,7e5:95,71e4:59,72e4:29,73e4:15,74e4:16,75e4:8,76e4:3,77e4:2,8e5:1},TD:{28e4:2,29e4:3,3e5:4,31e4:7,32e4:19,33e4:28,34e4:59,35e4:80,36e4:150,37e4:251,38e4:369,39e4:572,4e5:933,41e4:1220,42e4:1701,43e4:2407,44e4:3015,45e4:3767,46e4:4943,47e4:5926,48e4:7148,49e4:8184,5e5:9328,51e4:10186,52e4:11042,53e4:11995,54e4:12280,55e4:12195,56e4:12101,57e4:11431,58e4:10853,59e4:9836,6e5:9139,61e4:7653,62e4:6791,63e4:5585,64e4:4687,65e4:3706,66e4:2870,67e4:2255,68e4:1573,69e4:1172,7e5:854,71e4:571,72e4:407,73e4:284,74e4:154,75e4:106,76e4:72,77e4:38,78e4:24,79e4:11,8e5:7,81e4:4,82e4:2},LEWICA:{34e4:1,35e4:2,36e4:1,37e4:9,38e4:8,39e4:17,4e5:31,41e4:59,42e4:117,43e4:190,44e4:294,45e4:399,46e4:658,47e4:988,48e4:1432,49e4:1955,5e5:2785,51e4:3677,52e4:4571,53e4:5863,54e4:6975,55e4:8506,56e4:9490,57e4:10811,58e4:11985,59e4:12672,6e5:12903,61e4:12957,62e4:12819,63e4:12053,64e4:11387,65e4:10184,66e4:9292,67e4:7785,68e4:6407,69e4:5370,7e5:4268,71e4:3188,72e4:2448,73e4:1768,74e4:1272,75e4:856,76e4:601,77e4:391,78e4:237,79e4:137,8e5:88,81e4:43,82e4:17,83e4:19,84e4:7,85e4:2,86e4:3,87e4:2},KONF:{3e5:2,31e4:3,32e4:9,33e4:8,34e4:25,35e4:47,36e4:69,37e4:108,38e4:202,39e4:359,4e5:528,41e4:831,42e4:1244,43e4:1766,44e4:2412,45e4:3266,46e4:4160,47e4:5426,48e4:6570,49e4:7675,5e5:8990,51e4:10200,52e4:11313,53e4:12047,54e4:12723,55e4:13089,56e4:12898,57e4:12380,58e4:11836,59e4:10726,6e5:9760,61e4:8427,62e4:7113,63e4:5769,64e4:4838,65e4:3690,66e4:2828,67e4:2087,68e4:1521,69e4:1057,7e5:696,71e4:474,72e4:307,73e4:222,74e4:128,75e4:74,76e4:40,77e4:23,78e4:20,79e4:5,8e5:5,81e4:4}};for(const e of a.PARTIE)!function(e,t){let o=document.createElement("canvas");document.getElementById("HistogramReszt"+t).appendChild(o);let I=a.KOLOR_PARTII[t];new O.default(o,{type:"bar",data:{labels:Object.keys(e),datasets:[{label:"częstość dla "+t,data:Object.entries(e).map(([e,t])=>t),backgroundColor:I}]}})}//# sourceMappingURL=wynik.8d94b0fc.js.map
(f[e],e);
//# sourceMappingURL=wynik.8d94b0fc.js.map
