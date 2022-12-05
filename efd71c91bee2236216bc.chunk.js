"use strict";(self.webpackChunksmall_wallet=self.webpackChunksmall_wallet||[]).push([[363],{4444:function(e,t,n){n.d(t,{$s:function(){return m},BH:function(){return p},L:function(){return s},LL:function(){return g},ZR:function(){return v},aH:function(){return d},eu:function(){return l},hl:function(){return u},m9:function(){return w},vZ:function(){return b}});var r=n(5108),i=n(4155);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,u=i>>2,l=(3&i)<<4|a>>4;let h=(15&a)<<2|c>>6,f=63&c;s||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw Error();const c=i<<2|o>>4;if(r.push(c),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){r.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"object"==typeof indexedDB}function l(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,f=()=>{try{return h()||(()=>{if(void 0===i)return;const e={REMOTE_CONFIG_API_KEY:"AIzaSyBeOsci2Kx7-rbA52KMd26Hv52ucor901Y",REMOTE_CONFIG_APP_ID:"1:234104916860:web:b46239d14392691eaef2f9",BASE_NAME:"/simple-wallet"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void r.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},d=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,g.prototype.create)}}class g{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(_,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new v(r,a,n)}}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(y(n)&&y(o)){if(!b(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function y(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w(e){return e&&e._delegate?e._delegate:e}},5503:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(2238);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)("firebase","9.14.0","app")},6605:function(e,t,n){n.d(t,{xS:function(){return ye},sN:function(){return se},NA:function(){return ue}});var r=n(2238),i=n(4444),o=n(8463),a=n(3333),s=n(4424),c=n(5108);const u="@firebase/installations",l="0.5.16",h=1e4,f="w:0.5.16",d="FIS_v2",p=36e5,v={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},g=new i.LL("installations","Installations",v);function _(e){return e instanceof i.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function m(e,t){const n=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S(e,{refreshToken:t}){const n=w(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function O(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=/^[cdef][\w-]{21}$/;function C(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return E.test(t)?t:""}catch(e){return""}}function T(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function D(e,t){const n=T(e);k(n,t),function(e,t){const n=R();n&&n.postMessage({key:e,fid:t});x()}(n,t)}function k(e,t){const n=I.get(e);if(n)for(const e of n)e(t)}let P=null;function R(){return!P&&"BroadcastChannel"in self&&(P=new BroadcastChannel("[Firebase] FID Change"),P.onmessage=e=>{k(e.data.key,e.data.fid)}),P}function x(){0===I.size&&P&&(P.close(),P=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="firebase-installations-store";let N=null;function M(){return N||(N=(0,s.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(j)}})),N}async function L(e,t){const n=T(e),r=(await M()).transaction(j,"readwrite"),i=r.objectStore(j),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||D(e,t.fid),t}async function B(e){const t=T(e),n=(await M()).transaction(j,"readwrite");await n.objectStore(j).delete(t),await n.done}async function V(e,t){const n=T(e),r=(await M()).transaction(j,"readwrite"),i=r.objectStore(j),o=await i.get(n),a=t(o);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,!a||o&&o.fid===a.fid||D(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e){let t;const n=await V(e.appConfig,(n=>{const r=function(e){return H(e||{fid:C(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=w(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:n,authVersion:d,appId:e.appId,sdkVersion:f},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await O((()=>fetch(r,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)}}throw await m("Create Installation",c)}(e,t);return L(e.appConfig,n)}catch(n){throw _(n)&&409===n.customData.serverCode?await B(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:U(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function U(e){let t=await $(e.appConfig);for(;1===t.registrationStatus;)await A(100),t=await $(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await F(e);return n||t}return t}function $(e){return V(e,(e=>{if(!e)throw g.create("installation-not-found");return H(e)}))}function H(e){return 1===(t=e).registrationStatus&&t.registrationTime+h<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function K({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=S(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:f,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await O((()=>fetch(r,s)));if(c.ok){return y(await c.json())}throw await m("Generate Auth Token",c)}async function z(e,t=!1){let n;const r=await V(e.appConfig,(r=>{if(!G(r))throw g.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await q(e.appConfig);for(;1===n.authToken.requestStatus;)await A(100),n=await q(e.appConfig);const r=n.authToken;return 0===r.requestStatus?z(e,t):r}(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await K(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await L(e.appConfig,r),n}catch(n){if(!_(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,n)}else await B(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function q(e){return V(e,(e=>{if(!G(e))throw g.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+h<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function G(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function W(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await F(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await z(n,t)).token}function X(e){return g.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="installations",J=e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw X("App Configuration");if(!e.name)throw X("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw X(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,r.qX)(t,"heartbeat"),_delete:()=>Promise.resolve()}},Z=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,Y).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await F(t);return r?r.catch(c.error):z(t).catch(c.error),n.fid}(n),getToken:e=>W(n,e)}};(0,r.Xd)(new o.wA(Y,J,"PUBLIC")),(0,r.Xd)(new o.wA("installations-internal",Z,"PRIVATE")),(0,r.KN)(u,l),(0,r.KN)(u,l,"esm2017");const Q="@firebase/remote-config",ee="0.3.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="remote-config",re={"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"},ie=new i.LL("remoteconfig","Remote Config",re);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe=["1","true","t","yes","y","on"];class ae{constructor(e,t=""){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return"static"!==this._source&&oe.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let e=Number(this._value);return isNaN(e)&&(e=0),e}getSource(){return this._source}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e=(0,r.Mq)()){e=(0,i.m9)(e);return(0,r.qX)(e,ne).getImmediate()}async function ce(e){const t=(0,i.m9)(e),n=new te;setTimeout((async()=>{n.abort()}),t.settings.fetchTimeoutMillis);try{await t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:n}),await t._storageCache.setLastFetchStatus("success")}catch(e){const n=function(e,t){return e instanceof i.ZR&&-1!==e.code.indexOf(t)}(e,"fetch-throttle")?"throttle":"failure";throw await t._storageCache.setLastFetchStatus(n),e}}function ue(e,t){const n=(0,i.m9)(e);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const r=n._storageCache.getActiveConfig();return r&&void 0!==r[t]?new ae("remote",r[t]):n.defaultConfig&&void 0!==n.defaultConfig[t]?new ae("default",String(n.defaultConfig[t])):(n._logger.debug(`Returning static value for key "${t}". Define a default or remote value if this is unintentional.`),new ae("static"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,r){this.client=e,this.storage=t,this.storageCache=n,this.logger=r}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-t,r=n<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${r}.`),r}async fetch(e){const[t,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return n;e.eTag=n&&n.eTag;const r=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===r.status&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e=navigator){return e.languages&&e.languages[0]||e.language}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,n,r,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}async fetch(e){var t,n,r;const[i,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),a=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:o,app_id:this.appId,language_code:he()},u={method:"POST",headers:s,body:JSON.stringify(c)},l=fetch(a,u),h=new Promise(((t,n)=>{e.signal.addEventListener((()=>{const e=new Error("The operation was aborted.");e.name="AbortError",n(e)}))}));let f;try{await Promise.race([l,h]),f=await l}catch(e){let r="fetch-client-network";throw"AbortError"===(null===(t=e)||void 0===t?void 0:t.name)&&(r="fetch-timeout"),ie.create(r,{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}let d=f.status;const p=f.headers.get("ETag")||void 0;let v,g;if(200===f.status){let e;try{e=await f.json()}catch(e){throw ie.create("fetch-client-parse",{originalErrorMessage:null===(r=e)||void 0===r?void 0:r.message})}v=e.entries,g=e.state}if("INSTANCE_STATE_UNSPECIFIED"===g?d=500:"NO_CHANGE"===g?d=304:"NO_TEMPLATE"!==g&&"EMPTY_CONFIG"!==g||(v={}),304!==d&&200!==d)throw ie.create("fetch-status",{httpStatus:d});return{status:d,eTag:p,config:v}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:n}){await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(ie.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(e.signal,t);try{const t=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),t}catch(t){if(!function(e){if(!(e instanceof i.ZR&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t))throw t;const r={throttleEndTimeMillis:Date.now()+(0,i.$s)(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(r),this.attemptFetch(e,r)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,n,r,i){this.app=e,this._client=t,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){var n;const r=e.target.error||void 0;return ie.create(t,{originalErrorMessage:r&&(null===(n=r)||void 0===n?void 0:n.message)})}const ge="app_namespace_store";class _e{constructor(e,t,n,r=function(){return new Promise(((e,t)=>{var n;try{const n=indexedDB.open("firebase_remote_config",1);n.onerror=e=>{t(ve(e,"storage-open"))},n.onsuccess=t=>{e(t.target.result)},n.onupgradeneeded=e=>{const t=e.target.result;0===e.oldVersion&&t.createObjectStore(ge,{keyPath:"compositeKey"})}}catch(e){t(ie.create("storage-open",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message}))}}))}()){this.appId=e,this.appName=t,this.namespace=n,this.openDbPromise=r}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const t=await this.openDbPromise;return new Promise(((n,r)=>{var i;const o=t.transaction([ge],"readonly").objectStore(ge),a=this.createCompositeKey(e);try{const e=o.get(a);e.onerror=e=>{r(ve(e,"storage-get"))},e.onsuccess=e=>{const t=e.target.result;n(t?t.value:void 0)}}catch(e){r(ie.create("storage-get",{originalErrorMessage:null===(i=e)||void 0===i?void 0:i.message}))}}))}async set(e,t){const n=await this.openDbPromise;return new Promise(((r,i)=>{var o;const a=n.transaction([ge],"readwrite").objectStore(ge),s=this.createCompositeKey(e);try{const e=a.put({compositeKey:s,value:t});e.onerror=e=>{i(ve(e,"storage-set"))},e.onsuccess=()=>{r()}}catch(e){i(ie.create("storage-set",{originalErrorMessage:null===(o=e)||void 0===o?void 0:o.message}))}}))}async delete(e){const t=await this.openDbPromise;return new Promise(((n,r)=>{var i;const o=t.transaction([ge],"readwrite").objectStore(ge),a=this.createCompositeKey(e);try{const e=o.delete(a);e.onerror=e=>{r(ve(e,"storage-delete"))},e.onsuccess=()=>{n()}}catch(e){r(ie.create("storage-delete",{originalErrorMessage:null===(i=e)||void 0===i?void 0:i.message}))}}))}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),r=await e;r&&(this.lastFetchStatus=r);const i=await t;i&&(this.lastSuccessfulFetchTimestampMillis=i);const o=await n;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ye(e){return e=(0,i.m9)(e),await ce(e),async function(e){const t=(0,i.m9)(e),[n,r]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!!(n&&n.config&&n.eTag&&n.eTag!==r)&&(await Promise.all([t._storageCache.setActiveConfig(n.config),t._storage.setActiveConfigEtag(n.eTag)]),!0)}(e)}(0,r.Xd)(new o.wA(ne,(function(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw ie.create("registration-window");if(!(0,i.hl)())throw ie.create("indexed-db-unavailable");const{projectId:s,apiKey:c,appId:u}=n.options;if(!s)throw ie.create("registration-project-id");if(!c)throw ie.create("registration-api-key");if(!u)throw ie.create("registration-app-id");t=t||"firebase";const l=new _e(u,n.name,t),h=new be(l),f=new a.Yd(Q);f.logLevel=a.in.ERROR;const d=new fe(o,r.Jn,t,s,c,u),p=new de(d,l),v=new le(p,l,h,f),g=new pe(n,v,h,l,f);return function(e){const t=(0,i.m9)(e);t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then((()=>{t._isInitializationComplete=!0}))),t._initializePromise}(g),g}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Q,ee),(0,r.KN)(Q,ee,"esm2017")},2938:function(e,t,n){n.d(t,{Pi:function(){return E}});var r=n(8949),i=n(7294);if(!i.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!r.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var o=n(3935);function a(e){e()}n(5108);function s(e){return(0,r.Gf)(e)}var c="undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry;function u(e){return{reaction:e,mounted:!1,changedBeforeMount:!1,cleanAt:Date.now()+l}}var l=1e4;var h=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};var f=c?function(e){var t=new Map,n=1,r=new e((function(e){var n=t.get(e);n&&(n.reaction.dispose(),t.delete(e))}));return{addReactionToTrack:function(e,i,o){var a=n++;return r.register(o,a,e),e.current=u(i),e.current.finalizationRegistryCleanupToken=a,t.set(a,e.current),e.current},recordReactionAsCommitted:function(e){r.unregister(e),e.current&&e.current.finalizationRegistryCleanupToken&&t.delete(e.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}(c):function(){var e,t=new Set;function n(){void 0===e&&(e=setTimeout(r,1e4))}function r(){e=void 0;var r=Date.now();t.forEach((function(e){var n=e.current;n&&r>=n.cleanAt&&(n.reaction.dispose(),e.current=null,t.delete(e))})),t.size>0&&n()}return{addReactionToTrack:function(e,r,i){var o;return e.current=u(r),o=e,t.add(o),n(),e.current},recordReactionAsCommitted:function(e){t.delete(e)},forceCleanupTimerToRunNowForTests:function(){e&&(clearTimeout(e),r())},resetCleanupScheduleForTests:function(){var n,r;if(t.size>0){try{for(var i=h(t),o=i.next();!o.done;o=i.next()){var a=o.value,s=a.current;s&&(s.reaction.dispose(),a.current=null)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.clear()}e&&(clearTimeout(e),e=void 0)}}}(),d=f.addReactionToTrack,p=f.recordReactionAsCommitted,v=(f.resetCleanupScheduleForTests,f.forceCleanupTimerToRunNowForTests,!1);function g(){return v}var _=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a};function b(e){return"observer".concat(e)}var y=function(){};function m(){return new y}function w(e,t){if(void 0===t&&(t="observed"),g())return e();var n=_(i.useState(m),1)[0],o=_(i.useState(),2)[1],a=function(){return o([])},c=i.useRef(null);if(!c.current)var u=new r.le(b(t),(function(){l.mounted?a():l.changedBeforeMount=!0})),l=d(c,u,n);var h,f,v=c.current.reaction;if(i.useDebugValue(v,s),i.useEffect((function(){return p(c),c.current?(c.current.mounted=!0,c.current.changedBeforeMount&&(c.current.changedBeforeMount=!1,a())):(c.current={reaction:new r.le(b(t),(function(){a()})),mounted:!0,changedBeforeMount:!1,cleanAt:1/0},a()),function(){c.current.reaction.dispose(),c.current=null}}),[]),v.track((function(){try{h=e()}catch(e){f=e}})),f)throw f;return h}var S="function"==typeof Symbol&&Symbol.for,O=S?Symbol.for("react.forward_ref"):"function"==typeof i.forwardRef&&(0,i.forwardRef)((function(e){return null})).$$typeof,A=S?Symbol.for("react.memo"):"function"==typeof i.memo&&(0,i.memo)((function(e){return null})).$$typeof;function E(e,t){var n;if(A&&e.$$typeof===A)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(g())return e;var r=null!==(n=null==t?void 0:t.forwardRef)&&void 0!==n&&n,o=e,a=e.displayName||e.name;if(O&&e.$$typeof===O&&(r=!0,"function"!=typeof(o=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var s,c,u=function(e,t){return w((function(){return o(e,t)}),a)};return""!==a&&(u.displayName=a),e.contextTypes&&(u.contextTypes=e.contextTypes),r&&(u=(0,i.forwardRef)(u)),u=(0,i.memo)(u),s=e,c=u,Object.keys(s).forEach((function(e){C[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})),u}var C={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var T;(T=o.unstable_batchedUpdates)||(T=a),(0,r.jQ)({reactionScheduler:T})},8949:function(e,t,n){n.d(t,{Fl:function(){return Pe},Gf:function(){return Ht},LO:function(){return Te},aD:function(){return kt},jQ:function(){return Ut},le:function(){return _t},rC:function(){return hn},z:function(){return Rt}});var r=n(5108);function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("number"==typeof e?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var o={};function a(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:o}var s=Object.assign,c=Object.getOwnPropertyDescriptor,u=Object.defineProperty,l=Object.prototype,h=[];Object.freeze(h);var f={};Object.freeze(f);var d="undefined"!=typeof Proxy,p=Object.toString();function v(){d||i("Proxy not available")}function g(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var _=function(){};function b(e){return"function"==typeof e}function y(e){switch(typeof e){case"string":case"symbol":case"number":return!0}return!1}function m(e){return null!==e&&"object"==typeof e}function w(e){if(!m(e))return!1;var t=Object.getPrototypeOf(e);if(null==t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n.toString()===p}function S(e){var t=null==e?void 0:e.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName)}function O(e,t,n){u(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function A(e,t,n){u(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function E(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return m(e)&&!0===e[n]}}function C(e){return e instanceof Map}function T(e){return e instanceof Set}var I=void 0!==Object.getOwnPropertySymbols;var D="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:I?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function k(e){return null===e?null:"object"==typeof e?""+e:e}function P(e,t){return l.hasOwnProperty.call(e,t)}var R=Object.getOwnPropertyDescriptors||function(e){var t={};return D(e).forEach((function(n){t[n]=c(e,n)})),t};function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function M(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,L(e,t)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var U=Symbol("mobx-stored-annotations");function $(e){return Object.assign((function(t,n){H(t,n,e)}),e)}function H(e,t,n){P(e,U)||O(e,U,N({},e[U])),function(e){return e.annotationType_===J}(n)||(e[U][t]=n)}var K=Symbol("mobx administration"),z=function(){function e(e){void 0===e&&(e="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Ke.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=e}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.reportObserved=function(){return vt(this)},t.reportChanged=function(){dt(),gt(this),pt()},t.toString=function(){return this.name_},e}(),q=E("Atom",z);function G(e,t,n){void 0===t&&(t=_),void 0===n&&(n=_);var r,i=new z(e);return t!==_&&Vt(Lt,i,t,r),n!==_&&Bt(i,n),i}var W={identity:function(e,t){return e===t},structural:function(e,t){return or(e,t)},default:function(e,t){return Object.is?Object.is(e,t):e===t?0!==e||1/e==1/t:e!=e&&t!=t},shallow:function(e,t){return or(e,t,1)}};function X(e,t,n){return Qt(e)?e:Array.isArray(e)?Te.array(e,{name:n}):w(e)?Te.object(e,void 0,{name:n}):C(e)?Te.map(e,{name:n}):T(e)?Te.set(e,{name:n}):"function"!=typeof e||xt(e)||Jt(e)?e:S(e)?Xt(e):Pt(n,e)}function Y(e){return e}var J="override";function Z(e,t){return{annotationType_:e,options_:t,make_:Q,extend_:ee}}function Q(e,t,n,r){var i;if(null!=(i=this.options_)&&i.bound)return null===this.extend_(e,t,n,!1)?0:1;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(xt(n.value))return 1;var o=te(e,this,t,n,!1);return u(r,t,o),2}function ee(e,t,n,r){var i=te(e,this,t,n);return e.defineProperty_(t,i,r)}function te(e,t,n,r,i){var o,a,s,c,u,l,h,f;void 0===i&&(i=ut.safeDescriptors),f=r,t.annotationType_,f.value;var d,p=r.value;null!=(o=t.options_)&&o.bound&&(p=p.bind(null!=(d=e.proxy_)?d:e.target_));return{value:Le(null!=(a=null==(s=t.options_)?void 0:s.name)?a:n.toString(),p,null!=(c=null==(u=t.options_)?void 0:u.autoAction)&&c,null!=(l=t.options_)&&l.bound?null!=(h=e.proxy_)?h:e.target_:void 0),configurable:!i||e.isPlainObject_,enumerable:!1,writable:!i}}function ne(e,t){return{annotationType_:e,options_:t,make_:re,extend_:ie}}function re(e,t,n,r){var i;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(null!=(i=this.options_)&&i.bound&&(!P(e.target_,t)||!Jt(e.target_[t]))&&null===this.extend_(e,t,n,!1))return 0;if(Jt(n.value))return 1;var o=oe(e,this,t,n,!1,!1);return u(r,t,o),2}function ie(e,t,n,r){var i,o=oe(e,this,t,n,null==(i=this.options_)?void 0:i.bound);return e.defineProperty_(t,o,r)}function oe(e,t,n,r,i,o){var a;void 0===o&&(o=ut.safeDescriptors),a=r,t.annotationType_,a.value;var s,c=r.value;(Jt(c)||(c=Xt(c)),i)&&((c=c.bind(null!=(s=e.proxy_)?s:e.target_)).isMobXFlow=!0);return{value:c,configurable:!o||e.isPlainObject_,enumerable:!1,writable:!o}}function ae(e,t){return{annotationType_:e,options_:t,make_:se,extend_:ce}}function se(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function ce(e,t,n,r){return function(e,t,n,r){t.annotationType_,r.get;0}(0,this,0,n),e.defineComputedProperty_(t,N({},this.options_,{get:n.get,set:n.set}),r)}function ue(e,t){return{annotationType_:e,options_:t,make_:le,extend_:he}}function le(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function he(e,t,n,r){var i,o;return function(e,t,n,r){t.annotationType_;0}(0,this),e.defineObservableProperty_(t,n.value,null!=(i=null==(o=this.options_)?void 0:o.enhancer)?i:X,r)}var fe=de();function de(e){return{annotationType_:"true",options_:e,make_:pe,extend_:ve}}function pe(e,t,n,r){var i,o,a,s;if(n.get)return Pe.make_(e,t,n,r);if(n.set){var c=Le(t.toString(),n.set);return r===e.target_?null===e.defineProperty_(t,{configurable:!ut.safeDescriptors||e.isPlainObject_,set:c})?0:2:(u(r,t,{configurable:!0,set:c}),2)}if(r!==e.target_&&"function"==typeof n.value)return S(n.value)?(null!=(s=this.options_)&&s.autoBind?Xt.bound:Xt).make_(e,t,n,r):(null!=(a=this.options_)&&a.autoBind?Pt.bound:Pt).make_(e,t,n,r);var l,h=!1===(null==(i=this.options_)?void 0:i.deep)?Te.ref:Te;"function"==typeof n.value&&null!=(o=this.options_)&&o.autoBind&&(n.value=n.value.bind(null!=(l=e.proxy_)?l:e.target_));return h.make_(e,t,n,r)}function ve(e,t,n,r){var i,o,a;if(n.get)return Pe.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:!ut.safeDescriptors||e.isPlainObject_,set:Le(t.toString(),n.set)},r);"function"==typeof n.value&&null!=(i=this.options_)&&i.autoBind&&(n.value=n.value.bind(null!=(a=e.proxy_)?a:e.target_));return(!1===(null==(o=this.options_)?void 0:o.deep)?Te.ref:Te).extend_(e,t,n,r)}var ge={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};function _e(e){return e||ge}Object.freeze(ge);var be=ue("observable"),ye=ue("observable.ref",{enhancer:Y}),me=ue("observable.shallow",{enhancer:function(e,t,n){return null==e||$n(e)||En(e)||Rn(e)||Nn(e)?e:Array.isArray(e)?Te.array(e,{name:n,deep:!1}):w(e)?Te.object(e,void 0,{name:n,deep:!1}):C(e)?Te.map(e,{name:n,deep:!1}):T(e)?Te.set(e,{name:n,deep:!1}):void 0}}),we=ue("observable.struct",{enhancer:function(e,t){return or(e,t)?t:e}}),Se=$(be);function Oe(e){return!0===e.deep?X:!1===e.deep?Y:(t=e.defaultDecorator)&&null!=(n=null==(r=t.options_)?void 0:r.enhancer)?n:X;var t,n,r}function Ae(e,t,n){if(!y(t))return Qt(e)?e:w(e)?Te.object(e,t,n):Array.isArray(e)?Te.array(e,t):C(e)?Te.map(e,t):T(e)?Te.set(e,t):"object"==typeof e&&null!==e?e:Te.box(e,t);H(e,t,be)}Object.assign(Ae,Se);var Ee,Ce,Te=s(Ae,{box:function(e,t){var n=_e(t);return new He(e,Oe(n),n.name,!0,n.equals)},array:function(e,t){var n=_e(t);return(!1===ut.useProxies||!1===n.proxy?er:gn)(e,Oe(n),n.name)},map:function(e,t){var n=_e(t);return new Pn(e,Oe(n),n.name)},set:function(e,t){var n=_e(t);return new jn(e,Oe(n),n.name)},object:function(e,t,n){return $t(!1===ut.useProxies||!1===(null==n?void 0:n.proxy)?Vn({},n):function(e,t){var n,r;return v(),e=Vn(e,t),null!=(r=(n=e[K]).proxy_)?r:n.proxy_=new Proxy(e,rn)}({},n),e,t)},ref:$(ye),shallow:$(me),deep:Se,struct:$(we)}),Ie="computed",De=ae(Ie),ke=ae("computed.struct",{equals:W.structural}),Pe=function(e,t){if(y(t))return H(e,t,De);if(w(e))return $(ae(Ie,e));var n=w(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new qe(n)};Object.assign(Pe,De),Pe.struct=$(ke);var Re,xe=0,je=1,Ne=null!=(Ee=null==(Ce=c((function(){}),"name"))?void 0:Ce.configurable)&&Ee,Me={value:"action",configurable:!0,writable:!1,enumerable:!1};function Le(e,t,n,r){function i(){return Be(e,n,t,r||this,arguments)}return void 0===n&&(n=!1),i.isMobxAction=!0,Ne&&(Me.value=e,Object.defineProperty(i,"name",Me)),i}function Be(e,t,n,r,o){var a=function(e,t,n,r){var i=!1,o=0;0;var a=ut.trackingDerivation,s=!t||!a;dt();var c=ut.allowStateChanges;s&&(tt(),c=Fe(!0));var u=rt(!0),l={runAsAction_:s,prevDerivation_:a,prevAllowStateChanges_:c,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:je++,parentActionId_:xe};return xe=l.actionId_,l}(0,t);try{return n.apply(r,o)}catch(e){throw a.error_=e,e}finally{!function(e){xe!==e.actionId_&&i(30);xe=e.parentActionId_,void 0!==e.error_&&(ut.suppressReactionErrors=!0);Ue(e.prevAllowStateChanges_),it(e.prevAllowStateReads_),pt(),e.runAsAction_&&nt(e.prevDerivation_);0;ut.suppressReactionErrors=!1}(a)}}function Ve(e,t){var n=Fe(e);try{return t()}finally{Ue(n)}}function Fe(e){var t=ut.allowStateChanges;return ut.allowStateChanges=e,t}function Ue(e){ut.allowStateChanges=e}Re=Symbol.toPrimitive;var $e,He=function(e){function t(t,n,r,i,o){var a;return void 0===r&&(r="ObservableValue"),void 0===i&&(i=!0),void 0===o&&(o=W.default),(a=e.call(this,r)||this).enhancer=void 0,a.name_=void 0,a.equals=void 0,a.hasUnreportedChange_=!1,a.interceptors_=void 0,a.changeListeners_=void 0,a.value_=void 0,a.dehancer=void 0,a.enhancer=n,a.name_=r,a.equals=o,a.value_=n(t,void 0,r),a}M(t,e);var n=t.prototype;return n.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},n.set=function(e){this.value_;if((e=this.prepareNewValue_(e))!==ut.UNCHANGED){0,this.setNewValue_(e)}},n.prepareNewValue_=function(e){if(Je(this),on(this)){var t=sn(this,{object:this,type:dn,newValue:e});if(!t)return ut.UNCHANGED;e=t.newValue}return e=this.enhancer(e,this.value_,this.name_),this.equals(this.value_,e)?ut.UNCHANGED:e},n.setNewValue_=function(e){var t=this.value_;this.value_=e,this.reportChanged(),cn(this)&&ln(this,{type:dn,object:this,newValue:e,oldValue:t})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(e){return an(this,e)},n.observe_=function(e,t){return t&&e({observableKind:"value",debugObjectName:this.name_,object:this,type:dn,newValue:this.value_,oldValue:void 0}),un(this,e)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return k(this.get())},n[Re]=function(){return this.valueOf()},t}(z);$e=Symbol.toPrimitive;var Ke,ze,qe=function(){function e(e){this.dependenciesState_=Ke.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Ke.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new We(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=ze.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,e.get||i(31),this.derivation=e.get,this.name_=e.name||"ComputedValue",e.set&&(this.setter_=Le("ComputedValue-setter",e.set)),this.equals_=e.equals||(e.compareStructural||e.struct?W.structural:W.default),this.scope_=e.context,this.requiresReaction_=e.requiresReaction,this.keepAlive_=!!e.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){!function(e){if(e.lowestObserverState_!==Ke.UP_TO_DATE_)return;e.lowestObserverState_=Ke.POSSIBLY_STALE_,e.observers_.forEach((function(e){e.dependenciesState_===Ke.UP_TO_DATE_&&(e.dependenciesState_=Ke.POSSIBLY_STALE_,e.onBecomeStale_())}))}(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.get=function(){if(this.isComputing_&&i(32,this.name_,this.derivation),0!==ut.inBatch||0!==this.observers_.size||this.keepAlive_){if(vt(this),Ye(this)){var e=ut.trackingContext;this.keepAlive_&&!e&&(ut.trackingContext=this),this.trackAndCompute()&&function(e){if(e.lowestObserverState_===Ke.STALE_)return;e.lowestObserverState_=Ke.STALE_,e.observers_.forEach((function(t){t.dependenciesState_===Ke.POSSIBLY_STALE_?t.dependenciesState_=Ke.STALE_:t.dependenciesState_===Ke.UP_TO_DATE_&&(e.lowestObserverState_=Ke.UP_TO_DATE_)}))}(this),ut.trackingContext=e}}else Ye(this)&&(this.warnAboutUntrackedRead_(),dt(),this.value_=this.computeValue_(!1),pt());var t=this.value_;if(Xe(t))throw t.cause;return t},t.set=function(e){if(this.setter_){this.isRunningSetter_&&i(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,e)}finally{this.isRunningSetter_=!1}}else i(34,this.name_)},t.trackAndCompute=function(){var e=this.value_,t=this.dependenciesState_===Ke.NOT_TRACKING_,n=this.computeValue_(!0),r=t||Xe(e)||Xe(n)||!this.equals_(e,n);return r&&(this.value_=n),r},t.computeValue_=function(e){this.isComputing_=!0;var t,n=Fe(!1);if(e)t=Ze(this,this.derivation,this.scope_);else if(!0===ut.disableErrorBoundaries)t=this.derivation.call(this.scope_);else try{t=this.derivation.call(this.scope_)}catch(e){t=new We(e)}return Ue(n),this.isComputing_=!1,t},t.suspend_=function(){this.keepAlive_||(Qe(this),this.value_=void 0)},t.observe_=function(e,t){var n=this,r=!0,i=void 0;return jt((function(){var o=n.get();if(!r||t){var a=tt();e({observableKind:"computed",debugObjectName:n.name_,type:dn,object:n,newValue:o,oldValue:i}),nt(a)}r=!1,i=o}))},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return k(this.get())},t[$e]=function(){return this.valueOf()},e}(),Ge=E("ComputedValue",qe);!function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"}(Ke||(Ke={})),function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"}(ze||(ze={}));var We=function(e){this.cause=void 0,this.cause=e};function Xe(e){return e instanceof We}function Ye(e){switch(e.dependenciesState_){case Ke.UP_TO_DATE_:return!1;case Ke.NOT_TRACKING_:case Ke.STALE_:return!0;case Ke.POSSIBLY_STALE_:for(var t=rt(!0),n=tt(),r=e.observing_,i=r.length,o=0;o<i;o++){var a=r[o];if(Ge(a)){if(ut.disableErrorBoundaries)a.get();else try{a.get()}catch(e){return nt(n),it(t),!0}if(e.dependenciesState_===Ke.STALE_)return nt(n),it(t),!0}}return ot(e),nt(n),it(t),!1}}function Je(e){}function Ze(e,t,n){var r=rt(!0);ot(e),e.newObserving_=new Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++ut.runId;var i,o=ut.trackingDerivation;if(ut.trackingDerivation=e,ut.inBatch++,!0===ut.disableErrorBoundaries)i=t.call(n);else try{i=t.call(n)}catch(e){i=new We(e)}return ut.inBatch--,ut.trackingDerivation=o,function(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=Ke.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,a=0;a<o;a++){var s=n[a];0===s.diffValue_&&(s.diffValue_=1,i!==a&&(n[i]=s),i++),s.dependenciesState_>r&&(r=s.dependenciesState_)}n.length=i,e.newObserving_=null,o=t.length;for(;o--;){var c=t[o];0===c.diffValue_&&ht(c,e),c.diffValue_=0}for(;i--;){var u=n[i];1===u.diffValue_&&(u.diffValue_=0,lt(u,e))}r!==Ke.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}(e),it(r),i}function Qe(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)ht(t[n],e);e.dependenciesState_=Ke.NOT_TRACKING_}function et(e){var t=tt();try{return e()}finally{nt(t)}}function tt(){var e=ut.trackingDerivation;return ut.trackingDerivation=null,e}function nt(e){ut.trackingDerivation=e}function rt(e){var t=ut.allowStateReads;return ut.allowStateReads=e,t}function it(e){ut.allowStateReads=e}function ot(e){if(e.dependenciesState_!==Ke.UP_TO_DATE_){e.dependenciesState_=Ke.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=Ke.UP_TO_DATE_}}var at=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},st=!0,ct=!1,ut=function(){var e=a();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(st=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==(new at).version&&(st=!1),st?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new at):(setTimeout((function(){ct||i(35)}),1),new at)}();function lt(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function ht(e,t){e.observers_.delete(t),0===e.observers_.size&&ft(e)}function ft(e){!1===e.isPendingUnobservation_&&(e.isPendingUnobservation_=!0,ut.pendingUnobservations.push(e))}function dt(){ut.inBatch++}function pt(){if(0==--ut.inBatch){yt();for(var e=ut.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,0===n.observers_.size&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof qe&&n.suspend_())}ut.pendingUnobservations=[]}}function vt(e){var t=ut.trackingDerivation;return null!==t?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&ut.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),!0):(0===e.observers_.size&&ut.inBatch>0&&ft(e),!1)}function gt(e){e.lowestObserverState_!==Ke.STALE_&&(e.lowestObserverState_=Ke.STALE_,e.observers_.forEach((function(e){e.dependenciesState_===Ke.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=Ke.STALE_})))}var _t=function(){function e(e,t,n,r){void 0===e&&(e="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Ke.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=ze.NONE,this.name_=e,this.onInvalidate_=t,this.errorHandler_=n,this.requiresObservable_=r}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,ut.pendingReactions.push(this),yt())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){dt(),this.isScheduled_=!1;var e=ut.trackingContext;if(ut.trackingContext=this,Ye(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(e){this.reportExceptionInDerivation_(e)}}ut.trackingContext=e,pt()}},t.track=function(e){if(!this.isDisposed_){dt();0,this.isRunning_=!0;var t=ut.trackingContext;ut.trackingContext=this;var n=Ze(this,e,void 0);ut.trackingContext=t,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&Qe(this),Xe(n)&&this.reportExceptionInDerivation_(n.cause),pt()}},t.reportExceptionInDerivation_=function(e){var t=this;if(this.errorHandler_)this.errorHandler_(e,this);else{if(ut.disableErrorBoundaries)throw e;var n="[mobx] uncaught error in '"+this+"'";ut.suppressReactionErrors||r.error(n,e),ut.globalReactionErrorHandlers.forEach((function(n){return n(e,t)}))}},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(dt(),Qe(this),pt()))},t.getDisposer_=function(){var e=this.dispose.bind(this);return e[K]=this,e},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(e){void 0===e&&(e=!1),function(){i("trace() is not available in production builds");for(var e=!1,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];"boolean"==typeof n[n.length-1]&&(e=n.pop());var a=en(n);if(!a)return i("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");a.isTracing_===ze.NONE&&r.log("[mobx.trace] '"+a.name_+"' tracing enabled");a.isTracing_=e?ze.BREAK:ze.LOG}(this,e)},e}();var bt=function(e){return e()};function yt(){ut.inBatch>0||ut.isRunningReactions||bt(mt)}function mt(){ut.isRunningReactions=!0;for(var e=ut.pendingReactions,t=0;e.length>0;){100==++t&&(r.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),i=0,o=n.length;i<o;i++)n[i].runReaction_()}ut.isRunningReactions=!1}var wt=E("Reaction",_t);var St="action",Ot="autoAction",At="<unnamed action>",Et=Z(St),Ct=Z("action.bound",{bound:!0}),Tt=Z(Ot,{autoAction:!0}),It=Z("autoAction.bound",{autoAction:!0,bound:!0});function Dt(e){return function(t,n){return b(t)?Le(t.name||At,t,e):b(n)?Le(t,n,e):y(n)?H(t,n,e?Tt:Et):y(t)?$(Z(e?Ot:St,{name:t,autoAction:e})):void 0}}var kt=Dt(!1);Object.assign(kt,Et);var Pt=Dt(!0);function Rt(e){return Be(e.name,!1,e,this,void 0)}function xt(e){return b(e)&&!0===e.isMobxAction}function jt(e,t){var n,r;void 0===t&&(t=f);var i,o=null!=(n=null==(r=t)?void 0:r.name)?n:"Autorun";if(!t.scheduler&&!t.delay)i=new _t(o,(function(){this.track(c)}),t.onError,t.requiresObservable);else{var a=Mt(t),s=!1;i=new _t(o,(function(){s||(s=!0,a((function(){s=!1,i.isDisposed_||i.track(c)})))}),t.onError,t.requiresObservable)}function c(){e(i)}return i.schedule_(),i.getDisposer_()}Object.assign(Pt,Tt),kt.bound=$(Ct),Pt.bound=$(It);var Nt=function(e){return e()};function Mt(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:Nt}var Lt="onBO";function Bt(e,t,n){return Vt("onBUO",e,t,n)}function Vt(e,t,n,r){var i="function"==typeof r?tr(t,n):tr(t),o=b(r)?r:n,a=e+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var e=i[a];e&&(e.delete(o),0===e.size&&delete i[a])}}var Ft="always";function Ut(e){!0===e.isolateGlobalState&&function(){if((ut.pendingReactions.length||ut.inBatch||ut.isRunningReactions)&&i(36),ct=!0,st){var e=a();0==--e.__mobxInstanceCount&&(e.__mobxGlobals=void 0),ut=new at}}();var t,n,r=e.useProxies,o=e.enforceActions;if(void 0!==r&&(ut.useProxies=r===Ft||"never"!==r&&"undefined"!=typeof Proxy),"ifavailable"===r&&(ut.verifyProxies=!0),void 0!==o){var s=o===Ft?Ft:"observed"===o;ut.enforceActions=s,ut.allowStateChanges=!0!==s&&s!==Ft}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach((function(t){t in e&&(ut[t]=!!e[t])})),ut.allowStateReads=!ut.observableRequiresReaction,e.reactionScheduler&&(t=e.reactionScheduler,n=bt,bt=function(e){return t((function(){return n(e)}))})}function $t(e,t,n,r){var i=R(t),o=Vn(e,r)[K];dt();try{D(i).forEach((function(e){o.extend_(e,i[e],!n||(!(e in n)||n[e]))}))}finally{pt()}return e}function Ht(e,t){return Kt(tr(e,t))}function Kt(e){var t,n={name:e.name_};return e.observing_&&e.observing_.length>0&&(n.dependencies=(t=e.observing_,Array.from(new Set(t))).map(Kt)),n}var zt=0;function qt(){this.message="FLOW_CANCELLED"}qt.prototype=Object.create(Error.prototype);var Gt=ne("flow"),Wt=ne("flow.bound",{bound:!0}),Xt=Object.assign((function(e,t){if(y(t))return H(e,t,Gt);var n=e,r=n.name||"<unnamed flow>",i=function(){var e,t=this,i=arguments,o=++zt,a=kt(r+" - runid: "+o+" - init",n).apply(t,i),s=void 0,c=new Promise((function(t,n){var i=0;function c(e){var t;s=void 0;try{t=kt(r+" - runid: "+o+" - yield "+i++,a.next).call(a,e)}catch(e){return n(e)}l(t)}function u(e){var t;s=void 0;try{t=kt(r+" - runid: "+o+" - yield "+i++,a.throw).call(a,e)}catch(e){return n(e)}l(t)}function l(e){if(!b(null==e?void 0:e.then))return e.done?t(e.value):(s=Promise.resolve(e.value)).then(c,u);e.then(l,n)}e=n,c(void 0)}));return c.cancel=kt(r+" - runid: "+o+" - cancel",(function(){try{s&&Yt(s);var t=a.return(void 0),n=Promise.resolve(t.value);n.then(_,_),Yt(n),e(new qt)}catch(t){e(t)}})),c};return i.isMobXFlow=!0,i}),Gt);function Yt(e){b(e.cancel)&&e.cancel()}function Jt(e){return!0===(null==e?void 0:e.isMobXFlow)}function Zt(e,t){return!!e&&(void 0!==t?!!$n(e)&&e[K].values_.has(t):$n(e)||!!e[K]||q(e)||wt(e)||Ge(e))}function Qt(e){return Zt(e)}function en(e){switch(e.length){case 0:return ut.trackingDerivation;case 1:return tr(e[0]);case 2:return tr(e[0],e[1])}}function tn(e,t){void 0===t&&(t=void 0),dt();try{return e.apply(t)}finally{pt()}}function nn(e){return e[K]}Xt.bound=$(Wt);var rn={has:function(e,t){return nn(e).has_(t)},get:function(e,t){return nn(e).get_(t)},set:function(e,t,n){var r;return!!y(t)&&(null==(r=nn(e).set_(t,n,!0))||r)},deleteProperty:function(e,t){var n;return!!y(t)&&(null==(n=nn(e).delete_(t,!0))||n)},defineProperty:function(e,t,n){var r;return null==(r=nn(e).defineProperty_(t,n))||r},ownKeys:function(e){return nn(e).ownKeys_()},preventExtensions:function(e){i(13)}};function on(e){return void 0!==e.interceptors_&&e.interceptors_.length>0}function an(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),g((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function sn(e,t){var n=tt();try{for(var r=[].concat(e.interceptors_||[]),o=0,a=r.length;o<a&&((t=r[o](t))&&!t.type&&i(14),t);o++);return t}finally{nt(n)}}function cn(e){return void 0!==e.changeListeners_&&e.changeListeners_.length>0}function un(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),g((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function ln(e,t){var n=tt(),r=e.changeListeners_;if(r){for(var i=0,o=(r=r.slice()).length;i<o;i++)r[i](t);nt(n)}}function hn(e,t,n){var r=Vn(e,n)[K];dt();try{0,null!=t||(t=function(e){return P(e,U)||O(e,U,N({},e[U])),e[U]}(e)),D(t).forEach((function(e){return r.make_(e,t[e])}))}finally{pt()}return e}var fn="splice",dn="update",pn={get:function(e,t){var n=e[K];return t===K?n:"length"===t?n.getArrayLength_():"string"!=typeof t||isNaN(t)?P(_n,t)?_n[t]:e[t]:n.get_(parseInt(t))},set:function(e,t,n){var r=e[K];return"length"===t&&r.setArrayLength_(n),"symbol"==typeof t||isNaN(t)?e[t]=n:r.set_(parseInt(t),n),!0},preventExtensions:function(){i(15)}},vn=function(){function e(e,t,n,r){void 0===e&&(e="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=n,this.legacyMode_=r,this.atom_=new z(e),this.enhancer_=function(e,n){return t(e,n,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.dehanceValues_=function(e){return void 0!==this.dehancer&&e.length>0?e.map(this.dehancer):e},t.intercept_=function(e){return an(this,e)},t.observe_=function(e,t){return void 0===t&&(t=!1),t&&e({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),un(this,e)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(e){("number"!=typeof e||isNaN(e)||e<0)&&i("Out of range: "+e);var t=this.values_.length;if(e!==t)if(e>t){for(var n=new Array(e-t),r=0;r<e-t;r++)n[r]=void 0;this.spliceWithArray_(t,0,n)}else this.spliceWithArray_(e,t-e)},t.updateArrayLength_=function(e,t){e!==this.lastKnownLength_&&i(16),this.lastKnownLength_+=t,this.legacyMode_&&t>0&&Qn(e+t+1)},t.spliceWithArray_=function(e,t,n){var r=this;this.atom_;var i=this.values_.length;if(void 0===e?e=0:e>i?e=i:e<0&&(e=Math.max(0,i+e)),t=1===arguments.length?i-e:null==t?0:Math.max(0,Math.min(t,i-e)),void 0===n&&(n=h),on(this)){var o=sn(this,{object:this.proxy_,type:fn,index:e,removedCount:t,added:n});if(!o)return h;t=o.removedCount,n=o.added}if(n=0===n.length?n:n.map((function(e){return r.enhancer_(e,void 0)})),this.legacyMode_){var a=n.length-t;this.updateArrayLength_(i,a)}var s=this.spliceItemsIntoValues_(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice_(e,n,s),this.dehanceValues_(s)},t.spliceItemsIntoValues_=function(e,t,n){var r;if(n.length<1e4)return(r=this.values_).splice.apply(r,[e,t].concat(n));var i=this.values_.slice(e,e+t),o=this.values_.slice(e+t);this.values_.length+=n.length-t;for(var a=0;a<n.length;a++)this.values_[e+a]=n[a];for(var s=0;s<o.length;s++)this.values_[e+n.length+s]=o[s];return i},t.notifyArrayChildUpdate_=function(e,t,n){var r=!this.owned_&&!1,i=cn(this),o=i||r?{observableKind:"array",object:this.proxy_,type:dn,debugObjectName:this.atom_.name_,index:e,newValue:t,oldValue:n}:null;this.atom_.reportChanged(),i&&ln(this,o)},t.notifyArraySplice_=function(e,t,n){var r=!this.owned_&&!1,i=cn(this),o=i||r?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:fn,index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;this.atom_.reportChanged(),i&&ln(this,o)},t.get_=function(e){if(e<this.values_.length)return this.atom_.reportObserved(),this.dehanceValue_(this.values_[e]);r.warn("[mobx.array] Attempt to read an array index ("+e+") that is out of bounds ("+this.values_.length+"). Please check length first. Out of bound indices will not be tracked by MobX")},t.set_=function(e,t){var n=this.values_;if(e<n.length){this.atom_;var r=n[e];if(on(this)){var o=sn(this,{type:dn,object:this.proxy_,index:e,newValue:t});if(!o)return;t=o.newValue}(t=this.enhancer_(t,r))!==r&&(n[e]=t,this.notifyArrayChildUpdate_(e,t,r))}else e===n.length?this.spliceWithArray_(e,0,[t]):i(17,e,n.length)},e}();function gn(e,t,n,r){void 0===n&&(n="ObservableArray"),void 0===r&&(r=!1),v();var i=new vn(n,t,r,!1);A(i.values_,K,i);var o=new Proxy(i.values_,pn);if(i.proxy_=o,e&&e.length){var a=Fe(!0);i.spliceWithArray_(0,0,e),Ue(a)}return o}var _n={clear:function(){return this.splice(0)},replace:function(e){var t=this[K];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=this[K];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,t)}return o.spliceWithArray_(e,t,r)},spliceWithArray:function(e,t,n){return this[K].spliceWithArray_(e,t,n)},push:function(){for(var e=this[K],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[K].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[K],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return ut.trackingDerivation&&i(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){ut.trackingDerivation&&i(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[K],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1&&(this.splice(n,1),!0)}};function bn(e,t){"function"==typeof Array.prototype[e]&&(_n[e]=t(e))}function yn(e){return function(){var t=this[K];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function mn(e){return function(t,n){var r=this,i=this[K];return i.atom_.reportObserved(),i.dehanceValues_(i.values_)[e]((function(e,i){return t.call(n,e,i,r)}))}}function wn(e){return function(){var t=this,n=this[K];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(e,n,r){return i(e,n,r,t)},r[e].apply(r,arguments)}}bn("concat",yn),bn("flat",yn),bn("includes",yn),bn("indexOf",yn),bn("join",yn),bn("lastIndexOf",yn),bn("slice",yn),bn("toString",yn),bn("toLocaleString",yn),bn("every",mn),bn("filter",mn),bn("find",mn),bn("findIndex",mn),bn("flatMap",mn),bn("forEach",mn),bn("map",mn),bn("some",mn),bn("reduce",wn),bn("reduceRight",wn);var Sn,On,An=E("ObservableArrayAdministration",vn);function En(e){return m(e)&&An(e[K])}var Cn={},Tn="add",In="delete";Sn=Symbol.iterator,On=Symbol.toStringTag;var Dn,kn,Pn=function(){function e(e,t,n){var r=this;void 0===t&&(t=X),void 0===n&&(n="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[K]=Cn,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=t,this.name_=n,b(Map)||i(18),this.keysAtom_=G("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,Ve(!0,(function(){r.merge(e)}))}var t=e.prototype;return t.has_=function(e){return this.data_.has(e)},t.has=function(e){var t=this;if(!ut.trackingDerivation)return this.has_(e);var n=this.hasMap_.get(e);if(!n){var r=n=new He(this.has_(e),Y,"ObservableMap.key?",!1);this.hasMap_.set(e,r),Bt(r,(function(){return t.hasMap_.delete(e)}))}return n.get()},t.set=function(e,t){var n=this.has_(e);if(on(this)){var r=sn(this,{type:n?dn:Tn,object:this,newValue:t,name:e});if(!r)return this;t=r.newValue}return n?this.updateValue_(e,t):this.addValue_(e,t),this},t.delete=function(e){var t=this;if((this.keysAtom_,on(this))&&!sn(this,{type:In,object:this,name:e}))return!1;if(this.has_(e)){var n=cn(this),r=n?{observableKind:"map",debugObjectName:this.name_,type:In,object:this,oldValue:this.data_.get(e).value_,name:e}:null;return tn((function(){var n;t.keysAtom_.reportChanged(),null==(n=t.hasMap_.get(e))||n.setNewValue_(!1),t.data_.get(e).setNewValue_(void 0),t.data_.delete(e)})),n&&ln(this,r),!0}return!1},t.updateValue_=function(e,t){var n=this.data_.get(e);if((t=n.prepareNewValue_(t))!==ut.UNCHANGED){var r=cn(this),i=r?{observableKind:"map",debugObjectName:this.name_,type:dn,object:this,oldValue:n.value_,name:e,newValue:t}:null;0,n.setNewValue_(t),r&&ln(this,i)}},t.addValue_=function(e,t){var n=this;this.keysAtom_,tn((function(){var r,i=new He(t,n.enhancer_,"ObservableMap.key",!1);n.data_.set(e,i),t=i.value_,null==(r=n.hasMap_.get(e))||r.setNewValue_(!0),n.keysAtom_.reportChanged()}));var r=cn(this),i=r?{observableKind:"map",debugObjectName:this.name_,type:Tn,object:this,name:e,newValue:t}:null;r&&ln(this,i)},t.get=function(e){return this.has(e)?this.dehanceValue_(this.data_.get(e).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var e=this,t=this.keys();return cr({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:e.get(i)}}})},t.entries=function(){var e=this,t=this.keys();return cr({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:[i,e.get(i)]}}})},t[Sn]=function(){return this.entries()},t.forEach=function(e,t){for(var n,r=F(this);!(n=r()).done;){var i=n.value,o=i[0],a=i[1];e.call(t,a,o,this)}},t.merge=function(e){var t=this;return Rn(e)&&(e=new Map(e)),tn((function(){w(e)?function(e){var t=Object.keys(e);if(!I)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter((function(t){return l.propertyIsEnumerable.call(e,t)}))):t}(e).forEach((function(n){return t.set(n,e[n])})):Array.isArray(e)?e.forEach((function(e){var n=e[0],r=e[1];return t.set(n,r)})):C(e)?(e.constructor!==Map&&i(19,e),e.forEach((function(e,n){return t.set(n,e)}))):null!=e&&i(20,e)})),this},t.clear=function(){var e=this;tn((function(){et((function(){for(var t,n=F(e.keys());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.replace=function(e){var t=this;return tn((function(){for(var n,r=function(e){if(C(e)||Rn(e))return e;if(Array.isArray(e))return new Map(e);if(w(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}return i(21,e)}(e),o=new Map,a=!1,s=F(t.data_.keys());!(n=s()).done;){var c=n.value;if(!r.has(c))if(t.delete(c))a=!0;else{var u=t.data_.get(c);o.set(c,u)}}for(var l,h=F(r.entries());!(l=h()).done;){var f=l.value,d=f[0],p=f[1],v=t.data_.has(d);if(t.set(d,p),t.data_.has(d)){var g=t.data_.get(d);o.set(d,g),v||(a=!0)}}if(!a)if(t.data_.size!==o.size)t.keysAtom_.reportChanged();else for(var _=t.data_.keys(),b=o.keys(),y=_.next(),m=b.next();!y.done;){if(y.value!==m.value){t.keysAtom_.reportChanged();break}y=_.next(),m=b.next()}t.data_=o})),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(e,t){return un(this,e)},t.intercept_=function(e){return an(this,e)},j(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:On,get:function(){return"Map"}}]),e}(),Rn=E("ObservableMap",Pn);var xn={};Dn=Symbol.iterator,kn=Symbol.toStringTag;var jn=function(){function e(e,t,n){void 0===t&&(t=X),void 0===n&&(n="ObservableSet"),this.name_=void 0,this[K]=xn,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=n,b(Set)||i(22),this.atom_=G(this.name_),this.enhancer_=function(e,r){return t(e,r,n)},e&&this.replace(e)}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.clear=function(){var e=this;tn((function(){et((function(){for(var t,n=F(e.data_.values());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.forEach=function(e,t){for(var n,r=F(this);!(n=r()).done;){var i=n.value;e.call(t,i,i,this)}},t.add=function(e){var t=this;if((this.atom_,on(this))&&!sn(this,{type:Tn,object:this,newValue:e}))return this;if(!this.has(e)){tn((function(){t.data_.add(t.enhancer_(e,void 0)),t.atom_.reportChanged()}));var n=!1,r=cn(this),i=r?{observableKind:"set",debugObjectName:this.name_,type:Tn,object:this,newValue:e}:null;n,r&&ln(this,i)}return this},t.delete=function(e){var t=this;if(on(this)&&!sn(this,{type:In,object:this,oldValue:e}))return!1;if(this.has(e)){var n=cn(this),r=n?{observableKind:"set",debugObjectName:this.name_,type:In,object:this,oldValue:e}:null;return tn((function(){t.atom_.reportChanged(),t.data_.delete(e)})),n&&ln(this,r),!0}return!1},t.has=function(e){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(e))},t.entries=function(){var e=0,t=Array.from(this.keys()),n=Array.from(this.values());return cr({next:function(){var r=e;return e+=1,r<n.length?{value:[t[r],n[r]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var e=this,t=0,n=Array.from(this.data_.values());return cr({next:function(){return t<n.length?{value:e.dehanceValue_(n[t++]),done:!1}:{done:!0}}})},t.replace=function(e){var t=this;return Nn(e)&&(e=new Set(e)),tn((function(){Array.isArray(e)||T(e)?(t.clear(),e.forEach((function(e){return t.add(e)}))):null!=e&&i("Cannot initialize set from "+e)})),this},t.observe_=function(e,t){return un(this,e)},t.intercept_=function(e){return an(this,e)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[Dn]=function(){return this.values()},j(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:kn,get:function(){return"Set"}}]),e}(),Nn=E("ObservableSet",jn),Mn=Object.create(null),Ln="remove",Bn=function(){function e(e,t,n,r){void 0===t&&(t=new Map),void 0===r&&(r=fe),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=e,this.values_=t,this.name_=n,this.defaultAnnotation_=r,this.keysAtom_=new z("ObservableObject.keys"),this.isPlainObject_=w(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(e){return this.values_.get(e).get()},t.setObservablePropValue_=function(e,t){var n=this.values_.get(e);if(n instanceof qe)return n.set(t),!0;if(on(this)){var r=sn(this,{type:dn,object:this.proxy_||this.target_,name:e,newValue:t});if(!r)return null;t=r.newValue}if((t=n.prepareNewValue_(t))!==ut.UNCHANGED){var i=cn(this),o=i?{type:dn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:n.value_,name:e,newValue:t}:null;0,n.setNewValue_(t),i&&ln(this,o)}return!0},t.get_=function(e){return ut.trackingDerivation&&!P(this.target_,e)&&this.has_(e),this.target_[e]},t.set_=function(e,t,n){return void 0===n&&(n=!1),P(this.target_,e)?this.values_.has(e)?this.setObservablePropValue_(e,t):n?Reflect.set(this.target_,e,t):(this.target_[e]=t,!0):this.extend_(e,{value:t,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,n)},t.has_=function(e){if(!ut.trackingDerivation)return e in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var t=this.pendingKeys_.get(e);return t||(t=new He(e in this.target_,Y,"ObservableObject.key?",!1),this.pendingKeys_.set(e,t)),t.get()},t.make_=function(e,t){if(!0===t&&(t=this.defaultAnnotation_),!1!==t){if(Kn(this,t,e),!(e in this.target_)){var n;if(null!=(n=this.target_[U])&&n[e])return;i(1,t.annotationType_,this.name_+"."+e.toString())}for(var r=this.target_;r&&r!==l;){var o=c(r,e);if(o){var a=t.make_(this,e,o,r);if(0===a)return;if(1===a)break}r=Object.getPrototypeOf(r)}Hn(this,t,e)}},t.extend_=function(e,t,n,r){if(void 0===r&&(r=!1),!0===n&&(n=this.defaultAnnotation_),!1===n)return this.defineProperty_(e,t,r);Kn(this,n,e);var i=n.extend_(this,e,t,r);return i&&Hn(this,n,e),i},t.defineProperty_=function(e,t,n){void 0===n&&(n=!1);try{dt();var r=this.delete_(e);if(!r)return r;if(on(this)){var i=sn(this,{object:this.proxy_||this.target_,name:e,type:Tn,newValue:t.value});if(!i)return null;var o=i.newValue;t.value!==o&&(t=N({},t,{value:o}))}if(n){if(!Reflect.defineProperty(this.target_,e,t))return!1}else u(this.target_,e,t);this.notifyPropertyAddition_(e,t.value)}finally{pt()}return!0},t.defineObservableProperty_=function(e,t,n,r){void 0===r&&(r=!1);try{dt();var i=this.delete_(e);if(!i)return i;if(on(this)){var o=sn(this,{object:this.proxy_||this.target_,name:e,type:Tn,newValue:t});if(!o)return null;t=o.newValue}var a=Un(e),s={configurable:!ut.safeDescriptors||this.isPlainObject_,enumerable:!0,get:a.get,set:a.set};if(r){if(!Reflect.defineProperty(this.target_,e,s))return!1}else u(this.target_,e,s);var c=new He(t,n,"ObservableObject.key",!1);this.values_.set(e,c),this.notifyPropertyAddition_(e,c.value_)}finally{pt()}return!0},t.defineComputedProperty_=function(e,t,n){void 0===n&&(n=!1);try{dt();var r=this.delete_(e);if(!r)return r;if(on(this))if(!sn(this,{object:this.proxy_||this.target_,name:e,type:Tn,newValue:void 0}))return null;t.name||(t.name="ObservableObject.key"),t.context=this.proxy_||this.target_;var i=Un(e),o={configurable:!ut.safeDescriptors||this.isPlainObject_,enumerable:!1,get:i.get,set:i.set};if(n){if(!Reflect.defineProperty(this.target_,e,o))return!1}else u(this.target_,e,o);this.values_.set(e,new qe(t)),this.notifyPropertyAddition_(e,void 0)}finally{pt()}return!0},t.delete_=function(e,t){if(void 0===t&&(t=!1),!P(this.target_,e))return!0;if(on(this)&&!sn(this,{object:this.proxy_||this.target_,name:e,type:Ln}))return null;try{var n,r;dt();var i,o=cn(this),a=this.values_.get(e),s=void 0;if(!a&&o)s=null==(i=c(this.target_,e))?void 0:i.value;if(t){if(!Reflect.deleteProperty(this.target_,e))return!1}else delete this.target_[e];if(a&&(this.values_.delete(e),a instanceof He&&(s=a.value_),gt(a)),this.keysAtom_.reportChanged(),null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(e in this.target_),o){var u={type:Ln,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:s,name:e};0,o&&ln(this,u)}}finally{pt()}return!0},t.observe_=function(e,t){return un(this,e)},t.intercept_=function(e){return an(this,e)},t.notifyPropertyAddition_=function(e,t){var n,r,i=cn(this);if(i){var o=i?{type:Tn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:e,newValue:t}:null;0,i&&ln(this,o)}null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),D(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function Vn(e,t){var n;if(P(e,K))return e;var r=null!=(n=null==t?void 0:t.name)?n:"ObservableObject",i=new Bn(e,new Map,String(r),function(e){var t;return e?null!=(t=e.defaultDecorator)?t:de(e):void 0}(t));return O(e,K,i),e}var Fn=E("ObservableObjectAdministration",Bn);function Un(e){return Mn[e]||(Mn[e]={get:function(){return this[K].getObservablePropValue_(e)},set:function(t){return this[K].setObservablePropValue_(e,t)}})}function $n(e){return!!m(e)&&Fn(e[K])}function Hn(e,t,n){var r;null==(r=e.target_[U])||delete r[n]}function Kn(e,t,n){}var zn,qn,Gn=Jn(0),Wn=0,Xn=function(){};zn=Xn,qn=Array.prototype,Object.setPrototypeOf?Object.setPrototypeOf(zn.prototype,qn):void 0!==zn.prototype.__proto__?zn.prototype.__proto__=qn:zn.prototype=qn;var Yn=function(e,t,n){function r(t,n,r,i){var o;void 0===r&&(r="ObservableArray"),void 0===i&&(i=!1),o=e.call(this)||this;var a=new vn(r,n,i,!0);if(a.proxy_=B(o),A(B(o),K,a),t&&t.length){var s=Fe(!0);o.spliceWithArray(0,0,t),Ue(s)}return Object.defineProperty(B(o),"0",Gn),o}M(r,e);var i=r.prototype;return i.concat=function(){this[K].atom_.reportObserved();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.prototype.concat.apply(this.slice(),t.map((function(e){return En(e)?e.slice():e})))},i[n]=function(){var e=this,t=0;return cr({next:function(){return t<e.length?{value:e[t++],done:!1}:{done:!0,value:void 0}}})},j(r,[{key:"length",get:function(){return this[K].getArrayLength_()},set:function(e){this[K].setArrayLength_(e)}},{key:t,get:function(){return"Array"}}]),r}(Xn,Symbol.toStringTag,Symbol.iterator);function Jn(e){return{enumerable:!1,configurable:!0,get:function(){return this[K].get_(e)},set:function(t){this[K].set_(e,t)}}}function Zn(e){u(Yn.prototype,""+e,Jn(e))}function Qn(e){if(e>Wn){for(var t=Wn;t<e+100;t++)Zn(t);Wn=e}}function er(e,t,n){return new Yn(e,t,n)}function tr(e,t){if("object"==typeof e&&null!==e){if(En(e))return void 0!==t&&i(23),e[K].atom_;if(Nn(e))return e[K];if(Rn(e)){if(void 0===t)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||i(25,t,rr(e)),n}if($n(e)){if(!t)return i(26);var r=e[K].values_.get(t);return r||i(27,t,rr(e)),r}if(q(e)||Ge(e)||wt(e))return e}else if(b(e)&&wt(e[K]))return e[K];i(28)}function nr(e,t){return e||i(29),void 0!==t?nr(tr(e,t)):q(e)||Ge(e)||wt(e)||Rn(e)||Nn(e)?e:e[K]?e[K]:void i(24,e)}function rr(e,t){var n;if(void 0!==t)n=tr(e,t);else{if(xt(e))return e.name;n=$n(e)||Rn(e)||Nn(e)?nr(e):tr(e)}return n.name_}Object.entries(_n).forEach((function(e){var t=e[0],n=e[1];"concat"!==t&&O(Yn.prototype,t,n)})),Qn(1e3);var ir=l.toString;function or(e,t,n){return void 0===n&&(n=-1),ar(e,t,n)}function ar(e,t,n,r,i){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!=e)return t!=t;var o=typeof e;if("function"!==o&&"object"!==o&&"object"!=typeof t)return!1;var a=ir.call(e);if(a!==ir.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++}e=sr(e),t=sr(t);var s="[object Array]"===a;if(!s){if("object"!=typeof e||"object"!=typeof t)return!1;var c=e.constructor,u=t.constructor;if(c!==u&&!(b(c)&&c instanceof c&&b(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(0===n)return!1;n<0&&(n=-1),i=i||[];for(var l=(r=r||[]).length;l--;)if(r[l]===e)return i[l]===t;if(r.push(e),i.push(t),s){if((l=e.length)!==t.length)return!1;for(;l--;)if(!ar(e[l],t[l],n-1,r,i))return!1}else{var h,f=Object.keys(e);if(l=f.length,Object.keys(t).length!==l)return!1;for(;l--;)if(!P(t,h=f[l])||!ar(e[h],t[h],n-1,r,i))return!1}return r.pop(),i.pop(),!0}function sr(e){return En(e)?e.slice():C(e)||Rn(e)||T(e)||Nn(e)?Array.from(e.entries()):e}function cr(e){return e[Symbol.iterator]=ur,e}function ur(){return this}["Symbol","Map","Set"].forEach((function(e){void 0===a()[e]&&i("MobX requires global '"+e+"' to be available or polyfilled")})),"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:function(e){return r.warn("[mobx.spy] Is a no-op in production builds"),function(){}},extras:{getDebugName:rr},$mobx:K})},4222:function(e,t,n){var r;n.d(t,{nC:function(){return D},ri:function(){return R}}),function(e){e[e.Transient=0]="Transient",e[e.Singleton=1]="Singleton",e[e.ResolutionScoped=2]="ResolutionScoped",e[e.ContainerScoped=3]="ContainerScoped"}(r||(r={}));var i=r,o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o(e,t)};function a(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function s(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}function f(e){return!!e.useClass}function d(e){return!!e.useFactory}var p=function(){function e(e){this.wrap=e,this.reflectMethods=["get","getPrototypeOf","setPrototypeOf","getOwnPropertyDescriptor","defineProperty","has","set","deleteProperty","apply","construct","ownKeys"]}return e.prototype.createProxy=function(e){var t,n=this,r=!1;return new Proxy({},this.createHandler((function(){return r||(t=e(n.wrap()),r=!0),t})))},e.prototype.createHandler=function(e){var t={};return this.reflectMethods.forEach((function(n){t[n]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];t[0]=e();var i=Reflect[n];return i.apply(void 0,h(t))}})),t},e}();function v(e){return"string"==typeof e||"symbol"==typeof e}function g(e){return"object"==typeof e&&"token"in e&&"transform"in e}function _(e){return!!e.useToken}function b(e){return null!=e.useValue}var y=function(){function e(){this._registryMap=new Map}return e.prototype.entries=function(){return this._registryMap.entries()},e.prototype.getAll=function(e){return this.ensure(e),this._registryMap.get(e)},e.prototype.get=function(e){this.ensure(e);var t=this._registryMap.get(e);return t[t.length-1]||null},e.prototype.set=function(e,t){this.ensure(e),this._registryMap.get(e).push(t)},e.prototype.setAll=function(e,t){this._registryMap.set(e,t)},e.prototype.has=function(e){return this.ensure(e),this._registryMap.get(e).length>0},e.prototype.clear=function(){this._registryMap.clear()},e.prototype.ensure=function(e){this._registryMap.has(e)||this._registryMap.set(e,[])},e}(),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(y),w=m,S=function(){this.scopedResolutions=new Map};function O(e,t,n){var r,i,o=l(e.toString().match(/constructor\(([\w, ]+)\)/)||[],2)[1],a=function(e,t){return null===e?"at position #"+t:'"'+e.split(",")[t].trim()+'" at position #'+t}(void 0===o?null:o,t);return r="Cannot inject the dependency "+a+' of "'+e.name+'" constructor. Reason:',void 0===i&&(i="    "),h([r],n.message.split("\n").map((function(e){return i+e}))).join("\n")}var A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(y),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(y),C=function(){this.preResolution=new A,this.postResolution=new E},T=new Map,I=function(){function e(e){this.parent=e,this._registry=new w,this.interceptors=new C,this.disposed=!1,this.disposables=new Set}return e.prototype.register=function(e,t,n){var r;if(void 0===n&&(n={lifecycle:i.Transient}),this.ensureNotDisposed(),r=function(e){return f(e)||b(e)||_(e)||d(e)}(t)?t:{useClass:t},_(r))for(var o=[e],a=r;null!=a;){var s=a.useToken;if(o.includes(s))throw new Error("Token registration cycle detected! "+h(o,[s]).join(" -> "));o.push(s);var c=this._registry.get(s);a=c&&_(c.provider)?c.provider:null}if((n.lifecycle===i.Singleton||n.lifecycle==i.ContainerScoped||n.lifecycle==i.ResolutionScoped)&&(b(r)||d(r)))throw new Error('Cannot use lifecycle "'+i[n.lifecycle]+'" with ValueProviders or FactoryProviders');return this._registry.set(e,{provider:r,options:n}),this},e.prototype.registerType=function(e,t){return this.ensureNotDisposed(),v(t)?this.register(e,{useToken:t}):this.register(e,{useClass:t})},e.prototype.registerInstance=function(e,t){return this.ensureNotDisposed(),this.register(e,{useValue:t})},e.prototype.registerSingleton=function(e,t){if(this.ensureNotDisposed(),v(e)){if(v(t))return this.register(e,{useToken:t},{lifecycle:i.Singleton});if(t)return this.register(e,{useClass:t},{lifecycle:i.Singleton});throw new Error('Cannot register a type name as a singleton without a "to" token')}var n=e;return t&&!v(t)&&(n=t),this.register(e,{useClass:n},{lifecycle:i.Singleton})},e.prototype.resolve=function(e,t){void 0===t&&(t=new S),this.ensureNotDisposed();var n=this.getRegistration(e);if(!n&&v(e))throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"');if(this.executePreResolutionInterceptor(e,"Single"),n){var r=this.resolveRegistration(n,t);return this.executePostResolutionInterceptor(e,r,"Single"),r}if(function(e){return"function"==typeof e||e instanceof p}(e)){r=this.construct(e,t);return this.executePostResolutionInterceptor(e,r,"Single"),r}throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.")},e.prototype.executePreResolutionInterceptor=function(e,t){var n,r;if(this.interceptors.preResolution.has(e)){var i=[];try{for(var o=u(this.interceptors.preResolution.getAll(e)),a=o.next();!a.done;a=o.next()){var s=a.value;"Once"!=s.options.frequency&&i.push(s),s.callback(e,t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}this.interceptors.preResolution.setAll(e,i)}},e.prototype.executePostResolutionInterceptor=function(e,t,n){var r,i;if(this.interceptors.postResolution.has(e)){var o=[];try{for(var a=u(this.interceptors.postResolution.getAll(e)),s=a.next();!s.done;s=a.next()){var c=s.value;"Once"!=c.options.frequency&&o.push(c),c.callback(e,t,n)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}this.interceptors.postResolution.setAll(e,o)}},e.prototype.resolveRegistration=function(e,t){if(this.ensureNotDisposed(),e.options.lifecycle===i.ResolutionScoped&&t.scopedResolutions.has(e))return t.scopedResolutions.get(e);var n,r=e.options.lifecycle===i.Singleton,o=e.options.lifecycle===i.ContainerScoped,a=r||o;return n=b(e.provider)?e.provider.useValue:_(e.provider)?a?e.instance||(e.instance=this.resolve(e.provider.useToken,t)):this.resolve(e.provider.useToken,t):f(e.provider)?a?e.instance||(e.instance=this.construct(e.provider.useClass,t)):this.construct(e.provider.useClass,t):d(e.provider)?e.provider.useFactory(this):this.construct(e.provider,t),e.options.lifecycle===i.ResolutionScoped&&t.scopedResolutions.set(e,n),n},e.prototype.resolveAll=function(e,t){var n=this;void 0===t&&(t=new S),this.ensureNotDisposed();var r=this.getAllRegistrations(e);if(!r&&v(e))throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"');if(this.executePreResolutionInterceptor(e,"All"),r){var i=r.map((function(e){return n.resolveRegistration(e,t)}));return this.executePostResolutionInterceptor(e,i,"All"),i}var o=[this.construct(e,t)];return this.executePostResolutionInterceptor(e,o,"All"),o},e.prototype.isRegistered=function(e,t){return void 0===t&&(t=!1),this.ensureNotDisposed(),this._registry.has(e)||t&&(this.parent||!1)&&this.parent.isRegistered(e,!0)},e.prototype.reset=function(){this.ensureNotDisposed(),this._registry.clear(),this.interceptors.preResolution.clear(),this.interceptors.postResolution.clear()},e.prototype.clearInstances=function(){var e,t;this.ensureNotDisposed();try{for(var n=u(this._registry.entries()),r=n.next();!r.done;r=n.next()){var i=l(r.value,2),o=i[0],a=i[1];this._registry.setAll(o,a.filter((function(e){return!b(e.provider)})).map((function(e){return e.instance=void 0,e})))}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.createChildContainer=function(){var t,n;this.ensureNotDisposed();var r=new e(this);try{for(var o=u(this._registry.entries()),a=o.next();!a.done;a=o.next()){var s=l(a.value,2),c=s[0],h=s[1];h.some((function(e){return e.options.lifecycle===i.ContainerScoped}))&&r._registry.setAll(c,h.map((function(e){return e.options.lifecycle===i.ContainerScoped?{provider:e.provider,options:e.options}:e})))}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return r},e.prototype.beforeResolution=function(e,t,n){void 0===n&&(n={frequency:"Always"}),this.interceptors.preResolution.set(e,{callback:t,options:n})},e.prototype.afterResolution=function(e,t,n){void 0===n&&(n={frequency:"Always"}),this.interceptors.postResolution.set(e,{callback:t,options:n})},e.prototype.dispose=function(){return s(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return this.disposed=!0,e=[],this.disposables.forEach((function(t){var n=t.dispose();n&&e.push(n)})),[4,Promise.all(e)];case 1:return t.sent(),[2]}}))}))},e.prototype.getRegistration=function(e){return this.isRegistered(e)?this._registry.get(e):this.parent?this.parent.getRegistration(e):null},e.prototype.getAllRegistrations=function(e){return this.isRegistered(e)?this._registry.getAll(e):this.parent?this.parent.getAllRegistrations(e):null},e.prototype.construct=function(e,t){var n=this;if(e instanceof p)return e.createProxy((function(e){return n.resolve(e,t)}));var r,i=function(){var r=T.get(e);if(!r||0===r.length){if(0===e.length)return new e;throw new Error('TypeInfo not known for "'+e.name+'"')}var i=r.map(n.resolveParams(t,e));return new(e.bind.apply(e,h([void 0],i)))}();return"function"!=typeof(r=i).dispose||r.dispose.length>0||this.disposables.add(i),i},e.prototype.resolveParams=function(e,t){var n=this;return function(r,i){var o,a,s,c;try{return"object"==typeof(c=r)&&"token"in c&&"multiple"in c?g(r)?r.multiple?(o=n.resolve(r.transform)).transform.apply(o,h([n.resolveAll(r.token)],r.transformArgs)):(a=n.resolve(r.transform)).transform.apply(a,h([n.resolve(r.token,e)],r.transformArgs)):r.multiple?n.resolveAll(r.token):n.resolve(r.token,e):g(r)?(s=n.resolve(r.transform,e)).transform.apply(s,h([n.resolve(r.token,e)],r.transformArgs)):n.resolve(r,e)}catch(e){throw new Error(O(t,i,e))}}},e.prototype.ensureNotDisposed=function(){if(this.disposed)throw new Error("This container has been disposed, you cannot interact with a disposed container")},e}(),D=new I;var k="injectionTokens";var P=function(){return function(e){T.set(e,function(e){var t=Reflect.getMetadata("design:paramtypes",e)||[],n=Reflect.getOwnMetadata(k,e)||{};return Object.keys(n).forEach((function(e){t[+e]=n[e]})),t}(e))}};var R=function(){return function(e){P()(e),D.registerSingleton(e)}};if("undefined"==typeof Reflect||!Reflect.getMetadata)throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.")},2238:function(e,t,n){n.d(t,{Jn:function(){return w},KN:function(){return A},Mq:function(){return O},Xd:function(){return g},ZF:function(){return S},qX:function(){return _}});var r=n(8463),i=n(3333),o=n(4444),a=n(4424);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",u="0.8.4",l=new i.Yd("@firebase/app"),h="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,p=new Map;function v(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function g(e){const t=e.name;if(p.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;p.set(t,e);for(const t of d.values())v(t,e);return!0}function _(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},y=new o.LL("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="9.14.0";function S(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw y.create("bad-app-name",{appName:String(a)});if(n||(n=(0,o.aH)()),!n)throw y.create("no-options");const s=d.get(a);if(s){if((0,o.vZ)(n,s.options)&&(0,o.vZ)(i,s.config))return s;throw y.create("duplicate-app",{appName:a})}const c=new r.H0(a);for(const e of p.values())c.addComponent(e);const u=new m(n,i,c);return d.set(a,u),u}function O(e="[DEFAULT]"){const t=d.get(e);if(!t&&e===h)return S();if(!t)throw y.create("no-app",{appName:e});return t}function A(e,t,n){var i;let o=null!==(i=f[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}g(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="firebase-heartbeat-store";let C=null;function T(){return C||(C=(0,a.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(E)}}).catch((e=>{throw y.create("idb-open",{originalErrorMessage:e.message})}))),C}async function I(e,t){var n;try{const n=(await T()).transaction(E,"readwrite"),r=n.objectStore(E);return await r.put(t,D(e)),n.done}catch(e){if(e instanceof o.ZR)l.warn(e.message);else{const t=y.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});l.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new R(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=P();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=P(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),x(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),x(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function P(){return(new Date).toISOString().substring(0,10)}class R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await T()).transaction(E).objectStore(E).get(D(e))}catch(e){if(e instanceof o.ZR)l.warn(e.message);else{const n=y.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});l.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return I(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return I(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function x(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;j="",g(new r.wA("platform-logger",(e=>new s(e)),"PRIVATE")),g(new r.wA("heartbeat",(e=>new k(e)),"PRIVATE")),A(c,u,j),A(c,u,"esm2017"),A("fire-js","")},8463:function(e,t,n){n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){n.d(t,{Yd:function(){return l},in:function(){return o}});var r=n(5108);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var o;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));const a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,c={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=c[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);r[o](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=u,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},4424:function(e,t,n){n.d(t,{X3:function(){return v}});let r,i;const o=new WeakMap,a=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||s.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(p(this),t),d(o.get(this))}:function(...t){return d(e.apply(p(this),t))}:function(t,...n){const r=e.call(p(this),t,...n);return s.set(r,t.sort?t.sort():[t]),d(r)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));a.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function d(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(d(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const p=e=>u.get(e);function v(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=d(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(d(a.result),e.oldVersion,e.newVersion,d(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}const g=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],b=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return b.set(t,o),o}l=(e=>({...e,get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)}))(l)}}]);