var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},r=o.parcelRequire94c2;null==r&&((r=function(o){if(o in e)return e[o].exports;if(o in a){var r=a[o];delete a[o];var n={id:o,exports:{}};return e[o]=n,r.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(o,e){a[o]=e},o.parcelRequire94c2=r);var n=r("geIQo"),i=r("aokan"),d=r("3i35a");(0,i.rysujWynikWyborow)({srednia:n.srednia,...n.sondaze},"sondaze",{laczOpozycje:!1});const t={};t["średnia"]=(0,d.PodzialMandatowKraj)(n.sredniaSondazy),Object.entries(n.sondaze).forEach(([o,e])=>t[o]=(0,d.PodzialMandatowKraj)(e)),(0,i.rysujWynikWyborow)(t,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const l={},s={};(0,n.okregi).forEach(o=>{let e=(0,d.PoparcieWOkregu)(n.sredniaSondazy,o);l[o.miasto]=(0,d.PodzialMandatowWOkregu)(e,o),s[o.miasto]=(0,d.NaDemo)((0,d.PodzialMandatowWOkregu)(e,o))}),setTimeout(function(){(0,i.rysujWynikWyborow)(l,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,i.rysujWynikWyborow)(s,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0})},200);//# sourceMappingURL=obliczenia.be2f523a.js.map

//# sourceMappingURL=obliczenia.be2f523a.js.map
