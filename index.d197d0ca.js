function i(i){return i&&i.__esModule?i.default:i}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire94c2;null==a&&((a=function(i){if(i in t)return t[i].exports;if(i in o){var e=o[i];delete o[i];var a={id:i,exports:{}};return t[i]=a,e.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(i,e){o[i]=e},e.parcelRequire94c2=a);var s=a("geIQo"),n=a("3i35a"),s=a("geIQo"),r=a("cWeek"),k=a("a4zWM"),l=a("h5k33");function d(i,e,t={}){let o=document.createElement("canvas");document.getElementById(e).appendChild(o),new k.default(o,{type:"bar",data:{labels:Object.entries(i).map(([i,e])=>i.toString()),datasets:t.laczOpozycje?[{label:"Opozycja Demokratyczna",data:Object.values(i).map(i=>i.DEMO),backgroundColor:"#E56701"},{label:"PiS + Konfederacja",data:Object.values(i).map(i=>i.NIEDEMO),backgroundColor:"rgb(128, 0, 32)"}]:[{label:"Lewica",data:Object.values(i).map(i=>i.LEWICA),backgroundColor:s.KOLOR_PARTII.LEWICA},{label:"KO",data:Object.values(i).map(i=>i.KO),backgroundColor:s.KOLOR_PARTII.KO},{label:"Trzecia Droga",data:Object.values(i).map(i=>i.TD),backgroundColor:s.KOLOR_PARTII.TD},{label:"PiS + Konfederacja",data:Object.values(i).map(i=>i.NIEDEMO),backgroundColor:"rgb(128, 0, 32)"}]},options:t?.poziomo?{indexAxis:"y",scales:{x:{stacked:!0,max:t?.calySejm?460:null,afterBuildTicks:t?.calySejm?i=>i.ticks=[0,230,460].map(i=>({value:i})):null},y:{stacked:!0}}}:{}})}function c(i){return[0,5,6,7,8,9,10,11,12,13,14].includes(i)?"mandat\xf3w":i>1?"mandaty":"mandat"}function m(e,t,o,a,n,d,m,w){let p=document.createElement("canvas");document.getElementById(t).appendChild(p);let u=s.KOLOR_PARTII[o],z=Object.keys(e).sort((i,e)=>Number.parseFloat(e)-Number.parseFloat(i));new k.default(p,{type:"bar",data:{labels:z.map(i=>`${i}%`),datasets:("KO"===o||[3,19].includes(w.nr)?[{label:`${m[o]+4} ${c(m[o]+4)}`,data:z.map(i=>(e[i][String(m[o]+4)]||0)/r.ILE_SYMULACJI*100),backgroundColor:/*@__PURE__*/i(l)(u).darken(.4).toString()},{label:`${m[o]+3} ${c(m[o]+3)}`,data:z.map(i=>(e[i][String(m[o]+3)]||0)/r.ILE_SYMULACJI*100),backgroundColor:/*@__PURE__*/i(l)(u).darken(.2).toString()}]:[]).concat([{label:`${m[o]+2} ${c(m[o]+2)}`,data:z.map(i=>(e[i][String(m[o]+2)]||0)/r.ILE_SYMULACJI*100),backgroundColor:u},{label:`${m[o]+1} ${c(m[o]+1)}`,data:z.map(i=>(e[i][String(m[o]+1)]||0)/r.ILE_SYMULACJI*100),backgroundColor:/*@__PURE__*/i(l)(u).fade(.4).toString()},{label:`${m[o]} ${c(m[o])}`,data:z.map(i=>(e[i][String(m[o])]||0)/r.ILE_SYMULACJI*100),backgroundColor:/*@__PURE__*/i(l)(u).fade(.8).toString()}])},options:{plugins:{legend:{title:{display:!0,text:`Faktyczny/przewidywany wynik dla ${o}: ${n} / ${a}%, σ: ${Math.round(10*d)/10}`,color:"black",font:{size:15}}},tooltip:{callbacks:{footer:i=>{let e=0;return i.forEach(function(i){e+=Number(i.label.split("%")[0])*w.glosy2019}),"Głos\xf3w: "+Math.round(e/100)}}}},scales:{x:{stacked:!0},y:{display:!1,stacked:!0}}}});let y=document.createElement("p");// tekst.setAttribute("style", "");
// tekst.innerHTML = interpretacjaHistogramu(partia, String(minimumMandatow[partia]), histogram);
document.getElementById(t).appendChild(y)}// function extractProcent(poparcie: PoparciePartii) {
//   return Number(poparcie.procent);
// }
// function interpretacjaHistogramu(partia: string, oczekiwaneMandaty: string, histogram: PoparciePartii) {
//   const procentyOczekiwanych = Object.entries(histogram).filter(
//     ([ mandaty, czestosc ]) => mandaty === oczekiwaneMandaty
//   );
//   const minProcentDoOczekiwanych = procentyOczekiwanych.reduce((acc, curr) =>
//     extractProcent(curr) < extractProcent(acc) ? curr : acc
//   );
//   const maxProcentDoOczekiwanych = procentyOczekiwanych.reduce((acc, curr) =>
//     extractProcent(curr) > extractProcent(acc) ? curr : acc
//   );
//   let tekst = `Jeśli ${partia} otrzyma`;
//   // Nie podajemy dolnego zakresu, gdy oczekujemy 0 mandatów
//   tekst += oczekiwaneMandaty
//     ? ` od ${Math.max(extractProcent(minProcentDoOczekiwanych), 0)}%`
//     : "";
//   tekst += ` do ${
//     maxProcentDoOczekiwanych.procent
//   }% głosów, to zdobędzie ${oczekiwaneMandaty} ${odmianaSlowaMandat(
//     oczekiwaneMandaty
//   )}.`;
//   return tekst;
// }
var w=a("8VULN"),p=a("NqJwd");const u={1:{powiaty:["bolesławiecki","głogowski","jaworski","kamiennog\xf3rski","karkonoski","legnicki","lubański","lubiński","lw\xf3wecki","polkowicki","zgorzelecki","złotoryjski"],miasta:["Jelenia G\xf3ra","Legnica"]},2:{powiaty:["dzierżoniowski","kłodzki","świdnicki","wałbrzyski","ząbkowicki"],miasta:["Wałbrzych"]},3:{powiaty:["g\xf3rowski","milicki","oleśnicki","oławski","strzeliński","średzki","trzebnicki","wołowski","wrocławski"],miasta:["Wrocław"]},4:{powiaty:["bydgoski","inowrocławski","mogileński","nakielski","sępoleński","świecki","tucholski","żniński"],miasta:["Bydgoszcz"]},5:{powiaty:["aleksandrowski","brodnicki","chełmiński","golubsko-dobrzyński","grudziądzki","lipnowski","radziejowski","rypiński","toruński","wąbrzeski","włocławski"],miasta:["Grudziądz","Toruń","Włocławek"]},6:{powiaty:["janowski","kraśnicki","lubartowski","lubelski","łęczyński","łukowski","opolski","puławski","rycki","świdnicki"],miasta:["Lublin"]},7:{powiaty:["bialski","biłgorajski","chełmski","hrubieszowski","krasnostawski","parczewski","radzyński","tomaszowski","włodawski","zamojski"],miasta:["Biała Podlaska","Chełm","Zamość"]},8:{województwo:"lubuskie"},9:{powiaty:["brzeziński","ł\xf3dzki wschodni"],miasta:["Ł\xf3dź"]},10:{powiaty:["bełchatowski","opoczyński","piotrkowski","radomszczański","rawski","skierniewicki","tomaszowski"],miasta:["Piotrk\xf3w Trybunalski","Skierniewice"]},11:{powiaty:["kutnowski","łaski","łęczycki","łowicki","pabianicki","pajęczański","poddębicki","sieradzki","wieluński","wieruszowski","zduńskowolski","zgierski"]},12:{powiaty:["chrzanowski","myślenicki","oświęcimski","suski","wadowicki"]},13:{powiaty:["krakowski","miechowski","olkuski"],miasta:["Krak\xf3w"]},14:{powiaty:["gorlicki","limanowski","nowosądecki","nowotarski","tatrzański"],miasta:["Nowy Sącz"]},15:{powiaty:["bocheński","brzeski","dąbrowski","proszowicki","tarnowski","wielicki"],miasta:["Tarn\xf3w"]},16:{powiaty:["ciechanowski","gostyniński","mławski","płocki","płoński","przasnyski","sierpecki","sochaczewski","żuromiński","żyrardowski"],miasta:["Płock"]},17:{powiaty:["białobrzeski","gr\xf3jecki","kozienicki","lipski","przysuski","radomski","szydłowiecki","zwoleński"],miasta:["Radom"]},18:{powiaty:["garwoliński","łosicki","makowski","miński","ostrołęcki","ostrowski","pułtuski","siedlecki","sokołowski","węgrowski","wyszkowski"],miasta:["Ostrołęka","Siedlce"]},19:{miasta:["Warszawa"]},20:{powiaty:["grodziski","legionowski","nowodworski","otwocki","piaseczyński","pruszkowski","warszawski zachodni","wołomiński"]},21:{województwo:"opolskie"},22:{powiaty:["bieszczadzki","brzozowski","jarosławski","jasielski","krośnieński","leski","lubaczowski","przemyski","przeworski","sanocki","Krosno","Przemyśl"]},23:{powiaty:["dębicki","kolbuszowski","leżajski","łańcucki","mielecki","niżański","ropczycko-sędziszowski","rzeszowski","stalowowolski","strzyżowski","tarnobrzeski","Rzesz\xf3w","Tarnobrzeg"]},24:{województwo:"podlaskie"},25:{powiaty:["gdański","kwidzyński","malborski","nowodworski","starogardzki","sztumski","tczewski"],miasta:["Gdańsk","Sopot"]},26:{powiaty:["bytowski","chojnicki","człuchowski","kartuski","kościerski","lęborski","pucki","słupski","wejherowski"],miasta:["Gdynia","Słupsk"]},27:{powiaty:["bielski","cieszyński","pszczyński","żywiecki"],miasta:["Bielsko-Biała"]},28:{powiaty:["częstochowski","kłobucki","lubliniecki","myszkowski"],miasta:["Częstochowa"]},29:{powiaty:["gliwicki","tarnog\xf3rski"],miasta:["Bytom","Gliwice","Zabrze"]},30:{powiaty:["mikołowski","raciborski","rybnicki","wodzisławski"],miasta:["Jastrzębie-Zdr\xf3j","Rybnik","Żory"]},31:{powiaty:["bieruńsko-lędziński"],miasta:["Chorz\xf3w","Katowice","Mysłowice","Piekary Śląskie","Ruda Śląska","Siemianowice Śląskie","Świętochłowice","Tychy"]},32:{powiaty:["będziński","zawierciański"],miasta:["Dąbrowa G\xf3rnicza","Jaworzno","Sosnowiec"]},33:{województwo:"świętokrzyskie"},34:{powiaty:["bartoszycki","braniewski","działdowski","elbląski","iławski","lidzbarski","nowomiejski","ostr\xf3dzki"],miasta:["Elbląg"]},35:{powiaty:["ełcki","giżycki","gołdapski","kętrzyński","mrągowski","nidzicki","olecki","olsztyński","piski","szczycieński","węgorzewski"],miasta:["Olsztyn"]},36:{powiaty:["gostyński","jarociński","kaliski","kępiński","kościański","krotoszyński","leszczyński","ostrowski","ostrzeszowski","pleszewski","rawicki"],miasta:["Kalisz","Leszno"]},37:{powiaty:["gnieźnieński","kolski","koniński","słupecki","średzki","śremski","turecki","wrzesiński"],miasta:["Konin"]},38:{powiaty:["chodzieski","czarnkowsko-trzcianecki","grodziski","międzychodzki","nowotomyski","obornicki","pilski","szamotulski","wągrowiecki","wolsztyński","złotowski"]},39:{powiaty:["poznański","Poznań"]},40:{powiaty:["białogardzki","choszczeński","drawski","kołobrzeski","koszaliński","sławieński","szczecinecki","świdwiński","wałecki"],miasta:["Koszalin"]},41:{powiaty:["goleniowski","gryficki","gryfiński","kamieński","łobeski","myśliborski","policki","pyrzycki","stargardzki"],miasta:["Szczecin","Świnoujście"]}},z=[{TD:53958,LEWICA:47715,PIS:174643,KONF:31770,KO:169540},{TD:39215,LEWICA:25806,PIS:107797,KONF:19478,KO:120188},{TD:106624,LEWICA:88089,PIS:206899,KONF:54132,KO:286713},{TD:80426,LEWICA:52959,PIS:162603,KONF:34266,KO:186914},{TD:84308,LEWICA:60473,PIS:183131,KONF:34232,KO:158719},{TD:102894,LEWICA:37083,PIS:294847,KONF:54325,KO:131712},{TD:59577,LEWICA:25691,PIS:231882,KONF:35594,KO:79501},{TD:77933,LEWICA:47911,PIS:143530,KONF:33672,KO:195091},{TD:54283,LEWICA:55770,PIS:122433,KONF:25428,KO:187527},{TD:54479,LEWICA:25340,PIS:184929,KONF:30247,KO:86083},{TD:77313,LEWICA:41188,PIS:221031,KONF:36383,KO:138038},{TD:54585,LEWICA:22036,PIS:156308,KONF:28754,KO:88408},{TD:127693,LEWICA:83633,PIS:232430,KONF:58435,KO:232799},{TD:49487,LEWICA:13594,PIS:229587,KONF:37301,KO:68804},{TD:75229,LEWICA:16152,PIS:196433,KONF:32241,KO:68690},{TD:75526,LEWICA:28848,PIS:195218,KONF:28877,KO:99146},{TD:54690,LEWICA:20874,PIS:190418,KONF:28593,KO:82003},{TD:83681,LEWICA:26149,PIS:262236,KONF:44299,KO:100902},{TD:227127,LEWICA:230648,PIS:345380,KONF:124220,KO:741286},{TD:110086,LEWICA:51556,PIS:231905,KONF:51573,KO:257470},{TD:61155,LEWICA:34763,PIS:150022,KONF:31150,KO:161241},{TD:60938,LEWICA:19750,PIS:241790,KONF:38080,KO:70054},{TD:83676,LEWICA:32828,PIS:347688,KONF:63854,KO:119259},{TD:114898,LEWICA:29478,PIS:258277,KONF:59648,KO:126971},{TD:90599,LEWICA:57967,PIS:155318,KONF:38406,KO:257009},{TD:92793,LEWICA:56887,PIS:199709,KONF:49203,KO:258909},{TD:64778,LEWICA:34601,PIS:163506,KONF:34909,KO:127677},{TD:47698,LEWICA:30497,PIS:117756,KONF:21256,KO:94313},{TD:51681,LEWICA:35673,PIS:116827,KONF:26934,KO:139711},{TD:47525,LEWICA:26117,PIS:145230,KONF:30527,KO:114404},{TD:69825,LEWICA:44509,PIS:162458,KONF:35240,KO:193596},{TD:37221,LEWICA:81646,PIS:112389,KONF:21512,KO:114519},{TD:90975,LEWICA:45048,PIS:310266,KONF:43197,KO:137941},{TD:46101,LEWICA:24269,PIS:105373,KONF:19590,KO:95410},{TD:63007,LEWICA:31631,PIS:126432,KONF:27119,KO:129339},{TD:87628,LEWICA:46222,PIS:194416,KONF:37838,KO:154990},{TD:69740,LEWICA:39761,PIS:162192,KONF:29208,KO:100580},{TD:72996,LEWICA:32378,PIS:120301,KONF:28370,KO:144114},{TD:98589,LEWICA:73345,PIS:116666,KONF:35182,KO:262779},{TD:39776,LEWICA:28101,PIS:101023,KONF:19379,KO:124625},{TD:69957,LEWICA:52032,PIS:159575,KONF:32942,KO:222427}];let y=p.DANE;// Odkomentuj aby przegenerować dane
// okregi.forEach((okreg) => {
//   const daneZOkregu = RozkladPrawdopodobienstwaWOkregu(
//     sredniaSondazy as Wynik,
//     okreg
//   );
//   dane[okreg.miasto] = daneZOkregu;
// });
// console.log(dane);
const b={};// window.onload = function() {
let I=1;(0,s.okregi).forEach(i=>{let e=document.createElement("div");e.innerHTML=`<h2>${i.miasto} (${I})</h2>`,e.id=`${i.miasto}Info`,e.className="info",E(i,e);let t=document.createElement("div");t.setAttribute("class","kontener");let o=document.createElement("div");o.setAttribute("id","WykresMiasto"+i.miasto),o.setAttribute("class","wykres");let a=document.createElement("div");a.setAttribute("id","WykresMiasto"+i.miasto+"Demo"),a.setAttribute("class","wykres"),t.appendChild(o),t.appendChild(a),e.appendChild(t);let s=document.createElement("div");s.setAttribute("class","kontener");let n=document.createElement("div");n.setAttribute("id","InfoMiasto"+i.miasto),n.setAttribute("class","wykres"),s.appendChild(n);let r=document.createElement("div");r.setAttribute("id","InfoMiasto2"+i.miasto),r.setAttribute("class","wykres"),s.appendChild(r),e.appendChild(s);let k=document.createElement("div");k.setAttribute("id","InfoMiasto3"+i.miasto),k.setAttribute("class","wykres"),e.appendChild(k),document.getElementById("Info").appendChild(e);let l=document.getElementById(i.miasto+"Icon");l.addEventListener("mouseover",()=>{e.style.display="block",document.getElementsByClassName("placeholder")[0].setAttribute("style","display: none")}),l.addEventListener("mouseout",()=>{e.style.display="none",window.innerWidth>768&&document.getElementsByClassName("placeholder")[0].setAttribute("style","display: block")}),I++});let O=0;for(const i of s.okregi)setTimeout(()=>(function(i,e,t){let{procentyWOkreguSrednia:o,odchylenieWOkregu:a,wykresRozkladu:r,wykresRozkladuDemo:k,histogram:l,minimumMandatow:p,zagrozoneMandaty:u,potencjalneMandaty:I,ostatnieMandaty:O,dawcyGlosow:g}=y[e.miasto],{powiaty:K,miasta:C,województwo:h}=t,A=document.createElement("h2");A.innerHTML=`${e.miasto} (${e.nr})`,A.setAttribute("id",e.miasto),A.setAttribute("class","miastoHeader"),document.getElementById("analizy").appendChild(A);let L=document.createElement("p");L.setAttribute("class","skladniki_okregu"),L.innerHTML=h?`wojew\xf3dztwo: <b>${h}</b>`:"",L.innerHTML+=K?`<b>powiaty</b>: ${K.join(", ")}`:"",L.innerHTML+=K&&C?"<br/>":"",L.innerHTML+=C?`<b>miasta</b>: ${C.join(", ")}`:"",document.getElementById("analizy").appendChild(L),E(e,document.getElementById("analizy")),b[e.miasto]={nazwaOkregu:e.miasto,nrOkregu:e.nr,rekomendacjePartii:w.komentarze[e.miasto].rekomendacjePartii};let f=document.createElement("div"),S=document.createElement("div"),T=document.createElement("div"),D=document.createElement("h3");f.setAttribute("class","kontener"),D.innerHTML="Prawdopodobieństwo podziału mandat\xf3w",document.getElementById("analizy").appendChild(D),S.setAttribute("class","wykres"),S.setAttribute("id","Miasto"+e.miasto),T.setAttribute("class","wykres"),T.setAttribute("id","Miasto"+e.miasto+"Demo"),f.appendChild(S),f.appendChild(T),document.getElementById("analizy").appendChild(f);let P=document.createElement("p");P.setAttribute("style","margin-bottom: 30px; "),P.innerHTML=function(i,e){let t=Object.entries(i)[0],o=Object.entries(i)[1],a=o[1].DEMO>t[1].DEMO;return`W okręgu ${e.miasto} z  prawdopodobieństwem ${t[0]} demokratyczna opozycja  zdobędzie ${t[1].DEMO} ${c(t[1].DEMO)} a PiS i Konfederacja zdobędą ${t[1].NIEDEMO} ${c(t[1].NIEDEMO)}. `+(void 0!==o?(a?`Jest ${o[0]} szans, że `:`Istnieje ${o[0]} ryzyko, że `)+`demokratyczna opozycja zdobędzie ${o[1].DEMO} ${c(o[1].DEMO)} `+`a PiS i Konfederacja zdobędą ${o[1].NIEDEMO} ${c(o[1].NIEDEMO)}. <br/>`:"<br/>")}//# sourceMappingURL=index.d197d0ca.js.map
    (k,e),document.getElementById("analizy").appendChild(P);let N=document.createElement("p");N.setAttribute("style","margin-bottom: 15px; "),N.innerHTML="Wykresy poniżej pokazują prawdopodobieństwo poparcia danej partii. Im wyższy słupek, tym większa szansa, że partia dostanie określony procent głos\xf3w.",document.getElementById("analizy").appendChild(N),function(i,e,t,o,a){let n=document.createElement("div");n.setAttribute("class","kontener"),document.getElementById("analizy").appendChild(n),Object.values(z).reduce((i,e)=>({KO:i.KO+e.KO,LEWICA:i.LEWICA+e.LEWICA,KONF:i.KONF+e.KONF,PIS:i.PIS+e.PIS,TD:i.TD+e.TD}),{TD:0,LEWICA:0,PIS:0,KONF:0,KO:0});let r=Object.values(z[i.nr-1]).reduce((i,e)=>i+=e,0);Object.entries(s.sredniaSondazy).forEach(([s,k])=>{if(["PIS","KONF"].includes(s))return;let l=i.miasto+"Histogram"+s,d=document.createElement("div");d.setAttribute("id",l),d.setAttribute("class","histogram"),n.appendChild(d);let c=z[i.nr-1][s]/r,w=`${Math.round(1e3*c)/10}%`;m(e[s],l,s,(Math.round(5*t[s])/5).toString(),w,o[s],a,i),"KO"===s&&m(e[s],"InfoMiasto"+i.miasto,s,(Math.round(5*t[s])/5).toString(),w,o[s],a,i),"TD"===s&&m(e[s],"InfoMiasto2"+i.miasto,s,(Math.round(5*t[s])/5).toString(),w,o[s],a,i),"LEWICA"===s&&m(e[s],"InfoMiasto3"+i.miasto,s,(Math.round(5*t[s])/5).toString(),w,o[s],a,i)})}(e,l,o,a,p),d(k,"Miasto"+e.miasto,{poziomo:!0,laczOpozycje:!0});let W=(0,n.NaPolDemo)((0,n.PodzialMandatowWOkregu)(z[e.nr-1],e,{log:!1,inputWGlosach:!0}));d({PKW:W,...r},"Miasto"+e.miasto+"Demo",{poziomo:!0,laczOpozycje:!1}),d(k,"WykresMiasto"+e.miasto,{poziomo:!0,laczOpozycje:!0}),d(Object.keys(r).slice(0,6).reduce((i,e)=>(i[e]=r[e],i),{}),"WykresMiasto"+e.miasto+"Demo",{poziomo:!0,laczOpozycje:!1});// Opcjonalne...
    // const symulacje = document.createElement("p");
    // symulacje.setAttribute("class", "symulacje");
    // let tabelka = '<table>';
    // tabelka +=
    //   "<th>Partia</th><th>Ostatni mandat</th><th>Zagrożenie</th><th>Dawca głosów</th><th>Szansa</th>";
    // for (const partia of ["KO", "TD", "LEWICA"]) {
    //   tabelka += `<tr><td>${partia}</td><td>${Math.round(
    //     (100 * ostatnieMandaty[partia]) / ILE_SYMULACJI
    //   )}%</td><td>${Math.round(
    //     (100 * zagrozoneMandaty[partia]) / ILE_SYMULACJI
    //   )}%</td><td>${Math.round(
    //     (100 * dawcyGlosow[partia]) / ILE_SYMULACJI
    //   )}%</td><td>${Math.round(
    //     (100 * potencjalneMandaty[partia]) / ILE_SYMULACJI
    //   )}%</td></tr>`;
    // }
    // let legenda = "<b>Ostatni mandat</b> oznacza w ilu procent symulacji partia bierze ostatni przydzielony mandat, co jest najbardziej efektywne wykorzystanie, ale i ryzykowne gdyby głosów było mniej niż wypadło w symulacji.<br/> "
    // legenda +=
    //   `<b>Zagrożenie</b> oznacza w ilu procent symulacji partia zdobywa do 20% ceny mandatu powyżej tego co niezbędne do wzięcia jej ostatniego mandatu. Jest to efektywne, ale wiąże się z ryzykiem, choć nie aż takim jak ostatni mandat.<br/> `;
    // legenda += `<b>Dawca głosów</b> oznacza w ilu procent symulacji partia zdobywa między 25% a 75% ceny mandatu powyżej tego co niezbędne do wzięcia jej ostatniego mandatu. Taki mandat jest bezpieczny, choć nie bardzo efektywny, można więc myśleć o wykorzystaniu tych głosów gdzie indziej.<br/>`;
    // legenda += `<b>Szansa</b> oznacza w ilu procent symulacji partia zdobywa ponad 80% ceny mandatu powyżej tego co niezbędne do wzięcia jej ostatniego mandatu. Jest to sytuacja, w której zdobycie kolejnego mandatu jest "blisko".<br/>`;
    // symulacje.innerHTML = tabelka + "</table>" + legenda;
    // document.getElementById("analizy").appendChild(symulacje);
    })(s.sredniaSondazy,i,u[++O]),200+50*O);// For initial page load:
if(window.addEventListener("hashchange",function(){let i=document.getElementById(location.hash.substring(1));i&&i.scrollIntoView()},!1),location.hash){let i=document.getElementById(location.hash.substring(1));i&&i.scrollIntoView()}function E(i,e){let t=w.komentarze[i.miasto].rekomendacjePartii;if(t?.length&&""!==t[0]){let o=document.createElement("div"),a=document.createElement("h4");// rekomendacjeLogos.setAttribute("id", "RekomendacjeMiasto" + okreg.miasto);
for(let i of(a.innerHTML="Nasza rekomendacja:",o.appendChild(a),t)){let e=document.createElement("img");e.setAttribute("style","padding: 0px 20px;"),e.src=`${i}.png`,o.appendChild(e)}if(e.appendChild(o),t.length>1){let e=document.getElementById(i.miasto+"Icon"),o=e.getElementsByTagName("path")[0];o.setAttribute("fill",`url(#stripes${t[0].toLocaleLowerCase()}${t[1].toLocaleLowerCase()})`)}else document.getElementById(i.miasto+"Icon").style.fill=s.KOLOR_PARTII[w.komentarze[i.miasto].rekomendacjePartii[0]];let n=document.createElement("p");n.innerHTML=`${w.komentarze[i.miasto].txt||""}`,e.appendChild(n)}else{let t=document.createElement("h4");t.innerHTML="Brak Rekomendacji",e.appendChild(t);let o=document.createElement("p");o.innerHTML=`${w.komentarze[i.miasto].txt||""}`,e.appendChild(o),document.getElementById(i.miasto+"Icon").style.fill="white"}}
//# sourceMappingURL=index.d197d0ca.js.map
