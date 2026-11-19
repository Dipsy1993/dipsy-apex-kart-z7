(()=>{var Ml=0,Ja=1,Sl=2;var $a=1,bl=2,Rn=3,Hn=0,Ne=1,Ie=2,Yn=0,vi=1,vn=2,Ka=3,Qa=4,Tl=5,oi=100,wl=101,El=102,Al=103,Cl=104,Rl=200,Il=201,Pl=202,Dl=203,Fr=204,Br=205,Ll=206,Ul=207,Nl=208,Fl=209,Bl=210,Ol=211,zl=212,Vl=213,kl=214,oo=0,ao=1,co=2,Mi=3,lo=4,ho=5,uo=6,fo=7,po=0,Gl=1,Hl=2,Zn=0,Wl=1,Xl=2,ql=3,mo=4,Yl=5,Zl=6,Jl=7;var ja=300,Ri=301,Ii=302,go=303,_o=304,tr=306,Si=1e3,ri=1001,Or=1002,Ke=1003,$l=1004;var er=1005;var Ye=1006,xo=1007;var Mn=1008;var Sn=1009,tc=1010,ec=1011,us=1012,yo=1013,hi=1014,bn=1015,ds=1016,vo=1017,Mo=1018,fs=1020,nc=35902,ic=35899,sc=1021,rc=1022,dn=1023,es=1026,ps=1027,ms=1028,So=1029,oc=1030,bo=1031;var To=1033,nr=33776,ir=33777,sr=33778,rr=33779,wo=35840,Eo=35841,Ao=35842,Co=35843,Ro=36196,Io=37492,Po=37496,Do=37808,Lo=37809,Uo=37810,No=37811,Fo=37812,Bo=37813,Oo=37814,zo=37815,Vo=37816,ko=37817,Go=37818,Ho=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,Zo=36495,Jo=36283,$o=36284,Ko=36285,Qo=36286;var Ds=2300,zr=2301,Nr=2302,Va=2400,ka=2401,Ga=2402;var Kl=3200,Ql=3201;var jo=0,jl=1,Jn="",Ee="srgb",bi="srgb-linear",Ls="linear",ce="srgb";var yi=7680;var Ha=519,th=512,eh=513,nh=514,ac=515,ih=516,sh=517,rh=518,oh=519,Wa=35044,or=35048;var cc="300 es",_n=2e3,Us=2001;var Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ma=Math.PI/180,Vr=180/Math.PI;function ar(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function ga(i,t,e){return(1-e)*i+e*t}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(h!==y||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*y,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let b=Math.sqrt(M),E=Math.atan2(b,d*S);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}let _=a*S;if(c=c*m+f*_,l=l*m+p*_,u=u*m+g*_,h=h*m+y*_,m===1-a){let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_a=new N,Kc=new xn,Xt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],S=s[1],M=s[4],_=s[7],b=s[2],E=s[5],R=s[8];return r[0]=o*y+a*S+c*b,r[3]=o*m+a*M+c*E,r[6]=o*d+a*_+c*R,r[1]=l*y+u*S+h*b,r[4]=l*m+u*M+h*E,r[7]=l*d+u*_+h*R,r[2]=f*y+p*S+g*b,r[5]=f*m+p*M+g*E,r[8]=f*d+p*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*l-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xa=new Xt;function lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){let i=Ns("canvas");return i.style.display="block",i}var Qc={};function ns(i){i in Qc||(Qc[i]=!0,console.warn(i))}function ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hu(){let i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:jc,fromXYZ:tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:jc,fromXYZ:tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}var ee=hu();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,kr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=Ns("canvas")),ki.width=t.width,ki.height=t.height;let s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uu=0,is=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var du=0,va=new N,Ze=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Ye,o=Mn,a=dn,c=Sn,l=i.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ar(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ja)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=ja;Ze.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(p+1)/2,b=(d+1)/2,E=(u+f)/4,R=(h+y)/4,I=(g+m)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=R/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=I/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-y)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gr=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new is(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Gr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),mr.subVectors(this.max,ws),Gi.subVectors(t.a,ws),Hi.subVectors(t.b,ws),Wi.subVectors(t.c,ws),Qn.subVectors(Hi,Gi),jn.subVectors(Wi,Hi),mi.subVectors(Gi,Wi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-mi.z,mi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,mi.z,0,-mi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-mi.y,mi.x,0];return!Ma(e,Gi,Hi,Wi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Gi,Hi,Wi,mr))?!1:(gr.crossVectors(Qn,jn),e=[gr.x,gr.y,gr.z],Ma(e,Gi,Hi,Wi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,pr=new ln,Gi=new N,Hi=new N,Wi=new N,Qn=new N,jn=new N,mi=new N,ws=new N,mr=new N,gr=new N,gi=new N;function Ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var fu=new ln,Es=new N,Sa=new N,yn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Sa)),this.expandByPoint(Es.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},On=new N,ba=new N,_r=new N,ti=new N,Ta=new N,xr=new N,wa=new N,Bs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ti.dot(this.direction),c=-ti.dot(_r),l=ti.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ba).addScaledVector(_r,f),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),xr.subVectors(n,t),wa.crossVectors(Ta,xr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);let c=a*this.direction.dot(xr.crossVectors(ti,xr));if(c<0)return null;let l=a*this.direction.dot(Ta.cross(ti));if(l<0||c+l>o)return null;let u=-a*ti.dot(wa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,p,g,y,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,p,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f+y*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,p=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pu,t,mu)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ei.crossVectors(n,nn),ei.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ei.crossVectors(n,nn)),ei.normalize(),yr.crossVectors(nn,ei),s[0]=ei.x,s[4]=yr.x,s[8]=nn.x,s[1]=ei.y,s[5]=yr.y,s[9]=nn.y,s[2]=ei.z,s[6]=yr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],S=n[3],M=n[7],_=n[11],b=n[15],E=s[0],R=s[4],I=s[8],T=s[12],w=s[1],D=s[5],C=s[9],P=s[13],U=s[2],B=s[6],z=s[10],K=s[14],H=s[3],Y=s[7],et=s[11],ot=s[15];return r[0]=o*E+a*w+c*U+l*H,r[4]=o*R+a*D+c*B+l*Y,r[8]=o*I+a*C+c*z+l*et,r[12]=o*T+a*P+c*K+l*ot,r[1]=u*E+h*w+f*U+p*H,r[5]=u*R+h*D+f*B+p*Y,r[9]=u*I+h*C+f*z+p*et,r[13]=u*T+h*P+f*K+p*ot,r[2]=g*E+y*w+m*U+d*H,r[6]=g*R+y*D+m*B+d*Y,r[10]=g*I+y*C+m*z+d*et,r[14]=g*T+y*P+m*K+d*ot,r[3]=S*E+M*w+_*U+b*H,r[7]=S*R+M*D+_*B+b*Y,r[11]=S*I+M*C+_*z+b*et,r[15]=S*T+M*P+_*K+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+y*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],d=t[15],S=h*m*l-y*f*l+y*c*p-a*m*p-h*c*d+a*f*d,M=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,_=u*y*l-g*h*l+g*a*p-o*y*p-u*a*d+o*h*d,b=g*h*c-u*y*c-g*a*f+o*y*f+u*a*m-o*h*m,E=e*S+n*M+s*_+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=S*R,t[1]=(y*f*r-h*m*r-y*s*p+n*m*p+h*s*d-n*f*d)*R,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*d+n*c*d)*R,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*R,t[4]=M*R,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*R,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*R,t[8]=_*R,t[9]=(g*h*r-u*y*r-g*n*p+e*y*p+u*n*d-e*h*d)*R,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*d+e*a*d)*R,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*R,t[12]=b*R,t[13]=(u*y*s-g*h*s+g*n*f-e*y*f-u*n*m+e*h*m)*R,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,y=o*u,m=o*h,d=a*h,S=c*l,M=c*u,_=c*h,b=n.x,E=n.y,R=n.z;return s[0]=(1-(y+d))*b,s[1]=(p+_)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+M)*R,s[9]=(m-S)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let l=1/r,u=1/o,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_n,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===_n)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Us)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===_n)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Us)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new N,mn=new ue,pu=new N(0,0,0),mu=new N(1,1,1),ei=new N,yr=new N,nn=new N,el=new ue,nl=new xn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gu=0,il=new N,qi=new xn,zn=new ue,vr=new N,As=new N,_u=new N,xu=new xn,sl=new N(1,0,0),rl=new N(0,1,0),ol=new N(0,0,1),al={type:"added"},yu={type:"removed"},Yi={type:"childadded",child:null},Ea={type:"childremoved",child:null},Se=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new hn,n=new xn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(As,vr,this.up):zn.lookAt(vr,As,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(zn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,_u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new N(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,Vn=new N,Aa=new N,kn=new N,Zi=new N,Ji=new N,cl=new N,Ca=new N,Ra=new N,Ia=new N,Pa=new ae,Da=new ae,La=new ae,si=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Vn.subVectors(n,e),Aa.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Vn),c=gn.dot(Aa),l=Vn.dot(Vn),u=Vn.dot(Aa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Vn.subVectors(t,e),gn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ji.subVectors(r,n),Ca.subVectors(t,n);let c=Zi.dot(Ca),l=Ji.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Ra.subVectors(t,s);let u=Zi.dot(Ra),h=Ji.dot(Ra);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Zi,o);Ia.subVectors(t,r);let p=Zi.dot(Ia),g=Ji.dot(Ia);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ji,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return cl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(cl,a);let d=1/(m+y+f);return o=y*d,a=f*d,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=lu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ee.workingToColorSpace(He.copy(this),t),Math.round(Jt(He.r*255,0,255))*65536+Math.round(Jt(He.g*255,0,255))*256+Math.round(Jt(He.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ee){ee.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Mr);let n=ga(ni.h,Mr.h,e),s=ga(ni.s,Mr.s,e),r=ga(ni.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new It;It.NAMES=lh;var vu=0,An=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=vi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Br,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$t=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new N,Sr=new Rt,Mu=0,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}};var zs=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vs=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Su=0,cn=new ue,Na=new Se,$i=new N,sn=new ln,Cs=new ln,Oe=new N,le=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lc(t)?Vs:zs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(sn.min,Cs.min),sn.expandByPoint(Oe),Oe.addVectors(sn.max,Cs.max),sn.expandByPoint(Oe)):(sn.expandByPoint(Cs.min),sn.expandByPoint(Cs.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Oe.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Oe.add($i)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;let l=new N,u=new N,h=new N,f=new Rt,p=new Rt,g=new Rt,y=new N,m=new N;function d(I,T,w){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,w),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(y),a[T].add(y),a[w].add(y),c[I].add(m),c[T].add(m),c[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,T=S.length;I<T;++I){let w=S[I],D=w.start,C=w.count;for(let P=D,U=D+C;P<U;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new N,_=new N,b=new N,E=new N;function R(I){b.fromBufferAttribute(s,I),E.copy(b);let T=a[I];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(E,T);let D=_.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,T=S.length;I<T;++I){let w=S[I],D=w.start,C=w.count;for(let P=D,U=D+C;P<U;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Ae(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ll=new ue,_i=new Bs,br=new yn,hl=new N,Tr=new N,wr=new N,Er=new N,Fa=new N,Ar=new N,ul=new N,Cr=new N,Ht=class extends Se{constructor(t=new le,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Fa.fromBufferAttribute(h,t),o?Ar.addScaledVector(Fa,u):Ar.addScaledVector(Fa.sub(e),u))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(br.containsPoint(_i.origin)===!1&&(_i.intersectSphere(br,hl)===null||_i.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(ll.copy(r).invert(),_i.copy(t.ray).applyMatrix4(ll),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,b=M;_<b;_+=3){let E=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);s=Rr(this,d,t,n,l,u,h,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Rr(this,o,t,n,l,u,h,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,b=M;_<b;_+=3){let E=_,R=_+1,I=_+2;s=Rr(this,d,t,n,l,u,h,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let S=m,M=m+1,_=m+2;s=Rr(this,o,t,n,l,u,h,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bu(i,t,e,n,s,r,o,a){let c;if(t.side===Ne?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hn,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Rr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Tr),i.getVertexPosition(c,wr),i.getVertexPosition(l,Er);let u=bu(i,t,e,n,Tr,wr,Er,ul);if(u){let h=new N;si.getBarycoord(ul,Tr,wr,Er,h),s&&(u.uv=si.getInterpolatedAttribute(s,a,c,l,h,new Rt)),r&&(u.uv1=si.getInterpolatedAttribute(r,a,c,l,h,new Rt)),o&&(u.normal=si.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};si.getNormal(Tr,wr,Er,f.normal),u.face=f,u.barycoord=h}return u}var un=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(y,m,d,S,M,_,b,E,R,I,T){let w=_/R,D=b/I,C=_/2,P=b/2,U=E/2,B=R+1,z=I+1,K=0,H=0,Y=new N;for(let et=0;et<z;et++){let ot=et*D-P;for(let pt=0;pt<B;pt++){let Tt=pt*w-C;Y[y]=Tt*S,Y[m]=ot*M,Y[d]=U,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(pt/R),h.push(1-et/I),K+=1}}for(let et=0;et<I;et++)for(let ot=0;ot<R;ot++){let pt=f+ot+B*et,Tt=f+ot+B*(et+1),Qt=f+(ot+1)+B*(et+1),Bt=f+(ot+1)+B*et;c.push(pt,Tt,Bt),c.push(Tt,Qt,Bt),H+=6}a.addGroup(p,H,T),p+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Pi(i[e]);for(let s in n)t[s]=n[s]}return t}function Tu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var hh={clone:Pi,merge:Xe},wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ks=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new N,dl=new Rt,fl=new Rt,Ue=class extends ks{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,dl,fl),e.subVectors(fl,dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,Qi=1,Wr=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Ki,Qi,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Ki,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Ki,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Ki,Qi,t,e);a.layers=this.layers,this.add(a);let c=new Ue(Ki,Qi,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Ki,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gs=class extends Ze{constructor(t=[],e=Ri,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xr=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Yn});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Ye),new Wr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ve=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Au={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Au)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xn=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ai=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ke,u=Ke,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new ue,pl=new ue,Ir=[],ml=new ln,Cu=new ue,Rs=new Ht,Is=new yn,qn=class extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),ml.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(ml)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Is.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),pl.multiplyMatrices(n,ji),Rs.matrixWorld=pl,Rs.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){let c=Ir[o];c.instanceId=r,c.object=this,e.push(c)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(s*this.count),s,this.count,ms,bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ba=new N,Ru=new N,Iu=new Xt,wn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Iu.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new yn,Pu=new Rt(.5,.5),Pr=new N,os=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],d=r[11],S=r[12],M=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-o,p-u,d-g,b-S).normalize(),s[1].setComponents(l+o,p+u,d+g,b+S).normalize(),s[2].setComponents(l+a,p+h,d+y,b+M).normalize(),s[3].setComponents(l-a,p-h,d-y,b-M).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,p-f,d-m,b-_).normalize();else if(s[4].setComponents(l-c,p-f,d-m,b-_).normalize(),e===_n)s[5].setComponents(l+c,p+f,d+m,b+_).normalize();else if(e===Us)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Pu.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gl=new ue,Xa=new Bs,Dr=new yn,Lr=new N,Ws=class extends Se{constructor(t=new le,e=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;gl.copy(s).invert(),Xa.copy(t.ray).applyMatrix4(gl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,y=p;g<y;g++){let m=l.getX(g);Lr.fromBufferAttribute(h,m),_l(Lr,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,y=p;g<y;g++)Lr.fromBufferAttribute(h,g),_l(Lr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _l(i,t,e,n,s,r,o){let a=Xa.distanceSqToPoint(i);if(a<e){let c=new N;Xa.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qe=class extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xs=class extends Ze{constructor(t,e,n=hi,s,r,o,a=Ke,c=Ke,l,u=es,h=1){if(u!==es&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qs=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Cn=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,y=[],m=n/2,d=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function S(){let _=new N,b=new N,E=0,R=(e-t)/n;for(let I=0;I<=r;I++){let T=[],w=I/r,D=w*(e-t)+t;for(let C=0;C<=s;C++){let P=C/s,U=P*c+a,B=Math.sin(U),z=Math.cos(U);b.x=D*B,b.y=-w*n+m,b.z=D*z,h.push(b.x,b.y,b.z),_.set(B,R,z).normalize(),f.push(_.x,_.y,_.z),p.push(P,1-w),T.push(g++)}y.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){let w=y[T][I],D=y[T+1][I],C=y[T+1][I+1],P=y[T][I+1];(t>0||T!==0)&&(u.push(w,D,P),E+=3),(e>0||T!==r-1)&&(u.push(D,C,P),E+=3)}l.addGroup(d,E,0),d+=E}function M(_){let b=g,E=new Rt,R=new N,I=0,T=_===!0?t:e,w=_===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;let D=g;for(let C=0;C<=s;C++){let U=C/s*c+a,B=Math.cos(U),z=Math.sin(U);R.x=T*z,R.y=m*w,R.z=T*B,h.push(R.x,R.y,R.z),f.push(0,w,0),E.x=B*.5+.5,E.y=z*.5*w+.5,p.push(E.x,E.y),g++}for(let C=0;C<s;C++){let P=b+C,U=D+C;_===!0?u.push(U,U+1,P):u.push(U+1,U,P),I+=3}l.addGroup(d,I,_===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},as=class i extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new N,_=new N,b=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],M),p(e[E+1],_),p(e[E+2],b),c(M,_,b,S)}function c(S,M,_,b){let E=b+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let T=S.clone().lerp(_,I/E),w=M.clone().lerp(_,I/E),D=E-I;for(let C=0;C<=D;C++)C===0&&I===E?R[I][C]=T:R[I][C]=T.clone().lerp(w,C/D)}for(let I=0;I<E;I++)for(let T=0;T<2*(E-I)-1;T++){let w=Math.floor(T/2);T%2===0?(f(R[I][w+1]),f(R[I+1][w]),f(R[I][w])):(f(R[I][w+1]),f(R[I+1][w+1]),f(R[I+1][w]))}}function l(S){let M=new N;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let S=new N;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let _=m(S)/2/Math.PI+.5,b=d(S)/Math.PI+.5;o.push(_,1-b)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){let M=o[S+0],_=o[S+2],b=o[S+4],E=Math.max(M,_,b),R=Math.min(M,_,b);E>.9&&R<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,M){let _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let S=new N,M=new N,_=new N,b=new N,E=new Rt,R=new Rt,I=new Rt;for(let T=0,w=0;T<r.length;T+=9,w+=6){S.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),E.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),b.copy(S).add(M).add(_).divideScalar(3);let D=m(b);y(E,w+0,S,D),y(R,w+2,M,D),y(I,w+4,_,D)}}function y(S,M,_,b){b<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ti=class i extends Ys{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zs=class i extends Ys{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},cs=class i extends le{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Jt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new N,f=new Rt,p=new N,g=new N,y=new N,m=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(g)}for(let S=0;S<=e;S++){let M=n+S*u*s,_=Math.sin(M),b=Math.cos(M);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*_,h.y=t[E].y,h.z=t[E].x*b,o.push(h.x,h.y,h.z),f.x=S/e,f.y=E/(t.length-1),a.push(f.x,f.y);let R=c[3*E+0]*_,I=c[3*E+1],T=c[3*E+0]*b;l.push(R,I,T)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){let _=M+S*t.length,b=_,E=_+t.length,R=_+t.length+1,I=_+1;r.push(b,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var We=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let S=d*f-o;for(let M=0;M<l;M++){let _=M*h-r;g.push(_,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){let M=S+l*d,_=S+l*(d+1),b=S+1+l*(d+1),E=S+1+l*d;p.push(M,_,E),p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var wi=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new N,f=new N,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let S=[],M=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let E=b/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(E+_,1-M),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let M=u[d][S+1],_=u[d][S],b=u[d+1][S],E=u[d+1][S+1];(d!==0||o>0)&&p.push(M,_,E),(d!==n-1||c<Math.PI)&&p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Js=class i extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new N,h=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(y,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var de=class extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ls=class extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $s=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Yr=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zr=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Du(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jr=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Va,endingEnd:Va}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ka:r=t,a=2*e-n;break;case Ga:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ka:o=t,c=2*n-e;break;case Ga:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let b=0;b!==a;++b)r[b]=d*o[u+b]+S*o[l+b]+M*o[c+b]+_*o[h+b];return r}},$r=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Kr=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Du(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=zr;var ci=class extends rn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ds;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Qr.prototype.ValueTypeName="color";var jr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};jr.prototype.ValueTypeName="number";var to=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ks=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends rn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ds;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="vector";var no=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},uh=new no,io=class{constructor(t){this.manager=t!==void 0?t:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var hs=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ai=class extends hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Oa=new ue,xl=new N,yl=new N,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vl=new ue,Ps=new N,za=new N,qa=class extends so{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,n.coordinateSystem,n.reversedDepth)}},Qs=class extends hs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},js=class extends ks{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ya=class extends so{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Ya}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ro=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uc="\\[\\]\\.:\\/",Lu=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",Uu="[^"+uc.replace("\\.","")+"]",Nu=/((?:WC+[\/:])*)/.source.replace("WC",dc),Fu=/(WCOD+)?/.source.replace("WCOD",Uu),Bu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),Ou=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),zu=new RegExp("^"+Nu+Fu+Bu+Ou+"$"),Vu=["material","materials","bones","map"],Za=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lu,"")}static parseTrackName(t){let e=zu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Za;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h0=new Float32Array(1);function fc(i,t,e,n){let s=ku(n);switch(e){case sc:return i*t;case ms:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case rc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:case Co:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Ao:return Math.max(i,8)*Math.max(t,8)/2;case Ro:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ku(i){switch(i){case Sn:case tc:return{byteLength:1,components:1};case us:case ec:case ds:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case hi:case yo:case bn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
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
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#define LAMBERT
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
}`,dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
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
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yp=`#define STANDARD
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
}`,vp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mp=`#define TOON
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
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ap=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Ju,alphahash_pars_fragment:$u,alphamap_fragment:Ku,alphamap_pars_fragment:Qu,alphatest_fragment:ju,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:cd,bumpmap_pars_fragment:ld,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:vd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:wd,colorspace_pars_fragment:Ed,envmap_fragment:Ad,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:kd,envmap_vertex:Pd,fog_vertex:Dd,fog_pars_vertex:Ld,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Bd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:zd,lights_pars_begin:Vd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:$d,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:of,metalnessmap_pars_fragment:af,morphinstance_vertex:cf,morphcolor_vertex:lf,morphnormal_vertex:hf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:Tf,premultiplied_alpha_fragment:wf,project_vertex:Ef,dithering_fragment:Af,dithering_pars_fragment:Cf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Df,shadowmap_vertex:Lf,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Ff,skinning_vertex:Bf,skinnormal_vertex:Of,specularmap_fragment:zf,specularmap_pars_fragment:Vf,tonemapping_fragment:kf,tonemapping_pars_fragment:Gf,transmission_fragment:Hf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:Zf,background_vert:Jf,background_frag:$f,backgroundCube_vert:Kf,backgroundCube_frag:Qf,cube_vert:jf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:op,linedashed_vert:ap,linedashed_frag:cp,meshbasic_vert:lp,meshbasic_frag:hp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:vp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:bp,points_frag:Tp,shadow_vert:wp,shadow_frag:Ep,sprite_vert:Ap,sprite_frag:Cp},dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},In={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};In.physical={uniforms:Xe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ta={r:0,b:0,g:0},Di=new hn,Rp=new ue;function Ip(i,t,e,n,s,r,o){let a=new It(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function y(M){let _=!1,b=g(M);b===null?d(a,c):b&&b.isColor&&(d(b,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===tr)?(u===void 0&&(u=new Ht(new un(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Pi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(_.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(Di)),u.material.toneMapped=ee.getTransfer(b.colorSpace)!==ce,(h!==b||f!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ht(new We(2,2),new ke({name:"BackgroundMaterial",uniforms:Pi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,_){M.getRGB(ta,hc(i)),n.buffers.color.setClear(ta.r,ta.g,ta.b,_,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:y,addToRenderList:m,dispose:S}}function Pp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,D,C,P,U){let B=!1,z=h(P,C,D);r!==z&&(r=z,l(r.object)),B=p(w,P,C,U),B&&g(w,P,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(w,D,C,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,D,C){let P=C.wireframe===!0,U=n[w.id];U===void 0&&(U={},n[w.id]=U);let B=U[D.id];B===void 0&&(B={},U[D.id]=B);let z=B[P];return z===void 0&&(z=f(c()),B[P]=z),z}function f(w){let D=[],C=[],P=[];for(let U=0;U<e;U++)D[U]=0,C[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:P,object:w,attributes:{},index:null}}function p(w,D,C,P){let U=r.attributes,B=D.attributes,z=0,K=C.getAttributes();for(let H in K)if(K[H].location>=0){let et=U[H],ot=B[H];if(ot===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(w,D,C,P){let U={},B=D.attributes,z=0,K=C.getAttributes();for(let H in K)if(K[H].location>=0){let et=B[H];et===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(et=w.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),U[H]=ot,z++}r.attributes=U,r.attributesNum=z,r.index=P}function y(){let w=r.newAttributes;for(let D=0,C=w.length;D<C;D++)w[D]=0}function m(w){d(w,0)}function d(w,D){let C=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;C[w]=1,P[w]===0&&(i.enableVertexAttribArray(w),P[w]=1),U[w]!==D&&(i.vertexAttribDivisor(w,D),U[w]=D)}function S(){let w=r.newAttributes,D=r.enabledAttributes;for(let C=0,P=D.length;C<P;C++)D[C]!==w[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function M(w,D,C,P,U,B,z){z===!0?i.vertexAttribIPointer(w,D,C,U,B):i.vertexAttribPointer(w,D,C,P,U,B)}function _(w,D,C,P){y();let U=P.attributes,B=C.getAttributes(),z=D.defaultAttributeValues;for(let K in B){let H=B[K];if(H.location>=0){let Y=U[K];if(Y===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){let et=Y.normalized,ot=Y.itemSize,pt=t.get(Y);if(pt===void 0)continue;let Tt=pt.buffer,Qt=pt.type,Bt=pt.bytesPerElement,Z=Qt===i.INT||Qt===i.UNSIGNED_INT||Y.gpuType===yo;if(Y.isInterleavedBufferAttribute){let tt=Y.data,vt=tt.stride,zt=Y.offset;if(tt.isInstancedInterleavedBuffer){for(let At=0;At<H.locationSize;At++)d(H.location+At,tt.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let At=0;At<H.locationSize;At++)m(H.location+At);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let At=0;At<H.locationSize;At++)M(H.location+At,ot/H.locationSize,Qt,et,vt*Bt,(zt+ot/H.locationSize*At)*Bt,Z)}else{if(Y.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)d(H.location+tt,Y.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let tt=0;tt<H.locationSize;tt++)m(H.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let tt=0;tt<H.locationSize;tt++)M(H.location+tt,ot/H.locationSize,Qt,et,ot*Bt,ot/H.locationSize*tt*Bt,Z)}}else if(z!==void 0){let et=z[K];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}S()}function b(){I();for(let w in n){let D=n[w];for(let C in D){let P=D[C];for(let U in P)u(P[U].object),delete P[U];delete D[C]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let D=n[w.id];for(let C in D){let P=D[C];for(let U in P)u(P[U].object),delete P[U];delete D[C]}delete n[w.id]}function R(w){for(let D in n){let C=n[D];if(C[w.id]===void 0)continue;let P=C[w.id];for(let U in P)u(P[U].object),delete P[U];delete C[w.id]}}function I(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Dp(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function Up(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,M=S*4,_=d.clippingState||null;c.value=_,_=u(g,f,M,p);for(let b=0;b!==M;++b)_[b]=e[b];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==y;++M,_+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Np(i){let t=new WeakMap;function e(o,a){return a===go?o.mapping=Ri:a===_o&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===_o)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Xr(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _s=4,dh=[.125,.215,.35,.446,.526,.582],Ni=20,pc=new js,fh=new It,mc=null,gc=0,_c=0,xc=!1,Ui=(1+Math.sqrt(5))/2,gs=1/Ui,ph=[new N(-Ui,gs,0),new N(Ui,gs,0),new N(-gs,0,Ui),new N(gs,0,Ui),new N(0,Ui,-gs),new N(0,Ui,gs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Fp=new N,ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Fp}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=xc,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ds,format:dn,colorSpace:bi,depthBuffer:!1},s=mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,n,s,r){let c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(fh),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new $t({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new Ht(new un,y),d=!1,S=t.background;S?S.isColor&&(y.color.copy(S),t.background=null,d=!0):(y.color.copy(fh),d=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let b=this._cubeSize;ea(s,_*b,M>2?b:0,b,b),h.setRenderTarget(s),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,pc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ph[(s-r-1)%ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ht(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);let d=[],S=0;for(let R=0;R<Ni;++R){let I=R/y,T=Math.exp(-I*I/2);d.push(T),R===0?S+=T:R<m&&(S+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let _=this._sizeLods[s],b=3*_*(s>M-_s?s-M+_s:0),E=4*(this._cubeSize-_);ea(e,b,E,3*_,2*_),c.setRenderTarget(e),c.render(h,pc)}};function Bp(i){let t=[],e=[],n=[],s=i,r=i-_s+1+dh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-_s?c=dh[o-i+_s-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,S=new Float32Array(y*g*p),M=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,I=E>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(T,y*g*E),M.set(f,m*g*E);let w=[E,E,E,E,E,E];_.set(w,d*g*E)}let b=new le;b.setAttribute("position",new Ae(S,y)),b.setAttribute("uv",new Ae(M,m)),b.setAttribute("faceIndex",new Ae(_,d)),t.push(b),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mh(i,t,e){let n=new En(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){let n=new Float32Array(Ni),s=new N(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function gh(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function _h(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===go||c===_o,u=c===Ri||c===Ii;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ys(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new ys(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let M=0,_=S.length;M<_;M+=3){let b=S[M+0],E=S[M+1],R=S[M+2];f.push(b,E,E,R,R,b)}}else if(g!==void 0){let S=g.array;y=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){let b=M+0,E=M+1,R=M+2;f.push(b,E,E,R,R,b)}}else return;let m=new(lc(f)?Vs:zs)(f,1);m.version=y;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Gp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*y[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wp(i,t,e){let n=new WeakMap,s=new ae;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let _=a.attributes.position.count*M,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*h),R=new Fs(E,_,b,h);R.type=bn,R.needsUpdate=!0;let I=M*4;for(let w=0;w<h;w++){let D=m[w],C=d[w],P=S[w],U=_*b*4*w;for(let B=0;B<D.count;B++){let z=B*I;p===!0&&(s.fromBufferAttribute(D,B),E[U+z+0]=s.x,E[U+z+1]=s.y,E[U+z+2]=s.z,E[U+z+3]=0),g===!0&&(s.fromBufferAttribute(C,B),E[U+z+4]=s.x,E[U+z+5]=s.y,E[U+z+6]=s.z,E[U+z+7]=0),y===!0&&(s.fromBufferAttribute(P,B),E[U+z+8]=s.x,E[U+z+9]=s.y,E[U+z+10]=s.z,E[U+z+11]=P.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Rt(_,b)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Xp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Fh=new Ze,xh=new Xs(1,1),Bh=new Fs,Oh=new Hr,zh=new Gs,yh=[],vh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function $p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;bh.set(n),i.uniformMatrix2fv(this.addr,!1,bh),Be(e,n)}}function Kp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Be(e,n)}}function Qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Be(e,n)}}function jp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=ac,r=xh):r=Fh,e.setTexture2D(t||r,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return Qp;case 5124:case 35670:return jp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(i,t){i.uniform1fv(this.addr,t)}function fm(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function pm(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function mm(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function gm(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xm(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ym(i,t){i.uniform1iv(this.addr,t)}function vm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function Sm(i,t){i.uniform4iv(this.addr,t)}function bm(i,t){i.uniform1uiv(this.addr,t)}function Tm(i,t){i.uniform2uiv(this.addr,t)}function wm(i,t){i.uniform3uiv(this.addr,t)}function Em(i,t){i.uniform4uiv(this.addr,t)}function Am(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function Cm(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oh,r[o])}function Rm(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function Im(i,t,e){let n=this.cache,s=t.length,r=sa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bh,r[o])}function Pm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Im}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}},Mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;function Th(i,t){i.seq.push(t),i.map[t.id]=t}function Dm(i,t,e){let n=i.name,s=n.length;for(yc.lastIndex=0;;){let r=yc.exec(n),o=yc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Th(e,l===void 0?new vc(a,i,t):new Mc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Sc(a),Th(e,h)),e=h}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lm=37297,Um=0;function Nm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Eh=new Xt;function Fm(i){ee._getMatrix(Eh,ee.workingColorSpace,i);let t=`mat3( ${Eh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nm(i.getShaderSource(t),a)}else return r}function Bm(i,t){let e=Fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(i,t){let e;switch(t){case Wl:e="Linear";break;case Xl:e="Reinhard";break;case ql:e="Cineon";break;case mo:e="ACESFilmic";break;case Zl:e="AgX";break;case Jl:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var na=new N;function zm(){ee.getLuminanceCoefficients(na);let i=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function km(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function Ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Hm,Xm)}var Wm=new Map;function Xm(i,t){let e=Yt[t];if(e===void 0){let n=Wm.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(qm,Ym)}function Ym(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$a?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ii:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $m(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Hl:t="ENVMAP_BLENDING_ADD";break}return t}function Qm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Zm(e),l=Jm(e),u=$m(e),h=Km(e),f=Qm(e),p=Vm(e),g=km(r),y=s.createProgram(),m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),d=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=bc(o),o=Ch(o,e),o=Rh(o,e),a=bc(a),a=Ch(a,e),a=Rh(a,e),o=Ih(o),a=Ih(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=S+m+o,_=S+d+a,b=wh(s,s.VERTEX_SHADER,M),E=wh(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(y)||"",P=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(E)||"",B=C.trim(),z=P.trim(),K=U.trim(),H=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,E);else{let et=Ah(s,b,"vertex"),ot=Ah(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+et+`
`+ot)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||K==="")&&(Y=!1);Y&&(D.diagnostics={runnable:H,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:d}})}s.deleteShader(b),s.deleteShader(E),I=new xs(s,y),T=Gm(s,y)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,Lm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}var tg=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}};function eg(i,t,e,n,s,r,o){let a=new Os,c=new Tc,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,w,D,C,P){let U=C.fog,B=P.geometry,z=T.isMeshStandardMaterial?C.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||z),H=K&&K.mapping===tr?K.image.height:null,Y=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=et!==void 0?et.length:0,pt=0;B.morphAttributes.position!==void 0&&(pt=1),B.morphAttributes.normal!==void 0&&(pt=2),B.morphAttributes.color!==void 0&&(pt=3);let Tt,Qt,Bt,Z;if(Y){let se=In[Y];Tt=se.vertexShader,Qt=se.fragmentShader}else Tt=T.vertexShader,Qt=T.fragmentShader,c.update(T),Bt=c.getVertexShaderID(T),Z=c.getFragmentShaderID(T);let tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),zt=P.isInstancedMesh===!0,At=P.isBatchedMesh===!0,Zt=!!T.map,Le=!!T.matcap,L=!!K,te=!!T.aoMap,Vt=!!T.lightMap,Pt=!!T.bumpMap,Mt=!!T.normalMap,fe=!!T.displacementMap,yt=!!T.emissiveMap,kt=!!T.metalnessMap,Te=!!T.roughnessMap,ct=T.anisotropy>0,v=T.clearcoat>0,x=T.dispersion>0,F=T.iridescence>0,G=T.sheen>0,J=T.transmission>0,W=ct&&!!T.anisotropyMap,mt=v&&!!T.clearcoatMap,nt=v&&!!T.clearcoatNormalMap,wt=v&&!!T.clearcoatRoughnessMap,$=F&&!!T.iridescenceMap,Q=F&&!!T.iridescenceThicknessMap,it=G&&!!T.sheenColorMap,St=G&&!!T.sheenRoughnessMap,_t=!!T.specularMap,at=!!T.specularColorMap,Dt=!!T.specularIntensityMap,O=J&&!!T.transmissionMap,st=J&&!!T.thicknessMap,ht=!!T.gradientMap,gt=!!T.alphaMap,rt=T.alphaTest>0,j=!!T.alphaHash,Et=!!T.extensions,Wt=Zn;T.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let me={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:Tt,fragmentShader:Qt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:At,batchingColor:At&&P._colorsTexture!==null,instancing:zt,instancingColor:zt&&P.instanceColor!==null,instancingMorph:zt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:bi,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:Le,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:H,aoMap:te,lightMap:Vt,bumpMap:Pt,normalMap:Mt,displacementMap:f&&fe,emissiveMap:yt,normalMapObjectSpace:Mt&&T.normalMapType===jl,normalMapTangentSpace:Mt&&T.normalMapType===jo,metalnessMap:kt,roughnessMap:Te,anisotropy:ct,anisotropyMap:W,clearcoat:v,clearcoatMap:mt,clearcoatNormalMap:nt,clearcoatRoughnessMap:wt,dispersion:x,iridescence:F,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:G,sheenColorMap:it,sheenRoughnessMap:St,specularMap:_t,specularColorMap:at,specularIntensityMap:Dt,transmission:J,transmissionMap:O,thicknessMap:st,gradientMap:ht,opaque:T.transparent===!1&&T.blending===vi&&T.alphaToCoverage===!1,alphaMap:gt,alphaTest:rt,alphaHash:j,combine:T.combine,mapUv:Zt&&y(T.map.channel),aoMapUv:te&&y(T.aoMap.channel),lightMapUv:Vt&&y(T.lightMap.channel),bumpMapUv:Pt&&y(T.bumpMap.channel),normalMapUv:Mt&&y(T.normalMap.channel),displacementMapUv:fe&&y(T.displacementMap.channel),emissiveMapUv:yt&&y(T.emissiveMap.channel),metalnessMapUv:kt&&y(T.metalnessMap.channel),roughnessMapUv:Te&&y(T.roughnessMap.channel),anisotropyMapUv:W&&y(T.anisotropyMap.channel),clearcoatMapUv:mt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:nt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:St&&y(T.sheenRoughnessMap.channel),specularMapUv:_t&&y(T.specularMap.channel),specularColorMapUv:at&&y(T.specularColorMap.channel),specularIntensityMapUv:Dt&&y(T.specularIntensityMap.channel),transmissionMapUv:O&&y(T.transmissionMap.channel),thicknessMapUv:st&&y(T.thicknessMap.channel),alphaMapUv:gt&&y(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Mt||ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Zt||gt),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:vt,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&ee.getTransfer(T.map.colorSpace)===ce,decodeVideoTextureEmissive:yt&&T.emissiveMap.isVideoTexture===!0&&ee.getTransfer(T.emissiveMap.colorSpace)===ce,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ie,flipSided:T.side===Ne,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function d(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let D in T.defines)w.push(D),w.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(S(w,T),M(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function S(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function M(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let w=g[T.type],D;if(w){let C=In[w];D=hh.clone(C.uniforms)}else D=T.uniforms;return D}function b(T,w){let D;for(let C=0,P=u.length;C<P;C++){let U=u[C];if(U.cacheKey===w){D=U,++D.usedTimes;break}}return D===void 0&&(D=new jm(i,w,T,r),u.push(D)),D}function E(T){if(--T.usedTimes===0){let w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function R(T){c.remove(T)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:I}}function ng(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,p,g,y,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),t++,d}function a(h,f,p,g,y,m){let d=o(h,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,g,y,m){let d=o(h,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||ig),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function sg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Lh,i.set(n,[o])):s>=r.length?(o=new Lh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new It};break;case"SpotLight":e={position:new N,direction:new N,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ag=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){let t=new rg,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new ue,o=new ue;function a(l){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,S=0,M=0,_=0,b=0,E=0,R=0;l.sort(cg);for(let T=0,w=l.length;T<w;T++){let D=l[T],C=D.color,P=D.intensity,U=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=C.r*P,h+=C.g*P,f+=C.b*P;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],P);R++}else if(D.isDirectionalLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=z,p++}else if(D.isSpotLight){let z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(C).multiplyScalar(P),z.distance=U,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[y]=z;let K=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,K.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=K.matrix,D.castShadow){let H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=B,_++}y++}else if(D.isRectAreaLight){let z=t.get(D);z.color.copy(C).multiplyScalar(P),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let K=D.shadow,H=e.get(D);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=z,g++}else if(D.isHemisphereLight){let z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(P),z.groundColor.copy(D.groundColor).multiplyScalar(P),n.hemi[d]=z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==_||I.numSpotMaps!==b||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=_,I.numSpotMaps=b,I.numLightProbes=R,n.version=ag++)}function c(l,u){let h=0,f=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){let M=l[d];if(M.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Uh(i){let t=new lg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uh(i),t.set(s,[a])):r>=o.length?(a=new Uh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(i,t,e){let n=new os,s=new Rt,r=new Rt,o=new ae,a=new Yr({depthPacking:Ql}),c=new Zr,l={},u=e.maxTextureSize,h={[Hn]:Ne,[Ne]:Hn,[Ie]:Ie},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let d=this.type;this.render=function(E,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let T=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Yn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let P=d!==Rn&&this.type===Rn,U=d===Rn&&this.type!==Rn;for(let B=0,z=E.length;B<z;B++){let K=E[B],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Y=H.getFrameExtents();if(s.multiply(Y),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||P===!0||U===!0){let ot=this.type!==Rn?{minFilter:Ke,magFilter:Ke}:{};H.map!==null&&H.map.dispose(),H.map=new En(s.x,s.y,ot),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let et=H.getViewportCount();for(let ot=0;ot<et;ot++){let pt=H.getViewport(ot);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),C.viewport(o),H.updateMatrices(K,ot),n=H.getFrustum(),_(R,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Rn&&S(H,I),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,w,D)};function S(E,R){let I=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,f,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,p,y,null)}function M(E,R,I,T){let w=null,D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=I.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let C=w.uuid,P=R.uuid,U=l[C];U===void 0&&(U={},l[C]=U);let B=U[P];B===void 0&&(B=w.clone(),U[P]=B,R.addEventListener("dispose",b)),w=B}if(w.visible=R.visible,w.wireframe=R.wireframe,T===Rn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let C=i.properties.get(w);C.light=I}return w}function _(E,R,I,T,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Rn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let P=t.update(E),U=E.material;if(Array.isArray(U)){let B=P.groups;for(let z=0,K=B.length;z<K;z++){let H=B[z],Y=U[H.materialIndex];if(Y&&Y.visible){let et=M(E,Y,T,w);E.onBeforeShadow(i,E,R,I,P,et,H),i.renderBufferDirect(I,null,P,et,E,H),E.onAfterShadow(i,E,R,I,P,et,H)}}}else if(U.visible){let B=M(E,U,T,w);E.onBeforeShadow(i,E,R,I,P,B,null),i.renderBufferDirect(I,null,P,B,E,null),E.onAfterShadow(i,E,R,I,P,B,null)}}let C=E.children;for(let P=0,U=C.length;P<U;P++)_(C[P],R,I,T,w)}function b(E){E.target.removeEventListener("dispose",b);for(let I in l){let T=l[I],w=E.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var pg={[oo]:ao,[co]:uo,[lo]:fo,[Mi]:ho,[ao]:oo,[uo]:co,[fo]:lo,[ho]:Mi};function mg(i,t){function e(){let O=!1,st=new ae,ht=null,gt=new ae(0,0,0,0);return{setMask:function(rt){ht!==rt&&!O&&(i.colorMask(rt,rt,rt,rt),ht=rt)},setLocked:function(rt){O=rt},setClear:function(rt,j,Et,Wt,me){me===!0&&(rt*=Wt,j*=Wt,Et*=Wt),st.set(rt,j,Et,Wt),gt.equals(st)===!1&&(i.clearColor(rt,j,Et,Wt),gt.copy(st))},reset:function(){O=!1,ht=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,st=!1,ht=null,gt=null,rt=null;return{setReversed:function(j){if(st!==j){let Et=t.get("EXT_clip_control");j?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),st=j;let Wt=rt;rt=null,this.setClear(Wt)}},getReversed:function(){return st},setTest:function(j){j?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(j){ht!==j&&!O&&(i.depthMask(j),ht=j)},setFunc:function(j){if(st&&(j=pg[j]),gt!==j){switch(j){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=j}},setLocked:function(j){O=j},setClear:function(j){rt!==j&&(st&&(j=1-j),i.clearDepth(j),rt=j)},reset:function(){O=!1,ht=null,gt=null,rt=null,st=!1}}}function s(){let O=!1,st=null,ht=null,gt=null,rt=null,j=null,Et=null,Wt=null,me=null;return{setTest:function(se){O||(se?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(se){st!==se&&!O&&(i.stencilMask(se),st=se)},setFunc:function(se,Fn,Tn){(ht!==se||gt!==Fn||rt!==Tn)&&(i.stencilFunc(se,Fn,Tn),ht=se,gt=Fn,rt=Tn)},setOp:function(se,Fn,Tn){(j!==se||Et!==Fn||Wt!==Tn)&&(i.stencilOp(se,Fn,Tn),j=se,Et=Fn,Wt=Tn)},setLocked:function(se){O=se},setClear:function(se){me!==se&&(i.clearStencil(se),me=se)},reset:function(){O=!1,st=null,ht=null,gt=null,rt=null,j=null,Et=null,Wt=null,me=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,M=null,_=null,b=null,E=null,R=new It(0,0,0),I=0,T=!1,w=null,D=null,C=null,P=null,U=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=K>=2);let Y=null,et={},ot=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Tt=new ae().fromArray(ot),Qt=new ae().fromArray(pt);function Bt(O,st,ht,gt){let rt=new Uint8Array(4),j=i.createTexture();i.bindTexture(O,j),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<ht;Et++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(st+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return j}let Z={};Z[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Mi),Pt(!1),Mt(Ja),tt(i.CULL_FACE),te(Yn);function tt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function vt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function zt(O,st){return h[O]!==st?(i.bindFramebuffer(O,st),h[O]=st,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function At(O,st){let ht=p,gt=!1;if(O){ht=f.get(st),ht===void 0&&(ht=[],f.set(st,ht));let rt=O.textures;if(ht.length!==rt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Et=rt.length;j<Et;j++)ht[j]=i.COLOR_ATTACHMENT0+j;ht.length=rt.length,gt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ht)}function Zt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Le={[oi]:i.FUNC_ADD,[wl]:i.FUNC_SUBTRACT,[El]:i.FUNC_REVERSE_SUBTRACT};Le[Al]=i.MIN,Le[Cl]=i.MAX;let L={[Rl]:i.ZERO,[Il]:i.ONE,[Pl]:i.SRC_COLOR,[Fr]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Ll]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[Br]:i.ONE_MINUS_SRC_ALPHA,[Fl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[zl]:i.ONE_MINUS_CONSTANT_COLOR,[Vl]:i.CONSTANT_ALPHA,[kl]:i.ONE_MINUS_CONSTANT_ALPHA};function te(O,st,ht,gt,rt,j,Et,Wt,me,se){if(O===Yn){y===!0&&(vt(i.BLEND),y=!1);return}if(y===!1&&(tt(i.BLEND),y=!0),O!==Tl){if(O!==m||se!==T){if((d!==oi||_!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,_=oi),se)switch(O){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,M=null,b=null,E=null,R.set(0,0,0),I=0,m=O,T=se}return}rt=rt||st,j=j||ht,Et=Et||gt,(st!==d||rt!==_)&&(i.blendEquationSeparate(Le[st],Le[rt]),d=st,_=rt),(ht!==S||gt!==M||j!==b||Et!==E)&&(i.blendFuncSeparate(L[ht],L[gt],L[j],L[Et]),S=ht,M=gt,b=j,E=Et),(Wt.equals(R)===!1||me!==I)&&(i.blendColor(Wt.r,Wt.g,Wt.b,me),R.copy(Wt),I=me),m=O,T=!1}function Vt(O,st){O.side===Ie?vt(i.CULL_FACE):tt(i.CULL_FACE);let ht=O.side===Ne;st&&(ht=!ht),Pt(ht),O.blending===vi&&O.transparent===!1?te(Yn):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let gt=O.stencilWrite;a.setTest(gt),gt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function Mt(O){O!==Ml?(tt(i.CULL_FACE),O!==D&&(O===Ja?i.cullFace(i.BACK):O===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=O}function fe(O){O!==C&&(z&&i.lineWidth(O),C=O)}function yt(O,st,ht){O?(tt(i.POLYGON_OFFSET_FILL),(P!==st||U!==ht)&&(i.polygonOffset(st,ht),P=st,U=ht)):vt(i.POLYGON_OFFSET_FILL)}function kt(O){O?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Te(O){O===void 0&&(O=i.TEXTURE0+B-1),Y!==O&&(i.activeTexture(O),Y=O)}function ct(O,st,ht){ht===void 0&&(Y===null?ht=i.TEXTURE0+B-1:ht=Y);let gt=et[ht];gt===void 0&&(gt={type:void 0,texture:void 0},et[ht]=gt),(gt.type!==O||gt.texture!==st)&&(Y!==ht&&(i.activeTexture(ht),Y=ht),i.bindTexture(O,st||Z[O]),gt.type=O,gt.texture=st)}function v(){let O=et[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(O){Tt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Tt.copy(O))}function St(O){Qt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Qt.copy(O))}function _t(O,st){let ht=l.get(st);ht===void 0&&(ht=new WeakMap,l.set(st,ht));let gt=ht.get(O);gt===void 0&&(gt=i.getUniformBlockIndex(st,O.name),ht.set(O,gt))}function at(O,st){let gt=l.get(st).get(O);c.get(st)!==gt&&(i.uniformBlockBinding(st,gt,O.__bindingPointIndex),c.set(st,gt))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,et={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,S=null,M=null,_=null,b=null,E=null,R=new It(0,0,0),I=0,T=!1,w=null,D=null,C=null,P=null,U=null,Tt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:vt,bindFramebuffer:zt,drawBuffers:At,useProgram:Zt,setBlending:te,setMaterial:Vt,setFlipSided:Pt,setCullFace:Mt,setLineWidth:fe,setPolygonOffset:yt,setScissorTest:kt,activeTexture:Te,bindTexture:ct,unbindTexture:v,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:$,texImage3D:Q,updateUBOMapping:_t,uniformBlockBinding:at,texStorage2D:nt,texStorage3D:wt,texSubImage2D:G,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:mt,scissor:it,viewport:St,reset:Dt}}function gg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,x){return p?new OffscreenCanvas(v,x):Ns("canvas")}function y(v,x,F){let G=1,J=ct(v);if((J.width>F||J.height>F)&&(G=F/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let W=Math.floor(G*J.width),mt=Math.floor(G*J.height);h===void 0&&(h=g(W,mt));let nt=x?g(W,mt):h;return nt.width=W,nt.height=mt,nt.getContext("2d").drawImage(v,0,0,W,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+mt+")."),nt}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),v;return v}function m(v){return v.generateMipmaps}function d(v){i.generateMipmap(v)}function S(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(v,x,F,G,J=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let W=x;if(x===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),x===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){let mt=J?Ls:ee.getTransfer(G);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=mt===ce?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(v,x){let F;return v?x===null||x===hi||x===fs?F=i.DEPTH24_STENCIL8:x===bn?F=i.DEPTH32F_STENCIL8:x===us&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===fs?F=i.DEPTH_COMPONENT24:x===bn?F=i.DEPTH_COMPONENT32F:x===us&&(F=i.DEPTH_COMPONENT16),F}function b(v,x){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Ke&&v.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function E(v){let x=v.target;x.removeEventListener("dispose",E),I(x),x.isVideoTexture&&u.delete(x)}function R(v){let x=v.target;x.removeEventListener("dispose",R),w(x)}function I(v){let x=n.get(v);if(x.__webglInit===void 0)return;let F=v.source,G=f.get(F);if(G){let J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(v),Object.keys(G).length===0&&f.delete(F)}n.remove(v)}function T(v){let x=n.get(v);i.deleteTexture(x.__webglTexture);let F=v.source,G=f.get(F);delete G[x.__cacheKey],o.memory.textures--}function w(v){let x=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[G][J]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=v.textures;for(let G=0,J=F.length;G<J;G++){let W=n.get(F[G]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(v)}let D=0;function C(){D=0}function P(){let v=D;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),D+=1,v}function U(v){let x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function B(v,x){let F=n.get(v);if(v.isVideoTexture&&kt(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&F.__version!==v.version){let G=v.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,v,x);return}}else v.isExternalTexture&&(F.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function z(v,x){let F=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){Z(F,v,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function K(v,x){let F=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){Z(F,v,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function H(v,x){let F=n.get(v);if(v.version>0&&F.__version!==v.version){tt(F,v,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let Y={[Si]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},et={[Ke]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},ot={[th]:i.NEVER,[oh]:i.ALWAYS,[eh]:i.LESS,[ac]:i.LEQUAL,[nh]:i.EQUAL,[rh]:i.GEQUAL,[ih]:i.GREATER,[sh]:i.NOTEQUAL};function pt(v,x){if(x.type===bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===xo||x.magFilter===er||x.magFilter===Mn||x.minFilter===Ye||x.minFilter===xo||x.minFilter===er||x.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,Y[x.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,Y[x.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,Y[x.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,et[x.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,et[x.minFilter]),x.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==er&&x.minFilter!==Mn||x.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(v,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Tt(v,x){let F=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",E));let G=x.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let W=U(x);if(W!==v.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[W].usedTimes++;let mt=J[v.__cacheKey];mt!==void 0&&(J[v.__cacheKey].usedTimes--,mt.usedTimes===0&&T(x)),v.__cacheKey=W,v.__webglTexture=J[W].texture}return F}function Qt(v,x,F){return Math.floor(Math.floor(v/F)/x)}function Bt(v,x,F,G){let W=v.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,G,x.data);else{W.sort((Q,it)=>Q.start-it.start);let mt=0;for(let Q=1;Q<W.length;Q++){let it=W[mt],St=W[Q],_t=it.start+it.count,at=Qt(St.start,x.width,4),Dt=Qt(it.start,x.width,4);St.start<=_t+1&&at===Dt&&Qt(St.start+St.count-1,x.width,4)===at?it.count=Math.max(it.count,St.start+St.count-it.start):(++mt,W[mt]=St)}W.length=mt+1;let nt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),$=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Q=0,it=W.length;Q<it;Q++){let St=W[Q],_t=Math.floor(St.start/4),at=Math.ceil(St.count/4),Dt=_t%x.width,O=Math.floor(_t/x.width),st=at,ht=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Dt,O,st,ht,F,G,x.data)}v.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,$)}}function Z(v,x,F){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let J=Tt(v,x),W=x.source;e.bindTexture(G,v.__webglTexture,i.TEXTURE0+F);let mt=n.get(W);if(W.version!==mt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let nt=ee.getPrimaries(ee.workingColorSpace),wt=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),$=x.colorSpace===Jn||nt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let Q=y(x.image,!1,s.maxTextureSize);Q=Te(x,Q);let it=r.convert(x.format,x.colorSpace),St=r.convert(x.type),_t=M(x.internalFormat,it,St,x.colorSpace,x.isVideoTexture);pt(G,x);let at,Dt=x.mipmaps,O=x.isVideoTexture!==!0,st=mt.__version===void 0||J===!0,ht=W.dataReady,gt=b(x,Q);if(x.isDepthTexture)_t=_(x.format===ps,x.type),st&&(O?e.texStorage2D(i.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,it,St,null));else if(x.isDataTexture)if(Dt.length>0){O&&st&&e.texStorage2D(i.TEXTURE_2D,gt,_t,Dt[0].width,Dt[0].height);for(let rt=0,j=Dt.length;rt<j;rt++)at=Dt[rt],O?ht&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,at.width,at.height,it,St,at.data):e.texImage2D(i.TEXTURE_2D,rt,_t,at.width,at.height,0,it,St,at.data);x.generateMipmaps=!1}else O?(st&&e.texStorage2D(i.TEXTURE_2D,gt,_t,Q.width,Q.height),ht&&Bt(x,Q,it,St)):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,it,St,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,_t,Dt[0].width,Dt[0].height,Q.depth);for(let rt=0,j=Dt.length;rt<j;rt++)if(at=Dt[rt],x.format!==dn)if(it!==null)if(O){if(ht)if(x.layerUpdates.size>0){let Et=fc(at.width,at.height,x.format,x.type);for(let Wt of x.layerUpdates){let me=at.data.subarray(Wt*Et/at.data.BYTES_PER_ELEMENT,(Wt+1)*Et/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Wt,at.width,at.height,1,it,me)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,at.width,at.height,Q.depth,it,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,_t,at.width,at.height,Q.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,at.width,at.height,Q.depth,it,St,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,_t,at.width,at.height,Q.depth,0,it,St,at.data)}else{O&&st&&e.texStorage2D(i.TEXTURE_2D,gt,_t,Dt[0].width,Dt[0].height);for(let rt=0,j=Dt.length;rt<j;rt++)at=Dt[rt],x.format!==dn?it!==null?O?ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,at.width,at.height,it,at.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,_t,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ht&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,at.width,at.height,it,St,at.data):e.texImage2D(i.TEXTURE_2D,rt,_t,at.width,at.height,0,it,St,at.data)}else if(x.isDataArrayTexture)if(O){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,_t,Q.width,Q.height,Q.depth),ht)if(x.layerUpdates.size>0){let rt=fc(Q.width,Q.height,x.format,x.type);for(let j of x.layerUpdates){let Et=Q.data.subarray(j*rt/Q.data.BYTES_PER_ELEMENT,(j+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,it,St,Et)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,it,St,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,it,St,Q.data);else if(x.isData3DTexture)O?(st&&e.texStorage3D(i.TEXTURE_3D,gt,_t,Q.width,Q.height,Q.depth),ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,it,St,Q.data)):e.texImage3D(i.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,it,St,Q.data);else if(x.isFramebufferTexture){if(st)if(O)e.texStorage2D(i.TEXTURE_2D,gt,_t,Q.width,Q.height);else{let rt=Q.width,j=Q.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,_t,rt,j,0,it,St,null),rt>>=1,j>>=1}}else if(Dt.length>0){if(O&&st){let rt=ct(Dt[0]);e.texStorage2D(i.TEXTURE_2D,gt,_t,rt.width,rt.height)}for(let rt=0,j=Dt.length;rt<j;rt++)at=Dt[rt],O?ht&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,it,St,at):e.texImage2D(i.TEXTURE_2D,rt,_t,it,St,at);x.generateMipmaps=!1}else if(O){if(st){let rt=ct(Q);e.texStorage2D(i.TEXTURE_2D,gt,_t,rt.width,rt.height)}ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it,St,Q)}else e.texImage2D(i.TEXTURE_2D,0,_t,it,St,Q);m(x)&&d(G),mt.__version=W.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function tt(v,x,F){if(x.image.length!==6)return;let G=Tt(v,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+F);let W=n.get(J);if(J.version!==W.__version||G===!0){e.activeTexture(i.TEXTURE0+F);let mt=ee.getPrimaries(ee.workingColorSpace),nt=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),wt=x.colorSpace===Jn||mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let $=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,it=[];for(let j=0;j<6;j++)!$&&!Q?it[j]=y(x.image[j],!0,s.maxCubemapSize):it[j]=Q?x.image[j].image:x.image[j],it[j]=Te(x,it[j]);let St=it[0],_t=r.convert(x.format,x.colorSpace),at=r.convert(x.type),Dt=M(x.internalFormat,_t,at,x.colorSpace),O=x.isVideoTexture!==!0,st=W.__version===void 0||G===!0,ht=J.dataReady,gt=b(x,St);pt(i.TEXTURE_CUBE_MAP,x);let rt;if($){O&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,St.width,St.height);for(let j=0;j<6;j++){rt=it[j].mipmaps;for(let Et=0;Et<rt.length;Et++){let Wt=rt[Et];x.format!==dn?_t!==null?O?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,Wt.width,Wt.height,_t,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Dt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,0,0,Wt.width,Wt.height,_t,at,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et,Dt,Wt.width,Wt.height,0,_t,at,Wt.data)}}}else{if(rt=x.mipmaps,O&&st){rt.length>0&&gt++;let j=ct(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Dt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,it[j].width,it[j].height,_t,at,it[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,it[j].width,it[j].height,0,_t,at,it[j].data);for(let Et=0;Et<rt.length;Et++){let me=rt[Et].image[j].image;O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,me.width,me.height,_t,at,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Dt,me.width,me.height,0,_t,at,me.data)}}else{O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t,at,it[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,_t,at,it[j]);for(let Et=0;Et<rt.length;Et++){let Wt=rt[Et];O?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,0,0,_t,at,Wt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Et+1,Dt,_t,at,Wt.image[j])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),W.__version=J.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function vt(v,x,F,G,J,W){let mt=r.convert(F.format,F.colorSpace),nt=r.convert(F.type),wt=M(F.internalFormat,mt,nt,F.colorSpace),$=n.get(x),Q=n.get(F);if(Q.__renderTarget=x,!$.__hasExternalTextures){let it=Math.max(1,x.width>>W),St=Math.max(1,x.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,W,wt,it,St,x.depth,0,mt,nt,null):e.texImage2D(J,W,wt,it,St,0,mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,Q.__webglTexture,0,fe(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(v,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,v),x.depthBuffer){let G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,W=_(x.stencilBuffer,J),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=fe(x);yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,W,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,v)}else{let G=x.textures;for(let J=0;J<G.length;J++){let W=G[J],mt=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),wt=M(W.internalFormat,mt,nt,W.colorSpace),$=fe(x);F&&yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,wt,x.width,x.height):yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,wt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,wt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);let J=G.__webglTexture,W=fe(x);if(x.depthTexture.format===es)yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===ps)yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Zt(v){let x=n.get(v),F=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){let G=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let G=v.texture.mipmaps;G&&G.length>0?At(x.__webglFramebuffer[0],v):At(x.__webglFramebuffer,v)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),zt(x.__webglDepthbuffer[G],v,!1);else{let J=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else{let G=v.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),zt(x.__webglDepthbuffer,v,!1);else{let J=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(v,x,F){let G=n.get(v);x!==void 0&&vt(G.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Zt(v)}function L(v){let x=v.texture,F=n.get(v),G=n.get(x);v.addEventListener("dispose",R);let J=v.textures,W=v.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)F.__webglFramebuffer[nt][wt]=i.createFramebuffer()}else F.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)F.__webglFramebuffer[nt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(mt)for(let nt=0,wt=J.length;nt<wt;nt++){let $=n.get(J[nt]);$.__webglTexture===void 0&&($.__webglTexture=i.createTexture(),o.memory.textures++)}if(v.samples>0&&yt(v)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let nt=0;nt<J.length;nt++){let wt=J[nt];F.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);let $=r.convert(wt.format,wt.colorSpace),Q=r.convert(wt.type),it=M(wt.internalFormat,$,Q,wt.colorSpace,v.isXRRenderTarget===!0),St=fe(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,F.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(F.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),pt(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)vt(F.__webglFramebuffer[nt][wt],v,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt);else vt(F.__webglFramebuffer[nt],v,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let nt=0,wt=J.length;nt<wt;nt++){let $=J[nt],Q=n.get($),it=i.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(it=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Q.__webglTexture),pt(it,$),vt(F.__webglFramebuffer,v,$,i.COLOR_ATTACHMENT0+nt,it,0),m($)&&d(it)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(nt=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,G.__webglTexture),pt(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)vt(F.__webglFramebuffer[wt],v,x,i.COLOR_ATTACHMENT0,nt,wt);else vt(F.__webglFramebuffer,v,x,i.COLOR_ATTACHMENT0,nt,0);m(x)&&d(nt),e.unbindTexture()}v.depthBuffer&&Zt(v)}function te(v){let x=v.textures;for(let F=0,G=x.length;F<G;F++){let J=x[F];if(m(J)){let W=S(v),mt=n.get(J).__webglTexture;e.bindTexture(W,mt),d(W),e.unbindTexture()}}}let Vt=[],Pt=[];function Mt(v){if(v.samples>0){if(yt(v)===!1){let x=v.textures,F=v.width,G=v.height,J=i.COLOR_BUFFER_BIT,W=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(v),nt=x.length>1;if(nt)for(let $=0;$<x.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let wt=v.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let $=0;$<x.length;$++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[$]);let Q=n.get(x[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,J,i.NEAREST),c===!0&&(Vt.length=0,Pt.length=0,Vt.push(i.COLOR_ATTACHMENT0+$),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Vt.push(W),Pt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let $=0;$<x.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,mt.__webglColorRenderbuffer[$]);let Q=n.get(x[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){let x=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function fe(v){return Math.min(s.maxSamples,v.samples)}function yt(v){let x=n.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function kt(v){let x=o.render.frame;u.get(v)!==x&&(u.set(v,x),v.update())}function Te(v,x){let F=v.colorSpace,G=v.format,J=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||F!==bi&&F!==Jn&&(ee.getTransfer(F)===ce?(G!==dn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function ct(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=L,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=yt}function _g(i,t){function e(n,s=Jn){let r,o=ee.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===dn)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===ms)return i.RED;if(n===So)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Eo||n===Ao||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Io||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Io)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Do||n===Lo||n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo||n===Vo||n===ko||n===Go||n===Ho||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Do)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===$o||n===Ko||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:xg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ec,d={},S=e.getContextAttributes(),M=null,_=null,b=[],E=[],R=new Rt,I=null,T=new Ue;T.viewport=new ae;let w=new Ue;w.viewport=new ae;let D=[T,w],C=new ro,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=b[Z];return tt===void 0&&(tt=new ss,b[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=b[Z];return tt===void 0&&(tt=new ss,b[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=b[Z];return tt===void 0&&(tt=new ss,b[Z]=tt),tt.getHandSpace()};function B(Z){let tt=E.indexOf(Z.inputSource);if(tt===-1)return;let vt=b[tt];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,l||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<b.length;Z++){let tt=E[Z];tt!==null&&(E[Z]=null,b[Z].disconnect(tt))}P=null,U=null,m.reset();for(let Z in d)delete d[Z];t.setRenderTarget(M),p=null,f=null,h=null,s=null,_=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,zt=null,At=null;S.depth&&(At=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?ps:es,zt=S.stencil?fs:hi);let Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new En(f.textureWidth,f.textureHeight,{format:dn,type:Sn,depthTexture:new Xs(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new En(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let tt=0;tt<Z.removed.length;tt++){let vt=Z.removed[tt],zt=E.indexOf(vt);zt>=0&&(E[zt]=null,b[zt].disconnect(vt))}for(let tt=0;tt<Z.added.length;tt++){let vt=Z.added[tt],zt=E.indexOf(vt);if(zt===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=E.length){E.push(vt),zt=Zt;break}else if(E[Zt]===null){E[Zt]=vt,zt=Zt;break}if(zt===-1)break}let At=b[zt];At&&At.connect(vt)}}let H=new N,Y=new N;function et(Z,tt,vt){H.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);let zt=H.distanceTo(Y),At=tt.projectionMatrix.elements,Zt=vt.projectionMatrix.elements,Le=At[14]/(At[10]-1),L=At[14]/(At[10]+1),te=(At[9]+1)/At[5],Vt=(At[9]-1)/At[5],Pt=(At[8]-1)/At[0],Mt=(Zt[8]+1)/Zt[0],fe=Le*Pt,yt=Le*Mt,kt=zt/(-Pt+Mt),Te=kt*-Pt;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Te),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let ct=Le+kt,v=L+kt,x=fe-Te,F=yt+(zt-Te),G=te*L/v*ct,J=Vt*L/v*ct;Z.projectionMatrix.makePerspective(x,F,G,J,ct,v),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let tt=Z.near,vt=Z.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),C.near=w.near=T.near=tt,C.far=w.far=T.far=vt,(P!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,U=C.far),C.layers.mask=Z.layers.mask|6,T.layers.mask=C.layers.mask&3,w.layers.mask=C.layers.mask&5;let zt=Z.parent,At=C.cameras;ot(C,zt);for(let Zt=0;Zt<At.length;Zt++)ot(At[Zt],zt);At.length===2?et(C,T,w):C.projectionMatrix.copy(T.projectionMatrix),pt(Z,C,zt)};function pt(Z,tt,vt){vt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return d[Z]};let Tt=null;function Qt(Z,tt){if(u=tt.getViewerPose(l||o),g=tt,u!==null){let vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let zt=!1;vt.length!==C.cameras.length&&(C.cameras.length=0,zt=!0);for(let L=0;L<vt.length;L++){let te=vt[L],Vt=null;if(p!==null)Vt=p.getViewport(te);else{let Mt=h.getViewSubImage(f,te);Vt=Mt.viewport,L===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(_))}let Pt=D[L];Pt===void 0&&(Pt=new Ue,Pt.layers.enable(L),Pt.viewport=new ae,D[L]=Pt),Pt.matrix.fromArray(te.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(te.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),L===0&&(C.matrix.copy(Pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),zt===!0&&C.cameras.push(Pt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let L=h.getDepthInformation(vt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(At&&At.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<vt.length;L++){let te=vt[L].camera;if(te){let Vt=d[te];Vt||(Vt=new qs,d[te]=Vt);let Pt=h.getCameraImage(te);Vt.sourceTexture=Pt}}}}for(let vt=0;vt<b.length;vt++){let zt=E[vt],At=b[vt];zt!==null&&At!==void 0&&At.update(zt,tt,l||o)}Tt&&Tt(Z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Bt=new Nh;Bt.setAnimationLoop(Qt),this.setAnimationLoop=function(Z){Tt=Z},this.dispose=function(){}}},Li=new hn,vg=new ue;function Mg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,hc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=t.get(d),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,Li.copy(_),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Li)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let _=M.program;n.uniformBlockBinding(S,_)}function l(S,M){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(S,b);let E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){let M=h();S.__bindingPointIndex=M;let _=i.createBuffer(),b=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],_=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=_.length;E<R;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let T=0,w=I.length;T<w;T++){let D=I[T];if(p(D,E,T,b)===!0){let C=D.__offset,P=Array.isArray(D.value)?D.value:[D.value],U=0;for(let B=0;B<P.length;B++){let z=P[B],K=y(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+U,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,_,b){let E=S.value,R=M+"_"+_;if(b[R]===void 0)return typeof E=="number"||typeof E=="boolean"?b[R]=E:b[R]=E.clone(),!0;{let I=b[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return b[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(S){let M=S.uniforms,_=0,b=16;for(let R=0,I=M.length;R<I;R++){let T=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,D=T.length;w<D;w++){let C=T[w],P=Array.isArray(C.value)?C.value:[C.value];for(let U=0,B=P.length;U<B;U++){let z=P[U],K=y(z),H=_%b,Y=H%K.boundary,et=H+Y;_+=Y,et!==0&&b-et<K.storage&&(_+=b-et),C.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=K.storage}}}let E=_%b;return E>0&&(_+=b-E),S.__size=_,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var ia=class{constructor(t={}){let{canvas:e=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,b=!1;this._outputColorSpace=Ee;let E=0,R=0,I=null,T=-1,w=null,D=new ae,C=new ae,P=null,U=new It(0),B=0,z=e.width,K=e.height,H=1,Y=null,et=null,ot=new ae(0,0,z,K),pt=new ae(0,0,z,K),Tt=!1,Qt=new os,Bt=!1,Z=!1,tt=new ue,vt=new N,zt=new ae,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Le(){return I===null?H:1}let L=n;function te(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),L===null){let V="webgl2";if(L=te(V,A),L===null)throw te(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Vt,Pt,Mt,fe,yt,kt,Te,ct,v,x,F,G,J,W,mt,nt,wt,$,Q,it,St,_t,at,Dt;function O(){Vt=new Vp(L),Vt.init(),_t=new _g(L,Vt),Pt=new Lp(L,Vt,t,_t),Mt=new mg(L,Vt),Pt.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),fe=new Hp(L),yt=new ng,kt=new gg(L,Vt,Mt,yt,Pt,_t,fe),Te=new Np(_),ct=new zp(_),v=new Zu(L),at=new Pp(L,v),x=new kp(L,v,fe,at),F=new Xp(L,x,v,fe),Q=new Wp(L,Pt,kt),nt=new Up(yt),G=new eg(_,Te,ct,Vt,Pt,at,nt),J=new Mg(_,yt),W=new sg,mt=new hg(Vt),$=new Ip(_,Te,ct,Mt,F,p,c),wt=new fg(_,F,Pt),Dt=new Sg(L,fe,Pt,Mt),it=new Dp(L,Vt,fe),St=new Gp(L,Vt,fe),fe.programs=G.programs,_.capabilities=Pt,_.extensions=Vt,_.properties=yt,_.renderLists=W,_.shadowMap=wt,_.state=Mt,_.info=fe}O();let st=new Ac(_,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=Vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(z,K,!1))},this.getSize=function(A){return A.set(z,K)},this.setSize=function(A,V,X=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,K=V,e.width=Math.floor(A*H),e.height=Math.floor(V*H),X===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(z*H,K*H).floor()},this.setDrawingBufferSize=function(A,V,X){z=A,K=V,H=X,e.width=Math.floor(A*X),e.height=Math.floor(V*X),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,V,X,q){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,V,X,q),Mt.viewport(D.copy(ot).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,V,X,q){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,V,X,q),Mt.scissor(C.copy(pt).multiplyScalar(H).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){Mt.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,X=!0){let q=0;if(A){let k=!1;if(I!==null){let lt=I.texture.format;k=lt===To||lt===bo||lt===So}if(k){let lt=I.texture.type,ft=lt===Sn||lt===hi||lt===us||lt===fs||lt===vo||lt===Mo,bt=$.getClearColor(),xt=$.getClearAlpha(),Ot=bt.r,Gt=bt.g,Lt=bt.b;ft?(g[0]=Ot,g[1]=Gt,g[2]=Lt,g[3]=xt,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Ot,y[1]=Gt,y[2]=Lt,y[3]=xt,L.clearBufferiv(L.COLOR,0,y))}else q|=L.COLOR_BUFFER_BIT}V&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),$.dispose(),W.dispose(),mt.dispose(),yt.dispose(),Te.dispose(),ct.dispose(),F.dispose(),at.dispose(),Dt.dispose(),G.dispose(),st.dispose(),st.removeEventListener("sessionstart",Tn),st.removeEventListener("sessionend",Xc),fi.stop()};function ht(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=fe.autoReset,V=wt.enabled,X=wt.autoUpdate,q=wt.needsUpdate,k=wt.type;O(),fe.autoReset=A,wt.enabled=V,wt.autoUpdate=X,wt.needsUpdate=q,wt.type=k}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function j(A){let V=A.target;V.removeEventListener("dispose",j),Et(V)}function Et(A){Wt(A),yt.remove(A)}function Wt(A){let V=yt.get(A).programs;V!==void 0&&(V.forEach(function(X){G.releaseProgram(X)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,X,q,k,lt){V===null&&(V=At);let ft=k.isMesh&&k.matrixWorld.determinant()<0,bt=iu(A,V,X,q,k);Mt.setMaterial(q,ft);let xt=X.index,Ot=1;if(q.wireframe===!0){if(xt=x.getWireframeAttribute(X),xt===void 0)return;Ot=2}let Gt=X.drawRange,Lt=X.attributes.position,Kt=Gt.start*Ot,he=(Gt.start+Gt.count)*Ot;lt!==null&&(Kt=Math.max(Kt,lt.start*Ot),he=Math.min(he,(lt.start+lt.count)*Ot)),xt!==null?(Kt=Math.max(Kt,0),he=Math.min(he,xt.count)):Lt!=null&&(Kt=Math.max(Kt,0),he=Math.min(he,Lt.count));let we=he-Kt;if(we<0||we===1/0)return;at.setup(k,q,bt,X,xt);let xe,pe=it;if(xt!==null&&(xe=v.get(xt),pe=St,pe.setIndex(xe)),k.isMesh)q.wireframe===!0?(Mt.setLineWidth(q.wireframeLinewidth*Le()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(k.isLine){let Ut=q.linewidth;Ut===void 0&&(Ut=1),Mt.setLineWidth(Ut*Le()),k.isLineSegments?pe.setMode(L.LINES):k.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else k.isPoints?pe.setMode(L.POINTS):k.isSprite&&pe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))pe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ut=k._multiDrawStarts,ve=k._multiDrawCounts,ie=k._multiDrawCount,tn=xt?v.get(xt).bytesPerElement:1,Vi=yt.get(q).currentProgram.getUniforms();for(let en=0;en<ie;en++)Vi.setValue(L,"_gl_DrawID",en),pe.render(Ut[en]/tn,ve[en])}else if(k.isInstancedMesh)pe.renderInstances(Kt,we,k.count);else if(X.isInstancedBufferGeometry){let Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,Ut);pe.renderInstances(Kt,we,ve)}else pe.render(Kt,we)};function me(A,V,X){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Ne,A.needsUpdate=!0,fr(A,V,X),A.side=Hn,A.needsUpdate=!0,fr(A,V,X),A.side=Ie):fr(A,V,X)}this.compile=function(A,V,X=null){X===null&&(X=A),d=mt.get(X),d.init(V),M.push(d),X.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),A!==X&&A.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();let q=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let lt=k.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){let bt=lt[ft];me(bt,X,k),q.add(bt)}else me(lt,X,k),q.add(lt)}),d=M.pop(),q},this.compileAsync=function(A,V,X=null){let q=this.compile(A,V,X);return new Promise(k=>{function lt(){if(q.forEach(function(ft){yt.get(ft).currentProgram.isReady()&&q.delete(ft)}),q.size===0){k(A);return}setTimeout(lt,10)}Vt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let se=null;function Fn(A){se&&se(A)}function Tn(){fi.stop()}function Xc(){fi.start()}let fi=new Nh;fi.setAnimationLoop(Fn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(A){se=A,st.setAnimationLoop(A),A===null?fi.stop():fi.start()},st.addEventListener("sessionstart",Tn),st.addEventListener("sessionend",Xc),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(V),V=st.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,I),d=mt.get(A,M.length),d.init(V),M.push(d),tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Qt.setFromProjectionMatrix(tt,_n,V.reversedDepth),Z=this.localClippingEnabled,Bt=nt.init(this.clippingPlanes,Z),m=W.get(A,S.length),m.init(),S.push(m),st.enabled===!0&&st.isPresenting===!0){let lt=_.xr.getDepthSensingMesh();lt!==null&&fa(lt,V,-1/0,_.sortObjects)}fa(A,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Y,et),Zt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Zt&&$.addToRenderList(m,A),this.info.render.frame++,Bt===!0&&nt.beginShadows();let X=d.state.shadowsArray;wt.render(X,A,V),Bt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,k=m.transmissive;if(d.setupLights(),V.isArrayCamera){let lt=V.cameras;if(k.length>0)for(let ft=0,bt=lt.length;ft<bt;ft++){let xt=lt[ft];Yc(q,k,A,xt)}Zt&&$.render(A);for(let ft=0,bt=lt.length;ft<bt;ft++){let xt=lt[ft];qc(m,A,xt,xt.viewport)}}else k.length>0&&Yc(q,k,A,V),Zt&&$.render(A),qc(m,A,V);I!==null&&R===0&&(kt.updateMultisampleRenderTarget(I),kt.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,V),at.resetDefaultState(),T=-1,w=null,M.pop(),M.length>0?(d=M[M.length-1],Bt===!0&&nt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function fa(A,V,X,q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){q&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tt);let ft=F.update(A),bt=A.material;bt.visible&&m.push(A,ft,bt,X,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){let ft=F.update(A),bt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),zt.copy(ft.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(tt)),Array.isArray(bt)){let xt=ft.groups;for(let Ot=0,Gt=xt.length;Ot<Gt;Ot++){let Lt=xt[Ot],Kt=bt[Lt.materialIndex];Kt&&Kt.visible&&m.push(A,ft,Kt,X,zt.z,Lt)}}else bt.visible&&m.push(A,ft,bt,X,zt.z,null)}}let lt=A.children;for(let ft=0,bt=lt.length;ft<bt;ft++)fa(lt[ft],V,X,q)}function qc(A,V,X,q){let k=A.opaque,lt=A.transmissive,ft=A.transparent;d.setupLightsView(X),Bt===!0&&nt.setGlobalState(_.clippingPlanes,X),q&&Mt.viewport(D.copy(q)),k.length>0&&dr(k,V,X),lt.length>0&&dr(lt,V,X),ft.length>0&&dr(ft,V,X),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Yc(A,V,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new En(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ds:Sn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let lt=d.state.transmissionRenderTarget[q.id],ft=q.viewport||D;lt.setSize(ft.z*_.transmissionResolutionScale,ft.w*_.transmissionResolutionScale);let bt=_.getRenderTarget(),xt=_.getActiveCubeFace(),Ot=_.getActiveMipmapLevel();_.setRenderTarget(lt),_.getClearColor(U),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Zt&&$.render(X);let Gt=_.toneMapping;_.toneMapping=Zn;let Lt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),Bt===!0&&nt.setGlobalState(_.clippingPlanes,q),dr(A,X,q),kt.updateMultisampleRenderTarget(lt),kt.updateRenderTargetMipmap(lt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let he=0,we=V.length;he<we;he++){let xe=V[he],pe=xe.object,Ut=xe.geometry,ve=xe.material,ie=xe.group;if(ve.side===Ie&&pe.layers.test(q.layers)){let tn=ve.side;ve.side=Ne,ve.needsUpdate=!0,Zc(pe,X,q,Ut,ve,ie),ve.side=tn,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(kt.updateMultisampleRenderTarget(lt),kt.updateRenderTargetMipmap(lt))}_.setRenderTarget(bt,xt,Ot),_.setClearColor(U,B),Lt!==void 0&&(q.viewport=Lt),_.toneMapping=Gt}function dr(A,V,X){let q=V.isScene===!0?V.overrideMaterial:null;for(let k=0,lt=A.length;k<lt;k++){let ft=A[k],bt=ft.object,xt=ft.geometry,Ot=ft.group,Gt=ft.material;Gt.allowOverride===!0&&q!==null&&(Gt=q),bt.layers.test(X.layers)&&Zc(bt,V,X,xt,Gt,Ot)}}function Zc(A,V,X,q,k,lt){A.onBeforeRender(_,V,X,q,k,lt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(_,V,X,q,A,lt),k.transparent===!0&&k.side===Ie&&k.forceSinglePass===!1?(k.side=Ne,k.needsUpdate=!0,_.renderBufferDirect(X,V,q,k,A,lt),k.side=Hn,k.needsUpdate=!0,_.renderBufferDirect(X,V,q,k,A,lt),k.side=Ie):_.renderBufferDirect(X,V,q,k,A,lt),A.onAfterRender(_,V,X,q,k,lt)}function fr(A,V,X){V.isScene!==!0&&(V=At);let q=yt.get(A),k=d.state.lights,lt=d.state.shadowsArray,ft=k.state.version,bt=G.getParameters(A,k.state,lt,V,X),xt=G.getProgramCacheKey(bt),Ot=q.programs;q.environment=A.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(A.isMeshStandardMaterial?ct:Te).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",j),Ot=new Map,q.programs=Ot);let Gt=Ot.get(xt);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===ft)return $c(A,bt),Gt}else bt.uniforms=G.getUniforms(A),A.onBeforeCompile(bt,_),Gt=G.acquireProgram(bt,xt),Ot.set(xt,Gt),q.uniforms=bt.uniforms;let Lt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=nt.uniform),$c(A,bt),q.needsLights=ru(A),q.lightsStateVersion=ft,q.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function Jc(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=xs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function $c(A,V){let X=yt.get(A);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function iu(A,V,X,q,k){V.isScene!==!0&&(V=At),kt.resetTextureUnits();let lt=V.fog,ft=q.isMeshStandardMaterial?V.environment:null,bt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bi,xt=(q.isMeshStandardMaterial?ct:Te).get(q.envMap||ft),Ot=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,he=!!X.morphAttributes.color,we=Zn;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(we=_.toneMapping);let xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=xe!==void 0?xe.length:0,Ut=yt.get(q),ve=d.state.lights;if(Bt===!0&&(Z===!0||A!==w)){let qe=A===w&&q.id===T;nt.setState(q,A,qe)}let ie=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ve.state.version||Ut.outputColorSpace!==bt||k.isBatchedMesh&&Ut.batching===!1||!k.isBatchedMesh&&Ut.batching===!0||k.isBatchedMesh&&Ut.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ut.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ut.instancing===!1||!k.isInstancedMesh&&Ut.instancing===!0||k.isSkinnedMesh&&Ut.skinning===!1||!k.isSkinnedMesh&&Ut.skinning===!0||k.isInstancedMesh&&Ut.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ut.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ut.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ut.instancingMorph===!1&&k.morphTexture!==null||Ut.envMap!==xt||q.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==nt.numPlanes||Ut.numIntersection!==nt.numIntersection)||Ut.vertexAlphas!==Ot||Ut.vertexTangents!==Gt||Ut.morphTargets!==Lt||Ut.morphNormals!==Kt||Ut.morphColors!==he||Ut.toneMapping!==we||Ut.morphTargetsCount!==pe)&&(ie=!0):(ie=!0,Ut.__version=q.version);let tn=Ut.currentProgram;ie===!0&&(tn=fr(q,V,k));let Vi=!1,en=!1,bs=!1,Me=tn.getUniforms(),on=Ut.uniforms;if(Mt.useProgram(tn.program)&&(Vi=!0,en=!0,bs=!0),q.id!==T&&(T=q.id,en=!0),Vi||w!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Me.setValue(L,"projectionMatrix",A.projectionMatrix),Me.setValue(L,"viewMatrix",A.matrixWorldInverse);let Je=Me.map.cameraPosition;Je!==void 0&&Je.setValue(L,vt.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,en=!0,bs=!0)}if(k.isSkinnedMesh){Me.setOptional(L,k,"bindMatrix"),Me.setOptional(L,k,"bindMatrixInverse");let qe=k.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Me.setValue(L,"boneTexture",qe.boneTexture,kt))}k.isBatchedMesh&&(Me.setOptional(L,k,"batchingTexture"),Me.setValue(L,"batchingTexture",k._matricesTexture,kt),Me.setOptional(L,k,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",k._indirectTexture,kt),Me.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",k._colorsTexture,kt));let an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Q.update(k,X,tn),(en||Ut.receiveShadow!==k.receiveShadow)&&(Ut.receiveShadow=k.receiveShadow,Me.setValue(L,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(on.envMap.value=xt,on.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(on.envMapIntensity.value=V.environmentIntensity),en&&(Me.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&su(on,bs),lt&&q.fog===!0&&J.refreshFogUniforms(on,lt),J.refreshMaterialUniforms(on,q,H,K,d.state.transmissionRenderTarget[A.id]),xs.upload(L,Jc(Ut),on,kt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(xs.upload(L,Jc(Ut),on,kt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Me.setValue(L,"center",k.center),Me.setValue(L,"modelViewMatrix",k.modelViewMatrix),Me.setValue(L,"normalMatrix",k.normalMatrix),Me.setValue(L,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let qe=q.uniformsGroups;for(let Je=0,pa=qe.length;Je<pa;Je++){let pi=qe[Je];Dt.update(pi,tn),Dt.bind(pi,tn)}}return tn}function su(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function ru(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,X){let q=yt.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),yt.get(A.texture).__webglTexture=V,yt.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let X=yt.get(A);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};let ou=L.createFramebuffer();this.setRenderTarget=function(A,V=0,X=0){I=A,E=V,R=X;let q=!0,k=null,lt=!1,ft=!1;if(A){let xt=yt.get(A);if(xt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(xt.__webglFramebuffer===void 0)kt.setupRenderTarget(A);else if(xt.__hasExternalTextures)kt.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Lt=A.depthTexture;if(xt.__boundDepthTexture!==Lt){if(Lt!==null&&yt.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(A)}}let Ot=A.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);let Gt=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[V])?k=Gt[V][X]:k=Gt[V],lt=!0):A.samples>0&&kt.useMultisampledRTT(A)===!1?k=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[X]:k=Gt,D.copy(A.viewport),C.copy(A.scissor),P=A.scissorTest}else D.copy(ot).multiplyScalar(H).floor(),C.copy(pt).multiplyScalar(H).floor(),P=Tt;if(X!==0&&(k=ou),Mt.bindFramebuffer(L.FRAMEBUFFER,k)&&q&&Mt.drawBuffers(A,k),Mt.viewport(D),Mt.scissor(C),Mt.setScissorTest(P),lt){let xt=yt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,xt.__webglTexture,X)}else if(ft){let xt=V;for(let Ot=0;Ot<A.textures.length;Ot++){let Gt=yt.get(A.textures[Ot]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ot,Gt.__webglTexture,X,xt)}}else if(A!==null&&X!==0){let xt=yt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(A,V,X,q,k,lt,ft,bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){Mt.bindFramebuffer(L.FRAMEBUFFER,xt);try{let Ot=A.textures[bt],Gt=Ot.format,Lt=Ot.type;if(!Pt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-q&&X>=0&&X<=A.height-k&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(V,X,q,k,_t.convert(Gt),_t.convert(Lt),lt))}finally{let Ot=I!==null?yt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,V,X,q,k,lt,ft,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt)if(V>=0&&V<=A.width-q&&X>=0&&X<=A.height-k){Mt.bindFramebuffer(L.FRAMEBUFFER,xt);let Ot=A.textures[bt],Gt=Ot.format,Lt=Ot.type;if(!Pt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.bufferData(L.PIXEL_PACK_BUFFER,lt.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(V,X,q,k,_t.convert(Gt),_t.convert(Lt),0);let he=I!==null?yt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,he);let we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ch(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,lt),L.deleteBuffer(Kt),L.deleteSync(we),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,X=0){let q=Math.pow(2,-X),k=Math.floor(A.image.width*q),lt=Math.floor(A.image.height*q),ft=V!==null?V.x:0,bt=V!==null?V.y:0;kt.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ft,bt,k,lt),Mt.unbindTexture()};let au=L.createFramebuffer(),cu=L.createFramebuffer();this.copyTextureToTexture=function(A,V,X=null,q=null,k=0,lt=null){lt===null&&(k!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=k,k=0):lt=0);let ft,bt,xt,Ot,Gt,Lt,Kt,he,we,xe=A.isCompressedTexture?A.mipmaps[lt]:A.image;if(X!==null)ft=X.max.x-X.min.x,bt=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,Ot=X.min.x,Gt=X.min.y,Lt=X.isBox3?X.min.z:0;else{let an=Math.pow(2,-k);ft=Math.floor(xe.width*an),bt=Math.floor(xe.height*an),A.isDataArrayTexture?xt=xe.depth:A.isData3DTexture?xt=Math.floor(xe.depth*an):xt=1,Ot=0,Gt=0,Lt=0}q!==null?(Kt=q.x,he=q.y,we=q.z):(Kt=0,he=0,we=0);let pe=_t.convert(V.format),Ut=_t.convert(V.type),ve;V.isData3DTexture?(kt.setTexture3D(V,0),ve=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(kt.setTexture2DArray(V,0),ve=L.TEXTURE_2D_ARRAY):(kt.setTexture2D(V,0),ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let ie=L.getParameter(L.UNPACK_ROW_LENGTH),tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vi=L.getParameter(L.UNPACK_SKIP_PIXELS),en=L.getParameter(L.UNPACK_SKIP_ROWS),bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt);let Me=A.isDataArrayTexture||A.isData3DTexture,on=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let an=yt.get(A),qe=yt.get(V),Je=yt.get(an.__renderTarget),pa=yt.get(qe.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let pi=0;pi<xt;pi++)Me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(A).__webglTexture,k,Lt+pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(V).__webglTexture,lt,we+pi)),L.blitFramebuffer(Ot,Gt,ft,bt,Kt,he,ft,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||yt.has(A)){let an=yt.get(A),qe=yt.get(V);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,au),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,cu);for(let Je=0;Je<xt;Je++)Me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,k,Lt+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,k),on?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,lt,we+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,lt),k!==0?L.blitFramebuffer(Ot,Gt,ft,bt,Kt,he,ft,bt,L.COLOR_BUFFER_BIT,L.NEAREST):on?L.copyTexSubImage3D(ve,lt,Kt,he,we+Je,Ot,Gt,ft,bt):L.copyTexSubImage2D(ve,lt,Kt,he,Ot,Gt,ft,bt);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else on?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(ve,lt,Kt,he,we,ft,bt,xt,pe,Ut,xe.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,lt,Kt,he,we,ft,bt,xt,pe,xe.data):L.texSubImage3D(ve,lt,Kt,he,we,ft,bt,xt,pe,Ut,xe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,lt,Kt,he,ft,bt,pe,Ut,xe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,lt,Kt,he,xe.width,xe.height,pe,xe.data):L.texSubImage2D(L.TEXTURE_2D,lt,Kt,he,ft,bt,pe,Ut,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ie),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,en),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),lt===0&&V.generateMipmaps&&L.generateMipmap(ve),Mt.unbindTexture()},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&kt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?kt.setTextureCube(A,0):A.isData3DTexture?kt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?kt.setTexture2DArray(A,0):kt.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,Mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var ra=class extends Xn{constructor(){super();let t=new un;t.deleteAttribute("uv");let e=new de({side:Ne}),n=new de,s=new Qs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ht(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new qn(t,n,6),a=new Se;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ht(t,Ms(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ht(t,Ms(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Ht(t,Ms(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ht(t,Ms(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Ht(t,Ms(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ht(t,Ms(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ms(i){return new $s({color:0,emissive:16777215,emissiveIntensity:i})}var{HALF_ROAD:oe}=window.Kart,{clamp:Pn,lerp:hr,roadAt:Pe,wrap:Vh,brakingZones:bg,sceneryShade:Tg,trackLandmarks:Ln,trackVisualCue:wg,cupCourses:Eg,cornerWeight:Ag,coastWaterHeight:oa}=window.Kart,Ce=new un,Cg=new N(0,1,0),lr=new Se,Fi=new It,kh=new It("#b89a86"),Nt=i=>{let t=Math.sin(i*17.457+37.23)*47071.161;return t-Math.floor(t)},Rg={sunset:{top:"#3c5f91",horizon:"#efb787",fog:"#8493b8",ground:"#9d6046",road:"#4c4856",shoulder:"#a47159",rail:"#b6a189",light:"#ffd09b",ambient:"#b0c7ff",sign:"#ffbb62"},coast:{top:"#21639f",horizon:"#f3d4ad",fog:"#b3c9c9",ground:"#73865d",road:"#43525a",shoulder:"#b0aa89",rail:"#d4dada",light:"#ffe3b4",ambient:"#a6d7ff",sign:"#5be5f0"},city:{top:"#101e42",horizon:"#515783",fog:"#252c47",ground:"#3c4353",road:"#454b61",shoulder:"#5e657a",rail:"#8fa1bc",light:"#f3c8b1",ambient:"#8ba4eb",sign:"#c795ff"},zootopia:{top:"#121a38",horizon:"#7b4b70",fog:"#2a2d4a",ground:"#3a4650",road:"#343a50",shoulder:"#6a5a68",rail:"#9fb3c8",light:"#ffc08a",ambient:"#93a7e8",sign:"#ffb45e"},switchback:{top:"#3e5e88",horizon:"#e8ad89",fog:"#a991a9",ground:"#956050",road:"#535160",shoulder:"#ad7b60",rail:"#d8bc9c",light:"#ffd4ad",ambient:"#a2b6e9",sign:"#ffd490"},caldera:{top:"#22233c",horizon:"#a96860",fog:"#68617b",ground:"#50434b",road:"#484751",shoulder:"#6b4c56",rail:"#d08f75",light:"#ffd0a8",ambient:"#adacd8",sign:"#ffba73"},ice:{top:"#497db3",horizon:"#c1e4ef",fog:"#b5c9e3",ground:"#b5c9d9",road:"#536c87",shoulder:"#8baebd",rail:"#d8eef2",light:"#fff1db",ambient:"#a4d1ff",sign:"#a2efff"}};function jt(i,t=.85){return new de({color:i,roughness:t})}function Ig(){let i=new Uint8Array(65536);for(let e=0;e<i.length;e+=4){let n=Math.floor(169+Nt(e)*75);i.set([n,n,n,255],e)}let t=new ai(i,128,128);return t.wrapS=t.wrapT=Si,t.magFilter=Ye,t.minFilter=Mn,t.generateMipmaps=!0,t.needsUpdate=!0,t}var Gh=Ig();function Pg(){let t=new Uint8Array(262144),e=(s,r,o)=>{let a=s*o,c=r*o,l=Math.floor(a),u=Math.floor(c),h=(a-l)**2*(3-2*(a-l)),f=(c-u)**2*(3-2*(c-u)),p=(g,y)=>Nt(Vh(g,o)*35.7+Vh(y,o)*17.23+o);return hr(hr(p(l,u),p(l+1,u),h),hr(p(l,u+1),p(l+1,u+1),h),f)};for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/256,a=s/256,c=a*8+e(o,a,3)*.36,l=.5+.5*Math.sin(c*Math.PI*2),u=Math.pow(.5+.5*Math.sin((c*2+.18)*Math.PI*2),12),h=127+53*e(o,a,6)+32*e(o,a,24)+22*e(o,a,69)+31*l-24*u+14*Nt(r*256+s);t.set([h,h*.96,h*.91,255],(s*256+r)*4)}let n=new ai(t,256,256);return n.wrapS=n.wrapT=Si,n.magFilter=Ye,n.minFilter=Mn,n.generateMipmaps=!0,n.needsUpdate=!0,n}var Ic=Pg();function Dg(){let i=[],t=[],e=[],s=[[-.55,1.05],[-.34,1.06],[-.18,.94],[-.08,.94],[.11,.76],[.22,.78],[.32,.61],[.49,.58],[.53,.44]];for(let[a,[c,l]]of s.entries())for(let u=0;u<=13;u++){let h=u%13,f=h/13*Math.PI*2,p=l*(.81+Nt(h*11)*.35)*(1+.15*Math.sin(h*3.9+a*.24));if(i.push(Math.cos(f)*p+.11*c,c+(Nt(h*14+a*.2)-.5)*.06,Math.sin(f)*p-.25*c),t.push(u/13*2,a/(s.length-1)),a<s.length-1&&u<13){let g=a*14+u,y=g+13+1;e.push(g,y,g+1,g+1,y,y+1)}}let r=(s.length-1)*14;for(let a=1;a<12;a++)e.push(r,r+a+1,r+a);let o=new le;return o.setAttribute("position",new qt(i,3)),o.setAttribute("uv",new qt(t,2)),o.setIndex(e),o.computeVertexNormals(),o}function Lg(i,t){let e=new Ht(new wi(1400,24,12),new ke({side:Ne,depthWrite:!1,uniforms:{sky:{value:new It(i.top)},horizon:{value:new It(i.horizon)},night:{value:+((t.id==="city"||t.id==="zootopia"))},sunDirection:{value:new N(...t.id==="sunset"?[-.91,.15,-.35]:[.69,.23,-.42]).normalize()}},vertexShader:"varying vec3 v; void main(){v=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 sky,horizon,sunDirection; uniform float night; varying vec3 v;
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
      void main(){ vec3 d=normalize(v); float y=max(d.y,0.); vec3 base=mix(horizon,sky,smoothstep(-.03,.75,y));
        float a=max(0.,dot(d,sunDirection));
        float n=noise(d.xz/(.18+y)*6.)*.70+noise(d.xz/(.18+y)*17.)*.30;
        base=mix(base,mix(vec3(.90,.79,.70),vec3(.15,.19,.32),night),smoothstep(.53,.82,n)*smoothstep(.01,.28,y)*mix(.54,.33,night));
        base+=vec3(1.0,.52,.20)*pow(a,28.)*.38*(1.-night)+vec3(3.0,1.9,.95)*smoothstep(.99915,.99952,a)*(1.-night);
        gl_FragColor=vec4(base,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return e.renderOrder=-100,e}function Hh(i,t,e,n,s){let r=new qn(t,e,n.length);for(let[o,a]of n.entries())lr.position.set(...a.p),lr.scale.set(...a.s),lr.rotation.set(0,a.yaw||0,a.roll||0,"YXZ"),lr.updateMatrix(),r.setMatrixAt(o,lr.matrix),a.color&&r.setColorAt(o,Fi.set(a.color));r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),i.add(r),s&&(i.userData.detailBatches??=[],i.userData.detailBatches.push({mesh:r,range:r.boundingSphere.radius+s}))}function re(i,t,e,n,s=0){if(!n.length)return;let r=(t.index?.count??t.attributes.position.count)/3;if(!s&&(n.length<=128||n.length*r<9500)){Hh(i,t,e,n);return}let o=new Map,a=s?130:260;for(let c of n){let l=`${Math.floor(c.p[0]/a)},${Math.floor(c.p[2]/a)}`;o.has(l)||o.set(l,[]),o.get(l).push(c)}for(let c of o.values())Hh(i,t,e,c,s)}function Dn(i,t,e,n,s){let r=e.clone().sub(t),o=new Ht(Ce,n);o.position.copy(t).addScaledVector(r,.5),o.scale.set(s,r.length(),s),o.quaternion.setFromUnitVectors(Cg,r.normalize()),i.add(o)}function Ug(i,t,e){if(t.id==="coast"){let n=jt("#e0e3d9",.46),s=jt("#90acbc",.45),r=jt("#486575",.52),o=new $t({color:"#c5f4ff"}),a=new $t({color:"#ff825f"}),{headland:c,bridgeMouth:l,bridgeFirst:u,bridgeLast:h}=Ln.coast;for(let S of[u,h]){let M=t.length*S,_=Pe(t,M),b=[];for(let E of[-1,1]){let R=ut(_,E*10.6,-2.8),I=ut(_,E*8.24,23.2);Dn(i,R,I,n,1.55),Dn(i,ut(_,E*10.28,.6),ut(_,E*8.11,23.32),r,.38),Dn(i,ut(_,E*10,3),ut(_,E*8.22,22.6),o,.105),Dn(i,I,ut(_,E*8.17,24.65),a,.18),b.push(I);for(let w of[-79,-63,-47,-32,-17,17,32,47,63,79]){let D=Pe(t,M+w),C=I.clone().add(new N(0,-Math.abs(w)*.048,0)),P=D.rail*oe,U=ut(D,E*(P+1.22),1.14),B=ut(D,E*(P+.025),-.39);Dn(i,B,U,r,.39),Dn(i,C,U,s,.14)}let T=ut(_,E*10.2,0);T.y=oa-3.5,Dn(i,T,ut(_,E*10.1,-.3),r,2.35)}Dn(i,b[0],b[1],n,1.38),Dn(i,ut(_,-8.77,18.1),ut(_,8.77,18.1),r,1.03),Dn(i,ut(_,-8.77,18.44),ut(_,8.77,18.44),o,.1)}let f=[],p=[];for(let S=-2;S<=4;S++){let M=Pe(t,t.length*l+S*12),_=Math.atan2(M.fx,M.fz);for(let b of[-1,1]){let E=b*(M.rail*oe+.36);p.push({p:[...ut(M,E,1.13)],s:[.21,2.32,.29],yaw:_}),f.push({p:[...ut(M,E,2.23)],s:[.31,.3,.37],yaw:_,color:S<2?"#ffd795":"#9df2f4"})}}let g=Pe(t,t.length*c),y=ut(g,25,0),[m,d]=e.nearest(y.x,y.z);if(m>20){y.y=Math.max(-13.5,e.heightAt(y.x,y.z,m,d));for(let[S,M,_,b]of[[1.1,5.1,2.6,"#7b8583"],[5.5,2.5,7.8,"#e1e3d7"],[8.9,2.6,1.4,"#bd5d4f"],[10.2,3.25,1.05,"#ede2cc"],[12.1,2.7,.86,"#b34d44"]]){let E=new Ht(new Cn(M*.44,M*.5,_,10),jt(b));E.position.copy(y),E.position.y+=S,i.add(E)}f.push({p:[y.x,y.y+11.22,y.z],s:[2.12,.91,2.12],color:"#f8dba3"})}re(i,Ce,r,p),re(i,Ce,new $t({color:"#ffffff"}),f);return}if((t.id==="city"||t.id==="zootopia")){let h=function(M,_,b,E,R,I,T){let w=Pe(t,M),D=ut(w,_*b,-w.elevation-10);if(e.nearest(D.x,D.z)[0]<Math.hypot(E,R)*.58+13)return;let C=Math.atan2(w.fx,w.fz);for(let[P,U,B]of[[0,1,.27],[.27,.84,.46],[.73,.63,.27]]){o.push({p:[D.x,D.y+I*(P+B*.5),D.z],s:[E*U,I*B,R*U],yaw:C,color:T});let z=I*(P+B*.77);a.push({p:[D.x,D.y+z,D.z],s:[E*U*1.012,.41,R*U*1.01],yaw:C,color:_===1?"#94cdef":"#f6a66e"})}},n=[],s=[],r=[],o=[],a=[],{offices:c,service:l,interchange:u}=Ln.city;for(let[M,_,b,E,R]of[[-47,1,19,26,48],[-12,-1,23,27,63],[26,1,28,28,77],[63,-1,19,22,40]])h(c*t.length+M,_,37,b,E,R,_===1?"#485b75":"#4d435c");let f=t.length*l;for(let M=0;M<13;M++){let _=Pe(t,f+M*5.2),b=Math.atan2(_.fx,_.fz),E=M<8;for(let R of[-1,1])n.push({p:[...ut(_,R*11.1,3.6)],s:[M===0?1.12:.48,8.4,M===0?1.4:.44],yaw:b}),s.push({p:[...ut(_,R*10.49,2.38)],s:[.13,M===0?.37:.22,M===0?3.1:2.65],yaw:b,color:E?"#ffd09b":"#77dffb"}),M<12&&r.push({p:[...ut(_,R*11.4,5.9)],s:[.24,3.9,5.7],yaw:b,color:E?"#80605b":"#485269"});n.push({p:[...ut(_,0,8.35)],s:[22.5,M===0?1.1:.45,M===0?1.46:.62],yaw:b}),s.push({p:[...ut(_,0,M===0?7.76:8.05)],s:[M===0?20:15,.12,M===0?.59:.38],yaw:b,color:E?"#ffce9a":"#a1dafa"})}for(let M of[2628,2686,2734]){let _=Pe(t,M),b=Math.atan2(_.fx,_.fz);for(let E of[-1,1]){let R=E*(_.rail+.175)*oe;n.push({p:[...ut(_,R,2.25)],s:[.28,4.6,.52],yaw:b}),s.push({p:[...ut(_,R,4.57)],s:[.54,.39,.75],yaw:b,color:"#ffd199"})}}let p=Pe(t,t.length*u),g=[],y=[],m=[],d=[];for(let M=-4;M<=4;M++){let _=M*11,b=ut(p,_,11+M*.2);b.addScaledVector(new N(p.fx,0,p.fz),7+_*_*.009),d.push(b);let E=Math.atan2(p.fx,p.fz);Math.abs(M)>1&&e.nearest(b.x,b.z)[0]>16&&g.push({p:[b.x,(b.y-10)*.5,b.z],s:[1.6,b.y+10,2.3],yaw:E,color:"#434b61"})}let S=d.map((M,_)=>{let b=d[Math.max(0,_-1)],E=d[Math.min(d.length-1,_+1)],R=new N(E.z-b.z,0,b.x-E.x).normalize(),I=M.clone().addScaledVector(R,-2.77),T=M.clone().addScaledVector(R,2.77);return[I,T,I.clone().add(new N(0,-1.04,0)),T.clone().add(new N(0,-1.04,0))]});for(let M=0;M<S.length-1;M++){let[_,b,E,R]=S[M],[I,T,w,D]=S[M+1];for(let[C,P,U,B]of[[_,I,T,b],[E,R,D,w],[_,E,w,I],[b,T,D,R]])y.push(...C,...P,...U,...C,...U,...B);for(let[C,P]of[[_,I],[b,T]]){let U=C.clone();U.y-=.17;let B=P.clone();B.y-=.17,m.push(...C,...U,...B,...C,...B,...P)}}for(let[M,_]of[[y,jt("#5a6177",.68)],[m,new $t({color:"#a7b4ce"})]]){let b=new le;b.setAttribute("position",new qt(M,3)),b.computeVertexNormals(),_.side=Ie,i.add(new Ht(b,_))}re(i,Ce,jt("#ffffff",.52),[...r,...o,...g]),re(i,Ce,jt("#43465d",.63),n),re(i,Ce,new $t({color:"#ffffff"}),[...s,...a]);return}if(t.id==="sunset"){let n=Pe(t,t.length*Ln.sunset.arch),s=jt("#bc7957");s.map=Ic,s.side=Ie;let r=[],o=[],a=[],c=33,l=12;for(let h=0;h<c;h++){let f=h*Math.PI/(c-1),p=Math.cos(f)*18.5,g=Math.sin(f)*11.2-.35,y=Math.cos(f)*11.2,m=Math.sin(f)*18.5,d=Math.hypot(y,m),S=2.22+.83*Math.sin(f*3+.25)**2+.36*Math.sin(f*16);for(let M=0;M<=l;M++){let _=M%l/l*Math.PI*2,b=S*(.85+.21*Nt(M%l*7+h*.35)),E=p+y/d*Math.cos(_)*b,R=g+m/d*Math.cos(_)*b,I=Math.sin(_)*b*1.55+Math.sin(f*4)*1.1,T=ut(n,E,R);if(r.push(T.x+n.fx*I,T.y,T.z+n.fz*I),o.push(h/(c-1)*2.2,M/l*1.3),h<c-1&&M<l){let w=h*(l+1)+M,D=w+l+1;a.push(w,D,w+1,w+1,D,D+1)}}}let u=new le;u.setAttribute("position",new qt(r,3)),u.setAttribute("uv",new qt(o,2)),u.setIndex(a),u.computeVertexNormals(),i.add(new Ht(u,s))}}function ut(i,t=0,e=0){return new N(i.x+i.rx*t,i.elevation+i.bank*t+e,i.z+i.rz*t)}function ge(i,t,e=0){return ut(i,t*oe*i.width,e)}function Ng(i,t,e,n){let s=[],r=[],o=[],a=[],c=[],l=[],u=[],h=[],f=[],p=[],g=[[],[]],y=[],m=[],d=[],S=[],M=[],_=[],b=[],E=[],R=[],I=[],T=[],w=new It("#ffc180"),D=new It("#84dbff"),C=[],P=[],U=[],B=[],z=[],K=[],H=[],Y=[],et=[],ot=new Map;function pt(ct,v,x,F,G){ct.push(...v,...x,...F,...v,...F,...G)}function Tt(ct,v,x,F,G,J){if(pt(ct,ge(v,F,J),ge(x,F,J),ge(x,G,J),ge(v,G,J)),t.id==="sunset"){ot.has(ct)||ot.set(ct,[]);let W=ot.get(ct);for(let mt of[v,x,x,v,x,v]){let nt=Tg(t,mt.meters);W.push(1-nt*.54,1-nt*.46,1-nt*.28)}}}function Qt(ct,v,x,F,G){let J=x*ct.rail*oe,W=x*v.rail*oe;pt(h,ut(ct,J,F),ut(v,W,F),ut(v,W,G),ut(ct,J,G));let mt=J+x*.25,nt=W+x*.25;pt(h,ut(ct,J,G),ut(v,W,G),ut(v,nt,G),ut(ct,mt,G)),pt(h,ut(ct,mt,G),ut(v,nt,G),ut(v,nt,F),ut(ct,mt,F))}function Bt(ct,v,x){if(!v.length)return;let F=new le;F.setAttribute("position",new qt(v,3));let G=[];for(let W=0;W<v.length;W+=3)G.push(v[W]*.23,v[W+2]*.23);F.setAttribute("uv",new qt(G,2)),ot.has(v)&&(x.vertexColors=!0,F.setAttribute("color",new qt(ot.get(v),3))),F.computeVertexNormals(),x.side=Ie;let J=new Ht(F,x);J.name=ct,i.add(J)}let Z=(t.id==="city"||t.id==="zootopia"),tt=t.id==="coast",vt=tt?[Ln.coast.bridgeFirst,Ln.coast.bridgeLast].map(ct=>t.length*ct):[];for(let ct=0;ct<n.length;ct++){let v=n[ct],x=n[(ct+1)%n.length],F=v.bridge>.18||Z,G=wg(t,v.meters),J=v.rail/v.width,W=Ag(Eg[t.id],v.meters)>.22,mt=tt&&v.bridge>.015&&v.bridge<.99&&x.bridge>=v.bridge;if(v.grip<.94&&x.grip<.94){Tt(Y,v,x,-.986,.986,.033);for(let $ of[-1,1])Tt(et,v,x,$*.91-.026,$*.91+.026,.046)}Tt(s,v,x,-1,1,.022);let nt=x.rail/x.width;for(let $ of[-1,1])pt(r,ge(v,$,.014),ge(x,$,.014),ge(x,$*nt,.014),ge(v,$*J,.014));for(let $ of[-1,1]){if(Tt(o,v,x,$*.951-.012,$*.951+.012,.038),ct%5<=1&&Tt(o,v,x,$*.324-.009,$*.324+.009,.039),$===v.curbSide&&(Tt(ct%2?u:l,v,x,$*1.012-.065,$*1.012+.065,.073),W&&ct%5!==0&&Tt(H,v,x,$*.97-.021,$*.97+.021,.077),t.id==="sunset"&&ct%13!==0)){let at=$*(.48+.22*Math.sin(ct*.078)+.065*Math.sin(ct*.21)),Dt=.018+.014*Math.min(1,Math.abs(v.curve));Tt(U,v,x,at-Dt,at+Dt,.029),Tt(U,v,x,at-$*.13-Dt,at-$*.13+Dt,.03),Tt(P,v,x,$*1.01-.018,$*1.01+.018,.078)}Qt(v,x,$,.46,.66),F&&Qt(v,x,$,.84,1.02);let Q=at=>$*(v.rail*oe+at);if(mt||W&&ct%3!==1){let at=mt?"#ffe2ad":(t.id==="city"||t.id==="zootopia")?"#a8e3ff":"#f2c38b";K.push({p:[...ut(v,Q(.13),F?1.025:.665)],s:[.096,.055,mt?2.7:1.55],yaw:Math.atan2(v.fx,v.fz),color:at})}ct%2===0&&f.push({p:[...ut(v,Q(.13),F?.5:.35)],s:[.17,F?1.02:.74,.18]}),ct%4===0&&M.push({p:[...ut(v,Q(.15),F?.93:.58)],s:[.18,.16,.4],yaw:Math.atan2(v.fx,v.fz),color:$>0?"#ffbd70":"#e9f1ff"});let it=G?.turn===$,St=G?.warm||G?.zone==="ramp"||t.id==="sunset";(Z||t.id==="coast"&&v.bridge>.07&&v.bridge<.85||(it||G?.light>.55)&&ct%2===0||t.challenge&&ct%2===0&&Math.abs(v.curve)>.48)&&z.push({p:[...ut(v,Q(.3),Z?.63:F?.87:.58)],s:[it?.18:.1,.095,it?3.06:Z?1.72:t.challenge?1.34:.87],yaw:Math.atan2(v.fx,v.fz),color:t.challenge?e.sign:St?"#ffd9a4":it?"#a0efff":Z?"#497e9a":"#a1cfcf"});let _t=F?-.86:-1.75;if(pt(tt&&F?m:r,ge(v,$*J,.014),ge(x,$*nt,.014),ge(x,$*nt,_t),ge(v,$*J,_t)),t.id==="sunset"&&ct%2===0)for(let at=0;at<3;at++){let Dt=Pe(t,v.meters+Nt(ct+at*11)*3),O=$*hr(Dt.width+.09,Dt.rail-.02,Nt(ct*2.9+at+$))*oe,st=ut(Dt,O,.021),ht=.09+Nt(ct+at*15+$)*.27;B.push({p:[...st],s:[ht,ht*.11,ht*.72],yaw:ct,color:Nt(ct+at)>.56?"#c58c66":"#774b45"})}}if(ct<=1)for(let $=0;$<14;$++)($+ct)%2===0&&Tt(E,v,x,-.94+$*.134,-.94+($+1)*.134,.047);if(v.pad){let[$,Q]=v.pad>0?[.22,.79]:[-.79,-.22];if(Tt(a,v,x,$,Q,.056),Z&&x.pad===v.pad&&(Tt(C,v,x,$-.105,$-.012,.045),Tt(C,v,x,Q+.012,Q+.105,.045)),ct%2===0){let it=($+Q)*.5,St=ge(x,it,.07);c.push(...ge(v,$,.07),...ge(v,it,.07),...St,...ge(v,it,.07),...ge(v,Q,.07),...St)}}if(tt&&F&&pt(d,ge(v,-J,-.86),ge(x,-nt,-.86),ge(x,nt,-.86),ge(v,J,-.86)),tt&&v.bridge>.37&&ct%21===0){let $=Math.atan2(v.fx,v.fz);y.push({p:[v.x,v.elevation-1.15,v.z],s:[v.rail*oe*1.53,.74,2.45],yaw:$,roll:-Math.atan(v.bank)});for(let Q of[-1,1]){let it=ge(v,Q*.58,-1.15),St=oa-3.5;y.push({p:[it.x,(it.y+St)*.5,it.z],s:[1.36,it.y-St,1.76],yaw:$})}Tt(S,v,Pe(t,v.meters+.32),-1,1,.058)}if(Z&&ct%11===0)for(let Q of[-1,1])y.push({p:[...ge(v,Q*.55,-(v.elevation- -10)*.5)],s:[1.7,v.elevation- -10,1.7]});if(ct%12===0&&Math.abs(v.curve)>.35){let $=-Math.sign(v.curve),Q=Math.atan2(v.fx,v.fz),it=$*(v.rail*oe+.84),St=ut(v,it,1.84);p.push({p:[...St],s:[1.22,.78,.12],yaw:Q,color:e.sign}),St.addScaledVector(new N(v.fx,0,v.fz),-.071),g[+(v.curve>0)].push({p:[...St],s:[1.17,.73,1],yaw:Q+Math.PI}),f.push({p:[...ut(v,it,.84)],s:[.11,1.7,.11]})}let wt=vt.some($=>Math.abs(v.meters-$)<82);if((Z||v.bridge>.2&&!wt)&&ct%13===0){let $=ct%2?1:-1;_.push({p:[...ge(v,$*(J+.01),2.65)],s:[.13,5.3,.13]}),_.push({p:[...ge(v,$*(J-.1),5.15)],s:[1.7,.13,.16],yaw:Math.atan2(v.fx,v.fz)}),b.push({p:[...ge(v,$*(J-.17),5.08)],s:[.59,.16,.26],yaw:Math.atan2(v.fx,v.fz)})}if(Z&&G?.light){let $=v.meters>=t.length*Ln.city.service-8&&v.meters<=t.length*Ln.city.service+53,Q=$?5:13,it=$?2:3,St=Math.floor((ct+Math.floor(Q/2))/Q)*Q,_t=ct-St;if(_t>=-it&&_t<it){let at=$?0:St%2?1:-1,Dt=$?.55:.22;Tt(R,v,x,at*.66-Dt,at*.66+Dt,.042);let O=(_t+it)/(it*2),st=(_t+it+1)/(it*2);I.push(0,O,0,st,1,st,0,O,1,st,1,O);let ht=G.warm?w:D,gt=.38+G.light*.59;for(let rt=0;rt<6;rt++)T.push(ht.r*gt,ht.g*gt,ht.b*gt)}}}let zt=jt(e.road,Z?.66:.92);zt.map=Gh,Bt("asphalt",s,zt),Y.length&&(Bt("frozen asphalt",Y,new $t({color:"#78c1de",transparent:!0,opacity:.44,depthWrite:!1})),Bt("frozen pavement edge",et,new $t({color:"#c7efff"})));let At=jt(e.shoulder);At.map=Gh,Bt("shoulders",r,At),Bt("bridge deck edge",m,jt("#88969a",.67)),Bt("bridge deck underside",d,jt("#586970")),Bt("bridge expansion joints",S,jt("#303d45",.76)),Bt("lane paint",o,jt(Z?"#a8bacd":"#e8dcc8")),Bt("start line",E,jt("#fbefe0")),Bt("curbs",l,jt(Z?"#854a9d":"#b4594f")),Bt("curbs",u,jt("#dfe0d2")),Bt("tire marks",U,new $t({color:"#292631",transparent:!0,opacity:.34,depthWrite:!1})),Bt("boost reflection",C,new $t({color:"#be8aff",transparent:!0,opacity:.22,depthWrite:!1,blending:vn})),Bt("curb wear",P,new $t({color:"#75614d",transparent:!0,opacity:.31,depthWrite:!1})),Bt("corner wear",H,new $t({color:"#565360",transparent:!0,opacity:.42,depthWrite:!1})),re(i,new Ti(1,0),jt("#ffffff"),B),Bt("railings",h,jt(e.rail,.46)),Bt("boost zone",a,jt("#5a237d")),Bt("boost markings",c,new de({color:"#de92ff",emissive:"#af57ff",emissiveIntensity:1.1})),re(i,Ce,jt(e.rail,.53),f),re(i,Ce,jt(Z?"#424c5d":"#7b8585"),y),re(i,Ce,jt("#606772",.48),_),re(i,Ce,new $t({color:Z?"#fff1c8":"#dbf5ff"}),b),re(i,Ce,new $t({color:"#ffffff"}),M),re(i,Ce,new $t({color:"#ffffff"}),z),re(i,Ce,new $t({color:"#ffffff"}),K),re(i,Ce,jt("#ffffff"),p);for(let[ct,v]of g.entries()){if(!v.length)continue;let x=document.createElement("canvas");x.width=128,x.height=80;let F=x.getContext("2d");F.fillStyle="#252b32",F.fillRect(0,0,128,80),F.fillStyle=Z?"#ebbf91":"#fbd084",F.fillRect(4,4,120,72),F.save(),ct===0&&(F.translate(128,0),F.scale(-1,1)),F.fillStyle="#303237",F.beginPath(),F.moveTo(38,15),F.lineTo(69,15),F.lineTo(101,40),F.lineTo(69,65),F.lineTo(38,65),F.lineTo(72,40),F.closePath(),F.fill(),F.restore();let G=new Qe(x);G.colorSpace=Ee,re(i,new We,new $t({map:G}),v)}if(R.length){let ct=document.createElement("canvas");ct.width=ct.height=64;let v=ct.getContext("2d"),x=v.createRadialGradient(32,32,0,32,32,31);x.addColorStop(0,"#ffffffdb"),x.addColorStop(.46,"#ffffff62"),x.addColorStop(1,"#ffffff00"),v.fillStyle=x,v.fillRect(0,0,64,64);let F=new Qe(ct);F.colorSpace=Ee;let G=new le;G.setAttribute("position",new qt(R,3)),G.setAttribute("uv",new qt(I,2)),G.setAttribute("color",new qt(T,3)),i.add(new Ht(G,new $t({map:F,vertexColors:!0,transparent:!0,depthWrite:!1,blending:vn,side:Ie,opacity:.63})))}let Zt=[];for(let ct of[120,80,40]){let v=document.createElement("canvas");v.width=192,v.height=128;let x=v.getContext("2d");x.fillStyle="#f9ecd2",x.fillRect(0,0,192,128),x.fillStyle=ct===40?"#b94232":"#292c32",x.fillRect(5,5,182,20),x.fillStyle="#1b2024",x.font="900 76px Arial",x.textAlign="center",x.fillText(String(ct),96,99),x.fillStyle="#55525a",x.font="bold 16px Arial",x.fillText("M",96,119);let F=new Qe(v);F.colorSpace=Ee;let G=bg(t).filter(J=>!J.boards||J.boards.includes(ct)).map(J=>{let W=Pe(t,J.distance-ct),nt=-Math.sign(Pe(t,J.distance).curve)*(W.rail*oe+1.04);return Zt.push({p:[...ut(W,nt,1.03)],s:[.15,2.1,.16]}),{p:[...ut(W,nt,2.09)],s:[1.7,1.15,1],yaw:Math.atan2(W.fx,W.fz)+Math.PI}});re(i,new We,new $t({map:F,side:Ie}),G)}re(i,Ce,jt(e.rail,.53),Zt);let Le=[],L=[];for(let ct of Kart.sectorDistances(t).slice(0,-1)){let v=Pe(t,ct),x=Math.atan2(v.fx,v.fz);for(let F of[-1,1]){let G=F*(v.rail+.075)*oe;Le.push({p:[...ut(v,G,1.05)],s:[.2,2.1,.22],yaw:x}),L.push({p:[...ut(v,G,2.06)],s:[.47,.2,.31],yaw:x})}}re(i,Ce,jt("#344a55",.5),Le),re(i,Ce,new $t({color:"#97e4f5"}),L);let te=Pe(t,t.length-26),Vt=Math.atan2(te.fx,te.fz),Pt=10.6,Mt=2*(te.rail*oe+1.12),fe=[-1,1].map(ct=>({p:[...ut(te,ct*Mt/2,Pt/2)],s:[.46,Pt+.3,.56],yaw:Vt}));fe.push({p:[...ut(te,0,Pt)],s:[Mt+.6,.88,.64],yaw:Vt}),re(i,Ce,jt("#272d3a",.45),fe),re(i,Ce,new $t({color:e.sign}),[-1,1].map(ct=>({p:[...ut(te,ct*(Mt/2-2.7),Pt+.05)],s:[4,.13,.7],yaw:Vt})));let yt=document.createElement("canvas");yt.width=512,yt.height=96;let kt=yt.getContext("2d");kt.fillStyle="#222838",kt.fillRect(0,0,512,96),kt.fillStyle=e.sign,kt.font="italic 900 48px Arial",kt.textAlign="center",kt.fillText("APEX  KART",256,64);let Te=new Ht(new We(5.2,.83),new $t({map:new Qe(yt),side:Ie}));Te.position.copy(ut(te,0,Pt+.05)).addScaledVector(new N(te.fx,0,te.fz),-.36),Te.rotation.y=Vt+Math.PI,i.add(Te)}function Fg(i,t,e,n){let s=Math.ceil(n/6),r=n+1,o=t.attributes.position,a=new N;for(let c=0;c<n;c+=s)for(let l=0;l<n;l+=s){let u=Math.min(l+s,n),h=Math.min(c+s,n),f=[],p=new ln;for(let y=c;y<=h;y++){for(let m=l;m<=u;m++)p.expandByPoint(a.fromBufferAttribute(o,y*r+m));if(y<h){let m=(y*n+l)*6;f.push(...t.index.array.subarray(m,m+(u-l)*6))}}let g=new le;for(let[y,m]of Object.entries(t.attributes))g.setAttribute(y,m);g.setIndex(f),g.boundingBox=p,g.boundingSphere=p.getBoundingSphere(new yn),i.add(new Ht(g,e))}}function Bg(i,t,e,n){let s=(t.id==="city"||t.id==="zootopia"),r=t.id==="coast",o=jt("#ffffff");o.vertexColors=!0,o.map=Ic;let a=s?40:156,c=new We(1640,1640,a,a).rotateX(-Math.PI/2),l=c.attributes.position,u=[];function h(m,d){let S=1/0,M=n[0];for(let _ of n){let b=(m-_.x)**2+(d-_.z)**2;b<S&&(S=b,M=_)}return[Math.sqrt(S),M]}let f=[];if(r)for(let[m,d,S,M,_]of[[.34,-1,212,85,65],[.44,1,205,95,57],[.53,-1,214,115,63],[.61,1,178,83,53],[.63,-1,297,112,74]]){let b=ut(Pe(t,t.length*m),d*S);h(b.x,b.z)[0]>M*.71&&f.push({x:b.x,z:b.z,radius:M,peak:_})}function p(m,d,S,M){if(s)return-10+Math.sin(m*.011)*1.2;let _=Math.sin(m*.016)*Math.sin(d*.015)*.65+Math.sin(m*.043+d*.026)*.24+Math.cos(m*.067-d*.043)*.1;if(r){let b=(1-M.bridge)*Math.exp(-Math.max(0,S-7)/63),E=-23+b*(M.elevation+22)+_*Pn(S-12,0,36)*b;for(let R of f){let I=Math.hypot(m-R.x,(d-R.z)*1.26)/R.radius,T=Pn(1-I*I,0,1);E=Math.max(E,-24+T*T*(R.peak+_*12)*Pn((S-26)/31,0,1))}return E}return M.elevation-.86+_*Math.min(82,Math.max(0,S-15)*.42)+Pn((S-42)/7,0,25)}function g(m,d,S,M){let _=p(m,d,S,M);if(s||S>35)return _;let b=M.rail*oe,E=(m-M.x)*M.rx+(d-M.z)*M.rz,R=Math.hypot(1640/a,1640/a),I=M.elevation+M.bank*Pn(E,-b,b)-1.55,T=Pn((S-b-R)/7,0,1);return hr(Math.min(_,I),_,T)}for(let m=0;m<l.count;m++){let d=l.getX(m),S=l.getZ(m),[M,_]=h(d,S),b=g(d,S,M,_);l.setY(m,b);let E=Pn(.76+Nt(m)*.21+Math.sin(d*.037+S*.071)*.07+(r&&b<-8?.13:0),.52,1.2);if(Fi.set(e.ground).multiplyScalar(E),t.id==="ice"&&Fi.lerp(kh,Pn(M/86,0,1)*.13),t.id==="sunset"&&(_.meters<t.length*.06||_.meters>t.length*.986)){let R=10*Math.sin(_.meters*.026),I=(d-_.x)*_.rx+(S-_.z)*_.rz,T=1-Pn(Math.abs(I-36-R)/14,0,1);Fi.lerp(kh,T*.72)}u.push(Fi.r,Fi.g,Fi.b)}c.setAttribute("color",new qt(u,3));let y=c.attributes.uv;for(let m=0;m<y.count;m++)y.setXY(m,y.getX(m)*78,y.getY(m)*78);if(c.computeVertexNormals(),s?i.add(new Ht(c,o)):Fg(i,c,o,a),r){let m=a+1,d=new Uint8Array(m*m);for(let E=0;E<l.count;E++)d[E]=Math.round(Pn((l.getY(E)+27)/65,0,1)*255);let S=new ai(d,m,m,ms);S.minFilter=S.magFilter=Ye,S.needsUpdate=!0;let _=Array.from({length:15},(E,R)=>Pe(t,t.length*(.346+R*.0178))).map(E=>new Rt(E.x-17,E.z+11)),b=new Ht(new We(2500,2500),new ke({uniforms:{clock:{value:0},low:{value:0},fog:{value:new It(e.fog)},shore:{value:S},bridge:{value:_}},vertexShader:"varying vec3 world;void main(){world=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(world,1.);}",fragmentShader:`uniform float clock,low;uniform vec3 fog;uniform sampler2D shore;uniform vec2 bridge[15];varying vec3 world;
      void main(){
        vec2 p=world.xz;float t=clock*.9;
        float a=dot(p,vec2(.20,.29))+t, b=dot(p,vec2(.42,-.26))-t*1.2;
        float c=dot(p,vec2(.71,.54))+t*.67;
        float wave=sin(a)*.56+sin(b)*.26+sin(c)*.12+.06*sin(dot(p,vec2(1.27,-.94))-t*2.1);
        vec3 n=normalize(vec3(-(.12*cos(a)+.11*cos(b)+.08*cos(c)),1.,-(.17*cos(a)-.07*cos(b)+.08*cos(c))));
        vec3 view=normalize(cameraPosition-world);vec3 sun=normalize(vec3(.69,.23,-.42));
        float shine=max(0.,dot(n,normalize(sun+view)));
        float glint=pow(shine,34.);
        if(low<.5) glint+=pow(shine,105.)*1.4;
        float fresnel=pow(1.-max(0.,dot(n,view)),4.);
        vec3 sea=mix(vec3(.012,.13,.19),vec3(.06,.28,.32),.5+.5*wave);
        sea=mix(sea,vec3(.43,.61,.68),fresnel*.57)+vec3(.95,.65,.38)*glint*.72;
        vec2 shoreUv=p/1640.+.5;
        if(all(greaterThan(shoreUv,vec2(0.)))&&all(lessThan(shoreUv,vec2(1.)))) {
          float ground=texture2D(shore,shoreUv).r*65.-27.;
          float depth=max(0.,${oa.toFixed(1)}-ground);
          float foam=(1.-smoothstep(.2,6.4,depth))*smoothstep(.42,.91,sin(depth*1.6-wave*2.8+t*1.35)*.5+.5);
          sea=mix(sea,vec3(.05,.39,.36),(1.-smoothstep(.0,13.,depth))*.80);
          sea=mix(sea,vec3(.81,.96,.93),foam*.82);
        }
        float bridgeDist=1000.;
        if(low<.5) {
          for(int i=0;i<14;i++){vec2 v=bridge[i+1]-bridge[i], q=p-bridge[i];bridgeDist=min(bridgeDist,length(q-v*clamp(dot(q,v)/dot(v,v),0.,1.)));}
        } else {
          for(int i=0;i<15;i+=2) bridgeDist=min(bridgeDist,length(p-bridge[i])*.55);
        }
        sea=mix(sea*.34+vec3(.005,.019,.052),sea,smoothstep(3.,21.,bridgeDist));
        sea=mix(sea,fog,smoothstep(150.,770.,distance(world,cameraPosition)));
        gl_FragColor=vec4(sea,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));b.rotation.x=-Math.PI/2,b.position.y=oa,i.add(b),i.userData.water=b}return{nearest:h,heightAt:g}}function Og(i,t,e,n){let s=t.id==="sunset",r=t.id==="city";if(t.challenge){zg(i,t,e);return}if(r){let h=document.createElement("canvas");h.width=128,h.height=256;let f=h.getContext("2d");f.fillStyle="#252e43",f.fillRect(0,0,128,256);for(let b=0;b<64;b++){let E=4+b%8*16,R=5+Math.floor(b/8)*31;f.fillStyle=Nt(b)>.76?Nt(b*9)>.59?"#a78265":"#6082a4":"#303c52",f.fillRect(E,R,12,19),f.fillStyle="#151d30",f.fillRect(E,R+18,12,2)}let p=new Qe(h);p.colorSpace=Ee,p.anisotropy=4;let g=[],y=[],m=[],d=[];for(let b=0;b<625;b++){let E=(b%25-12)*52+(Nt(b*3)-.5)*19,R=(Math.floor(b/25)-12)*52+(Nt(b*9)-.5)*18,[I,T]=e.nearest(E,R);if(I<25||Nt(b*11)<.12)continue;let w=t.length*(Ln[t.id]?.interchange??Ln.city.interchange);if(Math.abs(T.meters-w)<150&&I<87)continue;let D=T.meters>=2560&&T.meters<=2770;if(D&&I<68)continue;let C=D&&I<132?14+Nt(b*14)*24:19+Math.pow(Nt(b*14),1.47)*85,P=12+Nt(b+5)*13,U=10+Nt(b+75)*16,B=Nt(b*15)>.42,z=Math.hypot(P*(B?1.34:1),U*(B?1.28:1))*.5;if(I<z+14)continue;let K=Nt(b*3)>.84?.24:0,H=Nt(b*7)>.56?"#b1c4f3":"#ddc7c5";g.push({p:[E,C*.5-10,R],s:[P,C,U],yaw:K,color:H}),B&&m.push({p:[E,C*.15-10,R],s:[P*1.34,C*.3,U*1.28],yaw:K,color:"#808da9"}),y.push({p:[E,C-9.6,R],s:[P*.74,.72,U*.73],yaw:K,color:"#69758a"}),B&&Nt(b*5)>.7&&d.push({p:[E,C-9.9,R],s:[P*.99,.16,U*.995],yaw:K,color:Nt(b*2)>.5?"#6bbef1":"#c890c4"}),Nt(b*14)>.88&&y.push({p:[E,C-7,R],s:[.4,6.1,.4],color:"#e88aa8"})}for(let b=4;b<n.length;b+=11){let E=n[b];if(Math.abs(E.meters-t.length*(Ln[t.id]?.interchange??Ln.city.interchange))<156||E.meters>=2560)continue;let R=(b%2===0?1:-1)*(27+Nt(b)*10),I=ut(E,R);if(e.nearest(I.x,I.z)[0]<Math.hypot(10,11)*.5+14)continue;let T=6+Nt(b*4)*8;g.push({p:[I.x,T*.5-10,I.z],s:[10,T,11],yaw:Math.atan2(E.fx,E.fz),color:"#afadcb"})}let S=new de({map:p,emissiveMap:p,emissive:"#93b4e7",emissiveIntensity:.59,roughness:.57}),M=jt("#ffffff"),_=new $t({color:"#ffffff"});for(let[b,E]of[[g,S],[m,S],[y,M],[d,_]]){let R=new Map;for(let T of b){let w=[Math.floor(T.p[0]/180),Math.floor(T.p[2]/180)].join(",");R.has(w)||R.set(w,[]),R.get(w).push(T)}let I=b===d?200:b===y?305:0;for(let T of R.values())re(i,Ce,E,T,I)}return}let o=[],a=[],c=[],l=[];for(let h=0;h<440;h++){let f=(Nt(h*7)-.5)*1430,p=(Nt(h*11+9)-.5)*1430,[g,y]=e.nearest(f,p);if(g<13||g<29&&Nt(h*4)<.4)continue;let m=e.heightAt(f,p,g,y);if(!(!s&&m<-10))if(s&&g>35&&Nt(h*19)>.72){let d=12+Nt(h*23)*43,S=12+Nt(h*25)*71;if(g<d*1.26+16)continue;a.push({p:[f,m+S*.44,p],s:[d,S,d*(.6+Nt(h)*.37)],yaw:Nt(h*14)*6,color:g>130?"#9484a3":Nt(h)>.6?"#cb946a":"#a86554"})}else if(!s&&Nt(h*61)>.38){let d=2.3+Nt(h*63)*5.4;c.push({p:[f,m+d*.36,p],s:[.22,d*.75,.22],color:"#786451"});for(let S=0;S<3;S++)l.push({p:[f,m+d*(.58+S*.19),p],s:[d*(.48-S*.09),d*.64,d*(.48-S*.09)],yaw:Nt(h+S)*6,color:S%2?"#576f45":"#425d3f"})}else{let d=(g>50?3:1)+Nt(h*41)*(g>50?13:3.4);o.push({p:[f,m+d*.25,p],s:[d,d*.79,d*.75],yaw:Nt(h*16)*6,color:s?"#96664f":"#aaa893"}),g<45&&l.push({p:[f+1,m+.24,p-1],s:[.65,.51,.76],yaw:h,color:s?"#737148":"#527646"})}}if(s)for(let h of[-1,1])for(let[f,p,g,y]of[[126,39,11,12],[155,32,11,17],[178,29,10,23],[201,25,8.5,25],[226,24,9,28],[247,24,8.5,25],[267,27,9,23]]){let m=ut(Pe(t,f+(h===1?-9:0)),h*(p+(h===1?2:0)),y*.38);a.push({p:[...m],s:[g,y,g*.94],yaw:f*.41,color:h===-1?"#c58b60":"#885b56"})}if(s){let h=t.length*Ln.sunset.strata;for(let[f,p,g,y,m]of[[-28,26,9,24,"#aa6954"],[-9,27,9.5,31,"#bf845f"],[12,28,10,27,"#c78b63"],[32,30,12,23,"#aa6c59"]]){let d=ut(Pe(t,h+f),-p,y*.41);e.nearest(d.x,d.z)[0]<g*1.25+12||(a.push({p:[...d],s:[g,y,g*1.07],yaw:.19,color:m}),a.push({p:[d.x-.27,d.y-y*.22,d.z],s:[g*1.06,y*.24,g*1.12],yaw:.19,color:"#754d50"}))}}for(let h=0;h<n.length;h+=3){let f=n[h];if(!(f.bridge>.15))for(let p of[-1,1]){let g=ut(f,p*(13+Nt(h*17+p)*13)),[y,m]=e.nearest(g.x,g.z);if(y<10.9)continue;let d=e.heightAt(g.x,g.z,y,m);if(!s&&d<-10.5)continue;let S=.32+Nt(h*8+p)**2*1.95;if(!(y<m.rail*oe+S*1.14+.7))if(Nt(h*2+p)>.45)o.push({p:[g.x,d+S*.19,g.z],s:[S,S*.63,S*.85],yaw:Nt(h*7)*6,color:s?"#af7753":"#b6b19c"});else for(let M=0;M<3;M++)l.push({p:[g.x+M*.28,d+.32,g.z+Math.sin(M)*.42],s:[.57,.65+Nt(h+M)*.38,.61],yaw:Nt(h+M)*6,color:s?"#8a7951":"#668659"})}}let u=jt("#ffffff");u.map=Ic,re(i,Dg(),u,a),re(i,new Ti(1,0),u,o),re(i,new Cn(.64,1,1,7),jt("#ffffff"),c),re(i,new as(1,1,7),jt("#ffffff"),l,155)}function zg(i,t,e){let n=t.id==="ice",s=t.id==="caldera",r=[],o=[],a=[],c=[];for(let u=0;u<142;u++){let h=(Nt(u*4.4)-.5)*1390,f=(Nt(u*8.7+31)-.5)*1390,[p,g]=e.nearest(h,f),y=6+Nt(u*17.3)*49;if(p<y+20)continue;let m=e.heightAt(h,f,p,g),d=y*(n?1.34:s?.93:1.22),S=n?["#abccdf","#779cb6","#e0f4fa"][u%3]:s?["#42384a","#5c4b60","#70545a"][u%3]:["#ad6d55","#824d46","#c3896c"][u%3];r.push({p:[h,m+d*.34,f],s:[y,d,y*.78],yaw:u*.48,color:S})}for(let[u]of t.challenge.landmarks){let h=Pe(t,u*t.length),f=Math.atan2(h.fx,h.fz);for(let p of[-1,1]){let g=p*(h.rail*oe+(s?10:17)),y=ut(h,g),[m,d]=e.nearest(y.x,y.z);if(m<(s?12:21))continue;let S=e.heightAt(y.x,y.z,m,d);if(s){a.push({p:[y.x,S+5.4,y.z],s:[.83,11.2,.83],yaw:f,color:"#413b47"}),a.push({p:[y.x,S+10.2,y.z],s:[3.6,.56,1.02],yaw:f,color:"#555065"}),c.push({p:[y.x,S+10.5,y.z],s:[3,.41,.74],yaw:f,color:"#ffae72"});for(let M=0;M<3;M++){let _=ut(h,g+p*(2+M*3)),[b,E]=e.nearest(_.x,_.z);b<15||c.push({p:[_.x,e.heightAt(_.x,_.z,b,E)+.36,_.z],s:[.43,.22,5.8],yaw:f+M*.38,color:M%2?"#ff8256":"#e64335"})}}else{let M=n?8:11;for(let _=0;_<3;_++){let b=ut(h,g+p*_*4);if(e.nearest(b.x,b.z+_*4)[0]<21)continue;let E=8+_*7;o.push({p:[b.x,S+E*.45,b.z+4*_],s:[M-_*.8,E,M*.86],yaw:f+_*.38,color:n?["#84b8d3","#cdebf2","#91c7dd"][_]:["#96604e","#b67656","#d09470"][_]})}}}}let l=new Ti(1,0);re(i,l,jt("#ffffff",.83),r),re(i,n?new as(.61,1.7,5):l,jt("#ffffff",.76),o),re(i,Ce,jt("#ffffff",.61),a),re(i,Ce,new $t({color:"#ffffff"}),c)}function Wh(i){let t=Rg[i.id],e=new Xn;e.background=new It(t.horizon),e.fog=new Hs(t.fog,i.id==="sunset"?.00305:.00255);let n=Lg(t,i),s=new Ai(t.ambient,"#625649",(i.id==="city"||i.id==="zootopia")?1.58:i.id==="sunset"?1.9:2.55);e.add(n,s);let r=new Ci(t.light,(i.id==="city"||i.id==="zootopia")?1.56:i.id==="sunset"?3.55:3.2);r.position.set(...i.id==="sunset"?[-91,24,-35]:[235,180,-180]),e.add(r);let o=Math.ceil(i.length/4.1),a=Array.from({length:o},(u,h)=>{let f=h*i.length/o;return{...Pe(i,f),meters:f}}),c=a.filter((u,h)=>h%2===0),l=Bg(e,i,t,c);return Ng(e,i,t,a),Og(e,i,l,c),Ug(e,i,l),i.id==="zootopia"&&ZootopiaProps(e,i),e.updateMatrixWorld(!0),e.traverse(u=>{u!==n&&(u.matrixAutoUpdate=!1)}),{scene:e,sky:n,ambient:s,sunlight:r}}function Pc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new le,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Xh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][f]);let g=Xh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Xh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ae(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);a.setComponent(f+h,g,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var $n=new un(1,1,1),ui=new wi(1,16,10),Kn=new Cn(1,1,1,16),Bi=new Js(1,.15,7,24),De=new de({color:"#171b23",roughness:.53,metalness:.24}),ur=new de({color:"#23262e",roughness:.94}),Dc=new de({color:"#33353b",roughness:.86}),be=new de({color:"#aeb7c2",roughness:.28,metalness:.77}),aa=new ls({color:"#192639",metalness:.53,roughness:.18,clearcoat:.8}),Ss=new de({color:"#def5ff",emissive:"#b8e8ff",emissiveIntensity:1.1,roughness:.25}),Un=new de({color:"#fd333e",emissive:"#fd253e",emissiveIntensity:1.4}),je=new de({color:"#8798ae",metalness:.82,roughness:.3}),Vg=new de({color:"#a58ab5",metalness:.74,roughness:.25}),ze=new de({color:"#191e29",roughness:.88,metalness:.08}),ca=new de({color:"#fff1cd",roughness:.35}),Lc=new N(0,1,0);function ne(i,t,e,n,s,r,o,a,c){let l=new Ht(t,e);return l.position.set(n,s,r),l.scale.set(o,a,c),i.add(l),l}function Ft(i,t,e,n,s){let r=new N(...e),a=new N(...n).clone().sub(r),c=r.addScaledVector(a,.5);ne(i,Kn,t,...c,s,a.length(),s).quaternion.setFromUnitVectors(Lc,a.normalize())}function Ct(i,t,e,n=0,s=[[-1,-.5],[-1,.27],[-.71,.5],[.71,.5],[1,.27],[1,-.5],[.73,-.55],[-.73,-.55]]){let r=s.length,o=[],a=[];for(let[l,u,h,f]of e)for(let[p,g]of s)o.push(n+p*u,h+g*f,l);for(let l=0;l<e.length-1;l++)for(let u=0;u<r;u++){let h=l*r+u,f=l*r+(u+1)%r;a.push(h,h+r,f,f,h+r,f+r)}for(let l=1;l<r-1;l++){a.push(0,l,l+1);let u=(e.length-1)*r;a.push(u,u+l+1,u+l)}let c=new le;c.setAttribute("position",new qt(o,3)),c.setIndex(a),c.computeVertexNormals(),i.add(new Ht(c,t))}function Uc(i){let t=new Map;for(let e of[...i.children]){e.updateMatrix();let n=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();n.applyMatrix4(e.matrix);for(let s of Object.keys(n.attributes))s!=="position"&&s!=="normal"&&n.deleteAttribute(s);t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(n),i.remove(e)}for(let[e,n]of t)i.add(new Ht(Pc(n),e)),n.forEach(s=>s.dispose())}function kg(i,t,e,n,s){let r=new Ve;ne(r,Kn,ur,0,0,0,i,t,i).rotation.z=Math.PI/2;for(let c of[-1,1])ne(r,Bi,ur,c*t*.4,0,0,i*.86,i*.86,t*.98).rotation.y=Math.PI/2,ne(r,Kn,De,c*t*.52,0,0,i*.63,.035,i*.63).rotation.z=Math.PI/2;let o=e*t*.56;ne(r,Bi,be,o,0,0,i*.58,i*.58,.1).rotation.y=Math.PI/2;let a=s?10:6;for(let c=0;c<a;c++){let l=c*Math.PI*2/a+(s?c%2?.11:-.11:0);ne(r,$n,be,o,Math.cos(l)*i*.32,Math.sin(l)*i*.32,.028,i*.49,i*(s?.067:.105)).rotation.x=l}ne(r,Kn,n,o,0,0,i*.18,.045,i*.18).rotation.z=Math.PI/2;for(let c=0;c<20;c++){let l=c*Math.PI/10;for(let u of[-1,1])ne(r,$n,Dc,u*t*.27,Math.cos(l)*i,Math.sin(l)*i,t*.37,.014,i*.18).rotation.set(l,u*.32,0)}return Uc(r),r}function Gg(i,t,e){let n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle="#171c26",s.fillRect(0,0,256,128),s.fillStyle=i.trim,s.fillRect(9,9,238,110),s.fillStyle="#161b22",s.font="italic 900 82px Arial",s.textAlign="center",s.fillText(["01","24","63","04","99"][i.body],128,95);let r=new Qe(n);r.colorSpace=Ee;let o=new Ht(new We(.54,.27),new de({map:r,roughness:.48,polygonOffset:!0,polygonOffsetFactor:-1}));return o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI,o.position.set(0,t,e),o}var Hg=[[[-1.51,.49,.53,.34],[-1.22,.77,.53,.35],[-.48,.78,.49,.29],[.28,.56,.48,.36],[.91,.49,.53,.42],[1.53,.41,.44,.25]],[[-1.65,.7,.67,.51],[-1.3,.83,.71,.58],[-.7,.79,.68,.55],[.35,.72,.68,.59],[1.05,.61,.7,.56],[1.6,.52,.55,.34]],[[-1.59,.73,.53,.33],[-1.27,.88,.57,.42],[-.45,.78,.61,.54],[.48,.7,.53,.44],[1.32,.7,.5,.33],[1.57,.58,.43,.23]],[[-1.62,.91,.47,.29],[-1.29,.95,.54,.39],[-.3,.79,.59,.51],[.58,.66,.5,.38],[1.45,.45,.36,.21],[1.79,.27,.32,.14]],[[-1.57,.52,.63,.35],[-1.11,.59,.65,.52],[-.44,.53,.66,.52],[.18,.34,.55,.45],[1.03,.26,.43,.29],[1.68,.18,.4,.21]]];function Wg(i,t,e,n){let{body:s,generation:r,design:o}=t,{rearZ:a,rearWidth:c}=o,l=[.68,.79,.9,1.12,1.31][r],u=r===2&&!t.oldArt;if(s===0){for(let h of[-1,1])Ft(i,be,[h*.83,.31,-1.2],[h*.8,.32,1.29],.037),r>0&&Ct(i,e,[[a+.17,.14,.45,.19],[-.52,.18,.48,.29],[.53,.16,.43,.16]],h*(.7+r*.055)),r===1&&Ct(i,n,[[a+.02,.16,.6,.19],[-1.08,.18,.64,.22],[-.74,.11,.6,.16]],h*.75),r>1&&(Ct(i,ze,[[a+.12,.105,.58,.19],[-.83,.13,.63,.23],[-.33,.1,.56,.12]],h*.74),Ct(i,n,[[a+.14,.085,.68,.06],[-.9,.092,.75,.077],[-.42,.04,.68,.035]],h*.8)),r>2&&Ft(i,je,[h*.54,.54,-1.17],[h*.7,l,-1.4],.055);r<2&&Ft(i,r?n:be,[-c,.4,a+.13],[c,.4,a+.13],.054),r>1&&Ct(i,r===2?e:n,[[a,c,l,.1],[a+.34,c-.08,l-.08,.065]]),r===4&&Ft(i,Un,[-.66,.57,a+.055],[.66,.57,a+.055],.027)}if(s===1){for(let h of[-1,1]){if(r>=1&&!u&&Ct(i,r===1?n:e,[[a+.18,.16,.67,.17],[-1.13,.21,.85,.24],[-.74,.19,.87,.21],[-.47,.14,.71,.14]],h*(.84+r*.039)),r===1&&(Ct(i,ze,[[a-.01,.15,.67,.23],[-1.31,.18,.79,.21],[-.84,.16,.85,.14]],h*.94),Ft(i,n,[h*1.03,.75,-1.37],[h*1.07,.87,-.87],.028)),r>=2&&(Ft(i,je,[h*.78,.38,a+.04],[h*.64,.81,-1.18],.052),Ft(i,be,[h*c,.66,a+.02],[h*(c-.06),.81,a+.34],.046)),u){Ft(i,je,[h*.57,.34,-1.64],[h*.71,.78,-1.46],.058);for(let f=0;f<4;f++){let p=f/5;ne(i,Bi,n,h*(.57+.14*p),.4+.44*p,-1.616+.18*p,.073,.073,.045).rotation.x=Math.PI/2}}r>=3&&(Ft(i,De,[h*.97,.69,-1.5],[h*.78,1.28,-.72],.065),Ft(i,be,[h*.78,1.28,-.72],[h*.52,1.29,-.18],.045))}if(r===4){let h=ne(i,Bi,ur,0,.9,-1.36,.29,.29,.39);h.rotation.x=-.56,Ft(i,be,[-.73,1.11,-1.42],[.73,1.11,-1.42],.051)}}if(s===2)for(let h of[-1,1])r>=1&&t.oldArt&&(Ct(i,ze,[[-1.12,.11,.38,.09],[-.45,.15,.37,.12],[.77,.1,.42,.065]],h*.86),Ct(i,e,[[-1.49,.11,.59,.13],[-1.2,.17,.7,.17],[-.69,.16,.68,.16],[-.41,.08,.54,.08]],h*c)),r===1&&t.oldArt&&(Ct(i,n,[[a+.02,.18,.66,.2],[-1.15,.22,.75,.17],[-.72,.17,.72,.14]],h*.93),Ct(i,ze,[[-1.22,.12,.3,.13],[-.61,.17,.31,.16],[.52,.14,.34,.13]],h*.9)),r>=3&&!t.aero&&(Ct(i,ze,[[-1.79,.12,.35,.13],[-1.47,.17,.46,.18],[-1.03,.1,.49,.12]],h*(c-.04)),Ft(i,r===4?n:je,[h*.62,.66,-1.36],[h*.82,l-.04,-1.56],.036));if(s===3){for(let h of[-1,1]){let f=h*(c-.13);r>0&&(Ct(i,ze,[[a+.08,.16,.44,.21],[-.84,.23,.44,.28],[.36,.18,.42,.13]],f),Ct(i,e,[[a+.1,.13,.52,.21],[-.94,.25,.67,.27],[-.52,.23,.63,.24],[.41,.13,.47,.12]],f),Ft(i,n,[h*.85,.47,-.85],[h*.86,.44,.31],.028),Ct(i,r===1?n:e,[[a-.028,.085,.67,.19],[-1.17,.094,.75,.22],[-.62,.07,.64,.13]],h*(c+.08))),r>=2&&Ct(i,e,[[-1.55,.18,.51,.18],[-1.25,.27,.67,.35],[-.73,.25,.65,.33],[-.51,.16,.48,.15]],h*.98),r>=3&&Ft(i,je,[h*.63,.63,-1.15],[h*.87,l,-1.58],.035),Ft(i,Un,[h*.36,.63,a-.028],[h*.7,.65,a-.026],.027)}Ct(i,r>2?e:n,[[a-.04,c,l,.1],[a+.32,c-.04,l-.055,.08]]),r>=3&&Ct(i,n,[[a-.035,c-.06,l-.2,.068],[a+.28,c-.13,l-.24,.064]]),r===4&&Ct(i,e,[[-1.62,.045,1.1,.3],[-1.23,.048,1.09,.42],[-.68,.052,1.02,.21],[-.28,.04,1.05,.045]])}if(s===4){for(let h of[-1,1]){let f=.85+r*.057;if(r>0&&Ct(i,n,[[1.34,.044,.44,.22],[1.8,.055,.4,.24]],h*f),r===1&&(Ct(i,ze,[[a-.045,.044,.73,.23],[-1.17,.045,.7,.19]],h*(c+.11)),Ft(i,n,[h*(c+.11),.81,a-.045],[h*(c+.11),.77,-1.17],.024)),r>=2&&Ct(i,e,[[-1.3,.11,.49,.19],[-.76,.24,.55,.3],[-.25,.22,.57,.28],[.47,.13,.42,.17]],h*.66),r>=3&&Ct(i,ze,[[1.28,.3,.42,.078],[1.72,.32,.38,.079]],h*.65),u||Ft(i,je,[h*.41,.57,-1.19],[h*(c-.11),l,-1.54],.042),r===4)for(let p of[l-.23,l-.055])Ct(i,n,[[a-.07,.048,p,.1],[-1.29,.049,p-.018,.093]],h*c)}u||Ct(i,e,[[a-.06,c,l,.095],[-1.26,c-.02,l-.039,.081]]),r>=3&&Ct(i,ze,[[a-.04,c-.12,l-.19,.073],[-1.25,c-.12,l-.22,.055]])}}function la(i){let t=new Ve,e=new Ve,n=new Ve,s=["#a9e029","#f1792e","#087aa8","#9256ed","#e82432"],r=!i.oldGeometry&&!i.oldArt,o=new ls({color:i.paint??i.flagship?.paint??s[i.body],roughness:i.flagship?.27:r?.32:i.oldGeometry?.27:.25,metalness:i.flagship?.53:i.oldGeometry?.32:.38,clearcoat:i.flagship?.85:r?.68:i.oldGeometry?.85:.91,clearcoatRoughness:r?.24:i.oldGeometry?.2:.18}),a=new de({color:i.trim,roughness:.34,metalness:.37}),c=i.body,l=window.Kart.bodyPanels(i),u=l.length>0,h=i.legacy?void 0:i.generation,f=c===2&&h!==void 0,p=c===1&&h!==void 0,g=h!==void 0&&!i.oldGeometry,y=i.installed,m=c===4?1.06:c===1?.96:.98,d=c===4?-1.03:-.98,S=c===4||c===1?1.02:.94,M=c===1?.43:c===4?.37:.34,_=h===0,b=i.tailRig?.color??i.accent??i.flagship?.accent,E=b&&new de({color:b,emissive:b,emissiveIntensity:.79}),R=new Map;Ct(n,De,[[_?-1.39:-1.61,.89,.28,.14],[-1.1,1.03,.29,.16],[.75,1,.28,.16],[1.56,.87,.25,.13]]);let I=Hg[c].map(([C,P,U,B],z)=>{let K=z<3,H=_&&K?C+.15:C,Y=f&&h>=2&&K?P+.075:P,et=g&&K?(i.design.rearWidth-.85)*(.68-z*.18):0;return[H,Y+et,U-(f&&h>=3?.065:0),B]});if(u){let C={paint:o,glass:aa,matte:ze,ivory:ca,trim:a,tail:Un,titanium:je,accent:E};for(let[P,U,B]of l)Ct(n,C[P],B,U,window.Kart.bodySectionShape)}else Ct(n,o,I);for(let C of i.tailRig?.parts??[]){let P=new Ve;P.position.set(...C.pivot);for(let[U,B,z]of C.panels)Ct(P,U==="accent"?E:ze,z,B,window.Kart.bodySectionShape);R.set(C.id,{part:C,node:P}),e.add(P)}let T=[];for(let C of[-1,1]){for(let[U,B]of[[!0,m],[!1,d]]){let z=M*(U?.96:1.04),K=new Ve,H=S+(!U&&h>0?f?.09:p?.055:0:0);K.position.set(C*H,z,B);let Y=kg(z,(c===1||!U?.39:.31)+(!U&&h>0?.055:0),C,a,f);K.add(Y),t.add(K),T.push({axle:K,spinner:Y,front:U,radius:z}),Ft(n,be,[C*.39,.43,B-.17],[C*S,z+.02,B],.038),Ft(n,De,[C*.43,.29,B+.23],[C*S,z-.05,B],.049)}let P=c===4?-.39:.04;if(!u){Ct(n,o,[[-.72,.2,.46,.28],[P,.27,.48,.32],[.64,.2,.43,.25]],C*(c===4?.67:.73)),Ct(n,a,[[-.52,.1,.52,.09],[.15,.15,.55,.08],[.56,.11,.5,.06]],C*.89);for(let U=0;U<3;U++)ne(n,$n,De,C*.78,.63,-.12+U*.12,.22,.038,.057).rotation.z=C*.13}if(f&&u){let[U,B,z]=u?i.design.bodywork.tail:[_?1.44:1.605,1,h>=3?.52:.57],K=-U-.025,H=C*.42*B,Y=C*.83*B;Ft(n,De,[H,z,K],[Y,z+.047,K+.014],.068),Ft(n,Un,[H,z,K-.037],[Y,z+.047,K-.032],.023),Ft(n,Un,[Y,z+.047,K-.032],[C*.92*B,z+.103,K+.043],.021)}else if(f){let U=_?-1.44:-1.605,B=h>=3?.05:0;Ft(n,De,[C*.44,.57-B,U],[C*.87,.62-B,U+.06],.083),Ft(n,Un,[C*.45,.57-B,U-.056],[C*.82,.61-B,U+.005],.033),Ft(n,Un,[C*.82,.61-B,U+.005],[C*.93,.67-B,U+.103],.031)}else p&&u&&h===2||(ne(n,$n,Un,C*.63,.55,_?-1.4:-1.552,.27,.08,.068).rotation.y=C*.13);if(c===1||c===2||c===3)for(let U of[m,d]){if(u&&(U===d||c===1&&h===0||c===3))continue;let B=c===1?.94:u&&h===0?.63:.73,z=f&&U===d&&h>=2?.075:0;Ct(n,o,[[U-.55,.17+z,B-.22,.13],[U-.32,.26+z,B-.05,.24],[U+.06,.28+z,B,.22],[U+.41,.19+z,B-.15,.14]],C*.99),f&&U===d&&Ft(n,ze,[C*1.28,.58,U-.29],[C*1.3,.65,U+.18],.043)}}if(c===0){for(let C of[-1,1])ne(n,ui,Ss,C*.51,.49,1.43,.15,.1,.12),Ft(n,be,[C*.71,.31,1.55],[C*.88,.36,1.25],.042);Ft(n,be,[-.72,.31,1.55],[.72,.31,1.55],.052)}else if(c===1){for(let P of[-.47,0,.47])ne(n,Kn,be,P,.71,1.6,.144,.11,.144).rotation.x=Math.PI/2,ne(n,Kn,Ss,P,.71,1.67,.112,.023,.112).rotation.x=Math.PI/2;for(let P of[-.5,.5])Ft(n,De,[P,.65,-.86],[P,.7,1.75],.061),Ft(n,be,[P,.57,1.54],[P,.45,1.82],.052),Ft(n,be,[P,.72,-.93],[P,.7,.51],.05);let C=_?.52:.66;Ft(n,be,[-C,.47,1.8],[C,.47,1.8],.054)}else if(c===2){let C=f?ca:a;for(let P of[-.46,.46]){if(u){let[U,,B]=i.design.bodywork.nose,z=P*.85;Ft(n,De,[z-P*.26,B+.054,U-.14],[z+P*.27,B+.066,U-.24],.052),Ft(n,Ss,[z-P*.23,B+.074,U-.149],[z+P*.23,B+.084,U-.24],.022)}else ne(n,ui,Ss,P,.53,1.5,.21,.088,.103);if(u||ne(n,$n,C,P*.53,.719,1.02,.088,.015,.48),f&&!u){let U=h>=3?.065:0,B=_?.15:0;Ct(n,C,[[-1.56+B,.065,.637-U,.014],[-1.27+B,.065,.703-U,.014],[-.46+B,.065,.782-U,.014]],P*.52)}(!u||h>=2)&&Ft(n,be,[P,.6,-1.21],[P,.96,-1.43],.045)}if((!f||h===2)&&!i.aero&&!i.flagship){if(Ct(n,f?ze:a,[[-1.67,1.01,.96,.065],[-1.36,.98,.94,.082],[-1.21,.91,.91,.045]]),f)for(let P of[-1,1])Ct(n,o,[[-1.7,.044,.977,.15],[-1.44,.047,.949,.14],[-1.2,.032,.93,.11]],P*.99),Ft(n,je,[P*.48,.66,-1.27],[P*.63,.925,-1.51],.042);if(f)for(let P of[-.24,.24])Ct(n,ca,[[-1.67,.059,.998,.012],[-1.36,.059,.986,.012],[-1.21,.059,.938,.012]],P)}if(f&&h<2){let P=h===0?.68:.76;Ct(n,o,[[-1.48,.76,P,.065],[-1.32,.78,P-.045,.055]])}if(f&&h>=3&&!i.aero&&!i.flagship){let P=h===4,U=P?1.32:u?.93:1.13,B=P?-1.6:-1.92;for(let z of[-.72,.72])Ft(n,je,[z*.81,.62,-1.28],[z,U,B+.17],.052),Ct(n,o,[[B-.025,.041,U,.29],[B+.27,.043,U-.035,.3],[-1.28,.038,U-.09,.18]],z*1.39);if(Ct(n,o,[[B,1.04,U,.105],[B+.32,1.02,U-.055,.08],[-1.23,.91,U-.11,.04]]),Ct(n,P?a:ze,[[B+.04,.97,U-(P?.3:.17),.082],[B+.27,.93,U-(P?.34:.21),.064],[-1.25,.86,U-(P?.4:.23),.033]]),P){Ct(n,ze,[[-1.61,.49,.68,.17],[-1.17,.58,.73,.13],[-.93,.51,.74,.09]]),u&&Ct(n,o,[[-1.48,.041,.72,.16],[-1.23,.077,.87,.3],[-.83,.089,.91,.37],[-.45,.049,.85,.13]]);for(let z of[-.39,.39])Ct(n,ca,[[B,.045,U+.057,.013],[B+.32,.045,U-.009,.012],[-1.24,.042,U-.082,.01]],z)}}}else if(c===3){for(let C of[-1,1])ne(n,$n,Ss,C*.58,.486,1.3,.32,.04,.081).rotation.y=C*.45,(!u||h>=3)&&Ct(n,o,[[-1.72,.12,.76,.52],[-1.16,.17,.79,.36],[-.72,.13,.67,.23]],C*.89);g||Ct(n,a,[[-1.76,.98,.93,.051],[-1.45,.98,.91,.052],[-1.3,.85,.89,.037]])}else{for(let C of[-1,1])Ct(n,o,[[1.46,.38,.34,.095],[1.67,.43,.34,.12],[1.8,.45,.31,.065]],C*.6),Ct(n,a,[[1.41,.046,.43,.19],[1.79,.045,.41,.18]],C*1.02),g||(Ft(n,De,[C*.49,.64,-1.22],[C*.58,1.22,-1.46],.063),Ct(n,a,[[-1.65,.057,1.18,.29],[-1.26,.058,1.19,.24]],C*.95)),ne(n,$n,Ss,C*.74,.396,1.71,.18,.027,.054);g||(Ct(n,o,[[-1.72,.96,1.24,.09],[-1.31,.96,1.2,.11],[-1.19,.87,1.17,.055]]),Ct(n,De,[[-1.69,.82,1.11,.05],[-1.31,.82,1.08,.048]]))}if(!u&&(c===2||c===3))Ct(n,aa,[[-.8,.54,.76,.14],[-.56,.49,.96,.36],[-.09,.43,1.01,.39],[.38,.39,.81,.23],[.66,.38,.68,.13]]),Ct(n,o,[[-.79,.43,.97,.03],[-.4,.35,1.18,.045],[-.08,.29,1.2,.036]]);else if(!u||c!==2&&c!==3)if(u){let[C,P]=i.design.bodywork.cockpit;ne(n,ui,De,0,P-.11,-.42,C,.23,.43),ne(n,ui,c===4?o:a,0,P+.26,-.31,.27,.29,.29),ne(n,ui,aa,0,P+.28,-.085,.246,.124,.116),Ft(n,De,[-C*.69,P-.02,.13],[C*.69,P-.02,.13],.044)}else ne(n,ui,De,0,.72,-.42,.43,.32,.43),ne(n,ui,c===4?o:a,0,c===1?1.1:1,-.31,.3,.32,.32),ne(n,ui,aa,0,c===1?1.12:1.02,-.07,.277,.142,.126),Ft(n,De,[-.29,.77,.13],[.29,.77,.13],.044);if(g&&!i.flagship&&Wg(n,i,o,a),f||p||g){let C=h,P=(i.pipes[0]?.z??i.design.rearZ-.04)+.105,U=y.exhaust===2;Ct(n,ze,[[P,.86,.134,.09],[P+.25,.93,.165,.14],[P+.45,.85,.23,.17]]);for(let B of[-1,1]){let z=i.pipes.filter(Tt=>Math.sign(Tt.x)===B);if(!z.length)continue;let K=z.at(-1),H=z[0],Y=(H.x+K.x)/2,et=Math.abs(K.x-H.x)/2+.15,ot=(H.y+K.y)/2,pt=Math.min(...z.map(Tt=>Tt.z))+.065;if(Ct(n,ze,[[pt,et,ot,U?.42:.27],[pt+.21,et+.03,ot+.045,.34],[pt+.38,et*.8,ot+.07,.23]],Y),U){Ct(n,je,[[pt+.018,et-.012,ot+.14,.11],[pt+.12,et+.02,ot+.17,.13],[pt+.32,et*.82,ot+.16,.12]],Y);let Tt=B*(Math.abs(K.x)+.14);Ft(n,je,[H.x,.15,pt+.006],[Tt,.224,pt+.009],.024),Ft(n,je,[Tt,.224,pt+.009],[Tt,ot+.17,pt+.043],.024),Ct(n,ze,[[P-.047,.044,.107,.16],[P+.26,.051,.16,.22],[P+.47,.054,.24,.25]],B*.87)}if(p){Ft(n,be,[Y-et,ot+.19,pt-.04],[Y+et,ot+.19,pt-.04],.037);for(let Tt of[Y-et,Y+et])Ft(n,De,[Tt,ot+.18,pt-.04],[Tt,ot-.13,pt+.005],.028)}}if(C>=2||U){let B=C>=4?6:4;for(let z=0;z<B;z++){let K=(z-(B-1)/2)*.21;Ct(n,U?je:De,[[P-.04,.02,.086,.09],[P+.15,.025,.12,.15],[P+.38,.028,.19,.14]],K)}}if(p&&C>=2){for(let B of[-1,1])Ft(n,be,[B*.82,.49,-1.43],[B*.98,.49,-1.73],.049),C>=3&&Ft(n,De,[B*.98,.64,1.29],[B*.98,.64,1.76],.062);if(Ft(n,be,[-.94,.5,-1.72],[.94,.5,-1.72],C>=3?.073:.048),C===4&&Ft(n,a,[-.91,.78,1.68],[.91,.78,1.68],.056),i.flagship?.stage===2){let B=ne(n,Bi,ur,0,.95,-1.42,.3,.3,.14);B.rotation.x=-.27,ne(n,Kn,be,0,.95,-1.4,.16,.1,.16).rotation.x=Math.PI/2-.27}}}let w=y.suspension||(p&&h===4?2:0);if(w||f||p)for(let C of[-1,1]){Ft(n,be,[C*.81,.33,-.99],[C*.81,.8,-1],.034);for(let P=0;P<5;P++)ne(n,Bi,w?a:Dc,C*.81,.41+P*.065,-.99,.069,.069,.042).rotation.x=Math.PI/2;w===2&&Ft(n,a,[C*.69,.53,-.98],[C*.69,.77,-.98],.044)}if(y.differential||f||p){let C=3+y.differential;ne(n,$n,y.differential?be:Dc,0,.36,-1.46,.37,.16,.31);for(let P=0;P<C;P++)ne(n,$n,De,(P-(C-1)/2)*.062,.447,-1.46,.022,.024,.22)}for(let C of i.clay?[]:i.pipes){let P=R.get(C.mount),U=P?.node??n,B=new N(...C.direction).normalize(),z=new N(C.x,C.y,C.z);P&&z.sub(new N(...P.part.pivot));let K=z.clone().addScaledVector(B,p&&!i.oldGeometry?-.069:p?-.035:-.069);ne(U,Kn,je,...K,C.radius*(p?1.27:1.11),p?.105:.12,C.radius*(p?1.27:1.11)).quaternion.setFromUnitVectors(Lc,B),ne(U,Bi,y.exhaust===2?Vg:C.primary&&E?E:be,...z,C.radius,C.radius,C.radius).quaternion.setFromUnitVectors(new N(0,0,1),B);let et=z.clone().addScaledVector(B,.008);ne(U,Kn,De,...et,C.radius*.84,.014,C.radius*.84).quaternion.setFromUnitVectors(Lc,B)}Uc(n);for(let{node:C}of R.values())Uc(C);let D=n.children.find(C=>C.material===Un);return D.material=Un.clone(),e.add(n),!i.clay&&!u&&e.add(Gg(i,[.75,.995,.706,.67,.646][c],[1,.95,1.12,1.02,.75][c])),t.add(e),{root:t,body:e,wheels:T,rearLamp:D,accentLamp:E,tailParts:R}}function Nc(i,t){if(i.tailDeploy!==t){i.tailDeploy=t;for(let{node:e,part:n}of i.tailParts.values()){let{position:s,angle:r}=window.Kart.tailPartPose(n,t);e.position.set(...s),e.rotation[n.axis]=r}}}var Xg=new de({vertexColors:!0,roughness:.62,metalness:.14}),qh=new Cn(1,1,1,12).rotateZ(Math.PI/2);function Yh(i){let t=[];function e(r,o,a){let c=r.index?r.toNonIndexed():r.clone();c.applyMatrix4(o);for(let u of Object.keys(c.attributes))u!=="position"&&u!=="normal"&&c.deleteAttribute(u);let l=new Float32Array(c.attributes.position.count*3);for(let u=0;u<l.length;u+=3)a.toArray(l,u);c.setAttribute("color",new Ae(l,3)),t.push(c)}i.body.updateWorldMatrix(!0,!0),i.body.traverse(r=>{r.isMesh&&!r.material.map&&e(r.geometry,r.matrixWorld,r.material.color)});let n=new ue;for(let{axle:r,radius:o,front:a}of i.wheels)n.makeScale(a?.31:.43,o,o),n.setPosition(r.position),e(qh,n,ur.color),n.makeScale(.028,o*.62,o*.62),n.setPosition(r.position.x+Math.sign(r.position.x)*(a?.16:.22),r.position.y,r.position.z),e(qh,n,be.color);let s=new Ht(Pc(t),Xg);return t.forEach(r=>r.dispose()),s.visible=!1,s}var{clamp:fn,lerp:ha,roadAt:Nn,sceneryShade:Zh,trackVisualCue:qg,flameCue:Yg}=window.Kart,Fc=new Map,Bc=new Map,Oc=new Map,zc=new Map,_e,ua,Vc,da,Jh=!1,jh=new N,$h=new N,Kh=new N,Oi=new N,zi=new Se,Zg=new It("#ffc56f"),Jg=new It("#c69b74"),$g=new xn().setFromAxisAngle(new N(1,0,0),-Math.PI/2),di=window.matchMedia("(prefers-reduced-motion: reduce)"),Gc=window.matchMedia("(pointer: coarse)");function tu(i){if(Jh)return null;let t=document.createElement("canvas"),e=t.getContext("webgl2",{alpha:i,antialias:!0,powerPreference:"high-performance"});if(!e)return Jh=!0,null;let n=new ia({canvas:t,context:e,alpha:i,antialias:!0});return n.setClearColor("#151719",i?0:1),n.toneMapping=mo,n.toneMappingExposure=1.14,n}function eu(){if(!Vc){let t=document.createElement("canvas");t.width=t.height=96;let e=t.getContext("2d"),n=e.createRadialGradient(48,48,6,48,48,47);n.addColorStop(0,"#0c0c14cf"),n.addColorStop(.49,"#13121cb0"),n.addColorStop(1,"#15142500"),e.fillStyle=n,e.fillRect(0,0,96,96);for(let s of[20,76])for(let r of[31,65]){e.save(),e.translate(s,r),e.scale(1,.72);let o=e.createRadialGradient(0,0,2,0,0,13);o.addColorStop(0,"#070a14db"),o.addColorStop(.56,"#0a0c179e"),o.addColorStop(1,"#0a0c1700"),e.fillStyle=o,e.fillRect(-13,-13,26,26),e.restore()}Vc=new Qe(t)}let i=new Ht(new We(3.5,5.5),new $t({map:Vc,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return i.rotation.x=-Math.PI/2,i}function Qh(i){if(!da){let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"#ffffffb0"),s.addColorStop(.42,"#ffffff54"),s.addColorStop(1,"#ffffff00"),n.fillStyle=s,n.fillRect(0,0,64,64),da=new Qe(e),da.colorSpace=Ee}let t=new Ht(new We(2.75,2.55),new $t({color:i,map:da,transparent:!0,depthWrite:!1,blending:vn}));return t.visible=!1,t}function nu(){let i=tu(!0);if(!i)return null;let t=new Xn,e=new ra,n=new ys(i);t.environment=n.fromScene(e,.09).texture,t.environmentIntensity=.69,e.dispose(),n.dispose(),t.add(new Ai("#e0f1ff","#504353",1.35));for(let[r,o,a]of[["#fff3d6",2.25,[4,7,6]],["#bbcaff",1.25,[-5,3,-4]],["#ffffff",.9,[0,5,-5]]]){let c=new Ci(r,o);c.position.set(...a),t.add(c)}let s=eu();return s.position.y=.006,t.add(s),{renderer:i,scene:t,camera:new Ue(34,1,.1,100),current:null}}function Hc(i,t,e,n){let s=i.domElement;s.width===Math.floor(t*n)&&s.height===Math.floor(e*n)||i.setDrawingBufferSize(t,e,n)}var Kg=new de({color:"#a6afb6",roughness:.74});function Qg(i,t,e,n,s="whole",r=!1,o=0){if(_e||=nu(),!_e)return!1;let{width:a,height:c}=i.getBoundingClientRect();if(!a||!c)return!0;let l=Math.min(n?1.35:1.7,window.devicePixelRatio||1),u=Math.round(a),h=Math.round(c);Hc(_e.renderer,u,h,l);let f=r?`${t.modelKey}:clay`:t.modelKey;Fc.has(f)||Fc.set(f,la(r?{...t,clay:!0}:t));let p=Fc.get(f);Nc(p,o),i.dataset.tailDeploy=o.toFixed(2),i.dataset.pipes=String(t.pipes.length),_e.current!==p&&(_e.current&&_e.scene.remove(_e.current.root),_e.current=p,_e.scene.add(p.root));let g=_e.camera;g.aspect=u/h;let y={rear:[0,.48,-1.22,3.95,1.38],suspension:[.72,.57,-.9,3.6,1.62],differential:[0,.42,-1.18,3.45,1.17]};if(y[s]){let[d,S,M,_,b]=y[s],E=_*Math.max(1,1.12/g.aspect);g.position.set(d+Math.sin(e)*E,b,M+Math.cos(e)*E),g.lookAt(d,S,M)}else{let d=n?.71:e,S=(n?5.9:5.7)*Math.max(1,1.05/g.aspect);g.position.set(Math.sin(d)*S,n?3.05:3.12,Math.cos(d)*S),g.lookAt(0,n?.53:.58,0)}g.updateProjectionMatrix(),r&&p.root.traverse(d=>{d.isMesh&&(d.userData.studioMaterial=d.material,d.material=Kg)}),_e.renderer.render(_e.scene,g),r&&p.root.traverse(d=>{d.isMesh&&(d.material=d.userData.studioMaterial)});let m=i.getContext("2d");return(i.width!==_e.renderer.domElement.width||i.height!==_e.renderer.domElement.height)&&(i.width=_e.renderer.domElement.width,i.height=_e.renderer.domElement.height),m.setTransform(1,0,0,1,0,0),m.clearRect(0,0,i.width,i.height),m.drawImage(_e.renderer.domElement,0,0),i.dataset.renderer="webgl",!0}function Wc(i){return Oc.has(i.id)||Oc.set(i.id,Wh(i)),Oc.get(i.id)}function jg(i,t){if(_e||=nu(),!_e)return!1;let{width:e,height:n}=i.getBoundingClientRect();if(!e||!n)return!0;let s=Math.min(1.3,window.devicePixelRatio||1),r=Math.round(e),o=Math.round(n);Hc(_e.renderer,r,o,s);let a=Wc(t),c=t.length*{sunset:.146,coast:.43,city:.692,zootopia:.30}[t.id],l=Nn(t,c),u=new Ue(57,r/o,.15,1900);u.position.copy(ut(l,0,4.4)),u.lookAt(ut(Nn(t,c+42),0,1.6)),a.sky.position.copy(u.position);for(let{mesh:f}of a.scene.userData.detailBatches??[])f.visible=!0;_e.renderer.render(a.scene,u),(i.width!==_e.renderer.domElement.width||i.height!==_e.renderer.domElement.height)&&(i.width=_e.renderer.domElement.width,i.height=_e.renderer.domElement.height);let h=i.getContext("2d");return h.setTransform(1,0,0,1,0,0),h.drawImage(_e.renderer.domElement,0,0),i.dataset.renderer="webgl",!0}function t0(i){let t=tu(!1);if(!t)return null;let e=t.domElement;e.className="race-3d",e.setAttribute("aria-hidden","true"),e.addEventListener("webglcontextlost",h=>{h.preventDefault(),i.hidden=!1,e.hidden=!0,i.dataset.renderer="canvas"}),e.addEventListener("webglcontextrestored",()=>{e.hidden=!1,i.hidden=!0,i.dataset.renderer="webgl"}),i.after(e);let n=new Ue(57,1,.13,1900),s=new qn(new Zs(.08,0),new $t({color:"#ffffff",transparent:!0,opacity:.86,depthWrite:!1}),76);s.count=0,s.frustumCulled=!1;let r=new le;for(let[h,f]of[["position",3],["tint",3],["cloud",2]])r.setAttribute(h,new Ae(new Float32Array(90*f),f).setUsage(or));let o=new Ws(r,new ke({transparent:!0,depthWrite:!1,uniforms:{scale:{value:1}},vertexShader:`attribute vec3 tint; attribute vec2 cloud; uniform float scale; varying vec4 v;
      void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(cloud.x*scale/max(1.,-p.z),1.,72.);v=vec4(tint,cloud.y);}`,fragmentShader:`varying vec4 v; void main(){vec2 p=gl_PointCoord*2.-1.;
      float cloud=1.-smoothstep(.17,1.,length(p+vec2(.11*sin(p.y*7.),.10*cos(p.x*8.))));
      gl_FragColor=vec4(v.rgb,v.a*cloud*cloud);
      #include <colorspace_fragment>
    }`}));o.frustumCulled=!1,r.setDrawRange(0,0);let a=new le;a.setAttribute("position",new Ae(new Float32Array(3456),3).setUsage(or)),a.setDrawRange(0,0);let c=new Ht(a,new $t({color:"#101321",opacity:.38,transparent:!0,depthWrite:!1,side:Ie}));c.frustumCulled=!1;let l=new le;l.setAttribute("position",new Ae(new Float32Array(216),3).setUsage(or));let u=new Ht(l,new $t({transparent:!0,depthWrite:!1,side:Ie,blending:vn}));return u.frustumCulled=!1,u.visible=!1,{renderer:t,camera:n,canvas:e,particles:s,smoke:o,skidMarks:c,brakeGlow:Qh("#ff5147"),nitroGlow:Qh("#91dfff"),wakeTrail:u,states:[],cars:[],fov:57,boostPull:0}}var e0=new cs([new Rt(.5,0),new Rt(.73,.13),new Rt(.55,.38),new Rt(.26,.68),new Rt(.14,.88),new Rt(0,1)],12),n0=new cs([new Rt(.12,.53),new Rt(.59,.72),new Rt(.38,1.03),new Rt(.04,1.22)],9);function i0(i){let t=new Ve;for(let[e,n]of i.pipes.entries()){let s=new Ve;s.position.set(n.x,n.y,n.z),s.quaternion.setFromUnitVectors(new N(0,1,0),new N(...n.direction).normalize());let r=i.tailRig;s.userData={phase:e*(r?.style==="snap"?2.63:r?.style==="armor"?.76:1.63),primary:!!n.primary,pipe:n};for(let[a,c]of[1,.52].entries()){let l=new $t({color:a?r?.core??"#e2fcff":r?.color??n.accent??(n.primary?"#35b8ff":"#5e8eff"),transparent:!0,opacity:1,depthWrite:!1,blending:vn,toneMapped:!1}),u=new Ht(e0,l),h=n.radius*1.06*c,f=n.primary?1.36:.65;u.scale.set(h,f*(r?.length??1)*c,h),s.add(u)}let o=new Ht(n0,new ke({uniforms:{clock:{value:0},strength:{value:0}},transparent:!0,depthWrite:!1,blending:vn,vertexShader:"uniform float clock; varying vec2 v; void main(){v=uv; vec3 p=position; p.x+=sin(p.y*31.-clock*24.)*.17; p.z+=cos(p.y*24.-clock*19.)*.15; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform float clock,strength; varying vec2 v;void main(){float ripple=.5+.5*sin(v.y*29.-clock*29.+v.x*18.);gl_FragColor=vec4(.40,.66,.94,strength*ripple*sin(v.y*3.14159));}"}));o.scale.set(n.radius*1.52,n.primary?1.36:.65,n.radius*1.52),s.add(o),t.add(s)}return t}function s0(i,t){i.world&&(i.world.scene.remove(i.particles,i.smoke,i.skidMarks,i.brakeGlow,i.nitroGlow,i.wakeTrail,...i.cars.flatMap(r=>[r.root,r.shadow])),i.ghost&&i.world.scene.remove(i.ghost.root)),i.world=Wc(t.track),i.race=t,i.exhaust&&(i.exhaust.removeFromParent(),i.exhaust.traverse(r=>{r.isMesh&&r.material.dispose()}));let e=new Map;i.cars=[t,...t.opponents].map((r,o)=>{let a=e.get(r.car.id)||0;e.set(r.car.id,a+1);let c=`${r.car.modelKey}:${a}:${o===0?"player":"rival"}`;if(!Bc.has(c)){let l={...la(r.car),shadow:eu()};o>0&&Gc.matches&&(l.distant=Yh(l),l.root.add(l.distant)),Bc.set(c,l)}return Bc.get(c)}),i.world.scene.add(i.particles,i.smoke,i.skidMarks,i.brakeGlow,i.nitroGlow,i.wakeTrail,...i.cars.flatMap(r=>[r.root,r.shadow])),i.exhaust=i0(t.car),i.cars[0].body.add(i.exhaust),i.exhaust.visible=!1,i.ghost=null;let n=t.timing?.reference,s=n&&Kart.replayCar(n);if(s){if(!zc.has(s.modelKey)){let r=la(s);r.material=new $t({color:"#8be7ff",transparent:!0,opacity:.31,depthWrite:!1}),r.root.traverse(o=>{o.isMesh&&(o.material=r.material,o.renderOrder=3)}),zc.set(s.modelKey,r)}i.ghost=zc.get(s.modelKey),i.ghost.root.visible=!1,i.world.scene.add(i.ghost.root)}i.states=[],i.elapsed=t.elapsed,i.fov=57,i.boostPull=0,i.renderScale=1.22,i.frameAt=0,i.frameSamples=0,i.slowFrames=0,i.railContacts=0,i.carContacts=0,i.effectClock=0,i.trailHead=0,i.skidMarks.geometry.setDrawRange(0,0),i.lastSkid=null}function kc(i,t,e,n,s=!1){let r=Nn(t,e.distance),o=ut(r,e.x*oe,.041),a=Math.atan2(r.fx,r.fz);if(i.root.position.copy(o),i.root.rotation.set(-r.grade,a-(e.heading||0),-Math.atan(r.bank),"YXZ"),i.shadow&&(i.shadow.position.copy(o),i.shadow.quaternion.copy(i.root.quaternion).multiply($g)),i.distant){i.distant.visible=s,i.body.visible=!s;for(let{axle:c}of i.wheels)c.visible=!s}if(!s){i.rearLamp.material.emissive&&(i.rearLamp.material.emissiveIntensity=e.braking?4.4:1.4),i.body.rotation.z=(e.steer||0)*.022,Nc(i,e.tailDeploy??0);for(let{axle:c,spinner:l,front:u,radius:h}of i.wheels)c.rotation.y=u?-(e.steer||0)*.31:0,l.rotation.x+=e.speed*n/h}return{point:r,pos:o}}function r0(i,t){let e=Kart.wakeGuide(t),n=i.wakeTrail;if(n.visible=!!e,!e)return 0;let s=n.geometry.attributes.position,r=0;for(let o of e.segments){let a=Nn(t.track,t.distance+o.near),c=Nn(t.track,t.distance+o.far),l=ut(a,(o.from-o.width)*oe,.079),u=ut(a,(o.from+o.width)*oe,.079),h=ut(c,(o.to+o.width)*oe,.079),f=ut(c,(o.to-o.width)*oe,.079);for(let p of[l,u,h,l,h,f])s.setXYZ(r++,p.x,p.y,p.z)}return s.needsUpdate=!0,n.geometry.setDrawRange(0,r),n.material.color.set(e.color),n.material.opacity=.16+e.charge*.5,e.segments.length}function o0(i,t,e,n){let{states:s,particles:r,smoke:o,low:a}=i,c=i.lightEffects,l=i.cars[0].root,u=(d,S,M,_,b,E,R=1)=>{for(let I=0;I<b&&s.length<(a?26:c?46:90);I++){let T=t.elapsed*39+I*2.39,w=new N(d,S,M).applyQuaternion(l.quaternion).add(e.pos),D=jh.clone().multiplyScalar(_==="spark"?-9-I*.6:-2.4).add(new N(Math.sin(T)*(_==="spark"?3.4:1.4),_==="spark"?1.1+I*.28:.38+R*.72,Math.cos(T)*2));s.push({at:w,velocity:D,type:_,age:0,max:E*(.78+I%4*.11),slip:R})}};t.railContacts!==i.railContacts&&(i.railContacts=t.railContacts,u(-t.railSide*1.23,.39,-.72,"spark",a?5:c?7:11,.28)),t.carContacts!==i.carContacts&&(i.carContacts=t.carContacts,u(-t.contactSide*1.19,.34,t.contactSide?-.24:t.contactFront?1.61:-1.61,"spark",a?3:6,.17)),i.effectClock+=n;let h=fn(Math.abs(t.slip)*3.65,0,1);if(i.effectClock>=(a?.084:c?.058:.036)&&(i.effectClock=0,t.speed>20)){if(t.offroad||t.drifting)for(let d of[-1.05,1.05]){let S=t.offroad,M=!t.driftDirection||t.driftDirection*t.steer<-.08,_=S?1:h*(M?.43:1);u(d,.08,-.99,S?"sand":"smoke",_>.2?1:0,S?.53:M?.24:.39,_)}t.surface==="curb"&&t.railHit<.15&&u(-Math.sign(t.x)*1.1,.053,-1.01,"gravel",a?1:2,.22)}for(let d=s.length-1;d>=0;d--)s[d].age+=n,s[d].age>s[d].max&&s.splice(d,1);let f=0,p=0,{position:g,tint:y,cloud:m}=o.geometry.attributes;for(let d of s){let S=1-d.age/d.max;if(zi.position.copy(d.at).addScaledVector(d.velocity,d.age),d.type==="smoke"||d.type==="sand"){let M=d.type==="sand";g.setXYZ(p,...zi.position),y.setXYZ(p,M?.66:.68,M?.34:.73,M?.18:.81),m.setXY(p,(.31+d.age*(M?1.7:2.8))*(.68+d.slip*.33),S*(M?.42:.27)*d.slip),p++}else{let M=d.type==="spark";zi.position.y-=d.age*d.age*(M?9:13),zi.scale.set(M?2.65*S:.78*S,.55*S,.57*S),zi.rotation.y=-Math.atan2(d.velocity.z,d.velocity.x),zi.updateMatrix(),r.setMatrixAt(f,zi.matrix),r.setColorAt(f,M?Zg:Jg),f++}}r.count=f,o.geometry.setDrawRange(0,p),p&&(g.needsUpdate=y.needsUpdate=m.needsUpdate=!0),f&&(r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0))}function a0(i,t,e){if(i.low||!t.drifting||t.offroad||Math.abs(t.slip)<.13){i.lastSkid=null;return}if(e<=0)return;let n=i.skidMarks.geometry,s=n.attributes.position,r=i.lastSkid;if(r&&t.distance-r.distance<1.25)return;let o={distance:t.distance,x:t.x};if(i.lastSkid=o,!(!r||o.distance-r.distance>5)){for(let a of[-1,1]){let c=(g,y)=>{let m=Nn(t.track,g.distance-1.02),d=fn(g.x*oe+a*1.02+y,-m.width*oe,m.width*oe);return ut(m,d,.041)},[l,u,h,f]=[c(r,-.08),c(r,.08),c(o,.08),c(o,-.08)],p=i.trailHead%192*6;[l,u,h,l,h,f].forEach((g,y)=>s.setXYZ(p+y,g.x,g.y,g.z)),i.trailHead++}s.needsUpdate=!0,n.setDrawRange(0,Math.min(192,i.trailHead)*6)}}function c0(i){if(!Gc.matches)return 1.22;let t=performance.now(),e=t-i.frameAt;return i.frameAt=t,e<9||e>100||(i.frameSamples++,e>23&&i.slowFrames++,i.frameSamples===48&&(i.slowFrames>10?i.renderScale=Math.max(.94,i.renderScale-.07):i.slowFrames<4&&(i.renderScale=Math.min(1.22,i.renderScale+.035)),i.frameSamples=0,i.slowFrames=0)),i.renderScale}const ZOO_MOOD=[
  [0,{sky:new It(0x1a2444),horizon:new It(0x9a6672),fog:new It(0x2a2d4a),ambient:new It(0x93a7e8),sun:new It(0xffc08a),density:.00255,exposure:1.14,ambientI:1.58,sunI:1.56,night:.75}],
  [.04,{sky:new It(0x14375c),horizon:new It(0xd7f3ff),fog:new It(0xa6d5e5),ambient:new It(0xcfeaff),sun:new It(0xeaffff),density:.0034,exposure:1.26,ambientI:1.7,sunI:1.45,night:.38}],
  [.31,{sky:new It(0x3a1c2e),horizon:new It(0xffa35d),fog:new It(0x9a5c43),ambient:new It(0xffc58c),sun:new It(0xffd08a),density:.003,exposure:1.2,ambientI:1.75,sunI:1.6,night:.22}],
  [.44,{sky:new It(0x0f2b32),horizon:new It(0x6fe0c7),fog:new It(0x427f74),ambient:new It(0xbaf5e2),sun:new It(0xffe2a5),density:.0032,exposure:1.18,ambientI:1.65,sunI:1.4,night:.32}],
  [.56,{sky:new It(0x0b211b),horizon:new It(0x5d9a6e),fog:new It(0x234b3b),ambient:new It(0x9ed2ad),sun:new It(0xd7eaa8),density:.0043,exposure:1.08,ambientI:1.55,sunI:1.25,night:.45}],
  [.80,{sky:new It(0x2a2340),horizon:new It(0xffc46f),fog:new It(0x6d5150),ambient:new It(0xffdda8),sun:new It(0xffc37a),density:.0027,exposure:1.24,ambientI:1.7,sunI:1.55,night:.5}],
  [1,{sky:new It(0x2a2340),horizon:new It(0xffc46f),fog:new It(0x6d5150),ambient:new It(0xffdda8),sun:new It(0xffc37a),density:.0027,exposure:1.24,ambientI:1.7,sunI:1.55,night:.5}]
];
function zooMood(world,track,distance,renderer){
  const p=((distance/track.length)%1+1)%1;
  let i=0;
  while(i<ZOO_MOOD.length-1&&p>=ZOO_MOOD[i+1][0]) i++;
  const a=ZOO_MOOD[i],b=ZOO_MOOD[Math.min(ZOO_MOOD.length-1,i+1)];
  const span=b[0]-a[0],t=span?fn((p-a[0])/span,0,1):0;
  if(world.scene.fog){world.scene.fog.color.copy(a[1].fog).lerp(b[1].fog,t);world.scene.fog.density=ha(a[1].density,b[1].density,t);}
  if(world.scene.background?.copy) world.scene.background.copy(a[1].horizon).lerp(b[1].horizon,t);
  const u=world.sky?.material?.uniforms;
  if(u){u.sky?.value?.copy?.(a[1].sky)?.lerp?.(b[1].sky,t);u.horizon?.value?.copy?.(a[1].horizon)?.lerp?.(b[1].horizon,t);if(u.night)u.night.value=ha(a[1].night,b[1].night,t);}
  if(world.ambient){world.ambient.color.copy(a[1].ambient).lerp(b[1].ambient,t);world.ambient.intensity=ha(a[1].ambientI,b[1].ambientI,t);}
  if(world.sunlight){world.sunlight.color.copy(a[1].sun).lerp(b[1].sun,t);world.sunlight.intensity=ha(a[1].sunI,b[1].sunI,t);}
  if(renderer)renderer.toneMappingExposure=ha(a[1].exposure,b[1].exposure,t);
}
function l0(i,t){if(ua||=t0(i),!ua||ua.canvas.hidden)return!1;let e=ua,n=i.parentElement.clientWidth,s=i.parentElement.clientHeight;if(!n||!s)return!0;i.hidden||(i.hidden=!0),i.dataset.renderer!=="webgl"&&(i.dataset.renderer="webgl"),(e.race!==t||e.world!==Wc(t.track))&&s0(e,t);let{world:r,camera:o}=e,a=Math.round(n),c=Math.round(s),l=i.parentElement.dataset.quality;if(t.track.id==="zootopia")zooMood(r,t.track,t.distance,e.renderer);e.low=l==="low",e.lightEffects=Gc.matches&&l!=="high",e.skidMarks.visible=!e.low;let u=Math.min(e.low?.72:l==="balanced"?c0(e):a<900?1.45:1.36,window.devicePixelRatio||1);Hc(e.renderer,a,c,u),e.smoke.material.uniforms.scale.value=c*u*.8;let h=fn(t.elapsed-e.elapsed,0,.05);e.elapsed=t.elapsed;let f=kc(e.cars[0],t.track,t,h),p=e.brakeGlow;if(p.visible=!e.low&&t.braking&&((t.track.id==="city"||t.track.id==="zootopia")||Zh(t.track,t.distance)>.65),p.visible){let Y=Nn(t.track,t.distance-2.05);p.position.copy(ut(Y,t.x*oe,.064)),p.quaternion.copy(e.cars[0].shadow.quaternion)}let g=Yg(t),y=e.nitroGlow,m=t.wake,d=m?.burst>0?fn((m.burst/m.duration-.32)/.68,0,1):0,S=g.arming??0,M=Math.max(g.ignition,S*.42);i.dataset.wakeGuide=String(r0(e,t)),i.dataset.wakeBurst=(m?.burst??0).toFixed(2);let _=e.cars[0].accentLamp;_&&(_.emissiveIntensity=.58+(t.tailDeploy??0)*.43+Math.max(S,Math.min(1,g.strength))*(di.matches?.15:.72)+t.exitDrive*.47+d*.86);let b=d>M;if(y.visible=Math.max(d,M)>.045,y.visible){y.material.color.set(b?m.color:t.car.tailRig?.color??t.car.flagship?.accent??"#91dfff");let Y=Nn(t.track,t.distance-(b?3.5:2.45));y.position.copy(ut(Y,t.x*oe,.076)),y.quaternion.copy(e.cars[0].shadow.quaternion),y.scale.set(b?.9:1.18,b?2.3:1.34,1),y.material.opacity=(b?d*.73:M)*(di.matches?.4:.86)}if(e.exhaust.visible=g.strength>0,e.exhaust.visible)for(let Y of e.exhaust.children){let et=Y.userData.pipe;if(et.mount){let Qt=Kart.tailPipe(t.car,et,t.tailDeploy??0);Y.position.set(Qt.x,Qt.y,Qt.z),Y.quaternion.setFromUnitVectors(new N(0,1,0),new N(...Qt.direction).normalize())}let ot=di.matches?.48:.5+.5*Math.sin(t.elapsed*37+Y.userData.phase);Y.scale.y=(.88+ot*.17)*g.strength;let pt=Math.min(1,g.strength);Y.children[0].material.opacity=((Y.userData.primary?.67:.48)+ot*.21)*pt,Y.children[1].material.opacity=(.74+ot*.18)*pt;let Tt=Y.children[2];Tt.visible=l==="high"&&!di.matches&&g.phase==="steady",Tt.material.uniforms.clock.value=t.elapsed+Y.userData.phase,Tt.material.uniforms.strength.value=Y.userData.primary?.17:.09}i.dataset.flamePhase=g.phase,i.dataset.tailDeploy=(t.tailDeploy??0).toFixed(2),i.dataset.trackCue=qg(t.track,t.distance)?.zone??"",i.dataset.quality=l,i.dataset.pipes=String(t.car.pipes.length),i.dataset.emitters=String(e.exhaust.children.length),i.dataset.activeEmitters=t.boost>0?i.dataset.emitters:"0";let E=t.surface==="curb"?Math.sin(t.distance*2.6)*Math.min(.11,t.speed*.0016):0;e.cars[0].body.position.y=E*.38;for(let Y of e.cars[0].wheels){let ot=-Math.sign(Y.axle.position.x)===Math.sign(t.x)?E*(Y.front?1:.65):0;Y.axle.position.y=Y.radius+ot}for(let[Y,et]of t.opponents.entries()){let ot=e.cars[Y+1];if(ot.root.visible=ot.shadow.visible=!et.retired,!et.retired){let pt=Math.abs(Kart.wrap(et.distance-t.distance+t.track.length/2,t.track.length)-t.track.length/2),Tt=!!(ot.distant&&l!=="high"&&pt>(ot.distant.visible?28:35));kc(ot,t.track,et,h,Tt);let Qt=et.wake?.burst??0;ot.accentLamp&&(ot.accentLamp.emissiveIntensity=.58+(Qt>0?Qt*(di.matches?.34:1.2):0))}}if(e.ghost){let Y=Kart.ghostAt(t);e.ghost.root.visible=!!(Y&&Math.abs(Y.distance-t.distance)<410),e.ghost.root.visible&&(e.ghost.material.opacity=ha(.075,.31,fn(Math.hypot(Y.distance-t.distance,(Y.x-t.x)*oe)/5,0,1)),kc(e.ghost,t.track,Y,h))}jh.set(f.point.fx,0,f.point.fz),o0(e,t,f,h),a0(e,t,h);let R=fn(t.speed/100,0,1),I=t.boostChain?ha(.22,1,fn((t.boostDuration-t.boost)/.24,0,1)):1,T=di.matches?0:t.boost>0?I:m?.burst>0?.35:S*.28;e.boostPull=ha(e.boostPull,T,1-Math.exp(-h*6));let w=a<c,D=(w?65:55)+R*8+e.boostPull*6;e.portrait!==w?e.fov=D:e.fov=ha(e.fov,D,h>0?1-Math.exp(-h*6):.15),e.portrait=w,o.fov=e.fov,o.aspect=a/c;let C=fn((c/a-1)*2.65,0,4),P=Nn(t.track,t.distance-9.65-C-R*.8-e.boostPull*.9),U=fn(t.x*(w?.86:.74),-P.rail+.33,P.rail-.33);Kh.copy(ut(P,U*oe,(w?5.4:4.9)+(di.matches?0:E*.76))),o.position.copy(Kh);let B=Nn(t.track,t.distance+18+R*10);if($h.copy(ut(B,t.x*oe*(w?.46:.31),w?1.22:1.35)),o.lookAt($h),o.updateProjectionMatrix(),w){o.updateMatrixWorld(),Oi.copy(f.pos),Oi.y+=.58,Oi.project(o);let Y=Math.tan(o.fov*Math.PI/360),et=Y*o.aspect,ot=fn(Oi.x,-.27,.27),pt=fn(Oi.y,-.6,-.32);o.rotateY(Math.atan(ot*et)-Math.atan(Oi.x*et)),o.rotateX(Math.atan(Oi.y*Y)-Math.atan(pt*Y))}let z=Math.max(t.hit,t.railHit),K=f.point.bank*.3-t.lateral*.018+(di.matches?0:Math.sin(t.elapsed*68)*z*.13);o.rotateZ(fn(K,w?-.042:-.075,w?.042:.075)),r.sky.position.copy(o.position);for(let{mesh:Y,range:et}of r.scene.userData.detailBatches??[]){let ot=et+(Y.visible?25:0);Y.visible=!e.lightEffects||Y.boundingSphere.center.distanceToSquared(o.position)<ot*ot}if(r.scene.userData.water){let Y=r.scene.userData.water.material.uniforms;Y.clock.value=t.elapsed,Y.low.value=+(l!=="high")}let H=Zh(t.track,t.distance);return t.track.id==="sunset"&&(r.sunlight.intensity=3.55-H*3.25,r.ambient.intensity=1.9+H*.25),i.dataset.shade=H.toFixed(2),e.renderer.render(r.scene,o),!0}function ZootopiaProps(scene,track){
  function label(title,sub,accent){
    const canvas=document.createElement('canvas');
    canvas.width=640;canvas.height=160;
    const g=canvas.getContext('2d');
    g.fillStyle='#0a1424';g.fillRect(0,0,640,160);
    g.strokeStyle=accent;g.lineWidth=7;g.strokeRect(7,7,626,146);
    g.fillStyle='#f4f7ef';g.textAlign='center';
    g.font='900 52px "Microsoft YaHei",Arial,sans-serif';
    g.fillText(title,320,72);
    g.fillStyle=accent;g.font='700 25px Arial,sans-serif';
    g.fillText(sub,320,120);
    const texture=new Qe(canvas);texture.colorSpace=Ee;
    return texture;
  }
  function add(geometry,color,position,yaw,scale){
    const mesh=new Ht(geometry,jt(color,.82));
    mesh.position.copy(position);
    mesh.rotation.y=yaw;
    if(scale) mesh.scale.set(...scale);
    scene.add(mesh);
    return mesh;
  }
  function gate(distance,title,sub,accent){
    const road=Pe(track,distance);
    const yaw=Math.atan2(road.fx,road.fz);
    const side=distance%400<200?-1:1;
    const lateral=road.rail*oe+2.8;
    const post=new Ht(new un(.22,4.9,.22),jt('#1d2a3e',.78));
    post.position.copy(ut(road,side*lateral,2.45));
    post.rotation.y=yaw;
    scene.add(post);
    const sign=new Ht(new We(4.8,1.24),new $t({map:label(title,sub,accent),transparent:true,side:Ie}));
    sign.position.copy(ut(road,side*lateral,4.45)).addScaledVector(new N(road.fx,0,road.fz),-.12);
    sign.rotation.y=yaw+Math.PI/2*side;
    scene.add(sign);
    const lamp=new Ht(new un(.34,.12,.34),jt(accent,.5));
    lamp.position.copy(ut(road,side*lateral,4.96));
    scene.add(lamp);
  }
  function pair(distance,side,offset,geometry,color,height,yaw=0,scale=null){
    const road=Pe(track,distance);
    return add(geometry,color,ut(road,side*(road.rail*oe+offset),height),Math.atan2(road.fx,road.fz)+yaw,scale);
  }
  function ground(distance,side,offset,width,depth,color,height=.02){
    const road=Pe(track,distance);
    return add(new un(1,1,1),color,ut(road,side*(road.rail*oe+offset),height),Math.atan2(road.fx,road.fz),[width,.035,depth]);
  }
  function portal(distance,title,sub,accent,color){
    const road=Pe(track,distance),yaw=Math.atan2(road.fx,road.fz),half=road.rail*oe+2.6;
    for(const side of [-1,1]){
      add(new un(.42,7.4,.42),color,ut(road,side*half,3.7),yaw);
      add(new un(.82,.32,.82),accent,ut(road,side*half,7.55),yaw);
      add(new un(.16,1.15,.16),accent,ut(road,side*half,6.85),yaw);
    }
    add(new un(half*2+.8,.72,.55),accent,ut(road,0,8.15),yaw);
    const sign=new Ht(new We(5.8,1.05),new $t({map:label(title,sub,accent),transparent:true,side:Ie}));
    sign.position.copy(ut(road,0,8.16)).addScaledVector(new N(road.fx,0,road.fz),-.62);
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }
  // Zootopia: Hot Pursuit — public ride route reconstructed from the
  // official attraction description and ride-through reports:
  // ZPD -> Tundratown -> Sahara Square -> Mystic Springs Oasis ->
  // Rainforest District -> Savanna Central / Zootopia Day.
  // No Little Rodentia / Skyline "district" gates: those are scenery,
  // not stops on the ride.
  gate(track.length*.018,'ZPD','动物城警局 · 新警报到','#8fcfff');
  portal(track.length*.060,'TUNDRATOWN','冰川镇 · 雪地追捕','#8fe8ff','#2a4d63');
  portal(track.length*.315,'SAHARA SQUARE','撒哈拉广场 · 沙漠市场','#ffb45e','#5a3b2e');
  portal(track.length*.445,'MYSTIC SPRINGS','神秘泉绿洲 · 请勿停留','#6fe3d1','#2f5b52');
  portal(track.length*.565,'RAINFOREST','雨林区 · 空中缆车','#78d69b','#26402e');
  portal(track.length*.805,'SAVANNA CENTRAL','稀树草原中心 · 全城派对','#ffd36e','#4a3c56');

  // ZPD headquarters + loading plaza at the start/finish.
  {
    const d=track.length*.018, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz);
    const side=-1, lateral=road.rail*oe+8;
    add(new un(16,10,12),'#2d4f7d',ut(road,side*lateral,5),yaw);
    add(new un(17,.55,13),'#a9d6ff',ut(road,side*lateral,10.15),yaw);
    add(new un(5,.45,1.1),'#13233b',ut(road,side*(lateral+1.1),7.4),yaw);
    const sign=new Ht(new We(5.6,1.18),new $t({map:label('ZPD','动物城警局 · 热力追踪','#8fcfff'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,side*(lateral+1.1),7.4)).addScaledVector(new N(road.fx,0,road.fz),-.2);
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
    for(let i=0;i<3;i++){
      const x=ut(road,side*(road.rail*oe+2.1),.55);
      x.addScaledVector(new N(road.fx,0,road.fz),(i-1)*2.1);
      add(new un(1.05,.62,1.85),'#d9e7ee',x,yaw);
      add(new un(.62,.16,1.48),'#1b2e45',x.clone().setY(x.y+.39),yaw);
      add(new un(.32,.12,.25),'#ff6767',x.clone().setY(x.y+.55),yaw);
    }
  }

  // Tundratown: ice blocks, snow caps and the fish cannery.
  for(let d=track.length*.075;d<track.length*.295;d+=32){
    const side=d%64<32?1:-1;
    pair(d,side,9.0,new un(6.0,1.15,10),'#d9f2fb',.58,0);
    pair(d+15,side,10.5,new Cn(.55,.78,3.4,6),'#bfe8f5',1.7,0);
    pair(d,side,6.0,new un(2.6,2.8,2.2),'#b9e6f4',1.5,0);
    pair(d+7,side,7.6,new un(2.9,.26,2.5),'#f2fbff',3.02,0);
    pair(d+11,-side,6.2,new un(1.5,1.7,1.4),'#d9f4fb',.9,0);
    pair(d+18,side,6.0,new wi(1.4,7,5),'#e9f8ff',.25,0,[1.8,.3,1.4]);
  }
  // District silhouettes: large, low-detail masses outside the rails so each
  // biome reads at speed without blocking the driving line.
  for(let d=track.length*.085;d<track.length*.30;d+=48){
    const road=Pe(track,d),side=d%96<48?1:-1,yaw=Math.atan2(road.fx,road.fz);
    add(new un(13,6.5,18),'#86aebf',ut(road,side*(road.rail*oe+17),3.2),yaw);
    add(new un(15,.6,20),'#d9eff8',ut(road,side*(road.rail*oe+17),6.7),yaw);
    add(new Cn(.9,1.2,5.5,6),'#bfe8f5',ut(road,side*(road.rail*oe+13),2.7),yaw);
  }
  for(let d=track.length*.33;d<track.length*.43;d+=46){
    const road=Pe(track,d),side=d%92<46?1:-1,yaw=Math.atan2(road.fx,road.fz);
    add(new un(12,5,16),'#b97a4c',ut(road,side*(road.rail*oe+17),2.5),yaw);
    add(new un(13,.4,17),side>0?'#e2b47a':'#d9a35f',ut(road,side*(road.rail*oe+17),5.2),yaw);
    add(new Cn(.16,.22,5.2,6),'#8c6242',ut(road,side*(road.rail*oe+13),2.6),yaw);
  }
  for(let d=track.length*.465;d<track.length*.545;d+=34){
    const road=Pe(track,d),side=d%68<34?1:-1,yaw=Math.atan2(road.fx,road.fz);
    add(new un(14,2.8,10),'#6c6258',ut(road,side*(road.rail*oe+16),1.4),yaw);
    add(new Cn(.16,.22,5.5,6),'#76583c',ut(road,side*(road.rail*oe+12),2.7),yaw);
  }
  for(let d=track.length*.59;d<track.length*.79;d+=44){
    const road=Pe(track,d),side=d%88<44?1:-1,yaw=Math.atan2(road.fx,road.fz);
    add(new Cn(1.1,1.5,11,7),'#4c3a2a',ut(road,side*(road.rail*oe+16),5.5),yaw);
    add(new wi(3.3,8,6),'#2f7a4f',ut(road,side*(road.rail*oe+16),11.2),yaw,[1.6,.9,1.6]);
  }
  for(let d=track.length*.825;d<track.length*.915;d+=38){
    const road=Pe(track,d),side=d%76<38?1:-1,yaw=Math.atan2(road.fx,road.fz);
    add(new un(9,14,9),'#3f4e6e',ut(road,side*(road.rail*oe+18),7),yaw);
    add(new un(9.3,.35,9.3),'#a8d8ff',ut(road,side*(road.rail*oe+18),14.1),yaw);
    add(new un(2.2,5.6,2.2),'#5d4c73',ut(road,side*(road.rail*oe+24),2.8),yaw);
  }

  // A denser snow-bank corridor makes the first cold section readable at speed.
  for(let d=track.length*.064;d<track.length*.145;d+=10){
    const side=d%20<10?1:-1;
    pair(d,side,5.2,new un(9,1.4,7),'#e8f8ff',.72,0);
    pair(d+5,-side,6.4,new Cn(.45,.65,2.4,6),'#c7eef8',1.22,0);
    pair(d+7,side,8.0,new un(5,1.8,5),'#d9f2fb',.92,0);
  }
  {
    const d=track.length*.18, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz), side=d%400<200?-1:1;
    add(new un(15,6.5,11),'#5b7c91',ut(road,side*(road.rail*oe+12),3.25),yaw);
    add(new un(15.5,.5,11.5),'#d9f2fb',ut(road,side*(road.rail*oe+12),6.55),yaw);
    const sign=new Ht(new We(5.2,1.1),new $t({map:label('FISH CANNERY','冰川镇 · 鱼罐头工厂','#8fe8ff'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,side*(road.rail*oe+2.4),5.2)).addScaledVector(new N(road.fx,0,road.fz),-.2);
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }

  // Freight crossing on the Tundratown -> Sahara Square transition.
  {
    const d=track.length*.335, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz);
    for(const offset of [-.78,.78]){
      add(new un(.22,.05,road.rail*2.35),'#9aa0ab',ut(road,offset,.035),yaw+Math.PI/2);
    }
    for(const side of [-1,1]){
      const base=ut(road,side*(road.rail*oe+1.2),1.25);
      add(new un(.18,2.5,.18),'#303845',base,yaw);
      add(new un(.52,.18,.52),'#222a36',base.clone().setY(base.y+1.25),yaw);
      add(new un(.28,.28,.28),'#ff5d5d',base.clone().setY(base.y+1.42),yaw);
      add(new un(.28,.28,.28),'#ff5d5d',base.clone().setY(base.y+1.12),yaw);
    }
    const trainSide=1;
    for(let i=0;i<3;i++){
      const t=ut(road,trainSide*(road.rail*oe+20+i*7.6),1.45);
      add(new un(2.45,2.7,7.3),i%2?'#9a5247':'#4c6675',t,yaw+Math.PI/2);
      add(new un(2.55,.28,7.4),'#d9d2c0',t.clone().setY(t.y+1.48),yaw+Math.PI/2);
      for(const wheel of [-1,1]) for(const along of [-2.2,2.2]){
        const w=ut(road,trainSide*(road.rail*oe+20+i*7.6)+along,0);
        w.y=t.y-1.45;add(new Cn(.28,.28,.16,8),'#262b31',w,yaw+Math.PI/2);
      }
    }
    const sign=new Ht(new We(4.4,1.05),new $t({map:label('FREIGHT','货运列车 · 注意通行','#ffb36e'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,-(road.rail*oe+3.2),4.7));
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }

  // Sahara Square: dunes, palms, market awnings and shade sails.
  for(let d=track.length*.315;d<track.length*.435;d+=38){
    const side=d%76<38?1:-1;
    pair(d,side,9.5,new wi(2.2,10,6),'#c99563',.02,0,[2.2,.36,2.4]);
    pair(d+12,side,11,new Cn(.12,.18,4.2,6),'#8c6242',2.0,0);
    pair(d+12,side,11,new wi(1.35,8,5),'#6e8d45',3.9,0,[1.3,.42,1.3]);
    pair(d+23,-side,9.0,new un(2.0,1.2,2.0),'#b98357',.6,0);
    pair(d+26,side,12.0,new un(3.4,.10,3.4),d%76<38?'#d9a35f':'#b55c4d',2.5,0);
  }

  // Mystic Springs Oasis: hot pool, rocks, palms and steam.
  {
    const d=track.length*.49, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz), side=1;
    add(new un(17,.10,11),'#2e9f9b',ut(road,side*(road.rail*oe+9),.10),yaw);
    add(new un(17.8,.22,11.8),'#d8c38b',ut(road,side*(road.rail*oe+9),-.04),yaw);
    for(let i=0;i<7;i++){
      const a=i/7*Math.PI*2, r=7.4+Math.sin(i*3.1)*1.2;
      add(new wi(1.15+i%2*.35,7,5),'#6c6258',
        ut(road,side*(road.rail*oe+8)+Math.cos(a)*r,.9+Math.sin(i*2.3)*.25),
        yaw+i*.4,[1.3,.72,1.1]);
    }
    for(let i=0;i<5;i++){
      const palm=ut(road,side*(road.rail*oe+9),3.0);
      palm.addScaledVector(new N(road.fx,0,road.fz),(i-2)*2.0);
      add(new Cn(.14,.20,5.2,6),'#76583c',palm,yaw+i*.2);
      add(new wi(1.9,7,5),'#4e8d4c',palm.clone().setY(palm.y+2.65),yaw,[1.4,.55,1.4]);
    }
    const steam=new $t({color:'#d9f4ef',transparent:true,opacity:.20,depthWrite:false});
    for(let i=0;i<6;i++){
      const s=new Ht(new wi(1.2,8,6),steam);
      s.position.copy(ut(road,side*(road.rail*oe+8),1.0+i*.22));
      s.position.addScaledVector(new N(road.fx,0,road.fz),(i-3)*1.6);
      s.scale.set(1.2+i*.18,1.6,.9);scene.add(s);
    }
    const sign=new Ht(new We(5.2,1.1),new $t({map:label('MYSTIC SPRINGS','神秘泉绿洲 · 温泉','#6fe3d1'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,side*(road.rail*oe+3.0),4.8));
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }

  // Rainforest District: canopy, vines and the aerial tramway.
  for(let d=track.length*.575;d<track.length*.795;d+=28){
    const side=d%56<28?1:-1;
    pair(d,side,8.5,new Cn(.18,.26,5.6,7),'#4c3a2a',2.8,0);
    pair(d,side,8.5,new wi(2.3,8,6),'#2f7a4f',6.1,0,[1.5,.85,1.5]);
    pair(d+9,-side,8.0,new wi(1.7,7,5),'#3d9460',3.8,0,[1.2,.8,1.2]);
    pair(d+15,side,7.0,new Cn(.06,.09,3.6,5),'#6ca86a',4.4,0);
  }
  {
    const d=track.length*.66, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz);
    const span=(road.rail*oe+8.0)*2;
    for(const side of [-1,1]){
      const base=ut(road,side*(road.rail*oe+8.0),6);
      add(new Cn(.16,.22,12,6),'#4c3b2a',base,yaw);
      add(new un(1.2,.22,1.2),'#384037',base.clone().setY(base.y+6),yaw);
    }
    add(new un(span,.08,.08),'#3f4541',ut(road,0,12.0),yaw);
    add(new un(.055,.055,34),'#3f4541',ut(road,0,12.0),yaw);
    const gondola=add(new un(1.8,1.5,1.8),'#c65b4a',ut(road,0,10.35),yaw);
    add(new un(.08,1.4,.08),'#3f4541',gondola.position.clone().setY(gondola.position.y+1.5),yaw);
    add(new un(1.9,.12,1.9),'#7a352e',gondola.position.clone().setY(gondola.position.y+.82),yaw);
    const sign=new Ht(new We(4.6,1.0),new $t({map:label('AERIAL TRAM','雨林区 · 空中缆车','#78d69b'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,-(road.rail*oe+2.8),5.2));
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }

  // Savanna Central: skyline, Big Donut truck and the Zootopia Day stage.
  for(let d=track.length*.815;d<track.length*.915;d+=32){
    const side=d%64<32?1:-1;
    pair(d,side,12.0,new un(3.0,8.5,3.0),'#425575',4.2,0);
    pair(d,side,12.0,new un(2.2,5.6,2.2),'#5d4c73',2.8,0);
    pair(d,side,12.0,new un(3.2,.18,3.2),'#a8d8ff',8.5,0);
  }
  {
    const d=track.length*.925, road=Pe(track,d), yaw=Math.atan2(road.fx,road.fz), side=d%400<200?1:-1;
    add(new un(5.4,2.5,3.2),'#e8d7b0',ut(road,side*(road.rail*oe+8.0),1.25),yaw);
    add(new un(5.7,.18,3.5),'#f6e7c8',ut(road,side*(road.rail*oe+8.0),2.55),yaw);
    add(new Cn(1.8,1.8,.38,16),'#b96b3d',ut(road,side*(road.rail*oe+8.0),3.0),yaw+Math.PI/2);
    add(new Cn(.85,.85,.44,16),'#f2c98a',ut(road,side*(road.rail*oe+8.0),3.0),yaw+Math.PI/2);
    const sign=new Ht(new We(3.8,.9),new $t({map:label('BIG DONUT','全城派对 · 甜甜圈','#ffb45e'),transparent:true,side:Ie}));
    sign.position.copy(ut(road,side*(road.rail*oe+2.2),3.8));
    sign.rotation.y=yaw+Math.PI;scene.add(sign);
  }
  {
    const stage=Pe(track,track.length*.965),stageYaw=Math.atan2(stage.fx,stage.fz);
    add(new un(20,1.2,10),'#4a2d6b',ut(stage,stage.rail*oe+10,.6),stageYaw);
    add(new un(16,7.2,1.2),'#2a1c45',ut(stage,stage.rail*oe+13,3.6),stageYaw);
    for(const side of [-1,1]){
      add(new un(2.6,8.0,1.4),'#3d244f',ut(stage,stage.rail*oe+10+side*7.6,4.0),stageYaw);
      add(new un(1.4,.18,1.4),'#e6b8ff',ut(stage,stage.rail*oe+10+side*7.6,8.1),stageYaw);
    }
    const gaz=new Ht(new We(6.4,1.5),new $t({map:label('GAZELLE','全城疯唱 · TRY EVERYTHING','#e6b8ff'),transparent:true,side:Ie}));
    gaz.position.copy(ut(stage,stage.rail*oe+11,6.4)).addScaledVector(new N(stage.fx,0,stage.fz),-.4);
    gaz.rotation.y=stageYaw+Math.PI;scene.add(gaz);
    for(const side of [-1,1]) for(const height of [2.6,4.2,5.8]){
      const lamp=add(new Cn(.18,.32,1.8,6),'#c9a7ff',ut(stage,side*(stage.rail*oe+7),height),stageYaw+side*.4);
      lamp.rotation.z=side*.55;
    }
    for(let i=0;i<8;i++){
      const color=['#ffb45e','#e6b8ff','#78d69b','#8fcfff'][i%4];
      const x=ut(stage,stage.rail*oe+7+(i%4)*2.4,.5);
      x.addScaledVector(new N(stage.fx,0,stage.fz),(i-4)*1.2);
      add(new wi(.34,6,4),color,x,stageYaw);
    }
  }
}
window.Kart3D={garage:Qg,preview:jg,raceFrame:l0};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
