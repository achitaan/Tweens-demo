import{c as Da,N as Lt,S as Cn,C as $e,F as qr,V as Se,R as Zr,a as mt,w as ii,M as kt,W as Ri,b as tn,d as st,L as qt,H as In,U as zt,D as Et,B as At,e as fn,f as Nn,p as Ua,E as Ia,g as je,P as $t,A as Na,h as Hn,i as Ct,j as wn,k as _i,l as un,m as dn,n as jr,o as Oa,q as Ft,r as yn,s as Fa,t as Ba,u as on,O as Ga,v as Ha,x as Va,y as ka,z as za,G as Wa,I as Xa,J as Ya,K as Ka,Q as qa,T as Za,X as ja,Y as $a,Z as Qa,_ as Ja,$ as $r,a0 as Qr,a1 as Jr,a2 as An,a3 as Gt,a4 as sn,a5 as ea,a6 as Qt,a7 as eo,a8 as to,a9 as no,aa as io,ab as ta,ac as ro,ad as ao,ae as oo,af as na,ag as Ve,ah as so,ai as co,aj as lo,ak as Wt,al as pn,am as xt,an as _t,ao as ia,ap as Vt,aq as yt,ar as Pn,as as ra,at as aa,au as oa,av as sa,aw as fo,ax as uo,ay as po,az as ho,aA as ca,aB as Ht,aC as mo,aD as _o,aE as go,aF as la,aG as vo,aH as fa,aI as ua,aJ as Vn,aK as kn,aL as zn,aM as Wn,aN as et,aO as bi,aP as Ci,aQ as wi,aR as yi,aS as Pi,aT as Li,aU as Di,aV as Ui,aW as Ii,aX as Ni,aY as Oi,aZ as Fi,a_ as Bi,a$ as Gi,b0 as Hi,b1 as Vi,b2 as ki,b3 as zi,b4 as Wi,b5 as Xi,b6 as Yi,b7 as Ki,b8 as qi,b9 as Zi,ba as ji,bb as $i,bc as Qi,bd as Ji,be as ri,bf as ai,bg as oi,bh as si,bi as ci,bj as li,bk as fi,bl as Eo,bm as er,bn as So,bo as Rn,bp as Mo,bq as tr,br as nr,bs as ir,bt as ui,bu as di,bv as To,bw as da,bx as xo,by as On,bz as Ao,bA as Ro,bB as pa,bC as ha,bD as rr,bE as ma,bF as ar,bG as _a,bH as hn,bI as nn,bJ as pi,bK as Ln,bL as bo,bM as ga,bN as Co,bO as or,bP as ht,bQ as wo,bR as yo,bS as Po,bT as Lo,bU as Do,bV as Uo,bW as Io,bX as No,bY as Oo,bZ as Fo,b_ as Bo,b$ as Go,c0 as Ho,c1 as Vo,c2 as ko,c3 as zo,c4 as Wo,c5 as Xo,c6 as Yo,c7 as Jt,c8 as Zt,c9 as en,ca as sr,cb as Ko,cc as mn,cd as Xn,ce as qo,cf as Zo,cg as Dn,ch as jo,ci as hi,cj as $o,ck as va,cl as cr,cm as Pt,cn as Qo,co as Jo,cp as lr,cq as Yn,cr as es,cs as ts,ct as ns,cu as fr,cv as ur,cw as Kn,cx as is,cy as dr,cz as pr,cA as hr,cB as mr,cC as rs,cD as as,cE as os,cF as vn,cG as En,cH as ss,cI as cs,cJ as ls,cK as fs,cL as us,cM as Yt}from"./index-D4urgBBY.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ea(){let e=null,t=!1,n=null,i=null;function a(r,o){n(r,o),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ds(e){const t=new WeakMap;function n(s,h){const g=s.array,A=s.usage,_=g.byteLength,T=e.createBuffer();e.bindBuffer(h,T),e.bufferData(h,g,A),s.onUploadCallback();let S;if(g instanceof Float32Array)S=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=e.HALF_FLOAT;else if(g instanceof Uint16Array)s.isFloat16BufferAttribute?S=e.HALF_FLOAT:S=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=e.SHORT;else if(g instanceof Uint32Array)S=e.UNSIGNED_INT;else if(g instanceof Int32Array)S=e.INT;else if(g instanceof Int8Array)S=e.BYTE;else if(g instanceof Uint8Array)S=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:T,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:s.version,size:_}}function i(s,h,g){const A=h.array,_=h.updateRanges;if(e.bindBuffer(g,s),_.length===0)e.bufferSubData(g,0,A);else{_.sort((S,D)=>S.start-D.start);let T=0;for(let S=1;S<_.length;S++){const D=_[T],C=_[S];C.start<=D.start+D.count+1?D.count=Math.max(D.count,C.start+C.count-D.start):(++T,_[T]=C)}_.length=T+1;for(let S=0,D=_.length;S<D;S++){const C=_[S];e.bufferSubData(g,C.start*A.BYTES_PER_ELEMENT,A,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const h=t.get(s);h&&(e.deleteBuffer(h.buffer),t.delete(s))}function o(s,h){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const A=t.get(s);(!A||A.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const g=t.get(s);if(g===void 0)t.set(s,n(s,h));else if(g.version<s.version){if(g.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,s,h),g.version=s.version}}return{get:a,remove:r,update:o}}var ps=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hs=`#ifdef USE_ALPHAHASH
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
#endif`,ms=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_s=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Es=`#ifdef USE_AOMAP
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
#endif`,Ss=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ms=`#ifdef USE_BATCHING
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
#endif`,Ts=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,As=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bs=`#ifdef USE_IRIDESCENCE
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
#endif`,Cs=`#ifdef USE_BUMPMAP
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
#endif`,ws=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ys=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ps=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ls=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ds=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Us=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Is=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ns=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Os=`#define PI 3.141592653589793
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
} // validated`,Fs=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bs=`vec3 transformedNormal = objectNormal;
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
#endif`,Gs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ks=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zs="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ws=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xs=`#ifdef USE_ENVMAP
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
#endif`,Ys=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ks=`#ifdef USE_ENVMAP
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
#endif`,qs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zs=`#ifdef USE_ENVMAP
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
#endif`,js=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$s=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Js=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ec=`#ifdef USE_GRADIENTMAP
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
}`,tc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rc=`uniform bool receiveShadow;
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
#endif`,ac=`#ifdef USE_ENVMAP
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
#endif`,oc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fc=`PhysicalMaterial material;
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
#endif`,uc=`struct PhysicalMaterial {
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
}`,dc=`
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
#endif`,pc=`#if defined( RE_IndirectDiffuse )
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
#endif`,hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_c=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ec=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tc=`#if defined( USE_POINTS_UV )
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
#endif`,xc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ac=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wc=`#ifdef USE_MORPHTARGETS
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
#endif`,yc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ic=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nc=`#ifdef USE_NORMALMAP
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
#endif`,Oc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$c=`float getShadowMask() {
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
}`,Qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jc=`#ifdef USE_SKINNING
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
#endif`,el=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tl=`#ifdef USE_SKINNING
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
#endif`,nl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,il=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,al=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ol=`#ifdef USE_TRANSMISSION
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
#endif`,sl=`#ifdef USE_TRANSMISSION
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
#endif`,cl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ll=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ul=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pl=`uniform sampler2D t2D;
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
}`,hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ml=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_l=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vl=`#include <common>
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
}`,El=`#if DEPTH_PACKING == 3200
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
}`,Sl=`#define DISTANCE
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
}`,Ml=`#define DISTANCE
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
}`,Tl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Al=`uniform float scale;
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
}`,Rl=`uniform vec3 diffuse;
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
}`,bl=`#include <common>
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
}`,Cl=`uniform vec3 diffuse;
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
}`,wl=`#define LAMBERT
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
}`,yl=`#define LAMBERT
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
}`,Pl=`#define MATCAP
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
}`,Ll=`#define MATCAP
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
}`,Dl=`#define NORMAL
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
}`,Ul=`#define NORMAL
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
}`,Il=`#define PHONG
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
}`,Nl=`#define PHONG
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
}`,Ol=`#define STANDARD
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
}`,Fl=`#define STANDARD
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
}`,Bl=`#define TOON
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
}`,Gl=`#define TOON
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
}`,Hl=`uniform float size;
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
}`,Vl=`uniform vec3 diffuse;
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
}`,kl=`#include <common>
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
}`,zl=`uniform vec3 color;
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
}`,Wl=`uniform float rotation;
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
}`,Xl=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:ps,alphahash_pars_fragment:hs,alphamap_fragment:ms,alphamap_pars_fragment:_s,alphatest_fragment:gs,alphatest_pars_fragment:vs,aomap_fragment:Es,aomap_pars_fragment:Ss,batching_pars_vertex:Ms,batching_vertex:Ts,begin_vertex:xs,beginnormal_vertex:As,bsdfs:Rs,iridescence_fragment:bs,bumpmap_pars_fragment:Cs,clipping_planes_fragment:ws,clipping_planes_pars_fragment:ys,clipping_planes_pars_vertex:Ps,clipping_planes_vertex:Ls,color_fragment:Ds,color_pars_fragment:Us,color_pars_vertex:Is,color_vertex:Ns,common:Os,cube_uv_reflection_fragment:Fs,defaultnormal_vertex:Bs,displacementmap_pars_vertex:Gs,displacementmap_vertex:Hs,emissivemap_fragment:Vs,emissivemap_pars_fragment:ks,colorspace_fragment:zs,colorspace_pars_fragment:Ws,envmap_fragment:Xs,envmap_common_pars_fragment:Ys,envmap_pars_fragment:Ks,envmap_pars_vertex:qs,envmap_physical_pars_fragment:ac,envmap_vertex:Zs,fog_vertex:js,fog_pars_vertex:$s,fog_fragment:Qs,fog_pars_fragment:Js,gradientmap_pars_fragment:ec,lightmap_pars_fragment:tc,lights_lambert_fragment:nc,lights_lambert_pars_fragment:ic,lights_pars_begin:rc,lights_toon_fragment:oc,lights_toon_pars_fragment:sc,lights_phong_fragment:cc,lights_phong_pars_fragment:lc,lights_physical_fragment:fc,lights_physical_pars_fragment:uc,lights_fragment_begin:dc,lights_fragment_maps:pc,lights_fragment_end:hc,logdepthbuf_fragment:mc,logdepthbuf_pars_fragment:_c,logdepthbuf_pars_vertex:gc,logdepthbuf_vertex:vc,map_fragment:Ec,map_pars_fragment:Sc,map_particle_fragment:Mc,map_particle_pars_fragment:Tc,metalnessmap_fragment:xc,metalnessmap_pars_fragment:Ac,morphinstance_vertex:Rc,morphcolor_vertex:bc,morphnormal_vertex:Cc,morphtarget_pars_vertex:wc,morphtarget_vertex:yc,normal_fragment_begin:Pc,normal_fragment_maps:Lc,normal_pars_fragment:Dc,normal_pars_vertex:Uc,normal_vertex:Ic,normalmap_pars_fragment:Nc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Fc,clearcoat_pars_fragment:Bc,iridescence_pars_fragment:Gc,opaque_fragment:Hc,packing:Vc,premultiplied_alpha_fragment:kc,project_vertex:zc,dithering_fragment:Wc,dithering_pars_fragment:Xc,roughnessmap_fragment:Yc,roughnessmap_pars_fragment:Kc,shadowmap_pars_fragment:qc,shadowmap_pars_vertex:Zc,shadowmap_vertex:jc,shadowmask_pars_fragment:$c,skinbase_vertex:Qc,skinning_pars_vertex:Jc,skinning_vertex:el,skinnormal_vertex:tl,specularmap_fragment:nl,specularmap_pars_fragment:il,tonemapping_fragment:rl,tonemapping_pars_fragment:al,transmission_fragment:ol,transmission_pars_fragment:sl,uv_pars_fragment:cl,uv_pars_vertex:ll,uv_vertex:fl,worldpos_vertex:ul,background_vert:dl,background_frag:pl,backgroundCube_vert:hl,backgroundCube_frag:ml,cube_vert:_l,cube_frag:gl,depth_vert:vl,depth_frag:El,distanceRGBA_vert:Sl,distanceRGBA_frag:Ml,equirect_vert:Tl,equirect_frag:xl,linedashed_vert:Al,linedashed_frag:Rl,meshbasic_vert:bl,meshbasic_frag:Cl,meshlambert_vert:wl,meshlambert_frag:yl,meshmatcap_vert:Pl,meshmatcap_frag:Ll,meshnormal_vert:Dl,meshnormal_frag:Ul,meshphong_vert:Il,meshphong_frag:Nl,meshphysical_vert:Ol,meshphysical_frag:Fl,meshtoon_vert:Bl,meshtoon_frag:Gl,points_vert:Hl,points_frag:Vl,shadow_vert:kl,shadow_frag:zl,sprite_vert:Wl,sprite_frag:Xl},ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bt={basic:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ht([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ht([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ht([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ht([ae.common,ae.displacementmap,{referencePosition:{value:new Se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ht([ae.lights,ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};bt.physical={uniforms:ht([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Sn={r:0,b:0,g:0},It=new ma,Yl=new kt;function Kl(e,t,n,i,a,r,o){const s=new $e(0);let h=r===!0?0:1,g,A,_=null,T=0,S=null;function D(P){let v=P.isScene===!0?P.background:null;return v&&v.isTexture&&(v=(P.backgroundBlurriness>0?n:t).get(v)),v}function C(P){let v=!1;const I=D(P);I===null?c(s,h):I&&I.isColor&&(c(I,1),v=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(P,v){const I=D(v);I&&(I.isCubeTexture||I.mapping===On)?(A===void 0&&(A=new _t(new ha(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:rr(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(w,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(A)),It.copy(v.backgroundRotation),It.x*=-1,It.y*=-1,It.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),A.material.uniforms.envMap.value=I,A.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,A.material.uniforms.backgroundRotation.value.setFromMatrix4(Yl.makeRotationFromEuler(It)),A.material.toneMapped=st.getTransfer(I.colorSpace)!==et,(_!==I||T!==I.version||S!==e.toneMapping)&&(A.material.needsUpdate=!0,_=I,T=I.version,S=e.toneMapping),A.layers.enableAll(),P.unshift(A,A.geometry,A.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new _t(new sa(2,2),new Wt({name:"BackgroundMaterial",uniforms:rr(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=st.getTransfer(I.colorSpace)!==et,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||T!==I.version||S!==e.toneMapping)&&(g.material.needsUpdate=!0,_=I,T=I.version,S=e.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function c(P,v){P.getRGB(Sn,pa(e)),i.buffers.color.setClear(Sn.r,Sn.g,Sn.b,v,o)}function U(){A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return s},setClearColor:function(P,v=1){s.set(P),h=v,c(s,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,c(s,h)},render:C,addToRenderList:f,dispose:U}}function ql(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=T(null);let r=a,o=!1;function s(d,b,H,K,W){let X=!1;const Y=_(K,H,b);r!==Y&&(r=Y,g(r.object)),X=S(d,K,H,W),X&&D(d,K,H,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(d,b,H,K),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return e.createVertexArray()}function g(d){return e.bindVertexArray(d)}function A(d){return e.deleteVertexArray(d)}function _(d,b,H){const K=H.wireframe===!0;let W=i[d.id];W===void 0&&(W={},i[d.id]=W);let X=W[b.id];X===void 0&&(X={},W[b.id]=X);let Y=X[K];return Y===void 0&&(Y=T(h()),X[K]=Y),Y}function T(d){const b=[],H=[],K=[];for(let W=0;W<n;W++)b[W]=0,H[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:K,object:d,attributes:{},index:null}}function S(d,b,H,K){const W=r.attributes,X=b.attributes;let Y=0;const ne=H.getAttributes();for(const k in ne)if(ne[k].location>=0){const Te=W[k];let xe=X[k];if(xe===void 0&&(k==="instanceMatrix"&&d.instanceMatrix&&(xe=d.instanceMatrix),k==="instanceColor"&&d.instanceColor&&(xe=d.instanceColor)),Te===void 0||Te.attribute!==xe||xe&&Te.data!==xe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==K}function D(d,b,H,K){const W={},X=b.attributes;let Y=0;const ne=H.getAttributes();for(const k in ne)if(ne[k].location>=0){let Te=X[k];Te===void 0&&(k==="instanceMatrix"&&d.instanceMatrix&&(Te=d.instanceMatrix),k==="instanceColor"&&d.instanceColor&&(Te=d.instanceColor));const xe={};xe.attribute=Te,Te&&Te.data&&(xe.data=Te.data),W[k]=xe,Y++}r.attributes=W,r.attributesNum=Y,r.index=K}function C(){const d=r.newAttributes;for(let b=0,H=d.length;b<H;b++)d[b]=0}function f(d){c(d,0)}function c(d,b){const H=r.newAttributes,K=r.enabledAttributes,W=r.attributeDivisors;H[d]=1,K[d]===0&&(e.enableVertexAttribArray(d),K[d]=1),W[d]!==b&&(e.vertexAttribDivisor(d,b),W[d]=b)}function U(){const d=r.newAttributes,b=r.enabledAttributes;for(let H=0,K=b.length;H<K;H++)b[H]!==d[H]&&(e.disableVertexAttribArray(H),b[H]=0)}function P(d,b,H,K,W,X,Y){Y===!0?e.vertexAttribIPointer(d,b,H,W,X):e.vertexAttribPointer(d,b,H,K,W,X)}function v(d,b,H,K){C();const W=K.attributes,X=H.getAttributes(),Y=b.defaultAttributeValues;for(const ne in X){const k=X[ne];if(k.location>=0){let Ee=W[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&d.instanceMatrix&&(Ee=d.instanceMatrix),ne==="instanceColor"&&d.instanceColor&&(Ee=d.instanceColor)),Ee!==void 0){const Te=Ee.normalized,xe=Ee.itemSize,Ge=t.get(Ee);if(Ge===void 0)continue;const Qe=Ge.buffer,Ye=Ge.type,Ne=Ge.bytesPerElement,z=Ye===e.INT||Ye===e.UNSIGNED_INT||Ee.gpuType===ca;if(Ee.isInterleavedBufferAttribute){const q=Ee.data,de=q.stride,ie=Ee.offset;if(q.isInstancedInterleavedBuffer){for(let le=0;le<k.locationSize;le++)c(k.location+le,q.meshPerAttribute);d.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<k.locationSize;le++)f(k.location+le);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let le=0;le<k.locationSize;le++)P(k.location+le,xe/k.locationSize,Ye,Te,de*Ne,(ie+xe/k.locationSize*le)*Ne,z)}else{if(Ee.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)c(k.location+q,Ee.meshPerAttribute);d.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let q=0;q<k.locationSize;q++)f(k.location+q);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let q=0;q<k.locationSize;q++)P(k.location+q,xe/k.locationSize,Ye,Te,xe*Ne,xe/k.locationSize*q*Ne,z)}}else if(Y!==void 0){const Te=Y[ne];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(k.location,Te);break;case 3:e.vertexAttrib3fv(k.location,Te);break;case 4:e.vertexAttrib4fv(k.location,Te);break;default:e.vertexAttrib1fv(k.location,Te)}}}}U()}function I(){V();for(const d in i){const b=i[d];for(const H in b){const K=b[H];for(const W in K)A(K[W].object),delete K[W];delete b[H]}delete i[d]}}function w(d){if(i[d.id]===void 0)return;const b=i[d.id];for(const H in b){const K=b[H];for(const W in K)A(K[W].object),delete K[W];delete b[H]}delete i[d.id]}function N(d){for(const b in i){const H=i[b];if(H[d.id]===void 0)continue;const K=H[d.id];for(const W in K)A(K[W].object),delete K[W];delete H[d.id]}}function V(){m(),o=!0,r!==a&&(r=a,g(r.object))}function m(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:V,resetDefaultState:m,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:f,disableUnusedAttributes:U}}function Zl(e,t,n){let i;function a(g){i=g}function r(g,A){e.drawArrays(i,g,A),n.update(A,i,1)}function o(g,A,_){_!==0&&(e.drawArraysInstanced(i,g,A,_),n.update(A,i,_))}function s(g,A,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,A,0,_);let S=0;for(let D=0;D<_;D++)S+=A[D];n.update(S,i,1)}function h(g,A,_,T){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let D=0;D<g.length;D++)o(g[D],A[D],T[D]);else{S.multiDrawArraysInstancedWEBGL(i,g,0,A,0,T,0,_);let D=0;for(let C=0;C<_;C++)D+=A[C]*T[C];n.update(D,i,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=h}function jl(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(N){return!(N!==Ct&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(N){const V=N===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==zt&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ht&&!V)}function h(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const A=h(g);A!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",A,"instead."),g=A);const _=n.logarithmicDepthBuffer===!0,T=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),U=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),P=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=D>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:s,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:T,maxTextures:S,maxVertexTextures:D,maxTextureSize:C,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:v,vertexTextures:I,maxSamples:w}}function $l(e){const t=this;let n=null,i=0,a=!1,r=!1;const o=new na,s=new Ve,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,T){const S=_.length!==0||T||i!==0||a;return a=T,i=_.length,S},this.beginShadows=function(){r=!0,A(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,T){n=A(_,T,0)},this.setState=function(_,T,S){const D=_.clippingPlanes,C=_.clipIntersection,f=_.clipShadows,c=e.get(_);if(!a||D===null||D.length===0||r&&!f)r?A(null):g();else{const U=r?0:i,P=U*4;let v=c.clippingState||null;h.value=v,v=A(D,T,P,S);for(let I=0;I!==P;++I)v[I]=n[I];c.clippingState=v,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function A(_,T,S,D){const C=_!==null?_.length:0;let f=null;if(C!==0){if(f=h.value,D!==!0||f===null){const c=S+C*4,U=T.matrixWorldInverse;s.getNormalMatrix(U),(f===null||f.length<c)&&(f=new Float32Array(c));for(let P=0,v=S;P!==C;++P,v+=4)o.copy(_[P]).applyMatrix4(U,s),o.normal.toArray(f,v),f[v+3]=o.constant}h.value=f,h.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,f}}function Ql(e){let t=new WeakMap;function n(o,s){return s===ui?o.mapping=hn:s===di&&(o.mapping=nn),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ui||s===di)if(t.has(o)){const h=t.get(o).texture;return n(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const g=new To(h.height);return g.fromEquirectangularTexture(e,o),t.set(o,g),o.addEventListener("dispose",a),n(g.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const h=t.get(s);h!==void 0&&(t.delete(s),h.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const jt=4,_r=[.125,.215,.35,.446,.526,.582],Bt=20,qn=new pi,gr=new $e;let Zn=null,jn=0,$n=0,Qn=!1;const Ot=(1+Math.sqrt(5))/2,Kt=1/Ot,vr=[new Se(-Ot,Kt,0),new Se(Ot,Kt,0),new Se(-Kt,0,Ot),new Se(Kt,0,Ot),new Se(0,Ot,-Kt),new Se(0,Ot,Kt),new Se(-1,1,-1),new Se(1,1,-1),new Se(-1,1,1),new Se(1,1,1)],Jl=new Se;class Er{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:o=256,position:s=Jl}=r;Zn=this._renderer.getRenderTarget(),jn=this._renderer.getActiveCubeFace(),$n=this._renderer.getActiveMipmapLevel(),Qn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,a,h,s),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zn,jn,$n),this._renderer.xr.enabled=Qn,t.scissorTest=!1,Mn(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===hn||t.mapping===nn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zn=this._renderer.getRenderTarget(),jn=this._renderer.getActiveCubeFace(),$n=this._renderer.getActiveMipmapLevel(),Qn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:In,format:Ct,colorSpace:Nn,depthBuffer:!1},a=Sr(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sr(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=tf(r,t,n)}return a}_compileMaterial(t){const n=new _t(this._lodPlanes[0],t);this._renderer.compile(n,qn)}_sceneToCubeUV(t,n,i,a,r){const h=new $t(90,1,n,i),g=[1,-1,1,1,1,1],A=[1,1,1,-1,-1,-1],_=this._renderer,T=_.autoClear,S=_.toneMapping;_.getClearColor(gr),_.toneMapping=Lt,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const C=new Ln({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),f=new _t(new ha,C);let c=!1;const U=t.background;U?U.isColor&&(C.color.copy(U),t.background=null,c=!0):(C.color.copy(gr),c=!0);for(let P=0;P<6;P++){const v=P%3;v===0?(h.up.set(0,g[P],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+A[P],r.y,r.z)):v===1?(h.up.set(0,0,g[P]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+A[P],r.z)):(h.up.set(0,g[P],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+A[P]));const I=this._cubeSize;Mn(a,v*I,P>2?I:0,I,I),_.setRenderTarget(a),c&&_.render(f,h),_.render(t,h)}f.geometry.dispose(),f.material.dispose(),_.toneMapping=S,_.autoClear=T,t.background=U}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===hn||t.mapping===nn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mr());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const h=this._cubeSize;Mn(n,0,0,3*h,2*h),i.setRenderTarget(n),i.render(o,qn)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=vr[(a-r-1)%vr.length];this._blur(t,r-1,r,o,s)}n.autoClear=i}_blur(t,n,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,a,"latitudinal",r),this._halfBlur(o,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,o,s){const h=this._renderer,g=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const A=3,_=new _t(this._lodPlanes[a],g),T=g.uniforms,S=this._sizeLods[i]-1,D=isFinite(r)?Math.PI/(2*S):2*Math.PI/(2*Bt-1),C=r/D,f=isFinite(r)?1+Math.floor(A*C):Bt;f>Bt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bt}`);const c=[];let U=0;for(let N=0;N<Bt;++N){const V=N/C,m=Math.exp(-V*V/2);c.push(m),N===0?U+=m:N<f&&(U+=2*m)}for(let N=0;N<c.length;N++)c[N]=c[N]/U;T.envMap.value=t.texture,T.samples.value=f,T.weights.value=c,T.latitudinal.value=o==="latitudinal",s&&(T.poleAxis.value=s);const{_lodMax:P}=this;T.dTheta.value=D,T.mipInt.value=P-i;const v=this._sizeLods[a],I=3*v*(a>P-jt?a-P+jt:0),w=4*(this._cubeSize-v);Mn(n,I,w,3*v,2*v),h.setRenderTarget(n),h.render(_,qn)}}function ef(e){const t=[],n=[],i=[];let a=e;const r=e-jt+1+_r.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);n.push(s);let h=1/s;o>e-jt?h=_r[o-e+jt-1]:o===0&&(h=0),i.push(h);const g=1/(s-2),A=-g,_=1+g,T=[A,A,_,A,_,_,A,A,_,_,A,_],S=6,D=6,C=3,f=2,c=1,U=new Float32Array(C*D*S),P=new Float32Array(f*D*S),v=new Float32Array(c*D*S);for(let w=0;w<S;w++){const N=w%3*2/3-1,V=w>2?0:-1,m=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];U.set(m,C*D*w),P.set(T,f*D*w);const d=[w,w,w,w,w,w];v.set(d,c*D*w)}const I=new pn;I.setAttribute("position",new xt(U,C)),I.setAttribute("uv",new xt(P,f)),I.setAttribute("faceIndex",new xt(v,c)),t.push(I),a>jt&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Sr(e,t,n){const i=new tn(e,t,n);return i.texture.mapping=On,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mn(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function tf(e,t,n){const i=new Float32Array(Bt),a=new Se(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Bt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gi(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Mr(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gi(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Tr(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function gi(){return`

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
	`}function nf(e){let t=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const h=s.mapping,g=h===ui||h===di,A=h===hn||h===nn;if(g||A){let _=t.get(s);const T=_!==void 0?_.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==T)return n===null&&(n=new Er(e)),_=g?n.fromEquirectangular(s,_):n.fromCubemap(s,_),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),_.texture;if(_!==void 0)return _.texture;{const S=s.image;return g&&S&&S.height>0||A&&S&&a(S)?(n===null&&(n=new Er(e)),_=g?n.fromEquirectangular(s):n.fromCubemap(s),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),s.addEventListener("dispose",r),_.texture):null}}}return s}function a(s){let h=0;const g=6;for(let A=0;A<g;A++)s[A]!==void 0&&h++;return h===g}function r(s){const h=s.target;h.removeEventListener("dispose",r);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function rf(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ii("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function af(e,t,n,i){const a={},r=new WeakMap;function o(_){const T=_.target;T.index!==null&&t.remove(T.index);for(const D in T.attributes)t.remove(T.attributes[D]);T.removeEventListener("dispose",o),delete a[T.id];const S=r.get(T);S&&(t.remove(S),r.delete(T)),i.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,n.memory.geometries--}function s(_,T){return a[T.id]===!0||(T.addEventListener("dispose",o),a[T.id]=!0,n.memory.geometries++),T}function h(_){const T=_.attributes;for(const S in T)t.update(T[S],e.ARRAY_BUFFER)}function g(_){const T=[],S=_.index,D=_.attributes.position;let C=0;if(S!==null){const U=S.array;C=S.version;for(let P=0,v=U.length;P<v;P+=3){const I=U[P+0],w=U[P+1],N=U[P+2];T.push(I,w,w,N,N,I)}}else if(D!==void 0){const U=D.array;C=D.version;for(let P=0,v=U.length/3-1;P<v;P+=3){const I=P+0,w=P+1,N=P+2;T.push(I,w,w,N,N,I)}}else return;const f=new(Co(T)?bo:ga)(T,1);f.version=C;const c=r.get(_);c&&t.remove(c),r.set(_,f)}function A(_){const T=r.get(_);if(T){const S=_.index;S!==null&&T.version<S.version&&g(_)}else g(_);return r.get(_)}return{get:s,update:h,getWireframeAttribute:A}}function of(e,t,n){let i;function a(T){i=T}let r,o;function s(T){r=T.type,o=T.bytesPerElement}function h(T,S){e.drawElements(i,S,r,T*o),n.update(S,i,1)}function g(T,S,D){D!==0&&(e.drawElementsInstanced(i,S,r,T*o,D),n.update(S,i,D))}function A(T,S,D){if(D===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,r,T,0,D);let f=0;for(let c=0;c<D;c++)f+=S[c];n.update(f,i,1)}function _(T,S,D,C){if(D===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<T.length;c++)g(T[c]/o,S[c],C[c]);else{f.multiDrawElementsInstancedWEBGL(i,S,0,r,T,0,C,0,D);let c=0;for(let U=0;U<D;U++)c+=S[U]*C[U];n.update(c,i,1)}}this.setMode=a,this.setIndex=s,this.render=h,this.renderInstances=g,this.renderMultiDraw=A,this.renderMultiDrawInstances=_}function sf(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=s*(r/3);break;case e.LINES:n.lines+=s*(r/2);break;case e.LINE_STRIP:n.lines+=s*(r-1);break;case e.LINE_LOOP:n.lines+=s*r;break;case e.POINTS:n.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function cf(e,t,n){const i=new WeakMap,a=new mt;function r(o,s,h){const g=o.morphTargetInfluences,A=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,_=A!==void 0?A.length:0;let T=i.get(s);if(T===void 0||T.count!==_){let m=function(){N.dispose(),i.delete(s),s.removeEventListener("dispose",m)};T!==void 0&&T.texture.dispose();const S=s.morphAttributes.position!==void 0,D=s.morphAttributes.normal!==void 0,C=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],U=s.morphAttributes.color||[];let P=0;S===!0&&(P=1),D===!0&&(P=2),C===!0&&(P=3);let v=s.attributes.position.count*P,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*I*4*_),N=new da(w,v,I,_);N.type=Ht,N.needsUpdate=!0;const V=P*4;for(let d=0;d<_;d++){const b=f[d],H=c[d],K=U[d],W=v*I*4*d;for(let X=0;X<b.count;X++){const Y=X*V;S===!0&&(a.fromBufferAttribute(b,X),w[W+Y+0]=a.x,w[W+Y+1]=a.y,w[W+Y+2]=a.z,w[W+Y+3]=0),D===!0&&(a.fromBufferAttribute(H,X),w[W+Y+4]=a.x,w[W+Y+5]=a.y,w[W+Y+6]=a.z,w[W+Y+7]=0),C===!0&&(a.fromBufferAttribute(K,X),w[W+Y+8]=a.x,w[W+Y+9]=a.y,w[W+Y+10]=a.z,w[W+Y+11]=K.itemSize===4?a.w:1)}}T={count:_,texture:N,size:new je(v,I)},i.set(s,T),s.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let S=0;for(let C=0;C<g.length;C++)S+=g[C];const D=s.morphTargetsRelative?1:1-S;h.getUniforms().setValue(e,"morphTargetBaseInfluence",D),h.getUniforms().setValue(e,"morphTargetInfluences",g)}h.getUniforms().setValue(e,"morphTargetsTexture",T.texture,n),h.getUniforms().setValue(e,"morphTargetsTextureSize",T.size)}return{update:r}}function lf(e,t,n,i){let a=new WeakMap;function r(h){const g=i.render.frame,A=h.geometry,_=t.get(h,A);if(a.get(_)!==g&&(t.update(_),a.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",s)===!1&&h.addEventListener("dispose",s),a.get(h)!==g&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const T=h.skeleton;a.get(T)!==g&&(T.update(),a.set(T,g))}return _}function o(){a=new WeakMap}function s(h){const g=h.target;g.removeEventListener("dispose",s),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:r,dispose:o}}const Sa=new Go,xr=new jr(1,1),Ma=new da,Ta=new Bo,xa=new Fo,Ar=[],Rr=[],br=new Float32Array(16),Cr=new Float32Array(9),wr=new Float32Array(4);function rn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Ar[a];if(r===void 0&&(r=new Float32Array(a),Ar[a]=r),t!==0){i.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=n,e[o].toArray(r,s)}return r}function lt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ft(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Fn(e,t){let n=Rr[t];n===void 0&&(n=new Int32Array(t),Rr[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function ff(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function uf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2fv(this.addr,t),ft(n,t)}}function df(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(lt(n,t))return;e.uniform3fv(this.addr,t),ft(n,t)}}function pf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4fv(this.addr,t),ft(n,t)}}function hf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;wr.set(i),e.uniformMatrix2fv(this.addr,!1,wr),ft(n,i)}}function mf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;Cr.set(i),e.uniformMatrix3fv(this.addr,!1,Cr),ft(n,i)}}function _f(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;br.set(i),e.uniformMatrix4fv(this.addr,!1,br),ft(n,i)}}function gf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2iv(this.addr,t),ft(n,t)}}function Ef(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lt(n,t))return;e.uniform3iv(this.addr,t),ft(n,t)}}function Sf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4iv(this.addr,t),ft(n,t)}}function Mf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Tf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2uiv(this.addr,t),ft(n,t)}}function xf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lt(n,t))return;e.uniform3uiv(this.addr,t),ft(n,t)}}function Af(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4uiv(this.addr,t),ft(n,t)}}function Rf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(xr.compareFunction=ta,r=xr):r=Sa,n.setTexture2D(t||r,a)}function bf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Ta,a)}function Cf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||xa,a)}function wf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||Ma,a)}function yf(e){switch(e){case 5126:return ff;case 35664:return uf;case 35665:return df;case 35666:return pf;case 35674:return hf;case 35675:return mf;case 35676:return _f;case 5124:case 35670:return gf;case 35667:case 35671:return vf;case 35668:case 35672:return Ef;case 35669:case 35673:return Sf;case 5125:return Mf;case 36294:return Tf;case 36295:return xf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return wf}}function Pf(e,t){e.uniform1fv(this.addr,t)}function Lf(e,t){const n=rn(t,this.size,2);e.uniform2fv(this.addr,n)}function Df(e,t){const n=rn(t,this.size,3);e.uniform3fv(this.addr,n)}function Uf(e,t){const n=rn(t,this.size,4);e.uniform4fv(this.addr,n)}function If(e,t){const n=rn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Nf(e,t){const n=rn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Of(e,t){const n=rn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ff(e,t){e.uniform1iv(this.addr,t)}function Bf(e,t){e.uniform2iv(this.addr,t)}function Gf(e,t){e.uniform3iv(this.addr,t)}function Hf(e,t){e.uniform4iv(this.addr,t)}function Vf(e,t){e.uniform1uiv(this.addr,t)}function kf(e,t){e.uniform2uiv(this.addr,t)}function zf(e,t){e.uniform3uiv(this.addr,t)}function Wf(e,t){e.uniform4uiv(this.addr,t)}function Xf(e,t,n){const i=this.cache,a=t.length,r=Fn(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture2D(t[o]||Sa,r[o])}function Yf(e,t,n){const i=this.cache,a=t.length,r=Fn(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture3D(t[o]||Ta,r[o])}function Kf(e,t,n){const i=this.cache,a=t.length,r=Fn(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTextureCube(t[o]||xa,r[o])}function qf(e,t,n){const i=this.cache,a=t.length,r=Fn(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture2DArray(t[o]||Ma,r[o])}function Zf(e){switch(e){case 5126:return Pf;case 35664:return Lf;case 35665:return Df;case 35666:return Uf;case 35674:return If;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Ff;case 35667:case 35671:return Bf;case 35668:case 35672:return Gf;case 35669:case 35673:return Hf;case 5125:return Vf;case 36294:return kf;case 36295:return zf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return qf}}class jf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yf(n.type)}}class $f{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Zf(n.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,n[s.id],i)}}}const Jn=/(\w+)(\])?(\[|\.)?/g;function yr(e,t){e.seq.push(t),e.map[t.id]=t}function Jf(e,t,n){const i=e.name,a=i.length;for(Jn.lastIndex=0;;){const r=Jn.exec(i),o=Jn.lastIndex;let s=r[1];const h=r[2]==="]",g=r[3];if(h&&(s=s|0),g===void 0||g==="["&&o+2===a){yr(n,g===void 0?new jf(s,e,t):new $f(s,e,t));break}else{let _=n.map[s];_===void 0&&(_=new Qf(s),yr(n,_)),n=_}}}class bn{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),o=t.getUniformLocation(n,r.name);Jf(r,o,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,o=n.length;r!==o;++r){const s=n[r],h=i[s.id];h.needsUpdate!==!1&&s.setValue(t,h.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in n&&i.push(o)}return i}}function Pr(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const eu=37297;let tu=0;function nu(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const Lr=new Ve;function iu(e){st._getMatrix(Lr,st.workingColorSpace,e);const t=`mat3( ${Lr.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(e)){case _a:return[t,"LinearTransferOETF"];case et:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Dr(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+nu(e.getShaderSource(t),s)}else return r}function ru(e,t){const n=iu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function au(e,t){let n;switch(t){case Oo:n="Linear";break;case No:n="Reinhard";break;case Io:n="Cineon";break;case Uo:n="ACESFilmic";break;case Do:n="AgX";break;case Lo:n="Neutral";break;case Po:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tn=new Se;function ou(){st.getLuminanceCoefficients(Tn);const e=Tn.x.toFixed(4),t=Tn.y.toFixed(4),n=Tn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function su(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cn).join(`
`)}function cu(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function lu(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),o=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function cn(e){return e!==""}function Ur(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ir(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fu=/^[ \t]*#include +<([\w\d./]+)>/gm;function mi(e){return e.replace(fu,du)}const uu=new Map;function du(e,t){let n=Ie[t];if(n===void 0){const i=uu.get(t);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mi(n)}const pu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nr(e){return e.replace(pu,hu)}function hu(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Or(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mu(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ia?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yt&&(t="SHADOWMAP_TYPE_VSM"),t}function _u(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case hn:case nn:t="ENVMAP_TYPE_CUBE";break;case On:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gu(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case nn:t="ENVMAP_MODE_REFRACTION";break}return t}function vu(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case ko:t="ENVMAP_BLENDING_MIX";break;case Vo:t="ENVMAP_BLENDING_ADD";break}return t}function Eu(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Su(e,t,n,i){const a=e.getContext(),r=n.defines;let o=n.vertexShader,s=n.fragmentShader;const h=mu(n),g=_u(n),A=gu(n),_=vu(n),T=Eu(n),S=su(n),D=cu(r),C=a.createProgram();let f,c,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(cn).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D].filter(cn).join(`
`),c.length>0&&(c+=`
`)):(f=[Or(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+A:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cn).join(`
`),c=[Or(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,D,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+A:"",n.envMap?"#define "+_:"",T?"#define CUBEUV_TEXEL_WIDTH "+T.texelWidth:"",T?"#define CUBEUV_TEXEL_HEIGHT "+T.texelHeight:"",T?"#define CUBEUV_MAX_MIP "+T.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Lt?"#define TONE_MAPPING":"",n.toneMapping!==Lt?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Lt?au("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ru("linearToOutputTexel",n.outputColorSpace),ou(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cn).join(`
`)),o=mi(o),o=Ur(o,n),o=Ir(o,n),s=mi(s),s=Ur(s,n),s=Ir(s,n),o=Nr(o),s=Nr(s),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,f=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===or?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const P=U+f+o,v=U+c+s,I=Pr(a,a.VERTEX_SHADER,P),w=Pr(a,a.FRAGMENT_SHADER,v);a.attachShader(C,I),a.attachShader(C,w),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function N(b){if(e.debug.checkShaderErrors){const H=a.getProgramInfoLog(C)||"",K=a.getShaderInfoLog(I)||"",W=a.getShaderInfoLog(w)||"",X=H.trim(),Y=K.trim(),ne=W.trim();let k=!0,Ee=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,C,I,w);else{const Te=Dr(a,I,"vertex"),xe=Dr(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+X+`
`+Te+`
`+xe)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||ne==="")&&(Ee=!1);Ee&&(b.diagnostics={runnable:k,programLog:X,vertexShader:{log:Y,prefix:f},fragmentShader:{log:ne,prefix:c}})}a.deleteShader(I),a.deleteShader(w),V=new bn(a,C),m=lu(a,C)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let m;this.getAttributes=function(){return m===void 0&&N(this),m};let d=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=a.getProgramParameter(C,eu)),d},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tu++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=w,this}let Mu=0;class Tu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new xu(t),n.set(t,i)),i}}class xu{constructor(t){this.id=Mu++,this.code=t,this.usedTimes=0}}function Au(e,t,n,i,a,r,o){const s=new wo,h=new Tu,g=new Set,A=[],_=a.logarithmicDepthBuffer,T=a.vertexTextures;let S=a.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(m){return g.add(m),m===0?"uv":`uv${m}`}function f(m,d,b,H,K){const W=H.fog,X=K.geometry,Y=m.isMeshStandardMaterial?H.environment:null,ne=(m.isMeshStandardMaterial?n:t).get(m.envMap||Y),k=ne&&ne.mapping===On?ne.image.height:null,Ee=D[m.type];m.precision!==null&&(S=a.getMaxPrecision(m.precision),S!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",S,"instead."));const Te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Te!==void 0?Te.length:0;let Ge=0;X.morphAttributes.position!==void 0&&(Ge=1),X.morphAttributes.normal!==void 0&&(Ge=2),X.morphAttributes.color!==void 0&&(Ge=3);let Qe,Ye,Ne,z;if(Ee){const ze=bt[Ee];Qe=ze.vertexShader,Ye=ze.fragmentShader}else Qe=m.vertexShader,Ye=m.fragmentShader,h.update(m),Ne=h.getVertexShaderID(m),z=h.getFragmentShaderID(m);const q=e.getRenderTarget(),de=e.state.buffers.depth.getReversed(),ie=K.isInstancedMesh===!0,le=K.isBatchedMesh===!0,Oe=!!m.map,at=!!m.matcap,E=!!ne,ke=!!m.aoMap,Re=!!m.lightMap,Ce=!!m.bumpMap,me=!!m.normalMap,Ke=!!m.displacementMap,_e=!!m.emissiveMap,Le=!!m.metalnessMap,ot=!!m.roughnessMap,tt=m.anisotropy>0,p=m.clearcoat>0,l=m.dispersion>0,M=m.iridescence>0,x=m.sheen>0,B=m.transmission>0,O=tt&&!!m.anisotropyMap,j=p&&!!m.clearcoatMap,$=p&&!!m.clearcoatNormalMap,fe=p&&!!m.clearcoatRoughnessMap,pe=M&&!!m.iridescenceMap,Q=M&&!!m.iridescenceThicknessMap,oe=x&&!!m.sheenColorMap,ye=x&&!!m.sheenRoughnessMap,Me=!!m.specularMap,se=!!m.specularColorMap,Ue=!!m.specularIntensityMap,R=B&&!!m.transmissionMap,te=B&&!!m.thicknessMap,re=!!m.gradientMap,he=!!m.alphaMap,J=m.alphaTest>0,Z=!!m.alphaHash,ve=!!m.extensions;let De=Lt;m.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(De=e.toneMapping);const Ze={shaderID:Ee,shaderType:m.type,shaderName:m.name,vertexShader:Qe,fragmentShader:Ye,defines:m.defines,customVertexShaderID:Ne,customFragmentShaderID:z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:S,batching:le,batchingColor:le&&K._colorsTexture!==null,instancing:ie,instancingColor:ie&&K.instanceColor!==null,instancingMorph:ie&&K.morphTexture!==null,supportsVertexTextures:T,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nn,alphaToCoverage:!!m.alphaToCoverage,map:Oe,matcap:at,envMap:E,envMapMode:E&&ne.mapping,envMapCubeUVHeight:k,aoMap:ke,lightMap:Re,bumpMap:Ce,normalMap:me,displacementMap:T&&Ke,emissiveMap:_e,normalMapObjectSpace:me&&m.normalMapType===Ro,normalMapTangentSpace:me&&m.normalMapType===Ao,metalnessMap:Le,roughnessMap:ot,anisotropy:tt,anisotropyMap:O,clearcoat:p,clearcoatMap:j,clearcoatNormalMap:$,clearcoatRoughnessMap:fe,dispersion:l,iridescence:M,iridescenceMap:pe,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:se,specularIntensityMap:Ue,transmission:B,transmissionMap:R,thicknessMap:te,gradientMap:re,opaque:m.transparent===!1&&m.blending===Rn&&m.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:Z,combine:m.combine,mapUv:Oe&&C(m.map.channel),aoMapUv:ke&&C(m.aoMap.channel),lightMapUv:Re&&C(m.lightMap.channel),bumpMapUv:Ce&&C(m.bumpMap.channel),normalMapUv:me&&C(m.normalMap.channel),displacementMapUv:Ke&&C(m.displacementMap.channel),emissiveMapUv:_e&&C(m.emissiveMap.channel),metalnessMapUv:Le&&C(m.metalnessMap.channel),roughnessMapUv:ot&&C(m.roughnessMap.channel),anisotropyMapUv:O&&C(m.anisotropyMap.channel),clearcoatMapUv:j&&C(m.clearcoatMap.channel),clearcoatNormalMapUv:$&&C(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&C(m.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&C(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&C(m.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&C(m.sheenColorMap.channel),sheenRoughnessMapUv:ye&&C(m.sheenRoughnessMap.channel),specularMapUv:Me&&C(m.specularMap.channel),specularColorMapUv:se&&C(m.specularColorMap.channel),specularIntensityMapUv:Ue&&C(m.specularIntensityMap.channel),transmissionMapUv:R&&C(m.transmissionMap.channel),thicknessMapUv:te&&C(m.thicknessMap.channel),alphaMapUv:he&&C(m.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(me||tt),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Oe||he),fog:!!W,useFog:m.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:de,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ge,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:Oe&&m.map.isVideoTexture===!0&&st.getTransfer(m.map.colorSpace)===et,decodeVideoTextureEmissive:_e&&m.emissiveMap.isVideoTexture===!0&&st.getTransfer(m.emissiveMap.colorSpace)===et,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Et,flipSided:m.side===At,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ve&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&m.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ze.vertexUv1s=g.has(1),Ze.vertexUv2s=g.has(2),Ze.vertexUv3s=g.has(3),g.clear(),Ze}function c(m){const d=[];if(m.shaderID?d.push(m.shaderID):(d.push(m.customVertexShaderID),d.push(m.customFragmentShaderID)),m.defines!==void 0)for(const b in m.defines)d.push(b),d.push(m.defines[b]);return m.isRawShaderMaterial===!1&&(U(d,m),P(d,m),d.push(e.outputColorSpace)),d.push(m.customProgramCacheKey),d.join()}function U(m,d){m.push(d.precision),m.push(d.outputColorSpace),m.push(d.envMapMode),m.push(d.envMapCubeUVHeight),m.push(d.mapUv),m.push(d.alphaMapUv),m.push(d.lightMapUv),m.push(d.aoMapUv),m.push(d.bumpMapUv),m.push(d.normalMapUv),m.push(d.displacementMapUv),m.push(d.emissiveMapUv),m.push(d.metalnessMapUv),m.push(d.roughnessMapUv),m.push(d.anisotropyMapUv),m.push(d.clearcoatMapUv),m.push(d.clearcoatNormalMapUv),m.push(d.clearcoatRoughnessMapUv),m.push(d.iridescenceMapUv),m.push(d.iridescenceThicknessMapUv),m.push(d.sheenColorMapUv),m.push(d.sheenRoughnessMapUv),m.push(d.specularMapUv),m.push(d.specularColorMapUv),m.push(d.specularIntensityMapUv),m.push(d.transmissionMapUv),m.push(d.thicknessMapUv),m.push(d.combine),m.push(d.fogExp2),m.push(d.sizeAttenuation),m.push(d.morphTargetsCount),m.push(d.morphAttributeCount),m.push(d.numDirLights),m.push(d.numPointLights),m.push(d.numSpotLights),m.push(d.numSpotLightMaps),m.push(d.numHemiLights),m.push(d.numRectAreaLights),m.push(d.numDirLightShadows),m.push(d.numPointLightShadows),m.push(d.numSpotLightShadows),m.push(d.numSpotLightShadowsWithMaps),m.push(d.numLightProbes),m.push(d.shadowMapType),m.push(d.toneMapping),m.push(d.numClippingPlanes),m.push(d.numClipIntersection),m.push(d.depthPacking)}function P(m,d){s.disableAll(),d.supportsVertexTextures&&s.enable(0),d.instancing&&s.enable(1),d.instancingColor&&s.enable(2),d.instancingMorph&&s.enable(3),d.matcap&&s.enable(4),d.envMap&&s.enable(5),d.normalMapObjectSpace&&s.enable(6),d.normalMapTangentSpace&&s.enable(7),d.clearcoat&&s.enable(8),d.iridescence&&s.enable(9),d.alphaTest&&s.enable(10),d.vertexColors&&s.enable(11),d.vertexAlphas&&s.enable(12),d.vertexUv1s&&s.enable(13),d.vertexUv2s&&s.enable(14),d.vertexUv3s&&s.enable(15),d.vertexTangents&&s.enable(16),d.anisotropy&&s.enable(17),d.alphaHash&&s.enable(18),d.batching&&s.enable(19),d.dispersion&&s.enable(20),d.batchingColor&&s.enable(21),d.gradientMap&&s.enable(22),m.push(s.mask),s.disableAll(),d.fog&&s.enable(0),d.useFog&&s.enable(1),d.flatShading&&s.enable(2),d.logarithmicDepthBuffer&&s.enable(3),d.reversedDepthBuffer&&s.enable(4),d.skinning&&s.enable(5),d.morphTargets&&s.enable(6),d.morphNormals&&s.enable(7),d.morphColors&&s.enable(8),d.premultipliedAlpha&&s.enable(9),d.shadowMapEnabled&&s.enable(10),d.doubleSided&&s.enable(11),d.flipSided&&s.enable(12),d.useDepthPacking&&s.enable(13),d.dithering&&s.enable(14),d.transmission&&s.enable(15),d.sheen&&s.enable(16),d.opaque&&s.enable(17),d.pointsUvs&&s.enable(18),d.decodeVideoTexture&&s.enable(19),d.decodeVideoTextureEmissive&&s.enable(20),d.alphaToCoverage&&s.enable(21),m.push(s.mask)}function v(m){const d=D[m.type];let b;if(d){const H=bt[d];b=xo.clone(H.uniforms)}else b=m.uniforms;return b}function I(m,d){let b;for(let H=0,K=A.length;H<K;H++){const W=A[H];if(W.cacheKey===d){b=W,++b.usedTimes;break}}return b===void 0&&(b=new Su(e,d,m,r),A.push(b)),b}function w(m){if(--m.usedTimes===0){const d=A.indexOf(m);A[d]=A[A.length-1],A.pop(),m.destroy()}}function N(m){h.remove(m)}function V(){h.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:v,acquireProgram:I,releaseProgram:w,releaseShaderCache:N,programs:A,dispose:V}}function Ru(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function a(o,s,h){e.get(o)[s]=h}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function bu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Fr(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Br(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function o(_,T,S,D,C,f){let c=e[t];return c===void 0?(c={id:_.id,object:_,geometry:T,material:S,groupOrder:D,renderOrder:_.renderOrder,z:C,group:f},e[t]=c):(c.id=_.id,c.object=_,c.geometry=T,c.material=S,c.groupOrder=D,c.renderOrder=_.renderOrder,c.z=C,c.group=f),t++,c}function s(_,T,S,D,C,f){const c=o(_,T,S,D,C,f);S.transmission>0?i.push(c):S.transparent===!0?a.push(c):n.push(c)}function h(_,T,S,D,C,f){const c=o(_,T,S,D,C,f);S.transmission>0?i.unshift(c):S.transparent===!0?a.unshift(c):n.unshift(c)}function g(_,T){n.length>1&&n.sort(_||bu),i.length>1&&i.sort(T||Fr),a.length>1&&a.sort(T||Fr)}function A(){for(let _=t,T=e.length;_<T;_++){const S=e[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:s,unshift:h,finish:A,sort:g}}function Cu(){let e=new WeakMap;function t(i,a){const r=e.get(i);let o;return r===void 0?(o=new Br,e.set(i,[o])):a>=r.length?(o=new Br,r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function wu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Se,color:new $e};break;case"SpotLight":n={position:new Se,direction:new Se,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Se,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Se,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new Se,halfWidth:new Se,halfHeight:new Se};break}return e[t.id]=n,n}}}function yu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Pu=0;function Lu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Du(e){const t=new wu,n=yu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Se);const a=new Se,r=new kt,o=new kt;function s(g){let A=0,_=0,T=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let S=0,D=0,C=0,f=0,c=0,U=0,P=0,v=0,I=0,w=0,N=0;g.sort(Lu);for(let m=0,d=g.length;m<d;m++){const b=g[m],H=b.color,K=b.intensity,W=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)A+=H.r*K,_+=H.g*K,T+=H.b*K;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(b.sh.coefficients[Y],K);N++}else if(b.isDirectionalLight){const Y=t.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ne=b.shadow,k=n.get(b);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,i.directionalShadow[S]=k,i.directionalShadowMap[S]=X,i.directionalShadowMatrix[S]=b.shadow.matrix,U++}i.directional[S]=Y,S++}else if(b.isSpotLight){const Y=t.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(H).multiplyScalar(K),Y.distance=W,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,i.spot[C]=Y;const ne=b.shadow;if(b.map&&(i.spotLightMap[I]=b.map,I++,ne.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[C]=ne.matrix,b.castShadow){const k=n.get(b);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,i.spotShadow[C]=k,i.spotShadowMap[C]=X,v++}C++}else if(b.isRectAreaLight){const Y=t.get(b);Y.color.copy(H).multiplyScalar(K),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=Y,f++}else if(b.isPointLight){const Y=t.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const ne=b.shadow,k=n.get(b);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,k.shadowCameraNear=ne.camera.near,k.shadowCameraFar=ne.camera.far,i.pointShadow[D]=k,i.pointShadowMap[D]=X,i.pointShadowMatrix[D]=b.shadow.matrix,P++}i.point[D]=Y,D++}else if(b.isHemisphereLight){const Y=t.get(b);Y.skyColor.copy(b.color).multiplyScalar(K),Y.groundColor.copy(b.groundColor).multiplyScalar(K),i.hemi[c]=Y,c++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=A,i.ambient[1]=_,i.ambient[2]=T;const V=i.hash;(V.directionalLength!==S||V.pointLength!==D||V.spotLength!==C||V.rectAreaLength!==f||V.hemiLength!==c||V.numDirectionalShadows!==U||V.numPointShadows!==P||V.numSpotShadows!==v||V.numSpotMaps!==I||V.numLightProbes!==N)&&(i.directional.length=S,i.spot.length=C,i.rectArea.length=f,i.point.length=D,i.hemi.length=c,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=v+I-w,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=N,V.directionalLength=S,V.pointLength=D,V.spotLength=C,V.rectAreaLength=f,V.hemiLength=c,V.numDirectionalShadows=U,V.numPointShadows=P,V.numSpotShadows=v,V.numSpotMaps=I,V.numLightProbes=N,i.version=Pu++)}function h(g,A){let _=0,T=0,S=0,D=0,C=0;const f=A.matrixWorldInverse;for(let c=0,U=g.length;c<U;c++){const P=g[c];if(P.isDirectionalLight){const v=i.directional[_];v.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(f),_++}else if(P.isSpotLight){const v=i.spot[S];v.position.setFromMatrixPosition(P.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(f),S++}else if(P.isRectAreaLight){const v=i.rectArea[D];v.position.setFromMatrixPosition(P.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(P.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(P.width*.5,0,0),v.halfHeight.set(0,P.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),D++}else if(P.isPointLight){const v=i.point[T];v.position.setFromMatrixPosition(P.matrixWorld),v.position.applyMatrix4(f),T++}else if(P.isHemisphereLight){const v=i.hemi[C];v.direction.setFromMatrixPosition(P.matrixWorld),v.direction.transformDirection(f),C++}}}return{setup:s,setupView:h,state:i}}function Gr(e){const t=new Du(e),n=[],i=[];function a(A){g.camera=A,n.length=0,i.length=0}function r(A){n.push(A)}function o(A){i.push(A)}function s(){t.setup(n)}function h(A){t.setupView(n,A)}const g={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:s,setupLightsView:h,pushLight:r,pushShadow:o}}function Uu(e){let t=new WeakMap;function n(a,r=0){const o=t.get(a);let s;return o===void 0?(s=new Gr(e),t.set(a,[s])):r>=o.length?(s=new Gr(e),o.push(s)):s=o[r],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const Iu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nu=`uniform sampler2D shadow_pass;
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
}`;function Ou(e,t,n){let i=new qr;const a=new je,r=new je,o=new mt,s=new so({depthPacking:co}),h=new lo,g={},A=n.maxTextureSize,_={[fn]:At,[At]:fn,[Et]:Et},T=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Iu,fragmentShader:Nu}),S=T.clone();S.defines.HORIZONTAL_PASS=1;const D=new pn;D.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _t(D,T),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let c=this.type;this.render=function(w,N,V){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const m=e.getRenderTarget(),d=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Vt),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=c!==yt&&this.type===yt,W=c===yt&&this.type!==yt;for(let X=0,Y=w.length;X<Y;X++){const ne=w[X],k=ne.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const Ee=k.getFrameExtents();if(a.multiply(Ee),r.copy(k.mapSize),(a.x>A||a.y>A)&&(a.x>A&&(r.x=Math.floor(A/Ee.x),a.x=r.x*Ee.x,k.mapSize.x=r.x),a.y>A&&(r.y=Math.floor(A/Ee.y),a.y=r.y*Ee.y,k.mapSize.y=r.y)),k.map===null||K===!0||W===!0){const xe=this.type!==yt?{minFilter:Qt,magFilter:Qt}:{};k.map!==null&&k.map.dispose(),k.map=new tn(a.x,a.y,xe),k.map.texture.name=ne.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const Te=k.getViewportCount();for(let xe=0;xe<Te;xe++){const Ge=k.getViewport(xe);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),H.viewport(o),k.updateMatrices(ne,xe),i=k.getFrustum(),v(N,V,k.camera,ne,this.type)}k.isPointLightShadow!==!0&&this.type===yt&&U(k,V),k.needsUpdate=!1}c=this.type,f.needsUpdate=!1,e.setRenderTarget(m,d,b)};function U(w,N){const V=t.update(C);T.defines.VSM_SAMPLES!==w.blurSamples&&(T.defines.VSM_SAMPLES=w.blurSamples,S.defines.VSM_SAMPLES=w.blurSamples,T.needsUpdate=!0,S.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tn(a.x,a.y)),T.uniforms.shadow_pass.value=w.map.texture,T.uniforms.resolution.value=w.mapSize,T.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(N,null,V,T,C,null),S.uniforms.shadow_pass.value=w.mapPass.texture,S.uniforms.resolution.value=w.mapSize,S.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(N,null,V,S,C,null)}function P(w,N,V,m){let d=null;const b=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)d=b;else if(d=V.isPointLight===!0?h:s,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const H=d.uuid,K=N.uuid;let W=g[H];W===void 0&&(W={},g[H]=W);let X=W[K];X===void 0&&(X=d.clone(),W[K]=X,N.addEventListener("dispose",I)),d=X}if(d.visible=N.visible,d.wireframe=N.wireframe,m===yt?d.side=N.shadowSide!==null?N.shadowSide:N.side:d.side=N.shadowSide!==null?N.shadowSide:_[N.side],d.alphaMap=N.alphaMap,d.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,d.map=N.map,d.clipShadows=N.clipShadows,d.clippingPlanes=N.clippingPlanes,d.clipIntersection=N.clipIntersection,d.displacementMap=N.displacementMap,d.displacementScale=N.displacementScale,d.displacementBias=N.displacementBias,d.wireframeLinewidth=N.wireframeLinewidth,d.linewidth=N.linewidth,V.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const H=e.properties.get(d);H.light=V}return d}function v(w,N,V,m,d){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&d===yt)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);const K=t.update(w),W=w.material;if(Array.isArray(W)){const X=K.groups;for(let Y=0,ne=X.length;Y<ne;Y++){const k=X[Y],Ee=W[k.materialIndex];if(Ee&&Ee.visible){const Te=P(w,Ee,m,d);w.onBeforeShadow(e,w,N,V,K,Te,k),e.renderBufferDirect(V,null,K,Te,w,k),w.onAfterShadow(e,w,N,V,K,Te,k)}}}else if(W.visible){const X=P(w,W,m,d);w.onBeforeShadow(e,w,N,V,K,X,null),e.renderBufferDirect(V,null,K,X,w,null),w.onAfterShadow(e,w,N,V,K,X,null)}}const H=w.children;for(let K=0,W=H.length;K<W;K++)v(H[K],N,V,m,d)}function I(w){w.target.removeEventListener("dispose",I);for(const V in g){const m=g[V],d=w.target.uuid;d in m&&(m[d].dispose(),delete m[d])}}}const Fu={[fi]:li,[ci]:ai,[si]:ri,[yn]:oi,[li]:fi,[ai]:ci,[ri]:si,[oi]:yn};function Bu(e,t){function n(){let R=!1;const te=new mt;let re=null;const he=new mt(0,0,0,0);return{setMask:function(J){re!==J&&!R&&(e.colorMask(J,J,J,J),re=J)},setLocked:function(J){R=J},setClear:function(J,Z,ve,De,Ze){Ze===!0&&(J*=De,Z*=De,ve*=De),te.set(J,Z,ve,De),he.equals(te)===!1&&(e.clearColor(J,Z,ve,De),he.copy(te))},reset:function(){R=!1,re=null,he.set(-1,0,0,0)}}}function i(){let R=!1,te=!1,re=null,he=null,J=null;return{setReversed:function(Z){if(te!==Z){const ve=t.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),te=Z;const De=J;J=null,this.setClear(De)}},getReversed:function(){return te},setTest:function(Z){Z?q(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(Z){re!==Z&&!R&&(e.depthMask(Z),re=Z)},setFunc:function(Z){if(te&&(Z=Fu[Z]),he!==Z){switch(Z){case fi:e.depthFunc(e.NEVER);break;case li:e.depthFunc(e.ALWAYS);break;case ci:e.depthFunc(e.LESS);break;case yn:e.depthFunc(e.LEQUAL);break;case si:e.depthFunc(e.EQUAL);break;case oi:e.depthFunc(e.GEQUAL);break;case ai:e.depthFunc(e.GREATER);break;case ri:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=Z}},setLocked:function(Z){R=Z},setClear:function(Z){J!==Z&&(te&&(Z=1-Z),e.clearDepth(Z),J=Z)},reset:function(){R=!1,re=null,he=null,J=null,te=!1}}}function a(){let R=!1,te=null,re=null,he=null,J=null,Z=null,ve=null,De=null,Ze=null;return{setTest:function(ze){R||(ze?q(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(ze){te!==ze&&!R&&(e.stencilMask(ze),te=ze)},setFunc:function(ze,wt,Rt){(re!==ze||he!==wt||J!==Rt)&&(e.stencilFunc(ze,wt,Rt),re=ze,he=wt,J=Rt)},setOp:function(ze,wt,Rt){(Z!==ze||ve!==wt||De!==Rt)&&(e.stencilOp(ze,wt,Rt),Z=ze,ve=wt,De=Rt)},setLocked:function(ze){R=ze},setClear:function(ze){Ze!==ze&&(e.clearStencil(ze),Ze=ze)},reset:function(){R=!1,te=null,re=null,he=null,J=null,Z=null,ve=null,De=null,Ze=null}}}const r=new n,o=new i,s=new a,h=new WeakMap,g=new WeakMap;let A={},_={},T=new WeakMap,S=[],D=null,C=!1,f=null,c=null,U=null,P=null,v=null,I=null,w=null,N=new $e(0,0,0),V=0,m=!1,d=null,b=null,H=null,K=null,W=null;const X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=ne>=1):k.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=ne>=2);let Ee=null,Te={};const xe=e.getParameter(e.SCISSOR_BOX),Ge=e.getParameter(e.VIEWPORT),Qe=new mt().fromArray(xe),Ye=new mt().fromArray(Ge);function Ne(R,te,re,he){const J=new Uint8Array(4),Z=e.createTexture();e.bindTexture(R,Z),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<re;ve++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,J):e.texImage2D(te+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,J);return Z}const z={};z[e.TEXTURE_2D]=Ne(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=Ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=Ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=Ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),q(e.DEPTH_TEST),o.setFunc(yn),Ce(!1),me(er),q(e.CULL_FACE),ke(Vt);function q(R){A[R]!==!0&&(e.enable(R),A[R]=!0)}function de(R){A[R]!==!1&&(e.disable(R),A[R]=!1)}function ie(R,te){return _[R]!==te?(e.bindFramebuffer(R,te),_[R]=te,R===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=te),R===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=te),!0):!1}function le(R,te){let re=S,he=!1;if(R){re=T.get(te),re===void 0&&(re=[],T.set(te,re));const J=R.textures;if(re.length!==J.length||re[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,ve=J.length;Z<ve;Z++)re[Z]=e.COLOR_ATTACHMENT0+Z;re.length=J.length,he=!0}}else re[0]!==e.BACK&&(re[0]=e.BACK,he=!0);he&&e.drawBuffers(re)}function Oe(R){return D!==R?(e.useProgram(R),D=R,!0):!1}const at={[on]:e.FUNC_ADD,[Ba]:e.FUNC_SUBTRACT,[Fa]:e.FUNC_REVERSE_SUBTRACT};at[Wo]=e.MIN,at[Xo]=e.MAX;const E={[Ja]:e.ZERO,[Qa]:e.ONE,[$a]:e.SRC_COLOR,[ja]:e.SRC_ALPHA,[Za]:e.SRC_ALPHA_SATURATE,[qa]:e.DST_COLOR,[Ka]:e.DST_ALPHA,[Ya]:e.ONE_MINUS_SRC_COLOR,[Xa]:e.ONE_MINUS_SRC_ALPHA,[Wa]:e.ONE_MINUS_DST_COLOR,[za]:e.ONE_MINUS_DST_ALPHA,[ka]:e.CONSTANT_COLOR,[Va]:e.ONE_MINUS_CONSTANT_COLOR,[Ha]:e.CONSTANT_ALPHA,[Ga]:e.ONE_MINUS_CONSTANT_ALPHA};function ke(R,te,re,he,J,Z,ve,De,Ze,ze){if(R===Vt){C===!0&&(de(e.BLEND),C=!1);return}if(C===!1&&(q(e.BLEND),C=!0),R!==Mo){if(R!==f||ze!==m){if((c!==on||v!==on)&&(e.blendEquation(e.FUNC_ADD),c=on,v=on),ze)switch(R){case Rn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ir:e.blendFunc(e.ONE,e.ONE);break;case nr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Rn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case nr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}U=null,P=null,I=null,w=null,N.set(0,0,0),V=0,f=R,m=ze}return}J=J||te,Z=Z||re,ve=ve||he,(te!==c||J!==v)&&(e.blendEquationSeparate(at[te],at[J]),c=te,v=J),(re!==U||he!==P||Z!==I||ve!==w)&&(e.blendFuncSeparate(E[re],E[he],E[Z],E[ve]),U=re,P=he,I=Z,w=ve),(De.equals(N)===!1||Ze!==V)&&(e.blendColor(De.r,De.g,De.b,Ze),N.copy(De),V=Ze),f=R,m=!1}function Re(R,te){R.side===Et?de(e.CULL_FACE):q(e.CULL_FACE);let re=R.side===At;te&&(re=!re),Ce(re),R.blending===Rn&&R.transparent===!1?ke(Vt):ke(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const he=R.stencilWrite;s.setTest(he),he&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(R){d!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),d=R)}function me(R){R!==Eo?(q(e.CULL_FACE),R!==b&&(R===er?e.cullFace(e.BACK):R===So?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):de(e.CULL_FACE),b=R}function Ke(R){R!==H&&(Y&&e.lineWidth(R),H=R)}function _e(R,te,re){R?(q(e.POLYGON_OFFSET_FILL),(K!==te||W!==re)&&(e.polygonOffset(te,re),K=te,W=re)):de(e.POLYGON_OFFSET_FILL)}function Le(R){R?q(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function ot(R){R===void 0&&(R=e.TEXTURE0+X-1),Ee!==R&&(e.activeTexture(R),Ee=R)}function tt(R,te,re){re===void 0&&(Ee===null?re=e.TEXTURE0+X-1:re=Ee);let he=Te[re];he===void 0&&(he={type:void 0,texture:void 0},Te[re]=he),(he.type!==R||he.texture!==te)&&(Ee!==re&&(e.activeTexture(re),Ee=re),e.bindTexture(R,te||z[R]),he.type=R,he.texture=te)}function p(){const R=Te[Ee];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function l(){try{e.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function x(){try{e.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{e.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{e.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{e.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{e.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{e.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{e.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(R){Qe.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),Qe.copy(R))}function ye(R){Ye.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),Ye.copy(R))}function Me(R,te){let re=g.get(te);re===void 0&&(re=new WeakMap,g.set(te,re));let he=re.get(R);he===void 0&&(he=e.getUniformBlockIndex(te,R.name),re.set(R,he))}function se(R,te){const he=g.get(te).get(R);h.get(te)!==he&&(e.uniformBlockBinding(te,he,R.__bindingPointIndex),h.set(te,he))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),A={},Ee=null,Te={},_={},T=new WeakMap,S=[],D=null,C=!1,f=null,c=null,U=null,P=null,v=null,I=null,w=null,N=new $e(0,0,0),V=0,m=!1,d=null,b=null,H=null,K=null,W=null,Qe.set(0,0,e.canvas.width,e.canvas.height),Ye.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:q,disable:de,bindFramebuffer:ie,drawBuffers:le,useProgram:Oe,setBlending:ke,setMaterial:Re,setFlipSided:Ce,setCullFace:me,setLineWidth:Ke,setPolygonOffset:_e,setScissorTest:Le,activeTexture:ot,bindTexture:tt,unbindTexture:p,compressedTexImage2D:l,compressedTexImage3D:M,texImage2D:pe,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:se,texStorage2D:$,texStorage3D:fe,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:O,compressedTexSubImage3D:j,scissor:oe,viewport:ye,reset:Ue}}function Gu(e,t,n,i,a,r,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new je,A=new WeakMap;let _;const T=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(p,l){return S?new OffscreenCanvas(p,l):Ho("canvas")}function C(p,l,M){let x=1;const B=tt(p);if((B.width>M||B.height>M)&&(x=M/Math.max(B.width,B.height)),x<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const O=Math.floor(x*B.width),j=Math.floor(x*B.height);_===void 0&&(_=D(O,j));const $=l?D(O,j):_;return $.width=O,$.height=j,$.getContext("2d").drawImage(p,0,0,O,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+j+")."),$}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),p;return p}function f(p){return p.generateMipmaps}function c(p){e.generateMipmap(p)}function U(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function P(p,l,M,x,B=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let O=l;if(l===e.RED&&(M===e.FLOAT&&(O=e.R32F),M===e.HALF_FLOAT&&(O=e.R16F),M===e.UNSIGNED_BYTE&&(O=e.R8)),l===e.RED_INTEGER&&(M===e.UNSIGNED_BYTE&&(O=e.R8UI),M===e.UNSIGNED_SHORT&&(O=e.R16UI),M===e.UNSIGNED_INT&&(O=e.R32UI),M===e.BYTE&&(O=e.R8I),M===e.SHORT&&(O=e.R16I),M===e.INT&&(O=e.R32I)),l===e.RG&&(M===e.FLOAT&&(O=e.RG32F),M===e.HALF_FLOAT&&(O=e.RG16F),M===e.UNSIGNED_BYTE&&(O=e.RG8)),l===e.RG_INTEGER&&(M===e.UNSIGNED_BYTE&&(O=e.RG8UI),M===e.UNSIGNED_SHORT&&(O=e.RG16UI),M===e.UNSIGNED_INT&&(O=e.RG32UI),M===e.BYTE&&(O=e.RG8I),M===e.SHORT&&(O=e.RG16I),M===e.INT&&(O=e.RG32I)),l===e.RGB_INTEGER&&(M===e.UNSIGNED_BYTE&&(O=e.RGB8UI),M===e.UNSIGNED_SHORT&&(O=e.RGB16UI),M===e.UNSIGNED_INT&&(O=e.RGB32UI),M===e.BYTE&&(O=e.RGB8I),M===e.SHORT&&(O=e.RGB16I),M===e.INT&&(O=e.RGB32I)),l===e.RGBA_INTEGER&&(M===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),M===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),M===e.UNSIGNED_INT&&(O=e.RGBA32UI),M===e.BYTE&&(O=e.RGBA8I),M===e.SHORT&&(O=e.RGBA16I),M===e.INT&&(O=e.RGBA32I)),l===e.RGB&&(M===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),M===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),l===e.RGBA){const j=B?_a:st.getTransfer(x);M===e.FLOAT&&(O=e.RGBA32F),M===e.HALF_FLOAT&&(O=e.RGBA16F),M===e.UNSIGNED_BYTE&&(O=j===et?e.SRGB8_ALPHA8:e.RGBA8),M===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),M===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function v(p,l){let M;return p?l===null||l===dn||l===un?M=e.DEPTH24_STENCIL8:l===Ht?M=e.DEPTH32F_STENCIL8:l===Pn&&(M=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===dn||l===un?M=e.DEPTH_COMPONENT24:l===Ht?M=e.DEPTH_COMPONENT32F:l===Pn&&(M=e.DEPTH_COMPONENT16),M}function I(p,l){return f(p)===!0||p.isFramebufferTexture&&p.minFilter!==Qt&&p.minFilter!==Gt?Math.log2(Math.max(l.width,l.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?l.mipmaps.length:1}function w(p){const l=p.target;l.removeEventListener("dispose",w),V(l),l.isVideoTexture&&A.delete(l)}function N(p){const l=p.target;l.removeEventListener("dispose",N),d(l)}function V(p){const l=i.get(p);if(l.__webglInit===void 0)return;const M=p.source,x=T.get(M);if(x){const B=x[l.__cacheKey];B.usedTimes--,B.usedTimes===0&&m(p),Object.keys(x).length===0&&T.delete(M)}i.remove(p)}function m(p){const l=i.get(p);e.deleteTexture(l.__webglTexture);const M=p.source,x=T.get(M);delete x[l.__cacheKey],o.memory.textures--}function d(p){const l=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let x=0;x<6;x++){if(Array.isArray(l.__webglFramebuffer[x]))for(let B=0;B<l.__webglFramebuffer[x].length;B++)e.deleteFramebuffer(l.__webglFramebuffer[x][B]);else e.deleteFramebuffer(l.__webglFramebuffer[x]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[x])}else{if(Array.isArray(l.__webglFramebuffer))for(let x=0;x<l.__webglFramebuffer.length;x++)e.deleteFramebuffer(l.__webglFramebuffer[x]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let x=0;x<l.__webglColorRenderbuffer.length;x++)l.__webglColorRenderbuffer[x]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[x]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const M=p.textures;for(let x=0,B=M.length;x<B;x++){const O=i.get(M[x]);O.__webglTexture&&(e.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(M[x])}i.remove(p)}let b=0;function H(){b=0}function K(){const p=b;return p>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+a.maxTextures),b+=1,p}function W(p){const l=[];return l.push(p.wrapS),l.push(p.wrapT),l.push(p.wrapR||0),l.push(p.magFilter),l.push(p.minFilter),l.push(p.anisotropy),l.push(p.internalFormat),l.push(p.format),l.push(p.type),l.push(p.generateMipmaps),l.push(p.premultiplyAlpha),l.push(p.flipY),l.push(p.unpackAlignment),l.push(p.colorSpace),l.join()}function X(p,l){const M=i.get(p);if(p.isVideoTexture&&Le(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&M.__version!==p.version){const x=p.image;if(x===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(x.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(M,p,l);return}}else p.isExternalTexture&&(M.__webglTexture=p.sourceTexture?p.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,M.__webglTexture,e.TEXTURE0+l)}function Y(p,l){const M=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&M.__version!==p.version){z(M,p,l);return}n.bindTexture(e.TEXTURE_2D_ARRAY,M.__webglTexture,e.TEXTURE0+l)}function ne(p,l){const M=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&M.__version!==p.version){z(M,p,l);return}n.bindTexture(e.TEXTURE_3D,M.__webglTexture,e.TEXTURE0+l)}function k(p,l){const M=i.get(p);if(p.version>0&&M.__version!==p.version){q(M,p,l);return}n.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+l)}const Ee={[Jr]:e.REPEAT,[Qr]:e.CLAMP_TO_EDGE,[$r]:e.MIRRORED_REPEAT},Te={[Qt]:e.NEAREST,[ea]:e.NEAREST_MIPMAP_NEAREST,[sn]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[An]:e.LINEAR_MIPMAP_NEAREST,[qt]:e.LINEAR_MIPMAP_LINEAR},xe={[oo]:e.NEVER,[ao]:e.ALWAYS,[ro]:e.LESS,[ta]:e.LEQUAL,[io]:e.EQUAL,[no]:e.GEQUAL,[to]:e.GREATER,[eo]:e.NOTEQUAL};function Ge(p,l){if(l.type===Ht&&t.has("OES_texture_float_linear")===!1&&(l.magFilter===Gt||l.magFilter===An||l.magFilter===sn||l.magFilter===qt||l.minFilter===Gt||l.minFilter===An||l.minFilter===sn||l.minFilter===qt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,Ee[l.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,Ee[l.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,Ee[l.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Te[l.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Te[l.minFilter]),l.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,xe[l.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===Qt||l.minFilter!==sn&&l.minFilter!==qt||l.type===Ht&&t.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const M=t.get("EXT_texture_filter_anisotropic");e.texParameterf(p,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,a.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function Qe(p,l){let M=!1;p.__webglInit===void 0&&(p.__webglInit=!0,l.addEventListener("dispose",w));const x=l.source;let B=T.get(x);B===void 0&&(B={},T.set(x,B));const O=W(l);if(O!==p.__cacheKey){B[O]===void 0&&(B[O]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,M=!0),B[O].usedTimes++;const j=B[p.__cacheKey];j!==void 0&&(B[p.__cacheKey].usedTimes--,j.usedTimes===0&&m(l)),p.__cacheKey=O,p.__webglTexture=B[O].texture}return M}function Ye(p,l,M){return Math.floor(Math.floor(p/M)/l)}function Ne(p,l,M,x){const O=p.updateRanges;if(O.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,l.width,l.height,M,x,l.data);else{O.sort((Q,oe)=>Q.start-oe.start);let j=0;for(let Q=1;Q<O.length;Q++){const oe=O[j],ye=O[Q],Me=oe.start+oe.count,se=Ye(ye.start,l.width,4),Ue=Ye(oe.start,l.width,4);ye.start<=Me+1&&se===Ue&&Ye(ye.start+ye.count-1,l.width,4)===se?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++j,O[j]=ye)}O.length=j+1;const $=e.getParameter(e.UNPACK_ROW_LENGTH),fe=e.getParameter(e.UNPACK_SKIP_PIXELS),pe=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,l.width);for(let Q=0,oe=O.length;Q<oe;Q++){const ye=O[Q],Me=Math.floor(ye.start/4),se=Math.ceil(ye.count/4),Ue=Me%l.width,R=Math.floor(Me/l.width),te=se,re=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,R),n.texSubImage2D(e.TEXTURE_2D,0,Ue,R,te,re,M,x,l.data)}p.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,$),e.pixelStorei(e.UNPACK_SKIP_PIXELS,fe),e.pixelStorei(e.UNPACK_SKIP_ROWS,pe)}}function z(p,l,M){let x=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(x=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(x=e.TEXTURE_3D);const B=Qe(p,l),O=l.source;n.bindTexture(x,p.__webglTexture,e.TEXTURE0+M);const j=i.get(O);if(O.version!==j.__version||B===!0){n.activeTexture(e.TEXTURE0+M);const $=st.getPrimaries(st.workingColorSpace),fe=l.colorSpace===Ft?null:st.getPrimaries(l.colorSpace),pe=l.colorSpace===Ft||$===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Q=C(l.image,!1,a.maxTextureSize);Q=ot(l,Q);const oe=r.convert(l.format,l.colorSpace),ye=r.convert(l.type);let Me=P(l.internalFormat,oe,ye,l.colorSpace,l.isVideoTexture);Ge(x,l);let se;const Ue=l.mipmaps,R=l.isVideoTexture!==!0,te=j.__version===void 0||B===!0,re=O.dataReady,he=I(l,Q);if(l.isDepthTexture)Me=v(l.format===wn,l.type),te&&(R?n.texStorage2D(e.TEXTURE_2D,1,Me,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,Me,Q.width,Q.height,0,oe,ye,null));else if(l.isDataTexture)if(Ue.length>0){R&&te&&n.texStorage2D(e.TEXTURE_2D,he,Me,Ue[0].width,Ue[0].height);for(let J=0,Z=Ue.length;J<Z;J++)se=Ue[J],R?re&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,oe,ye,se.data):n.texImage2D(e.TEXTURE_2D,J,Me,se.width,se.height,0,oe,ye,se.data);l.generateMipmaps=!1}else R?(te&&n.texStorage2D(e.TEXTURE_2D,he,Me,Q.width,Q.height),re&&Ne(l,Q,oe,ye)):n.texImage2D(e.TEXTURE_2D,0,Me,Q.width,Q.height,0,oe,ye,Q.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){R&&te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,Me,Ue[0].width,Ue[0].height,Q.depth);for(let J=0,Z=Ue.length;J<Z;J++)if(se=Ue[J],l.format!==Ct)if(oe!==null)if(R){if(re)if(l.layerUpdates.size>0){const ve=ar(se.width,se.height,l.format,l.type);for(const De of l.layerUpdates){const Ze=se.data.subarray(De*ve/se.data.BYTES_PER_ELEMENT,(De+1)*ve/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,De,se.width,se.height,1,oe,Ze)}l.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,Q.depth,oe,se.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Me,se.width,se.height,Q.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,Q.depth,oe,ye,se.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,Me,se.width,se.height,Q.depth,0,oe,ye,se.data)}else{R&&te&&n.texStorage2D(e.TEXTURE_2D,he,Me,Ue[0].width,Ue[0].height);for(let J=0,Z=Ue.length;J<Z;J++)se=Ue[J],l.format!==Ct?oe!==null?R?re&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,oe,se.data):n.compressedTexImage2D(e.TEXTURE_2D,J,Me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,se.width,se.height,oe,ye,se.data):n.texImage2D(e.TEXTURE_2D,J,Me,se.width,se.height,0,oe,ye,se.data)}else if(l.isDataArrayTexture)if(R){if(te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,Me,Q.width,Q.height,Q.depth),re)if(l.layerUpdates.size>0){const J=ar(Q.width,Q.height,l.format,l.type);for(const Z of l.layerUpdates){const ve=Q.data.subarray(Z*J/Q.data.BYTES_PER_ELEMENT,(Z+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,oe,ye,ve)}l.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,ye,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,oe,ye,Q.data);else if(l.isData3DTexture)R?(te&&n.texStorage3D(e.TEXTURE_3D,he,Me,Q.width,Q.height,Q.depth),re&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,ye,Q.data)):n.texImage3D(e.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,oe,ye,Q.data);else if(l.isFramebufferTexture){if(te)if(R)n.texStorage2D(e.TEXTURE_2D,he,Me,Q.width,Q.height);else{let J=Q.width,Z=Q.height;for(let ve=0;ve<he;ve++)n.texImage2D(e.TEXTURE_2D,ve,Me,J,Z,0,oe,ye,null),J>>=1,Z>>=1}}else if(Ue.length>0){if(R&&te){const J=tt(Ue[0]);n.texStorage2D(e.TEXTURE_2D,he,Me,J.width,J.height)}for(let J=0,Z=Ue.length;J<Z;J++)se=Ue[J],R?re&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,oe,ye,se):n.texImage2D(e.TEXTURE_2D,J,Me,oe,ye,se);l.generateMipmaps=!1}else if(R){if(te){const J=tt(Q);n.texStorage2D(e.TEXTURE_2D,he,Me,J.width,J.height)}re&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,ye,Q)}else n.texImage2D(e.TEXTURE_2D,0,Me,oe,ye,Q);f(l)&&c(x),j.__version=O.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function q(p,l,M){if(l.image.length!==6)return;const x=Qe(p,l),B=l.source;n.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+M);const O=i.get(B);if(B.version!==O.__version||x===!0){n.activeTexture(e.TEXTURE0+M);const j=st.getPrimaries(st.workingColorSpace),$=l.colorSpace===Ft?null:st.getPrimaries(l.colorSpace),fe=l.colorSpace===Ft||j===$?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const pe=l.isCompressedTexture||l.image[0].isCompressedTexture,Q=l.image[0]&&l.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!pe&&!Q?oe[Z]=C(l.image[Z],!0,a.maxCubemapSize):oe[Z]=Q?l.image[Z].image:l.image[Z],oe[Z]=ot(l,oe[Z]);const ye=oe[0],Me=r.convert(l.format,l.colorSpace),se=r.convert(l.type),Ue=P(l.internalFormat,Me,se,l.colorSpace),R=l.isVideoTexture!==!0,te=O.__version===void 0||x===!0,re=B.dataReady;let he=I(l,ye);Ge(e.TEXTURE_CUBE_MAP,l);let J;if(pe){R&&te&&n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ue,ye.width,ye.height);for(let Z=0;Z<6;Z++){J=oe[Z].mipmaps;for(let ve=0;ve<J.length;ve++){const De=J[ve];l.format!==Ct?Me!==null?R?re&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,De.width,De.height,Me,De.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,De.width,De.height,Me,se,De.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ue,De.width,De.height,0,Me,se,De.data)}}}else{if(J=l.mipmaps,R&&te){J.length>0&&he++;const Z=tt(oe[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){R?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Me,se,oe[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,oe[Z].width,oe[Z].height,0,Me,se,oe[Z].data);for(let ve=0;ve<J.length;ve++){const Ze=J[ve].image[Z].image;R?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Ze.width,Ze.height,Me,se,Ze.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ue,Ze.width,Ze.height,0,Me,se,Ze.data)}}else{R?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,se,oe[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,Me,se,oe[Z]);for(let ve=0;ve<J.length;ve++){const De=J[ve];R?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Me,se,De.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ue,Me,se,De.image[Z])}}}f(l)&&c(e.TEXTURE_CUBE_MAP),O.__version=B.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function de(p,l,M,x,B,O){const j=r.convert(M.format,M.colorSpace),$=r.convert(M.type),fe=P(M.internalFormat,j,$,M.colorSpace),pe=i.get(l),Q=i.get(M);if(Q.__renderTarget=l,!pe.__hasExternalTextures){const oe=Math.max(1,l.width>>O),ye=Math.max(1,l.height>>O);B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?n.texImage3D(B,O,fe,oe,ye,l.depth,0,j,$,null):n.texImage2D(B,O,fe,oe,ye,0,j,$,null)}n.bindFramebuffer(e.FRAMEBUFFER,p),_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,x,B,Q.__webglTexture,0,Ke(l)):(B===e.TEXTURE_2D||B>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,x,B,Q.__webglTexture,O),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(p,l,M){if(e.bindRenderbuffer(e.RENDERBUFFER,p),l.depthBuffer){const x=l.depthTexture,B=x&&x.isDepthTexture?x.type:null,O=v(l.stencilBuffer,B),j=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=Ke(l);_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,$,O,l.width,l.height):M?e.renderbufferStorageMultisample(e.RENDERBUFFER,$,O,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,O,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,p)}else{const x=l.textures;for(let B=0;B<x.length;B++){const O=x[B],j=r.convert(O.format,O.colorSpace),$=r.convert(O.type),fe=P(O.internalFormat,j,$,O.colorSpace),pe=Ke(l);M&&_e(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,pe,fe,l.width,l.height):_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pe,fe,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,fe,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(p,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,p),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const x=i.get(l.depthTexture);x.__renderTarget=l,(!x.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),X(l.depthTexture,0);const B=x.__webglTexture,O=Ke(l);if(l.depthTexture.format===_i)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,B,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,B,0);else if(l.depthTexture.format===wn)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,B,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Oe(p){const l=i.get(p),M=p.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==p.depthTexture){const x=p.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),x){const B=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,x.removeEventListener("dispose",B)};x.addEventListener("dispose",B),l.__depthDisposeCallback=B}l.__boundDepthTexture=x}if(p.depthTexture&&!l.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");const x=p.texture.mipmaps;x&&x.length>0?le(l.__webglFramebuffer[0],p):le(l.__webglFramebuffer,p)}else if(M){l.__webglDepthbuffer=[];for(let x=0;x<6;x++)if(n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[x]),l.__webglDepthbuffer[x]===void 0)l.__webglDepthbuffer[x]=e.createRenderbuffer(),ie(l.__webglDepthbuffer[x],p,!1);else{const B=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=l.__webglDepthbuffer[x];e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,O)}}else{const x=p.texture.mipmaps;if(x&&x.length>0?n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),ie(l.__webglDepthbuffer,p,!1);else{const B=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,O)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function at(p,l,M){const x=i.get(p);l!==void 0&&de(x.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),M!==void 0&&Oe(p)}function E(p){const l=p.texture,M=i.get(p),x=i.get(l);p.addEventListener("dispose",N);const B=p.textures,O=p.isWebGLCubeRenderTarget===!0,j=B.length>1;if(j||(x.__webglTexture===void 0&&(x.__webglTexture=e.createTexture()),x.__version=l.version,o.memory.textures++),O){M.__webglFramebuffer=[];for(let $=0;$<6;$++)if(l.mipmaps&&l.mipmaps.length>0){M.__webglFramebuffer[$]=[];for(let fe=0;fe<l.mipmaps.length;fe++)M.__webglFramebuffer[$][fe]=e.createFramebuffer()}else M.__webglFramebuffer[$]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){M.__webglFramebuffer=[];for(let $=0;$<l.mipmaps.length;$++)M.__webglFramebuffer[$]=e.createFramebuffer()}else M.__webglFramebuffer=e.createFramebuffer();if(j)for(let $=0,fe=B.length;$<fe;$++){const pe=i.get(B[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=e.createTexture(),o.memory.textures++)}if(p.samples>0&&_e(p)===!1){M.__webglMultisampledFramebuffer=e.createFramebuffer(),M.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let $=0;$<B.length;$++){const fe=B[$];M.__webglColorRenderbuffer[$]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,M.__webglColorRenderbuffer[$]);const pe=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),oe=P(fe.internalFormat,pe,Q,fe.colorSpace,p.isXRRenderTarget===!0),ye=Ke(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,oe,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+$,e.RENDERBUFFER,M.__webglColorRenderbuffer[$])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(M.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(M.__webglDepthRenderbuffer,p,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(O){n.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,l);for(let $=0;$<6;$++)if(l.mipmaps&&l.mipmaps.length>0)for(let fe=0;fe<l.mipmaps.length;fe++)de(M.__webglFramebuffer[$][fe],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe);else de(M.__webglFramebuffer[$],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(l)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(j){for(let $=0,fe=B.length;$<fe;$++){const pe=B[$],Q=i.get(pe);let oe=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(oe=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(oe,Q.__webglTexture),Ge(oe,pe),de(M.__webglFramebuffer,p,pe,e.COLOR_ATTACHMENT0+$,oe,0),f(pe)&&c(oe)}n.unbindTexture()}else{let $=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&($=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture($,x.__webglTexture),Ge($,l),l.mipmaps&&l.mipmaps.length>0)for(let fe=0;fe<l.mipmaps.length;fe++)de(M.__webglFramebuffer[fe],p,l,e.COLOR_ATTACHMENT0,$,fe);else de(M.__webglFramebuffer,p,l,e.COLOR_ATTACHMENT0,$,0);f(l)&&c($),n.unbindTexture()}p.depthBuffer&&Oe(p)}function ke(p){const l=p.textures;for(let M=0,x=l.length;M<x;M++){const B=l[M];if(f(B)){const O=U(p),j=i.get(B).__webglTexture;n.bindTexture(O,j),c(O),n.unbindTexture()}}}const Re=[],Ce=[];function me(p){if(p.samples>0){if(_e(p)===!1){const l=p.textures,M=p.width,x=p.height;let B=e.COLOR_BUFFER_BIT;const O=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=i.get(p),$=l.length>1;if($)for(let pe=0;pe<l.length;pe++)n.bindFramebuffer(e.FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,j.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);const fe=p.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let pe=0;pe<l.length;pe++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(B|=e.STENCIL_BUFFER_BIT)),$){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Q=i.get(l[pe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,M,x,0,0,M,x,B,e.NEAREST),h===!0&&(Re.length=0,Ce.length=0,Re.push(e.COLOR_ATTACHMENT0+pe),p.depthBuffer&&p.resolveDepthBuffer===!1&&(Re.push(O),Ce.push(O),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<l.length;pe++){n.bindFramebuffer(e.FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Q=i.get(l[pe]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,j.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,Q,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&h){const l=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function Ke(p){return Math.min(a.maxSamples,p.samples)}function _e(p){const l=i.get(p);return p.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function Le(p){const l=o.render.frame;A.get(p)!==l&&(A.set(p,l),p.update())}function ot(p,l){const M=p.colorSpace,x=p.format,B=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||M!==Nn&&M!==Ft&&(st.getTransfer(M)===et?(x!==Ct||B!==zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",M)),l}function tt(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(g.width=p.naturalWidth||p.width,g.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(g.width=p.displayWidth,g.height=p.displayHeight):(g.width=p.width,g.height=p.height),g}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=at,this.setupRenderTarget=E,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=_e}function Hu(e,t){function n(i,a=Ft){let r;const o=st.getTransfer(a);if(i===zt)return e.UNSIGNED_BYTE;if(i===ra)return e.UNSIGNED_SHORT_4_4_4_4;if(i===aa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===fo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===uo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===po)return e.BYTE;if(i===ho)return e.SHORT;if(i===Pn)return e.UNSIGNED_SHORT;if(i===ca)return e.INT;if(i===dn)return e.UNSIGNED_INT;if(i===Ht)return e.FLOAT;if(i===In)return e.HALF_FLOAT;if(i===mo)return e.ALPHA;if(i===_o)return e.RGB;if(i===Ct)return e.RGBA;if(i===_i)return e.DEPTH_COMPONENT;if(i===wn)return e.DEPTH_STENCIL;if(i===go)return e.RED;if(i===la)return e.RED_INTEGER;if(i===vo)return e.RG;if(i===fa)return e.RG_INTEGER;if(i===ua)return e.RGBA_INTEGER;if(i===Vn||i===kn||i===zn||i===Wn)if(o===et)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bi||i===Ci||i===wi||i===yi)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ci)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pi||i===Li||i===Di)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pi||i===Li)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Di)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ui||i===Ii||i===Ni||i===Oi||i===Fi||i===Bi||i===Gi||i===Hi||i===Vi||i===ki||i===zi||i===Wi||i===Xi||i===Yi)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ui)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ii)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ni)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ki)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yi)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ki||i===qi||i===Zi)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ki)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ji||i===$i||i===Qi||i===Ji)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ji)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$i)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ji)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===un?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Vu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ku=`
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

}`;class zu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new oa(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Wt({vertexShader:Vu,fragmentShader:ku,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wu extends Ia{constructor(t,n){super();const i=this;let a=null,r=1,o=null,s="local-floor",h=1,g=null,A=null,_=null,T=null,S=null,D=null;const C=typeof XRWebGLBinding<"u",f=new zu,c={},U=n.getContextAttributes();let P=null,v=null;const I=[],w=[],N=new je;let V=null;const m=new $t;m.viewport=new mt;const d=new $t;d.viewport=new mt;const b=[m,d],H=new Na;let K=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=I[z];return q===void 0&&(q=new Hn,I[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=I[z];return q===void 0&&(q=new Hn,I[z]=q),q.getGripSpace()},this.getHand=function(z){let q=I[z];return q===void 0&&(q=new Hn,I[z]=q),q.getHandSpace()};function X(z){const q=w.indexOf(z.inputSource);if(q===-1)return;const de=I[q];de!==void 0&&(de.update(z.inputSource,z.frame,g||o),de.dispatchEvent({type:z.type,data:z.inputSource}))}function Y(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",ne);for(let z=0;z<I.length;z++){const q=w[z];q!==null&&(w[z]=null,I[z].disconnect(q))}K=null,W=null,f.reset();for(const z in c)delete c[z];t.setRenderTarget(P),S=null,T=null,_=null,a=null,v=null,Ne.stop(),i.isPresenting=!1,t.setPixelRatio(V),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||o},this.setReferenceSpace=function(z){g=z},this.getBaseLayer=function(){return T!==null?T:S},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return D},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(P=t.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",ne),U.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,le=null;U.depth&&(le=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=U.stencil?wn:_i,ie=U.stencil?un:dn);const Oe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:r};_=this.getBinding(),T=_.createProjectionLayer(Oe),a.updateRenderState({layers:[T]}),t.setPixelRatio(1),t.setSize(T.textureWidth,T.textureHeight,!1),v=new tn(T.textureWidth,T.textureHeight,{format:Ct,type:zt,depthTexture:new jr(T.textureWidth,T.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}else{const de={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(a,n,de),a.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),v=new tn(S.framebufferWidth,S.framebufferHeight,{format:Ct,type:zt,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),g=null,o=await a.requestReferenceSpace(s),Ne.setContext(a),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(z){for(let q=0;q<z.removed.length;q++){const de=z.removed[q],ie=w.indexOf(de);ie>=0&&(w[ie]=null,I[ie].disconnect(de))}for(let q=0;q<z.added.length;q++){const de=z.added[q];let ie=w.indexOf(de);if(ie===-1){for(let Oe=0;Oe<I.length;Oe++)if(Oe>=w.length){w.push(de),ie=Oe;break}else if(w[Oe]===null){w[Oe]=de,ie=Oe;break}if(ie===-1)break}const le=I[ie];le&&le.connect(de)}}const k=new Se,Ee=new Se;function Te(z,q,de){k.setFromMatrixPosition(q.matrixWorld),Ee.setFromMatrixPosition(de.matrixWorld);const ie=k.distanceTo(Ee),le=q.projectionMatrix.elements,Oe=de.projectionMatrix.elements,at=le[14]/(le[10]-1),E=le[14]/(le[10]+1),ke=(le[9]+1)/le[5],Re=(le[9]-1)/le[5],Ce=(le[8]-1)/le[0],me=(Oe[8]+1)/Oe[0],Ke=at*Ce,_e=at*me,Le=ie/(-Ce+me),ot=Le*-Ce;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(Le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),le[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const tt=at+Le,p=E+Le,l=Ke-ot,M=_e+(ie-ot),x=ke*E/p*tt,B=Re*E/p*tt;z.projectionMatrix.makePerspective(l,M,x,B,tt,p),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function xe(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let q=z.near,de=z.far;f.texture!==null&&(f.depthNear>0&&(q=f.depthNear),f.depthFar>0&&(de=f.depthFar)),H.near=d.near=m.near=q,H.far=d.far=m.far=de,(K!==H.near||W!==H.far)&&(a.updateRenderState({depthNear:H.near,depthFar:H.far}),K=H.near,W=H.far),H.layers.mask=z.layers.mask|6,m.layers.mask=H.layers.mask&3,d.layers.mask=H.layers.mask&5;const ie=z.parent,le=H.cameras;xe(H,ie);for(let Oe=0;Oe<le.length;Oe++)xe(le[Oe],ie);le.length===2?Te(H,m,d):H.projectionMatrix.copy(m.projectionMatrix),Ge(z,H,ie)};function Ge(z,q,de){de===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Oa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(T===null&&S===null))return h},this.setFoveation=function(z){h=z,T!==null&&(T.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(z){return c[z]};let Qe=null;function Ye(z,q){if(A=q.getViewerPose(g||o),D=q,A!==null){const de=A.views;S!==null&&(t.setRenderTargetFramebuffer(v,S.framebuffer),t.setRenderTarget(v));let ie=!1;de.length!==H.cameras.length&&(H.cameras.length=0,ie=!0);for(let E=0;E<de.length;E++){const ke=de[E];let Re=null;if(S!==null)Re=S.getViewport(ke);else{const me=_.getViewSubImage(T,ke);Re=me.viewport,E===0&&(t.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(v))}let Ce=b[E];Ce===void 0&&(Ce=new $t,Ce.layers.enable(E),Ce.viewport=new mt,b[E]=Ce),Ce.matrix.fromArray(ke.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ke.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Re.x,Re.y,Re.width,Re.height),E===0&&(H.matrix.copy(Ce.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ie===!0&&H.cameras.push(Ce)}const le=a.enabledFeatures;if(le&&le.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=i.getBinding();const E=_.getDepthInformation(de[0]);E&&E.isValid&&E.texture&&f.init(E,a.renderState)}if(le&&le.includes("camera-access")&&C){t.state.unbindTexture(),_=i.getBinding();for(let E=0;E<de.length;E++){const ke=de[E].camera;if(ke){let Re=c[ke];Re||(Re=new oa,c[ke]=Re);const Ce=_.getCameraImage(ke);Re.sourceTexture=Ce}}}}for(let de=0;de<I.length;de++){const ie=w[de],le=I[de];ie!==null&&le!==void 0&&le.update(ie,q,g||o)}Qe&&Qe(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),D=null}const Ne=new Ea;Ne.setAnimationLoop(Ye),this.setAnimationLoop=function(z){Qe=z},this.dispose=function(){}}}const Nt=new ma,Xu=new kt;function Yu(e,t){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,pa(e)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function a(f,c,U,P,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(f,c):c.isMeshToonMaterial?(r(f,c),_(f,c)):c.isMeshPhongMaterial?(r(f,c),A(f,c)):c.isMeshStandardMaterial?(r(f,c),T(f,c),c.isMeshPhysicalMaterial&&S(f,c,v)):c.isMeshMatcapMaterial?(r(f,c),D(f,c)):c.isMeshDepthMaterial?r(f,c):c.isMeshDistanceMaterial?(r(f,c),C(f,c)):c.isMeshNormalMaterial?r(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?h(f,c,U,P):c.isSpriteMaterial?g(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===At&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===At&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const U=t.get(c),P=U.envMap,v=U.envMapRotation;P&&(f.envMap.value=P,Nt.copy(v),Nt.x*=-1,Nt.y*=-1,Nt.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Nt.y*=-1,Nt.z*=-1),f.envMapRotation.value.setFromMatrix4(Xu.makeRotationFromEuler(Nt)),f.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function h(f,c,U,P){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*U,f.scale.value=P*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function g(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function A(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function _(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function T(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function S(f,c,U){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===At&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=U.texture,f.transmissionSamplerSize.value.set(U.width,U.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function D(f,c){c.matcap&&(f.matcap.value=c.matcap)}function C(f,c){const U=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(U.matrixWorld),f.nearDistance.value=U.shadow.camera.near,f.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Ku(e,t,n,i){let a={},r={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,P){const v=P.program;i.uniformBlockBinding(U,v)}function g(U,P){let v=a[U.id];v===void 0&&(D(U),v=A(U),a[U.id]=v,U.addEventListener("dispose",f));const I=P.program;i.updateUBOMapping(U,I);const w=t.render.frame;r[U.id]!==w&&(T(U),r[U.id]=w)}function A(U){const P=_();U.__bindingPointIndex=P;const v=e.createBuffer(),I=U.__size,w=U.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,I,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,P,v),v}function _(){for(let U=0;U<s;U++)if(o.indexOf(U)===-1)return o.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function T(U){const P=a[U.id],v=U.uniforms,I=U.__cache;e.bindBuffer(e.UNIFORM_BUFFER,P);for(let w=0,N=v.length;w<N;w++){const V=Array.isArray(v[w])?v[w]:[v[w]];for(let m=0,d=V.length;m<d;m++){const b=V[m];if(S(b,w,m,I)===!0){const H=b.__offset,K=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let X=0;X<K.length;X++){const Y=K[X],ne=C(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,H+W,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function S(U,P,v,I){const w=U.value,N=P+"_"+v;if(I[N]===void 0)return typeof w=="number"||typeof w=="boolean"?I[N]=w:I[N]=w.clone(),!0;{const V=I[N];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return I[N]=w,!0}else if(V.equals(w)===!1)return V.copy(w),!0}return!1}function D(U){const P=U.uniforms;let v=0;const I=16;for(let N=0,V=P.length;N<V;N++){const m=Array.isArray(P[N])?P[N]:[P[N]];for(let d=0,b=m.length;d<b;d++){const H=m[d],K=Array.isArray(H.value)?H.value:[H.value];for(let W=0,X=K.length;W<X;W++){const Y=K[W],ne=C(Y),k=v%I,Ee=k%ne.boundary,Te=k+Ee;v+=Ee,Te!==0&&I-Te<ne.storage&&(v+=I-Te),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=ne.storage}}}const w=v%I;return w>0&&(v+=I-w),U.__size=v,U.__cache={},this}function C(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function f(U){const P=U.target;P.removeEventListener("dispose",f);const v=o.indexOf(P.__bindingPointIndex);o.splice(v,1),e.deleteBuffer(a[P.id]),delete a[P.id],delete r[P.id]}function c(){for(const U in a)e.deleteBuffer(a[U]);o=[],a={},r={}}return{bind:h,update:g,dispose:c}}class qu{constructor(t={}){const{canvas:n=Da(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:A="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:T=!1}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const D=new Uint32Array(4),C=new Int32Array(4);let f=null,c=null;const U=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let I=!1;this._outputColorSpace=Cn;let w=0,N=0,V=null,m=-1,d=null;const b=new mt,H=new mt;let K=null;const W=new $e(0);let X=0,Y=n.width,ne=n.height,k=1,Ee=null,Te=null;const xe=new mt(0,0,Y,ne),Ge=new mt(0,0,Y,ne);let Qe=!1;const Ye=new qr;let Ne=!1,z=!1;const q=new kt,de=new Se,ie=new mt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function at(){return V===null?k:1}let E=i;function ke(u,y){return n.getContext(u,y)}try{const u={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:A,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zr}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",J,!1),E===null){const y="webgl2";if(E=ke(y,u),E===null)throw ke(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Re,Ce,me,Ke,_e,Le,ot,tt,p,l,M,x,B,O,j,$,fe,pe,Q,oe,ye,Me,se,Ue;function R(){Re=new rf(E),Re.init(),Me=new Hu(E,Re),Ce=new jl(E,Re,t,Me),me=new Bu(E,Re),Ce.reversedDepthBuffer&&T&&me.buffers.depth.setReversed(!0),Ke=new sf(E),_e=new Ru,Le=new Gu(E,Re,me,_e,Ce,Me,Ke),ot=new Ql(v),tt=new nf(v),p=new ds(E),se=new ql(E,p),l=new af(E,p,Ke,se),M=new lf(E,l,p,Ke),Q=new cf(E,Ce,Le),$=new $l(_e),x=new Au(v,ot,tt,Re,Ce,se,$),B=new Yu(v,_e),O=new Cu,j=new Uu(Re),pe=new Kl(v,ot,tt,me,M,S,h),fe=new Ou(v,M,Ce),Ue=new Ku(E,Ke,Ce,me),oe=new Zl(E,Re,Ke),ye=new of(E,Re,Ke),Ke.programs=x.programs,v.capabilities=Ce,v.extensions=Re,v.properties=_e,v.renderLists=O,v.shadowMap=fe,v.state=me,v.info=Ke}R();const te=new Wu(v,E);this.xr=te,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const u=Re.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Re.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(u){u!==void 0&&(k=u,this.setSize(Y,ne,!1))},this.getSize=function(u){return u.set(Y,ne)},this.setSize=function(u,y,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=u,ne=y,n.width=Math.floor(u*k),n.height=Math.floor(y*k),F===!0&&(n.style.width=u+"px",n.style.height=y+"px"),this.setViewport(0,0,u,y)},this.getDrawingBufferSize=function(u){return u.set(Y*k,ne*k).floor()},this.setDrawingBufferSize=function(u,y,F){Y=u,ne=y,k=F,n.width=Math.floor(u*F),n.height=Math.floor(y*F),this.setViewport(0,0,u,y)},this.getCurrentViewport=function(u){return u.copy(b)},this.getViewport=function(u){return u.copy(xe)},this.setViewport=function(u,y,F,G){u.isVector4?xe.set(u.x,u.y,u.z,u.w):xe.set(u,y,F,G),me.viewport(b.copy(xe).multiplyScalar(k).round())},this.getScissor=function(u){return u.copy(Ge)},this.setScissor=function(u,y,F,G){u.isVector4?Ge.set(u.x,u.y,u.z,u.w):Ge.set(u,y,F,G),me.scissor(H.copy(Ge).multiplyScalar(k).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(u){me.setScissorTest(Qe=u)},this.setOpaqueSort=function(u){Ee=u},this.setTransparentSort=function(u){Te=u},this.getClearColor=function(u){return u.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(u=!0,y=!0,F=!0){let G=0;if(u){let L=!1;if(V!==null){const ee=V.texture.format;L=ee===ua||ee===fa||ee===la}if(L){const ee=V.texture.type,ce=ee===zt||ee===dn||ee===Pn||ee===un||ee===ra||ee===aa,ge=pe.getClearColor(),ue=pe.getClearAlpha(),we=ge.r,Pe=ge.g,Ae=ge.b;ce?(D[0]=we,D[1]=Pe,D[2]=Ae,D[3]=ue,E.clearBufferuiv(E.COLOR,0,D)):(C[0]=we,C[1]=Pe,C[2]=Ae,C[3]=ue,E.clearBufferiv(E.COLOR,0,C))}else G|=E.COLOR_BUFFER_BIT}y&&(G|=E.DEPTH_BUFFER_BIT),F&&(G|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",J,!1),pe.dispose(),O.dispose(),j.dispose(),_e.dispose(),ot.dispose(),tt.dispose(),M.dispose(),se.dispose(),Ue.dispose(),x.dispose(),te.dispose(),te.removeEventListener("sessionstart",Rt),te.removeEventListener("sessionend",Ei),Dt.stop()};function re(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const u=Ke.autoReset,y=fe.enabled,F=fe.autoUpdate,G=fe.needsUpdate,L=fe.type;R(),Ke.autoReset=u,fe.enabled=y,fe.autoUpdate=F,fe.needsUpdate=G,fe.type=L}function J(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Z(u){const y=u.target;y.removeEventListener("dispose",Z),ve(y)}function ve(u){De(u),_e.remove(u)}function De(u){const y=_e.get(u).programs;y!==void 0&&(y.forEach(function(F){x.releaseProgram(F)}),u.isShaderMaterial&&x.releaseShaderCache(u))}this.renderBufferDirect=function(u,y,F,G,L,ee){y===null&&(y=le);const ce=L.isMesh&&L.matrixWorld.determinant()<0,ge=ba(u,y,F,G,L);me.setMaterial(G,ce);let ue=F.index,we=1;if(G.wireframe===!0){if(ue=l.getWireframeAttribute(F),ue===void 0)return;we=2}const Pe=F.drawRange,Ae=F.attributes.position;let Be=Pe.start*we,We=(Pe.start+Pe.count)*we;ee!==null&&(Be=Math.max(Be,ee.start*we),We=Math.min(We,(ee.start+ee.count)*we)),ue!==null?(Be=Math.max(Be,0),We=Math.min(We,ue.count)):Ae!=null&&(Be=Math.max(Be,0),We=Math.min(We,Ae.count));const rt=We-Be;if(rt<0||rt===1/0)return;se.setup(L,G,ge,F,ue);let Je,qe=oe;if(ue!==null&&(Je=p.get(ue),qe=ye,qe.setIndex(Je)),L.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*at()),qe.setMode(E.LINES)):qe.setMode(E.TRIANGLES);else if(L.isLine){let be=G.linewidth;be===void 0&&(be=1),me.setLineWidth(be*at()),L.isLineSegments?qe.setMode(E.LINES):L.isLineLoop?qe.setMode(E.LINE_LOOP):qe.setMode(E.LINE_STRIP)}else L.isPoints?qe.setMode(E.POINTS):L.isSprite&&qe.setMode(E.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))qe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const be=L._multiDrawStarts,nt=L._multiDrawCounts,He=L._multiDrawCount,gt=ue?p.get(ue).bytesPerElement:1,Xt=_e.get(G).currentProgram.getUniforms();for(let vt=0;vt<He;vt++)Xt.setValue(E,"_gl_DrawID",vt),qe.render(be[vt]/gt,nt[vt])}else if(L.isInstancedMesh)qe.renderInstances(Be,rt,L.count);else if(F.isInstancedBufferGeometry){const be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,nt=Math.min(F.instanceCount,be);qe.renderInstances(Be,rt,nt)}else qe.render(Be,rt)};function Ze(u,y,F){u.transparent===!0&&u.side===Et&&u.forceSinglePass===!1?(u.side=At,u.needsUpdate=!0,gn(u,y,F),u.side=fn,u.needsUpdate=!0,gn(u,y,F),u.side=Et):gn(u,y,F)}this.compile=function(u,y,F=null){F===null&&(F=u),c=j.get(F),c.init(y),P.push(c),F.traverseVisible(function(L){L.isLight&&L.layers.test(y.layers)&&(c.pushLight(L),L.castShadow&&c.pushShadow(L))}),u!==F&&u.traverseVisible(function(L){L.isLight&&L.layers.test(y.layers)&&(c.pushLight(L),L.castShadow&&c.pushShadow(L))}),c.setupLights();const G=new Set;return u.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const ge=ee[ce];Ze(ge,F,L),G.add(ge)}else Ze(ee,F,L),G.add(ee)}),c=P.pop(),G},this.compileAsync=function(u,y,F=null){const G=this.compile(u,y,F);return new Promise(L=>{function ee(){if(G.forEach(function(ce){_e.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){L(u);return}setTimeout(ee,10)}Re.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ze=null;function wt(u){ze&&ze(u)}function Rt(){Dt.stop()}function Ei(){Dt.start()}const Dt=new Ea;Dt.setAnimationLoop(wt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(u){ze=u,te.setAnimationLoop(u),u===null?Dt.stop():Dt.start()},te.addEventListener("sessionstart",Rt),te.addEventListener("sessionend",Ei),this.render=function(u,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(y),y=te.getCamera()),u.isScene===!0&&u.onBeforeRender(v,u,y,V),c=j.get(u,P.length),c.init(y),P.push(c),q.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Ye.setFromProjectionMatrix(q,Ri,y.reversedDepth),z=this.localClippingEnabled,Ne=$.init(this.clippingPlanes,z),f=O.get(u,U.length),f.init(),U.push(f),te.enabled===!0&&te.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Bn(ee,y,-1/0,v.sortObjects)}Bn(u,y,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(Ee,Te),Oe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Oe&&pe.addToRenderList(f,u),this.info.render.frame++,Ne===!0&&$.beginShadows();const F=c.state.shadowsArray;fe.render(F,u,y),Ne===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=f.opaque,L=f.transmissive;if(c.setupLights(),y.isArrayCamera){const ee=y.cameras;if(L.length>0)for(let ce=0,ge=ee.length;ce<ge;ce++){const ue=ee[ce];Mi(G,L,u,ue)}Oe&&pe.render(u);for(let ce=0,ge=ee.length;ce<ge;ce++){const ue=ee[ce];Si(f,u,ue,ue.viewport)}}else L.length>0&&Mi(G,L,u,y),Oe&&pe.render(u),Si(f,u,y);V!==null&&N===0&&(Le.updateMultisampleRenderTarget(V),Le.updateRenderTargetMipmap(V)),u.isScene===!0&&u.onAfterRender(v,u,y),se.resetDefaultState(),m=-1,d=null,P.pop(),P.length>0?(c=P[P.length-1],Ne===!0&&$.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,U.pop(),U.length>0?f=U[U.length-1]:f=null};function Bn(u,y,F,G){if(u.visible===!1)return;if(u.layers.test(y.layers)){if(u.isGroup)F=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(y);else if(u.isLight)c.pushLight(u),u.castShadow&&c.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Ye.intersectsSprite(u)){G&&ie.setFromMatrixPosition(u.matrixWorld).applyMatrix4(q);const ce=M.update(u),ge=u.material;ge.visible&&f.push(u,ce,ge,F,ie.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Ye.intersectsObject(u))){const ce=M.update(u),ge=u.material;if(G&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),ie.copy(u.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ie.copy(ce.boundingSphere.center)),ie.applyMatrix4(u.matrixWorld).applyMatrix4(q)),Array.isArray(ge)){const ue=ce.groups;for(let we=0,Pe=ue.length;we<Pe;we++){const Ae=ue[we],Be=ge[Ae.materialIndex];Be&&Be.visible&&f.push(u,ce,Be,F,ie.z,Ae)}}else ge.visible&&f.push(u,ce,ge,F,ie.z,null)}}const ee=u.children;for(let ce=0,ge=ee.length;ce<ge;ce++)Bn(ee[ce],y,F,G)}function Si(u,y,F,G){const L=u.opaque,ee=u.transmissive,ce=u.transparent;c.setupLightsView(F),Ne===!0&&$.setGlobalState(v.clippingPlanes,F),G&&me.viewport(b.copy(G)),L.length>0&&_n(L,y,F),ee.length>0&&_n(ee,y,F),ce.length>0&&_n(ce,y,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Mi(u,y,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[G.id]===void 0&&(c.state.transmissionRenderTarget[G.id]=new tn(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?In:zt,minFilter:qt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ee=c.state.transmissionRenderTarget[G.id],ce=G.viewport||b;ee.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),ue=v.getActiveCubeFace(),we=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&pe.render(F);const Pe=v.toneMapping;v.toneMapping=Lt;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),c.setupLightsView(G),Ne===!0&&$.setGlobalState(v.clippingPlanes,G),_n(u,F,G),Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let We=0,rt=y.length;We<rt;We++){const Je=y[We],qe=Je.object,be=Je.geometry,nt=Je.material,He=Je.group;if(nt.side===Et&&qe.layers.test(G.layers)){const gt=nt.side;nt.side=At,nt.needsUpdate=!0,Ti(qe,F,G,be,nt,He),nt.side=gt,nt.needsUpdate=!0,Be=!0}}Be===!0&&(Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee))}v.setRenderTarget(ge,ue,we),v.setClearColor(W,X),Ae!==void 0&&(G.viewport=Ae),v.toneMapping=Pe}function _n(u,y,F){const G=y.isScene===!0?y.overrideMaterial:null;for(let L=0,ee=u.length;L<ee;L++){const ce=u[L],ge=ce.object,ue=ce.geometry,we=ce.group;let Pe=ce.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),ge.layers.test(F.layers)&&Ti(ge,y,F,ue,Pe,we)}}function Ti(u,y,F,G,L,ee){u.onBeforeRender(v,y,F,G,L,ee),u.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),L.onBeforeRender(v,y,F,G,u,ee),L.transparent===!0&&L.side===Et&&L.forceSinglePass===!1?(L.side=At,L.needsUpdate=!0,v.renderBufferDirect(F,y,G,L,u,ee),L.side=fn,L.needsUpdate=!0,v.renderBufferDirect(F,y,G,L,u,ee),L.side=Et):v.renderBufferDirect(F,y,G,L,u,ee),u.onAfterRender(v,y,F,G,L,ee)}function gn(u,y,F){y.isScene!==!0&&(y=le);const G=_e.get(u),L=c.state.lights,ee=c.state.shadowsArray,ce=L.state.version,ge=x.getParameters(u,L.state,ee,y,F),ue=x.getProgramCacheKey(ge);let we=G.programs;G.environment=u.isMeshStandardMaterial?y.environment:null,G.fog=y.fog,G.envMap=(u.isMeshStandardMaterial?tt:ot).get(u.envMap||G.environment),G.envMapRotation=G.environment!==null&&u.envMap===null?y.environmentRotation:u.envMapRotation,we===void 0&&(u.addEventListener("dispose",Z),we=new Map,G.programs=we);let Pe=we.get(ue);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===ce)return Ai(u,ge),Pe}else ge.uniforms=x.getUniforms(u),u.onBeforeCompile(ge,v),Pe=x.acquireProgram(ge,ue),we.set(ue,Pe),G.uniforms=ge.uniforms;const Ae=G.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Ae.clippingPlanes=$.uniform),Ai(u,ge),G.needsLights=wa(u),G.lightsStateVersion=ce,G.needsLights&&(Ae.ambientLightColor.value=L.state.ambient,Ae.lightProbe.value=L.state.probe,Ae.directionalLights.value=L.state.directional,Ae.directionalLightShadows.value=L.state.directionalShadow,Ae.spotLights.value=L.state.spot,Ae.spotLightShadows.value=L.state.spotShadow,Ae.rectAreaLights.value=L.state.rectArea,Ae.ltc_1.value=L.state.rectAreaLTC1,Ae.ltc_2.value=L.state.rectAreaLTC2,Ae.pointLights.value=L.state.point,Ae.pointLightShadows.value=L.state.pointShadow,Ae.hemisphereLights.value=L.state.hemi,Ae.directionalShadowMap.value=L.state.directionalShadowMap,Ae.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ae.spotShadowMap.value=L.state.spotShadowMap,Ae.spotLightMatrix.value=L.state.spotLightMatrix,Ae.spotLightMap.value=L.state.spotLightMap,Ae.pointShadowMap.value=L.state.pointShadowMap,Ae.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function xi(u){if(u.uniformsList===null){const y=u.currentProgram.getUniforms();u.uniformsList=bn.seqWithValue(y.seq,u.uniforms)}return u.uniformsList}function Ai(u,y){const F=_e.get(u);F.outputColorSpace=y.outputColorSpace,F.batching=y.batching,F.batchingColor=y.batchingColor,F.instancing=y.instancing,F.instancingColor=y.instancingColor,F.instancingMorph=y.instancingMorph,F.skinning=y.skinning,F.morphTargets=y.morphTargets,F.morphNormals=y.morphNormals,F.morphColors=y.morphColors,F.morphTargetsCount=y.morphTargetsCount,F.numClippingPlanes=y.numClippingPlanes,F.numIntersection=y.numClipIntersection,F.vertexAlphas=y.vertexAlphas,F.vertexTangents=y.vertexTangents,F.toneMapping=y.toneMapping}function ba(u,y,F,G,L){y.isScene!==!0&&(y=le),Le.resetTextureUnits();const ee=y.fog,ce=G.isMeshStandardMaterial?y.environment:null,ge=V===null?v.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Nn,ue=(G.isMeshStandardMaterial?tt:ot).get(G.envMap||ce),we=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!F.morphAttributes.position,Be=!!F.morphAttributes.normal,We=!!F.morphAttributes.color;let rt=Lt;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(rt=v.toneMapping);const Je=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,qe=Je!==void 0?Je.length:0,be=_e.get(G),nt=c.state.lights;if(Ne===!0&&(z===!0||u!==d)){const ut=u===d&&G.id===m;$.setState(G,u,ut)}let He=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==nt.state.version||be.outputColorSpace!==ge||L.isBatchedMesh&&be.batching===!1||!L.isBatchedMesh&&be.batching===!0||L.isBatchedMesh&&be.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&be.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&be.instancing===!1||!L.isInstancedMesh&&be.instancing===!0||L.isSkinnedMesh&&be.skinning===!1||!L.isSkinnedMesh&&be.skinning===!0||L.isInstancedMesh&&be.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&be.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&be.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&be.instancingMorph===!1&&L.morphTexture!==null||be.envMap!==ue||G.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$.numPlanes||be.numIntersection!==$.numIntersection)||be.vertexAlphas!==we||be.vertexTangents!==Pe||be.morphTargets!==Ae||be.morphNormals!==Be||be.morphColors!==We||be.toneMapping!==rt||be.morphTargetsCount!==qe)&&(He=!0):(He=!0,be.__version=G.version);let gt=be.currentProgram;He===!0&&(gt=gn(G,y,L));let Xt=!1,vt=!1,an=!1;const it=gt.getUniforms(),Mt=be.uniforms;if(me.useProgram(gt.program)&&(Xt=!0,vt=!0,an=!0),G.id!==m&&(m=G.id,vt=!0),Xt||d!==u){me.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),it.setValue(E,"projectionMatrix",u.projectionMatrix),it.setValue(E,"viewMatrix",u.matrixWorldInverse);const dt=it.map.cameraPosition;dt!==void 0&&dt.setValue(E,de.setFromMatrixPosition(u.matrixWorld)),Ce.logarithmicDepthBuffer&&it.setValue(E,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(E,"isOrthographic",u.isOrthographicCamera===!0),d!==u&&(d=u,vt=!0,an=!0)}if(L.isSkinnedMesh){it.setOptional(E,L,"bindMatrix"),it.setOptional(E,L,"bindMatrixInverse");const ut=L.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),it.setValue(E,"boneTexture",ut.boneTexture,Le))}L.isBatchedMesh&&(it.setOptional(E,L,"batchingTexture"),it.setValue(E,"batchingTexture",L._matricesTexture,Le),it.setOptional(E,L,"batchingIdTexture"),it.setValue(E,"batchingIdTexture",L._indirectTexture,Le),it.setOptional(E,L,"batchingColorTexture"),L._colorsTexture!==null&&it.setValue(E,"batchingColorTexture",L._colorsTexture,Le));const Tt=F.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&Q.update(L,F,gt),(vt||be.receiveShadow!==L.receiveShadow)&&(be.receiveShadow=L.receiveShadow,it.setValue(E,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mt.envMap.value=ue,Mt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&y.environment!==null&&(Mt.envMapIntensity.value=y.environmentIntensity),vt&&(it.setValue(E,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Ca(Mt,an),ee&&G.fog===!0&&B.refreshFogUniforms(Mt,ee),B.refreshMaterialUniforms(Mt,G,k,ne,c.state.transmissionRenderTarget[u.id]),bn.upload(E,xi(be),Mt,Le)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bn.upload(E,xi(be),Mt,Le),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(E,"center",L.center),it.setValue(E,"modelViewMatrix",L.modelViewMatrix),it.setValue(E,"normalMatrix",L.normalMatrix),it.setValue(E,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ut=G.uniformsGroups;for(let dt=0,Gn=ut.length;dt<Gn;dt++){const Ut=ut[dt];Ue.update(Ut,gt),Ue.bind(Ut,gt)}}return gt}function Ca(u,y){u.ambientLightColor.needsUpdate=y,u.lightProbe.needsUpdate=y,u.directionalLights.needsUpdate=y,u.directionalLightShadows.needsUpdate=y,u.pointLights.needsUpdate=y,u.pointLightShadows.needsUpdate=y,u.spotLights.needsUpdate=y,u.spotLightShadows.needsUpdate=y,u.rectAreaLights.needsUpdate=y,u.hemisphereLights.needsUpdate=y}function wa(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(u,y,F){const G=_e.get(u);G.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_e.get(u.texture).__webglTexture=y,_e.get(u.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:F,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,y){const F=_e.get(u);F.__webglFramebuffer=y,F.__useDefaultFramebuffer=y===void 0};const ya=E.createFramebuffer();this.setRenderTarget=function(u,y=0,F=0){V=u,w=y,N=F;let G=!0,L=null,ee=!1,ce=!1;if(u){const ue=_e.get(u);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(E.FRAMEBUFFER,null),G=!1;else if(ue.__webglFramebuffer===void 0)Le.setupRenderTarget(u);else if(ue.__hasExternalTextures)Le.rebindTextures(u,_e.get(u.texture).__webglTexture,_e.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const Ae=u.depthTexture;if(ue.__boundDepthTexture!==Ae){if(Ae!==null&&_e.has(Ae)&&(u.width!==Ae.image.width||u.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(u)}}const we=u.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ce=!0);const Pe=_e.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Pe[y])?L=Pe[y][F]:L=Pe[y],ee=!0):u.samples>0&&Le.useMultisampledRTT(u)===!1?L=_e.get(u).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[F]:L=Pe,b.copy(u.viewport),H.copy(u.scissor),K=u.scissorTest}else b.copy(xe).multiplyScalar(k).floor(),H.copy(Ge).multiplyScalar(k).floor(),K=Qe;if(F!==0&&(L=ya),me.bindFramebuffer(E.FRAMEBUFFER,L)&&G&&me.drawBuffers(u,L),me.viewport(b),me.scissor(H),me.setScissorTest(K),ee){const ue=_e.get(u.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+y,ue.__webglTexture,F)}else if(ce){const ue=y;for(let we=0;we<u.textures.length;we++){const Pe=_e.get(u.textures[we]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+we,Pe.__webglTexture,F,ue)}}else if(u!==null&&F!==0){const ue=_e.get(u.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ue.__webglTexture,F)}m=-1},this.readRenderTargetPixels=function(u,y,F,G,L,ee,ce,ge=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue){me.bindFramebuffer(E.FRAMEBUFFER,ue);try{const we=u.textures[ge],Pe=we.format,Ae=we.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=u.width-G&&F>=0&&F<=u.height-L&&(u.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ge),E.readPixels(y,F,G,L,Me.convert(Pe),Me.convert(Ae),ee))}finally{const we=V!==null?_e.get(V).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(u,y,F,G,L,ee,ce,ge=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue)if(y>=0&&y<=u.width-G&&F>=0&&F<=u.height-L){me.bindFramebuffer(E.FRAMEBUFFER,ue);const we=u.textures[ge],Pe=we.format,Ae=we.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Be),E.bufferData(E.PIXEL_PACK_BUFFER,ee.byteLength,E.STREAM_READ),u.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ge),E.readPixels(y,F,G,L,Me.convert(Pe),Me.convert(Ae),0);const We=V!==null?_e.get(V).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,We);const rt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ua(E,rt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Be),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ee),E.deleteBuffer(Be),E.deleteSync(rt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,y=null,F=0){const G=Math.pow(2,-F),L=Math.floor(u.image.width*G),ee=Math.floor(u.image.height*G),ce=y!==null?y.x:0,ge=y!==null?y.y:0;Le.setTexture2D(u,0),E.copyTexSubImage2D(E.TEXTURE_2D,F,0,0,ce,ge,L,ee),me.unbindTexture()};const Pa=E.createFramebuffer(),La=E.createFramebuffer();this.copyTextureToTexture=function(u,y,F=null,G=null,L=0,ee=null){ee===null&&(L!==0?(ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let ce,ge,ue,we,Pe,Ae,Be,We,rt;const Je=u.isCompressedTexture?u.mipmaps[ee]:u.image;if(F!==null)ce=F.max.x-F.min.x,ge=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,we=F.min.x,Pe=F.min.y,Ae=F.isBox3?F.min.z:0;else{const Tt=Math.pow(2,-L);ce=Math.floor(Je.width*Tt),ge=Math.floor(Je.height*Tt),u.isDataArrayTexture?ue=Je.depth:u.isData3DTexture?ue=Math.floor(Je.depth*Tt):ue=1,we=0,Pe=0,Ae=0}G!==null?(Be=G.x,We=G.y,rt=G.z):(Be=0,We=0,rt=0);const qe=Me.convert(y.format),be=Me.convert(y.type);let nt;y.isData3DTexture?(Le.setTexture3D(y,0),nt=E.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Le.setTexture2DArray(y,0),nt=E.TEXTURE_2D_ARRAY):(Le.setTexture2D(y,0),nt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,y.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,y.unpackAlignment);const He=E.getParameter(E.UNPACK_ROW_LENGTH),gt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Xt=E.getParameter(E.UNPACK_SKIP_PIXELS),vt=E.getParameter(E.UNPACK_SKIP_ROWS),an=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,we),E.pixelStorei(E.UNPACK_SKIP_ROWS,Pe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ae);const it=u.isDataArrayTexture||u.isData3DTexture,Mt=y.isDataArrayTexture||y.isData3DTexture;if(u.isDepthTexture){const Tt=_e.get(u),ut=_e.get(y),dt=_e.get(Tt.__renderTarget),Gn=_e.get(ut.__renderTarget);me.bindFramebuffer(E.READ_FRAMEBUFFER,dt.__webglFramebuffer),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Ut=0;Ut<ue;Ut++)it&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_e.get(u).__webglTexture,L,Ae+Ut),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,ee,rt+Ut)),E.blitFramebuffer(we,Pe,ce,ge,Be,We,ce,ge,E.DEPTH_BUFFER_BIT,E.NEAREST);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(L!==0||u.isRenderTargetTexture||_e.has(u)){const Tt=_e.get(u),ut=_e.get(y);me.bindFramebuffer(E.READ_FRAMEBUFFER,Pa),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,La);for(let dt=0;dt<ue;dt++)it?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Tt.__webglTexture,L,Ae+dt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Tt.__webglTexture,L),Mt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ut.__webglTexture,ee,rt+dt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ut.__webglTexture,ee),L!==0?E.blitFramebuffer(we,Pe,ce,ge,Be,We,ce,ge,E.COLOR_BUFFER_BIT,E.NEAREST):Mt?E.copyTexSubImage3D(nt,ee,Be,We,rt+dt,we,Pe,ce,ge):E.copyTexSubImage2D(nt,ee,Be,We,we,Pe,ce,ge);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Mt?u.isDataTexture||u.isData3DTexture?E.texSubImage3D(nt,ee,Be,We,rt,ce,ge,ue,qe,be,Je.data):y.isCompressedArrayTexture?E.compressedTexSubImage3D(nt,ee,Be,We,rt,ce,ge,ue,qe,Je.data):E.texSubImage3D(nt,ee,Be,We,rt,ce,ge,ue,qe,be,Je):u.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ee,Be,We,ce,ge,qe,be,Je.data):u.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ee,Be,We,Je.width,Je.height,qe,Je.data):E.texSubImage2D(E.TEXTURE_2D,ee,Be,We,ce,ge,qe,be,Je);E.pixelStorei(E.UNPACK_ROW_LENGTH,He),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(E.UNPACK_SKIP_ROWS,vt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,an),ee===0&&y.generateMipmaps&&E.generateMipmap(nt),me.unbindTexture()},this.initRenderTarget=function(u){_e.get(u).__webglFramebuffer===void 0&&Le.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?Le.setTextureCube(u,0):u.isData3DTexture?Le.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?Le.setTexture2DArray(u,0):Le.setTexture2D(u,0),me.unbindTexture()},this.resetState=function(){w=0,N=0,V=null,me.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(t),n.unpackColorSpace=st._getUnpackColorSpace()}}const Hr={type:"change"},vi={type:"start"},Aa={type:"end"},xn=new Ko,Vr=new na,Zu=Math.cos(70*mn.DEG2RAD),ct=new Se,pt=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ei=1e-6;class ju extends Yo{constructor(t,n=null){super(t,n),this.state=Xe.NONE,this.target=new Se,this.cursor=new Se,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jt.ROTATE,MIDDLE:Jt.DOLLY,RIGHT:Jt.PAN},this.touches={ONE:Zt.ROTATE,TWO:Zt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Se,this._lastQuaternion=new en,this._lastTargetPosition=new Se,this._quat=new en().setFromUnitVectors(t.up,new Se(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new Se,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Se,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qu.bind(this),this._onPointerDown=$u.bind(this),this._onPointerUp=Ju.bind(this),this._onContextMenu=od.bind(this),this._onMouseWheel=nd.bind(this),this._onKeyDown=id.bind(this),this._onTouchStart=rd.bind(this),this._onTouchMove=ad.bind(this),this._onMouseDown=ed.bind(this),this._onMouseMove=td.bind(this),this._interceptControlDown=sd.bind(this),this._interceptControlUp=cd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hr),this.update(),this.state=Xe.NONE}update(t=null){const n=this.object.position;ct.copy(n).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=pt:i>Math.PI&&(i-=pt),a<-Math.PI?a+=pt:a>Math.PI&&(a-=pt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),n.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=ct.length();o=this._clampDistance(s*this._scale);const h=s-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const s=new Se(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const g=new Se(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(s),this.object.updateMatrixWorld(),o=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xn.origin.copy(this.object.position),xn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xn.direction))<Zu?this.object.lookAt(this.target):(Vr.setFromNormalAndCoplanarPoint(this.object.up,this.target),xn.intersectPlane(Vr,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ei||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ei||this._lastTargetPosition.distanceToSquared(this.target)>ei?(this.dispatchEvent(Hr),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pt/60*this.autoRotateSpeed*t:pt/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ct.setFromMatrixColumn(n,0),ct.multiplyScalar(-t),this._panOffset.add(ct)}_panUp(t,n){this.screenSpacePanning===!0?ct.setFromMatrixColumn(n,1):(ct.setFromMatrixColumn(n,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(t),this._panOffset.add(ct)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ct.copy(a).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,r=n-i.top,o=i.width,s=i.height;this._mouse.x=a/o*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,s=(t.pageY+n.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new je,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $u(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Qu(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Ju(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Aa),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function ed(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Xe.DOLLY;break;case Jt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}break;case Jt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(vi)}function td(e){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function nd(e){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(e.preventDefault(),this.dispatchEvent(vi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Aa))}function id(e){this.enabled!==!1&&this._handleKeyDown(e)}function rd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Xe.TOUCH_ROTATE;break;case Zt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Zt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Xe.TOUCH_DOLLY_PAN;break;case Zt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(vi)}function ad(e){switch(this._trackPointer(e),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Xe.NONE}}function od(e){this.enabled!==!1&&e.preventDefault()}function sd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kr={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Un{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Ed(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Dd(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,n,i,a){const r=new vd,o=[];for(let s=0,h=this.pluginCallbacks.length;s<h;s++)o.push(this.pluginCallbacks[s](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,n,a).catch(i)}parseAsync(t,n){const i=this;return new Promise(function(a,r){i.parse(t,a,r,n)})}}const Fe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ti="KHR_mesh_quantization",St={};St[Qt]=Fe.NEAREST;St[ea]=Fe.NEAREST_MIPMAP_NEAREST;St[sn]=Fe.NEAREST_MIPMAP_LINEAR;St[Gt]=Fe.LINEAR;St[An]=Fe.LINEAR_MIPMAP_NEAREST;St[qt]=Fe.LINEAR_MIPMAP_LINEAR;St[Qr]=Fe.CLAMP_TO_EDGE;St[Jr]=Fe.REPEAT;St[$r]=Fe.MIRRORED_REPEAT;const zr={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ld=new $e,Wr=12,fd=1179937895,ud=2,Xr=8,dd=1313821514,pd=5130562;function ln(e,t){return e.length===t.length&&e.every(function(n,i){return n===t[i]})}function hd(e){return new TextEncoder().encode(e).buffer}function md(e){return ln(e.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function _d(e,t,n){const i={min:new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let a=t;a<t+n;a++)for(let r=0;r<e.itemSize;r++){let o;e.itemSize>4?o=e.array[a*e.itemSize+r]:(r===0?o=e.getX(a):r===1?o=e.getY(a):r===2?o=e.getZ(a):r===3&&(o=e.getW(a)),e.normalized===!0&&(o=mn.normalize(o,e.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Ra(e){return Math.ceil(e/4)*4}function ni(e,t=0){const n=Ra(e.byteLength);if(n!==e.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(e)),t!==0)for(let a=e.byteLength;a<n;a++)i[a]=t;return i.buffer}return e}function Yr(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function gd(e,t){if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){let n;return t==="image/jpeg"?n=.92:t==="image/webp"&&(n=.8),e.convertToBlob({type:t,quality:n})}else return new Promise(n=>e.toBlob(n,t))}class vd{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Zr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,n,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const a=this,r=a.buffers,o=a.json;i=a.options;const s=a.extensionsUsed,h=a.extensionsRequired,g=new Blob(r,{type:"application/octet-stream"}),A=Object.keys(s),_=Object.keys(h);if(A.length>0&&(o.extensionsUsed=A),_.length>0&&(o.extensionsRequired=_),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=g.size),i.binary===!0){const T=new FileReader;T.readAsArrayBuffer(g),T.onloadend=function(){const S=ni(T.result),D=new DataView(new ArrayBuffer(Xr));D.setUint32(0,S.byteLength,!0),D.setUint32(4,pd,!0);const C=ni(hd(JSON.stringify(o)),32),f=new DataView(new ArrayBuffer(Xr));f.setUint32(0,C.byteLength,!0),f.setUint32(4,dd,!0);const c=new ArrayBuffer(Wr),U=new DataView(c);U.setUint32(0,fd,!0),U.setUint32(4,ud,!0);const P=Wr+f.byteLength+C.byteLength+D.byteLength+S.byteLength;U.setUint32(8,P,!0);const v=new Blob([c,f,C,D,S],{type:"application/octet-stream"}),I=new FileReader;I.readAsArrayBuffer(v),I.onloadend=function(){n(I.result)}}}else if(o.buffers&&o.buffers.length>0){const T=new FileReader;T.readAsDataURL(g),T.onloadend=function(){const S=T.result;o.buffers[0].uri=S,n(o)}}else n(o)}serializeUserData(t,n){if(Object.keys(t.userData).length===0)return;const i=this.options,a=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){n.extensions===void 0&&(n.extensions={});for(const o in r.gltfExtensions)n.extensions[o]=r.gltfExtensions[o],a[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(n.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,n=!1){if(this.uids.has(t)===!1){const a=new Map;a.set(!0,this.uid++),a.set(!1,this.uid++),this.uids.set(t,a)}return this.uids.get(t).get(n)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const i=new Se;for(let a=0,r=t.count;a<r;a++)if(Math.abs(i.fromBufferAttribute(t,a).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const n=this.cache;if(n.attributesNormalized.has(t))return n.attributesNormalized.get(t);const i=t.clone(),a=new Se;for(let r=0,o=i.count;r<o;r++)a.fromBufferAttribute(i,r),a.x===0&&a.y===0&&a.z===0?a.setX(1):a.normalize(),i.setXYZ(r,a.x,a.y,a.z);return n.attributesNormalized.set(t,i),i}applyTextureTransform(t,n){let i=!1;const a={};(n.offset.x!==0||n.offset.y!==0)&&(a.offset=n.offset.toArray(),i=!0),n.rotation!==0&&(a.rotation=n.rotation,i=!0),(n.repeat.x!==1||n.repeat.y!==1)&&(a.scale=n.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=a,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,n){if(t===n)return t;function i(S){return S.colorSpace===Cn?function(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}:function(C){return C}}t instanceof Xn&&(t=await this.decompressTextureAsync(t)),n instanceof Xn&&(n=await this.decompressTextureAsync(n));const a=t?t.image:null,r=n?n.image:null,o=Math.max(a?a.width:0,r?r.width:0),s=Math.max(a?a.height:0,r?r.height:0),h=Yr();h.width=o,h.height=s;const g=h.getContext("2d",{willReadFrequently:!0});g.fillStyle="#00ffff",g.fillRect(0,0,o,s);const A=g.getImageData(0,0,o,s);if(a){g.drawImage(a,0,0,o,s);const S=i(t),D=g.getImageData(0,0,o,s).data;for(let C=2;C<D.length;C+=4)A.data[C]=S(D[C]/256)*256}if(r){g.drawImage(r,0,0,o,s);const S=i(n),D=g.getImageData(0,0,o,s).data;for(let C=1;C<D.length;C+=4)A.data[C]=S(D[C]/256)*256}g.putImageData(A,0,0);const T=(t||n).clone();return T.source=new qo(h),T.colorSpace=Ft,T.channel=(t||n).channel,t&&n&&t.channel!==n.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),T}async decompressTextureAsync(t,n=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,n)}processBuffer(t){const n=this.json,i=this.buffers;return n.buffers||(n.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,n,i,a,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let s;switch(n){case Fe.BYTE:case Fe.UNSIGNED_BYTE:s=1;break;case Fe.SHORT:case Fe.UNSIGNED_SHORT:s=2;break;default:s=4}let h=t.itemSize*s;r===Fe.ARRAY_BUFFER&&(h=Math.ceil(h/4)*4);const g=Ra(a*h),A=new DataView(new ArrayBuffer(g));let _=0;for(let D=i;D<i+a;D++){for(let C=0;C<t.itemSize;C++){let f;t.itemSize>4?f=t.array[D*t.itemSize+C]:(C===0?f=t.getX(D):C===1?f=t.getY(D):C===2?f=t.getZ(D):C===3&&(f=t.getW(D)),t.normalized===!0&&(f=mn.normalize(f,t.array))),n===Fe.FLOAT?A.setFloat32(_,f,!0):n===Fe.INT?A.setInt32(_,f,!0):n===Fe.UNSIGNED_INT?A.setUint32(_,f,!0):n===Fe.SHORT?A.setInt16(_,f,!0):n===Fe.UNSIGNED_SHORT?A.setUint16(_,f,!0):n===Fe.BYTE?A.setInt8(_,f):n===Fe.UNSIGNED_BYTE&&A.setUint8(_,f),_+=s}_%h!==0&&(_+=h-_%h)}const T={buffer:this.processBuffer(A.buffer),byteOffset:this.byteOffset,byteLength:g};return r!==void 0&&(T.target=r),r===Fe.ARRAY_BUFFER&&(T.byteStride=h),this.byteOffset+=g,o.bufferViews.push(T),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const n=this,i=n.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(a){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const o=ni(r.result),s={buffer:n.processBuffer(o),byteOffset:n.byteOffset,byteLength:o.byteLength};n.byteOffset+=o.byteLength,a(i.bufferViews.push(s)-1)}})}processAccessor(t,n,i,a){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let s;if(t.array.constructor===Float32Array)s=Fe.FLOAT;else if(t.array.constructor===Int32Array)s=Fe.INT;else if(t.array.constructor===Uint32Array)s=Fe.UNSIGNED_INT;else if(t.array.constructor===Int16Array)s=Fe.SHORT;else if(t.array.constructor===Uint16Array)s=Fe.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)s=Fe.BYTE;else if(t.array.constructor===Uint8Array)s=Fe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(a===void 0||a===1/0)&&(a=t.count),a===0)return null;const h=_d(t,i,a);let g;n!==void 0&&(g=t===n.index?Fe.ELEMENT_ARRAY_BUFFER:Fe.ARRAY_BUFFER);const A=this.processBufferView(t,s,i,a,g),_={bufferView:A.id,byteOffset:A.byteOffset,componentType:s,count:a,max:h.max,min:h.min,type:o[t.itemSize]};return t.normalized===!0&&(_.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(_)-1}processImage(t,n,i,a="image/png"){if(t!==null){const r=this,o=r.cache,s=r.json,h=r.options,g=r.pending;o.images.has(t)||o.images.set(t,{});const A=o.images.get(t),_=a+":flipY/"+i.toString();if(A[_]!==void 0)return A[_];s.images||(s.images=[]);const T={mimeType:a},S=Yr();S.width=Math.min(t.width,h.maxTextureSize),S.height=Math.min(t.height,h.maxTextureSize);const D=S.getContext("2d",{willReadFrequently:!0});if(i===!0&&(D.translate(0,S.height),D.scale(1,-1)),t.data!==void 0){n!==Ct&&console.error("GLTFExporter: Only RGBAFormat is supported.",n),(t.width>h.maxTextureSize||t.height>h.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let c=0;c<f.length;c+=4)f[c+0]=t.data[c+0],f[c+1]=t.data[c+1],f[c+2]=t.data[c+2],f[c+3]=t.data[c+3];D.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)D.drawImage(t,0,0,S.width,S.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");h.binary===!0?g.push(gd(S,a).then(f=>r.processBufferViewImage(f)).then(f=>{T.bufferView=f})):T.uri=Zo.getDataURL(S,a);const C=s.images.push(T)-1;return A[_]=C,C}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const n=this.json;n.samplers||(n.samplers=[]);const i={magFilter:St[t.magFilter],minFilter:St[t.minFilter],wrapS:St[t.wrapS],wrapT:St[t.wrapT]};return n.samplers.push(i)-1}async processTextureAsync(t){const i=this.options,a=this.cache,r=this.json;if(a.textures.has(t))return a.textures.get(t);r.textures||(r.textures=[]),t instanceof Xn&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const s={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(s.name=t.name),await this._invokeAllAsync(async function(g){g.writeTexture&&await g.writeTexture(t,s)});const h=r.textures.push(s)-1;return a.textures.set(t,h),h}async processMaterialAsync(t){const n=this.cache,i=this.json;if(n.materials.has(t))return n.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(ln(r,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const s=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),h={index:await this.processTextureAsync(s),texCoord:s.channel};this.applyTextureTransform(h,s),a.pbrMetallicRoughness.metallicRoughnessTexture=h}if(t.map){const s={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(s,t.map),a.pbrMetallicRoughness.baseColorTexture=s}if(t.emissive){const s=t.emissive;if(Math.max(s.r,s.g,s.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const g={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(g,t.emissiveMap),a.emissiveTexture=g}}if(t.normalMap){const s={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(s.scale=t.normalScale.x),this.applyTextureTransform(s,t.normalMap),a.normalTexture=s}if(t.aoMap){const s={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(s.strength=t.aoMapIntensity),this.applyTextureTransform(s,t.aoMap),a.occlusionTexture=s}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===Et&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(s){s.writeMaterialAsync&&await s.writeMaterialAsync(t,a)});const o=i.materials.push(a)-1;return n.materials.set(t,o),o}async processMeshAsync(t){const n=this.cache,i=this.json,a=[t.geometry.uuid];if(Array.isArray(t.material))for(let v=0,I=t.material.length;v<I;v++)a.push(t.material[v].uuid);else a.push(t.material.uuid);const r=a.join(":");if(n.meshes.has(r))return n.meshes.get(r);const o=t.geometry;let s;t.isLineSegments?s=Fe.LINES:t.isLineLoop?s=Fe.LINE_LOOP:t.isLine?s=Fe.LINE_STRIP:t.isPoints?s=Fe.POINTS:s=t.material.wireframe?Fe.LINES:Fe.TRIANGLES;const h={},g={},A=[],_=[],T={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},S=o.getAttribute("normal");S!==void 0&&!this.isNormalizedNormalAttribute(S)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(S)));let D=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;const I=o.attributes[v];if(v=T[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),n.attributes.has(this.getUID(I))){g[v]=n.attributes.get(this.getUID(I));continue}D=null;const N=I.array;v==="JOINTS_0"&&!(N instanceof Uint16Array)&&!(N instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),D=new xt(new Uint16Array(N),I.itemSize,I.normalized)):(N instanceof Uint32Array||N instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),D=Un.Utils.toFloat32BufferAttribute(I));const V=this.processAccessor(D||I,o);V!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,I),g[v]=V,n.attributes.set(this.getUID(I),V))}if(S!==void 0&&o.setAttribute("normal",S),Object.keys(g).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const v=[],I=[],w={};if(t.morphTargetDictionary!==void 0)for(const N in t.morphTargetDictionary)w[t.morphTargetDictionary[N]]=N;for(let N=0;N<t.morphTargetInfluences.length;++N){const V={};let m=!1;for(const d in o.morphAttributes){if(d!=="position"&&d!=="normal"){m||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),m=!0);continue}const b=o.morphAttributes[d][N],H=d.toUpperCase(),K=o.attributes[d];if(n.attributes.has(this.getUID(b,!0))){V[H]=n.attributes.get(this.getUID(b,!0));continue}const W=b.clone();if(!o.morphTargetsRelative)for(let X=0,Y=b.count;X<Y;X++)for(let ne=0;ne<b.itemSize;ne++)ne===0&&W.setX(X,b.getX(X)-K.getX(X)),ne===1&&W.setY(X,b.getY(X)-K.getY(X)),ne===2&&W.setZ(X,b.getZ(X)-K.getZ(X)),ne===3&&W.setW(X,b.getW(X)-K.getW(X));V[H]=this.processAccessor(W,o),n.attributes.set(this.getUID(K,!0),V[H])}_.push(V),v.push(t.morphTargetInfluences[N]),t.morphTargetDictionary!==void 0&&I.push(w[N])}h.weights=v,I.length>0&&(h.extras={},h.extras.targetNames=I)}const C=Array.isArray(t.material);if(C&&o.groups.length===0)return null;let f=!1;if(C&&o.index===null){const v=[];for(let I=0,w=o.attributes.position.count;I<w;I++)v[I]=I;o.setIndex(v),f=!0}const c=C?t.material:[t.material],U=C?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,I=U.length;v<I;v++){const w={mode:s,attributes:g};if(this.serializeUserData(o,w),_.length>0&&(w.targets=_),o.index!==null){let V=this.getUID(o.index);(U[v].start!==void 0||U[v].count!==void 0)&&(V+=":"+U[v].start+":"+U[v].count),n.attributes.has(V)?w.indices=n.attributes.get(V):(w.indices=this.processAccessor(o.index,o,U[v].start,U[v].count),n.attributes.set(V,w.indices)),w.indices===null&&delete w.indices}const N=await this.processMaterialAsync(c[U[v].materialIndex]);N!==null&&(w.material=N),A.push(w)}f===!0&&o.setIndex(null),h.primitives=A,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(t,h)});const P=i.meshes.push(h)-1;return n.meshes.set(r,P),P}detectMeshQuantization(t,n){if(this.extensionsUsed[ti])return;let i;switch(n.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}n.normalized&&(i+=" normalized");const a=t.split("_",1)[0];kr[a]&&kr[a].includes(i)&&(this.extensionsUsed[ti]=!0,this.extensionsRequired[ti]=!0)}processCamera(t){const n=this.json;n.cameras||(n.cameras=[]);const i=t.isOrthographicCamera,a={type:i?"orthographic":"perspective"};return i?a.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:a.perspective={aspectRatio:t.aspect,yfov:mn.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(a.name=t.type),n.cameras.push(a)-1}processAnimation(t,n){const i=this.json,a=this.nodeMap;i.animations||(i.animations=[]),t=Un.Utils.mergeMorphTargetTracks(t.clone(),n);const r=t.tracks,o=[],s=[];for(let g=0;g<r.length;++g){const A=r[g],_=Dn.parseTrackName(A.name);let T=Dn.findNode(n,_.nodeName);const S=zr[_.propertyName];if(_.objectName==="bones"&&(T.isSkinnedMesh===!0?T=T.skeleton.getBoneByName(_.objectIndex):T=void 0),!T||!S){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',A.name);continue}const D=1;let C=A.values.length/A.times.length;S===zr.morphTargetInfluences&&(C/=T.morphTargetInfluences.length);let f;A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",C/=3):A.getInterpolation()===jo?f="STEP":f="LINEAR",s.push({input:this.processAccessor(new xt(A.times,D)),output:this.processAccessor(new xt(A.values,C)),interpolation:f}),o.push({sampler:s.length-1,target:{node:a.get(T),path:S}})}const h={name:t.name||"clip_"+i.animations.length,samplers:s,channels:o};return this.serializeUserData(t,h),i.animations.push(h),i.animations.length-1}processSkin(t){const n=this.json,i=this.nodeMap,a=n.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const s=[],h=new Float32Array(r.bones.length*16),g=new kt;for(let _=0;_<r.bones.length;++_)s.push(i.get(r.bones[_])),g.copy(r.boneInverses[_]),g.multiply(t.bindMatrix).toArray(h,_*16);return n.skins===void 0&&(n.skins=[]),n.skins.push({inverseBindMatrices:this.processAccessor(new xt(h,16)),joints:s,skeleton:i.get(o)}),a.skin=n.skins.length-1}async processNodeAsync(t){const n=this.json,i=this.options,a=this.nodeMap;n.nodes||(n.nodes=[]);const r={};if(i.trs){const s=t.quaternion.toArray(),h=t.position.toArray(),g=t.scale.toArray();ln(s,[0,0,0,1])||(r.rotation=s),ln(h,[0,0,0])||(r.translation=h),ln(g,[1,1,1])||(r.scale=g)}else t.matrixAutoUpdate&&t.updateMatrix(),md(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const s=await this.processMeshAsync(t);s!==null&&(r.mesh=s)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const o=n.nodes.push(r)-1;if(a.set(t,o),t.children.length>0){const s=[];for(let h=0,g=t.children.length;h<g;h++){const A=t.children[h];if(A.visible||i.onlyVisible===!1){const _=await this.processNodeAsync(A);_!==null&&s.push(_)}}s.length>0&&(r.children=s)}return await this._invokeAllAsync(function(s){s.writeNode&&s.writeNode(t,r)}),o}async processSceneAsync(t){const n=this.json,i=this.options;n.scenes||(n.scenes=[],n.scene=0);const a={};t.name!==""&&(a.name=t.name),n.scenes.push(a);const r=[];for(let o=0,s=t.children.length;o<s;o++){const h=t.children[o];if(h.visible||i.onlyVisible===!1){const g=await this.processNodeAsync(h);g!==null&&r.push(g)}}r.length>0&&(a.nodes=r),this.serializeUserData(t,a)}async processObjectsAsync(t){const n=new hi;n.name="AuxScene";for(let i=0;i<t.length;i++)n.children.push(t[i]);await this.processSceneAsync(n)}async processInputAsync(t){const n=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(a){a.beforeParse&&a.beforeParse(t)});const i=[];for(let a=0;a<t.length;a++)t[a]instanceof hi?await this.processSceneAsync(t[a]):i.push(t[a]);i.length>0&&await this.processObjectsAsync(i);for(let a=0;a<this.skins.length;++a)this.processSkin(this.skins[a]);for(let a=0;a<n.animations.length;++a)this.processAnimation(n.animations[a],t[0]);await this._invokeAllAsync(function(a){a.afterParse&&a.afterParse(t)})}async _invokeAllAsync(t){for(let n=0,i=this.plugins.length;n<i;n++)await t(this.plugins[n])}}class Ed{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,n){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const i=this.writer,a=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(a.extensions=a.extensions||{},a.extensions[this.name]={lights:[]},r[this.name]=!0);const s=a.extensions[this.name].lights;s.push(o),n.extensions=n.extensions||{},n.extensions[this.name]={light:s.length-1}}}class Sd{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,n){if(!t.isMeshBasicMaterial)return;const a=this.writer.extensionsUsed;n.extensions=n.extensions||{},n.extensions[this.name]={},a[this.name]=!0,n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=.9}}class Md{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Td{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const a=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class xd{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Ad{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Rd{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class bd{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const a=this.writer.extensionsUsed,r={};r.ior=t.ior,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Cd{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(ld)&&!t.specularIntensityMap&&!t.specularColorMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.specularIntensityMap){const o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){const o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class wd{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.sheenRoughnessMap){const o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class yd{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.anisotropyMap){const o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Pd{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const a=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Ld{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.bumpMap){const o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Dd{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,n){if(!t.isInstancedMesh)return;const i=this.writer,a=t,r=new Float32Array(a.count*3),o=new Float32Array(a.count*4),s=new Float32Array(a.count*3),h=new kt,g=new Se,A=new en,_=new Se;for(let S=0;S<a.count;S++)a.getMatrixAt(S,h),h.decompose(g,A,_),g.toArray(r,S*3),A.toArray(o,S*4),_.toArray(s,S*3);const T={TRANSLATION:i.processAccessor(new xt(r,3)),ROTATION:i.processAccessor(new xt(o,4)),SCALE:i.processAccessor(new xt(s,3))};a.instanceColor&&(T._COLOR_0=i.processAccessor(a.instanceColor)),n.extensions=n.extensions||{},n.extensions[this.name]={attributes:T},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}Un.Utils={insertKeyframe:function(e,t){const i=e.getValueSize(),a=new e.TimeBufferType(e.times.length+1),r=new e.ValueBufferType(e.values.length+i),o=e.createInterpolant(new e.ValueBufferType(i));let s;if(e.times.length===0){a[0]=t;for(let h=0;h<i;h++)r[h]=0;s=0}else if(t<e.times[0]){if(Math.abs(e.times[0]-t)<.001)return 0;a[0]=t,a.set(e.times,1),r.set(o.evaluate(t),0),r.set(e.values,i),s=0}else if(t>e.times[e.times.length-1]){if(Math.abs(e.times[e.times.length-1]-t)<.001)return e.times.length-1;a[a.length-1]=t,a.set(e.times,0),r.set(e.values,0),r.set(o.evaluate(t),e.values.length),s=a.length-1}else for(let h=0;h<e.times.length;h++){if(Math.abs(e.times[h]-t)<.001)return h;if(e.times[h]<t&&e.times[h+1]>t){a.set(e.times.slice(0,h+1),0),a[h+1]=t,a.set(e.times.slice(h+1),h+2),r.set(e.values.slice(0,(h+1)*i),0),r.set(o.evaluate(t),(h+1)*i),r.set(e.values.slice((h+1)*i),(h+2)*i),s=h+1;break}}return e.times=a,e.values=r,s},mergeMorphTargetTracks:function(e,t){const n=[],i={},a=e.tracks;for(let r=0;r<a.length;++r){let o=a[r];const s=Dn.parseTrackName(o.name),h=Dn.findNode(t,s.nodeName);if(s.propertyName!=="morphTargetInfluences"||s.propertyIndex===void 0){n.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation($o)}const g=h.morphTargetInfluences.length,A=h.morphTargetDictionary[s.propertyIndex];if(A===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+s.propertyIndex);let _;if(i[h.uuid]===void 0){_=o.clone();const S=new _.ValueBufferType(g*_.times.length);for(let D=0;D<_.times.length;D++)S[D*g+A]=_.values[D];_.name=(s.nodeName||"")+".morphTargetInfluences",_.values=S,i[h.uuid]=_,n.push(_);continue}const T=o.createInterpolant(new o.ValueBufferType(1));_=i[h.uuid];for(let S=0;S<_.times.length;S++)_.values[S*g+A]=T.evaluate(_.times[S]);for(let S=0;S<o.times.length;S++){const D=this.insertKeyframe(_,o.times[S]);_.values[D*g+A]=o.values[S]}}return e.tracks=n,e},toFloat32BufferAttribute:function(e){const t=new xt(new Float32Array(e.count*e.itemSize),e.itemSize,!1);if(!e.normalized&&!e.isInterleavedBufferAttribute)return t.array.set(e.array),t;for(let n=0,i=e.count;n<i;n++)for(let a=0;a<e.itemSize;a++)t.setComponent(n,a,e.getComponent(n,a));return t}};const Ud=4096,Id=8192;function Kr(e){return e.every(Number.isFinite)}function Nd(e){const t=e==null?void 0:e.surface,n=e==null?void 0:e.depth_mapping;if(!t||!n||!Array.isArray(t.positions)||!Array.isArray(t.indices)||!Array.isArray(t.colors))return null;const{positions:i,indices:a,colors:r}=t,o=i.length/3,s=a.length/3;if(e.method!=="single-view-relative-depth"||e.status!=="provisional"&&e.status!=="unresolved"||!e.source_id||n.kind!=="inverse-affine-prior"||!Number.isFinite(n.near)||!Number.isFinite(n.far)||n.near<=0||n.far<=n.near||!Array.isArray(e.assumptions)||!e.assumptions.every(g=>typeof g=="string")||i.length<9||i.length%3!==0||r.length!==i.length||a.length<3||a.length%3!==0||o>Ud||s>Id||!Kr(i)||!Kr(r)||r.some(g=>g<0||g>1)||a.some(g=>!Number.isInteger(g)||g<0||g>=o))return null;const h=new pn;return h.setAttribute("position",new cr(i,3)),h.setAttribute("color",new cr(r,3)),h.setIndex(new ga(a,1)),h.computeVertexNormals(),h.computeBoundingBox(),h.computeBoundingSphere(),h}function Od(e,t){const n=Nd(e);if(!n)return null;const i=t==="source-color"?new Ln({vertexColors:!0,side:Et}):new va({color:12107708,roughness:.86,metalness:.02,side:Et}),a=new _t(n,i);return a.name="Environment depth surface",a.userData={kind:"environment",sourceId:e.source_id,method:e.method,status:e.status,assumptions:[...e.assumptions],depthMapping:{...e.depth_mapping}},a}function Bd({scene:e,paths:t,time:n,selected:i,onSelect:a,mode:r,reset:o,exportRef:s,renderStyle:h="source-color",showSurface:g=!0,showPrimitives:A=!0,showHelpers:_=!1,still:T=!1,onOrbitAngle:S,sourceTextureUrl:D}){const C=Pt.useRef(null),f=Pt.useRef(n),c=Pt.useRef(a),U=Pt.useRef(S);U.current=S;const P=Pt.useRef(new Map);f.current=n,c.current=a;const[v,I]=Pt.useState(""),[w,N]=Pt.useState("none");return Pt.useEffect(()=>{var l;const V=C.current;let m=!1,d;try{d=new qu({antialias:!0,alpha:!1}),I("")}catch{I("3D rendering is unavailable. The scene list and numeric editors remain available.");return}d.setPixelRatio(Math.min(devicePixelRatio,2)),d.outputColorSpace=Cn,V.appendChild(d.domElement),d.domElement.setAttribute("aria-label","Interactive spatial scene. Select geometry with the scene list; use view buttons to change the camera.");const b=new hi;b.background=new $e("#1c2226"),b.add(new Qo(15398127,3226947,2.4));const H=new Jo(16773596,2.5);H.position.set(4,9,6),b.add(H);const K=new lr(40,40,5926256,3424839);K.visible=r!=="source"&&(!e.structural||_),K.position.y=-.015,b.add(K);const W=new Yn;b.add(W);const X=new Map,Y=new Yn;b.add(Y);const ne=new Map,k=new Yn;b.add(k);const Ee=new Set(((l=e.structural)==null?void 0:l.faces.map(M=>M.primitive_id))??[]);let Te,xe,Ge=Promise.resolve();if(N("none"),e.structural){const M=es(e,h);W.add(M),h==="source-color"&&D&&(N("loading"),Ge=new Promise(x=>{xe=x}),Te=new ts().load(D,x=>{if(m){x.dispose(),xe==null||xe();return}x.colorSpace=Cn,x.anisotropy=Math.min(8,d.capabilities.getMaxAnisotropy()),ns(M,x),N("ready"),xe==null||xe()},void 0,()=>{m||N("error"),xe==null||xe()})),M.traverse(x=>{if(x instanceof _t&&x.userData.primitiveId&&(X.set(x.userData.primitiveId,x),_||x.userData.primitiveId===i)){const B=new fr(new ur(x.geometry),new Kn({color:x.userData.primitiveId===i?9036237:5400427}));Y.add(B)}})}for(const M of e.primitives){if(Ee.has(M.id))continue;const x=new _t(is(M),new va({color:M.color,roughness:.85,metalness:.04,side:Et,transparent:!0,opacity:M.status==="unresolved"?.35:.88}));x.name=M.label,x.userData={primitiveId:M.id,status:M.status,assumptions:M.assumptions},x.position.fromArray(M.position),x.quaternion.fromArray(M.quaternion),x.visible=A,W.add(x),X.set(M.id,x);const B=new fr(new ur(x.geometry),new Kn({color:M.id===i?9036237:5400427,transparent:!0,opacity:M.id===i?1:.55}));B.position.copy(x.position),B.quaternion.copy(x.quaternion),B.visible=x.visible,Y.add(B),ne.set(M.id,B)}const Qe=e.environment?Od(e.environment,h):null;if(Qe&&(Qe.visible=g,W.add(Qe)),e.structural&&_){for(const x of e.primitives.filter(B=>Ee.has(B.id))){const B=dr(x.quaternion);B&&k.add(new pr(new Se(...B),new Se(...x.position),.8,9036237));const O=new lr(Math.max(x.dimensions[0],x.dimensions[2]),8,7984576,5400427);O.position.fromArray(x.position),O.quaternion.fromArray(x.quaternion),k.add(O)}const M=e.structural.camera_samples.filter(x=>x.capability==="scene-pose"&&x.camera&&!x.rejection_reason).sort((x,B)=>x.timestamp_us-B.timestamp_us);M.forEach((x,B)=>{const O=new _t(new hr(.045,8,8),new Ln({color:14791028}));O.position.fromArray(x.camera.position),b.add(O);const j=M[B-1];j&&j.interval_start_us===x.interval_start_us&&j.interval_end_us===x.interval_end_us&&!e.structural.camera_samples.some($=>$.timestamp_us>j.timestamp_us&&$.timestamp_us<x.timestamp_us&&$.capability!=="scene-pose")&&b.add(new mr(new pn().setFromPoints([new Se(...j.camera.position),O.position]),new Kn({color:14791028})))})}for(const M of t){for(const x of M.segments){const B=M.points[x.from_index],O=M.points[x.to_index];if(!B||!O||x.kind==="gap")continue;const j=new mr(new pn().setFromPoints(x.kind==="inferred"&&x.control_points?new rs(new Se(...B.position),new Se(...x.control_points[0]),new Se(...x.control_points[1]),new Se(...O.position)).getPoints(32):[new Se(...B.position),new Se(...O.position)]),new as({color:x.kind==="jump"?14791028:7984576,dashSize:.16,gapSize:.11}));j.computeLineDistances(),b.add(j)}for(const x of M.points){const B=new _t(new hr(.065,10,8),new Ln({color:12119263}));B.position.fromArray(x.position),b.add(B)}}const Ye=new os,Ne=new Se,z=new Se;W.traverse(M=>{M.visible&&M instanceof _t&&Ye.expandByObject(M)}),Ye.getCenter(Ne),Ye.getSize(z),Ye.isEmpty()&&(Ne.set(0,0,0),z.set(10,10,10));const q=Math.max(z.x,z.y,z.z,e.structural?.01:5),de=Math.max(z.length()/2,.01);let ie;r==="source"?ie=vn(En(e,n,T).camera??e.camera):r==="top"?(ie=new pi(-q,q,q,-q,.01,1e4),ie.position.copy(Ne).add(new Se(0,q*2,0)),ie.up.set(0,0,-1),ie.lookAt(Ne)):(ie=new $t(44,1,.01,1e4),ie.position.copy(Ne).add(e.structural?new Se(.55,.35,1).normalize().applyQuaternion(new en(...e.camera.quaternion)).multiplyScalar(de*3.2):new Se(q*.8,q*.62,q*.95)),ie.lookAt(Ne));const le=new ju(ie,d.domElement);le.enabled=r!=="source",le.enableRotate=r!=="top",le.target.copy(Ne),le.enableDamping=!0;const Oe=`${e.id}:${r}:${o}`,at=P.current.get(Oe);at&&r!=="source"&&(ie.position.copy(at.position),le.target.copy(at.target)),r!=="source"&&le.update();const E=vn(e.camera),ke=new ss(E);ke.visible=!1,b.add(ke);const Re=new pr(new Se(0,0,1),Ne,1,14791028);Re.visible=!1,b.add(Re);let Ce=!1;const me=()=>{const M=V.clientWidth,x=V.clientHeight;if(!(!M||!x))if(d.setSize(M,x),r==="source"){const B=e.camera.width/e.camera.height,O=Math.min(M,x*B),j=O/B;d.setViewport((M-O)/2,(x-j)/2,O,j)}else if(ie instanceof $t){if(ie.aspect=M/x,e.structural&&!at&&!Ce){const B=Math.atan(Math.tan(mn.degToRad(ie.fov/2))*Math.min(1,ie.aspect)),O=de/Math.sin(B)*1.12;ie.position.copy(Ne).add(new Se(.55,.35,1).normalize().applyQuaternion(new en(...e.camera.quaternion)).multiplyScalar(O)),ie.lookAt(Ne),Ce=!0}ie.updateProjectionMatrix()}else{const B=e.structural?Math.max(z.z/2,z.x/2/(M/x),q*.08)*1.2:q/1.5;ie.left=-B*M/x,ie.right=B*M/x,ie.top=B,ie.bottom=-B,ie.updateProjectionMatrix()}},Ke=new ResizeObserver(me);Ke.observe(V),me();const _e=new cs;let Le=null;const ot=M=>{Le={x:M.clientX,y:M.clientY}},tt=M=>{if(!Le||Math.hypot(M.clientX-Le.x,M.clientY-Le.y)>5)return;const x=d.domElement.getBoundingClientRect();let B=M.clientX-x.left,O=M.clientY-x.top,j=x.width,$=x.height;if(r==="source"){const pe=e.camera.width/e.camera.height,Q=Math.min(j,$*pe),oe=Q/pe;B-=(j-Q)/2,O-=($-oe)/2,j=Q,$=oe}_e.setFromCamera(new je(B/j*2-1,-O/$*2+1),ie);const fe=_e.intersectObjects([...X.values()],!1)[0];fe&&c.current(fe.object.userData.primitiveId)};d.domElement.addEventListener("pointerdown",ot),d.domElement.addEventListener("pointerup",tt),s.current=async()=>{if(await Ge,m)throw new Error("The scene changed during export. Export the current view again.");const M=W.clone(!0);M.visible=!0;const x=await new Un().parseAsync(M,{binary:!0,onlyVisible:!0});if(m)throw new Error("The scene changed during export. Export the current view again.");ls(x,"tweens-provisional-scene.glb","model/gltf-binary")};let p=-1/0;return d.setAnimationLoop(()=>{var O;for(const j of t){const $=X.get(j.primitive_id);if(!$)continue;const fe=fs(j,f.current);$.visible=A&&!!fe,fe&&$.position.fromArray(fe);const pe=ne.get(j.primitive_id);pe&&(pe.visible=$.visible,pe.position.copy($.position))}r!=="source"&&le.update();const M=En(e,f.current,T);if(r==="source"&&e.structural){if(M.camera){const j=vn(M.camera);ie.position.copy(j.position),ie.quaternion.copy(j.quaternion),ie.projectionMatrix.copy(j.projectionMatrix),ie.projectionMatrixInverse.copy(j.projectionMatrixInverse),ie.updateMatrixWorld()}W.visible=!!M.camera}if(Y.visible=W.visible,k.visible=W.visible,ke.visible=_&&!!M.camera&&r!=="source",ke.visible){const j=vn(M.camera);E.position.copy(j.position),E.quaternion.copy(j.quaternion),E.projectionMatrix.copy(j.projectionMatrix),E.updateMatrixWorld(),ke.update()}const x=e.primitives.find(j=>j.id===i),B=x?dr(x.quaternion):null;if(Re.visible=_&&!!M.camera&&!!x,Re.visible){Re.position.fromArray(x.position);const j=M.camera.model==="orthographic"?new Se(0,0,1).applyQuaternion(new en(...M.camera.quaternion)):new Se(...M.camera.position).sub(Re.position);j.lengthSq()>1e-12?Re.setDirection(j.normalize()):Re.visible=!1}if(performance.now()-p>150){p=performance.now();const j={...e.camera,model:ie instanceof pi?"orthographic":"perspective",position:ie.position.toArray(),quaternion:ie.quaternion.toArray()};(O=U.current)==null||O.call(U,r==="source"||!B||!x?null:us(B,x.position,j))}d.render(b,ie)}),()=>{m=!0,xe==null||xe(),Te==null||Te.dispose(),r!=="source"&&P.current.set(Oe,{position:ie.position.clone(),target:le.target.clone()}),s.current=null,d.setAnimationLoop(null),Ke.disconnect(),le.dispose(),d.domElement.removeEventListener("pointerdown",ot),d.domElement.removeEventListener("pointerup",tt),b.traverse(M=>{var O;const x=M;(O=x.geometry)==null||O.dispose(),(Array.isArray(x.material)?x.material:[x.material]).forEach(j=>j==null?void 0:j.dispose())}),d.dispose(),d.domElement.remove()}},[e,t,i,r,o,s,h,g,A,_,T,D]),Yt.jsxs("div",{className:"scene-canvas",ref:C,children:[v&&Yt.jsx("p",{className:"canvas-error",children:v}),!v&&e.structural&&h==="source-color"&&w==="loading"&&Yt.jsx("p",{className:"texture-status",role:"status",children:"Loading anchor appearance…"}),!v&&e.structural&&h==="source-color"&&w==="error"&&Yt.jsx("p",{className:"texture-status",role:"status",children:"Anchor image unavailable · showing fallback colors."}),e.structural&&!e.structural.faces.length&&!e.primitives.length&&r!=="source"&&Yt.jsx("p",{className:"canvas-error",role:"status",children:"No finite planes were resolved for this hypothesis. Source features and camera observability remain available."}),r==="source"&&e.structural&&!En(e,n,T).camera&&Yt.jsxs("p",{className:"canvas-error",role:"status",children:[En(e,n,T).label,". Switch to Orbit to inspect the geometry."]})]})}export{Bd as default};
