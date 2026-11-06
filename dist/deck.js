(()=>{var wh=0,mc=1,Ah=2;var Xr=1,Rh=2,er=3,qi=0,_n=1,Bt=2,yi=0,tr=1,gc=2,xc=3,_c=4,Ch=5;var Ms=100,Ih=101,Ph=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,yc=204,vc=205,Bh=206,zh=207,Gh=208,Hh=209,kh=210,Vh=211,Wh=212,Xh=213,qh=214,Uo=0,Fo=1,Oo=2,qs=3,Bo=4,zo=5,Go=6,Ho=7,Mc=0,Yh=1,$h=2,ni=0,Sc=1,bc=2,Ec=3,Tc=4,wc=5,Ac=6,Rc=7;var Cc=300,Ss=301,nr=302,va=303,Ma=304,ko=1e3,jn=1001,Vo=1002,jt=1003,Zh=1004;var qr=1005;var mn=1006,Sa=1007;var vi=1008;var yn=1009,Ic=1010,Pc=1011,ir=1012,ba=1013,qn=1014,In=1015,Yn=1016,Ea=1017,Ta=1018,bs=1020,Lc=35902,Dc=35899,Nc=1021,Uc=1022,$n=1023,_i=1026,Mi=1027,Fc=1028,wa=1029,Yi=1030,Aa=1031;var Ra=1033,Yr=33776,$r=33777,Zr=33778,Jr=33779,Ca=35840,Ia=35841,Pa=35842,La=35843,Da=36196,Na=37492,Ua=37496,Fa=37488,Oa=37489,Kr=37490,Ba=37491,za=37808,Ga=37809,Ha=37810,ka=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,$a=37817,Za=37818,Ja=37819,Ka=37820,Qa=37821,ja=36492,el=36494,tl=36495,nl=36283,il=36284,Qr=36285,sl=36286;var Er=2300,Wo=2301,Do=2302,oc=2303,ac=2400,lc=2401,cc=2402;var Jh=3200;var Oc=0,Kh=1,Si="",fn="srgb",Tr="srgb-linear",wr="linear",vt="srgb";var No=7680;var Qh=519,jh=512,ed=513,td=514,Bc=515,nd=516,id=517,zc=518,Gc=519,sd=35044;var jr="300 es",Nn=2e3,Ar=2001;function Xp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){let i=Rr("canvas");return i.style.display="block",i}var ju={},Ys=null;function Hc(...i){let e="THREE."+i.shift();Ys?Ys("log",e,...i):console.log(e,...i)}function od(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=od(i);let e="THREE."+i.shift();if(Ys)Ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=od(i);let e="THREE."+i.shift();if(Ys)Ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Mr(...i){let e=i.join(" ");e in ju||(ju[e]=!0,Ve(...i))}function ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ld={[Uo]:Uo,[Oo]:Go,[Bo]:Bo,[qs]:zo,[Fo]:Fo,[Go]:Oo,[Ho]:Ho,[zo]:qs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fl=Math.PI/180,Xo=180/Math.PI;function sr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Yp(i,e){return(i%e+e)%e}function Ol(i,e,t){return(1-t)*i+t*e}function cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $p(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Zp(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var $c=class $c{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$c.prototype.isVector2=!0;var oe=$c,bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],g=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(g!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+g*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let h=1-a;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);h=Math.sin(h*y)/T,a=Math.sin(a*y)/T,l=l*h+f*a,c=c*h+d*a,u=u*h+p*a,g=g*h+_*a}else{l=l*h+f*a,c=c*h+d*a,u=u*h+p*a,g=g*h+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=y,c*=y,u*=y,g*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],g=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*g+l*d-c*f,e[t+1]=l*p+u*f+c*g-a*d,e[t+2]=c*p+u*d+a*f-l*g,e[t+3]=u*p-a*g-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),g=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*g+c*d*p,this._y=c*d*g-f*u*p,this._z=c*u*p+f*d*g,this._w=c*u*g-f*d*p;break;case"YXZ":this._x=f*u*g+c*d*p,this._y=c*d*g-f*u*p,this._z=c*u*p-f*d*g,this._w=c*u*g+f*d*p;break;case"ZXY":this._x=f*u*g-c*d*p,this._y=c*d*g+f*u*p,this._z=c*u*p+f*d*g,this._w=c*u*g-f*d*p;break;case"ZYX":this._x=f*u*g-c*d*p,this._y=c*d*g+f*u*p,this._z=c*u*p-f*d*g,this._w=c*u*g+f*d*p;break;case"YZX":this._x=f*u*g+c*d*p,this._y=c*d*g+f*u*p,this._z=c*u*p-f*d*g,this._w=c*u*g-f*d*p;break;case"XZY":this._x=f*u*g-c*d*p,this._y=c*d*g-f*u*p,this._z=c*u*p+f*d*g,this._w=c*u*g+f*d*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],g=t[10],f=n+a+g;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>g){let d=2*Math.sqrt(1+n-a-g);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>g){let d=2*Math.sqrt(1+a-n-g);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+g-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zc=class Zc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),g=2*(r*n-o*t);return this.x=t+l*c+o*g-a*u,this.y=n+l*u+a*c-r*g,this.z=s+l*g+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zc.prototype.isVector3=!0;var L=Zc,Bl=new L,eh=new bn,Jc=class Jc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],g=n[7],f=n[2],d=n[5],p=n[8],_=s[0],m=s[3],h=s[6],y=s[1],T=s[4],v=s[7],M=s[2],S=s[5],x=s[8];return r[0]=o*_+a*y+l*M,r[3]=o*m+a*T+l*S,r[6]=o*h+a*v+l*x,r[1]=c*_+u*y+g*M,r[4]=c*m+u*T+g*S,r[7]=c*h+u*v+g*x,r[2]=f*_+d*y+p*M,r[5]=f*m+d*T+p*S,r[8]=f*h+d*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*g+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=g*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jc.prototype.isMatrix3=!0;var Ye=Jc,zl=new Ye,th=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var dt=Jp();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ls,qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Rr("canvas")),Ls.width=e.width,Ls.height=e.height;let s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kp=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var Qp=0,Hl=new L,En=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=mn,o=vi,a=$n,l=yn,c=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=sr(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Cc;En.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],g=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(g-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(d+1)/2,M=(h+1)/2,S=(u+f)/4,x=(g+_)/4,b=(p+m)/4;return T>v&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=x/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=x/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(g-_)*(g-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(g-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var Ft=Kc,Yo=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cr=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ya=class ya{constructor(e,t,n,s,r,o,a,l,c,u,g,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,g,f,d,p,_,m)}set(e,t,n,s,r,o,a,l,c,u,g,f,d,p,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=g,h[14]=f,h[3]=d,h[7]=p,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ya().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*g,p=a*u,_=a*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*g,p=c*u,_=c*g;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*g,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*g,p=c*u,_=c*g;t[0]=f-_*a,t[4]=-o*g,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*g,p=a*u,_=a*g;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*g,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*g,t[8]=p*g+d,t[1]=g,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*g+p,t[10]=f-_*g}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=f*g+_,t[5]=o*u,t[9]=d*g-p,t[2]=p*g-d,t[6]=a*u,t[10]=_*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,em)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Di.crossVectors(n,Tn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Di.crossVectors(n,Tn)),Di.normalize(),uo.crossVectors(Tn,Di),s[0]=Di.x,s[4]=uo.x,s[8]=Tn.x,s[1]=Di.y,s[5]=uo.y,s[9]=Tn.y,s[2]=Di.z,s[6]=uo.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],g=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],h=n[14],y=n[3],T=n[7],v=n[11],M=n[15],S=s[0],x=s[4],b=s[8],I=s[12],A=s[1],D=s[5],F=s[9],H=s[13],P=s[2],C=s[6],z=s[10],B=s[14],Z=s[3],k=s[7],$=s[11],K=s[15];return r[0]=o*S+a*A+l*P+c*Z,r[4]=o*x+a*D+l*C+c*k,r[8]=o*b+a*F+l*z+c*$,r[12]=o*I+a*H+l*B+c*K,r[1]=u*S+g*A+f*P+d*Z,r[5]=u*x+g*D+f*C+d*k,r[9]=u*b+g*F+f*z+d*$,r[13]=u*I+g*H+f*B+d*K,r[2]=p*S+_*A+m*P+h*Z,r[6]=p*x+_*D+m*C+h*k,r[10]=p*b+_*F+m*z+h*$,r[14]=p*I+_*H+m*B+h*K,r[3]=y*S+T*A+v*P+M*Z,r[7]=y*x+T*D+v*C+M*k,r[11]=y*b+T*F+v*z+M*$,r[15]=y*I+T*H+v*B+M*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],g=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],h=e[15],y=l*d-c*f,T=a*d-c*g,v=a*f-l*g,M=o*d-c*u,S=o*f-l*u,x=o*g-a*u;return t*(_*y-m*T+h*v)-n*(p*y-m*M+h*S)+s*(p*T-_*M+h*x)-r*(p*v-_*S+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],h=e[15],y=t*a-n*o,T=t*l-s*o,v=t*c-r*o,M=n*l-s*a,S=n*c-r*a,x=s*c-r*l,b=u*_-g*p,I=u*m-f*p,A=u*h-d*p,D=g*m-f*_,F=g*h-d*_,H=f*h-d*m,P=y*H-T*F+v*D+M*A-S*I+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=(a*H-l*F+c*D)*C,e[1]=(s*F-n*H-r*D)*C,e[2]=(_*x-m*S+h*M)*C,e[3]=(f*S-g*x-d*M)*C,e[4]=(l*A-o*H-c*I)*C,e[5]=(t*H-s*A+r*I)*C,e[6]=(m*v-p*x-h*T)*C,e[7]=(u*x-f*v+d*T)*C,e[8]=(o*F-a*A+c*b)*C,e[9]=(n*A-t*F-r*b)*C,e[10]=(p*S-_*v+h*y)*C,e[11]=(g*v-u*S-d*y)*C,e[12]=(a*I-o*D-l*b)*C,e[13]=(t*D-n*I+s*b)*C,e[14]=(_*T-p*M-m*y)*C,e[15]=(u*M-g*T+f*y)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,g=a+a,f=r*c,d=r*u,p=r*g,_=o*u,m=o*g,h=a*g,y=l*c,T=l*u,v=l*g,M=n.x,S=n.y,x=n.z;return s[0]=(1-(_+h))*M,s[1]=(d+v)*M,s[2]=(p-T)*M,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+h))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+T)*x,s[9]=(m-y)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,g=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=g,Gn.elements[9]*=g,Gn.elements[10]*=g,t.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Nn,l=!1){let c=this.elements,u=2*r/(t-e),g=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Nn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ar)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Nn,l=!1){let c=this.elements,u=2/(t-e),g=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Nn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ar)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ya.prototype.isMatrix4=!0;var bt=ya,Ds=new L,Gn=new bt,jp=new L(0,0,0),em=new L(1,1,1),Di=new L,uo=new L,Tn=new L,ih=new bt,sh=new bn,zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],g=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tm=0,rh=new L,Ns=new bn,di=new bt,ho=new L,gr=new L,nm=new L,im=new bn,oh=new L(1,0,0),ah=new L(0,1,0),lh=new L(0,0,1),ch={type:"added"},sm={type:"removed"},Us={type:"childadded",child:null},kl={type:"childremoved",child:null},en=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new zi,n=new bn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ye}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(gr,ho,this.up):di.lookAt(ho,gr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Us.child=e,this.dispatchEvent(Us),Us.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),g=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new L(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},rm={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=u.position.distanceTo(g.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Yp(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vl(o,r,e+1/3),this.g=Vl(o,r,e),this.b=Vl(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return dt.workingToColorSpace(cn.copy(this),e),Math.round(rt(cn.r*255,0,255))*65536+Math.round(rt(cn.g*255,0,255))*256+Math.round(rt(cn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let g=o-a;switch(c=u<=.5?g/(o+a):g/(2-o-a),o){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=fn){dt.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(fo);let n=Ol(Ni.h,fo.h,t),s=Ol(Ni.s,fo.s,t),r=Ol(Ni.l,fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new lt;lt.NAMES=ud;var ds=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new L,fi=new L,Wl=new L,pi=new L,Fs=new L,Os=new L,uh=new L,Xl=new L,ql=new L,Yl=new L,$l=new Ft,Zl=new Ft,Jl=new Ft,Bi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),fi.subVectors(n,t),Wl.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(fi),l=Hn.dot(Wl),c=fi.dot(fi),u=fi.dot(Wl),g=o*c-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return $l.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),$l.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),fi.subVectors(e,t),Hn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Os.subVectors(r,n),Xl.subVectors(e,n);let l=Fs.dot(Xl),c=Os.dot(Xl);if(l<=0&&c<=0)return t.copy(n);ql.subVectors(e,s);let u=Fs.dot(ql),g=Os.dot(ql);if(u>=0&&g<=u)return t.copy(s);let f=l*g-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Fs,o);Yl.subVectors(e,r);let d=Fs.dot(Yl),p=Os.dot(Yl);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Os,a);let m=u*p-d*g;if(m<=0&&g-u>=0&&d-p>=0)return uh.subVectors(r,s),a=(g-u)/(g-u+(d-p)),t.copy(s).addScaledVector(uh,a);let h=1/(m+_+f);return o=_*h,a=f*h,t.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),mo.subVectors(this.max,xr),Bs.subVectors(e.a,xr),zs.subVectors(e.b,xr),Gs.subVectors(e.c,xr),Ui.subVectors(zs,Bs),Fi.subVectors(Gs,zs),as.subVectors(Bs,Gs);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-as.z,as.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,as.z,0,-as.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-as.y,as.x,0];return!Kl(t,Bs,zs,Gs,mo)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,Bs,zs,Gs,mo))?!1:(go.crossVectors(Ui,Fi),t=[go.x,go.y,go.z],Kl(t,Bs,zs,Gs,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,po=new Gi,Bs=new L,zs=new L,Gs=new L,Ui=new L,Fi=new L,as=new L,xr=new L,mo=new L,go=new L,ls=new L;function Kl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wt=new L,xo=new oe,om=0,Un=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$p(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zp(e,this.array)}};var Pr=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lr=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}},am=new Gi,_r=new L,Ql=new L,Js=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Ql)),this.expandByPoint(_r.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lm=0,Dn=new bt,jl=new en,Hs=new L,wn=new Gi,yr=new Gi,Qt=new L,Xt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Lr:Pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(wn.min,yr.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,yr.max),wn.expandByPoint(Qt)):(wn.expandByPoint(yr.min),wn.expandByPoint(yr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Qt.add(Hs)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new L,l[I]=new L;let u=new L,g=new L,f=new L,d=new oe,p=new oe,_=new oe,m=new L,h=new L;function y(I,A,D){c[I]=c[A]=c[D]=1,u.fromBufferAttribute(n,I),g.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),g.sub(u),f.sub(u),p.sub(d),_.sub(d);let F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(m.copy(g).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),h.copy(f).multiplyScalar(p.x).addScaledVector(g,-_.x).multiplyScalar(F),a[I].add(m),a[A].add(m),a[D].add(m),l[I].add(h),l[A].add(h),l[D].add(h))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,A=T.length;I<A;++I){let D=T[I],F=D.start,H=D.count;for(let P=F,C=F+H;P<C;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new L,M=new L,S=new L,x=new L;function b(I){S.fromBufferAttribute(s,I),x.copy(S);let A=a[I];v.copy(A),v.sub(S.multiplyScalar(S.dot(A))).normalize(),M.crossVectors(x,A);let F=M.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,F)}for(let I=0,A=n.count;I<A;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,g=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,g=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let h=0;h<u;h++)f[p++]=c[d++]}return new Un(f,u,g)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,g=c.length;u<g;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let g=0,f=c.length;g<f;g++){let d=c[g];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],g=r[c];for(let f=0,d=g.length;f<d;f++)u.push(g[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let g=o[c];this.addGroup(g.start,g.count,g.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=new L,cm=new L,um=new Ye,Vn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ec.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||um.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hm=0,fs=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=tr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=vc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gi=new L,tc=new L,_o=new L,yo=new L,Zo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tc.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(tc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=yo.dot(this.direction),l=-yo.dot(_o),c=yo.lengthSq(),u=Math.abs(1-o*o),g,f,d,p;if(u>0)if(g=o*l-a,f=o*a-l,p=r*u,g>=0)if(f>=-p)if(f<=p){let _=1/u;g*=_,f*=_,d=g*(g+o*f+2*a)+f*(o*g+f+2*l)+c}else f=r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;else f=-r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;else f<=-p?(g=Math.max(0,-(-o*r+a)),f=g>0?-r:Math.min(Math.max(-r,-l),r),d=-g*g+f*(f+2*l)+c):f<=p?(g=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(g=Math.max(0,-(o*r+a)),f=g>0?r:Math.min(Math.max(-r,-l),r),d=-g*g+f*(f+2*l)+c);else f=o>0?-r:r,g=Math.max(0,-(o*f+a)),d=-g*g+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tc).addScaledVector(_o,f),d}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-f.z)*g,l=(e.max.z-f.z)*g):(a=(e.max.z-f.z)*g,l=(e.min.z-f.z)*g),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,g=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,h=n.x-o.x,y=n.y-o.y,T=n.z-o.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(u),x,b,I,A,D,F,H,P,C,z,B,Z;if(v>=M&&v>=S?(I=l,F=g,C=p,Z=h,l>=0?(x=c,b=u,A=f,D=d,H=_,P=m,z=y,B=T):(x=u,b=c,A=d,D=f,H=m,P=_,z=T,B=y)):M>=S?(I=c,F=f,C=_,Z=y,c>=0?(x=u,b=l,A=d,D=g,H=m,P=p,z=T,B=h):(x=l,b=u,A=g,D=d,H=p,P=m,z=h,B=T)):(I=u,F=d,C=m,Z=T,u>=0?(x=l,b=c,A=g,D=f,H=p,P=_,z=h,B=y):(x=c,b=l,A=f,D=g,H=_,P=p,z=y,B=h)),I===0)return null;let k=x/I,$=b/I,K=1/I,xe=A-k*F,Ae=D-$*F,q=H-k*C,_e=P-$*C,Ce=z-k*Z,Fe=B-$*Z,ye=Ce*_e-Fe*q,Be=xe*Fe-Ae*Ce,Mt=q*Ae-_e*xe;if(s){if(ye<0||Be<0||Mt<0)return null}else if((ye<0||Be<0||Mt<0)&&(ye>0||Be>0||Mt>0))return null;let Ue=ye+Be+Mt;if(Ue===0)return null;let et=K*(ye*F+Be*C+Mt*Z);return(Ue>0?et<0:et>0)?null:this.at(et/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jo=class extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hh=new bt,cs=new Zo,vo=new Js,dh=new L,Mo=new L,So=new L,bo=new L,nc=new L,Eo=new L,fh=new L,To=new L,un=class extends en{constructor(e=new Xt,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],g=r[l];u!==0&&(nc.fromBufferAttribute(g,e),o?Eo.addScaledVector(nc,u):Eo.addScaledVector(nc.sub(t),u))}t.add(Eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(vo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(vo,dh)===null||cs.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],h=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=T;v<M;v+=3){let S=a.getX(v),x=a.getX(v+1),b=a.getX(v+2);s=wo(this,h,e,n,c,u,g,S,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,h=_;m<h;m+=3){let y=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);s=wo(this,o,e,n,c,u,g,y,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],h=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=T;v<M;v+=3){let S=v,x=v+1,b=v+2;s=wo(this,h,e,n,c,u,g,S,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,h=_;m<h;m+=3){let y=m,T=m+1,v=m+2;s=wo(this,o,e,n,c,u,g,y,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dm(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:i}}function wo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Mo),i.getVertexPosition(l,So),i.getVertexPosition(c,bo);let u=dm(i,e,t,n,Mo,So,bo,fh);if(u){let g=new L;Bi.getBarycoord(fh,Mo,So,bo,g),s&&(u.uv=Bi.getInterpolatedAttribute(s,a,l,c,g,new oe)),r&&(u.uv1=Bi.getInterpolatedAttribute(r,a,l,c,g,new oe)),o&&(u.normal=Bi.getInterpolatedAttribute(o,a,l,c,g,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Bi.getNormal(Mo,So,bo,f.normal),u.face=f,u.barycoord=g}return u}var Ko=class extends En{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,u=jt,g,f){super(null,o,a,l,c,u,s,r,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=new Js,fm=new oe(.5,.5),Ao=new L,ps=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],g=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],h=r[11],y=r[12],T=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,h-p,M-y).normalize(),s[1].setComponents(c+o,d+u,h+p,M+y).normalize(),s[2].setComponents(c+a,d+g,h+_,M+T).normalize(),s[3].setComponents(c-a,d-g,h-_,M-T).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,h-m,M-v).normalize();else if(s[4].setComponents(c-l,d-f,h-m,M-v).normalize(),t===Nn)s[5].setComponents(c+l,d+f,h+m,M+v).normalize();else if(t===Ar)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=fm.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ph=new bt,Qo=class i{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ps),n[s].setFromProjectionMatrix(ph,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ps),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Dr=class extends En{constructor(e=[],t=Ss,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Wn=class extends En{constructor(e,t,n=qn,s,r,o,a=jt,l=jt,c,u=_i,g=1){if(u!==_i&&u!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:g};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nr=class extends Wn{constructor(e,t=qn,n=Ss,s,r,o=jt,a=jt,l,c=_i){let u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],g=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(g,2));function p(_,m,h,y,T,v,M,S,x,b,I){let A=v/x,D=M/b,F=v/2,H=M/2,P=S/2,C=x+1,z=b+1,B=0,Z=0,k=new L;for(let $=0;$<z;$++){let K=$*D-H;for(let xe=0;xe<C;xe++){let Ae=xe*A-F;k[_]=Ae*y,k[m]=K*T,k[h]=P,c.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[h]=S>0?1:-1,u.push(k.x,k.y,k.z),g.push(xe/x),g.push(1-$/b),B+=1}}for(let $=0;$<b;$++)for(let K=0;K<x;K++){let xe=f+K+C*$,Ae=f+K+C*($+1),q=f+(K+1)+C*($+1),_e=f+(K+1)+C*$;l.push(xe,Ae,_e),l.push(Ae,q,_e),Z+=6}a.addGroup(d,Z,I),d+=Z,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var it=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],f=[],d=[],p=0,_=[],m=n/2,h=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(d,2));function y(){let v=new L,M=new L,S=0,x=(t-e)/n;for(let b=0;b<=r;b++){let I=[],A=b/r,D=A*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,P=H*l+a,C=Math.sin(P),z=Math.cos(P);M.x=D*C,M.y=-A*n+m,M.z=D*z,g.push(M.x,M.y,M.z),v.set(C,x,z).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-A),I.push(p++)}_.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let A=_[I][b],D=_[I+1][b],F=_[I+1][b+1],H=_[I][b+1];(e>0||I!==0)&&(u.push(A,D,H),S+=3),(t>0||I!==r-1)&&(u.push(D,F,H),S+=3)}c.addGroup(h,S,0),h+=S}function T(v){let M=p,S=new oe,x=new L,b=0,I=v===!0?e:t,A=v===!0?1:-1;for(let F=1;F<=s;F++)g.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let D=p;for(let F=0;F<=s;F++){let P=F/s*l+a,C=Math.cos(P),z=Math.sin(P);x.x=I*z,x.y=m*A,x.z=I*C,g.push(x.x,x.y,x.z),f.push(0,A,0),S.x=C*.5+.5,S.y=z*.5*A+.5,d.push(S.x,S.y),p++}for(let F=0;F<s;F++){let H=M+F,P=D+F;v===!0?u.push(P,P+1,H):u.push(P+1,P,H),b+=3}c.addGroup(h,b,v===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class i extends it{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new bt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),g<=c&&(c=g,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ks=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*g+this.aX,c=f*g+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jo=class extends Ks{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,g){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+g)+(l-a)/g;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var mh=new L,gh=new L,ic=new Vc,sc=new Vc,rc=new Vc,Hi=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(gh.subVectors(s[0],s[1]).add(s[0]),c=gh);let g=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(mh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(g),d),_=Math.pow(g.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ic.initNonuniformCatmullRom(c.x,g.x,f.x,u.x,p,_,m),sc.initNonuniformCatmullRom(c.y,g.y,f.y,u.y,p,_,m),rc.initNonuniformCatmullRom(c.z,g.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,g.x,f.x,u.x,this.tension),sc.initCatmullRom(c.y,g.y,f.y,u.y,this.tension),rc.initCatmullRom(c.z,g.z,f.z,u.z,this.tension));return n.set(ic.calc(l),sc.calc(l),rc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function pm(i,e){let t=1-i;return t*t*e}function mm(i,e){return 2*(1-i)*i*e}function gm(i,e){return i*i*e}function Sr(i,e,t,n){return pm(i,e)+mm(i,t)+gm(i,n)}function xm(i,e){let t=1-i;return t*t*t*e}function _m(i,e){let t=1-i;return 3*t*t*i*e}function ym(i,e){return 3*(1-i)*i*i*e}function vm(i,e){return i*i*i*e}function br(i,e,t,n,s){return xm(i,e)+_m(i,t)+ym(i,n)+vm(i,s)}var Fr=class extends An{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends An{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends An{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends An{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends An{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gs=class extends An{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(e,s.x,r.x,o.x),Sr(e,s.y,r.y,o.y),Sr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return n.set(xh(a,l.x,c.x,u.x,g.x),xh(a,l.y,c.y,u.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},na=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Hi,CubicBezierCurve:Fr,CubicBezierCurve3:ea,EllipseCurve:Ks,LineCurve:Or,LineCurve3:ta,QuadraticBezierCurve:Br,QuadraticBezierCurve3:gs,SplineCurve:zr}),ia=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new na[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xn=class extends ia{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Or(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Br(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Fr(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ks(e,t,n,s,r,o,a,l);if(this.curves.length>0){let g=c.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xn=class extends Xn{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xn().fromJSON(s))}return this}};function Mm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=hd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=wm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,g=l;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>g&&(g=p)}c=Math.max(u-a,g-l),c=c!==0?32767/c:0}return Gr(r,o,t,a,l,c,0),o}function hd(i,e,t,n,s){let r;if(s===Om(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=_h(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=_h(o/n|0,i[o],i[o+1],r);return r&&Qs(r,r.next)&&(kr(r),r=r.next),r}function xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Pm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?bm(i,n,s,r):Sm(i)){e.push(l.i,i.i,c.i),kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Em(xs(i),e),Gr(i,e,t,n,s,r,2)):o===2&&Tm(i,e,t,n,s,r):Gr(xs(i),e,t,n,s,r,1);break}}}function Sm(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),g=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=g&&p.y<=d&&vr(s,a,r,l,o,c,p.x,p.y)&&Ut(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ut(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,g=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,g,f),_=Math.max(a,l,c),m=Math.max(u,g,f),h=uc(d,p,e,t,n),y=uc(_,m,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=h&&v&&v.z<=y;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&vr(a,u,l,g,c,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&vr(a,u,l,g,c,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=h;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&vr(a,u,l,g,c,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&vr(a,u,l,g,c,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Em(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Qs(n,s)&&fd(n,t,t.next,s)&&Hr(n,s)&&Hr(s,n)&&(e.push(n.i,t.i,s.i),kr(t),kr(t.next),t=i=s),t=t.next}while(t!==i);return xs(t)}function Tm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nm(o,a)){let l=pd(o,a);o=xs(o,o.next),l=xs(l,l.next),Gr(o,e,t,n,s,r,0),Gr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=hd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dm(c))}s.sort(Am);for(let r=0;r<s.length;r++)t=Rm(s[r],t);return t}function Am(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Rm(i,e){let t=Cm(i,e);if(!t)return e;let n=pd(t,i);return xs(n,n.next),xs(t,t.next)}function Cm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Qs(i,t))return t;do{if(Qs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&dd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let g=Math.abs(s-t.y)/(n-t.x);Hr(t,i)&&(g<u||g===u&&(t.x>o.x||t.x===o.x&&Im(o,t)))&&(o=t,u=g)}t=t.next}while(t!==a);return o}function Im(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function Pm(i,e,t,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lm(s)}function Lm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function dd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function vr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&dd(i,e,t,n,s,r,o,a)}function Nm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Um(i,e)&&(Hr(i,e)&&Hr(e,i)&&Fm(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Qs(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qs(i,e){return i.x===e.x&&i.y===e.y}function fd(i,e,t,n){let s=Co(Ut(i,e,t)),r=Co(Ut(i,e,n)),o=Co(Ut(t,n,i)),a=Co(Ut(t,n,e));return!!(s!==r&&o!==a||s===0&&Ro(i,t,e)||r===0&&Ro(i,n,e)||o===0&&Ro(t,i,n)||a===0&&Ro(t,e,n))}function Ro(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Co(i){return i>0?1:i<0?-1:0}function Um(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Hr(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function Fm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){let t=hc(i.i,i.x,i.y),n=hc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _h(i,e,t,n){let s=hc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Om(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var dc=class{static triangulate(e,t,n=2){return Mm(e,t,n)}},hs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];yh(e),vh(n,e);let o=e.length;t.forEach(yh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,vh(n,t[l]);let a=dc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function vh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _s=class i extends Xt{constructor(e=new xn([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Bm,T,v=!1,M,S,x,b;if(h){T=h.getSpacedPoints(u),v=!0,f=!1;let ne=h.isCatmullRomCurve3?h.closed:!1;M=h.computeFrenetFrames(u,ne),S=new L,x=new L,b=new L}f||(m=0,d=0,p=0,_=0);let I=a.extractPoints(c),A=I.shape,D=I.holes;if(!hs.isClockWise(A)){A=A.reverse();for(let ne=0,pe=D.length;ne<pe;ne++){let he=D[ne];hs.isClockWise(he)&&(D[ne]=he.reverse())}}function H(ne){let he=10000000000000001e-36,Pe=ne[0];for(let Ee=1;Ee<=ne.length;Ee++){let Je=Ee%ne.length,ze=ne[Je],at=ze.x-Pe.x,ct=ze.y-Pe.y,gt=at*at+ct*ct,O=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(Pe.x),Math.abs(Pe.y)),kt=he*O*O;if(gt<=kt){ne.splice(Je,1),Ee--;continue}Pe=ze}}H(A),D.forEach(H);let P=D.length,C=A;for(let ne=0;ne<P;ne++){let pe=D[ne];A=A.concat(pe)}function z(ne,pe,he){return pe||We("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(pe,he)}let B=A.length;function Z(ne,pe,he){let Pe,Ee,Je,ze=ne.x-pe.x,at=ne.y-pe.y,ct=he.x-ne.x,gt=he.y-ne.y,O=ze*ze+at*at,kt=ze*gt-at*ct;if(Math.abs(kt)>Number.EPSILON){let st=Math.sqrt(O),Tt=Math.sqrt(ct*ct+gt*gt),Me=pe.x-at/st,Ot=pe.y+ze/st,ke=he.x-gt/Tt,Xe=he.y+ct/Tt,R=((ke-Me)*gt-(Xe-Ot)*ct)/(ze*gt-at*ct);Pe=Me+ze*R-ne.x,Ee=Ot+at*R-ne.y;let E=Pe*Pe+Ee*Ee;if(E<=2)return new oe(Pe,Ee);Je=Math.sqrt(E/2)}else{let st=!1;ze>Number.EPSILON?ct>Number.EPSILON&&(st=!0):ze<-Number.EPSILON?ct<-Number.EPSILON&&(st=!0):Math.sign(at)===Math.sign(gt)&&(st=!0),st?(Pe=-at,Ee=ze,Je=Math.sqrt(O)):(Pe=ze,Ee=at,Je=Math.sqrt(O/2))}return new oe(Pe/Je,Ee/Je)}let k=[];for(let ne=0,pe=C.length,he=pe-1,Pe=ne+1;ne<pe;ne++,he++,Pe++)he===pe&&(he=0),Pe===pe&&(Pe=0),k[ne]=Z(C[ne],C[he],C[Pe]);let $=[],K,xe=k.concat();for(let ne=0,pe=P;ne<pe;ne++){let he=D[ne];K=[];for(let Pe=0,Ee=he.length,Je=Ee-1,ze=Pe+1;Pe<Ee;Pe++,Je++,ze++)Je===Ee&&(Je=0),ze===Ee&&(ze=0),K[Pe]=Z(he[Pe],he[Je],he[ze]);$.push(K),xe=xe.concat(K)}let Ae;if(m===0)Ae=hs.triangulateShape(C,D);else{let ne=[],pe=[];for(let he=0;he<m;he++){let Pe=he/m,Ee=d*Math.cos(Pe*Math.PI/2),Je=p*Math.sin(Pe*Math.PI/2)+_;for(let ze=0,at=C.length;ze<at;ze++){let ct=z(C[ze],k[ze],Je);Be(ct.x,ct.y,-Ee),Pe===0&&ne.push(ct)}for(let ze=0,at=P;ze<at;ze++){let ct=D[ze];K=$[ze];let gt=[];for(let O=0,kt=ct.length;O<kt;O++){let st=z(ct[O],K[O],Je);Be(st.x,st.y,-Ee),Pe===0&&gt.push(st)}Pe===0&&pe.push(gt)}}Ae=hs.triangulateShape(ne,pe)}let q=Ae.length,_e=p+_;for(let ne=0;ne<B;ne++){let pe=f?z(A[ne],xe[ne],_e):A[ne];v?(x.copy(M.normals[0]).multiplyScalar(pe.x),S.copy(M.binormals[0]).multiplyScalar(pe.y),b.copy(T[0]).add(x).add(S),Be(b.x,b.y,b.z)):Be(pe.x,pe.y,0)}for(let ne=1;ne<=u;ne++)for(let pe=0;pe<B;pe++){let he=f?z(A[pe],xe[pe],_e):A[pe];v?(x.copy(M.normals[ne]).multiplyScalar(he.x),S.copy(M.binormals[ne]).multiplyScalar(he.y),b.copy(T[ne]).add(x).add(S),Be(b.x,b.y,b.z)):Be(he.x,he.y,g/u*ne)}for(let ne=m-1;ne>=0;ne--){let pe=ne/m,he=d*Math.cos(pe*Math.PI/2),Pe=p*Math.sin(pe*Math.PI/2)+_;for(let Ee=0,Je=C.length;Ee<Je;Ee++){let ze=z(C[Ee],k[Ee],Pe);Be(ze.x,ze.y,g+he)}for(let Ee=0,Je=D.length;Ee<Je;Ee++){let ze=D[Ee];K=$[Ee];for(let at=0,ct=ze.length;at<ct;at++){let gt=z(ze[at],K[at],Pe);v?Be(gt.x,gt.y+T[u-1].y,T[u-1].x+he):Be(gt.x,gt.y,g+he)}}}Ce(),Fe();function Ce(){let ne=s.length/3;if(f){let pe=0,he=B*pe;for(let Pe=0;Pe<q;Pe++){let Ee=Ae[Pe];Mt(Ee[2]+he,Ee[1]+he,Ee[0]+he)}pe=u+m*2,he=B*pe;for(let Pe=0;Pe<q;Pe++){let Ee=Ae[Pe];Mt(Ee[0]+he,Ee[1]+he,Ee[2]+he)}}else{for(let pe=0;pe<q;pe++){let he=Ae[pe];Mt(he[2],he[1],he[0])}for(let pe=0;pe<q;pe++){let he=Ae[pe];Mt(he[0]+B*u,he[1]+B*u,he[2]+B*u)}}n.addGroup(ne,s.length/3-ne,0)}function Fe(){let ne=s.length/3,pe=0;ye(C,pe),pe+=C.length;for(let he=0,Pe=D.length;he<Pe;he++){let Ee=D[he];ye(Ee,pe),pe+=Ee.length}n.addGroup(ne,s.length/3-ne,1)}function ye(ne,pe){let he=ne.length;for(;--he>=0;){let Pe=he,Ee=he-1;Ee<0&&(Ee=ne.length-1);for(let Je=0,ze=u+m*2;Je<ze;Je++){let at=B*Je,ct=B*(Je+1),gt=pe+Pe+at,O=pe+Ee+at,kt=pe+Ee+ct,st=pe+Pe+ct;Ue(gt,O,kt,st)}}}function Be(ne,pe,he){l.push(ne),l.push(pe),l.push(he)}function Mt(ne,pe,he){et(ne),et(pe),et(he);let Pe=s.length/3,Ee=y.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);ot(Ee[0]),ot(Ee[1]),ot(Ee[2])}function Ue(ne,pe,he,Pe){et(ne),et(pe),et(Pe),et(pe),et(he),et(Pe);let Ee=s.length/3,Je=y.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);ot(Je[0]),ot(Je[1]),ot(Je[3]),ot(Je[1]),ot(Je[2]),ot(Je[3])}function et(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function ot(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new na[s.type]().fromJSON(s)),new i(n,e.options)}},Bm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],g=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],h=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-g),new oe(f,1-p),new oe(_,1-h)]:[new oe(a,1-l),new oe(u,1-g),new oe(d,1-p),new oe(m,1-h)]}};function zm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ti=class i extends Xt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,g=new L,f=new oe,d=new L,p=new L,_=new L,m=0,h=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,h=e[y+1].y-e[y].y,d.x=h*1,d.y=-m,d.z=h*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,h=e[y+1].y-e[y].y,d.x=h*1,d.y=-m,d.z=h*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){let T=n+y*u*s,v=Math.sin(T),M=Math.cos(T);for(let S=0;S<=e.length-1;S++){g.x=e[S].x*v,g.y=e[S].y,g.z=e[S].x*M,o.push(g.x,g.y,g.z),f.x=y/t,f.y=S/(e.length-1),a.push(f.x,f.y);let x=l[3*S+0]*v,b=l[3*S+1],I=l[3*S+0]*M;c.push(x,b,I)}}for(let y=0;y<t;y++)for(let T=0;T<e.length-1;T++){let v=T+y*e.length,M=v,S=v+e.length,x=v+e.length+1,b=v+1;r.push(M,S,b),r.push(x,b,S)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ys=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,g=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let h=0;h<u;h++){let y=h*f-o;for(let T=0;T<c;T++){let v=T*g-r;p.push(v,-y,0),_.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){let T=y+c*h,v=y+c*(h+1),M=y+1+c*(h+1),S=y+1+c*h;d.push(T,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vr=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],g=e,f=(t-e)/s,d=new L,p=new oe;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let h=r+m/n*o;d.x=g*Math.cos(h),d.y=g*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}g+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let h=0;h<n;h++){let y=h+m,T=y,v=y+n+1,M=y+n+2,S=y+1;a.push(T,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var nn=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],g=new L,f=new L,d=[],p=[],_=[],m=[];for(let h=0;h<=n;h++){let y=[],T=h/n,v=o+T*a,M=e*Math.cos(v),S=Math.sqrt(e*e-M*M),x=0;h===0&&o===0?x=.5/t:h===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let I=b/t,A=s+I*r;g.x=-S*Math.cos(A),g.y=M,g.z=S*Math.sin(A),p.push(g.x,g.y,g.z),f.copy(g).normalize(),_.push(f.x,f.y,f.z),m.push(I+x,1-T),y.push(c++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){let T=u[h][y+1],v=u[h][y],M=u[h+1][y],S=u[h+1][y+1];(h!==0||o>0)&&d.push(T,v,S),(h!==n-1||l<Math.PI)&&d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Et=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],g=[],f=new L,d=new L,p=new L;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let h=0;h<=s;h++){let y=h/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),g.push(h/s),g.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let h=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(h,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ki=class i extends Xt{constructor(e=new gs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new oe,u=new L,g=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(d,2));function _(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),y(),h()}function m(T){u=e.getPointAt(T/t,u);let v=o.normals[T],M=o.binormals[T];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,b=Math.sin(x),I=-Math.cos(x);l.x=I*v.x+b*M.x,l.y=I*v.y+b*M.y,l.z=I*v.z+b*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,g.push(a.x,a.y,a.z)}}function h(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let M=(s+1)*(T-1)+(v-1),S=(s+1)*T+(v-1),x=(s+1)*T+v,b=(s+1)*(T-1)+v;p.push(M,S,b),p.push(S,x,b)}}function y(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)c.x=T/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new na[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function Mh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var md={clone:Es,merge:hn},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sa=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ra=class extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oa=class extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Io(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},aa=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=e,a=2*t-n;break;case cc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=e,l=2*n-t;break;case cc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,h=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,T=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let M=0;M!==a;++M)r[M]=h*o[u+M]+y*o[c+M]+T*o[l+M]+v*o[g+M];return r}},la=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),g=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*g+o[l+f]*u;return r}},ca=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ua=class extends Vi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,g=this.outTangents;if(!u||!g){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],h=d*f+p*2,y=g[h],T=g[h+1],v=e*f+p*2,M=u[v],S=u[v+1],x=Wm(n,t,y,M,s);r[p]=gd(x,_,T,S,m)}return r}};function gd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=gd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Vm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Io(e.settings)&&(n.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Wo:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Io(this.settings)&&(Sh(this.settings.inTangents,e),Sh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Io(this.settings)&&(bh(this.settings.inTangents,e),bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let g=a*n,f=g-n,d=g+n;for(let p=0;p!==n;++p){let _=t[g+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let g=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[g+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function bh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Wo;var Wi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Er;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="color";var da=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="number";var fa=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wr=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Er;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};pa.prototype.ValueTypeName="vector";var ma=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return c.push(u,g),this},this.removeHandler=function(u){let g=c.indexOf(u);return g!==-1&&c.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=c.length;g<f;g+=2){let d=c[g],p=c[g+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xd=new ma,ga=class{constructor(e){this.manager=e!==void 0?e:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var Po=new L,Lo=new bn,Qn=new L,vs=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Po,Lo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Po,Lo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Lo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new L,Eh=new oe,Th=new oe,pn=class extends vs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xa=class extends vs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Vs=-90,Ws=1,js=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Vs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new pn(Vs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new pn(Vs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new pn(Vs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new pn(Vs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new pn(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_a=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Xc="\\[\\]\\.:\\/",Xm=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",qm="[^"+Xc.replace("\\.","")+"]",Ym=/((?:WC+[\/:])*)/.source.replace("WC",qc),$m=/(WCOD+)?/.source.replace("WCOD",qm),Zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),Km=new RegExp("^"+Ym+$m+Zm+Jm+"$"),Qm=["material","materials","bones","map"],fc=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(e){let t=Km.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=fc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var Qc=class Qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Qc.prototype.isMatrix2=!0;var pc=Qc;function Yc(i,e,t,n){let s=jm(n);switch(t){case Nc:return i*e;case Fc:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case Aa:return i*e*2/s.components*s.byteLength;case Uc:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Ra:return i*e*4/s.components*s.byteLength;case Yr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:case La:return Math.max(i,16)*Math.max(e,8)/4;case Ca:case Pa:return Math.max(i,8)*Math.max(e,8)/2;case Da:case Na:case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Kr:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(i){switch(i){case yn:case Ic:return{byteLength:1,components:1};case ir:case Pc:case Yn:return{byteLength:2,components:1};case Ea:case Ta:return{byteLength:2,components:4};case qn:case ba:case In:return{byteLength:4,components:1};case Lc:case Dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function l0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,g=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,l,c){let u=l.array,g=l.updateRanges;if(i.bindBuffer(c,a),g.length===0)i.bufferSubData(c,0,u);else{g.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<g.length;d++){let p=g[f],_=g[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,g[f]=_)}g.length=f+1;for(let d=0,p=g.length;d<p;d++){let _=g[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L0=`#define PI 3.141592653589793
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
} // validated`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
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
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform float backgroundBlurriness;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:c0,alphahash_pars_fragment:u0,alphamap_fragment:h0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:y0,beginnormal_vertex:v0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:I0,color_vertex:P0,common:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:N0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:G0,envmap_common_pars_fragment:H0,envmap_pars_fragment:k0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:eg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:$0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Q0,lights_pars_begin:j0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Gg,dithering_pars_fragment:Hg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:xx,equirect_vert:_x,equirect_frag:yx,linedashed_vert:vx,linedashed_frag:Mx,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:Ex,meshlambert_frag:Tx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Ix,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:zx,sprite_vert:Gx,sprite_frag:Hx},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},si={basic:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:hn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:hn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:hn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:hn([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:hn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:hn([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:hn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:hn([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:hn([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:hn([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};si.physical={uniforms:hn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var rl={r:0,b:0,g:0},kx=new bt,Gd=new Ye;Gd.set(-1,0,0,0,1,0,0,0,1);function Vx(i,e,t,n,s,r){let o=new lt(0),a=s===!0?0:1,l,c,u=null,g=0,f=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=e.get(T,v)}return T}function p(y){let T=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,T){let v=d(T);v&&v.isCubeTexture?(c===void 0&&(c=new un(new tn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Es(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gd),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==vt,(u!==v||g!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,g=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new un(new ys(2,2),new Rn({name:"BackgroundMaterial",uniforms:Es(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||g!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,g=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(rl,Wc(i)),t.buffers.color.setClear(rl.r,rl.g,rl.b,T,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:h}}function Wx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(D,F,H,P,C){let z=!1,B=g(D,P,H,F);r!==B&&(r=B,c(r.object)),z=d(D,P,H,C),z&&p(D,P,H,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(D,F,H,P),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function g(D,F,H,P){let C=P.wireframe===!0,z=n[F.id];z===void 0&&(z={},n[F.id]=z);let B=D.isInstancedMesh===!0?D.id:0,Z=z[B];Z===void 0&&(Z={},z[B]=Z);let k=Z[H.id];k===void 0&&(k={},Z[H.id]=k);let $=k[C];return $===void 0&&($=f(l()),k[C]=$),$}function f(D){let F=[],H=[],P=[];for(let C=0;C<t;C++)F[C]=0,H[C]=0,P[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,F,H,P){let C=r.attributes,z=F.attributes,B=0,Z=H.getAttributes();for(let k in Z)if(Z[k].location>=0){let K=C[k],xe=z[k];if(xe===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),K===void 0||K.attribute!==xe||xe&&K.data!==xe.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(D,F,H,P){let C={},z=F.attributes,B=0,Z=H.getAttributes();for(let k in Z)if(Z[k].location>=0){let K=z[k];K===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));let xe={};xe.attribute=K,K&&K.data&&(xe.data=K.data),C[k]=xe,B++}r.attributes=C,r.attributesNum=B,r.index=P}function _(){let D=r.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function m(D){h(D,0)}function h(D,F){let H=r.newAttributes,P=r.enabledAttributes,C=r.attributeDivisors;H[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),C[D]!==F&&(i.vertexAttribDivisor(D,F),C[D]=F)}function y(){let D=r.newAttributes,F=r.enabledAttributes;for(let H=0,P=F.length;H<P;H++)F[H]!==D[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function T(D,F,H,P,C,z,B){B===!0?i.vertexAttribIPointer(D,F,H,C,z):i.vertexAttribPointer(D,F,H,P,C,z)}function v(D,F,H,P){_();let C=P.attributes,z=H.getAttributes(),B=F.defaultAttributeValues;for(let Z in z){let k=z[Z];if(k.location>=0){let $=C[Z];if($===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let K=$.normalized,xe=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;let q=Ae.buffer,_e=Ae.type,Ce=Ae.bytesPerElement,Fe=_e===i.INT||_e===i.UNSIGNED_INT||$.gpuType===ba;if($.isInterleavedBufferAttribute){let ye=$.data,Be=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Mt=$.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ue=0;Ue<k.locationSize;Ue++)h(k.location+Ue,ye.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<k.locationSize;Ue++)m(k.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ue=0;Ue<k.locationSize;Ue++)T(k.location+Ue,xe/k.locationSize,_e,K,Be*Ce,(Mt+xe/k.locationSize*Ue)*Ce,Fe)}else{if($.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)h(k.location+ye,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ye=0;ye<k.locationSize;ye++)m(k.location+ye);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ye=0;ye<k.locationSize;ye++)T(k.location+ye,xe/k.locationSize,_e,K,xe*Ce,xe/k.locationSize*ye*Ce,Fe)}}else if(B!==void 0){let K=B[Z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(k.location,K);break;case 3:i.vertexAttrib3fv(k.location,K);break;case 4:i.vertexAttrib4fv(k.location,K);break;default:i.vertexAttrib1fv(k.location,K)}}}}y()}function M(){I();for(let D in n){let F=n[D];for(let H in F){let P=F[H];for(let C in P){let z=P[C];for(let B in z)u(z[B].object),delete z[B];delete P[C]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let H in F){let P=F[H];for(let C in P){let z=P[C];for(let B in z)u(z[B].object),delete z[B];delete P[C]}}delete n[D.id]}function x(D){for(let F in n){let H=n[F];for(let P in H){let C=H[P];if(C[D.id]===void 0)continue;let z=C[D.id];for(let B in z)u(z[B].object),delete z[B];delete C[D.id]}}}function b(D){for(let F in n){let H=n[F],P=D.isInstancedMesh===!0?D.id:0,C=H[P];if(C!==void 0){for(let z in C){let B=C[z];for(let Z in B)u(B[Z].object),delete B[Z];delete C[z]}delete H[P],Object.keys(H).length===0&&delete n[F]}}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Xx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==$n&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==yn&&x!==In&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:M,samples:S}}function Yx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Vn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let d=g.length!==0||f||n!==0||s;return s=f,n=g.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){t=u(g,f,0)},this.setState=function(g,f,d){let p=g.clippingPlanes,_=g.clipIntersection,m=g.clipShadows,h=i.get(g);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,T=y*4,v=h.clippingState||null;l.value=v,v=u(p,f,T,d);for(let M=0;M!==T;++M)v[M]=t[M];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(g,f,d,p){let _=g!==null?g.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let h=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,v=d;T!==_;++T,v+=4)o.copy(g[T]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var no=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Dr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:yi});r.uniforms.tEquirect.value=t;let o=new un(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=mn),new js(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},_d=256,$x=3,Zx=20,Hd=256,kd=16,Jx=3,Kx=new L,Qx=new lt,al=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new un(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Qx));let m=new js(n,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=g,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_d,cd(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===nr?this._setSize(e.image.length===0?_d:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yd(e,!1,!1),n=Math.log2(e)-$x;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jx(),this._integrationMaterial=e_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Jx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Hd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function yd(i,e,t){return new no(i,{minFilter:vi,generateMipmaps:e,type:Yn,colorSpace:Tr,depthBuffer:t})}function io(i,e,t){return new Rn({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:_n,blending:yi,depthTest:!1,depthWrite:!1})}function jx(){return io("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hd}u

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
	`)}function e_(){return io("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kd}},`

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
	`)}function t_(){return io("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zx}
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
	`)}function vd(){return io("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Md(){return io("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===va||d===Ma)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new no(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===va||d===Ma,_=d===Ss||d===nr;if(p||_){let m=t.get(f),h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return n===null&&(n=new al(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new al(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===va?f.mapping=Ss:d===Ma&&(f.mapping=nr),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function i_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mr("WebGLRenderer: "+n+" extension not supported."),s}}}function s_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function g(p){let _=p.index,m=p.attributes.position,h=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?Lr:Pr,v=new T(Math.ceil(y/3)*6,1),M=v.array;if(_!==null){let x=_.array;h=_.version;for(let b=0,I=0;b<y;b+=3){let A=x[b+0],D=x[b+1],F=x[b+2];M[I++]=A,M[I++]=D,M[I++]=D,M[I++]=F,M[I++]=F,M[I++]=A}}else{h=m.version;for(let x=0,b=0;x<y;x+=3){let I=x+0,A=x+1,D=x+2;M[b++]=I,M[b++]=A,M[b++]=A,M[b++]=D,M[b++]=D,M[b++]=I}}v.version=h;let S=r.get(p);S&&e.remove(S),r.set(p,v)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&g(p)}else g(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function r_(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,f){i.drawElements(n,f,r,g*o),t.update(f,n,1)}function c(g,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,g*o,d),t.update(f,n,d))}function u(g,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function o_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a_(i,e,t){let n=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==g){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let v=a.attributes.position.count*T,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*M*4*g),x=new Cr(S,v,M,g);x.type=In,x.needsUpdate=!0;let b=T*4;for(let A=0;A<g;A++){let D=m[A],F=h[A],H=y[A],P=v*M*4*A;for(let C=0;C<D.count;C++){let z=C*b;d===!0&&(s.fromBufferAttribute(D,C),S[P+z+0]=s.x,S[P+z+1]=s.y,S[P+z+2]=s.z,S[P+z+3]=0),p===!0&&(s.fromBufferAttribute(F,C),S[P+z+4]=s.x,S[P+z+5]=s.y,S[P+z+6]=s.z,S[P+z+7]=0),_===!0&&(s.fromBufferAttribute(H,C),S[P+z+8]=s.x,S[P+z+9]=s.y,S[P+z+10]=s.z,S[P+z+11]=H.itemSize===4?s.w:1)}}f={count:g,texture:x,size:new oe(v,M)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function l_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,g=c.geometry,f=e.get(c,g);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var c_={[Sc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[wc]:"CUSTOM_TONE_MAPPING"};function u_(i,e,t,n,s,r){let o=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Xt;u.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new mt([0,2,0,0,2,0],2));let g=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new un(u,g),d=new xa(-1,1,1,-1,0,1),p=null,_=null,m=!1,h,y=null,T=[],v=!1;this.setSize=function(M,S){o.setSize(M,S),a!==null&&a.setSize(M,S),l!==null&&l.setSize(M,S);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(M,S)}},this.setEffects=function(M){T=M,v=T.length>0&&T[0].isRenderPass===!0;let S=o.width,x=o.height;T.length>0&&a===null&&(a=new gn(S,x,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(S,x,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Wn(S,x),r===!0&&(c.format=Mi,c.type=bs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<T.length;I++){let A=T[I];A.setSize&&A.setSize(S,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,S){if(m||M.toneMapping===ni&&T.length===0)return!1;if(y=S,S!==null){let x=S.width,b=S.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return v===!1&&M.setRenderTarget(o),h=M.toneMapping,M.toneMapping=ni,!0},this.hasRenderPass=function(){return v},this.end=function(M,S){M.toneMapping=h,m=!0;let x=o,b=a;for(let I=0;I<T.length;I++){let A=T[I];A.enabled!==!1&&(A.render(M,b,x,S),A.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==M.outputColorSpace||_!==M.toneMapping){p=M.outputColorSpace,_=M.toneMapping,g.defines={},dt.getTransfer(p)===vt&&(g.defines.SRGB_TRANSFER="");let I=c_[_];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(y),M.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),g.dispose()}}var Vd=new En,Wd=new Wn(1,1),Xd=new Nr(1),qd=new Cr,Yd=new $o,$d=new Dr,Sd=[],bd=[],Ed=new Float32Array(16),Td=new Float32Array(9),wd=new Float32Array(4);function or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cl(i,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),Yt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Td.set(n),i.uniformMatrix3fv(this.addr,!1,Td),Yt(t,n)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ed.set(n),i.uniformMatrix4fv(this.addr,!1,Ed),Yt(t,n)}}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function ul(i){return i.version===0&&(i.compareFunction=Gc,i.needsUpdate=!0),i}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ul(Wd):r=Vd,t.setTexture2D(e||r,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yd,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ul(Xd):r=$d,t.setTextureCube(e||r,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qd,s)}function I_(i){switch(i){case 5126:return h_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function P_(i,e){i.uniform1fv(this.addr,e)}function L_(i,e){let t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function D_(i,e){let t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){let t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function U_(i,e){let t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O_(i,e){let t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B_(i,e){i.uniform1iv(this.addr,e)}function z_(i,e){i.uniform2iv(this.addr,e)}function G_(i,e){i.uniform3iv(this.addr,e)}function H_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function V_(i,e){i.uniform2uiv(this.addr,e)}function W_(i,e){i.uniform3uiv(this.addr,e)}function X_(i,e){i.uniform4uiv(this.addr,e)}function q_(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ul(Wd):o=Vd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Y_(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yd,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ul(Xd):o=$d;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Z_(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qd,r[o])}function J_(i){switch(i){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return k_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}var tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function Ad(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){let n=i.name,s=n.length;for(jc.lastIndex=0;;){let r=jc.exec(n),o=jc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ad(t,c===void 0?new tu(a,i,e):new nu(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new iu(a),Ad(t,g)),t=g}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);K_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Q_=37297,j_=0;function ey(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cd=new Ye;function ty(i){dt._getMatrix(Cd,dt.workingColorSpace,i);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case wr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Id(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ey(i.getShaderSource(e),a)}else return r}function ny(i,e){let t=ty(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iy={[Sc]:"Linear",[bc]:"Reinhard",[Ec]:"Cineon",[Tc]:"ACESFilmic",[Ac]:"AgX",[Rc]:"Neutral",[wc]:"Custom"};function sy(i,e){let t=iy[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ol=new L;function ry(){dt.getLuminanceCoefficients(ol);let i=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function ay(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ly(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function to(i){return i!==""}function Pd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ld(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(i){return i.replace(cy,uy)}function uy(i,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return su(t)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(i){return i.replace(hy,dy)}function dy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var fy={[Xr]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function py(i){return fy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var my={[nr]:"ENVMAP_MODE_REFRACTION"};function gy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":my[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xy={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function _y(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xy[i.combine]||"ENVMAP_BLENDING_NONE"}function yy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=py(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=gy(t),g=_y(t),f=oy(t),d=ay(r),p=s.createProgram(),_,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(to).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(to).join(`
`),m.length>0&&(m+=`
`)):(_=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?nt.tonemapping_pars_fragment:"",t.toneMapping!==ni?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),o=su(o),o=Pd(o,t),o=Ld(o,t),a=su(a),a=Pd(a,t),a=Ld(a,t),o=Dd(o),a=Dd(a),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=h+_+o,T=h+m+a,v=Rd(s,s.VERTEX_SHADER,y),M=Rd(s,s.FRAGMENT_SHADER,T);s.attachShader(p,v),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(A){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(M)||"",P=D.trim(),C=F.trim(),z=H.trim(),B=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,M);else{let k=Id(s,v,"vertex"),$=Id(s,M,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+k+`
`+$)}else P!==""?Ve("WebGLProgram: Program Info Log:",P):(C===""||z==="")&&(Z=!1);Z&&(A.diagnostics={runnable:B,programLog:P,vertexShader:{log:C,prefix:_},fragmentShader:{log:z,prefix:m}})}s.deleteShader(v),s.deleteShader(M),x=new rr(s,p),b=ly(s,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,Q_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}var vy=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ou(e),t.set(e,n)),n}},ou=class{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}};function My(i){return i===Yi||i===Kr||i===Qr}function Sy(i,e,t,n,s,r){let o=new Ir,a=new ru,l=new Set,c=[],u=new Map,g=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,I,A,D,F){let H=A.fog,P=D.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||C,z),Z=f[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=$!==void 0?$.length:0,xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let Ae,q,_e,Ce;if(Z){let Te=si[Z];Ae=Te.vertexShader,q=Te.fragmentShader}else{Ae=x.vertexShader,q=x.fragmentShader;let Te=a.getVertexShaderStage(x),St=a.getFragmentShaderStage(x);a.update(x,Te,St),_e=Te.id,Ce=St.id}let Fe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,Mt=D.isBatchedMesh===!0,Ue=!!x.map,et=!!x.matcap,ot=!!B,ne=ot&&B.isPMREMTexture===!0,pe=!!x.aoMap,he=!!x.lightMap,Pe=!!x.bumpMap&&x.wireframe===!1,Ee=!!x.normalMap,Je=!!x.displacementMap,ze=!!x.emissiveMap,at=!!x.metalnessMap,ct=!!x.roughnessMap,gt=x.anisotropy>0,O=x.clearcoat>0,kt=x.diffuseRoughness>0,st=x.dispersion>0,Tt=x.retroreflectivity>0,Me=x.iridescence>0,Ot=x.sheen>0,ke=x.transmission>0,Xe=gt&&!!x.anisotropyMap,R=O&&!!x.clearcoatMap,E=O&&!!x.clearcoatNormalMap,V=O&&!!x.clearcoatRoughnessMap,le=kt&&!!x.diffuseRoughnessMap,ee=Me&&!!x.iridescenceMap,de=Me&&!!x.iridescenceThicknessMap,Se=Ot&&!!x.sheenColorMap,J=Ot&&!!x.sheenRoughnessMap,Q=!!x.specularMap,me=!!x.specularColorMap,N=!!x.specularIntensityMap,j=ke&&!!x.transmissionMap,Y=ke&&!!x.thicknessMap,ge=!!x.gradientMap,ue=!!x.alphaMap,fe=x.alphaTest>0,Ge=!!x.alphaHash,tt=!!x.extensions,ce=ni;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ce=i.toneMapping);let He=ne?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Qe={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:q,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:Mt,batchingColor:Mt&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:et,envMap:ot,envMapMode:ot&&B.mapping,envMapPMREM:ne,envMapMaxLod:ne?He.length-1:null,envMapSize:ne?He[0].width:null,aoMap:pe,lightMap:he,bumpMap:Pe,normalMap:Ee,displacementMap:Je,emissiveMap:ze,normalMapObjectSpace:Ee&&x.normalMapType===Kh,normalMapTangentSpace:Ee&&x.normalMapType===Oc,packedNormalMap:Ee&&x.normalMapType===Oc&&My(x.normalMap.format),metalnessMap:at,roughnessMap:ct,anisotropy:gt,anisotropyMap:Xe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:V,diffuseRoughness:kt,diffuseRoughnessMap:le,dispersion:st,retroreflection:Tt,iridescence:Me,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:Ot,sheenColorMap:Se,sheenRoughnessMap:J,specularMap:Q,specularColorMap:me,specularIntensityMap:N,transmission:ke,transmissionMap:j,thicknessMap:Y,gradientMap:ge,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:Ge,combine:x.combine,mapUv:Ue&&d(x.map.channel),aoMapUv:pe&&d(x.aoMap.channel),lightMapUv:he&&d(x.lightMap.channel),bumpMapUv:Pe&&d(x.bumpMap.channel),normalMapUv:Ee&&d(x.normalMap.channel),displacementMapUv:Je&&d(x.displacementMap.channel),emissiveMapUv:ze&&d(x.emissiveMap.channel),metalnessMapUv:at&&d(x.metalnessMap.channel),roughnessMapUv:ct&&d(x.roughnessMap.channel),anisotropyMapUv:Xe&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(x.sheenRoughnessMap.channel),specularMapUv:Q&&d(x.specularMap.channel),specularColorMapUv:me&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:Y&&d(x.thicknessMap.channel),alphaMapUv:ue&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ee||gt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ue||ue),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bt,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(b,x),h(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function h(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let b=f[x.type],I;if(b){let A=si[b];I=md.clone(A.uniforms)}else I=x.uniforms;return I}function T(x,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new yy(i,b,x,s),c.push(I),u.set(b,I)),I}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:S}}function by(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ey(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,h){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:h},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=h),e++,y}function l(f,d,p,_,m,h,y){y.reversedDepth===!0&&(m=-m);let T=a(f,d,p,_,m,h);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(f,d,p,_,m,h){let y=a(f,d,p,_,m,h);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||Ey),n.length>1&&n.sort(d||Ud),s.length>1&&s.sort(d||Ud)}function g(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function Ty(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Fd,i.set(n,[o])):s>=r.length?(o=new Fd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new lt};break;case"SpotLight":t={position:new L,direction:new L,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ay(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ry=0;function Cy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Iy(i){let e=new wy,t=Ay(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new bt,o=new bt;function a(c){let u=0,g=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,p=0,_=0,m=0,h=0,y=0,T=0,v=0,M=0,S=0,x=0,b=0,I=0,A=0;c.sort(Cy);for(let F=0,H=c.length;F<H;F++){let P=c[F],C=P.color,z=P.intensity,B=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Yi?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=C.r*z,g+=C.g*z,f+=C.b*z;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],z);A++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,K=t.get(P);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=Z;let xe=$.getViewportCount();for(let Ae=0;Ae<xe;Ae++)n.sunShadowMatrix[_+Ae]=$.getMatrix(Ae),n.sunShadowCascade[_+Ae]=$._cascadeData[Ae];_+=xe,p++}n.sun[d]=k,d++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,K=t.get(P);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=k,m++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(C).multiplyScalar(z),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[y]=k;let $=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[y]=$.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=Z,x++}y++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(C).multiplyScalar(z),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=k,T++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let $=P.shadow,K=t.get(P);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,n.pointShadow[h]=K,n.pointShadowMap[h]=Z,n.pointShadowMatrix[h]=P.shadow.matrix,S++}n.point[h]=k,h++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(z),k.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[v]=k,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==h||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=h,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,D.sunLength=d,D.directionalLength=m,D.pointLength=h,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=A,n.version=Ry++)}function l(c,u){let g=0,f=0,d=0,p=0,_=0,m=0,h=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let M=n.sun[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),g++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),p++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),o.identity(),r.copy(v.matrixWorld),r.premultiply(h),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),d++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:a,setupView:l,state:n}}function Od(i){let e=new Iy(i),t=[],n=[],s=[];function r(g){u.camera=g,t.length=0,n.length=0,s.length=0}function o(g){g.isLightProbeGrid?s.push(g):t.push(g)}function a(g){n.push(g)}function l(){e.setup(t),s.sort((g,f)=>g.priority-f.priority||g.id-f.id)}function c(g){e.setupView(t,g)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Py(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Od(i),e.set(s,[a])):r>=o.length?(a=new Od(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
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
}`,Ny=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Uy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bd=new bt,eo=new L,eu=new L;function Fy(i,e,t){let n=new ps,s=new oe,r=new oe,o=new Ft,a=new ra,l=new oa,c={},u=t.maxTextureSize,g={[qi]:_n,[_n]:qi,[Bt]:Bt},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Ly,fragmentShader:Dy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new un(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let h=this.type;this.render=function(S,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Rh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(yi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=h!==this.type;H&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(C=>C.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,C=S.length;P<C;P++){let z=S[P],B=z.shadow;if(B===void 0){Ve("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===er){if(z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gn(s.x,s.y,{format:Yi,type:Yn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Wn(s.x,s.y,In),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=_i,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt}else z.isPointLight?(B.map=new no(s.x),B.map.depthTexture=new Nr(s.x,qn)):(B.map=new gn(s.x,s.y),B.map.depthTexture=new Wn(s.x,s.y,qn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=_i,this.type===Xr?(B.map.depthTexture.compareFunction=k?zc:Bc,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();z.isPointLight!==!0&&B.updateMatrices(z,b);let K=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let xe=0;xe<$;xe++){let Ae=B.getCamera(xe);if(z.isPointLight){let q=B.camera,_e=B.matrix,Ce=z.distance||q.far;Ce!==q.far&&(q.far=Ce,q.updateProjectionMatrix()),eo.setFromMatrixPosition(z.matrixWorld),q.position.copy(eo),eu.copy(q.position),eu.add(Ny[xe]),q.up.copy(Uy[xe]),q.lookAt(eu),q.updateMatrixWorld(),_e.makeTranslation(-eo.x,-eo.y,-eo.z),Bd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Bd,q.coordinateSystem,q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(B.map),i.clear());let q=B.getViewport(xe);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(o)}n=B.getFrustum(xe),v(x,b,Ae,z,K,this.type)}B.isPointLightShadow!==!0&&this.type===er&&y(B,b),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(I,A,D)};function y(S,x){let b=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new gn(s.x,s.y,{format:Yi,type:Yn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,b,d,_,null)}function T(S,x,b,I){let A=null,D=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)A=D;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=A.uuid,H=x.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let C=P[H];C===void 0&&(C=A.clone(),P[H]=C,x.addEventListener("dispose",M)),A=C}if(A.visible=x.visible,A.wireframe=x.wireframe,I===er?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:g[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=b}return A}function v(S,x,b,I,A,D){if(S.visible===!1)return;if(S.layers.test(A)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===er)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let P=e.update(S),C=S.material;if(Array.isArray(C)){let z=P.groups;for(let B=0,Z=z.length;B<Z;B++){let k=z[B],$=C[k.materialIndex];if($&&$.visible){let K=T(S,$,I,D);S.onBeforeShadow(i,S,x,b,P,K,k),i.renderBufferDirect(b,null,P,K,S,k),S.onAfterShadow(i,S,x,b,P,K,k)}}}else if(C.visible){let z=T(S,C,I,D);S.onBeforeShadow(i,S,x,b,P,z,null),i.renderBufferDirect(b,null,P,z,S,null),S.onAfterShadow(i,S,x,b,P,z,null)}}let H=S.children;for(let P=0,C=H.length;P<C;P++)v(H[P],x,b,I,A,D)}function M(S){S.target.removeEventListener("dispose",M);for(let b in c){let I=c[b],A=S.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function Oy(i,e){function t(){let N=!1,j=new Ft,Y=null,ge=new Ft(0,0,0,0);return{setMask:function(ue){Y!==ue&&!N&&(i.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){N=ue},setClear:function(ue,fe,Ge,tt,ce){ce===!0&&(ue*=tt,fe*=tt,Ge*=tt),j.set(ue,fe,Ge,tt),ge.equals(j)===!1&&(i.clearColor(ue,fe,Ge,tt),ge.copy(j))},reset:function(){N=!1,Y=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,j=!1,Y=null,ge=null,ue=null;return{setReversed:function(fe){if(j!==fe){let Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),j=fe;let tt=ue;ue=null,this.setClear(tt)}},getReversed:function(){return j},setTest:function(fe){fe?ye(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!N&&(i.depthMask(fe),Y=fe)},setFunc:function(fe){if(j&&(fe=ld[fe]),ge!==fe){switch(fe){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ue!==fe&&(ue=fe,j&&(fe=1-fe),i.clearDepth(fe))},reset:function(){N=!1,Y=null,ge=null,ue=null,j=!1}}}function s(){let N=!1,j=null,Y=null,ge=null,ue=null,fe=null,Ge=null,tt=null,ce=null;return{setTest:function(He){N||(He?ye(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(He){j!==He&&!N&&(i.stencilMask(He),j=He)},setFunc:function(He,Qe,Te){(Y!==He||ge!==Qe||ue!==Te)&&(i.stencilFunc(He,Qe,Te),Y=He,ge=Qe,ue=Te)},setOp:function(He,Qe,Te){(fe!==He||Ge!==Qe||tt!==Te)&&(i.stencilOp(He,Qe,Te),fe=He,Ge=Qe,tt=Te)},setLocked:function(He){N=He},setClear:function(He){ce!==He&&(i.clearStencil(He),ce=He)},reset:function(){N=!1,j=null,Y=null,ge=null,ue=null,fe=null,Ge=null,tt=null,ce=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},g={},f={},d=new WeakMap,p=[],_=null,m=!1,h=null,y=null,T=null,v=null,M=null,S=null,x=null,b=new lt(0,0,0),I=0,A=!1,D=null,F=null,H=null,P=null,C=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=Z>=2);let $=null,K={},xe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),q=new Ft().fromArray(xe),_e=new Ft().fromArray(Ae);function Ce(N,j,Y,ge){let ue=new Uint8Array(4),fe=i.createTexture();i.bindTexture(N,fe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(j+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return fe}let Fe={};Fe[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(i.DEPTH_TEST),o.setFunc(qs),Pe(!1),Ee(mc),ye(i.CULL_FACE),pe(yi);function ye(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Be(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Mt(N,j){return f[N]!==j?(i.bindFramebuffer(N,j),f[N]=j,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=j),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ue(N,j){let Y=p,ge=!1;if(N){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let ue=N.textures;if(Y.length!==ue.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ge=ue.length;fe<Ge;fe++)Y[fe]=i.COLOR_ATTACHMENT0+fe;Y.length=ue.length,ge=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Y)}function et(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let ot={[Ms]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};ot[Lh]=i.MIN,ot[Dh]=i.MAX;let ne={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(N,j,Y,ge,ue,fe,Ge,tt,ce,He){if(N===yi){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(ye(i.BLEND),m=!0),N!==Ch){if(N!==h||He!==A){if((y!==Ms||M!==Ms)&&(i.blendEquation(i.FUNC_ADD),y=Ms,M=Ms),He)switch(N){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}T=null,v=null,S=null,x=null,b.set(0,0,0),I=0,h=N,A=He}return}ue=ue||j,fe=fe||Y,Ge=Ge||ge,(j!==y||ue!==M)&&(i.blendEquationSeparate(ot[j],ot[ue]),y=j,M=ue),(Y!==T||ge!==v||fe!==S||Ge!==x)&&(i.blendFuncSeparate(ne[Y],ne[ge],ne[fe],ne[Ge]),T=Y,v=ge,S=fe,x=Ge),(tt.equals(b)===!1||ce!==I)&&(i.blendColor(tt.r,tt.g,tt.b,ce),b.copy(tt),I=ce),h=N,A=!1}function he(N,j){N.side===Bt?Be(i.CULL_FACE):ye(i.CULL_FACE);let Y=N.side===_n;j&&(Y=!Y),Pe(Y),N.blending===tr&&N.transparent===!1?pe(yi):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function Ee(N){N!==wh?(ye(i.CULL_FACE),N!==F&&(N===mc?i.cullFace(i.BACK):N===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),F=N}function Je(N){N!==H&&(B&&i.lineWidth(N),H=N)}function ze(N,j,Y){N?(ye(i.POLYGON_OFFSET_FILL),(P!==j||C!==Y)&&(P=j,C=Y,o.getReversed()&&(j=-j,Y=-Y),i.polygonOffset(j,Y))):Be(i.POLYGON_OFFSET_FILL)}function at(N){N?ye(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function ct(N){N===void 0&&(N=i.TEXTURE0+z-1),$!==N&&(i.activeTexture(N),$=N)}function gt(N,j,Y){Y===void 0&&($===null?Y=i.TEXTURE0+z-1:Y=$);let ge=K[Y];ge===void 0&&(ge={type:void 0,texture:void 0},K[Y]=ge),(ge.type!==N||ge.texture!==j)&&($!==Y&&(i.activeTexture(Y),$=Y),i.bindTexture(N,j||Fe[N]),ge.type=N,ge.texture=j)}function O(){let N=K[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Me(){try{i.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Xe(){try{i.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function V(){try{i.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function le(N){return g[N]!==void 0?g[N]:i.getParameter(N)}function ee(N,j){g[N]!==j&&(i.pixelStorei(N,j),g[N]=j)}function de(N){q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function Se(N){_e.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),_e.copy(N))}function J(N,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ge=Y.get(N);ge===void 0&&(ge=i.getUniformBlockIndex(j,N.name),i.uniformBlockBinding(j,ge,ge),Y.set(N,ge))}function Q(N,j,Y){let ue=c.get(j).get(N);l[ue]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,Y),l[ue]=Y)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},$=null,K={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,h=null,y=null,T=null,v=null,M=null,S=null,x=null,b=new lt(0,0,0),I=0,A=!1,D=null,F=null,H=null,P=null,C=null,q.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Be,bindFramebuffer:Mt,drawBuffers:Ue,useProgram:et,setBlending:pe,setMaterial:he,setFlipSided:Pe,setCullFace:Ee,setLineWidth:Je,setPolygonOffset:ze,setScissorTest:at,activeTexture:ct,bindTexture:gt,unbindTexture:O,compressedTexImage2D:kt,compressedTexImage3D:st,texImage2D:E,texImage3D:V,pixelStorei:ee,getParameter:le,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Xe,texStorage3D:R,texSubImage2D:Tt,texSubImage3D:Me,compressedTexSubImage2D:Ot,compressedTexSubImage3D:ke,scissor:de,viewport:Se,reset:me}}function By(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,g=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(R,E){return m?new OffscreenCanvas(R,E):Rr("canvas")}function y(R,E,V){let le=1,ee=Xe(R);if((ee.width>V||ee.height>V)&&(le=V/Math.max(ee.width,ee.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor(le*ee.width),Se=Math.floor(le*ee.height);f===void 0&&(f=h(de,Se));let J=E?h(de,Se):f;return J.width=de,J.height=Se,J.getContext("2d").drawImage(R,0,0,de,Se),Ve("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+Se+")."),J}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function T(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,E,V,le,ee,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se;le&&(Se=e.get("EXT_texture_norm16"),Se||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8),V===i.UNSIGNED_SHORT&&Se&&(J=Se.R16_EXT),V===i.SHORT&&Se&&(J=Se.R16_SNORM_EXT)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),E===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8),V===i.UNSIGNED_SHORT&&Se&&(J=Se.RG16_EXT),V===i.SHORT&&Se&&(J=Se.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_SHORT&&Se&&(J=Se.RGB16_EXT),V===i.SHORT&&Se&&(J=Se.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),E===i.RGBA){let Q=de?wr:dt.getTransfer(ee);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Q===vt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&Se&&(J=Se.RGBA16_EXT),V===i.SHORT&&Se&&(J=Se.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(R,E){let V;return R?E===null||E===qn||E===bs?V=i.DEPTH24_STENCIL8:E===In?V=i.DEPTH32F_STENCIL8:E===ir&&(V=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qn||E===bs?V=i.DEPTH_COMPONENT24:E===In?V=i.DEPTH_COMPONENT32F:E===ir&&(V=i.DEPTH_COMPONENT16),V}function b(R,E){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function I(R){let E=new WeakRef(R);n.get(R).__ref=E,p.add(E),_.register(R,E,E)}function A(R){let E=n.get(R).__ref;E!==void 0&&(p.delete(E),_.unregister(E))}function D(R){H(R.target)}function F(R){P(R.target)}function H(R){R.removeEventListener("dispose",D),A(R),z(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&g.delete(R)}function P(R){R.removeEventListener("dispose",F),A(R),Z(R)}function C(){for(let R of p){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):H(E))}p.clear(),g.clear()}function z(R){let E=n.get(R);if(E.__webglInit===void 0)return;let V=R.source,le=d.get(V);if(le){let ee=le[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&B(R),Object.keys(le).length===0&&d.delete(V)}n.remove(R)}function B(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let V=R.source,le=d.get(V);delete le[E.__cacheKey],o.memory.textures--}function Z(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&H(V),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let de=0;de<E.__webglFramebuffer[ee].length;de++)i.deleteFramebuffer(E.__webglFramebuffer[ee][de]);else i.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)i.deleteFramebuffer(E.__webglFramebuffer[ee]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let le=R.textures;for(let ee=0,de=le.length;ee<de;ee++){let Se=n.get(le[ee]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(le[ee])}n.remove(R)}let k=0;function $(){k=0}function K(){return k}function xe(R){k=R}function Ae(){let R=k;return R>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function q(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function _e(R,E){let V=n.get(R);if(R.isVideoTexture&&Ot(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let le=R.image;if(le===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,R,E);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function Ce(R,E){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){he(V,R,E);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function Fe(R,E){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){he(V,R,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function ye(R,E){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Pe(V,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let Be={[ko]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},Mt={[jt]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},Ue={[jh]:i.NEVER,[Gc]:i.ALWAYS,[ed]:i.LESS,[Bc]:i.LEQUAL,[td]:i.EQUAL,[zc]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function et(R,E){if(E.type===In&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mn||E.magFilter===Sa||E.magFilter===qr||E.magFilter===vi||E.minFilter===mn||E.minFilter===Sa||E.minFilter===qr||E.minFilter===vi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Be[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Be[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Be[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Mt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==qr&&E.minFilter!==vi||E.type===In&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",D),I(E));let le=E.source,ee=d.get(le);ee===void 0&&(ee={},d.set(le,ee));let de=q(E);if(de!==R.__cacheKey){ee[de]===void 0&&(ee[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[de].usedTimes++;let Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&B(E)),R.__cacheKey=de,R.__webglTexture=ee[de].texture}return V}function ne(R,E,V){return Math.floor(Math.floor(R/V)/E)}function pe(R,E,V,le){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,le,E.data);else{de.sort((N,j)=>N.start-j.start);let Se=0;for(let N=1;N<de.length;N++){let j=de[Se],Y=de[N],ge=j.start+j.count,ue=ne(Y.start,E.width,4),fe=ne(j.start,E.width,4);Y.start<=ge+1&&ue===fe&&ne(Y.start+Y.count-1,E.width,4)===ue?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++Se,de[Se]=Y)}de.length=Se+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,j=de.length;N<j;N++){let Y=de[N],ge=Math.floor(Y.start/4),ue=Math.ceil(Y.count/4),fe=ge%E.width,Ge=Math.floor(ge/E.width),tt=ue,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,fe,Ge,tt,ce,V,le,E.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function he(R,E,V){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);let ee=ot(R,E),de=E.source;t.bindTexture(le,R.__webglTexture,i.TEXTURE0+V);let Se=n.get(de);if(de.version!==Se.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ce=dt.getPrimaries(dt.workingColorSpace),He=E.colorSpace===Si?null:dt.getPrimaries(E.colorSpace),Qe=E.colorSpace===Si||ce===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=y(E.image,!1,s.maxTextureSize);Q=ke(E,Q);let me=r.convert(E.format,E.colorSpace),N=r.convert(E.type),j=S(E.internalFormat,me,N,E.normalized,E.colorSpace,E.isVideoTexture);et(le,E);let Y,ge=E.mipmaps,ue=E.isVideoTexture!==!0,fe=Se.__version===void 0||ee===!0,Ge=de.dataReady,tt=b(E,Q);if(E.isDepthTexture)j=x(E.format===Mi,E.type),fe&&(ue?t.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,me,N,null));else if(E.isDataTexture)if(ge.length>0){ue&&fe&&t.texStorage2D(i.TEXTURE_2D,tt,j,ge[0].width,ge[0].height);for(let ce=0,He=ge.length;ce<He;ce++)Y=ge[ce],ue?Ge&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Y.width,Y.height,me,N,Y.data):t.texImage2D(i.TEXTURE_2D,ce,j,Y.width,Y.height,0,me,N,Y.data);E.generateMipmaps=!1}else ue?(fe&&t.texStorage2D(i.TEXTURE_2D,tt,j,Q.width,Q.height),Ge&&pe(E,Q,me,N)):t.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,me,N,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ue&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,j,ge[0].width,ge[0].height,Q.depth);for(let ce=0,He=ge.length;ce<He;ce++)if(Y=ge[ce],E.format!==$n)if(me!==null)if(ue){if(Ge)if(E.layerUpdates.size>0){let Qe=Yc(Y.width,Y.height,E.format,E.type);for(let Te of E.layerUpdates){let St=Y.data.subarray(Te*Qe/Y.data.BYTES_PER_ELEMENT,(Te+1)*Qe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Te,Y.width,Y.height,1,me,St)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Y.width,Y.height,Q.depth,me,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,j,Y.width,Y.height,Q.depth,0,Y.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Y.width,Y.height,Q.depth,me,N,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,j,Y.width,Y.height,Q.depth,0,me,N,Y.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ue&&fe&&t.texStorage2D(i.TEXTURE_2D,tt,j,ge[0].width,ge[0].height);for(let ce=0,He=ge.length;ce<He;ce++)Y=ge[ce],E.format!==$n?me!==null?ue?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Y.width,Y.height,me,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,j,Y.width,Y.height,0,Y.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Ge&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Y.width,Y.height,me,N,Y.data):t.texImage2D(i.TEXTURE_2D,ce,j,Y.width,Y.height,0,me,N,Y.data)}else if(E.isDataArrayTexture)if(ue){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,j,Q.width,Q.height,Q.depth),Ge)if(E.layerUpdates.size>0){let ce=Yc(Q.width,Q.height,E.format,E.type);for(let He of E.layerUpdates){let Qe=Q.data.subarray(He*ce/Q.data.BYTES_PER_ELEMENT,(He+1)*ce/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,Q.width,Q.height,1,me,N,Qe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,N,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,me,N,Q.data);else if(E.isData3DTexture)ue?(fe&&t.texStorage3D(i.TEXTURE_3D,tt,j,Q.width,Q.height,Q.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,N,Q.data)):t.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,me,N,Q.data);else if(E.isFramebufferTexture){if(fe)if(ue)t.texStorage2D(i.TEXTURE_2D,tt,j,Q.width,Q.height);else{let ce=Q.width,He=Q.height;for(let Qe=0;Qe<tt;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,j,ce,He,0,me,N,null),ce>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),Q.parentNode!==ce){ce.appendChild(Q),g.add(E),ce.onpaint=He=>{let Qe=He.changedElements;for(let Te of g)Qe.includes(Te.image)&&(Te.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Qe=i.RGBA,Te=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,Te,St,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ue&&fe){let ce=Xe(ge[0]);t.texStorage2D(i.TEXTURE_2D,tt,j,ce.width,ce.height)}for(let ce=0,He=ge.length;ce<He;ce++)Y=ge[ce],ue?Ge&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,me,N,Y):t.texImage2D(i.TEXTURE_2D,ce,j,me,N,Y);E.generateMipmaps=!1}else if(ue){if(fe){let ce=Xe(Q);t.texStorage2D(i.TEXTURE_2D,tt,j,ce.width,ce.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,N,Q)}else t.texImage2D(i.TEXTURE_2D,0,j,me,N,Q);T(E)&&E.mipmapsAutoUpdate===!0&&v(le),Se.__version=de.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pe(R,E,V){if(E.image.length!==6)return;let le=ot(R,E),ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let de=n.get(ee);if(ee.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+V);let Se=dt.getPrimaries(dt.workingColorSpace),J=E.colorSpace===Si?null:dt.getPrimaries(E.colorSpace),Q=E.colorSpace===Si||Se===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let me=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,j=[];for(let Te=0;Te<6;Te++)!me&&!N?j[Te]=y(E.image[Te],!0,s.maxCubemapSize):j[Te]=N?E.image[Te].image:E.image[Te],j[Te]=ke(E,j[Te]);let Y=j[0],ge=r.convert(E.format,E.colorSpace),ue=r.convert(E.type),fe=S(E.internalFormat,ge,ue,E.normalized,E.colorSpace),Ge=E.isVideoTexture!==!0,tt=de.__version===void 0||le===!0,ce=ee.dataReady,He=b(E,Y);et(i.TEXTURE_CUBE_MAP,E);let Qe;if(E.isDepthTexture){if(fe=x(E.format===Mi,E.type),tt)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,Y.width,Y.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,Y.width,Y.height,0,ge,ue,null)}else if(me){Ge&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,fe,Y.width,Y.height);for(let Te=0;Te<6;Te++){Qe=j[Te].mipmaps;for(let St=0;St<Qe.length;St++){let Jt=Qe[St];E.format!==$n?ge!==null?Ge?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,0,0,Jt.width,Jt.height,ge,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,fe,Jt.width,Jt.height,0,Jt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,0,0,Jt.width,Jt.height,ge,ue,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St,fe,Jt.width,Jt.height,0,ge,ue,Jt.data)}}}else{if(Qe=E.mipmaps,Ge&&tt){Qe.length>0&&He++;let Te=Xe(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,fe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Ge?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,j[Te].width,j[Te].height,ge,ue,j[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,j[Te].width,j[Te].height,0,ge,ue,j[Te].data);for(let St=0;St<Qe.length;St++){let Pi=Qe[St].image[Te].image;Ge?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,0,0,Pi.width,Pi.height,ge,ue,Pi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,fe,Pi.width,Pi.height,0,ge,ue,Pi.data)}}else{Ge?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,ue,j[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,ge,ue,j[Te]);for(let St=0;St<Qe.length;St++){let Jt=Qe[St];Ge?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,0,0,ge,ue,Jt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,St+1,fe,ge,ue,Jt.image[Te])}}}T(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),de.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ee(R,E,V,le,ee,de){let Se=r.convert(V.format,V.colorSpace),J=r.convert(V.type),Q=S(V.internalFormat,Se,J,V.normalized,V.colorSpace),me=n.get(E),N=n.get(V);if(N.__renderTarget=E,!me.__hasExternalTextures){let j=Math.max(1,E.width>>de),Y=Math.max(1,E.height>>de);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,de,Q,j,Y,E.depth,0,Se,J,null):t.texImage2D(ee,de,Q,j,Y,0,Se,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ee,N.__webglTexture,0,Tt(E)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ee,N.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let le=E.depthTexture,ee=le&&le.isDepthTexture?le.type:null,de=x(E.stencilBuffer,ee),Se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(E),de,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(E),de,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,R)}else{let le=E.textures;for(let ee=0;ee<le.length;ee++){let de=le[ee],Se=r.convert(de.format,de.colorSpace),J=r.convert(de.type),Q=S(de.internalFormat,Se,J,de.normalized,de.colorSpace);Me(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(E),Q,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(E),Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(R,E,V){let le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(E.depthTexture);ee.__renderTarget=E;let de=le?E.depthTexture.image[0]:E.depthTexture.image;(!ee.__webglTexture||de.width!==E.width||de.height!==E.height)&&(de.width=E.width,de.height=E.height,E.depthTexture.needsUpdate=!0),le?ye(E.depthTexture,0):_e(E.depthTexture,0);let Se=ee.__webglTexture,J=Tt(E),Q=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,me=E.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===_i)Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,Se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,Se,0);else if(E.depthTexture.format===Mi)Me(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,Se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(R){let E=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){let ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",ee)};le.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=le}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let le=0;le<6;le++)ze(E.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?ze(E.__webglFramebuffer[0],R,0):ze(E.__webglFramebuffer,R,0);else if(V){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),Je(E.__webglDepthbuffer[le],R,!1);else{let ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Je(E.__webglDepthbuffer,R,!1);else{let ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,E,V){let le=n.get(R);E!==void 0&&Ee(le.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&at(R)}function gt(R){let E=R.texture,V=n.get(R),le=n.get(E);R.addEventListener("dispose",F),I(R);let ee=R.textures,de=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,o.memory.textures++),de){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let Q=0;Q<E.mipmaps.length;Q++)V.__webglFramebuffer[J][Q]=i.createFramebuffer()}else V.__webglFramebuffer[J]=i.createFramebuffer()}else{if(E.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)V.__webglFramebuffer[J]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Se)for(let J=0,Q=ee.length;J<Q;J++){let me=n.get(ee[J]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){let Q=ee[J];V.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[J]);let me=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),j=S(Q.internalFormat,me,N,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),Y=Tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,j,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,V.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ee(V.__webglFramebuffer[J][Q],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Ee(V.__webglFramebuffer[J],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let J=0,Q=ee.length;J<Q;J++){let me=ee[J],N=n.get(me),j=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),et(j,me),Ee(V.__webglFramebuffer,R,me,i.COLOR_ATTACHMENT0+J,j,0),T(me)&&v(j)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,le.__webglTexture),et(J,E),E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ee(V.__webglFramebuffer[Q],R,E,i.COLOR_ATTACHMENT0,J,Q);else Ee(V.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,J,0);T(E)?v(J):E.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&at(R)}function O(R){let E=R.textures;for(let V=0,le=E.length;V<le;V++){let ee=E[V];if(T(ee)&&ee.mipmapsAutoUpdate===!0){let de=M(R),Se=n.get(ee).__webglTexture;t.bindTexture(de,Se),v(de),t.unbindTexture()}}}let kt=[];function st(R){if(R.samples>0){if(Me(R)===!1){let E=R.textures,V=R.width,le=R.height,ee=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(R),J=E.length>1;if(J)for(let me=0;me<E.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<E.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let N=n.get(E[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,ee,i.NEAREST),l===!0&&(kt.length=0,kt.push(i.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&kt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<E.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let N=n.get(E[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Tt(R){return Math.min(s.maxSamples,R.samples)}function Me(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ke(R,E){let V=R.colorSpace,le=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Tr&&V!==Si&&(dt.getTransfer(V)===vt?(le!==$n||ee!==yn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",V)),E}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ae,this.resetTextureUnits=$,this.getTextureUnits=K,this.setTextureUnits=xe,this.setTexture2D=_e,this.setTexture2DArray=Ce,this.setTexture3D=Fe,this.setTextureCube=ye,this.rebindTextures=ct,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me,this.dispose=C}function zy(i,e){function t(n,s=Si){let r,o=dt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return i.BYTE;if(n===Pc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===$n)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Yr||n===$r||n===Zr||n===Jr)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Ia||n===Pa||n===La)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Kr||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Na)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fa)return r.COMPRESSED_R11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ga||n===Ha||n===ka||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===el||n===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===Qr||n===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hy=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:Gy,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,g=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new au,h={},y=t.getContextAttributes(),T=null,v=null,M=[],S=[],x=new oe,b=null,I=null,A=new pn;A.viewport=new Ft;let D=new pn;D.viewport=new Ft;let F=[A,D],H=new _a,P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let _e=M[q];return _e===void 0&&(_e=new Zs,M[q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(q){let _e=M[q];return _e===void 0&&(_e=new Zs,M[q]=_e),_e.getGripSpace()},this.getHand=function(q){let _e=M[q];return _e===void 0&&(_e=new Zs,M[q]=_e),_e.getHandSpace()};function z(q){let _e=S.indexOf(q.inputSource);if(_e===-1)return;let Ce=M[_e];Ce!==void 0&&(Ce.update(q.inputSource,q.frame,c||o),Ce.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<M.length;q++){let _e=S[q];_e!==null&&(S[q]=null,M[q].disconnect(_e))}P=null,C=null,m.reset();for(let q in h)delete h[q];if(e.setRenderTarget(T),d=null,f=null,g=null,s=null,v=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),I!==null){let q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Fe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=y.stencil?Mi:_i,Fe=y.stencil?bs:qn);let Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new gn(f.textureWidth,f.textureHeight,{format:$n,type:yn,depthTexture:new Wn(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gn(d.framebufferWidth,d.framebufferHeight,{format:$n,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(q){for(let _e=0;_e<q.removed.length;_e++){let Ce=q.removed[_e],Fe=S.indexOf(Ce);Fe>=0&&(S[Fe]=null,M[Fe].disconnect(Ce))}for(let _e=0;_e<q.added.length;_e++){let Ce=q.added[_e],Fe=S.indexOf(Ce);if(Fe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=S.length){S.push(Ce),Fe=Be;break}else if(S[Be]===null){S[Be]=Ce,Fe=Be;break}if(Fe===-1)break}let ye=M[Fe];ye&&ye.connect(Ce)}}function k(q,_e){_e===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(_e.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let _e=q.near,Ce=q.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),H.near=D.near=A.near=_e,H.far=D.far=A.far=Ce,(P!==H.near||C!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,C=H.far),H.layers.mask=q.layers.mask|6,A.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Fe=q.parent,ye=H.cameras;k(H,Fe);for(let Be=0;Be<ye.length;Be++)k(ye[Be],Fe);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),$(q,H,Fe)};function $(q,_e,Ce){Ce===null?q.matrix.copy(_e.matrixWorld):(q.matrix.copy(Ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(_e.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(_e.projectionMatrix),q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return h[q]};let K=null;function xe(q,_e){if(u=_e.getViewerPose(c||o),p=_e,u!==null){let Ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Fe=!1;Ce.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let Ue=0;Ue<Ce.length;Ue++){let et=Ce[Ue],ot=null;if(d!==null)ot=d.getViewport(et);else{let pe=g.getViewSubImage(f,et);ot=pe.viewport,Ue===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ne=F[Ue];ne===void 0&&(ne=new pn,ne.layers.enable(Ue),ne.viewport=new Ft,F[Ue]=ne),ne.matrix.fromArray(et.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(et.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ot.x,ot.y,ot.width,ot.height),Ue===0&&(H.matrix.copy(ne.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(ne)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=n.getBinding();let Ue=g.getDepthInformation(Ce[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),g=n.getBinding();for(let Ue=0;Ue<Ce.length;Ue++){let et=Ce[Ue].camera;if(et){let ot=h[et];ot||(ot=new Ur,h[et]=ot);let ne=g.getCameraImage(et);ot.sourceTexture=ne}}}}for(let Ce=0;Ce<M.length;Ce++){let Fe=S[Ce],ye=M[Ce];Fe!==null&&ye!==void 0&&ye.update(Fe,_e,c||o)}K&&K(q,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let Ae=new zd;Ae.setAnimationLoop(xe),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}},ky=new bt,Zd=new Ye;Zd.set(-1,0,0,0,1,0,0,0,1);function Vy(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Wc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,T,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),g(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&d(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),p(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let y=e.get(h),T=y.envMap,v=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function g(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,y){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wy(i,e,t,n){let s={},r={};function o(y,T){let v=T.program;n.uniformBlockBinding(y,v,s[y.id])}function a(y,T){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let M=T.program;n.updateUBOMapping(y,M);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let T=i.createBuffer(),v=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,v,M),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],v=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let S=0,x=v.length;S<x;S++){let b=v[S];if(Array.isArray(b))for(let I=0,A=b.length;I<A;I++)u(b[I],S,I,M);else u(b,S,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,T,v,M){if(f(y,T,v,M)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){let A=x[I],D=_(A,!0);g(A,y.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else g(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function g(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function f(y,T,v,M){let S=y.value,x=T+"_"+v;if(Array.isArray(S)){M[x]===void 0&&(M[x]=[]);let b=M[x],I=!1;for(let A=0;A<S.length;A++)d(S[A],b,A)===!0&&(I=!0);return I}return d(S,M,x)}function d(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let M=T[v];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let T=y.uniforms,v=0,M=16;for(let x=0,b=T.length;x<b;x++){let I=Array.isArray(T[x])?T[x]:[T[x]];for(let A=0,D=I.length;A<D;A++){let F=I[A],H=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(T[x])||Array.isArray(F.value),C=v;for(let B=0,Z=H.length;B<Z;B++){let k=H[B],$=_(k,P),K=v%M,xe=K%$.boundary,Ae=K+xe;v+=xe,Ae!==0&&M-Ae<$.storage&&(v+=M-Ae),B===0&&(C=v),v+=$.storage}let z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new z((v-C)/Float32Array.BYTES_PER_ELEMENT),F.__offset=C}}let S=v%M;return S>0&&(v+=M-S),y.__size=v,y.__cache={},this}function _(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let T=y.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:h}}var Xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function qy(){return ii===null&&(ii=new Ko(Xy,16,16,Yi,Yn),ii.name="DFG_LUT",ii.minFilter=mn,ii.magFilter=mn,ii.wrapS=jn,ii.wrapT=jn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var ll=class{constructor(e={}){let{canvas:t=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Ra,Aa,wa]),h=new Set([yn,qn,ir,bs,Ea,Ta]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,S=null,x=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,F=null,H=null,P=null,C=null;this._outputColorSpace=fn;let z=0,B=0,Z=null,k=-1,$=null,K=new Ft,xe=new Ft,Ae=null,q=new lt(0),_e=0,Ce=t.width,Fe=t.height,ye=1,Be=null,Mt=null,Ue=new Ft(0,0,Ce,Fe),et=new Ft(0,0,Ce,Fe),ot=!1,ne=new ps,pe=new Qo,he=!1,Pe=!1,Ee=new bt,Je=new L,ze=new Ft,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function gt(){return Z===null?ye:1}let O=n;function kt(w,U){return t.getContext(w,U)}let st,Tt,Me,Ot,ke,Xe,R,E,V,le,ee,de,Se,J,Q,me,N,j,Y,ge,ue,fe,Ge;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let U="webgl2";if(O=kt(U,w),O===null)throw kt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(w){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),We("WebGLRenderer: "+w.message),w}function tt(){st=new i_(O),st.init(),ue=new zy(O,st),Tt=new qx(O,st,e,ue),Me=new Oy(O,st),Tt.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),H=O.createFramebuffer(),P=O.createFramebuffer(),C=O.createFramebuffer(),Ot=new o_(O),ke=new by,Xe=new By(O,st,Me,ke,Tt,ue,Ot),R=new n_(A),E=new l0(O),fe=new Wx(O,E),V=new s_(O,E,Ot,fe),le=new l_(O,V,E,fe,Ot),j=new a_(O,Tt,Xe),Q=new Yx(ke),ee=new Sy(A,R,st,Tt,fe,Q),de=new Vy(A,ke),Se=new Ty,J=new Py(st),N=new Vx(A,R,Me,le,p,l),me=new Fy(A,le,Tt),Ge=new Wy(O,Ot,Tt,Me),Y=new Xx(O,st,Ot),ge=new r_(O,st,Ot),Ot.programs=ee.programs,A.capabilities=Tt,A.extensions=st,A.properties=ke,A.renderLists=Se,A.shadowMap=me,A.state=Me,A.info=Ot}_!==yn&&(I=new u_(_,t.width,t.height,a,s,r));let ce=new lu(A,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(w){w!==void 0&&(ye=w,this.setSize(Ce,Fe,!1))},this.getSize=function(w){return w.set(Ce,Fe)},this.setSize=function(w,U,X=!0){if(ce.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=w,Fe=U,t.width=Math.floor(w*ye),t.height=Math.floor(U*ye),X===!0&&(t.style.width=w+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Ce*ye,Fe*ye).floor()},this.setDrawingBufferSize=function(w,U,X){Ce=w,Fe=U,ye=X,t.width=Math.floor(w*X),t.height=Math.floor(U*X),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(_===yn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,U,X,G){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,U,X,G),Me.viewport(K.copy(Ue).multiplyScalar(gt()).round())},this.getScissor=function(w){return w.copy(et)},this.setScissor=function(w,U,X,G){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,U,X,G),Me.scissor(xe.copy(et).multiplyScalar(gt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){Me.setScissorTest(ot=w)},this.setOpaqueSort=function(w){Be=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,X=!0){let G=0;if(w){let W=!1;if(Z!==null){let be=Z.texture.format;W=m.has(be)}if(W){let be=Z.texture.type,Le=h.has(be),ve=N.getClearColor(),Re=N.getClearAlpha(),Oe=ve.r,Ze=ve.g,ut=ve.b;Le?(y[0]=Oe,y[1]=Ze,y[2]=ut,y[3]=Re,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=Oe,T[1]=Ze,T[2]=ut,T[3]=Re,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),Se.dispose(),J.dispose(),Xe.dispose(),ke.dispose(),R.dispose(),le.dispose(),V.dispose(),fe.dispose(),Ge.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Vu),ce.removeEventListener("sessionend",Wu),ss.stop()};function He(w){w.preventDefault(),Hc("WebGLRenderer: Context Lost."),D=!0}function Qe(){Hc("WebGLRenderer: Context Restored."),D=!1;let w=Ot.autoReset,U=me.enabled,X=me.autoUpdate,G=me.needsUpdate,W=me.type;tt(),Ot.autoReset=w,me.enabled=U,me.autoUpdate=X,me.needsUpdate=G,me.type=W}function Te(w){We("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){let U=w.target;U.removeEventListener("dispose",St),Jt(U)}function Jt(w){Pi(w),ke.remove(w)}function Pi(w){let U=ke.get(w).programs;U!==void 0&&(U.forEach(function(X){ee.releaseProgram(X)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,X,G,W,be){U===null&&(U=at);let Le=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=kp(w,U,X,G,W);Me.setMaterial(G,Le);let Re=X.index,Oe=1;if(G.wireframe===!0){if(Re=V.getWireframeAttribute(X),Re===void 0)return;Oe=2}let Ze=X.drawRange,ut=X.attributes.position,De=Ze.start*Oe,ht=(Ze.start+Ze.count)*Oe;be!==null&&(De=Math.max(De,be.start*Oe),ht=Math.min(ht,(be.start+be.count)*Oe)),Re!==null?(De=Math.max(De,0),ht=Math.min(ht,Re.count)):ut!=null&&(De=Math.max(De,0),ht=Math.min(ht,ut.count));let Vt=ht-De;if(Vt<0||Vt===1/0)return;fe.setup(W,G,ve,X,Re);let Rt,wt=Y;if(Re!==null&&(Rt=E.get(Re),wt=ge,wt.setIndex(Rt)),W.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*gt()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(W.isLine){let on=G.linewidth;on===void 0&&(on=1),Me.setLineWidth(on*gt()),W.isLineSegments?wt.setMode(O.LINES):W.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else W.isPoints?wt.setMode(O.POINTS):W.isSprite&&wt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let on=W._multiDrawStarts,Ne=W._multiDrawCounts,dn=W._multiDrawCount,xt=Re?E.get(Re).bytesPerElement:1,rs=ke.get(G).currentProgram.getUniforms();for(let an=0;an<dn;an++)rs.setValue(O,"_gl_DrawID",an),wt.render(on[an]/xt,Ne[an])}else if(W.isInstancedMesh)wt.renderInstances(De,Vt,W.count);else if(X.isInstancedBufferGeometry){let on=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ne=Math.min(X.instanceCount,on);wt.renderInstances(De,Vt,Ne)}else wt.render(De,Vt)};function ku(w,U,X,G){F!==null&&w.isNodeMaterial&&F.setObject(G,w),he===!0&&Q.setState(w,X,!1),w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,mr(w,U,G),w.side=qi,w.needsUpdate=!0,mr(w,U,G),w.side=Bt):mr(w,U,G)}this.compile=function(w,U,X=null){X===null&&(X=w),F!==null&&F.renderStart(w,U,X),S=J.get(X),S.init(U),b.push(S),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),w!==X&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Pe=this.localClippingEnabled,he=Q.init(this.clippingPlanes,Pe),he===!0&&Q.setGlobalState(this.clippingPlanes,U),F!==null&&me.render(S.state.shadowsArray,X,U);let G=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let be=W.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){let ve=be[Le];ku(ve,X,U,W),G.add(ve)}else ku(be,X,U,W),G.add(be)}),S=b.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(w,U,X=null){let G=this.compile(w,U,X);return new Promise(W=>{function be(){if(G.forEach(function(Le){let Re=ke.get(Le).currentProgram;(Re===void 0||Re.isReady())&&G.delete(Le)}),G.size===0){W(w);return}setTimeout(be,10)}st.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Nl=null;function Gp(w){Nl&&Nl(w)}function Vu(){ss.stop()}function Wu(){ss.start()}let ss=new zd;ss.setAnimationLoop(Gp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(w){Nl=w,ce.setAnimationLoop(w),w===null?ss.stop():ss.start()},ce.addEventListener("sessionstart",Vu),ce.addEventListener("sessionend",Wu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(w,U);let X=ce.enabled===!0&&ce.isPresenting===!0,G=I!==null&&(Z===null||X)&&I.begin(A,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,Z),S=J.get(w,b.length),S.init(U),S.state.textureUnits=Xe.getTextureUnits(),b.push(S),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?pe.setFromArrayCamera(U):ne.setFromProjectionMatrix(Ee,Nn,U.reversedDepth),Pe=this.localClippingEnabled,he=Q.init(this.clippingPlanes,Pe),M=Se.get(w,x.length),M.init(),x.push(M),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&Ul(Le,U,-1/0,A.sortObjects)}Ul(w,U,0,A.sortObjects),M.finish(),F!==null&&F.updateLights(S.state.lightsArray),A.sortObjects===!0&&M.sort(Be,Mt),ct=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ct&&N.addToRenderList(M,w),this.info.autoReset===!0&&this.info.reset(),he===!0&&Q.beginShadows();let W=S.state.shadowsArray;if(me.render(W,w,U),he===!0&&Q.endShadows(),(G&&I.hasRenderPass())===!1){let Le=M.opaque,ve=M.transmissive;if(S.setupLights(),U.isArrayCamera){let Re=U.cameras;if(ve.length>0)for(let Oe=0,Ze=Re.length;Oe<Ze;Oe++){let ut=Re[Oe];qu(Le,ve,w,ut)}ct&&N.render(w);for(let Oe=0,Ze=Re.length;Oe<Ze;Oe++){let ut=Re[Oe];Xu(M,w,ut,ut.viewport)}}else ve.length>0&&qu(Le,ve,w,U),ct&&N.render(w),Xu(M,w,U)}Z!==null&&B===0&&(Xe.updateMultisampleRenderTarget(Z),Xe.updateRenderTargetMipmap(Z)),G&&I.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),fe.resetDefaultState(),k=-1,$=null,b.pop(),b.length>0?(S=b[b.length-1],Xe.setTextureUnits(S.state.textureUnits),he===!0&&Q.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,F!==null&&F.renderEnd()};function Ul(w,U,X,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){let Le=U.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Le)){G&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);let ve=le.update(w),Re=w.material;Re.visible&&M.push(w,ve,Re,X,ze.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=U.isArrayCamera?pe:ne;if(!w.frustumCulled||w.intersectsFrustum(Le)){let ve=le.update(w),Re=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ze.copy(ve.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Re)){let Oe=ve.groups;for(let Ze=0,ut=Oe.length;Ze<ut;Ze++){let De=Oe[Ze],ht=Re[De.materialIndex];ht&&ht.visible&&M.push(w,ve,ht,X,ze.z,De,U)}}else Re.visible&&M.push(w,ve,Re,X,ze.z,null,U)}}}let be=w.children;for(let Le=0,ve=be.length;Le<ve;Le++)Ul(be[Le],U,X,G)}function Xu(w,U,X,G){let{opaque:W,transmissive:be,transparent:Le}=w;S.setupLightsView(X),he===!0&&Q.setGlobalState(A.clippingPlanes,X),G&&Me.viewport(K.copy(G)),W.length>0&&lo(W,U,X),be.length>0&&lo(be,U,X),Le.length>0&&lo(Le,U,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function qu(w,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let De=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new gn(1,1,{generateMipmaps:!0,type:De?Yn:yn,minFilter:vi,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let be=S.state.transmissionRenderTarget[G.id],Le=G.viewport||K;be.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let ve=A.getRenderTarget(),Re=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(q),_e=A.getClearAlpha(),_e<1&&A.setClearColor(16777215,.5),A.clear(),ct&&N.render(X);let Ze=A.toneMapping;A.toneMapping=ni;let ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),he===!0&&Q.setGlobalState(A.clippingPlanes,G),lo(w,X,G),Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be),st.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ht=0,Vt=U.length;ht<Vt;ht++){let Rt=U[ht],{object:wt,geometry:on,material:Ne,group:dn}=Rt;if(Ne.side===Bt&&wt.layers.test(G.layers)){let xt=Ne.side;Ne.side=_n,Ne.needsUpdate=!0,Yu(wt,X,G,on,Ne,dn),Ne.side=xt,Ne.needsUpdate=!0,De=!0}}De===!0&&(Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be))}A.setRenderTarget(ve,Re,Oe),A.setClearColor(q,_e),ut!==void 0&&(G.viewport=ut),A.toneMapping=Ze}function lo(w,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,be=w.length;W<be;W++){let Le=w[W],{object:ve,geometry:Re,group:Oe}=Le,Ze=Le.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),ve.layers.test(X.layers)&&Yu(ve,U,X,Re,Ze,Oe)}}function Yu(w,U,X,G,W,be){F!==null&&W.isNodeMaterial&&F.setObject(w,W),w.onBeforeRender(A,U,X,G,W,be),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(A,U,X,G,w,be),W.transparent===!0&&W.side===Bt&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,A.renderBufferDirect(X,U,G,W,w,be),W.side=qi,W.needsUpdate=!0,A.renderBufferDirect(X,U,G,W,w,be),W.side=Bt):A.renderBufferDirect(X,U,G,W,w,be),w.onAfterRender(A,U,X,G,W,be)}function $u(w){let U=0;for(let X of w)X.texture!==null&&U++;return U}function mr(w,U,X){U.isScene!==!0&&(U=at);let G=ke.get(w),W=S.state.lights,be=S.state.shadowsArray,Le=W.state.version,ve=ee.getParameters(w,W.state,be,U,X,S.state.lightProbeGridArray),Re=ee.getProgramCacheKey(ve),Oe=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=R.get(w.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",St),Oe=new Map,G.programs=Oe,G.programVariants=new Map);let ut=Oe.get(Re);if(ut!==void 0){if(G.currentProgram===ut&&G.lightsStateVersion===Le)return Ju(w,ve),ut}else ve.uniforms=ee.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,X,ve),w.onBeforeCompile(ve,A),ut=ee.acquireProgram(ve,Re),Oe.set(Re,ut),G.uniforms=ve.uniforms;let De=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Q.uniform),Ju(w,ve),G.needsLights=Wp(w),G.lightsStateVersion=Le,G.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=$u(S.state.lightProbeGridArray),G.currentProgram=ut,G.uniformsList=null,ut}function Hp(w,U,X,G,W){let be=ke.get(w),Le=be.currentProgram.id+","+G+","+W,ve=be.programVariants.get(Le);return ve===void 0?(ve=mr(w,U,X),be.programVariants.set(Le,ve)):(be.currentProgram=ve,be.uniformsList=null,be.outputColorSpace=G,be.toneMapping=W),ve}function Zu(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=rr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ju(w,U){let X=ke.get(w);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function kp(w,U,X,G,W){U.isScene!==!0&&(U=at),Xe.resetTextureUnits();let be=U.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ve=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dt.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=R.get(G.envMap||Le,Re),Ze=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ut=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,Vt=!!X.morphAttributes.color,Rt=ni;G.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let wt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,on=wt!==void 0?wt.length:0,Ne=ke.get(G),dn=S.state.lights;if(he===!0&&(Pe===!0||w!==$)){let Nt=w===$&&G.id===k;Q.setState(G,w,Nt)}let xt=!1,rs=!1;G.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==dn.state.version||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==Oe||G.fog===!0&&Ne.fog!==be||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Q.numPlanes||Ne.numIntersection!==Q.numIntersection)||Ne.vertexAlphas!==Ze||Ne.vertexTangents!==ut||Ne.morphTargets!==De||Ne.morphNormals!==ht||Ne.morphColors!==Vt||Ne.morphTargetsCount!==on||Ne.numLightProbeGrids!==$u(S.state.lightProbeGridArray)?xt=!0:(Ne.outputColorSpace!==ve||Ne.toneMapping!==Rt)&&(rs=!0):(xt=!0,Ne.__version=G.version);let an=Ne.currentProgram;(xt===!0||rs===!0)&&(an=rs===!0?Hp(G,U,W,ve,Rt):mr(G,U,W),F&&G.isNodeMaterial&&F.onUpdateProgram(G,an,Ne));let co=!1,Li=!1,os=!1,pt=an.getUniforms(),rn=Ne.uniforms;if(Me.useProgram(an.program)&&(co=!0,Li=!0,os=!0),G.id!==k&&(k=G.id,Li=!0),co||$!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(O,"projectionMatrix",w.projectionMatrix),pt.setValue(O,"viewMatrix",w.matrixWorldInverse);let Kt=pt.map.cameraPosition;Kt!==void 0&&Kt.setValue(O,Je.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&pt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,Li=!0,os=!0)}if(Ne.needsLights&&(dn.state.sunShadowMap.length>0&&pt.setValue(O,"sunShadowMap",dn.state.sunShadowMap,Xe),dn.state.directionalShadowMap.length>0&&pt.setValue(O,"directionalShadowMap",dn.state.directionalShadowMap,Xe),dn.state.spotShadowMap.length>0&&pt.setValue(O,"spotShadowMap",dn.state.spotShadowMap,Xe),dn.state.pointShadowMap.length>0&&pt.setValue(O,"pointShadowMap",dn.state.pointShadowMap,Xe)),W.isSkinnedMesh){pt.setOptional(O,W,"bindMatrix"),pt.setOptional(O,W,"bindMatrixInverse");let Nt=W.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),pt.setValue(O,"boneTexture",Nt.boneTexture,Xe))}W.isBatchedMesh&&(pt.setOptional(O,W,"batchingTexture"),pt.setValue(O,"batchingTexture",W._matricesTexture,Xe),pt.setOptional(O,W,"batchingIdTexture"),pt.setValue(O,"batchingIdTexture",W._indirectTexture,Xe),pt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(O,"batchingColorTexture",W._colorsTexture,Xe));let zn=X.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&j.update(W,X,an),(Li||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,pt.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=qy()),Li){if(pt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&Vp(rn,os),be&&G.fog===!0&&de.refreshFogUniforms(rn,be),de.refreshMaterialUniforms(rn,G,ye,Fe,S.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Nt=v,Kt=0;for(let hi of S.state.lightProbeGridArray)hi.texture!==null&&(Nt.textures[Kt]=hi.texture,Nt.min[Kt]=hi.boundingBox.min,Nt.max[Kt]=hi.boundingBox.max,Nt.resolution[Kt]=hi.resolution,Kt++);for(let hi in Nt)Nt[hi].length=Kt;rn.probesSH.value=Nt.textures,rn.probesMin.value=Nt.min,rn.probesMax.value=Nt.max,rn.probesResolution.value=Nt.resolution}rr.upload(O,Zu(Ne),rn,Xe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rr.upload(O,Zu(Ne),rn,Xe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(O,"center",W.center),pt.setValue(O,"modelViewMatrix",W.modelViewMatrix),pt.setValue(O,"normalMatrix",W.normalMatrix),pt.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Nt=G.uniformsGroups;for(let Kt=0,hi=Nt.length;Kt<hi;Kt++){let Qu=Nt[Kt];Ge.update(Qu,an),Ge.bind(Qu,an)}}return an}function Vp(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Wp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,U,X){let G=ke.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ke.get(w.texture).__webglTexture=U,ke.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let X=ke.get(w);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,X=0){Z=w,z=U,B=X;let G=null,W=!1,be=!1;if(w){let ve=ke.get(w);if(ve.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),K.copy(w.viewport),xe.copy(w.scissor),Ae=w.scissorTest,Me.viewport(K),Me.scissor(xe),Me.setScissorTest(Ae),k=-1;return}else if(ve.__webglFramebuffer===void 0)Xe.setupRenderTarget(w);else if(ve.__hasExternalTextures)Xe.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ze=w.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(w)}}let Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Oe=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?G=Oe[U][X]:G=Oe[U],W=!0):w.samples>0&&Xe.useMultisampledRTT(w)===!1?G=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[X]:G=Oe,K.copy(w.viewport),xe.copy(w.scissor),Ae=w.scissorTest}else K.copy(Ue).multiplyScalar(ye).floor(),xe.copy(et).multiplyScalar(ye).floor(),Ae=ot;if(X!==0&&(G=H),Me.bindFramebuffer(O.FRAMEBUFFER,G)&&Me.drawBuffers(w,G),Me.viewport(K),Me.scissor(xe),Me.setScissorTest(Ae),W){let ve=ke.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,X)}else if(be){let ve=U;for(let Re=0;Re<w.textures.length;Re++){let Oe=ke.get(w.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Oe.__webglTexture,X,ve)}}else if(w!==null&&X!==0){let ve=ke.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,X)}k=-1};function Ku(w){let U=ke.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=Tt.textureFormatReadable(w.format),U.__typeReadable=Tt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,X,G,W,be,Le,ve=0){if(!(w&&w.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re){Me.bindFramebuffer(O.FRAMEBUFFER,Re);try{let Oe=w.textures[ve],Ze=Oe.format,ut=Oe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let De=Ku(Oe);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&X>=0&&X<=w.height-W&&O.readPixels(U,X,G,W,ue.convert(Ze),ue.convert(ut),be)}finally{let Oe=Z!==null?ke.get(Z).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,U,X,G,W,be,Le,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re)if(U>=0&&U<=w.width-G&&X>=0&&X<=w.height-W){Me.bindFramebuffer(O.FRAMEBUFFER,Re);let Oe=w.textures[ve],Ze=Oe.format,ut=Oe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let De=Ku(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(U,X,G,W,ue.convert(Ze),ue.convert(ut),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Vt=Z!==null?ke.get(Z).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Vt);let Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ad(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ht),O.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,X=0){let G=Math.pow(2,-X),W=Math.floor(w.image.width*G),be=Math.floor(w.image.height*G),Le=U!==null?U.x:0,ve=U!==null?U.y:0;Xe.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Le,ve,W,be),Me.unbindTexture()},this.copyTextureToTexture=function(w,U,X=null,G=null,W=0,be=0){let Le,ve,Re,Oe,Ze,ut,De,ht,Vt,Rt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(X!==null)Le=X.max.x-X.min.x,ve=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,Ze=X.min.y,ut=X.isBox3?X.min.z:0;else{let pt=Math.pow(2,-W);Le=Math.floor(Rt.width*pt),ve=Math.floor(Rt.height*pt),w.isDataArrayTexture?Re=Rt.depth:w.isData3DTexture?Re=Math.floor(Rt.depth*pt):Re=1,Oe=0,Ze=0,ut=0}G!==null?(De=G.x,ht=G.y,Vt=G.z):(De=0,ht=0,Vt=0);let wt=ue.convert(U.format),on=ue.convert(U.type),Ne;U.isData3DTexture?(Xe.setTexture3D(U,0),Ne=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Xe.setTexture2DArray(U,0),Ne=O.TEXTURE_2D_ARRAY):(Xe.setTexture2D(U,0),Ne=O.TEXTURE_2D),Me.activeTexture(O.TEXTURE0),Me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),Me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Me.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let dn=Me.getParameter(O.UNPACK_ROW_LENGTH),xt=Me.getParameter(O.UNPACK_IMAGE_HEIGHT),rs=Me.getParameter(O.UNPACK_SKIP_PIXELS),an=Me.getParameter(O.UNPACK_SKIP_ROWS),co=Me.getParameter(O.UNPACK_SKIP_IMAGES);Me.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),Me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),Me.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),Me.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),Me.pixelStorei(O.UNPACK_SKIP_IMAGES,ut);let Li=w.isDataArrayTexture||w.isData3DTexture,os=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let pt=ke.get(w),rn=ke.get(U),zn=ke.get(pt.__renderTarget),Nt=ke.get(rn.__renderTarget);Me.bindFramebuffer(O.READ_FRAMEBUFFER,zn.__webglFramebuffer),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Kt=0;Kt<Re;Kt++)Li&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(w).__webglTexture,W,ut+Kt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,be,Vt+Kt)),O.blitFramebuffer(Oe,Ze,Oe+Le,Ze+ve,De,ht,De+Le,ht+ve,O.DEPTH_BUFFER_BIT,O.NEAREST);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||ke.has(w)){let pt=ke.get(w),rn=ke.get(U);Me.bindFramebuffer(O.READ_FRAMEBUFFER,P),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,C);for(let zn=0;zn<Re;zn++)Li?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pt.__webglTexture,W,ut+zn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,W),os?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,be,Vt+zn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,be),W!==0?O.blitFramebuffer(Oe,Ze,Oe+Le,Ze+ve,De,ht,De+Le,ht+ve,O.COLOR_BUFFER_BIT,O.NEAREST):os?O.copyTexSubImage3D(Ne,be,De,ht,Vt+zn,Oe,Ze,Le,ve):O.copyTexSubImage2D(Ne,be,De,ht,Oe,Ze,Le,ve);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else os?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ne,be,De,ht,Vt,Le,ve,Re,wt,on,Rt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,be,De,ht,Vt,Le,ve,Re,wt,Rt.data):O.texSubImage3D(Ne,be,De,ht,Vt,Le,ve,Re,wt,on,Rt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,De,ht,Le,ve,wt,on,Rt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,De,ht,Rt.width,Rt.height,wt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,be,De,ht,Le,ve,wt,on,Rt);Me.pixelStorei(O.UNPACK_ROW_LENGTH,dn),Me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),Me.pixelStorei(O.UNPACK_SKIP_PIXELS,rs),Me.pixelStorei(O.UNPACK_SKIP_ROWS,an),Me.pixelStorei(O.UNPACK_SKIP_IMAGES,co),be===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(w){ke.get(w).__webglFramebuffer===void 0&&Xe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){z=0,B=0,Z=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var hl=class extends en{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new oe(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},ar=new L,Jd=new bt,Kd=new bt,Qd=new L,jd=new L,dl=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Jd.copy(_.matrixWorldInverse),Kd.multiplyMatrices(_.projectionMatrix,Jd),u(p,p,_),this.sortObjects&&d(p)},this.setSize=function(p,_){n=p,s=_,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,m=p.children.length;_<m;_++)c(p.children[_])}function u(p,_,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ar.setFromMatrixPosition(p.matrixWorld),ar.applyMatrix4(Kd);let h=ar.z>=-1&&ar.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=h===!0?"":"none",h===!0){p.onBeforeRender(t,_,m);let v=100*p.center.x,M=100*p.center.y;y.style.transformOrigin=`${v}% ${M}%`;let S=-p.rotation2D,x=ar.x*r+r,b=-ar.y*o+o;y.style.transform=`translate(${-v}%, ${-M}%) translate(${x}px, ${b}px) rotate(${S}rad)`,y.parentNode!==l&&l.appendChild(y),p.onAfterRender(t,_,m)}let T={distanceToCameraSquared:g(m,p)};a.objects.set(p,T)}for(let h=0,y=p.children.length;h<y;h++)u(p.children[h],_,m)}function g(p,_){return Qd.setFromMatrixPosition(p.matrixWorld),jd.setFromMatrixPosition(_.matrixWorld),Qd.distanceToSquared(jd)}function f(p){let _=[];return p.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(p){let _=f(p).sort(function(h,y){if(h.renderOrder!==y.renderOrder)return y.renderOrder-h.renderOrder;let T=a.objects.get(h).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return T-v}),m=_.length;for(let h=0,y=_.length;h<y;h++)_[h].element.style.zIndex=m-h}}};var ef=new L,Yy=new bn,tf=new L,fl=class extends en{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ri=new bt,$y=new bt,pl=class{constructor(e={}){let t=this,n,s,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(m,h){let y=h.projectionMatrix.elements[5]*o;h.view&&h.view.enabled?(c.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,c.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let T,v;h.isOrthographicCamera&&(T=-(h.right+h.left)/2,v=(h.top+h.bottom)/2);let M=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,S=h.isOrthographicCamera?`scale( ${M} )scale(`+y+")translate("+g(T)+"px,"+g(v)+"px)"+f(h.matrixWorldInverse):`scale( ${M} )translateZ(`+y+"px)"+f(h.matrixWorldInverse),b=(h.isPerspectiveCamera?"perspective("+y+"px) ":"")+S+"translate("+r+"px,"+o+"px)";a.camera.style!==b&&(u.style.transform=b,a.camera.style=b),_(m,m,h,S)},this.setSize=function(m,h){n=m,s=h,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=h+"px",c.style.width=m+"px",c.style.height=h+"px",u.style.width=m+"px",u.style.height=h+"px"};function g(m){return Math.abs(m)<1e-10?0:m}function f(m){let h=m.elements;return"matrix3d("+g(h[0])+","+g(-h[1])+","+g(h[2])+","+g(h[3])+","+g(h[4])+","+g(-h[5])+","+g(h[6])+","+g(h[7])+","+g(h[8])+","+g(-h[9])+","+g(h[10])+","+g(h[11])+","+g(h[12])+","+g(-h[13])+","+g(h[14])+","+g(h[15])+")"}function d(m){let h=m.elements;return"translate(-50%,-50%)"+("matrix3d("+g(h[0])+","+g(h[1])+","+g(h[2])+","+g(h[3])+","+g(-h[4])+","+g(-h[5])+","+g(-h[6])+","+g(-h[7])+","+g(h[8])+","+g(h[9])+","+g(h[10])+","+g(h[11])+","+g(h[12])+","+g(h[13])+","+g(h[14])+","+g(h[15])+")")}function p(m){m.isCSS3DObject&&(m.element.style.display="none");for(let h=0,y=m.children.length;h<y;h++)p(m.children[h])}function _(m,h,y,T){if(m.visible===!1){p(m);return}if(m.isCSS3DObject){let v=m.layers.test(y.layers)===!0,M=m.element;if(M.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(t,h,y);let S;m.isCSS3DSprite?(ri.copy(y.matrixWorldInverse),ri.transpose(),m.rotation2D!==0&&ri.multiply($y.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(ef,Yy,tf),ri.setPosition(ef),ri.scale(tf),ri.elements[3]=0,ri.elements[7]=0,ri.elements[11]=0,ri.elements[15]=1,S=d(ri)):S=d(m.matrixWorld);let x=a.objects.get(m);if(x===void 0||x.style!==S){M.style.transform=S;let b={style:S};a.objects.set(m,b)}M.parentNode!==u&&u.appendChild(M),m.onAfterRender(t,h,y)}}for(let v=0,M=m.children.length;v<M;v++)_(m.children[v],h,y,T)}}};var Ts={mention:"\xA9 ZENIKA 2026 \xB7 Tous droits r\xE9serv\xE9s",gates:{G1:"Un objectif mesurable, les donn\xE9es pour le suivre, un seul responsable",G2:"Tests d'acceptation \xE9crits, interfaces convenues, cibles de qualit\xE9 fix\xE9es",G3:"Tous les contr\xF4les passent, failles ferm\xE9es, une personne nomm\xE9e signe",G4:"Chaque changement trac\xE9, indicateurs m\xE9tier en place, une astreinte nomm\xE9e",G5:"R\xE9sultats face \xE0 la promesse, co\xFBt complet connu, d\xE9cision de garder ou de retirer",G6:"D\xE9pendances cartographi\xE9es, utilisateurs pr\xE9venus, savoir pr\xE9serv\xE9"},shapes:{idea:"id\xE9e",shape:"cadrage",spec:"spec",code:"code",build:"build",review:"revue",deploy:"d\xE9ploiement",keep:"maintien",observe:"observation",analyse:"analyse",opportunity:"opportunit\xE9",retirement:"retrait"},roles:{spec:"Transforme l'id\xE9e en spec\u202F; pas de code tant qu'une question reste ouverte",context:"Garde ce que savent les agents sourc\xE9, dat\xE9 et r\xE9utilisable",orchestrator:"R\xE9partit le travail entre les agents et d\xE9cide o\xF9 les personnes relisent",guarantor:"Signe chaque gate en son nom, sur les preuves\u202F; jamais d\xE9l\xE9gu\xE9",evaluation:"V\xE9rifie que ce que produisent les agents reste bon dans la dur\xE9e",agentops:"Garde les agents et leurs outils enregistr\xE9s, \xE0 jour et en service",finops:"Relie la d\xE9pense en tokens \xE0 ce qu'elle produit, chaque budget avec son responsable",audit:"Sait dire qui a fait quoi, personne ou agent, sous quelle identit\xE9"},concerns:{feed:{name:"Alimenter les pipelines",question:"Comment donner aux agents le bon contexte\u202F?"},govern:{name:"Gouverner les agents",question:"Comment gouverner les agents et ce qu'ils savent\u202F?"},harness:{name:"Construire le harnais",question:"Quel harnais garde les agents sur la bonne voie\u202F?"},secure:{name:"S\xE9curiser le flux",question:"Comment s\xE9curiser le flux de bout en bout\u202F?"},identity:{name:"Identit\xE9 des agents",question:"Qui est chaque agent, et qui en r\xE9pond\u202F?"},tokens:{name:"\xC9conomie des tokens",question:"Combien co\xFBteront les tokens, et qui paie\u202F?"},measure:{name:"Mesurer les progr\xE8s",question:"Comment savoir si l'on progresse\u202F?"}},sections:{problem:"Le probl\xE8me",wheel:"La roue",nexus:"Le Nexus",layers:"Les couches",people:"Les personnes",measure:"Mesure",napkin:"La serviette"}};var nf=[{id:"discover",name:"Discover"},{id:"design",name:"Design"},{id:"develop",name:"Develop"},{id:"deploy",name:"Deploy"},{id:"deepen",name:"Deepen"},{id:"drop",name:"Drop",side:!0}],Zn=nf.filter(i=>!i.side),oi=[{id:"G1",name:"Ready to Spec",checks:"A measurable goal, the data to track it, one accountable owner"},{id:"G2",name:"Ready to Build",checks:"Acceptance tests written, interfaces agreed, quality targets set"},{id:"G3",name:"Ready to Release",checks:"All checks pass, security issues closed, a named person signs off"},{id:"G4",name:"Released and Observable",checks:"Every change traced, business metrics live, someone on call"},{id:"G5",name:"Opportunity or Retire",checks:"Results against the promise, full cost known, a keep-or-retire call"},{id:"G6",name:"Retirement Scoped",checks:"Dependencies mapped, users informed, knowledge preserved"}],so=[{name:"idea",angle:0},{name:"shape",angle:54.7},{name:"spec",angle:89.3},{name:"code",angle:121},{name:"build",angle:144},{name:"review",angle:167},{name:"deploy",angle:198.7},{name:"keep",angle:233.3},{name:"observe",angle:265},{name:"analyse",angle:288},{name:"opportunity",angle:311},{name:"retirement",drop:!0}],Fn=[{id:"discover",name:"Discover",archetype:"Probes",purpose:"Finds what is worth building, and what already exists",layers:[{id:"L0",name:"Idea & Discovery Tooling",part:"Market probe",on:[1,1,0,0,1,0]},{id:"L12",name:"App Portfolio & Capability Discovery",part:"Portfolio probe",on:[1,1,0,0,0,1]}]},{id:"build",name:"Build",archetype:"Gear train",purpose:"Turns the spec into working code",layers:[{id:"L2",name:"SDD Tooling",part:"Cam",on:[0,1,1,0,0,0]},{id:"L1",name:"AI Coding Assistants",part:"Drive gear",on:[0,1,1,0,0,0]}]},{id:"contextualise",name:"Contextualise",archetype:"Manifold",purpose:"Gives every agent the same context and the tools it may call",layers:[{id:"L5",name:"Context Factory",part:"Intake manifold",on:[1,1,1,1,1,1]},{id:"L4",name:"Agent & MCP Registry",part:"Valve block",on:[1,1,1,1,1,0]},{id:"L6",name:"Multi-agent Orchestration",part:"Distributor",on:[0,0,1,1,1,0]}]},{id:"measure",name:"Measure",archetype:"Gauges",purpose:"Proves the output is good, and keeps proving it",layers:[{id:"L8",name:"CI/CD & Quality",part:"Test bench",on:[0,0,1,1,1,0]},{id:"L9",name:"Observability & DORA",part:"Dials",on:[0,0,0,1,1,1]}]},{id:"platform",name:"Platform",archetype:"Chassis",purpose:"Routes, meters and secures every model call, on ground you control",layers:[{id:"L3",name:"AI Gateway",part:"Throttle",on:[1,1,1,1,1,1]},{id:"L7",name:"Prompt Versioning & FinOps",part:"Fuel meter",on:[1,1,1,1,1,1]},{id:"L10",name:"Infrastructure & Sovereignty",part:"Engine block",on:[1,1,1,1,1,1]}]}],lr={id:"L11",name:"Identity & Non-Human Access",part:"Ignition key",checks:["L3","L4","L10"]},ml=[{id:"knowledge",name:"Knowledge",from:270},{id:"intent",name:"Intent",from:0,teamOnly:!0},{id:"contracts",name:"Contracts",from:90},{id:"operations",name:"Operations",from:180}],uu=[{id:"org",name:"Org",color:"#8e1542"},{id:"bu",name:"BU",color:"#bf1d67"},{id:"team",name:"Team",color:"#ee2238"}],hu=[{id:"spec",name:"Specification Engineer",parts:["register:intent","phase:design","layer:L2"],purpose:"Turns the Idea into a spec; no code while a question stays open"},{id:"context",name:"Context Engineer",parts:["layer:L5","register:knowledge","register:contracts"],purpose:"Keeps what agents know sourced, dated and reusable"},{id:"orchestrator",name:"Orchestrator",parts:["layer:L6","layer:L1"],purpose:"Splits the work between agents and decides where people review"},{id:"guarantor",name:"Decision Guarantor",parts:["gates"],purpose:"Signs each gate in their own name, on the evidence; never delegated"},{id:"evaluation",name:"Evaluation Engineer",parts:["layer:L8","layer:L9"],purpose:"Checks that what agents produce stays good over time"},{id:"agentops",name:"AgentOps",parts:["layer:L4","layer:L6"],purpose:"Keeps agents and their tools registered, current and in service"},{id:"finops",name:"AI FinOps",parts:["layer:L7","layer:L3"],purpose:"Ties token spend to what it delivers, each budget with an owner"},{id:"audit",name:"Trace & Audit",parts:["spine"],purpose:"Can tell who did what, person or agent, under which identity"}],gl=[{id:"feed",name:"Feeding the pipelines",question:"How do we feed agents the right context?"},{id:"govern",name:"Governing agents",question:"How do we govern agents and what they know?"},{id:"harness",name:"Building the harness",question:"What harness keeps agents on track?"},{id:"secure",name:"Securing the workflow",question:"How do we secure the workflow end to end?"},{id:"identity",name:"Agent identities",question:"Who is each agent, and who answers for it?"},{id:"tokens",name:"Tokenomics",question:"What will the tokens cost, and who pays?"},{id:"measure",name:"Measuring progress",question:"How do we know we are getting better?"}],xl=[{id:"problem",name:"The problem"},{id:"wheel",name:"The wheel"},{id:"nexus",name:"The Nexus"},{id:"layers",name:"The layers"},{id:"people",name:"People"},{id:"measure",name:"Measure"},{id:"napkin",name:"The napkin"}],ro=typeof document<"u"&&document.documentElement.lang==="fr"?"fr":"en",du={};if(ro==="fr"){let i=(e,t)=>Object.fromEntries(Object.entries(e).map(([n,s])=>[n,t(s)]));rf({gates:i(Ts.gates,e=>({checks:e})),shapes:i(Ts.shapes,e=>({label:e})),roles:i(Ts.roles,e=>({purpose:e})),concerns:Ts.concerns,sections:i(Ts.sections,e=>({name:e}))})}var cu=Zy();cu&&rf(cu);var sf=cu?.mention??(ro==="fr"?Ts.mention:"\xA9 ZENIKA 2026 \xB7 All Rights Reserved");function Zy(){let i=typeof document<"u"&&document.getElementById("edition");if(!i)return null;try{return JSON.parse(i.textContent)}catch(e){return console.error("The edition block (#edition) is not valid JSON:",e.message),null}}function $i(i,e,t="id"){e&&(Array.isArray(e)?i.splice(0,i.length,...e):i.forEach(n=>Object.assign(n,e[n[t]])))}function rf(i){if($i(xl,i.sections),$i(gl,i.concerns),$i(so,i.shapes,"name"),$i(oi,i.gates),$i(nf,i.phases),$i(ml,i.registers),$i(hu,i.roles),i.bandOrder){let e=Fn.map(t=>t.id);if(i.bandOrder.length!==e.length||!e.every(t=>i.bandOrder.includes(t)))throw new Error(`Edition bandOrder must list each band once: ${e.join(", ")}`);$i(Fn,i.bandOrder.map(t=>Fn.find(n=>n.id===t)))}Fn.forEach(e=>{Object.assign(e,i.bands?.[e.id]),e.layers.forEach(t=>Object.assign(t,i.layers?.[t.id]))}),Object.assign(lr,i.layers?.[lr.id]),Object.assign(du,i.leads)}var Lt={rIn:1.45,rOut:4,depth:.32,sweep:40,gap:.14},Zi=72,_t={from:296,to:348,rIn:4.25,rOut:5.35},bi={radii:[1.24,.86,.5],core:.12,sweep:34,gap:.07},Ht={rIn:1.36,rOut:3.6,h:.18,gap:.06,splitGap:.55,tooth:.07},Ji={top:-Lt.depth-.12,bandGap:.12,explodedGap:2.2,wheelGap:2.2},zt={angle:180,r:3.05,radius:.06},Ie=Math.PI/180;function $t(i){return i*Zi}function cr(i){return i*Zi+Zi/2}function yl(i=0){return se((_t.rIn+_t.rOut)/2,(_t.from+_t.to)/2,i)}function _l(i,e){return new oe(i*Math.sin(e*Ie),-i*Math.cos(e*Ie))}function fu(i,e,t,n,s){return i+s*Math.pow(1-(e-t)/(n-t),1.7)}function ur(i,e,t,n,s,r){let o=(p,_)=>fu(p,_,i,e,s),a=p=>r/2/p/Ie,l=[];for(let p=0;p<=32;p++){let _=i+(e-i)*p/32;l.push(_l(_,o(t,_)+a(_)))}let u=t+a(e),g=n-a(e);for(let p=1;p<48;p++)l.push(_l(e,u+(g-u)*p/48));for(let p=32;p>=0;p--){let _=i+(e-i)*p/32;l.push(_l(_,o(n,_)-a(_)))}let f=o(n,i)-a(i),d=o(t,i)+a(i);for(let p=1;p<16;p++)l.push(_l(i,f-(f-d)*p/16));return new xn(l)}function Gt(i,e,t=.025){let n=new _s(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:1,curveSegments:48});return n.rotateX(Math.PI/2),n.translate(0,-t,0),n}function se(i,e,t=0){return new L(i*Math.sin(e*Ie),t,-i*Math.cos(e*Ie))}var ai={part:0,red:1,ink:2,soft:3,accent:4},af={value:-10},lf={value:new oe(-1e3,1e3)};function cf(i){af.value=i}function uf(i,e){lf.value.set(i,e)}var hf={value:new L(0,1,0)};function df(i){return new Rn({glslVersion:jr,uniforms:{lightDir:hf,role:{value:i},dim:{value:0},charge:{value:0},lag:{value:0},pulse:af,pulseBand:lf},vertexShader:`
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
      }`})}var Jy=`
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
  }`,Ky={lo:"#ecebef",hi:"#ffffff",line:"#6f6a72",redLo:"#e81c35",redHi:"#ff7c8a",redLine:"#9e1028",softLo:"#fbd9de",softHi:"#fff6f7",softLine:"#f08494",accentLo:"#fbd9de",accentHi:"#fff6f7",accentLine:"#f08494"},Qy={lo:"#1e1e1e",hi:"#2a2a2a",line:"#f4f4f4",redLo:"#c81a30",redHi:"#ff6b7a",redLine:"#ff8a96",softLo:"#3a2028",softHi:"#4a2a34",softLine:"#ff8fa0",accentLo:"#3a2028",accentHi:"#4a2a34",accentLine:"#ff8fa0"};function of(i,e){let t=getComputedStyle(document.documentElement),n=s=>t.getPropertyValue(`--${e}-${s.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}`).trim();return Object.fromEntries(Object.keys(i).map(s=>[s,n(s)||i[s]]))}function ff(i,{stipple:e}={}){i.autoClear=!1;let t=of(Ky,"art"),n=of(Qy,"art-dark"),s=getComputedStyle(document.documentElement),r=parseFloat(s.getPropertyValue("--art-stipple")),o=e??(Number.isFinite(r)?r:0),a=parseFloat(s.getPropertyValue("--art-dark-stipple")),l=Number.isFinite(a)?a:o,c=(S,x)=>{let b=parseFloat(s.getPropertyValue(S));return Number.isFinite(b)?b:x},u=new gn(1,1,{type:yn,count:2});u.depthTexture=new Wn(1,1,In);let g=new L(-.5,.8,.45).normalize(),f=S=>({value:new lt(S).convertLinearToSRGB()}),d={tLit:{value:u.textures[0]},tNorm:{value:u.textures[1]},tDepth:{value:u.depthTexture},res:{value:new oe(1,1)},px:{value:1},near:{value:.1},far:{value:100},lo:f(t.lo),hi:f(t.hi),line:f(t.line),redLo:f(t.redLo),redHi:f(t.redHi),redLine:f(t.redLine),softLo:f(t.softLo),softHi:f(t.softHi),softLine:f(t.softLine),accentLo:f(t.accentLo),accentHi:f(t.accentHi),accentLine:f(t.accentLine),stipple:{value:o},dimInk:{value:c("--art-dim-ink",.6)},dimAlpha:{value:c("--art-dim-alpha",.5)}},p={},_={};Object.keys(t).forEach(S=>{p[S]=d[S].value.clone(),_[S]=f(n[S]).value});function m(S){Object.keys(p).forEach(x=>d[x].value.copy(p[x]).lerp(_[x],S)),d.stipple.value=o+(l-o)*S}let h=new ds;h.add(new un(new ys(2,2),new Rn({uniforms:d,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Jy,blending:yi,depthTest:!1,depthWrite:!1})));let y=new vs,T=new oe;function v(){let S=i.getPixelRatio(),{x,y:b}=i.getDrawingBufferSize(T);u.setSize(x,b),d.res.value.set(x,b),d.px.value=S}function M(S,x){x.updateMatrixWorld(),hf.value.copy(g).transformDirection(x.matrixWorldInverse),d.near.value=x.near,d.far.value=x.far,i.setClearColor(0,0),i.setRenderTarget(u),i.clear(),i.render(S,x),i.setRenderTarget(null),i.clear(),i.render(h,y)}return{render:M,setSize:v,setTheme:m}}function jy(i,e){return e.includes("idea")||e.includes("level:team")||e.includes("energy")?ai.red:e.includes("accent")?ai.accent:e.includes("nexus")||e.includes("soft")?ai.soft:e.some(t=>t.startsWith("phase:"))?ai.part:new lt(i).getHSL({},fn).l<.2?ai.ink:ai.part}function ie(i,e,t){let n=jy(e,t),s=new un(i,df(n));return s.userData.tags=t,s.userData.role=n,s}function pf(i,e,t=null){return i.map(n=>{let s=n.userData.tags||[],r=o=>o&&o.some(a=>s.includes(a));return!e||r(e)?0:r(t)?.45:1})}function mf(i,e,t){let n=!1;return i.forEach((s,r)=>{let o=s.material.uniforms,a=e[r]-o.dim.value;Math.abs(a)<.002?o.dim.value=e[r]:(o.dim.value+=a*t,n=!0)}),n}function gf(i,e){i.traverse(t=>{let n=t.isMesh&&t.material.uniforms;if(!n||!n.role)return;let s=e&&e.some(r=>(t.userData.tags||[]).includes(r));t.userData.energized=!!s,n.role.value=s?ai.red:t.userData.role}),i.traverse(t=>{let n=t.userData.leader;if(!n||!t.parent)return;let s=!1;t.parent.traverse(r=>s=s||!!r.userData.energized),n.classList.toggle("is-energized",s)})}function xf(i,e,t={}){i.traverse(n=>{let s=n.isMesh&&n.material.uniforms;if(!s||!s.charge)return;let r=n.userData.tags||[];s.charge.value=e&&e.some(o=>r.includes(o))?1:0,s.lag.value=Object.keys(t).reduce((o,a)=>r.includes(a)?t[a]:o,0)})}function ws(i,e,t=""){let n=document.createElement("div");n.className=`label ${t}`.trim();let s=document.createElement("span");s.className="label-text",s.textContent=i,n.appendChild(s);let r=new hl(n);return r.userData.group=e,r.center.set(.5,.5),r}function vn(i,e,t="",n="",s=""){let r=document.createElement("div");if(r.className=`label lead ${t}`.trim(),r.innerHTML='<svg class="lead-line"><polyline points="0,0 0,0"/><circle r="2.5"/></svg><span class="lead-box"><span class="lead-text"></span></span>',r.querySelector(".lead-text").textContent=i,n){let a=document.createElement("span");a.className="lead-note",a.textContent=n,r.querySelector(".lead-box").appendChild(a)}let o=new en;return o.userData.group=e,o.userData.noteGroup=s,o.userData.leader=r,o}function Mf(i,e){i.traverse(t=>{let n=t.isCSS2DObject||t.isCSS3DObject?t.element:t.userData.leader;if(!n||!t.userData.group)return;let s=[].concat(t.userData.group);n.classList.toggle("is-on",s.some(r=>e.includes(r))),t.userData.noteGroup&&n.classList.toggle("show-note",e.includes(t.userData.noteGroup))})}function Sf(i){return i.filter(e=>e.style.display!=="none").map(e=>[e,e.getBoundingClientRect().right])}var _f=new WeakMap;function bf(i){let e=new Map;if(!i.length)return e;let t=Math.min(...i.map(([,n])=>n));return i.forEach(([n,s])=>{let r=Number((t-s).toFixed(1));e.set(n,r-(_f.get(n)||0)),_f.set(n,r),n.firstChild.style.transform=`translateX(${r.toFixed(1)}px)`}),e}var vl=new L,Ml=new L;function Ef(i,e){i.forEach(t=>{let n=t.userData.arc;if(!t.element.classList.contains("is-on"))return;let s=t.parent;vl.copy(se(n.r,n.a-2,n.y)),Ml.copy(se(n.r,n.a+2,n.y)),s.localToWorld(vl).project(e),s.localToWorld(Ml).project(e);let r=Math.atan2(-(Ml.y-vl.y),(Ml.x-vl.x)*e.aspect)*180/Math.PI;r>90&&(r-=180),r<=-90&&(r+=180),t.element.firstChild.style.transform=`rotate(${r.toFixed(1)}deg)`})}var yf=new L,vf=new L,ev=new bn;function Tf(i,e){i.forEach(t=>{if(!t.element.classList.contains("is-on"))return;t.getWorldPosition(vf),yf.set(0,0,1).applyQuaternion(t.getWorldQuaternion(ev));let n=yf.dot(vf.sub(e.position).negate())>0;t.element.style.visibility=n?"":"hidden"})}var hr=2.85,pu=3.3,bl=(i,e)=>fu(i,e,Lt.rIn,Lt.rOut,Lt.sweep),gu=40,Af=.2,mu=.035;function wf(i,e,t,n,s){let r=[...i.toUpperCase()].map(a=>{let l=document.createElement("div");l.className="label label-engraved",l.textContent=a;let c=new fl(l);return c.userData.group="phases-engraved",c.scale.setScalar(Af/gu),s.add(c),c}),o={text:i.toUpperCase(),r:e,aMid:t,y:n,letters:r};return Rf(o),o}var Sl=null;function Rf({text:i,r:e,aMid:t,y:n,letters:s}){Sl=Sl||document.createElement("canvas").getContext("2d"),Sl.font=`800 ${gu}px Nunito, sans-serif`;let r=[...i].map(l=>Sl.measureText(l).width*Af/gu+mu),a=(r.reduce((l,c)=>l+c,0)-mu)/2;s.forEach((l,c)=>{let u=t+(a-r[c]/2+mu/2)/e/Ie;l.position.copy(se(e,u,n)),l.rotation.y=Math.PI-u*Ie,a-=r[c]})}function Cf(){let i=new re;i.name="wheel";let e=[];i.userData.relayout=()=>e.forEach(Rf),Zn.forEach((f,d)=>{let p=$t(d)-Zi/2,_=ie(Gt(ur(Lt.rIn,Lt.rOut,p,p+Zi,Lt.sweep,Lt.gap),Lt.depth),"#ffffff",["wheel",`phase:${f.id}`]);i.add(_);let m=ws(f.name,"phases","label-phase"),h=bl($t(d),pu);m.position.copy(se(pu,h,.02)),m.userData.arc={r:pu,a:h,y:.02},i.add(m),e.push(wf(f.name,Lt.rOut+.004,$t(d),-Lt.depth/2,i))}),Zn.forEach((f,d)=>{let p=oi[d],_=bl($t(d)+Zi/2,hr),m=ie(new it(.09,.09,.14,24),"#1e1e1e",["wheel","gates",`gate:${p.id}`]);m.position.copy(se(hr,_,.07)),i.add(m);let h=vn(`${p.id} \xB7 ${p.name}`,"gate-names","label-gate-name",p.checks,"gate-notes");h.userData.key=p.id,h.position.copy(se(hr,_,.14)),i.add(h)});let t=new re;t.name="drop",t.add(ie(Gt(ur(_t.rIn,_t.rOut,_t.from,_t.to,16,0),Lt.depth*.8),"#ffffff",["wheel","phase:drop"]));let n=$t(4)+Zi/2,s=ie(Gt(ur(Lt.rOut-.35,_t.rIn+.35,n-4,n+4,0,0),.08,.015),"#1e1e1e",["wheel","gates","gate:G5","latch"]);s.position.y=.1,t.add(s),[Lt.rOut-.2,_t.rIn+.2].forEach(f=>{let d=ie(new it(.06,.06,.2,20),"#ffffff",["wheel","gates","gate:G5"]);d.position.copy(se(f,n,.08)),t.add(d)});let r=ie(new it(.09,.09,.14,24),"#1e1e1e",["wheel","gates","gate:G6"]);r.position.copy(se((_t.rIn+_t.rOut)/2,_t.to-4,.07)),t.add(r);let o=(_t.rIn+_t.rOut)/2,a=335,l=ws("Drop","phases","label-phase");l.position.copy(se(o,a,.02)),l.userData.arc={r:o,a,y:.02},t.add(l),e.push(wf("Drop",_t.rOut+.004,(_t.from+_t.to)/2,-Lt.depth*.4,t));let c=vn(`${oi[5].id} \xB7 ${oi[5].name}`,"gate-names","label-gate-name",oi[5].checks,"gate-notes");c.userData.key=oi[5].id,c.position.copy(r.position).setY(.14),t.add(c),i.add(t);let u=ie(new Et(hr,.022,8,200),"#ee2238",["wheel","idea"]);u.rotation.x=Math.PI/2,i.add(u),so.forEach(f=>{let d=vn(f.label||f.name,"shapes","label-shape"),p=ie(new it(.035,.035,.08,12),"#1e1e1e",["wheel","shapes"]);if(f.drop){p.position.copy(se(_t.rOut-.2,_t.to-20,.04)),d.position.copy(p.position).setY(.08),t.add(p,d);return}p.position.copy(se(Lt.rOut-.22,bl(f.angle,Lt.rOut-.22),.04)),d.position.copy(p.position).setY(.08),i.add(p,d)});let g=ie(new nn(.16,32,16),"#ee2238",["wheel","idea"]);return g.name="idea",g.position.copy(xu(0)),i.add(g),i}function xu(i){return se(hr,bl(i,hr),0)}function Pf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<i.length;++u){let g=i[u],f=0,d=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in g.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(g.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in g.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(g.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(g.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=g.index.count;else if(g.attributes.position!==void 0)p=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,g=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)g.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(g)}for(let u in r){let g=If(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(let u in o){let g=o[u][0].length;if(g!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<g;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let p=If(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function If(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Un(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let g=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let _=u.getComponent(f,p);a.setComponent(f+g,p,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var te="#ffffff",ft="#1e1e1e",At=(i,e,t,n)=>(i.position.set(e,t,n),i),ae=(i,e,t,n,s=te)=>ie(new tn(i,e,t),s,n),Ke=(i,e,t,n=te,s=24)=>ie(new it(i,i,e,s),n,t);function Lf(i,e,t){let n=new xn,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function $e(i,e,t,n,s,{color:r=te,border:o=0}={}){let a=Lf(i,e,n);o>0&&a.holes.push(Lf(i-2*o,e-2*o,Math.max(.02,n-o)));let l=new _s(a,{depth:t,bevelEnabled:!1,curveSegments:6});return ie(l,r,s)}function Jn(i,e,t,n=.08){let s=new re;for(let r=0;r<i;r++){let o=ie(new it(n,n,.06,10),ft,t);o.rotation.x=Math.PI/2,o.position.set(i===1?0:-e/2+e*r/(i-1),0,.03),s.add(o)}return s}function On(i,e,t,n=te){let s=new Hi(i,!1,"catmullrom",.2);return ie(new ki(s,Math.max(8,i.length*10),e,8),n,t)}function Ei(i,e,t,n,s=32){let r=(a,l)=>new oe(a*Math.sin(l*Ie),-a*Math.cos(l*Ie)),o=[];for(let a=0;a<=s;a++)o.push(r(e,t+(n-t)*a/s));for(let a=s;a>=0;a--)o.push(r(i,t+(n-t)*a/s));return new xn(o)}function Df(i,e=!0){let t=new re;t.add($e(.6,.6,.08,.08,i));let n=$e(.6,.6,.04,.08,i,{border:.06});n.position.z=.08;let s=ie(new it(.15,.15,.12,16),te,i);s.rotation.x=Math.PI/2,s.position.z=.14;let r=new re,o=ie(new it(.035,.035,.36,8),te,i);o.position.y=.18;let a=ie(new nn(.07,10,8),te,i);return a.position.y=.38,r.add(o,a),r.position.z=.2,r.rotation.x=e?.5:Math.PI-.5,t.add(n,s,r),t}function dr(i,e,t,n=[]){let s=new re,r=.32;s.add($e(i*r+.16,e*r+.16,.06,.06,t));for(let o=0;o<i;o++)for(let a=0;a<e;a++){let l=n.includes(a*i+o),c=ae(.22,.22,.08,l?[...t,"energy"]:t);c.position.set((o-(i-1)/2)*r,((e-1)/2-a)*r,.1),s.add(c)}return s}function Ki(i,e,t,{traces:n=3,lit:s=!0}={}){let r=new re;r.add($e(i,e,.1,.08,t));let o=$e(i-.16,e-.16,.04,.05,[...t,"glass"]);o.position.z=.1,r.add(o);for(let a=0;a<n;a++){let l=(i-.4)*(.45+.5*(a*37%10/10)),c=ae(l,.035,.02,s&&a===0?[...t,"energy"]:t);c.position.set(-(i-.4)/2+l/2,e/2-.3-a*((e-.5)/Math.max(1,n)),.16),r.add(c)}return r}function Qi(i,{byTags:e=!1}={}){i.updateMatrixWorld(!0);let t=new Map;i.traverse(s=>{if(!s.isMesh)return;let r=`${s.material.uniforms.role.value}|${s.material.side}${e?`|${(s.userData.tags||[]).join(",")}`:""}`;t.has(r)||t.set(r,{material:s.material,tags:s.userData.tags,geos:[]});let o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();Object.keys(o.attributes).forEach(a=>a!=="position"&&a!=="normal"&&o.deleteAttribute(a)),o.clearGroups(),t.get(r).geos.push(o.applyMatrix4(s.matrixWorld)),s.geometry.dispose(),t.get(r).material!==s.material&&s.material.dispose()});let n=new re;return n.userData=i.userData,t.forEach(({material:s,tags:r,geos:o})=>{let a=new un(Pf(o),s);a.userData.tags=r,a.userData.role=s.uniforms.role.value,n.add(a),o.forEach(l=>l.dispose())}),n}var _u=$t(2);function ji(i){let e=[];return i.forEach((t,n)=>{t&&e.push(n<Zn.length?$t(n):(_t.from+_t.to)/2)}),e}function Ti(i,e,t,n){let s=new xn;s.absarc(0,0,e,0,Math.PI*2,!1);let r=new Xn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),Gt(s,t,n)}function Nf(i,e,t,n=720){let s=new xn;for(let o=0;o<=n;o++){let a=360*o/n,l=t(a),c=new oe(l*Math.sin(a*Ie),-l*Math.cos(a*Ie));o===0?s.moveTo(c.x,c.y):s.lineTo(c.x,c.y)}let r=new Xn;return r.absarc(0,0,i,0,Math.PI*2,!0),s.holes.push(r),s}function Mn(i,e,t,n){return i.position.copy(se(e,t,n)),i.rotation.y=-t*Ie,i}function Uf(i,e,t,n,s,r,o){let a=ie(new tn(s,r,e-i),te,o);return Mn(a,(i+e)/2,t,n)}var tv={L0(i,e,t){return t.add(ie(Ti(Ht.rIn,1.95,.14),te,e)),ji(i.on).forEach(n=>{t.add(Uf(1.9,4.45,n,-.07,.09,.07,e));let s=ie(new it(.24,.1,.16,32),te,e);t.add(Mn(s,4.55,n,-.02));let r=ie(new nn(.05,16,8),ft,e);t.add(Mn(r,4.55,n,.1))}),.14},L12(i,e,t){return t.add(ie(Ti(Ht.rIn,1.95,.14),te,e)),ji(i.on).forEach(n=>{t.add(Uf(1.9,4,n+9,-.07,.07,.06,e));let s=ie(new tn(.3,.18,.3),te,e);t.add(Mn(s,4.1,n+9,-.03))}),.14},L2(i,e,t){let n=ji(i.on),s=r=>{let o=2.7;return n.forEach(a=>{let l=Math.abs((r-a+540)%360-180);o+=.75*Math.pow(Math.max(0,Math.cos(l/40*(Math.PI/2))),2)}),o};return t.add(ie(Gt(Nf(Ht.rIn,.18,s),.18),te,e)),.18},L1(i,e,t){let s=o=>3.42+(Math.sin(o*120/360*Math.PI*2)>0?Ht.tooth:0),r=Nf(Ht.rIn,.2,s,960);for(let o=0;o<6;o++){let a=(o*60+30)*Ie,l=new Xn;l.absarc(2.45*Math.sin(a),-2.45*Math.cos(a),.42,0,Math.PI*2,!0),r.holes.push(l)}return t.add(ie(Gt(r,.2),te,e)),ji(i.on).forEach(o=>{let a=ie(new it(.2,.2,.12,32),te,e);t.add(Mn(a,3,o,.06))}),.2},L5(i,e,t){return t.add(ie(Ti(Ht.rIn,1.8,.26),te,e)),ji(i.on).forEach(n=>{let s=ie(new it(.1,.1,1.6,24),te,e);s.rotation.x=Math.PI/2;let r=Mn(new re,2.6,n,-.13);r.add(s),t.add(r);let o=ie(new it(.2,.2,.08,32),te,e);o.rotation.x=Math.PI/2;let a=Mn(new re,3.42,n,-.13);a.add(o),t.add(a)}),t.userData.anchor=se(2.9,_u,-.03),.26},L4(i,e,t){return t.add(ie(Ti(Ht.rIn,3.1,.1),te,e)),ji(i.on).forEach(n=>{let s=ie(new tn(.42,.22,.34),te,e);t.add(Mn(s,2.6,n,.11));let r=ie(new it(.05,.05,.16,16),ft,e);t.add(Mn(r,2.6,n,.3))}),t.userData.anchor=se(2.75,_u,.22),.1},L6(i,e,t){t.add(ie(Ti(Ht.rIn,2.5,.2),te,e));let n=ji(i.on);Zn.forEach((r,o)=>{let a=$t(o),l=n.includes(a),c=ie(new it(.08,.08,l?.34:.14,20),te,e);t.add(Mn(c,2.25,a,l?.17:.07))});let s=ie(new tn(.12,.06,.8),ft,e);return t.add(Mn(s,1.85,n[0]??0,.03)),t.userData.anchor=se(2.5,_u-24,-.1),.2},L8(i,e,t){let n=new xn;n.absarc(0,0,3.45,0,Math.PI*2,!1);let s=new Xn;s.absarc(0,0,Ht.rIn,0,Math.PI*2,!0),n.holes.push(s);for(let r=0;r<60;r++){let o=r*6*Ie,a=1.6*Ie,l=new Xn,c=(g,f)=>new oe(g*Math.sin(f),-g*Math.cos(f)),u=[c(2.3,o-a),c(3.15,o-a),c(3.15,o+a),c(2.3,o+a)];l.moveTo(u[0].x,u[0].y),[u[3],u[2],u[1],u[0]].forEach(g=>l.lineTo(g.x,g.y)),n.holes.push(l)}return t.add(ie(Gt(n,.12),te,e)),.12},L9(i,e,t){return t.add(ie(Ti(Ht.rIn,3.2,.12),te,e)),ji(i.on).forEach(n=>{let s=new re,r=ie(new it(.42,.42,.14,40),te,e);r.rotation.x=Math.PI/2;let o=ie(new tn(.04,.3,.03),ft,e);o.position.set(.08,.06,.09),o.rotation.z=-.7,s.add(r,o),s.position.y=.42;let a=Mn(new re,3.3,n,0);a.add(s),t.add(a)}),.12},L3(i,e,t){t.add(ie(Ti(Ht.rIn,3,.16),te,e));let n=new re,s=ie(new it(.4,.4,.9,40,1,!0),te,e);s.material.side=Bt,s.rotation.z=Math.PI/2;let r=ie(new it(.36,.36,.03,40),ft,e);r.rotation.z=Math.PI/2+.6;let o=ie(new tn(.06,.5,.06),te,e);o.position.set(.5,.25,0),n.add(s,r,o),n.position.y=.32;let a=Mn(new re,3.2,90,0);return a.add(n),t.add(a),.16},L7(i,e,t){t.add(ie(Ti(Ht.rIn,3.25,.14),te,e));let n=new re,s=ie(new it(.55,.55,.16,48),te,e);s.rotation.x=Math.PI/2;let r=ie(new tn(.05,.42,.03),"#ee2238",e);r.position.set(.1,.1,.1),r.rotation.z=.9,n.add(s,r),n.position.y=.2;let o=Mn(new re,3.45,200,-.2);return o.add(n),t.add(o),.14},L10(i,e,t){t.add(ie(Ti(Ht.rIn,3.5,.5,.04),te,e));for(let n=0;n<64;n++){let s=ie(new tn(.035,.42,.32),te,e);t.add(Mn(s,3.62,n*(360/64),-.25))}return .5}};function Ff(i,e){let t=new re,n=tv[i.id](i,e,t);return t.userData.h=n,Qi(t)}function Of(i){let e=new re,t=ie(new Et(.2,.06,16,40),te,i);t.position.y=-.35;let n=ie(new tn(.1,.4,.05),te,i);return n.position.y=-.05,e.add(t,n),e}function Bf(){let i=new re;i.name="bands";let e=[];Fn.forEach((l,c)=>{let u=new re;u.name=`band:${l.id}`;let g=[];l.layers.forEach((d,p)=>{let _=Ff(d,["bands",`band:${l.id}`,`layer:${d.id}`]);_.name=`layer:${d.id}`;let m=vn(`${d.id} ${d.name}`,`layers:${l.id}`,"label-layer");m.position.copy(_.userData.anchor||se(1.62,120,0)),_.add(m);let h=vn(`${d.id} ${d.name}`,"layers-right","label-layer");if(h.position.copy(se(1.7,110,0)),h.userData.band=c,p===0){let y=document.createElement("span");y.className="lead-kicker",y.textContent=l.name,h.userData.leader.querySelector(".lead-box").prepend(y)}_.add(h),u.add(_),g.push({id:d.id,object:_,h:_.userData.h})});let f=ws(l.name,"bands","label-band");f.userData.band=l.id,u.add(f),i.add(u),e.push({id:l.id,object:u,rings:g,name:f})});let t=new re;t.name="spine";let n=["spine","layer:L11"],s=ie(new it(zt.radius,zt.radius,1,16),"#1e1e1e",n);t.add(s);let r=lr.checks.map(l=>{let c=ie(new it(.13,.13,.22,32),"#ffffff",n);return c.userData.layer=l,t.add(c),c}),o=Of(n);t.add(o);let a=vn(`${lr.id} ${lr.name}`,"spine","label-spine");return a.userData.track=[new L,new L],t.add(a),i.add(t),{group:i,bands:e,spine:{group:t,rod:s,collars:r,key:o,name:a}}}function zf(i,e,t){let n=Ji.top-Ji.wheelGap*e,s=Ji.bandGap+(Ji.explodedGap-Ji.bandGap)*e,r={},o={};i.bands.forEach(d=>{let p=t[d.id]||0,_=Ht.gap+(Ht.splitGap-Ht.gap)*p,m=n;d.rings.forEach((h,y)=>{h.object.position.y=n,r[h.id]=n-h.h/2,n-=h.h+(y<d.rings.length-1?_:0)}),o[d.id]=(m+n)/2,d.name.position.copy(se(Ht.rOut+2,270,o[d.id])),d.name.center.set(1,.5),n-=s});let a=n+s,{rod:l,collars:c,key:u,name:g}=i.spine,f=Ji.top-Ji.wheelGap*e+.15;return l.scale.y=f-a+.15,l.position.copy(se(zt.r,zt.angle,(f+a-.15)/2)),c.forEach(d=>d.position.copy(se(zt.r,zt.angle,r[d.userData.layer]))),u.position.copy(se(zt.r,zt.angle,a-.15)),g.position.copy(se(zt.r,zt.angle,a-.5)),g.userData.track[0].copy(se(zt.r,zt.angle,f)),g.userData.track[1].copy(se(zt.r,zt.angle,a-.15)),{bottom:a,layerY:r,bandMid:o}}var Gf=[.25,1.25,2.25];function Hf(){let i=new re;i.name="nexus";let e=uu.map((n,s)=>{let r=new re;r.name=`level:${n.id}`;let o=bi.radii[s],a=bi.radii[s+1]||bi.core;ml.forEach(c=>{if(c.teamOnly&&n.id!=="team")return;let u=Gt(ur(a+.04,o,c.from,c.from+90,bi.sweep,bi.gap),1,0);r.add(ie(u,n.color,["nexus",`level:${n.id}`,`register:${c.id}`]))});let l=vn(n.name,"levels","label-level");return l.position.copy(se(o-.05,235,0)),r.add(l),i.add(r),{level:n.id,object:r}}),t=ml.map(n=>{let s=n.teamOnly?uu.length-1:0,r=vn(n.name,["registers",`register:${n.id}`],"label-register");return n.teamOnly&&(r.userData.reach=2.2),r.position.copy(se((bi.radii[s]+(bi.radii[s+1]||bi.core))/2,n.from+45,0)),r.userData.tube=s,r.userData.register=n.id,i.add(r),r});return{group:i,tubes:e,registers:t}}function kf(i,e,t){i.tubes.forEach((n,s)=>{let r=.04+Gf[s]*t;n.object.position.y=r,n.object.scale.y=r-e}),i.registers.forEach(n=>n.position.y=.04+Gf[n.userData.tube]*t)}var Bn={r:5.7,booster:{y0:-24,y1:-6},middle:{y0:-6,y1:22},nose:{y0:22,y1:28,tip:42},skirt:2.2,nozzleY:-26.2,ring:.45},fr=96,Dt=Bn.r;function oo(i,e,t,n,s,r){let o=new it(i,i,t-e,fr,1,!0,n,s);o.translate(0,(e+t)/2,0);let a=ie(o,te,r);return a.material.side=Bt,a}function Pn(i,e,t,n,s=360,r=0){let o=ie(new Et(i,e,6,fr,s*Ie),te,n);return o.rotation.x=Math.PI/2,o.rotation.z=(r-90)*Ie,o.position.y=t,o}function Vf(i,e){let t=new re;return t.add(oo(Dt+.07,i-Bn.ring/2,i+Bn.ring/2,0,Math.PI*2,[...e,"energy","ring"])),t.add(Pn(Dt+.06,.1,i-.36,e),Pn(Dt+.06,.1,i+.36,e)),t}function es(i,e,t,n=0,s=360){let r=new re;for(let o=0;o<e;o++){let a=n+(s-n)*(o+.5)/e,l=ie(new nn(.09,8,4,0,Math.PI*2,0,Math.PI/2),ft,t);l.position.copy(se(Dt,a,i)),l.lookAt(se(Dt*2,a,i)),l.rotateX(Math.PI/2),r.add(l)}return r}function wi(i,e,t,n=0){return i.position.copy(se(Dt+n,e,t)),i.rotation.y=Math.PI-e*Ie,i}function nv(i,e){let t=new re;t.name="porthole",t.add(ie(new Et(i,.14,8,40),te,[...e,"porthole"])),t.add(ie(new Et(i-.16,.05,6,40),te,[...e,"porthole","energy"]));let n=Ke(i-.12,.06,[...e,"porthole","glass"],te,40);n.rotation.x=Math.PI/2,n.position.z=-.04,t.add(n);for(let s=0;s<8;s++){let r=ie(new it(.05,.05,.06,8),ft,e);r.rotation.x=Math.PI/2,r.position.set(Math.sin(s*Math.PI/4)*i,Math.cos(s*Math.PI/4)*i,.14),t.add(r)}return t}function yu(i,e,t,n=360,s=0){let r=new re;r.add(oo(Dt+.08,i-.28,i+.28,(180-s-n)*Ie,n*Ie,[...t,"strap"]));let o=new re;o.add($e(1,.8,.3,.12,t));let a=Jn(2,.5,t,.08);return a.position.z=.3,o.add(a),r.add(wi(o,e,i-.4,.05)),r}function iv(i){let e=new re;e.add($e(3.2,2.5,.12,.4,i));let t=$e(3.2,2.5,.08,.4,i,{border:.18});t.position.z=.12,e.add(t);for(let n=0;n<5;n++){let s=ae(2.4,.14,.16,[...i,"grille"]);s.position.set(0,-.8+n*.4,.16),e.add(s)}return e}function vu(i,e,t){let n=new re;n.add($e(i,e,.1,.25,t));let s=$e(i,e,.08,.25,t,{border:.12});s.position.z=.1,n.add(s);let r=On([new L(-.35,0,.1),new L(-.3,0,.35),new L(.3,0,.35),new L(.35,0,.1)],.05,t);return r.position.y=-e*.2,n.add(r),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([o,a])=>{let l=Jn(1,0,t,.07);l.position.set(o*(i/2-.22),a*(e/2-.22),.1),n.add(l)}),n}function Wf(i,e,t,n){let s=new re,r=Ke(.14,t-e,[...n,"conduit"],te,10);r.position.copy(se(Dt+.4,i,(e+t)/2)),s.add(r);for(let o=e+1;o<t;o+=3.5)s.add(wi(ae(.5,.25,.55,n),i,o,.22));return s}function sv(i,e){let t=new xn;t.moveTo(0,-1.5),t.lineTo(0,9),t.lineTo(4.6,2.6),t.lineTo(5.2,-3.4),t.lineTo(3.6,-3.4),t.lineTo(2.2,-1.5),t.closePath();let n=.6,s=Gt(t,n,.1);s.rotateX(-Math.PI/2),s.translate(0,0,n/2);let r=new re;return r.add(ie(s,te,e)),[[.5,0],[.5,2],[.5,4],[.5,6],[1.6,4.4],[2.8,2.6],[3.9,1.2],[4.2,-2.4],[2.4,-.6]].forEach(([o,a])=>{let l=Ke(.1,n+.06,e,ft,10);l.rotation.x=Math.PI/2,l.position.set(o,a,0),r.add(l)}),r.position.copy(se(Dt-.1,i,Bn.booster.y0+1.5)),r.rotation.y=Math.PI/2-i*Ie,r}function rv(i,e,t,n){let s=new re,r=3.6,o=u=>.9+1.3*u*u,a=[];for(let u=0;u<=16;u++)a.push(new oe(o(u/16),-r*(u/16)));let l=ie(new ti(a,48),te,[...n,"nozzle"]);l.material.side=Bt,s.add(l),[.35,.6,.82].forEach(u=>s.add(Pn(o(u)+.03,.05,-r*u,n))),s.add(Pn(o(1)+.02,.13,-r,[...n,"energy","rim"])),s.add(Pn(o(1)-.18,.06,-r+.06,[...n,"energy","rim"]));let c=Ke(1.05,.7,n,te,32);return c.position.y=.35,s.add(c,Pn(1.12,.12,.45,n)),s.position.set(i,t,e),s}var Mu=i=>Dt*Math.pow(Math.cos(i*Math.PI/2),.85);function ov(i,e){let{y1:t,tip:n}=Bn.nose,s=[];for(let r=0;r<=32;r++)s.push(new oe(Mu(r/32),t+(n-t)*r/32));return new ti(s,fr,i,e)}function pr(){let i=new re;i.name="rocket";let{booster:e,middle:t,nose:n,skirt:s}=Bn,r=new re;r.name="stage:1";let o=["rocket","stage:1"];r.add(oo(Dt,e.y0,e.y1,0,Math.PI*2,o)),r.add(Vf(e.y1-.4,o)),[-19,-13].forEach(M=>r.add(Pn(Dt+.02,.035,M,o),es(M+.3,48,o))),r.add(es(e.y0+.4,48,o),es(e.y1-1.1,48,o)),r.add(yu(-16,200,o)),r.add(wi(vu(1.6,2.2,[...o,"hatch"]),180,-10,.02)),r.add(Wf(228,e.y0+1,e.y1-1.2,o)),[45,135,225,315].forEach(M=>r.add(sv(M,[...o,"fin"])));let a=ie(new it(Dt,Dt*.86,s,fr,1,!0),te,[...o,"skirt"]);a.material.side=Bt,a.position.y=e.y0-s/2,r.add(a);for(let M=0;M<24;M++){let S=360*M/24,x=ae(.2,s,.24,o);x.position.copy(se(Dt*.93+.08,S,e.y0-s/2)),x.rotation.y=-S*Ie,r.add(x)}let l=Ke(Dt*.86,.3,o,te,fr);l.position.y=e.y0-s-.15,r.add(l),[0,120,240].forEach(M=>{let S=se(2.4,M);r.add(rv(S.x,S.z,Bn.nozzleY,o));let x=Ke(.36,1.3,[...o,"pump"],te,16);x.position.copy(se(2.3,M+60,Bn.nozzleY+.5)),x.rotation.set(0,-(M+60)*Ie,Math.PI/2,"YXZ"),r.add(x)}),i.add(r);let c=new re;c.name="stage:2";let u=["rocket","stage:2"],g=[0,180].map((M,S)=>{let x=new re;x.name=`half:${S}`,x.add(oo(Dt,t.y0,t.y1,M*Ie,Math.PI,[...u,"shell"]));let b=M,I=M+180;return[0,8,15].forEach(A=>x.add(Pn(Dt+.02,.035,A,u,180,b),es(A+.3,24,u,b,I))),x.add(es(t.y0+.5,24,u,b,I),es(t.y1-1.1,24,u,b,I)),x.add(yu(4,b+60,u,180,b),yu(18,b+30,u,180,b)),x.userData.dir=S===0?1:-1,c.add(x),x});c.add(Vf(t.y1-.4,u)),g[0].add(wi(iv([...u,"vent"]),160,10.8,.02)),g[1].add(wi(vu(1.8,2.6,[...u,"hatch"]),200,1.5,.02)),g[1].add(Wf(250,t.y0+1,t.y1-1.2,u));let f=["rocket","energy","energy-line"],d=Ke(.08,n.y1-t.y0-1,f,te,8);d.position.copy(se(Dt+.12,112,(t.y0+n.y1)/2-.5)),g[0].add(d);for(let M=t.y0+2;M<t.y1-1;M+=4)g[0].add(wi(ae(.45,.22,.3,u),112,M,.06));let p=ie(new nn(.42,24,12),te,f);p.position.copy(se(Dt+.2,112,t.y1-3));let _=ie(new Et(.62,.06,6,32),te,f);wi(_,112,t.y1-3,.12),c.add(p,_),i.add(c);let m=new re;m.name="stage:3";let h=["rocket","stage:3"];m.add(oo(Dt,n.y0,n.y1,0,Math.PI*2,h));let y=ie(ov(0,Math.PI*2),te,[...h,"cone"]);y.material.side=Bt,m.add(y),m.add(Pn(Dt+.02,.05,n.y1,h),es(n.y0+.9,48,h),es(n.y1-.4,48,h));let T=M=>n.y1+(n.tip-n.y1)*M;m.add(Pn(Mu(.32)+.05,.12,T(.32),[...h,"energy","ring"])),m.add(Pn(Mu(.62)+.02,.04,T(.62),h));let v=ie(new nn(.22,12,8),te,h);return v.position.y=n.tip,m.add(v),m.add(wi(vu(1.4,1.8,[...h,"hatch"]),160,25,.02)),m.add(wi(nv(.85,h),134,25.1,.06)),i.add(m),[r,...g,m].forEach(av),{group:i,stages:[r,c,m],halves:g}}function av(i){let e=Qi(i,{byTags:!0});i.clear(),[...e.children].forEach(t=>i.add(t))}function Xf(i,{separate:e=0,open:t=0}={}){let[n]=i.stages;n.position.set(0,-12*e,0),n.rotation.z=.25*e,i.halves.forEach(s=>s.position.x=s.userData.dir*t*Dt*1.5)}function qf(){let i=new re;i.name="pad";let e=["pad"],t=Bn.nozzleY-4.2,n=ie(new it(11,12,1.2,fr),te,e);n.position.y=t-.6;let s=Ke(4.5,.2,e,te,48);s.position.y=t-.05,i.add(n,s,Pn(4.6,.12,t+.02,e),Pn(8.5,.05,t+.02,e));let r=new re,o=60;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,l])=>{let c=ae(.3,o,.3,e);c.position.set(a*1.4,o/2,l*1.4),r.add(c)});for(let a=3;a<o;a+=4)[0,90,180,270].forEach(l=>{let c=ae(2.8,.18,.18,e);c.position.copy(se(1.4,l,a)),c.rotation.y=-l*Ie;let u=ae(.1,4.7,.1,e);u.position.copy(se(1.42,l,a+2)),u.rotation.set(0,-l*Ie,.55,"YXZ"),r.add(c,u)});return[14,36].forEach(a=>{let l=ae(5.2,.4,.8,[...e,"arm"]);l.position.set(-3.9,a,0),r.add(l)}),r.position.set(Dt+4.6,t,0),i.add(r),i}function Yf(i=7){let e=new re;e.name="moon";let t=["moon"];return e.add(ie(new nn(i,64,32),te,t)),[[20,30,1.4],[-30,60,1],[40,140,1.8],[-10,200,.9],[55,260,1.2],[-45,300,1.5],[5,95,.7],[30,340,.6],[-60,20,.8]].forEach(([n,s,r])=>{let o=ie(new Et(r,r*.12,6,32),te,t),a=new L().setFromSphericalCoords(i,(90-n)*Ie,s*Ie);o.position.copy(a),o.lookAt(a.clone().multiplyScalar(2)),e.add(o)}),e}var Su=(i,e,t,n)=>(i.position.set(e,t,n),i),El=(i,e,t=0)=>new L(i*Math.sin(e*Ie),i*Math.cos(e*Ie),t);function $f(i,e,t,n,s,r){let o=ie(new Vr(i,e,48,1,(90-n)*Ie,(n-t)*Ie),te,s);return o.position.z=r,o}function ts(i,e,{value:t=.6,range:n=null,centre:s=!1,ticks:r=10,minor:o=4,sweep:a=270,sub:l=null}={}){let c=new re,u=h=>s?a*(h-.5):-a/2+a*h,g=Ke(i,.1,[...e,"face"],te,64);g.rotation.x=Math.PI/2,g.position.z=.05;let f=ie(new Et(i*1.04,i*.06,10,72),te,[...e,"energy","bezel"]);f.position.z=.12,c.add(g,f);for(let h=0;h<=r;h++){let y=u(h/r),T=ae(i*.035,i*.16,.03,e,ft);if(T.position.copy(El(i*.84,y,.12)),T.rotation.z=-y*Ie,c.add(T),h===r)break;for(let v=1;v<=o;v++){let M=u((h+v/(o+1))/r),S=ae(i*.016,i*.08,.03,e,ft);S.position.copy(El(i*.88,M,.12)),S.rotation.z=-M*Ie,c.add(S)}}if(c.userData.numbers=Array.from({length:r+1},(h,y)=>({i:y,at:El(i*.64,u(y/r),.12)})),n&&c.add($f(i*.93,i*.99,u(n[0]),u(n[1]),[...e,"energy","range"],.125)),s){c.add($f(i*.93,i*.99,Math.min(0,u(t)),Math.max(0,u(t)),[...e,"energy","range"],.125));let h=ae(i*.07,i*.32,.05,[...e,"baseline"],ft);h.position.copy(El(i*.74,0,.14)),c.add(h)}if(l){let h=ts(i*l.r,[...e,"sub"],{value:l.value,ticks:6,minor:1,sweep:300});h.position.set(i*l.x,i*l.y,.06),h.name=l.name||"sub",c.add(h)}let d=new re;d.name="needle";let p=ae(i*.05,i*.82,.03,[...e,"energy","needle"]);p.position.set(0,i*.36,.22);let _=ae(i*.1,i*.26,.03,[...e,"energy","needle"]);_.position.set(0,-i*.12,.22);let m=Ke(i*.1,.12,e,ft);return m.rotation.x=Math.PI/2,m.position.z=.24,d.add(p,_,m),d.rotation.z=-u(t)*Ie,c.add(d),c}function Zf(i,{throughput:e=.66,stability:t=.7,productivity:n=.64,cost:s=.58,experience:r=2}={}){let o=new re;o.name="instrument-panel";let a=[...i,"instruments"],l=$e(8.6,4.2,1.4,.8,a);l.position.z=-1.4;let c=$e(10,5,.5,.9,a),u=$e(9.5,4.5,.06,.7,a,{border:.1});u.position.z=.5,o.add(l,c,u),[[-4.55,2.05],[4.55,2.05],[-4.55,-2.05],[4.55,-2.05]].forEach(([I,A])=>o.add(Su(Jn(1,0,a,.11),I,A,.5)));let g=$e(4.2,4.2,.12,.8,a);g.position.set(-.6,0,.5),o.add(g),[[-1.75,1.75],[1.75,1.75],[-1.75,-1.75],[1.75,-1.75]].forEach(([I,A])=>o.add(Su(Jn(1,0,a,.09),-.6+I,A,.62)));let f=ts(1.72,[...a,"inst:throughput"],{value:e,range:[.55,.85],sub:{r:.3,x:0,y:-.46,value:t,name:"inst:stability"}});f.name="inst:throughput",f.position.set(-.6,0,.62),o.add(f);let d=$e(1.1,.3,.05,.04,[...a,"counter"]);d.position.set(-.6,.62,.8),o.add(d);let p=Ke(.3,.35,[...a,"energy","inst:knob"],te,20);p.rotation.x=Math.PI/2,p.position.set(-2.45,-1.85,.75),p.name="inst:knob",o.add(p);let _=new re;_.name="inst:cost";let m=[...a,"inst:cost"];_.add($e(1.05,3.7,.12,.3,m));let h=Ke(.2,3,[...m,"glass"],te,20);h.position.z=.36;let y=Ke(.13,3*s,[...m,"energy"],te,16);y.position.set(0,-1.5+1.5*s,.36);let T=ie(new Et(.22,.05,6,24),te,[...m,"energy"]);T.rotation.x=Math.PI/2,T.position.set(0,-1.5+3*s,.36),_.add(h,y,T),[1.5,-1.5].forEach(I=>{let A=Ke(.26,.16,m,te,20);A.position.set(0,I,.36),_.add(A)});for(let I=0;I<=8;I++){let A=ae(I%4===0?.26:.14,.03,.03,m,ft);A.position.set(.38+(I%4===0?0:-.06),-1.4+2.8*I/8,.16),_.add(A)}let v=$e(.8,.2,.04,.03,m);v.position.set(0,-2.02,.12),_.add(v),_.position.set(-4,.15,.5),o.add(_);let M=$e(2.1,2.1,.14,.35,a);M.position.set(3.35,.95,.5),o.add(M),o.add(Su(Jn(2,1.7,a,.07),3.35,1.85,.64));let S=ts(.78,[...a,"inst:productivity"],{value:n,centre:!0,ticks:8,minor:1,sweep:240});S.name="inst:productivity",S.position.set(3.35,.9,.64),o.add(S);let x=new re;x.name="inst:experience";let b=[...a,"inst:experience"];x.add($e(2.1,1.25,.1,.25,b));for(let I=0;I<3;I++){let A=I<r,D=ie(new Et(.27,.06,6,28),te,b),F=Ke(.22,.14,A?[...b,"energy","lamp"]:[...b,"lamp"],te,24);F.rotation.x=Math.PI/2,[D,F].forEach(P=>P.position.set((I-1)*.66,.14,.16));let H=$e(.5,.14,.03,.03,b);H.position.set((I-1)*.66,-.36,.1),x.add(D,F,H)}return x.position.set(3.35,-1.15,.5),o.add(x),o}function Jf({score:i=72,rule:e=100,ceiling:t=79}={}){let n=new re;n.name="autonomy";let s=["autonomy"],r=4,o=240,a=v=>-o/2+o*v/100,l=ie(new it(r*1.2,r*1.24,.5,96),te,[...s,"housing"]);l.position.y=-.2,n.add(l);for(let v=0;v<8;v++){let M=Ke(.13,.08,s,ft,12);M.position.copy(se(r*1.12,22.5+45*v,.08)),n.add(M)}n.add(ie(new it(r,r,.3,96),te,s));let c=ie(new Et(r*1.03,.2,10,96),te,[...s,"energy","bezel"]);c.rotation.x=Math.PI/2,c.position.y=.2,n.add(c),[[0,50,"zone:human"],[51,79,"zone:hybrid"],[80,100,"zone:ai"]].forEach(([v,M,S])=>{let x=ie(Gt(Ei(r*.7,r*.86,a(v),a(M)),.16,.02),te,[...s,S,...S==="zone:hybrid"?["soft"]:[]]);x.position.y=.32,n.add(x)});let u=new re;for(let v=81;v<100;v+=2){let M=ae(.05,.05,r*.15,[...s,"zone:ai"],ft);M.position.copy(se(r*.78,a(v),.36)),M.rotation.y=-a(v)*Ie+.5,u.add(M)}n.add(u);for(let v=0;v<=100;v+=5){let M=ae(.07,.06,v%50===0?.7:v%10===0?.45:.25,s,ft);M.position.copy(se(r*.6-(v%10===0?0:.1),a(v),.2)),M.rotation.y=-a(v)*Ie,n.add(M)}let g=[["ring:score",2.1,["energy"],.5],["ring:rule",1.62,["accent"],.38],["ring:ceiling",1.14,[],.26]].map(([v,M,S,x])=>{let b=ie(new Xt,te,[...s,v,...S]);return b.position.y=x,b.userData={...b.userData,ring:M,value:-1},n.add(b),b}),f=(v,M,S)=>{v.visible=S&&M>.5;let x=Math.round(M*2)/2;!v.visible||v.userData.value===x||(v.userData.value=x,v.geometry.dispose(),v.geometry=Gt(Ei(v.userData.ring-.2,v.userData.ring+.2,a(0),a(x)),.14,.03))},d=new re;d.name="ceiling-block";let p=ae(.36,.55,r*.92-.95,[...s,"ceiling"],ft);p.position.set(0,.45,-(.95+r*.92)/2);let _=ae(.5,.12,.5,[...s,"ceiling","energy"]);_.position.set(0,.78,-r*.92),d.add(p,_),n.add(d);let m=new re;m.name="needle";let h=ae(.22,.14,r*.85,[...s,"energy","needle"]);h.position.set(0,.32,-r*.4);let y=ae(.4,.14,r*.25,[...s,"energy","needle"]);y.position.set(0,.32,r*.12);let T=ie(new it(.45,.45,.3,32),ft,s);return T.position.y=.36,m.add(h,y,T),n.add(m),n.userData.set=({score:v=0,rule:M=100,ceiling:S=100},x=["score","rule","ceiling"])=>{f(g[0],v,x.includes("score")),f(g[1],M,x.includes("rule")),f(g[2],S,x.includes("ceiling")),d.visible=x.includes("ceiling")&&S<99.5,d.rotation.y=-a(S)*Ie,u.visible=Math.min(x.includes("rule")?M:100,x.includes("ceiling")?S:100)<80,m.rotation.y=-a(Math.min(v,M,S))*Ie},n.userData.set({score:i,rule:e,ceiling:t}),n}var yt=(i,e,t)=>new L(i,e,t),je=(i,e,t,n,s,r=0)=>(e.position.set(t,n,s),e.rotation.y=r,i.add(e),e);function Kf(i){let e=new re;for(let o=0;o<5;o++){let a=72*o,l=ae(.1,.08,.7,i);l.position.copy(se(.35,a,.18)),l.rotation.y=-a*Ie;let c=ie(new nn(.08,8,6),te,i);c.position.copy(se(.7,a,.08)),e.add(l,c)}let t=Ke(.06,.7,i,te,10);t.position.y=.55;let n=ae(1,.18,.95,[...i,"chair"]);n.position.y=.95;let s=ae(.95,1.1,.14,[...i,"chair"]);s.position.set(0,1.65,.5),s.rotation.x=.12;let r=o=>{let a=ae(.1,.08,.6,i);a.position.set(o*.52,1.3,.05);let l=ae(.06,.32,.06,i);l.position.set(o*.52,1.12,.2),e.add(a,l)};return r(-1),r(1),e.add(t,n,s),e}function Qf(i){let e=new re,t=ae(.9,.08,.85,[...i,"chair"]);t.position.y=.95;let n=ae(.9,.6,.06,[...i,"chair"]);return n.position.set(0,1.55,.42),e.add(t,n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([s,r])=>{let o=Ke(.04,.95,i,te,6);o.position.set(s*.38,.47,r*.36),e.add(o)}),[-1,1].forEach(s=>{let r=Ke(.03,.6,i,te,6);r.position.set(s*.38,1.25,.42),e.add(r)}),e}function bu(i){let e=new re;return[-1,1].forEach(t=>{let n=ae(.55,.04,.75,[...i,"manual"]);n.position.set(t*.29,.04,0),n.rotation.z=-t*.08,e.add(n);for(let s=0;s<4;s++){let r=ae(.38,.01,.025,i,ft);r.position.set(t*.29,.08+.02*t*-0,-.25+s*.16),r.rotation.z=-t*.08,e.add(r)}}),e}function jf(i){let e=new re,t=ie(new Et(.32,.035,6,24,Math.PI),te,[...i,"headset"]);return t.rotation.x=-Math.PI/2,t.rotation.z=0,t.position.y=.1,e.add(t),[-1,1].forEach(n=>{let s=Ke(.14,.12,[...i,"headset"],te,14);s.rotation.z=Math.PI/2,s.position.set(n*.32,.12,0),e.add(s)}),e}function Tl(i,{x0:e,x1:t,z0:n,z1:s,h:r}){let o=new re,a=4;for(let l=e;l<t-.01;l+=a)for(let c=n;c<s-.01;c+=a){let u=Math.min(a,t-l),g=Math.min(a,s-c);o.add(je(o,ae(u-.05,.2,g-.05,[...i,"floor"]),l+u/2,-.1,c+g/2))}je(o,ae(t-e,r,.3,[...i,"wall"]),(e+t)/2,r/2,n-.15),je(o,ae(.3,r,s-n,[...i,"wall"]),e-.15,r/2,(n+s)/2);for(let l=e+a;l<t;l+=a)je(o,ae(.06,r,.04,i),l,r/2,n+.02);for(let l=n+a;l<s;l+=a)je(o,ae(.04,r,.06,i),e+.02,r/2,l);return je(o,ae(t-e,.25,.1,i),(e+t)/2,.12,n+.05),je(o,ae(.1,.25,s-n,i),e+.05,.12,(n+s)/2),o}function Ai(i,e,t,n){let s=new re;s.name=n,s.add($e(i+.4,e+.4,.2,.12,[...t,"screen",n]));let r=$e(i,e,.06,.06,[...t,"screen",n,"glass"]);return r.position.z=.2,s.add(r),s}var lv={r:6,x0:-9,x1:5,floor:-2.6,dome:3.6};function ep(){let i=new re;i.name="cockpit";let e=["cockpit"],{r:t,x0:n,x1:s,floor:r,dome:o}=lv,a=[25,270],l=C=>C.rotateZ(-Math.PI/2),c=l(new it(t,t,s-n,96,1,!0,a[0]*Ie,(a[1]-a[0])*Ie));c.translate((n+s)/2,0,0);let u=ie(c,te,[...e,"shell"]);u.material.side=Bt,i.add(u);let g=[];for(let C=0;C<=20;C++){let z=C/20;g.push(new oe(t*Math.sqrt(Math.max(0,1-z*z)),o*z))}let f=l(new ti(g,96,a[0]*Ie,(a[1]-a[0])*Ie));f.translate(s,0,0);let d=ie(f,te,[...e,"dome"]);d.material.side=Bt,i.add(d);let p=(C,z,B=0)=>yt(C,-(t-B)*Math.sin(z*Ie),(t-B)*Math.cos(z*Ie));[-7.5,-4.5,-1.5,1.5,4.5].forEach(C=>{let z=l(Gt(Ei(t-.45,t-.02,180-a[1],180-a[0],48),.3,.03)),B=ie(z,te,[...e,"frame"]);B.position.x=C+.15,i.add(B)}),[70,120,200,245].forEach(C=>{let z=ae(s-n,.12,.12,[...e,"stringer"]);z.position.copy(p((n+s)/2,C,.08)),i.add(z)}),[[150,.14],[162,.1],[228,.12]].forEach(([C,z])=>{let B=Ke(z,s-n-.4,[...e,"conduit"],te,10);B.rotation.z=Math.PI/2,B.position.copy(p((n+s)/2,C,.55)),i.add(B),[-6,-3,0,3].forEach(Z=>{let k=ae(.3,.4,.4,e);k.position.copy(p(Z,C,.45)),i.add(k)})});let _=On([p(-8.2,150,.55),p(-8.2,120,.9),yt(-8.2,r+.6,-3.6)],.12,[...e,"conduit"]);i.add(_);let m=Math.sqrt(t*t-r*r)-.1;for(let C=n+.2;C<s-1;C+=2.6)for(let z=0;z<3;z++){let B=2*m/3,Z=ae(2.55,.18,B-.06,[...e,"floor"]);Z.position.set(C+1.3,r-.09,-m+B*(z+.5)),i.add(Z)}let h=$e(3,2.2,.06,.25,[...e,"hatch"],{border:.14});h.rotation.x=-Math.PI/2,h.position.set(-5.4,r+.01,1.8),i.add(h),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([C,z])=>{let B=Jn(1,0,e,.08);B.rotation.x=-Math.PI/2,B.position.set(-5.4+C*1.3,r+.02,1.8+z*.9),i.add(B)});let y=new re;y.name="door",y.add($e(2.4,3.4,.12,.6,[...e,"door"]));let T=$e(2.4,3.4,.1,.6,[...e,"door"],{border:.16});T.position.z=.12;let v=$e(.9,.7,.06,.15,[...e,"door"],{border:.1});v.position.set(0,.8,.12);let M=ie(new Et(.38,.05,6,24),te,[...e,"door"]);M.position.set(0,-.4,.3),y.add(T,v,M),y.position.set(-6.4,.2,-5.62),i.add(y);let S=new re;S.add(Object.assign(Ki(1.6,1.1,e),{}));let x=dr(4,3,e,[1,6]);x.position.x=1.8,S.add(x);let b=Ki(1.2,1.1,e,{traces:2});b.position.x=3.4,S.add(b),S.position.set(-3.2,1.6,-5.55),i.add(S);let I=ae(4.6,.9,1.1,e);I.position.set(-1.6,r+.45,-4.9),i.add(I);let A=ae(1.6,2.1,9.2,[...e,"console"]);A.position.set(4.1,r+1.05,0),i.add(A);let D=Zf(e);D.scale.setScalar(.62),D.rotation.order="YXZ",D.rotation.set(-.38,-Math.PI/2,0),D.position.set(4.3,.95,0),i.add(D);let F=ae(1.1,.25,6.6,e);F.position.set(4.75,2.2,0),i.add(F),[-1,1].forEach(C=>{let z=new re;z.add($e(3,2.6,.3,.3,[...e,"console"]));let B=Ki(1.3,.9,e);B.position.set(-.6,.55,.3);let Z=dr(3,2,e,C>0?[2]:[3]);Z.position.set(.75,.55,.3);let k=new re;[-.9,-.3,.3,.9].forEach(($,K)=>{let xe=Df(e,K%2===0);xe.scale.setScalar(.6),xe.position.x=$,k.add(xe)}),k.position.set(0,-.6,.3),z.add(B,Z,k),z.rotation.order="YXZ",z.rotation.set(-.3,-Math.PI/2-C*.55,0),z.position.set(3.4,.6,C*4.1),i.add(z)});let H=ae(1.8,1.5,1,[...e,"console"]);H.position.set(2.2,r+.75,0),i.add(H),[-.25,.25].forEach(C=>{let z=Ke(.05,.6,[...e,"energy","throttle"],te,8);z.position.set(2.3,r+1.75,C),z.rotation.z=.35;let B=ae(.18,.14,.3,[...e,"energy","throttle"]);B.position.set(2.2,r+2.05,C),i.add(z,B)});let P=dr(3,2,e,[4]);return P.rotation.x=-Math.PI/2,P.rotation.z=Math.PI/2,P.position.set(1.7,r+1.51,0),i.add(P),[-1.95,1.95].forEach((C,z)=>{let B=new re;B.name=`seat:${z+1}`;let Z=[...e,"seat"],k=ae(1.3,.5,1.2,Z);k.position.y=.25;let $=Ke(.18,.6,Z,te,12);$.position.y=.8;let K=ae(1.5,.35,1.5,Z);K.position.y=1.25;let xe=ae(.35,2.5,1.5,Z);xe.position.set(-.78,2.45,0),xe.rotation.z=.12;let Ae=ae(.3,.6,.9,Z);Ae.position.set(-.95,4,0),Ae.rotation.z=.12,B.add(k,$,K,xe,Ae),[-1,1].forEach(Ce=>{let Fe=ae(1.1,.14,.18,Z);Fe.position.set(-.1,1.95,Ce*.82);let ye=ae(1.3,.3,.16,Z);ye.position.set(0,1.55,Ce*.8),B.add(Fe,ye)}),B.position.set(.6,r,C),i.add(B);let q=On([yt(2.5,r,C),yt(2.6,r+1.5,C),yt(2.45,r+2.5,C)],.08,[...e,"energy","column"]),_e=On([yt(2.4,r+3.05,C-.55),yt(2.4,r+2.55,C-.5),yt(2.45,r+2.5,C),yt(2.4,r+2.55,C+.5),yt(2.4,r+3.05,C+.55)],.07,[...e,"energy","column"]);i.add(q,_e)}),[[1.4,205],[1.4,240],[1.4,262],[2.4,230]].forEach(([C,z],B)=>{let Z=t*Math.sqrt(1-(C/o)**2)-.06,k=$e(B===3?1.3:1.6,B===3?.8:1.1,.08,.2,[...e,"window"],{border:.14});k.position.set(s+C,-Z*Math.sin(z*Ie),Z*Math.cos(z*Ie)),k.lookAt(yt(s+C*.4,0,0)),i.add(k)}),i}function tp(){let i=new re;i.name="classroom";let e=["classroom"];i.add(Tl(e,{x0:-14,x1:14,z0:-10,z1:10,h:9}));let t=new re;t.name="blackboard",t.add($e(11.4,4.8,.2,.1,[...e,"board"]));let n=$e(11,4.4,.05,.06,[...e,"board"]);n.position.z=.2,t.add(n);let s=ae(11,.12,.3,e);s.position.set(0,-2.45,.3),t.add(s);let r=[...e,"energy","drawing"],o=(b,I,A,D,F)=>{let H=ie(new Et(1,.025,4,64),te,r);H.scale.set(b,I,1),H.rotation.z=F,H.position.set(A,D,.3),t.add(H)};o(1.6,.9,-3.4,.3,.3),o(1.1,1.1,-3.4,.3,0),o(1.4,.6,.6,.6,-.4);let a=Ke(.3,.04,r,te,24);a.rotation.x=Math.PI/2,a.position.set(-3.4,.3,.3),t.add(a);let l=On([yt(-1.6,-1.4,.3),yt(-.4,.6,.3),yt(1.8,1.6,.3),yt(3.2,1,.3)],.03,r);t.add(l);for(let b=0;b<6;b++){let I=1.2+b*7%5*.4,A=ae(I,.06,.02,e,ft);A.position.set(2.8+I/2,1.3-b*.5,.29),t.add(A)}t.position.set(1,5,-10),i.add(t);let c=Ai(3.4,2.6,e,"poster");cv(c,r),c.position.set(-9.5,5.6,-10),i.add(c);let u=Ai(4,3,e,"schematic");for(let b=0;b<5;b++){let I=ae(2.6-b%2*.8,.05,.02,e,ft);I.position.set(-.4,.9-b*.45,.3),u.add(I)}u.position.set(-14,5.5,3),u.rotation.y=Math.PI/2,i.add(u);let g=Qi(pr().group,{byTags:!0});g.scale.setScalar(.13),g.rotation.z=-Math.PI/2,g.position.set(-6.2,2.4,-5.2),g.name="model",i.add(g),[-8.6,-3.8].forEach(b=>{let I=new re;I.add(je(I,ae(.3,1.6,.25,e),0,.8,-.55),je(I,ae(.3,1.6,.25,e),0,.8,.55)),I.add(je(I,ae(.4,.2,1.6,e),0,1.65,0),je(I,ae(1.4,.15,1.6,e),0,.08,0)),I.position.set(b,0,-5.2),i.add(I)});let f=$e(1.4,.4,.06,.06,e);f.position.set(-6.2,.6,-4.4),i.add(f);let d=new re;d.name="simulator";let p=[yt(2.6,0,0),yt(2.5,.4,0),yt(1.5,3.3,0),yt(1.3,3.6,0),yt(.9,4.1,0),yt(0,4.3,0)].map(b=>new oe(b.x,b.y)),_=ie(new ti(p,48),te,[...e,"capsule"]);_.material.side=Bt,_.position.y=1.4,d.add(_);let m=ie(new Et(2.6,.12,6,48),te,[...e,"energy","capsule"]);m.rotation.x=Math.PI/2,m.position.y=1.4,d.add(m),[0,90,180,270].forEach(b=>{let I=Ke(.12,1.5,e,te,8);I.position.copy(se(1.9,b+45,.7)),d.add(I)}),[[30,2.6],[150,2.6]].forEach(([b,I])=>{let A=$e(.8,.6,.06,.15,[...e,"window"],{border:.1}),D=2.5-(I-1.8)/2.9*1;A.position.copy(se(D+.02,b,I)),A.lookAt(se(D*3,b,I+.6)),d.add(A)});let h=$e(1.2,1.4,.08,.3,[...e,"hatch"],{border:.12});h.position.copy(se(2.05,90,2.4)),h.lookAt(se(6,90,3.2)),d.add(h);for(let b=0;b<6;b++){let I=ae(.9,.06,.06,e);I.position.copy(se(3,90,.25+b*.38)),I.rotation.y=-90*Ie,d.add(I)}[-.45,.45].forEach(b=>{let I=ae(.06,2.4,.06,e),A=se(3,90,1.2);I.position.set(A.x,1.2,A.z+b),d.add(I)});let y=new re;y.add(je(y,Ke(.12,6,e,te,8),0,3,0),je(y,ae(2.6,.2,.2,e),-1.2,6,0)),d.add(je(d,y,3.6,0,-1.6)),d.add(On([yt(2.4,6,-1.6),yt(1.4,5.6,-1.4),yt(1,5.2,-.7)],.06,[...e,"energy","umbilical"])),d.position.set(9.4,0,2.6),d.rotation.y=-.6,i.add(d);let T=0;[-2.4,.8,4,7.2].forEach(b=>[-7.4,-3,1.4].forEach(I=>{let A=new re;A.name=`desk:${++T}`,A.add(je(A,ae(2.4,.12,1.3,[...e,"desk"]),0,1.6,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([D,F])=>A.add(je(A,Ke(.05,1.6,e,te,6),D*1.1,.8,F*.55))),A.add(je(A,ae(2.2,.06,.4,e),0,1.25,-.4)),A.add(je(A,bu(e),.3,1.66,.05)),A.add(je(A,Qf(e),0,0,1.25)),A.position.set(I,0,b),i.add(A)}));let v=new re;v.name="lectern",v.add(je(v,ae(1.3,2.3,.9,e),0,1.15,0));let M=ae(1.5,.12,1.1,e);M.position.set(0,2.4,.05),M.rotation.x=.25,v.add(M,je(v,bu(e),0,2.5,.05)),v.position.set(4.2,0,-7.2),i.add(v);let S=new re;S.add(je(S,ae(3,2.2,1.4,e),0,1.1,0));let x=new re;return x.add(je(x,Ki(1.2,.8,e),-.7,0,0),je(x,dr(3,2,e,[1,5]),.8,0,0)),x.rotation.x=-.6,x.position.set(0,2.25,.2),S.add(x),S.position.set(-12.2,0,.5),S.rotation.y=Math.PI/2,i.add(S),i}function cv(i,e){[[1.2,.5,0],[.7,.7,0]].forEach(([t,n,s])=>{let r=ie(new Et(1,.025,4,48),te,e);r.scale.set(t,n,1),r.rotation.z=s,r.position.z=.3,i.add(r)})}var uv={consoles:[[-6.5,-4.5],[6.5,-4.5],[-6.5,1.5],[6.5,1.5],[-6.5,7.5],[6.5,7.5]]};function hv(i,e){let t=new re;t.name=e;let n=[...i,"console",e],s=(l,c,u,g,f=0)=>(l.position.copy(se(c,u,g)),l.rotation.order="YXZ",l.rotation.set(f,-u*Ie,0),t.add(l),l),r=ie(Gt(Ei(3.9,5.2,-36,36),1.5,.03),te,n);r.position.y=1.5;let o=ie(Gt(Ei(3.6,5.3,-38,38),.12,.02),te,n);o.position.y=1.62;let a=ie(Gt(Ei(4.8,5.3,-36,36),1.6,.03),te,n);return a.position.y=3.2,t.add(r,o,a),[-24,0,24].forEach(l=>s($e(1.6,1,.06,.08,n,{border:.08}),3.88,l,.75)),[-24,24].forEach(l=>s(ae(.4,.05,.05,n,ft),3.86,l,1)),[-27,-9,9,27].forEach((l,c)=>s(Ki(2.1,1.25,n,{traces:3,lit:c%2===0}),4.75,l,2.45,-.18)),s(ae(1.7,.06,.5,n),4.05,0,1.7),s(ae(.2,.06,.25,n),4.05,14,1.7),s(jf(n),4.3,-18,1.68),t.add(je(t,Kf(n),0,0,-2.8)),t}function np(){let i=new re;i.name="mission";let e=["mission"],t=[...e,"energy"];i.add(Tl(e,{x0:-15,x1:15,z0:-11,z1:11,h:10})),uv.consoles.forEach(([m,h],y)=>{let T=hv(e,`console:${y+1}`);T.position.set(m,0,h+2.8),i.add(T)});let n=Ai(8,5,e,"screen:flight"),s=Ke(.55,.04,e,te,32);s.rotation.x=Math.PI/2,s.position.set(-2.7,-1.3,.3);let r=Ke(.45,.04,e,te,32);r.rotation.x=Math.PI/2,r.position.set(2.8,1.3,.3);let o=new gs(yt(-2.4,-.9,.32),yt(-1.2,2,.32),yt(2.3,1.2,.32));n.add(s,r,ie(new ki(o,48,.04,6),te,e));let a=new Hi(Array.from({length:17},(m,h)=>o.getPoint(.55*h/16)));n.add(ie(new ki(a,32,.07,6),te,t));let l=ie(new ms(.14,.45,10),te,t);l.position.copy(o.getPoint(.55)),l.quaternion.setFromUnitVectors(yt(0,1,0),o.getTangent(.55)),n.add(l);let c=ie(new Et(1,.02,4,48),te,e);c.scale.set(1.1,.5,1),c.position.set(-2.7,-1.3,.32),n.add(c),je(i,n,-9.8,5.8,-11);let u=Ai(9.2,5.6,e,"screen:site");u.add(je(u,ae(8.2,.45,.04,e),0,2.15,.3)),u.add(je(u,ae(.7,.25,.04,t),-3.6,2.15,.34)),u.add(je(u,$e(3.8,1.8,.04,.08,[...e,"soft"]),-2,.8,.28)),[[3.4,1.4],[2.8,1],[1.8,.6]].forEach(([m,h])=>u.add(je(u,ae(m,.12,.04,e,ft),.4+m/2,h,.3))),u.add(je(u,ae(1.2,.32,.04,t),1,.1,.3)),[-2.8,0,2.8].forEach((m,h)=>[-.9,-1.9].forEach((y,T)=>u.add(je(u,$e(2.5,.8,.04,.06,(h+T)%3===0?[...e,"soft"]:e,{border:(h+T)%3===0?0:.06}),m,y,.28)))),je(i,u,.6,6.3,-11);let g=Ai(6.4,5,e,"screen:dials");[{value:.66,range:[.55,.85]},{value:.7,range:[.6,.95]},{value:.5,ticks:4,minor:0},{value:.64,centre:!0,ticks:8,minor:1,sweep:240}].forEach((m,h)=>{let y=ts(.75,[...e,"wall-dial"],{ticks:10,minor:1,...m});y.position.set(h%2?1.4:-1.4,h<2?.95:-1,.28),g.add(y)}),je(i,g,10.2,5.8,-11);let f=Ai(8,4.4,e,"screen:rocket"),d=Qi(pr().group,{byTags:!0});d.scale.setScalar(.09),d.rotation.z=-Math.PI/2,d.position.set(-.6,0,.75),f.add(d),je(i,f,-15,6,-5,Math.PI/2);let p=Ai(6,5,e,"screen:list");for(let m=0;m<7;m++)p.add(je(p,ae(.18,.18,.04,m<3?t:e),-2,1.6-m*.5,.3)),p.add(je(p,ae(2.4+m*3%4*.3,.1,.04,e,ft),-.3+m*3%4*.15,1.6-m*.5,.3));je(i,p,-15,6,4,Math.PI/2);let _=ts(.55,e,{value:.3,ticks:12,minor:0,sweep:360});return je(i,_,-3.8,9.3,-10.7),i}var ns=(i,e,t)=>new L(i,e,t);function wl(i=[],{score:e=.86}={}){let t=new re;t.name="cartridge";let n=[...i,"cartridge"],s=ae(3,.7,1.1,[...n,"cart:body"]);t.add(s);let r=ae(3.1,.08,.3,n);At(r,0,-.39,0),t.add(r);let o=$e(1.5,.46,.04,.05,[...n,"cart:label"]);At(o,-.35,0,.55),t.add(o);for(let f=0;f<3;f++)t.add(At(ae(1.1-f*.25,.03,.02,n,ft),-.48-f*.12,.12-f*.12,.6));let a=new re;a.name="cart:tools",[-.28,.28].forEach((f,d)=>{let p=Ke(.12,.3,[...n,"cart:tools"],te,16);p.rotation.z=Math.PI/2,At(p,1.65,.05,f);let _=ie(new ms(.16,.36,16),te,[...n,"cart:tools"]);_.rotation.z=-Math.PI/2,At(_,1.98,.05,f),a.add(p,_),d===0&&a.add(At(ae(.08,.3,.08,[...n,"cart:tools"]),1.75,.3,f))}),t.add(a);let l=new re;l.name="cart:plug";let c=Ke(.26,.3,[...n,"cart:plug"],te,20);c.rotation.z=Math.PI/2,At(c,-1.65,0,0),l.add(c),[-.1,.1].forEach(f=>{let d=Ke(.04,.22,[...n,"cart:plug"],ft,8);d.rotation.z=Math.PI/2,l.add(At(d,-1.88,f,0))}),l.add(On([ns(-1.82,0,0),ns(-2.4,-.1,.1),ns(-2.9,-.6,.5),ns(-3.5,-.8,.9)],.07,[...n,"cart:plug","energy"])),t.add(l);let u=new re;u.name="cart:clamp",[.55,.95].forEach(f=>{let d=ae(.12,.84,1.24,[...n,"cart:clamp","energy"]);u.add(At(d,f,0,0));let p=Jn(1,0,[...n,"cart:clamp"],.06);p.position.set(f,.3,.62),u.add(p)}),t.add(u);let g=ts(.32,[...n,"cart:dial"],{value:e,ticks:5,minor:1,range:[.8,1]});return g.name="cart:dial",g.rotation.x=-Math.PI/2,At(g,-.9,.36,0),t.add(g),t.add(On([ns(-1.2,.36,-.3),ns(-1.2,.7,-.3),ns(-.7,.7,-.3),ns(-.7,.36,-.3)],.05,n)),t}function ip(i=[],{slots:e=4,selected:t=1}={}){let n=new re;n.name="model-bay";let s=[...i,"model-bay"],r=e*1.1+.4;n.add(At(ae(r,.2,1.6,s),0,.1,0)),n.add(At(ae(r,.16,1.6,s),0,2.6,0)),[-r/2+.1,r/2-.1].forEach(d=>n.add(At(ae(.2,2.6,1.6,s),d,1.3,0)));for(let d=0;d<e;d++){let p=-r/2+.75+d*1.1,_=new re;_.name=`model:${d+1}`;let m=[...s,`model:${d+1}`];_.add(At(ae(.8,1.7,1.3,m),0,0,0)),_.add(At($e(.5,.3,.04,.05,m),0,.5,.66)),_.add(At(ae(.5,.06,.04,m,ft),0,-.1,.67)),_.add(At(ae(.3,.06,.04,m,ft),-.1,-.25,.67));let h=Ke(.08,.5,m,te,10);h.rotation.x=Math.PI/2,_.add(At(h,0,-.55,.85)),At(_,p,1.15,0),n.add(_),d<e-1&&n.add(At(ae(.06,2.3,1.5,s),p+.55,1.35,0))}let o=Ke(.06,r-.4,s,te,8);o.rotation.z=Math.PI/2,n.add(At(o,0,3,.4));let a=new re;a.name="selector";let l=d=>-r/2+.75+d*1.1,c=[...s,"selector","energy"];a.add(At(ae(.5,.36,.5,c),0,3,.4)),a.add(At(Ke(.05,.7,c,te,8),0,2.5,.4)),a.add(At(ae(.5,.08,.2,c),0,2.15,.4)),n.add(a);let u=new re;u.name="indicator",u.add(At(Ke(.25,.25,[...s,"indicator"],te,16),r/2-.5,2.8,0)),u.add(At(ie(new nn(.2,16,10,0,Math.PI*2,0,Math.PI/2),te,[...s,"indicator","energy"]),r/2-.5,2.92,0)),n.add(u);let g=n.getObjectByName(`model:${t+1}`),f=g.position.clone();return n.userData.set=d=>{a.position.x=l(e-1)+.9+(l(t)-l(e-1)-.9)*d,g.position.set(f.x,f.y+1.9*(1-d),f.z+.9*(1-d))},n.userData.set(1),n}var qe=(i,e,t)=>new L(i,e,t),Zt=Bn.r,dv={rocket:{"stage:1":["rocket",se(Zt,150,-15),["stages"]],"stage:2":["rocket",se(Zt,150,8),["stages"]],"stage:3":["rocket",se(Zt*.62,150,31),["stages"]],"energy-line":["rocket",se(Zt+.2,112,19),["energy"]],nozzles:["rocket",qe(0,Bn.nozzleY-3.6,0),[]],moon:["moon",qe(0,0,0),["target"]],"pillar:pdlc":[null,qe(0,.3,0),["pillars"]],"pillar:platform":[null,se(3.4,150,-2.6),["pillars"]],"pillar:measure":["rocket",se(Zt,150,23),["pillars"]],"pillar:people":["rocket",se(Zt+.1,160,25),["pillars"]],"part:line":["rocket",se(Zt+.2,112,19),["pin:1"]],"part:bay":["rocket",se(Zt,140,.5),["pin:1"]],"part:hatch":["rocket",se(Zt,160,25),["pin:2"]],"part:cabin":["rocket",se(Zt*.62,150,31.5),["pin:2"]],"part:bays":["rocket",se(Zt,150,6),["pin:3"]],"part:conduit":["rocket",se(Zt+.1,170,13.5),["pin:3"]],"part:cockpit":["rocket",se(Zt*.45,150,35),["pin:4"]],"part:dials":["rocket",se(Zt,140,23),["pin:4"]]},cockpit:{"inst:throughput":["inst:throughput",qe(0,1.2,.3),["instruments"]],"inst:stability":["inst:stability",qe(0,.3,.2),["instruments"]],"inst:cost":["inst:cost",qe(0,.9,.5),["instruments"]],"inst:productivity":["inst:productivity",qe(0,.5,.3),["instruments"]],"inst:experience":["inst:experience",qe(0,.14,.3),["instruments"]],seats:["seat:1",qe(-.9,4.2,0),["cabin"]],columns:[null,qe(2.4,.4,1.95),["cabin"]],hatch:[null,qe(-5.4,-2.6,1.8),["cabin"]]},classroom:{specialisation:["model",qe(0,0,0),["tiers"]],"deep-dives":["blackboard",qe(-2.4,.3,.3),["tiers"]],hackathon:["simulator",qe(0,5.6,0),["tiers"]],"self-paced":["desk:5",qe(.3,1.7,.05),["tiers"]]},mission:{"screen:site":["screen:site",qe(0,0,.3),["screens"]],"screen:flight":["screen:flight",qe(0,0,.3),["screens"]],"screen:dials":["screen:dials",qe(0,0,.3),["screens"]],"screen:rocket":["screen:rocket",qe(0,0,.3),["screens"]],"screen:list":["screen:list",qe(0,0,.3),["screens"]],console:["console:6",qe(0,3.2,-4.2),["screens"]]},engine:{capabilities:["cap:design:1",qe(0,.5,0),["capabilities"]],"cart:tools":["cartridge",qe(1.95,.05,.28),["cartridge"]],"cart:label":["cartridge",qe(-.35,0,.6),["cartridge"]],"cart:plug":["cartridge",qe(-2.9,-.6,.5),["cartridge"]],"cart:clamp":["cartridge",qe(.75,.42,0),["cartridge"]],"cart:dial":["cartridge",qe(-.9,.4,0),["cartridge"]],"bay:manual":["model:2",qe(0,.9,.65),["bay"]],"bay:selector":["selector",qe(0,3.2,.4),["bay"]],"bay:indicator":["indicator",qe(2.1,3,0),["bay"]],"bay:context":["nexus",qe(0,.4,0),["bay"]]},contract:{"zone:human":[null,se(3.1,-60,.4),["zones"]],"zone:hybrid":[null,se(3.1,36,.4),["zones"]],"zone:ai":[null,se(3.1,96,.4),["zones"]],ceiling:["ceiling-block",se(3.4,0,.9),["ceiling"]],needle:["needle",se(2.6,0,.4),["needle"]],"ring:score":[null,se(2.05,-96,.35),["rings"]],"ring:rule":[null,se(1.65,-72,.35),["rings"]],"ring:ceiling":[null,se(1.25,-48,.35),["rings"]]}},fv={"pin:1":se(Zt+.6,125,14),"pin:2":se(Zt+.6,178,23.5),"pin:3":se(Zt+.6,160,2),"pin:4":se(Zt*.5,140,34.5)},pv=[{sets:["rocket","cockpit"],shots:["nose-window","cockpit-hatch"]}],sp=[{sets:["classroom","mission"],pivot:-10.8}];var op={pad:{az:150,elev:6,dist:320,k:-44,at:qe(0,16,0)},"rocket-flight":{az:120,elev:18,dist:235,k:-33,at:qe(0,30,0),roll:-34},"rocket-hero":{az:150,elev:6,dist:250,k:38,at:qe(-12,24,-30),roll:-8},"rocket-nose":{az:150,elev:18,dist:70,k:-10,at:qe(0,24,0),roll:4},"rocket-open":{az:145,elev:22,dist:130,k:-18,at:qe(0,12,0),roll:-12},"rocket-moon":{az:135,elev:-4,dist:215,k:-34,at:qe(0,30,0),roll:-24},capability:{az:205,elev:40,dist:44,k:-6,at:se(5.2,144,0)},"model-bay":{az:210,elev:14,dist:70,k:-10,at:qe(3,-5,1)},"nose-window":{az:134,elev:2,dist:2.2,k:0,at:se(Zt,134,25.1)},"cockpit-hatch":{az:262,elev:12,dist:24,k:0,at:qe(1.5,0,.2)},cockpit:{az:215,elev:34,dist:64,k:-9,at:qe(.5,-.6,1.4)},"cockpit-panel":{az:270,elev:8,dist:18.5,k:-3.6,at:qe(4.3,.95,0)},classroom:{az:135,elev:33,dist:96,k:-13,at:qe(-4,1.5,-2)},mission:{az:135,elev:33,dist:100,k:-14,at:qe(0,2,0)},"telescope-right":{az:150,elev:18,dist:16,k:-1.5,at:qe(0,.9,0),roll:8},"mission-console":{az:200,elev:22,dist:72,k:-10,at:qe(0,2,2)},"mission-wall":{az:168,elev:10,dist:46,k:0,at:qe(-3.5,6.2,-11)},contract:{az:180,elev:56,dist:34,k:0,at:qe(-3,0,0)}},rp=i=>Math.atan2(-Math.cos(i*Ie),-Math.sin(i*Ie));function mv(i){let e=i.getObjectByName("wheel"),t=new re;t.name="capabilities";let n=(l,c,u)=>{l.scale.setScalar(.32),l.position.copy(se(c,u,-.16)),l.rotation.y=rp(u),t.add(l)};Object.entries({discover:2,design:3,develop:3,deploy:2,deepen:2}).forEach(([l,c],u)=>{for(let g=0;g<c;g++){let f=wl(["capabilities",`cap:${l}`]);f.name=`cap:${l}:${g+1}`,n(f,Lt.rOut+.3,$t(u)+(g-(c-1)/2)*13)}});let r=wl(["capabilities","cap:drop"]);r.name="cap:drop:1",n(r,_t.rOut+.3,(_t.from+_t.to)/2),e.add(t);let o=wl(["cartridge"]);o.position.copy(se(Lt.rOut+2.6,$t(2),.15)),o.rotation.y=rp($t(2)),e.add(o);let a=ip(["bay"],{selected:1});return a.scale.setScalar(1.05),a.position.set(5.4,-1.1,2.4),a.rotation.y=-.45,(i.getObjectByName("layer:L3")||i).add(a),{cartridges:t,cartridge:o,bay:a}}function ap(i){let e=new re;e.name="sets";let t=pr(),n=qf(),s=Yf(7);s.position.set(-40,62,-95);let r={rocket:new re,cockpit:ep(),classroom:tp(),mission:np(),contract:Jf({score:0,rule:100,ceiling:100})};r.rocket.add(t.group,n,s);let o=sp.map(({sets:[f,d],pivot:p})=>{let _=new re;return _.name=`turntable:${f}:${d}`,_.position.z=p,r[f].position.z=-p,r[d].position.z=p,r[d].rotation.y=Math.PI,e.add(_),{table:_,a:f,b:d}});Object.entries(r).forEach(([f,d])=>{d.name=`set:${f}`,d.visible=!1;let p=o.find(_=>_.a===f||_.b===f);(p?p.table:e).add(d)});let a=null,l=mv(i);gv(r,i),Object.entries(fv).forEach(([f,d])=>{let p=ws(f.split(":")[1],[f,"pins"],"label-pin");p.position.copy(d),t.group.add(p)});let c={separate:0,open:0,score:0,rule:100,ceiling:100,select:1,turn:0},u={...c},g=[];return{group:e,show(f,d){a=f,Object.entries(r).forEach(([m,h])=>h.visible=m===f);let p=o.find(m=>m.a===f||m.b===f);p&&(u.turn=f===p.b?1:0),t.group.visible=d.includes("rocket"),n.visible=d.includes("pad"),s.visible=d.includes("moon");let _=f==="rocket";l.cartridges.visible=_&&d.includes("cartridges"),l.cartridge.visible=_&&d.includes("cartridge"),l.bay.visible=_&&d.includes("bay")},joined(f,d){return f!==d&&sp.some(p=>p.sets.includes(f)&&p.sets.includes(d))},portal(f,d){let p=pv.find(_=>f!==d&&_.sets.includes(f)&&_.sets.includes(d));return p?{out:p.shots[p.sets.indexOf(f)],in:p.shots[p.sets.indexOf(d)]}:null},setTarget(f){f.rings&&(g=f.rings),Object.keys(u).forEach(d=>Number.isFinite(f[d])&&(u[d]=f[d]))},update(f){let d=!1;return Object.keys(c).forEach(p=>{let _=u[p]-c[p];Math.abs(_)<.001*(["score","rule","ceiling"].includes(p)?100:1)?c[p]=u[p]:(c[p]+=_*f,d=!0)}),Xf(t,c),r.contract.userData.set(c,g),l.bay.userData.set(c.select),o.forEach(({table:p,a:_,b:m})=>{p.rotation.y=Math.PI*c.turn;let h=c.turn>0&&c.turn<1;(a===_||a===m)&&(r[_].visible=a===_||h,r[m].visible=a===m||h)}),d}}}function gv(i,e){let t=du;Object.entries(dv).forEach(([n,s])=>{let r=i[n]||e;Object.entries(s).forEach(([o,[a,l,c]])=>{if(!t[o])return;let[u,g=""]=[].concat(t[o]),f=vn(u,[o,...c],"label-set",g,g?"notes":"");f.userData.key=o,f.userData.reach=1.4,f.position.copy(l),(a&&(r.getObjectByName(a)||e.getObjectByName(a))||r).add(f)})})}var xv=1200;function Eu(){let i={};return Fn.forEach(e=>i[e.id]=0),{explode:0,telescope:0,split:i,idea:0,presence:{wheel:1,nexus:1,bands:1}}}function lp(i,e={}){let t=new re;i.add(t);let n=Cf(),s=Bf(),r=Hf();t.add(n,s.group,r.group);let o=e.sets?ap(t):null;o&&t.add(o.group);let a=n.getObjectByName("idea");_v(n,s,r);let l=oi.slice(0,5).map(y=>{let T=[];return n.traverse(v=>v.isMesh&&(v.userData.tags||[]).includes(`gate:${y.id}`)&&T.push(v)),T}),c=l.map(()=>0),u=null,g=[],f=[],d=[];t.traverse(y=>{y.isMesh&&y.material.uniforms&&y.material.uniforms.dim?g.push(y):y.isCSS2DObject&&y.userData.arc?f.push(y):y.isCSS3DObject&&d.push(y)});let p=null,_=null,m=Eu();function h(y){let{bottom:T,bandMid:v,layerY:M}=zf(s,y.explode,y.split);kf(r,T,y.telescope),a.position.copy(xu(y.idea));let S=y.presence;return n.visible=S.wheel>.001,s.group.visible=S.bands>.001,s.group.position.y=-8*(1-S.bands),r.group.visible=S.nexus>.001,r.group.position.y=-10*(1-S.nexus),{bottom:T,bandMid:v,layerY:M}}return h(m),{root:t,sets:o,get state(){return m},set(y){return m=y,h(y)},focus(y,T,v){let M=`${y}|${v}`;return M!==p&&(p=M,_=pf(g,y,v)),mf(g,_,T)},align(y){Ef(f,y),Tf(d,y)},flashGates(y,T){u!==null&&y>u&&y-u<180&&oi.slice(0,5).forEach((v,M)=>{((cr(M)-u)%360+360)%360<y-u&&(c[M]=T+xv)}),u=y,l.forEach((v,M)=>{let S=T<c[M];v.forEach(x=>{let b=x.material.uniforms;x.userData.energized||(b.role.value=S?ai.red:x.userData.role)})})},relayout(){n.userData.relayout()},spin(y){n.rotation.y=-y,r.group.rotation.y=y*1.6},energize(y){gf(t,y)},charge(y,T){xf(t,y,T)},labels(y){Mf(t,y)}}}function _v(i,e,t){hu.forEach(n=>{let s=n.parts[0],r=vn(n.name,`role:${n.id}`,"label-role",n.purpose,`role:${n.id}`);r.userData.reach=1.6;let[o,a]=s.split(":");if(o==="layer"){let l=e.group.getObjectByName(s);r.position.copy(l.userData.anchor||se(1.62,120,0)),l.add(r)}else if(o==="register"){let l=t.registers.find(c=>c.userData.register===a);r.position.copy(l.position),r.userData.tube=l.userData.tube,t.group.add(r),t.registers.push(r)}else s==="gates"?(r.position.copy(se(2.85,cr(2),.14)),i.add(r)):s==="spine"&&(r.userData.track=e.spine.name.userData.track,e.spine.group.add(r))})}function ao(i,e,t){return i+(e-i)*t}function cp(i,e,t){let n={};Object.keys(i.split).forEach(r=>n[r]=ao(i.split[r],e.split[r],t));let s={};return Object.keys(i.presence).forEach(r=>s[r]=ao(i.presence[r],e.presence[r],t)),{explode:ao(i.explode,e.explode,t),telescope:ao(i.telescope,e.telescope,t),split:n,idea:ao(i.idea,e.idea,t),presence:s}}var Al=(i,e,t)=>new L(i,e,t);function sn(i,e,t,n,s=0){return{pos:se(t*Math.cos(e*Ie),i,t*Math.sin(e*Ie)).add(n),target:n,roll:s}}function Kn(i,e,t=0){return se(e,i-90,t)}var Tu={hero:sn(135,22,29,Kn(135,0,-1.4),10),"hero-right":sn(135,22,35.5,Kn(135,-6,-1.4),10),"top-right":sn(165,62,31,Kn(165,-3.4,.4)),nexus:sn(150,30,17,Al(0,.6,0),6),"nexus-right":sn(150,30,17,Kn(150,-1.6,.6),6),"top-wide":sn(165,80,34,Al(0,0,0)),"nexus-top":sn(165,88,11,Al(0,0,0)),telescope:sn(150,18,16,Al(0,.9,0),8),"telescope-left":sn(150,18,16,Kn(150,1.5,.9),8),side:sn(210,18,51,Kn(210,.5,-6.8)),exploded:sn(200,20,47,Kn(200,0,-7.5),36),"exploded-left":sn(200,20,54,Kn(200,-2,-6.6),-32)};function yv(i){if(i==="drop")return sn((_t.from+_t.to)/2,40,14,yl());let e=$t(Zn.findIndex(t=>t.id===i));return sn(e,42,23,se(.6,e,-.8),4)}function vv(i){return sn(210,20,34,Kn(210,-3.2,i),10)}function Mv(i){return sn(210,34,42,Kn(210,-3.8,i/2),10)}function Rl(i,e){if(Tu[i])return Tu[i];let t=op[i];if(t)return sn(t.az,t.elev,t.dist,t.at.clone().add(Kn(t.az,t.k)),t.roll||0);let[n,s]=i.split(":");return n==="phase"?yv(s):n==="band"?vv(e.bandMid[s]):n==="band-high"?Mv(e.bandMid[s]):n==="spine"?sn(zt.angle+20,12,30,se(zt.r,zt.angle,-8),20):Tu.hero}function wu(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function up(i){return{r:Math.hypot(i.x,i.z),a:Math.atan2(i.x,-i.z),y:i.y}}function hp(i,e,t){let n=up(i.pos),s=up(e.pos),r=s.a-n.a;r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI);let o=n.r+(s.r-n.r)*t,a=n.a+r*t,l=new L(o*Math.sin(a),n.y+(s.y-n.y)*t,-o*Math.cos(a)),c=(i.roll||0)+((e.roll||0)-(i.roll||0))*t;return{pos:l,target:i.target.clone().lerp(e.target,t),roll:c}}var dp=[[1,-1],[1,-1.7],[1,-2.4],[1,1],[1,1.7],[1,-3.1],[-1,-1],[-1,-1.7],[-1,1],[-1,-2.4]];function fp(i,e){let t=[];i.traverse(p=>{let _=p.userData.leader;_&&(e.appendChild(_),t.push({obj:p,el:_,line:_.querySelector("polyline"),box:_.querySelector(".lead-box"),text:_.querySelector(".lead-text"),note:_.querySelector(".lead-note"),ex:null,ey:null,size:null}))});let n=new L,s=new L,r=new L,o=new L,a=new L;function l(p,_){let[m,h]=p.userData.track;o.copy(m).applyMatrix4(p.parent.matrixWorld),a.copy(h).applyMatrix4(p.parent.matrixWorld);let y=s.copy(o).project(_).y,T=s.copy(a).project(_).y,v=Math.abs(T-y)<1e-6?.5:Math.max(0,Math.min(1,(0-y)/(T-y)));return n.copy(o).lerp(a,v)}function c(p){for(let _=p;_;_=_.parent)if(!_.visible)return!1;return!0}function u(p,_){return _.some(m=>p.x<m.x+m.w&&p.x+p.w>m.x&&p.y<m.y+m.h&&p.y+p.h>m.y)}function g(p,_,m,h,y,T){let v=y*_,M=Math.max(4,8*Math.min(_/1920,m/1080)),S=Math.max(...p.map(P=>Math.max(P.size[0],P.size[2]))),[x,b]=h>0?[v,v+S]:[v-S,v],I=-1/0;T.forEach(P=>{P.x<b&&P.x+P.w>x&&P.y<m*.4&&(I=Math.max(I,P.y+P.h))});let A,D=(P,C)=>(A=I,p.map((z,B)=>{let[,Z,,k]=z.size,$=B>0&&z.obj.userData.band!==p[B-1].obj.userData.band?C:0,K=Math.max(z.ay-Z,A+P+$);return A=K+Z+k,K})),F;for(let[P,C]of[[M,2*M],[M,0],[M/2,0]])if(F=D(P,C),A<=m*.92)break;let H=Math.max(0,A-m*.92);return p.map((P,C)=>{let[z,B,Z,k]=P.size,$=F[C]-H;return{ex:v-P.ax,ey:$+B-P.ay,r:{x:h>0?v:v-Math.max(z,Z),y:$,w:Math.max(z,Z),h:B+k}}})}function f(p,_,m,h=[],y=0,T=0,v=.2,M=0,S={}){let x=!1,I=46*Math.min(_/1920,m/1080),A=6,D=h.slice(),F=[];t.forEach(C=>{C.obj.userData.track?l(C.obj,p):C.obj.getWorldPosition(n);let z=s.copy(n).project(p),B=c(C.obj)&&z.z<1;if(C.el.style.visibility=B?"":"hidden",!B||!C.el.classList.contains("is-on")){C.ex=null;return}r.set(0,n.y,0);let Z=r.project(p);C.ax=(z.x+1)/2*_,C.ay=(1-z.y)/2*m,C.side=y||(C.ax>=(Z.x+1)/2*_?1:-1),C.down=C.ay>(1-Z.y)/2*m?-1:1;let k=C.note&&C.el.classList.contains("show-note");if(!C.size||C.noted!==k){let $=C.box.offsetWidth,K=C.text.offsetTop+C.text.offsetHeight;C.size=[$,K,$,C.box.offsetHeight-K],C.noted=k}F.push(C)}),F.sort((C,z)=>(C.obj.userData.band??0)-(z.obj.userData.band??0)||C.ay-z.ay);let H=y&&T?g(F,_,m,y,T,h):null,P=F.map(C=>{let z=S[C.obj.userData.key];if(!z)return null;let[B,Z,k,$]=C.size,K=Math.max(B,k),xe=z[0]*_-C.ax,Ae=z[1]*m-C.ay,q={x:xe>0?C.ax+xe:C.ax+xe-K,y:C.ay+Ae-Z,w:K,h:Z+$};return D.push(q),{ex:xe,ey:Ae,r:q}});return F.forEach((C,z)=>{let[B,Z,k,$]=C.size,K=Math.max(B,k),xe=I*(C.obj.userData.reach||1),Ae=P[z]||(H?H[z]:null),q=M?[[1,"drop"],[-1,"drop"],...dp]:dp;if(!Ae)for(let[Ce,Fe]of q){if(y&&Ce<0)continue;let ye=Ce*C.side,Be=ye*(Fe==="drop"?Math.max(xe,_*.12):xe),Mt=Fe==="drop"?m*M-C.ay:Fe*I*C.down,Ue={x:ye>0?C.ax+Be:C.ax+Be-K,y:C.ay+Mt-Z,w:K,h:Z+$};if(Ue.x>A&&Ue.x+Ue.w<_-A&&Ue.y>A&&Ue.y+Ue.h<m-A&&(Ae||(Ae={ex:Be,ey:Mt,r:Ue}),!u(Ue,D))){Ae={ex:Be,ey:Mt,r:Ue};break}}Ae||(Ae={ex:C.side*xe,ey:-I*C.down,r:{x:0,y:0,w:0,h:0}}),P[z]||D.push(Ae.r),C.ex===null?(C.ex=Ae.ex,C.ey=Ae.ey):(Math.abs(Ae.ex-C.ex)+Math.abs(Ae.ey-C.ey)>.5&&(x=!0),C.ex+=(Ae.ex-C.ex)*v,C.ey+=(Ae.ey-C.ey)*v),C.el.style.transform=`translate(${C.ax.toFixed(1)}px, ${C.ay.toFixed(1)}px)`,C.line.setAttribute("points",`0,0 ${C.ex.toFixed(1)},${C.ey.toFixed(1)}`);let _e=y?y<0:C.ex<0;C.box.style.transform=`translate(${C.ex.toFixed(1)}px, ${(C.ey-C.size[1]).toFixed(1)}px) translate(${_e?-100:0}%, 0)`,C.box.style.textAlign=_e?"right":"left"}),x}function d(){t.forEach(p=>p.size=null)}return{update:f,resize:d}}function Ln(i){return(i||"").split(",").map(e=>e.trim()).filter(Boolean)}function pp(i){return[...i.querySelectorAll(":scope > .stop")].map((e,t)=>({el:e,index:t,data:e.dataset,beats:[...e.querySelectorAll(":scope > .beat")].map(n=>n.dataset),card:e.querySelector(".card"),anchor:new L,state:Sv(e.dataset)}))}function Cl(i,e){return Object.assign({},i.data,i.beats[e]||{})}function Sv(i){let e=Eu();e.explode=Number(i.explode||0),e.telescope=Number(i.telescope||0),i.split&&(e.split[i.split]=1);let t=i.parts?Ln(i.parts):Object.keys(e.presence);return Object.keys(e.presence).forEach(n=>e.presence[n]=t.includes(n)?1:0),e}function mp(i){if(!i||i==="run")return null;if(i==="drop")return cr(4);let e=Zn.findIndex(s=>s.id===i);if(e>=0)return $t(e);let t=so.find(s=>s.name===i);if(t)return t.drop?cr(4):t.angle;let n=Number(i);return Number.isFinite(n)?n:null}function gp(i,e){let[t,n]=(i||"").split(":");return t==="phase"&&n==="drop"?yl(.4):t==="phase"?se(Lt.rOut+.9,$t(Zn.findIndex(s=>s.id===n)),.4):t==="band"?se(Ht.rOut+1.2,90,e.bandMid[n]):t==="spine"?se(zt.r+.8,zt.angle,-2.2):t==="rim"?se(Lt.rOut+1.2,Number(n),.6):t==="nexus"?new L(0,1.4,0):new L(0,0,0)}function xp(i){let e={};return Ln(i).forEach(t=>{let[n,s]=t.split("=");e[n]=Number(s)||0}),e}function _p(i){let e={};return Ln(i).forEach(t=>{let[n,s]=t.split("=");s&&(e[n]=s.split("/").map(Number))}),e}function yp(i,e){let t=Fn.find(s=>s.id===i);if(!t||!e)return[-1e3,1e3];let n=t.layers.map(s=>e.layerY[s.id]);return[Math.min(...n)-.3,Math.max(...n)+.45]}var vp=.04;function Mp(i,e){let t=new Map,n=new ResizeObserver(d=>{d.forEach(p=>t.set(p.target,[p.target.offsetWidth,p.target.offsetHeight])),e()}),s=[],r=new L,o=null,a=document.createElement("div");a.style.cssText="position:fixed;visibility:hidden;padding:0 env(safe-area-inset-right,0px) 0 env(safe-area-inset-left,0px)",document.body.appendChild(a);let l=null;window.addEventListener("resize",()=>l=null);let c=()=>{if(!l){let d=getComputedStyle(a);l=[parseFloat(d.paddingLeft)||0,parseFloat(d.paddingRight)||0]}return l};function u(d){let p=d.card;p&&(p.classList.add(`card-${d.data.side||"right"}`),i.appendChild(p),n.observe(p),s.push(p))}function g(d){s.forEach(p=>{p.classList.toggle("is-on",p===d.card),p.inert=p!==d.card}),o=null}function f(d,p,_,m=null){let h=d.card;if(!h)return;let y=window.innerWidth,T=window.innerHeight,v=d.data.side||"right",[M,S]=t.get(h)||[h.offsetWidth,h.offsetHeight],x,b;if(d.data.anchor==="screen")x=v==="left"?y*.07:v==="center"?(y-M)/2:y*.93-M,b=d.data.dock==="bottom"?T*.88-S:(T-S)/2;else{r.copy(d.anchor).project(p);let F=(r.x+1)/2*y,H=(1-r.y)/2*T,P=y*.02;x=v==="left"?F-M-P:v==="center"?F-M/2:F+P,b=H-S/2}let[I,A]=c();x=Math.max(Math.max(y*vp,I+8),Math.min(Math.min(y*(1-vp),y-A-8)-M,x)),b=Math.max(T*.12,Math.min(T*.88-S,b));let D=!1;return _&&x<_.x+_.w&&b<_.y+_.h&&(_.y+_.h+S<T*.9?b=_.y+_.h:m&&m.y+m.h+S<T*.9?(b=Math.max(b,m.y+m.h),D=!0):x=_.x+_.w),h.style.transform=`translate(${Math.round(x)}px, ${Math.round(b)}px)`,o={x,y:b,w:M,h:S},D}return{add:u,show:g,place:f,get box(){return o}}}var Au=(i,e)=>`<svg class="${i}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="${e}"/></svg>`,Ru={fullscreen:"M4 20v-4.423h1V19h3.423v1zm11.596 0v-1h3.423v-3.423h1V20zM4 8.423V4h4.423v1H5v3.423zm15.02 0V5h-3.424V4h4.423v4.423z",fullscreenExit:"M7.423 20v-3.423H4v-1h4.423V20zm8.173 0v-4.423h4.423v1h-3.423V20zM4 8.423v-1h3.423V4h1v4.423zm11.596 0V4h1v3.423h3.423v1z",light:"M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-4.96.71Q8 13.672 8 12t1.165-2.835Q10.329 8 12 8t2.836 1.165T16 12t-1.164 2.836T12 16t-2.835-1.164M5 12.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12",previous:"M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z",next:"m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z",dark:"M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"};function Sp(i,e){i.innerHTML=Au("icon",Ru[e])}function Cu(i,e,t){i.innerHTML=Au("icon-off",Ru[e])+Au("icon-on",Ru[t])}var bp=`deck-theme:${location.pathname}`;function Ep(i,e){let t={nav:document.querySelector(".hud-nav"),section:document.querySelector(".crumb-act"),part:document.querySelector(".crumb-part"),bar:document.querySelector(".hud-acts"),checklist:document.querySelector(".hud-checklist"),source:document.querySelector(".hud-source"),counter:document.querySelector(".hud-counter"),footer:document.querySelector(".hud-footer")},n=["previous","next"].map(M=>{let S=document.createElement("button");S.type="button",S.className="hud-step",S.dataset.dir=M;let x={previous:"\xC9tape pr\xE9c\xE9dente",next:"\xC9tape suivante"};return S.setAttribute("aria-label",ro==="fr"?x[M]:`${M==="next"?"Next":"Previous"} step`),Sp(S,M),S});if(t.counter){let M=document.createElement("span");M.className="hud-steps",t.counter.replaceWith(M),M.append(n[0],t.counter,n[1])}let s=document.createElement("p");s.className="sr-only",s.setAttribute("aria-live","polite"),document.body.appendChild(s);let r=(M,S)=>ro==="fr"?`\xC9tape ${M} sur ${i.length}${S?`\u202F: ${S}`:""}`:`Step ${M} of ${i.length}${S?`: ${S}`:""}`,o=[];i.forEach(M=>{let S=o[o.length-1];S&&S.section===M.data.section?S.stops.push(M):o.push({section:M.data.section,stops:[M]})}),o.forEach(M=>{let S=document.createElement("li");S.style.flexGrow=M.stops.length,S.innerHTML="<span></span>",t.bar.appendChild(S)}),gl.forEach(M=>{let S=document.createElement("li");S.dataset.concern=M.id,S.textContent=M.name,t.checklist.appendChild(S)}),document.querySelectorAll(".card .concerns:empty").forEach(M=>{gl.forEach(S=>{let x=document.createElement("li");x.dataset.concern=S.id,x.textContent=S.question,M.appendChild(x)})});let a=document.querySelector(".hud-theme"),l=document.body.dataset.themeDefault||"light",c=null;if(a){Cu(a,"dark","light");try{l=localStorage.getItem(bp)||l}catch{}a.addEventListener("click",()=>{l=l==="dark"?"light":"dark";try{localStorage.setItem(bp,l)}catch{}c&&g(c)})}let u=document.querySelector(".hud-fullscreen");u&&(Cu(u,"fullscreen","fullscreenExit"),u.hidden=!document.fullscreenEnabled,u.addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"})).catch(()=>{})}),document.addEventListener("fullscreenchange",()=>{u.setAttribute("aria-pressed",String(!!document.fullscreenElement))}));function g(M){document.body.dataset.theme=M.data.theme||l,a?.setAttribute("aria-pressed",String(document.body.dataset.theme!=="light"))}let f,d;function p(){return d===void 0&&(d=t.footer?t.footer.getBoundingClientRect().top:window.innerHeight),d}function _(M,S){let x=Cl(M,S),b=xl.findIndex(F=>F.id===M.data.section);t.section.textContent=b>=0?`${String(b+1).padStart(2,"0")} \xB7 ${xl[b].name}`:"",t.part.textContent=x.crumb||"";let I=o.findIndex(F=>F.stops.includes(M)),A=o[I].stops.indexOf(M)+(S+1)/Math.max(1,M.beats.length);t.bar.querySelectorAll("li").forEach((F,H)=>{let P=H<I?1:H>I?0:A/o[I].stops.length;F.firstChild.style.width=`${(P*100).toFixed(1)}%`}),t.bar.dataset.ready||requestAnimationFrame(()=>requestAnimationFrame(()=>t.bar.dataset.ready="1"));let D=new Set(Ln(x.answers));if(t.checklist.querySelectorAll("li").forEach(F=>{F.classList.toggle("is-now",D.has(F.dataset.concern)),D.has(F.dataset.concern)?F.setAttribute("aria-current","true"):F.removeAttribute("aria-current")}),t.source.textContent=[M.data.source,sf].filter(Boolean).join(" \xB7 "),t.counter.textContent=`${M.index+1} / ${i.length}`,n[0].disabled=M.index===0&&S===0,n[1].disabled=M.index===i.length-1&&S>=M.beats.length-1,M!==c){let F=M.card?.querySelector("h1, h2")?.textContent.replace(/\s+/g," ").trim();s.textContent=r(M.index+1,F)}c=M,g(M),document.body.dataset.hud=x.hud||"",f=d=void 0}let m=document.body.dataset.hudCompact!==void 0,h=0;function y(M=0,S=!!document.body.dataset.hudTight){let x=!!document.body.dataset.hudTight;if(f===void 0){let A=t.nav.getBoundingClientRect();!x&&document.body.dataset.hud!=="crumb"&&(h=t.checklist.getBoundingClientRect().height+parseFloat(getComputedStyle(t.nav).rowGap||0)),f=document.body.dataset.hud==="bare"?null:{x:A.left,y:A.top,w:A.width,h:A.height}}if(!f)return null;let b=document.body.dataset.hud==="crumb"?0:h,I=S===x?f.h:S?f.h-b:f.h+b;return{x:f.x-M,y:f.y-M,w:f.w+2*M,h:I+2*M}}function T(M){M=m&&M&&document.body.dataset.hud!=="crumb",!!document.body.dataset.hudTight!==M&&(M?document.body.dataset.hudTight="":delete document.body.dataset.hudTight,f=d=void 0)}function v(M){let S=M&&M.querySelector(".is-shown .concerns");!S||e()||document.body.dataset.hud||t.checklist.querySelectorAll("li").forEach((x,b)=>{let I=S.querySelector(`[data-concern="${x.dataset.concern}"]`);if(!I)return;let A=I.getBoundingClientRect(),D=x.getBoundingClientRect();x.animate([{transform:`translate(${A.left-D.left}px, ${A.top-D.top}px)`,opacity:.5},{transform:"none",opacity:1}],{duration:700,delay:b*60,easing:"cubic-bezier(0.65, 0, 0.35, 1)",fill:"backwards"})})}return{update:_,rect:y,footerTop:p,tighten:T,bindSteps(M){n[0].addEventListener("click",()=>M.previous()),n[1].addEventListener("click",()=>M.next())},compact:m,dock:v,invalidate(){f=d=void 0}}}function Tp(i,e){return`#${i+1}${e>0?`.${e+1}`:""}`}function Iu(i){let[e,t]=location.hash.slice(1).split(".").map(Number);return[Number.isInteger(e)&&e>=1?Math.min(e,i)-1:0,Number.isInteger(t)&&t>=1?t-1:0]}function wp(i){document.addEventListener("keydown",n=>{if(!(n.altKey||n.ctrlKey||n.metaKey)&&!(n.target.closest?.("a, button")&&[" ","Enter"].includes(n.key))){if(n.key==="Escape"&&document.fullscreenElement){document.exitFullscreen().catch(()=>{});return}if(["ArrowRight","ArrowDown","PageDown"," ","Enter"].includes(n.key))i.next();else if(["ArrowLeft","ArrowUp","PageUp","Backspace"].includes(n.key))i.previous();else if(n.key==="Home")i.go(0);else if(n.key==="End")i.go(i.count-1);else return;n.preventDefault()}});let e=null,t=!1;document.addEventListener("touchstart",n=>{let s=n.touches[0];e=n.touches.length===1&&!n.target.closest("a, button")?{x:s.clientX,y:s.clientY,at:performance.now()}:null},{passive:!0}),document.addEventListener("touchend",n=>{if(t||(t=!0,document.documentElement.requestFullscreen?.({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})),!e||n.touches.length)return;let s=n.changedTouches[0],r=s.clientX-e.x,o=s.clientY-e.y;Math.max(Math.abs(r),Math.abs(o))>40?((Math.abs(r)>=Math.abs(o)?r<0:o<0)?i.next:i.previous)():Math.hypot(r,o)<10&&performance.now()-e.at<500&&(s.clientX<window.innerWidth/2?i.previous:i.next)(),e=null}),window.addEventListener("hashchange",()=>{let[n,s]=Iu(i.count);i.go(n,!1,s)})}var Ap=1100,bv=200,As=(i,e)=>i===void 0||i===""?e:Number(i),Rs=i=>i.data.set||"rocket";function Rp({stops:i,engine:e,cards:t,hud:n,motion:s,prefs:r,phone:o,wake:a}){let l={pos:new L(0,30,.01),target:new L},c={current:null,beat:0,shown:{},focusTags:null,contextTags:[],labelsChanged:!1,layout:null,from:null,to:null,started:0,shot:l,fromShot:l,toShot:l,shotName:null,shotStarted:0,shotDuration:0,portal:null},u=()=>r.reduced?0:1600;c.shotDuration=u();function g(){let{index:h,toBeat:y,via:T}=c.portal;c.portal=null,f(h,!0,y,!0),c.fromShot=Rl(T.in,c.layout),c.shotStarted=performance.now(),c.shotDuration=Ap}function f(h,y=!1,T=0,v=!1){a(100),c.portal&&g();let M=i[Math.max(0,Math.min(i.length-1,h))],S=Math.max(0,Math.min(M.beats.length-1,T<0?M.beats.length-1:T));if(M===c.current){S!==c.beat&&d(S);return}let x=!c.current||M.index>c.current.index,b=c.current;c.current=M;let I=!!b&&Rs(b)!==Rs(M)&&!e.sets?.joined(Rs(b),Rs(M)),A=I&&!y&&!r.reduced&&e.sets?e.sets.portal(Rs(b),Rs(M)):null;if(A){c.current=b,c.portal={index:M.index,toBeat:S,via:A},c.fromShot=c.shot,c.toShot=Rl(A.out,c.layout),c.shotName=A.out,c.shotStarted=performance.now(),c.shotDuration=Ap,t.show({}),e.labels([]),c.labelsChanged=!0;return}let D=c.from=e.state;Number.isFinite(D.idea)||(D.idea=0),s.resetRun();let F=c.to={...M.state,split:{...M.state.split},presence:{...M.state.presence}},H=mp(M.data.idea),P=H===null?D.idea:H;x&&P<D.idea-.01&&(P+=360*Math.ceil((D.idea-P)/360)),!x&&P>D.idea+.01&&(P-=360*Math.ceil((P-D.idea)/360)),F.idea=P,c.layout=e.set(F),e.set(D),c.shotName=null,t.show(M),M.anchor.copy(gp(M.data.anchor,c.layout)),c.started=y||I||u()===0?-1/0:performance.now(),e.sets&&e.sets.show(Rs(M),Ln(M.data.parts)),d(S,!0),e.sets&&(y||I)&&e.sets.update(1),I&&(c.shot=c.fromShot=c.toShot,c.shotStarted=-1/0,(!r.reduced||v)&&(document.body.classList.add("is-cut"),requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove("is-cut"))))),b&&!y&&n.dock(b.card),s.startPulse(performance.now()+u())}function d(h,y=!1){c.beat=h;let T=c.current,v=c.shown=Cl(T,h),M=As(v.telescope,T.state.telescope);if(c.to&&c.to.telescope!==M){y||(c.from=e.state,Number.isFinite(c.from.idea)||(c.from.idea=0),s.resetRun(),c.started=u()===0?-1/0:performance.now());let x=c.to;c.to={...x,split:{...x.split},presence:{...x.presence},telescope:M,idea:y?x.idea:c.from.idea},c.layout=e.set(c.to),e.set(c.from)}let S=v.shot||"hero";S!==c.shotName&&(c.shotName=S,c.fromShot=c.shot,c.toShot=Rl(S,c.layout),c.shotStarted=y&&c.started===-1/0?-1/0:performance.now(),c.shotDuration=u()),c.focusTags=v.focus?Ln(v.focus):null,c.contextTags=Ln(v.context),e.labels(Ln(v.labels)),c.labelsChanged=!0,e.energize(Ln(v.energize)),e.charge(Ln(v.pulse),xp(v.pulseLag)),uf(...yp(v.pulseBand,c.layout)),e.sets&&e.sets.setTarget({separate:As(v.separate,0),open:As(v.open,0),score:As(v.score,0),rule:As(v.rule,100),ceiling:As(v.ceiling,100),rings:Ln(v.rings),select:As(v.select,1)}),n.update(T,h),T.card&&(T.card.querySelectorAll("[data-beat]").forEach(x=>x.classList.toggle("is-now",Number(x.dataset.beat)===h)),m(T,h));try{history.replaceState(null,"",Tp(T.index,h))}catch{}a(1e3)}let p=0,_=null;function m(h,y){clearTimeout(p),_?.classList.remove("is-swapping"),_=null;let T=[...h.card.querySelectorAll("[data-from]")],v=S=>T.forEach(x=>x.classList.toggle("is-shown",S>=Number(x.dataset.from)));if(!T.some(S=>S.classList.contains("is-shown")!==y>=Number(S.dataset.from))||!o.matches||r.reduced){v(y);return}h.card.classList.add("is-swapping"),_=h.card,p=setTimeout(()=>{_=null,c.current===h&&v(c.beat),requestAnimationFrame(()=>requestAnimationFrame(()=>h.card.classList.remove("is-swapping")))},bv)}return{state:c,duration:u,go:f,landPortal:g,next(){let{current:h,beat:y}=c;h&&(y<h.beats.length-1?f(h.index,!1,y+1):h.index<i.length-1&&f(h.index+1))},previous(){let{current:h,beat:y}=c;h&&(y>0?f(h.index,!1,y-1):h.index>0&&f(h.index-1,!1,-1))}}}var Ev=.06,Tv=24,wv=2.6,Av=3.2;function Cp(i,e){let t=0,n=!1,s=0,r=0,o=0,a=0,l=null;return{tick(c,u){o=Math.min(.1,(c-s)/1e3||0),s=c;let g=e.reduced?0:Ev,f=u&&u.data.idle!==void 0;f?t+=g*o:(t=Math.atan2(Math.sin(t),Math.cos(t)),t=Math.abs(t)<1e-4?0:t+(0-t)*Math.min(1,o*3)),n=g>0&&(t!==0||f),i.spin(t),u&&u.data.idea==="run"&&(r+=(e.reduced?0:Tv)*o)},approach(c){return 1-Math.exp(-c*o)},get spinning(){return n},get run(){return r},resetRun(){r=0},startPulse(c){a=c},pulse(c,u){let g=(c-a)/1e3;cf(l!==null?l:u&&!e.reduced&&g>0?g%Av*wv:-10)},hold(c){l=c}}}var Dp=window.matchMedia("(prefers-reduced-motion: reduce)"),Ri={reduced:Dp.matches},Np={get matches(){return document.documentElement.classList.contains("phone")}},Fu=document.getElementById("stage"),ui;try{ui=new ll({antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch(i){throw document.documentElement.classList.replace("js","no-js"),i}Fu.appendChild(ui.domElement);var Pl=new pl;Pl.domElement.className="engraving";Fu.appendChild(Pl.domElement);var Ps=new dl;Ps.domElement.className="labels";Ps.domElement.setAttribute("aria-hidden","true");Fu.setAttribute("aria-hidden","true");document.body.appendChild(Ps.domElement);var Is=new ds;Is.matrixWorldAutoUpdate=!1;var Ll=ff(ui),Lu=22,Du=!!document.querySelector("#stops [data-set]"),Sn=new pn(Lu,1,Du?.5:.1,Du?2e3:300),ci=lp(Is,{sets:Du}),Ou=fp(ci.root,Ps.domElement),is=pp(document.getElementById("stops")),Up=document.getElementById("cards"),Dl=Mp(Up,()=>Ii(100));is.forEach(Dl.add);var Ci=Ep(is,()=>Ri.reduced),li=Cp(ci,Ri),Il=Rp({stops:is,engine:ci,cards:Dl,hud:Ci,motion:li,prefs:Ri,phone:Np,wake:Ii}),Ct=Il.state;Dp.addEventListener("change",i=>{Ri.reduced=i.matches,Ii(300)});var Pu=[],Ip=[];function Rv(i){let e=window.innerWidth,t=window.innerHeight,n=Math.min(t*.93,Ci.footerTop()-4),s=[{x:0,y:n,w:e,h:t-n}],r=Ci.rect(12);r&&s.push(r);let o=Dl.box;return o&&s.push({x:o.x-12,y:o.y-12,w:o.w+24,h:o.h+24}),i.forEach(a=>s.push({x:a.left-4,y:a.top-2,w:a.width+8,h:a.height+4})),s}var Cv={left:-1,right:1},Nu=0,Pp=!0,Uu=!1,Lp=0,Fp=0;function Ii(i){Nu=Math.max(Nu,performance.now()+i),!Uu&&(Uu=!0,requestAnimationFrame(Bp))}new MutationObserver(()=>Ii(100)).observe(document.body,{attributes:!0,attributeFilter:["data-theme"]});var Cs=0,Op=()=>["blueprint","dark"].includes(document.body.dataset.theme)?1:0;function Iv(){let i=Op();return Cs===i?!1:(Cs=Ri.reduced||Math.abs(i-Cs)<.002?i:Cs+(i-Cs)*li.approach(3),Ll.setTheme(Cs),!0)}function Bp(i){li.tick(i,Ct.current);let e=Math.max(0,Math.min(1,(i-Ct.started)/Il.duration()));Ct.portal&&i-Ct.shotStarted>=Ct.shotDuration&&Il.landPortal();let t=Math.max(0,Math.min(1,(i-Ct.shotStarted)/Ct.shotDuration)),n=Cs!==Op()||e<1||t<1||Pp||i<Nu,s=li.spinning||!Ri.reduced&&(Ct.shown.pulse||Ct.current&&Ct.current.data.idea==="run");if(!n&&!s){Uu=!1;return}if(requestAnimationFrame(Bp),!n&&i-Lp<15)return;Lp=i,Fp++,li.pulse(i,Ct.current&&Ct.shown.pulse),Iv();let r=wu(Number.isFinite(e)?e:1);if(Ct.from&&Ct.to){let h=cp(Ct.from,Ct.to,r);h.idea+=li.run,ci.set(h),ci.flashGates(h.idea,i)}let o=ci.focus(Ct.focusTags,Ri.reduced?1:li.approach(5),Ct.contextTags),a=ci.sets?ci.sets.update(Ri.reduced?1:li.approach(2.5)):!1,l=Ct.shot=hp(Ct.fromShot,Ct.toShot,wu(Number.isFinite(t)?t:1));Sn.position.copy(l.pos),Sn.lookAt(l.target),Sn.rotateZ((l.roll||0)*Ie),Is.updateMatrixWorld(),Ll.render(Is,Sn),Pl.render(Is,Sn),Ps.render(Is,Sn),Ct.labelsChanged&&(Ct.labelsChanged=!1,Pu=[...Ps.domElement.querySelectorAll(".label.is-on:not(.lead)")],Ip=Pu.filter(h=>h.classList.contains("label-band")));let c=Sf(Ip),u=Pu.filter(h=>h.style.display!=="none").map(h=>[h,(h.firstElementChild||h).getBoundingClientRect()]),g=bf(c),f=u.map(([h,y])=>{let T=g.get(h)||0;return T?{left:y.left+T,top:y.top,width:y.width,height:y.height}:y});ci.align(Sn);let{current:d,shown:p}=Ct;if(d){let h=Dl.place(d,Sn,Ci.rect(16,!1),Ci.compact?Ci.rect(16,!0):null);Ci.tighten(h)}let _=_p(Np.matches?p.leadAtPhone:p.leadAt),m=Ou.update(Sn,window.innerWidth,window.innerHeight,Rv(f),Cv[p.leadSide]||0,Number(p.leadColumn)||0,Ri.reduced?1:li.approach(13),Number(p.leadDrop)||0,_);Pp=o||m||a}function Bu(){let i=window.innerWidth,e=window.innerHeight;ui.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio,2,Math.sqrt(9e6/(i*e))))),ui.setSize(i,e),Ll.setSize(),Ps.setSize(i,e),Pl.setSize(i,e),Sn.aspect=i/e,Sn.fov=Sn.aspect>=16/9?Lu:2*Math.atan(Math.tan(Lu*Ie/2)*16/9/Sn.aspect)/Ie,Sn.updateProjectionMatrix(),Ou.resize(),Ci.invalidate(),Ii(300)}window.addEventListener("resize",Bu);Bu();ui.domElement.addEventListener("webglcontextrestored",()=>Ii(500));function zp(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Bu(),zp()},{once:!0})}zp();document.fonts&&document.fonts.ready.then(()=>{ci.relayout(),Ou.resize(),Ii(300)});window.addEventListener("beforeprint",()=>{is.forEach(i=>{i.card&&(i.card.style.transform="",i.el.appendChild(i.card))}),document.documentElement.classList.replace("js","no-js")});window.addEventListener("afterprint",()=>{document.documentElement.classList.replace("no-js","js"),is.forEach(i=>i.card&&Up.appendChild(i.card)),Ii(300)});var{go:zu,next:Gu,previous:Hu}=Il;wp({next:Gu,previous:Hu,go:zu,count:is.length});Ci.bindSteps({next:Gu,previous:Hu});window.deck={go:zu,next:Gu,previous:Hu,stops:is,BANDS:Fn,holdPulse:(i=null)=>li.hold(i),drawn:()=>Fp,drawCalls:()=>(ui.info.autoReset=!1,ui.info.reset(),Ll.render(Is,Sn),ui.info.autoReset=!0,ui.info.render.calls)};var[Pv,Lv]=Iu(is.length);zu(Pv,!0,Lv);Ct.fromShot=Ct.toShot;Ii(300);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
