(()=>{var Du=0,Pc=1,Nu=2;var Kr=1,Uu=2,ir=3,qi=0,Sn=1,Ht=2,bi=0,sr=1,Lc=2,Dc=3,Nc=4,Fu=5;var Ss=100,Ou=101,Bu=102,zu=103,Gu=104,Hu=200,ku=201,Vu=202,Wu=203,Uc=204,Fc=205,Xu=206,qu=207,Yu=208,Zu=209,$u=210,Ju=211,Ku=212,Qu=213,ju=214,Jo=0,Ko=1,Qo=2,$s=3,jo=4,ea=5,ta=6,na=7,Oc=0,ed=1,td=2,li=0,Bc=1,zc=2,Gc=3,Hc=4,kc=5,Vc=6,Wc=7;var Xc=300,bs=301,rr=302,Ua=303,Fa=304,ia=1e3,oi=1001,sa=1002,nn=1003,nd=1004;var Qr=1005;var yn=1006,Oa=1007;var Ei=1008;var Dn=1009,qc=1010,Yc=1011,or=1012,Ba=1013,Kn=1014,Nn=1015,Un=1016,za=1017,Ga=1018,Es=1020,Zc=35902,$c=35899,Jc=1021,Kc=1022,Qn=1023,Mi=1026,Ti=1027,Qc=1028,Ha=1029,Yi=1030,ka=1031;var Va=1033,jr=33776,eo=33777,to=33778,no=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ja=37496,Ka=37488,Qa=37489,io=37490,ja=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,so=36285,yl=36286;var Ir=2300,ra=2301,Zo=2302,Sc=2303,bc=2400,Ec=2401,Tc=2402;var id=3200;var jc=0,sd=1,wi="",xn="srgb",Pr="srgb-linear",Lr="linear",_t="srgb";var $o=7680;var rd=519,od=512,ad=513,ld=514,eh=515,cd=516,hd=517,th=518,nh=519,ud=35044;var ro="300 es",Gn=2e3,Dr=2001;function jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function em(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Nr("canvas");return i.style.display="block",i}var ou={},Js=null;function ih(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function fd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=fd(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=fd(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ar(...i){let e=i.join(" ");e in ou||(ou[e]=!0,Ve(...i))}function pd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var md={[Jo]:Jo,[Qo]:ta,[jo]:jo,[$s]:ea,[Ko]:Ko,[ta]:Qo,[na]:na,[ea]:$s},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ql=Math.PI/180,oa=180/Math.PI;function ar(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function tm(i,e){return(i%e+e)%e}function jl(i,e,t){return(1-t)*i+t*e}function gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nm(i,e){if(e.constructor===Float32Array)return i;let t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function im(i,e){if(e.constructor===Float32Array)return i;let t=sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var hh=class hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var re=hh,wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],g=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(g!==x||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+g*x;p<0&&(f=-f,d=-d,m=-m,x=-x,p=-p);let u=1-a;if(p<.9995){let y=Math.acos(p),M=Math.sin(y);u=Math.sin(u*y)/M,a=Math.sin(a*y)/M,l=l*u+f*a,c=c*u+d*a,h=h*u+m*a,g=g*u+x*a}else{l=l*u+f*a,c=c*u+d*a,h=h*u+m*a,g=g*u+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+g*g);l*=y,c*=y,h*=y,g*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],g=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*g+l*d-c*f,e[t+1]=l*m+h*f+c*g-a*d,e[t+2]=c*m+h*d+a*f-l*g,e[t+3]=h*m-a*g-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),g=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*g+c*d*m,this._y=c*d*g-f*h*m,this._z=c*h*m+f*d*g,this._w=c*h*g-f*d*m;break;case"YXZ":this._x=f*h*g+c*d*m,this._y=c*d*g-f*h*m,this._z=c*h*m-f*d*g,this._w=c*h*g+f*d*m;break;case"ZXY":this._x=f*h*g-c*d*m,this._y=c*d*g+f*h*m,this._z=c*h*m+f*d*g,this._w=c*h*g-f*d*m;break;case"ZYX":this._x=f*h*g-c*d*m,this._y=c*d*g+f*h*m,this._z=c*h*m-f*d*g,this._w=c*h*g+f*d*m;break;case"YZX":this._x=f*h*g+c*d*m,this._y=c*d*g+f*h*m,this._z=c*h*m-f*d*g,this._w=c*h*g-f*d*m;break;case"XZY":this._x=f*h*g-c*d*m,this._y=c*d*g-f*h*m,this._z=c*h*m+f*d*g,this._w=c*h*g+f*d*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],g=t[10],f=n+a+g;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>g){let d=2*Math.sqrt(1+n-a-g);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>g){let d=2*Math.sqrt(1+a-n-g);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+g-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),g=2*(r*n-o*t);return this.x=t+l*c+o*g-a*h,this.y=n+l*h+a*c-r*g,this.z=s+l*g+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var L=uh,ec=new L,au=new wn,dh=class dh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],g=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],u=s[6],y=s[1],M=s[4],v=s[7],w=s[2],b=s[5],_=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*p+a*M+l*b,r[6]=o*u+a*v+l*_,r[1]=c*x+h*y+g*w,r[4]=c*p+h*M+g*b,r[7]=c*u+h*v+g*_,r[2]=f*x+d*y+m*w,r[5]=f*p+d*M+m*b,r[8]=f*u+d*v+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],g=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*g+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=g*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tc.makeScale(e,t)),this}rotate(e){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Ye=dh,tc=new Ye,lu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){let i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var dt=sm();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Nr("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rm=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var om=0,ic=new L,An=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=yn,o=Ei,a=Qn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ar(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Xc;An.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],g=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(g-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(g+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,w=(u+1)/2,b=(h+f)/4,_=(g+x)/4,S=(m+p)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=_/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(g-x)*(g-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(g-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Bt=fh,la=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new An({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends la{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Na=class Na{constructor(e,t,n,s,r,o,a,l,c,h,g,f,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,g,f,d,m,x,p)}set(e,t,n,s,r,o,a,l,c,h,g,f,d,m,x,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=g,u[14]=f,u[3]=d,u[7]=m,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*g,m=a*h,x=a*g;t[0]=l*h,t[4]=-l*g,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*g,m=c*h,x=c*g;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*g,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*g,m=c*h,x=c*g;t[0]=f-x*a,t[4]=-o*g,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*g,m=a*h,x=a*g;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*g,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*g,t[8]=m*g+d,t[1]=g,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*g+m,t[10]=f-x*g}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-g,t[8]=c*h,t[1]=f*g+x,t[5]=o*h,t[9]=d*g-m,t[2]=m*g-d,t[6]=a*h,t[10]=x*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(am,e,lm)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Di.crossVectors(n,Rn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Di.crossVectors(n,Rn)),Di.normalize(),wo.crossVectors(Rn,Di),s[0]=Di.x,s[4]=wo.x,s[8]=Rn.x,s[1]=Di.y,s[5]=wo.y,s[9]=Rn.y,s[2]=Di.z,s[6]=wo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],g=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],u=n[14],y=n[3],M=n[7],v=n[11],w=n[15],b=s[0],_=s[4],S=s[8],I=s[12],R=s[1],N=s[5],z=s[9],W=s[13],P=s[2],C=s[6],B=s[10],O=s[14],$=s[3],H=s[7],Z=s[11],K=s[15];return r[0]=o*b+a*R+l*P+c*$,r[4]=o*_+a*N+l*C+c*H,r[8]=o*S+a*z+l*B+c*Z,r[12]=o*I+a*W+l*O+c*K,r[1]=h*b+g*R+f*P+d*$,r[5]=h*_+g*N+f*C+d*H,r[9]=h*S+g*z+f*B+d*Z,r[13]=h*I+g*W+f*O+d*K,r[2]=m*b+x*R+p*P+u*$,r[6]=m*_+x*N+p*C+u*H,r[10]=m*S+x*z+p*B+u*Z,r[14]=m*I+x*W+p*O+u*K,r[3]=y*b+M*R+v*P+w*$,r[7]=y*_+M*N+v*C+w*H,r[11]=y*S+M*z+v*B+w*Z,r[15]=y*I+M*W+v*O+w*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],g=e[6],f=e[10],d=e[14],m=e[3],x=e[7],p=e[11],u=e[15],y=l*d-c*f,M=a*d-c*g,v=a*f-l*g,w=o*d-c*h,b=o*f-l*h,_=o*g-a*h;return t*(x*y-p*M+u*v)-n*(m*y-p*w+u*b)+s*(m*M-x*w+u*_)-r*(m*v-x*b+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],g=e[9],f=e[10],d=e[11],m=e[12],x=e[13],p=e[14],u=e[15],y=t*a-n*o,M=t*l-s*o,v=t*c-r*o,w=n*l-s*a,b=n*c-r*a,_=s*c-r*l,S=h*x-g*m,I=h*p-f*m,R=h*u-d*m,N=g*p-f*x,z=g*u-d*x,W=f*u-d*p,P=y*W-M*z+v*N+w*R-b*I+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=(a*W-l*z+c*N)*C,e[1]=(s*z-n*W-r*N)*C,e[2]=(x*_-p*b+u*w)*C,e[3]=(f*b-g*_-d*w)*C,e[4]=(l*R-o*W-c*I)*C,e[5]=(t*W-s*R+r*I)*C,e[6]=(p*v-m*_-u*M)*C,e[7]=(h*_-f*v+d*M)*C,e[8]=(o*z-a*R+c*S)*C,e[9]=(n*R-t*z-r*S)*C,e[10]=(m*b-x*v+u*y)*C,e[11]=(g*v-h*b-d*y)*C,e[12]=(a*I-o*N-l*S)*C,e[13]=(t*N-n*I+s*S)*C,e[14]=(x*M-m*w-p*y)*C,e[15]=(h*w-g*M+f*y)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,g=a+a,f=r*c,d=r*h,m=r*g,x=o*h,p=o*g,u=a*g,y=l*c,M=l*h,v=l*g,w=n.x,b=n.y,_=n.z;return s[0]=(1-(x+u))*w,s[1]=(d+v)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+u))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(m+M)*_,s[9]=(p-y)*_,s[10]=(1-(f+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Fs.set(s[0],s[1],s[2]).length(),a=Fs.set(s[4],s[5],s[6]).length(),l=Fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,h=1/a,g=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=g,Xn.elements[9]*=g,Xn.elements[10]*=g,t.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2*r/(t-e),g=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Gn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Dr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2/(t-e),g=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Gn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Dr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Na.prototype.isMatrix4=!0;var Mt=Na,Fs=new L,Xn=new Mt,am=new L(0,0,0),lm=new L(1,1,1),Di=new L,wo=new L,Rn=new L,hu=new Mt,uu=new wn,zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],g=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cm=0,du=new L,Os=new wn,mi=new Mt,Ao=new L,Sr=new L,hm=new L,um=new wn,fu=new L(1,0,0),pu=new L(0,1,0),mu=new L(0,0,1),gu={type:"added"},dm={type:"removed"},Bs={type:"childadded",child:null},sc={type:"childremoved",child:null},sn=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new zi,n=new wn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Sr,Ao,this.up):mi.lookAt(Ao,Sr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(mi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),g=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fm={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=h.position.distanceTo(g.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=tm(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rc(o,r,e+1/3),this.g=rc(o,r,e),this.b=rc(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return dt.workingToColorSpace(dn.copy(this),e),Math.round(rt(dn.r*255,0,255))*65536+Math.round(rt(dn.g*255,0,255))*256+Math.round(rt(dn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let g=o-a;switch(c=h<=.5?g/(o+a):g/(2-o-a),o){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=xn){dt.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ro);let n=jl(Ni.h,Ro.h,t),s=jl(Ni.s,Ro.s,t),r=jl(Ni.l,Ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new lt;lt.NAMES=xd;var fs=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new L,gi=new L,oc=new L,xi=new L,zs=new L,Gs=new L,xu=new L,ac=new L,lc=new L,cc=new L,hc=new Bt,uc=new Bt,dc=new Bt,Bi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),gi.subVectors(n,t),oc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(gi),l=qn.dot(oc),c=gi.dot(gi),h=gi.dot(oc),g=o*c-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,n),dc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(dc,r.z),o}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),gi.subVectors(e,t),qn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),Gs.subVectors(r,n),ac.subVectors(e,n);let l=zs.dot(ac),c=Gs.dot(ac);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,s);let h=zs.dot(lc),g=Gs.dot(lc);if(h>=0&&g<=h)return t.copy(s);let f=l*g-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(zs,o);cc.subVectors(e,r);let d=zs.dot(cc),m=Gs.dot(cc);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Gs,a);let p=h*m-d*g;if(p<=0&&g-h>=0&&d-m>=0)return xu.subVectors(r,s),a=(g-h)/(g-h+(d-m)),t.copy(s).addScaledVector(xu,a);let u=1/(p+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(zs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Io.subVectors(this.max,br),Hs.subVectors(e.a,br),ks.subVectors(e.b,br),Vs.subVectors(e.c,br),Ui.subVectors(ks,Hs),Fi.subVectors(Vs,ks),ls.subVectors(Hs,Vs);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!fc(t,Hs,ks,Vs,Io)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Hs,ks,Vs,Io))?!1:(Po.crossVectors(Ui,Fi),t=[Po.x,Po.y,Po.z],fc(t,Hs,ks,Vs,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,Co=new Gi,Hs=new L,ks=new L,Vs=new L,Ui=new L,Fi=new L,ls=new L,br=new L,Io=new L,Po=new L,cs=new L;function fc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qt=new L,Lo=new re,pm=0,Hn=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ud,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=e!==void 0?sh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):im(e,this.array)}};var Or=class extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Br=class extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},mm=new Gi,Er=new L,pc=new L,js=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(pc)),this.expandByPoint(Er.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gm=0,zn=new Mt,mc=new sn,Ws=new L,Cn=new Gi,Tr=new Gi,tn=new L,Zt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?Br:Or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Cn.min,Tr.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,Tr.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(Tr.min),Cn.expandByPoint(Tr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),tn.add(Ws)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let h=new L,g=new L,f=new L,d=new re,m=new re,x=new re,p=new L,u=new L;function y(I,R,N){c[I]=c[R]=c[N]=1,h.fromBufferAttribute(n,I),g.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),g.sub(h),f.sub(h),m.sub(d),x.sub(d);let z=1/(m.x*x.y-x.x*m.y);isFinite(z)&&(p.copy(g).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(z),u.copy(f).multiplyScalar(m.x).addScaledVector(g,-x.x).multiplyScalar(z),a[I].add(p),a[R].add(p),a[N].add(p),l[I].add(u),l[R].add(u),l[N].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,R=M.length;I<R;++I){let N=M[I],z=N.start,W=N.count;for(let P=z,C=z+W;P<C;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new L,w=new L,b=new L,_=new L;function S(I){b.fromBufferAttribute(s,I),_.copy(b);let R=a[I];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(_,R);let z=w.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,z)}for(let I=0,R=n.count;I<R;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,g=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),g.subVectors(s,r),h.cross(g),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),g.subVectors(s,r),h.cross(g),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,g=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let u=0;u<h;u++)f[m++]=c[d++]}return new Hn(f,h,g)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,g=c.length;h<g;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let g=0,f=c.length;g<f;g++){let d=c[g];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],g=r[c];for(let f=0,d=g.length;f<d;f++)h.push(g[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let g=o[c];this.addGroup(g.start,g.count,g.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gc=new L,xm=new L,_m=new Ye,Zn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gc.subVectors(n,t).cross(xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_m.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ym=0,ps=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=sr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var yi=new L,xc=new L,Do=new L,No=new L,ha=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),No.copy(this.origin).sub(xc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=No.dot(this.direction),l=-No.dot(Do),c=No.lengthSq(),h=Math.abs(1-o*o),g,f,d,m;if(h>0)if(g=o*l-a,f=o*a-l,m=r*h,g>=0)if(f>=-m)if(f<=m){let x=1/h;g*=x,f*=x,d=g*(g+o*f+2*a)+f*(o*g+f+2*l)+c}else f=r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;else f=-r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;else f<=-m?(g=Math.max(0,-(-o*r+a)),f=g>0?-r:Math.min(Math.max(-r,-l),r),d=-g*g+f*(f+2*l)+c):f<=m?(g=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(g=Math.max(0,-(o*r+a)),f=g>0?r:Math.min(Math.max(-r,-l),r),d=-g*g+f*(f+2*l)+c);else f=o>0?-r:r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(xc).addScaledVector(Do,f),d}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-f.z)*g,l=(e.max.z-f.z)*g):(a=(e.max.z-f.z)*g,l=(e.min.z-f.z)*g),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,g=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,p=t.z-o.z,u=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),w=Math.abs(c),b=Math.abs(h),_,S,I,R,N,z,W,P,C,B,O,$;if(v>=w&&v>=b?(I=l,z=g,C=m,$=u,l>=0?(_=c,S=h,R=f,N=d,W=x,P=p,B=y,O=M):(_=h,S=c,R=d,N=f,W=p,P=x,B=M,O=y)):w>=b?(I=c,z=f,C=x,$=y,c>=0?(_=h,S=l,R=d,N=g,W=p,P=m,B=M,O=u):(_=l,S=h,R=g,N=d,W=m,P=p,B=u,O=M)):(I=h,z=d,C=p,$=M,h>=0?(_=l,S=c,R=g,N=f,W=m,P=x,B=u,O=y):(_=c,S=l,R=f,N=g,W=x,P=m,B=y,O=u)),I===0)return null;let H=_/I,Z=S/I,K=1/I,xe=R-H*z,Ae=N-Z*z,q=W-H*C,_e=P-Z*C,Ce=B-H*$,Fe=O-Z*$,ye=Ce*_e-Fe*q,Be=xe*Fe-Ae*Ce,yt=q*Ae-_e*xe;if(s){if(ye<0||Be<0||yt<0)return null}else if((ye<0||Be<0||yt<0)&&(ye>0||Be>0||yt>0))return null;let Ue=ye+Be+yt;if(Ue===0)return null;let Qe=K*(ye*z+Be*C+yt*$);return(Ue>0?Qe<0:Qe>0)?null:this.at(Qe/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ua=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_u=new Mt,hs=new ha,Uo=new js,yu=new L,Fo=new L,Oo=new L,Bo=new L,_c=new L,zo=new L,vu=new L,Go=new L,fn=class extends sn{constructor(e=new Zt,t=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],g=r[l];h!==0&&(_c.fromBufferAttribute(g,e),o?zo.addScaledVector(_c,h):zo.addScaledVector(_c.sub(t),h))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(Uo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Uo,yu)===null||hs.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),hs.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],u=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,w=M;v<w;v+=3){let b=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);s=Ho(this,u,e,n,c,h,g,b,_,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,u=x;p<u;p+=3){let y=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=Ho(this,o,e,n,c,h,g,y,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let p=f[m],u=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,w=M;v<w;v+=3){let b=v,_=v+1,S=v+2;s=Ho(this,u,e,n,c,h,g,b,_,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,u=x;p<u;p+=3){let y=p,M=p+1,v=p+2;s=Ho(this,o,e,n,c,h,g,y,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function vm(i,e,t,n,s,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:i}}function Ho(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Bo);let h=vm(i,e,t,n,Fo,Oo,Bo,vu);if(h){let g=new L;Bi.getBarycoord(vu,Fo,Oo,Bo,g),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,g,new re)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,g,new re)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,g,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Bi.getNormal(Fo,Oo,Bo,f.normal),h.face=f,h.barycoord=g}return h}var da=class extends An{constructor(e=null,t=1,n=1,s,r,o,a,l,c=nn,h=nn,g,f){super(null,o,a,l,c,h,s,r,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=new js,Mm=new re(.5,.5),ko=new L,ms=class{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],g=r[5],f=r[6],d=r[7],m=r[8],x=r[9],p=r[10],u=r[11],y=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,u-m,w-y).normalize(),s[1].setComponents(c+o,d+h,u+m,w+y).normalize(),s[2].setComponents(c+a,d+g,u+x,w+M).normalize(),s[3].setComponents(c-a,d-g,u-x,w-M).normalize(),n)s[4].setComponents(l,f,p,v).normalize(),s[5].setComponents(c-l,d-f,u-p,w-v).normalize();else if(s[4].setComponents(c-l,d-f,u-p,w-v).normalize(),t===Gn)s[5].setComponents(c+l,d+f,u+p,w+v).normalize();else if(t===Dr)s[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Mm.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mu=new Mt,fa=class i{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ms),n[s].setFromProjectionMatrix(Mu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ms),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zr=class extends An{constructor(e=[],t=bs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var $n=class extends An{constructor(e,t,n=Kn,s,r,o,a=nn,l=nn,c,h=Mi,g=1){if(h!==Mi&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:g};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gr=class extends $n{constructor(e,t=Kn,n=bs,s,r,o=nn,a=nn,l,c=Mi){let h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],g=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(g,2));function m(x,p,u,y,M,v,w,b,_,S,I){let R=v/_,N=w/S,z=v/2,W=w/2,P=b/2,C=_+1,B=S+1,O=0,$=0,H=new L;for(let Z=0;Z<B;Z++){let K=Z*N-W;for(let xe=0;xe<C;xe++){let Ae=xe*R-z;H[x]=Ae*y,H[p]=K*M,H[u]=P,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[u]=b>0?1:-1,h.push(H.x,H.y,H.z),g.push(xe/_),g.push(1-Z/S),O+=1}}for(let Z=0;Z<S;Z++)for(let K=0;K<_;K++){let xe=f+K+C*Z,Ae=f+K+C*(Z+1),q=f+(K+1)+C*(Z+1),_e=f+(K+1)+C*Z;l.push(xe,Ae,_e),l.push(Ae,q,_e),$+=6}a.addGroup(d,$,I),d+=$,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nt=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],g=[],f=[],d=[],m=0,x=[],p=n/2,u=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(d,2));function y(){let v=new L,w=new L,b=0,_=(t-e)/n;for(let S=0;S<=r;S++){let I=[],R=S/r,N=R*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,P=W*l+a,C=Math.sin(P),B=Math.cos(P);w.x=N*C,w.y=-R*n+p,w.z=N*B,g.push(w.x,w.y,w.z),v.set(C,_,B).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-R),I.push(m++)}x.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let R=x[I][S],N=x[I+1][S],z=x[I+1][S+1],W=x[I][S+1];(e>0||I!==0)&&(h.push(R,N,W),b+=3),(t>0||I!==r-1)&&(h.push(N,z,W),b+=3)}c.addGroup(u,b,0),u+=b}function M(v){let w=m,b=new re,_=new L,S=0,I=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=s;z++)g.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),m++;let N=m;for(let z=0;z<=s;z++){let P=z/s*l+a,C=Math.cos(P),B=Math.sin(P);_.x=I*B,_.y=p*R,_.z=I*C,g.push(_.x,_.y,_.z),f.push(0,R,0),b.x=C*.5+.5,b.y=B*.5*R+.5,d.push(b.x,b.y),m++}for(let z=0;z<s;z++){let W=w+z,P=N+z;v===!0?h.push(P,P+1,W):h.push(P+1,P,W),S+=3}c.addGroup(u,S,v===!0?1:2),u+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gs=class i extends nt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new Mt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),g<=c&&(c=g,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},er=class extends In{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*g+this.aX,c=f*g+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pa=class extends er{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,g){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+g)+(l-a)/g;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Su=new L,bu=new L,yc=new rh,vc=new rh,Mc=new rh,Hi=class extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bu.subVectors(s[0],s[1]).add(s[0]),c=bu);let g=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Su.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Su),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(g),d),x=Math.pow(g.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),yc.initNonuniformCatmullRom(c.x,g.x,f.x,h.x,m,x,p),vc.initNonuniformCatmullRom(c.y,g.y,f.y,h.y,m,x,p),Mc.initNonuniformCatmullRom(c.z,g.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,g.x,f.x,h.x,this.tension),vc.initCatmullRom(c.y,g.y,f.y,h.y,this.tension),Mc.initCatmullRom(c.z,g.z,f.z,h.z,this.tension));return n.set(yc.calc(l),vc.calc(l),Mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Eu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Sm(i,e){let t=1-i;return t*t*e}function bm(i,e){return 2*(1-i)*i*e}function Em(i,e){return i*i*e}function Rr(i,e,t,n){return Sm(i,e)+bm(i,t)+Em(i,n)}function Tm(i,e){let t=1-i;return t*t*t*e}function wm(i,e){let t=1-i;return 3*t*t*i*e}function Am(i,e){return 3*(1-i)*i*i*e}function Rm(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return Tm(i,e)+wm(i,t)+Am(i,n)+Rm(i,s)}var kr=class extends In{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends In{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vr=class extends In{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends In{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends In{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends In{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,l.x,c.x,h.x,g.x),Eu(a,l.y,c.y,h.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},xa=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:Hi,CubicBezierCurve:kr,CubicBezierCurve3:ma,EllipseCurve:er,LineCurve:Vr,LineCurve3:ga,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:xs,SplineCurve:Xr}),_a=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Jn=class extends _a{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vr(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wr(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new kr(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new er(e,t,n,s,r,o,a,l);if(this.curves.length>0){let g=c.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mn=class extends Jn{constructor(e){super(e),this.uuid=ar(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Jn().fromJSON(s))}return this}};function Cm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_d(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Nm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,g=l;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>g&&(g=m)}c=Math.max(h-a,g-l),c=c!==0?32767/c:0}return qr(r,o,t,a,l,c,0),o}function _d(i,e,t,n,s){let r;if(s===Xm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Tu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Tu(o/n|0,i[o],i[o+1],r);return r&&tr(r,r.next)&&(Zr(r),r=r.next),r}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&zm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Pm(i,n,s,r):Im(i)){e.push(l.i,i.i,c.i),Zr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Lm(_s(i),e),qr(i,e,t,n,s,r,2)):o===2&&Dm(i,e,t,n,s,r):qr(_s(i),e,t,n,s,r,1);break}}}function Im(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),g=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=g&&m.y<=d&&wr(s,a,r,l,o,c,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,g=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,g,f),x=Math.max(a,l,c),p=Math.max(h,g,f),u=wc(d,m,e,t,n),y=wc(x,p,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=u&&v&&v.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&wr(a,h,l,g,c,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&wr(a,h,l,g,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=u;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&wr(a,h,l,g,c,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&wr(a,h,l,g,c,f,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!tr(n,s)&&vd(n,t,t.next,s)&&Yr(n,s)&&Yr(s,n)&&(e.push(n.i,t.i,s.i),Zr(t),Zr(t.next),t=i=s),t=t.next}while(t!==i);return _s(t)}function Dm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&km(o,a)){let l=Md(o,a);o=_s(o,o.next),l=_s(l,l.next),qr(o,e,t,n,s,r,0),qr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=_d(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hm(c))}s.sort(Um);for(let r=0;r<s.length;r++)t=Fm(s[r],t);return t}function Um(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Fm(i,e){let t=Om(i,e);if(!t)return e;let n=Md(t,i);return _s(n,n.next),_s(t,t.next)}function Om(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(tr(i,t))return t;do{if(tr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&yd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let g=Math.abs(s-t.y)/(n-t.x);Yr(t,i)&&(g<h||g===h&&(t.x>o.x||t.x===o.x&&Bm(o,t)))&&(o=t,h=g)}t=t.next}while(t!==a);return o}function Bm(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function zm(i,e,t,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gm(s)}function Gm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function wc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function wr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&yd(i,e,t,n,s,r,o,a)}function km(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vm(i,e)&&(Yr(i,e)&&Yr(e,i)&&Wm(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||tr(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tr(i,e){return i.x===e.x&&i.y===e.y}function vd(i,e,t,n){let s=Wo(Ot(i,e,t)),r=Wo(Ot(i,e,n)),o=Wo(Ot(t,n,i)),a=Wo(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Vo(i,t,e)||r===0&&Vo(i,n,e)||o===0&&Vo(t,i,n)||a===0&&Vo(t,e,n))}function Vo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Wo(i){return i>0?1:i<0?-1:0}function Vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Yr(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function Wm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Tu(i,e,t,n){let s=Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rc=class{static triangulate(e,t,n=2){return Cm(e,t,n)}},ds=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wu(e),Au(n,e);let o=e.length;t.forEach(wu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Au(n,t[l]);let a=Rc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Au(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ys=class i extends Zt{constructor(e=new Mn([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qm,M,v=!1,w,b,_,S;if(u){M=u.getSpacedPoints(h),v=!0,f=!1;let te=u.isCatmullRomCurve3?u.closed:!1;w=u.computeFrenetFrames(h,te),b=new L,_=new L,S=new L}f||(p=0,d=0,m=0,x=0);let I=a.extractPoints(c),R=I.shape,N=I.holes;if(!ds.isClockWise(R)){R=R.reverse();for(let te=0,pe=N.length;te<pe;te++){let ue=N[te];ds.isClockWise(ue)&&(N[te]=ue.reverse())}}function W(te){let ue=10000000000000001e-36,Ie=te[0];for(let Ee=1;Ee<=te.length;Ee++){let $e=Ee%te.length,ze=te[$e],at=ze.x-Ie.x,ct=ze.y-Ie.y,mt=at*at+ct*ct,F=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(Ie.x),Math.abs(Ie.y)),Wt=ue*F*F;if(mt<=Wt){te.splice($e,1),Ee--;continue}Ie=ze}}W(R),N.forEach(W);let P=N.length,C=R;for(let te=0;te<P;te++){let pe=N[te];R=R.concat(pe)}function B(te,pe,ue){return pe||We("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(pe,ue)}let O=R.length;function $(te,pe,ue){let Ie,Ee,$e,ze=te.x-pe.x,at=te.y-pe.y,ct=ue.x-te.x,mt=ue.y-te.y,F=ze*ze+at*at,Wt=ze*mt-at*ct;if(Math.abs(Wt)>Number.EPSILON){let st=Math.sqrt(F),wt=Math.sqrt(ct*ct+mt*mt),Me=pe.x-at/st,zt=pe.y+ze/st,ke=ue.x-mt/wt,Xe=ue.y+ct/wt,A=((ke-Me)*mt-(Xe-zt)*ct)/(ze*mt-at*ct);Ie=Me+ze*A-te.x,Ee=zt+at*A-te.y;let E=Ie*Ie+Ee*Ee;if(E<=2)return new re(Ie,Ee);$e=Math.sqrt(E/2)}else{let st=!1;ze>Number.EPSILON?ct>Number.EPSILON&&(st=!0):ze<-Number.EPSILON?ct<-Number.EPSILON&&(st=!0):Math.sign(at)===Math.sign(mt)&&(st=!0),st?(Ie=-at,Ee=ze,$e=Math.sqrt(F)):(Ie=ze,Ee=at,$e=Math.sqrt(F/2))}return new re(Ie/$e,Ee/$e)}let H=[];for(let te=0,pe=C.length,ue=pe-1,Ie=te+1;te<pe;te++,ue++,Ie++)ue===pe&&(ue=0),Ie===pe&&(Ie=0),H[te]=$(C[te],C[ue],C[Ie]);let Z=[],K,xe=H.concat();for(let te=0,pe=P;te<pe;te++){let ue=N[te];K=[];for(let Ie=0,Ee=ue.length,$e=Ee-1,ze=Ie+1;Ie<Ee;Ie++,$e++,ze++)$e===Ee&&($e=0),ze===Ee&&(ze=0),K[Ie]=$(ue[Ie],ue[$e],ue[ze]);Z.push(K),xe=xe.concat(K)}let Ae;if(p===0)Ae=ds.triangulateShape(C,N);else{let te=[],pe=[];for(let ue=0;ue<p;ue++){let Ie=ue/p,Ee=d*Math.cos(Ie*Math.PI/2),$e=m*Math.sin(Ie*Math.PI/2)+x;for(let ze=0,at=C.length;ze<at;ze++){let ct=B(C[ze],H[ze],$e);Be(ct.x,ct.y,-Ee),Ie===0&&te.push(ct)}for(let ze=0,at=P;ze<at;ze++){let ct=N[ze];K=Z[ze];let mt=[];for(let F=0,Wt=ct.length;F<Wt;F++){let st=B(ct[F],K[F],$e);Be(st.x,st.y,-Ee),Ie===0&&mt.push(st)}Ie===0&&pe.push(mt)}}Ae=ds.triangulateShape(te,pe)}let q=Ae.length,_e=m+x;for(let te=0;te<O;te++){let pe=f?B(R[te],xe[te],_e):R[te];v?(_.copy(w.normals[0]).multiplyScalar(pe.x),b.copy(w.binormals[0]).multiplyScalar(pe.y),S.copy(M[0]).add(_).add(b),Be(S.x,S.y,S.z)):Be(pe.x,pe.y,0)}for(let te=1;te<=h;te++)for(let pe=0;pe<O;pe++){let ue=f?B(R[pe],xe[pe],_e):R[pe];v?(_.copy(w.normals[te]).multiplyScalar(ue.x),b.copy(w.binormals[te]).multiplyScalar(ue.y),S.copy(M[te]).add(_).add(b),Be(S.x,S.y,S.z)):Be(ue.x,ue.y,g/h*te)}for(let te=p-1;te>=0;te--){let pe=te/p,ue=d*Math.cos(pe*Math.PI/2),Ie=m*Math.sin(pe*Math.PI/2)+x;for(let Ee=0,$e=C.length;Ee<$e;Ee++){let ze=B(C[Ee],H[Ee],Ie);Be(ze.x,ze.y,g+ue)}for(let Ee=0,$e=N.length;Ee<$e;Ee++){let ze=N[Ee];K=Z[Ee];for(let at=0,ct=ze.length;at<ct;at++){let mt=B(ze[at],K[at],Ie);v?Be(mt.x,mt.y+M[h-1].y,M[h-1].x+ue):Be(mt.x,mt.y,g+ue)}}}Ce(),Fe();function Ce(){let te=s.length/3;if(f){let pe=0,ue=O*pe;for(let Ie=0;Ie<q;Ie++){let Ee=Ae[Ie];yt(Ee[2]+ue,Ee[1]+ue,Ee[0]+ue)}pe=h+p*2,ue=O*pe;for(let Ie=0;Ie<q;Ie++){let Ee=Ae[Ie];yt(Ee[0]+ue,Ee[1]+ue,Ee[2]+ue)}}else{for(let pe=0;pe<q;pe++){let ue=Ae[pe];yt(ue[2],ue[1],ue[0])}for(let pe=0;pe<q;pe++){let ue=Ae[pe];yt(ue[0]+O*h,ue[1]+O*h,ue[2]+O*h)}}n.addGroup(te,s.length/3-te,0)}function Fe(){let te=s.length/3,pe=0;ye(C,pe),pe+=C.length;for(let ue=0,Ie=N.length;ue<Ie;ue++){let Ee=N[ue];ye(Ee,pe),pe+=Ee.length}n.addGroup(te,s.length/3-te,1)}function ye(te,pe){let ue=te.length;for(;--ue>=0;){let Ie=ue,Ee=ue-1;Ee<0&&(Ee=te.length-1);for(let $e=0,ze=h+p*2;$e<ze;$e++){let at=O*$e,ct=O*($e+1),mt=pe+Ie+at,F=pe+Ee+at,Wt=pe+Ee+ct,st=pe+Ie+ct;Ue(mt,F,Wt,st)}}}function Be(te,pe,ue){l.push(te),l.push(pe),l.push(ue)}function yt(te,pe,ue){Qe(te),Qe(pe),Qe(ue);let Ie=s.length/3,Ee=y.generateTopUV(n,s,Ie-3,Ie-2,Ie-1);ot(Ee[0]),ot(Ee[1]),ot(Ee[2])}function Ue(te,pe,ue,Ie){Qe(te),Qe(pe),Qe(Ie),Qe(pe),Qe(ue),Qe(Ie);let Ee=s.length/3,$e=y.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);ot($e[0]),ot($e[1]),ot($e[3]),ot($e[1]),ot($e[2]),ot($e[3])}function Qe(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function ot(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ym(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xa[s.type]().fromJSON(s)),new i(n,e.options)}},qm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],g=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-g),new re(f,1-m),new re(x,1-u)]:[new re(a,1-l),new re(h,1-g),new re(d,1-m),new re(p,1-u)]}};function Ym(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Si=class i extends Zt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,g=new L,f=new re,d=new L,m=new L,x=new L,p=0,u=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,u=e[y+1].y-e[y].y,d.x=u*1,d.y=-p,d.z=u*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,u=e[y+1].y-e[y].y,d.x=u*1,d.y=-p,d.z=u*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let y=0;y<=t;y++){let M=n+y*h*s,v=Math.sin(M),w=Math.cos(M);for(let b=0;b<=e.length-1;b++){g.x=e[b].x*v,g.y=e[b].y,g.z=e[b].x*w,o.push(g.x,g.y,g.z),f.x=y/t,f.y=b/(e.length-1),a.push(f.x,f.y);let _=l[3*b+0]*v,S=l[3*b+1],I=l[3*b+0]*w;c.push(_,S,I)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,w=v,b=v+e.length,_=v+e.length+1,S=v+1;r.push(w,b,S),r.push(_,S,b)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var vs=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,g=e/a,f=t/l,d=[],m=[],x=[],p=[];for(let u=0;u<h;u++){let y=u*f-o;for(let M=0;M<c;M++){let v=M*g-r;m.push(v,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){let M=y+c*u,v=y+c*(u+1),w=y+1+c*(u+1),b=y+1+c*u;d.push(M,v,b),d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$r=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],g=e,f=(t-e)/s,d=new L,m=new re;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let u=r+p/n*o;d.x=g*Math.cos(u),d.y=g*Math.sin(u),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}g+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let u=0;u<n;u++){let y=u+p,M=y,v=y+n+1,w=y+n+2,b=y+1;a.push(M,v,b),a.push(v,w,b)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var on=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],g=new L,f=new L,d=[],m=[],x=[],p=[];for(let u=0;u<=n;u++){let y=[],M=u/n,v=o+M*a,w=e*Math.cos(v),b=Math.sqrt(e*e-w*w),_=0;u===0&&o===0?_=.5/t:u===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let I=S/t,R=s+I*r;g.x=-b*Math.cos(R),g.y=w,g.z=b*Math.sin(R),m.push(g.x,g.y,g.z),f.copy(g).normalize(),x.push(f.x,f.y,f.z),p.push(I+_,1-M),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){let M=h[u][y+1],v=h[u][y],w=h[u+1][y],b=h[u+1][y+1];(u!==0||o>0)&&d.push(M,v,b),(u!==n-1||l<Math.PI)&&d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Lt=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],g=[],f=new L,d=new L,m=new L;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let u=0;u<=s;u++){let y=u/s*r;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),g.push(u/s),g.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let u=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,M=(s+1)*(x-1)+p,v=(s+1)*x+p;l.push(u,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ki=class i extends Zt{constructor(e=new xs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new re,h=new L,g=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(d,2));function x(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),y(),u()}function p(M){h=e.getPointAt(M/t,h);let v=o.normals[M],w=o.binormals[M];for(let b=0;b<=s;b++){let _=b/s*Math.PI*2,S=Math.sin(_),I=-Math.cos(_);l.x=I*v.x+S*w.x,l.y=I*v.y+S*w.y,l.z=I*v.z+S*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,g.push(a.x,a.y,a.z)}}function u(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let w=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),_=(s+1)*M+v,S=(s+1)*(M-1)+v;m.push(w,b,S),m.push(b,_,S)}}function y(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ru(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=Ts(i[t]);for(let s in n)e[s]=n[s]}return e}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Sd={clone:Ts,merge:pn},$m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ya=class extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var va=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,a=2*t-n;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=e,l=2*n-t;break;case Tc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,u=-f*p+2*f*x-f*m,y=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*x+.5*m,v=d*p-d*x;for(let w=0;w!==a;++w)r[w]=u*o[h+w]+y*o[c+w]+M*o[l+w]+v*o[g+w];return r}},ba=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),g=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*g+o[l+f]*h;return r}},Ea=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ta=class extends Vi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,g=this.outTangents;if(!h||!g){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],u=d*f+m*2,y=g[u],M=g[u+1],v=e*f+m*2,w=h[v],b=h[v+1],_=Qm(n,t,y,w,s);r[m]=bd(_,x,M,b,p)}return r}};function bd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Km(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Qm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=bd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Km(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xo(e.settings)&&(n.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ta(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break;case Sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Xo(this.settings)&&(Cu(this.settings.inTangents,e),Cu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xo(this.settings)&&(Iu(this.settings.inTangents,e),Iu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&em(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let g=a*n,f=g-n,d=g+n;for(let m=0;m!==n;++m){let x=t[g+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let g=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[g+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Iu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ra;var Wi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ir;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};wa.prototype.ValueTypeName="color";var Aa=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ir;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Ca.prototype.ValueTypeName="vector";var Ia=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,g){return c.push(h,g),this},this.removeHandler=function(h){let g=c.indexOf(h);return g!==-1&&c.splice(g,2),this},this.getHandler=function(h){for(let g=0,f=c.length;g<f;g+=2){let d=c[g],m=c[g+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Ia,Pa=class{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=new L,Yo=new wn,ri=new L,Ms=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,Yo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qo,Yo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new L,Pu=new re,Lu=new re,_n=class extends Ms{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Lu),t.subVectors(Lu,Pu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var La=class extends Ms{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var qs=-90,Ys=1,nr=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new _n(qs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new _n(qs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new _n(qs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new _n(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new _n(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Da=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ah="\\[\\]\\.:\\/",jm=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",e0="[^"+ah.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",lh),n0=/(WCOD+)?/.source.replace("WCOD",e0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),s0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),r0=new RegExp("^"+t0+n0+i0+s0+"$"),o0=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(e){let t=r0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Cc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zv=new Float32Array(1);var ph=class ph{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ph.prototype.isMatrix2=!0;var Ic=ph;function ch(i,e,t,n){let s=a0(n);switch(t){case Jc:return i*e;case Qc:return i*e/s.components*s.byteLength;case Ha:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case ka:return i*e*2/s.components*s.byteLength;case Kc:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case jr:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Za:case $a:case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case io:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case so:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(i){switch(i){case Dn:case qc:return{byteLength:1,components:1};case or:case Yc:case Un:return{byteLength:2,components:1};case za:case Ga:return{byteLength:2,components:4};case Kn:case Ba:case Nn:return{byteLength:4,components:1};case Zc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function g0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,g=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,l,c){let h=l.array,g=l.updateRanges;if(i.bindBuffer(c,a),g.length===0)i.bufferSubData(c,0,h);else{g.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<g.length;d++){let m=g[f],x=g[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,g[f]=x)}g.length=f+1;for(let d=0,m=g.length;d<m;d++){let x=g[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,pg=`uniform sampler2D dfgLUT;
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
}`,mg=`
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
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
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tx=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform float backgroundBlurriness;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,zx=`#define PHONG
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
}`,Gx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Wx=`uniform float size;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,Zx=`uniform float rotation;
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
}`,$x=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:x0,alphahash_pars_fragment:_0,alphamap_fragment:y0,alphamap_pars_fragment:v0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:b0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:I0,bumpmap_pars_fragment:P0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:z0,common:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:k0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:Z0,envmap_common_pars_fragment:$0,envmap_pars_fragment:J0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:lg,envmap_vertex:Q0,fog_vertex:j0,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:og,lights_pars_begin:ag,lights_toon_fragment:cg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:xg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:bg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Ig,morphnormal_vertex:Pg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ng,normal_fragment_maps:Ug,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:$g,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:jg,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:sx,skinnormal_vertex:rx,specularmap_fragment:ox,specularmap_pars_fragment:ax,tonemapping_fragment:lx,tonemapping_pars_fragment:cx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:xx,backgroundCube_vert:_x,backgroundCube_frag:yx,cube_vert:vx,cube_frag:Mx,depth_vert:Sx,depth_frag:bx,distance_vert:Ex,distance_frag:Tx,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Ix,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:Gx,meshphysical_frag:Hx,meshtoon_vert:kx,meshtoon_frag:Vx,points_vert:Wx,points_frag:Xx,shadow_vert:qx,shadow_frag:Yx,sprite_vert:Zx,sprite_frag:$x},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hi={basic:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:pn([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:pn([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:pn([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:pn([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:pn([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var vl={r:0,b:0,g:0},Jx=new Mt,Yd=new Ye;Yd.set(-1,0,0,0,1,0,0,0,1);function Kx(i,e,t,n,s,r){let o=new lt(0),a=s===!0?0:1,l,c,h=null,g=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(y){let M=!1,v=d(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new fn(new rn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ts(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yd),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,(h!==v||g!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,g=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new fn(new vs(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ts(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||g!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,g=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(vl,oh(i)),t.buffers.color.setClear(vl.r,vl.g,vl.b,M,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:x,dispose:u}}function Qx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(N,z,W,P,C){let B=!1,O=g(N,P,W,z);r!==O&&(r=O,c(r.object)),B=d(N,P,W,C),B&&m(N,P,W,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(N,z,W,P),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function g(N,z,W,P){let C=P.wireframe===!0,B=n[z.id];B===void 0&&(B={},n[z.id]=B);let O=N.isInstancedMesh===!0?N.id:0,$=B[O];$===void 0&&($={},B[O]=$);let H=$[W.id];H===void 0&&(H={},$[W.id]=H);let Z=H[C];return Z===void 0&&(Z=f(l()),H[C]=Z),Z}function f(N){let z=[],W=[],P=[];for(let C=0;C<t;C++)z[C]=0,W[C]=0,P[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:P,object:N,attributes:{},index:null}}function d(N,z,W,P){let C=r.attributes,B=z.attributes,O=0,$=W.getAttributes();for(let H in $)if($[H].location>=0){let K=C[H],xe=B[H];if(xe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),K===void 0||K.attribute!==xe||xe&&K.data!==xe.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function m(N,z,W,P){let C={},B=z.attributes,O=0,$=W.getAttributes();for(let H in $)if($[H].location>=0){let K=B[H];K===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let xe={};xe.attribute=K,K&&K.data&&(xe.data=K.data),C[H]=xe,O++}r.attributes=C,r.attributesNum=O,r.index=P}function x(){let N=r.newAttributes;for(let z=0,W=N.length;z<W;z++)N[z]=0}function p(N){u(N,0)}function u(N,z){let W=r.newAttributes,P=r.enabledAttributes,C=r.attributeDivisors;W[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),C[N]!==z&&(i.vertexAttribDivisor(N,z),C[N]=z)}function y(){let N=r.newAttributes,z=r.enabledAttributes;for(let W=0,P=z.length;W<P;W++)z[W]!==N[W]&&(i.disableVertexAttribArray(W),z[W]=0)}function M(N,z,W,P,C,B,O){O===!0?i.vertexAttribIPointer(N,z,W,C,B):i.vertexAttribPointer(N,z,W,P,C,B)}function v(N,z,W,P){x();let C=P.attributes,B=W.getAttributes(),O=z.defaultAttributeValues;for(let $ in B){let H=B[$];if(H.location>=0){let Z=C[$];if(Z===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let K=Z.normalized,xe=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let q=Ae.buffer,_e=Ae.type,Ce=Ae.bytesPerElement,Fe=_e===i.INT||_e===i.UNSIGNED_INT||Z.gpuType===Ba;if(Z.isInterleavedBufferAttribute){let ye=Z.data,Be=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,yt=Z.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ue=0;Ue<H.locationSize;Ue++)u(H.location+Ue,ye.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)p(H.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ue=0;Ue<H.locationSize;Ue++)M(H.location+Ue,xe/H.locationSize,_e,K,Be*Ce,(yt+xe/H.locationSize*Ue)*Ce,Fe)}else{if(Z.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)u(H.location+ye,Z.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<H.locationSize;ye++)p(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ye=0;ye<H.locationSize;ye++)M(H.location+ye,xe/H.locationSize,_e,K,xe*Ce,xe/H.locationSize*ye*Ce,Fe)}}else if(O!==void 0){let K=O[$];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(H.location,K);break;case 3:i.vertexAttrib3fv(H.location,K);break;case 4:i.vertexAttrib4fv(H.location,K);break;default:i.vertexAttrib1fv(H.location,K)}}}}y()}function w(){I();for(let N in n){let z=n[N];for(let W in z){let P=z[W];for(let C in P){let B=P[C];for(let O in B)h(B[O].object),delete B[O];delete P[C]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let W in z){let P=z[W];for(let C in P){let B=P[C];for(let O in B)h(B[O].object),delete B[O];delete P[C]}}delete n[N.id]}function _(N){for(let z in n){let W=n[z];for(let P in W){let C=W[P];if(C[N.id]===void 0)continue;let B=C[N.id];for(let O in B)h(B[O].object),delete B[O];delete C[N.id]}}}function S(N){for(let z in n){let W=n[z],P=N.isInstancedMesh===!0?N.id:0,C=W[P];if(C!==void 0){for(let B in C){let O=C[B];for(let $ in O)h(O[$].object),delete O[$];delete C[B]}delete W[P],Object.keys(W).length===0&&delete n[z]}}}function I(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function jx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function e_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Qn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==Nn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:b}}function t_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Zn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let d=g.length!==0||f||n!==0||s;return s=f,n=g.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){t=h(g,f,0)},this.setState=function(g,f,d){let m=g.clippingPlanes,x=g.clipIntersection,p=g.clipShadows,u=i.get(g);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,v=u.clippingState||null;l.value=v,v=h(m,f,M,d);for(let w=0;w!==M;++w)v[w]=t[w];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,f,d,m){let x=g!==null?g.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let u=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(g[M]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var lo=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:bi});r.uniforms.tEquirect.value=t;let o=new fn(s,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=yn),new nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Td=256,n_=3,i_=20,Zd=256,$d=16,s_=3,r_=new L,o_=new lt,Sl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new fn(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=r_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(o_));let p=new nr(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=g,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Td,gd(e))}_fromTexture(e,t){e.mapping===bs||e.mapping===rr?this._setSize(e.image.length===0?Td:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wd(e,!1,!1),n=Math.log2(e)-n_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===bs||e.mapping===rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ad()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=a_(),this._integrationMaterial=l_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$d);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-s_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Zd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=c_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function wd(i,e,t){return new lo(i,{minFilter:Ei,generateMipmaps:e,type:Un,colorSpace:Pr,depthBuffer:t})}function co(i,e,t){return new Pn({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Sn,blending:bi,depthTest:!1,depthWrite:!1})}function a_(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zd}u

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
	`)}function l_(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$d}},`

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
	`)}function c_(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${i_}
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
	`)}function Ad(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Rd(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function h_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ua||d===Fa)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new lo(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Ua||d===Fa,x=d===bs||d===rr;if(m||x){let p=t.get(f),u=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new Sl(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Sl(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Ua?f.mapping=bs:d===Fa&&(f.mapping=rr),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function u_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function g(m){let x=m.index,p=m.attributes.position,u=0;if(p===void 0)return;let y=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?Br:Or,v=new M(Math.ceil(y/3)*6,1),w=v.array;if(x!==null){let _=x.array;u=x.version;for(let S=0,I=0;S<y;S+=3){let R=_[S+0],N=_[S+1],z=_[S+2];w[I++]=R,w[I++]=N,w[I++]=N,w[I++]=z,w[I++]=z,w[I++]=R}}else{u=p.version;for(let _=0,S=0;_<y;_+=3){let I=_+0,R=_+1,N=_+2;w[S++]=I,w[S++]=R,w[S++]=R,w[S++]=N,w[S++]=N,w[S++]=I}}v.version=u;let b=r.get(m);b&&e.remove(b),r.set(m,v)}function f(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&g(m)}else g(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function f_(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,f){i.drawElements(n,f,r,g*o),t.update(f,n,1)}function c(g,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,g*o,d),t.update(f,n,d))}function h(g,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function p_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){let n=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==g){let I=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*w*4*g),_=new Ur(b,v,w,g);_.type=Nn,_.needsUpdate=!0;let S=M*4;for(let R=0;R<g;R++){let N=p[R],z=u[R],W=y[R],P=v*w*4*R;for(let C=0;C<N.count;C++){let B=C*S;d===!0&&(s.fromBufferAttribute(N,C),b[P+B+0]=s.x,b[P+B+1]=s.y,b[P+B+2]=s.z,b[P+B+3]=0),m===!0&&(s.fromBufferAttribute(z,C),b[P+B+4]=s.x,b[P+B+5]=s.y,b[P+B+6]=s.z,b[P+B+7]=0),x===!0&&(s.fromBufferAttribute(W,C),b[P+B+8]=s.x,b[P+B+9]=s.y,b[P+B+10]=s.z,b[P+B+11]=W.itemSize===4?s.w:1)}}f={count:g,texture:_,size:new re(v,w)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function g_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,g=c.geometry,f=e.get(c,g);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var x_={[Bc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function __(i,e,t,n,s,r){let o=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pt([0,2,0,0,2,0],2));let g=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new fn(h,g),d=new La(-1,1,1,-1,0,1),m=null,x=null,p=!1,u,y=null,M=[],v=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),l!==null&&l.setSize(w,b);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;let b=o.width,_=o.height;M.length>0&&a===null&&(a=new vn(b,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new vn(b,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new $n(b,_),r===!0&&(c.format=Ti,c.type=Es)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<M.length;I++){let R=M[I];R.setSize&&R.setSize(b,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,b){if(p||w.toneMapping===li&&M.length===0)return!1;if(y=b,b!==null){let _=b.width,S=b.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return v===!1&&w.setRenderTarget(o),u=w.toneMapping,w.toneMapping=li,!0},this.hasRenderPass=function(){return v},this.end=function(w,b){w.toneMapping=u,p=!0;let _=o,S=a;for(let I=0;I<M.length;I++){let R=M[I];R.enabled!==!1&&(R.render(w,S,_,b),R.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,g.defines={},dt.getTransfer(m)===_t&&(g.defines.SRGB_TRANSFER="");let I=x_[x];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(y),w.render(f,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),g.dispose()}}var Jd=new An,Kd=new $n(1,1),Qd=new Gr(1),jd=new Ur,ef=new ca,tf=new zr,Cd=[],Id=[],Pd=new Float32Array(16),Ld=new Float32Array(9),Dd=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function El(i,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),Jt(t,n)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),Jt(t,n)}}function T_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Jt(t,n)}}function w_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Tl(i){return i.version===0&&(i.compareFunction=nh,i.needsUpdate=!0),i}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Tl(Kd):r=Jd,t.setTexture2D(e||r,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ef,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Tl(Qd):r=tf,t.setTextureCube(e||r,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jd,s)}function B_(i){switch(i){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return I_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,e){i.uniform1fv(this.addr,e)}function G_(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function H_(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function k_(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function V_(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W_(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q_(i,e){i.uniform1iv(this.addr,e)}function Y_(i,e){i.uniform2iv(this.addr,e)}function Z_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function J_(i,e){i.uniform1uiv(this.addr,e)}function K_(i,e){i.uniform2uiv(this.addr,e)}function Q_(i,e){i.uniform3uiv(this.addr,e)}function j_(i,e){i.uniform4uiv(this.addr,e)}function ey(i,e,t){let n=this.cache,s=e.length,r=El(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tl(Kd):o=Jd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ty(i,e,t){let n=this.cache,s=e.length,r=El(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ef,r[o])}function ny(i,e,t){let n=this.cache,s=e.length,r=El(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Tl(Qd):o=tf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function iy(i,e,t){let n=this.cache,s=e.length,r=El(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jd,r[o])}function sy(i){switch(i){case 5126:return z_;case 35664:return G_;case 35665:return H_;case 35666:return k_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}var xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sy(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Nd(i,e){i.seq.push(e),i.map[e.id]=e}function ry(i,e,t){let n=i.name,s=n.length;for(mh.lastIndex=0;;){let r=mh.exec(n),o=mh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nd(t,c===void 0?new xh(a,i,e):new _h(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new yh(a),Nd(t,g)),t=g}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ry(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oy=37297,ay=0;function ly(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fd=new Ye;function cy(i){dt._getMatrix(Fd,dt.workingColorSpace,i);let e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ly(i.getShaderSource(e),a)}else return r}function hy(i,e){let t=cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var uy={[Bc]:"Linear",[zc]:"Reinhard",[Gc]:"Cineon",[Hc]:"ACESFilmic",[Vc]:"AgX",[Wc]:"Neutral",[kc]:"Custom"};function dy(i,e){let t=uy[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ml=new L;function fy(){dt.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function my(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ao(i){return i!==""}function Bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(xy,_y)}function _y(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vh(t)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(yy,vy)}function vy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var My={[Kr]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Sy(i){return My[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[rr]:"ENVMAP_MODE_REFRACTION"};function Ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":by[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[td]:"ENVMAP_BLENDING_ADD"};function wy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[i.combine]||"ENVMAP_BLENDING_NONE"}function Ay(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ey(t),g=wy(t),f=py(t),d=my(r),m=s.createProgram(),x,p,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ao).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(x=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?et.tonemapping_pars_fragment:"",t.toneMapping!==li?dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,hy("linearToOutputTexel",t.outputColorSpace),fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=vh(o),o=Bd(o,t),o=zd(o,t),a=vh(a),a=Bd(a,t),a=zd(a,t),o=Gd(o),a=Gd(a),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=u+x+o,M=u+p+a,v=Ud(s,s.VERTEX_SHADER,y),w=Ud(s,s.FRAGMENT_SHADER,M);s.attachShader(m,v),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",z=s.getShaderInfoLog(v)||"",W=s.getShaderInfoLog(w)||"",P=N.trim(),C=z.trim(),B=W.trim(),O=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,w);else{let H=Od(s,v,"vertex"),Z=Od(s,w,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+H+`
`+Z)}else P!==""?Ve("WebGLProgram: Program Info Log:",P):(C===""||B==="")&&($=!1);$&&(R.diagnostics={runnable:O,programLog:P,vertexShader:{log:C,prefix:x},fragmentShader:{log:B,prefix:p}})}s.deleteShader(v),s.deleteShader(w),_=new lr(s,m),S=gy(s,m)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,oy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ay++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}var Ry=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sh(e),t.set(e,n)),n}},Sh=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Cy(i){return i===Yi||i===io||i===so}function Iy(i,e,t,n,s,r){let o=new Fr,a=new Mh,l=new Set,c=[],h=new Map,g=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,I,R,N,z){let W=R.fog,P=N.geometry,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||C,B),$=f[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=Z!==void 0?Z.length:0,xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let Ae,q,_e,Ce;if($){let Te=hi[$];Ae=Te.vertexShader,q=Te.fragmentShader}else{Ae=_.vertexShader,q=_.fragmentShader;let Te=a.getVertexShaderStage(_),vt=a.getFragmentShaderStage(_);a.update(_,Te,vt),_e=Te.id,Ce=vt.id}let Fe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,Ue=!!_.map,Qe=!!_.matcap,ot=!!O,te=ot&&O.isPMREMTexture===!0,pe=!!_.aoMap,ue=!!_.lightMap,Ie=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,$e=!!_.displacementMap,ze=!!_.emissiveMap,at=!!_.metalnessMap,ct=!!_.roughnessMap,mt=_.anisotropy>0,F=_.clearcoat>0,Wt=_.diffuseRoughness>0,st=_.dispersion>0,wt=_.retroreflectivity>0,Me=_.iridescence>0,zt=_.sheen>0,ke=_.transmission>0,Xe=mt&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,E=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,oe=Wt&&!!_.diffuseRoughnessMap,ee=Me&&!!_.iridescenceMap,de=Me&&!!_.iridescenceThicknessMap,Se=zt&&!!_.sheenColorMap,J=zt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,me=!!_.specularColorMap,D=!!_.specularIntensityMap,j=ke&&!!_.transmissionMap,Y=ke&&!!_.thicknessMap,ge=!!_.gradientMap,ce=!!_.alphaMap,fe=_.alphaTest>0,Ge=!!_.alphaHash,je=!!_.extensions,le=li;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(le=i.toneMapping);let He=te?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Ke={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:q,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:Qe,envMap:ot,envMapMode:ot&&O.mapping,envMapPMREM:te,envMapMaxLod:te?He.length-1:null,envMapSize:te?He[0].width:null,aoMap:pe,lightMap:ue,bumpMap:Ie,normalMap:Ee,displacementMap:$e,emissiveMap:ze,normalMapObjectSpace:Ee&&_.normalMapType===sd,normalMapTangentSpace:Ee&&_.normalMapType===jc,packedNormalMap:Ee&&_.normalMapType===jc&&Cy(_.normalMap.format),metalnessMap:at,roughnessMap:ct,anisotropy:mt,anisotropyMap:Xe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:k,diffuseRoughness:Wt,diffuseRoughnessMap:oe,dispersion:st,retroreflection:wt,iridescence:Me,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:zt,sheenColorMap:Se,sheenRoughnessMap:J,specularMap:Q,specularColorMap:me,specularIntensityMap:D,transmission:ke,transmissionMap:j,thicknessMap:Y,gradientMap:ge,opaque:_.transparent===!1&&_.blending===sr&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:Ge,combine:_.combine,mapUv:Ue&&d(_.map.channel),aoMapUv:pe&&d(_.aoMap.channel),lightMapUv:ue&&d(_.lightMap.channel),bumpMapUv:Ie&&d(_.bumpMap.channel),normalMapUv:Ee&&d(_.normalMap.channel),displacementMapUv:$e&&d(_.displacementMap.channel),emissiveMapUv:ze&&d(_.emissiveMap.channel),metalnessMapUv:at&&d(_.metalnessMap.channel),roughnessMapUv:ct&&d(_.roughnessMap.channel),anisotropyMapUv:Xe&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(_.sheenRoughnessMap.channel),specularMapUv:Q&&d(_.specularMap.channel),specularColorMapUv:me&&d(_.specularColorMap.channel),specularIntensityMapUv:D&&d(_.specularIntensityMap.channel),transmissionMapUv:j&&d(_.transmissionMap.channel),thicknessMapUv:Y&&d(_.thicknessMap.channel),alphaMapUv:ce&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ee||mt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ue||ce),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ht,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(S,_),u(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function u(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=f[_.type],I;if(S){let R=hi[S];I=Sd.clone(R.uniforms)}else I=_.uniforms;return I}function M(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new Ay(i,S,_,s),c.push(I),h.set(S,I)),I}function v(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function b(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:b}}function Py(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,p,u){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:u},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=p,y.group=u),e++,y}function l(f,d,m,x,p,u,y){y.reversedDepth===!0&&(p=-p);let M=a(f,d,m,x,p,u);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(f,d,m,x,p,u){let y=a(f,d,m,x,p,u);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||Ly),n.length>1&&n.sort(d||kd),s.length>1&&s.sort(d||kd)}function g(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:h}}function Dy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Vd,i.set(n,[o])):s>=r.length?(o=new Vd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new lt};break;case"SpotLight":t={position:new L,direction:new L,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fy=0;function Oy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function By(i){let e=new Ny,t=Uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Mt,o=new Mt;function a(c){let h=0,g=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,m=0,x=0,p=0,u=0,y=0,M=0,v=0,w=0,b=0,_=0,S=0,I=0,R=0;c.sort(Oy);for(let z=0,W=c.length;z<W;z++){let P=c[z],C=P.color,B=P.intensity,O=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Yi?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=C.r*B,g+=C.g*B,f+=C.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);R++}else if(P.isSunLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,K=t.get(P);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=$;let xe=Z.getViewportCount();for(let Ae=0;Ae<xe;Ae++)n.sunShadowMatrix[x+Ae]=Z.getMatrix(Ae),n.sunShadowCascade[x+Ae]=Z._cascadeData[Ae];x+=xe,m++}n.sun[d]=H,d++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,K=t.get(P);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=H,p++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(C).multiplyScalar(B),H.distance=O,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[y]=H;let Z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Z.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[y]=Z.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=$,_++}y++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(C).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=H,M++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let Z=P.shadow,K=t.get(P);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,n.pointShadow[u]=K,n.pointShadowMap[u]=$,n.pointShadowMatrix[u]=P.shadow.matrix,b++}n.point[u]=H,u++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[v]=H,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=f;let N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==u||N.spotLength!==y||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=M,n.point.length=u,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,N.sunLength=d,N.directionalLength=p,N.pointLength=u,N.spotLength=y,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=R,n.version=Fy++)}function l(c,h){let g=0,f=0,d=0,m=0,x=0,p=0,u=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let w=n.sun[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),g++}else if(v.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(v.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),m++}else if(v.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),o.identity(),r.copy(v.matrixWorld),r.premultiply(u),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),d++}else if(v.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),p++}}}return{setup:a,setupView:l,state:n}}function Wd(i){let e=new By(i),t=[],n=[],s=[];function r(g){h.camera=g,t.length=0,n.length=0,s.length=0}function o(g){g.isLightProbeGrid?s.push(g):t.push(g)}function a(g){n.push(g)}function l(){e.setup(t),s.sort((g,f)=>g.priority-f.priority||g.id-f.id)}function c(g){e.setupView(t,g)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Wd(i),e.set(s,[a])):r>=o.length?(a=new Wd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`,ky=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Vy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Xd=new Mt,oo=new L,gh=new L;function Wy(i,e,t){let n=new ms,s=new re,r=new re,o=new Bt,a=new va,l=new Ma,c={},h=t.maxTextureSize,g={[qi]:Sn,[Sn]:qi,[Ht]:Ht},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Gy,fragmentShader:Hy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Zt;m.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let u=this.type;this.render=function(b,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Uu&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);let I=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=u!==this.type;W&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(C=>C.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,C=b.length;P<C;P++){let B=b[P],O=B.shadow;if(O===void 0){Ve("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ir){if(B.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vn(s.x,s.y,{format:Yi,type:Un,minFilter:yn,magFilter:yn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new $n(s.x,s.y,Nn),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Mi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn}else B.isPointLight?(O.map=new lo(s.x),O.map.depthTexture=new Gr(s.x,Kn)):(O.map=new vn(s.x,s.y),O.map.depthTexture=new $n(s.x,s.y,Kn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Mi,this.type===Kr?(O.map.depthTexture.compareFunction=H?th:eh,O.map.depthTexture.minFilter=yn,O.map.depthTexture.magFilter=yn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();B.isPointLight!==!0&&O.updateMatrices(B,S);let K=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let xe=0;xe<Z;xe++){let Ae=O.getCamera(xe);if(B.isPointLight){let q=O.camera,_e=O.matrix,Ce=B.distance||q.far;Ce!==q.far&&(q.far=Ce,q.updateProjectionMatrix()),oo.setFromMatrixPosition(B.matrixWorld),q.position.copy(oo),gh.copy(q.position),gh.add(ky[xe]),q.up.copy(Vy[xe]),q.lookAt(gh),q.updateMatrixWorld(),_e.makeTranslation(-oo.x,-oo.y,-oo.z),Xd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xd,q.coordinateSystem,q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(O.map),i.clear());let q=O.getViewport(xe);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(o)}n=O.getFrustum(xe),v(_,S,Ae,B,K,this.type)}O.isPointLightShadow!==!0&&this.type===ir&&y(O,S),O.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(I,R,N)};function y(b,_){let S=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new vn(s.x,s.y,{format:Yi,type:Un}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,S,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,S,d,x,null)}function M(b,_,S,I){let R=null,N=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,W=_.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let C=P[W];C===void 0&&(C=R.clone(),P[W]=C,_.addEventListener("dispose",w)),R=C}if(R.visible=_.visible,R.wireframe=_.wireframe,I===ir?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:g[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=i.properties.get(R);z.light=S}return R}function v(b,_,S,I,R,N){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===ir)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let P=e.update(b),C=b.material;if(Array.isArray(C)){let B=P.groups;for(let O=0,$=B.length;O<$;O++){let H=B[O],Z=C[H.materialIndex];if(Z&&Z.visible){let K=M(b,Z,I,N);b.onBeforeShadow(i,b,_,S,P,K,H),i.renderBufferDirect(S,null,P,K,b,H),b.onAfterShadow(i,b,_,S,P,K,H)}}}else if(C.visible){let B=M(b,C,I,N);b.onBeforeShadow(i,b,_,S,P,B,null),i.renderBufferDirect(S,null,P,B,b,null),b.onAfterShadow(i,b,_,S,P,B,null)}}let W=b.children;for(let P=0,C=W.length;P<C;P++)v(W[P],_,S,I,R,N)}function w(b){b.target.removeEventListener("dispose",w);for(let S in c){let I=c[S],R=b.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function Xy(i,e){function t(){let D=!1,j=new Bt,Y=null,ge=new Bt(0,0,0,0);return{setMask:function(ce){Y!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){D=ce},setClear:function(ce,fe,Ge,je,le){le===!0&&(ce*=je,fe*=je,Ge*=je),j.set(ce,fe,Ge,je),ge.equals(j)===!1&&(i.clearColor(ce,fe,Ge,je),ge.copy(j))},reset:function(){D=!1,Y=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,Y=null,ge=null,ce=null;return{setReversed:function(fe){if(j!==fe){let Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),j=fe;let je=ce;ce=null,this.setClear(je)}},getReversed:function(){return j},setTest:function(fe){fe?ye(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!D&&(i.depthMask(fe),Y=fe)},setFunc:function(fe){if(j&&(fe=md[fe]),ge!==fe){switch(fe){case Jo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ce!==fe&&(ce=fe,j&&(fe=1-fe),i.clearDepth(fe))},reset:function(){D=!1,Y=null,ge=null,ce=null,j=!1}}}function s(){let D=!1,j=null,Y=null,ge=null,ce=null,fe=null,Ge=null,je=null,le=null;return{setTest:function(He){D||(He?ye(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(He){j!==He&&!D&&(i.stencilMask(He),j=He)},setFunc:function(He,Ke,Te){(Y!==He||ge!==Ke||ce!==Te)&&(i.stencilFunc(He,Ke,Te),Y=He,ge=Ke,ce=Te)},setOp:function(He,Ke,Te){(fe!==He||Ge!==Ke||je!==Te)&&(i.stencilOp(He,Ke,Te),fe=He,Ge=Ke,je=Te)},setLocked:function(He){D=He},setClear:function(He){le!==He&&(i.clearStencil(He),le=He)},reset:function(){D=!1,j=null,Y=null,ge=null,ce=null,fe=null,Ge=null,je=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},g={},f={},d=new WeakMap,m=[],x=null,p=!1,u=null,y=null,M=null,v=null,w=null,b=null,_=null,S=new lt(0,0,0),I=0,R=!1,N=null,z=null,W=null,P=null,C=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=$>=2);let Z=null,K={},xe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),q=new Bt().fromArray(xe),_e=new Bt().fromArray(Ae);function Ce(D,j,Y,ge){let ce=new Uint8Array(4),fe=i.createTexture();i.bindTexture(D,fe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(j+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return fe}let Fe={};Fe[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(i.DEPTH_TEST),o.setFunc($s),Ie(!1),Ee(Pc),ye(i.CULL_FACE),pe(bi);function ye(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Be(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function yt(D,j){return f[D]!==j?(i.bindFramebuffer(D,j),f[D]=j,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ue(D,j){let Y=m,ge=!1;if(D){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let ce=D.textures;if(Y.length!==ce.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ge=ce.length;fe<Ge;fe++)Y[fe]=i.COLOR_ATTACHMENT0+fe;Y.length=ce.length,ge=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Y)}function Qe(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let ot={[Ss]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};ot[zu]=i.MIN,ot[Gu]=i.MAX;let te={[Hu]:i.ZERO,[ku]:i.ONE,[Vu]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(D,j,Y,ge,ce,fe,Ge,je,le,He){if(D===bi){p===!0&&(Be(i.BLEND),p=!1);return}if(p===!1&&(ye(i.BLEND),p=!0),D!==Fu){if(D!==u||He!==R){if((y!==Ss||w!==Ss)&&(i.blendEquation(i.FUNC_ADD),y=Ss,w=Ss),He)switch(D){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}M=null,v=null,b=null,_=null,S.set(0,0,0),I=0,u=D,R=He}return}ce=ce||j,fe=fe||Y,Ge=Ge||ge,(j!==y||ce!==w)&&(i.blendEquationSeparate(ot[j],ot[ce]),y=j,w=ce),(Y!==M||ge!==v||fe!==b||Ge!==_)&&(i.blendFuncSeparate(te[Y],te[ge],te[fe],te[Ge]),M=Y,v=ge,b=fe,_=Ge),(je.equals(S)===!1||le!==I)&&(i.blendColor(je.r,je.g,je.b,le),S.copy(je),I=le),u=D,R=!1}function ue(D,j){D.side===Ht?Be(i.CULL_FACE):ye(i.CULL_FACE);let Y=D.side===Sn;j&&(Y=!Y),Ie(Y),D.blending===sr&&D.transparent===!1?pe(bi):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ge=D.stencilWrite;a.setTest(ge),ge&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function Ee(D){D!==Du?(ye(i.CULL_FACE),D!==z&&(D===Pc?i.cullFace(i.BACK):D===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),z=D}function $e(D){D!==W&&(O&&i.lineWidth(D),W=D)}function ze(D,j,Y){D?(ye(i.POLYGON_OFFSET_FILL),(P!==j||C!==Y)&&(P=j,C=Y,o.getReversed()&&(j=-j,Y=-Y),i.polygonOffset(j,Y))):Be(i.POLYGON_OFFSET_FILL)}function at(D){D?ye(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function ct(D){D===void 0&&(D=i.TEXTURE0+B-1),Z!==D&&(i.activeTexture(D),Z=D)}function mt(D,j,Y){Y===void 0&&(Z===null?Y=i.TEXTURE0+B-1:Y=Z);let ge=K[Y];ge===void 0&&(ge={type:void 0,texture:void 0},K[Y]=ge),(ge.type!==D||ge.texture!==j)&&(Z!==Y&&(i.activeTexture(Y),Z=Y),i.bindTexture(D,j||Fe[D]),ge.type=D,ge.texture=j)}function F(){let D=K[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function wt(){try{i.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function Me(){try{i.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function zt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function Xe(){try{i.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}function E(){try{i.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function k(){try{i.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function oe(D){return g[D]!==void 0?g[D]:i.getParameter(D)}function ee(D,j){g[D]!==j&&(i.pixelStorei(D,j),g[D]=j)}function de(D){q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),q.copy(D))}function Se(D){_e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function J(D,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ge=Y.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,ge,ge),Y.set(D,ge))}function Q(D,j,Y){let ce=c.get(j).get(D);l[ce]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,Y),l[ce]=Y)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},Z=null,K={},f={},l={},d=new WeakMap,m=[],x=null,p=!1,u=null,y=null,M=null,v=null,w=null,b=null,_=null,S=new lt(0,0,0),I=0,R=!1,N=null,z=null,W=null,P=null,C=null,q.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Be,bindFramebuffer:yt,drawBuffers:Ue,useProgram:Qe,setBlending:pe,setMaterial:ue,setFlipSided:Ie,setCullFace:Ee,setLineWidth:$e,setPolygonOffset:ze,setScissorTest:at,activeTexture:ct,bindTexture:mt,unbindTexture:F,compressedTexImage2D:Wt,compressedTexImage3D:st,texImage2D:E,texImage3D:k,pixelStorei:ee,getParameter:oe,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Xe,texStorage3D:A,texSubImage2D:wt,texSubImage3D:Me,compressedTexSubImage2D:zt,compressedTexSubImage3D:ke,scissor:de,viewport:Se,reset:me}}function qy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,g=new Set,f,d=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(A,E){return p?new OffscreenCanvas(A,E):Nr("canvas")}function y(A,E,k){let oe=1,ee=Xe(A);if((ee.width>k||ee.height>k)&&(oe=k/Math.max(ee.width,ee.height)),oe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let de=Math.floor(oe*ee.width),Se=Math.floor(oe*ee.height);f===void 0&&(f=u(de,Se));let J=E?u(de,Se):f;return J.width=de,J.height=Se,J.getContext("2d").drawImage(A,0,0,de,Se),Ve("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+Se+")."),J}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function M(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,E,k,oe,ee,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Se;oe&&(Se=e.get("EXT_texture_norm16"),Se||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&Se&&(J=Se.R16_EXT),k===i.SHORT&&Se&&(J=Se.R16_SNORM_EXT)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),E===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&Se&&(J=Se.RG16_EXT),k===i.SHORT&&Se&&(J=Se.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),E===i.RGB&&(k===i.UNSIGNED_SHORT&&Se&&(J=Se.RGB16_EXT),k===i.SHORT&&Se&&(J=Se.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),E===i.RGBA){let Q=de?Lr:dt.getTransfer(ee);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Q===_t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&Se&&(J=Se.RGBA16_EXT),k===i.SHORT&&Se&&(J=Se.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(A,E){let k;return A?E===null||E===Kn||E===Es?k=i.DEPTH24_STENCIL8:E===Nn?k=i.DEPTH32F_STENCIL8:E===or&&(k=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kn||E===Es?k=i.DEPTH_COMPONENT24:E===Nn?k=i.DEPTH_COMPONENT32F:E===or&&(k=i.DEPTH_COMPONENT16),k}function S(A,E){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function I(A){let E=new WeakRef(A);n.get(A).__ref=E,m.add(E),x.register(A,E,E)}function R(A){let E=n.get(A).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function N(A){W(A.target)}function z(A){P(A.target)}function W(A){A.removeEventListener("dispose",N),R(A),B(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&g.delete(A)}function P(A){A.removeEventListener("dispose",z),R(A),$(A)}function C(){for(let A of m){let E=A.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):W(E))}m.clear(),g.clear()}function B(A){let E=n.get(A);if(E.__webglInit===void 0)return;let k=A.source,oe=d.get(k);if(oe){let ee=oe[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(A),Object.keys(oe).length===0&&d.delete(k)}n.remove(A)}function O(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let k=A.source,oe=d.get(k);delete oe[E.__cacheKey],o.memory.textures--}function $(A){let E=n.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&W(k),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let de=0;de<E.__webglFramebuffer[ee].length;de++)i.deleteFramebuffer(E.__webglFramebuffer[ee][de]);else i.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)i.deleteFramebuffer(E.__webglFramebuffer[ee]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let oe=A.textures;for(let ee=0,de=oe.length;ee<de;ee++){let Se=n.get(oe[ee]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(oe[ee])}n.remove(A)}let H=0;function Z(){H=0}function K(){return H}function xe(A){H=A}function Ae(){let A=H;return A>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function q(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function _e(A,E){let k=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let oe=A.image;if(oe===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,A,E);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function Ce(A,E){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ue(k,A,E);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function Fe(A,E){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ue(k,A,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function ye(A,E){let k=n.get(A);if(A.version>0&&k.__version!==A.version){Ie(k,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let Be={[ia]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},yt={[nn]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Ue={[od]:i.NEVER,[nh]:i.ALWAYS,[ad]:i.LESS,[eh]:i.LEQUAL,[ld]:i.EQUAL,[th]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function Qe(A,E){if(E.type===Nn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===Oa||E.magFilter===Qr||E.magFilter===Ei||E.minFilter===yn||E.minFilter===Oa||E.minFilter===Qr||E.minFilter===Ei)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Be[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Be[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Be[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==Qr&&E.minFilter!==Ei||E.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",N),I(E));let oe=E.source,ee=d.get(oe);ee===void 0&&(ee={},d.set(oe,ee));let de=q(E);if(de!==A.__cacheKey){ee[de]===void 0&&(ee[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[de].usedTimes++;let Se=ee[A.__cacheKey];Se!==void 0&&(ee[A.__cacheKey].usedTimes--,Se.usedTimes===0&&O(E)),A.__cacheKey=de,A.__webglTexture=ee[de].texture}return k}function te(A,E,k){return Math.floor(Math.floor(A/k)/E)}function pe(A,E,k,oe){let de=A.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,k,oe,E.data);else{de.sort((D,j)=>D.start-j.start);let Se=0;for(let D=1;D<de.length;D++){let j=de[Se],Y=de[D],ge=j.start+j.count,ce=te(Y.start,E.width,4),fe=te(j.start,E.width,4);Y.start<=ge+1&&ce===fe&&te(Y.start+Y.count-1,E.width,4)===ce?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++Se,de[Se]=Y)}de.length=Se+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let D=0,j=de.length;D<j;D++){let Y=de[D],ge=Math.floor(Y.start/4),ce=Math.ceil(Y.count/4),fe=ge%E.width,Ge=Math.floor(ge/E.width),je=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,fe,Ge,je,le,k,oe,E.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ue(A,E,k){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);let ee=ot(A,E),de=E.source;t.bindTexture(oe,A.__webglTexture,i.TEXTURE0+k);let Se=n.get(de);if(de.version!==Se.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let le=dt.getPrimaries(dt.workingColorSpace),He=E.colorSpace===wi?null:dt.getPrimaries(E.colorSpace),Ke=E.colorSpace===wi||le===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=y(E.image,!1,s.maxTextureSize);Q=ke(E,Q);let me=r.convert(E.format,E.colorSpace),D=r.convert(E.type),j=b(E.internalFormat,me,D,E.normalized,E.colorSpace,E.isVideoTexture);Qe(oe,E);let Y,ge=E.mipmaps,ce=E.isVideoTexture!==!0,fe=Se.__version===void 0||ee===!0,Ge=de.dataReady,je=S(E,Q);if(E.isDepthTexture)j=_(E.format===Ti,E.type),fe&&(ce?t.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,me,D,null));else if(E.isDataTexture)if(ge.length>0){ce&&fe&&t.texStorage2D(i.TEXTURE_2D,je,j,ge[0].width,ge[0].height);for(let le=0,He=ge.length;le<He;le++)Y=ge[le],ce?Ge&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,me,D,Y.data):t.texImage2D(i.TEXTURE_2D,le,j,Y.width,Y.height,0,me,D,Y.data);E.generateMipmaps=!1}else ce?(fe&&t.texStorage2D(i.TEXTURE_2D,je,j,Q.width,Q.height),Ge&&pe(E,Q,me,D)):t.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,me,D,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ce&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,j,ge[0].width,ge[0].height,Q.depth);for(let le=0,He=ge.length;le<He;le++)if(Y=ge[le],E.format!==Qn)if(me!==null)if(ce){if(Ge)if(E.layerUpdates.size>0){let Ke=ch(Y.width,Y.height,E.format,E.type);for(let Te of E.layerUpdates){let vt=Y.data.subarray(Te*Ke/Y.data.BYTES_PER_ELEMENT,(Te+1)*Ke/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Te,Y.width,Y.height,1,me,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,me,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,j,Y.width,Y.height,Q.depth,0,Y.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,me,D,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,j,Y.width,Y.height,Q.depth,0,me,D,Y.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ce&&fe&&t.texStorage2D(i.TEXTURE_2D,je,j,ge[0].width,ge[0].height);for(let le=0,He=ge.length;le<He;le++)Y=ge[le],E.format!==Qn?me!==null?ce?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,me,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,le,j,Y.width,Y.height,0,Y.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ge&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Y.width,Y.height,me,D,Y.data):t.texImage2D(i.TEXTURE_2D,le,j,Y.width,Y.height,0,me,D,Y.data)}else if(E.isDataArrayTexture)if(ce){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,j,Q.width,Q.height,Q.depth),Ge)if(E.layerUpdates.size>0){let le=ch(Q.width,Q.height,E.format,E.type);for(let He of E.layerUpdates){let Ke=Q.data.subarray(He*le/Q.data.BYTES_PER_ELEMENT,(He+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,Q.width,Q.height,1,me,D,Ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,D,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,me,D,Q.data);else if(E.isData3DTexture)ce?(fe&&t.texStorage3D(i.TEXTURE_3D,je,j,Q.width,Q.height,Q.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,D,Q.data)):t.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,me,D,Q.data);else if(E.isFramebufferTexture){if(fe)if(ce)t.texStorage2D(i.TEXTURE_2D,je,j,Q.width,Q.height);else{let le=Q.width,He=Q.height;for(let Ke=0;Ke<je;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,j,le,He,0,me,D,null),le>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),g.add(E),le.onpaint=He=>{let Ke=He.changedElements;for(let Te of g)Ke.includes(Te.image)&&(Te.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Ke=i.RGBA,Te=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Te,vt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ce&&fe){let le=Xe(ge[0]);t.texStorage2D(i.TEXTURE_2D,je,j,le.width,le.height)}for(let le=0,He=ge.length;le<He;le++)Y=ge[le],ce?Ge&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me,D,Y):t.texImage2D(i.TEXTURE_2D,le,j,me,D,Y);E.generateMipmaps=!1}else if(ce){if(fe){let le=Xe(Q);t.texStorage2D(i.TEXTURE_2D,je,j,le.width,le.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,D,Q)}else t.texImage2D(i.TEXTURE_2D,0,j,me,D,Q);M(E)&&E.mipmapsAutoUpdate===!0&&v(oe),Se.__version=de.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ie(A,E,k){if(E.image.length!==6)return;let oe=ot(A,E),ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let de=n.get(ee);if(ee.version!==de.__version||oe===!0){t.activeTexture(i.TEXTURE0+k);let Se=dt.getPrimaries(dt.workingColorSpace),J=E.colorSpace===wi?null:dt.getPrimaries(E.colorSpace),Q=E.colorSpace===wi||Se===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let me=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,j=[];for(let Te=0;Te<6;Te++)!me&&!D?j[Te]=y(E.image[Te],!0,s.maxCubemapSize):j[Te]=D?E.image[Te].image:E.image[Te],j[Te]=ke(E,j[Te]);let Y=j[0],ge=r.convert(E.format,E.colorSpace),ce=r.convert(E.type),fe=b(E.internalFormat,ge,ce,E.normalized,E.colorSpace),Ge=E.isVideoTexture!==!0,je=de.__version===void 0||oe===!0,le=ee.dataReady,He=S(E,Y);Qe(i.TEXTURE_CUBE_MAP,E);let Ke;if(E.isDepthTexture){if(fe=_(E.format===Ti,E.type),je)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,Y.width,Y.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,Y.width,Y.height,0,ge,ce,null)}else if(me){Ge&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,fe,Y.width,Y.height);for(let Te=0;Te<6;Te++){Ke=j[Te].mipmaps;for(let vt=0;vt<Ke.length;vt++){let jt=Ke[vt];E.format!==Qn?ge!==null?Ge?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,0,0,jt.width,jt.height,ge,jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,fe,jt.width,jt.height,0,jt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,0,0,jt.width,jt.height,ge,ce,jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt,fe,jt.width,jt.height,0,ge,ce,jt.data)}}}else{if(Ke=E.mipmaps,Ge&&je){Ke.length>0&&He++;let Te=Xe(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,fe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(D){Ge?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,j[Te].width,j[Te].height,ge,ce,j[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,j[Te].width,j[Te].height,0,ge,ce,j[Te].data);for(let vt=0;vt<Ke.length;vt++){let Pi=Ke[vt].image[Te].image;Ge?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,0,0,Pi.width,Pi.height,ge,ce,Pi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,fe,Pi.width,Pi.height,0,ge,ce,Pi.data)}}else{Ge?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,ce,j[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,ge,ce,j[Te]);for(let vt=0;vt<Ke.length;vt++){let jt=Ke[vt];Ge?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,0,0,ge,ce,jt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,vt+1,fe,ge,ce,jt.image[Te])}}}M(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),de.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ee(A,E,k,oe,ee,de){let Se=r.convert(k.format,k.colorSpace),J=r.convert(k.type),Q=b(k.internalFormat,Se,J,k.normalized,k.colorSpace),me=n.get(E),D=n.get(k);if(D.__renderTarget=E,!me.__hasExternalTextures){let j=Math.max(1,E.width>>de),Y=Math.max(1,E.height>>de);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,de,Q,j,Y,E.depth,0,Se,J,null):t.texImage2D(ee,de,Q,j,Y,0,Se,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ee,D.__webglTexture,0,wt(E)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ee,D.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(A,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let oe=E.depthTexture,ee=oe&&oe.isDepthTexture?oe.type:null,de=_(E.stencilBuffer,ee),Se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(E),de,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(E),de,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let oe=E.textures;for(let ee=0;ee<oe.length;ee++){let de=oe[ee],Se=r.convert(de.format,de.colorSpace),J=r.convert(de.type),Q=b(de.internalFormat,Se,J,de.normalized,de.colorSpace);Me(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(E),Q,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(E),Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(A,E,k){let oe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(E.depthTexture);ee.__renderTarget=E;let de=oe?E.depthTexture.image[0]:E.depthTexture.image;(!ee.__webglTexture||de.width!==E.width||de.height!==E.height)&&(de.width=E.width,de.height=E.height,E.depthTexture.needsUpdate=!0),oe?ye(E.depthTexture,0):_e(E.depthTexture,0);let Se=ee.__webglTexture,J=wt(E),Q=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,me=E.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Mi)Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,Se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,Se,0);else if(E.depthTexture.format===Ti)Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,Se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(A){let E=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let oe=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){let ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",ee)};oe.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=oe}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let oe=0;oe<6;oe++)ze(E.__webglFramebuffer[oe],A,oe);else A.texture.mipmaps.length>0?ze(E.__webglFramebuffer[0],A,0):ze(E.__webglFramebuffer,A,0);else if(k){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=i.createRenderbuffer(),$e(E.__webglDepthbuffer[oe],A,!1);else{let ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),$e(E.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,E,k){let oe=n.get(A);E!==void 0&&Ee(oe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&at(A)}function mt(A){let E=A.texture,k=n.get(A),oe=n.get(E);A.addEventListener("dispose",z),I(A);let ee=A.textures,de=A.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,o.memory.textures++),de){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let Q=0;Q<E.mipmaps.length;Q++)k.__webglFramebuffer[J][Q]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(E.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Se)for(let J=0,Q=ee.length;J<Q;J++){let me=n.get(ee[J]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Me(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){let Q=ee[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let me=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),j=b(Q.internalFormat,me,D,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),Y=wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ee(k.__webglFramebuffer[J][Q],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Ee(k.__webglFramebuffer[J],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let J=0,Q=ee.length;J<Q;J++){let me=ee[J],D=n.get(me),j=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,D.__webglTexture),Qe(j,me),Ee(k.__webglFramebuffer,A,me,i.COLOR_ATTACHMENT0+J,j,0),M(me)&&v(j)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,oe.__webglTexture),Qe(J,E),E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ee(k.__webglFramebuffer[Q],A,E,i.COLOR_ATTACHMENT0,J,Q);else Ee(k.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,J,0);M(E)?v(J):E.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&at(A)}function F(A){let E=A.textures;for(let k=0,oe=E.length;k<oe;k++){let ee=E[k];if(M(ee)&&ee.mipmapsAutoUpdate===!0){let de=w(A),Se=n.get(ee).__webglTexture;t.bindTexture(de,Se),v(de),t.unbindTexture()}}}let Wt=[];function st(A){if(A.samples>0){if(Me(A)===!1){let E=A.textures,k=A.width,oe=A.height,ee=i.COLOR_BUFFER_BIT,de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),J=E.length>1;if(J)for(let me=0;me<E.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<E.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let D=n.get(E[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,k,oe,0,0,k,oe,ee,i.NEAREST),l===!0&&(Wt.length=0,Wt.push(i.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Wt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<E.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let D=n.get(E[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function wt(A){return Math.min(s.maxSamples,A.samples)}function Me(A){let E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function ke(A,E){let k=A.colorSpace,oe=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Pr&&k!==wi&&(dt.getTransfer(k)===_t?(oe!==Qn||ee!==Dn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),E}function Xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ae,this.resetTextureUnits=Z,this.getTextureUnits=K,this.setTextureUnits=xe,this.setTexture2D=_e,this.setTexture2DArray=Ce,this.setTexture3D=Fe,this.setTextureCube=ye,this.rebindTextures=ct,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me,this.dispose=C}function Yy(i,e){function t(n,s=wi){let r,o=dt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===Qn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===jr||n===eo||n===to||n===no)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===io||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===$a)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===io)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===_l||n===so||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pn({vertexShader:Zy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,g=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new bh,u={},y=t.getContextAttributes(),M=null,v=null,w=[],b=[],_=new re,S=null,I=null,R=new _n;R.viewport=new Bt;let N=new _n;N.viewport=new Bt;let z=[R,N],W=new Da,P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let _e=w[q];return _e===void 0&&(_e=new Qs,w[q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(q){let _e=w[q];return _e===void 0&&(_e=new Qs,w[q]=_e),_e.getGripSpace()},this.getHand=function(q){let _e=w[q];return _e===void 0&&(_e=new Qs,w[q]=_e),_e.getHandSpace()};function B(q){let _e=b.indexOf(q.inputSource);if(_e===-1)return;let Ce=w[_e];Ce!==void 0&&(Ce.update(q.inputSource,q.frame,c||o),Ce.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){let _e=b[q];_e!==null&&(b[q]=null,w[q].disconnect(_e))}P=null,C=null,p.reset();for(let q in u)delete u[q];if(e.setRenderTarget(M),d=null,f=null,g=null,s=null,v=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),I!==null){let q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return g===null&&x&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Fe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=y.stencil?Ti:Mi,Fe=y.stencil?Es:Kn);let Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vn(f.textureWidth,f.textureHeight,{format:Qn,type:Dn,depthTexture:new $n(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new vn(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(q){for(let _e=0;_e<q.removed.length;_e++){let Ce=q.removed[_e],Fe=b.indexOf(Ce);Fe>=0&&(b[Fe]=null,w[Fe].disconnect(Ce))}for(let _e=0;_e<q.added.length;_e++){let Ce=q.added[_e],Fe=b.indexOf(Ce);if(Fe===-1){for(let Be=0;Be<w.length;Be++)if(Be>=b.length){b.push(Ce),Fe=Be;break}else if(b[Be]===null){b[Be]=Ce,Fe=Be;break}if(Fe===-1)break}let ye=w[Fe];ye&&ye.connect(Ce)}}function H(q,_e){_e===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(_e.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let _e=q.near,Ce=q.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Ce=p.depthFar)),W.near=N.near=R.near=_e,W.far=N.far=R.far=Ce,(P!==W.near||C!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,C=W.far),W.layers.mask=q.layers.mask|6,R.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Fe=q.parent,ye=W.cameras;H(W,Fe);for(let Be=0;Be<ye.length;Be++)H(ye[Be],Fe);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),Z(q,W,Fe)};function Z(q,_e,Ce){Ce===null?q.matrix.copy(_e.matrixWorld):(q.matrix.copy(Ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(_e.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(_e.projectionMatrix),q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(q){return u[q]};let K=null;function xe(q,_e){if(h=_e.getViewerPose(c||o),m=_e,h!==null){let Ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Fe=!1;Ce.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let Ue=0;Ue<Ce.length;Ue++){let Qe=Ce[Ue],ot=null;if(d!==null)ot=d.getViewport(Qe);else{let pe=g.getViewSubImage(f,Qe);ot=pe.viewport,Ue===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let te=z[Ue];te===void 0&&(te=new _n,te.layers.enable(Ue),te.viewport=new Bt,z[Ue]=te),te.matrix.fromArray(Qe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ot.x,ot.y,ot.width,ot.height),Ue===0&&(W.matrix.copy(te.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(te)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){g=n.getBinding();let Ue=g.getDepthInformation(Ce[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),g=n.getBinding();for(let Ue=0;Ue<Ce.length;Ue++){let Qe=Ce[Ue].camera;if(Qe){let ot=u[Qe];ot||(ot=new Hr,u[Qe]=ot);let te=g.getCameraImage(Qe);ot.sourceTexture=te}}}}for(let Ce=0;Ce<w.length;Ce++){let Fe=b[Ce],ye=w[Ce];Fe!==null&&ye!==void 0&&ye.update(Fe,_e,c||o)}K&&K(q,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let Ae=new qd;Ae.setAnimationLoop(xe),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}},Jy=new Mt,nf=new Ye;nf.set(-1,0,0,0,1,0,0,0,1);function Ky(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,oh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,y,M,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),g(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,v)):u.isMeshMatcapMaterial?(r(p,u),m(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,y,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Sn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Sn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let y=e.get(u),M=y.envMap,v=y.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(nf),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function g(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,y){p.ior.value=u.ior,u.diffuseRoughness>0&&(p.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Sn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qy(i,e,t,n){let s={},r={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,s[y.id])}function a(y,M){let v=s[y.id];v===void 0&&(m(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",p));let w=M.program;n.updateUBOMapping(y,w);let b=e.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let M=i.createBuffer(),v=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,_=v.length;b<_;b++){let S=v[b];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],b,I,w);else h(S,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,M,v,w){if(f(y,M,v,w)===!0){let b=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let I=0;I<_.length;I++){let R=_[I],N=x(R,!0);g(R,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else g(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function g(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function f(y,M,v,w){let b=y.value,_=M+"_"+v;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);let S=w[_],I=!1;for(let R=0;R<b.length;R++)d(b[R],S,R)===!0&&(I=!0);return I}return d(b,w,_)}function d(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let w=M[v];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function m(y){let M=y.uniforms,v=0,w=16;for(let _=0,S=M.length;_<S;_++){let I=Array.isArray(M[_])?M[_]:[M[_]];for(let R=0,N=I.length;R<N;R++){let z=I[R],W=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(M[_])||Array.isArray(z.value),C=v;for(let O=0,$=W.length;O<$;O++){let H=W[O],Z=x(H,P),K=v%w,xe=K%Z.boundary,Ae=K+xe;v+=xe,Ae!==0&&w-Ae<Z.storage&&(v+=w-Ae),O===0&&(C=v),v+=Z.storage}let B=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new B((v-C)/Float32Array.BYTES_PER_ELEMENT),z.__offset=C}}let b=v%w;return b>0&&(v+=w-b),y.__size=v,y.__cache={},this}function x(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let M=y.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:u}}var jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function ev(){return ci===null&&(ci=new da(jy,16,16,Yi,Un),ci.name="DFG_LUT",ci.minFilter=yn,ci.magFilter=yn,ci.wrapS=oi,ci.wrapT=oi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var bl=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,p=new Set([Va,ka,Ha]),u=new Set([Dn,Kn,or,Es,za,Ga]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,b=null,_=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,z=null,W=null,P=null,C=null;this._outputColorSpace=xn;let B=0,O=0,$=null,H=-1,Z=null,K=new Bt,xe=new Bt,Ae=null,q=new lt(0),_e=0,Ce=t.width,Fe=t.height,ye=1,Be=null,yt=null,Ue=new Bt(0,0,Ce,Fe),Qe=new Bt(0,0,Ce,Fe),ot=!1,te=new ms,pe=new fa,ue=!1,Ie=!1,Ee=new Mt,$e=new L,ze=new Bt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function mt(){return $===null?ye:1}let F=n;function Wt(T,U){return t.getContext(T,U)}let st,wt,Me,zt,ke,Xe,A,E,k,oe,ee,de,Se,J,Q,me,D,j,Y,ge,ce,fe,Ge;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){let U="webgl2";if(F=Wt(U,T),F===null)throw Wt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(T){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),We("WebGLRenderer: "+T.message),T}function je(){st=new u_(F),st.init(),ce=new Yy(F,st),wt=new e_(F,st,e,ce),Me=new Xy(F,st),wt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),W=F.createFramebuffer(),P=F.createFramebuffer(),C=F.createFramebuffer(),zt=new p_(F),ke=new Py,Xe=new qy(F,st,Me,ke,wt,ce,zt),A=new h_(R),E=new g0(F),fe=new Qx(F,E),k=new d_(F,E,zt,fe),oe=new g_(F,k,E,fe,zt),j=new m_(F,wt,Xe),Q=new t_(ke),ee=new Iy(R,A,st,wt,fe,Q),de=new Ky(R,ke),Se=new Dy,J=new zy(st),D=new Kx(R,A,Me,oe,m,l),me=new Wy(R,oe,wt),Ge=new Qy(F,zt,wt,Me),Y=new jx(F,st,zt),ge=new f_(F,st,zt),zt.programs=ee.programs,R.capabilities=wt,R.extensions=st,R.properties=ke,R.renderLists=Se,R.shadowMap=me,R.state=Me,R.info=zt}x!==Dn&&(I=new __(x,t.width,t.height,a,s,r));let le=new Eh(R,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(T){T!==void 0&&(ye=T,this.setSize(Ce,Fe,!1))},this.getSize=function(T){return T.set(Ce,Fe)},this.setSize=function(T,U,X=!0){if(le.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=T,Fe=U,t.width=Math.floor(T*ye),t.height=Math.floor(U*ye),X===!0&&(t.style.width=T+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Ce*ye,Fe*ye).floor()},this.setDrawingBufferSize=function(T,U,X){Ce=T,Fe=U,ye=X,t.width=Math.floor(T*X),t.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Dn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(Ue)},this.setViewport=function(T,U,X,G){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,U,X,G),Me.viewport(K.copy(Ue).multiplyScalar(mt()).round())},this.getScissor=function(T){return T.copy(Qe)},this.setScissor=function(T,U,X,G){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,U,X,G),Me.scissor(xe.copy(Qe).multiplyScalar(mt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){Me.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Be=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,X=!0){let G=0;if(T){let V=!1;if($!==null){let be=$.texture.format;V=p.has(be)}if(V){let be=$.texture.type,Le=u.has(be),ve=D.getClearColor(),Re=D.getClearAlpha(),Oe=ve.r,Ze=ve.g,ht=ve.b;Le?(y[0]=Oe,y[1]=Ze,y[2]=ht,y[3]=Re,F.clearBufferuiv(F.COLOR,0,y)):(M[0]=Oe,M[1]=Ze,M[2]=ht,M[3]=Re,F.clearBufferiv(F.COLOR,0,M))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),D.dispose(),Se.dispose(),J.dispose(),Xe.dispose(),ke.dispose(),A.dispose(),oe.dispose(),k.dispose(),fe.dispose(),Ge.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Jh),le.removeEventListener("sessionend",Kh),rs.stop()};function He(T){T.preventDefault(),ih("WebGLRenderer: Context Lost."),N=!0}function Ke(){ih("WebGLRenderer: Context Restored."),N=!1;let T=zt.autoReset,U=me.enabled,X=me.autoUpdate,G=me.needsUpdate,V=me.type;je(),zt.autoReset=T,me.enabled=U,me.autoUpdate=X,me.needsUpdate=G,me.type=V}function Te(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function vt(T){let U=T.target;U.removeEventListener("dispose",vt),jt(U)}function jt(T){Pi(T),ke.remove(T)}function Pi(T){let U=ke.get(T).programs;U!==void 0&&(U.forEach(function(X){ee.releaseProgram(X)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,G,V,be){U===null&&(U=at);let Le=V.isMesh&&V.matrixWorld.determinantAffine()<0,ve=Jp(T,U,X,G,V);Me.setMaterial(G,Le);let Re=X.index,Oe=1;if(G.wireframe===!0){if(Re=k.getWireframeAttribute(X),Re===void 0)return;Oe=2}let Ze=X.drawRange,ht=X.attributes.position,De=Ze.start*Oe,ut=(Ze.start+Ze.count)*Oe;be!==null&&(De=Math.max(De,be.start*Oe),ut=Math.min(ut,(be.start+be.count)*Oe)),Re!==null?(De=Math.max(De,0),ut=Math.min(ut,Re.count)):ht!=null&&(De=Math.max(De,0),ut=Math.min(ut,ht.count));let Xt=ut-De;if(Xt<0||Xt===1/0)return;fe.setup(V,G,ve,X,Re);let Ct,At=Y;if(Re!==null&&(Ct=E.get(Re),At=ge,At.setIndex(Ct)),V.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*mt()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(V.isLine){let cn=G.linewidth;cn===void 0&&(cn=1),Me.setLineWidth(cn*mt()),V.isLineSegments?At.setMode(F.LINES):V.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else V.isPoints?At.setMode(F.POINTS):V.isSprite&&At.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(st.get("WEBGL_multi_draw"))At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let cn=V._multiDrawStarts,Ne=V._multiDrawCounts,gn=V._multiDrawCount,gt=Re?E.get(Re).bytesPerElement:1,os=ke.get(G).currentProgram.getUniforms();for(let hn=0;hn<gn;hn++)os.setValue(F,"_gl_DrawID",hn),At.render(cn[hn]/gt,Ne[hn])}else if(V.isInstancedMesh)At.renderInstances(De,Xt,V.count);else if(X.isInstancedBufferGeometry){let cn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ne=Math.min(X.instanceCount,cn);At.renderInstances(De,Xt,Ne)}else At.render(De,Xt)};function $h(T,U,X,G){z!==null&&T.isNodeMaterial&&z.setObject(G,T),ue===!0&&Q.setState(T,X,!1),T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,Mr(T,U,G),T.side=qi,T.needsUpdate=!0,Mr(T,U,G),T.side=Ht):Mr(T,U,G)}this.compile=function(T,U,X=null){X===null&&(X=T),z!==null&&z.renderStart(T,U,X),b=J.get(X),b.init(U),S.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),Ie=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Ie),ue===!0&&Q.setGlobalState(this.clippingPlanes,U),z!==null&&me.render(b.state.shadowsArray,X,U);let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let be=V.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let ve=be[Le];$h(ve,X,U,V),G.add(ve)}else $h(be,X,U,V),G.add(be)}),b=S.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(T,U,X=null){let G=this.compile(T,U,X);return new Promise(V=>{function be(){if(G.forEach(function(Le){let Re=ke.get(Le).currentProgram;(Re===void 0||Re.isReady())&&G.delete(Le)}),G.size===0){V(T);return}setTimeout(be,10)}st.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Jl=null;function Zp(T){Jl&&Jl(T)}function Jh(){rs.stop()}function Kh(){rs.start()}let rs=new qd;rs.setAnimationLoop(Zp),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(T){Jl=T,le.setAnimationLoop(T),T===null?rs.stop():rs.start()},le.addEventListener("sessionstart",Jh),le.addEventListener("sessionend",Kh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(T,U);let X=le.enabled===!0&&le.isPresenting===!0,G=I!==null&&($===null||X)&&I.begin(R,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,$),b=J.get(T,S.length),b.init(U),b.state.textureUnits=Xe.getTextureUnits(),S.push(b),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?pe.setFromArrayCamera(U):te.setFromProjectionMatrix(Ee,Gn,U.reversedDepth),Ie=this.localClippingEnabled,ue=Q.init(this.clippingPlanes,Ie),w=Se.get(T,_.length),w.init(),_.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&Kl(Le,U,-1/0,R.sortObjects)}Kl(T,U,0,R.sortObjects),w.finish(),z!==null&&z.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Be,yt),ct=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ct&&D.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),ue===!0&&Q.beginShadows();let V=b.state.shadowsArray;if(me.render(V,T,U),ue===!0&&Q.endShadows(),(G&&I.hasRenderPass())===!1){let Le=w.opaque,ve=w.transmissive;if(b.setupLights(),U.isArrayCamera){let Re=U.cameras;if(ve.length>0)for(let Oe=0,Ze=Re.length;Oe<Ze;Oe++){let ht=Re[Oe];jh(Le,ve,T,ht)}ct&&D.render(T);for(let Oe=0,Ze=Re.length;Oe<Ze;Oe++){let ht=Re[Oe];Qh(w,T,ht,ht.viewport)}}else ve.length>0&&jh(Le,ve,T,U),ct&&D.render(T),Qh(w,T,U)}$!==null&&O===0&&(Xe.updateMultisampleRenderTarget($),Xe.updateRenderTargetMipmap($)),G&&I.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),fe.resetDefaultState(),H=-1,Z=null,S.pop(),S.length>0?(b=S[S.length-1],Xe.setTextureUnits(b.state.textureUnits),ue===!0&&Q.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,z!==null&&z.renderEnd()};function Kl(T,U,X,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Le=U.isArrayCamera?pe:te;if(!T.frustumCulled||T.intersectsFrustum(Le)){G&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);let ve=oe.update(T),Re=T.material;Re.visible&&w.push(T,ve,Re,X,ze.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Le=U.isArrayCamera?pe:te;if(!T.frustumCulled||T.intersectsFrustum(Le)){let ve=oe.update(T),Re=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ze.copy(ve.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Re)){let Oe=ve.groups;for(let Ze=0,ht=Oe.length;Ze<ht;Ze++){let De=Oe[Ze],ut=Re[De.materialIndex];ut&&ut.visible&&w.push(T,ve,ut,X,ze.z,De,U)}}else Re.visible&&w.push(T,ve,Re,X,ze.z,null,U)}}}let be=T.children;for(let Le=0,ve=be.length;Le<ve;Le++)Kl(be[Le],U,X,G)}function Qh(T,U,X,G){let{opaque:V,transmissive:be,transparent:Le}=T;b.setupLightsView(X),ue===!0&&Q.setGlobalState(R.clippingPlanes,X),G&&Me.viewport(K.copy(G)),V.length>0&&Eo(V,U,X),be.length>0&&Eo(be,U,X),Le.length>0&&Eo(Le,U,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function jh(T,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let De=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new vn(1,1,{generateMipmaps:!0,type:De?Un:Dn,minFilter:Ei,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let be=b.state.transmissionRenderTarget[G.id],Le=G.viewport||K;be.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let ve=R.getRenderTarget(),Re=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(q),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),ct&&D.render(X);let Ze=R.toneMapping;R.toneMapping=li;let ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ue===!0&&Q.setGlobalState(R.clippingPlanes,G),Eo(T,X,G),Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be),st.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ut=0,Xt=U.length;ut<Xt;ut++){let Ct=U[ut],{object:At,geometry:cn,material:Ne,group:gn}=Ct;if(Ne.side===Ht&&At.layers.test(G.layers)){let gt=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,eu(At,X,G,cn,Ne,gn),Ne.side=gt,Ne.needsUpdate=!0,De=!0}}De===!0&&(Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be))}R.setRenderTarget(ve,Re,Oe),R.setClearColor(q,_e),ht!==void 0&&(G.viewport=ht),R.toneMapping=Ze}function Eo(T,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,be=T.length;V<be;V++){let Le=T[V],{object:ve,geometry:Re,group:Oe}=Le,Ze=Le.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),ve.layers.test(X.layers)&&eu(ve,U,X,Re,Ze,Oe)}}function eu(T,U,X,G,V,be){z!==null&&V.isNodeMaterial&&z.setObject(T,V),T.onBeforeRender(R,U,X,G,V,be),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,U,X,G,T,be),V.transparent===!0&&V.side===Ht&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,R.renderBufferDirect(X,U,G,V,T,be),V.side=qi,V.needsUpdate=!0,R.renderBufferDirect(X,U,G,V,T,be),V.side=Ht):R.renderBufferDirect(X,U,G,V,T,be),T.onAfterRender(R,U,X,G,V,be)}function tu(T){let U=0;for(let X of T)X.texture!==null&&U++;return U}function Mr(T,U,X){U.isScene!==!0&&(U=at);let G=ke.get(T),V=b.state.lights,be=b.state.shadowsArray,Le=V.state.version,ve=ee.getParameters(T,V.state,be,U,X,b.state.lightProbeGridArray),Re=ee.getProgramCacheKey(ve),Oe=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=A.get(T.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",vt),Oe=new Map,G.programs=Oe,G.programVariants=new Map);let ht=Oe.get(Re);if(ht!==void 0){if(G.currentProgram===ht&&G.lightsStateVersion===Le)return iu(T,ve),ht}else ve.uniforms=ee.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,X,ve),T.onBeforeCompile(ve,R),ht=ee.acquireProgram(ve,Re),Oe.set(Re,ht),G.uniforms=ve.uniforms;let De=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Q.uniform),iu(T,ve),G.needsLights=Qp(T),G.lightsStateVersion=Le,G.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.sunLights.value=V.state.sun,De.sunLightShadows.value=V.state.sunShadow,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.sunShadowMatrix.value=V.state.sunShadowMatrix,De.sunShadowCascade.value=V.state.sunShadowCascade,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=tu(b.state.lightProbeGridArray),G.currentProgram=ht,G.uniformsList=null,ht}function $p(T,U,X,G,V){let be=ke.get(T),Le=be.currentProgram.id+","+G+","+V,ve=be.programVariants.get(Le);return ve===void 0?(ve=Mr(T,U,X),be.programVariants.set(Le,ve)):(be.currentProgram=ve,be.uniformsList=null,be.outputColorSpace=G,be.toneMapping=V),ve}function nu(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=lr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function iu(T,U){let X=ke.get(T);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Jp(T,U,X,G,V){U.isScene!==!0&&(U=at),Xe.resetTextureUnits();let be=U.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ve=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:dt.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=A.get(G.envMap||Le,Re),Ze=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ht=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,Xt=!!X.morphAttributes.color,Ct=li;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ct=R.toneMapping);let At=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,cn=At!==void 0?At.length:0,Ne=ke.get(G),gn=b.state.lights;if(ue===!0&&(Ie===!0||T!==Z)){let Ft=T===Z&&G.id===H;Q.setState(G,T,Ft)}let gt=!1,os=!1;G.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==gn.state.version||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Oe||G.fog===!0&&Ne.fog!==be||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Q.numPlanes||Ne.numIntersection!==Q.numIntersection)||Ne.vertexAlphas!==Ze||Ne.vertexTangents!==ht||Ne.morphTargets!==De||Ne.morphNormals!==ut||Ne.morphColors!==Xt||Ne.morphTargetsCount!==cn||Ne.numLightProbeGrids!==tu(b.state.lightProbeGridArray)?gt=!0:(Ne.outputColorSpace!==ve||Ne.toneMapping!==Ct)&&(os=!0):(gt=!0,Ne.__version=G.version);let hn=Ne.currentProgram;(gt===!0||os===!0)&&(hn=os===!0?$p(G,U,V,ve,Ct):Mr(G,U,V),z&&G.isNodeMaterial&&z.onUpdateProgram(G,hn,Ne));let To=!1,Li=!1,as=!1,ft=hn.getUniforms(),ln=Ne.uniforms;if(Me.useProgram(hn.program)&&(To=!0,Li=!0,as=!0),G.id!==H&&(H=G.id,Li=!0),To||Z!==T){Me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",T.projectionMatrix),ft.setValue(F,"viewMatrix",T.matrixWorldInverse);let en=ft.map.cameraPosition;en!==void 0&&en.setValue(F,$e.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,Li=!0,as=!0)}if(Ne.needsLights&&(gn.state.sunShadowMap.length>0&&ft.setValue(F,"sunShadowMap",gn.state.sunShadowMap,Xe),gn.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",gn.state.directionalShadowMap,Xe),gn.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",gn.state.spotShadowMap,Xe),gn.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",gn.state.pointShadowMap,Xe)),V.isSkinnedMesh){ft.setOptional(F,V,"bindMatrix"),ft.setOptional(F,V,"bindMatrixInverse");let Ft=V.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ft.setValue(F,"boneTexture",Ft.boneTexture,Xe))}V.isBatchedMesh&&(ft.setOptional(F,V,"batchingTexture"),ft.setValue(F,"batchingTexture",V._matricesTexture,Xe),ft.setOptional(F,V,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",V._indirectTexture,Xe),ft.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",V._colorsTexture,Xe));let Wn=X.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&j.update(V,X,hn),(Li||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,ft.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(ln.envMapIntensity.value=U.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=ev()),Li){if(ft.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ne.needsLights&&Kp(ln,as),be&&G.fog===!0&&de.refreshFogUniforms(ln,be),de.refreshMaterialUniforms(ln,G,ye,Fe,b.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Ft=v,en=0;for(let pi of b.state.lightProbeGridArray)pi.texture!==null&&(Ft.textures[en]=pi.texture,Ft.min[en]=pi.boundingBox.min,Ft.max[en]=pi.boundingBox.max,Ft.resolution[en]=pi.resolution,en++);for(let pi in Ft)Ft[pi].length=en;ln.probesSH.value=Ft.textures,ln.probesMin.value=Ft.min,ln.probesMax.value=Ft.max,ln.probesResolution.value=Ft.resolution}lr.upload(F,nu(Ne),ln,Xe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(F,nu(Ne),ln,Xe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(F,"center",V.center),ft.setValue(F,"modelViewMatrix",V.modelViewMatrix),ft.setValue(F,"normalMatrix",V.normalMatrix),ft.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let Ft=G.uniformsGroups;for(let en=0,pi=Ft.length;en<pi;en++){let ru=Ft[en];Ge.update(ru,hn),Ge.bind(ru,hn)}}return hn}function Kp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Qp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,U,X){let G=ke.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ke.get(T.texture).__webglTexture=U,ke.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let X=ke.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){$=T,B=U,O=X;let G=null,V=!1,be=!1;if(T){let ve=ke.get(T);if(ve.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),K.copy(T.viewport),xe.copy(T.scissor),Ae=T.scissorTest,Me.viewport(K),Me.scissor(xe),Me.setScissorTest(Ae),H=-1;return}else if(ve.__webglFramebuffer===void 0)Xe.setupRenderTarget(T);else if(ve.__hasExternalTextures)Xe.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(T)}}let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Oe=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?G=Oe[U][X]:G=Oe[U],V=!0):T.samples>0&&Xe.useMultisampledRTT(T)===!1?G=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[X]:G=Oe,K.copy(T.viewport),xe.copy(T.scissor),Ae=T.scissorTest}else K.copy(Ue).multiplyScalar(ye).floor(),xe.copy(Qe).multiplyScalar(ye).floor(),Ae=ot;if(X!==0&&(G=W),Me.bindFramebuffer(F.FRAMEBUFFER,G)&&Me.drawBuffers(T,G),Me.viewport(K),Me.scissor(xe),Me.setScissorTest(Ae),V){let ve=ke.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,X)}else if(be){let ve=U;for(let Re=0;Re<T.textures.length;Re++){let Oe=ke.get(T.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,X,ve)}}else if(T!==null&&X!==0){let ve=ke.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,X)}H=-1};function su(T){let U=ke.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=wt.textureFormatReadable(T.format),U.__typeReadable=wt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,X,G,V,be,Le,ve=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re){Me.bindFramebuffer(F.FRAMEBUFFER,Re);try{let Oe=T.textures[ve],Ze=Oe.format,ht=Oe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let De=su(Oe);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&X>=0&&X<=T.height-V&&F.readPixels(U,X,G,V,ce.convert(Ze),ce.convert(ht),be)}finally{let Oe=$!==null?ke.get($).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,U,X,G,V,be,Le,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re)if(U>=0&&U<=T.width-G&&X>=0&&X<=T.height-V){Me.bindFramebuffer(F.FRAMEBUFFER,Re);let Oe=T.textures[ve],Ze=Oe.format,ht=Oe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let De=su(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(U,X,G,V,ce.convert(Ze),ce.convert(ht),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Xt=$!==null?ke.get($).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Xt);let Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pd(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ut),F.deleteSync(Ct),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,X=0){let G=Math.pow(2,-X),V=Math.floor(T.image.width*G),be=Math.floor(T.image.height*G),Le=U!==null?U.x:0,ve=U!==null?U.y:0;Xe.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Le,ve,V,be),Me.unbindTexture()},this.copyTextureToTexture=function(T,U,X=null,G=null,V=0,be=0){let Le,ve,Re,Oe,Ze,ht,De,ut,Xt,Ct=T.isCompressedTexture?T.mipmaps[be]:T.image;if(X!==null)Le=X.max.x-X.min.x,ve=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,Ze=X.min.y,ht=X.isBox3?X.min.z:0;else{let ft=Math.pow(2,-V);Le=Math.floor(Ct.width*ft),ve=Math.floor(Ct.height*ft),T.isDataArrayTexture?Re=Ct.depth:T.isData3DTexture?Re=Math.floor(Ct.depth*ft):Re=1,Oe=0,Ze=0,ht=0}G!==null?(De=G.x,ut=G.y,Xt=G.z):(De=0,ut=0,Xt=0);let At=ce.convert(U.format),cn=ce.convert(U.type),Ne;U.isData3DTexture?(Xe.setTexture3D(U,0),Ne=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Xe.setTexture2DArray(U,0),Ne=F.TEXTURE_2D_ARRAY):(Xe.setTexture2D(U,0),Ne=F.TEXTURE_2D),Me.activeTexture(F.TEXTURE0),Me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),Me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Me.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let gn=Me.getParameter(F.UNPACK_ROW_LENGTH),gt=Me.getParameter(F.UNPACK_IMAGE_HEIGHT),os=Me.getParameter(F.UNPACK_SKIP_PIXELS),hn=Me.getParameter(F.UNPACK_SKIP_ROWS),To=Me.getParameter(F.UNPACK_SKIP_IMAGES);Me.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),Me.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,ht);let Li=T.isDataArrayTexture||T.isData3DTexture,as=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ft=ke.get(T),ln=ke.get(U),Wn=ke.get(ft.__renderTarget),Ft=ke.get(ln.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Wn.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let en=0;en<Re;en++)Li&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,V,ht+en),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,be,Xt+en)),F.blitFramebuffer(Oe,Ze,Oe+Le,Ze+ve,De,ut,De+Le,ut+ve,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||ke.has(T)){let ft=ke.get(T),ln=ke.get(U);Me.bindFramebuffer(F.READ_FRAMEBUFFER,P),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,C);for(let Wn=0;Wn<Re;Wn++)Li?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ft.__webglTexture,V,ht+Wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,V),as?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,be,Xt+Wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,be),V!==0?F.blitFramebuffer(Oe,Ze,Oe+Le,Ze+ve,De,ut,De+Le,ut+ve,F.COLOR_BUFFER_BIT,F.NEAREST):as?F.copyTexSubImage3D(Ne,be,De,ut,Xt+Wn,Oe,Ze,Le,ve):F.copyTexSubImage2D(Ne,be,De,ut,Oe,Ze,Le,ve);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else as?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ne,be,De,ut,Xt,Le,ve,Re,At,cn,Ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,be,De,ut,Xt,Le,ve,Re,At,Ct.data):F.texSubImage3D(Ne,be,De,ut,Xt,Le,ve,Re,At,cn,Ct):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,De,ut,Le,ve,At,cn,Ct.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,De,ut,Ct.width,Ct.height,At,Ct.data):F.texSubImage2D(F.TEXTURE_2D,be,De,ut,Le,ve,At,cn,Ct);Me.pixelStorei(F.UNPACK_ROW_LENGTH,gn),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,os),Me.pixelStorei(F.UNPACK_SKIP_ROWS,hn),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,To),be===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&Xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){B=0,O=0,$=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var wl=class extends sn{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},hr=new L,sf=new Mt,rf=new Mt,of=new L,af=new L,Al=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(m,x){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),sf.copy(x.matrixWorldInverse),rf.multiplyMatrices(x.projectionMatrix,sf),h(m,m,x),this.sortObjects&&d(m)},this.setSize=function(m,x){n=m,s=x,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=x+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let x=0,p=m.children.length;x<p;x++)c(m.children[x])}function h(m,x,p){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){hr.setFromMatrixPosition(m.matrixWorld),hr.applyMatrix4(rf);let u=hr.z>=-1&&hr.z<=1&&m.layers.test(p.layers)===!0,y=m.element;if(y.style.display=u===!0?"":"none",u===!0){m.onBeforeRender(t,x,p);let v=100*m.center.x,w=100*m.center.y;y.style.transformOrigin=`${v}% ${w}%`;let b=-m.rotation2D,_=hr.x*r+r,S=-hr.y*o+o;y.style.transform=`translate(${-v}%, ${-w}%) translate(${_}px, ${S}px) rotate(${b}rad)`,y.parentNode!==l&&l.appendChild(y),m.onAfterRender(t,x,p)}let M={distanceToCameraSquared:g(p,m)};a.objects.set(m,M)}for(let u=0,y=m.children.length;u<y;u++)h(m.children[u],x,p)}function g(m,x){return of.setFromMatrixPosition(m.matrixWorld),af.setFromMatrixPosition(x.matrixWorld),of.distanceToSquared(af)}function f(m){let x=[];return m.traverseVisible(function(p){p.isCSS2DObject&&x.push(p)}),x}function d(m){let x=f(m).sort(function(u,y){if(u.renderOrder!==y.renderOrder)return y.renderOrder-u.renderOrder;let M=a.objects.get(u).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return M-v}),p=x.length;for(let u=0,y=x.length;u<y;u++)x[u].element.style.zIndex=p-u}}};var lf=new L,tv=new wn,cf=new L,Rl=class extends sn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ui=new Mt,nv=new Mt,Cl=class{constructor(e={}){let t=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(p,u){let y=u.projectionMatrix.elements[5]*o;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let M,v;u.isOrthographicCamera&&(M=-(u.right+u.left)/2,v=(u.top+u.bottom)/2);let w=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,b=u.isOrthographicCamera?`scale( ${w} )scale(`+y+")translate("+g(M)+"px,"+g(v)+"px)"+f(u.matrixWorldInverse):`scale( ${w} )translateZ(`+y+"px)"+f(u.matrixWorldInverse),S=(u.isPerspectiveCamera?"perspective("+y+"px) ":"")+b+"translate("+r+"px,"+o+"px)";a.camera.style!==S&&(h.style.transform=S,a.camera.style=S),x(p,p,u,b)},this.setSize=function(p,u){n=p,s=u,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=u+"px",c.style.width=p+"px",c.style.height=u+"px",h.style.width=p+"px",h.style.height=u+"px"};function g(p){return Math.abs(p)<1e-10?0:p}function f(p){let u=p.elements;return"matrix3d("+g(u[0])+","+g(-u[1])+","+g(u[2])+","+g(u[3])+","+g(u[4])+","+g(-u[5])+","+g(u[6])+","+g(u[7])+","+g(u[8])+","+g(-u[9])+","+g(u[10])+","+g(u[11])+","+g(u[12])+","+g(-u[13])+","+g(u[14])+","+g(u[15])+")"}function d(p){let u=p.elements;return"translate(-50%,-50%)"+("matrix3d("+g(u[0])+","+g(u[1])+","+g(u[2])+","+g(u[3])+","+g(-u[4])+","+g(-u[5])+","+g(-u[6])+","+g(-u[7])+","+g(u[8])+","+g(u[9])+","+g(u[10])+","+g(u[11])+","+g(u[12])+","+g(u[13])+","+g(u[14])+","+g(u[15])+")")}function m(p){p.isCSS3DObject&&(p.element.style.display="none");for(let u=0,y=p.children.length;u<y;u++)m(p.children[u])}function x(p,u,y,M){if(p.visible===!1){m(p);return}if(p.isCSS3DObject){let v=p.layers.test(y.layers)===!0,w=p.element;if(w.style.display=v===!0?"":"none",v===!0){p.onBeforeRender(t,u,y);let b;p.isCSS3DSprite?(ui.copy(y.matrixWorldInverse),ui.transpose(),p.rotation2D!==0&&ui.multiply(nv.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(lf,tv,cf),ui.setPosition(lf),ui.scale(cf),ui.elements[3]=0,ui.elements[7]=0,ui.elements[11]=0,ui.elements[15]=1,b=d(ui)):b=d(p.matrixWorld);let _=a.objects.get(p);if(_===void 0||_.style!==b){w.style.transform=b;let S={style:b};a.objects.set(p,S)}w.parentNode!==h&&h.appendChild(w),p.onAfterRender(t,u,y)}}for(let v=0,w=p.children.length;v<w;v++)x(p.children[v],u,y,M)}}};var ws={mention:"\xA9 ZENIKA 2026 \xB7 Tous droits r\xE9serv\xE9s",gates:{G1:"Un objectif mesurable, les donn\xE9es pour le suivre, un seul responsable",G2:"Tests d'acceptation \xE9crits, interfaces convenues, cibles de qualit\xE9 fix\xE9es",G3:"Tous les contr\xF4les passent, failles ferm\xE9es, une personne nomm\xE9e signe",G4:"Chaque changement trac\xE9, indicateurs m\xE9tier en place, une astreinte nomm\xE9e",G5:"R\xE9sultats face \xE0 la promesse, co\xFBt complet connu, d\xE9cision de garder ou de retirer",G6:"D\xE9pendances cartographi\xE9es, utilisateurs pr\xE9venus, savoir pr\xE9serv\xE9"},shapes:{idea:"id\xE9e",shape:"cadrage",spec:"spec",code:"code",build:"build",review:"revue",deploy:"d\xE9ploiement",keep:"maintien",observe:"observation",analyse:"analyse",opportunity:"opportunit\xE9",retirement:"retrait"},roles:{spec:"Transforme l'id\xE9e en spec\u202F; pas de code tant qu'une question reste ouverte",context:"Garde ce que savent les agents sourc\xE9, dat\xE9 et r\xE9utilisable",orchestrator:"R\xE9partit le travail entre les agents et d\xE9cide o\xF9 les personnes relisent",guarantor:"Signe chaque gate en son nom, sur les preuves\u202F; jamais d\xE9l\xE9gu\xE9",evaluation:"V\xE9rifie que ce que produisent les agents reste bon dans la dur\xE9e",agentops:"Garde les agents et leurs outils enregistr\xE9s, \xE0 jour et en service",finops:"Relie la d\xE9pense en tokens \xE0 ce qu'elle produit, chaque budget avec son responsable",audit:"Sait dire qui a fait quoi, personne ou agent, sous quelle identit\xE9"},concerns:{feed:{name:"Alimenter les pipelines",question:"Comment donner aux agents le bon contexte\u202F?"},govern:{name:"Gouverner les agents",question:"Comment gouverner les agents et ce qu'ils savent\u202F?"},harness:{name:"Construire le harnais",question:"Quel harnais garde les agents sur la bonne voie\u202F?"},secure:{name:"S\xE9curiser le flux",question:"Comment s\xE9curiser le flux de bout en bout\u202F?"},identity:{name:"Identit\xE9 des agents",question:"Qui est chaque agent, et qui en r\xE9pond\u202F?"},tokens:{name:"\xC9conomie des tokens",question:"Combien co\xFBteront les tokens, et qui paie\u202F?"},measure:{name:"Mesurer les progr\xE8s",question:"Comment savoir si l'on progresse\u202F?"}},sections:{problem:"Le probl\xE8me",wheel:"La roue",nexus:"Le Nexus",layers:"Les couches",people:"Les personnes",measure:"Mesure",napkin:"La serviette"}};var iv=[{id:"discover",name:"Discover",color:"#bf1d67"},{id:"design",name:"Design",color:"#d6204f"},{id:"develop",name:"Develop",color:"#ee2238"},{id:"deploy",name:"Deploy",color:"#9b1d2b"},{id:"deepen",name:"Deepen",color:"#1e1e1e"},{id:"drop",name:"Drop",color:"#565656",side:!0}],ei=iv.filter(i=>!i.side),ti=[{id:"G1",name:"Ready to Spec",checks:"A measurable goal, the data to track it, one accountable owner"},{id:"G2",name:"Ready to Build",checks:"Acceptance tests written, interfaces agreed, quality targets set"},{id:"G3",name:"Ready to Release",checks:"All checks pass, security issues closed, a named person signs off"},{id:"G4",name:"Released and Observable",checks:"Every change traced, business metrics live, someone on call"},{id:"G5",name:"Opportunity or Retire",checks:"Results against the promise, full cost known, a keep-or-retire call"},{id:"G6",name:"Retirement Scoped",checks:"Dependencies mapped, users informed, knowledge preserved"}],ur=[{name:"idea",angle:0},{name:"shape",angle:54.7},{name:"spec",angle:89.3},{name:"code",angle:121},{name:"build",angle:144},{name:"review",angle:167},{name:"deploy",angle:198.7},{name:"keep",angle:233.3},{name:"observe",angle:265},{name:"analyse",angle:288},{name:"opportunity",angle:311},{name:"retirement",drop:!0}],jn=[{id:"discover",name:"Discover",archetype:"Probes",purpose:"Finds what is worth building, and what already exists",layers:[{id:"L0",name:"Idea & Discovery Tooling",part:"Market probe",on:[1,1,0,0,1,0]},{id:"L12",name:"App Portfolio & Capability Discovery",part:"Portfolio probe",on:[1,1,0,0,0,1]}]},{id:"build",name:"Build",archetype:"Gear train",purpose:"Turns the spec into working code",layers:[{id:"L2",name:"SDD Tooling",part:"Cam",on:[0,1,1,0,0,0]},{id:"L1",name:"AI Coding Assistants",part:"Drive gear",on:[0,1,1,0,0,0]}]},{id:"contextualise",name:"Contextualise",archetype:"Manifold",purpose:"Gives every agent the same context and the tools it may call",layers:[{id:"L5",name:"Context Factory",part:"Intake manifold",on:[1,1,1,1,1,1]},{id:"L4",name:"Agent & MCP Registry",part:"Valve block",on:[1,1,1,1,1,0]},{id:"L6",name:"Multi-agent Orchestration",part:"Distributor",on:[0,0,1,1,1,0]}]},{id:"measure",name:"Measure",archetype:"Gauges",purpose:"Proves the output is good, and keeps proving it",layers:[{id:"L8",name:"CI/CD & Quality",part:"Test bench",on:[0,0,1,1,1,0]},{id:"L9",name:"Observability & DORA",part:"Dials",on:[0,0,0,1,1,1]}]},{id:"platform",name:"Platform",archetype:"Chassis",purpose:"Routes, meters and secures every model call, on ground you control",layers:[{id:"L3",name:"AI Gateway",part:"Throttle",on:[1,1,1,1,1,1]},{id:"L7",name:"Prompt Versioning & FinOps",part:"Fuel meter",on:[1,1,1,1,1,1]},{id:"L10",name:"Infrastructure & Sovereignty",part:"Engine block",on:[1,1,1,1,1,1]}]}],Il={id:"L11",name:"Identity & Non-Human Access",part:"Ignition key",checks:["L3","L4","L10"]},Th=[{id:"knowledge",name:"Knowledge",from:270},{id:"intent",name:"Intent",from:0,teamOnly:!0},{id:"contracts",name:"Contracts",from:90},{id:"operations",name:"Operations",from:180}],wh=[{id:"org",name:"Org",color:"#8e1542"},{id:"bu",name:"BU",color:"#bf1d67"},{id:"team",name:"Team",color:"#ee2238"}],Ah=[{id:"spec",name:"Specification Engineer",parts:["register:intent","phase:design","layer:L2"],purpose:"Turns the Idea into a spec; no code while a question stays open"},{id:"context",name:"Context Engineer",parts:["layer:L5","register:knowledge","register:contracts"],purpose:"Keeps what agents know sourced, dated and reusable"},{id:"orchestrator",name:"Orchestrator",parts:["layer:L6","layer:L1"],purpose:"Splits the work between agents and decides where people review"},{id:"guarantor",name:"Decision Guarantor",parts:["gates"],purpose:"Signs each gate in their own name, on the evidence; never delegated"},{id:"evaluation",name:"Evaluation Engineer",parts:["layer:L8","layer:L9"],purpose:"Checks that what agents produce stays good over time"},{id:"agentops",name:"AgentOps",parts:["layer:L4","layer:L6"],purpose:"Keeps agents and their tools registered, current and in service"},{id:"finops",name:"AI FinOps",parts:["layer:L7","layer:L3"],purpose:"Ties token spend to what it delivers, each budget with an owner"},{id:"audit",name:"Trace & Audit",parts:["spine"],purpose:"Can tell who did what, person or agent, under which identity"}],uo=[{id:"feed",name:"Feeding the pipelines",question:"How do we feed agents the right context?"},{id:"govern",name:"Governing agents",question:"How do we govern agents and what they know?"},{id:"harness",name:"Building the harness",question:"What harness keeps agents on track?"},{id:"secure",name:"Securing the workflow",question:"How do we secure the workflow end to end?"},{id:"identity",name:"Agent identities",question:"Who is each agent, and who answers for it?"},{id:"tokens",name:"Tokenomics",question:"What will the tokens cost, and who pays?"},{id:"measure",name:"Measuring progress",question:"How do we know we are getting better?"}],fo=[{id:"problem",name:"The problem"},{id:"wheel",name:"The wheel"},{id:"nexus",name:"The Nexus"},{id:"layers",name:"The layers"},{id:"people",name:"People"},{id:"measure",name:"Measure"},{id:"napkin",name:"The napkin"}],hf=typeof document<"u"&&document.documentElement.lang==="fr"?"fr":"en";hf==="fr"&&(ti.forEach(i=>{i.checks=ws.gates[i.id]}),ur.forEach(i=>{i.label=ws.shapes[i.name]}),Ah.forEach(i=>{i.purpose=ws.roles[i.id]}),uo.forEach(i=>Object.assign(i,ws.concerns[i.id])),fo.forEach(i=>{i.name=ws.sections[i.id]}));var ho=sv();ho&&rv(ho);var uf=ho?.mention??(hf==="fr"?ws.mention:"\xA9 ZENIKA 2026 \xB7 All Rights Reserved");function sv(){let i=typeof document<"u"&&document.getElementById("edition");return i?JSON.parse(i.textContent):null}function rv(i){let e=(t,n)=>n&&t.splice(0,t.length,...n);e(fo,i.sections),e(uo,i.concerns),e(ur,i.shapes),ti.forEach(t=>Object.assign(t,i.gates?.[t.id])),i.bandOrder&&e(jn,i.bandOrder.map(t=>jn.find(n=>n.id===t))),jn.forEach(t=>{Object.assign(t,i.bands?.[t.id]),t.layers.forEach(n=>Object.assign(n,i.layers?.[n.id]))})}var Nt={rIn:1.45,rOut:4,depth:.32,sweep:40,gap:.14},Zi=72,xt={from:296,to:348,rIn:4.25,rOut:5.35},Ai={radii:[1.24,.86,.5],core:.12,sweep:34,gap:.07},kt={rIn:1.36,rOut:3.6,h:.18,gap:.06,splitGap:.55,tooth:.07},$i={top:-Nt.depth-.12,bandGap:.12,explodedGap:2.2,wheelGap:2.2},Gt={angle:180,r:3.05,radius:.06},Pe=Math.PI/180;function Kt(i){return i*Zi}function dr(i){return i*Zi+Zi/2}function Ll(i=0){return ie((xt.rIn+xt.rOut)/2,(xt.from+xt.to)/2,i)}function Pl(i,e){return new re(i*Math.sin(e*Pe),-i*Math.cos(e*Pe))}function Rh(i,e,t,n,s){return i+s*Math.pow(1-(e-t)/(n-t),1.7)}function fr(i,e,t,n,s,r){let o=(m,x)=>Rh(m,x,i,e,s),a=m=>r/2/m/Pe,l=[];for(let m=0;m<=32;m++){let x=i+(e-i)*m/32;l.push(Pl(x,o(t,x)+a(x)))}let h=t+a(e),g=n-a(e);for(let m=1;m<48;m++)l.push(Pl(e,h+(g-h)*m/48));for(let m=32;m>=0;m--){let x=i+(e-i)*m/32;l.push(Pl(x,o(n,x)-a(x)))}let f=o(n,i)-a(i),d=o(t,i)+a(i);for(let m=1;m<16;m++)l.push(Pl(i,f-(f-d)*m/16));return new Mn(l)}function Vt(i,e,t=.025){let n=new ys(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:1,curveSegments:48});return n.rotateX(Math.PI/2),n.translate(0,-t,0),n}function ie(i,e,t=0){return new L(i*Math.sin(e*Pe),t,-i*Math.cos(e*Pe))}var di={part:0,red:1,ink:2,soft:3,accent:4},ff={value:-10},pf={value:new re(-1e3,1e3)};function mf(i){ff.value=i}function gf(i,e){pf.value.set(i,e)}var xf={value:new L(0,1,0)};function _f(i){return new Pn({glslVersion:ro,uniforms:{lightDir:xf,role:{value:i},dim:{value:0},charge:{value:0},lag:{value:0},pulse:ff,pulseBand:pf},vertexShader:`
      varying vec3 vN; varying vec3 vW;
      void main() {
        vN = normalize(normalMatrix * normal);
        vW = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 lightDir; uniform float role; uniform float dim; uniform float charge; uniform float pulse;
      uniform float lag; uniform vec2 pulseBand;
      layout(location = 0) out highp vec4 gLit;
      layout(location = 1) out highp vec4 gNormal;
      varying vec3 vN; varying vec3 vW;
      void main() {
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        // lag delays the wave on a part, so context reads as flowing from one part to the next
        float d = length(vW.xz) + lag - pulse;
        float wave = charge * step(-0.28, d) * step(d, 0.06) * step(pulseBand.x, vW.y) * step(vW.y, pulseBand.y);
        gLit = vec4(max(dot(n, lightDir), 0.0), (wave > 0.5 ? 1.0 : role) / 4.0, dim * (1.0 - wave), 1.0);
        gNormal = vec4(n * 0.5 + 0.5, 1.0);
      }`})}var ov=`
  uniform sampler2D tLit; uniform sampler2D tNorm; uniform sampler2D tDepth;
  uniform vec2 res; uniform float px; uniform float near; uniform float far;
  uniform vec3 lo; uniform vec3 hi; uniform vec3 line; uniform vec3 redLo; uniform vec3 redHi; uniform vec3 redLine;
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
    bool red = (role > 0.5 && role < 1.5) || soft || accent;
    vec3 ink = accent ? accentLine : soft ? softLine : red ? redLine : line;
    ink = mix(ink, mix(line, hi, dimInk), eDim);
    vec4 c = vec4(0.0);
    if (L.a > 0.5) {
      float t = smoothstep(0.05, 0.95, L.r);
      vec3 fill = accent ? mix(accentLo, accentHi, t) : soft ? mix(softLo, softHi, t) : red ? mix(redLo, redHi, t) : mix(lo, hi, t);
      bool inkRole = role > 1.5 && role < 2.5;
      if (inkRole) fill = mix(line, lo, 0.25);
      fill = mix(fill, mix(lo, hi, t), L.b * (red ? 1.0 : 0.0));
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
  }`,av={lo:"#ecebef",hi:"#ffffff",line:"#6f6a72",redLo:"#e81c35",redHi:"#ff7c8a",redLine:"#9e1028",softLo:"#fbd9de",softHi:"#fff6f7",softLine:"#f08494",accentLo:"#fbd9de",accentHi:"#fff6f7",accentLine:"#f08494"},lv={lo:"#1e1e1e",hi:"#2a2a2a",line:"#f4f4f4",redLo:"#c81a30",redHi:"#ff6b7a",redLine:"#ff8a96",softLo:"#3a2028",softHi:"#4a2a34",softLine:"#ff8fa0",accentLo:"#3a2028",accentHi:"#4a2a34",accentLine:"#ff8fa0"};function df(i,e){let t=getComputedStyle(document.documentElement),n=s=>t.getPropertyValue(`--${e}-${s.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}`).trim();return Object.fromEntries(Object.keys(i).map(s=>[s,n(s)||i[s]]))}function yf(i,{stipple:e}={}){let t=df(av,"art"),n=df(lv,"art-dark"),s=getComputedStyle(document.documentElement),r=parseFloat(s.getPropertyValue("--art-stipple")),o=e??(Number.isFinite(r)?r:0),a=parseFloat(s.getPropertyValue("--art-dark-stipple")),l=Number.isFinite(a)?a:o,c=(w,b)=>{let _=parseFloat(s.getPropertyValue(w));return Number.isFinite(_)?_:b},h=new vn(1,1,{type:Un,count:2});h.depthTexture=new $n(1,1,Nn);let g=new L(-.5,.8,.45).normalize(),f=w=>({value:new lt(w).convertLinearToSRGB()}),d={tLit:{value:h.textures[0]},tNorm:{value:h.textures[1]},tDepth:{value:h.depthTexture},res:{value:new re(1,1)},px:{value:1},near:{value:.1},far:{value:100},lo:f(t.lo),hi:f(t.hi),line:f(t.line),redLo:f(t.redLo),redHi:f(t.redHi),redLine:f(t.redLine),softLo:f(t.softLo),softHi:f(t.softHi),softLine:f(t.softLine),accentLo:f(t.accentLo),accentHi:f(t.accentHi),accentLine:f(t.accentLine),stipple:{value:o},dimInk:{value:c("--art-dim-ink",.6)},dimAlpha:{value:c("--art-dim-alpha",.5)}},m={},x={};Object.keys(t).forEach(w=>{m[w]=d[w].value.clone(),x[w]=f(n[w]).value});function p(w){Object.keys(m).forEach(b=>d[b].value.copy(m[b]).lerp(x[b],w)),d.stipple.value=o+(l-o)*w}let u=new fs;u.add(new fn(new vs(2,2),new Pn({uniforms:d,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ov,blending:bi,depthTest:!1,depthWrite:!1})));let y=new Ms;function M(w,b){let _=i.getPixelRatio(),S=Math.round(w*_),I=Math.round(b*_);h.setSize(S,I),d.res.value.set(S,I),d.px.value=_}function v(w,b){b.updateMatrixWorld(),xf.value.copy(g).transformDirection(b.matrixWorldInverse),d.near.value=b.near,d.far.value=b.far,i.setClearColor(0,0),i.setRenderTarget(h),i.clear(),i.render(w,b),i.setRenderTarget(null),i.clear(),i.render(u,y)}return{render:v,setSize:M,setTheme:p}}function cv(i,e){return e.includes("idea")||e.includes("level:team")||e.includes("energy")?di.red:e.includes("accent")?di.accent:e.includes("nexus")||e.includes("soft")?di.soft:e.some(t=>t.startsWith("phase:"))?di.part:new lt(i).getHSL({},xn).l<.2?di.ink:di.part}function ne(i,e,t){let n=cv(e,t),s=new fn(i,_f(n));return s.userData.tags=t,s.userData.role=n,s}function vf(i,e,t=null){return i.map(n=>{let s=n.userData.tags||[],r=o=>o&&o.some(a=>s.includes(a));return!e||r(e)?0:r(t)?.45:1})}function Mf(i,e,t){let n=!1;return i.forEach((s,r)=>{let o=s.material.uniforms,a=e[r]-o.dim.value;Math.abs(a)<.002?o.dim.value=e[r]:(o.dim.value+=a*t,n=!0)}),n}function Sf(i,e){i.traverse(t=>{let n=t.isMesh&&t.material.uniforms;if(!n||!n.role)return;let s=e&&e.some(r=>(t.userData.tags||[]).includes(r));t.userData.energized=!!s,n.role.value=s?di.red:t.userData.role}),i.traverse(t=>{let n=t.userData.leader;if(!n||!t.parent)return;let s=!1;t.parent.traverse(r=>s=s||!!r.userData.energized),n.classList.toggle("is-energized",s)})}function bf(i,e,t={}){i.traverse(n=>{let s=n.isMesh&&n.material.uniforms;if(!s||!s.charge)return;let r=n.userData.tags||[];s.charge.value=e&&e.some(o=>r.includes(o))?1:0,s.lag.value=Object.keys(t).reduce((o,a)=>r.includes(a)?t[a]:o,0)})}function As(i,e,t=""){let n=document.createElement("div");n.className=`label ${t}`.trim();let s=document.createElement("span");s.className="label-text",s.textContent=i,n.appendChild(s);let r=new wl(n);return r.userData.group=e,r.center.set(.5,.5),r}function bn(i,e,t="",n="",s=""){let r=document.createElement("div");if(r.className=`label lead ${t}`.trim(),r.innerHTML='<svg class="lead-line"><polyline points="0,0 0,0"/><circle r="2.5"/></svg><span class="lead-box"><span class="lead-text"></span></span>',r.querySelector(".lead-text").textContent=i,n){let a=document.createElement("span");a.className="lead-note",a.textContent=n,r.querySelector(".lead-box").appendChild(a)}let o=new sn;return o.userData.group=e,o.userData.noteGroup=s,o.userData.leader=r,o}function wf(i,e){i.traverse(t=>{let n=t.isCSS2DObject||t.isCSS3DObject?t.element:t.userData.leader;if(!n||!t.userData.group)return;let s=[].concat(t.userData.group);n.classList.toggle("is-on",s.some(r=>e.includes(r))),t.userData.noteGroup&&n.classList.toggle("show-note",e.includes(t.userData.noteGroup))})}function Af(i){let e=i.filter(s=>s.style.display!=="none");if(!e.length)return;let t=e.map(s=>s.getBoundingClientRect().right),n=Math.min(...t);e.forEach((s,r)=>s.firstChild.style.transform=`translateX(${(n-t[r]).toFixed(1)}px)`)}var Dl=new L,Nl=new L;function Rf(i,e){i.forEach(t=>{let n=t.userData.arc;if(!t.element.classList.contains("is-on"))return;let s=t.parent;Dl.copy(ie(n.r,n.a-2,n.y)),Nl.copy(ie(n.r,n.a+2,n.y)),s.localToWorld(Dl).project(e),s.localToWorld(Nl).project(e);let r=Math.atan2(-(Nl.y-Dl.y),(Nl.x-Dl.x)*e.aspect)*180/Math.PI;r>90&&(r-=180),r<=-90&&(r+=180),t.element.firstChild.style.transform=`rotate(${r.toFixed(1)}deg)`})}var Ef=new L,Tf=new L,hv=new wn;function Cf(i,e){i.forEach(t=>{if(!t.element.classList.contains("is-on"))return;t.getWorldPosition(Tf),Ef.set(0,0,1).applyQuaternion(t.getWorldQuaternion(hv));let n=Ef.dot(Tf.sub(e.position).negate())>0;t.element.style.visibility=n?"":"hidden"})}var pr=2.85,Ch=3.3,Fl=(i,e)=>Rh(i,e,Nt.rIn,Nt.rOut,Nt.sweep),Ph=40,Pf=.2,Ih=.035;function If(i,e,t,n,s){let r=[...i.toUpperCase()].map(a=>{let l=document.createElement("div");l.className="label label-engraved",l.textContent=a;let c=new Rl(l);return c.userData.group="phases-engraved",c.scale.setScalar(Pf/Ph),s.add(c),c}),o={text:i.toUpperCase(),r:e,aMid:t,y:n,letters:r};return Lf(o),o}var Ul=null;function Lf({text:i,r:e,aMid:t,y:n,letters:s}){Ul=Ul||document.createElement("canvas").getContext("2d"),Ul.font=`800 ${Ph}px Nunito, sans-serif`;let r=[...i].map(l=>Ul.measureText(l).width*Pf/Ph+Ih),a=(r.reduce((l,c)=>l+c,0)-Ih)/2;s.forEach((l,c)=>{let h=t+(a-r[c]/2+Ih/2)/e/Pe;l.position.copy(ie(e,h,n)),l.rotation.y=Math.PI-h*Pe,a-=r[c]})}function Df(){let i=new se;i.name="wheel";let e=[];i.userData.relayout=()=>e.forEach(Lf),ei.forEach((f,d)=>{let m=Kt(d)-Zi/2,x=ne(Vt(fr(Nt.rIn,Nt.rOut,m,m+Zi,Nt.sweep,Nt.gap),Nt.depth),"#ffffff",["wheel",`phase:${f.id}`]);i.add(x);let p=As(f.name,"phases","label-phase"),u=Fl(Kt(d),Ch);p.position.copy(ie(Ch,u,.02)),p.userData.arc={r:Ch,a:u,y:.02},i.add(p),e.push(If(f.name,Nt.rOut+.004,Kt(d),-Nt.depth/2,i))}),ei.forEach((f,d)=>{let m=ti[d],x=Fl(Kt(d)+Zi/2,pr),p=ne(new nt(.09,.09,.14,24),"#1e1e1e",["wheel","gates",`gate:${m.id}`]);p.position.copy(ie(pr,x,.07)),i.add(p);let u=bn(`${m.id} \xB7 ${m.name}`,"gate-names","label-gate-name",m.checks,"gate-notes");u.userData.key=m.id,u.position.copy(ie(pr,x,.14)),i.add(u)});let t=new se;t.name="drop",t.add(ne(Vt(fr(xt.rIn,xt.rOut,xt.from,xt.to,16,0),Nt.depth*.8),"#ffffff",["wheel","phase:drop"]));let n=Kt(4)+Zi/2,s=ne(Vt(fr(Nt.rOut-.35,xt.rIn+.35,n-4,n+4,0,0),.08,.015),"#1e1e1e",["wheel","gates","gate:G5","latch"]);s.position.y=.1,t.add(s),[Nt.rOut-.2,xt.rIn+.2].forEach(f=>{let d=ne(new nt(.06,.06,.2,20),"#ffffff",["wheel","gates","gate:G5"]);d.position.copy(ie(f,n,.08)),t.add(d)});let r=ne(new nt(.09,.09,.14,24),"#1e1e1e",["wheel","gates","gate:G6"]);r.position.copy(ie((xt.rIn+xt.rOut)/2,xt.to-4,.07)),t.add(r);let o=(xt.rIn+xt.rOut)/2,a=335,l=As("Drop","phases","label-phase");l.position.copy(ie(o,a,.02)),l.userData.arc={r:o,a,y:.02},t.add(l),e.push(If("Drop",xt.rOut+.004,(xt.from+xt.to)/2,-Nt.depth*.4,t));let c=bn(`${ti[5].id} \xB7 ${ti[5].name}`,"gate-names","label-gate-name",ti[5].checks,"gate-notes");c.userData.key=ti[5].id,c.position.copy(r.position).setY(.14),t.add(c),i.add(t);let h=ne(new Lt(pr,.022,8,200),"#ee2238",["wheel","idea"]);h.rotation.x=Math.PI/2,i.add(h),ur.forEach(f=>{let d=bn(f.label||f.name,"shapes","label-shape"),m=ne(new nt(.035,.035,.08,12),"#1e1e1e",["wheel","shapes"]);if(f.drop){m.position.copy(ie(xt.rOut-.2,xt.to-20,.04)),d.position.copy(m.position).setY(.08),t.add(m,d);return}m.position.copy(ie(Nt.rOut-.22,Fl(f.angle,Nt.rOut-.22),.04)),d.position.copy(m.position).setY(.08),i.add(m,d)});let g=ne(new on(.16,32,16),"#ee2238",["wheel","idea"]);return g.name="idea",g.position.copy(Lh(0)),i.add(g),i}function Lh(i){return ie(pr,Fl(i,pr),0)}function Uf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let g=i[h],f=0,d=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in g.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(g.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in g.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(g.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(g.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=g.index.count;else if(g.attributes.position!==void 0)m=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,g=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)g.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(g)}for(let h in r){let g=Nf(r[h]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,g)}for(let h in o){let g=o[h][0].length;if(g!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<g;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Nf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Nf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Hn(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let g=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+g,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Dh=Kt(2),Rt="#ffffff",po="#1e1e1e";function Ji(i){let e=[];return i.forEach((t,n)=>{t&&e.push(n<ei.length?Kt(n):(xt.from+xt.to)/2)}),e}function Ri(i,e,t,n){let s=new Mn;s.absarc(0,0,e,0,Math.PI*2,!1);let r=new Jn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),Vt(s,t,n)}function Ff(i,e,t,n=720){let s=new Mn;for(let o=0;o<=n;o++){let a=360*o/n,l=t(a),c=new re(l*Math.sin(a*Pe),-l*Math.cos(a*Pe));o===0?s.moveTo(c.x,c.y):s.lineTo(c.x,c.y)}let r=new Jn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),s}function En(i,e,t,n){return i.position.copy(ie(e,t,n)),i.rotation.y=-t*Pe,i}function Of(i,e,t,n,s,r,o){let a=ne(new rn(s,r,e-i),Rt,o);return En(a,(i+e)/2,t,n)}var uv={L0(i,e,t){return t.add(ne(Ri(kt.rIn,1.95,.14),Rt,e)),Ji(i.on).forEach(n=>{t.add(Of(1.9,4.45,n,-.07,.09,.07,e));let s=ne(new nt(.24,.1,.16,32),Rt,e);t.add(En(s,4.55,n,-.02));let r=ne(new on(.05,16,8),po,e);t.add(En(r,4.55,n,.1))}),.14},L12(i,e,t){return t.add(ne(Ri(kt.rIn,1.95,.14),Rt,e)),Ji(i.on).forEach(n=>{t.add(Of(1.9,4,n+9,-.07,.07,.06,e));let s=ne(new rn(.3,.18,.3),Rt,e);t.add(En(s,4.1,n+9,-.03))}),.14},L2(i,e,t){let n=Ji(i.on),s=r=>{let o=2.7;return n.forEach(a=>{let l=Math.abs((r-a+540)%360-180);o+=.75*Math.pow(Math.max(0,Math.cos(l/40*(Math.PI/2))),2)}),o};return t.add(ne(Vt(Ff(kt.rIn,.18,s),.18),Rt,e)),.18},L1(i,e,t){let s=o=>3.42+(Math.sin(o*120/360*Math.PI*2)>0?kt.tooth:0),r=Ff(kt.rIn,.2,s,960);for(let o=0;o<6;o++){let a=(o*60+30)*Pe,l=new Jn;l.absarc(2.45*Math.sin(a),-2.45*Math.cos(a),.42,0,Math.PI*2,!0),r.holes.push(l)}return t.add(ne(Vt(r,.2),Rt,e)),Ji(i.on).forEach(o=>{let a=ne(new nt(.2,.2,.12,32),Rt,e);t.add(En(a,3,o,.06))}),.2},L5(i,e,t){return t.add(ne(Ri(kt.rIn,1.8,.26),Rt,e)),Ji(i.on).forEach(n=>{let s=ne(new nt(.1,.1,1.6,24),Rt,e);s.rotation.x=Math.PI/2;let r=En(new se,2.6,n,-.13);r.add(s),t.add(r);let o=ne(new nt(.2,.2,.08,32),Rt,e);o.rotation.x=Math.PI/2;let a=En(new se,3.42,n,-.13);a.add(o),t.add(a)}),t.userData.anchor=ie(2.9,Dh,-.03),.26},L4(i,e,t){return t.add(ne(Ri(kt.rIn,3.1,.1),Rt,e)),Ji(i.on).forEach(n=>{let s=ne(new rn(.42,.22,.34),Rt,e);t.add(En(s,2.6,n,.11));let r=ne(new nt(.05,.05,.16,16),po,e);t.add(En(r,2.6,n,.3))}),t.userData.anchor=ie(2.75,Dh,.22),.1},L6(i,e,t){t.add(ne(Ri(kt.rIn,2.5,.2),Rt,e));let n=Ji(i.on);ei.forEach((r,o)=>{let a=Kt(o),l=n.includes(a),c=ne(new nt(.08,.08,l?.34:.14,20),Rt,e);t.add(En(c,2.25,a,l?.17:.07))});let s=ne(new rn(.12,.06,.8),po,e);return t.add(En(s,1.85,n[0]??0,.03)),t.userData.anchor=ie(2.5,Dh-24,-.1),.2},L8(i,e,t){let n=new Mn;n.absarc(0,0,3.45,0,Math.PI*2,!1);let s=new Jn;s.absarc(0,0,kt.rIn,0,Math.PI*2,!0),n.holes.push(s);for(let r=0;r<60;r++){let o=r*6*Pe,a=1.6*Pe,l=new Jn,c=(g,f)=>new re(g*Math.sin(f),-g*Math.cos(f)),h=[c(2.3,o-a),c(3.15,o-a),c(3.15,o+a),c(2.3,o+a)];l.moveTo(h[0].x,h[0].y),[h[3],h[2],h[1],h[0]].forEach(g=>l.lineTo(g.x,g.y)),n.holes.push(l)}return t.add(ne(Vt(n,.12),Rt,e)),.12},L9(i,e,t){return t.add(ne(Ri(kt.rIn,3.2,.12),Rt,e)),Ji(i.on).forEach(n=>{let s=new se,r=ne(new nt(.42,.42,.14,40),Rt,e);r.rotation.x=Math.PI/2;let o=ne(new rn(.04,.3,.03),po,e);o.position.set(.08,.06,.09),o.rotation.z=-.7,s.add(r,o),s.position.y=.42;let a=En(new se,3.3,n,0);a.add(s),t.add(a)}),.12},L3(i,e,t){t.add(ne(Ri(kt.rIn,3,.16),Rt,e));let n=new se,s=ne(new nt(.4,.4,.9,40,1,!0),Rt,e);s.material.side=Ht,s.rotation.z=Math.PI/2;let r=ne(new nt(.36,.36,.03,40),po,e);r.rotation.z=Math.PI/2+.6;let o=ne(new rn(.06,.5,.06),Rt,e);o.position.set(.5,.25,0),n.add(s,r,o),n.position.y=.32;let a=En(new se,3.2,90,0);return a.add(n),t.add(a),.16},L7(i,e,t){t.add(ne(Ri(kt.rIn,3.25,.14),Rt,e));let n=new se,s=ne(new nt(.55,.55,.16,48),Rt,e);s.rotation.x=Math.PI/2;let r=ne(new rn(.05,.42,.03),"#ee2238",e);r.position.set(.1,.1,.1),r.rotation.z=.9,n.add(s,r),n.position.y=.2;let o=En(new se,3.45,200,-.2);return o.add(n),t.add(o),.14},L10(i,e,t){t.add(ne(Ri(kt.rIn,3.5,.5,.04),Rt,e));for(let n=0;n<64;n++){let s=ne(new rn(.035,.42,.32),Rt,e);t.add(En(s,3.62,n*(360/64),-.25))}return .5}};function Bf(i,e){let t=new se,n=uv[i.id](i,e,t);return t.userData.h=n,dv(t)}function dv(i){i.updateMatrixWorld(!0);let e=new Map;i.traverse(n=>{if(!n.isMesh)return;let s=`${n.material.uniforms.role.value}|${n.material.side}`;e.has(s)||e.set(s,{material:n.material,tags:n.userData.tags,geos:[]});let r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();Object.keys(r.attributes).forEach(o=>o!=="position"&&o!=="normal"&&r.deleteAttribute(o)),r.clearGroups(),e.get(s).geos.push(r.applyMatrix4(n.matrixWorld)),n.geometry.dispose(),e.get(s).material!==n.material&&n.material.dispose()});let t=new se;return t.userData=i.userData,e.forEach(({material:n,tags:s,geos:r})=>{let o=new fn(Uf(r),n);o.userData.tags=s,o.userData.role=n.uniforms.role.value,t.add(o),r.forEach(a=>a.dispose())}),t}function zf(i){let e=new se,t=ne(new Lt(.2,.06,16,40),Rt,i);t.position.y=-.35;let n=ne(new rn(.1,.4,.05),Rt,i);return n.position.y=-.05,e.add(t,n),e}function Gf(){let i=new se;i.name="bands";let e=[];jn.forEach((l,c)=>{let h=new se;h.name=`band:${l.id}`;let g=[];l.layers.forEach((d,m)=>{let x=Bf(d,["bands",`band:${l.id}`,`layer:${d.id}`]);x.name=`layer:${d.id}`;let p=bn(`${d.id} ${d.name}`,`layers:${l.id}`,"label-layer");p.position.copy(x.userData.anchor||ie(1.62,120,0)),x.add(p);let u=bn(`${d.id} ${d.name}`,"layers-right","label-layer");if(u.position.copy(ie(1.7,110,0)),u.userData.band=c,m===0){let y=document.createElement("span");y.className="lead-kicker",y.textContent=l.name,u.userData.leader.querySelector(".lead-box").prepend(y)}x.add(u),h.add(x),g.push({id:d.id,object:x,h:x.userData.h})});let f=As(l.name,"bands","label-band");f.userData.band=l.id,h.add(f),i.add(h),e.push({id:l.id,object:h,rings:g,name:f})});let t=new se;t.name="spine";let n=["spine","layer:L11"],s=ne(new nt(Gt.radius,Gt.radius,1,16),"#1e1e1e",n);t.add(s);let r=Il.checks.map(l=>{let c=ne(new nt(.13,.13,.22,32),"#ffffff",n);return c.userData.layer=l,t.add(c),c}),o=zf(n);t.add(o);let a=bn(`${Il.id} ${Il.name}`,"spine","label-spine");return a.userData.track=[new L,new L],t.add(a),i.add(t),{group:i,bands:e,spine:{group:t,rod:s,collars:r,key:o,name:a}}}function Hf(i,e,t){let n=$i.top-$i.wheelGap*e,s=$i.bandGap+($i.explodedGap-$i.bandGap)*e,r={},o={};i.bands.forEach(d=>{let m=t[d.id]||0,x=kt.gap+(kt.splitGap-kt.gap)*m,p=n;d.rings.forEach((u,y)=>{u.object.position.y=n,r[u.id]=n-u.h/2,n-=u.h+(y<d.rings.length-1?x:0)}),o[d.id]=(p+n)/2,d.name.position.copy(ie(kt.rOut+2,270,o[d.id])),d.name.center.set(1,.5),n-=s});let a=n+s,{rod:l,collars:c,key:h,name:g}=i.spine,f=$i.top-$i.wheelGap*e+.15;return l.scale.y=f-a+.15,l.position.copy(ie(Gt.r,Gt.angle,(f+a-.15)/2)),c.forEach(d=>d.position.copy(ie(Gt.r,Gt.angle,r[d.userData.layer]))),h.position.copy(ie(Gt.r,Gt.angle,a-.15)),g.position.copy(ie(Gt.r,Gt.angle,a-.5)),g.userData.track[0].copy(ie(Gt.r,Gt.angle,f)),g.userData.track[1].copy(ie(Gt.r,Gt.angle,a-.15)),{bottom:a,layerY:r,bandMid:o}}var kf=[.25,1.25,2.25];function Vf(){let i=new se;i.name="nexus";let e=wh.map((n,s)=>{let r=new se;r.name=`level:${n.id}`;let o=Ai.radii[s],a=Ai.radii[s+1]||Ai.core;Th.forEach(c=>{if(c.teamOnly&&n.id!=="team")return;let h=Vt(fr(a+.04,o,c.from,c.from+90,Ai.sweep,Ai.gap),1,0);r.add(ne(h,n.color,["nexus",`level:${n.id}`,`register:${c.id}`]))});let l=bn(n.name,"levels","label-level");return l.position.copy(ie(o-.05,235,0)),r.add(l),i.add(r),{level:n.id,object:r}}),t=Th.map(n=>{let s=n.teamOnly?wh.length-1:0,r=bn(n.name,["registers",`register:${n.id}`],"label-register");return n.teamOnly&&(r.userData.reach=2.2),r.position.copy(ie((Ai.radii[s]+(Ai.radii[s+1]||Ai.core))/2,n.from+45,0)),r.userData.tube=s,r.userData.register=n.id,i.add(r),r});return{group:i,tubes:e,registers:t}}function Wf(i,e,t){i.tubes.forEach((n,s)=>{let r=.04+kf[s]*t;n.object.position.y=r,n.object.scale.y=r-e}),i.registers.forEach(n=>n.position.y=.04+kf[n.userData.tube]*t)}var he="#ffffff",St="#1e1e1e";var ae=(i,e,t,n,s=he)=>ne(new rn(i,e,t),s,n),tt=(i,e,t,n=he,s=24)=>ne(new nt(i,i,e,s),n,t);function Xf(i,e,t){let n=new Mn,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function Je(i,e,t,n,s,{color:r=he,border:o=0}={}){let a=Xf(i,e,n);o>0&&a.holes.push(Xf(i-2*o,e-2*o,Math.max(.02,n-o)));let l=new ys(a,{depth:t,bevelEnabled:!1,curveSegments:6});return ne(l,r,s)}function ni(i,e,t,n=.08){let s=new se;for(let r=0;r<i;r++){let o=ne(new nt(n,n,.06,10),St,t);o.rotation.x=Math.PI/2,o.position.set(i===1?0:-e/2+e*r/(i-1),0,.03),s.add(o)}return s}function ii(i,e,t,n=he){let s=new Hi(i,!1,"catmullrom",.2);return ne(new ki(s,Math.max(8,i.length*10),e,8),n,t)}function Ki(i,e,t,n,s=32){let r=(a,l)=>new re(a*Math.sin(l*Pe),-a*Math.cos(l*Pe)),o=[];for(let a=0;a<=s;a++)o.push(r(e,t+(n-t)*a/s));for(let a=s;a>=0;a--)o.push(r(i,t+(n-t)*a/s));return new Mn(o)}function qf(i,e=!0){let t=new se;t.add(Je(.6,.6,.08,.08,i));let n=Je(.6,.6,.04,.08,i,{border:.06});n.position.z=.08;let s=ne(new nt(.15,.15,.12,16),he,i);s.rotation.x=Math.PI/2,s.position.z=.14;let r=new se,o=ne(new nt(.035,.035,.36,8),he,i);o.position.y=.18;let a=ne(new on(.07,10,8),he,i);return a.position.y=.38,r.add(o,a),r.position.z=.2,r.rotation.x=e?.5:Math.PI-.5,t.add(n,s,r),t}function mo(i,e,t,n=[]){let s=new se,r=.32;s.add(Je(i*r+.16,e*r+.16,.06,.06,t));for(let o=0;o<i;o++)for(let a=0;a<e;a++){let l=n.includes(a*i+o),c=ae(.22,.22,.08,l?[...t,"energy"]:t);c.position.set((o-(i-1)/2)*r,((e-1)/2-a)*r,.1),s.add(c)}return s}function mr(i,e,t,{traces:n=3,lit:s=!0}={}){let r=new se;r.add(Je(i,e,.1,.08,t));let o=Je(i-.16,e-.16,.04,.05,[...t,"glass"]);o.position.z=.1,r.add(o);for(let a=0;a<n;a++){let l=(i-.4)*(.45+.5*(a*37%10/10)),c=ae(l,.035,.02,s&&a===0?[...t,"energy"]:t);c.position.set(-(i-.4)/2+l/2,e/2-.3-a*((e-.5)/Math.max(1,n)),.16),r.add(c)}return r}var kn={r:5.7,booster:{y0:-24,y1:-6},middle:{y0:-6,y1:22},nose:{y0:22,y1:28,tip:42},skirt:2.2,nozzleY:-26.2,ring:.45},gr=96,Ut=kn.r;function go(i,e,t,n,s,r){let o=new nt(i,i,t-e,gr,1,!0,n,s);o.translate(0,(e+t)/2,0);let a=ne(o,he,r);return a.material.side=Ht,a}function Fn(i,e,t,n,s=360,r=0){let o=ne(new Lt(i,e,6,gr,s*Pe),he,n);return o.rotation.x=Math.PI/2,o.rotation.z=(r-90)*Pe,o.position.y=t,o}function Yf(i,e){let t=new se;return t.add(go(Ut+.07,i-kn.ring/2,i+kn.ring/2,0,Math.PI*2,[...e,"energy","ring"])),t.add(Fn(Ut+.06,.1,i-.36,e),Fn(Ut+.06,.1,i+.36,e)),t}function Qi(i,e,t,n=0,s=360){let r=new se;for(let o=0;o<e;o++){let a=n+(s-n)*(o+.5)/e,l=ne(new on(.09,8,4,0,Math.PI*2,0,Math.PI/2),St,t);l.position.copy(ie(Ut,a,i)),l.lookAt(ie(Ut*2,a,i)),l.rotateX(Math.PI/2),r.add(l)}return r}function Ci(i,e,t,n=0){return i.position.copy(ie(Ut+n,e,t)),i.rotation.y=Math.PI-e*Pe,i}function fv(i,e){let t=new se;t.name="porthole",t.add(ne(new Lt(i,.14,8,40),he,[...e,"porthole"])),t.add(ne(new Lt(i-.16,.05,6,40),he,[...e,"porthole","energy"]));let n=tt(i-.12,.06,[...e,"porthole","glass"],he,40);n.rotation.x=Math.PI/2,n.position.z=-.04,t.add(n);for(let s=0;s<8;s++){let r=ne(new nt(.05,.05,.06,8),St,e);r.rotation.x=Math.PI/2,r.position.set(Math.sin(s*Math.PI/4)*i,Math.cos(s*Math.PI/4)*i,.14),t.add(r)}return t}function Nh(i,e,t,n=360,s=0){let r=new se;r.add(go(Ut+.08,i-.28,i+.28,(180-s-n)*Pe,n*Pe,[...t,"strap"]));let o=new se;o.add(Je(1,.8,.3,.12,t));let a=ni(2,.5,t,.08);return a.position.z=.3,o.add(a),r.add(Ci(o,e,i-.4,.05)),r}function pv(i){let e=new se;e.add(Je(3.2,2.5,.12,.4,i));let t=Je(3.2,2.5,.08,.4,i,{border:.18});t.position.z=.12,e.add(t);for(let n=0;n<5;n++){let s=ae(2.4,.14,.16,[...i,"grille"]);s.position.set(0,-.8+n*.4,.16),e.add(s)}return e}function Uh(i,e,t){let n=new se;n.add(Je(i,e,.1,.25,t));let s=Je(i,e,.08,.25,t,{border:.12});s.position.z=.1,n.add(s);let r=ii([new L(-.35,0,.1),new L(-.3,0,.35),new L(.3,0,.35),new L(.35,0,.1)],.05,t);return r.position.y=-e*.2,n.add(r),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([o,a])=>{let l=ni(1,0,t,.07);l.position.set(o*(i/2-.22),a*(e/2-.22),.1),n.add(l)}),n}function Zf(i,e,t,n){let s=new se,r=tt(.14,t-e,[...n,"conduit"],he,10);r.position.copy(ie(Ut+.4,i,(e+t)/2)),s.add(r);for(let o=e+1;o<t;o+=3.5)s.add(Ci(ae(.5,.25,.55,n),i,o,.22));return s}function mv(i,e){let t=new Mn;t.moveTo(0,-1.5),t.lineTo(0,9),t.lineTo(4.6,2.6),t.lineTo(5.2,-3.4),t.lineTo(3.6,-3.4),t.lineTo(2.2,-1.5),t.closePath();let n=.6,s=Vt(t,n,.1);s.rotateX(-Math.PI/2),s.translate(0,0,n/2);let r=new se;return r.add(ne(s,he,e)),[[.5,0],[.5,2],[.5,4],[.5,6],[1.6,4.4],[2.8,2.6],[3.9,1.2],[4.2,-2.4],[2.4,-.6]].forEach(([o,a])=>{let l=tt(.1,n+.06,e,St,10);l.rotation.x=Math.PI/2,l.position.set(o,a,0),r.add(l)}),r.position.copy(ie(Ut-.1,i,kn.booster.y0+1.5)),r.rotation.y=Math.PI/2-i*Pe,r}function gv(i,e,t,n){let s=new se,r=3.6,o=h=>.9+1.3*h*h,a=[];for(let h=0;h<=16;h++)a.push(new re(o(h/16),-r*(h/16)));let l=ne(new Si(a,48),he,[...n,"nozzle"]);l.material.side=Ht,s.add(l),[.35,.6,.82].forEach(h=>s.add(Fn(o(h)+.03,.05,-r*h,n))),s.add(Fn(o(1)+.02,.13,-r,[...n,"energy","rim"])),s.add(Fn(o(1)-.18,.06,-r+.06,[...n,"energy","rim"]));let c=tt(1.05,.7,n,he,32);return c.position.y=.35,s.add(c,Fn(1.12,.12,.45,n)),s.position.set(i,t,e),s}var Fh=i=>Ut*Math.pow(Math.cos(i*Math.PI/2),.85);function xv(i,e){let{y1:t,tip:n}=kn.nose,s=[];for(let r=0;r<=32;r++)s.push(new re(Fh(r/32),t+(n-t)*r/32));return new Si(s,gr,i,e)}function xo(){let i=new se;i.name="rocket";let{booster:e,middle:t,nose:n,skirt:s}=kn,r=new se;r.name="stage:1";let o=["rocket","stage:1"];r.add(go(Ut,e.y0,e.y1,0,Math.PI*2,o)),r.add(Yf(e.y1-.4,o)),[-19,-13].forEach(w=>r.add(Fn(Ut+.02,.035,w,o),Qi(w+.3,48,o))),r.add(Qi(e.y0+.4,48,o),Qi(e.y1-1.1,48,o)),r.add(Nh(-16,200,o)),r.add(Ci(Uh(1.6,2.2,[...o,"hatch"]),180,-10,.02)),r.add(Zf(228,e.y0+1,e.y1-1.2,o)),[45,135,225,315].forEach(w=>r.add(mv(w,[...o,"fin"])));let a=ne(new nt(Ut,Ut*.86,s,gr,1,!0),he,[...o,"skirt"]);a.material.side=Ht,a.position.y=e.y0-s/2,r.add(a);for(let w=0;w<24;w++){let b=360*w/24,_=ae(.2,s,.24,o);_.position.copy(ie(Ut*.93+.08,b,e.y0-s/2)),_.rotation.y=-b*Pe,r.add(_)}let l=tt(Ut*.86,.3,o,he,gr);l.position.y=e.y0-s-.15,r.add(l),[0,120,240].forEach(w=>{let b=ie(2.4,w);r.add(gv(b.x,b.z,kn.nozzleY,o));let _=tt(.36,1.3,[...o,"pump"],he,16);_.position.copy(ie(2.3,w+60,kn.nozzleY+.5)),_.rotation.set(0,-(w+60)*Pe,Math.PI/2,"YXZ"),r.add(_)}),i.add(r);let c=new se;c.name="stage:2";let h=["rocket","stage:2"],g=[0,180].map((w,b)=>{let _=new se;_.name=`half:${b}`,_.add(go(Ut,t.y0,t.y1,w*Pe,Math.PI,[...h,"shell"]));let S=w,I=w+180;return[0,8,15].forEach(R=>_.add(Fn(Ut+.02,.035,R,h,180,S),Qi(R+.3,24,h,S,I))),_.add(Qi(t.y0+.5,24,h,S,I),Qi(t.y1-1.1,24,h,S,I)),_.add(Nh(4,S+60,h,180,S),Nh(18,S+30,h,180,S)),_.userData.dir=b===0?1:-1,c.add(_),_});c.add(Yf(t.y1-.4,h)),g[0].add(Ci(pv([...h,"vent"]),160,10.8,.02)),g[1].add(Ci(Uh(1.8,2.6,[...h,"hatch"]),200,1.5,.02)),g[1].add(Zf(250,t.y0+1,t.y1-1.2,h));let f=["rocket","energy","energy-line"],d=tt(.08,n.y1-t.y0-1,f,he,8);d.position.copy(ie(Ut+.12,112,(t.y0+n.y1)/2-.5)),g[0].add(d);for(let w=t.y0+2;w<t.y1-1;w+=4)g[0].add(Ci(ae(.45,.22,.3,h),112,w,.06));let m=ne(new on(.42,24,12),he,f);m.position.copy(ie(Ut+.2,112,t.y1-3));let x=ne(new Lt(.62,.06,6,32),he,f);Ci(x,112,t.y1-3,.12),c.add(m,x),i.add(c);let p=new se;p.name="stage:3";let u=["rocket","stage:3"];p.add(go(Ut,n.y0,n.y1,0,Math.PI*2,u));let y=ne(xv(0,Math.PI*2),he,[...u,"cone"]);y.material.side=Ht,p.add(y),p.add(Fn(Ut+.02,.05,n.y1,u),Qi(n.y0+.9,48,u),Qi(n.y1-.4,48,u));let M=w=>n.y1+(n.tip-n.y1)*w;p.add(Fn(Fh(.32)+.05,.12,M(.32),[...u,"energy","ring"])),p.add(Fn(Fh(.62)+.02,.04,M(.62),u));let v=ne(new on(.22,12,8),he,u);return v.position.y=n.tip,p.add(v),p.add(Ci(Uh(1.4,1.8,[...u,"hatch"]),160,25,.02)),p.add(Ci(fv(.85,u),134,25.1,.06)),i.add(p),{group:i,stages:[r,c,p],halves:g}}function $f(i,{separate:e=0,open:t=0}={}){let[n]=i.stages;n.position.set(0,-12*e,0),n.rotation.z=.25*e,i.halves.forEach(s=>s.position.x=s.userData.dir*t*Ut*1.5)}function Jf(){let i=new se;i.name="pad";let e=["pad"],t=kn.nozzleY-4.2,n=ne(new nt(11,12,1.2,gr),he,e);n.position.y=t-.6;let s=tt(4.5,.2,e,he,48);s.position.y=t-.05,i.add(n,s,Fn(4.6,.12,t+.02,e),Fn(8.5,.05,t+.02,e));let r=new se,o=60;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,l])=>{let c=ae(.3,o,.3,e);c.position.set(a*1.4,o/2,l*1.4),r.add(c)});for(let a=3;a<o;a+=4)[0,90,180,270].forEach(l=>{let c=ae(2.8,.18,.18,e);c.position.copy(ie(1.4,l,a)),c.rotation.y=-l*Pe;let h=ae(.1,4.7,.1,e);h.position.copy(ie(1.42,l,a+2)),h.rotation.set(0,-l*Pe,.55,"YXZ"),r.add(c,h)});return[14,36].forEach(a=>{let l=ae(5.2,.4,.8,[...e,"arm"]);l.position.set(-3.9,a,0),r.add(l)}),r.position.set(Ut+4.6,t,0),i.add(r),i}function Kf(i=7){let e=new se;e.name="moon";let t=["moon"];return e.add(ne(new on(i,64,32),he,t)),[[20,30,1.4],[-30,60,1],[40,140,1.8],[-10,200,.9],[55,260,1.2],[-45,300,1.5],[5,95,.7],[30,340,.6],[-60,20,.8]].forEach(([n,s,r])=>{let o=ne(new Lt(r,r*.12,6,32),he,t),a=new L().setFromSphericalCoords(i,(90-n)*Pe,s*Pe);o.position.copy(a),o.lookAt(a.clone().multiplyScalar(2)),e.add(o)}),e}var Oh=(i,e,t,n)=>(i.position.set(e,t,n),i),Ol=(i,e,t=0)=>new L(i*Math.sin(e*Pe),i*Math.cos(e*Pe),t);function Qf(i,e,t,n,s,r){let o=ne(new $r(i,e,48,1,(90-n)*Pe,(n-t)*Pe),he,s);return o.position.z=r,o}function ji(i,e,{value:t=.6,range:n=null,centre:s=!1,ticks:r=10,minor:o=4,sweep:a=270,sub:l=null}={}){let c=new se,h=u=>s?a*(u-.5):-a/2+a*u,g=tt(i,.1,[...e,"face"],he,64);g.rotation.x=Math.PI/2,g.position.z=.05;let f=ne(new Lt(i*1.04,i*.06,10,72),he,[...e,"energy","bezel"]);f.position.z=.12,c.add(g,f);for(let u=0;u<=r;u++){let y=h(u/r),M=ae(i*.035,i*.16,.03,e,St);if(M.position.copy(Ol(i*.84,y,.12)),M.rotation.z=-y*Pe,c.add(M),u===r)break;for(let v=1;v<=o;v++){let w=h((u+v/(o+1))/r),b=ae(i*.016,i*.08,.03,e,St);b.position.copy(Ol(i*.88,w,.12)),b.rotation.z=-w*Pe,c.add(b)}}if(c.userData.numbers=Array.from({length:r+1},(u,y)=>({i:y,at:Ol(i*.64,h(y/r),.12)})),n&&c.add(Qf(i*.93,i*.99,h(n[0]),h(n[1]),[...e,"energy","range"],.125)),s){c.add(Qf(i*.93,i*.99,Math.min(0,h(t)),Math.max(0,h(t)),[...e,"energy","range"],.125));let u=ae(i*.07,i*.32,.05,[...e,"baseline"],St);u.position.copy(Ol(i*.74,0,.14)),c.add(u)}if(l){let u=ji(i*l.r,[...e,"sub"],{value:l.value,ticks:6,minor:1,sweep:300});u.position.set(i*l.x,i*l.y,.06),u.name=l.name||"sub",c.add(u)}let d=new se;d.name="needle";let m=ae(i*.05,i*.82,.03,[...e,"energy","needle"]);m.position.set(0,i*.36,.22);let x=ae(i*.1,i*.26,.03,[...e,"energy","needle"]);x.position.set(0,-i*.12,.22);let p=tt(i*.1,.12,e,St);return p.rotation.x=Math.PI/2,p.position.z=.24,d.add(m,x,p),d.rotation.z=-h(t)*Pe,c.add(d),c}function jf(i,{throughput:e=.66,stability:t=.7,productivity:n=.64,cost:s=.58,experience:r=2}={}){let o=new se;o.name="instrument-panel";let a=[...i,"instruments"],l=Je(8.6,4.2,1.4,.8,a);l.position.z=-1.4;let c=Je(10,5,.5,.9,a),h=Je(9.5,4.5,.06,.7,a,{border:.1});h.position.z=.5,o.add(l,c,h),[[-4.55,2.05],[4.55,2.05],[-4.55,-2.05],[4.55,-2.05]].forEach(([I,R])=>o.add(Oh(ni(1,0,a,.11),I,R,.5)));let g=Je(4.2,4.2,.12,.8,a);g.position.set(-.6,0,.5),o.add(g),[[-1.75,1.75],[1.75,1.75],[-1.75,-1.75],[1.75,-1.75]].forEach(([I,R])=>o.add(Oh(ni(1,0,a,.09),-.6+I,R,.62)));let f=ji(1.72,[...a,"inst:throughput"],{value:e,range:[.55,.85],sub:{r:.3,x:0,y:-.46,value:t,name:"inst:stability"}});f.name="inst:throughput",f.position.set(-.6,0,.62),o.add(f);let d=Je(1.1,.3,.05,.04,[...a,"counter"]);d.position.set(-.6,.62,.8),o.add(d);let m=tt(.3,.35,[...a,"energy","inst:knob"],he,20);m.rotation.x=Math.PI/2,m.position.set(-2.45,-1.85,.75),m.name="inst:knob",o.add(m);let x=new se;x.name="inst:cost";let p=[...a,"inst:cost"];x.add(Je(1.05,3.7,.12,.3,p));let u=tt(.2,3,[...p,"glass"],he,20);u.position.z=.36;let y=tt(.13,3*s,[...p,"energy"],he,16);y.position.set(0,-1.5+1.5*s,.36);let M=ne(new Lt(.22,.05,6,24),he,[...p,"energy"]);M.rotation.x=Math.PI/2,M.position.set(0,-1.5+3*s,.36),x.add(u,y,M),[1.5,-1.5].forEach(I=>{let R=tt(.26,.16,p,he,20);R.position.set(0,I,.36),x.add(R)});for(let I=0;I<=8;I++){let R=ae(I%4===0?.26:.14,.03,.03,p,St);R.position.set(.38+(I%4===0?0:-.06),-1.4+2.8*I/8,.16),x.add(R)}let v=Je(.8,.2,.04,.03,p);v.position.set(0,-2.02,.12),x.add(v),x.position.set(-4,.15,.5),o.add(x);let w=Je(2.1,2.1,.14,.35,a);w.position.set(3.35,.95,.5),o.add(w),o.add(Oh(ni(2,1.7,a,.07),3.35,1.85,.64));let b=ji(.78,[...a,"inst:productivity"],{value:n,centre:!0,ticks:8,minor:1,sweep:240});b.name="inst:productivity",b.position.set(3.35,.9,.64),o.add(b);let _=new se;_.name="inst:experience";let S=[...a,"inst:experience"];_.add(Je(2.1,1.25,.1,.25,S));for(let I=0;I<3;I++){let R=I<r,N=ne(new Lt(.27,.06,6,28),he,S),z=tt(.22,.14,R?[...S,"energy","lamp"]:[...S,"lamp"],he,24);z.rotation.x=Math.PI/2,[N,z].forEach(P=>P.position.set((I-1)*.66,.14,.16));let W=Je(.5,.14,.03,.03,S);W.position.set((I-1)*.66,-.36,.1),_.add(N,z,W)}return _.position.set(3.35,-1.15,.5),o.add(_),o}function ep({score:i=72,rule:e=100,ceiling:t=79}={}){let n=new se;n.name="autonomy";let s=["autonomy"],r=4,o=240,a=M=>-o/2+o*M/100,l=ne(new nt(r*1.2,r*1.24,.5,96),he,[...s,"housing"]);l.position.y=-.2,n.add(l);for(let M=0;M<8;M++){let v=tt(.13,.08,s,St,12);v.position.copy(ie(r*1.12,22.5+45*M,.08)),n.add(v)}n.add(ne(new nt(r,r,.3,96),he,s));let c=ne(new Lt(r*1.03,.2,10,96),he,[...s,"energy","bezel"]);c.rotation.x=Math.PI/2,c.position.y=.2,n.add(c),[[0,50,"zone:human"],[51,79,"zone:hybrid"],[80,100,"zone:ai"]].forEach(([M,v,w])=>{let b=ne(Vt(Ki(r*.7,r*.86,a(M),a(v)),.16,.02),he,[...s,w,...w==="zone:hybrid"?["soft"]:[]]);b.position.y=.32,n.add(b)});for(let M=81;M<100;M+=2){let v=ae(.05,.05,r*.15,[...s,"zone:ai"],St);v.position.copy(ie(r*.78,a(M),.36)),v.rotation.y=-a(M)*Pe+.5,n.add(v)}for(let M=0;M<=100;M+=5){let v=ae(.07,.06,M%50===0?.7:M%10===0?.45:.25,s,St);v.position.copy(ie(r*.6-(M%10===0?0:.1),a(M),.2)),v.rotation.y=-a(M)*Pe,n.add(v)}let h=[["ring:score",2.1,["energy"],.5],["ring:rule",1.62,["accent"],.38],["ring:ceiling",1.14,[],.26]].map(([M,v,w,b])=>{let _=ne(new Zt,he,[...s,M,...w]);return _.position.y=b,_.userData={..._.userData,ring:v,value:-1},n.add(_),_}),g=(M,v,w)=>{M.visible=w&&v>.5;let b=Math.round(v*2)/2;!M.visible||M.userData.value===b||(M.userData.value=b,M.geometry.dispose(),M.geometry=Vt(Ki(M.userData.ring-.2,M.userData.ring+.2,a(0),a(b)),.14,.03))},f=new se,d=ae(.36,.55,r*.92-.95,[...s,"ceiling"],St);d.position.set(0,.45,-(.95+r*.92)/2);let m=ae(.5,.12,.5,[...s,"ceiling","energy"]);m.position.set(0,.78,-r*.92),f.add(d,m),n.add(f);let x=new se;x.name="needle";let p=ae(.22,.14,r*.85,[...s,"energy","needle"]);p.position.set(0,.32,-r*.4);let u=ae(.4,.14,r*.25,[...s,"energy","needle"]);u.position.set(0,.32,r*.12);let y=ne(new nt(.45,.45,.3,32),St,s);return y.position.y=.36,x.add(p,u,y),n.add(x),n.userData.set=({score:M=0,rule:v=100,ceiling:w=100},b=["score","rule","ceiling"])=>{g(h[0],M,b.includes("score")),g(h[1],v,b.includes("rule")),g(h[2],w,b.includes("ceiling")),f.visible=b.includes("ceiling")&&w<99.5,f.rotation.y=-a(w)*Pe,x.rotation.y=-a(Math.min(M,v,w))*Pe},n.userData.set({score:i,rule:e,ceiling:t}),n}var bt=(i,e,t)=>new L(i,e,t),it=(i,e,t,n,s,r=0)=>(e.position.set(t,n,s),e.rotation.y=r,i.add(e),e);function _v(i){let e=new se;for(let o=0;o<5;o++){let a=72*o,l=ae(.1,.08,.7,i);l.position.copy(ie(.35,a,.18)),l.rotation.y=-a*Pe;let c=ne(new on(.08,8,6),he,i);c.position.copy(ie(.7,a,.08)),e.add(l,c)}let t=tt(.06,.7,i,he,10);t.position.y=.55;let n=ae(1,.18,.95,[...i,"chair"]);n.position.y=.95;let s=ae(.95,1.1,.14,[...i,"chair"]);s.position.set(0,1.65,.5),s.rotation.x=.12;let r=o=>{let a=ae(.1,.08,.6,i);a.position.set(o*.52,1.3,.05);let l=ae(.06,.32,.06,i);l.position.set(o*.52,1.12,.2),e.add(a,l)};return r(-1),r(1),e.add(t,n,s),e}function yv(i){let e=new se,t=ae(.9,.08,.85,[...i,"chair"]);t.position.y=.95;let n=ae(.9,.6,.06,[...i,"chair"]);return n.position.set(0,1.55,.42),e.add(t,n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>{let o=tt(.04,.95,i,he,6);o.position.set(s*.38,.47,r*.36),e.add(o)}),[-1,1].forEach(s=>{let r=tt(.03,.6,i,he,6);r.position.set(s*.38,1.25,.42),e.add(r)}),e}function tp(i){let e=new se;return[-1,1].forEach(t=>{let n=ae(.55,.04,.75,[...i,"manual"]);n.position.set(t*.29,.04,0),n.rotation.z=-t*.08,e.add(n);for(let s=0;s<4;s++){let r=ae(.38,.01,.025,i,St);r.position.set(t*.29,.08+.02*t*-0,-.25+s*.16),r.rotation.z=-t*.08,e.add(r)}}),e}function vv(i){let e=new se,t=ne(new Lt(.32,.035,6,24,Math.PI),he,[...i,"headset"]);return t.rotation.x=-Math.PI/2,t.rotation.z=0,t.position.y=.1,e.add(t),[-1,1].forEach(n=>{let s=tt(.14,.12,[...i,"headset"],he,14);s.rotation.z=Math.PI/2,s.position.set(n*.32,.12,0),e.add(s)}),e}function np(i,{x0:e,x1:t,z0:n,z1:s,h:r}){let o=new se,a=4;for(let l=e;l<t-.01;l+=a)for(let c=n;c<s-.01;c+=a){let h=Math.min(a,t-l),g=Math.min(a,s-c);o.add(it(o,ae(h-.05,.2,g-.05,[...i,"floor"]),l+h/2,-.1,c+g/2))}it(o,ae(t-e,r,.3,[...i,"wall"]),(e+t)/2,r/2,n-.15),it(o,ae(.3,r,s-n,[...i,"wall"]),e-.15,r/2,(n+s)/2);for(let l=e+a;l<t;l+=a)it(o,ae(.06,r,.04,i),l,r/2,n+.02);for(let l=n+a;l<s;l+=a)it(o,ae(.04,r,.06,i),e+.02,r/2,l);return it(o,ae(t-e,.25,.1,i),(e+t)/2,.12,n+.05),it(o,ae(.1,.25,s-n,i),e+.05,.12,(n+s)/2),o}function Rs(i,e,t,n){let s=new se;s.name=n,s.add(Je(i+.4,e+.4,.2,.12,[...t,"screen",n]));let r=Je(i,e,.06,.06,[...t,"screen",n,"glass"]);return r.position.z=.2,s.add(r),s}var Mv={r:6,x0:-9,x1:5,floor:-2.6,dome:3.6};function ip(){let i=new se;i.name="cockpit";let e=["cockpit"],{r:t,x0:n,x1:s,floor:r,dome:o}=Mv,a=[25,270],l=C=>C.rotateZ(-Math.PI/2),c=l(new nt(t,t,s-n,96,1,!0,a[0]*Pe,(a[1]-a[0])*Pe));c.translate((n+s)/2,0,0);let h=ne(c,he,[...e,"shell"]);h.material.side=Ht,i.add(h);let g=[];for(let C=0;C<=20;C++){let B=C/20;g.push(new re(t*Math.sqrt(Math.max(0,1-B*B)),o*B))}let f=l(new Si(g,96,a[0]*Pe,(a[1]-a[0])*Pe));f.translate(s,0,0);let d=ne(f,he,[...e,"dome"]);d.material.side=Ht,i.add(d);let m=(C,B,O=0)=>bt(C,-(t-O)*Math.sin(B*Pe),(t-O)*Math.cos(B*Pe));[-7.5,-4.5,-1.5,1.5,4.5].forEach(C=>{let B=l(Vt(Ki(t-.45,t-.02,180-a[1],180-a[0],48),.3,.03)),O=ne(B,he,[...e,"frame"]);O.position.x=C+.15,i.add(O)}),[70,120,200,245].forEach(C=>{let B=ae(s-n,.12,.12,[...e,"stringer"]);B.position.copy(m((n+s)/2,C,.08)),i.add(B)}),[[150,.14],[162,.1],[228,.12]].forEach(([C,B])=>{let O=tt(B,s-n-.4,[...e,"conduit"],he,10);O.rotation.z=Math.PI/2,O.position.copy(m((n+s)/2,C,.55)),i.add(O),[-6,-3,0,3].forEach($=>{let H=ae(.3,.4,.4,e);H.position.copy(m($,C,.45)),i.add(H)})});let x=ii([m(-8.2,150,.55),m(-8.2,120,.9),bt(-8.2,r+.6,-3.6)],.12,[...e,"conduit"]);i.add(x);let p=Math.sqrt(t*t-r*r)-.1;for(let C=n+.2;C<s-1;C+=2.6)for(let B=0;B<3;B++){let O=2*p/3,$=ae(2.55,.18,O-.06,[...e,"floor"]);$.position.set(C+1.3,r-.09,-p+O*(B+.5)),i.add($)}let u=Je(3,2.2,.06,.25,[...e,"hatch"],{border:.14});u.rotation.x=-Math.PI/2,u.position.set(-5.4,r+.01,1.8),i.add(u),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([C,B])=>{let O=ni(1,0,e,.08);O.rotation.x=-Math.PI/2,O.position.set(-5.4+C*1.3,r+.02,1.8+B*.9),i.add(O)});let y=new se;y.name="door",y.add(Je(2.4,3.4,.12,.6,[...e,"door"]));let M=Je(2.4,3.4,.1,.6,[...e,"door"],{border:.16});M.position.z=.12;let v=Je(.9,.7,.06,.15,[...e,"door"],{border:.1});v.position.set(0,.8,.12);let w=ne(new Lt(.38,.05,6,24),he,[...e,"door"]);w.position.set(0,-.4,.3),y.add(M,v,w),y.position.set(-6.4,.2,-5.62),i.add(y);let b=new se;b.add(Object.assign(mr(1.6,1.1,e),{}));let _=mo(4,3,e,[1,6]);_.position.x=1.8,b.add(_);let S=mr(1.2,1.1,e,{traces:2});S.position.x=3.4,b.add(S),b.position.set(-3.2,1.6,-5.55),i.add(b);let I=ae(4.6,.9,1.1,e);I.position.set(-1.6,r+.45,-4.9),i.add(I);let R=ae(1.6,2.1,9.2,[...e,"console"]);R.position.set(4.1,r+1.05,0),i.add(R);let N=jf(e);N.scale.setScalar(.62),N.rotation.order="YXZ",N.rotation.set(-.38,-Math.PI/2,0),N.position.set(4.3,.95,0),i.add(N);let z=ae(1.1,.25,6.6,e);z.position.set(4.75,2.2,0),i.add(z),[-1,1].forEach(C=>{let B=new se;B.add(Je(3,2.6,.3,.3,[...e,"console"]));let O=mr(1.3,.9,e);O.position.set(-.6,.55,.3);let $=mo(3,2,e,C>0?[2]:[3]);$.position.set(.75,.55,.3);let H=new se;[-.9,-.3,.3,.9].forEach((Z,K)=>{let xe=qf(e,K%2===0);xe.scale.setScalar(.6),xe.position.x=Z,H.add(xe)}),H.position.set(0,-.6,.3),B.add(O,$,H),B.rotation.order="YXZ",B.rotation.set(-.3,-Math.PI/2-C*.55,0),B.position.set(3.4,.6,C*4.1),i.add(B)});let W=ae(1.8,1.5,1,[...e,"console"]);W.position.set(2.2,r+.75,0),i.add(W),[-.25,.25].forEach(C=>{let B=tt(.05,.6,[...e,"energy","throttle"],he,8);B.position.set(2.3,r+1.75,C),B.rotation.z=.35;let O=ae(.18,.14,.3,[...e,"energy","throttle"]);O.position.set(2.2,r+2.05,C),i.add(B,O)});let P=mo(3,2,e,[4]);return P.rotation.x=-Math.PI/2,P.rotation.z=Math.PI/2,P.position.set(1.7,r+1.51,0),i.add(P),[-1.95,1.95].forEach((C,B)=>{let O=new se;O.name=`seat:${B+1}`;let $=[...e,"seat"],H=ae(1.3,.5,1.2,$);H.position.y=.25;let Z=tt(.18,.6,$,he,12);Z.position.y=.8;let K=ae(1.5,.35,1.5,$);K.position.y=1.25;let xe=ae(.35,2.5,1.5,$);xe.position.set(-.78,2.45,0),xe.rotation.z=.12;let Ae=ae(.3,.6,.9,$);Ae.position.set(-.95,4,0),Ae.rotation.z=.12,O.add(H,Z,K,xe,Ae),[-1,1].forEach(Ce=>{let Fe=ae(1.1,.14,.18,$);Fe.position.set(-.1,1.95,Ce*.82);let ye=ae(1.3,.3,.16,$);ye.position.set(0,1.55,Ce*.8),O.add(Fe,ye)}),O.position.set(.6,r,C),i.add(O);let q=ii([bt(2.5,r,C),bt(2.6,r+1.5,C),bt(2.45,r+2.5,C)],.08,[...e,"energy","column"]),_e=ii([bt(2.4,r+3.05,C-.55),bt(2.4,r+2.55,C-.5),bt(2.45,r+2.5,C),bt(2.4,r+2.55,C+.5),bt(2.4,r+3.05,C+.55)],.07,[...e,"energy","column"]);i.add(q,_e)}),[[1.4,205],[1.4,240],[1.4,262],[2.4,230]].forEach(([C,B],O)=>{let $=t*Math.sqrt(1-(C/o)**2)-.06,H=Je(O===3?1.3:1.6,O===3?.8:1.1,.08,.2,[...e,"window"],{border:.14});H.position.set(s+C,-$*Math.sin(B*Pe),$*Math.cos(B*Pe)),H.lookAt(bt(s+C*.4,0,0)),i.add(H)}),i}function sp(){let i=new se;i.name="classroom";let e=["classroom"];i.add(np(e,{x0:-14,x1:14,z0:-10,z1:10,h:9}));let t=new se;t.name="blackboard",t.add(Je(11.4,4.8,.2,.1,[...e,"board"]));let n=Je(11,4.4,.05,.06,[...e,"board"]);n.position.z=.2,t.add(n);let s=ae(11,.12,.3,e);s.position.set(0,-2.45,.3),t.add(s);let r=[...e,"energy","drawing"],o=(S,I,R,N,z)=>{let W=ne(new Lt(1,.025,4,64),he,r);W.scale.set(S,I,1),W.rotation.z=z,W.position.set(R,N,.3),t.add(W)};o(1.6,.9,-3.4,.3,.3),o(1.1,1.1,-3.4,.3,0),o(1.4,.6,.6,.6,-.4);let a=tt(.3,.04,r,he,24);a.rotation.x=Math.PI/2,a.position.set(-3.4,.3,.3),t.add(a);let l=ii([bt(-1.6,-1.4,.3),bt(-.4,.6,.3),bt(1.8,1.6,.3),bt(3.2,1,.3)],.03,r);t.add(l);for(let S=0;S<6;S++){let I=1.2+S*7%5*.4,R=ae(I,.06,.02,e,St);R.position.set(2.8+I/2,1.3-S*.5,.29),t.add(R)}t.position.set(1,5,-10),i.add(t);let c=Rs(3.4,2.6,e,"poster");Sv(c,r),c.position.set(-9.5,5.6,-10),i.add(c);let h=Rs(4,3,e,"schematic");for(let S=0;S<5;S++){let I=ae(2.6-S%2*.8,.05,.02,e,St);I.position.set(-.4,.9-S*.45,.3),h.add(I)}h.position.set(-14,5.5,3),h.rotation.y=Math.PI/2,i.add(h);let g=xo().group;g.scale.setScalar(.13),g.rotation.z=-Math.PI/2,g.position.set(-6.2,2.4,-5.2),g.name="model",i.add(g),[-8.6,-3.8].forEach(S=>{let I=new se;I.add(it(I,ae(.3,1.6,.25,e),0,.8,-.55),it(I,ae(.3,1.6,.25,e),0,.8,.55)),I.add(it(I,ae(.4,.2,1.6,e),0,1.65,0),it(I,ae(1.4,.15,1.6,e),0,.08,0)),I.position.set(S,0,-5.2),i.add(I)});let f=Je(1.4,.4,.06,.06,e);f.position.set(-6.2,.6,-4.4),i.add(f);let d=new se;d.name="simulator";let m=[bt(2.6,0,0),bt(2.5,.4,0),bt(1.5,3.3,0),bt(1.3,3.6,0),bt(.9,4.1,0),bt(0,4.3,0)].map(S=>new re(S.x,S.y)),x=ne(new Si(m,48),he,[...e,"capsule"]);x.material.side=Ht,x.position.y=1.4,d.add(x);let p=ne(new Lt(2.6,.12,6,48),he,[...e,"energy","capsule"]);p.rotation.x=Math.PI/2,p.position.y=1.4,d.add(p),[0,90,180,270].forEach(S=>{let I=tt(.12,1.5,e,he,8);I.position.copy(ie(1.9,S+45,.7)),d.add(I)}),[[30,2.6],[150,2.6]].forEach(([S,I])=>{let R=Je(.8,.6,.06,.15,[...e,"window"],{border:.1}),N=2.5-(I-1.8)/2.9*1;R.position.copy(ie(N+.02,S,I)),R.lookAt(ie(N*3,S,I+.6)),d.add(R)});let u=Je(1.2,1.4,.08,.3,[...e,"hatch"],{border:.12});u.position.copy(ie(2.05,90,2.4)),u.lookAt(ie(6,90,3.2)),d.add(u);for(let S=0;S<6;S++){let I=ae(.9,.06,.06,e);I.position.copy(ie(3,90,.25+S*.38)),I.rotation.y=-90*Pe,d.add(I)}[-.45,.45].forEach(S=>{let I=ae(.06,2.4,.06,e),R=ie(3,90,1.2);I.position.set(R.x,1.2,R.z+S),d.add(I)});let y=new se;y.add(it(y,tt(.12,6,e,he,8),0,3,0),it(y,ae(2.6,.2,.2,e),-1.2,6,0)),d.add(it(d,y,3.6,0,-1.6)),d.add(ii([bt(2.4,6,-1.6),bt(1.4,5.6,-1.4),bt(1,5.2,-.7)],.06,[...e,"energy","umbilical"])),d.position.set(9.4,0,2.6),d.rotation.y=-.6,i.add(d);let M=0;[-2.4,.8,4,7.2].forEach(S=>[-7.4,-3,1.4].forEach(I=>{let R=new se;R.name=`desk:${++M}`,R.add(it(R,ae(2.4,.12,1.3,[...e,"desk"]),0,1.6,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([N,z])=>R.add(it(R,tt(.05,1.6,e,he,6),N*1.1,.8,z*.55))),R.add(it(R,ae(2.2,.06,.4,e),0,1.25,-.4)),R.add(it(R,tp(e),.3,1.66,.05)),R.add(it(R,yv(e),0,0,1.25)),R.position.set(I,0,S),i.add(R)}));let v=new se;v.name="lectern",v.add(it(v,ae(1.3,2.3,.9,e),0,1.15,0));let w=ae(1.5,.12,1.1,e);w.position.set(0,2.4,.05),w.rotation.x=.25,v.add(w,it(v,tp(e),0,2.5,.05)),v.position.set(4.2,0,-7.2),i.add(v);let b=new se;b.add(it(b,ae(3,2.2,1.4,e),0,1.1,0));let _=new se;return _.add(it(_,mr(1.2,.8,e),-.7,0,0),it(_,mo(3,2,e,[1,5]),.8,0,0)),_.rotation.x=-.6,_.position.set(0,2.25,.2),b.add(_),b.position.set(-12.2,0,.5),b.rotation.y=Math.PI/2,i.add(b),i}function Sv(i,e){[[1.2,.5,0],[.7,.7,0]].forEach(([t,n,s])=>{let r=ne(new Lt(1,.025,4,48),he,e);r.scale.set(t,n,1),r.rotation.z=s,r.position.z=.3,i.add(r)})}var bv={consoles:[[-6.5,-4.5],[6.5,-4.5],[-6.5,1.5],[6.5,1.5],[-6.5,7.5],[6.5,7.5]]};function Ev(i,e){let t=new se;t.name=e;let n=[...i,"console",e],s=(l,c,h,g,f=0)=>(l.position.copy(ie(c,h,g)),l.rotation.order="YXZ",l.rotation.set(f,-h*Pe,0),t.add(l),l),r=ne(Vt(Ki(3.9,5.2,-36,36),1.5,.03),he,n);r.position.y=1.5;let o=ne(Vt(Ki(3.6,5.3,-38,38),.12,.02),he,n);o.position.y=1.62;let a=ne(Vt(Ki(4.8,5.3,-36,36),1.6,.03),he,n);return a.position.y=3.2,t.add(r,o,a),[-24,0,24].forEach(l=>s(Je(1.6,1,.06,.08,n,{border:.08}),3.88,l,.75)),[-24,24].forEach(l=>s(ae(.4,.05,.05,n,St),3.86,l,1)),[-27,-9,9,27].forEach((l,c)=>s(mr(2.1,1.25,n,{traces:3,lit:c%2===0}),4.75,l,2.45,-.18)),s(ae(1.7,.06,.5,n),4.05,0,1.7),s(ae(.2,.06,.25,n),4.05,14,1.7),s(vv(n),4.3,-18,1.68),t.add(it(t,_v(n),0,0,-2.8)),t}function rp(){let i=new se;i.name="mission";let e=["mission"],t=[...e,"energy"];i.add(np(e,{x0:-15,x1:15,z0:-11,z1:11,h:10})),bv.consoles.forEach(([p,u],y)=>{let M=Ev(e,`console:${y+1}`);M.position.set(p,0,u+2.8),i.add(M)});let n=Rs(8,5,e,"screen:flight"),s=tt(.55,.04,e,he,32);s.rotation.x=Math.PI/2,s.position.set(-2.7,-1.3,.3);let r=tt(.45,.04,e,he,32);r.rotation.x=Math.PI/2,r.position.set(2.8,1.3,.3);let o=new xs(bt(-2.4,-.9,.32),bt(-1.2,2,.32),bt(2.3,1.2,.32));n.add(s,r,ne(new ki(o,48,.04,6),he,e));let a=new Hi(Array.from({length:17},(p,u)=>o.getPoint(.55*u/16)));n.add(ne(new ki(a,32,.07,6),he,t));let l=ne(new gs(.14,.45,10),he,t);l.position.copy(o.getPoint(.55)),l.quaternion.setFromUnitVectors(bt(0,1,0),o.getTangent(.55)),n.add(l);let c=ne(new Lt(1,.02,4,48),he,e);c.scale.set(1.1,.5,1),c.position.set(-2.7,-1.3,.32),n.add(c),it(i,n,-9.8,5.8,-11);let h=Rs(9.2,5.6,e,"screen:site");h.add(it(h,ae(8.2,.45,.04,e),0,2.15,.3)),h.add(it(h,ae(.7,.25,.04,t),-3.6,2.15,.34)),h.add(it(h,Je(3.8,1.8,.04,.08,[...e,"soft"]),-2,.8,.28)),[[3.4,1.4],[2.8,1],[1.8,.6]].forEach(([p,u])=>h.add(it(h,ae(p,.12,.04,e,St),.4+p/2,u,.3))),h.add(it(h,ae(1.2,.32,.04,t),1,.1,.3)),[-2.8,0,2.8].forEach((p,u)=>[-.9,-1.9].forEach((y,M)=>h.add(it(h,Je(2.5,.8,.04,.06,(u+M)%3===0?[...e,"soft"]:e,{border:(u+M)%3===0?0:.06}),p,y,.28)))),it(i,h,.6,6.3,-11);let g=Rs(6.4,5,e,"screen:dials");[{value:.66,range:[.55,.85]},{value:.7,range:[.6,.95]},{value:.5,ticks:4,minor:0},{value:.64,centre:!0,ticks:8,minor:1,sweep:240}].forEach((p,u)=>{let y=ji(.75,[...e,"wall-dial"],{ticks:10,minor:1,...p});y.position.set(u%2?1.4:-1.4,u<2?.95:-1,.28),g.add(y)}),it(i,g,10.2,5.8,-11);let f=Rs(8,4.4,e,"screen:rocket"),d=xo().group;d.scale.setScalar(.09),d.rotation.z=-Math.PI/2,d.position.set(-.6,0,.75),f.add(d),it(i,f,-15,6,-5,Math.PI/2);let m=Rs(6,5,e,"screen:list");for(let p=0;p<7;p++)m.add(it(m,ae(.18,.18,.04,p<3?t:e),-2,1.6-p*.5,.3)),m.add(it(m,ae(2.4+p*3%4*.3,.1,.04,e,St),-.3+p*3%4*.15,1.6-p*.5,.3));it(i,m,-15,6,4,Math.PI/2);let x=ji(.55,e,{value:.3,ticks:12,minor:0,sweep:360});return it(i,x,-3.8,9.3,-10.7),i}var es=(i,e,t)=>new L(i,e,t),It=(i,e,t,n)=>(i.position.set(e,t,n),i);function Bl(i=[],{score:e=.86}={}){let t=new se;t.name="cartridge";let n=[...i,"cartridge"],s=ae(3,.7,1.1,[...n,"cart:body"]);t.add(s);let r=ae(3.1,.08,.3,n);It(r,0,-.39,0),t.add(r);let o=Je(1.5,.46,.04,.05,[...n,"cart:label"]);It(o,-.35,0,.55),t.add(o);for(let f=0;f<3;f++)t.add(It(ae(1.1-f*.25,.03,.02,n,St),-.48-f*.12,.12-f*.12,.6));let a=new se;a.name="cart:tools",[-.28,.28].forEach((f,d)=>{let m=tt(.12,.3,[...n,"cart:tools"],he,16);m.rotation.z=Math.PI/2,It(m,1.65,.05,f);let x=ne(new gs(.16,.36,16),he,[...n,"cart:tools"]);x.rotation.z=-Math.PI/2,It(x,1.98,.05,f),a.add(m,x),d===0&&a.add(It(ae(.08,.3,.08,[...n,"cart:tools"]),1.75,.3,f))}),t.add(a);let l=new se;l.name="cart:plug";let c=tt(.26,.3,[...n,"cart:plug"],he,20);c.rotation.z=Math.PI/2,It(c,-1.65,0,0),l.add(c),[-.1,.1].forEach(f=>{let d=tt(.04,.22,[...n,"cart:plug"],St,8);d.rotation.z=Math.PI/2,l.add(It(d,-1.88,f,0))}),l.add(ii([es(-1.82,0,0),es(-2.4,-.1,.1),es(-2.9,-.6,.5),es(-3.5,-.8,.9)],.07,[...n,"cart:plug","energy"])),t.add(l);let h=new se;h.name="cart:clamp",[.55,.95].forEach(f=>{let d=ae(.12,.84,1.24,[...n,"cart:clamp","energy"]);h.add(It(d,f,0,0));let m=ni(1,0,[...n,"cart:clamp"],.06);m.position.set(f,.3,.62),h.add(m)}),t.add(h);let g=ji(.32,[...n,"cart:dial"],{value:e,ticks:5,minor:1,range:[.8,1]});return g.name="cart:dial",g.rotation.x=-Math.PI/2,It(g,-.9,.36,0),t.add(g),t.add(ii([es(-1.2,.36,-.3),es(-1.2,.7,-.3),es(-.7,.7,-.3),es(-.7,.36,-.3)],.05,n)),t}function op(i=[],{slots:e=4,selected:t=1}={}){let n=new se;n.name="model-bay";let s=[...i,"model-bay"],r=e*1.1+.4;n.add(It(ae(r,.2,1.6,s),0,.1,0)),n.add(It(ae(r,.16,1.6,s),0,2.6,0)),[-r/2+.1,r/2-.1].forEach(d=>n.add(It(ae(.2,2.6,1.6,s),d,1.3,0)));for(let d=0;d<e;d++){let m=-r/2+.75+d*1.1,x=new se;x.name=`model:${d+1}`;let p=[...s,`model:${d+1}`];x.add(It(ae(.8,1.7,1.3,p),0,0,0)),x.add(It(Je(.5,.3,.04,.05,p),0,.5,.66)),x.add(It(ae(.5,.06,.04,p,St),0,-.1,.67)),x.add(It(ae(.3,.06,.04,p,St),-.1,-.25,.67));let u=tt(.08,.5,p,he,10);u.rotation.x=Math.PI/2,x.add(It(u,0,-.55,.85)),It(x,m,1.15,0),n.add(x),d<e-1&&n.add(It(ae(.06,2.3,1.5,s),m+.55,1.35,0))}let o=tt(.06,r-.4,s,he,8);o.rotation.z=Math.PI/2,n.add(It(o,0,3,.4));let a=new se;a.name="selector";let l=d=>-r/2+.75+d*1.1,c=[...s,"selector","energy"];a.add(It(ae(.5,.36,.5,c),0,3,.4)),a.add(It(tt(.05,.7,c,he,8),0,2.5,.4)),a.add(It(ae(.5,.08,.2,c),0,2.15,.4)),n.add(a);let h=new se;h.name="indicator",h.add(It(tt(.25,.25,[...s,"indicator"],he,16),r/2-.5,2.8,0)),h.add(It(ne(new on(.2,16,10,0,Math.PI*2,0,Math.PI/2),he,[...s,"indicator","energy"]),r/2-.5,2.92,0)),n.add(h);let g=n.getObjectByName(`model:${t+1}`),f=g.position.clone();return n.userData.set=d=>{a.position.x=l(e-1)+.9+(l(t)-l(e-1)-.9)*d,g.position.set(f.x,f.y+1.9*(1-d),f.z+.9*(1-d))},n.userData.set(1),n}var qe=(i,e,t)=>new L(i,e,t),Qt=kn.r,Tv={rocket:{"stage:1":["rocket",ie(Qt,150,-15),["stages"]],"stage:2":["rocket",ie(Qt,150,8),["stages"]],"stage:3":["rocket",ie(Qt*.62,150,31),["stages"]],"energy-line":["rocket",ie(Qt+.2,112,19),["energy"]],nozzles:["rocket",qe(0,kn.nozzleY-3.6,0),[]],moon:["moon",qe(0,0,0),["target"]],"pillar:pdlc":[null,qe(0,.3,0),["pillars"]],"pillar:platform":[null,ie(3.4,150,-2.6),["pillars"]],"pillar:measure":["rocket",ie(Qt,150,23),["pillars"]],"pillar:people":["rocket",ie(Qt+.1,160,25),["pillars"]],"part:line":["rocket",ie(Qt+.2,112,19),["pin:1"]],"part:bay":["rocket",ie(Qt,140,.5),["pin:1"]],"part:hatch":["rocket",ie(Qt,160,25),["pin:2"]],"part:cabin":["rocket",ie(Qt*.62,150,31.5),["pin:2"]],"part:bays":["rocket",ie(Qt,150,6),["pin:3"]],"part:conduit":["rocket",ie(Qt+.1,170,13.5),["pin:3"]],"part:cockpit":["rocket",ie(Qt*.45,150,35),["pin:4"]],"part:dials":["rocket",ie(Qt,140,23),["pin:4"]]},cockpit:{"inst:throughput":["inst:throughput",qe(0,1.2,.3),["instruments"]],"inst:stability":["inst:stability",qe(0,.3,.2),["instruments"]],"inst:cost":["inst:cost",qe(0,.9,.5),["instruments"]],"inst:productivity":["inst:productivity",qe(0,.5,.3),["instruments"]],"inst:experience":["inst:experience",qe(0,.14,.3),["instruments"]],seats:["seat:1",qe(-.9,4.2,0),["cabin"]],columns:[null,qe(2.4,.4,1.95),["cabin"]],hatch:[null,qe(-5.4,-2.6,1.8),["cabin"]]},classroom:{specialisation:["model",qe(0,0,0),["tiers"]],"deep-dives":["blackboard",qe(-2.4,.3,.3),["tiers"]],hackathon:["simulator",qe(0,5.6,0),["tiers"]],"self-paced":["desk:5",qe(.3,1.7,.05),["tiers"]]},mission:{"screen:site":["screen:site",qe(0,0,.3),["screens"]],"screen:flight":["screen:flight",qe(0,0,.3),["screens"]],"screen:dials":["screen:dials",qe(0,0,.3),["screens"]],"screen:rocket":["screen:rocket",qe(0,0,.3),["screens"]],"screen:list":["screen:list",qe(0,0,.3),["screens"]],console:["console:6",qe(0,3.2,-4.2),["screens"]]},engine:{capabilities:["cap:design:1",qe(0,.5,0),["capabilities"]],"cart:tools":["cartridge",qe(1.95,.05,.28),["cartridge"]],"cart:label":["cartridge",qe(-.35,0,.6),["cartridge"]],"cart:plug":["cartridge",qe(-2.9,-.6,.5),["cartridge"]],"cart:clamp":["cartridge",qe(.75,.42,0),["cartridge"]],"cart:dial":["cartridge",qe(-.9,.4,0),["cartridge"]],"bay:manual":["model:2",qe(0,.9,.65),["bay"]],"bay:selector":["selector",qe(0,3.2,.4),["bay"]],"bay:indicator":["indicator",qe(2.1,3,0),["bay"]],"bay:context":["nexus",qe(0,.4,0),["bay"]]},contract:{"zone:human":[null,ie(3.1,-60,.4),["zones"]],"zone:hybrid":[null,ie(3.1,36,.4),["zones"]],"zone:ai":[null,ie(3.1,96,.4),["zones"]],ceiling:[null,ie(3.4,69.6,.9),["ceiling"]],needle:[null,ie(2.6,69.6,.4),["needle"]],"ring:score":[null,ie(2.05,-96,.35),["rings"]],"ring:rule":[null,ie(1.65,-72,.35),["rings"]],"ring:ceiling":[null,ie(1.25,-48,.35),["rings"]]}},wv={"pin:1":ie(Qt+.6,125,14),"pin:2":ie(Qt+.6,178,23.5),"pin:3":ie(Qt+.6,160,2),"pin:4":ie(Qt*.5,140,34.5)},Av=[{sets:["rocket","cockpit"],shots:["nose-window","cockpit-hatch"]}],ap=[{sets:["classroom","mission"],pivot:-10.8}],cp={pad:{az:150,elev:6,dist:320,k:-44,at:qe(0,16,0)},"rocket-flight":{az:120,elev:18,dist:235,k:-33,at:qe(0,30,0),roll:-34},"rocket-hero":{az:150,elev:6,dist:250,k:38,at:qe(-12,24,-30),roll:-8},"rocket-nose":{az:150,elev:18,dist:70,k:-10,at:qe(0,24,0),roll:4},"rocket-open":{az:145,elev:22,dist:130,k:-18,at:qe(0,12,0),roll:-12},"rocket-moon":{az:135,elev:-4,dist:215,k:-34,at:qe(0,30,0),roll:-24},capability:{az:205,elev:40,dist:44,k:-6,at:ie(5.2,144,0)},"model-bay":{az:210,elev:14,dist:70,k:-10,at:qe(3,-5,1)},"nose-window":{az:134,elev:2,dist:2.2,k:0,at:ie(Qt,134,25.1)},"cockpit-hatch":{az:262,elev:12,dist:24,k:0,at:qe(1.5,0,.2)},cockpit:{az:215,elev:34,dist:64,k:-9,at:qe(.5,-.6,1.4)},"cockpit-panel":{az:270,elev:8,dist:18.5,k:-3.6,at:qe(4.3,.95,0)},classroom:{az:135,elev:33,dist:96,k:-13,at:qe(-4,1.5,-2)},mission:{az:135,elev:33,dist:100,k:-14,at:qe(0,2,0)},"telescope-right":{az:150,elev:18,dist:16,k:-1.5,at:qe(0,.9,0),roll:8},"mission-console":{az:200,elev:22,dist:72,k:-10,at:qe(0,2,2)},"mission-wall":{az:168,elev:10,dist:46,k:0,at:qe(-3.5,6.2,-11)},contract:{az:180,elev:56,dist:34,k:0,at:qe(-3,0,0)}},lp=i=>Math.atan2(-Math.cos(i*Pe),-Math.sin(i*Pe));function Rv(i){let e=i.getObjectByName("wheel"),t=new se;t.name="capabilities";let n=(l,c,h)=>{l.scale.setScalar(.32),l.position.copy(ie(c,h,-.16)),l.rotation.y=lp(h),t.add(l)};Object.entries({discover:2,design:3,develop:3,deploy:2,deepen:2}).forEach(([l,c],h)=>{for(let g=0;g<c;g++){let f=Bl(["capabilities",`cap:${l}`]);f.name=`cap:${l}:${g+1}`,n(f,Nt.rOut+.3,Kt(h)+(g-(c-1)/2)*13)}});let r=Bl(["capabilities","cap:drop"]);r.name="cap:drop:1",n(r,xt.rOut+.3,(xt.from+xt.to)/2),e.add(t);let o=Bl(["cartridge"]);o.position.copy(ie(Nt.rOut+2.6,Kt(2),.15)),o.rotation.y=lp(Kt(2)),e.add(o);let a=op(["bay"],{selected:1});return a.scale.setScalar(1.05),a.position.set(5.4,-1.1,2.4),a.rotation.y=-.45,(i.getObjectByName("layer:L3")||i).add(a),{cartridges:t,cartridge:o,bay:a}}function hp(i){let e=new se;e.name="sets";let t=xo(),n=Jf(),s=Kf(7);s.position.set(-40,62,-95);let r={rocket:new se,cockpit:ip(),classroom:sp(),mission:rp(),contract:ep({score:0,rule:100,ceiling:100})};r.rocket.add(t.group,n,s);let o=ap.map(({sets:[f,d],pivot:m})=>{let x=new se;return x.name=`turntable:${f}:${d}`,x.position.z=m,r[f].position.z=-m,r[d].position.z=m,r[d].rotation.y=Math.PI,e.add(x),{table:x,a:f,b:d}});Object.entries(r).forEach(([f,d])=>{d.name=`set:${f}`,d.visible=!1;let m=o.find(x=>x.a===f||x.b===f);(m?m.table:e).add(d)});let a=null,l=Rv(i);Cv(r,i),Object.entries(wv).forEach(([f,d])=>{let m=As(f.split(":")[1],[f,"pins"],"label-pin");m.position.copy(d),t.group.add(m)});let c={separate:0,open:0,score:0,rule:100,ceiling:100,select:1,turn:0},h={...c},g=[];return{group:e,show(f,d){a=f,Object.entries(r).forEach(([p,u])=>u.visible=p===f);let m=o.find(p=>p.a===f||p.b===f);m&&(h.turn=f===m.b?1:0),t.group.visible=d.includes("rocket"),n.visible=d.includes("pad"),s.visible=d.includes("moon");let x=f==="rocket";l.cartridges.visible=x&&d.includes("cartridges"),l.cartridge.visible=x&&d.includes("cartridge"),l.bay.visible=x&&d.includes("bay")},joined(f,d){return f!==d&&ap.some(m=>m.sets.includes(f)&&m.sets.includes(d))},portal(f,d){let m=Av.find(x=>f!==d&&x.sets.includes(f)&&x.sets.includes(d));return m?{out:m.shots[m.sets.indexOf(f)],in:m.shots[m.sets.indexOf(d)]}:null},setTarget(f){f.rings&&(g=f.rings),Object.keys(h).forEach(d=>Number.isFinite(f[d])&&(h[d]=f[d]))},update(f){let d=!1;return Object.keys(c).forEach(m=>{let x=h[m]-c[m];Math.abs(x)<.001*(["score","rule","ceiling"].includes(m)?100:1)?c[m]=h[m]:(c[m]+=x*f,d=!0)}),$f(t,c),r.contract.userData.set(c,g),l.bay.userData.set(c.select),o.forEach(({table:m,a:x,b:p})=>{m.rotation.y=Math.PI*c.turn;let u=c.turn>0&&c.turn<1;(a===x||a===p)&&(r[x].visible=a===x||u,r[p].visible=a===p||u)}),d}}}function Cv(i,e){let t=ho?.leads||{};Object.entries(Tv).forEach(([n,s])=>{let r=i[n]||e;Object.entries(s).forEach(([o,[a,l,c]])=>{if(!t[o])return;let[h,g=""]=[].concat(t[o]),f=bn(h,[o,...c],"label-set",g,g?"notes":"");f.userData.key=o,f.userData.reach=1.4,f.position.copy(l),(a&&(r.getObjectByName(a)||e.getObjectByName(a))||r).add(f)})})}var Iv=1200;function Bh(){let i={};return jn.forEach(e=>i[e.id]=0),{explode:0,telescope:0,split:i,idea:0,presence:{wheel:1,nexus:1,bands:1}}}function up(i,e={}){let t=new se;i.add(t);let n=Df(),s=Gf(),r=Vf();t.add(n,s.group,r.group);let o=e.sets?hp(t):null;o&&t.add(o.group);let a=n.getObjectByName("idea");Pv(n,s,r);let l=ti.slice(0,5).map(y=>{let M=[];return n.traverse(v=>v.isMesh&&(v.userData.tags||[]).includes(`gate:${y.id}`)&&M.push(v)),M}),c=l.map(()=>0),h=null,g=[],f=[],d=[];t.traverse(y=>{y.isMesh&&y.material.uniforms&&y.material.uniforms.dim?g.push(y):y.isCSS2DObject&&y.userData.arc?f.push(y):y.isCSS3DObject&&d.push(y)});let m=null,x=null,p=Bh();function u(y){let{bottom:M,bandMid:v,layerY:w}=Hf(s,y.explode,y.split);Wf(r,M,y.telescope),a.position.copy(Lh(y.idea));let b=y.presence;return n.visible=b.wheel>.001,s.group.visible=b.bands>.001,s.group.position.y=-8*(1-b.bands),r.group.visible=b.nexus>.001,r.group.position.y=-10*(1-b.nexus),{bottom:M,bandMid:v,layerY:w}}return u(p),{root:t,sets:o,get state(){return p},set(y){return p=y,u(y)},focus(y,M,v){let w=`${y}|${v}`;return w!==m&&(m=w,x=vf(g,y,v)),Mf(g,x,M)},align(y){Rf(f,y),Cf(d,y)},flashGates(y,M){h!==null&&y>h&&y-h<180&&ti.slice(0,5).forEach((v,w)=>{((dr(w)-h)%360+360)%360<y-h&&(c[w]=M+Iv)}),h=y,l.forEach((v,w)=>{let b=M<c[w];v.forEach(_=>{let S=_.material.uniforms;_.userData.energized||(S.role.value=b?di.red:_.userData.role)})})},relayout(){n.userData.relayout()},spin(y){n.rotation.y=-y,r.group.rotation.y=y*1.6},energize(y){Sf(t,y)},charge(y,M){bf(t,y,M)},labels(y){wf(t,y)}}}function Pv(i,e,t){Ah.forEach(n=>{let s=n.parts[0],r=bn(n.name,`role:${n.id}`,"label-role",n.purpose,`role:${n.id}`);r.userData.reach=1.6;let[o,a]=s.split(":");if(o==="layer"){let l=e.group.getObjectByName(s);r.position.copy(l.userData.anchor||ie(1.62,120,0)),l.add(r)}else if(o==="register"){let l=t.registers.find(c=>c.userData.register===a);r.position.copy(l.position),r.userData.tube=l.userData.tube,t.group.add(r),t.registers.push(r)}else s==="gates"?(r.position.copy(ie(2.85,dr(2),.14)),i.add(r)):s==="spine"&&(r.userData.track=e.spine.name.userData.track,e.spine.group.add(r))})}function _o(i,e,t){return i+(e-i)*t}function dp(i,e,t){let n={};Object.keys(i.split).forEach(r=>n[r]=_o(i.split[r],e.split[r],t));let s={};return Object.keys(i.presence).forEach(r=>s[r]=_o(i.presence[r],e.presence[r],t)),{explode:_o(i.explode,e.explode,t),telescope:_o(i.telescope,e.telescope,t),split:n,idea:_o(i.idea,e.idea,t),presence:s}}var zl=(i,e,t)=>new L(i,e,t);function an(i,e,t,n,s=0){return{pos:ie(t*Math.cos(e*Pe),i,t*Math.sin(e*Pe)).add(n),target:n,roll:s}}function si(i,e,t=0){return ie(e,i-90,t)}var zh={hero:an(135,22,29,si(135,0,-1.4),10),"hero-right":an(135,22,35.5,si(135,-6,-1.4),10),"top-right":an(165,62,31,si(165,-3.4,.4)),nexus:an(150,30,17,zl(0,.6,0),6),"nexus-right":an(150,30,17,si(150,-1.6,.6),6),"top-wide":an(165,80,34,zl(0,0,0)),"nexus-top":an(165,88,11,zl(0,0,0)),telescope:an(150,18,16,zl(0,.9,0),8),"telescope-left":an(150,18,16,si(150,1.5,.9),8),side:an(210,18,51,si(210,.5,-6.8)),exploded:an(200,20,47,si(200,0,-7.5),36),"exploded-left":an(200,20,54,si(200,-2,-6.6),-32)};function Lv(i){if(i==="drop")return an((xt.from+xt.to)/2,40,14,Ll());let e=Kt(ei.findIndex(t=>t.id===i));return an(e,42,23,ie(.6,e,-.8),4)}function Dv(i){return an(210,20,34,si(210,-3.2,i),10)}function Nv(i){return an(210,34,42,si(210,-3.8,i/2),10)}function Gl(i,e){if(zh[i])return zh[i];let t=cp[i];if(t)return an(t.az,t.elev,t.dist,t.at.clone().add(si(t.az,t.k)),t.roll||0);let[n,s]=i.split(":");return n==="phase"?Lv(s):n==="band"?Dv(e.bandMid[s]):n==="band-high"?Nv(e.bandMid[s]):n==="spine"?an(Gt.angle+20,12,30,ie(Gt.r,Gt.angle,-8),20):zh.hero}function Gh(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function fp(i){return{r:Math.hypot(i.x,i.z),a:Math.atan2(i.x,-i.z),y:i.y}}function pp(i,e,t){let n=fp(i.pos),s=fp(e.pos),r=s.a-n.a;r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI);let o=n.r+(s.r-n.r)*t,a=n.a+r*t,l=new L(o*Math.sin(a),n.y+(s.y-n.y)*t,-o*Math.cos(a)),c=(i.roll||0)+((e.roll||0)-(i.roll||0))*t;return{pos:l,target:i.target.clone().lerp(e.target,t),roll:c}}var mp=[[1,-1],[1,-1.7],[1,-2.4],[1,1],[1,1.7],[1,-3.1],[-1,-1],[-1,-1.7],[-1,1],[-1,-2.4]];function gp(i,e){let t=[];i.traverse(m=>{let x=m.userData.leader;x&&(e.appendChild(x),t.push({obj:m,el:x,line:x.querySelector("polyline"),box:x.querySelector(".lead-box"),text:x.querySelector(".lead-text"),note:x.querySelector(".lead-note"),ex:null,ey:null,size:null}))});let n=new L,s=new L,r=new L,o=new L,a=new L;function l(m,x){let[p,u]=m.userData.track;o.copy(p).applyMatrix4(m.parent.matrixWorld),a.copy(u).applyMatrix4(m.parent.matrixWorld);let y=s.copy(o).project(x).y,M=s.copy(a).project(x).y,v=Math.abs(M-y)<1e-6?.5:Math.max(0,Math.min(1,(0-y)/(M-y)));return n.copy(o).lerp(a,v)}function c(m){for(let x=m;x;x=x.parent)if(!x.visible)return!1;return!0}function h(m,x){return x.some(p=>m.x<p.x+p.w&&m.x+m.w>p.x&&m.y<p.y+p.h&&m.y+m.h>p.y)}function g(m,x,p,u,y,M){let v=y*x,w=Math.max(4,8*Math.min(x/1920,p/1080)),b=Math.max(...m.map(P=>Math.max(P.size[0],P.size[2]))),[_,S]=u>0?[v,v+b]:[v-b,v],I=-1/0;M.forEach(P=>{P.x<S&&P.x+P.w>_&&P.y<p*.4&&(I=Math.max(I,P.y+P.h))});let R,N=(P,C)=>(R=I,m.map((B,O)=>{let[,$,,H]=B.size,Z=O>0&&B.obj.userData.band!==m[O-1].obj.userData.band?C:0,K=Math.max(B.ay-$,R+P+Z);return R=K+$+H,K})),z;for(let[P,C]of[[w,2*w],[w,0],[w/2,0]])if(z=N(P,C),R<=p*.92)break;let W=Math.max(0,R-p*.92);return m.map((P,C)=>{let[B,O,$,H]=P.size,Z=z[C]-W;return{ex:v-P.ax,ey:Z+O-P.ay,r:{x:u>0?v:v-Math.max(B,$),y:Z,w:Math.max(B,$),h:O+H}}})}function f(m,x,p,u=[],y=0,M=0,v=.2,w=0,b={}){let _=!1,I=46*Math.min(x/1920,p/1080),R=6,N=u.slice(),z=[];t.forEach(C=>{C.obj.userData.track?l(C.obj,m):C.obj.getWorldPosition(n);let B=s.copy(n).project(m),O=c(C.obj)&&B.z<1;if(C.el.style.visibility=O?"":"hidden",!O||!C.el.classList.contains("is-on")){C.ex=null;return}r.set(0,n.y,0);let $=r.project(m);C.ax=(B.x+1)/2*x,C.ay=(1-B.y)/2*p,C.side=y||(C.ax>=($.x+1)/2*x?1:-1),C.down=C.ay>(1-$.y)/2*p?-1:1;let H=C.note&&C.el.classList.contains("show-note");if(!C.size||C.noted!==H){let Z=C.box.offsetWidth,K=C.text.offsetTop+C.text.offsetHeight;C.size=[Z,K,Z,C.box.offsetHeight-K],C.noted=H}z.push(C)}),z.sort((C,B)=>(C.obj.userData.band??0)-(B.obj.userData.band??0)||C.ay-B.ay);let W=y&&M?g(z,x,p,y,M,u):null,P=z.map(C=>{let B=b[C.obj.userData.key];if(!B)return null;let[O,$,H,Z]=C.size,K=Math.max(O,H),xe=B[0]*x-C.ax,Ae=B[1]*p-C.ay,q={x:xe>0?C.ax+xe:C.ax+xe-K,y:C.ay+Ae-$,w:K,h:$+Z};return N.push(q),{ex:xe,ey:Ae,r:q}});return z.forEach((C,B)=>{let[O,$,H,Z]=C.size,K=Math.max(O,H),xe=I*(C.obj.userData.reach||1),Ae=P[B]||(W?W[B]:null),q=w?[[1,"drop"],[-1,"drop"],...mp]:mp;if(!Ae)for(let[Ce,Fe]of q){if(y&&Ce<0)continue;let ye=Ce*C.side,Be=ye*(Fe==="drop"?Math.max(xe,x*.12):xe),yt=Fe==="drop"?p*w-C.ay:Fe*I*C.down,Ue={x:ye>0?C.ax+Be:C.ax+Be-K,y:C.ay+yt-$,w:K,h:$+Z};if(Ue.x>R&&Ue.x+Ue.w<x-R&&Ue.y>R&&Ue.y+Ue.h<p-R&&(Ae||(Ae={ex:Be,ey:yt,r:Ue}),!h(Ue,N))){Ae={ex:Be,ey:yt,r:Ue};break}}Ae||(Ae={ex:C.side*xe,ey:-I*C.down,r:{x:0,y:0,w:0,h:0}}),P[B]||N.push(Ae.r),C.ex===null?(C.ex=Ae.ex,C.ey=Ae.ey):(Math.abs(Ae.ex-C.ex)+Math.abs(Ae.ey-C.ey)>.5&&(_=!0),C.ex+=(Ae.ex-C.ex)*v,C.ey+=(Ae.ey-C.ey)*v),C.el.style.transform=`translate(${C.ax.toFixed(1)}px, ${C.ay.toFixed(1)}px)`,C.line.setAttribute("points",`0,0 ${C.ex.toFixed(1)},${C.ey.toFixed(1)}`);let _e=y?y<0:C.ex<0;C.box.style.transform=`translate(${C.ex.toFixed(1)}px, ${(C.ey-C.size[1]).toFixed(1)}px) translate(${_e?-100:0}%, 0)`,C.box.style.textAlign=_e?"right":"left"}),_}function d(){t.forEach(m=>m.size=null)}return{update:f,resize:d}}function On(i){return(i||"").split(",").map(e=>e.trim()).filter(Boolean)}function xp(i){return[...i.querySelectorAll(":scope > .stop")].map((e,t)=>({el:e,index:t,data:e.dataset,beats:[...e.querySelectorAll(":scope > .beat")].map(n=>n.dataset),card:e.querySelector(".card"),anchor:new L,state:Uv(e.dataset)}))}function Hl(i,e){return Object.assign({},i.data,i.beats[e]||{})}function Uv(i){let e=Bh();e.explode=Number(i.explode||0),e.telescope=Number(i.telescope||0),i.split&&(e.split[i.split]=1);let t=i.parts?On(i.parts):Object.keys(e.presence);return Object.keys(e.presence).forEach(n=>e.presence[n]=t.includes(n)?1:0),e}function _p(i){if(!i||i==="run")return null;if(i==="drop")return dr(4);let e=ei.findIndex(s=>s.id===i);if(e>=0)return Kt(e);let t=ur.find(s=>s.name===i);if(t)return t.drop?dr(4):t.angle;let n=Number(i);return Number.isFinite(n)?n:null}function yp(i,e){let[t,n]=(i||"").split(":");return t==="phase"&&n==="drop"?Ll(.4):t==="phase"?ie(Nt.rOut+.9,Kt(ei.findIndex(s=>s.id===n)),.4):t==="band"?ie(kt.rOut+1.2,90,e.bandMid[n]):t==="spine"?ie(Gt.r+.8,Gt.angle,-2.2):t==="rim"?ie(Nt.rOut+1.2,Number(n),.6):t==="nexus"?new L(0,1.4,0):new L(0,0,0)}function vp(i){let e={};return On(i).forEach(t=>{let[n,s]=t.split("=");e[n]=Number(s)||0}),e}function Mp(i){let e={};return On(i).forEach(t=>{let[n,s]=t.split("=");e[n]=s.split("/").map(Number)}),e}function Sp(i,e){let t=jn.find(s=>s.id===i);if(!t||!e)return[-1e3,1e3];let n=t.layers.map(s=>e.layerY[s.id]);return[Math.min(...n)-.3,Math.max(...n)+.45]}var bp=.04;function Ep(i,e){let t=new Map,n=new ResizeObserver(f=>{f.forEach(d=>t.set(d.target,[d.target.offsetWidth,d.target.offsetHeight])),e()}),s=[],r=new L,o=null,a=document.createElement("div");a.style.cssText="position:fixed;visibility:hidden;padding:0 env(safe-area-inset-right,0px) 0 env(safe-area-inset-left,0px)",document.body.appendChild(a);let l=()=>{let f=getComputedStyle(a);return[parseFloat(f.paddingLeft)||0,parseFloat(f.paddingRight)||0]};function c(f){let d=f.card;d&&(d.classList.add(`card-${f.data.side||"right"}`),i.appendChild(d),n.observe(d),s.push(d))}function h(f){s.forEach(d=>d.classList.toggle("is-on",d===f.card)),o=null}function g(f,d,m,x=null){let p=f.card;if(!p)return;let u=window.innerWidth,y=window.innerHeight,M=f.data.side||"right",[v,w]=t.get(p)||[p.offsetWidth,p.offsetHeight],b,_;if(f.data.anchor==="screen")b=M==="left"?u*.07:M==="center"?(u-v)/2:u*.93-v,_=f.data.dock==="bottom"?y*.88-w:(y-w)/2;else{r.copy(f.anchor).project(d);let N=(r.x+1)/2*u,z=(1-r.y)/2*y,W=u*.02;b=M==="left"?N-v-W:M==="center"?N-v/2:N+W,_=z-w/2}let[S,I]=l();b=Math.max(Math.max(u*bp,S+8),Math.min(Math.min(u*(1-bp),u-I-8)-v,b)),_=Math.max(y*.12,Math.min(y*.88-w,_));let R=!1;return m&&b<m.x+m.w&&_<m.y+m.h&&(m.y+m.h+w<y*.9?_=m.y+m.h:x&&x.y+x.h+w<y*.9?(_=Math.max(_,x.y+x.h),R=!0):b=m.x+m.w),p.style.transform=`translate(${Math.round(b)}px, ${Math.round(_)}px)`,o={x:b,y:_,w:v,h:w},R}return{add:c,show:h,place:g,get box(){return o}}}var Tp="deck-theme";function wp(i,e){let t={nav:document.querySelector(".hud-nav"),section:document.querySelector(".crumb-act"),part:document.querySelector(".crumb-part"),bar:document.querySelector(".hud-acts"),checklist:document.querySelector(".hud-checklist"),source:document.querySelector(".hud-source"),counter:document.querySelector(".hud-counter")},n=[];i.forEach(x=>{let p=n[n.length-1];p&&p.section===x.data.section?p.stops.push(x):n.push({section:x.data.section,stops:[x]})}),n.forEach(x=>{let p=document.createElement("li");p.style.flexGrow=x.stops.length,p.innerHTML="<span></span>",t.bar.appendChild(p)}),uo.forEach(x=>{let p=document.createElement("li");p.dataset.concern=x.id,p.textContent=x.name,t.checklist.appendChild(p)}),document.querySelectorAll(".card .concerns:empty").forEach(x=>{uo.forEach(p=>{let u=document.createElement("li");u.dataset.concern=p.id,u.textContent=p.question,x.appendChild(u)})});let s=document.querySelector(".hud-theme"),r=document.body.dataset.themeDefault||"light",o=null;if(s){try{r=localStorage.getItem(Tp)||r}catch{}s.addEventListener("click",()=>{r=r==="dark"?"light":"dark";try{localStorage.setItem(Tp,r)}catch{}o&&a(o)})}function a(x){document.body.dataset.theme=x.data.theme||r,s?.setAttribute("aria-pressed",String(document.body.dataset.theme!=="light"))}let l;function c(x,p){let u=Hl(x,p),y=fo.findIndex(b=>b.id===x.data.section);t.section.textContent=y>=0?`${String(y+1).padStart(2,"0")} \xB7 ${fo[y].name}`:"",t.part.textContent=u.crumb||"";let M=n.findIndex(b=>b.stops.includes(x)),v=n[M].stops.indexOf(x)+(p+1)/Math.max(1,x.beats.length);t.bar.querySelectorAll("li").forEach((b,_)=>{let S=_<M?1:_>M?0:v/n[M].stops.length;b.firstChild.style.width=`${(S*100).toFixed(1)}%`}),t.bar.dataset.ready||requestAnimationFrame(()=>requestAnimationFrame(()=>t.bar.dataset.ready="1"));let w=new Set(On(u.answers));t.checklist.querySelectorAll("li").forEach(b=>{b.classList.toggle("is-now",w.has(b.dataset.concern))}),t.source.textContent=[x.data.source,uf].filter(Boolean).join(" \xB7 "),t.counter.textContent=`${x.index+1} / ${i.length}`,o=x,a(x),document.body.dataset.hud=u.hud||"",l=void 0}let h=document.body.dataset.hudCompact!==void 0,g=0;function f(x=0,p=!!document.body.dataset.hudTight){let u=!!document.body.dataset.hudTight;if(l===void 0){let v=t.nav.getBoundingClientRect();!u&&document.body.dataset.hud!=="crumb"&&(g=t.checklist.getBoundingClientRect().height+parseFloat(getComputedStyle(t.nav).rowGap||0)),l=document.body.dataset.hud==="bare"?null:{x:v.left,y:v.top,w:v.width,h:v.height}}if(!l)return null;let y=document.body.dataset.hud==="crumb"?0:g,M=p===u?l.h:p?l.h-y:l.h+y;return{x:l.x-x,y:l.y-x,w:l.w+2*x,h:M+2*x}}function d(x){x=h&&x&&document.body.dataset.hud!=="crumb",!!document.body.dataset.hudTight!==x&&(x?document.body.dataset.hudTight="":delete document.body.dataset.hudTight,l=void 0)}function m(x){let p=x&&x.querySelector(".is-shown .concerns");!p||e||document.body.dataset.hud||t.checklist.querySelectorAll("li").forEach((u,y)=>{let M=p.querySelector(`[data-concern="${u.dataset.concern}"]`).getBoundingClientRect(),v=u.getBoundingClientRect();u.animate([{transform:`translate(${M.left-v.left}px, ${M.top-v.top}px)`,opacity:.5},{transform:"none",opacity:1}],{duration:700,delay:y*60,easing:"cubic-bezier(0.65, 0, 0.35, 1)",fill:"backwards"})})}return{update:c,rect:f,tighten:d,compact:h,dock:m,invalidate(){l=void 0}}}function Ap(i,e){return`#${i+1}${e>0?`.${e+1}`:""}`}function Hh(i){let[e,t]=location.hash.slice(1).split(".").map(Number);return[Number.isInteger(e)&&e>=1&&e<=i?e-1:0,Number.isInteger(t)&&t>=1?t-1:0]}function Rp(i){document.addEventListener("keydown",n=>{if(!(n.altKey||n.ctrlKey||n.metaKey)&&!(n.target.closest?.("button")&&[" ","Enter"].includes(n.key))){if(["ArrowRight","ArrowDown","PageDown"," ","Enter"].includes(n.key))i.next();else if(["ArrowLeft","ArrowUp","PageUp","Backspace"].includes(n.key))i.previous();else if(n.key==="Home")i.go(0);else if(n.key==="End")i.go(i.count-1);else return;n.preventDefault()}});let e=null,t=!1;document.addEventListener("touchstart",n=>{let s=n.touches[0];e=n.touches.length===1&&!n.target.closest("a, button")?{x:s.clientX,y:s.clientY,at:performance.now()}:null},{passive:!0}),document.addEventListener("touchend",n=>{if(t||(t=!0,document.documentElement.requestFullscreen?.({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})),!e||n.touches.length)return;let s=n.changedTouches[0],r=s.clientX-e.x,o=s.clientY-e.y;Math.abs(r)>40?(r<0?i.next:i.previous)():Math.hypot(r,o)<10&&performance.now()-e.at<500&&(s.clientX<window.innerWidth/2?i.previous:i.next)(),e=null}),window.addEventListener("hashchange",()=>{let[n,s]=Hh(i.count);i.go(n,!1,s)})}var Vn=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Np=window.matchMedia("(pointer: coarse) and (max-height: 600px), (pointer: coarse) and (max-width: 600px)"),xr=Vn?0:1600,Up=document.getElementById("stage"),ts=new bl({antialias:!1,alpha:!0});Up.appendChild(ts.domElement);var ql=new Cl;ql.domElement.className="engraving";Up.appendChild(ql.domElement);var _r=new Al;_r.domElement.className="labels";document.body.appendChild(_r.domElement);var Ls=new fs;Ls.matrixWorldAutoUpdate=!1;var Yl=yf(ts),kh=22,Vh=!!document.querySelector("#stops [data-set]"),Tn=new _n(kh,1,Vh?.5:.1,Vh?2e3:300),Et=up(Ls,{sets:Vh}),Yh=gp(Et.root,_r.domElement),is=xp(document.getElementById("stops")),vo=Ep(document.getElementById("cards"),()=>$l(100));is.forEach(vo.add);var ns=wp(is,Vn),Tt=null,Ns=0,Dt={},Fp=null,Op=[],Wh=[],Cp=[],Vl=!1,Ds=null,mn=null,Bn=null,Wl=0,Ii={pos:new L(0,30,.01),target:new L},yr=Ii,Mo=Ii,Xl=null,vr=0,So=xr,Bp=1100,bo=null;function zp(){let{index:i,toBeat:e,via:t}=bo;bo=null,ss(i,!0,e,!0),yr=Gl(t.in,Ds),vr=performance.now(),So=Bp}function ss(i,e=!1,t=0,n=!1){bo&&zp();let s=is[Math.max(0,Math.min(is.length-1,i))],r=Math.max(0,Math.min(s.beats.length-1,t<0?s.beats.length-1:t));if(s===Tt){r!==Ns&&Ip(r);return}let o=!Tt||s.index>Tt.index,a=Tt;Tt=s;let l=!!a&&Cs(a)!==Cs(s)&&!Et.sets?.joined(Cs(a),Cs(s)),c=l&&!e&&!Vn&&Et.sets?Et.sets.portal(Cs(a),Cs(s)):null;if(c){Tt=a,bo={index:s.index,toBeat:r,via:c},yr=Ii,Mo=Gl(c.out,Ds),Xl=c.out,vr=performance.now(),So=Bp,vo.show({}),Et.labels([]),Vl=!0;return}mn=Et.state,Number.isFinite(mn.idea)||(mn.idea=0),Zl=0,Bn={...s.state,split:{...s.state.split},presence:{...s.state.presence}};let h=_p(s.data.idea),g=h===null?mn.idea:h;o&&g<mn.idea-.01&&(g+=360*Math.ceil((mn.idea-g)/360)),!o&&g>mn.idea+.01&&(g-=360*Math.ceil((g-mn.idea)/360)),Bn.idea=g,Ds=Et.set(Bn),Et.set(mn),Xl=null,vo.show(s),s.anchor.copy(yp(s.data.anchor,Ds)),Wl=e||l||xr===0?-1/0:performance.now(),Et.sets&&Et.sets.show(Cs(s),On(s.data.parts)),Ip(r,!0),Et.sets&&(e||l)&&Et.sets.update(1),l&&(Ii=yr=Mo,vr=-1/0,(!Vn||n)&&(document.body.classList.add("is-cut"),requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove("is-cut"))))),a&&!e&&ns.dock(a.card),Vp=performance.now()+xr}function Cs(i){return i.data.set||"rocket"}var Is=(i,e)=>i===void 0||i===""?e:Number(i);function Ip(i,e=!1){Ns=i;let t=Tt;Dt=Hl(t,i);let n=Is(Dt.telescope,t.state.telescope);Bn&&Bn.telescope!==n&&(e||(mn=Et.state,Number.isFinite(mn.idea)||(mn.idea=0),Zl=0,Wl=xr===0?-1/0:performance.now()),Bn={...Bn,split:{...Bn.split},presence:{...Bn.presence},telescope:n,idea:e?Bn.idea:mn.idea},Ds=Et.set(Bn),Et.set(mn));let s=Dt.shot||"hero";s!==Xl&&(Xl=s,yr=Ii,Mo=Gl(s,Ds),vr=e&&Wl===-1/0?-1/0:performance.now(),So=xr),Fp=Dt.focus?On(Dt.focus):null,Op=On(Dt.context),Et.labels(On(Dt.labels)),Vl=!0,Et.energize(On(Dt.energize)),Et.charge(On(Dt.pulse),vp(Dt.pulseLag)),gf(...Sp(Dt.pulseBand,Ds)),Et.sets&&Et.sets.setTarget({separate:Is(Dt.separate,0),open:Is(Dt.open,0),score:Is(Dt.score,0),rule:Is(Dt.rule,100),ceiling:Is(Dt.ceiling,100),rings:On(Dt.rings),select:Is(Dt.select,1)}),ns.update(t,i),t.card&&(t.card.querySelectorAll("[data-beat]").forEach(r=>r.classList.toggle("is-now",Number(r.dataset.beat)===i)),Ov(t,i)),history.replaceState(null,"",Ap(t.index,i)),$l(1e3)}var Fv=200;function Ov(i,e){let t=[...i.card.querySelectorAll("[data-from]")],n=r=>t.forEach(o=>o.classList.toggle("is-shown",r>=Number(o.dataset.from)));if(!t.some(r=>r.classList.contains("is-shown")!==e>=Number(r.dataset.from))||!Np.matches||Vn){n(e);return}i.card.classList.add("is-swapping"),setTimeout(()=>{Tt===i&&n(Ns),requestAnimationFrame(()=>requestAnimationFrame(()=>i.card.classList.remove("is-swapping")))},Fv)}function Gp(){Tt&&(Ns<Tt.beats.length-1?ss(Tt.index,!1,Ns+1):Tt.index<is.length-1&&ss(Tt.index+1))}function Hp(){Tt&&(Ns>0?ss(Tt.index,!1,Ns-1):Tt.index>0&&ss(Tt.index-1,!1,-1))}var fi=0,kp=!1,Pp=0,Lp=Vn?0:.06,Zl=0,Bv=Vn?0:24,yo=0;function kl(i){return 1-Math.exp(-i*yo)}function zv(i){yo=Math.min(.1,(i-Pp)/1e3||0),Pp=i,Tt&&Tt.data.idle!==void 0?fi+=Lp*yo:(fi=Math.atan2(Math.sin(fi),Math.cos(fi)),fi=Math.abs(fi)<1e-4?0:fi+(0-fi)*Math.min(1,yo*3)),kp=Lp>0&&(fi!==0||Tt&&Tt.data.idle!==void 0),Et.spin(fi),Tt&&Tt.data.idea==="run"&&(Zl+=Bv*yo)}var Gv=2.6,Hv=3.2,Vp=0,Xh=null;function kv(i){let e=(i-Vp)/1e3;mf(Xh!==null?Xh:Tt&&Dt.pulse&&!Vn&&e>0?e%Hv*Gv:-10)}function Vv(){let i=window.innerWidth,e=window.innerHeight,t=[{x:0,y:e*.93,w:i,h:e*.07}],n=ns.rect(12);n&&t.push(n);let s=vo.box;return s&&t.push({x:s.x-12,y:s.y-12,w:s.w+24,h:s.h+24}),Wh.forEach(r=>{if(r.style.display==="none")return;let o=(r.firstElementChild||r).getBoundingClientRect();t.push({x:o.left-4,y:o.top-2,w:o.width+8,h:o.height+4})}),t}var Wv={left:-1,right:1},qh=0,Dp=!0,Wp=0;function $l(i){qh=Math.max(qh,performance.now()+i)}var Ps=0,Xp=()=>["blueprint","dark"].includes(document.body.dataset.theme)?1:0;function Xv(){let i=Xp();return Ps===i?!1:(Ps=Vn||Math.abs(i-Ps)<.002?i:Ps+(i-Ps)*kl(3),Yl.setTheme(Ps),!0)}function qp(i){requestAnimationFrame(qp),zv(i);let e=Math.min(1,(i-Wl)/xr);bo&&i-vr>=So&&zp();let t=Math.min(1,(i-vr)/So);if(!(Ps!==Xp()||e<1||t<1||Dp||i<qh||kp||!Vn&&(Dt.pulse||Tt&&Tt.data.idea==="run")))return;Wp++,kv(i),Xv();let s=Gh(Number.isFinite(e)?e:1);if(mn&&Bn){let c=dp(mn,Bn,s);c.idea+=Zl,Et.set(c),Et.flashGates(c.idea,i)}let r=Et.focus(Fp,Vn?1:kl(5),Op),o=Et.sets?Et.sets.update(Vn?1:kl(2.5)):!1;if(Ii=pp(yr,Mo,Gh(Number.isFinite(t)?t:1)),Tn.position.copy(Ii.pos),Tn.lookAt(Ii.target),Tn.rotateZ((Ii.roll||0)*Pe),Ls.updateMatrixWorld(),Yl.render(Ls,Tn),ql.render(Ls,Tn),_r.render(Ls,Tn),Vl&&(Vl=!1,Wh=[..._r.domElement.querySelectorAll(".label.is-on:not(.lead)")],Cp=Wh.filter(c=>c.classList.contains("label-band"))),Af(Cp),Et.align(Tn),Tt){let c=vo.place(Tt,Tn,ns.rect(16,!1),ns.compact?ns.rect(16,!0):null);ns.tighten(c)}let a=Mp(Np.matches?Dt.leadAtPhone:Dt.leadAt),l=Yh.update(Tn,window.innerWidth,window.innerHeight,Vv(),Wv[Dt.leadSide]||0,Number(Dt.leadColumn)||0,kl(13),Number(Dt.leadDrop)||0,a);Dp=r||l||o}function Zh(){let i=window.innerWidth,e=window.innerHeight;ts.setPixelRatio(Math.min(window.devicePixelRatio,2)),ts.setSize(i,e),Yl.setSize(i,e),_r.setSize(i,e),ql.setSize(i,e),Tn.aspect=i/e,Tn.fov=Tn.aspect>=16/9?kh:2*Math.atan(Math.tan(kh*Pe/2)*16/9/Tn.aspect)/Pe,Tn.updateProjectionMatrix(),Yh.resize(),ns.invalidate(),$l(300)}window.addEventListener("resize",Zh);Zh();function Yp(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Zh(),Yp()},{once:!0})}Yp();document.fonts&&document.fonts.ready.then(()=>{Et.relayout(),Yh.resize(),$l(300)});Rp({next:Gp,previous:Hp,go:ss,count:is.length});window.deck={go:ss,next:Gp,previous:Hp,stops:is,BANDS:jn,holdPulse:(i=null)=>Xh=i,drawn:()=>Wp,drawCalls:()=>(ts.info.autoReset=!1,ts.info.reset(),Yl.render(Ls,Tn),ts.info.autoReset=!0,ts.info.render.calls)};var[qv,Yv]=Hh(is.length);ss(qv,!0,Yv);yr=Mo;requestAnimationFrame(qp);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
