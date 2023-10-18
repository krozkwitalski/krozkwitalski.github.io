var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},r=t.parcelRequire94c2;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in e){var r=e[t];delete e[t];var o={id:t,exports:{}};return n[t]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){e[t]=n},t.parcelRequire94c2=r),r.register("1NWL6",function(t,n){!// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function(t,n,e){function r(t){var n,e=this,r=(n=4022871197,function(t){t=String(t);for(var e=0;e<t.length;e++){var r=.02519603282416938*(n+=t.charCodeAt(e));n=r>>>0,r-=n,r*=n,n=r>>>0,r-=n,n+=4294967296*r}return(n>>>0)*23283064365386963e-26;// 2^-32
});e.next=function(){var t=2091639*e.s0+23283064365386963e-26*e.c;// 2^-32
return e.s0=e.s1,e.s1=e.s2,e.s2=t-(e.c=0|t)},// Apply the seeding algorithm from Baagoe.
e.c=1,e.s0=r(" "),e.s1=r(" "),e.s2=r(" "),e.s0-=r(t),e.s0<0&&(e.s0+=1),e.s1-=r(t),e.s1<0&&(e.s1+=1),e.s2-=r(t),e.s2<0&&(e.s2+=1)}function o(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function i(t,n){var e=new r(t),i=n&&n.state,a=e.next;return a.int32=function(){return 4294967296*e.next()|0},a.double=function(){return a()+(2097152*a()|0)*11102230246251565e-32;// 2^-53
},a.quick=a,i&&("object"==typeof i&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.alea=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("8FlDu",function(t,n){!// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
function(t,n,e){function r(t){var n=this,e="";n.x=0,n.y=0,n.z=0,n.w=0,// Set up generator function.
n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:e+=t;// Mix in string seed, then discard an initial batch of 64 values.
for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function i(t,n){var e=new r(t),i=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do var t=e.next()>>>11,n=(e.next()>>>0)/4294967296,r=(t+n)/2097152;while(0===r)return r},a.int32=e.next,a.quick=a,i&&("object"==typeof i&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xor128=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("1rFi6",function(t,n){!// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
function(t,n,e){function r(t){var n=this,e="";// Set up generator function.
n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^(t^t<<1))|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;// Mix in string seed, then discard an initial batch of 64 values.
for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),r==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function i(t,n){var e=new r(t),i=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do var t=e.next()>>>11,n=(e.next()>>>0)/4294967296,r=(t+n)/2097152;while(0===r)return r},a.int32=e.next,a.quick=a,i&&("object"==typeof i&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorwow=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("iDdZD",function(t,n){!// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
function(t,n,e){function r(t){var n=this;// Set up generator function.
n.next=function(){// Update xor generator.
var t,e,r=n.x,o=n.i;return t=r[o],t^=t>>>7,e=t^t<<24^((t=r[o+1&7])^t>>>10)^((t=r[o+3&7])^t>>>3)^((t=r[o+4&7])^t<<7),t=r[o+7&7],t^=t<<13,e^=t^t<<9,r[o]=e,n.i=o+1&7,e},function(t,n){var e,r=[];if(n===(0|n))r[0]=n;else for(e=0,// Seed state using a string.
n=""+n;e<n.length;++e)r[7&e]=r[7&e]<<15^n.charCodeAt(e)+r[e+1&7]<<13;// Enforce an array length of 8, not all zeroes.
for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);// Discard an initial 256 values.
for(8==e?r[7]=-1:r[e],t.x=r,t.i=0,e=256;e>0;--e)t.next()}(n,t)}function o(t,n){return n.x=t.x.slice(),n.i=t.i,n}function i(t,n){null==t&&(t=+new Date);var e=new r(t),i=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do var t=e.next()>>>11,n=(e.next()>>>0)/4294967296,r=(t+n)/2097152;while(0===r)return r},a.int32=e.next,a.quick=a,i&&(i.x&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorshift7=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("bDA0X",function(t,n){!// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
function(t,n,e){function r(t){var n=this;// Set up generator function.
n.next=function(){var t,e,r=n.w,o=n.X,i=n.i;// Result is the combination.
return(// Update Weyl generator.
n.w=r=r+1640531527|0,// Update xor generator.
e=o[i+34&127],t=o[i=i+1&127],e^=e<<13,t^=t<<17,e^=e>>>15,t^=t>>>12,// Update Xor generator array state.
e=o[i]=e^t,n.i=i,e+(r^r>>>16)|0)},function(t,n){var e,r,o,i,a,u=[],c=128;// Initialize circular array and weyl value.
for(n===(0|n)?(// Numeric seeds initialize v, which is used to generates X.
r=n,n=null):(// String seeds are mixed into v and X one character at a time.
n+="\x00",r=0,c=Math.max(c,n.length)),o=0,i=-32;i<c;++i)n&&(r^=n.charCodeAt((i+32)%n.length)),0===i&&(a=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(a=a+1640531527|0,o=0==(e=u[127&i]^=r+a)?o+1:0);for(o>=128&&(u[127&(n&&n.length||0)]=-1),// Run the generator 512 times to further mix the state before using it.
// Factoring this as a function slows the main generator, so it is just
// unrolled here.  The weyl generator is not advanced while warming up.
o=127,i=512;i>0;--i)r=u[o+34&127],e=u[o=o+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,u[o]=r^e;// Storing state as object members is faster than using closure variables.
t.w=a,t.X=u,t.i=o}(n,t)}function o(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function i(t,n){null==t&&(t=+new Date);var e=new r(t),i=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do var t=e.next()>>>11,n=(e.next()>>>0)/4294967296,r=(t+n)/2097152;while(0===r)return r},a.int32=e.next,a.quick=a,i&&(i.X&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xor4096=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("oBon1",function(t,n){!// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
function(t,n,e){function r(t){var n=this,e="";// Set up generator function.
n.next=function(){var t=n.b,e=n.c,r=n.d,o=n.a;return t=t<<25^t>>>7^e,e=e-r|0,r=r<<24^r>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-r|0,n.d=r<<16^e>>>16^o,n.a=o-t|0},/* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(// Integer seed.
n.a=t/4294967296|0,n.b=0|t):e+=t;// Mix in string seed, then discard an initial batch of 64 values.
for(var r=0;r<e.length+20;r++)n.b^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function i(t,n){var e=new r(t),i=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do var t=e.next()>>>11,n=(e.next()>>>0)/4294967296,r=(t+n)/2097152;while(0===r)return r},a.int32=e.next,a.quick=a,i&&("object"==typeof i&&o(i,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.tychei=i}(0,t,"function"==typeof define&&define// present with an AMD loader
)}),r.register("kjyEk",function(t,n){});var o=r("geIQo"),i=r("aokan"),o=r("geIQo");r("cWeek");var a={},u=r("1NWL6"),c=r("8FlDu"),f=r("1rFi6"),s=r("iDdZD"),l=r("bDA0X"),d=r("oBon1"),h={};function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,function(t){var n=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(r.key),r)}}function v(t,n,e){return n&&p(t.prototype,n),e&&p(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,g(t,n)}function g(t,n){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}!/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/function(t,n,e){//
// The following constants are related to IEEE 754 limits.
//
var o,i="random",a=e.pow(256,6),u=e.pow(2,52),c=2*u;// node.js crypto module, initialized at the bottom.
//
// seedrandom()
// This is the seedrandom function described above.
//
function f(r,f,h){var v=[],y=d(//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function t(n,e){var r,o=[],i=typeof n;if(e&&"object"==i)for(r in n)try{o.push(t(n[r],e-1))}catch(t){}return o.length?o:"string"==i?n:n+"\x00"}((f=!0==f?{entropy:!0}:f||{}).entropy?[r,p(n)]:null==r?//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function(){try{var e;return o&&(e=o.randomBytes)?e=e(256):(e=new Uint8Array(256),(t.crypto||t.msCrypto).getRandomValues(e)),p(e)}catch(e){var r=t.navigator,i=r&&r.plugins;return[+new Date,t,i,t.screen,p(n)]}}():r,3),v),g=new s(v),x=function(){for(var t=g.g(6),n=a,e=0;t<u;)t=(t+e)*256,n*=256,e=g.g(1);for(;t>=c;)t/=2,n/=2,e>>>=1;return(t+e)/n;// Form the number within [0, 1).
};// Calling convention: what to return as a function of prng, seed, is_math.
return x.int32=function(){return 0|g.g(4)},x.quick=function(){return g.g(4)/4294967296},x.double=x,// Mix the randomness into accumulated entropy.
d(p(g.S),n),(f.pass||h||function(t,n,r,o){return(// If called as a method of Math (Math.seedrandom()), mutate
// Math.random because that is how seedrandom.js has worked since v1.0.
(o&&(o.S&&l(o,g),// Only provide the .state method if requested via options.state.
t.state=function(){return l(g,{})}),r)?(e[i]=t,n):t)})(x,y,"global"in f?f.global:this==e,f.state)}//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function s(t){var n,e=t.length,r=this,o=0,i=r.i=r.j=0,a=r.S=[];// Set up S using the standard key scheduling algorithm.
for(e||(t=[e++]);o<256;)a[o]=o++;for(o=0;o<256;o++)a[o]=a[i=255&i+t[o%e]+(n=a[o])],a[i]=n;// The "g" method returns the next (count) outputs as one number.
(r.g=function(t){for(// Using instance members instead of closure state nearly doubles speed.
var n,e=0,o=r.i,i=r.j,a=r.S;t--;)n=a[o=255&o+1],e=256*e+a[255&(a[o]=a[i=255&i+n])+(a[i]=n)];return r.i=o,r.j=i,e;// For robust unpredictability, the function call below automatically
// discards an initial batch of values.  This is called RC4-drop[256].
// See http://google.com/search?q=rsa+fluhrer+response&btnI
})(256)}//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function l(t,n){return n.i=t.i,n.j=t.j,n.S=t.S.slice(),n}//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function d(t,n){for(var e,r=t+"",o=0;o<r.length;)n[255&o]=255&(e^=19*n[255&o])+r.charCodeAt(o++);return p(n)}//
// tostring()
// Converts an array of charcodes to a string
//
function p(t){return String.fromCharCode.apply(0,t)}//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if(//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
d(e.random(),n),h){h=f;// When in node.js, try using crypto package for autoseeding.
try{o=r("kjyEk")}catch(t){}}else"function"==typeof define&&define.amd?define(function(){return f}):e["seed"+i]=f;// End anonymous scope, and pass initial values.
}(// otherwise `this` in Node and other environments
"undefined"!=typeof self?self:h,[],Math// math: package containing random, pow, and seedrandom
),h.alea=u,h.xor128=c,h.xorwow=f,h.xorshift7=s,h.xor4096=l,h.tychei=d,a=h;var x=/*#__PURE__*/function(){function t(){}return(// eslint-disable-next-line @typescript-eslint/no-unused-vars
t.prototype._seed=function(t,n){// TODO: add entropy and stuff
if(t===(t||0))return t;for(var e=""+t,r=0,o=0;o<e.length;++o)r^=0|e.charCodeAt(o);return r},t)}(),m=/*#__PURE__*/function(t){function n(n,e){var r;return(r=t.call(this)||this)._rng=void 0,r.seed(n,e),r}y(n,t);var e=n.prototype;return e.next=function(){return this._rng()},e.seed=function(t,n){this._rng=t},e.clone=function(t,e){return new n(this._rng,e)},v(n,[{key:"name",get:function(){return"function"}}]),n}(x),w=function(){var t,n=[].slice.call(arguments),e=n[0],r=void 0===e?"default":e;switch(typeof r){case"object":if(r instanceof x)return r;break;case"function":return new m(r);default:return new m(((t=a)&&t.__esModule?t.default:t).apply(void 0,n))}throw Error('invalid RNG "'+r+'"')},b=function(t,n,e){return void 0===n&&(n=0),void 0===e&&(e=1),function(){return t.next()*(e-n)+n}};function O(t){return new M(t)}var M=function(t){var n=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(n.n))return n;throw Error("Expected number to be an integer, got "+n.n)},this.isPositive=function(){if(n.n>0)return n;throw Error("Expected number to be positive, got "+n.n)},this.lessThan=function(t){if(n.n<t)return n;throw Error("Expected number to be less than "+t+", got "+n.n)},this.greaterThanOrEqual=function(t){if(n.n>=t)return n;throw Error("Expected number to be greater than or equal to "+t+", got "+n.n)},this.greaterThan=function(t){if(n.n>t)return n;throw Error("Expected number to be greater than "+t+", got "+n.n)},this.n=t},E=function(t,n,e){return void 0===n&&(n=0),void 0===e&&(e=1),void 0===e&&(e=void 0===n?1:n,n=0),O(n).isInt(),O(e).isInt(),function(){return Math.floor(t.next()*(e-n+1)+n)}},I=function(t){return function(){return t.next()>=.5}},z=function(t,n,e){void 0===n&&(n=0),void 0===e&&(e=1);var r=t.normal(n,e);return function(){return Math.exp(r())}},A=function(t,n){void 0===n&&(n=.5),O(n).greaterThan(0).lessThan(1);var e=1/Math.log(1-n);return function(){return Math.floor(1+Math.log(t.next())*e)}},k=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],j=function(t,n){if(void 0===n&&(n=1),O(n).isPositive(),n<10){// inversion method
var e=Math.exp(-n);return function(){for(var r=e,o=0,i=t.next();i>r;)i-=r,r=n*r/++o;return o}}// generative method
var r=Math.sqrt(n),o=.931+2.53*r,i=-.059+.02483*o,a=1.1239+1.1328/(o-3.4),u=.9277-3.6224/(o-2);return function(){for(;;){var e=void 0,c=t.next();if(c<=.86*u)return Math.floor((2*i/(.5-Math.abs(e=c/u-.43))+o)*e+n+.445);c>=u?e=t.next()-.5:(e=((e=c/u-.93)<0?-.5:.5)-e,c=t.next()*u);var f=.5-Math.abs(e);if(!(f<.013)||!(c>f)){var s=Math.floor((2*i/f+o)*e+n+.445);if(c=c*a/(i/(f*f)+o),s>=10){if(Math.log(c*r)<=(s+.5)*Math.log(n/s)-n-.9189385332046727+s-(1/12-(1/360-1/(1260*s*s))/(s*s))/s)return s}else if(s>=0){var l,d=null!=(l=k[s])?l:0;if(Math.log(c)<=s*Math.log(n)-n-d)return s}}}}},T=function(t,n){void 0===n&&(n=1),O(n).isInt().isPositive();var e=t.irwinHall(n);return function(){return e()/n}},P=function(t,n){void 0===n&&(n=1),O(n).greaterThanOrEqual(0);var e=1/n;return function(){return 1/Math.pow(1-t.next(),e)}},_=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}y(n,t);var e=n.prototype;return e.next=function(){return Math.random()},e.seed=function(t,n){// intentionally empty
},e.clone=function(){return new n},v(n,[{key:"name",get:function(){return"default"}}]),n}(x),D=new/*#__PURE__*/(function(){function t(t){var n=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return n._rng.next()},this.float=function(t,e){return n.uniform(t,e)()},this.int=function(t,e){return n.uniformInt(t,e)()},this.integer=function(t,e){return n.uniformInt(t,e)()},this.bool=function(){return n.uniformBoolean()()},this.boolean=function(){return n.uniformBoolean()()},this.uniform=function(t,e){return n._memoize("uniform",b,t,e)},this.uniformInt=function(t,e){return n._memoize("uniformInt",E,t,e)},this.uniformBoolean=function(){return n._memoize("uniformBoolean",I)},this.normal=function(t,e){var r,o;return void 0===(r=t)&&(r=0),void 0===(o=e)&&(o=1),function(){var t,e,i;do i=(t=2*n.next()-1)*t+(e=2*n.next()-1)*e;while(!i||i>1)return r+o*e*Math.sqrt(-2*Math.log(i)/i)}},this.logNormal=function(t,e){return z(n,t,e)},this.bernoulli=function(t){var e;return void 0===(e=t)&&(e=.5),O(e).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(n.next()+e)}},this.binomial=function(t,e){var r,o;return void 0===(r=t)&&(r=1),void 0===(o=e)&&(o=.5),O(r).isInt().isPositive(),O(o).greaterThanOrEqual(0).lessThan(1),function(){for(var t=0,e=0;t++<r;)n.next()<o&&e++;return e}},this.geometric=function(t){return A(n,t)},this.poisson=function(t){return j(n,t)},this.exponential=function(t){var e;return void 0===(e=t)&&(e=1),O(e).isPositive(),function(){return-Math.log(1-n.next())/e}},this.irwinHall=function(t){var e;return void 0===(e=t)&&(e=1),O(e).isInt().greaterThanOrEqual(0),function(){for(var t=0,r=0;r<e;++r)t+=n.next();return t}},this.bates=function(t){return T(n,t)},this.pareto=function(t){return P(n,t)},t&&t instanceof x?this.use(t):this.use(new _),this._cache={}}/**
   * @member {RNG} Underlying pseudo-random number generator
   */var n=t.prototype;return(/**
   * Creates a new `Random` instance, optionally specifying parameters to
   * set a new seed.
   *
   * @see RNG.clone
   *
   * @param {string} [seed] - Optional seed for new RNG.
   * @param {object} [opts] - Optional config for new RNG options.
   * @return {Random}
   */n.clone=function(){var n=[].slice.call(arguments);return new t(n.length?w.apply(void 0,n):this.rng.clone())}/**
   * Sets the underlying pseudorandom number generator used via
   * either an instance of `seedrandom`, a custom instance of RNG
   * (for PRNG plugins), or a string specifying the PRNG to use
   * along with an optional `seed` and `opts` to initialize the
   * RNG.
   *
   * @example
   * import random from 'random'
   *
   * random.use('example_seedrandom_string')
   * // or
   * random.use(seedrandom('kittens'))
   * // or
   * random.use(Math.random)
   *
   * @param {...*} args
   */,n.use=function(){this._rng=w.apply(void 0,[].slice.call(arguments))}/**
   * Patches `Math.random` with this Random instance's PRNG.
   */,n.patch=function(){if(this._patch)throw Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()}/**
   * Restores a previously patched `Math.random` to its original value.
   */,n.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)}/**
   * Convenience wrapper around `this.rng.next()`
   *
   * Returns a floating point number in [0, 1).
   *
   * @return {number}
   */,/**
   * Returns an item chosen uniformly at trandom from the given array.
   *
   * Convence wrapper around `random.uniformInt()`
   *
   * @param {Array<T>} [array] - Lower bound (integer, inclusive)
   * @return {T | undefined}
   */n.choice=function(t){if(!Array.isArray(t))throw Error("Random.choice expected input to be an array, got "+typeof t);var n=null==t?void 0:t.length;return n>0?t[this.uniformInt(0,n-1)()]:void 0}/**
   * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).
   *
   * @param {number} [min=0] - Lower bound (float, inclusive)
   * @param {number} [max=1] - Upper bound (float, exclusive)
   * @return {function}
   */,// --------------------------------------------------------------------------
// Internal
// --------------------------------------------------------------------------
/**
   * Memoizes distributions to ensure they're only created when necessary.
   *
   * Returns a thunk which that returns independent, identically distributed
   * samples from the specified distribution.
   *
   * @private
   *
   * @param {string} label - Name of distribution
   * @param {function} getter - Function which generates a new distribution
   * @param {...*} args - Distribution-specific arguments
   *
   * @return {function}
   */n._memoize=function(t,n){var e=[].slice.call(arguments,2),r=""+e.join(";"),o=this._cache[t];return(void 0===o||o.key!==r)&&(o={key:r,distribution:n.apply(void 0,[this].concat(e))},this._cache[t]=o),o.distribution},v(t,[{key:"rng",get:function(){return this._rng}}]),t)}());// Źródło:
// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=592625443&range=AI4:AI44,
// import { Partia, Partie, sondaz_uliczny } from "./sondaz_uliczny";
// const TD = Object.entries(sondaz_uliczny).map(([okreg, partie]) => {
//   return partie['TD'].poparcie
// });
// console.log(TD);
const W={LEWICA:[.0282571335,.01488150667,.0478222815,.02984793983,.029476448,.0180548925,.010392221,.02975490417,.03759809833,.01542527167,.0236883605,.01100846683,.0397647275,.0091506275,.007909908333,.014014961,.008859429833,.010201509,.118083528,.03675424117,.020347473,.008839666333,.0155574055,.017031283,.032726717,.03074119817,.020098175,.0194996075,.01982511017,.01285778183,.02496772,.032462213,.0220234625,.0126734095,.01999657117,.02434270517,.021791153,.01856165517,.0379657795,.01779259133,.02895186617],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=592625443&range=AN4:AN44,
LEWICA_BLAD:[5.44,4.35,9.6,7.9,7.12,3.38,7.34,3.42,7.25,3.99,5.89,3,6.74,3.41,3.53,6.97,6.73,5.94,9.39,8.1,1.61,5.79,2.92,7.77,5.7,2.09,3.51,8.74,2.27,5.02,3.17,5.67,6.45,4.54,3.6,6.46,8.97,7.86,6.82,5.23,3.79],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=1383721529&range=U3:U43,
KO:[.02095042333,.01835469433,.04189383883,.02857291333,.02348052333,.02197197817,.01186840483,.02720124583,.0292574625,.01053707333,.0189868865,.01425199983,.03839594083,.009164819667,.008615772,.01198455117,.01145744533,.01229867283,.1181621912,.0343164895,.02074295667,.01193354767,.01593256617,.0210371165,.0441507985,.04206959417,.020244877,.01245059417,.02117911833,.01750180833,.034037158,.01911514317,.019047872,.01428191817,.017092405,.02281050867,.01443454267,.02173799933,.047433574,.01732140367,.03372117283],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=1383721529&range=X3:X43,
KO_BLAD:[2.38,4.81,2.31,6.08,5.05,1.21,1.82,2.96,5.81,1.72,4.21,1.47,3.91,6.86,6.03,2.58,1.74,1.66,6.52,2.43,3.08,2.44,3.1,2.78,6.05,3.14,2.42,3.58,3.46,5.66,4.79,1.11,1.82,4.67,2.93,2.28,1.65,4.96,4.83,5.98,3.32],// TRZEBA POSORTOWAĆ ARKUSZ!!!
// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=1231789773&range=R4:R44,
TD:[.022415876,.0140898335,.03175889317,.0283710235,.02891201475,.026946886,.022047627,.03287808558,.01753570292,.01884171267,.02608876458,.01569827233,.03346774583,.0150046695,.02292685725,.02517498925,.01684268933,.02528291583,.05741305392,.03330098842,.02768583583,.0156986055,.0244913335,.03222947392,.02653349625,.033979463,.02036296842,.01573798425,.017095344,.01606130233,.02022854192,.01415383625,.02527398442,.01563157683,.02427266483,.03357863792,.02057061317,.02859777067,.0285236385,.01738948992,.02690483617],// stały
TD_BLAD:[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=418600979&range=V3:V43,
PIS:[.02289047833,.014539447,.02776369267,.02131711167,.02294950533,.03838390783,.02973062217,.01900597067,.01591571983,.02408826683,.02904836917,.02130995067,.0311625805,.02963938367,.02562634467,.02475671167,.02382695067,.033949261,.04304594533,.02970509583,.01980732767,.03061604567,.04447523967,.03270840817,.02036073383,.02608811483,.0227350815,.0159613145,.016143496,.02084102017,.02295180183,.01589586733,.04070432767,.013169903,.01636291267,.02526424917,.02164847417,.01629085967,.01578302817,.012774997,.02076148367],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=418600979&range=X3:X43,
PIS_BLAD:[1.25,2.27,2.65,3.22,1.73,6.49,10.69,2.54,2.74,8.62,6.18,1.37,7.92,5.76,3.48,5.35,7.48,8.33,7.79,4.64,3.03,4.2,3.39,3.23,3.62,3.23,5,2.05,4.8,3.58,5.93,3.25,6.75,3.18,2.45,3.75,5.87,3.43,6.49,2.91,2.37],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=173675036&range=W3:W43,
KONF:[.02060562967,.01229549835,.03603269929,.02187492114,.022931464,.03703330869,.02519996845,.02217074937,.01722519479,.01994023364,.02252087825,.02050570213,.03539542744,.02552712404,.02291576829,.01795242761,.01920071307,.02779108581,.05962854781,.02940181365,.02027409076,.02730411279,.04747821146,.03286621146,.0258593653,.03152217595,.0235678845,.01403419925,.01896100225,.02215147004,.02308606074,.01587827245,.03247476995,.01196144868,.01944236486,.0257290283,.01804960345,.01795606471,.02234484537,.01189939569,.02101026617],// https://docs.google.com/spreadsheets/d/1e7Tww7BT1zWkAuYC5zWIbX9k3GhzveAWqSR8U0iDzn0/edit#gid=173675036&range=Z3:Z43,
KONF_BLAD:[1.14,3.14,6.32,4.99,7.07,13.57,20.14,3.12,2.92,6.45,2.25,10.94,13.54,15.52,13.43,2.83,7.4,14.28,11.92,3.44,3.64,18.1,12.97,10.15,8.59,3.48,4.35,9.07,11.42,5.82,12.97,2.62,3.15,8.41,2.01,1.66,6.39,4.99,7.92,7.85,7.46]};function K(t){return{KO:t.KO,LEWICA:t.LEWICA||0,TD:t.TD||0,NIEDEMO:t.PIS+(t.KONF||0)}}function S(t,n){let e={},r={};for(let[i,a]of Object.entries(t))e[i]=a*W[i][n.nr-1],r[i]=function(t,n,e){let r=1e3*Object.entries(o.sondazeDoSredniej).length,i=n/100,a=Math.sqrt(i*(1-i)/r),u=W[`${t}_BLAD`][e-1]*Math.sqrt(5)*(n/100);// return (100 * bladProporcji) + (ROZKLAD[`${partia}_BLAD`][okreg - 1] * Math.sqrt(5));
// sumowanie odchylen standardowych: https://chat.openai.com/share/81cdfe04-09b5-45b6-8624-b3d402b12a60
// TODO @tomek dlaczego 100 * bladProporcji? bo bladOdchyleniaWREgionie byl przeliczony na punkty procentowe a bladProporcji nie?
return Math.sqrt((100*a)**2+u**2)}(i,a,n.nr);return{wynikWOkregu:e,odchylenieWOkregu:r}}function $(t){let n={PIS:0,KO:0,LEWICA:0,TD:0,KONF:0};for(let e of o.okregi){let r=S(t,e).wynikWOkregu,o=C(r,e);for(let[t,e]of Object.entries(o))n[t]+=e}return n}function C(t,n,e){let r=[];// Jeśli ilorazy są takie same to liczy się liczba głosów, ale ignorujemy to bo interesuje nas statystyka.
for(let[e,o]of Object.entries(t))for(let t=1;t<=Math.min(12,n.mandaty);t++)r.push({partia:e,iloraz:o/t,nrMandatu:t});let i=r.sort((t,n)=>n.iloraz-t.iloraz),a=i[n.mandaty-1];i[n.mandaty];// NOTE @tomek niesamowite. 2023 i nie można napisać w TypeScript sum(glosy2019[okreg.nr - 1]) jak np. w Pythonie ;-)
let u=(0,o.glosy2019)[n.nr-1].reduce((t,n)=>t+n,0),c=i.slice(0,n.mandaty).map(t=>t.partia).reduce((t,n)=>(t[n]?t[n]++:t[n]=1,t),{});// Sekcja do tabelki której aktualnie nie wyświetlamy z powodu niezdebugowanych błędów w logice poniżej (sumy powinny być prawie 100% a są dużo niższe)
for(let t of(c.cenaMandatu=Math.round(a.iloraz/100*u),r.filter(t=>t.iloraz+.001>=a.iloraz))){let n=t.iloraz*t.nrMandatu,e=Math.round(1e4*(n%a.iloraz)/a.iloraz)/1e3;c[`${t.partia}_zagrozenie`]||(c[`${t.partia}_zagrozenie`]=e<.2&&e>0),c[`${t.partia}_ostatnie`]||(c[`${t.partia}_ostatnie`]=0===e),c[`${t.partia}_dawca`]||(c[`${t.partia}_dawca`]=e<.75&&e>.25)}for(let t of r.filter(t=>t.iloraz<a.iloraz)){let n=t.iloraz*t.nrMandatu;c[`${t.partia}_szansa`]||(c[`${t.partia}_szansa`]=n%a.iloraz/a.iloraz>.8)}// if (options?.log) {
//   console.log(
//     `W okręgu ${okreg.miasto} różnica głosów potrzebna żeby zmienić wynik wynosiła ${roznica}. Liczymy to jako różnicę między ostatnim wprowadzonym posłem (mandat numer #${ostatniWzietyMandat.nrMandatu} 
//     dla ${ostatniWzietyMandat.partia}) a pierwszym niebiorącym miejscem (byłby to mandat #${pierwszyNiewzietyMandat.nrMandatu} 
//     dla ${pierwszyNiewzietyMandat.partia}). Wyliczamy to dzieląc ilorazy (${ilorazBioracy} /
//     ${ilorazNiebioracy}) i mnożąc przez ${pierwszyNiewzietyMandat.nrMandatu}, bo byłby to mandat numer ${pierwszyNiewzietyMandat.nrMandatu} dla ${pierwszyNiewzietyMandat.partia} w tym okręgu.`
//   );
// }
return c}function L(t){let n=t.KO+t.PIS+t.TD+t.KONF+t.LEWICA,e=100/n;return{PIS:t.PIS*e,KO:t.KO*e,TD:t.TD*e,KONF:t.KONF*e,LEWICA:t.LEWICA*e}}var N=r("8VULN");const F={};Object.entries(o.sondaze).forEach(([t,n])=>{F[t]=K(n)}),(0,i.rysujWynikWyborow)({średnia:K(o.srednia),...F},"sondaze",{laczOpozycje:!1});const q={};q["średnia"]=K($(o.sredniaSondazy)),Object.entries(o.sondaze).forEach(([t,n])=>q[t]=K($(n))),(0,i.rysujWynikWyborow)(q,"mandatyKraj",{poziomo:!0,laczOpozycje:!1,calySejm:!0});const R={},B={},X=document.createElement("p");X.setAttribute("class","symulacje");let U="";for(const t of o.PARTIE)U+=`<td>${t}</td>`;let G="<table>";G+=`<tr><th colspan="3">Okręg wyborczy</th><th colspan="7">Prognoza ilości głos\xf3w (na komitety powyżej progu)</th><th colspan="5">Progonoza podziału mandat\xf3w</th><th colspan="5">Głosy powyżej ceny mandatu</th><th colspan="5">Głosy brakujące do następnego mandatu</th></tr><tr><th>nr</th><th>Nazwa</th><th>Mandaty</th><th>Suma</th>${U}<th>Cena mandatu</th>${U}${U}${U}</tr>`;const H={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},Q={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},V={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},Z={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0},J={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};for(const t of((0,o.okregi).forEach(t=>{let n=L(S(o.sredniaSondazy,t).wynikWOkregu),e=C(n,t),r={PIS:n.PIS,KONF:n.KONF},i=["KO","TD","LEWICA"],a=N.komentarze[t.miasto].rekomendacjePartii||[];for(let t of a)r[t]=n[t]+.3/a.length;if(a.length)for(let t of i)a.includes(t)||(r[t]=n[t]-.3/(i.length-a.length));else for(let t of["KO","TD","LEWICA"])r[t]=n[t];let u=C(r,t);R[t.miasto]=K(e),B[t.miasto]={DEMO:e.KO+(e.LEWICA||0)+(e.TD||0),NIEDEMO:e.PIS+(e.KONF||0)};// Tabelka
let c=(0,o.glosy2019)[t.nr-1].reduce((t,n)=>t+n,0),f=t=>Math.round(c*t/100),s=t=>Math.round(c*t/100%e.cenaMandatu),l=t=>Math.max(0,(s(t)+8)%e.cenaMandatu-10),d=t=>l(t)?e.cenaMandatu-l(t):0;for(let e of(G+=`<tr><td>${t.nr}</td><td>${t.miasto}</td><td>${t.mandaty}</td><td>${c}</td>`,o.PARTIE)){let t=f(n[e]);H[e]+=t,G+=`<td>${t}</td>`}G+=`<td>${e.cenaMandatu}</td>`;let h=t=>Math.round(c*t/100%u.cenaMandatu),p=t=>Math.max(0,(h(t)+8)%u.cenaMandatu-10);for(let t of o.PARTIE)Q[t]+=e[t]||0,G+=`<td>${e[t]||0}</td>`;for(let t of o.PARTIE){let e=l(n[t]);Z[t]+=e,G+=`<td>${e}</td>`}for(let t of o.PARTIE){let e=d(n[t]);G+=`<td>${e}</td>`}for(let t of(// Wiersz alternatywny
G+=`</tr><tr><td colspan="4">Podział przy przesunięciu 0.3% głos\xf3w:</td>`,o.PARTIE)){let n=f(r[t]);G+=`<td>${n}</td>`}for(let t of(G+=`<td>${u.cenaMandatu}</td>`,o.PARTIE))V[t]+=u[t]||0,G+=`<td>${u[t]||0}</td>`;for(let t of o.PARTIE){let n=p(r[t]);J[t]+=p(r[t]),G+=`<td>${n}</td>`}G+="</tr>"}),G+=`<tr><td colspan="3">Suma</td><td>${Object.values(H).reduce((t,n)=>t+=n,0)}</td>`,o.PARTIE))G+=`<td>${H[t]}</td>`;for(const t of(G+="<td>-</td>",o.PARTIE))G+=`<td>${Q[t]}</td>`;for(const t of o.PARTIE)G+=`<td>${Z[t]}</td>`;for(const t of(G+='</tr><tr><td colspan="10">Alternatywny wynik wg. rekomendacji</td>',o.PARTIE))G+=`<td>${V[t]}</td>`;for(const t of o.PARTIE)G+=`<td>${J[t]}</td>`;G+="</tr>",X.innerHTML=G+"</table>",document.getElementById("tabela").appendChild(X),(0,i.rysujWynikWyborow)(R,"mandatyWOkregach",{poziomo:!0,laczOpozycje:!1}),(0,i.rysujWynikWyborow)(B,"mandatyWOkregachDemo",{poziomo:!0,laczOpozycje:!0}),function(t){for(let n=1;n<=100;n++){let n={KO:0,PIS:0,LEWICA:0,TD:0,KONF:0};for(let e of o.okregi){let{wynikWOkregu:r,odchylenieWOkregu:i}=S(t,e),a=L(r),u=(t,n)=>Math.round(t*n)/n,{procentWOkreguLosoweUncapped:c,procentWOkreguLosoweCapped:f}=function(t,n,e){let r={};for(let[e,o]of Object.entries(t)){let t=Math.max(D.normal(o,n[e])(),0);r[e]=t}r=L(r);let o={};for(let[i,a]of Object.entries(r)){// Musimy używać tego samego odchylenia w każdej symulacji do cappowania
let r=t[i],u=n[i],c=e(Math.max(Math.min(a,r+3*u),Math.max(r-2.5*u,0)),5// dzielimy kazdy procent na przedziały co 0.2%, czyli na 5 bucketów
);o[i]=c}return{procentWOkreguLosoweUncapped:r,procentWOkreguLosoweCapped:o}}(a,i,u),s=C(c,e),l=(0,o.glosy2019)[e.nr-1].reduce((t,n)=>t+n,0),d=t=>Math.round(l*t/100),h=t=>Math.round(t%s.cenaMandatu);for(let t of(console.log(c,s),o.PARTIE)){let e=d(c[t]),r=h(e);console.log(t,e,r),n[t]+=r||0,G+=`<td>${r}</td>`}}console.log(n)}}//# sourceMappingURL=obliczenia.10e0515a.js.map
(o.sredniaSondazy);
//# sourceMappingURL=obliczenia.10e0515a.js.map
