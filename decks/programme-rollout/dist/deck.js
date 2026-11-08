(()=>{var _h=0,cc=1,yh=2;var Ur=1,vh=2,Vs=3,Gi=0,_n=1,zt=2,gi=0,Ws=1,uc=2,hc=3,dc=4,Sh=5;var fs=100,Mh=101,bh=102,Eh=103,Th=104,wh=200,Ah=201,Rh=202,Ch=203,fc=204,pc=205,Ih=206,Ph=207,Lh=208,Dh=209,Nh=210,Uh=211,Oh=212,Fh=213,Bh=214,Co=0,Io=1,Po=2,Us=3,Lo=4,Do=5,No=6,Uo=7,mc=0,zh=1,kh=2,ei=0,gc=1,xc=2,_c=3,yc=4,vc=5,Sc=6,Mc=7;var bc=300,ps=301,Xs=302,pa=303,ma=304,Oo=1e3,Kn=1001,Fo=1002,en=1003,Hh=1004;var Or=1005;var mn=1006,ga=1007;var xi=1008;var yn=1009,Ec=1010,Tc=1011,qs=1012,xa=1013,Xn=1014,In=1015,qn=1016,_a=1017,ya=1018,ms=1020,wc=35902,Ac=35899,Rc=1021,Cc=1022,Yn=1023,pi=1026,_i=1027,Ic=1028,va=1029,Vi=1030,Sa=1031;var Ma=1033,Fr=33776,Br=33777,zr=33778,kr=33779,ba=35840,Ea=35841,Ta=35842,wa=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37488,Pa=37489,Hr=37490,La=37491,Da=37808,Na=37809,Ua=37810,Oa=37811,Fa=37812,Ba=37813,za=37814,ka=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,$a=36494,Za=36495,Ja=36283,Ka=36284,Gr=36285,ja=36286;var pr=2300,Bo=2301,Ao=2302,ec=2303,tc=2400,nc=2401,ic=2402;var Gh=3200;var Pc=0,Vh=1,yi="",fn="srgb",mr="srgb-linear",gr="linear",Et="srgb";var Ro=7680;var Wh=519,Xh=512,qh=513,Yh=514,Lc=515,$h=516,Zh=517,Dc=518,Nc=519,Jh=35044;var Vr="300 es",Dn=2e3,xr=2001;function Op(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=_r("canvas");return i.style.display="block",i}var Xu={},Os=null;function Uc(...i){let e="THREE."+i.shift();Os?Os("log",e,...i):console.log(e,...i)}function jh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=jh(i);let e="THREE."+i.shift();if(Os)Os("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=jh(i);let e="THREE."+i.shift();if(Os)Os("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hr(...i){let e=i.join(" ");e in Xu||(Xu[e]=!0,Ye(...i))}function Qh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ed={[Co]:Co,[Po]:No,[Lo]:Lo,[Us]:Do,[Io]:Io,[No]:Po,[Uo]:Uo,[Do]:Us},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Il=Math.PI/180,zo=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Bp(i,e){return(i%e+e)%e}function Pl(i,e,t){return(1-t)*i+t*e}function td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zp(i,e){if(e.constructor===Float32Array)return i;let t=Oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function kp(i,e){if(e.constructor===Float32Array)return i;let t=Oc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Gc=class Gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var oe=Gc,cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],g=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||l!==g||c!==u||h!==p){let m=l*g+c*u+h*p+f*_;m<0&&(g=-g,u=-u,p=-p,_=-_,m=-m);let d=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);d=Math.sin(d*y)/b,a=Math.sin(a*y)/b,l=l*d+g*a,c=c*d+u*a,h=h*d+p*a,f=f*d+_*a}else{l=l*d+g*a,c=c*d+u*a,h=h*d+p*a,f=f*d+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],g=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*g,e[t+1]=l*p+h*g+c*f-a*u,e[t+2]=c*p+h*u+a*g-l*f,e[t+3]=h*p-a*f-l*g-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),g=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=g*h*f+c*u*p,this._y=c*u*f-g*h*p,this._z=c*h*p+g*u*f,this._w=c*h*f-g*u*p;break;case"YXZ":this._x=g*h*f+c*u*p,this._y=c*u*f-g*h*p,this._z=c*h*p-g*u*f,this._w=c*h*f+g*u*p;break;case"ZXY":this._x=g*h*f-c*u*p,this._y=c*u*f+g*h*p,this._z=c*h*p+g*u*f,this._w=c*h*f-g*u*p;break;case"ZYX":this._x=g*h*f-c*u*p,this._y=c*u*f+g*h*p,this._z=c*h*p-g*u*f,this._w=c*h*f+g*u*p;break;case"YZX":this._x=g*h*f+c*u*p,this._y=c*u*f+g*h*p,this._z=c*h*p-g*u*f,this._w=c*h*f-g*u*p;break;case"XZY":this._x=g*h*f-c*u*p,this._y=c*u*f-g*h*p,this._z=c*h*p+g*u*f,this._w=c*h*f+g*u*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],g=n+a+f;if(g>0){let u=.5/Math.sqrt(g+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var N=Vc,Ll=new N,qu=new cn,Wc=class Wc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],g=n[2],u=n[5],p=n[8],_=s[0],m=s[3],d=s[6],y=s[1],b=s[4],v=s[7],E=s[2],M=s[5],x=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*b+l*M,r[6]=o*d+a*v+l*x,r[1]=c*_+h*y+f*E,r[4]=c*m+h*b+f*M,r[7]=c*d+h*v+f*x,r[2]=g*_+u*y+p*E,r[5]=g*m+u*b+p*M,r[8]=g*d+u*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,g=a*l-h*r,u=c*r-o*l,p=t*f+n*g+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=g*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var Ke=Wc,Dl=new Ke,Yu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var gt=Hp();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=_r("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nl(s[o].image)):r.push(Nl(s[o]))}else r=Nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Vp=0,Ul=new N,En=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=mn,o=xi,a=Yn,l=yn,c=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ys(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=bc;En.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],g=l[1],u=l[5],p=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-g)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+g)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(u+1)/2,E=(d+1)/2,M=(h+g)/4,x=(f+_)/4,S=(p+m)/4;return b>v&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=x/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=S/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(g-h)*(g-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-_)/y,this.z=(g-h)/y,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var Ft=Xc,Ho=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Ho{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yr=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fa=class fa{constructor(e,t,n,s,r,o,a,l,c,h,f,g,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,g,u,p,_,m)}set(e,t,n,s,r,o,a,l,c,h,f,g,u,p,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=g,d[3]=u,d[7]=p,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let g=o*h,u=o*f,p=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=g-_*c,t[9]=-a*l,t[2]=_-g*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let g=l*h,u=l*f,p=c*h,_=c*f;t[0]=g+_*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=_+g*a,t[10]=o*l}else if(e.order==="ZXY"){let g=l*h,u=l*f,p=c*h,_=c*f;t[0]=g-_*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=_-g*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let g=o*h,u=o*f,p=a*h,_=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=g*c+_,t[1]=l*f,t[5]=_*c+g,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let g=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-g*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=g-_*f}else if(e.order==="XZY"){let g=o*l,u=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=g*f+_,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=_*f+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,Xp)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ci.crossVectors(n,Tn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ci.crossVectors(n,Tn)),Ci.normalize(),so.crossVectors(Tn,Ci),s[0]=Ci.x,s[4]=so.x,s[8]=Tn.x,s[1]=Ci.y,s[5]=so.y,s[9]=Tn.y,s[2]=Ci.z,s[6]=so.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],g=n[9],u=n[13],p=n[2],_=n[6],m=n[10],d=n[14],y=n[3],b=n[7],v=n[11],E=n[15],M=s[0],x=s[4],S=s[8],C=s[12],A=s[1],D=s[5],z=s[9],k=s[13],P=s[2],I=s[6],L=s[10],U=s[14],X=s[3],H=s[7],Y=s[11],J=s[15];return r[0]=o*M+a*A+l*P+c*X,r[4]=o*x+a*D+l*I+c*H,r[8]=o*S+a*z+l*L+c*Y,r[12]=o*C+a*k+l*U+c*J,r[1]=h*M+f*A+g*P+u*X,r[5]=h*x+f*D+g*I+u*H,r[9]=h*S+f*z+g*L+u*Y,r[13]=h*C+f*k+g*U+u*J,r[2]=p*M+_*A+m*P+d*X,r[6]=p*x+_*D+m*I+d*H,r[10]=p*S+_*z+m*L+d*Y,r[14]=p*C+_*k+m*U+d*J,r[3]=y*M+b*A+v*P+E*X,r[7]=y*x+b*D+v*I+E*H,r[11]=y*S+b*z+v*L+E*Y,r[15]=y*C+b*k+v*U+E*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],g=e[10],u=e[14],p=e[3],_=e[7],m=e[11],d=e[15],y=l*u-c*g,b=a*u-c*f,v=a*g-l*f,E=o*u-c*h,M=o*g-l*h,x=o*f-a*h;return t*(_*y-m*b+d*v)-n*(p*y-m*E+d*M)+s*(p*b-_*E+d*x)-r*(p*v-_*M+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],g=e[10],u=e[11],p=e[12],_=e[13],m=e[14],d=e[15],y=t*a-n*o,b=t*l-s*o,v=t*c-r*o,E=n*l-s*a,M=n*c-r*a,x=s*c-r*l,S=h*_-f*p,C=h*m-g*p,A=h*d-u*p,D=f*m-g*_,z=f*d-u*_,k=g*d-u*m,P=y*k-b*z+v*D+E*A-M*C+x*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=(a*k-l*z+c*D)*I,e[1]=(s*z-n*k-r*D)*I,e[2]=(_*x-m*M+d*E)*I,e[3]=(g*M-f*x-u*E)*I,e[4]=(l*A-o*k-c*C)*I,e[5]=(t*k-s*A+r*C)*I,e[6]=(m*v-p*x-d*b)*I,e[7]=(h*x-g*v+u*b)*I,e[8]=(o*z-a*A+c*S)*I,e[9]=(n*A-t*z-r*S)*I,e[10]=(p*M-_*v+d*y)*I,e[11]=(f*v-h*M-u*y)*I,e[12]=(a*C-o*D-l*S)*I,e[13]=(t*D-n*C+s*S)*I,e[14]=(_*b-p*E-m*y)*I,e[15]=(h*E-f*b+g*y)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,g=r*c,u=r*h,p=r*f,_=o*h,m=o*f,d=a*f,y=l*c,b=l*h,v=l*f,E=n.x,M=n.y,x=n.z;return s[0]=(1-(_+d))*E,s[1]=(u+v)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(u-v)*M,s[5]=(1-(g+d))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(p+b)*x,s[9]=(m-y)*x,s[10]=(1-(g+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ms.set(s[0],s[1],s[2]).length(),a=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,h=1/a,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),g=(t+e)/(t-e),u=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Dn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===xr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),g=-(t+e)/(t-e),u=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Dn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===xr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fa.prototype.isMatrix4=!0;var Tt=fa,Ms=new N,zn=new Tt,Wp=new N(0,0,0),Xp=new N(1,1,1),Ci=new N,so=new N,Tn=new N,Zu=new Tt,Ju=new cn,Ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],g=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qp=0,Ku=new N,bs=new cn,li=new Tt,ro=new N,or=new N,Yp=new N,$p=new cn,ju=new N(1,0,0),Qu=new N(0,1,0),eh=new N(0,0,1),th={type:"added"},Zp={type:"removed"},Es={type:"childadded",child:null},Ol={type:"childremoved",child:null},Ht=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Ui,n=new cn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(or,ro,this.up):li.lookAt(ro,or,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(li),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),Es.child=e,this.dispatchEvent(Es),Es.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),g=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new N(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],g=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&g>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Bp(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return gt.workingToColorSpace(ln.copy(this),e),Math.round(ht(ln.r*255,0,255))*65536+Math.round(ht(ln.g*255,0,255))*256+Math.round(ht(ln.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=fn){gt.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(oo);let n=Pl(Ii.h,oo.h,t),s=Pl(Ii.s,oo.s,t),r=Pl(Ii.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new dt;dt.NAMES=nd;var rs=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new N,ci=new N,Bl=new N,ui=new N,Ts=new N,ws=new N,nh=new N,zl=new N,kl=new N,Hl=new N,Gl=new Ft,Vl=new Ft,Wl=new Ft,Ni=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),ci.subVectors(n,t),Bl.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(ci),l=kn.dot(Bl),c=ci.dot(ci),h=ci.dot(Bl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let g=1/f,u=(c*l-a*h)*g,p=(o*h-a*l)*g;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gl.setScalar(0),Vl.setScalar(0),Wl.setScalar(0),Gl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Vl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),ci.subVectors(e,t),kn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ts.subVectors(s,n),ws.subVectors(r,n),zl.subVectors(e,n);let l=Ts.dot(zl),c=ws.dot(zl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,s);let h=Ts.dot(kl),f=ws.dot(kl);if(h>=0&&f<=h)return t.copy(s);let g=l*f-h*c;if(g<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ts,o);Hl.subVectors(e,r);let u=Ts.dot(Hl),p=ws.dot(Hl);if(p>=0&&u<=p)return t.copy(r);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ws,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return nh.subVectors(r,s),a=(f-h)/(f-h+(u-p)),t.copy(s).addScaledVector(nh,a);let d=1/(m+_+g);return o=_*d,a=g*d,t.copy(n).addScaledVector(Ts,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),lo.subVectors(this.max,ar),As.subVectors(e.a,ar),Rs.subVectors(e.b,ar),Cs.subVectors(e.c,ar),Pi.subVectors(Rs,As),Li.subVectors(Cs,Rs),es.subVectors(As,Cs);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-es.z,es.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,es.z,0,-es.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-es.y,es.x,0];return!Xl(t,As,Rs,Cs,lo)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,As,Rs,Cs,lo))?!1:(co.crossVectors(Pi,Li),t=[co.x,co.y,co.z],Xl(t,As,Rs,Cs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,ao=new Oi,As=new N,Rs=new N,Cs=new N,Pi=new N,Li=new N,es=new N,ar=new N,lo=new N,co=new N,ts=new N;function Xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wt=new N,uo=new oe,Kp=0,Nn=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?Oc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):kp(e,this.array)}};var Sr=class extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mr=class extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},jp=new Oi,lr=new N,ql=new N,zs=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(ql)),this.expandByPoint(lr.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qp=0,Ln=new Tt,Yl=new Ht,Is=new N,wn=new Oi,cr=new Oi,Qt=new N,Xt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?Mr:Sr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(wn.min,cr.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,cr.max),wn.expandByPoint(Qt)):(wn.expandByPoint(cr.min),wn.expandByPoint(cr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Qt.add(Is)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;let h=new N,f=new N,g=new N,u=new oe,p=new oe,_=new oe,m=new N,d=new N;function y(C,A,D){c[C]=c[A]=c[D]=1,h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,A),g.fromBufferAttribute(n,D),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),f.sub(h),g.sub(h),p.sub(u),_.sub(u);let z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(g,-p.y).multiplyScalar(z),d.copy(g).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(z),a[C].add(m),a[A].add(m),a[D].add(m),l[C].add(d),l[A].add(d),l[D].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,A=b.length;C<A;++C){let D=b[C],z=D.start,k=D.count;for(let P=z,I=z+k;P<I;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new N,E=new N,M=new N,x=new N;function S(C){M.fromBufferAttribute(s,C),x.copy(M);let A=a[C];v.copy(A),v.sub(M.multiplyScalar(M.dot(A))).normalize(),E.crossVectors(x,A);let z=E.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,z)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,u=n.count;g<u;g++)n.setXYZ(g,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let g=0,u=e.count;g<u;g+=3){let p=e.getX(g+0),_=e.getX(g+1),m=e.getX(g+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let g=0,u=t.count;g<u;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,g=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let d=0;d<h;d++)g[p++]=c[u++]}return new Nn(g,h,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let g=c[h],u=e(g,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,g=c.length;f<g;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let g=0,u=f.length;g<u;g++)h.push(f[g].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $l=new N,em=new N,tm=new Ke,Gn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$l.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tm.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nm=0,os=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Ws,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new N,Zl=new N,ho=new N,fo=new N,Vo=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zl.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),fo.copy(this.origin).sub(Zl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=fo.dot(this.direction),l=-fo.dot(ho),c=fo.lengthSq(),h=Math.abs(1-o*o),f,g,u,p;if(h>0)if(f=o*l-a,g=o*a-l,p=r*h,f>=0)if(g>=-p)if(g<=p){let _=1/h;f*=_,g*=_,u=f*(f+o*g+2*a)+g*(o*f+g+2*l)+c}else g=r,f=Math.max(0,-(o*g+a)),u=-f*f+g*(g+2*l)+c;else g=-r,f=Math.max(0,-(o*g+a)),u=-f*f+g*(g+2*l)+c;else g<=-p?(f=Math.max(0,-(-o*r+a)),g=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+g*(g+2*l)+c):g<=p?(f=0,g=Math.min(Math.max(-r,-l),r),u=g*(g+2*l)+c):(f=Math.max(0,-(o*r+a)),g=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+g*(g+2*l)+c);else g=o>0?-r:r,f=Math.max(0,-(o*g+a)),u=-f*f+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Zl).addScaledVector(ho,g),u}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,g=this.origin;return c>=0?(n=(e.min.x-g.x)*c,s=(e.max.x-g.x)*c):(n=(e.max.x-g.x)*c,s=(e.min.x-g.x)*c),h>=0?(r=(e.min.y-g.y)*h,o=(e.max.y-g.y)*h):(r=(e.max.y-g.y)*h,o=(e.min.y-g.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-g.z)*f,l=(e.max.z-g.z)*f):(a=(e.max.z-g.z)*f,l=(e.min.z-g.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,g=e.y-o.y,u=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,d=n.x-o.x,y=n.y-o.y,b=n.z-o.z,v=Math.abs(l),E=Math.abs(c),M=Math.abs(h),x,S,C,A,D,z,k,P,I,L,U,X;if(v>=E&&v>=M?(C=l,z=f,I=p,X=d,l>=0?(x=c,S=h,A=g,D=u,k=_,P=m,L=y,U=b):(x=h,S=c,A=u,D=g,k=m,P=_,L=b,U=y)):E>=M?(C=c,z=g,I=_,X=y,c>=0?(x=h,S=l,A=u,D=f,k=m,P=p,L=b,U=d):(x=l,S=h,A=f,D=u,k=p,P=m,L=d,U=b)):(C=h,z=u,I=m,X=b,h>=0?(x=l,S=c,A=f,D=g,k=p,P=_,L=d,U=y):(x=c,S=l,A=g,D=f,k=_,P=p,L=y,U=d)),C===0)return null;let H=x/C,Y=S/C,J=1/C,ce=A-H*z,de=D-Y*z,q=k-H*I,ue=P-Y*I,Ie=L-H*X,Fe=U-Y*X,ve=Ie*ue-Fe*q,Ne=ce*Fe-de*Ie,vt=q*de-ue*ce;if(s){if(ve<0||Ne<0||vt<0)return null}else if((ve<0||Ne<0||vt<0)&&(ve>0||Ne>0||vt>0))return null;let Ue=ve+Ne+vt;if(Ue===0)return null;let Qe=J*(ve*z+Ne*I+vt*X);return(Ue>0?Qe<0:Qe>0)?null:this.at(Qe/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wo=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ih=new Tt,ns=new Vo,po=new zs,sh=new N,mo=new N,go=new N,xo=new N,Jl=new N,_o=new N,rh=new N,yo=new N,un=class extends Ht{constructor(e=new Xt,t=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Jl.fromBufferAttribute(f,e),o?_o.addScaledVector(Jl,h):_o.addScaledVector(Jl.sub(t),h))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(po.containsPoint(ns.origin)===!1&&(ns.intersectSphere(po,sh)===null||ns.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),ns.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,g=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=g.length;p<_;p++){let m=g[p],d=o[m.materialIndex],y=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,E=b;v<E;v+=3){let M=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);s=vo(this,d,e,n,c,h,f,M,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,d=_;m<d;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=vo(this,o,e,n,c,h,f,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=g.length;p<_;p++){let m=g[p],d=o[m.materialIndex],y=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,E=b;v<E;v+=3){let M=v,x=v+1,S=v+2;s=vo(this,d,e,n,c,h,f,M,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,d=_;m<d;m+=3){let y=m,b=m+1,v=m+2;s=vo(this,o,e,n,c,h,f,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function im(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:i}}function vo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,xo);let h=im(i,e,t,n,mo,go,xo,rh);if(h){let f=new N;Ni.getBarycoord(rh,mo,go,xo,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,f,new oe)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,f,new oe)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let g={a,b:l,c,normal:new N,materialIndex:0};Ni.getNormal(mo,go,xo,g.normal),h.face=g,h.barycoord=f}return h}var Xo=class extends En{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,f,g){super(null,o,a,l,c,h,s,r,f,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=new zs,sm=new oe(.5,.5),So=new N,as=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],g=r[6],u=r[7],p=r[8],_=r[9],m=r[10],d=r[11],y=r[12],b=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,u-h,d-p,E-y).normalize(),s[1].setComponents(c+o,u+h,d+p,E+y).normalize(),s[2].setComponents(c+a,u+f,d+_,E+b).normalize(),s[3].setComponents(c-a,u-f,d-_,E-b).normalize(),n)s[4].setComponents(l,g,m,v).normalize(),s[5].setComponents(c-l,u-g,d-m,E-v).normalize();else if(s[4].setComponents(c-l,u-g,d-m,E-v).normalize(),t===Dn)s[5].setComponents(c+l,u+g,d+m,E+v).normalize();else if(t===xr)s[5].setComponents(l,g,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=sm.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oh=new Tt,qo=class i{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new as),n[s].setFromProjectionMatrix(oh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new as),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var br=class extends En{constructor(e=[],t=ps,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Vn=class extends En{constructor(e,t,n=Xn,s,r,o,a=en,l=en,c,h=pi,f=1){if(h!==pi&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:e,height:t,depth:f};super(g,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Er=class extends Vn{constructor(e,t=Xn,n=ps,s,r,o=en,a=en,l,c=pi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tr=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],g=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function p(_,m,d,y,b,v,E,M,x,S,C){let A=v/x,D=E/S,z=v/2,k=E/2,P=M/2,I=x+1,L=S+1,U=0,X=0,H=new N;for(let Y=0;Y<L;Y++){let J=Y*D-k;for(let ce=0;ce<I;ce++){let de=ce*A-z;H[_]=de*y,H[m]=J*b,H[d]=P,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[d]=M>0?1:-1,h.push(H.x,H.y,H.z),f.push(ce/x),f.push(1-Y/S),U+=1}}for(let Y=0;Y<S;Y++)for(let J=0;J<x;J++){let ce=g+J+I*Y,de=g+J+I*(Y+1),q=g+(J+1)+I*(Y+1),ue=g+(J+1)+I*Y;l.push(ce,de,ue),l.push(de,q,ue),X+=6}a.addGroup(u,X,C),u+=X,g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var at=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],g=[],u=[],p=0,_=[],m=n/2,d=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(u,2));function y(){let v=new N,E=new N,M=0,x=(t-e)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,D=A*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,P=k*l+a,I=Math.sin(P),L=Math.cos(P);E.x=D*I,E.y=-A*n+m,E.z=D*L,f.push(E.x,E.y,E.z),v.set(I,x,L).normalize(),g.push(v.x,v.y,v.z),u.push(k,1-A),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let A=_[C][S],D=_[C+1][S],z=_[C+1][S+1],k=_[C][S+1];(e>0||C!==0)&&(h.push(A,D,k),M+=3),(t>0||C!==r-1)&&(h.push(D,z,k),M+=3)}c.addGroup(d,M,0),d+=M}function b(v){let E=p,M=new oe,x=new N,S=0,C=v===!0?e:t,A=v===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*A,0),g.push(0,A,0),u.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let P=z/s*l+a,I=Math.cos(P),L=Math.sin(P);x.x=C*L,x.y=m*A,x.z=C*I,f.push(x.x,x.y,x.z),g.push(0,A,0),M.x=I*.5+.5,M.y=L*.5*A+.5,u.push(M.x,M.y),p++}for(let z=0;z<s;z++){let k=E+z,P=D+z;v===!0?h.push(P,P+1,k):h.push(P+1,P,k),S+=3}c.addGroup(d,S,v===!0?1:2),d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fi=class i extends at{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],g=n[s+1]-h,u=(o-h)/g;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new Tt;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),g=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),g<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ht(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ht(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ks=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),g=l-this.aX,u=c-this.aY;l=g*h-u*f+this.aX,c=g*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yo=class extends ks{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let g=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;g*=h,u*=h,s(o,a,g,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ah=new N,lh=new N,Kl=new Fc,jl=new Fc,Ql=new Fc,mi=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(lh.subVectors(s[0],s[1]).add(s[0]),c=lh);let f=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ah.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ah),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(g),u),m=Math.pow(g.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Kl.initNonuniformCatmullRom(c.x,f.x,g.x,h.x,p,_,m),jl.initNonuniformCatmullRom(c.y,f.y,g.y,h.y,p,_,m),Ql.initNonuniformCatmullRom(c.z,f.z,g.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,f.x,g.x,h.x,this.tension),jl.initCatmullRom(c.y,f.y,g.y,h.y,this.tension),Ql.initCatmullRom(c.z,f.z,g.z,h.z,this.tension));return n.set(Kl.calc(l),jl.calc(l),Ql.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ch(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function rm(i,e){let t=1-i;return t*t*e}function om(i,e){return 2*(1-i)*i*e}function am(i,e){return i*i*e}function dr(i,e,t,n){return rm(i,e)+om(i,t)+am(i,n)}function lm(i,e){let t=1-i;return t*t*t*e}function cm(i,e){let t=1-i;return 3*t*t*i*e}function um(i,e){return 3*(1-i)*i*i*e}function hm(i,e){return i*i*i*e}function fr(i,e,t,n,s){return lm(i,e)+cm(i,t)+um(i,n)+hm(i,s)}var wr=class extends An{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends An{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y),fr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ar=class extends An{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends An{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends An{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(e,s.x,r.x,o.x),dr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ls=class extends An{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(dr(e,s.x,r.x,o.x),dr(e,s.y,r.y,o.y),dr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cr=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(ch(a,l.x,c.x,h.x,f.x),ch(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:Yo,CatmullRomCurve3:mi,CubicBezierCurve:wr,CubicBezierCurve3:$o,EllipseCurve:ks,LineCurve:Ar,LineCurve3:Zo,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:ls,SplineCurve:Cr}),Ko=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Wn=class extends Ko{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ar(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Rr(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new wr(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ks(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xn=class extends Wn{constructor(e){super(e),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Wn().fromJSON(s))}return this}};function dm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=id(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=xm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let g=t;g<s;g+=t){let u=i[g],p=i[g+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ir(r,o,t,a,l,c,0),o}function id(i,e,t,n,s){let r;if(s===Rm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=uh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=uh(o/n|0,i[o],i[o+1],r);return r&&Hs(r,r.next)&&(Lr(r),r=r.next),r}function cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Mm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?pm(i,n,s,r):fm(i)){e.push(l.i,i.i,c.i),Lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=mm(cs(i),e),Ir(i,e,t,n,s,r,2)):o===2&&gm(i,e,t,n,s,r):Ir(cs(i),e,t,n,s,r,1);break}}}function fm(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),g=Math.max(s,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=g&&p.y>=f&&p.y<=u&&ur(s,a,r,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function pm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,g=o.y,u=Math.min(a,l,c),p=Math.min(h,f,g),_=Math.max(a,l,c),m=Math.max(h,f,g),d=sc(u,p,e,t,n),y=sc(_,m,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=d&&v&&v.z<=y;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ur(a,h,l,f,c,g,b.x,b.y)&&Ot(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=u&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,h,l,f,c,g,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=d;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ur(a,h,l,f,c,g,b.x,b.y)&&Ot(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,h,l,f,c,g,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function mm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hs(n,s)&&rd(n,t,t.next,s)&&Pr(n,s)&&Pr(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return cs(t)}function gm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let l=od(o,a);o=cs(o,o.next),l=cs(l,l.next),Ir(o,e,t,n,s,r,0),Ir(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Em(c))}s.sort(_m);for(let r=0;r<s.length;r++)t=ym(s[r],t);return t}function _m(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ym(i,e){let t=vm(i,e);if(!t)return e;let n=od(t,i);return cs(n,n.next),cs(t,t.next)}function vm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Pr(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Sm(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Sm(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function Mm(i,e,t,n){let s=i;do s.z===0&&(s.z=sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bm(s)}function bm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Em(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ur(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&sd(i,e,t,n,s,r,o,a)}function Tm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wm(i,e)&&(Pr(i,e)&&Pr(e,i)&&Am(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||Hs(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function rd(i,e,t,n){let s=bo(Ot(i,e,t)),r=bo(Ot(i,e,n)),o=bo(Ot(t,n,i)),a=bo(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Mo(i,t,e)||r===0&&Mo(i,n,e)||o===0&&Mo(t,i,n)||a===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function bo(i){return i>0?1:i<0?-1:0}function wm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function Am(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function od(i,e){let t=rc(i.i,i.x,i.y),n=rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uh(i,e,t,n){let s=rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var oc=class{static triangulate(e,t,n=2){return dm(e,t,n)}},ss=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];hh(e),dh(n,e);let o=e.length;t.forEach(hh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,dh(n,t[l]);let a=oc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var us=class i extends Xt{constructor(e=new xn([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Cm,b,v=!1,E,M,x,S;if(d){b=d.getSpacedPoints(h),v=!0,g=!1;let te=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(h,te),M=new N,x=new N,S=new N}g||(m=0,u=0,p=0,_=0);let C=a.extractPoints(c),A=C.shape,D=C.holes;if(!ss.isClockWise(A)){A=A.reverse();for(let te=0,me=D.length;te<me;te++){let _e=D[te];ss.isClockWise(_e)&&(D[te]=_e.reverse())}}function k(te){let _e=10000000000000001e-36,Pe=te[0];for(let Me=1;Me<=te.length;Me++){let Je=Me%te.length,ke=te[Je],ct=ke.x-Pe.x,ut=ke.y-Pe.y,be=ct*ct+ut*ut,F=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(Pe.x),Math.abs(Pe.y)),et=_e*F*F;if(be<=et){te.splice(Je,1),Me--;continue}Pe=ke}}k(A),D.forEach(k);let P=D.length,I=A;for(let te=0;te<P;te++){let me=D[te];A=A.concat(me)}function L(te,me,_e){return me||$e("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(me,_e)}let U=A.length;function X(te,me,_e){let Pe,Me,Je,ke=te.x-me.x,ct=te.y-me.y,ut=_e.x-te.x,be=_e.y-te.y,F=ke*ke+ct*ct,et=ke*be-ct*ut;if(Math.abs(et)>Number.EPSILON){let Ve=Math.sqrt(F),qe=Math.sqrt(ut*ut+be*be),fe=me.x-ct/Ve,xt=me.y+ke/Ve,ge=_e.x-be/qe,He=_e.y+ut/qe,R=((ge-fe)*be-(He-xt)*ut)/(ke*be-ct*ut);Pe=fe+ke*R-te.x,Me=xt+ct*R-te.y;let T=Pe*Pe+Me*Me;if(T<=2)return new oe(Pe,Me);Je=Math.sqrt(T/2)}else{let Ve=!1;ke>Number.EPSILON?ut>Number.EPSILON&&(Ve=!0):ke<-Number.EPSILON?ut<-Number.EPSILON&&(Ve=!0):Math.sign(ct)===Math.sign(be)&&(Ve=!0),Ve?(Pe=-ct,Me=ke,Je=Math.sqrt(F)):(Pe=ke,Me=ct,Je=Math.sqrt(F/2))}return new oe(Pe/Je,Me/Je)}let H=[];for(let te=0,me=I.length,_e=me-1,Pe=te+1;te<me;te++,_e++,Pe++)_e===me&&(_e=0),Pe===me&&(Pe=0),H[te]=X(I[te],I[_e],I[Pe]);let Y=[],J,ce=H.concat();for(let te=0,me=P;te<me;te++){let _e=D[te];J=[];for(let Pe=0,Me=_e.length,Je=Me-1,ke=Pe+1;Pe<Me;Pe++,Je++,ke++)Je===Me&&(Je=0),ke===Me&&(ke=0),J[Pe]=X(_e[Pe],_e[Je],_e[ke]);Y.push(J),ce=ce.concat(J)}let de;if(m===0)de=ss.triangulateShape(I,D);else{let te=[],me=[];for(let _e=0;_e<m;_e++){let Pe=_e/m,Me=u*Math.cos(Pe*Math.PI/2),Je=p*Math.sin(Pe*Math.PI/2)+_;for(let ke=0,ct=I.length;ke<ct;ke++){let ut=L(I[ke],H[ke],Je);Ne(ut.x,ut.y,-Me),Pe===0&&te.push(ut)}for(let ke=0,ct=P;ke<ct;ke++){let ut=D[ke];J=Y[ke];let be=[];for(let F=0,et=ut.length;F<et;F++){let Ve=L(ut[F],J[F],Je);Ne(Ve.x,Ve.y,-Me),Pe===0&&be.push(Ve)}Pe===0&&me.push(be)}}de=ss.triangulateShape(te,me)}let q=de.length,ue=p+_;for(let te=0;te<U;te++){let me=g?L(A[te],ce[te],ue):A[te];v?(x.copy(E.normals[0]).multiplyScalar(me.x),M.copy(E.binormals[0]).multiplyScalar(me.y),S.copy(b[0]).add(x).add(M),Ne(S.x,S.y,S.z)):Ne(me.x,me.y,0)}for(let te=1;te<=h;te++)for(let me=0;me<U;me++){let _e=g?L(A[me],ce[me],ue):A[me];v?(x.copy(E.normals[te]).multiplyScalar(_e.x),M.copy(E.binormals[te]).multiplyScalar(_e.y),S.copy(b[te]).add(x).add(M),Ne(S.x,S.y,S.z)):Ne(_e.x,_e.y,f/h*te)}for(let te=m-1;te>=0;te--){let me=te/m,_e=u*Math.cos(me*Math.PI/2),Pe=p*Math.sin(me*Math.PI/2)+_;for(let Me=0,Je=I.length;Me<Je;Me++){let ke=L(I[Me],H[Me],Pe);Ne(ke.x,ke.y,f+_e)}for(let Me=0,Je=D.length;Me<Je;Me++){let ke=D[Me];J=Y[Me];for(let ct=0,ut=ke.length;ct<ut;ct++){let be=L(ke[ct],J[ct],Pe);v?Ne(be.x,be.y+b[h-1].y,b[h-1].x+_e):Ne(be.x,be.y,f+_e)}}}Ie(),Fe();function Ie(){let te=s.length/3;if(g){let me=0,_e=U*me;for(let Pe=0;Pe<q;Pe++){let Me=de[Pe];vt(Me[2]+_e,Me[1]+_e,Me[0]+_e)}me=h+m*2,_e=U*me;for(let Pe=0;Pe<q;Pe++){let Me=de[Pe];vt(Me[0]+_e,Me[1]+_e,Me[2]+_e)}}else{for(let me=0;me<q;me++){let _e=de[me];vt(_e[2],_e[1],_e[0])}for(let me=0;me<q;me++){let _e=de[me];vt(_e[0]+U*h,_e[1]+U*h,_e[2]+U*h)}}n.addGroup(te,s.length/3-te,0)}function Fe(){let te=s.length/3,me=0;ve(I,me),me+=I.length;for(let _e=0,Pe=D.length;_e<Pe;_e++){let Me=D[_e];ve(Me,me),me+=Me.length}n.addGroup(te,s.length/3-te,1)}function ve(te,me){let _e=te.length;for(;--_e>=0;){let Pe=_e,Me=_e-1;Me<0&&(Me=te.length-1);for(let Je=0,ke=h+m*2;Je<ke;Je++){let ct=U*Je,ut=U*(Je+1),be=me+Pe+ct,F=me+Me+ct,et=me+Me+ut,Ve=me+Pe+ut;Ue(be,F,et,Ve)}}}function Ne(te,me,_e){l.push(te),l.push(me),l.push(_e)}function vt(te,me,_e){Qe(te),Qe(me),Qe(_e);let Pe=s.length/3,Me=y.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);rt(Me[0]),rt(Me[1]),rt(Me[2])}function Ue(te,me,_e,Pe){Qe(te),Qe(me),Qe(Pe),Qe(me),Qe(_e),Qe(Pe);let Me=s.length/3,Je=y.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);rt(Je[0]),rt(Je[1]),rt(Je[3]),rt(Je[1]),rt(Je[2]),rt(Je[3])}function Qe(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function rt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Im(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Jo[s.type]().fromJSON(s)),new i(n,e.options)}},Cm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],g=e[s*3],u=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-f),new oe(g,1-p),new oe(_,1-d)]:[new oe(a,1-l),new oe(h,1-f),new oe(u,1-p),new oe(m,1-d)]}};function Im(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qn=class i extends Xt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new N,g=new oe,u=new N,p=new N,_=new N,m=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,u.x=d*1,u.y=-m,u.z=d*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,u.x=d*1,u.y=-m,u.z=d*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(p)}for(let y=0;y<=t;y++){let b=n+y*h*s,v=Math.sin(b),E=Math.cos(b);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*v,f.y=e[M].y,f.z=e[M].x*E,o.push(f.x,f.y,f.z),g.x=y/t,g.y=M/(e.length-1),a.push(g.x,g.y);let x=l[3*M+0]*v,S=l[3*M+1],C=l[3*M+0]*E;c.push(x,S,C)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,E=v,M=v+e.length,x=v+e.length+1,S=v+1;r.push(E,M,S),r.push(x,S,M)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var hs=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,g=t/l,u=[],p=[],_=[],m=[];for(let d=0;d<h;d++){let y=d*g-o;for(let b=0;b<c;b++){let v=b*f-r;p.push(v,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){let b=y+c*d,v=y+c*(d+1),E=y+1+c*(d+1),M=y+1+c*d;u.push(b,v,M),u.push(v,E,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Dr=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,g=(t-e)/s,u=new N,p=new oe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;u.x=f*Math.cos(d),u.y=f*Math.sin(d),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=g}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let y=d+m,b=y,v=y+n+1,E=y+n+2,M=y+1;a.push(b,v,M),a.push(v,E,M)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var nn=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new N,g=new N,u=[],p=[],_=[],m=[];for(let d=0;d<=n;d++){let y=[],b=d/n,v=o+b*a,E=e*Math.cos(v),M=Math.sqrt(e*e-E*E),x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let C=S/t,A=s+C*r;f.x=-M*Math.cos(A),f.y=E,f.z=M*Math.sin(A),p.push(f.x,f.y,f.z),g.copy(f).normalize(),_.push(g.x,g.y,g.z),m.push(C+x,1-b),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let b=h[d][y+1],v=h[d][y],E=h[d+1][y],M=h[d+1][y+1];(d!==0||o>0)&&u.push(b,v,M),(d!==n-1||l<Math.PI)&&u.push(v,E,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wt=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],g=new N,u=new N,p=new N;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let d=0;d<=s;d++){let y=d/s*r;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),g.x=e*Math.cos(y),g.y=e*Math.sin(y),p.subVectors(u,g).normalize(),h.push(p.x,p.y,p.z),f.push(d/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let d=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(d,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Bi=class i extends Xt{constructor(e=new ls(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new oe,h=new N,f=[],g=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(u,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),d()}function m(b){h=e.getPointAt(b/t,h);let v=o.normals[b],E=o.binormals[b];for(let M=0;M<=s;M++){let x=M/s*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);l.x=C*v.x+S*E.x,l.y=C*v.y+S*E.y,l.z=C*v.z+S*E.z,l.normalize(),g.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let E=(s+1)*(b-1)+(v-1),M=(s+1)*b+(v-1),x=(s+1)*b+v,S=(s+1)*(b-1)+v;p.push(E,M,S),p.push(M,x,S)}}function y(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fh(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=gs(i[t]);for(let s in n)e[s]=n[s]}return e}function fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var ad={clone:gs,merge:hn},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Qo=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ea=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Eo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nc:r=e,a=2*t-n;break;case ic:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:o=e,l=2*n-t;break;case ic:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,g=this._weightPrev,u=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,d=-g*m+2*g*_-g*p,y=(1+g)*m+(-1.5-2*g)*_+(-.5+g)*p+1,b=(-1-u)*m+(1.5+u)*_+.5*p,v=u*m-u*_;for(let E=0;E!==a;++E)r[E]=d*o[h+E]+y*o[c+E]+b*o[l+E]+v*o[f+E];return r}},na=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let g=0;g!==a;++g)r[g]=o[c+g]*f+o[l+g]*h;return r}},ia=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sa=class extends zi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let g=a*2,u=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],d=u*g+p*2,y=f[d],b=f[d+1],v=e*g+p*2,E=h[v],M=h[v+1],x=Um(n,t,y,E,s);r[p]=ld(x,_,b,M,m)}return r}};function ld(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Nm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Um(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ld(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Nm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Eo(e.settings)&&(n.settings={inTangents:Ps(e.settings.inTangents,Array),outTangents:Ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break;case ec:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Ao;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Eo(this.settings)&&(ph(this.settings.inTangents,e),ph(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Eo(this.settings)&&(mh(this.settings.inTangents,e),mh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Fp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,g=f-n,u=f+n;for(let p=0;p!==n;++p){let _=t[f+p];if(_!==t[g+p]||_!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,g=o*n;for(let u=0;u!==n;++u)t[g+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Eo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ph(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function mh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Bo;var ki=class extends Cn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=pr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var oa=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};oa.prototype.ValueTypeName="number";var aa=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Nr=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=pr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="vector";var ca=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,g=c.length;f<g;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new ca,ua=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=new N,wo=new cn,Jn=new N,ds=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,wo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new N,gh=new oe,xh=new oe,pn=class extends ds{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,gh,xh),t.subVectors(xh,gh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Il*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ha=class extends ds{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ls=-90,Ds=1,Gs=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Ls,Ds,e,t);s.layers=this.layers,this.add(s);let r=new pn(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let o=new pn(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let a=new pn(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let l=new pn(Ls,Ds,e,t);l.layers=this.layers,this.add(l);let c=new pn(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),g=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,g,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},da=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var zc="\\[\\]\\.:\\/",Om=new RegExp("["+zc+"]","g"),kc="[^"+zc+"]",Fm="[^"+zc.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",kc),zm=/(WCOD+)?/.source.replace("WCOD",Fm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),Gm=new RegExp("^"+Bm+zm+km+Hm+"$"),Vm=["material","materials","bones","map"],ac=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(e){let t=Gm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=ac;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var qc=class qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qc.prototype.isMatrix2=!0;var lc=qc;function Hc(i,e,t,n){let s=Wm(n);switch(t){case Rc:return i*e;case Ic:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case Sa:return i*e*2/s.components*s.byteLength;case Cc:return i*e*3/s.components*s.byteLength;case Yn:return i*e*4/s.components*s.byteLength;case Ma:return i*e*4/s.components*s.byteLength;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(e,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ra:case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Hr:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ya:case $a:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gr:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wm(i){switch(i){case yn:case Ec:return{byteLength:1,components:1};case qs:case Tc:case qn:return{byteLength:2,components:1};case _a:case ya:return{byteLength:2,components:4};case Xn:case xa:case In:return{byteLength:4,components:1};case wc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let g=0;for(let u=1;u<f.length;u++){let p=f[g],_=f[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++g,f[g]=_)}f.length=g+1;for(let u=0,p=f.length;u<p;u++){let _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:_0,color_fragment:y0,color_pars_fragment:v0,color_pars_vertex:S0,color_vertex:M0,common:b0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:I0,envmap_fragment:P0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:H0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:V0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:K0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:eg,lightprobes_pars_fragment:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:xg,normal_fragment_maps:_g,normal_pars_fragment:yg,normal_pars_vertex:vg,normal_vertex:Sg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:wg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Ig,dithering_fragment:Pg,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Og,shadowmap_vertex:Fg,shadowmask_pars_fragment:Bg,skinbase_vertex:zg,skinning_pars_vertex:kg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:$g,uv_pars_fragment:Zg,uv_pars_vertex:Jg,uv_vertex:Kg,worldpos_vertex:jg,background_vert:Qg,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distance_vert:ax,distance_frag:lx,equirect_vert:cx,equirect_frag:ux,linedashed_vert:hx,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:xx,meshmatcap_frag:_x,meshnormal_vert:yx,meshnormal_frag:vx,meshphong_vert:Sx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:Ex,meshtoon_vert:Tx,meshtoon_frag:wx,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Ix,sprite_vert:Px,sprite_frag:Lx},Ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ni={basic:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:hn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:hn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:hn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:hn([Ce.lights,Ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Qa={r:0,b:0,g:0},Dx=new Tt,Ld=new Ke;Ld.set(-1,0,0,0,1,0,0,0,1);function Nx(i,e,t,n,s,r){let o=new dt(0),a=s===!0?0:1,l,c,h=null,f=0,g=null;function u(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(y){let b=!1,v=u(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,b){let v=u(b);v&&v.isCubeTexture?(c===void 0&&(c=new un(new tn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:gs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,(h!==v||f!==v.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,g=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new un(new hs(2,2),new Rn({name:"BackgroundMaterial",uniforms:gs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=gt.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,g=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Qa,Bc(i)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,b,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:d}}function Ux(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function a(D,z,k,P,I){let L=!1,U=f(D,P,k,z);r!==U&&(r=U,c(r.object)),L=u(D,P,k,I),L&&p(D,P,k,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(D,z,k,P),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,z,k,P){let I=P.wireframe===!0,L=n[z.id];L===void 0&&(L={},n[z.id]=L);let U=D.isInstancedMesh===!0?D.id:0,X=L[U];X===void 0&&(X={},L[U]=X);let H=X[k.id];H===void 0&&(H={},X[k.id]=H);let Y=H[I];return Y===void 0&&(Y=g(l()),H[I]=Y),Y}function g(D){let z=[],k=[],P=[];for(let I=0;I<t;I++)z[I]=0,k[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,z,k,P){let I=r.attributes,L=z.attributes,U=0,X=k.getAttributes();for(let H in X)if(X[H].location>=0){let J=I[H],ce=L[H];if(ce===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function p(D,z,k,P){let I={},L=z.attributes,U=0,X=k.getAttributes();for(let H in X)if(X[H].location>=0){let J=L[H];J===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),I[H]=ce,U++}r.attributes=I,r.attributesNum=U,r.index=P}function _(){let D=r.newAttributes;for(let z=0,k=D.length;z<k;z++)D[z]=0}function m(D){d(D,0)}function d(D,z){let k=r.newAttributes,P=r.enabledAttributes,I=r.attributeDivisors;k[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),I[D]!==z&&(i.vertexAttribDivisor(D,z),I[D]=z)}function y(){let D=r.newAttributes,z=r.enabledAttributes;for(let k=0,P=z.length;k<P;k++)z[k]!==D[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function b(D,z,k,P,I,L,U){U===!0?i.vertexAttribIPointer(D,z,k,I,L):i.vertexAttribPointer(D,z,k,P,I,L)}function v(D,z,k,P){_();let I=P.attributes,L=k.getAttributes(),U=z.defaultAttributeValues;for(let X in L){let H=L[X];if(H.location>=0){let Y=I[X];if(Y===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let J=Y.normalized,ce=Y.itemSize,de=e.get(Y);if(de===void 0)continue;let q=de.buffer,ue=de.type,Ie=de.bytesPerElement,Fe=ue===i.INT||ue===i.UNSIGNED_INT||Y.gpuType===xa;if(Y.isInterleavedBufferAttribute){let ve=Y.data,Ne=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,vt=Y.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ue=0;Ue<H.locationSize;Ue++)d(H.location+Ue,ve.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)m(H.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ue=0;Ue<H.locationSize;Ue++)b(H.location+Ue,ce/H.locationSize,ue,J,Ne*Ie,(vt+ce/H.locationSize*Ue)*Ie,Fe)}else{if(Y.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)d(H.location+ve,Y.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ve=0;ve<H.locationSize;ve++)b(H.location+ve,ce/H.locationSize,ue,J,ce*Ie,ce/H.locationSize*ve*Ie,Fe)}}else if(U!==void 0){let J=U[X];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}y()}function E(){C();for(let D in n){let z=n[D];for(let k in z){let P=z[k];for(let I in P){let L=P[I];for(let U in L)h(L[U].object),delete L[U];delete P[I]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let k in z){let P=z[k];for(let I in P){let L=P[I];for(let U in L)h(L[U].object),delete L[U];delete P[I]}}delete n[D.id]}function x(D){for(let z in n){let k=n[z];for(let P in k){let I=k[P];if(I[D.id]===void 0)continue;let L=I[D.id];for(let U in L)h(L[U].object),delete L[U];delete I[D.id]}}}function S(D){for(let z in n){let k=n[z],P=D.isInstancedMesh===!0?D.id:0,I=k[P];if(I!==void 0){for(let L in I){let U=I[L];for(let X in U)h(U[X].object),delete U[X];delete I[L]}delete k[P],Object.keys(k).length===0&&delete n[z]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ox(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let g=0;for(let u=0;u<h;u++)g+=c[u];t.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Yn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==yn&&x!==In&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:E,samples:M}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){let u=f.length!==0||g||n!==0||s;return s=g,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,g){t=h(f,g,0)},this.setState=function(f,g,u){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,b=y*4,v=d.clippingState||null;l.value=v,v=h(p,g,b,u);for(let E=0;E!==b;++E)v[E]=t[E];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,g,u,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let d=u+_*4,y=g.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,v=u;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var qr=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:gi});r.uniforms.tEquirect.value=t;let o=new un(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=mn),new Gs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ud=256,zx=3,kx=20,Dd=256,Nd=16,Hx=3,Gx=new N,Vx=new dt,tl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new un(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Gx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,g=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Vx));let m=new Gs(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=g,l.autoClearDepth=u,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ud,td(e))}_fromTexture(e,t){e.mapping===ps||e.mapping===Xs?this._setSize(e.image.length===0?ud:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hd(e,!1,!1),n=Math.log2(e)-zx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ps||e.mapping===Xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Wx(),this._integrationMaterial=Xx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Hx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Dd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function hd(i,e,t){return new qr(i,{minFilter:xi,generateMipmaps:e,type:qn,colorSpace:mr,depthBuffer:t})}function Yr(i,e,t){return new Rn({name:i,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:_n,blending:gi,depthTest:!1,depthWrite:!1})}function Wx(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xx(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qx(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${kx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dd(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function fd(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(g,u=!1){return g==null?null:u?o(g):r(g)}function r(g){if(g&&g.isTexture){let u=g.mapping;if(u===pa||u===ma)if(e.has(g)){let p=e.get(g).texture;return a(p,g.mapping)}else{let p=g.image;if(p&&p.height>0){let _=new qr(p.height);return _.fromEquirectangularTexture(i,g),e.set(g,_),g.addEventListener("dispose",c),a(_.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){let u=g.mapping,p=u===pa||u===ma,_=u===ps||u===Xs;if(p||_){let m=t.get(g),d=m!==void 0?m.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==d)return n===null&&(n=new tl(i)),m=p?n.fromEquirectangular(g,m):n.fromCubemap(g,m),m.texture.pmremVersion=g.pmremVersion,t.set(g,m),m.texture;if(m!==void 0)return m.texture;{let y=g.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new tl(i)),m=p?n.fromEquirectangular(g):n.fromCubemap(g),m.texture.pmremVersion=g.pmremVersion,t.set(g,m),g.addEventListener("dispose",h),m.texture):null}}}return g}function a(g,u){return u===pa?g.mapping=ps:u===ma&&(g.mapping=Xs),g}function l(g){let u=0,p=6;for(let _=0;_<p;_++)g[_]!==void 0&&u++;return u===p}function c(g){let u=g.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(g){let u=g.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hr("WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function f(p){let _=p.index,m=p.attributes.position,d=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?Mr:Sr,v=new b(Math.ceil(y/3)*6,1),E=v.array;if(_!==null){let x=_.array;d=_.version;for(let S=0,C=0;S<y;S+=3){let A=x[S+0],D=x[S+1],z=x[S+2];E[C++]=A,E[C++]=D,E[C++]=D,E[C++]=z,E[C++]=z,E[C++]=A}}else{d=m.version;for(let x=0,S=0;x<y;x+=3){let C=x+0,A=x+1,D=x+2;E[S++]=C,E[S++]=A,E[S++]=A,E[S++]=D,E[S++]=D,E[S++]=C}}v.version=d;let M=r.get(p);M&&e.remove(M),r.set(p,v)}function g(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:g,dispose:u}}function Jx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),t.update(g,n,1)}function c(f,g,u){u!==0&&(i.drawElementsInstanced(n,g,r,f*o,u),t.update(g,n,u))}function h(f,g,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,u);let _=0;for(let m=0;m<u;m++)_+=g[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,e,t){let n=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,g=n.get(a);if(g===void 0||g.count!==f){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*E*4*f),x=new yr(M,v,E,f);x.type=In,x.needsUpdate=!0;let S=b*4;for(let A=0;A<f;A++){let D=m[A],z=d[A],k=y[A],P=v*E*4*A;for(let I=0;I<D.count;I++){let L=I*S;u===!0&&(s.fromBufferAttribute(D,I),M[P+L+0]=s.x,M[P+L+1]=s.y,M[P+L+2]=s.z,M[P+L+3]=0),p===!0&&(s.fromBufferAttribute(z,I),M[P+L+4]=s.x,M[P+L+5]=s.y,M[P+L+6]=s.z,M[P+L+7]=0),_===!0&&(s.fromBufferAttribute(k,I),M[P+L+8]=s.x,M[P+L+9]=s.y,M[P+L+10]=s.z,M[P+L+11]=k.itemSize===4?s.w:1)}}g={count:f,texture:x,size:new oe(v,E)},n.set(a,g),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function Qx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,g=e.get(c,f);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return g}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var e_={[gc]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function t_(i,e,t,n,s,r){let o=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Xt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let f=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new un(h,f),u=new ha(-1,1,1,-1,0,1),p=null,_=null,m=!1,d,y=null,b=[],v=!1;this.setSize=function(E,M){o.setSize(E,M),a!==null&&a.setSize(E,M),l!==null&&l.setSize(E,M);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(E,M)}},this.setEffects=function(E){b=E,v=b.length>0&&b[0].isRenderPass===!0;let M=o.width,x=o.height;b.length>0&&a===null&&(a=new gn(M,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(M,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Vn(M,x),r===!0&&(c.format=_i,c.type=ms)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<b.length;C++){let A=b[C];A.setSize&&A.setSize(M,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,M){if(m||E.toneMapping===ei&&b.length===0)return!1;if(y=M,M!==null){let x=M.width,S=M.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&E.setRenderTarget(o),d=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return v},this.end=function(E,M){E.toneMapping=d,m=!0;let x=o,S=a;for(let C=0;C<b.length;C++){let A=b[C];A.enabled!==!1&&(A.render(E,S,x,M),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,f.defines={},gt.getTransfer(p)===Et&&(f.defines.SRGB_TRANSFER="");let C=e_[_];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(g,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Ud=new En,Od=new Vn(1,1),Fd=new Er(1),Bd=new yr,zd=new Go,kd=new br,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function il(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),Yt(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Yt(t,n)}}function l_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Yt(t,n)}}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function f_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function sl(i){return i.version===0&&(i.compareFunction=Nc,i.needsUpdate=!0),i}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sl(Od):r=Ud,t.setTexture2D(e||r,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sl(Fd):r=kd,t.setTextureCube(e||r,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function S_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}function M_(i,e){i.uniform1fv(this.addr,e)}function b_(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function E_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function T_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function w_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A_(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R_(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function I_(i,e){i.uniform2iv(this.addr,e)}function P_(i,e){i.uniform3iv(this.addr,e)}function L_(i,e){i.uniform4iv(this.addr,e)}function D_(i,e){i.uniform1uiv(this.addr,e)}function N_(i,e){i.uniform2uiv(this.addr,e)}function U_(i,e){i.uniform3uiv(this.addr,e)}function O_(i,e){i.uniform4uiv(this.addr,e)}function F_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sl(Od):o=Ud;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function B_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zd,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=sl(Fd):o=kd;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function k_(i,e,t){let n=this.cache,s=e.length,r=il(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bd,r[o])}function H_(i){switch(i){case 5126:return M_;case 35664:return b_;case 35665:return E_;case 35666:return T_;case 35674:return w_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return I_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return N_;case 36295:return U_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}var Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S_(t.type)}},Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function yd(i,e){i.seq.push(e),i.map[e.id]=e}function G_(i,e,t){let n=i.name,s=n.length;for(Yc.lastIndex=0;;){let r=Yc.exec(n),o=Yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new Zc(a,i,e):new Jc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Kc(a),yd(t,f)),t=f}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);G_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var V_=37297,W_=0;function X_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Sd=new Ke;function q_(i){gt._getMatrix(Sd,gt.workingColorSpace,i);let e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+X_(i.getShaderSource(e),a)}else return r}function Y_(i,e){let t=q_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $_={[gc]:"Linear",[xc]:"Reinhard",[_c]:"Cineon",[yc]:"ACESFilmic",[Sc]:"AgX",[Mc]:"Neutral",[vc]:"Custom"};function Z_(i,e){let t=$_[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var el=new N;function J_(){gt.getLuminanceCoefficients(el);let i=el.x.toFixed(4),e=el.y.toFixed(4),t=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function j_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(i){return i.replace(ey,ty)}function ty(i,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jc(t)}var ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(ny,iy)}function iy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sy={[Ur]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function ry(i){return sy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oy={[Xs]:"ENVMAP_MODE_REFRACTION"};function ay(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ly={[mc]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[kh]:"ENVMAP_BLENDING_ADD"};function cy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ly[i.combine]||"ENVMAP_BLENDING_NONE"}function uy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ry(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ay(t),f=cy(t),g=K_(t),u=j_(r),p=s.createProgram(),_,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Xr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(_=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?lt.tonemapping_pars_fragment:"",t.toneMapping!==ei?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),J_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=jc(o),o=bd(o,t),o=Ed(o,t),a=jc(a),a=bd(a,t),a=Ed(a,t),o=Td(o),a=Td(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=d+_+o,b=d+m+a,v=vd(s,s.VERTEX_SHADER,y),E=vd(s,s.FRAGMENT_SHADER,b);s.attachShader(p,v),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function M(A){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(E)||"",P=D.trim(),I=z.trim(),L=k.trim(),U=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,E);else{let H=Md(s,v,"vertex"),Y=Md(s,E,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+H+`
`+Y)}else P!==""?Ye("WebGLProgram: Program Info Log:",P):(I===""||L==="")&&(X=!1);X&&(A.diagnostics={runnable:U,programLog:P,vertexShader:{log:I,prefix:_},fragmentShader:{log:L,prefix:m}})}s.deleteShader(v),s.deleteShader(E),x=new $s(s,p),S=Q_(s,p)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,V_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var hy=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eu(e),t.set(e,n)),n}},eu=class{constructor(e){this.id=hy++,this.code=e,this.usedTimes=0}};function dy(i){return i===Vi||i===Hr||i===Gr}function fy(i,e,t,n,s,r){let o=new vr,a=new Qc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,C,A,D,z){let k=A.fog,P=D.geometry,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||I,L),X=g[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=Y!==void 0?Y.length:0,ce=0;P.morphAttributes.position!==void 0&&(ce=1),P.morphAttributes.normal!==void 0&&(ce=2),P.morphAttributes.color!==void 0&&(ce=3);let de,q,ue,Ie;if(X){let Re=ni[X];de=Re.vertexShader,q=Re.fragmentShader}else{de=x.vertexShader,q=x.fragmentShader;let Re=a.getVertexShaderStage(x),At=a.getFragmentShaderStage(x);a.update(x,Re,At),ue=Re.id,Ie=At.id}let Fe=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Ue=!!x.map,Qe=!!x.matcap,rt=!!U,te=rt&&U.isPMREMTexture===!0,me=!!x.aoMap,_e=!!x.lightMap,Pe=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Je=!!x.displacementMap,ke=!!x.emissiveMap,ct=!!x.metalnessMap,ut=!!x.roughnessMap,be=x.anisotropy>0,F=x.clearcoat>0,et=x.diffuseRoughness>0,Ve=x.dispersion>0,qe=x.retroreflectivity>0,fe=x.iridescence>0,xt=x.sheen>0,ge=x.transmission>0,He=be&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,T=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,le=et&&!!x.diffuseRoughnessMap,ee=fe&&!!x.iridescenceMap,pe=fe&&!!x.iridescenceThicknessMap,Ee=xt&&!!x.sheenColorMap,j=xt&&!!x.sheenRoughnessMap,Z=!!x.specularMap,xe=!!x.specularColorMap,O=!!x.specularIntensityMap,Q=ge&&!!x.transmissionMap,K=ge&&!!x.thicknessMap,Te=!!x.gradientMap,ye=!!x.alphaMap,Se=x.alphaTest>0,We=!!x.alphaHash,ot=!!x.extensions,he=ei;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(he=i.toneMapping);let Xe=te?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,it={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:q,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:Qe,envMap:rt,envMapMode:rt&&U.mapping,envMapPMREM:te,envMapMaxLod:te?Xe.length-1:null,envMapSize:te?Xe[0].width:null,aoMap:me,lightMap:_e,bumpMap:Pe,normalMap:Me,displacementMap:Je,emissiveMap:ke,normalMapObjectSpace:Me&&x.normalMapType===Vh,normalMapTangentSpace:Me&&x.normalMapType===Pc,packedNormalMap:Me&&x.normalMapType===Pc&&dy(x.normalMap.format),metalnessMap:ct,roughnessMap:ut,anisotropy:be,anisotropyMap:He,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:G,diffuseRoughness:et,diffuseRoughnessMap:le,dispersion:Ve,retroreflection:qe,iridescence:fe,iridescenceMap:ee,iridescenceThicknessMap:pe,sheen:xt,sheenColorMap:Ee,sheenRoughnessMap:j,specularMap:Z,specularColorMap:xe,specularIntensityMap:O,transmission:ge,transmissionMap:Q,thicknessMap:K,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Ws&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:We,combine:x.combine,mapUv:Ue&&u(x.map.channel),aoMapUv:me&&u(x.aoMap.channel),lightMapUv:_e&&u(x.lightMap.channel),bumpMapUv:Pe&&u(x.bumpMap.channel),normalMapUv:Me&&u(x.normalMap.channel),displacementMapUv:Je&&u(x.displacementMap.channel),emissiveMapUv:ke&&u(x.emissiveMap.channel),metalnessMapUv:ct&&u(x.metalnessMap.channel),roughnessMapUv:ut&&u(x.roughnessMap.channel),anisotropyMapUv:He&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&u(x.sheenRoughnessMap.channel),specularMapUv:Z&&u(x.specularMap.channel),specularColorMapUv:xe&&u(x.specularColorMap.channel),specularIntensityMapUv:O&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:ye&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||be),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ue||ye),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:ke&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zt,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(S,x),d(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function d(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=g[x.type],C;if(S){let A=ni[S];C=ad.clone(A.uniforms)}else C=x.uniforms;return C}function b(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new uy(i,S,x,s),c.push(C),h.set(S,C)),C}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function M(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:M}}function py(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function my(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(g){let u=0;return g.isInstancedMesh&&(u+=2),g.isSkinnedMesh&&(u+=1),u}function a(g,u,p,_,m,d){let y=i[e];return y===void 0?(y={id:g.id,object:g,geometry:u,material:p,materialVariant:o(g),groupOrder:_,renderOrder:g.renderOrder,z:m,group:d},i[e]=y):(y.id=g.id,y.object=g,y.geometry=u,y.material=p,y.materialVariant=o(g),y.groupOrder=_,y.renderOrder=g.renderOrder,y.z=m,y.group=d),e++,y}function l(g,u,p,_,m,d,y){y.reversedDepth===!0&&(m=-m);let b=a(g,u,p,_,m,d);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(g,u,p,_,m,d){let y=a(g,u,p,_,m,d);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(g,u){t.length>1&&t.sort(g||my),n.length>1&&n.sort(u||Ad),s.length>1&&s.sort(u||Ad)}function f(){for(let g=e,u=i.length;g<u;g++){let p=i[g];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function gy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rd,i.set(n,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new dt};break;case"SpotLight":t={position:new N,direction:new N,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function _y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yy=0;function vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sy(i){let e=new xy,t=_y(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Tt,o=new Tt;function a(c){let h=0,f=0,g=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let u=0,p=0,_=0,m=0,d=0,y=0,b=0,v=0,E=0,M=0,x=0,S=0,C=0,A=0;c.sort(vy);for(let z=0,k=c.length;z<k;z++){let P=c[z],I=P.color,L=P.intensity,U=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vi?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*L,f+=I.g*L,g+=I.b*L;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],L);A++}else if(P.isSunLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,J=t.get(P);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=X;let ce=Y.getViewportCount();for(let de=0;de<ce;de++)n.sunShadowMatrix[_+de]=Y.getMatrix(de),n.sunShadowCascade[_+de]=Y._cascadeData[de];_+=ce,p++}n.sun[u]=H,u++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,J=t.get(P);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=H,m++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(L),H.distance=U,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[y]=H;let Y=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Y.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[y]=Y.matrix,P.castShadow){let J=t.get(P);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=X,x++}y++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(I).multiplyScalar(L),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=H,b++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let Y=P.shadow,J=t.get(P);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=X,n.pointShadowMatrix[d]=P.shadow.matrix,M++}n.point[d]=H,d++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(L),H.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[v]=H,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=g;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==y||D.rectAreaLength!==b||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=b,n.point.length=d,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,D.sunLength=u,D.directionalLength=m,D.pointLength=d,D.spotLength=y,D.rectAreaLength=b,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=A,n.version=yy++)}function l(c,h){let f=0,g=0,u=0,p=0,_=0,m=0,d=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let E=n.directional[g];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),p++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),u++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:n}}function Cd(i){let e=new Sy(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),s.sort((f,g)=>f.priority-g.priority||f.id-g.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function My(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cd(i),e.set(s,[a])):r>=o.length?(a=new Cd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var by=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ty=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],wy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Id=new Tt,Wr=new N,$c=new N;function Ay(i,e,t){let n=new as,s=new oe,r=new oe,o=new Ft,a=new Qo,l=new ea,c={},h=t.maxTextureSize,f={[Gi]:_n,[_n]:Gi,[zt]:zt},g=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:by,fragmentShader:Ey}),u=g.clone();u.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new un(p,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let d=this.type;this.render=function(M,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===vh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let C=i.getRenderTarget(),A=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(gi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=d!==this.type;k&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(I=>I.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,I=M.length;P<I;P++){let L=M[P],U=L.shadow;if(U===void 0){Ye("WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let X=U.getFrameExtents();s.multiply(X),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,U.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=H,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Vs){if(L.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new gn(s.x,s.y,{format:Vi,type:qn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),U.map.texture.name=L.name+".shadowMap",U.map.depthTexture=new Vn(s.x,s.y,In),U.map.depthTexture.name=L.name+".shadowMapDepth",U.map.depthTexture.format=pi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en}else L.isPointLight?(U.map=new qr(s.x),U.map.depthTexture=new Er(s.x,Xn)):(U.map=new gn(s.x,s.y),U.map.depthTexture=new Vn(s.x,s.y,Xn)),U.map.depthTexture.name=L.name+".shadowMap",U.map.depthTexture.format=pi,this.type===Ur?(U.map.depthTexture.compareFunction=H?Dc:Lc,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let Y=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();L.isPointLight!==!0&&U.updateMatrices(L,S);let J=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let ce=0;ce<Y;ce++){let de=U.getCamera(ce);if(L.isPointLight){let q=U.camera,ue=U.matrix,Ie=L.distance||q.far;Ie!==q.far&&(q.far=Ie,q.updateProjectionMatrix()),Wr.setFromMatrixPosition(L.matrixWorld),q.position.copy(Wr),$c.copy(q.position),$c.add(Ty[ce]),q.up.copy(wy[ce]),q.lookAt($c),q.updateMatrixWorld(),ue.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Id.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Id,q.coordinateSystem,q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(U.map),i.clear());let q=U.getViewport(ce);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(o)}n=U.getFrustum(ce),v(x,S,de,L,J,this.type)}U.isPointLightShadow!==!0&&this.type===Vs&&y(U,S),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(C,A,D)};function y(M,x){let S=e.update(_);g.defines.VSM_SAMPLES!==M.blurSamples&&(g.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,g.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new gn(s.x,s.y,{format:Vi,type:qn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),g.uniforms.shadow_pass.value=M.map.depthTexture,g.uniforms.resolution.value.set(M.map.width,M.map.height),g.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(x,null,S,g,_,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(x,null,S,u,_,null)}function b(M,x,S,C){let A=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=A.uuid,k=x.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let I=P[k];I===void 0&&(I=A.clone(),P[k]=I,x.addEventListener("dispose",E)),A=I}if(A.visible=x.visible,A.wireframe=x.wireframe,C===Vs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=i.properties.get(A);z.light=S}return A}function v(M,x,S,C,A,D){if(M.visible===!1)return;if(M.layers.test(A)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Vs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let P=e.update(M),I=M.material;if(Array.isArray(I)){let L=P.groups;for(let U=0,X=L.length;U<X;U++){let H=L[U],Y=I[H.materialIndex];if(Y&&Y.visible){let J=b(M,Y,C,D);M.onBeforeShadow(i,M,x,S,P,J,H),i.renderBufferDirect(S,null,P,J,M,H),M.onAfterShadow(i,M,x,S,P,J,H)}}}else if(I.visible){let L=b(M,I,C,D);M.onBeforeShadow(i,M,x,S,P,L,null),i.renderBufferDirect(S,null,P,L,M,null),M.onAfterShadow(i,M,x,S,P,L,null)}}let k=M.children;for(let P=0,I=k.length;P<I;P++)v(k[P],x,S,C,A,D)}function E(M){M.target.removeEventListener("dispose",E);for(let S in c){let C=c[S],A=M.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Ry(i,e){function t(){let O=!1,Q=new Ft,K=null,Te=new Ft(0,0,0,0);return{setMask:function(ye){K!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){O=ye},setClear:function(ye,Se,We,ot,he){he===!0&&(ye*=ot,Se*=ot,We*=ot),Q.set(ye,Se,We,ot),Te.equals(Q)===!1&&(i.clearColor(ye,Se,We,ot),Te.copy(Q))},reset:function(){O=!1,K=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,Q=!1,K=null,Te=null,ye=null;return{setReversed:function(Se){if(Q!==Se){let We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Q=Se;let ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return Q},setTest:function(Se){Se?ve(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Se){K!==Se&&!O&&(i.depthMask(Se),K=Se)},setFunc:function(Se){if(Q&&(Se=ed[Se]),Te!==Se){switch(Se){case Co:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Se}},setLocked:function(Se){O=Se},setClear:function(Se){ye!==Se&&(ye=Se,Q&&(Se=1-Se),i.clearDepth(Se))},reset:function(){O=!1,K=null,Te=null,ye=null,Q=!1}}}function s(){let O=!1,Q=null,K=null,Te=null,ye=null,Se=null,We=null,ot=null,he=null;return{setTest:function(Xe){O||(Xe?ve(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Xe){Q!==Xe&&!O&&(i.stencilMask(Xe),Q=Xe)},setFunc:function(Xe,it,Re){(K!==Xe||Te!==it||ye!==Re)&&(i.stencilFunc(Xe,it,Re),K=Xe,Te=it,ye=Re)},setOp:function(Xe,it,Re){(Se!==Xe||We!==it||ot!==Re)&&(i.stencilOp(Xe,it,Re),Se=Xe,We=it,ot=Re)},setLocked:function(Xe){O=Xe},setClear:function(Xe){he!==Xe&&(i.clearStencil(Xe),he=Xe)},reset:function(){O=!1,Q=null,K=null,Te=null,ye=null,Se=null,We=null,ot=null,he=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},f={},g={},u=new WeakMap,p=[],_=null,m=!1,d=null,y=null,b=null,v=null,E=null,M=null,x=null,S=new dt(0,0,0),C=0,A=!1,D=null,z=null,k=null,P=null,I=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=X>=2);let Y=null,J={},ce=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),q=new Ft().fromArray(ce),ue=new Ft().fromArray(de);function Ie(O,Q,K,Te){let ye=new Uint8Array(4),Se=i.createTexture();i.bindTexture(O,Se),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<K;We++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Q+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Se}let Fe={};Fe[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(Us),Pe(!1),Me(cc),ve(i.CULL_FACE),me(gi);function ve(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ne(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function vt(O,Q){return g[O]!==Q?(i.bindFramebuffer(O,Q),g[O]=Q,O===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Q),O===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ue(O,Q){let K=p,Te=!1;if(O){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let ye=O.textures;if(K.length!==ye.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,We=ye.length;Se<We;Se++)K[Se]=i.COLOR_ATTACHMENT0+Se;K.length=ye.length,Te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Te=!0);Te&&i.drawBuffers(K)}function Qe(O){return _!==O?(i.useProgram(O),_=O,!0):!1}let rt={[fs]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};rt[Eh]=i.MIN,rt[Th]=i.MAX;let te={[wh]:i.ZERO,[Ah]:i.ONE,[Rh]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function me(O,Q,K,Te,ye,Se,We,ot,he,Xe){if(O===gi){m===!0&&(Ne(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),O!==Sh){if(O!==d||Xe!==A){if((y!==fs||E!==fs)&&(i.blendEquation(i.FUNC_ADD),y=fs,E=fs),Xe)switch(O){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",O);break}else switch(O){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hc:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",O);break}b=null,v=null,M=null,x=null,S.set(0,0,0),C=0,d=O,A=Xe}return}ye=ye||Q,Se=Se||K,We=We||Te,(Q!==y||ye!==E)&&(i.blendEquationSeparate(rt[Q],rt[ye]),y=Q,E=ye),(K!==b||Te!==v||Se!==M||We!==x)&&(i.blendFuncSeparate(te[K],te[Te],te[Se],te[We]),b=K,v=Te,M=Se,x=We),(ot.equals(S)===!1||he!==C)&&(i.blendColor(ot.r,ot.g,ot.b,he),S.copy(ot),C=he),d=O,A=!1}function _e(O,Q){O.side===zt?Ne(i.CULL_FACE):ve(i.CULL_FACE);let K=O.side===_n;Q&&(K=!K),Pe(K),O.blending===Ws&&O.transparent===!1?me(gi):me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function Me(O){O!==_h?(ve(i.CULL_FACE),O!==z&&(O===cc?i.cullFace(i.BACK):O===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),z=O}function Je(O){O!==k&&(U&&i.lineWidth(O),k=O)}function ke(O,Q,K){O?(ve(i.POLYGON_OFFSET_FILL),(P!==Q||I!==K)&&(P=Q,I=K,o.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Ne(i.POLYGON_OFFSET_FILL)}function ct(O){O?ve(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function ut(O){O===void 0&&(O=i.TEXTURE0+L-1),Y!==O&&(i.activeTexture(O),Y=O)}function be(O,Q,K){K===void 0&&(Y===null?K=i.TEXTURE0+L-1:K=Y);let Te=J[K];Te===void 0&&(Te={type:void 0,texture:void 0},J[K]=Te),(Te.type!==O||Te.texture!==Q)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(O,Q||Fe[O]),Te.type=O,Te.texture=Q)}function F(){let O=J[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function Ve(){try{i.compressedTexImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function qe(){try{i.texSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function fe(){try{i.texSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function He(){try{i.texStorage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function R(){try{i.texStorage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function T(){try{i.texImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function G(){try{i.texImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function le(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function ee(O,Q){f[O]!==Q&&(i.pixelStorei(O,Q),f[O]=Q)}function pe(O){q.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function Ee(O){ue.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ue.copy(O))}function j(O,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let Te=K.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(Q,O.name),i.uniformBlockBinding(Q,Te,Te),K.set(O,Te))}function Z(O,Q,K){let ye=c.get(Q).get(O);l[ye]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ye,K),l[ye]=K)}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,J={},g={},l={},u=new WeakMap,p=[],_=null,m=!1,d=null,y=null,b=null,v=null,E=null,M=null,x=null,S=new dt(0,0,0),C=0,A=!1,D=null,z=null,k=null,P=null,I=null,q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ne,bindFramebuffer:vt,drawBuffers:Ue,useProgram:Qe,setBlending:me,setMaterial:_e,setFlipSided:Pe,setCullFace:Me,setLineWidth:Je,setPolygonOffset:ke,setScissorTest:ct,activeTexture:ut,bindTexture:be,unbindTexture:F,compressedTexImage2D:et,compressedTexImage3D:Ve,texImage2D:T,texImage3D:G,pixelStorei:ee,getParameter:le,updateUBOMapping:j,uniformBlockBinding:Z,texStorage2D:He,texStorage3D:R,texSubImage2D:qe,texSubImage3D:fe,compressedTexSubImage2D:xt,compressedTexSubImage3D:ge,scissor:pe,viewport:Ee,reset:xe}}function Cy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,f=new Set,g,u=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,T){return m?new OffscreenCanvas(R,T):_r("canvas")}function y(R,T,G){let le=1,ee=He(R);if((ee.width>G||ee.height>G)&&(le=G/Math.max(ee.width,ee.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(le*ee.width),Ee=Math.floor(le*ee.height);g===void 0&&(g=d(pe,Ee));let j=T?d(pe,Ee):g;return j.width=pe,j.height=Ee,j.getContext("2d").drawImage(R,0,0,pe,Ee),Ye("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+pe+"x"+Ee+")."),j}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function b(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,T,G,le,ee,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ee;le&&(Ee=e.get("EXT_texture_norm16"),Ee||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=T;if(T===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&Ee&&(j=Ee.R16_EXT),G===i.SHORT&&Ee&&(j=Ee.R16_SNORM_EXT)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),T===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RG16_EXT),G===i.SHORT&&Ee&&(j=Ee.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGB16_EXT),G===i.SHORT&&Ee&&(j=Ee.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),T===i.RGBA){let Z=pe?gr:gt.getTransfer(ee);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=Z===Et?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGBA16_EXT),G===i.SHORT&&Ee&&(j=Ee.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,T){let G;return R?T===null||T===Xn||T===ms?G=i.DEPTH24_STENCIL8:T===In?G=i.DEPTH32F_STENCIL8:T===qs&&(G=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xn||T===ms?G=i.DEPTH_COMPONENT24:T===In?G=i.DEPTH_COMPONENT32F:T===qs&&(G=i.DEPTH_COMPONENT16),G}function S(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){let T=new WeakRef(R);n.get(R).__ref=T,p.add(T),_.register(R,T,T)}function A(R){let T=n.get(R).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function D(R){k(R.target)}function z(R){P(R.target)}function k(R){R.removeEventListener("dispose",D),A(R),L(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function P(R){R.removeEventListener("dispose",z),A(R),X(R)}function I(){for(let R of p){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):k(T))}p.clear(),f.clear()}function L(R){let T=n.get(R);if(T.__webglInit===void 0)return;let G=R.source,le=u.get(G);if(le){let ee=le[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(R),Object.keys(le).length===0&&u.delete(G)}n.remove(R)}function U(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let G=R.source,le=u.get(G);delete le[T.__cacheKey],o.memory.textures--}function X(R){let T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&k(G),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let pe=0;pe<T.__webglFramebuffer[ee].length;pe++)i.deleteFramebuffer(T.__webglFramebuffer[ee][pe]);else i.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)i.deleteFramebuffer(T.__webglFramebuffer[ee]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let le=R.textures;for(let ee=0,pe=le.length;ee<pe;ee++){let Ee=n.get(le[ee]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(le[ee])}n.remove(R)}let H=0;function Y(){H=0}function J(){return H}function ce(R){H=R}function de(){let R=H;return R>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function q(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ue(R,T){let G=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let le=R.image;if(le===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,R,T);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function Ie(R,T){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){_e(G,R,T);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function Fe(R,T){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){_e(G,R,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function ve(R,T){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Pe(G,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}let Ne={[Oo]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},vt={[en]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Ue={[Xh]:i.NEVER,[Nc]:i.ALWAYS,[qh]:i.LESS,[Lc]:i.LEQUAL,[Yh]:i.EQUAL,[Dc]:i.GEQUAL,[$h]:i.GREATER,[Zh]:i.NOTEQUAL};function Qe(R,T){if(T.type===In&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===ga||T.magFilter===Or||T.magFilter===xi||T.minFilter===mn||T.minFilter===ga||T.minFilter===Or||T.minFilter===xi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ne[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ne[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ne[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==Or&&T.minFilter!==xi||T.type===In&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function rt(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",D),C(T));let le=T.source,ee=u.get(le);ee===void 0&&(ee={},u.set(le,ee));let pe=q(T);if(pe!==R.__cacheKey){ee[pe]===void 0&&(ee[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[pe].usedTimes++;let Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&U(T)),R.__cacheKey=pe,R.__webglTexture=ee[pe].texture}return G}function te(R,T,G){return Math.floor(Math.floor(R/G)/T)}function me(R,T,G,le){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,G,le,T.data);else{pe.sort((O,Q)=>O.start-Q.start);let Ee=0;for(let O=1;O<pe.length;O++){let Q=pe[Ee],K=pe[O],Te=Q.start+Q.count,ye=te(K.start,T.width,4),Se=te(Q.start,T.width,4);K.start<=Te+1&&ye===Se&&te(K.start+K.count-1,T.width,4)===ye?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++Ee,pe[Ee]=K)}pe.length=Ee+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let O=0,Q=pe.length;O<Q;O++){let K=pe[O],Te=Math.floor(K.start/4),ye=Math.ceil(K.count/4),Se=Te%T.width,We=Math.floor(Te/T.width),ot=ye,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Se,We,ot,he,G,le,T.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function _e(R,T,G){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);let ee=rt(R,T),pe=T.source;t.bindTexture(le,R.__webglTexture,i.TEXTURE0+G);let Ee=n.get(pe);if(pe.version!==Ee.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let he=gt.getPrimaries(gt.workingColorSpace),Xe=T.colorSpace===yi?null:gt.getPrimaries(T.colorSpace),it=T.colorSpace===yi||he===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Z=y(T.image,!1,s.maxTextureSize);Z=ge(T,Z);let xe=r.convert(T.format,T.colorSpace),O=r.convert(T.type),Q=M(T.internalFormat,xe,O,T.normalized,T.colorSpace,T.isVideoTexture);Qe(le,T);let K,Te=T.mipmaps,ye=T.isVideoTexture!==!0,Se=Ee.__version===void 0||ee===!0,We=pe.dataReady,ot=S(T,Z);if(T.isDepthTexture)Q=x(T.format===_i,T.type),Se&&(ye?t.texStorage2D(i.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Q,Z.width,Z.height,0,xe,O,null));else if(T.isDataTexture)if(Te.length>0){ye&&Se&&t.texStorage2D(i.TEXTURE_2D,ot,Q,Te[0].width,Te[0].height);for(let he=0,Xe=Te.length;he<Xe;he++)K=Te[he],ye?We&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,K.width,K.height,xe,O,K.data):t.texImage2D(i.TEXTURE_2D,he,Q,K.width,K.height,0,xe,O,K.data);T.generateMipmaps=!1}else ye?(Se&&t.texStorage2D(i.TEXTURE_2D,ot,Q,Z.width,Z.height),We&&me(T,Z,xe,O)):t.texImage2D(i.TEXTURE_2D,0,Q,Z.width,Z.height,0,xe,O,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Q,Te[0].width,Te[0].height,Z.depth);for(let he=0,Xe=Te.length;he<Xe;he++)if(K=Te[he],T.format!==Yn)if(xe!==null)if(ye){if(We)if(T.layerUpdates.size>0){let it=Hc(K.width,K.height,T.format,T.type);for(let Re of T.layerUpdates){let At=K.data.subarray(Re*it/K.data.BYTES_PER_ELEMENT,(Re+1)*it/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Re,K.width,K.height,1,xe,At)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,Z.depth,xe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Q,K.width,K.height,Z.depth,0,K.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,K.width,K.height,Z.depth,xe,O,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Q,K.width,K.height,Z.depth,0,xe,O,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ye&&Se&&t.texStorage2D(i.TEXTURE_2D,ot,Q,Te[0].width,Te[0].height);for(let he=0,Xe=Te.length;he<Xe;he++)K=Te[he],T.format!==Yn?xe!==null?ye?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,K.width,K.height,xe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Q,K.width,K.height,0,K.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?We&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,K.width,K.height,xe,O,K.data):t.texImage2D(i.TEXTURE_2D,he,Q,K.width,K.height,0,xe,O,K.data)}else if(T.isDataArrayTexture)if(ye){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Q,Z.width,Z.height,Z.depth),We)if(T.layerUpdates.size>0){let he=Hc(Z.width,Z.height,T.format,T.type);for(let Xe of T.layerUpdates){let it=Z.data.subarray(Xe*he/Z.data.BYTES_PER_ELEMENT,(Xe+1)*he/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,Z.width,Z.height,1,xe,O,it)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,xe,O,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,xe,O,Z.data);else if(T.isData3DTexture)ye?(Se&&t.texStorage3D(i.TEXTURE_3D,ot,Q,Z.width,Z.height,Z.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,xe,O,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,xe,O,Z.data);else if(T.isFramebufferTexture){if(Se)if(ye)t.texStorage2D(i.TEXTURE_2D,ot,Q,Z.width,Z.height);else{let he=Z.width,Xe=Z.height;for(let it=0;it<ot;it++)t.texImage2D(i.TEXTURE_2D,it,Q,he,Xe,0,xe,O,null),he>>=1,Xe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),Z.parentNode!==he){he.appendChild(Z),f.add(T),he.onpaint=Xe=>{let it=Xe.changedElements;for(let Re of f)it.includes(Re.image)&&(Re.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let it=i.RGBA,Re=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Re,At,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(ye&&Se){let he=He(Te[0]);t.texStorage2D(i.TEXTURE_2D,ot,Q,he.width,he.height)}for(let he=0,Xe=Te.length;he<Xe;he++)K=Te[he],ye?We&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe,O,K):t.texImage2D(i.TEXTURE_2D,he,Q,xe,O,K);T.generateMipmaps=!1}else if(ye){if(Se){let he=He(Z);t.texStorage2D(i.TEXTURE_2D,ot,Q,he.width,he.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,O,Z)}else t.texImage2D(i.TEXTURE_2D,0,Q,xe,O,Z);b(T)&&T.mipmapsAutoUpdate===!0&&v(le),Ee.__version=pe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Pe(R,T,G){if(T.image.length!==6)return;let le=rt(R,T),ee=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let pe=n.get(ee);if(ee.version!==pe.__version||le===!0){t.activeTexture(i.TEXTURE0+G);let Ee=gt.getPrimaries(gt.workingColorSpace),j=T.colorSpace===yi?null:gt.getPrimaries(T.colorSpace),Z=T.colorSpace===yi||Ee===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let xe=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let Re=0;Re<6;Re++)!xe&&!O?Q[Re]=y(T.image[Re],!0,s.maxCubemapSize):Q[Re]=O?T.image[Re].image:T.image[Re],Q[Re]=ge(T,Q[Re]);let K=Q[0],Te=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),Se=M(T.internalFormat,Te,ye,T.normalized,T.colorSpace),We=T.isVideoTexture!==!0,ot=pe.__version===void 0||le===!0,he=ee.dataReady,Xe=S(T,K);Qe(i.TEXTURE_CUBE_MAP,T);let it;if(T.isDepthTexture){if(Se=x(T.format===_i,T.type),ot)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,K.width,K.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Se,K.width,K.height,0,Te,ye,null)}else if(xe){We&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Se,K.width,K.height);for(let Re=0;Re<6;Re++){it=Q[Re].mipmaps;for(let At=0;At<it.length;At++){let Kt=it[At];T.format!==Yn?Te!==null?We?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At,0,0,Kt.width,Kt.height,Te,Kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At,Se,Kt.width,Kt.height,0,Kt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At,0,0,Kt.width,Kt.height,Te,ye,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At,Se,Kt.width,Kt.height,0,Te,ye,Kt.data)}}}else{if(it=T.mipmaps,We&&ot){it.length>0&&Xe++;let Re=He(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Se,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(O){We?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Q[Re].width,Q[Re].height,Te,ye,Q[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Se,Q[Re].width,Q[Re].height,0,Te,ye,Q[Re].data);for(let At=0;At<it.length;At++){let Ai=it[At].image[Re].image;We?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At+1,0,0,Ai.width,Ai.height,Te,ye,Ai.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At+1,Se,Ai.width,Ai.height,0,Te,ye,Ai.data)}}else{We?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Te,ye,Q[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Se,Te,ye,Q[Re]);for(let At=0;At<it.length;At++){let Kt=it[At];We?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At+1,0,0,Te,ye,Kt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,At+1,Se,Te,ye,Kt.image[Re])}}}b(T)&&T.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),pe.__version=ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Me(R,T,G,le,ee,pe){let Ee=r.convert(G.format,G.colorSpace),j=r.convert(G.type),Z=M(G.internalFormat,Ee,j,G.normalized,G.colorSpace),xe=n.get(T),O=n.get(G);if(O.__renderTarget=T,!xe.__hasExternalTextures){let Q=Math.max(1,T.width>>pe),K=Math.max(1,T.height>>pe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,pe,Z,Q,K,T.depth,0,Ee,j,null):t.texImage2D(ee,pe,Z,Q,K,0,Ee,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ee,O.__webglTexture,0,qe(T)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ee,O.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){let le=T.depthTexture,ee=le&&le.isDepthTexture?le.type:null,pe=x(T.stencilBuffer,ee),Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(T),pe,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(T),pe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,R)}else{let le=T.textures;for(let ee=0;ee<le.length;ee++){let pe=le[ee],Ee=r.convert(pe.format,pe.colorSpace),j=r.convert(pe.type),Z=M(pe.internalFormat,Ee,j,pe.normalized,pe.colorSpace);fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(T),Z,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(T),Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(R,T,G){let le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(T.depthTexture);ee.__renderTarget=T;let pe=le?T.depthTexture.image[0]:T.depthTexture.image;(!ee.__webglTexture||pe.width!==T.width||pe.height!==T.height)&&(pe.width=T.width,pe.height=T.height,T.depthTexture.needsUpdate=!0),le?ve(T.depthTexture,0):ue(T.depthTexture,0);let Ee=ee.__webglTexture,j=qe(T),Z=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,xe=T.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===pi)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,Z,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,xe,Z,Ee,0);else if(T.depthTexture.format===_i)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,Z,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,xe,Z,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(R){let T=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){let ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",ee)};le.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=le}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)ke(T.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?ke(T.__webglFramebuffer[0],R,0):ke(T.__webglFramebuffer,R,0);else if(G){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),Je(T.__webglDepthbuffer[le],R,!1);else{let ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,pe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Je(T.__webglDepthbuffer,R,!1);else{let ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,T,G){let le=n.get(R);T!==void 0&&Me(le.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ct(R)}function be(R){let T=R.texture,G=n.get(R),le=n.get(T);R.addEventListener("dispose",z),C(R);let ee=R.textures,pe=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,o.memory.textures++),pe){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let Z=0;Z<T.mipmaps.length;Z++)G.__webglFramebuffer[j][Z]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(T.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let j=0,Z=ee.length;j<Z;j++){let xe=n.get(ee[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&fe(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<ee.length;j++){let Z=ee[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let xe=r.convert(Z.format,Z.colorSpace),O=r.convert(Z.type),Q=M(Z.internalFormat,xe,O,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),K=qe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Me(G.__webglFramebuffer[j][Z],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Z);else Me(G.__webglFramebuffer[j],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);b(T)?v(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let j=0,Z=ee.length;j<Z;j++){let xe=ee[j],O=n.get(xe),Q=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,O.__webglTexture),Qe(Q,xe),Me(G.__webglFramebuffer,R,xe,i.COLOR_ATTACHMENT0+j,Q,0),b(xe)&&v(Q)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,le.__webglTexture),Qe(j,T),T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Me(G.__webglFramebuffer[Z],R,T,i.COLOR_ATTACHMENT0,j,Z);else Me(G.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,j,0);b(T)?v(j):T.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ct(R)}function F(R){let T=R.textures;for(let G=0,le=T.length;G<le;G++){let ee=T[G];if(b(ee)&&ee.mipmapsAutoUpdate===!0){let pe=E(R),Ee=n.get(ee).__webglTexture;t.bindTexture(pe,Ee),v(pe),t.unbindTexture()}}}let et=[];function Ve(R){if(R.samples>0){if(fe(R)===!1){let T=R.textures,G=R.width,le=R.height,ee=i.COLOR_BUFFER_BIT,pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(R),j=T.length>1;if(j)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);let O=n.get(T[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,G,le,0,0,G,le,ee,i.NEAREST),l===!0&&(et.length=0,et.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&et.push(pe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[xe]);let O=n.get(T[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function qe(R){return Math.min(s.maxSamples,R.samples)}function fe(R){let T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ge(R,T){let G=R.colorSpace,le=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==mr&&G!==yi&&(gt.getTransfer(G)===Et?(le!==Yn||ee!==yn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",G)),T}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=Y,this.getTextureUnits=J,this.setTextureUnits=ce,this.setTexture2D=ue,this.setTexture2DArray=Ie,this.setTexture3D=Fe,this.setTextureCube=ve,this.rebindTextures=ut,this.setupRenderTarget=be,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=fe,this.dispose=I}function Iy(i,e){function t(n,s=yi){let r,o=gt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===Yn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===va)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Fr||n===Br||n===zr||n===kr)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ea||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Hr||n===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return r.COMPRESSED_R11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===La)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Da||n===Na||n===Ua||n===Oa||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===$a||n===Za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===Ka||n===Gr||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:Py,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,g=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new tu,d={},y=t.getContextAttributes(),b=null,v=null,E=[],M=[],x=new oe,S=null,C=null,A=new pn;A.viewport=new Ft;let D=new pn;D.viewport=new Ft;let z=[A,D],k=new da,P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ue=E[q];return ue===void 0&&(ue=new Bs,E[q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(q){let ue=E[q];return ue===void 0&&(ue=new Bs,E[q]=ue),ue.getGripSpace()},this.getHand=function(q){let ue=E[q];return ue===void 0&&(ue=new Bs,E[q]=ue),ue.getHandSpace()};function L(q){let ue=M.indexOf(q.inputSource);if(ue===-1)return;let Ie=E[ue];Ie!==void 0&&(Ie.update(q.inputSource,q.frame,c||o),Ie.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",X);for(let q=0;q<E.length;q++){let ue=M[q];ue!==null&&(M[q]=null,E[q].disconnect(ue))}P=null,I=null,m.reset();for(let q in d)delete d[q];if(e.setRenderTarget(b),u=null,g=null,f=null,s=null,v=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return g!==null?g:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Fe=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=y.stencil?_i:pi,Fe=y.stencil?ms:Xn);let Ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),g=f.createProjectionLayer(Ne),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),v=new gn(g.textureWidth,g.textureHeight,{format:Yn,type:yn,depthTexture:new Vn(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new gn(u.framebufferWidth,u.framebufferHeight,{format:Yn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let ue=0;ue<q.removed.length;ue++){let Ie=q.removed[ue],Fe=M.indexOf(Ie);Fe>=0&&(M[Fe]=null,E[Fe].disconnect(Ie))}for(let ue=0;ue<q.added.length;ue++){let Ie=q.added[ue],Fe=M.indexOf(Ie);if(Fe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=M.length){M.push(Ie),Fe=Ne;break}else if(M[Ne]===null){M[Ne]=Ie,Fe=Ne;break}if(Fe===-1)break}let ve=E[Fe];ve&&ve.connect(Ie)}}function H(q,ue){ue===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ue.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ue=q.near,Ie=q.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),k.near=D.near=A.near=ue,k.far=D.far=A.far=Ie,(P!==k.near||I!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,I=k.far),k.layers.mask=q.layers.mask|6,A.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Fe=q.parent,ve=k.cameras;H(k,Fe);for(let Ne=0;Ne<ve.length;Ne++)H(ve[Ne],Fe);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),Y(q,k,Fe)};function Y(q,ue,Ie){Ie===null?q.matrix.copy(ue.matrixWorld):(q.matrix.copy(Ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(ue.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&u===null))return l},this.setFoveation=function(q){l=q,g!==null&&(g.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let J=null;function ce(q,ue){if(h=ue.getViewerPose(c||o),p=ue,h!==null){let Ie=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let Fe=!1;Ie.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let Ue=0;Ue<Ie.length;Ue++){let Qe=Ie[Ue],rt=null;if(u!==null)rt=u.getViewport(Qe);else{let me=f.getViewSubImage(g,Qe);rt=me.viewport,Ue===0&&(e.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(v))}let te=z[Ue];te===void 0&&(te=new pn,te.layers.enable(Ue),te.viewport=new Ft,z[Ue]=te),te.matrix.fromArray(Qe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(rt.x,rt.y,rt.width,rt.height),Ue===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(te)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Ue=f.getDepthInformation(Ie[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ue=0;Ue<Ie.length;Ue++){let Qe=Ie[Ue].camera;if(Qe){let rt=d[Qe];rt||(rt=new Tr,d[Qe]=rt);let te=f.getCameraImage(Qe);rt.sourceTexture=te}}}}for(let Ie=0;Ie<E.length;Ie++){let Fe=M[Ie],ve=E[Ie];Fe!==null&&ve!==void 0&&ve.update(Fe,ue,c||o)}J&&J(q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),p=null}let de=new Pd;de.setAnimationLoop(ce),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}},Dy=new Tt,Hd=new Ke;Hd.set(-1,0,0,0,1,0,0,0,1);function Ny(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Bc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),g(m,d),d.isMeshPhysicalMaterial&&u(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_n&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_n&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function g(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,y){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uy(i,e,t,n){let s={},r={};function o(y,b){let v=b.program;n.uniformBlockBinding(y,v,s[y.id])}function a(y,b){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(y,E);let M=e.render.frame;r[y.id]!==M&&(c(y),r[y.id]=M)}function l(y){let b=i.createBuffer(),v=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,x=v.length;M<x;M++){let S=v[M];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],M,C,E);else h(S,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,b,v,E){if(g(y,b,v,E)===!0){let M=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let A=x[C],D=_(A,!0);f(A,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,y.__data)}}function f(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function g(y,b,v,E){let M=y.value,x=b+"_"+v;if(Array.isArray(M)){E[x]===void 0&&(E[x]=[]);let S=E[x],C=!1;for(let A=0;A<M.length;A++)u(M[A],S,A)===!0&&(C=!0);return C}return u(M,E,x)}function u(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let E=b[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let b=y.uniforms,v=0,E=16;for(let x=0,S=b.length;x<S;x++){let C=Array.isArray(b[x])?b[x]:[b[x]];for(let A=0,D=C.length;A<D;A++){let z=C[A],k=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(b[x])||Array.isArray(z.value),I=v;for(let U=0,X=k.length;U<X;U++){let H=k[U],Y=_(H,P),J=v%E,ce=J%Y.boundary,de=J+ce;v+=ce,de!==0&&E-de<Y.storage&&(v+=E-de),U===0&&(I=v),v+=Y.storage}let L=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new L((v-I)/Float32Array.BYTES_PER_ELEMENT),z.__offset=I}}let M=v%E;return M>0&&(v+=E-M),y.__size=v,y.__cache={},this}function _(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let b=y.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:d}}var Oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Fy(){return ti===null&&(ti=new Xo(Oy,16,16,Vi,qn),ti.name="DFG_LUT",ti.minFilter=mn,ti.magFilter=mn,ti.wrapS=Kn,ti.wrapT=Kn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var nl=class{constructor(e={}){let{canvas:t=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1,outputBufferType:u=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=u,m=new Set([Ma,Sa,va]),d=new Set([yn,Xn,qs,ms,_a,ya]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,M=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,z=null,k=null,P=null,I=null;this._outputColorSpace=fn;let L=0,U=0,X=null,H=-1,Y=null,J=new Ft,ce=new Ft,de=null,q=new dt(0),ue=0,Ie=t.width,Fe=t.height,ve=1,Ne=null,vt=null,Ue=new Ft(0,0,Ie,Fe),Qe=new Ft(0,0,Ie,Fe),rt=!1,te=new as,me=new qo,_e=!1,Pe=!1,Me=new Tt,Je=new N,ke=new Ft,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function be(){return X===null?ve:1}let F=n;function et(w,B){return t.getContext(w,B)}let Ve,qe,fe,xt,ge,He,R,T,G,le,ee,pe,Ee,j,Z,xe,O,Q,K,Te,ye,Se,We;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Re,!1),F===null){let B="webgl2";if(F=et(B,w),F===null)throw et(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(w){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),$e("WebGLRenderer: "+w.message),w}function ot(){Ve=new $x(F),Ve.init(),ye=new Iy(F,Ve),qe=new Fx(F,Ve,e,ye),fe=new Ry(F,Ve),qe.reversedDepthBuffer&&g&&fe.buffers.depth.setReversed(!0),k=F.createFramebuffer(),P=F.createFramebuffer(),I=F.createFramebuffer(),xt=new Kx(F),ge=new py,He=new Cy(F,Ve,fe,ge,qe,ye,xt),R=new Yx(A),T=new Qm(F),Se=new Ux(F,T),G=new Zx(F,T,xt,Se),le=new Qx(F,G,T,Se,xt),Q=new jx(F,qe,He),Z=new Bx(ge),ee=new fy(A,R,Ve,qe,Se,Z),pe=new Ny(A,ge),Ee=new gy,j=new My(Ve),O=new Nx(A,R,fe,le,p,l),xe=new Ay(A,le,qe),We=new Uy(F,xt,qe,fe),K=new Ox(F,Ve,xt),Te=new Jx(F,Ve,xt),xt.programs=ee.programs,A.capabilities=qe,A.extensions=Ve,A.properties=ge,A.renderLists=Ee,A.shadowMap=xe,A.state=fe,A.info=xt}_!==yn&&(C=new t_(_,t.width,t.height,a,s,r));let he=new nu(A,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(Ie,Fe,!1))},this.getSize=function(w){return w.set(Ie,Fe)},this.setSize=function(w,B,$=!0){if(he.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=w,Fe=B,t.width=Math.floor(w*ve),t.height=Math.floor(B*ve),$===!0&&(t.style.width=w+"px",t.style.height=B+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ie*ve,Fe*ve).floor()},this.setDrawingBufferSize=function(w,B,$){Ie=w,Fe=B,ve=$,t.width=Math.floor(w*$),t.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===yn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,B,$,V){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,B,$,V),fe.viewport(J.copy(Ue).multiplyScalar(be()).round())},this.getScissor=function(w){return w.copy(Qe)},this.setScissor=function(w,B,$,V){w.isVector4?Qe.set(w.x,w.y,w.z,w.w):Qe.set(w,B,$,V),fe.scissor(ce.copy(Qe).multiplyScalar(be()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){fe.setScissorTest(rt=w)},this.setOpaqueSort=function(w){Ne=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,$=!0){let V=0;if(w){let W=!1;if(X!==null){let Ae=X.texture.format;W=m.has(Ae)}if(W){let Ae=X.texture.type,Oe=d.has(Ae),we=O.getClearColor(),Le=O.getClearAlpha(),Ge=we.r,tt=we.g,pt=we.b;Oe?(y[0]=Ge,y[1]=tt,y[2]=pt,y[3]=Le,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=Ge,b[1]=tt,b[2]=pt,b[3]=Le,F.clearBufferiv(F.COLOR,0,b))}else V|=F.COLOR_BUFFER_BIT}B&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),O.dispose(),Ee.dispose(),j.dispose(),He.dispose(),ge.dispose(),R.dispose(),le.dispose(),G.dispose(),Se.dispose(),We.dispose(),ee.dispose(),he.dispose(),he.removeEventListener("sessionstart",Uu),he.removeEventListener("sessionend",Ou),Ki.stop()};function Xe(w){w.preventDefault(),Uc("WebGLRenderer: Context Lost."),D=!0}function it(){Uc("WebGLRenderer: Context Restored."),D=!1;let w=xt.autoReset,B=xe.enabled,$=xe.autoUpdate,V=xe.needsUpdate,W=xe.type;ot(),xt.autoReset=w,xe.enabled=B,xe.autoUpdate=$,xe.needsUpdate=V,xe.type=W}function Re(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){let B=w.target;B.removeEventListener("dispose",At),Kt(B)}function Kt(w){Ai(w),ge.remove(w)}function Ai(w){let B=ge.get(w).programs;B!==void 0&&(B.forEach(function($){ee.releaseProgram($)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,V,W,Ae){B===null&&(B=ct);let Oe=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=Dp(w,B,$,V,W);fe.setMaterial(V,Oe);let Le=$.index,Ge=1;if(V.wireframe===!0){if(Le=G.getWireframeAttribute($),Le===void 0)return;Ge=2}let tt=$.drawRange,pt=$.attributes.position,Be=tt.start*Ge,mt=(tt.start+tt.count)*Ge;Ae!==null&&(Be=Math.max(Be,Ae.start*Ge),mt=Math.min(mt,(Ae.start+Ae.count)*Ge)),Le!==null?(Be=Math.max(Be,0),mt=Math.min(mt,Le.count)):pt!=null&&(Be=Math.max(Be,0),mt=Math.min(mt,pt.count));let Vt=mt-Be;if(Vt<0||Vt===1/0)return;Se.setup(W,V,we,$,Le);let Pt,Ct=K;if(Le!==null&&(Pt=T.get(Le),Ct=Te,Ct.setIndex(Pt)),W.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*be()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(W.isLine){let rn=V.linewidth;rn===void 0&&(rn=1),fe.setLineWidth(rn*be()),W.isLineSegments?Ct.setMode(F.LINES):W.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else W.isPoints?Ct.setMode(F.POINTS):W.isSprite&&Ct.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let rn=W._multiDrawStarts,ze=W._multiDrawCounts,dn=W._multiDrawCount,St=Le?T.get(Le).bytesPerElement:1,ji=ge.get(V).currentProgram.getUniforms();for(let on=0;on<dn;on++)ji.setValue(F,"_gl_DrawID",on),Ct.render(rn[on]/St,ze[on])}else if(W.isInstancedMesh)Ct.renderInstances(Be,Vt,W.count);else if($.isInstancedBufferGeometry){let rn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ze=Math.min($.instanceCount,rn);Ct.renderInstances(Be,Vt,ze)}else Ct.render(Be,Vt)};function Nu(w,B,$,V){z!==null&&w.isNodeMaterial&&z.setObject(V,w),_e===!0&&Z.setState(w,$,!1),w.transparent===!0&&w.side===zt&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,rr(w,B,V),w.side=Gi,w.needsUpdate=!0,rr(w,B,V),w.side=zt):rr(w,B,V)}this.compile=function(w,B,$=null){$===null&&($=w),z!==null&&z.renderStart(w,B,$),M=j.get($),M.init(B),S.push(M),$.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),w!==$&&w.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),z!==null&&z.updateLights(M.state.lightsArray),Pe=this.localClippingEnabled,_e=Z.init(this.clippingPlanes,Pe),_e===!0&&Z.setGlobalState(this.clippingPlanes,B),z!==null&&xe.render(M.state.shadowsArray,$,B);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){let we=Ae[Oe];Nu(we,$,B,W),V.add(we)}else Nu(Ae,$,B,W),V.add(Ae)}),M=S.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(w,B,$=null){let V=this.compile(w,B,$);return new Promise(W=>{function Ae(){if(V.forEach(function(Oe){let Le=ge.get(Oe).currentProgram;(Le===void 0||Le.isReady())&&V.delete(Oe)}),V.size===0){W(w);return}setTimeout(Ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rl=null;function Pp(w){Rl&&Rl(w)}function Uu(){Ki.stop()}function Ou(){Ki.start()}let Ki=new Pd;Ki.setAnimationLoop(Pp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){Rl=w,he.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},he.addEventListener("sessionstart",Uu),he.addEventListener("sessionend",Ou),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(w,B);let $=he.enabled===!0&&he.isPresenting===!0,V=C!==null&&(X===null||$)&&C.begin(A,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,B,X),M=j.get(w,S.length),M.init(B),M.state.textureUnits=He.getTextureUnits(),S.push(M),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?me.setFromArrayCamera(B):te.setFromProjectionMatrix(Me,Dn,B.reversedDepth),Pe=this.localClippingEnabled,_e=Z.init(this.clippingPlanes,Pe),E=Ee.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Oe=A.xr.getDepthSensingMesh();Oe!==null&&Cl(Oe,B,-1/0,A.sortObjects)}Cl(w,B,0,A.sortObjects),E.finish(),z!==null&&z.updateLights(M.state.lightsArray),A.sortObjects===!0&&E.sort(Ne,vt),ut=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ut&&O.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),_e===!0&&Z.beginShadows();let W=M.state.shadowsArray;if(xe.render(W,w,B),_e===!0&&Z.endShadows(),(V&&C.hasRenderPass())===!1){let Oe=E.opaque,we=E.transmissive;if(M.setupLights(),B.isArrayCamera){let Le=B.cameras;if(we.length>0)for(let Ge=0,tt=Le.length;Ge<tt;Ge++){let pt=Le[Ge];Bu(Oe,we,w,pt)}ut&&O.render(w);for(let Ge=0,tt=Le.length;Ge<tt;Ge++){let pt=Le[Ge];Fu(E,w,pt,pt.viewport)}}else we.length>0&&Bu(Oe,we,w,B),ut&&O.render(w),Fu(E,w,B)}X!==null&&U===0&&(He.updateMultisampleRenderTarget(X),He.updateRenderTargetMipmap(X)),V&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,B),Se.resetDefaultState(),H=-1,Y=null,S.pop(),S.length>0?(M=S[S.length-1],He.setTextureUnits(M.state.textureUnits),_e===!0&&Z.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function Cl(w,B,$,V){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){let Oe=B.isArrayCamera?me:te;if(!w.frustumCulled||w.intersectsFrustum(Oe)){V&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);let we=le.update(w),Le=w.material;Le.visible&&E.push(w,we,Le,$,ke.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Oe=B.isArrayCamera?me:te;if(!w.frustumCulled||w.intersectsFrustum(Oe)){let we=le.update(w),Le=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ke.copy(we.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Le)){let Ge=we.groups;for(let tt=0,pt=Ge.length;tt<pt;tt++){let Be=Ge[tt],mt=Le[Be.materialIndex];mt&&mt.visible&&E.push(w,we,mt,$,ke.z,Be,B)}}else Le.visible&&E.push(w,we,Le,$,ke.z,null,B)}}}let Ae=w.children;for(let Oe=0,we=Ae.length;Oe<we;Oe++)Cl(Ae[Oe],B,$,V)}function Fu(w,B,$,V){let{opaque:W,transmissive:Ae,transparent:Oe}=w;M.setupLightsView($),_e===!0&&Z.setGlobalState(A.clippingPlanes,$),V&&fe.viewport(J.copy(V)),W.length>0&&no(W,B,$),Ae.length>0&&no(Ae,B,$),Oe.length>0&&no(Oe,B,$),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Bu(w,B,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Be=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new gn(1,1,{generateMipmaps:!0,type:Be?qn:yn,minFilter:xi,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ae=M.state.transmissionRenderTarget[V.id],Oe=V.viewport||J;Ae.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);let we=A.getRenderTarget(),Le=A.getActiveCubeFace(),Ge=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor(q),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),ut&&O.render($);let tt=A.toneMapping;A.toneMapping=ei;let pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),_e===!0&&Z.setGlobalState(A.clippingPlanes,V),no(w,$,V),He.updateMultisampleRenderTarget(Ae),He.updateRenderTargetMipmap(Ae),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let mt=0,Vt=B.length;mt<Vt;mt++){let Pt=B[mt],{object:Ct,geometry:rn,material:ze,group:dn}=Pt;if(ze.side===zt&&Ct.layers.test(V.layers)){let St=ze.side;ze.side=_n,ze.needsUpdate=!0,zu(Ct,$,V,rn,ze,dn),ze.side=St,ze.needsUpdate=!0,Be=!0}}Be===!0&&(He.updateMultisampleRenderTarget(Ae),He.updateRenderTargetMipmap(Ae))}A.setRenderTarget(we,Le,Ge),A.setClearColor(q,ue),pt!==void 0&&(V.viewport=pt),A.toneMapping=tt}function no(w,B,$){let V=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Ae=w.length;W<Ae;W++){let Oe=w[W],{object:we,geometry:Le,group:Ge}=Oe,tt=Oe.material;tt.allowOverride===!0&&V!==null&&(tt=V),we.layers.test($.layers)&&zu(we,B,$,Le,tt,Ge)}}function zu(w,B,$,V,W,Ae){z!==null&&W.isNodeMaterial&&z.setObject(w,W),w.onBeforeRender(A,B,$,V,W,Ae),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(A,B,$,V,w,Ae),W.transparent===!0&&W.side===zt&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,A.renderBufferDirect($,B,V,W,w,Ae),W.side=Gi,W.needsUpdate=!0,A.renderBufferDirect($,B,V,W,w,Ae),W.side=zt):A.renderBufferDirect($,B,V,W,w,Ae),w.onAfterRender(A,B,$,V,W,Ae)}function ku(w){let B=0;for(let $ of w)$.texture!==null&&B++;return B}function rr(w,B,$){B.isScene!==!0&&(B=ct);let V=ge.get(w),W=M.state.lights,Ae=M.state.shadowsArray,Oe=W.state.version,we=ee.getParameters(w,W.state,Ae,B,$,M.state.lightProbeGridArray),Le=ee.getProgramCacheKey(we),Ge=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=R.get(w.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",At),Ge=new Map,V.programs=Ge,V.programVariants=new Map);let pt=Ge.get(Le);if(pt!==void 0){if(V.currentProgram===pt&&V.lightsStateVersion===Oe)return Gu(w,we),pt}else we.uniforms=ee.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,$,we),w.onBeforeCompile(we,A),pt=ee.acquireProgram(we,Le),Ge.set(Le,pt),V.uniforms=we.uniforms;let Be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Z.uniform),Gu(w,we),V.needsLights=Up(w),V.lightsStateVersion=Oe,V.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.sunLights.value=W.state.sun,Be.sunLightShadows.value=W.state.sunShadow,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.sunShadowMatrix.value=W.state.sunShadowMatrix,Be.sunShadowCascade.value=W.state.sunShadowCascade,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=ku(M.state.lightProbeGridArray),V.currentProgram=pt,V.uniformsList=null,pt}function Lp(w,B,$,V,W){let Ae=ge.get(w),Oe=Ae.currentProgram.id+","+V+","+W,we=Ae.programVariants.get(Oe);return we===void 0?(we=rr(w,B,$),Ae.programVariants.set(Oe,we)):(Ae.currentProgram=we,Ae.uniformsList=null,Ae.outputColorSpace=V,Ae.toneMapping=W),we}function Hu(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Gu(w,B){let $=ge.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Dp(w,B,$,V,W){B.isScene!==!0&&(B=ct),He.resetTextureUnits();let Ae=B.fog,Oe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,we=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:gt.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ge=R.get(V.envMap||Oe,Le),tt=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pt=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Vt=!!$.morphAttributes.color,Pt=ei;V.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Pt=A.toneMapping);let Ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rn=Ct!==void 0?Ct.length:0,ze=ge.get(V),dn=M.state.lights;if(_e===!0&&(Pe===!0||w!==Y)){let Ut=w===Y&&V.id===H;Z.setState(V,w,Ut)}let St=!1,ji=!1;V.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==dn.state.version||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==Ge||V.fog===!0&&ze.fog!==Ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Z.numPlanes||ze.numIntersection!==Z.numIntersection)||ze.vertexAlphas!==tt||ze.vertexTangents!==pt||ze.morphTargets!==Be||ze.morphNormals!==mt||ze.morphColors!==Vt||ze.morphTargetsCount!==rn||ze.numLightProbeGrids!==ku(M.state.lightProbeGridArray)?St=!0:(ze.outputColorSpace!==we||ze.toneMapping!==Pt)&&(ji=!0):(St=!0,ze.__version=V.version);let on=ze.currentProgram;(St===!0||ji===!0)&&(on=ji===!0?Lp(V,B,W,we,Pt):rr(V,B,W),z&&V.isNodeMaterial&&z.onUpdateProgram(V,on,ze));let io=!1,Ri=!1,Qi=!1,_t=on.getUniforms(),sn=ze.uniforms;if(fe.useProgram(on.program)&&(io=!0,Ri=!0,Qi=!0),V.id!==H&&(H=V.id,Ri=!0),io||Y!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",w.projectionMatrix),_t.setValue(F,"viewMatrix",w.matrixWorldInverse);let jt=_t.map.cameraPosition;jt!==void 0&&jt.setValue(F,Je.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Ri=!0,Qi=!0)}if(ze.needsLights&&(dn.state.sunShadowMap.length>0&&_t.setValue(F,"sunShadowMap",dn.state.sunShadowMap,He),dn.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",dn.state.directionalShadowMap,He),dn.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",dn.state.spotShadowMap,He),dn.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",dn.state.pointShadowMap,He)),W.isSkinnedMesh){_t.setOptional(F,W,"bindMatrix"),_t.setOptional(F,W,"bindMatrixInverse");let Ut=W.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),_t.setValue(F,"boneTexture",Ut.boneTexture,He))}W.isBatchedMesh&&(_t.setOptional(F,W,"batchingTexture"),_t.setValue(F,"batchingTexture",W._matricesTexture,He),_t.setOptional(F,W,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",W._indirectTexture,He),_t.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",W._colorsTexture,He));let Bn=$.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Q.update(W,$,on),(Ri||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,_t.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(sn.envMapIntensity.value=B.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Fy()),Ri){if(_t.setValue(F,"toneMappingExposure",A.toneMappingExposure),ze.needsLights&&Np(sn,Qi),Ae&&V.fog===!0&&pe.refreshFogUniforms(sn,Ae),pe.refreshMaterialUniforms(sn,V,ve,Fe,M.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.numLightProbeGrids>0){let Ut=v,jt=0;for(let ai of M.state.lightProbeGridArray)ai.texture!==null&&(Ut.textures[jt]=ai.texture,Ut.min[jt]=ai.boundingBox.min,Ut.max[jt]=ai.boundingBox.max,Ut.resolution[jt]=ai.resolution,jt++);for(let ai in Ut)Ut[ai].length=jt;sn.probesSH.value=Ut.textures,sn.probesMin.value=Ut.min,sn.probesMax.value=Ut.max,sn.probesResolution.value=Ut.resolution}$s.upload(F,Hu(ze),sn,He)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($s.upload(F,Hu(ze),sn,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(F,"center",W.center),_t.setValue(F,"modelViewMatrix",W.modelViewMatrix),_t.setValue(F,"normalMatrix",W.normalMatrix),_t.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ut=V.uniformsGroups;for(let jt=0,ai=Ut.length;jt<ai;jt++){let Wu=Ut[jt];We.update(Wu,on),We.bind(Wu,on)}}return on}function Np(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Up(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,B,$){let V=ge.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ge.get(w.texture).__webglTexture=B,ge.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let $=ge.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){X=w,L=B,U=$;let V=null,W=!1,Ae=!1;if(w){let we=ge.get(w);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(F.FRAMEBUFFER,we.__webglFramebuffer),J.copy(w.viewport),ce.copy(w.scissor),de=w.scissorTest,fe.viewport(J),fe.scissor(ce),fe.setScissorTest(de),H=-1;return}else if(we.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(we.__hasExternalTextures)He.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let tt=w.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&ge.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let Ge=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?V=Ge[B][$]:V=Ge[B],W=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?V=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[$]:V=Ge,J.copy(w.viewport),ce.copy(w.scissor),de=w.scissorTest}else J.copy(Ue).multiplyScalar(ve).floor(),ce.copy(Qe).multiplyScalar(ve).floor(),de=rt;if($!==0&&(V=k),fe.bindFramebuffer(F.FRAMEBUFFER,V)&&fe.drawBuffers(w,V),fe.viewport(J),fe.scissor(ce),fe.setScissorTest(de),W){let we=ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,$)}else if(Ae){let we=B;for(let Le=0;Le<w.textures.length;Le++){let Ge=ge.get(w.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Ge.__webglTexture,$,we)}}else if(w!==null&&$!==0){let we=ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,$)}H=-1};function Vu(w){let B=ge.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=qe.textureFormatReadable(w.format),B.__typeReadable=qe.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,$,V,W,Ae,Oe,we=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Le=Le[Oe],Array.isArray(Le)&&(Le=Le[0])),Le){fe.bindFramebuffer(F.FRAMEBUFFER,Le);try{let Ge=w.textures[we],tt=Ge.format,pt=Ge.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we);let Be=Vu(Ge);if(Be.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-V&&$>=0&&$<=w.height-W&&F.readPixels(B,$,V,W,ye.convert(tt),ye.convert(pt),Ae)}finally{let Ge=X!==null?ge.get(X).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,V,W,Ae,Oe,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Le=Le[Oe],Array.isArray(Le)&&(Le=Le[0])),Le)if(B>=0&&B<=w.width-V&&$>=0&&$<=w.height-W){fe.bindFramebuffer(F.FRAMEBUFFER,Le);let Ge=w.textures[we],tt=Ge.format,pt=Ge.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we);let Be=Vu(Ge);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Ae.byteLength,F.STREAM_READ),F.readPixels(B,$,V,W,ye.convert(tt),ye.convert(pt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Vt=X!==null?ge.get(X).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Vt);let Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qh(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ae),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(mt),F.deleteSync(Pt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,$=0){let V=Math.pow(2,-$),W=Math.floor(w.image.width*V),Ae=Math.floor(w.image.height*V),Oe=B!==null?B.x:0,we=B!==null?B.y:0;He.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Oe,we,W,Ae),fe.unbindTexture()},this.copyTextureToTexture=function(w,B,$=null,V=null,W=0,Ae=0){let Oe,we,Le,Ge,tt,pt,Be,mt,Vt,Pt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if($!==null)Oe=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Ge=$.min.x,tt=$.min.y,pt=$.isBox3?$.min.z:0;else{let _t=Math.pow(2,-W);Oe=Math.floor(Pt.width*_t),we=Math.floor(Pt.height*_t),w.isDataArrayTexture?Le=Pt.depth:w.isData3DTexture?Le=Math.floor(Pt.depth*_t):Le=1,Ge=0,tt=0,pt=0}V!==null?(Be=V.x,mt=V.y,Vt=V.z):(Be=0,mt=0,Vt=0);let Ct=ye.convert(B.format),rn=ye.convert(B.type),ze;B.isData3DTexture?(He.setTexture3D(B,0),ze=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(He.setTexture2DArray(B,0),ze=F.TEXTURE_2D_ARRAY):(He.setTexture2D(B,0),ze=F.TEXTURE_2D),fe.activeTexture(F.TEXTURE0),fe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),fe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),fe.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let dn=fe.getParameter(F.UNPACK_ROW_LENGTH),St=fe.getParameter(F.UNPACK_IMAGE_HEIGHT),ji=fe.getParameter(F.UNPACK_SKIP_PIXELS),on=fe.getParameter(F.UNPACK_SKIP_ROWS),io=fe.getParameter(F.UNPACK_SKIP_IMAGES);fe.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),fe.pixelStorei(F.UNPACK_SKIP_ROWS,tt),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,pt);let Ri=w.isDataArrayTexture||w.isData3DTexture,Qi=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let _t=ge.get(w),sn=ge.get(B),Bn=ge.get(_t.__renderTarget),Ut=ge.get(sn.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,Bn.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let jt=0;jt<Le;jt++)Ri&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.get(w).__webglTexture,W,pt+jt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.get(B).__webglTexture,Ae,Vt+jt)),F.blitFramebuffer(Ge,tt,Ge+Oe,tt+we,Be,mt,Be+Oe,mt+we,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||ge.has(w)){let _t=ge.get(w),sn=ge.get(B);fe.bindFramebuffer(F.READ_FRAMEBUFFER,P),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let Bn=0;Bn<Le;Bn++)Ri?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,W,pt+Bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,W),Qi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,Ae,Vt+Bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,Ae),W!==0?F.blitFramebuffer(Ge,tt,Ge+Oe,tt+we,Be,mt,Be+Oe,mt+we,F.COLOR_BUFFER_BIT,F.NEAREST):Qi?F.copyTexSubImage3D(ze,Ae,Be,mt,Vt+Bn,Ge,tt,Oe,we):F.copyTexSubImage2D(ze,Ae,Be,mt,Ge,tt,Oe,we);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Qi?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(ze,Ae,Be,mt,Vt,Oe,we,Le,Ct,rn,Pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,Ae,Be,mt,Vt,Oe,we,Le,Ct,Pt.data):F.texSubImage3D(ze,Ae,Be,mt,Vt,Oe,we,Le,Ct,rn,Pt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ae,Be,mt,Oe,we,Ct,rn,Pt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ae,Be,mt,Pt.width,Pt.height,Ct,Pt.data):F.texSubImage2D(F.TEXTURE_2D,Ae,Be,mt,Oe,we,Ct,rn,Pt);fe.pixelStorei(F.UNPACK_ROW_LENGTH,dn),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,ji),fe.pixelStorei(F.UNPACK_SKIP_ROWS,on),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,io),Ae===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&F.generateMipmap(ze),fe.unbindTexture()},this.initRenderTarget=function(w){ge.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){L=0,U=0,X=null,fe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var rl=class extends Ht{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new oe(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Js=new N,Gd=new Tt,Vd=new Tt,Wd=new N,Xd=new N,ol=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Gd.copy(_.matrixWorldInverse),Vd.multiplyMatrices(_.projectionMatrix,Gd),h(p,p,_),this.sortObjects&&u(p)},this.setSize=function(p,_){n=p,s=_,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,m=p.children.length;_<m;_++)c(p.children[_])}function h(p,_,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Js.setFromMatrixPosition(p.matrixWorld),Js.applyMatrix4(Vd);let d=Js.z>=-1&&Js.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=d===!0?"":"none",d===!0){p.onBeforeRender(t,_,m);let v=100*p.center.x,E=100*p.center.y;y.style.transformOrigin=`${v}% ${E}%`;let M=-p.rotation2D,x=Js.x*r+r,S=-Js.y*o+o;y.style.transform=`translate(${-v}%, ${-E}%) translate(${x}px, ${S}px) rotate(${M}rad)`,y.parentNode!==l&&l.appendChild(y),p.onAfterRender(t,_,m)}let b={distanceToCameraSquared:f(m,p)};a.objects.set(p,b)}for(let d=0,y=p.children.length;d<y;d++)h(p.children[d],_,m)}function f(p,_){return Wd.setFromMatrixPosition(p.matrixWorld),Xd.setFromMatrixPosition(_.matrixWorld),Wd.distanceToSquared(Xd)}function g(p){let _=[];return p.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function u(p){let _=g(p).sort(function(d,y){if(d.renderOrder!==y.renderOrder)return y.renderOrder-d.renderOrder;let b=a.objects.get(d).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return b-v}),m=_.length;for(let d=0,y=_.length;d<y;d++)_[d].element.style.zIndex=m-d}}};var qd=new N,By=new cn,Yd=new N,al=class extends Ht{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ii=new Tt,zy=new Tt,ll=class{constructor(e={}){let t=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(m,d){let y=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let b,v;d.isOrthographicCamera&&(b=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);let E=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,M=d.isOrthographicCamera?`scale( ${E} )scale(`+y+")translate("+f(b)+"px,"+f(v)+"px)"+g(d.matrixWorldInverse):`scale( ${E} )translateZ(`+y+"px)"+g(d.matrixWorldInverse),S=(d.isPerspectiveCamera?"perspective("+y+"px) ":"")+M+"translate("+r+"px,"+o+"px)";a.camera.style!==S&&(h.style.transform=S,a.camera.style=S),_(m,m,d,M)},this.setSize=function(m,d){n=m,s=d,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=d+"px",c.style.width=m+"px",c.style.height=d+"px",h.style.width=m+"px",h.style.height=d+"px"};function f(m){return Math.abs(m)<1e-10?0:m}function g(m){let d=m.elements;return"matrix3d("+f(d[0])+","+f(-d[1])+","+f(d[2])+","+f(d[3])+","+f(d[4])+","+f(-d[5])+","+f(d[6])+","+f(d[7])+","+f(d[8])+","+f(-d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(-d[13])+","+f(d[14])+","+f(d[15])+")"}function u(m){let d=m.elements;return"translate(-50%,-50%)"+("matrix3d("+f(d[0])+","+f(d[1])+","+f(d[2])+","+f(d[3])+","+f(-d[4])+","+f(-d[5])+","+f(-d[6])+","+f(-d[7])+","+f(d[8])+","+f(d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(d[13])+","+f(d[14])+","+f(d[15])+")")}function p(m){m.isCSS3DObject&&(m.element.style.display="none");for(let d=0,y=m.children.length;d<y;d++)p(m.children[d])}function _(m,d,y,b){if(m.visible===!1){p(m);return}if(m.isCSS3DObject){let v=m.layers.test(y.layers)===!0,E=m.element;if(E.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(t,d,y);let M;m.isCSS3DSprite?(ii.copy(y.matrixWorldInverse),ii.transpose(),m.rotation2D!==0&&ii.multiply(zy.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(qd,By,Yd),ii.setPosition(qd),ii.scale(Yd),ii.elements[3]=0,ii.elements[7]=0,ii.elements[11]=0,ii.elements[15]=1,M=u(ii)):M=u(m.matrixWorld);let x=a.objects.get(m);if(x===void 0||x.style!==M){E.style.transform=M;let S={style:M};a.objects.set(m,S)}E.parentNode!==h&&h.appendChild(E),m.onAfterRender(t,d,y)}}for(let v=0,E=m.children.length;v<E;v++)_(m.children[v],d,y,b)}}};var De=Math.PI/180;function re(i,e,t=0){return new N(i*Math.sin(e*De),t,-i*Math.cos(e*De))}function Bt(i,e,t=.025){let n=new us(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:1,curveSegments:48});return n.rotateX(Math.PI/2),n.translate(0,-t,0),n}var ky=["name","create","defaults","stopState","shots","defaultShot","lists"];function $d(i){let e=ky.filter(t=>i[t]===void 0);if(e.length)throw new Error(`defineScene(${i.name||"?"}): missing ${e.join(", ")}`);return{camera:()=>({fov:22,near:.1,far:300}),roles:{energy:"energy",accent:"accent",soft:"soft"},holdOnBeat:[],shotKinds:{},schema:{},...i}}function Ks(i){if(!i.name||typeof i.build!="function")throw new Error("defineSet: a set needs a name and build()");return i}function cl(i){let e={};return Object.keys(i).forEach(t=>e[t]=i[t]&&typeof i[t]=="object"?cl(i[t]):i[t]),e}function iu(i,e,t){let n={};return Object.keys(i).forEach(s=>{let r=i[s];n[s]=r&&typeof r=="object"?iu(r,e[s],t):r+(e[s]-r)*t}),n}function $t(i,e,t,n,s=0){return{pos:re(t*Math.cos(e*De),i,t*Math.sin(e*De)).add(n),target:n,roll:s}}function Un(i,e,t=0){return re(e,i-90,t)}function Hy(i){return $t(i.az,i.elev,i.dist,i.at.clone().add(Un(i.az,i.k)),i.roll||0)}function Jd(i,e={}){let t=i.shots||{},n=i.shotKinds||{},s=i.defaultShot||Object.keys(t)[0];return function(o,a){if(t[o])return t[o];if(e[o])return Hy(e[o]);let l=o.indexOf(":"),c=l<0?o:o.slice(0,l);if(n[c]){let h=n[c](l<0?"":o.slice(l+1),a);if(h)return h}return t[s]}}function su(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Zd(i){return{r:Math.hypot(i.x,i.z),a:Math.atan2(i.x,-i.z),y:i.y}}function Kd(i,e,t){let n=Zd(i.pos),s=Zd(e.pos),r=s.a-n.a;r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI);let o=n.r+(s.r-n.r)*t,a=n.a+r*t,l=new N(o*Math.sin(a),n.y+(s.y-n.y)*t,-o*Math.cos(a)),c=(i.roll||0)+((e.roll||0)-(i.roll||0))*t;return{pos:l,target:i.target.clone().lerp(e.target,t),roll:c}}var ru={};function tf(i=[]){ru=Object.fromEntries(i.map(e=>[e.id,e.text]))}var nf=i=>ru[i]??i;function xs(i,e,t=""){let n=document.createElement("div");n.className=`label ${t}`.trim();let s=document.createElement("span");s.className="label-text",s.textContent=nf(i),n.appendChild(s);let r=new rl(n);return r.userData.group=e,r.center.set(.5,.5),r}function vn(i,e,t="",n="",s=""){let r=document.createElement("div");if(r.className=`label lead ${t}`.trim(),r.innerHTML='<svg class="lead-line"><polyline points="0,0 0,0" pathLength="1"/><circle r="2.5"/></svg><span class="lead-box"><span class="lead-text"></span></span>',r.querySelector(".lead-text").textContent=nf(i),n){let a=document.createElement("span");a.className="lead-note",a.textContent=n,r.querySelector(".lead-box").appendChild(a)}let o=new Ht;return o.userData.group=e,o.userData.noteGroup=s,o.userData.leader=r,i in ru&&(o.userData.key=i),o}function sf(i,e){let t=0;i.traverse(n=>{let s=n.isCSS2DObject||n.isCSS3DObject?n.element:n.userData.leader;if(!s||!n.userData.group)return;let o=[].concat(n.userData.group).some(a=>e.includes(a));o&&n.userData.leader&&!s.classList.contains("is-on")&&s.style.setProperty("--lead-i",t++),s.classList.toggle("is-on",o),n.userData.noteGroup&&s.classList.toggle("show-note",e.includes(n.userData.noteGroup))})}function rf(i){return i.filter(e=>e.style.display!=="none").map(e=>[e,e.getBoundingClientRect().right])}var jd=new WeakMap;function of(i){let e=new Map;if(!i.length)return e;let t=Math.min(...i.map(([,n])=>n));return i.forEach(([n,s])=>{let r=Number((t-s).toFixed(1));e.set(n,r-(jd.get(n)||0)),jd.set(n,r),n.firstChild.style.transform=`translateX(${r.toFixed(1)}px)`}),e}var ul=new N,hl=new N;function af(i,e){i.forEach(t=>{let n=t.userData.arc;if(!t.element.classList.contains("is-on"))return;let s=t.parent;ul.copy(re(n.r,n.a-2,n.y)),hl.copy(re(n.r,n.a+2,n.y)),s.localToWorld(ul).project(e),s.localToWorld(hl).project(e);let r=Math.atan2(-(hl.y-ul.y),(hl.x-ul.x)*e.aspect)*180/Math.PI;r>90&&(r-=180),r<=-90&&(r+=180),t.element.firstChild.style.transform=`rotate(${r.toFixed(1)}deg)`})}var Qd=new N,ef=new N,Gy=new cn;function lf(i,e){i.forEach(t=>{if(!t.element.classList.contains("is-on"))return;t.getWorldPosition(ef),Qd.set(0,0,1).applyQuaternion(t.getWorldQuaternion(Gy));let n=Qd.dot(ef.sub(e.position).negate())>0;t.element.style.visibility=n?"":"hidden"})}function Sn(i){return(i||"").split(",").map(e=>e.trim()).filter(Boolean)}function cf(i,e){return[...i.querySelectorAll(":scope > .stop")].map((t,n)=>({el:t,index:n,data:t.dataset,beats:[...t.querySelectorAll(":scope > .beat")].map(s=>s.dataset),card:t.querySelector(".card"),anchor:new N,state:e(t.dataset)}))}function $r(i,e){return Object.assign({},i.data,i.beats[e]||{})}function uf(i){let e={};return Sn(i).forEach(t=>{let[n,s]=t.split("=");e[n]=Number(s)||0}),e}function hf(i){let e={};return Sn(i).forEach(t=>{let[n,s]=t.split("=");s&&(e[n]=s.split("/").map(Number))}),e}var Vy=(i,e)=>i===void 0||i===""?e:Number(i);function df(i,e,t,{portals:n=[],pairs:s=[],leads:r={},attach:o=null}={}){let a=new se;a.name="sets";let l=i.filter(b=>e.includes(b.name)).map(b=>({def:b,...b.build()})),c=Object.fromEntries(l.map(b=>[b.def.name,b.group])),h=s.filter(({sets:[b,v]})=>c[b]&&c[v]).map(({sets:[b,v],pivot:E})=>{let M=new se;return M.name=`turntable:${b}:${v}`,M.position.z=E,c[b].position.z=-E,c[v].position.z=E,c[v].rotation.y=Math.PI,a.add(M),{table:M,a:b,b:v}});Object.entries(c).forEach(([b,v])=>{v.name=`set:${b}`,v.visible=!1;let E=h.find(M=>M.a===b||M.b===b);(E?E.table:a).add(v)});let f=null,g=o&&c[o.set]?o.build(t):null;Wy(l,g?o.points:null,t,r),l.forEach(b=>b.finish?.());let u=Object.assign({},...l.map(b=>b.def.pose||{}),g?o.pose:{}),p=Object.keys(u).filter(b=>!u[b].list),_=Object.keys(u).filter(b=>u[b].list),m=Object.fromEntries(p.map(b=>[b,u[b].default??0]));m.turn=0;let d={...m},y=Object.fromEntries(_.map(b=>[b,[]]));return{group:a,names:Object.keys(c),show(b,v){f=b,Object.entries(c).forEach(([M,x])=>x.visible=M===b);let E=h.find(M=>M.a===b||M.b===b);E&&(d.turn=b===E.b?1:0),l.forEach(M=>Object.entries(M.parts||{}).forEach(([x,S])=>S.visible=v.includes(x))),g&&Object.entries(g.parts).forEach(([M,x])=>x.visible=b===o.set&&v.includes(M))},joined(b,v){return b!==v&&s.some(E=>E.sets.includes(b)&&E.sets.includes(v))},portal(b,v){let E=n.find(M=>b!==v&&M.sets.includes(b)&&M.sets.includes(v));return E?{out:E.shots[E.sets.indexOf(b)],in:E.shots[E.sets.indexOf(v)]}:null},target(b){_.forEach(v=>y[v]=Sn(b[v])),p.forEach(v=>{let E=Vy(b[v],u[v].default??0);Number.isFinite(E)&&(d[v]=E)})},update(b){let v=!1;return Object.keys(m).forEach(E=>{let M=d[E]-m[E];Math.abs(M)<.001*(u[E]?.scale||1)?m[E]=d[E]:(m[E]+=M*b,v=!0)}),l.forEach(E=>E.update?.(m,y)),g?.update?.(m,y),h.forEach(({table:E,a:M,b:x})=>{E.rotation.y=Math.PI*m.turn;let S=m.turn>0&&m.turn<1;(f===M||f===x)&&(c[M].visible=f===M||S,c[x].visible=f===x||S)}),v}}}function Wy(i,e,t,n){let s=(r,o)=>Object.entries(o||{}).forEach(([a,[l,c,h]])=>{if(!n[a])return;let[f,g=""]=[].concat(n[a]),u=vn(f,[a,...h],"label-set",g,g?"notes":"");u.userData.key=a,u.userData.reach=1.4,u.position.copy(c),(l&&(r.getObjectByName(l)||t.getObjectByName(l))||r).add(u)});i.forEach(r=>s(r.group,r.def.points)),s(t,e)}var si={part:0,energy:1,ink:2,soft:3,accent:4},pf={value:-10},mf={value:new oe(-1e3,1e3)};function gf(i){pf.value=i}function xf(i,e){mf.value.set(i,e)}var _f={value:new N(0,1,0)};function yf(i){return new Rn({glslVersion:Vr,uniforms:{lightDir:_f,role:{value:i},dim:{value:0},charge:{value:0},lag:{value:0},pulse:pf,pulseBand:mf,clipY:{value:new oe(-1e6,1e6)}},vertexShader:`
      varying vec3 vN; varying vec3 vW;
      void main() {
        vN = normalize(normalMatrix * normal);
        vW = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 lightDir; uniform float role; uniform float dim; uniform float charge; uniform float pulse;
      uniform float lag; uniform vec2 pulseBand; uniform vec2 clipY;
      layout(location = 0) out highp vec4 gLit;
      layout(location = 1) out highp vec4 gNormal;
      varying vec3 vN; varying vec3 vW;
      void main() {
        #ifdef CLIP_Y
        if (vW.y < clipY.x || vW.y > clipY.y) discard;
        #endif
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        // lag delays the wave on a part, so context reads as flowing from one part to the next
        float d = length(vW.xz) + lag - pulse;
        float wave = charge * step(-0.28, d) * step(d, 0.06) * step(pulseBand.x, vW.y) * step(vW.y, pulseBand.y);
        gLit = vec4(max(dot(n, lightDir), 0.0), (wave > 0.5 ? 1.0 : role) / 4.0, dim * (1.0 - wave), 1.0);
        gNormal = vec4(n * 0.5 + 0.5, 1.0);
      }`})}var Xy=`
  uniform sampler2D tLit; uniform sampler2D tNorm; uniform sampler2D tDepth;
  uniform vec2 res; uniform float px; uniform float near; uniform float far;
  uniform vec3 lo; uniform vec3 hi; uniform vec3 line; uniform vec3 energyLo; uniform vec3 energyHi; uniform vec3 energyLine;
  uniform vec3 softLo; uniform vec3 softHi; uniform vec3 softLine; uniform float stipple;
  uniform vec3 accentLo; uniform vec3 accentHi; uniform vec3 accentLine;
  uniform float dimInk; uniform float dimAlpha;
  varying vec2 vUv;

  float viewZ(vec2 uv) {
    float z = texture2D(tDepth, uv).x * 2.0 - 1.0;
    return 2.0 * near * far / (far + near - z * (far - near));
  }

  void main() {
    vec4 L = texture2D(tLit, vUv);
    vec3 n0 = texture2D(tNorm, vUv).xyz * 2.0 - 1.0;
    float d0 = viewZ(vUv);

    // Two line weights: silhouettes and depth jumps drawn wide, creases and chamfers drawn fine
    float sil = 0.0, crease = 0.0;
    float eDim = L.b;
    for (int i = 0; i < 8; i++) {
      float a = float(i) * 0.785398;
      vec2 dir = vec2(cos(a), sin(a));
      vec2 o1 = dir * 1.5 * px / res;
      vec4 l1 = texture2D(tLit, vUv + o1);
      float k = abs(l1.a - L.a);
      if (l1.a > 0.5 && L.a > 0.5) k = max(k, smoothstep(0.012, 0.03, abs(viewZ(vUv + o1) - d0) / d0));
      if (k > sil) { sil = k; eDim = l1.a > 0.5 && L.a > 0.5 ? min(L.b, l1.b) : (L.a > 0.5 ? L.b : l1.b); }
      vec2 o2 = dir * 0.8 * px / res;
      vec4 l2 = texture2D(tLit, vUv + o2);
      if (l2.a > 0.5 && L.a > 0.5) {
        vec3 n = texture2D(tNorm, vUv + o2).xyz * 2.0 - 1.0;
        crease = max(crease, smoothstep(0.12, 0.3, 1.0 - dot(n, n0)));
        crease = max(crease, step(0.05, abs(l2.g - L.g)));
      }
    }
    float e = max(sil, crease * 0.7);

    float role = floor(L.g * 4.0 + 0.5);
    bool accent = role > 3.5;
    bool soft = role > 2.5 && !accent;
    bool energy = (role > 0.5 && role < 1.5) || soft || accent;
    vec3 ink = accent ? accentLine : soft ? softLine : energy ? energyLine : line;
    ink = mix(ink, mix(line, hi, dimInk), eDim);
    vec4 c = vec4(0.0);
    if (L.a > 0.5) {
      float t = smoothstep(0.05, 0.95, L.r);
      vec3 fill = accent ? mix(accentLo, accentHi, t) : soft ? mix(softLo, softHi, t) : energy ? mix(energyLo, energyHi, t) : mix(lo, hi, t);
      bool inkRole = role > 1.5 && role < 2.5;
      if (inkRole) fill = mix(line, lo, 0.25);
      fill = mix(fill, mix(lo, hi, t), L.b * (energy ? 1.0 : 0.0));
      // Dot shading (engraving look, off unless an edition asks): a staggered dot screen in the line colour,
      // dots growing as the face turns from the light
      if (stipple > 0.0 && !inkRole) {
        vec2 g = gl_FragCoord.xy / (2.6 * px);
        g.x += 0.5 * mod(floor(g.y), 2.0);
        float shade = clamp((0.62 - t) / 0.62, 0.0, 1.0);
        float r = 0.42 * sqrt(shade);
        float dt = 1.0 - smoothstep(r - 0.08, r + 0.08, length(fract(g) - 0.5));
        fill = mix(fill, ink, dt * 0.45 * stipple * (1.0 - L.b));
      }
      c = vec4(fill, 1.0);
    }
    float a = clamp(e, 0.0, 1.0) * (1.0 - dimAlpha * eDim);
    c.rgb = mix(c.rgb, ink, a);
    c.a = max(c.a, a);
    gl_FragColor = vec4(c.rgb * c.a, c.a); // premultiplied
  }`,qy={lo:"#ecebef",hi:"#ffffff",line:"#6f6a72",energyLo:"#e81c35",energyHi:"#ff7c8a",energyLine:"#9e1028",softLo:"#fbd9de",softHi:"#fff6f7",softLine:"#f08494",accentLo:"#fbd9de",accentHi:"#fff6f7",accentLine:"#f08494"},Yy={lo:"#1e1e1e",hi:"#2a2a2a",line:"#f4f4f4",energyLo:"#c81a30",energyHi:"#ff6b7a",energyLine:"#ff8a96",softLo:"#3a2028",softHi:"#4a2a34",softLine:"#ff8fa0",accentLo:"#3a2028",accentHi:"#4a2a34",accentLine:"#ff8fa0"};function ff(i,e){let t=getComputedStyle(document.documentElement),n=r=>t.getPropertyValue(`--${e}-${r.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}`).trim(),s=r=>n(r)||(r.startsWith("energy")?n(r.replace("energy","red")):"");return Object.fromEntries(Object.keys(i).map(r=>[r,s(r)||i[r]]))}function vf(i,{stipple:e}={}){i.autoClear=!1;let t=ff(qy,"art"),n=ff(Yy,"art-dark"),s=getComputedStyle(document.documentElement),r=parseFloat(s.getPropertyValue("--art-stipple")),o=e??(Number.isFinite(r)?r:0),a=parseFloat(s.getPropertyValue("--art-dark-stipple")),l=Number.isFinite(a)?a:o,c=(M,x)=>{let S=parseFloat(s.getPropertyValue(M));return Number.isFinite(S)?S:x},h=new gn(1,1,{type:yn,count:2});h.depthTexture=new Vn(1,1,In);let f=new N(-.5,.8,.45).normalize(),g=M=>({value:new dt(M).convertLinearToSRGB()}),u={tLit:{value:h.textures[0]},tNorm:{value:h.textures[1]},tDepth:{value:h.depthTexture},res:{value:new oe(1,1)},px:{value:1},near:{value:.1},far:{value:100},lo:g(t.lo),hi:g(t.hi),line:g(t.line),energyLo:g(t.energyLo),energyHi:g(t.energyHi),energyLine:g(t.energyLine),softLo:g(t.softLo),softHi:g(t.softHi),softLine:g(t.softLine),accentLo:g(t.accentLo),accentHi:g(t.accentHi),accentLine:g(t.accentLine),stipple:{value:o},dimInk:{value:c("--art-dim-ink",.6)},dimAlpha:{value:c("--art-dim-alpha",.5)}},p={},_={};Object.keys(t).forEach(M=>{p[M]=u[M].value.clone(),_[M]=g(n[M]).value});function m(M){Object.keys(p).forEach(x=>u[x].value.copy(p[x]).lerp(_[x],M)),u.stipple.value=o+(l-o)*M}let d=new rs;d.add(new un(new hs(2,2),new Rn({uniforms:u,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Xy,blending:gi,depthTest:!1,depthWrite:!1})));let y=new ds,b=new oe;function v(){let M=i.getPixelRatio(),{x,y:S}=i.getDrawingBufferSize(b);h.setSize(x,S),u.res.value.set(x,S),u.px.value=M}function E(M,x){x.updateMatrixWorld(),_f.value.copy(f).transformDirection(x.matrixWorldInverse),u.near.value=x.near,u.far.value=x.far,i.setClearColor(0,0),i.setRenderTarget(h),i.clear(),i.render(M,x),i.setRenderTarget(null),i.clear(),i.render(d,y)}return{render:E,setSize:v,setTheme:m}}var Sf=[["energy","energy"],["accent","accent"],["soft","soft"]];function Mf(i){Sf=Object.entries(i)}function $y(i,e){for(let[t,n]of Sf)if(t.endsWith("*")?e.some(r=>r.startsWith(t.slice(0,-1))):e.includes(t))return si[n];return new dt(i).getHSL({},fn).l<.2?si.ink:si.part}function ie(i,e,t){let n=$y(e,t),s=new un(i,yf(n));return s.userData.tags=t,s.userData.role=n,s}function bf(i,e,t=null){return i.map(n=>{let s=n.userData.tags||[],r=o=>o&&o.some(a=>s.includes(a));return!e||r(e)?0:r(t)?.45:1})}function Ef(i,e,t){let n=!1;return i.forEach((s,r)=>{let o=s.material.uniforms,a=e[r]-o.dim.value;Math.abs(a)<.002?o.dim.value=e[r]:(o.dim.value+=a*t,n=!0)}),n}function Tf(i,e){i.traverse(t=>{let n=t.isMesh&&t.material.uniforms;if(!n||!n.role)return;let s=e&&e.some(r=>(t.userData.tags||[]).includes(r));t.userData.energized=!!s,n.role.value=s?si.energy:t.userData.role}),i.traverse(t=>{let n=t.userData.leader;if(!n||!t.parent)return;let s=!1;t.parent.traverse(r=>s=s||!!r.userData.energized),n.classList.toggle("is-energized",s)})}function wf(i,e,t={}){i.traverse(n=>{let s=n.isMesh&&n.material.uniforms;if(!s||!s.charge)return;let r=n.userData.tags||[];s.charge.value=e&&e.some(o=>r.includes(o))?1:0,s.lag.value=Object.keys(t).reduce((o,a)=>r.includes(a)?t[a]:o,0)})}var Af=[[1,-1],[1,-1.7],[1,-2.4],[1,1],[1,1.7],[1,-3.1],[-1,-1],[-1,-1.7],[-1,1],[-1,-2.4]];function Rf(i,e){let t=[];i.traverse(p=>{let _=p.userData.leader;_&&(e.appendChild(_),t.push({obj:p,el:_,line:_.querySelector("polyline"),box:_.querySelector(".lead-box"),text:_.querySelector(".lead-text"),note:_.querySelector(".lead-note"),ex:null,ey:null,size:null}))});let n=new N,s=new N,r=new N,o=new N,a=new N;function l(p,_){let[m,d]=p.userData.track;o.copy(m).applyMatrix4(p.parent.matrixWorld),a.copy(d).applyMatrix4(p.parent.matrixWorld);let y=s.copy(o).project(_).y,b=s.copy(a).project(_).y,v=Math.abs(b-y)<1e-6?.5:Math.max(0,Math.min(1,(0-y)/(b-y)));return n.copy(o).lerp(a,v)}function c(p){for(let _=p;_;_=_.parent)if(!_.visible)return!1;return!0}function h(p,_){return _.some(m=>p.x<m.x+m.w&&p.x+p.w>m.x&&p.y<m.y+m.h&&p.y+p.h>m.y)}function f(p,_,m,d,y,b){let v=y*_,E=Math.max(4,8*Math.min(_/1920,m/1080)),M=Math.max(...p.map(P=>Math.max(P.size[0],P.size[2]))),[x,S]=d>0?[v,v+M]:[v-M,v],C=-1/0;b.forEach(P=>{P.x<S&&P.x+P.w>x&&P.y<m*.4&&(C=Math.max(C,P.y+P.h))});let A,D=(P,I)=>(A=C,p.map((L,U)=>{let[,X,,H]=L.size,Y=U>0&&L.obj.userData.band!==p[U-1].obj.userData.band?I:0,J=Math.max(L.ay-X,A+P+Y);return A=J+X+H,J})),z;for(let[P,I]of[[E,2*E],[E,0],[E/2,0]])if(z=D(P,I),A<=m*.92)break;let k=Math.max(0,A-m*.92);return p.map((P,I)=>{let[L,U,X,H]=P.size,Y=z[I]-k;return{ex:v-P.ax,ey:Y+U-P.ay,r:{x:d>0?v:v-Math.max(L,X),y:Y,w:Math.max(L,X),h:U+H}}})}function g(p,_,m,d=[],y=0,b=0,v=.2,E=0,M={}){let x=!1,C=46*Math.min(_/1920,m/1080),A=6,D=d.slice(),z=[];t.forEach(I=>{I.obj.userData.track?l(I.obj,p):I.obj.getWorldPosition(n);let L=s.copy(n).project(p),U=c(I.obj)&&L.z<1;if(I.el.style.visibility=U?"":"hidden",!U||!I.el.classList.contains("is-on")){I.ex=null;return}r.set(0,n.y,0);let X=r.project(p);I.ax=(L.x+1)/2*_,I.ay=(1-L.y)/2*m,I.side=y||(I.ax>=(X.x+1)/2*_?1:-1),I.down=I.ay>(1-X.y)/2*m?-1:1;let H=I.note&&I.el.classList.contains("show-note");if(!I.size||I.noted!==H){let Y=I.box.offsetWidth,J=I.text.offsetTop+I.text.offsetHeight;I.size=[Y,J,Y,I.box.offsetHeight-J],I.noted=H}z.push(I)}),z.sort((I,L)=>(I.obj.userData.band??0)-(L.obj.userData.band??0)||I.ay-L.ay);let k=y&&b?f(z,_,m,y,b,d):null,P=z.map(I=>{let L=M[I.obj.userData.key];if(!L)return null;let[U,X,H,Y]=I.size,J=Math.max(U,H),ce=L[0]*_-I.ax,de=L[1]*m-I.ay,q={x:ce>0?I.ax+ce:I.ax+ce-J,y:I.ay+de-X,w:J,h:X+Y};return D.push(q),{ex:ce,ey:de,r:q}});return z.forEach((I,L)=>{let[U,X,H,Y]=I.size,J=Math.max(U,H),ce=C*(I.obj.userData.reach||1),de=P[L]||(k?k[L]:null),q=E?[[1,"drop"],[-1,"drop"],...Af]:Af;if(!de)for(let[Ie,Fe]of q){if(y&&Ie<0)continue;let ve=Ie*I.side,Ne=ve*(Fe==="drop"?Math.max(ce,_*.12):ce),vt=Fe==="drop"?m*E-I.ay:Fe*C*I.down,Ue={x:ve>0?I.ax+Ne:I.ax+Ne-J,y:I.ay+vt-X,w:J,h:X+Y};if(Ue.x>A&&Ue.x+Ue.w<_-A&&Ue.y>A&&Ue.y+Ue.h<m-A&&(de||(de={ex:Ne,ey:vt,r:Ue}),!h(Ue,D))){de={ex:Ne,ey:vt,r:Ue};break}}de||(de={ex:I.side*ce,ey:-C*I.down,r:{x:0,y:0,w:0,h:0}}),P[L]||D.push(de.r),I.ex===null?(I.ex=de.ex,I.ey=de.ey):(Math.abs(de.ex-I.ex)+Math.abs(de.ey-I.ey)>.5&&(x=!0),I.ex+=(de.ex-I.ex)*v,I.ey+=(de.ey-I.ey)*v),I.el.style.transform=`translate(${I.ax.toFixed(1)}px, ${I.ay.toFixed(1)}px)`,I.line.setAttribute("points",`0,0 ${I.ex.toFixed(1)},${I.ey.toFixed(1)}`);let ue=y?y<0:I.ex<0;I.box.style.transform=`translate(${I.ex.toFixed(1)}px, ${(I.ey-I.size[1]).toFixed(1)}px) translate(${ue?-100:0}%, 0)`,I.box.style.textAlign=ue?"right":"left"}),x}function u(){t.forEach(p=>p.size=null)}return{update:g,resize:u}}var Cf=.04;function If(i,e){let t=new Map,n=new ResizeObserver(u=>{u.forEach(p=>t.set(p.target,[p.target.offsetWidth,p.target.offsetHeight])),e()}),s=[],r=new N,o=null,a=document.createElement("div");a.style.cssText="position:fixed;visibility:hidden;padding:0 env(safe-area-inset-right,0px) 0 env(safe-area-inset-left,0px)",document.body.appendChild(a);let l=null;window.addEventListener("resize",()=>l=null);let c=()=>{if(!l){let u=getComputedStyle(a);l=[parseFloat(u.paddingLeft)||0,parseFloat(u.paddingRight)||0]}return l};function h(u){let p=u.card;p&&(p.classList.add(`card-${u.data.side||"right"}`),p.querySelectorAll(".tiles > *").forEach((_,m)=>_.dataset.n=m+1),i.appendChild(p),n.observe(p),s.push(p))}function f(u){s.forEach(p=>{p.classList.toggle("is-on",p===u.card),p.inert=p!==u.card}),o=null}function g(u,p,_,m=null){let d=u.card;if(!d)return;let y=window.innerWidth,b=window.innerHeight,v=u.data.side||"right",[E,M]=t.get(d)||[d.offsetWidth,d.offsetHeight],x,S;if(u.data.anchor==="screen")x=v==="left"?y*.07:v==="center"?(y-E)/2:y*.93-E,S=u.data.dock==="bottom"?b*.88-M:(b-M)/2;else{r.copy(u.anchor).project(p);let z=(r.x+1)/2*y,k=(1-r.y)/2*b,P=y*.02;x=v==="left"?z-E-P:v==="center"?z-E/2:z+P,S=k-M/2}let[C,A]=c();x=Math.max(Math.max(y*Cf,C+8),Math.min(Math.min(y*(1-Cf),y-A-8)-E,x)),S=Math.max(b*.12,Math.min(b*.88-M,S));let D=!1;return _&&x<_.x+_.w&&S<_.y+_.h&&(_.y+_.h+M<b*.9?S=_.y+_.h:m&&m.y+m.h+M<b*.9?(S=Math.max(S,m.y+m.h),D=!0):x=_.x+_.w),d.style.transform=`translate(${Math.round(x)}px, ${Math.round(S)}px)`,o={x,y:S,w:E,h:M},D}return{add:h,show:f,place:g,get box(){return o}}}var ou=(i,e)=>`<svg class="${i}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="${e}"/></svg>`,au={fullscreen:"M4 20v-4.423h1V19h3.423v1zm11.596 0v-1h3.423v-3.423h1V20zM4 8.423V4h4.423v1H5v3.423zm15.02 0V5h-3.424V4h4.423v4.423z",fullscreenExit:"M7.423 20v-3.423H4v-1h4.423V20zm8.173 0v-4.423h4.423v1h-3.423V20zM4 8.423v-1h3.423V4h1v4.423zm11.596 0V4h1v3.423h3.423v1z",light:"M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-4.96.71Q8 13.672 8 12t1.165-2.835Q10.329 8 12 8t2.836 1.165T16 12t-1.164 2.836T12 16t-2.835-1.164M5 12.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12",download:"m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z",previous:"M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z",next:"m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z",dark:"M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"};function Pf(i,e){i.innerHTML=ou("icon",au[e])}function lu(i,e,t){i.innerHTML=ou("icon-off",au[e])+ou("icon-on",au[t])}var cu={en:{previous:"Previous step",next:"Next step",step:(i,e,t)=>`Step ${i} of ${e}${t?`: ${t}`:""}`},fr:{previous:"\xC9tape pr\xE9c\xE9dente",next:"\xC9tape suivante",step:(i,e,t)=>`\xC9tape ${i} sur ${e}${t?`\u202F: ${t}`:""}`}};function Lf(i="en"){return cu[i]||cu[i.split("-")[0]]||cu.en}var Zy=["crumb","progress","questions","source","version","theme","fullscreen"];function Df(i,e,{lists:t,modules:n={},lang:s="en"}){let{sections:r,questions:o,mention:a}=t,l=`deck-theme:${location.pathname}:${document.title}`,c=L=>n[L]!==!1,h=Lf(s),f={crumb:".hud-crumb",progress:".hud-acts",questions:".hud-checklist",source:".hud-source",version:".hud-version",theme:".hud-theme",fullscreen:".hud-fullscreen"};Zy.forEach(L=>!c(L)&&document.querySelectorAll(f[L]).forEach(U=>U.remove()));let g=document.querySelector(".hud-version");g&&!g.textContent.trim()&&(g.textContent="v0.2.1"),c("questions")||document.querySelectorAll('[data-list="questions"]').forEach(L=>L.remove());let u={nav:document.querySelector(".hud-nav"),section:document.querySelector(".crumb-act"),part:document.querySelector(".crumb-part"),bar:document.querySelector(".hud-acts"),checklist:document.querySelector(".hud-checklist"),source:document.querySelector(".hud-source"),counter:document.querySelector(".hud-counter"),footer:document.querySelector(".hud-footer")},p=["previous","next"].map(L=>{let U=document.createElement("button");return U.type="button",U.className="hud-step",U.dataset.dir=L,U.setAttribute("aria-label",h[L]),Pf(U,L),U});if(u.counter){let L=document.createElement("span");L.className="hud-steps",u.counter.replaceWith(L),L.append(p[0],u.counter,p[1])}let _=document.createElement("p");_.className="sr-only",_.setAttribute("aria-live","polite"),document.body.appendChild(_);let m=(L,U)=>h.step(L,i.length,U),d=[];i.forEach(L=>{let U=d[d.length-1];U&&U.section===L.data.section?U.stops.push(L):d.push({section:L.data.section,stops:[L]})}),d.forEach(L=>{let U=document.createElement("li");U.style.flexGrow=L.stops.length,U.innerHTML="<span></span>",u.bar?.appendChild(U)}),o.forEach(L=>{let U=document.createElement("li");U.dataset.question=L.id,U.textContent=L.name,u.checklist?.appendChild(U)}),document.querySelectorAll('.card [data-list="questions"]:empty').forEach(L=>{o.forEach(U=>{let X=document.createElement("li");X.dataset.question=U.id,X.textContent=U.question,L.appendChild(X)})});let y=document.querySelector(".hud-theme"),b=document.body.dataset.themeDefault||"light",v=null;if(y){lu(y,"dark","light");try{b=localStorage.getItem(l)||b}catch{}y.addEventListener("click",()=>{b=b==="dark"?"light":"dark";try{localStorage.setItem(l,b)}catch{}v&&M(v)})}let E=document.querySelector(".hud-fullscreen");E&&(lu(E,"fullscreen","fullscreenExit"),E.hidden=!document.fullscreenEnabled,E.addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"})).catch(()=>{})}),document.addEventListener("fullscreenchange",()=>{E.setAttribute("aria-pressed",String(!!document.fullscreenElement))}));function M(L){document.documentElement.classList.contains("no-js")||(document.body.dataset.theme=L.data.theme||b,y?.setAttribute("aria-pressed",String(document.body.dataset.theme!=="light")))}let x,S;function C(){return S===void 0&&(S=u.footer?u.footer.getBoundingClientRect().top:window.innerHeight),S}function A(L,U){let X=$r(L,U),H=r.findIndex(de=>de.id===L.data.section);u.section&&(u.section.textContent=H>=0?`${String(H+1).padStart(2,"0")} \xB7 ${r[H].name}`:""),u.part&&(u.part.textContent=X.crumb||"");let Y=d.findIndex(de=>de.stops.includes(L)),J=d[Y].stops.indexOf(L)+(U+1)/Math.max(1,L.beats.length);u.bar&&(u.bar.querySelectorAll("li").forEach((de,q)=>{let ue=q<Y?1:q>Y?0:J/d[Y].stops.length;de.firstChild.style.width=`${(ue*100).toFixed(1)}%`}),u.bar.dataset.ready||requestAnimationFrame(()=>requestAnimationFrame(()=>u.bar.dataset.ready="1")));let ce=new Set(Sn(X.answers));if(u.checklist?.querySelectorAll("li").forEach(de=>{de.classList.toggle("is-now",ce.has(de.dataset.question)),ce.has(de.dataset.question)?de.setAttribute("aria-current","true"):de.removeAttribute("aria-current")}),u.source&&(u.source.textContent=[L.data.source,a].filter(Boolean).join(" \xB7 ")),u.counter.textContent=`${L.index+1} / ${i.length}`,p[0].disabled=L.index===0&&U===0,p[1].disabled=L.index===i.length-1&&U>=L.beats.length-1,L!==v){let de=L.card?.querySelector("h1, h2")?.textContent.replace(/\s+/g," ").trim();_.textContent=m(L.index+1,de)}v=L,M(L),document.body.dataset.hud=X.hud||"",x=S=void 0}let D=document.body.dataset.hudCompact!==void 0,z=0;function k(L=0,U=!!document.body.dataset.hudTight){let X=!!document.body.dataset.hudTight;if(x===void 0){let J=u.nav.getBoundingClientRect();!X&&document.body.dataset.hud!=="crumb"&&(z=u.checklist?u.checklist.getBoundingClientRect().height+parseFloat(getComputedStyle(u.nav).rowGap||0):0),x=document.body.dataset.hud==="bare"?null:{x:J.left,y:J.top,w:J.width,h:J.height}}if(!x)return null;let H=document.body.dataset.hud==="crumb"?0:z,Y=U===X?x.h:U?x.h-H:x.h+H;return{x:x.x-L,y:x.y-L,w:x.w+2*L,h:Y+2*L}}function P(L){L=D&&L&&document.body.dataset.hud!=="crumb",!!document.body.dataset.hudTight!==L&&(L?document.body.dataset.hudTight="":delete document.body.dataset.hudTight,x=S=void 0)}function I(L){let U=L&&L.querySelector('.is-shown [data-list="questions"]');!U||!u.checklist||e()||document.body.dataset.hud||u.checklist.querySelectorAll("li").forEach((X,H)=>{let Y=U.querySelector(`[data-question="${X.dataset.question}"]`);if(!Y)return;let J=Y.getBoundingClientRect(),ce=X.getBoundingClientRect();X.animate([{transform:`translate(${J.left-ce.left}px, ${J.top-ce.top}px)`,opacity:.5},{transform:"none",opacity:1}],{duration:700,delay:H*60,easing:"cubic-bezier(0.65, 0, 0.35, 1)",fill:"backwards"})})}return{update:A,rect:k,footerTop:C,tighten:P,bindSteps(L){p[0].addEventListener("click",()=>L.previous()),p[1].addEventListener("click",()=>L.next())},compact:D,dock:I,invalidate(){x=S=void 0}}}function Nf(i,e){return`#${i+1}${e>0?`.${e+1}`:""}`}function hu(i){let[e,t]=location.hash.slice(1).split(".").map(Number);return[Number.isInteger(e)&&e>=1?Math.min(e,i)-1:0,Number.isInteger(t)&&t>=1?t-1:0]}var uu=()=>document.documentElement.classList.contains("no-js");function Uf(i){document.addEventListener("keydown",n=>{if(!(n.altKey||n.ctrlKey||n.metaKey||uu())&&!(n.target.closest?.("a, button")&&[" ","Enter"].includes(n.key))){if(n.key==="Escape"&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}if(["ArrowRight","ArrowDown","PageDown"," ","Enter"].includes(n.key))i.next();else if(["ArrowLeft","ArrowUp","PageUp","Backspace"].includes(n.key))i.previous();else if(n.key==="Home")i.go(0);else if(n.key==="End")i.go(i.count-1);else return;n.preventDefault()}});let e=null,t=!1;document.addEventListener("touchstart",n=>{let s=n.touches[0];e=n.touches.length===1&&!uu()&&!n.target.closest("a, button")?{x:s.clientX,y:s.clientY,at:performance.now()}:null},{passive:!0}),document.addEventListener("touchend",n=>{if(uu()||(t||(t=!0,document.documentElement.requestFullscreen?.({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})),!e||n.touches.length))return;let s=n.changedTouches[0],r=s.clientX-e.x,o=s.clientY-e.y;Math.max(Math.abs(r),Math.abs(o))>40?((Math.abs(r)>=Math.abs(o)?r<0:o<0)?i.next:i.previous)():Math.hypot(r,o)<10&&performance.now()-e.at<500&&(s.clientX<window.innerWidth/2?i.previous:i.next)(),e=null}),window.addEventListener("hashchange",()=>{let[n,s]=hu(i.count);i.go(n,!1,s)})}var Of=1100,Jy=200;function du(i){return Object.keys(i).forEach(e=>{let t=i[e];typeof t=="number"?i[e]=Number.isFinite(t)?t:0:t&&typeof t=="object"&&du(t)}),i}function Ff({stops:i,scene:e,engine:t,resolveShot:n,cards:s,hud:r,motion:o,prefs:a,phone:l,wake:c}){let h=(M,x)=>{if(t.layout)return t.layout(M);let S=t.set(M);return t.set(x),S},f=M=>M.data.set||e.defaultSet,g={pos:new N(0,30,.01),target:new N},u={current:null,beat:0,shown:{},focusTags:null,contextTags:[],labelsChanged:!1,layout:null,from:null,to:null,started:0,shot:g,fromShot:g,toShot:g,shotName:null,shotStarted:0,shotDuration:0,portal:null},p={slow:2600,fast:900,cut:0},_=()=>a.reduced?0:p[u.move]??1600;u.move=null,u.shotDuration=_();function m(){let{index:M,toBeat:x,via:S}=u.portal;u.portal=null,d(M,!0,x,!0),u.fromShot=n(S.in,u.layout),u.shotStarted=performance.now(),u.shotDuration=Of}function d(M,x=!1,S=0,C=!1){c(100),u.portal&&m();let A=i[Math.max(0,Math.min(i.length-1,M))],D=Math.max(0,Math.min(A.beats.length-1,S<0?A.beats.length-1:S));if(A===u.current){D!==u.beat&&y(D);return}let z=!u.current||A.index>u.current.index,k=u.current;u.current=A,u.move=$r(A,D).move||null;let P=!!k&&f(k)!==f(A)&&!t.sets?.joined(f(k),f(A)),I=P&&!x&&!a.reduced&&t.sets?t.sets.portal(f(k),f(A)):null;if(I){u.current=k,u.portal={index:A.index,toBeat:D,via:I},u.fromShot=u.shot,u.toShot=n(I.out,u.layout),u.shotName=I.out,u.shotStarted=performance.now(),u.shotDuration=Of,s.show({}),t.labels([]),u.labelsChanged=!0;return}let L=P||!!k&&u.move==="cut",U=u.from=du(t.state);o.reset();let X=u.to=cl(A.state);e.enter?.(A,U,X,{forward:z}),u.layout=h(X,U),u.shotName=null,s.show(A),A.anchor.copy(e.anchor?e.anchor(A.data.anchor,u.layout):new N),u.started=x||L||_()===0?-1/0:performance.now(),t.sets&&t.sets.show(f(A),Sn(A.data.parts)),y(D,!0),t.sets&&(x||L)&&t.sets.update(1),L&&(u.shot=u.fromShot=u.toShot,u.shotStarted=-1/0,(!a.reduced||C)&&(document.body.classList.add("is-cut"),requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove("is-cut"))))),k&&!x&&r.dock(k.card),o.startPulse(performance.now()+_())}function y(M,x=!1){u.beat=M;let S=u.current,C=u.shown=$r(S,M);u.move=C.move||null;let A=u.to&&e.beatState?e.beatState(u.to,C,S):null;if(A){x||(u.from=du(t.state),o.reset(),u.started=_()===0?-1/0:performance.now());let P=cl(u.to);Object.assign(P,A),x||(e.holdOnBeat||[]).forEach(I=>P[I]=u.from[I]),u.to=P,u.layout=h(u.to,u.from)}let D=C.shot||e.defaultShot;D!==u.shotName&&(u.shotName=D,u.fromShot=u.shot,u.toShot=n(D,u.layout),u.shotStarted=x&&u.started===-1/0?-1/0:performance.now(),u.shotDuration=_());let k=performance.now()-Math.max(u.started,u.shotStarted)<50?Math.max(u.shotDuration,_())*.6:0;document.documentElement.style.setProperty("--lead-wait",`${Math.round(k)}ms`),u.focusTags=C.focus?Sn(C.focus):null,u.contextTags=Sn(C.context),t.labels(Sn(C.labels)),u.labelsChanged=!0,t.energize(Sn(C.energize)),t.charge(Sn(C.pulse),uf(C.pulseLag)),xf(...e.pulseBand?e.pulseBand(C.pulseBand,u.layout):[-1e3,1e3]),t.sets&&t.sets.target(C),r.update(S,M),S.card&&(S.card.querySelectorAll("[data-beat]").forEach(P=>P.classList.toggle("is-now",Number(P.dataset.beat)===M)),E(S,M));try{history.replaceState(null,"",Nf(S.index,M))}catch{}c(1e3)}let b=0,v=null;function E(M,x){clearTimeout(b),v?.classList.remove("is-swapping"),v=null;let S=[...M.card.querySelectorAll("[data-from]")],C=D=>S.forEach(z=>z.classList.toggle("is-shown",D>=Number(z.dataset.from)));if(!S.some(D=>D.classList.contains("is-shown")!==x>=Number(D.dataset.from))||!l.matches||a.reduced){C(x);return}M.card.classList.add("is-swapping"),v=M.card,b=setTimeout(()=>{v=null,u.current===M&&C(u.beat),requestAnimationFrame(()=>requestAnimationFrame(()=>M.card.classList.remove("is-swapping")))},Jy)}return{state:u,duration:_,go:d,landPortal:m,next(){let{current:M,beat:x}=u;M&&(x<M.beats.length-1?d(M.index,!1,x+1):M.index<i.length-1&&d(M.index+1))},previous(){let{current:M,beat:x}=u;M&&(x>0?d(M.index,!1,x-1):M.index>0&&d(M.index-1,!1,-1))}}}var Ky=2.6,jy=3.2;function Bf(i={},e){let t=0,n=0,s=!1,r=0,o=null;return{tick(a,l){n=Math.min(.1,(a-t)/1e3||0),t=a,s=!!i.tick?.(n,l,e.reduced)},approach(a){return 1-Math.exp(-a*n)},get ambient(){return s},adjust(a){i.adjust?.(a)},after(a,l){i.after?.(a,l)},reset(){i.reset?.()},startPulse(a){r=a},pulse(a,l){let c=(a-r)/1e3;gf(o!==null?o:l&&!e.reduced&&c>0?c%jy*Ky:-10)},hold(a){o=a}}}function dl(){let i=typeof document<"u"&&document.getElementById("edition");if(!i)return null;try{return JSON.parse(i.textContent)}catch(e){return console.error("The edition block (#edition) is not valid JSON:",e.message),null}}function fl(){return typeof document<"u"&&document.documentElement.lang||"en"}function ri(i,e,t="id"){e&&(Array.isArray(e)?i.splice(0,i.length,...e):typeof e=="object"&&i.forEach(n=>Object.assign(n,e[n[t]])))}function Zr(i,e,t,n="edition"){if(t)try{i(e,t)}catch(s){console.error(`The ${n} patch was not applied in full: ${s.message}`)}}function zf(i){return JSON.parse(JSON.stringify(i))}var Qy={light:0,dark:1,blueprint:1};function kf(i,e={}){let t=window.matchMedia("(prefers-reduced-motion: reduce)"),n={reduced:t.matches},s={get matches(){return document.documentElement.classList.contains("phone")}},r=document.getElementById("stage"),o;try{o=new nl({antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch(be){throw document.documentElement.classList.replace("js","no-js"),be}r.appendChild(o.domElement);let a=new ll;a.domElement.className="engraving",r.appendChild(a.domElement);let l=new ol;l.domElement.className="labels",l.domElement.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","true"),document.body.appendChild(l.domElement);let c=new rs;c.matrixWorldAutoUpdate=!1;let h=vf(o),f=[...document.querySelectorAll("#stops > .stop")].map(be=>be.dataset.set),g=!!i.sets&&f.some(Boolean),u=i.camera({sets:g}),p=u.fov,_=new pn(p,1,u.near,u.far),m=dl(),d={...e.sets,...m?.sets},y=i.sets?.defaultSet??null,b=g?be=>df(i.sets.defs,[...new Set(f.map(F=>F||y).filter(Boolean))],be,{portals:d.portals,pairs:d.pairs,leads:i.sets.leads?.()||{},attach:i.sets.attach}):null;Mf(i.roles),tf(i.lists().names);let v=i.create(c,{buildSets:b}),E=Rf(v.root,l.domElement),M=Jd(i,i.sets?.shots),x=cf(document.getElementById("stops"),i.stopState),S=document.getElementById("cards"),C=If(S,()=>q(100));x.forEach(C.add);let A=Df(x,()=>n.reduced,{lists:i.lists(),modules:{...e.hud,...m?.hud},lang:fl()});({...e.leaders,...m?.leaders}).enter==="draw"&&(document.documentElement.dataset.leadEnter="draw");let D=Bf(i.motion?i.motion(v):{},n),z=Ff({stops:x,scene:{...i,defaultSet:y},engine:v,resolveShot:M,cards:C,hud:A,motion:D,prefs:n,phone:s,wake:q}),k=z.state;t.addEventListener("change",be=>{n.reduced=be.matches,q(300)});let P=[],I=[];function L(be){let F=window.innerWidth,et=window.innerHeight,Ve=Math.min(et*.93,A.footerTop()-4),qe=[{x:0,y:Ve,w:F,h:et-Ve}],fe=A.rect(12);fe&&qe.push(fe);let xt=C.box;return xt&&qe.push({x:xt.x-12,y:xt.y-12,w:xt.w+24,h:xt.h+24}),be.forEach(ge=>qe.push({x:ge.left-4,y:ge.top-2,w:ge.width+8,h:ge.height+4})),qe}let U={left:-1,right:1},X=0,H=!0,Y=!1,J=0,ce=0,de=!1;function q(be){X=Math.max(X,performance.now()+be),!Y&&(Y=!0,requestAnimationFrame(vt))}new MutationObserver(()=>q(100)).observe(document.body,{attributes:!0,attributeFilter:["data-theme"]});let ue=0,Ie={...Qy,...e.themes},Fe=()=>Ie[document.body.dataset.theme]??0;function ve(){let be=Fe();return ue===be?!1:(ue=n.reduced||Math.abs(be-ue)<.002?be:ue+(be-ue)*D.approach(3),h.setTheme(ue),!0)}let Ne={on:!1,ms:[]};function vt(be){if(document.documentElement.classList.contains("no-js")){Y=!1;return}if(!Ne.on)return Ue(be);let F=performance.now(),et=ce;Ue(be),ce>et&&Ne.ms.push(performance.now()-F)}function Ue(be){D.tick(be,k.current);let F=Math.max(0,Math.min(1,(be-k.started)/z.duration()));k.portal&&be-k.shotStarted>=k.shotDuration&&z.landPortal();let et=Math.max(0,Math.min(1,(be-k.shotStarted)/k.shotDuration)),Ve=ue!==Fe()||F<1||et<1||H||be<X,qe=D.ambient||!n.reduced&&!!k.shown.pulse;if(!Ve&&!qe){Y=!1;return}if(requestAnimationFrame(vt),!Ve&&be-J<15)return;J=be,ce++,D.pulse(be,k.current&&k.shown.pulse),ve();let fe=su(Number.isFinite(F)?F:1);if(k.from&&k.to){let Z=iu(k.from,k.to,fe);D.adjust(Z),v.set(Z),D.after(Z,be)}let xt=v.focus(k.focusTags,n.reduced?1:D.approach(5),k.contextTags),ge=v.sets?v.sets.update(n.reduced?1:D.approach(2.5)):!1;ge!==de&&(de=ge,document.body.toggleAttribute("data-set-moving",ge),ge||document.dispatchEvent(new CustomEvent("deck:set-landed")));let He=k.shot=Kd(k.fromShot,k.toShot,su(Number.isFinite(et)?et:1));_.position.copy(He.pos),_.lookAt(He.target),_.rotateZ((He.roll||0)*De),c.updateMatrixWorld(),h.render(c,_),a.render(c,_),l.render(c,_),k.labelsChanged&&(k.labelsChanged=!1,P=[...l.domElement.querySelectorAll(".label.is-on:not(.lead)")],I=P.filter(Z=>Z.classList.contains("label-band")));let R=rf(I),T=P.filter(Z=>Z.style.display!=="none").map(Z=>[Z,(Z.firstElementChild||Z).getBoundingClientRect()]),G=of(R),le=T.map(([Z,xe])=>{let O=G.get(Z)||0;return O?{left:xe.left+O,top:xe.top,width:xe.width,height:xe.height}:xe});v.align(_);let{current:ee,shown:pe}=k;if(ee){let Z=C.place(ee,_,A.rect(16,!1),A.compact?A.rect(16,!0):null);A.tighten(Z)}let Ee=hf(s.matches?pe.leadAtPhone:pe.leadAt),j=E.update(_,window.innerWidth,window.innerHeight,L(le),U[pe.leadSide]||0,Number(pe.leadColumn)||0,n.reduced?1:D.approach(13),Number(pe.leadDrop)||0,Ee);H=xt||j||ge}function Qe(){let be=window.innerWidth,F=window.innerHeight;o.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio,2,Math.sqrt(9e6/(be*F))))),o.setSize(be,F),h.setSize(),l.setSize(be,F),a.setSize(be,F),_.aspect=be/F,_.fov=_.aspect>=16/9?p:2*Math.atan(Math.tan(p*De/2)*16/9/_.aspect)/De,_.updateProjectionMatrix(),E.resize(),A.invalidate(),q(300)}window.addEventListener("resize",Qe),Qe(),o.domElement.addEventListener("webglcontextrestored",()=>q(500));function rt(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Qe(),rt()},{once:!0})}rt(),document.fonts&&document.fonts.ready.then(()=>{v.relayout(),E.resize(),q(300)});let te=window.matchMedia("(pointer: coarse) and (orientation: portrait)"),me=new Set,_e;function Pe(be,F){let et=me.size>0;F?me.add(be):me.delete(be);let Ve=document.documentElement;Ve.classList.toggle("reading-portrait",me.has("portrait")),me.size>0!==et&&(et?(Ve.classList.replace("no-js","js"),_e===void 0?delete document.body.dataset.theme:document.body.dataset.theme=_e,x.forEach(qe=>qe.card&&S.appendChild(qe.card)),q(300)):(x.forEach(qe=>{qe.card&&(qe.card.style.transform="",qe.el.appendChild(qe.card))}),_e=document.body.dataset.theme,document.body.dataset.theme="light",Ve.classList.replace("js","no-js")))}window.addEventListener("beforeprint",()=>Pe("print",!0)),window.addEventListener("afterprint",()=>Pe("print",!1)),te.addEventListener("change",be=>Pe("portrait",be.matches));let{go:Me,next:Je,previous:ke}=z;Uf({next:Je,previous:ke,go:Me,count:x.length}),A.bindSteps({next:Je,previous:ke}),window.deck={go:Me,next:Je,previous:ke,stops:x,...i.debug,vocabulary:()=>{let be=new Set,F=new Set,et=new Set;return v.root.traverse(Ve=>{[].concat(Ve.userData.group||[],Ve.userData.noteGroup||[]).forEach(qe=>qe&&be.add(qe)),(Ve.userData.tags||[]).forEach(qe=>F.add(qe)),Ve.userData.key&&et.add(Ve.userData.key)}),{groups:[...be],tags:[...F],keys:[...et]}},holdPulse:(be=null)=>D.hold(be),drawn:()=>ce,inspect:()=>{o.info.autoReset=!1,o.info.reset(),h.render(c,_),o.info.autoReset=!0;let be=ge=>ge.name||(ge.userData.tags||[]).join(",")||ge.type,F=ge=>{let He=[];for(let R=ge;R&&R!==v.root;R=R.parent)He.unshift(be(R));return He.join(" \u203A ")},et={meshes:0,visible:0,triangles:0,untagged:[],foreign:[],crowded:[]},Ve=new Set,qe=new Set,fe=new Map,xt=new Map;return v.root.traverse(ge=>{if(!ge.isMesh)return;et.meshes++;let He=!0;for(let T=ge;T;T=T.parent)T.visible||(He=!1);if(He){et.visible++;let T=F(ge.parent).split(" \u203A ").slice(0,2).join(" \u203A ")||"root";xt.set(T,(xt.get(T)||0)+1)}(ge.userData.tags||[]).length||et.untagged.push(F(ge)),ge.material?.uniforms?.dim||et.foreign.push(F(ge)),Ve.add(ge.material),qe.add(ge.geometry);let R=ge.geometry;et.triangles+=(R.index?R.index.count:R.attributes.position?.count||0)/3,ge.userData.baked||fe.set(ge.parent,(fe.get(ge.parent)||0)+1)}),fe.forEach((ge,He)=>ge>40&&et.crowded.push(`${F(He)||"root"}: ${ge} meshes`)),{...et,triangles:Math.round(et.triangles),materials:Ve.size,geometries:qe.size,calls:o.info.render.calls,rendered:o.info.render.triangles,memory:{...o.info.memory},programs:o.info.programs?.length??0,heaviest:[...xt].sort((ge,He)=>He[1]-ge[1]).slice(0,4)}},frameStats:be=>(be!==void 0&&(Ne.on=be,Ne.ms=[]),Ne.ms.slice()),drawCalls:()=>(o.info.autoReset=!1,o.info.reset(),h.render(c,_),o.info.autoReset=!0,o.info.render.calls)};let[ct,ut]=hu(x.length);Me(ct,!0,ut),k.fromShot=k.toShot,q(300),Pe("portrait",te.matches)}var vi={mention:"\xA9 ZENIKA 2026 \xB7 Tous droits r\xE9serv\xE9s",gates:{G1:"Un objectif mesurable, les donn\xE9es pour le suivre, un seul responsable",G2:"Tests d'acceptation \xE9crits, interfaces convenues, cibles de qualit\xE9 fix\xE9es",G3:"Tous les contr\xF4les passent, failles ferm\xE9es, une personne nomm\xE9e signe",G4:"Chaque changement trac\xE9, indicateurs m\xE9tier en place, une astreinte nomm\xE9e",G5:"R\xE9sultats face \xE0 la promesse, co\xFBt complet connu, d\xE9cision de garder ou de retirer",G6:"D\xE9pendances cartographi\xE9es, utilisateurs pr\xE9venus, savoir pr\xE9serv\xE9"},shapes:{idea:"id\xE9e",shape:"cadrage",spec:"spec",code:"code",build:"build",review:"revue",deploy:"d\xE9ploiement",keep:"maintien",observe:"observation",analyse:"analyse",opportunity:"opportunit\xE9",retirement:"retrait"},roles:{spec:"Transforme l'id\xE9e en spec\u202F; pas de code tant qu'une question reste ouverte",context:"Garde ce que savent les agents sourc\xE9, dat\xE9 et r\xE9utilisable",orchestrator:"R\xE9partit le travail entre les agents et d\xE9cide o\xF9 les personnes relisent",guarantor:"Signe chaque gate en son nom, sur les preuves\u202F; jamais d\xE9l\xE9gu\xE9",evaluation:"V\xE9rifie que ce que produisent les agents reste bon dans la dur\xE9e",agentops:"Garde les agents et leurs outils enregistr\xE9s, \xE0 jour et en service",finops:"Relie la d\xE9pense en tokens \xE0 ce qu'elle produit, chaque budget avec son responsable",audit:"Sait dire qui a fait quoi, personne ou agent, sous quelle identit\xE9"},concerns:{feed:{name:"Alimenter les pipelines",question:"Comment donner aux agents le bon contexte\u202F?"},govern:{name:"Gouverner les agents",question:"Comment gouverner les agents et ce qu'ils savent\u202F?"},harness:{name:"Construire le harnais",question:"Quel harnais garde les agents sur la bonne voie\u202F?"},secure:{name:"S\xE9curiser le flux",question:"Comment s\xE9curiser le flux de bout en bout\u202F?"},identity:{name:"Identit\xE9 des agents",question:"Qui est chaque agent, et qui en r\xE9pond\u202F?"},tokens:{name:"\xC9conomie des tokens",question:"Combien co\xFBteront les tokens, et qui paie\u202F?"},measure:{name:"Mesurer les progr\xE8s",question:"Comment savoir si l'on progresse\u202F?"}},sections:{problem:"Le probl\xE8me",wheel:"La roue",nexus:"Le Nexus",layers:"Les couches",people:"Les \xE9quipes",measure:"Mesure",napkin:"La serviette"}};var Hf=[{id:"discover",name:"Discover"},{id:"design",name:"Design"},{id:"develop",name:"Develop"},{id:"deploy",name:"Deploy"},{id:"deepen",name:"Deepen"},{id:"drop",name:"Drop",side:!0}],$n=Hf.filter(i=>!i.side),oi=[{id:"G1",name:"Ready to Spec",checks:"A measurable goal, the data to track it, one accountable owner"},{id:"G2",name:"Ready to Build",checks:"Acceptance tests written, interfaces agreed, quality targets set"},{id:"G3",name:"Ready to Release",checks:"All checks pass, security issues closed, a named person signs off"},{id:"G4",name:"Released and Observable",checks:"Every change traced, business metrics live, someone on call"},{id:"G5",name:"Opportunity or Retire",checks:"Results against the promise, full cost known, a keep-or-retire call"},{id:"G6",name:"Retirement Scoped",checks:"Dependencies mapped, users informed, knowledge preserved"}],jr=[{name:"idea",angle:0},{name:"shape",angle:54.7},{name:"spec",angle:89.3},{name:"code",angle:121},{name:"build",angle:144},{name:"review",angle:167},{name:"deploy",angle:198.7},{name:"keep",angle:233.3},{name:"observe",angle:265},{name:"analyse",angle:288},{name:"opportunity",angle:311},{name:"retirement",drop:!0}],Wi=[{id:"discover",name:"Discover",archetype:"Probes",purpose:"Finds what is worth building, and what already exists",layers:[{id:"L0",name:"Idea & Discovery Tooling",part:"Market probe",on:[1,1,0,0,1,0]},{id:"L12",name:"App Portfolio & Capability Discovery",part:"Portfolio probe",on:[1,1,0,0,0,1]}]},{id:"build",name:"Build",archetype:"Gear train",purpose:"Turns the spec into working code",layers:[{id:"L2",name:"SDD Tooling",part:"Cam",on:[0,1,1,0,0,0]},{id:"L1",name:"AI Coding Assistants",part:"Drive gear",on:[0,1,1,0,0,0]}]},{id:"contextualise",name:"Contextualise",archetype:"Manifold",purpose:"Gives every agent the same context and the tools it may call",layers:[{id:"L5",name:"Context Factory",part:"Intake manifold",on:[1,1,1,1,1,1]},{id:"L4",name:"Agent & MCP Registry",part:"Valve block",on:[1,1,1,1,1,0]},{id:"L6",name:"Multi-agent Orchestration",part:"Distributor",on:[0,0,1,1,1,0]}]},{id:"measure",name:"Measure",archetype:"Gauges",purpose:"Proves the output is good, and keeps proving it",layers:[{id:"L8",name:"CI/CD & Quality",part:"Test bench",on:[0,0,1,1,1,0]},{id:"L9",name:"Observability & DORA",part:"Dials",on:[0,0,0,1,1,1]}]},{id:"platform",name:"Platform",archetype:"Chassis",purpose:"Routes, meters and secures every model call, on ground you control",layers:[{id:"L3",name:"AI Gateway",part:"Throttle",on:[1,1,1,1,1,1]},{id:"L7",name:"Prompt Versioning & FinOps",part:"Fuel meter",on:[1,1,1,1,1,1]},{id:"L10",name:"Infrastructure & Sovereignty",part:"Engine block",on:[1,1,1,1,1,1]}]}],Qr={id:"L11",name:"Identity & Non-Human Access",part:"Ignition key",checks:["L3","L4","L10"]},ml=[{id:"knowledge",name:"Knowledge",from:270},{id:"intent",name:"Intent",from:0,teamOnly:!0},{id:"contracts",name:"Contracts",from:90},{id:"operations",name:"Operations",from:180}],fu=[{id:"org",name:"Org",color:"#8e1542"},{id:"bu",name:"BU",color:"#bf1d67"},{id:"team",name:"Team",color:"#ee2238"}],pu=[{id:"spec",name:"Specification Engineer",parts:["register:intent","phase:design","layer:L2"],purpose:"Turns the Idea into a spec; no code while a question stays open"},{id:"context",name:"Context Engineer",parts:["layer:L5","register:knowledge","register:contracts"],purpose:"Keeps what agents know sourced, dated and reusable"},{id:"orchestrator",name:"Orchestrator",parts:["layer:L6","layer:L1"],purpose:"Splits the work between agents and decides where people review"},{id:"guarantor",name:"Decision Guarantor",parts:["gates"],purpose:"Signs each gate in their own name, on the evidence; never delegated"},{id:"evaluation",name:"Evaluation Engineer",parts:["layer:L8","layer:L9"],purpose:"Checks that what agents produce stays good over time"},{id:"agentops",name:"AgentOps",parts:["layer:L4","layer:L6"],purpose:"Keeps agents and their tools registered, current and in service"},{id:"finops",name:"AI FinOps",parts:["layer:L7","layer:L3"],purpose:"Ties token spend to what it delivers, each budget with an owner"},{id:"audit",name:"Trace & Audit",parts:["spine"],purpose:"Can tell who did what, person or agent, under which identity"}],mu=[{id:"feed",name:"Feeding the pipelines",question:"How do we feed agents the right context?"},{id:"govern",name:"Governing agents",question:"How do we govern agents and what they know?"},{id:"harness",name:"Building the harness",question:"What harness keeps agents on track?"},{id:"secure",name:"Securing the workflow",question:"How do we secure the workflow end to end?"},{id:"identity",name:"Agent identities",question:"Who is each agent, and who answers for it?"},{id:"tokens",name:"Tokenomics",question:"What will the tokens cost, and who pays?"},{id:"measure",name:"Measuring progress",question:"How do we know we are getting better?"}],gu=[{id:"problem",name:"The problem"},{id:"wheel",name:"The wheel"},{id:"nexus",name:"The Nexus"},{id:"layers",name:"The layers"},{id:"people",name:"People"},{id:"measure",name:"Measure"},{id:"napkin",name:"The napkin"}],xu=fl()==="fr"?"fr":"en",_u={},ys=[{id:"zone:human",from:0,to:25},{id:"zone:assisted",from:26,to:50},{id:"zone:executed",from:51,to:79,soft:!0},{id:"zone:autonomous",from:80,to:100}],Jr={sections:gu,concerns:mu,shapes:jr,gates:oi,phases:Hf,registers:ml,roles:pu,bands:Wi,spine:Qr,leads:_u,zones:ys};function Gf(){let i=(e,t)=>Object.fromEntries(Object.entries(e).map(([n,s])=>[n,t(s)]));return{gates:i(vi.gates,e=>({checks:e})),shapes:i(vi.shapes,e=>({label:e})),roles:i(vi.roles,e=>({purpose:e})),concerns:vi.concerns,sections:i(vi.sections,e=>({name:e}))}}function _s(i,e){if(ri(i.sections,e.sections),ri(i.concerns,e.concerns),ri(i.shapes,e.shapes,"name"),ri(i.gates,e.gates),ri(i.phases,e.phases),ri(i.registers,e.registers),ri(i.roles,e.roles),ri(i.zones,e.zones),e.bandOrder){let t=i.bands.map(n=>n.id);e.bandOrder.length!==t.length||!t.every(n=>e.bandOrder.includes(n))?console.error(`Edition bandOrder must list each band once (${t.join(", ")}): kept the bands' own order`):ri(i.bands,e.bandOrder.map(n=>i.bands.find(s=>s.id===n)))}i.bands.forEach(t=>{Object.assign(t,e.bands?.[t.id]),t.layers.forEach(n=>Object.assign(n,e.layers?.[n.id]))}),Object.assign(i.spine,e.layers?.[i.spine.id]),Object.assign(i.leads,e.leads)}var Kr=dl();xu==="fr"&&Zr(_s,Jr,Gf(),"French");Kr&&Zr(_s,Jr,Kr);var yu=Kr?.mention??(xu==="fr"?vi.mention:"\xA9 ZENIKA 2026 \xB7 All Rights Reserved"),pl=null;function Vf(i){pl=i,!(typeof document>"u")&&(Zr(_s,Jr,xu==="fr"?i.fr:i.en,"deck"),Kr&&Zr(_s,Jr,Kr))}function Wf(i,e){let t=zf(Jr);return i==="fr"&&_s(t,Gf()),pl&&_s(t,i==="fr"?pl.fr:pl.en),e&&_s(t,e),t}var ev={sections:[{id:"programme",name:"The programme"},{id:"measure",name:"Measure"},{id:"pdlc",name:"PDLC"},{id:"platform",name:"Platform"},{id:"people",name:"People"},{id:"next",name:"Next steps"}],concerns:[{id:"stance",name:"A clear AI stance",question:"Everyone knows which tools are allowed, for what, and why"},{id:"data",name:"Healthy data",question:"Internal data is accurate, complete and kept up to date"},{id:"reach",name:"Data AI can reach",question:"The tools read the team's own code, docs and decisions"},{id:"versions",name:"Strong version control",question:"Every change is versioned, reviewed and easy to roll back"},{id:"batches",name:"Small batches",question:"Small changes ship often and fail small"},{id:"users",name:"The user at the centre",question:"Teams aim AI at what users need, not at output"},{id:"platform",name:"A quality platform",question:"One shared internal platform carries the gains from team to team"}],shapes:[{name:"business-intent",label:"Business Intent Spec",angle:36},{name:"solution-design",label:"Solution Design Spec",angle:108},{name:"code-test",label:"Code + Test Specs",angle:180},{name:"runtime",label:"Runtime Specs",angle:252},{name:"opportunity",label:"Opportunity Spec",angle:324},{name:"retirement",label:"Retirement Spec",drop:!0}],zones:[{id:"zone:human",from:0,to:25},{id:"zone:assisted",from:26,to:50},{id:"zone:executed",from:51,to:79,soft:!0},{id:"zone:autonomous",from:80,to:100}],leads:{"stage:1":["Phase 1 \xB7 Assessment","about two months"],"stage:2":["Phase 2 \xB7 Pilot","about two quarters"],"stage:3":["Phase 3 \xB7 Scale","the year after"],"energy-line":["The Spec","runs from the engine to the nose"],moon:["The target","an AI-native PDLC for every team"],"pillar:pdlc":["PDLC","the engine"],"pillar:platform":["Platform","the layers under the wheel"],"pillar:measure":["Measure","the cockpit"],"pillar:people":["People","the crew's hatch"],"part:line":["1.1 \xB7 The Spec","the energy line"],"part:bay":["1.2 \xB7 The engine"],"part:hatch":["2.1 \xB7 The crew's hatch"],"part:cabin":["2.2 \xB7 The cabin"],"part:bays":["3.1 \xB7 The engine bays"],"part:conduit":["3.2 \xB7 The tool bays"],"part:cockpit":["4.1 \xB7 The cockpit"],"part:dials":["4.2 \xB7 The dials"],"inst:throughput":["Throughput"],"inst:stability":["Stability"],"inst:cost":["Quality"],"inst:productivity":["Value"],"inst:experience":["Transformation"],seats:["Pilot seats"],columns:["Control columns"],specialisation:["Specialisation by profile"],"deep-dives":["Deep-dive sessions"],hackathon:["A hackathon to practise"],"self-paced":["Self-paced learning"],"screen:site":["The programme site"],"screen:list":["Seven capabilities"],"screen:dials":["The dials"],"screen:flight":["The flight"],capabilities:["Capabilities","what people do on the Spec"],"cart:tools":["Tooling","an AI coding assistant, in the IDE and the code forge"],"cart:label":["Description","turn a Design Spec into working code"],"cart:plug":["Platform","the AI gateway for models \xB7 the Context Nexus for context"],"cart:clamp":["Guardrails","human review, a merge request and the full CI"],"cart:dial":["Autonomy scoring","the criteria the contract reads"],"bay:manual":["Picked by hand","in the in-house chat assistant or another tool"],"bay:selector":["Best model","proposed from the context"],"bay:indicator":["Performance indicator"],"bay:context":["Fed back into the context"],"bay:bench":["Quarterly benchmark","every model against your own evaluation set"],"ring:score":["The score","the task"],"ring:rule":["Blocking rule","the capability"],"ring:ceiling":["Foundation ceiling","the platform"],"zone:human":["Human \xB7 \u2264 25"],"zone:assisted":["AI-assisted \xB7 26\u201350"],"zone:executed":["AI-executed \xB7 51\u201379"],"zone:autonomous":["AI-autonomous \xB7 \u2265 80"],ceiling:["The ceiling","the most restrictive limit wins"],needle:["The delegation level"]}},tv={sections:[{id:"programme",name:"Le programme"},{id:"measure",name:"Mesure"},{id:"pdlc",name:"PDLC"},{id:"platform",name:"Platform"},{id:"people",name:"\xC9quipes"},{id:"next",name:"Prochaines \xE9tapes"}],concerns:[{id:"stance",name:"Une position claire sur l'IA",question:"Chacun sait quels outils sont permis, pour quoi faire et pourquoi"},{id:"data",name:"Des donn\xE9es saines",question:"Les donn\xE9es internes sont justes, compl\xE8tes et \xE0 jour"},{id:"reach",name:"Des donn\xE9es accessibles \xE0 l'IA",question:"Les outils lisent le code, les docs et les d\xE9cisions de l'\xE9quipe"},{id:"versions",name:"Une gestion de versions solide",question:"Chaque changement est versionn\xE9, relu et facile \xE0 annuler"},{id:"batches",name:"Des petits lots",question:"Des changements petits, livr\xE9s souvent, qui \xE9chouent petit"},{id:"users",name:"L'utilisateur au centre",question:"Les \xE9quipes mettent l'IA au service des utilisateurs, pas du volume produit"},{id:"platform",name:"Une plateforme de qualit\xE9",question:"Une plateforme interne commune porte les gains d'une \xE9quipe \xE0 l'autre"}],shapes:[{name:"business-intent",label:"Business Intent Spec",angle:36},{name:"solution-design",label:"Solution Design Spec",angle:108},{name:"code-test",label:"Code + Test Specs",angle:180},{name:"runtime",label:"Runtime Specs",angle:252},{name:"opportunity",label:"Opportunity Spec",angle:324},{name:"retirement",label:"Retirement Spec",drop:!0}],zones:[{id:"zone:human",from:0,to:25},{id:"zone:assisted",from:26,to:50},{id:"zone:executed",from:51,to:79,soft:!0},{id:"zone:autonomous",from:80,to:100}],leads:{"stage:1":["Phase 1 \xB7 Diagnostic","deux mois environ"],"stage:2":["Phase 2 \xB7 Pilote","deux trimestres environ"],"stage:3":["Phase 3 \xB7 Passage \xE0 l'\xE9chelle","l'ann\xE9e suivante"],"energy-line":["La Spec","court du moteur jusqu'au nez"],moon:["La cible","un PDLC natif IA pour chaque \xE9quipe"],"pillar:pdlc":["PDLC","le moteur"],"pillar:platform":["Platform","les couches sous la roue"],"pillar:measure":["Mesure","le cockpit"],"pillar:people":["\xC9quipes","la trappe de l'\xE9quipage"],"part:line":["1.1 \xB7 La Spec","la ligne d'\xE9nergie"],"part:bay":["1.2 \xB7 Le moteur"],"part:hatch":["2.1 \xB7 La trappe de l'\xE9quipage"],"part:cabin":["2.2 \xB7 La cabine"],"part:bays":["3.1 \xB7 Les baies moteur"],"part:conduit":["3.2 \xB7 Les baies d'outils"],"part:cockpit":["4.1 \xB7 Le cockpit"],"part:dials":["4.2 \xB7 Les cadrans"],"inst:throughput":["Throughput"],"inst:stability":["Stability"],"inst:cost":["Quality"],"inst:productivity":["Value"],"inst:experience":["Transformation"],seats:["Si\xE8ges pilotes"],columns:["Manches"],specialisation:["Sp\xE9cialisation par profil"],"deep-dives":["Sessions d'approfondissement"],hackathon:["Un hackathon pour pratiquer"],"self-paced":["Apprentissage en autonomie"],"screen:site":["Le site du programme"],"screen:list":["Sept capacit\xE9s"],"screen:dials":["Les cadrans"],"screen:flight":["Le vol"],capabilities:["Capabilities","ce que les gens font sur la Spec"],"cart:tools":["Outillage","un assistant de code IA, dans l'IDE et la forge"],"cart:label":["Description","transformer une Design Spec en code qui marche"],"cart:plug":["Plateforme","l'AI Gateway pour les mod\xE8les \xB7 le Context Nexus pour le contexte"],"cart:clamp":["Garde-fous","relecture humaine, merge request et CI compl\xE8te"],"cart:dial":["Score d'autonomie","les crit\xE8res que lit le contrat"],"bay:manual":["Choisi \xE0 la main","dans l'assistant de chat interne ou un autre outil"],"bay:selector":["Meilleur mod\xE8le","propos\xE9 \xE0 partir du contexte"],"bay:indicator":["Indicateur de performance"],"bay:context":["R\xE9inject\xE9 dans le contexte"],"bay:bench":["Benchmark trimestriel","chaque mod\xE8le face \xE0 votre propre jeu d'\xE9valuation"],"ring:score":["Le score","la t\xE2che"],"ring:rule":["R\xE8gle bloquante","la capability"],"ring:ceiling":["Plafond du socle","la plateforme"],"zone:human":["Human \xB7 \u2264 25"],"zone:assisted":["AI-assisted \xB7 26\u201350"],"zone:executed":["AI-executed \xB7 51\u201379"],"zone:autonomous":["AI-autonomous \xB7 \u2265 80"],ceiling:["Le plafond","la limite la plus stricte l'emporte"],needle:["Le niveau de d\xE9l\xE9gation"]}};Vf({en:ev,fr:tv});var Dt={rIn:1.45,rOut:4,depth:.32,sweep:40,gap:.14},Xi=72,Mt={from:296,to:348,rIn:4.25,rOut:5.35},Si={radii:[1.24,.86,.5],core:.12,sweep:34,gap:.07},Gt={rIn:1.36,rOut:3.6,h:.18,gap:.06,splitGap:.55,tooth:.07},qi={top:-Dt.depth-.12,bandGap:.12,explodedGap:2.2,wheelGap:2.2},kt={angle:180,r:3.05,radius:.06};function Zt(i){return i*Xi}function js(i){return i*Xi+Xi/2}function xl(i=0){return re((Mt.rIn+Mt.rOut)/2,(Mt.from+Mt.to)/2,i)}function gl(i,e){return new oe(i*Math.sin(e*De),-i*Math.cos(e*De))}function vu(i,e,t,n,s){return i+s*Math.pow(1-(e-t)/(n-t),1.7)}function Qs(i,e,t,n,s,r){let o=(p,_)=>vu(p,_,i,e,s),a=p=>r/2/p/De,l=[];for(let p=0;p<=32;p++){let _=i+(e-i)*p/32;l.push(gl(_,o(t,_)+a(_)))}let h=t+a(e),f=n-a(e);for(let p=1;p<48;p++)l.push(gl(e,h+(f-h)*p/48));for(let p=32;p>=0;p--){let _=i+(e-i)*p/32;l.push(gl(_,o(n,_)-a(_)))}let g=o(n,i)-a(i),u=o(t,i)+a(i);for(let p=1;p<16;p++)l.push(gl(i,g-(g-u)*p/16));return new xn(l)}function qf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let f=i[h],g=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let g=0;g<i.length;++g){let u=i[g].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=i[g].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Xf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let g=0;g<f;++g){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][g]);let p=Xf(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Xf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Nn(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let g=0,u=h.count;g<u;g++)for(let p=0;p<t;p++){let _=h.getComponent(g,p);a.setComponent(g+f,p,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ne="#ffffff",ft="#1e1e1e",It=(i,e,t,n)=>(i.position.set(e,t,n),i),ae=(i,e,t,n,s=ne)=>ie(new tn(i,e,t),s,n),nt=(i,e,t,n=ne,s=24)=>ie(new at(i,i,e,s),n,t);function Yf(i,e,t){let n=new xn,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function je(i,e,t,n,s,{color:r=ne,border:o=0}={}){let a=Yf(i,e,n);o>0&&a.holes.push(Yf(i-2*o,e-2*o,Math.max(.02,n-o)));let l=new us(a,{depth:t,bevelEnabled:!1,curveSegments:6});return ie(l,r,s)}function Zn(i,e,t,n=.08){let s=new se;for(let r=0;r<i;r++){let o=ie(new at(n,n,.06,10),ft,t);o.rotation.x=Math.PI/2,o.position.set(i===1?0:-e/2+e*r/(i-1),0,.03),s.add(o)}return s}function On(i,e,t,n=ne){let s=new mi(i,!1,"catmullrom",.2);return ie(new Bi(s,Math.max(8,i.length*10),e,8),n,t)}function Mi(i,e,t,n,s=32){let r=(a,l)=>new oe(a*Math.sin(l*De),-a*Math.cos(l*De)),o=[];for(let a=0;a<=s;a++)o.push(r(e,t+(n-t)*a/s));for(let a=s;a>=0;a--)o.push(r(i,t+(n-t)*a/s));return new xn(o)}function $f(i,e=!0){let t=new se;t.add(je(.6,.6,.08,.08,i));let n=je(.6,.6,.04,.08,i,{border:.06});n.position.z=.08;let s=ie(new at(.15,.15,.12,16),ne,i);s.rotation.x=Math.PI/2,s.position.z=.14;let r=new se,o=ie(new at(.035,.035,.36,8),ne,i);o.position.y=.18;let a=ie(new nn(.07,10,8),ne,i);return a.position.y=.38,r.add(o,a),r.position.z=.2,r.rotation.x=e?.5:Math.PI-.5,t.add(n,s,r),t}function er(i,e,t,n=[]){let s=new se,r=.32;s.add(je(i*r+.16,e*r+.16,.06,.06,t));for(let o=0;o<i;o++)for(let a=0;a<e;a++){let l=n.includes(a*i+o),c=ae(.22,.22,.08,l?[...t,"energy"]:t);c.position.set((o-(i-1)/2)*r,((e-1)/2-a)*r,.1),s.add(c)}return s}function Yi(i,e,t,{traces:n=3,lit:s=!0}={}){let r=new se;r.add(je(i,e,.1,.08,t));let o=je(i-.16,e-.16,.04,.05,[...t,"glass"]);o.position.z=.1,r.add(o);for(let a=0;a<n;a++){let l=(i-.4)*(.45+.5*(a*37%10/10)),c=ae(l,.035,.02,s&&a===0?[...t,"energy"]:t);c.position.set(-(i-.4)/2+l/2,e/2-.3-a*((e-.5)/Math.max(1,n)),.16),r.add(c)}return r}function vs(i,{byTags:e=!1,local:t=!1}={}){i.updateMatrixWorld(!0);let n=i.matrixWorld.clone().invert(),s=new Map,r=[];i.traverse(l=>{if(!l.isMesh)return;let c=`${l.material.uniforms.role.value}|${l.material.side}${e?`|${(l.userData.tags||[]).join(",")}`:""}`;s.has(c)||s.set(c,{material:l.material,tags:l.userData.tags,geos:[]});let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();Object.keys(h.attributes).forEach(f=>f!=="position"&&f!=="normal"&&h.deleteAttribute(f)),h.clearGroups(),s.get(c).geos.push(h.applyMatrix4(t?n.clone().multiply(l.matrixWorld):l.matrixWorld)),l.children.filter(f=>f.isCSS2DObject||f.isCSS3DObject||f.userData.leader).forEach(f=>r.push([c,f])),l.geometry.dispose(),s.get(c).material!==l.material&&l.material.dispose()});let o=new se;o.userData=i.userData;let a=new Map;return s.forEach(({material:l,tags:c,geos:h},f)=>{let g=new un(qf(h),l);g.userData.tags=c,g.userData.role=l.uniforms.role.value,g.userData.baked=!0,o.add(g),a.set(f,g),h.forEach(u=>u.dispose())}),r.forEach(([l,c])=>{(t?n.clone().multiply(c.matrixWorld):c.matrixWorld.clone()).decompose(c.position,c.quaternion,c.scale),a.get(l).add(c)}),o.find=l=>o.children.find(c=>(c.userData.tags||[]).includes(l)&&c.userData.role!==si.ink),o}function Mn(i,{keep:e=[]}={}){i.updateMatrixWorld(!0);let t=i.matrixWorld.clone().invert(),n=(a,l)=>(t.clone().multiply(a.matrixWorld).decompose(l.position,l.quaternion,l.scale),l),s=e.map(a=>a.parent===i?a:n(a.parent,new Ht).add(a));s.forEach(a=>a.removeFromParent());let r=[];i.traverse(a=>{if(a===i||!a.name)return;let l=n(a,new Ht);l.name=a.name,r.push(l)});let o=vs(i,{byTags:!0,local:!0});return i.clear(),i.add(...o.children,...r,...s),i.find=a=>i.children.find(l=>l.userData.baked&&(l.userData.tags||[]).includes(a)&&l.userData.role!==si.ink),i}var J1=new N;var K1=[Math.PI/2,Math.PI];var j1=new N(1,0,0);var _l=(i,e,t=0)=>new N(i*Math.sin(e*De),i*Math.cos(e*De),t);function Zf(i,e,t,n,s,r){let o=ie(new Dr(i,e,48,1,(90-n)*De,(n-t)*De),ne,s);return o.position.z=r,o}function bi(i,e,{value:t=.6,range:n=null,centre:s=!1,ticks:r=10,minor:o=4,sweep:a=270,sub:l=null}={}){let c=new se,h=d=>s?a*(d-.5):-a/2+a*d,f=nt(i,.1,[...e,"face"],ne,64);f.rotation.x=Math.PI/2,f.position.z=.05;let g=ie(new wt(i*1.04,i*.06,10,72),ne,[...e,"energy","bezel"]);g.position.z=.12,c.add(f,g);for(let d=0;d<=r;d++){let y=h(d/r),b=ae(i*.035,i*.16,.03,e,ft);if(b.position.copy(_l(i*.84,y,.12)),b.rotation.z=-y*De,c.add(b),d===r)break;for(let v=1;v<=o;v++){let E=h((d+v/(o+1))/r),M=ae(i*.016,i*.08,.03,e,ft);M.position.copy(_l(i*.88,E,.12)),M.rotation.z=-E*De,c.add(M)}}if(c.userData.numbers=Array.from({length:r+1},(d,y)=>({i:y,at:_l(i*.64,h(y/r),.12)})),n&&c.add(Zf(i*.93,i*.99,h(n[0]),h(n[1]),[...e,"energy","range"],.125)),s){c.add(Zf(i*.93,i*.99,Math.min(0,h(t)),Math.max(0,h(t)),[...e,"energy","range"],.125));let d=ae(i*.07,i*.32,.05,[...e,"baseline"],ft);d.position.copy(_l(i*.74,0,.14)),c.add(d)}if(l){let d=bi(i*l.r,[...e,"sub",...l.name?[l.name]:[]],{value:l.value,ticks:6,minor:1,sweep:300});d.position.set(i*l.x,i*l.y,.06),d.name=l.name||"sub",c.add(d)}let u=new se;u.name="needle";let p=ae(i*.05,i*.82,.03,[...e,"energy","needle"]);p.position.set(0,i*.36,.22);let _=ae(i*.1,i*.26,.03,[...e,"energy","needle"]);_.position.set(0,-i*.12,.22);let m=nt(i*.1,.12,e,ft);return m.rotation.x=Math.PI/2,m.position.z=.24,u.add(p,_,m),u.rotation.z=-h(t)*De,c.add(u),c}var Mu=40,Jf=.2,Su=.035;function Kf(i,e,t,n,s,{group:r="engraved",font:o=null}={}){let a=[...i.toUpperCase()].map(c=>{let h=document.createElement("div");h.className="label label-engraved",h.textContent=c;let f=new al(h);return f.userData.group=r,f.scale.setScalar(Jf/Mu),s.add(f),f}),l={text:i.toUpperCase(),r:e,aMid:t,y:n,letters:a,font:o};return bu(l),l}var yl=null;function bu({text:i,r:e,aMid:t,y:n,letters:s,font:r}){yl=yl||document.createElement("canvas").getContext("2d"),yl.font=`800 ${Mu}px ${r||getComputedStyle(document.body).fontFamily}`;let o=[...i].map(c=>yl.measureText(c).width*Jf/Mu+Su),l=(o.reduce((c,h)=>c+h,0)-Su)/2;s.forEach((c,h)=>{let f=t+(l-o[h]/2+Su/2)/e/De;c.position.copy(re(e,f,n)),c.rotation.y=Math.PI-f*De,l-=o[h]})}var jf=(i,e,t,n,s)=>Kf(i,e,t,n,s,{group:"phases-engraved",font:"Nunito, sans-serif"}),tr=2.85,Eu=3.3,vl=(i,e)=>vu(i,e,Dt.rIn,Dt.rOut,Dt.sweep);function Qf(){let i=new se;i.name="wheel";let e=[];i.userData.relayout=()=>e.forEach(bu),$n.forEach((g,u)=>{let p=Zt(u)-Xi/2,_=ie(Bt(Qs(Dt.rIn,Dt.rOut,p,p+Xi,Dt.sweep,Dt.gap),Dt.depth),"#ffffff",["wheel",`phase:${g.id}`]);i.add(_);let m=xs(g.name,"phases","label-phase"),d=vl(Zt(u),Eu);m.position.copy(re(Eu,d,.02)),m.userData.arc={r:Eu,a:d,y:.02},i.add(m),e.push(jf(g.name,Dt.rOut+.004,Zt(u),-Dt.depth/2,i))}),$n.forEach((g,u)=>{let p=oi[u],_=vl(Zt(u)+Xi/2,tr),m=ie(new at(.09,.09,.14,24),"#1e1e1e",["wheel","gates",`gate:${p.id}`]);m.position.copy(re(tr,_,.07)),i.add(m);let d=vn(`${p.id} \xB7 ${p.name}`,"gate-names","label-gate-name",p.checks,"gate-notes");d.userData.key=p.id,d.position.copy(re(tr,_,.14)),i.add(d)});let t=new se;t.name="drop",t.add(ie(Bt(Qs(Mt.rIn,Mt.rOut,Mt.from,Mt.to,16,0),Dt.depth*.8),"#ffffff",["wheel","phase:drop"]));let n=Zt(4)+Xi/2,s=ie(Bt(Qs(Dt.rOut-.35,Mt.rIn+.35,n-4,n+4,0,0),.08,.015),"#1e1e1e",["wheel","gates","gate:G5","latch"]);s.position.y=.1,t.add(s),[Dt.rOut-.2,Mt.rIn+.2].forEach(g=>{let u=ie(new at(.06,.06,.2,20),"#ffffff",["wheel","gates","gate:G5"]);u.position.copy(re(g,n,.08)),t.add(u)});let r=ie(new at(.09,.09,.14,24),"#1e1e1e",["wheel","gates","gate:G6"]);r.position.copy(re((Mt.rIn+Mt.rOut)/2,Mt.to-4,.07)),t.add(r);let o=(Mt.rIn+Mt.rOut)/2,a=335,l=xs("Drop","phases","label-phase");l.position.copy(re(o,a,.02)),l.userData.arc={r:o,a,y:.02},t.add(l),e.push(jf("Drop",Mt.rOut+.004,(Mt.from+Mt.to)/2,-Dt.depth*.4,t));let c=vn(`${oi[5].id} \xB7 ${oi[5].name}`,"gate-names","label-gate-name",oi[5].checks,"gate-notes");c.userData.key=oi[5].id,c.position.copy(r.position).setY(.14),t.add(c),i.add(t);let h=ie(new wt(tr,.022,8,200),"#ee2238",["wheel","idea"]);h.rotation.x=Math.PI/2,i.add(h),jr.forEach(g=>{let u=vn(g.label||g.name,"shapes","label-shape"),p=ie(new at(.035,.035,.08,12),"#1e1e1e",["wheel","shapes"]);if(g.drop){p.position.copy(re(Mt.rOut-.2,Mt.to-20,.04)),u.position.copy(p.position).setY(.08),t.add(p,u);return}p.position.copy(re(Dt.rOut-.22,vl(g.angle,Dt.rOut-.22),.04)),u.position.copy(p.position).setY(.08),i.add(p,u)});let f=ie(new nn(.16,32,16),"#ee2238",["wheel","idea"]);return f.name="idea",f.position.copy(Tu(0)),i.add(f),i}function Tu(i){return re(tr,vl(i,tr),0)}var wu=Zt(2);function $i(i){let e=[];return i.forEach((t,n)=>{t&&e.push(n<$n.length?Zt(n):(Mt.from+Mt.to)/2)}),e}function Ei(i,e,t,n){let s=new xn;s.absarc(0,0,e,0,Math.PI*2,!1);let r=new Wn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),Bt(s,t,n)}function ep(i,e,t,n=720){let s=new xn;for(let o=0;o<=n;o++){let a=360*o/n,l=t(a),c=new oe(l*Math.sin(a*De),-l*Math.cos(a*De));o===0?s.moveTo(c.x,c.y):s.lineTo(c.x,c.y)}let r=new Wn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),s}function bn(i,e,t,n){return i.position.copy(re(e,t,n)),i.rotation.y=-t*De,i}function tp(i,e,t,n,s,r,o){let a=ie(new tn(s,r,e-i),ne,o);return bn(a,(i+e)/2,t,n)}var nv={L0(i,e,t){return t.add(ie(Ei(Gt.rIn,1.95,.14),ne,e)),$i(i.on).forEach(n=>{t.add(tp(1.9,4.45,n,-.07,.09,.07,e));let s=ie(new at(.24,.1,.16,32),ne,e);t.add(bn(s,4.55,n,-.02));let r=ie(new nn(.05,16,8),ft,e);t.add(bn(r,4.55,n,.1))}),.14},L12(i,e,t){return t.add(ie(Ei(Gt.rIn,1.95,.14),ne,e)),$i(i.on).forEach(n=>{t.add(tp(1.9,4,n+9,-.07,.07,.06,e));let s=ie(new tn(.3,.18,.3),ne,e);t.add(bn(s,4.1,n+9,-.03))}),.14},L2(i,e,t){let n=$i(i.on),s=r=>{let o=2.7;return n.forEach(a=>{let l=Math.abs((r-a+540)%360-180);o+=.75*Math.pow(Math.max(0,Math.cos(l/40*(Math.PI/2))),2)}),o};return t.add(ie(Bt(ep(Gt.rIn,.18,s),.18),ne,e)),.18},L1(i,e,t){let s=o=>3.42+(Math.sin(o*120/360*Math.PI*2)>0?Gt.tooth:0),r=ep(Gt.rIn,.2,s,960);for(let o=0;o<6;o++){let a=(o*60+30)*De,l=new Wn;l.absarc(2.45*Math.sin(a),-2.45*Math.cos(a),.42,0,Math.PI*2,!0),r.holes.push(l)}return t.add(ie(Bt(r,.2),ne,e)),$i(i.on).forEach(o=>{let a=ie(new at(.2,.2,.12,32),ne,e);t.add(bn(a,3,o,.06))}),.2},L5(i,e,t){return t.add(ie(Ei(Gt.rIn,1.8,.26),ne,e)),$i(i.on).forEach(n=>{let s=ie(new at(.1,.1,1.6,24),ne,e);s.rotation.x=Math.PI/2;let r=bn(new se,2.6,n,-.13);r.add(s),t.add(r);let o=ie(new at(.2,.2,.08,32),ne,e);o.rotation.x=Math.PI/2;let a=bn(new se,3.42,n,-.13);a.add(o),t.add(a)}),t.userData.anchor=re(2.9,wu,-.03),.26},L4(i,e,t){return t.add(ie(Ei(Gt.rIn,3.1,.1),ne,e)),$i(i.on).forEach(n=>{let s=ie(new tn(.42,.22,.34),ne,e);t.add(bn(s,2.6,n,.11));let r=ie(new at(.05,.05,.16,16),ft,e);t.add(bn(r,2.6,n,.3))}),t.userData.anchor=re(2.75,wu,.22),.1},L6(i,e,t){t.add(ie(Ei(Gt.rIn,2.5,.2),ne,e));let n=$i(i.on);$n.forEach((r,o)=>{let a=Zt(o),l=n.includes(a),c=ie(new at(.08,.08,l?.34:.14,20),ne,e);t.add(bn(c,2.25,a,l?.17:.07))});let s=ie(new tn(.12,.06,.8),ft,e);return t.add(bn(s,1.85,n[0]??0,.03)),t.userData.anchor=re(2.5,wu-24,-.1),.2},L8(i,e,t){let n=new xn;n.absarc(0,0,3.45,0,Math.PI*2,!1);let s=new Wn;s.absarc(0,0,Gt.rIn,0,Math.PI*2,!0),n.holes.push(s);for(let r=0;r<60;r++){let o=r*6*De,a=1.6*De,l=new Wn,c=(f,g)=>new oe(f*Math.sin(g),-f*Math.cos(g)),h=[c(2.3,o-a),c(3.15,o-a),c(3.15,o+a),c(2.3,o+a)];l.moveTo(h[0].x,h[0].y),[h[3],h[2],h[1],h[0]].forEach(f=>l.lineTo(f.x,f.y)),n.holes.push(l)}return t.add(ie(Bt(n,.12),ne,e)),.12},L9(i,e,t){return t.add(ie(Ei(Gt.rIn,3.2,.12),ne,e)),$i(i.on).forEach(n=>{let s=new se,r=ie(new at(.42,.42,.14,40),ne,e);r.rotation.x=Math.PI/2;let o=ie(new tn(.04,.3,.03),ft,e);o.position.set(.08,.06,.09),o.rotation.z=-.7,s.add(r,o),s.position.y=.42;let a=bn(new se,3.3,n,0);a.add(s),t.add(a)}),.12},L3(i,e,t){t.add(ie(Ei(Gt.rIn,3,.16),ne,e));let n=new se,s=ie(new at(.4,.4,.9,40,1,!0),ne,e);s.material.side=zt,s.rotation.z=Math.PI/2;let r=ie(new at(.36,.36,.03,40),ft,e);r.rotation.z=Math.PI/2+.6;let o=ie(new tn(.06,.5,.06),ne,e);o.position.set(.5,.25,0),n.add(s,r,o),n.position.y=.32;let a=bn(new se,3.2,90,0);return a.add(n),t.add(a),.16},L7(i,e,t){t.add(ie(Ei(Gt.rIn,3.25,.14),ne,e));let n=new se,s=ie(new at(.55,.55,.16,48),ne,e);s.rotation.x=Math.PI/2;let r=ie(new tn(.05,.42,.03),"#ee2238",e);r.position.set(.1,.1,.1),r.rotation.z=.9,n.add(s,r),n.position.y=.2;let o=bn(new se,3.45,200,-.2);return o.add(n),t.add(o),.14},L10(i,e,t){t.add(ie(Ei(Gt.rIn,3.5,.5,.04),ne,e));for(let n=0;n<64;n++){let s=ie(new tn(.035,.42,.32),ne,e);t.add(bn(s,3.62,n*(360/64),-.25))}return .5}};function np(i,e){let t=new se,n=nv[i.id](i,e,t);return t.userData.h=n,vs(t)}function ip(i){let e=new se,t=ie(new wt(.2,.06,16,40),ne,i);t.position.y=-.35;let n=ie(new tn(.1,.4,.05),ne,i);return n.position.y=-.05,e.add(t,n),e}function sp(){let i=new se;i.name="bands";let e=[];Wi.forEach((l,c)=>{let h=new se;h.name=`band:${l.id}`;let f=[];l.layers.forEach((u,p)=>{let _=np(u,["bands",`band:${l.id}`,`layer:${u.id}`]);_.name=`layer:${u.id}`;let m=vn(`${u.id} ${u.name}`,`layers:${l.id}`,"label-layer");m.position.copy(_.userData.anchor||re(1.62,120,0)),_.add(m);let d=vn(`${u.id} ${u.name}`,"layers-right","label-layer");if(d.position.copy(re(1.7,110,0)),d.userData.band=c,p===0){let y=document.createElement("span");y.className="lead-kicker",y.textContent=l.name,d.userData.leader.querySelector(".lead-box").prepend(y)}_.add(d),h.add(_),f.push({id:u.id,object:_,h:_.userData.h})});let g=xs(l.name,"bands","label-band");g.userData.band=l.id,h.add(g),i.add(h),e.push({id:l.id,object:h,rings:f,name:g})});let t=new se;t.name="spine";let n=["spine","layer:L11"],s=ie(new at(kt.radius,kt.radius,1,16),"#1e1e1e",n);t.add(s);let r=Qr.checks.map(l=>{let c=ie(new at(.13,.13,.22,32),"#ffffff",n);return c.userData.layer=l,t.add(c),c}),o=ip(n);t.add(o);let a=vn(`${Qr.id} ${Qr.name}`,"spine","label-spine");return a.userData.track=[new N,new N],t.add(a),i.add(t),{group:i,bands:e,spine:{group:t,rod:s,collars:r,key:o,name:a}}}function rp(i,e,t){let n=qi.top-qi.wheelGap*e,s=qi.bandGap+(qi.explodedGap-qi.bandGap)*e,r={},o={};i.bands.forEach(u=>{let p=t[u.id]||0,_=Gt.gap+(Gt.splitGap-Gt.gap)*p,m=n;u.rings.forEach((d,y)=>{d.object.position.y=n,r[d.id]=n-d.h/2,n-=d.h+(y<u.rings.length-1?_:0)}),o[u.id]=(m+n)/2,u.name.position.copy(re(Gt.rOut+2,270,o[u.id])),u.name.center.set(1,.5),n-=s});let a=n+s,{rod:l,collars:c,key:h,name:f}=i.spine,g=qi.top-qi.wheelGap*e+.15;return l.scale.y=g-a+.15,l.position.copy(re(kt.r,kt.angle,(g+a-.15)/2)),c.forEach(u=>u.position.copy(re(kt.r,kt.angle,r[u.userData.layer]))),h.position.copy(re(kt.r,kt.angle,a-.15)),f.position.copy(re(kt.r,kt.angle,a-.5)),f.userData.track[0].copy(re(kt.r,kt.angle,g)),f.userData.track[1].copy(re(kt.r,kt.angle,a-.15)),{bottom:a,layerY:r,bandMid:o}}var op=[.25,1.25,2.25];function ap(){let i=new se;i.name="nexus";let e=fu.map((n,s)=>{let r=new se;r.name=`level:${n.id}`;let o=Si.radii[s],a=Si.radii[s+1]||Si.core;ml.forEach(c=>{if(c.teamOnly&&n.id!=="team")return;let h=Bt(Qs(a+.04,o,c.from,c.from+90,Si.sweep,Si.gap),1,0);r.add(ie(h,n.color,["nexus",`level:${n.id}`,`register:${c.id}`]))});let l=vn(n.name,"levels","label-level");return l.position.copy(re(o-.05,235,0)),r.add(l),i.add(r),{level:n.id,object:r}}),t=ml.map(n=>{let s=n.teamOnly?fu.length-1:0,r=vn(n.name,["registers",`register:${n.id}`],"label-register");return n.teamOnly&&(r.userData.reach=2.2),r.position.copy(re((Si.radii[s]+(Si.radii[s+1]||Si.core))/2,n.from+45,0)),r.userData.tube=s,r.userData.register=n.id,i.add(r),r});return{group:i,tubes:e,registers:t}}function lp(i,e,t){i.tubes.forEach((n,s)=>{let r=.04+op[s]*t;n.object.position.y=r,n.object.scale.y=r-e}),i.registers.forEach(n=>n.position.y=.04+op[n.userData.tube]*t)}var iv=1200;function Sl(){let i={};return Wi.forEach(e=>i[e.id]=0),{explode:0,telescope:0,split:i,idea:0,presence:{wheel:1,nexus:1,bands:1}}}function cp(i,{buildSets:e=null}={}){let t=new se;i.add(t);let n=Qf(),s=sp(),r=ap();t.add(n,s.group,r.group);let o=e?e(t):null;o&&t.add(o.group);let a=n.getObjectByName("idea");sv(n,s,r);let l=oi.slice(0,5).map(y=>{let b=[];return n.traverse(v=>v.isMesh&&(v.userData.tags||[]).includes(`gate:${y.id}`)&&b.push(v)),b}),c=l.map(()=>0),h=null,f=[],g=[],u=[];t.traverse(y=>{y.isMesh&&y.material.uniforms&&y.material.uniforms.dim?f.push(y):y.isCSS2DObject&&y.userData.arc?g.push(y):y.isCSS3DObject&&u.push(y)});let p=null,_=null,m=Sl();function d(y){let{bottom:b,bandMid:v,layerY:E}=rp(s,y.explode,y.split);lp(r,b,y.telescope),a.position.copy(Tu(y.idea));let M=y.presence;return n.visible=M.wheel>.001,s.group.visible=M.bands>.001,s.group.position.y=-8*(1-M.bands),r.group.visible=M.nexus>.001,r.group.position.y=-10*(1-M.nexus),{bottom:b,bandMid:v,layerY:E}}return d(m),{root:t,sets:o,get state(){return m},set(y){return m=y,d(y)},focus(y,b,v){let E=`${y}|${v}`;return E!==p&&(p=E,_=bf(f,y,v)),Ef(f,_,b)},align(y){af(g,y),lf(u,y)},flashGates(y,b){h!==null&&y>h&&y-h<180&&oi.slice(0,5).forEach((v,E)=>{((js(E)-h)%360+360)%360<y-h&&(c[E]=b+iv)}),h=y,l.forEach((v,E)=>{let M=b<c[E];v.forEach(x=>{let S=x.material.uniforms;x.userData.energized||(S.role.value=M?si.energy:x.userData.role)})})},relayout(){n.userData.relayout()},spin(y){n.rotation.y=-y,r.group.rotation.y=y*1.6},energize(y){Tf(t,y)},charge(y,b){wf(t,y,b)},labels(y){sf(t,y)}}}function sv(i,e,t){pu.forEach(n=>{let s=n.parts[0],r=vn(n.name,`role:${n.id}`,"label-role",n.purpose,`role:${n.id}`);r.userData.reach=1.6;let[o,a]=s.split(":");if(o==="layer"){let l=e.group.getObjectByName(s);r.position.copy(l.userData.anchor||re(1.62,120,0)),l.add(r)}else if(o==="register"){let l=t.registers.find(c=>c.userData.register===a);r.position.copy(l.position),r.userData.tube=l.userData.tube,t.group.add(r),t.registers.push(r)}else s==="gates"?(r.position.copy(re(2.85,js(2),.14)),i.add(r)):s==="spine"&&(r.userData.track=e.spine.name.userData.track,e.spine.group.add(r))})}var Fn={r:5.7,booster:{y0:-24,y1:-6},middle:{y0:-6,y1:22},nose:{y0:22,y1:28,tip:42},skirt:2.2,nozzleY:-26.2,ring:.45},nr=96,Nt=Fn.r;function eo(i,e,t,n,s,r){let o=new at(i,i,t-e,nr,1,!0,n,s);o.translate(0,(e+t)/2,0);let a=ie(o,ne,r);return a.material.side=zt,a}function Pn(i,e,t,n,s=360,r=0){let o=ie(new wt(i,e,6,nr,s*De),ne,n);return o.rotation.x=Math.PI/2,o.rotation.z=(r-90)*De,o.position.y=t,o}function up(i,e){let t=new se;return t.add(eo(Nt+.07,i-Fn.ring/2,i+Fn.ring/2,0,Math.PI*2,[...e,"energy","ring"])),t.add(Pn(Nt+.06,.1,i-.36,e),Pn(Nt+.06,.1,i+.36,e)),t}function Zi(i,e,t,n=0,s=360){let r=new se;for(let o=0;o<e;o++){let a=n+(s-n)*(o+.5)/e,l=ie(new nn(.09,8,4,0,Math.PI*2,0,Math.PI/2),ft,t);l.position.copy(re(Nt,a,i)),l.lookAt(re(Nt*2,a,i)),l.rotateX(Math.PI/2),r.add(l)}return r}function Ti(i,e,t,n=0){return i.position.copy(re(Nt+n,e,t)),i.rotation.y=Math.PI-e*De,i}function rv(i,e){let t=new se;t.name="porthole",t.add(ie(new wt(i,.14,8,40),ne,[...e,"porthole"])),t.add(ie(new wt(i-.16,.05,6,40),ne,[...e,"porthole","energy"]));let n=nt(i-.12,.06,[...e,"porthole","glass"],ne,40);n.rotation.x=Math.PI/2,n.position.z=-.04,t.add(n);for(let s=0;s<8;s++){let r=ie(new at(.05,.05,.06,8),ft,e);r.rotation.x=Math.PI/2,r.position.set(Math.sin(s*Math.PI/4)*i,Math.cos(s*Math.PI/4)*i,.14),t.add(r)}return t}function Au(i,e,t,n=360,s=0){let r=new se;r.add(eo(Nt+.08,i-.28,i+.28,(180-s-n)*De,n*De,[...t,"strap"]));let o=new se;o.add(je(1,.8,.3,.12,t));let a=Zn(2,.5,t,.08);return a.position.z=.3,o.add(a),r.add(Ti(o,e,i-.4,.05)),r}function ov(i){let e=new se;e.add(je(3.2,2.5,.12,.4,i));let t=je(3.2,2.5,.08,.4,i,{border:.18});t.position.z=.12,e.add(t);for(let n=0;n<5;n++){let s=ae(2.4,.14,.16,[...i,"grille"]);s.position.set(0,-.8+n*.4,.16),e.add(s)}return e}function Ru(i,e,t){let n=new se;n.add(je(i,e,.1,.25,t));let s=je(i,e,.08,.25,t,{border:.12});s.position.z=.1,n.add(s);let r=On([new N(-.35,0,.1),new N(-.3,0,.35),new N(.3,0,.35),new N(.35,0,.1)],.05,t);return r.position.y=-e*.2,n.add(r),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([o,a])=>{let l=Zn(1,0,t,.07);l.position.set(o*(i/2-.22),a*(e/2-.22),.1),n.add(l)}),n}function hp(i,e,t,n){let s=new se,r=nt(.14,t-e,[...n,"conduit"],ne,10);r.position.copy(re(Nt+.4,i,(e+t)/2)),s.add(r);for(let o=e+1;o<t;o+=3.5)s.add(Ti(ae(.5,.25,.55,n),i,o,.22));return s}function av(i,e){let t=new xn;t.moveTo(0,-1.5),t.lineTo(0,9),t.lineTo(4.6,2.6),t.lineTo(5.2,-3.4),t.lineTo(3.6,-3.4),t.lineTo(2.2,-1.5),t.closePath();let n=.6,s=Bt(t,n,.1);s.rotateX(-Math.PI/2),s.translate(0,0,n/2);let r=new se;return r.add(ie(s,ne,e)),[[.5,0],[.5,2],[.5,4],[.5,6],[1.6,4.4],[2.8,2.6],[3.9,1.2],[4.2,-2.4],[2.4,-.6]].forEach(([o,a])=>{let l=nt(.1,n+.06,e,ft,10);l.rotation.x=Math.PI/2,l.position.set(o,a,0),r.add(l)}),r.position.copy(re(Nt-.1,i,Fn.booster.y0+1.5)),r.rotation.y=Math.PI/2-i*De,r}function lv(i,e,t,n){let s=new se,r=3.6,o=h=>.9+1.3*h*h,a=[];for(let h=0;h<=16;h++)a.push(new oe(o(h/16),-r*(h/16)));let l=ie(new Qn(a,48),ne,[...n,"nozzle"]);l.material.side=zt,s.add(l),[.35,.6,.82].forEach(h=>s.add(Pn(o(h)+.03,.05,-r*h,n))),s.add(Pn(o(1)+.02,.13,-r,[...n,"energy","rim"])),s.add(Pn(o(1)-.18,.06,-r+.06,[...n,"energy","rim"]));let c=nt(1.05,.7,n,ne,32);return c.position.y=.35,s.add(c,Pn(1.12,.12,.45,n)),s.position.set(i,t,e),s}var Cu=i=>Nt*Math.pow(Math.cos(i*Math.PI/2),.85);function cv(i,e){let{y1:t,tip:n}=Fn.nose,s=[];for(let r=0;r<=32;r++)s.push(new oe(Cu(r/32),t+(n-t)*r/32));return new Qn(s,nr,i,e)}function ir(){let i=new se;i.name="rocket";let{booster:e,middle:t,nose:n,skirt:s}=Fn,r=new se;r.name="stage:1";let o=["rocket","stage:1"];r.add(eo(Nt,e.y0,e.y1,0,Math.PI*2,o)),r.add(up(e.y1-.4,o)),[-19,-13].forEach(E=>r.add(Pn(Nt+.02,.035,E,o),Zi(E+.3,48,o))),r.add(Zi(e.y0+.4,48,o),Zi(e.y1-1.1,48,o)),r.add(Au(-16,200,o)),r.add(Ti(Ru(1.6,2.2,[...o,"hatch"]),180,-10,.02)),r.add(hp(228,e.y0+1,e.y1-1.2,o)),[45,135,225,315].forEach(E=>r.add(av(E,[...o,"fin"])));let a=ie(new at(Nt,Nt*.86,s,nr,1,!0),ne,[...o,"skirt"]);a.material.side=zt,a.position.y=e.y0-s/2,r.add(a);for(let E=0;E<24;E++){let M=360*E/24,x=ae(.2,s,.24,o);x.position.copy(re(Nt*.93+.08,M,e.y0-s/2)),x.rotation.y=-M*De,r.add(x)}let l=nt(Nt*.86,.3,o,ne,nr);l.position.y=e.y0-s-.15,r.add(l),[0,120,240].forEach(E=>{let M=re(2.4,E);r.add(lv(M.x,M.z,Fn.nozzleY,o));let x=nt(.36,1.3,[...o,"pump"],ne,16);x.position.copy(re(2.3,E+60,Fn.nozzleY+.5)),x.rotation.set(0,-(E+60)*De,Math.PI/2,"YXZ"),r.add(x)}),i.add(r);let c=new se;c.name="stage:2";let h=["rocket","stage:2"],f=[0,180].map((E,M)=>{let x=new se;x.name=`half:${M}`,x.add(eo(Nt,t.y0,t.y1,E*De,Math.PI,[...h,"shell"]));let S=E,C=E+180;return[0,8,15].forEach(A=>x.add(Pn(Nt+.02,.035,A,h,180,S),Zi(A+.3,24,h,S,C))),x.add(Zi(t.y0+.5,24,h,S,C),Zi(t.y1-1.1,24,h,S,C)),x.add(Au(4,S+60,h,180,S),Au(18,S+30,h,180,S)),x.userData.dir=M===0?1:-1,c.add(x),x});c.add(up(t.y1-.4,h)),f[0].add(Ti(ov([...h,"vent"]),160,10.8,.02)),f[1].add(Ti(Ru(1.8,2.6,[...h,"hatch"]),200,1.5,.02)),f[1].add(hp(250,t.y0+1,t.y1-1.2,h));let g=["rocket","energy","energy-line"],u=nt(.08,n.y1-t.y0-1,g,ne,8);u.position.copy(re(Nt+.12,112,(t.y0+n.y1)/2-.5)),f[0].add(u);for(let E=t.y0+2;E<t.y1-1;E+=4)f[0].add(Ti(ae(.45,.22,.3,h),112,E,.06));let p=ie(new nn(.42,24,12),ne,g);p.position.copy(re(Nt+.2,112,t.y1-3));let _=ie(new wt(.62,.06,6,32),ne,g);Ti(_,112,t.y1-3,.12),c.add(p,_),i.add(c);let m=new se;m.name="stage:3";let d=["rocket","stage:3"];m.add(eo(Nt,n.y0,n.y1,0,Math.PI*2,d));let y=ie(cv(0,Math.PI*2),ne,[...d,"cone"]);y.material.side=zt,m.add(y),m.add(Pn(Nt+.02,.05,n.y1,d),Zi(n.y0+.9,48,d),Zi(n.y1-.4,48,d));let b=E=>n.y1+(n.tip-n.y1)*E;m.add(Pn(Cu(.32)+.05,.12,b(.32),[...d,"energy","ring"])),m.add(Pn(Cu(.62)+.02,.04,b(.62),d));let v=ie(new nn(.22,12,8),ne,d);return v.position.y=n.tip,m.add(v),m.add(Ti(Ru(1.4,1.8,[...d,"hatch"]),160,25,.02)),m.add(Ti(rv(.85,d),134,25.1,.06)),i.add(m),[r,...f,m].forEach(E=>Mn(E)),{group:i,stages:[r,c,m],halves:f}}function dp(i,{separate:e=0,open:t=0}={}){let[n]=i.stages;n.position.set(0,-12*e,0),n.rotation.z=.25*e,i.halves.forEach(s=>s.position.x=s.userData.dir*t*Nt*1.5)}function fp(){let i=new se;i.name="pad";let e=["pad"],t=Fn.nozzleY-4.2,n=ie(new at(11,12,1.2,nr),ne,e);n.position.y=t-.6;let s=nt(4.5,.2,e,ne,48);s.position.y=t-.05,i.add(n,s,Pn(4.6,.12,t+.02,e),Pn(8.5,.05,t+.02,e));let r=new se,o=60;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,l])=>{let c=ae(.3,o,.3,e);c.position.set(a*1.4,o/2,l*1.4),r.add(c)});for(let a=3;a<o;a+=4)[0,90,180,270].forEach(l=>{let c=ae(2.8,.18,.18,e);c.position.copy(re(1.4,l,a)),c.rotation.y=-l*De;let h=ae(.1,4.7,.1,e);h.position.copy(re(1.42,l,a+2)),h.rotation.set(0,-l*De,.55,"YXZ"),r.add(c,h)});return[14,36].forEach(a=>{let l=ae(5.2,.4,.8,[...e,"arm"]);l.position.set(-3.9,a,0),r.add(l)}),r.position.set(Nt+4.6,t,0),i.add(r),Mn(i)}function pp(i=7){let e=new se;e.name="moon";let t=["moon"];return e.add(ie(new nn(i,64,32),ne,t)),[[20,30,1.4],[-30,60,1],[40,140,1.8],[-10,200,.9],[55,260,1.2],[-45,300,1.5],[5,95,.7],[30,340,.6],[-60,20,.8]].forEach(([n,s,r])=>{let o=ie(new wt(r,r*.12,6,32),ne,t),a=new N().setFromSphericalCoords(i,(90-n)*De,s*De);o.position.copy(a),o.lookAt(a.clone().multiplyScalar(2)),e.add(o)}),e}var Iu=(i,e,t,n)=>(i.position.set(e,t,n),i);function mp(i,{throughput:e=.66,stability:t=.7,productivity:n=.64,cost:s=.58,experience:r=2}={}){let o=new se;o.name="instrument-panel";let a=[...i,"instruments"],l=je(8.6,4.2,1.4,.8,a);l.position.z=-1.4;let c=je(10,5,.5,.9,a),h=je(9.5,4.5,.06,.7,a,{border:.1});h.position.z=.5,o.add(l,c,h),[[-4.55,2.05],[4.55,2.05],[-4.55,-2.05],[4.55,-2.05]].forEach(([C,A])=>o.add(Iu(Zn(1,0,a,.11),C,A,.5)));let f=je(4.2,4.2,.12,.8,a);f.position.set(-.6,0,.5),o.add(f),[[-1.75,1.75],[1.75,1.75],[-1.75,-1.75],[1.75,-1.75]].forEach(([C,A])=>o.add(Iu(Zn(1,0,a,.09),-.6+C,A,.62)));let g=bi(1.72,[...a,"inst:throughput"],{value:e,range:[.55,.85],sub:{r:.3,x:0,y:-.46,value:t,name:"inst:stability"}});g.name="inst:throughput",g.position.set(-.6,0,.62),o.add(g);let u=je(1.1,.3,.05,.04,[...a,"counter"]);u.position.set(-.6,.62,.8),o.add(u);let p=nt(.3,.35,[...a,"energy","inst:knob"],ne,20);p.rotation.x=Math.PI/2,p.position.set(-2.45,-1.85,.75),p.name="inst:knob",o.add(p);let _=new se;_.name="inst:cost";let m=[...a,"inst:cost"];_.add(je(1.05,3.7,.12,.3,m));let d=nt(.2,3,[...m,"glass"],ne,20);d.position.z=.36;let y=nt(.13,3*s,[...m,"energy"],ne,16);y.position.set(0,-1.5+1.5*s,.36);let b=ie(new wt(.22,.05,6,24),ne,[...m,"energy"]);b.rotation.x=Math.PI/2,b.position.set(0,-1.5+3*s,.36),_.add(d,y,b),[1.5,-1.5].forEach(C=>{let A=nt(.26,.16,m,ne,20);A.position.set(0,C,.36),_.add(A)});for(let C=0;C<=8;C++){let A=ae(C%4===0?.26:.14,.03,.03,m,ft);A.position.set(.38+(C%4===0?0:-.06),-1.4+2.8*C/8,.16),_.add(A)}let v=je(.8,.2,.04,.03,m);v.position.set(0,-2.02,.12),_.add(v),_.position.set(-4,.15,.5),o.add(_);let E=je(2.1,2.1,.14,.35,a);E.position.set(3.35,.95,.5),o.add(E),o.add(Iu(Zn(2,1.7,a,.07),3.35,1.85,.64));let M=bi(.78,[...a,"inst:productivity"],{value:n,centre:!0,ticks:8,minor:1,sweep:240});M.name="inst:productivity",M.position.set(3.35,.9,.64),o.add(M);let x=new se;x.name="inst:experience";let S=[...a,"inst:experience"];x.add(je(2.1,1.25,.1,.25,S));for(let C=0;C<3;C++){let A=C<r,D=ie(new wt(.27,.06,6,28),ne,S),z=nt(.22,.14,A?[...S,"energy","lamp"]:[...S,"lamp"],ne,24);z.rotation.x=Math.PI/2,[D,z].forEach(P=>P.position.set((C-1)*.66,.14,.16));let k=je(.5,.14,.03,.03,S);k.position.set((C-1)*.66,-.36,.1),x.add(D,z,k)}return x.position.set(3.35,-1.15,.5),o.add(x),o}function gp({score:i=72,rule:e=100,ceiling:t=79}={}){let n=new se;n.name="autonomy";let s=["autonomy"],r=4,o=240,a=E=>-o/2+o*E/100,l=ie(new at(r*1.2,r*1.24,.5,96),ne,[...s,"housing"]);l.position.y=-.2,n.add(l);for(let E=0;E<8;E++){let M=nt(.13,.08,s,ft,12);M.position.copy(re(r*1.12,22.5+45*E,.08)),n.add(M)}n.add(ie(new at(r,r,.3,96),ne,s));let c=ie(new wt(r*1.03,.2,10,96),ne,[...s,"energy","bezel"]);c.rotation.x=Math.PI/2,c.position.y=.2,n.add(c),ys.forEach(({from:E,to:M,id:x,soft:S})=>{let C=ie(Bt(Mi(r*.7,r*.86,a(E),a(M)),.16,.02),ne,[...s,x,...S?["soft"]:[]]);C.position.y=.32,n.add(C)});let h=ys[ys.length-1],f=new se;for(let E=h.from+1;E<h.to;E+=2){let M=ae(.05,.05,r*.15,[...s,h.id],ft);M.position.copy(re(r*.78,a(E),.36)),M.rotation.y=-a(E)*De+.5,f.add(M)}n.add(f);for(let E=0;E<=100;E+=5){let M=ae(.07,.06,E%50===0?.7:E%10===0?.45:.25,s,ft);M.position.copy(re(r*.6-(E%10===0?0:.1),a(E),.2)),M.rotation.y=-a(E)*De,n.add(M)}let g=[["ring:score",2.1,["energy"],.5],["ring:rule",1.62,["accent"],.38],["ring:ceiling",1.14,[],.26]].map(([E,M,x,S])=>{let C=ie(new Xt,ne,[...s,E,...x]);return C.position.y=S,C.userData={...C.userData,ring:M,value:-1},n.add(C),C}),u=(E,M,x)=>{E.visible=x&&M>.5;let S=Math.round(M*2)/2;!E.visible||E.userData.value===S||(E.userData.value=S,E.geometry.dispose(),E.geometry=Bt(Mi(E.userData.ring-.2,E.userData.ring+.2,a(0),a(S)),.14,.03))},p=new se;p.name="ceiling-block";let _=ae(.36,.55,r*.92-.95,[...s,"ceiling"],ft);_.position.set(0,.45,-(.95+r*.92)/2);let m=ae(.5,.12,.5,[...s,"ceiling","energy"]);m.position.set(0,.78,-r*.92),p.add(_,m),n.add(p);let d=new se;d.name="needle";let y=ae(.22,.14,r*.85,[...s,"energy","needle"]);y.position.set(0,.32,-r*.4);let b=ae(.4,.14,r*.25,[...s,"energy","needle"]);b.position.set(0,.32,r*.12);let v=ie(new at(.45,.45,.3,32),ft,s);return v.position.y=.36,d.add(y,b,v),n.add(d),n.userData.set=({score:E=0,rule:M=100,ceiling:x=100},S=["score","rule","ceiling"])=>{u(g[0],E,S.includes("score")),u(g[1],M,S.includes("rule")),u(g[2],x,S.includes("ceiling")),p.visible=S.includes("ceiling")&&x<99.5,p.rotation.y=-a(x)*De,f.visible=Math.min(S.includes("rule")?M:100,S.includes("ceiling")?x:100)<h.from,d.rotation.y=-a(Math.min(E,M,x))*De},n.userData.set({score:i,rule:e,ceiling:t}),Mn(n,{keep:[...g,p,d]})}var bt=(i,e,t)=>new N(i,e,t),st=(i,e,t,n,s,r=0)=>(e.position.set(t,n,s),e.rotation.y=r,i.add(e),e);function xp(i){let e=new se;for(let o=0;o<5;o++){let a=72*o,l=ae(.1,.08,.7,i);l.position.copy(re(.35,a,.18)),l.rotation.y=-a*De;let c=ie(new nn(.08,8,6),ne,i);c.position.copy(re(.7,a,.08)),e.add(l,c)}let t=nt(.06,.7,i,ne,10);t.position.y=.55;let n=ae(1,.18,.95,[...i,"chair"]);n.position.y=.95;let s=ae(.95,1.1,.14,[...i,"chair"]);s.position.set(0,1.65,.5),s.rotation.x=.12;let r=o=>{let a=ae(.1,.08,.6,i);a.position.set(o*.52,1.3,.05);let l=ae(.06,.32,.06,i);l.position.set(o*.52,1.12,.2),e.add(a,l)};return r(-1),r(1),e.add(t,n,s),e}function _p(i){let e=new se,t=ae(.9,.08,.85,[...i,"chair"]);t.position.y=.95;let n=ae(.9,.6,.06,[...i,"chair"]);return n.position.set(0,1.55,.42),e.add(t,n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>{let o=nt(.04,.95,i,ne,6);o.position.set(s*.38,.47,r*.36),e.add(o)}),[-1,1].forEach(s=>{let r=nt(.03,.6,i,ne,6);r.position.set(s*.38,1.25,.42),e.add(r)}),e}function Pu(i){let e=new se;return[-1,1].forEach(t=>{let n=ae(.55,.04,.75,[...i,"manual"]);n.position.set(t*.29,.04,0),n.rotation.z=-t*.08,e.add(n);for(let s=0;s<4;s++){let r=ae(.38,.01,.025,i,ft);r.position.set(t*.29,.08+.02*t*-0,-.25+s*.16),r.rotation.z=-t*.08,e.add(r)}}),e}function yp(i){let e=new se,t=ie(new wt(.32,.035,6,24,Math.PI),ne,[...i,"headset"]);return t.rotation.x=-Math.PI/2,t.rotation.z=0,t.position.y=.1,e.add(t),[-1,1].forEach(n=>{let s=nt(.14,.12,[...i,"headset"],ne,14);s.rotation.z=Math.PI/2,s.position.set(n*.32,.12,0),e.add(s)}),e}function Ml(i,{x0:e,x1:t,z0:n,z1:s,h:r}){let o=new se,a=4;for(let l=e;l<t-.01;l+=a)for(let c=n;c<s-.01;c+=a){let h=Math.min(a,t-l),f=Math.min(a,s-c);o.add(st(o,ae(h-.05,.2,f-.05,[...i,"floor"]),l+h/2,-.1,c+f/2))}st(o,ae(t-e,r,.3,[...i,"wall"]),(e+t)/2,r/2,n-.15),st(o,ae(.3,r,s-n,[...i,"wall"]),e-.15,r/2,(n+s)/2);for(let l=e+a;l<t;l+=a)st(o,ae(.06,r,.04,i),l,r/2,n+.02);for(let l=n+a;l<s;l+=a)st(o,ae(.04,r,.06,i),e+.02,r/2,l);return st(o,ae(t-e,.25,.1,i),(e+t)/2,.12,n+.05),st(o,ae(.1,.25,s-n,i),e+.05,.12,(n+s)/2),o}function wi(i,e,t,n){let s=new se;s.name=n,s.add(je(i+.4,e+.4,.2,.12,[...t,"screen",n]));let r=je(i,e,.06,.06,[...t,"screen",n,"glass"]);return r.position.z=.2,s.add(r),s}var uv={r:6,x0:-9,x1:5,floor:-2.6,dome:3.6};function vp(){let i=new se;i.name="cockpit";let e=["cockpit"],{r:t,x0:n,x1:s,floor:r,dome:o}=uv,a=[25,270],l=I=>I.rotateZ(-Math.PI/2),c=l(new at(t,t,s-n,96,1,!0,a[0]*De,(a[1]-a[0])*De));c.translate((n+s)/2,0,0);let h=ie(c,ne,[...e,"shell"]);h.material.side=zt,i.add(h);let f=[];for(let I=0;I<=20;I++){let L=I/20;f.push(new oe(t*Math.sqrt(Math.max(0,1-L*L)),o*L))}let g=l(new Qn(f,96,a[0]*De,(a[1]-a[0])*De));g.translate(s,0,0);let u=ie(g,ne,[...e,"dome"]);u.material.side=zt,i.add(u);let p=(I,L,U=0)=>bt(I,-(t-U)*Math.sin(L*De),(t-U)*Math.cos(L*De));[-7.5,-4.5,-1.5,1.5,4.5].forEach(I=>{let L=l(Bt(Mi(t-.45,t-.02,180-a[1],180-a[0],48),.3,.03)),U=ie(L,ne,[...e,"frame"]);U.position.x=I+.15,i.add(U)}),[70,120,200,245].forEach(I=>{let L=ae(s-n,.12,.12,[...e,"stringer"]);L.position.copy(p((n+s)/2,I,.08)),i.add(L)}),[[150,.14],[162,.1],[228,.12]].forEach(([I,L])=>{let U=nt(L,s-n-.4,[...e,"conduit"],ne,10);U.rotation.z=Math.PI/2,U.position.copy(p((n+s)/2,I,.55)),i.add(U),[-6,-3,0,3].forEach(X=>{let H=ae(.3,.4,.4,e);H.position.copy(p(X,I,.45)),i.add(H)})});let _=On([p(-8.2,150,.55),p(-8.2,120,.9),bt(-8.2,r+.6,-3.6)],.12,[...e,"conduit"]);i.add(_);let m=Math.sqrt(t*t-r*r)-.1;for(let I=n+.2;I<s-1;I+=2.6)for(let L=0;L<3;L++){let U=2*m/3,X=ae(2.55,.18,U-.06,[...e,"floor"]);X.position.set(I+1.3,r-.09,-m+U*(L+.5)),i.add(X)}let d=je(3,2.2,.06,.25,[...e,"hatch"],{border:.14});d.rotation.x=-Math.PI/2,d.position.set(-5.4,r+.01,1.8),i.add(d),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([I,L])=>{let U=Zn(1,0,e,.08);U.rotation.x=-Math.PI/2,U.position.set(-5.4+I*1.3,r+.02,1.8+L*.9),i.add(U)});let y=new se;y.name="door",y.add(je(2.4,3.4,.12,.6,[...e,"door"]));let b=je(2.4,3.4,.1,.6,[...e,"door"],{border:.16});b.position.z=.12;let v=je(.9,.7,.06,.15,[...e,"door"],{border:.1});v.position.set(0,.8,.12);let E=ie(new wt(.38,.05,6,24),ne,[...e,"door"]);E.position.set(0,-.4,.3),y.add(b,v,E),y.position.set(-6.4,.2,-5.62),i.add(y);let M=new se;M.add(Object.assign(Yi(1.6,1.1,e),{}));let x=er(4,3,e,[1,6]);x.position.x=1.8,M.add(x);let S=Yi(1.2,1.1,e,{traces:2});S.position.x=3.4,M.add(S),M.position.set(-3.2,1.6,-5.55),i.add(M);let C=ae(4.6,.9,1.1,e);C.position.set(-1.6,r+.45,-4.9),i.add(C);let A=ae(1.6,2.1,9.2,[...e,"console"]);A.position.set(4.1,r+1.05,0),i.add(A);let D=mp(e);D.scale.setScalar(.62),D.rotation.order="YXZ",D.rotation.set(-.38,-Math.PI/2,0),D.position.set(4.3,.95,0),i.add(D);let z=ae(1.1,.25,6.6,e);z.position.set(4.75,2.2,0),i.add(z),[-1,1].forEach(I=>{let L=new se;L.add(je(3,2.6,.3,.3,[...e,"console"]));let U=Yi(1.3,.9,e);U.position.set(-.6,.55,.3);let X=er(3,2,e,I>0?[2]:[3]);X.position.set(.75,.55,.3);let H=new se;[-.9,-.3,.3,.9].forEach((Y,J)=>{let ce=$f(e,J%2===0);ce.scale.setScalar(.6),ce.position.x=Y,H.add(ce)}),H.position.set(0,-.6,.3),L.add(U,X,H),L.rotation.order="YXZ",L.rotation.set(-.3,-Math.PI/2-I*.55,0),L.position.set(3.4,.6,I*4.1),i.add(L)});let k=ae(1.8,1.5,1,[...e,"console"]);k.position.set(2.2,r+.75,0),i.add(k),[-.25,.25].forEach(I=>{let L=nt(.05,.6,[...e,"energy","throttle"],ne,8);L.position.set(2.3,r+1.75,I),L.rotation.z=.35;let U=ae(.18,.14,.3,[...e,"energy","throttle"]);U.position.set(2.2,r+2.05,I),i.add(L,U)});let P=er(3,2,e,[4]);return P.rotation.x=-Math.PI/2,P.rotation.z=Math.PI/2,P.position.set(1.7,r+1.51,0),i.add(P),[-1.95,1.95].forEach((I,L)=>{let U=new se;U.name=`seat:${L+1}`;let X=[...e,"seat"],H=ae(1.3,.5,1.2,X);H.position.y=.25;let Y=nt(.18,.6,X,ne,12);Y.position.y=.8;let J=ae(1.5,.35,1.5,X);J.position.y=1.25;let ce=ae(.35,2.5,1.5,X);ce.position.set(-.78,2.45,0),ce.rotation.z=.12;let de=ae(.3,.6,.9,X);de.position.set(-.95,4,0),de.rotation.z=.12,U.add(H,Y,J,ce,de),[-1,1].forEach(Ie=>{let Fe=ae(1.1,.14,.18,X);Fe.position.set(-.1,1.95,Ie*.82);let ve=ae(1.3,.3,.16,X);ve.position.set(0,1.55,Ie*.8),U.add(Fe,ve)}),U.position.set(.6,r,I),i.add(U);let q=On([bt(2.5,r,I),bt(2.6,r+1.5,I),bt(2.45,r+2.5,I)],.08,[...e,"energy","column"]),ue=On([bt(2.4,r+3.05,I-.55),bt(2.4,r+2.55,I-.5),bt(2.45,r+2.5,I),bt(2.4,r+2.55,I+.5),bt(2.4,r+3.05,I+.55)],.07,[...e,"energy","column"]);i.add(q,ue)}),[[1.4,205],[1.4,240],[1.4,262],[2.4,230]].forEach(([I,L],U)=>{let X=t*Math.sqrt(1-(I/o)**2)-.06,H=je(U===3?1.3:1.6,U===3?.8:1.1,.08,.2,[...e,"window"],{border:.14});H.position.set(s+I,-X*Math.sin(L*De),X*Math.cos(L*De)),H.lookAt(bt(s+I*.4,0,0)),i.add(H)}),Mn(i)}function Sp(){let i=new se;i.name="classroom";let e=["classroom"];i.add(Ml(e,{x0:-14,x1:14,z0:-10,z1:10,h:9}));let t=new se;t.name="blackboard",t.add(je(11.4,4.8,.2,.1,[...e,"board"]));let n=je(11,4.4,.05,.06,[...e,"board"]);n.position.z=.2,t.add(n);let s=ae(11,.12,.3,e);s.position.set(0,-2.45,.3),t.add(s);let r=[...e,"energy","drawing"],o=(S,C,A,D,z)=>{let k=ie(new wt(1,.025,4,64),ne,r);k.scale.set(S,C,1),k.rotation.z=z,k.position.set(A,D,.3),t.add(k)};o(1.6,.9,-3.4,.3,.3),o(1.1,1.1,-3.4,.3,0),o(1.4,.6,.6,.6,-.4);let a=nt(.3,.04,r,ne,24);a.rotation.x=Math.PI/2,a.position.set(-3.4,.3,.3),t.add(a);let l=On([bt(-1.6,-1.4,.3),bt(-.4,.6,.3),bt(1.8,1.6,.3),bt(3.2,1,.3)],.03,r);t.add(l);for(let S=0;S<6;S++){let C=1.2+S*7%5*.4,A=ae(C,.06,.02,e,ft);A.position.set(2.8+C/2,1.3-S*.5,.29),t.add(A)}t.position.set(1,5,-10),i.add(t);let c=wi(3.4,2.6,e,"poster");hv(c,r),c.position.set(-9.5,5.6,-10),i.add(c);let h=wi(4,3,e,"schematic");for(let S=0;S<5;S++){let C=ae(2.6-S%2*.8,.05,.02,e,ft);C.position.set(-.4,.9-S*.45,.3),h.add(C)}h.position.set(-14,5.5,3),h.rotation.y=Math.PI/2,i.add(h);let f=vs(ir().group,{byTags:!0});f.scale.setScalar(.13),f.rotation.z=-Math.PI/2,f.position.set(-6.2,2.4,-5.2),f.name="model",f.traverse(S=>S.isMesh&&(S.userData.tags=[...S.userData.tags||[],"model"])),i.add(f),[-8.6,-3.8].forEach(S=>{let C=new se;C.add(st(C,ae(.3,1.6,.25,e),0,.8,-.55),st(C,ae(.3,1.6,.25,e),0,.8,.55)),C.add(st(C,ae(.4,.2,1.6,e),0,1.65,0),st(C,ae(1.4,.15,1.6,e),0,.08,0)),C.position.set(S,0,-5.2),i.add(C)});let g=je(1.4,.4,.06,.06,e);g.position.set(-6.2,.6,-4.4),i.add(g);let u=new se;u.name="simulator";let p=[bt(2.6,0,0),bt(2.5,.4,0),bt(1.5,3.3,0),bt(1.3,3.6,0),bt(.9,4.1,0),bt(0,4.3,0)].map(S=>new oe(S.x,S.y)),_=ie(new Qn(p,48),ne,[...e,"capsule"]);_.material.side=zt,_.position.y=1.4,u.add(_);let m=ie(new wt(2.6,.12,6,48),ne,[...e,"energy","capsule"]);m.rotation.x=Math.PI/2,m.position.y=1.4,u.add(m),[0,90,180,270].forEach(S=>{let C=nt(.12,1.5,e,ne,8);C.position.copy(re(1.9,S+45,.7)),u.add(C)}),[[30,2.6],[150,2.6]].forEach(([S,C])=>{let A=je(.8,.6,.06,.15,[...e,"window"],{border:.1}),D=2.5-(C-1.8)/2.9*1;A.position.copy(re(D+.02,S,C)),A.lookAt(re(D*3,S,C+.6)),u.add(A)});let d=je(1.2,1.4,.08,.3,[...e,"hatch"],{border:.12});d.position.copy(re(2.05,90,2.4)),d.lookAt(re(6,90,3.2)),u.add(d);for(let S=0;S<6;S++){let C=ae(.9,.06,.06,e);C.position.copy(re(3,90,.25+S*.38)),C.rotation.y=-90*De,u.add(C)}[-.45,.45].forEach(S=>{let C=ae(.06,2.4,.06,e),A=re(3,90,1.2);C.position.set(A.x,1.2,A.z+S),u.add(C)});let y=new se;y.add(st(y,nt(.12,6,e,ne,8),0,3,0),st(y,ae(2.6,.2,.2,e),-1.2,6,0)),u.add(st(u,y,3.6,0,-1.6)),u.add(On([bt(2.4,6,-1.6),bt(1.4,5.6,-1.4),bt(1,5.2,-.7)],.06,[...e,"energy","umbilical"])),u.position.set(9.4,0,2.6),u.rotation.y=-.6,i.add(u);let b=0;[-2.4,.8,4,7.2].forEach(S=>[-7.4,-3,1.4].forEach(C=>{let A=new se;A.name=`desk:${++b}`,A.add(st(A,ae(2.4,.12,1.3,[...e,"desk"]),0,1.6,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([D,z])=>A.add(st(A,nt(.05,1.6,e,ne,6),D*1.1,.8,z*.55))),A.add(st(A,ae(2.2,.06,.4,e),0,1.25,-.4)),A.add(st(A,Pu(e),.3,1.66,.05)),A.add(st(A,_p(e),0,0,1.25)),A.position.set(C,0,S),i.add(A)}));let v=new se;v.name="lectern",v.add(st(v,ae(1.3,2.3,.9,e),0,1.15,0));let E=ae(1.5,.12,1.1,e);E.position.set(0,2.4,.05),E.rotation.x=.25,v.add(E,st(v,Pu(e),0,2.5,.05)),v.position.set(4.2,0,-7.2),i.add(v);let M=new se;M.add(st(M,ae(3,2.2,1.4,e),0,1.1,0));let x=new se;return x.add(st(x,Yi(1.2,.8,e),-.7,0,0),st(x,er(3,2,e,[1,5]),.8,0,0)),x.rotation.x=-.6,x.position.set(0,2.25,.2),M.add(x),M.position.set(-12.2,0,.5),M.rotation.y=Math.PI/2,i.add(M),Mn(i)}function hv(i,e){[[1.2,.5,0],[.7,.7,0]].forEach(([t,n,s])=>{let r=ie(new wt(1,.025,4,48),ne,e);r.scale.set(t,n,1),r.rotation.z=s,r.position.z=.3,i.add(r)})}var dv={consoles:[[-6.5,-4.5],[6.5,-4.5],[-6.5,1.5],[6.5,1.5],[-6.5,7.5],[6.5,7.5]]};function fv(i,e){let t=new se;t.name=e;let n=[...i,"console",e],s=(l,c,h,f,g=0)=>(l.position.copy(re(c,h,f)),l.rotation.order="YXZ",l.rotation.set(g,-h*De,0),t.add(l),l),r=ie(Bt(Mi(3.9,5.2,-36,36),1.5,.03),ne,n);r.position.y=1.5;let o=ie(Bt(Mi(3.6,5.3,-38,38),.12,.02),ne,n);o.position.y=1.62;let a=ie(Bt(Mi(4.8,5.3,-36,36),1.6,.03),ne,n);return a.position.y=3.2,t.add(r,o,a),[-24,0,24].forEach(l=>s(je(1.6,1,.06,.08,n,{border:.08}),3.88,l,.75)),[-24,24].forEach(l=>s(ae(.4,.05,.05,n,ft),3.86,l,1)),[-27,-9,9,27].forEach((l,c)=>s(Yi(2.1,1.25,n,{traces:3,lit:c%2===0}),4.75,l,2.45,-.18)),s(ae(1.7,.06,.5,n),4.05,0,1.7),s(ae(.2,.06,.25,n),4.05,14,1.7),s(yp(n),4.3,-18,1.68),t.add(st(t,xp(n),0,0,-2.8)),t}function Mp(){let i=new se;i.name="mission";let e=["mission"],t=[...e,"energy"];i.add(Ml(e,{x0:-15,x1:15,z0:-11,z1:11,h:10})),dv.consoles.forEach(([m,d],y)=>{let b=fv(e,`console:${y+1}`);b.position.set(m,0,d+2.8),i.add(b)});let n=wi(8,5,e,"screen:flight"),s=nt(.55,.04,e,ne,32);s.rotation.x=Math.PI/2,s.position.set(-2.7,-1.3,.3);let r=nt(.45,.04,e,ne,32);r.rotation.x=Math.PI/2,r.position.set(2.8,1.3,.3);let o=new ls(bt(-2.4,-.9,.32),bt(-1.2,2,.32),bt(2.3,1.2,.32));n.add(s,r,ie(new Bi(o,48,.04,6),ne,e));let a=new mi(Array.from({length:17},(m,d)=>o.getPoint(.55*d/16)));n.add(ie(new Bi(a,32,.07,6),ne,t));let l=ie(new Fi(.14,.45,10),ne,t);l.position.copy(o.getPoint(.55)),l.quaternion.setFromUnitVectors(bt(0,1,0),o.getTangent(.55)),n.add(l);let c=ie(new wt(1,.02,4,48),ne,e);c.scale.set(1.1,.5,1),c.position.set(-2.7,-1.3,.32),n.add(c),st(i,n,-9.8,5.8,-11);let h=wi(9.2,5.6,e,"screen:site");h.add(st(h,ae(8.2,.45,.04,e),0,2.15,.3)),h.add(st(h,ae(.7,.25,.04,t),-3.6,2.15,.34)),h.add(st(h,je(3.8,1.8,.04,.08,[...e,"soft"]),-2,.8,.28)),[[3.4,1.4],[2.8,1],[1.8,.6]].forEach(([m,d])=>h.add(st(h,ae(m,.12,.04,e,ft),.4+m/2,d,.3))),h.add(st(h,ae(1.2,.32,.04,t),1,.1,.3)),[-2.8,0,2.8].forEach((m,d)=>[-.9,-1.9].forEach((y,b)=>h.add(st(h,je(2.5,.8,.04,.06,(d+b)%3===0?[...e,"soft"]:e,{border:(d+b)%3===0?0:.06}),m,y,.28)))),st(i,h,.6,6.3,-11);let f=wi(6.4,5,e,"screen:dials");[{value:.66,range:[.55,.85]},{value:.7,range:[.6,.95]},{value:.5,ticks:4,minor:0},{value:.64,centre:!0,ticks:8,minor:1,sweep:240}].forEach((m,d)=>{let y=bi(.75,[...e,"wall-dial"],{ticks:10,minor:1,...m});y.position.set(d%2?1.4:-1.4,d<2?.95:-1,.28),f.add(y)}),st(i,f,10.2,5.8,-11);let g=wi(8,4.4,e,"screen:rocket"),u=vs(ir().group,{byTags:!0});u.scale.setScalar(.09),u.rotation.z=-Math.PI/2,u.position.set(-.6,0,.75),g.add(u),st(i,g,-15,6,-5,Math.PI/2);let p=wi(6,5,e,"screen:list");for(let m=0;m<7;m++)p.add(st(p,ae(.18,.18,.04,m<3?t:e),-2,1.6-m*.5,.3)),p.add(st(p,ae(2.4+m*3%4*.3,.1,.04,e,ft),-.3+m*3%4*.15,1.6-m*.5,.3));st(i,p,-15,6,4,Math.PI/2);let _=bi(.55,e,{value:.3,ticks:12,minor:0,sweep:360});return st(i,_,-3.8,9.3,-10.7),Mn(i)}var Ji=(i,e,t)=>new N(i,e,t);function bl(i=[],{score:e=.86}={}){let t=new se;t.name="cartridge";let n=[...i,"cartridge"],s=ae(3,.7,1.1,[...n,"cart:body"]);t.add(s);let r=ae(3.1,.08,.3,n);It(r,0,-.39,0),t.add(r);let o=je(1.5,.46,.04,.05,[...n,"cart:label"]);It(o,-.35,0,.55),t.add(o);for(let g=0;g<3;g++)t.add(It(ae(1.1-g*.25,.03,.02,n,ft),-.48-g*.12,.12-g*.12,.6));let a=new se;a.name="cart:tools",[-.28,.28].forEach((g,u)=>{let p=nt(.12,.3,[...n,"cart:tools"],ne,16);p.rotation.z=Math.PI/2,It(p,1.65,.05,g);let _=ie(new Fi(.16,.36,16),ne,[...n,"cart:tools"]);_.rotation.z=-Math.PI/2,It(_,1.98,.05,g),a.add(p,_),u===0&&a.add(It(ae(.08,.3,.08,[...n,"cart:tools"]),1.75,.3,g))}),t.add(a);let l=new se;l.name="cart:plug";let c=nt(.26,.3,[...n,"cart:plug"],ne,20);c.rotation.z=Math.PI/2,It(c,-1.65,0,0),l.add(c),[-.1,.1].forEach(g=>{let u=nt(.04,.22,[...n,"cart:plug"],ft,8);u.rotation.z=Math.PI/2,l.add(It(u,-1.88,g,0))}),l.add(On([Ji(-1.82,0,0),Ji(-2.4,-.1,.1),Ji(-2.9,-.6,.5),Ji(-3.5,-.8,.9)],.07,[...n,"cart:plug","energy"])),t.add(l);let h=new se;h.name="cart:clamp",[.55,.95].forEach(g=>{let u=ae(.12,.84,1.24,[...n,"cart:clamp","energy"]);h.add(It(u,g,0,0));let p=Zn(1,0,[...n,"cart:clamp"],.06);p.position.set(g,.3,.62),h.add(p)}),t.add(h);let f=bi(.32,[...n,"cart:dial"],{value:e,ticks:5,minor:1,range:[.8,1]});return f.name="cart:dial",f.rotation.x=-Math.PI/2,It(f,-.9,.36,0),t.add(f),t.add(On([Ji(-1.2,.36,-.3),Ji(-1.2,.7,-.3),Ji(-.7,.7,-.3),Ji(-.7,.36,-.3)],.05,n)),t}function bp(i=[],{slots:e=4,selected:t=1}={}){let n=new se;n.name="model-bay";let s=[...i,"model-bay"],r=e*1.1+.4;n.add(It(ae(r,.2,1.6,s),0,.1,0)),n.add(It(ae(r,.16,1.6,s),0,2.6,0)),[-r/2+.1,r/2-.1].forEach(u=>n.add(It(ae(.2,2.6,1.6,s),u,1.3,0)));for(let u=0;u<e;u++){let p=-r/2+.75+u*1.1,_=new se;_.name=`model:${u+1}`;let m=[...s,`model:${u+1}`];_.add(It(ae(.8,1.7,1.3,m),0,0,0)),_.add(It(je(.5,.3,.04,.05,m),0,.5,.66)),_.add(It(ae(.5,.06,.04,m,ft),0,-.1,.67)),_.add(It(ae(.3,.06,.04,m,ft),-.1,-.25,.67));let d=nt(.08,.5,m,ne,10);d.rotation.x=Math.PI/2,_.add(It(d,0,-.55,.85)),It(_,p,1.15,0),n.add(_),u<e-1&&n.add(It(ae(.06,2.3,1.5,s),p+.55,1.35,0))}let o=nt(.06,r-.4,s,ne,8);o.rotation.z=Math.PI/2,n.add(It(o,0,3,.4));let a=new se;a.name="selector";let l=u=>-r/2+.75+u*1.1,c=[...s,"selector","energy"];a.add(It(ae(.5,.36,.5,c),0,3,.4)),a.add(It(nt(.05,.7,c,ne,8),0,2.5,.4)),a.add(It(ae(.5,.08,.2,c),0,2.15,.4)),n.add(a);let h=new se;h.name="indicator",h.add(It(nt(.25,.25,[...s,"indicator"],ne,16),r/2-.5,2.8,0)),h.add(It(ie(new nn(.2,16,10,0,Math.PI*2,0,Math.PI/2),ne,[...s,"indicator","energy"]),r/2-.5,2.92,0)),n.add(h);let f=n.getObjectByName(`model:${t+1}`),g=f.position.clone();return n.userData.set=u=>{a.position.x=l(e-1)+.9+(l(t)-l(e-1)-.9)*u,f.position.set(g.x,g.y+1.9*(1-u),g.z+.9*(1-u))},n.userData.set(1),n}var Ze=(i,e,t)=>new N(i,e,t),Jt=Fn.r,sr={rocket:{"stage:1":["rocket",re(Jt,150,-15),["stages"]],"stage:2":["rocket",re(Jt,150,8),["stages"]],"stage:3":["rocket",re(Jt*.62,150,31),["stages"]],"energy-line":["rocket",re(Jt+.2,112,19),["energy"]],nozzles:["rocket",Ze(0,Fn.nozzleY-3.6,0),[]],moon:["moon",Ze(0,0,0),["target"]],"pillar:pdlc":[null,Ze(0,.3,0),["pillars"]],"pillar:platform":[null,re(3.4,150,-2.6),["pillars"]],"pillar:measure":["rocket",re(Jt,150,23),["pillars"]],"pillar:people":["rocket",re(Jt+.1,160,25),["pillars"]],"part:line":["rocket",re(Jt+.2,112,19),["pin:1"]],"part:bay":["rocket",re(Jt,140,.5),["pin:1"]],"part:hatch":["rocket",re(Jt,160,25),["pin:2"]],"part:cabin":["rocket",re(Jt*.62,150,31.5),["pin:2"]],"part:bays":["rocket",re(Jt,150,6),["pin:3"]],"part:conduit":["rocket",re(Jt+.1,170,13.5),["pin:3"]],"part:cockpit":["rocket",re(Jt*.45,150,35),["pin:4"]],"part:dials":["rocket",re(Jt,140,23),["pin:4"]]},cockpit:{"inst:throughput":["inst:throughput",Ze(0,1.2,.3),["instruments"]],"inst:stability":["inst:stability",Ze(0,.3,.2),["instruments"]],"inst:cost":["inst:cost",Ze(0,.9,.5),["instruments"]],"inst:productivity":["inst:productivity",Ze(0,.5,.3),["instruments"]],"inst:experience":["inst:experience",Ze(0,.14,.3),["instruments"]],seats:["seat:1",Ze(-.9,4.2,0),["cabin"]],columns:[null,Ze(2.4,.4,1.95),["cabin"]],hatch:[null,Ze(-5.4,-2.6,1.8),["cabin"]]},classroom:{specialisation:["model",Ze(0,0,0),["tiers"]],"deep-dives":["blackboard",Ze(-2.4,.3,.3),["tiers"]],hackathon:["simulator",Ze(0,5.6,0),["tiers"]],"self-paced":["desk:5",Ze(.3,1.7,.05),["tiers"]]},mission:{"screen:site":["screen:site",Ze(0,0,.3),["screens"]],"screen:flight":["screen:flight",Ze(0,0,.3),["screens"]],"screen:dials":["screen:dials",Ze(0,0,.3),["screens"]],"screen:rocket":["screen:rocket",Ze(0,0,.3),["screens"]],"screen:list":["screen:list",Ze(0,0,.3),["screens"]],console:["console:6",Ze(0,3.2,-4.2),["screens"]]},engine:{capabilities:["cap:design:1",Ze(0,.5,0),["capabilities"]],"cart:tools":["cartridge",Ze(1.95,.05,.28),["cartridge"]],"cart:label":["cartridge",Ze(-.35,0,.6),["cartridge"]],"cart:plug":["cartridge",Ze(-2.9,-.6,.5),["cartridge"]],"cart:clamp":["cartridge",Ze(.75,.42,0),["cartridge"]],"cart:dial":["cartridge",Ze(-.9,.4,0),["cartridge"]],"bay:manual":["model:2",Ze(0,.9,.65),["bay"]],"bay:selector":["selector",Ze(0,3.2,.4),["bay"]],"bay:indicator":["indicator",Ze(2.1,3,0),["bay"]],"bay:context":["nexus",Ze(0,.4,0),["bay"]],"bay:bench":["model-bay",Ze(0,.3,.9),["bay"]]},contract:{...Object.fromEntries(ys.map(i=>[i.id,[null,re(3.1,-120+1.2*(i.from+i.to),.4),["zones"]]])),ceiling:["ceiling-block",re(3.4,0,.9),["ceiling"]],needle:["needle",re(2.6,0,.4),["needle"]],"ring:score":[null,re(2.05,-96,.35),["rings"]],"ring:rule":[null,re(1.65,-72,.35),["rings"]],"ring:ceiling":[null,re(1.25,-48,.35),["rings"]]}},pv={"pin:1":re(Jt+.6,125,14),"pin:2":re(Jt+.6,178,23.5),"pin:3":re(Jt+.6,160,2),"pin:4":re(Jt*.5,140,34.5)};var El={pad:{az:150,elev:6,dist:320,k:-44,at:Ze(0,16,0)},"rocket-flight":{az:120,elev:18,dist:235,k:-33,at:Ze(0,30,0),roll:-34},"rocket-hero":{az:150,elev:6,dist:250,k:38,at:Ze(-12,24,-30),roll:-8},"rocket-nose":{az:150,elev:18,dist:70,k:-10,at:Ze(0,24,0),roll:4},"rocket-open":{az:145,elev:22,dist:130,k:-18,at:Ze(0,12,0),roll:-12},"rocket-moon":{az:135,elev:-4,dist:215,k:-34,at:Ze(0,30,0),roll:-24},capability:{az:205,elev:40,dist:44,k:-6,at:re(5.2,144,0)},"model-bay":{az:210,elev:14,dist:70,k:-10,at:Ze(3,-5,1)},"nose-window":{az:134,elev:2,dist:2.2,k:0,at:re(Jt,134,25.1)},"cockpit-hatch":{az:262,elev:12,dist:24,k:0,at:Ze(1.5,0,.2)},cockpit:{az:215,elev:34,dist:64,k:-9,at:Ze(.5,-.6,1.4)},"cockpit-panel":{az:270,elev:8,dist:18.5,k:-3.6,at:Ze(4.3,.95,0)},classroom:{az:135,elev:33,dist:96,k:-13,at:Ze(-4,1.5,-2)},mission:{az:135,elev:33,dist:100,k:-14,at:Ze(0,2,0)},"telescope-right":{az:150,elev:18,dist:16,k:-1.5,at:Ze(0,.9,0),roll:8},"mission-console":{az:200,elev:22,dist:72,k:-10,at:Ze(0,2,2)},"mission-wall":{az:168,elev:10,dist:46,k:0,at:Ze(-3.5,6.2,-11)},contract:{az:180,elev:56,dist:34,k:0,at:Ze(-3,0,0)}},Ep=i=>Math.atan2(-Math.cos(i*De),-Math.sin(i*De));function mv(i){let e=i.getObjectByName("wheel"),t=new se;t.name="capabilities";let n=(l,c,h)=>{l.scale.setScalar(.32),l.position.copy(re(c,h,-.16)),l.rotation.y=Ep(h),t.add(l)};Object.entries({discover:2,design:3,develop:3,deploy:2,deepen:2}).forEach(([l,c],h)=>{for(let f=0;f<c;f++){let g=bl(["capabilities",`cap:${l}`]);g.name=`cap:${l}:${f+1}`,n(g,Dt.rOut+.3,Zt(h)+(f-(c-1)/2)*13)}});let r=bl(["capabilities","cap:drop"]);r.name="cap:drop:1",n(r,Mt.rOut+.3,(Mt.from+Mt.to)/2),e.add(Mn(t));let o=Mn(bl(["cartridge"]));o.position.copy(re(Dt.rOut+2.6,Zt(2),.15)),o.rotation.y=Ep(Zt(2)),e.add(o);let a=bp(["bay"],{selected:1});return a.scale.setScalar(1.05),a.position.set(5.4,-1.1,2.4),a.rotation.y=-.45,(i.getObjectByName("layer:L3")||i).add(a),{cartridges:t,cartridge:o,bay:a}}var Tp=[Ks({name:"rocket",pose:{separate:{default:0},open:{default:0}},points:sr.rocket,build(){let i=ir(),e=fp(),t=pp(7);t.position.set(-40,62,-95);let n=new se;return n.add(i.group,e,t),{group:n,parts:{rocket:i.group,pad:e,moon:t},update:s=>dp(i,s),finish(){Object.entries(pv).forEach(([s,r])=>{let o=xs(s.split(":")[1],[s,"pins"],"label-pin");o.position.copy(r),i.group.add(o)})}}}}),Ks({name:"cockpit",points:sr.cockpit,build:()=>({group:vp()})}),Ks({name:"classroom",points:sr.classroom,build:()=>({group:Sp()})}),Ks({name:"mission",points:sr.mission,build:()=>({group:Mp()})}),Ks({name:"contract",pose:{score:{default:0,scale:100},rule:{default:100,scale:100},ceiling:{default:100,scale:100},rings:{list:!0}},points:sr.contract,build(){let i=gp({score:0,rule:100,ceiling:100});return{group:i,update:(e,t)=>i.userData.set(e,t.rings)}}})],wp={set:"rocket",points:sr.engine,pose:{select:{default:1}},build(i){let e=mv(i);return{parts:e,update:t=>e.bay.userData.set(t.select)}}};var Tl=(i,e,t)=>new N(i,e,t),wl={hero:$t(135,22,29,Un(135,0,-1.4),10),"hero-right":$t(135,22,35.5,Un(135,-6,-1.4),10),"top-right":$t(165,62,31,Un(165,-3.4,.4)),nexus:$t(150,30,17,Tl(0,.6,0),6),"nexus-right":$t(150,30,17,Un(150,-1.6,.6),6),"top-wide":$t(165,80,34,Tl(0,0,0)),"nexus-top":$t(165,88,11,Tl(0,0,0)),telescope:$t(150,18,16,Tl(0,.9,0),8),"telescope-left":$t(150,18,16,Un(150,1.5,.9),8),side:$t(210,18,51,Un(210,.5,-6.8)),exploded:$t(200,20,47,Un(200,0,-7.5),36),"exploded-left":$t(200,20,54,Un(200,-2,-6.6),-32)};function gv(i){if(i==="drop")return $t((Mt.from+Mt.to)/2,40,14,xl());let e=Zt($n.findIndex(t=>t.id===i));return $t(e,42,23,re(.6,e,-.8),4)}function xv(i){return $t(210,20,34,Un(210,-3.2,i),10)}function _v(i){return $t(210,34,42,Un(210,-3.8,i/2),10)}var Ap={phase:i=>gv(i),band:(i,e)=>xv(e.bandMid[i]),"band-high":(i,e)=>_v(e.bandMid[i]),spine:()=>$t(kt.angle+20,12,30,re(kt.r,kt.angle,-8),20)};var Rp=i=>i.split(",").map(e=>e.trim()).filter(Boolean),to=i=>i!==""&&Number.isFinite(Number(i)),Al=i=>to(i)&&Number(i)>=0&&Number(i)<=1,Lu=i=>to(i)&&Number(i)>=0&&Number(i)<=100,Cp={shotKinds(i){let e=i.phases.map(n=>n.id),t=i.bands.map(n=>n.id);return{phase:n=>e.includes(n),band:n=>t.includes(n),"band-high":n=>t.includes(n),spine:n=>n===""}},shotNames:()=>[...Object.keys(wl),...Object.keys(El)],anchor(i){let e=i.phases.map(n=>n.id),t=i.bands.map(n=>n.id);return n=>{let[s,r]=n.split(":");return["spine","nexus","screen"].includes(n)?!0:s==="phase"?e.includes(r):s==="band"?t.includes(r):s==="rim"&&to(r)}},attributes(i){let e=i.phases.map(r=>r.id),t=i.bands.map(r=>r.id),n=i.shapes.map(r=>r.name),s=["wheel","nexus","bands","none","rocket","pad","moon","cartridges","cartridge","bay"];return{"data-explode":{check:Al,doc:"0\u20131: the bands pulled apart"},"data-telescope":{check:Al,beat:!0,doc:"0\u20131: the Nexus tubes raised (a beat may set it)"},"data-split":{check:r=>t.includes(r),doc:"band id: that band lifted out of the stack"},"data-pulse-band":{check:r=>t.includes(r),beat:!0,doc:"band id: the energy wave lights only that band's height"},"data-idea":{check:r=>["run","drop"].includes(r)||e.includes(r)||n.includes(r)||to(r),doc:"phase id | shape name | angle | run (travels its track) | drop: where the Idea goes"},"data-idle":{check:r=>r==="",doc:"flag: the wheel and core turn slowly"},"data-parts":{check:r=>Rp(r).every(o=>s.includes(o)),doc:"which parts are in place: wheel, nexus, bands (none: no engine); on a set, its parts"},"data-separate":{check:Al,beat:!0,doc:"rocket set, 0\u20131: the stages apart"},"data-open":{check:Al,beat:!0,doc:"rocket set, 0\u20131: the fuselage open"},"data-score":{check:Lu,beat:!0,doc:"contract set, 0\u2013100: the needle"},"data-rule":{check:Lu,beat:!0,doc:"contract set, 0\u2013100: the rule ring"},"data-ceiling":{check:Lu,beat:!0,doc:"contract set, 0\u2013100: the ceiling"},"data-rings":{check:r=>Rp(r).every(o=>["score","rule","ceiling"].includes(o)),beat:!0,doc:"contract set: the rings on show"},"data-select":{check:to,beat:!0,doc:"rocket set: the model bay's selected slot"}}}};var yv=.06,vv=24,Sv=(i,e)=>i===void 0||i===""?e:Number(i);function Mv(i){if(!i||i==="run")return null;if(i==="drop")return js(4);let e=$n.findIndex(s=>s.id===i);if(e>=0)return Zt(e);let t=jr.find(s=>s.name===i);if(t)return t.drop?js(4):t.angle;let n=Number(i);return Number.isFinite(n)?n:null}var Du=$d({name:"pdlc",camera:({sets:i})=>({fov:22,near:i?.5:.1,far:i?2e3:300}),roles:{idea:"energy","level:team":"energy",energy:"energy",accent:"accent",nexus:"soft",soft:"soft","phase:*":"part"},create:(i,e)=>cp(i,e),defaults:Sl,stopState(i){let e=Sl();e.explode=Number(i.explode||0),e.telescope=Number(i.telescope||0),i.split&&(e.split[i.split]=1);let t=i.parts?Sn(i.parts):Object.keys(e.presence);return Object.keys(e.presence).forEach(n=>e.presence[n]=t.includes(n)?1:0),e},enter(i,e,t,{forward:n}){let s=Mv(i.data.idea),r=s===null?e.idea:s;n&&r<e.idea-.01&&(r+=360*Math.ceil((e.idea-r)/360)),!n&&r>e.idea+.01&&(r-=360*Math.ceil((r-e.idea)/360)),t.idea=r},beatState(i,e,t){let n=Sv(e.telescope,t.state.telescope);return i.telescope!==n?{telescope:n}:null},holdOnBeat:["idea"],shots:wl,shotKinds:Ap,defaultShot:"hero",anchor(i,e){let[t,n]=(i||"").split(":");return t==="phase"&&n==="drop"?xl(.4):t==="phase"?re(Dt.rOut+.9,Zt($n.findIndex(s=>s.id===n)),.4):t==="band"?re(Gt.rOut+1.2,90,e.bandMid[n]):t==="spine"?re(kt.r+.8,kt.angle,-2.2):t==="rim"?re(Dt.rOut+1.2,Number(n),.6):t==="nexus"?new N(0,1.4,0):new N(0,0,0)},pulseBand(i,e){let t=Wi.find(s=>s.id===i);if(!t||!e)return[-1e3,1e3];let n=t.layers.map(s=>e.layerY[s.id]);return[Math.min(...n)-.3,Math.max(...n)+.45]},motion(i){let e=0,t=0;return{tick(n,s,r){let o=r?0:yv,a=s&&s.data.idle!==void 0;a?e+=o*n:(e=Math.atan2(Math.sin(e),Math.cos(e)),e=Math.abs(e)<1e-4?0:e+(0-e)*Math.min(1,n*3));let l=o>0&&(e!==0||a);i.spin(e);let c=s&&s.data.idea==="run";return c&&(t+=(r?0:vv)*n),l||!r&&c},adjust(n){n.idea+=t},after(n,s){i.flashGates(n.idea,s)},reset(){t=0}}},lists:()=>({sections:gu,questions:mu,mention:yu}),pageLists(i,e){let t=Wf(i,e);return{...t,questions:t.concerns,mention:e?.mention??(i==="fr"?vi.mention:yu)}},sets:{defs:Tp,shots:El,attach:wp,leads:()=>_u,defaultSet:"rocket"},schema:Cp,debug:{BANDS:Wi}});var Ip={scene:"src/scene.js",entry:"src/main.js",bundle:"dist/deck.js",pages:[{name:"en",src:"index.html",out:"../../dist/aixpdlc-programme-rollout.html",lang:"en"},{name:"fr",src:"index.fr.html",out:"../../dist/aixpdlc-programme-rollout.fr.html",lang:"fr",parity:"index.html"}],parityIgnore:["data-crumb","data-source"],hud:{crumb:!0,progress:!0,questions:!1,source:!0,version:!0,theme:!0,fullscreen:!0},sets:{portals:[{sets:["rocket","cockpit"],shots:["nose-window","cockpit-hatch"]}],pairs:[{sets:["classroom","mission"],pivot:-10.8}]},copy:{banned:[{pattern:"\\bG(?:0|[7-9])\\b",why:"phase gates run G1 to G6, no other G numbering"},{pattern:"\\b(?:Purpose|Process) register",why:"the Nexus registers are Knowledge, Intent, Contracts, Operations"}],figures:"\\d+(?:[.,]\\d+)?\\s?(?:%|\xD7)"},docs:{attributes:"docs/attributes.md",ignore:[]},qa:{viewports:[{w:1920,h:1080},{w:1440,h:900},{w:1366,h:768},{w:844,h:390,phone:!0}],hud:["hud-nav","hud-logo","hud-footer","hud-theme","hud-fullscreen","hud-step"],diffThreshold:24}};kf(Du,Ip);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
