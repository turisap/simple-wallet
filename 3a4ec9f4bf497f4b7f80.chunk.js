(self.webpackChunksmall_wallet=self.webpackChunksmall_wallet||[]).push([[726],{9593:function(t,e,n){"use strict";var r=n(8764).Buffer,o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.map=e.array=e.rustEnum=e.str=e.vecU8=e.tagged=e.vec=e.bool=e.option=e.publicKey=e.i128=e.u128=e.i64=e.u64=e.struct=e.f64=e.f32=e.i32=e.u32=e.i16=e.u16=e.i8=e.u8=void 0;const i=n(698),s=n(4934),u=o(n(3550));var a=n(698);Object.defineProperty(e,"u8",{enumerable:!0,get:function(){return a.u8}}),Object.defineProperty(e,"i8",{enumerable:!0,get:function(){return a.s8}}),Object.defineProperty(e,"u16",{enumerable:!0,get:function(){return a.u16}}),Object.defineProperty(e,"i16",{enumerable:!0,get:function(){return a.s16}}),Object.defineProperty(e,"u32",{enumerable:!0,get:function(){return a.u32}}),Object.defineProperty(e,"i32",{enumerable:!0,get:function(){return a.s32}}),Object.defineProperty(e,"f32",{enumerable:!0,get:function(){return a.f32}}),Object.defineProperty(e,"f64",{enumerable:!0,get:function(){return a.f64}}),Object.defineProperty(e,"struct",{enumerable:!0,get:function(){return a.struct}});class c extends i.Layout{constructor(t,e,n){super(t,n),this.blob=i.blob(t),this.signed=e}decode(t,e=0){const n=new u.default(this.blob.decode(t,e),10,"le");return this.signed?n.fromTwos(8*this.span).clone():n}encode(t,e,n=0){return this.signed&&(t=t.toTwos(8*this.span)),this.blob.encode(t.toArrayLike(r,"le",this.span),e,n)}}function d(t){return new c(8,!1,t)}e.u64=d,e.i64=function(t){return new c(8,!0,t)},e.u128=function(t){return new c(16,!1,t)},e.i128=function(t){return new c(16,!0,t)};class l extends i.Layout{constructor(t,e,n,r){super(t.span,r),this.layout=t,this.decoder=e,this.encoder=n}decode(t,e){return this.decoder(this.layout.decode(t,e))}encode(t,e,n){return this.layout.encode(this.encoder(t),e,n)}getSpan(t,e){return this.layout.getSpan(t,e)}}e.publicKey=function(t){return new l(i.blob(32),(t=>new s.PublicKey(t)),(t=>t.toBuffer()),t)};class f extends i.Layout{constructor(t,e){super(-1,e),this.layout=t,this.discriminator=i.u8()}encode(t,e,n=0){return null==t?this.discriminator.encode(0,e,n):(this.discriminator.encode(1,e,n),this.layout.encode(t,e,n+1)+1)}decode(t,e=0){const n=this.discriminator.decode(t,e);if(0===n)return null;if(1===n)return this.layout.decode(t,e+1);throw new Error("Invalid option "+this.property)}getSpan(t,e=0){const n=this.discriminator.decode(t,e);if(0===n)return 1;if(1===n)return this.layout.getSpan(t,e+1)+1;throw new Error("Invalid option "+this.property)}}function p(t){if(0===t)return!1;if(1===t)return!0;throw new Error("Invalid bool: "+t)}function h(t){return t?1:0}function y(t){const e=i.u32("length"),n=i.struct([e,i.blob(i.offset(e,-e.span),"data")]);return new l(n,(({data:t})=>t),(t=>({data:t})),t)}e.option=function(t,e){return new f(t,e)},e.bool=function(t){return new l(i.u8(),p,h,t)},e.vec=function(t,e){const n=i.u32("length"),r=i.struct([n,i.seq(t,i.offset(n,-n.span),"values")]);return new l(r,(({values:t})=>t),(t=>({values:t})),e)},e.tagged=function(t,e,n){const r=i.struct([d("tag"),e.replicate("data")]);return new l(r,(function({tag:e,data:n}){if(!e.eq(t))throw new Error("Invalid tag, expected: "+t.toString("hex")+", got: "+e.toString("hex"));return n}),(e=>({tag:t,data:e})),n)},e.vecU8=y,e.str=function(t){return new l(y(),(t=>t.toString("utf-8")),(t=>r.from(t,"utf-8")),t)},e.rustEnum=function(t,e,n){const r=i.union(null!=n?n:i.u8(),e);return t.forEach(((t,e)=>r.addVariant(e,t,t.property))),r},e.array=function(t,e,n){const r=i.struct([i.seq(t,e,"values")]);return new l(r,(({values:t})=>t),(t=>({values:t})),n)};class w extends i.Layout{constructor(t,e,n){super(t.span+e.span,n),this.keyLayout=t,this.valueLayout=e}decode(t,e){e=e||0;return[this.keyLayout.decode(t,e),this.valueLayout.decode(t,e+this.keyLayout.getSpan(t,e))]}encode(t,e,n){n=n||0;const r=this.keyLayout.encode(t[0],e,n);return r+this.valueLayout.encode(t[1],e,n+r)}getSpan(t,e){return this.keyLayout.getSpan(t,e)+this.valueLayout.getSpan(t,e)}}e.map=function(t,e,n){const r=i.u32("length"),o=i.struct([r,i.seq(new w(t,e),i.offset(r,-r.span),"values")]);return new l(o,(({values:t})=>new Map(t)),(t=>({values:Array.from(t.entries())})),n)}},698:function(t,e,n){"use strict";var r=n(8764).Buffer;
/**
 * Support for translating between Buffer instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */class o{constructor(t,e){if(!Number.isInteger(t))throw new TypeError("span must be an integer");this.span=t,this.property=e}makeDestinationObject(){return{}}decode(t,e){throw new Error("Layout is abstract")}encode(t,e,n){throw new Error("Layout is abstract")}getSpan(t,e){if(0>this.span)throw new RangeError("indeterminate span");return this.span}replicate(t){const e=Object.create(this.constructor.prototype);return Object.assign(e,this),e.property=t,e}fromArray(t){}}function i(t,e){return e.property?t+"["+e.property+"]":t}e.Layout=o,e.nameWithProperty=i,e.bindConstructorLayout=function(t,e){if("function"!=typeof t)throw new TypeError("Class must be constructor");if(t.hasOwnProperty("layout_"))throw new Error("Class is already bound to a layout");if(!(e&&e instanceof o))throw new TypeError("layout must be a Layout");if(e.hasOwnProperty("boundConstructor_"))throw new Error("layout is already bound to a constructor");t.layout_=e,e.boundConstructor_=t,e.makeDestinationObject=()=>new t,Object.defineProperty(t.prototype,"encode",{value:function(t,n){return e.encode(this,t,n)},writable:!0}),Object.defineProperty(t,"decode",{value:function(t,n){return e.decode(t,n)},writable:!0})};class s extends o{isCount(){throw new Error("ExternalLayout is abstract")}}class u extends s{constructor(t,e){if(void 0===t&&(t=1),!Number.isInteger(t)||0>=t)throw new TypeError("elementSpan must be a (positive) integer");super(-1,e),this.elementSpan=t}isCount(){return!0}decode(t,e){void 0===e&&(e=0);const n=t.length-e;return Math.floor(n/this.elementSpan)}encode(t,e,n){return 0}}class a extends s{constructor(t,e,n){if(!(t instanceof o))throw new TypeError("layout must be a Layout");if(void 0===e)e=0;else if(!Number.isInteger(e))throw new TypeError("offset must be integer or undefined");super(t.span,n||t.property),this.layout=t,this.offset=e}isCount(){return this.layout instanceof c||this.layout instanceof d}decode(t,e){return void 0===e&&(e=0),this.layout.decode(t,e+this.offset)}encode(t,e,n){return void 0===n&&(n=0),this.layout.encode(t,e,n+this.offset)}}class c extends o{constructor(t,e){if(super(t,e),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readUIntLE(e,this.span)}encode(t,e,n){return void 0===n&&(n=0),e.writeUIntLE(t,n,this.span),this.span}}class d extends o{constructor(t,e){if(super(t,e),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readUIntBE(e,this.span)}encode(t,e,n){return void 0===n&&(n=0),e.writeUIntBE(t,n,this.span),this.span}}class l extends o{constructor(t,e){if(super(t,e),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readIntLE(e,this.span)}encode(t,e,n){return void 0===n&&(n=0),e.writeIntLE(t,n,this.span),this.span}}class f extends o{constructor(t,e){if(super(t,e),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(t,e){return void 0===e&&(e=0),t.readIntBE(e,this.span)}encode(t,e,n){return void 0===n&&(n=0),e.writeIntBE(t,n,this.span),this.span}}const p=Math.pow(2,32);function h(t){const e=Math.floor(t/p);return{hi32:e,lo32:t-e*p}}function y(t,e){return t*p+e}class w extends o{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);const n=t.readUInt32LE(e);return y(t.readUInt32LE(e+4),n)}encode(t,e,n){void 0===n&&(n=0);const r=h(t);return e.writeUInt32LE(r.lo32,n),e.writeUInt32LE(r.hi32,n+4),8}}class g extends o{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);return y(t.readUInt32BE(e),t.readUInt32BE(e+4))}encode(t,e,n){void 0===n&&(n=0);const r=h(t);return e.writeUInt32BE(r.hi32,n),e.writeUInt32BE(r.lo32,n+4),8}}class v extends o{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);const n=t.readUInt32LE(e);return y(t.readInt32LE(e+4),n)}encode(t,e,n){void 0===n&&(n=0);const r=h(t);return e.writeUInt32LE(r.lo32,n),e.writeInt32LE(r.hi32,n+4),8}}class b extends o{constructor(t){super(8,t)}decode(t,e){void 0===e&&(e=0);return y(t.readInt32BE(e),t.readUInt32BE(e+4))}encode(t,e,n){void 0===n&&(n=0);const r=h(t);return e.writeInt32BE(r.hi32,n),e.writeUInt32BE(r.lo32,n+4),8}}class m extends o{constructor(t){super(4,t)}decode(t,e){return void 0===e&&(e=0),t.readFloatLE(e)}encode(t,e,n){return void 0===n&&(n=0),e.writeFloatLE(t,n),4}}class E extends o{constructor(t){super(4,t)}decode(t,e){return void 0===e&&(e=0),t.readFloatBE(e)}encode(t,e,n){return void 0===n&&(n=0),e.writeFloatBE(t,n),4}}class L extends o{constructor(t){super(8,t)}decode(t,e){return void 0===e&&(e=0),t.readDoubleLE(e)}encode(t,e,n){return void 0===n&&(n=0),e.writeDoubleLE(t,n),8}}class S extends o{constructor(t){super(8,t)}decode(t,e){return void 0===e&&(e=0),t.readDoubleBE(e)}encode(t,e,n){return void 0===n&&(n=0),e.writeDoubleBE(t,n),8}}class x extends o{constructor(t,e,n){if(!(t instanceof o))throw new TypeError("elementLayout must be a Layout");if(!(e instanceof s&&e.isCount()||Number.isInteger(e)&&0<=e))throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");let r=-1;!(e instanceof s)&&0<t.span&&(r=e*t.span),super(r,n),this.elementLayout=t,this.count=e}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let n=0,r=this.count;if(r instanceof s&&(r=r.decode(t,e)),0<this.elementLayout.span)n=r*this.elementLayout.span;else{let o=0;for(;o<r;)n+=this.elementLayout.getSpan(t,e+n),++o}return n}decode(t,e){void 0===e&&(e=0);const n=[];let r=0,o=this.count;for(o instanceof s&&(o=o.decode(t,e));r<o;)n.push(this.elementLayout.decode(t,e)),e+=this.elementLayout.getSpan(t,e),r+=1;return n}encode(t,e,n){void 0===n&&(n=0);const r=this.elementLayout,o=t.reduce(((t,o)=>t+r.encode(o,e,n+t)),0);return this.count instanceof s&&this.count.encode(t.length,e,n),o}}class I extends o{constructor(t,e,n){if(!Array.isArray(t)||!t.reduce(((t,e)=>t&&e instanceof o),!0))throw new TypeError("fields must be array of Layout instances");"boolean"==typeof e&&void 0===n&&(n=e,e=void 0);for(const e of t)if(0>e.span&&void 0===e.property)throw new Error("fields cannot contain unnamed variable-length layout");let r=-1;try{r=t.reduce(((t,e)=>t+e.getSpan()),0)}catch(t){}super(r,e),this.fields=t,this.decodePrefixes=!!n}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let n=0;try{n=this.fields.reduce(((n,r)=>{const o=r.getSpan(t,e);return e+=o,n+o}),0)}catch(t){throw new RangeError("indeterminate span")}return n}decode(t,e){void 0===e&&(e=0);const n=this.makeDestinationObject();for(const r of this.fields)if(void 0!==r.property&&(n[r.property]=r.decode(t,e)),e+=r.getSpan(t,e),this.decodePrefixes&&t.length===e)break;return n}encode(t,e,n){void 0===n&&(n=0);const r=n;let o=0,i=0;for(const r of this.fields){let s=r.span;if(i=0<s?s:0,void 0!==r.property){const o=t[r.property];void 0!==o&&(i=r.encode(o,e,n),0>s&&(s=r.getSpan(e,n)))}o=n,n+=s}return o+i-r}fromArray(t){const e=this.makeDestinationObject();for(const n of this.fields)void 0!==n.property&&0<t.length&&(e[n.property]=t.shift());return e}layoutFor(t){if("string"!=typeof t)throw new TypeError("property must be string");for(const e of this.fields)if(e.property===t)return e}offsetOf(t){if("string"!=typeof t)throw new TypeError("property must be string");let e=0;for(const n of this.fields){if(n.property===t)return e;0>n.span?e=-1:0<=e&&(e+=n.span)}}}class O{constructor(t){this.property=t}decode(){throw new Error("UnionDiscriminator is abstract")}encode(){throw new Error("UnionDiscriminator is abstract")}}class T extends O{constructor(t,e){if(!(t instanceof s&&t.isCount()))throw new TypeError("layout must be an unsigned integer ExternalLayout");super(e||t.property||"variant"),this.layout=t}decode(t,e){return this.layout.decode(t,e)}encode(t,e,n){return this.layout.encode(t,e,n)}}class B extends o{constructor(t,e,n){const r=t instanceof c||t instanceof d;if(r)t=new T(new a(t));else if(t instanceof s&&t.isCount())t=new T(t);else if(!(t instanceof O))throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");if(void 0===e&&(e=null),!(null===e||e instanceof o))throw new TypeError("defaultLayout must be null or a Layout");if(null!==e){if(0>e.span)throw new Error("defaultLayout must have constant span");void 0===e.property&&(e=e.replicate("content"))}let i=-1;e&&(i=e.span,0<=i&&r&&(i+=t.layout.span)),super(i,n),this.discriminator=t,this.usesPrefixDiscriminator=r,this.defaultLayout=e,this.registry={};let u=this.defaultGetSourceVariant.bind(this);this.getSourceVariant=function(t){return u(t)},this.configGetSourceVariant=function(t){u=t.bind(this)}}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);const n=this.getVariant(t,e);if(!n)throw new Error("unable to determine span for unrecognized variant");return n.getSpan(t,e)}defaultGetSourceVariant(t){if(t.hasOwnProperty(this.discriminator.property)){if(this.defaultLayout&&t.hasOwnProperty(this.defaultLayout.property))return;const e=this.registry[t[this.discriminator.property]];if(e&&(!e.layout||t.hasOwnProperty(e.property)))return e}else for(const e in this.registry){const n=this.registry[e];if(t.hasOwnProperty(n.property))return n}throw new Error("unable to infer src variant")}decode(t,e){let n;void 0===e&&(e=0);const r=this.discriminator,o=r.decode(t,e);let i=this.registry[o];if(void 0===i){let s=0;i=this.defaultLayout,this.usesPrefixDiscriminator&&(s=r.layout.span),n=this.makeDestinationObject(),n[r.property]=o,n[i.property]=this.defaultLayout.decode(t,e+s)}else n=i.decode(t,e);return n}encode(t,e,n){void 0===n&&(n=0);const r=this.getSourceVariant(t);if(void 0===r){const r=this.discriminator,o=this.defaultLayout;let i=0;return this.usesPrefixDiscriminator&&(i=r.layout.span),r.encode(t[r.property],e,n),i+o.encode(t[o.property],e,n+i)}return r.encode(t,e,n)}addVariant(t,e,n){const r=new j(this,t,e,n);return this.registry[t]=r,r}getVariant(t,e){let n=t;return r.isBuffer(t)&&(void 0===e&&(e=0),n=this.discriminator.decode(t,e)),this.registry[n]}}class j extends o{constructor(t,e,n,r){if(!(t instanceof B))throw new TypeError("union must be a Union");if(!Number.isInteger(e)||0>e)throw new TypeError("variant must be a (non-negative) integer");if("string"==typeof n&&void 0===r&&(r=n,n=null),n){if(!(n instanceof o))throw new TypeError("layout must be a Layout");if(null!==t.defaultLayout&&0<=n.span&&n.span>t.defaultLayout.span)throw new Error("variant span exceeds span of containing union");if("string"!=typeof r)throw new TypeError("variant must have a String property")}let i=t.span;0>t.span&&(i=n?n.span:0,0<=i&&t.usesPrefixDiscriminator&&(i+=t.discriminator.layout.span)),super(i,r),this.union=t,this.variant=e,this.layout=n||null}getSpan(t,e){if(0<=this.span)return this.span;void 0===e&&(e=0);let n=0;return this.union.usesPrefixDiscriminator&&(n=this.union.discriminator.layout.span),n+this.layout.getSpan(t,e+n)}decode(t,e){const n=this.makeDestinationObject();if(void 0===e&&(e=0),this!==this.union.getVariant(t,e))throw new Error("variant mismatch");let r=0;return this.union.usesPrefixDiscriminator&&(r=this.union.discriminator.layout.span),this.layout?n[this.property]=this.layout.decode(t,e+r):this.property?n[this.property]=!0:this.union.usesPrefixDiscriminator&&(n[this.union.discriminator.property]=this.variant),n}encode(t,e,n){void 0===n&&(n=0);let r=0;if(this.union.usesPrefixDiscriminator&&(r=this.union.discriminator.layout.span),this.layout&&!t.hasOwnProperty(this.property))throw new TypeError("variant lacks property "+this.property);this.union.discriminator.encode(this.variant,e,n);let o=r;if(this.layout&&(this.layout.encode(t[this.property],e,n+r),o+=this.layout.getSpan(e,n+r),0<=this.union.span&&o>this.union.span))throw new Error("encoded variant overruns containing union");return o}fromArray(t){if(this.layout)return this.layout.fromArray(t)}}function k(t){return 0>t&&(t+=4294967296),t}class U extends o{constructor(t,e,n){if(!(t instanceof c||t instanceof d))throw new TypeError("word must be a UInt or UIntBE layout");if("string"==typeof e&&void 0===n&&(n=e,e=void 0),4<t.span)throw new RangeError("word cannot exceed 32 bits");super(t.span,n),this.word=t,this.msb=!!e,this.fields=[];let r=0;this._packedSetValue=function(t){return r=k(t),this},this._packedGetValue=function(){return r}}decode(t,e){const n=this.makeDestinationObject();void 0===e&&(e=0);const r=this.word.decode(t,e);this._packedSetValue(r);for(const t of this.fields)void 0!==t.property&&(n[t.property]=t.decode(r));return n}encode(t,e,n){void 0===n&&(n=0);const r=this.word.decode(e,n);this._packedSetValue(r);for(const e of this.fields)if(void 0!==e.property){const n=t[e.property];void 0!==n&&e.encode(n)}return this.word.encode(this._packedGetValue(),e,n)}addField(t,e){const n=new P(this,t,e);return this.fields.push(n),n}addBoolean(t){const e=new D(this,t);return this.fields.push(e),e}fieldFor(t){if("string"!=typeof t)throw new TypeError("property must be string");for(const e of this.fields)if(e.property===t)return e}}class P{constructor(t,e,n){if(!(t instanceof U))throw new TypeError("container must be a BitStructure");if(!Number.isInteger(e)||0>=e)throw new TypeError("bits must be positive integer");const r=8*t.span,o=t.fields.reduce(((t,e)=>t+e.bits),0);if(e+o>r)throw new Error("bits too long for span remainder ("+(r-o)+" of "+r+" remain)");this.container=t,this.bits=e,this.valueMask=(1<<e)-1,32===e&&(this.valueMask=4294967295),this.start=o,this.container.msb&&(this.start=r-o-e),this.wordMask=k(this.valueMask<<this.start),this.property=n}decode(){return k(this.container._packedGetValue()&this.wordMask)>>>this.start}encode(t){if(!Number.isInteger(t)||t!==k(t&this.valueMask))throw new TypeError(i("BitField.encode",this)+" value must be integer not exceeding "+this.valueMask);const e=this.container._packedGetValue(),n=k(t<<this.start);this.container._packedSetValue(k(e&~this.wordMask)|n)}}class D extends P{constructor(t,e){super(t,1,e)}decode(t,e){return!!P.prototype.decode.call(this,t,e)}encode(t){return"boolean"==typeof t&&(t=+t),P.prototype.encode.call(this,t)}}class C extends o{constructor(t,e){if(!(t instanceof s&&t.isCount()||Number.isInteger(t)&&0<=t))throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");let n=-1;t instanceof s||(n=t),super(n,e),this.length=t}getSpan(t,e){let n=this.span;return 0>n&&(n=this.length.decode(t,e)),n}decode(t,e){void 0===e&&(e=0);let n=this.span;return 0>n&&(n=this.length.decode(t,e)),t.slice(e,e+n)}encode(t,e,n){let o=this.length;if(this.length instanceof s&&(o=t.length),!r.isBuffer(t)||o!==t.length)throw new TypeError(i("Blob.encode",this)+" requires (length "+o+") Buffer as src");if(n+o>e.length)throw new RangeError("encoding overruns Buffer");return e.write(t.toString("hex"),n,o,"hex"),this.length instanceof s&&this.length.encode(o,e,n),o}}class N extends o{constructor(t){super(-1,t)}getSpan(t,e){if(!r.isBuffer(t))throw new TypeError("b must be a Buffer");void 0===e&&(e=0);let n=e;for(;n<t.length&&0!==t[n];)n+=1;return 1+n-e}decode(t,e,n){void 0===e&&(e=0);let r=this.getSpan(t,e);return t.slice(e,e+r-1).toString("utf-8")}encode(t,e,n){void 0===n&&(n=0),"string"!=typeof t&&(t=t.toString());const o=new r(t,"utf8"),i=o.length;if(n+i>e.length)throw new RangeError("encoding overruns Buffer");return o.copy(e,n),e[n+i]=0,i+1}}class R extends o{constructor(t,e){if("string"==typeof t&&void 0===e&&(e=t,t=void 0),void 0===t)t=-1;else if(!Number.isInteger(t))throw new TypeError("maxSpan must be an integer");super(-1,e),this.maxSpan=t}getSpan(t,e){if(!r.isBuffer(t))throw new TypeError("b must be a Buffer");return void 0===e&&(e=0),t.length-e}decode(t,e,n){void 0===e&&(e=0);let r=this.getSpan(t,e);if(0<=this.maxSpan&&this.maxSpan<r)throw new RangeError("text length exceeds maxSpan");return t.slice(e,e+r).toString("utf-8")}encode(t,e,n){void 0===n&&(n=0),"string"!=typeof t&&(t=t.toString());const o=new r(t,"utf8"),i=o.length;if(0<=this.maxSpan&&this.maxSpan<i)throw new RangeError("text length exceeds maxSpan");if(n+i>e.length)throw new RangeError("encoding overruns Buffer");return o.copy(e,n),i}}class F extends o{constructor(t,e){super(0,e),this.value=t}decode(t,e,n){return this.value}encode(t,e,n){return 0}}e.ExternalLayout=s,e.GreedyCount=u,e.OffsetLayout=a,e.UInt=c,e.UIntBE=d,e.Int=l,e.IntBE=f,e.Float=m,e.FloatBE=E,e.Double=L,e.DoubleBE=S,e.Sequence=x,e.Structure=I,e.UnionDiscriminator=O,e.UnionLayoutDiscriminator=T,e.Union=B,e.VariantLayout=j,e.BitStructure=U,e.BitField=P,e.Boolean=D,e.Blob=C,e.CString=N,e.UTF8=R,e.Constant=F,e.greedy=(t,e)=>new u(t,e),e.offset=(t,e,n)=>new a(t,e,n),e.u8=t=>new c(1,t),e.u16=t=>new c(2,t),e.u24=t=>new c(3,t),e.u32=t=>new c(4,t),e.u40=t=>new c(5,t),e.u48=t=>new c(6,t),e.nu64=t=>new w(t),e.u16be=t=>new d(2,t),e.u24be=t=>new d(3,t),e.u32be=t=>new d(4,t),e.u40be=t=>new d(5,t),e.u48be=t=>new d(6,t),e.nu64be=t=>new g(t),e.s8=t=>new l(1,t),e.s16=t=>new l(2,t),e.s24=t=>new l(3,t),e.s32=t=>new l(4,t),e.s40=t=>new l(5,t),e.s48=t=>new l(6,t),e.ns64=t=>new v(t),e.s16be=t=>new f(2,t),e.s24be=t=>new f(3,t),e.s32be=t=>new f(4,t),e.s40be=t=>new f(5,t),e.s48be=t=>new f(6,t),e.ns64be=t=>new b(t),e.f32=t=>new m(t),e.f32be=t=>new E(t),e.f64=t=>new L(t),e.f64be=t=>new S(t),e.struct=(t,e,n)=>new I(t,e,n),e.bits=(t,e,n)=>new U(t,e,n),e.seq=(t,e,n)=>new x(t,e,n),e.union=(t,e,n)=>new B(t,e,n),e.unionLayoutDiscriminator=(t,e)=>new T(t,e),e.blob=(t,e)=>new C(t,e),e.cstr=t=>new N(t),e.utf8=(t,e)=>new R(t,e),e.const=(t,e)=>new F(t,e)},3096:function(t,e,n){var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,l=c||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,h=Math.min,y=function(){return l.Date.now()};function w(t,e,n){var o,i,s,u,a,c,d=0,l=!1,f=!1,w=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var n=o,r=i;return o=i=void 0,d=e,u=t.apply(r,n)}function m(t){return d=t,a=setTimeout(L,e),l?b(t):u}function E(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-d>=s}function L(){var t=y();if(E(t))return S(t);a=setTimeout(L,function(t){var n=e-(t-c);return f?h(n,s-(t-d)):n}(t))}function S(t){return a=void 0,w&&o?b(t):(o=i=void 0,u)}function x(){var t=y(),n=E(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return m(c);if(f)return a=setTimeout(L,e),b(c)}return void 0===a&&(a=setTimeout(L,e)),u}return e=v(e)||0,g(n)&&(l=!!n.leading,s=(f="maxWait"in n)?p(v(n.maxWait)||0,e):s,w="trailing"in n?!!n.trailing:w),x.cancel=function(){void 0!==a&&clearTimeout(a),d=0,o=c=i=a=void 0},x.flush=function(){return void 0===a?u:S(y())},x}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=s.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),w(t,e,{leading:o,maxWait:e,trailing:i})}},2043:function(t,e,n){var r,o,i=n(5108);!function(s,u){"use strict";r=function(){var t=function(){},e="undefined",n=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function o(t,e){var n=t[e];if("function"==typeof n.bind)return n.bind(t);try{return Function.prototype.bind.call(n,t)}catch(e){return function(){return Function.prototype.apply.apply(n,[t,arguments])}}}function s(){i.log&&(i.log.apply?i.log.apply(i,arguments):Function.prototype.apply.apply(i.log,[i,arguments])),i.trace&&i.trace()}function u(r){return"debug"===r&&(r="log"),typeof i!==e&&("trace"===r&&n?s:void 0!==i[r]?o(i,r):void 0!==i.log?o(i,"log"):t)}function a(e,n){for(var o=0;o<r.length;o++){var i=r[o];this[i]=o<e?t:this.methodFactory(i,e,n)}this.log=this.debug}function c(t,n,r){return function(){typeof i!==e&&(a.call(this,n,r),this[t].apply(this,arguments))}}function d(t,e,n){return u(t)||c.apply(this,arguments)}function l(t,n,o){var s,u=this;n=null==n?"WARN":n;var c="loglevel";function l(t){var n=(r[t]||"silent").toUpperCase();if(typeof window!==e&&c){try{return void(window.localStorage[c]=n)}catch(t){}try{window.document.cookie=encodeURIComponent(c)+"="+n+";"}catch(t){}}}function f(){var t;if(typeof window!==e&&c){try{t=window.localStorage[c]}catch(t){}if(typeof t===e)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(c)+"=");-1!==r&&(t=/^([^;]+)/.exec(n.slice(r))[1])}catch(t){}return void 0===u.levels[t]&&(t=void 0),t}}function p(){if(typeof window!==e&&c){try{return void window.localStorage.removeItem(c)}catch(t){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}"string"==typeof t?c+=":"+t:"symbol"==typeof t&&(c=void 0),u.name=t,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=o||d,u.getLevel=function(){return s},u.setLevel=function(n,r){if("string"==typeof n&&void 0!==u.levels[n.toUpperCase()]&&(n=u.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=u.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(s=n,!1!==r&&l(n),a.call(u,n,t),typeof i===e&&n<u.levels.SILENT)return"No console available for logging"},u.setDefaultLevel=function(t){n=t,f()||u.setLevel(t,!1)},u.resetLevel=function(){u.setLevel(n,!1),p()},u.enableAll=function(t){u.setLevel(u.levels.TRACE,t)},u.disableAll=function(t){u.setLevel(u.levels.SILENT,t)};var h=f();null==h&&(h=n),u.setLevel(h,!1)}var f=new l,p={};f.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var e=p[t];return e||(e=p[t]=new l(t,f.getLevel(),f.methodFactory)),e};var h=typeof window!==e?window.log:void 0;return f.noConflict=function(){return typeof window!==e&&window.log===f&&(window.log=h),f},f.getLoggers=function(){return p},f.default=f,f},void 0===(o="function"==typeof r?r.call(e,n,e,t):r)||(t.exports=o)}()},8915:function(t,e,n){"use strict";n.d(e,{eiS:function(){return y}});function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function o(t){return function e(n){return 0===arguments.length||r(n)?e:t.apply(this,arguments)}}function i(t){return function e(n,i){switch(arguments.length){case 0:return e;case 1:return r(n)?e:o((function(e){return t(n,e)}));default:return r(n)&&r(i)?e:r(n)?o((function(e){return t(e,i)})):r(i)?o((function(e){return t(n,e)})):t(n,i)}}}Array.isArray;"undefined"!=typeof Symbol&&Symbol.iterator;function s(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var u=Object.prototype.toString,a=function(){return"[object Arguments]"===u.call(arguments)?function(t){return"[object Arguments]"===u.call(t)}:function(t){return s("callee",t)}}(),c=a,d=!{toString:null}.propertyIsEnumerable("toString"),l=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],f=function(){return arguments.propertyIsEnumerable("length")}(),p=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1};Object.keys,Number.isInteger;"function"==typeof Object.is&&Object.is;var h=function(t){return(t<10?"0":"")+t};Date.prototype.toISOString;"function"==typeof Object.assign&&Object.assign;var y=i((function(t,e){for(var n={},r=0;r<t.length;)t[r]in e&&(n[t[r]]=e[t[r]]),r+=1;return n}));var w="\t\n\v\f\r                　\u2028\u2029\ufeff";String.prototype.trim}}]);