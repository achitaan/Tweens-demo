import{c as Da,N as Pt,S as mi,C as Je,F as qr,V as Ae,R as Zr,a as mt,w as ni,M as kt,W as Ri,b as Jt,d as ot,L as Kt,H as Un,U as zt,D as Et,B as At,e as cn,f as In,p as Ua,E as Ia,g as Qe,P as jt,A as Na,h as Gn,i as Ct,j as Rn,k as _i,l as ln,m as fn,n as jr,o as Oa,q as Ft,r as bn,s as Fa,t as Ba,u as rn,O as Ga,v as Ha,x as Va,y as ka,z as za,G as Wa,I as Xa,J as Ya,K as Ka,Q as qa,T as Za,X as ja,Y as $a,Z as Qa,_ as Ja,$ as $r,a0 as Qr,a1 as Jr,a2 as Tn,a3 as Gt,a4 as an,a5 as ea,a6 as $t,a7 as eo,a8 as to,a9 as no,aa as io,ab as ta,ac as ro,ad as ao,ae as oo,af as na,ag as ze,ah as so,ai as co,aj as lo,ak as Wt,al as un,am as xt,an as _t,ao as ia,ap as Vt,aq as yt,ar as Cn,as as ra,at as aa,au as oa,av as sa,aw as fo,ax as uo,ay as po,az as ho,aA as ca,aB as Ht,aC as mo,aD as _o,aE as go,aF as la,aG as vo,aH as fa,aI as ua,aJ as Hn,aK as Vn,aL as kn,aM as zn,aN as tt,aO as bi,aP as Ci,aQ as wi,aR as yi,aS as Pi,aT as Li,aU as Di,aV as Ui,aW as Ii,aX as Ni,aY as Oi,aZ as Fi,a_ as Bi,a$ as Gi,b0 as Hi,b1 as Vi,b2 as ki,b3 as zi,b4 as Wi,b5 as Xi,b6 as Yi,b7 as Ki,b8 as qi,b9 as Zi,ba as ji,bb as $i,bc as Qi,bd as Ji,be as ii,bf as ri,bg as ai,bh as oi,bi as si,bj as ci,bk as li,bl as Eo,bm as er,bn as So,bo as xn,bp as Mo,bq as tr,br as nr,bs as ir,bt as fi,bu as ui,bv as To,bw as da,bx as xo,by as Nn,bz as Ao,bA as Ro,bB as pa,bC as ha,bD as rr,bE as ma,bF as ar,bG as _a,bH as dn,bI as en,bJ as di,bK as wn,bL as bo,bM as ga,bN as Co,bO as or,bP as ht,bQ as wo,bR as yo,bS as Po,bT as Lo,bU as Do,bV as Uo,bW as Io,bX as No,bY as Oo,bZ as Fo,b_ as Bo,b$ as Go,c0 as Ho,c1 as Vo,c2 as ko,c3 as zo,c4 as Wo,c5 as Xo,c6 as Yo,c7 as Qt,c8 as qt,c9 as yn,ca as sr,cb as Ko,cc as Pn,cd as Wn,ce as qo,cf as Zo,cg as Ln,ch as jo,ci as pi,cj as $o,ck as va,cl as cr,cm as Ut,cn as Qo,co as Jo,cp as lr,cq as Xn,cr as es,cs as fr,ct as ur,cu as Yn,cv as ts,cw as dr,cx as pr,cy as hr,cz as mr,cA as ns,cB as is,cC as rs,cD as mn,cE as _n,cF as as,cG as os,cH as ss,cI as cs,cJ as ls,cK as gn}from"./index-IKeIkNSz.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ea(){let e=null,t=!1,n=null,i=null;function a(r,o){n(r,o),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function fs(e){const t=new WeakMap;function n(s,m){const g=s.array,T=s.usage,_=g.byteLength,M=e.createBuffer();e.bindBuffer(m,M),e.bufferData(m,g,T),s.onUploadCallback();let S;if(g instanceof Float32Array)S=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=e.HALF_FLOAT;else if(g instanceof Uint16Array)s.isFloat16BufferAttribute?S=e.HALF_FLOAT:S=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=e.SHORT;else if(g instanceof Uint32Array)S=e.UNSIGNED_INT;else if(g instanceof Int32Array)S=e.INT;else if(g instanceof Int8Array)S=e.BYTE;else if(g instanceof Uint8Array)S=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:s.version,size:_}}function i(s,m,g){const T=m.array,_=m.updateRanges;if(e.bindBuffer(g,s),_.length===0)e.bufferSubData(g,0,T);else{_.sort((S,L)=>S.start-L.start);let M=0;for(let S=1;S<_.length;S++){const L=_[M],R=_[S];R.start<=L.start+L.count+1?L.count=Math.max(L.count,R.start+R.count-L.start):(++M,_[M]=R)}_.length=M+1;for(let S=0,L=_.length;S<L;S++){const R=_[S];e.bufferSubData(g,R.start*T.BYTES_PER_ELEMENT,T,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const m=t.get(s);m&&(e.deleteBuffer(m.buffer),t.delete(s))}function o(s,m){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const T=t.get(s);(!T||T.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const g=t.get(s);if(g===void 0)t.set(s,n(s,m));else if(g.version<s.version){if(g.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,s,m),g.version=s.version}}return{get:a,remove:r,update:o}}var us=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ds=`#ifdef USE_ALPHAHASH
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
#endif`,ps=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ms=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_s=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gs=`#ifdef USE_AOMAP
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
#endif`,vs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Es=`#ifdef USE_BATCHING
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
#endif`,Ss=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ms=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ts=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,As=`#ifdef USE_IRIDESCENCE
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
#endif`,Rs=`#ifdef USE_BUMPMAP
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
#endif`,bs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ws=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ys=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ps=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ls=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ds=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Us=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Is=`#define PI 3.141592653589793
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
} // validated`,Ns=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Os=`vec3 transformedNormal = objectNormal;
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
#endif`,Fs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hs=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vs="gl_FragColor = linearToOutputTexel( gl_FragColor );",ks=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zs=`#ifdef USE_ENVMAP
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
#endif`,Ws=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xs=`#ifdef USE_ENVMAP
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
#endif`,Ys=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ks=`#ifdef USE_ENVMAP
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
#endif`,qs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,js=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$s=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qs=`#ifdef USE_GRADIENTMAP
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
}`,Js=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ec=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nc=`uniform bool receiveShadow;
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
#endif`,ic=`#ifdef USE_ENVMAP
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
#endif`,rc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ac=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cc=`PhysicalMaterial material;
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
#endif`,lc=`struct PhysicalMaterial {
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
}`,fc=`
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
#endif`,uc=`#if defined( RE_IndirectDiffuse )
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
#endif`,dc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_c=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ec=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sc=`#if defined( USE_POINTS_UV )
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
#endif`,Mc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ac=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bc=`#ifdef USE_MORPHTARGETS
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
#endif`,Cc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uc=`#ifdef USE_NORMALMAP
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
#endif`,Ic=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zc=`float getShadowMask() {
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
}`,jc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$c=`#ifdef USE_SKINNING
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
#endif`,Qc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jc=`#ifdef USE_SKINNING
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
#endif`,el=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,il=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rl=`#ifdef USE_TRANSMISSION
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
#endif`,al=`#ifdef USE_TRANSMISSION
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
#endif`,ol=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ll=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ul=`uniform sampler2D t2D;
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
}`,dl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ml=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_l=`#include <common>
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
}`,gl=`#if DEPTH_PACKING == 3200
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
}`,vl=`#define DISTANCE
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
}`,El=`#define DISTANCE
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
}`,Sl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ml=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tl=`uniform float scale;
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
}`,xl=`uniform vec3 diffuse;
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
}`,Al=`#include <common>
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
}`,Rl=`uniform vec3 diffuse;
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
}`,bl=`#define LAMBERT
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
}`,Cl=`#define LAMBERT
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
}`,wl=`#define MATCAP
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
}`,yl=`#define MATCAP
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
}`,Pl=`#define NORMAL
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
}`,Ll=`#define NORMAL
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
}`,Dl=`#define PHONG
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
}`,Ul=`#define PHONG
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
}`,Il=`#define STANDARD
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
}`,Nl=`#define STANDARD
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
}`,Ol=`#define TOON
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
}`,Fl=`#define TOON
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
}`,Bl=`uniform float size;
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
}`,Gl=`uniform vec3 diffuse;
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
}`,Hl=`#include <common>
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
}`,Vl=`uniform vec3 color;
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
}`,kl=`uniform float rotation;
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
}`,zl=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:us,alphahash_pars_fragment:ds,alphamap_fragment:ps,alphamap_pars_fragment:hs,alphatest_fragment:ms,alphatest_pars_fragment:_s,aomap_fragment:gs,aomap_pars_fragment:vs,batching_pars_vertex:Es,batching_vertex:Ss,begin_vertex:Ms,beginnormal_vertex:Ts,bsdfs:xs,iridescence_fragment:As,bumpmap_pars_fragment:Rs,clipping_planes_fragment:bs,clipping_planes_pars_fragment:Cs,clipping_planes_pars_vertex:ws,clipping_planes_vertex:ys,color_fragment:Ps,color_pars_fragment:Ls,color_pars_vertex:Ds,color_vertex:Us,common:Is,cube_uv_reflection_fragment:Ns,defaultnormal_vertex:Os,displacementmap_pars_vertex:Fs,displacementmap_vertex:Bs,emissivemap_fragment:Gs,emissivemap_pars_fragment:Hs,colorspace_fragment:Vs,colorspace_pars_fragment:ks,envmap_fragment:zs,envmap_common_pars_fragment:Ws,envmap_pars_fragment:Xs,envmap_pars_vertex:Ys,envmap_physical_pars_fragment:ic,envmap_vertex:Ks,fog_vertex:qs,fog_pars_vertex:Zs,fog_fragment:js,fog_pars_fragment:$s,gradientmap_pars_fragment:Qs,lightmap_pars_fragment:Js,lights_lambert_fragment:ec,lights_lambert_pars_fragment:tc,lights_pars_begin:nc,lights_toon_fragment:rc,lights_toon_pars_fragment:ac,lights_phong_fragment:oc,lights_phong_pars_fragment:sc,lights_physical_fragment:cc,lights_physical_pars_fragment:lc,lights_fragment_begin:fc,lights_fragment_maps:uc,lights_fragment_end:dc,logdepthbuf_fragment:pc,logdepthbuf_pars_fragment:hc,logdepthbuf_pars_vertex:mc,logdepthbuf_vertex:_c,map_fragment:gc,map_pars_fragment:vc,map_particle_fragment:Ec,map_particle_pars_fragment:Sc,metalnessmap_fragment:Mc,metalnessmap_pars_fragment:Tc,morphinstance_vertex:xc,morphcolor_vertex:Ac,morphnormal_vertex:Rc,morphtarget_pars_vertex:bc,morphtarget_vertex:Cc,normal_fragment_begin:wc,normal_fragment_maps:yc,normal_pars_fragment:Pc,normal_pars_vertex:Lc,normal_vertex:Dc,normalmap_pars_fragment:Uc,clearcoat_normal_fragment_begin:Ic,clearcoat_normal_fragment_maps:Nc,clearcoat_pars_fragment:Oc,iridescence_pars_fragment:Fc,opaque_fragment:Bc,packing:Gc,premultiplied_alpha_fragment:Hc,project_vertex:Vc,dithering_fragment:kc,dithering_pars_fragment:zc,roughnessmap_fragment:Wc,roughnessmap_pars_fragment:Xc,shadowmap_pars_fragment:Yc,shadowmap_pars_vertex:Kc,shadowmap_vertex:qc,shadowmask_pars_fragment:Zc,skinbase_vertex:jc,skinning_pars_vertex:$c,skinning_vertex:Qc,skinnormal_vertex:Jc,specularmap_fragment:el,specularmap_pars_fragment:tl,tonemapping_fragment:nl,tonemapping_pars_fragment:il,transmission_fragment:rl,transmission_pars_fragment:al,uv_pars_fragment:ol,uv_pars_vertex:sl,uv_vertex:cl,worldpos_vertex:ll,background_vert:fl,background_frag:ul,backgroundCube_vert:dl,backgroundCube_frag:pl,cube_vert:hl,cube_frag:ml,depth_vert:_l,depth_frag:gl,distanceRGBA_vert:vl,distanceRGBA_frag:El,equirect_vert:Sl,equirect_frag:Ml,linedashed_vert:Tl,linedashed_frag:xl,meshbasic_vert:Al,meshbasic_frag:Rl,meshlambert_vert:bl,meshlambert_frag:Cl,meshmatcap_vert:wl,meshmatcap_frag:yl,meshnormal_vert:Pl,meshnormal_frag:Ll,meshphong_vert:Dl,meshphong_frag:Ul,meshphysical_vert:Il,meshphysical_frag:Nl,meshtoon_vert:Ol,meshtoon_frag:Fl,points_vert:Bl,points_frag:Gl,shadow_vert:Hl,shadow_frag:Vl,sprite_vert:kl,sprite_frag:zl},se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},bt={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new Ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};bt.physical={uniforms:ht([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const vn={r:0,b:0,g:0},It=new ma,Wl=new kt;function Xl(e,t,n,i,a,r,o){const s=new Je(0);let m=r===!0?0:1,g,T,_=null,M=0,S=null;function L(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?n:t).get(v)),v}function R(w){let v=!1;const U=L(w);U===null?c(s,m):U&&U.isColor&&(c(U,1),v=!0);const x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(w,v){const U=L(v);U&&(U.isCubeTexture||U.mapping===Nn)?(T===void 0&&(T=new _t(new ha(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:rr(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(x,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(T)),It.copy(v.backgroundRotation),It.x*=-1,It.y*=-1,It.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),T.material.uniforms.envMap.value=U,T.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,T.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,T.material.uniforms.backgroundRotation.value.setFromMatrix4(Wl.makeRotationFromEuler(It)),T.material.toneMapped=ot.getTransfer(U.colorSpace)!==tt,(_!==U||M!==U.version||S!==e.toneMapping)&&(T.material.needsUpdate=!0,_=U,M=U.version,S=e.toneMapping),T.layers.enableAll(),w.unshift(T,T.geometry,T.material,0,0,null)):U&&U.isTexture&&(g===void 0&&(g=new _t(new sa(2,2),new Wt({name:"BackgroundMaterial",uniforms:rr(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=U,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=ot.getTransfer(U.colorSpace)!==tt,U.matrixAutoUpdate===!0&&U.updateMatrix(),g.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||M!==U.version||S!==e.toneMapping)&&(g.material.needsUpdate=!0,_=U,M=U.version,S=e.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null))}function c(w,v){w.getRGB(vn,pa(e)),i.buffers.color.setClear(vn.r,vn.g,vn.b,v,o)}function D(){T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,v=1){s.set(w),m=v,c(s,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,c(s,m)},render:R,addToRenderList:f,dispose:D}}function Yl(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=M(null);let r=a,o=!1;function s(d,b,B,K,Y){let X=!1;const W=_(K,B,b);r!==W&&(r=W,g(r.object)),X=S(d,K,B,Y),X&&L(d,K,B,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(d,b,B,K),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return e.createVertexArray()}function g(d){return e.bindVertexArray(d)}function T(d){return e.deleteVertexArray(d)}function _(d,b,B){const K=B.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let X=Y[b.id];X===void 0&&(X={},Y[b.id]=X);let W=X[K];return W===void 0&&(W=M(m()),X[K]=W),W}function M(d){const b=[],B=[],K=[];for(let Y=0;Y<n;Y++)b[Y]=0,B[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:K,object:d,attributes:{},index:null}}function S(d,b,B,K){const Y=r.attributes,X=b.attributes;let W=0;const ee=B.getAttributes();for(const G in ee)if(ee[G].location>=0){const _e=Y[G];let ue=X[G];if(ue===void 0&&(G==="instanceMatrix"&&d.instanceMatrix&&(ue=d.instanceMatrix),G==="instanceColor"&&d.instanceColor&&(ue=d.instanceColor)),_e===void 0||_e.attribute!==ue||ue&&_e.data!==ue.data)return!0;W++}return r.attributesNum!==W||r.index!==K}function L(d,b,B,K){const Y={},X=b.attributes;let W=0;const ee=B.getAttributes();for(const G in ee)if(ee[G].location>=0){let _e=X[G];_e===void 0&&(G==="instanceMatrix"&&d.instanceMatrix&&(_e=d.instanceMatrix),G==="instanceColor"&&d.instanceColor&&(_e=d.instanceColor));const ue={};ue.attribute=_e,_e&&_e.data&&(ue.data=_e.data),Y[G]=ue,W++}r.attributes=Y,r.attributesNum=W,r.index=K}function R(){const d=r.newAttributes;for(let b=0,B=d.length;b<B;b++)d[b]=0}function f(d){c(d,0)}function c(d,b){const B=r.newAttributes,K=r.enabledAttributes,Y=r.attributeDivisors;B[d]=1,K[d]===0&&(e.enableVertexAttribArray(d),K[d]=1),Y[d]!==b&&(e.vertexAttribDivisor(d,b),Y[d]=b)}function D(){const d=r.newAttributes,b=r.enabledAttributes;for(let B=0,K=b.length;B<K;B++)b[B]!==d[B]&&(e.disableVertexAttribArray(B),b[B]=0)}function w(d,b,B,K,Y,X,W){W===!0?e.vertexAttribIPointer(d,b,B,Y,X):e.vertexAttribPointer(d,b,B,K,Y,X)}function v(d,b,B,K){R();const Y=K.attributes,X=B.getAttributes(),W=b.defaultAttributeValues;for(const ee in X){const G=X[ee];if(G.location>=0){let me=Y[ee];if(me===void 0&&(ee==="instanceMatrix"&&d.instanceMatrix&&(me=d.instanceMatrix),ee==="instanceColor"&&d.instanceColor&&(me=d.instanceColor)),me!==void 0){const _e=me.normalized,ue=me.itemSize,Ne=t.get(me);if(Ne===void 0)continue;const nt=Ne.buffer,je=Ne.type,He=Ne.bytesPerElement,z=je===e.INT||je===e.UNSIGNED_INT||me.gpuType===ca;if(me.isInterleavedBufferAttribute){const j=me.data,pe=j.stride,ye=me.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)c(G.location+Ee,j.meshPerAttribute);d.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)f(G.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let Ee=0;Ee<G.locationSize;Ee++)w(G.location+Ee,ue/G.locationSize,je,_e,pe*He,(ye+ue/G.locationSize*Ee)*He,z)}else{if(me.isInstancedBufferAttribute){for(let j=0;j<G.locationSize;j++)c(G.location+j,me.meshPerAttribute);d.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let j=0;j<G.locationSize;j++)f(G.location+j);e.bindBuffer(e.ARRAY_BUFFER,nt);for(let j=0;j<G.locationSize;j++)w(G.location+j,ue/G.locationSize,je,_e,ue*He,ue/G.locationSize*j*He,z)}}else if(W!==void 0){const _e=W[ee];if(_e!==void 0)switch(_e.length){case 2:e.vertexAttrib2fv(G.location,_e);break;case 3:e.vertexAttrib3fv(G.location,_e);break;case 4:e.vertexAttrib4fv(G.location,_e);break;default:e.vertexAttrib1fv(G.location,_e)}}}}D()}function U(){H();for(const d in i){const b=i[d];for(const B in b){const K=b[B];for(const Y in K)T(K[Y].object),delete K[Y];delete b[B]}delete i[d]}}function x(d){if(i[d.id]===void 0)return;const b=i[d.id];for(const B in b){const K=b[B];for(const Y in K)T(K[Y].object),delete K[Y];delete b[B]}delete i[d.id]}function P(d){for(const b in i){const B=i[b];if(B[d.id]===void 0)continue;const K=B[d.id];for(const Y in K)T(K[Y].object),delete K[Y];delete B[d.id]}}function H(){h(),o=!0,r!==a&&(r=a,g(r.object))}function h(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:H,resetDefaultState:h,dispose:U,releaseStatesOfGeometry:x,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:f,disableUnusedAttributes:D}}function Kl(e,t,n){let i;function a(g){i=g}function r(g,T){e.drawArrays(i,g,T),n.update(T,i,1)}function o(g,T,_){_!==0&&(e.drawArraysInstanced(i,g,T,_),n.update(T,i,_))}function s(g,T,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,T,0,_);let S=0;for(let L=0;L<_;L++)S+=T[L];n.update(S,i,1)}function m(g,T,_,M){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let L=0;L<g.length;L++)o(g[L],T[L],M[L]);else{S.multiDrawArraysInstancedWEBGL(i,g,0,T,0,M,0,_);let L=0;for(let R=0;R<_;R++)L+=T[R]*M[R];n.update(L,i,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=m}function ql(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(P){return!(P!==Ct&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(P){const H=P===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==zt&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ht&&!H)}function m(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const T=m(g);T!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",T,"instead."),g=T);const _=n.logarithmicDepthBuffer===!0,M=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=L>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:m,textureFormatReadable:o,textureTypeReadable:s,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:L,maxTextureSize:R,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:U,maxSamples:x}}function Zl(e){const t=this;let n=null,i=0,a=!1,r=!1;const o=new na,s=new ze,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,M){const S=_.length!==0||M||i!==0||a;return a=M,i=_.length,S},this.beginShadows=function(){r=!0,T(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,M){n=T(_,M,0)},this.setState=function(_,M,S){const L=_.clippingPlanes,R=_.clipIntersection,f=_.clipShadows,c=e.get(_);if(!a||L===null||L.length===0||r&&!f)r?T(null):g();else{const D=r?0:i,w=D*4;let v=c.clippingState||null;m.value=v,v=T(L,M,w,S);for(let U=0;U!==w;++U)v[U]=n[U];c.clippingState=v,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function g(){m.value!==n&&(m.value=n,m.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function T(_,M,S,L){const R=_!==null?_.length:0;let f=null;if(R!==0){if(f=m.value,L!==!0||f===null){const c=S+R*4,D=M.matrixWorldInverse;s.getNormalMatrix(D),(f===null||f.length<c)&&(f=new Float32Array(c));for(let w=0,v=S;w!==R;++w,v+=4)o.copy(_[w]).applyMatrix4(D,s),o.normal.toArray(f,v),f[v+3]=o.constant}m.value=f,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,f}}function jl(e){let t=new WeakMap;function n(o,s){return s===fi?o.mapping=dn:s===ui&&(o.mapping=en),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===fi||s===ui)if(t.has(o)){const m=t.get(o).texture;return n(m,o.mapping)}else{const m=o.image;if(m&&m.height>0){const g=new To(m.height);return g.fromEquirectangularTexture(e,o),t.set(o,g),o.addEventListener("dispose",a),n(g.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const m=t.get(s);m!==void 0&&(t.delete(s),m.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zt=4,_r=[.125,.215,.35,.446,.526,.582],Bt=20,Kn=new di,gr=new Je;let qn=null,Zn=0,jn=0,$n=!1;const Ot=(1+Math.sqrt(5))/2,Yt=1/Ot,vr=[new Ae(-Ot,Yt,0),new Ae(Ot,Yt,0),new Ae(-Yt,0,Ot),new Ae(Yt,0,Ot),new Ae(0,Ot,-Yt),new Ae(0,Ot,Yt),new Ae(-1,1,-1),new Ae(1,1,-1),new Ae(-1,1,1),new Ae(1,1,1)],$l=new Ae;class Er{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:o=256,position:s=$l}=r;qn=this._renderer.getRenderTarget(),Zn=this._renderer.getActiveCubeFace(),jn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,i,a,m,s),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qn,Zn,jn),this._renderer.xr.enabled=$n,t.scissorTest=!1,En(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===dn||t.mapping===en?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qn=this._renderer.getRenderTarget(),Zn=this._renderer.getActiveCubeFace(),jn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Un,format:Ct,colorSpace:In,depthBuffer:!1},a=Sr(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sr(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ql(r)),this._blurMaterial=Jl(r,t,n)}return a}_compileMaterial(t){const n=new _t(this._lodPlanes[0],t);this._renderer.compile(n,Kn)}_sceneToCubeUV(t,n,i,a,r){const m=new jt(90,1,n,i),g=[1,-1,1,1,1,1],T=[1,1,1,-1,-1,-1],_=this._renderer,M=_.autoClear,S=_.toneMapping;_.getClearColor(gr),_.toneMapping=Pt,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const R=new wn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),f=new _t(new ha,R);let c=!1;const D=t.background;D?D.isColor&&(R.color.copy(D),t.background=null,c=!0):(R.color.copy(gr),c=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(m.up.set(0,g[w],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x+T[w],r.y,r.z)):v===1?(m.up.set(0,0,g[w]),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y+T[w],r.z)):(m.up.set(0,g[w],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y,r.z+T[w]));const U=this._cubeSize;En(a,v*U,w>2?U:0,U,U),_.setRenderTarget(a),c&&_.render(f,m),_.render(t,m)}f.geometry.dispose(),f.material.dispose(),_.toneMapping=S,_.autoClear=M,t.background=D}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===dn||t.mapping===en;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mr());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const m=this._cubeSize;En(n,0,0,3*m,2*m),i.setRenderTarget(n),i.render(o,Kn)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=vr[(a-r-1)%vr.length];this._blur(t,r-1,r,o,s)}n.autoClear=i}_blur(t,n,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,a,"latitudinal",r),this._halfBlur(o,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,o,s){const m=this._renderer,g=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const T=3,_=new _t(this._lodPlanes[a],g),M=g.uniforms,S=this._sizeLods[i]-1,L=isFinite(r)?Math.PI/(2*S):2*Math.PI/(2*Bt-1),R=r/L,f=isFinite(r)?1+Math.floor(T*R):Bt;f>Bt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bt}`);const c=[];let D=0;for(let P=0;P<Bt;++P){const H=P/R,h=Math.exp(-H*H/2);c.push(h),P===0?D+=h:P<f&&(D+=2*h)}for(let P=0;P<c.length;P++)c[P]=c[P]/D;M.envMap.value=t.texture,M.samples.value=f,M.weights.value=c,M.latitudinal.value=o==="latitudinal",s&&(M.poleAxis.value=s);const{_lodMax:w}=this;M.dTheta.value=L,M.mipInt.value=w-i;const v=this._sizeLods[a],U=3*v*(a>w-Zt?a-w+Zt:0),x=4*(this._cubeSize-v);En(n,U,x,3*v,2*v),m.setRenderTarget(n),m.render(_,Kn)}}function Ql(e){const t=[],n=[],i=[];let a=e;const r=e-Zt+1+_r.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);n.push(s);let m=1/s;o>e-Zt?m=_r[o-e+Zt-1]:o===0&&(m=0),i.push(m);const g=1/(s-2),T=-g,_=1+g,M=[T,T,_,T,_,_,T,T,_,_,T,_],S=6,L=6,R=3,f=2,c=1,D=new Float32Array(R*L*S),w=new Float32Array(f*L*S),v=new Float32Array(c*L*S);for(let x=0;x<S;x++){const P=x%3*2/3-1,H=x>2?0:-1,h=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];D.set(h,R*L*x),w.set(M,f*L*x);const d=[x,x,x,x,x,x];v.set(d,c*L*x)}const U=new un;U.setAttribute("position",new xt(D,R)),U.setAttribute("uv",new xt(w,f)),U.setAttribute("faceIndex",new xt(v,c)),t.push(U),a>Zt&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Sr(e,t,n){const i=new Jt(e,t,n);return i.texture.mapping=Nn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function En(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function Jl(e,t,n){const i=new Float32Array(Bt),a=new Ae(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Bt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gi(),fragmentShader:`

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
	`}function ef(e){let t=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const m=s.mapping,g=m===fi||m===ui,T=m===dn||m===en;if(g||T){let _=t.get(s);const M=_!==void 0?_.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==M)return n===null&&(n=new Er(e)),_=g?n.fromEquirectangular(s,_):n.fromCubemap(s,_),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),_.texture;if(_!==void 0)return _.texture;{const S=s.image;return g&&S&&S.height>0||T&&S&&a(S)?(n===null&&(n=new Er(e)),_=g?n.fromEquirectangular(s):n.fromCubemap(s),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),s.addEventListener("dispose",r),_.texture):null}}}return s}function a(s){let m=0;const g=6;for(let T=0;T<g;T++)s[T]!==void 0&&m++;return m===g}function r(s){const m=s.target;m.removeEventListener("dispose",r);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tf(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ni("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function nf(e,t,n,i){const a={},r=new WeakMap;function o(_){const M=_.target;M.index!==null&&t.remove(M.index);for(const L in M.attributes)t.remove(M.attributes[L]);M.removeEventListener("dispose",o),delete a[M.id];const S=r.get(M);S&&(t.remove(S),r.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function s(_,M){return a[M.id]===!0||(M.addEventListener("dispose",o),a[M.id]=!0,n.memory.geometries++),M}function m(_){const M=_.attributes;for(const S in M)t.update(M[S],e.ARRAY_BUFFER)}function g(_){const M=[],S=_.index,L=_.attributes.position;let R=0;if(S!==null){const D=S.array;R=S.version;for(let w=0,v=D.length;w<v;w+=3){const U=D[w+0],x=D[w+1],P=D[w+2];M.push(U,x,x,P,P,U)}}else if(L!==void 0){const D=L.array;R=L.version;for(let w=0,v=D.length/3-1;w<v;w+=3){const U=w+0,x=w+1,P=w+2;M.push(U,x,x,P,P,U)}}else return;const f=new(Co(M)?bo:ga)(M,1);f.version=R;const c=r.get(_);c&&t.remove(c),r.set(_,f)}function T(_){const M=r.get(_);if(M){const S=_.index;S!==null&&M.version<S.version&&g(_)}else g(_);return r.get(_)}return{get:s,update:m,getWireframeAttribute:T}}function rf(e,t,n){let i;function a(M){i=M}let r,o;function s(M){r=M.type,o=M.bytesPerElement}function m(M,S){e.drawElements(i,S,r,M*o),n.update(S,i,1)}function g(M,S,L){L!==0&&(e.drawElementsInstanced(i,S,r,M*o,L),n.update(S,i,L))}function T(M,S,L){if(L===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,r,M,0,L);let f=0;for(let c=0;c<L;c++)f+=S[c];n.update(f,i,1)}function _(M,S,L,R){if(L===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<M.length;c++)g(M[c]/o,S[c],R[c]);else{f.multiDrawElementsInstancedWEBGL(i,S,0,r,M,0,R,0,L);let c=0;for(let D=0;D<L;D++)c+=S[D]*R[D];n.update(c,i,1)}}this.setMode=a,this.setIndex=s,this.render=m,this.renderInstances=g,this.renderMultiDraw=T,this.renderMultiDrawInstances=_}function af(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=s*(r/3);break;case e.LINES:n.lines+=s*(r/2);break;case e.LINE_STRIP:n.lines+=s*(r-1);break;case e.LINE_LOOP:n.lines+=s*r;break;case e.POINTS:n.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function of(e,t,n){const i=new WeakMap,a=new mt;function r(o,s,m){const g=o.morphTargetInfluences,T=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,_=T!==void 0?T.length:0;let M=i.get(s);if(M===void 0||M.count!==_){let h=function(){P.dispose(),i.delete(s),s.removeEventListener("dispose",h)};M!==void 0&&M.texture.dispose();const S=s.morphAttributes.position!==void 0,L=s.morphAttributes.normal!==void 0,R=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],D=s.morphAttributes.color||[];let w=0;S===!0&&(w=1),L===!0&&(w=2),R===!0&&(w=3);let v=s.attributes.position.count*w,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const x=new Float32Array(v*U*4*_),P=new da(x,v,U,_);P.type=Ht,P.needsUpdate=!0;const H=w*4;for(let d=0;d<_;d++){const b=f[d],B=c[d],K=D[d],Y=v*U*4*d;for(let X=0;X<b.count;X++){const W=X*H;S===!0&&(a.fromBufferAttribute(b,X),x[Y+W+0]=a.x,x[Y+W+1]=a.y,x[Y+W+2]=a.z,x[Y+W+3]=0),L===!0&&(a.fromBufferAttribute(B,X),x[Y+W+4]=a.x,x[Y+W+5]=a.y,x[Y+W+6]=a.z,x[Y+W+7]=0),R===!0&&(a.fromBufferAttribute(K,X),x[Y+W+8]=a.x,x[Y+W+9]=a.y,x[Y+W+10]=a.z,x[Y+W+11]=K.itemSize===4?a.w:1)}}M={count:_,texture:P,size:new Qe(v,U)},i.set(s,M),s.addEventListener("dispose",h)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)m.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let S=0;for(let R=0;R<g.length;R++)S+=g[R];const L=s.morphTargetsRelative?1:1-S;m.getUniforms().setValue(e,"morphTargetBaseInfluence",L),m.getUniforms().setValue(e,"morphTargetInfluences",g)}m.getUniforms().setValue(e,"morphTargetsTexture",M.texture,n),m.getUniforms().setValue(e,"morphTargetsTextureSize",M.size)}return{update:r}}function sf(e,t,n,i){let a=new WeakMap;function r(m){const g=i.render.frame,T=m.geometry,_=t.get(m,T);if(a.get(_)!==g&&(t.update(_),a.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",s)===!1&&m.addEventListener("dispose",s),a.get(m)!==g&&(n.update(m.instanceMatrix,e.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,e.ARRAY_BUFFER),a.set(m,g))),m.isSkinnedMesh){const M=m.skeleton;a.get(M)!==g&&(M.update(),a.set(M,g))}return _}function o(){a=new WeakMap}function s(m){const g=m.target;g.removeEventListener("dispose",s),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:r,dispose:o}}const Sa=new Go,xr=new jr(1,1),Ma=new da,Ta=new Bo,xa=new Fo,Ar=[],Rr=[],br=new Float32Array(16),Cr=new Float32Array(9),wr=new Float32Array(4);function tn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Ar[a];if(r===void 0&&(r=new Float32Array(a),Ar[a]=r),t!==0){i.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=n,e[o].toArray(r,s)}return r}function lt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ft(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function On(e,t){let n=Rr[t];n===void 0&&(n=new Int32Array(t),Rr[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function cf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2fv(this.addr,t),ft(n,t)}}function ff(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(lt(n,t))return;e.uniform3fv(this.addr,t),ft(n,t)}}function uf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4fv(this.addr,t),ft(n,t)}}function df(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;wr.set(i),e.uniformMatrix2fv(this.addr,!1,wr),ft(n,i)}}function pf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;Cr.set(i),e.uniformMatrix3fv(this.addr,!1,Cr),ft(n,i)}}function hf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(lt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ft(n,t)}else{if(lt(n,i))return;br.set(i),e.uniformMatrix4fv(this.addr,!1,br),ft(n,i)}}function mf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _f(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2iv(this.addr,t),ft(n,t)}}function gf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lt(n,t))return;e.uniform3iv(this.addr,t),ft(n,t)}}function vf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4iv(this.addr,t),ft(n,t)}}function Ef(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Sf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lt(n,t))return;e.uniform2uiv(this.addr,t),ft(n,t)}}function Mf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lt(n,t))return;e.uniform3uiv(this.addr,t),ft(n,t)}}function Tf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lt(n,t))return;e.uniform4uiv(this.addr,t),ft(n,t)}}function xf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(xr.compareFunction=ta,r=xr):r=Sa,n.setTexture2D(t||r,a)}function Af(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Ta,a)}function Rf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||xa,a)}function bf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||Ma,a)}function Cf(e){switch(e){case 5126:return cf;case 35664:return lf;case 35665:return ff;case 35666:return uf;case 35674:return df;case 35675:return pf;case 35676:return hf;case 5124:case 35670:return mf;case 35667:case 35671:return _f;case 35668:case 35672:return gf;case 35669:case 35673:return vf;case 5125:return Ef;case 36294:return Sf;case 36295:return Mf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return bf}}function wf(e,t){e.uniform1fv(this.addr,t)}function yf(e,t){const n=tn(t,this.size,2);e.uniform2fv(this.addr,n)}function Pf(e,t){const n=tn(t,this.size,3);e.uniform3fv(this.addr,n)}function Lf(e,t){const n=tn(t,this.size,4);e.uniform4fv(this.addr,n)}function Df(e,t){const n=tn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Uf(e,t){const n=tn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function If(e,t){const n=tn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Nf(e,t){e.uniform1iv(this.addr,t)}function Of(e,t){e.uniform2iv(this.addr,t)}function Ff(e,t){e.uniform3iv(this.addr,t)}function Bf(e,t){e.uniform4iv(this.addr,t)}function Gf(e,t){e.uniform1uiv(this.addr,t)}function Hf(e,t){e.uniform2uiv(this.addr,t)}function Vf(e,t){e.uniform3uiv(this.addr,t)}function kf(e,t){e.uniform4uiv(this.addr,t)}function zf(e,t,n){const i=this.cache,a=t.length,r=On(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture2D(t[o]||Sa,r[o])}function Wf(e,t,n){const i=this.cache,a=t.length,r=On(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture3D(t[o]||Ta,r[o])}function Xf(e,t,n){const i=this.cache,a=t.length,r=On(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTextureCube(t[o]||xa,r[o])}function Yf(e,t,n){const i=this.cache,a=t.length,r=On(n,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==a;++o)n.setTexture2DArray(t[o]||Ma,r[o])}function Kf(e){switch(e){case 5126:return wf;case 35664:return yf;case 35665:return Pf;case 35666:return Lf;case 35674:return Df;case 35675:return Uf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Of;case 35668:case 35672:return Ff;case 35669:case 35673:return Bf;case 5125:return Gf;case 36294:return Hf;case 36295:return Vf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return Yf}}class qf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cf(n.type)}}class Zf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kf(n.type)}}class jf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,n[s.id],i)}}}const Qn=/(\w+)(\])?(\[|\.)?/g;function yr(e,t){e.seq.push(t),e.map[t.id]=t}function $f(e,t,n){const i=e.name,a=i.length;for(Qn.lastIndex=0;;){const r=Qn.exec(i),o=Qn.lastIndex;let s=r[1];const m=r[2]==="]",g=r[3];if(m&&(s=s|0),g===void 0||g==="["&&o+2===a){yr(n,g===void 0?new qf(s,e,t):new Zf(s,e,t));break}else{let _=n.map[s];_===void 0&&(_=new jf(s),yr(n,_)),n=_}}}class An{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),o=t.getUniformLocation(n,r.name);$f(r,o,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,o=n.length;r!==o;++r){const s=n[r],m=i[s.id];m.needsUpdate!==!1&&s.setValue(t,m.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in n&&i.push(o)}return i}}function Pr(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Qf=37297;let Jf=0;function eu(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const Lr=new ze;function tu(e){ot._getMatrix(Lr,ot.workingColorSpace,e);const t=`mat3( ${Lr.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(e)){case _a:return[t,"LinearTransferOETF"];case tt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Dr(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+eu(e.getShaderSource(t),s)}else return r}function nu(e,t){const n=tu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function iu(e,t){let n;switch(t){case Oo:n="Linear";break;case No:n="Reinhard";break;case Io:n="Cineon";break;case Uo:n="ACESFilmic";break;case Do:n="AgX";break;case Lo:n="Neutral";break;case Po:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sn=new Ae;function ru(){ot.getLuminanceCoefficients(Sn);const e=Sn.x.toFixed(4),t=Sn.y.toFixed(4),n=Sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function au(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(on).join(`
`)}function ou(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function su(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),o=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function on(e){return e!==""}function Ur(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ir(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cu=/^[ \t]*#include +<([\w\d./]+)>/gm;function hi(e){return e.replace(cu,fu)}const lu=new Map;function fu(e,t){let n=Oe[t];if(n===void 0){const i=lu.get(t);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hi(n)}const uu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nr(e){return e.replace(uu,du)}function du(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Or(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function pu(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ia?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yt&&(t="SHADOWMAP_TYPE_VSM"),t}function hu(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case dn:case en:t="ENVMAP_TYPE_CUBE";break;case Nn:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mu(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case en:t="ENVMAP_MODE_REFRACTION";break}return t}function _u(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case ko:t="ENVMAP_BLENDING_MIX";break;case Vo:t="ENVMAP_BLENDING_ADD";break}return t}function gu(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function vu(e,t,n,i){const a=e.getContext(),r=n.defines;let o=n.vertexShader,s=n.fragmentShader;const m=pu(n),g=hu(n),T=mu(n),_=_u(n),M=gu(n),S=au(n),L=ou(r),R=a.createProgram();let f,c,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L].filter(on).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L].filter(on).join(`
`),c.length>0&&(c+=`
`)):(f=[Or(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+T:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),c=[Or(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+T:"",n.envMap?"#define "+_:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pt?"#define TONE_MAPPING":"",n.toneMapping!==Pt?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Pt?iu("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,nu("linearToOutputTexel",n.outputColorSpace),ru(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(on).join(`
`)),o=hi(o),o=Ur(o,n),o=Ir(o,n),s=hi(s),s=Ur(s,n),s=Ir(s,n),o=Nr(o),s=Nr(s),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,f=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===or?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const w=D+f+o,v=D+c+s,U=Pr(a,a.VERTEX_SHADER,w),x=Pr(a,a.FRAGMENT_SHADER,v);a.attachShader(R,U),a.attachShader(R,x),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function P(b){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(R)||"",K=a.getShaderInfoLog(U)||"",Y=a.getShaderInfoLog(x)||"",X=B.trim(),W=K.trim(),ee=Y.trim();let G=!0,me=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,R,U,x);else{const _e=Dr(a,U,"vertex"),ue=Dr(a,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+X+`
`+_e+`
`+ue)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ee==="")&&(me=!1);me&&(b.diagnostics={runnable:G,programLog:X,vertexShader:{log:W,prefix:f},fragmentShader:{log:ee,prefix:c}})}a.deleteShader(U),a.deleteShader(x),H=new An(a,R),h=su(a,R)}let H;this.getUniforms=function(){return H===void 0&&P(this),H};let h;this.getAttributes=function(){return h===void 0&&P(this),h};let d=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=a.getProgramParameter(R,Qf)),d},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jf++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=x,this}let Eu=0;class Su{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Mu(t),n.set(t,i)),i}}class Mu{constructor(t){this.id=Eu++,this.code=t,this.usedTimes=0}}function Tu(e,t,n,i,a,r,o){const s=new wo,m=new Su,g=new Set,T=[],_=a.logarithmicDepthBuffer,M=a.vertexTextures;let S=a.precision;const L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(h){return g.add(h),h===0?"uv":`uv${h}`}function f(h,d,b,B,K){const Y=B.fog,X=K.geometry,W=h.isMeshStandardMaterial?B.environment:null,ee=(h.isMeshStandardMaterial?n:t).get(h.envMap||W),G=ee&&ee.mapping===Nn?ee.image.height:null,me=L[h.type];h.precision!==null&&(S=a.getMaxPrecision(h.precision),S!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",S,"instead."));const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=_e!==void 0?_e.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let nt,je,He,z;if(me){const We=bt[me];nt=We.vertexShader,je=We.fragmentShader}else nt=h.vertexShader,je=h.fragmentShader,m.update(h),He=m.getVertexShaderID(h),z=m.getFragmentShaderID(h);const j=e.getRenderTarget(),pe=e.state.buffers.depth.getReversed(),ye=K.isInstancedMesh===!0,Ee=K.isBatchedMesh===!0,Fe=!!h.map,st=!!h.matcap,E=!!ee,qe=!!h.aoMap,De=!!h.lightMap,q=!!h.bumpMap,F=!!h.normalMap,Se=!!h.displacementMap,ie=!!h.emissiveMap,ae=!!h.metalnessMap,Ve=!!h.roughnessMap,Xe=h.anisotropy>0,p=h.clearcoat>0,l=h.dispersion>0,I=h.iridescence>0,k=h.sheen>0,$=h.transmission>0,V=Xe&&!!h.anisotropyMap,Re=p&&!!h.clearcoatMap,re=p&&!!h.clearcoatNormalMap,Me=p&&!!h.clearcoatRoughnessMap,Te=I&&!!h.iridescenceMap,te=I&&!!h.iridescenceThicknessMap,fe=k&&!!h.sheenColorMap,Pe=k&&!!h.sheenRoughnessMap,xe=!!h.specularMap,ce=!!h.specularColorMap,Ie=!!h.specularIntensityMap,A=$&&!!h.transmissionMap,ne=$&&!!h.thicknessMap,oe=!!h.gradientMap,he=!!h.alphaMap,Q=h.alphaTest>0,Z=!!h.alphaHash,ve=!!h.extensions;let Ue=Pt;h.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=e.toneMapping);const $e={shaderID:me,shaderType:h.type,shaderName:h.name,vertexShader:nt,fragmentShader:je,defines:h.defines,customVertexShaderID:He,customFragmentShaderID:z,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:S,batching:Ee,batchingColor:Ee&&K._colorsTexture!==null,instancing:ye,instancingColor:ye&&K.instanceColor!==null,instancingMorph:ye&&K.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:In,alphaToCoverage:!!h.alphaToCoverage,map:Fe,matcap:st,envMap:E,envMapMode:E&&ee.mapping,envMapCubeUVHeight:G,aoMap:qe,lightMap:De,bumpMap:q,normalMap:F,displacementMap:M&&Se,emissiveMap:ie,normalMapObjectSpace:F&&h.normalMapType===Ro,normalMapTangentSpace:F&&h.normalMapType===Ao,metalnessMap:ae,roughnessMap:Ve,anisotropy:Xe,anisotropyMap:V,clearcoat:p,clearcoatMap:Re,clearcoatNormalMap:re,clearcoatRoughnessMap:Me,dispersion:l,iridescence:I,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:k,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:ce,specularIntensityMap:Ie,transmission:$,transmissionMap:A,thicknessMap:ne,gradientMap:oe,opaque:h.transparent===!1&&h.blending===xn&&h.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:Z,combine:h.combine,mapUv:Fe&&R(h.map.channel),aoMapUv:qe&&R(h.aoMap.channel),lightMapUv:De&&R(h.lightMap.channel),bumpMapUv:q&&R(h.bumpMap.channel),normalMapUv:F&&R(h.normalMap.channel),displacementMapUv:Se&&R(h.displacementMap.channel),emissiveMapUv:ie&&R(h.emissiveMap.channel),metalnessMapUv:ae&&R(h.metalnessMap.channel),roughnessMapUv:Ve&&R(h.roughnessMap.channel),anisotropyMapUv:V&&R(h.anisotropyMap.channel),clearcoatMapUv:Re&&R(h.clearcoatMap.channel),clearcoatNormalMapUv:re&&R(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(h.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&R(h.iridescenceMap.channel),iridescenceThicknessMapUv:te&&R(h.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&R(h.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&R(h.sheenRoughnessMap.channel),specularMapUv:xe&&R(h.specularMap.channel),specularColorMapUv:ce&&R(h.specularColorMap.channel),specularIntensityMapUv:Ie&&R(h.specularIntensityMap.channel),transmissionMapUv:A&&R(h.transmissionMap.channel),thicknessMapUv:ne&&R(h.thicknessMap.channel),alphaMapUv:he&&R(h.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(F||Xe),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Fe||he),fog:!!Y,useFog:h.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:h.flatShading===!0&&h.wireframe===!1,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ne,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Fe&&h.map.isVideoTexture===!0&&ot.getTransfer(h.map.colorSpace)===tt,decodeVideoTextureEmissive:ie&&h.emissiveMap.isVideoTexture===!0&&ot.getTransfer(h.emissiveMap.colorSpace)===tt,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Et,flipSided:h.side===At,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:ve&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&h.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return $e.vertexUv1s=g.has(1),$e.vertexUv2s=g.has(2),$e.vertexUv3s=g.has(3),g.clear(),$e}function c(h){const d=[];if(h.shaderID?d.push(h.shaderID):(d.push(h.customVertexShaderID),d.push(h.customFragmentShaderID)),h.defines!==void 0)for(const b in h.defines)d.push(b),d.push(h.defines[b]);return h.isRawShaderMaterial===!1&&(D(d,h),w(d,h),d.push(e.outputColorSpace)),d.push(h.customProgramCacheKey),d.join()}function D(h,d){h.push(d.precision),h.push(d.outputColorSpace),h.push(d.envMapMode),h.push(d.envMapCubeUVHeight),h.push(d.mapUv),h.push(d.alphaMapUv),h.push(d.lightMapUv),h.push(d.aoMapUv),h.push(d.bumpMapUv),h.push(d.normalMapUv),h.push(d.displacementMapUv),h.push(d.emissiveMapUv),h.push(d.metalnessMapUv),h.push(d.roughnessMapUv),h.push(d.anisotropyMapUv),h.push(d.clearcoatMapUv),h.push(d.clearcoatNormalMapUv),h.push(d.clearcoatRoughnessMapUv),h.push(d.iridescenceMapUv),h.push(d.iridescenceThicknessMapUv),h.push(d.sheenColorMapUv),h.push(d.sheenRoughnessMapUv),h.push(d.specularMapUv),h.push(d.specularColorMapUv),h.push(d.specularIntensityMapUv),h.push(d.transmissionMapUv),h.push(d.thicknessMapUv),h.push(d.combine),h.push(d.fogExp2),h.push(d.sizeAttenuation),h.push(d.morphTargetsCount),h.push(d.morphAttributeCount),h.push(d.numDirLights),h.push(d.numPointLights),h.push(d.numSpotLights),h.push(d.numSpotLightMaps),h.push(d.numHemiLights),h.push(d.numRectAreaLights),h.push(d.numDirLightShadows),h.push(d.numPointLightShadows),h.push(d.numSpotLightShadows),h.push(d.numSpotLightShadowsWithMaps),h.push(d.numLightProbes),h.push(d.shadowMapType),h.push(d.toneMapping),h.push(d.numClippingPlanes),h.push(d.numClipIntersection),h.push(d.depthPacking)}function w(h,d){s.disableAll(),d.supportsVertexTextures&&s.enable(0),d.instancing&&s.enable(1),d.instancingColor&&s.enable(2),d.instancingMorph&&s.enable(3),d.matcap&&s.enable(4),d.envMap&&s.enable(5),d.normalMapObjectSpace&&s.enable(6),d.normalMapTangentSpace&&s.enable(7),d.clearcoat&&s.enable(8),d.iridescence&&s.enable(9),d.alphaTest&&s.enable(10),d.vertexColors&&s.enable(11),d.vertexAlphas&&s.enable(12),d.vertexUv1s&&s.enable(13),d.vertexUv2s&&s.enable(14),d.vertexUv3s&&s.enable(15),d.vertexTangents&&s.enable(16),d.anisotropy&&s.enable(17),d.alphaHash&&s.enable(18),d.batching&&s.enable(19),d.dispersion&&s.enable(20),d.batchingColor&&s.enable(21),d.gradientMap&&s.enable(22),h.push(s.mask),s.disableAll(),d.fog&&s.enable(0),d.useFog&&s.enable(1),d.flatShading&&s.enable(2),d.logarithmicDepthBuffer&&s.enable(3),d.reversedDepthBuffer&&s.enable(4),d.skinning&&s.enable(5),d.morphTargets&&s.enable(6),d.morphNormals&&s.enable(7),d.morphColors&&s.enable(8),d.premultipliedAlpha&&s.enable(9),d.shadowMapEnabled&&s.enable(10),d.doubleSided&&s.enable(11),d.flipSided&&s.enable(12),d.useDepthPacking&&s.enable(13),d.dithering&&s.enable(14),d.transmission&&s.enable(15),d.sheen&&s.enable(16),d.opaque&&s.enable(17),d.pointsUvs&&s.enable(18),d.decodeVideoTexture&&s.enable(19),d.decodeVideoTextureEmissive&&s.enable(20),d.alphaToCoverage&&s.enable(21),h.push(s.mask)}function v(h){const d=L[h.type];let b;if(d){const B=bt[d];b=xo.clone(B.uniforms)}else b=h.uniforms;return b}function U(h,d){let b;for(let B=0,K=T.length;B<K;B++){const Y=T[B];if(Y.cacheKey===d){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new vu(e,d,h,r),T.push(b)),b}function x(h){if(--h.usedTimes===0){const d=T.indexOf(h);T[d]=T[T.length-1],T.pop(),h.destroy()}}function P(h){m.remove(h)}function H(){m.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:v,acquireProgram:U,releaseProgram:x,releaseShaderCache:P,programs:T,dispose:H}}function xu(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function a(o,s,m){e.get(o)[s]=m}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function Au(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Fr(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Br(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function o(_,M,S,L,R,f){let c=e[t];return c===void 0?(c={id:_.id,object:_,geometry:M,material:S,groupOrder:L,renderOrder:_.renderOrder,z:R,group:f},e[t]=c):(c.id=_.id,c.object=_,c.geometry=M,c.material=S,c.groupOrder=L,c.renderOrder=_.renderOrder,c.z=R,c.group=f),t++,c}function s(_,M,S,L,R,f){const c=o(_,M,S,L,R,f);S.transmission>0?i.push(c):S.transparent===!0?a.push(c):n.push(c)}function m(_,M,S,L,R,f){const c=o(_,M,S,L,R,f);S.transmission>0?i.unshift(c):S.transparent===!0?a.unshift(c):n.unshift(c)}function g(_,M){n.length>1&&n.sort(_||Au),i.length>1&&i.sort(M||Fr),a.length>1&&a.sort(M||Fr)}function T(){for(let _=t,M=e.length;_<M;_++){const S=e[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:s,unshift:m,finish:T,sort:g}}function Ru(){let e=new WeakMap;function t(i,a){const r=e.get(i);let o;return r===void 0?(o=new Br,e.set(i,[o])):a>=r.length?(o=new Br,r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function bu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Ae,color:new Je};break;case"SpotLight":n={position:new Ae,direction:new Ae,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Ae,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Ae,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new Ae,halfWidth:new Ae,halfHeight:new Ae};break}return e[t.id]=n,n}}}function Cu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let wu=0;function yu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Pu(e){const t=new bu,n=Cu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Ae);const a=new Ae,r=new kt,o=new kt;function s(g){let T=0,_=0,M=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let S=0,L=0,R=0,f=0,c=0,D=0,w=0,v=0,U=0,x=0,P=0;g.sort(yu);for(let h=0,d=g.length;h<d;h++){const b=g[h],B=b.color,K=b.intensity,Y=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)T+=B.r*K,_+=B.g*K,M+=B.b*K;else if(b.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(b.sh.coefficients[W],K);P++}else if(b.isDirectionalLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ee=b.shadow,G=n.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[S]=G,i.directionalShadowMap[S]=X,i.directionalShadowMatrix[S]=b.shadow.matrix,D++}i.directional[S]=W,S++}else if(b.isSpotLight){const W=t.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(B).multiplyScalar(K),W.distance=Y,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,i.spot[R]=W;const ee=b.shadow;if(b.map&&(i.spotLightMap[U]=b.map,U++,ee.updateMatrices(b),b.castShadow&&x++),i.spotLightMatrix[R]=ee.matrix,b.castShadow){const G=n.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[R]=G,i.spotShadowMap[R]=X,v++}R++}else if(b.isRectAreaLight){const W=t.get(b);W.color.copy(B).multiplyScalar(K),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=W,f++}else if(b.isPointLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const ee=b.shadow,G=n.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[L]=G,i.pointShadowMap[L]=X,i.pointShadowMatrix[L]=b.shadow.matrix,w++}i.point[L]=W,L++}else if(b.isHemisphereLight){const W=t.get(b);W.skyColor.copy(b.color).multiplyScalar(K),W.groundColor.copy(b.groundColor).multiplyScalar(K),i.hemi[c]=W,c++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=T,i.ambient[1]=_,i.ambient[2]=M;const H=i.hash;(H.directionalLength!==S||H.pointLength!==L||H.spotLength!==R||H.rectAreaLength!==f||H.hemiLength!==c||H.numDirectionalShadows!==D||H.numPointShadows!==w||H.numSpotShadows!==v||H.numSpotMaps!==U||H.numLightProbes!==P)&&(i.directional.length=S,i.spot.length=R,i.rectArea.length=f,i.point.length=L,i.hemi.length=c,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+U-x,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=P,H.directionalLength=S,H.pointLength=L,H.spotLength=R,H.rectAreaLength=f,H.hemiLength=c,H.numDirectionalShadows=D,H.numPointShadows=w,H.numSpotShadows=v,H.numSpotMaps=U,H.numLightProbes=P,i.version=wu++)}function m(g,T){let _=0,M=0,S=0,L=0,R=0;const f=T.matrixWorldInverse;for(let c=0,D=g.length;c<D;c++){const w=g[c];if(w.isDirectionalLight){const v=i.directional[_];v.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(f),_++}else if(w.isSpotLight){const v=i.spot[S];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(f),S++}else if(w.isRectAreaLight){const v=i.rectArea[L];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(w.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),L++}else if(w.isPointLight){const v=i.point[M];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),M++}else if(w.isHemisphereLight){const v=i.hemi[R];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(f),R++}}}return{setup:s,setupView:m,state:i}}function Gr(e){const t=new Pu(e),n=[],i=[];function a(T){g.camera=T,n.length=0,i.length=0}function r(T){n.push(T)}function o(T){i.push(T)}function s(){t.setup(n)}function m(T){t.setupView(n,T)}const g={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:s,setupLightsView:m,pushLight:r,pushShadow:o}}function Lu(e){let t=new WeakMap;function n(a,r=0){const o=t.get(a);let s;return o===void 0?(s=new Gr(e),t.set(a,[s])):r>=o.length?(s=new Gr(e),o.push(s)):s=o[r],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const Du=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uu=`uniform sampler2D shadow_pass;
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
}`;function Iu(e,t,n){let i=new qr;const a=new Qe,r=new Qe,o=new mt,s=new so({depthPacking:co}),m=new lo,g={},T=n.maxTextureSize,_={[cn]:At,[At]:cn,[Et]:Et},M=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Du,fragmentShader:Uu}),S=M.clone();S.defines.HORIZONTAL_PASS=1;const L=new un;L.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _t(L,M),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let c=this.type;this.render=function(x,P,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const h=e.getRenderTarget(),d=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Vt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=c!==yt&&this.type===yt,Y=c===yt&&this.type!==yt;for(let X=0,W=x.length;X<W;X++){const ee=x[X],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const me=G.getFrameExtents();if(a.multiply(me),r.copy(G.mapSize),(a.x>T||a.y>T)&&(a.x>T&&(r.x=Math.floor(T/me.x),a.x=r.x*me.x,G.mapSize.x=r.x),a.y>T&&(r.y=Math.floor(T/me.y),a.y=r.y*me.y,G.mapSize.y=r.y)),G.map===null||K===!0||Y===!0){const ue=this.type!==yt?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new Jt(a.x,a.y,ue),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();const _e=G.getViewportCount();for(let ue=0;ue<_e;ue++){const Ne=G.getViewport(ue);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),B.viewport(o),G.updateMatrices(ee,ue),i=G.getFrustum(),v(P,H,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===yt&&D(G,H),G.needsUpdate=!1}c=this.type,f.needsUpdate=!1,e.setRenderTarget(h,d,b)};function D(x,P){const H=t.update(R);M.defines.VSM_SAMPLES!==x.blurSamples&&(M.defines.VSM_SAMPLES=x.blurSamples,S.defines.VSM_SAMPLES=x.blurSamples,M.needsUpdate=!0,S.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Jt(a.x,a.y)),M.uniforms.shadow_pass.value=x.map.texture,M.uniforms.resolution.value=x.mapSize,M.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(P,null,H,M,R,null),S.uniforms.shadow_pass.value=x.mapPass.texture,S.uniforms.resolution.value=x.mapSize,S.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(P,null,H,S,R,null)}function w(x,P,H,h){let d=null;const b=H.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0)d=b;else if(d=H.isPointLight===!0?m:s,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=d.uuid,K=P.uuid;let Y=g[B];Y===void 0&&(Y={},g[B]=Y);let X=Y[K];X===void 0&&(X=d.clone(),Y[K]=X,P.addEventListener("dispose",U)),d=X}if(d.visible=P.visible,d.wireframe=P.wireframe,h===yt?d.side=P.shadowSide!==null?P.shadowSide:P.side:d.side=P.shadowSide!==null?P.shadowSide:_[P.side],d.alphaMap=P.alphaMap,d.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,d.map=P.map,d.clipShadows=P.clipShadows,d.clippingPlanes=P.clippingPlanes,d.clipIntersection=P.clipIntersection,d.displacementMap=P.displacementMap,d.displacementScale=P.displacementScale,d.displacementBias=P.displacementBias,d.wireframeLinewidth=P.wireframeLinewidth,d.linewidth=P.linewidth,H.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const B=e.properties.get(d);B.light=H}return d}function v(x,P,H,h,d){if(x.visible===!1)return;if(x.layers.test(P.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&d===yt)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld);const K=t.update(x),Y=x.material;if(Array.isArray(Y)){const X=K.groups;for(let W=0,ee=X.length;W<ee;W++){const G=X[W],me=Y[G.materialIndex];if(me&&me.visible){const _e=w(x,me,h,d);x.onBeforeShadow(e,x,P,H,K,_e,G),e.renderBufferDirect(H,null,K,_e,x,G),x.onAfterShadow(e,x,P,H,K,_e,G)}}}else if(Y.visible){const X=w(x,Y,h,d);x.onBeforeShadow(e,x,P,H,K,X,null),e.renderBufferDirect(H,null,K,X,x,null),x.onAfterShadow(e,x,P,H,K,X,null)}}const B=x.children;for(let K=0,Y=B.length;K<Y;K++)v(B[K],P,H,h,d)}function U(x){x.target.removeEventListener("dispose",U);for(const H in g){const h=g[H],d=x.target.uuid;d in h&&(h[d].dispose(),delete h[d])}}}const Nu={[li]:ci,[si]:ri,[oi]:ii,[bn]:ai,[ci]:li,[ri]:si,[ii]:oi,[ai]:bn};function Ou(e,t){function n(){let A=!1;const ne=new mt;let oe=null;const he=new mt(0,0,0,0);return{setMask:function(Q){oe!==Q&&!A&&(e.colorMask(Q,Q,Q,Q),oe=Q)},setLocked:function(Q){A=Q},setClear:function(Q,Z,ve,Ue,$e){$e===!0&&(Q*=Ue,Z*=Ue,ve*=Ue),ne.set(Q,Z,ve,Ue),he.equals(ne)===!1&&(e.clearColor(Q,Z,ve,Ue),he.copy(ne))},reset:function(){A=!1,oe=null,he.set(-1,0,0,0)}}}function i(){let A=!1,ne=!1,oe=null,he=null,Q=null;return{setReversed:function(Z){if(ne!==Z){const ve=t.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=Z;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return ne},setTest:function(Z){Z?j(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!A&&(e.depthMask(Z),oe=Z)},setFunc:function(Z){if(ne&&(Z=Nu[Z]),he!==Z){switch(Z){case li:e.depthFunc(e.NEVER);break;case ci:e.depthFunc(e.ALWAYS);break;case si:e.depthFunc(e.LESS);break;case bn:e.depthFunc(e.LEQUAL);break;case oi:e.depthFunc(e.EQUAL);break;case ai:e.depthFunc(e.GEQUAL);break;case ri:e.depthFunc(e.GREATER);break;case ii:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=Z}},setLocked:function(Z){A=Z},setClear:function(Z){Q!==Z&&(ne&&(Z=1-Z),e.clearDepth(Z),Q=Z)},reset:function(){A=!1,oe=null,he=null,Q=null,ne=!1}}}function a(){let A=!1,ne=null,oe=null,he=null,Q=null,Z=null,ve=null,Ue=null,$e=null;return{setTest:function(We){A||(We?j(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(We){ne!==We&&!A&&(e.stencilMask(We),ne=We)},setFunc:function(We,wt,Rt){(oe!==We||he!==wt||Q!==Rt)&&(e.stencilFunc(We,wt,Rt),oe=We,he=wt,Q=Rt)},setOp:function(We,wt,Rt){(Z!==We||ve!==wt||Ue!==Rt)&&(e.stencilOp(We,wt,Rt),Z=We,ve=wt,Ue=Rt)},setLocked:function(We){A=We},setClear:function(We){$e!==We&&(e.clearStencil(We),$e=We)},reset:function(){A=!1,ne=null,oe=null,he=null,Q=null,Z=null,ve=null,Ue=null,$e=null}}}const r=new n,o=new i,s=new a,m=new WeakMap,g=new WeakMap;let T={},_={},M=new WeakMap,S=[],L=null,R=!1,f=null,c=null,D=null,w=null,v=null,U=null,x=null,P=new Je(0,0,0),H=0,h=!1,d=null,b=null,B=null,K=null,Y=null;const X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=ee>=2);let me=null,_e={};const ue=e.getParameter(e.SCISSOR_BOX),Ne=e.getParameter(e.VIEWPORT),nt=new mt().fromArray(ue),je=new mt().fromArray(Ne);function He(A,ne,oe,he){const Q=new Uint8Array(4),Z=e.createTexture();e.bindTexture(A,Z),e.texParameteri(A,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(A,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<oe;ve++)A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY?e.texImage3D(ne,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,Q):e.texImage2D(ne+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Q);return Z}const z={};z[e.TEXTURE_2D]=He(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=He(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=He(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=He(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),j(e.DEPTH_TEST),o.setFunc(bn),q(!1),F(er),j(e.CULL_FACE),qe(Vt);function j(A){T[A]!==!0&&(e.enable(A),T[A]=!0)}function pe(A){T[A]!==!1&&(e.disable(A),T[A]=!1)}function ye(A,ne){return _[A]!==ne?(e.bindFramebuffer(A,ne),_[A]=ne,A===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=ne),A===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ee(A,ne){let oe=S,he=!1;if(A){oe=M.get(ne),oe===void 0&&(oe=[],M.set(ne,oe));const Q=A.textures;if(oe.length!==Q.length||oe[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,ve=Q.length;Z<ve;Z++)oe[Z]=e.COLOR_ATTACHMENT0+Z;oe.length=Q.length,he=!0}}else oe[0]!==e.BACK&&(oe[0]=e.BACK,he=!0);he&&e.drawBuffers(oe)}function Fe(A){return L!==A?(e.useProgram(A),L=A,!0):!1}const st={[rn]:e.FUNC_ADD,[Ba]:e.FUNC_SUBTRACT,[Fa]:e.FUNC_REVERSE_SUBTRACT};st[Wo]=e.MIN,st[Xo]=e.MAX;const E={[Ja]:e.ZERO,[Qa]:e.ONE,[$a]:e.SRC_COLOR,[ja]:e.SRC_ALPHA,[Za]:e.SRC_ALPHA_SATURATE,[qa]:e.DST_COLOR,[Ka]:e.DST_ALPHA,[Ya]:e.ONE_MINUS_SRC_COLOR,[Xa]:e.ONE_MINUS_SRC_ALPHA,[Wa]:e.ONE_MINUS_DST_COLOR,[za]:e.ONE_MINUS_DST_ALPHA,[ka]:e.CONSTANT_COLOR,[Va]:e.ONE_MINUS_CONSTANT_COLOR,[Ha]:e.CONSTANT_ALPHA,[Ga]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(A,ne,oe,he,Q,Z,ve,Ue,$e,We){if(A===Vt){R===!0&&(pe(e.BLEND),R=!1);return}if(R===!1&&(j(e.BLEND),R=!0),A!==Mo){if(A!==f||We!==h){if((c!==rn||v!==rn)&&(e.blendEquation(e.FUNC_ADD),c=rn,v=rn),We)switch(A){case xn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ir:e.blendFunc(e.ONE,e.ONE);break;case nr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case xn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case nr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}D=null,w=null,U=null,x=null,P.set(0,0,0),H=0,f=A,h=We}return}Q=Q||ne,Z=Z||oe,ve=ve||he,(ne!==c||Q!==v)&&(e.blendEquationSeparate(st[ne],st[Q]),c=ne,v=Q),(oe!==D||he!==w||Z!==U||ve!==x)&&(e.blendFuncSeparate(E[oe],E[he],E[Z],E[ve]),D=oe,w=he,U=Z,x=ve),(Ue.equals(P)===!1||$e!==H)&&(e.blendColor(Ue.r,Ue.g,Ue.b,$e),P.copy(Ue),H=$e),f=A,h=!1}function De(A,ne){A.side===Et?pe(e.CULL_FACE):j(e.CULL_FACE);let oe=A.side===At;ne&&(oe=!oe),q(oe),A.blending===xn&&A.transparent===!1?qe(Vt):qe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);const he=A.stencilWrite;s.setTest(he),he&&(s.setMask(A.stencilWriteMask),s.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),s.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ie(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function q(A){d!==A&&(A?e.frontFace(e.CW):e.frontFace(e.CCW),d=A)}function F(A){A!==Eo?(j(e.CULL_FACE),A!==b&&(A===er?e.cullFace(e.BACK):A===So?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pe(e.CULL_FACE),b=A}function Se(A){A!==B&&(W&&e.lineWidth(A),B=A)}function ie(A,ne,oe){A?(j(e.POLYGON_OFFSET_FILL),(K!==ne||Y!==oe)&&(e.polygonOffset(ne,oe),K=ne,Y=oe)):pe(e.POLYGON_OFFSET_FILL)}function ae(A){A?j(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ve(A){A===void 0&&(A=e.TEXTURE0+X-1),me!==A&&(e.activeTexture(A),me=A)}function Xe(A,ne,oe){oe===void 0&&(me===null?oe=e.TEXTURE0+X-1:oe=me);let he=_e[oe];he===void 0&&(he={type:void 0,texture:void 0},_e[oe]=he),(he.type!==A||he.texture!==ne)&&(me!==oe&&(e.activeTexture(oe),me=oe),e.bindTexture(A,ne||z[A]),he.type=A,he.texture=ne)}function p(){const A=_e[me];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function l(){try{e.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{e.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{e.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{e.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{e.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{e.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{e.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{e.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(A){nt.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),nt.copy(A))}function Pe(A){je.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),je.copy(A))}function xe(A,ne){let oe=g.get(ne);oe===void 0&&(oe=new WeakMap,g.set(ne,oe));let he=oe.get(A);he===void 0&&(he=e.getUniformBlockIndex(ne,A.name),oe.set(A,he))}function ce(A,ne){const he=g.get(ne).get(A);m.get(ne)!==he&&(e.uniformBlockBinding(ne,he,A.__bindingPointIndex),m.set(ne,he))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),T={},me=null,_e={},_={},M=new WeakMap,S=[],L=null,R=!1,f=null,c=null,D=null,w=null,v=null,U=null,x=null,P=new Je(0,0,0),H=0,h=!1,d=null,b=null,B=null,K=null,Y=null,nt.set(0,0,e.canvas.width,e.canvas.height),je.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:j,disable:pe,bindFramebuffer:ye,drawBuffers:Ee,useProgram:Fe,setBlending:qe,setMaterial:De,setFlipSided:q,setCullFace:F,setLineWidth:Se,setPolygonOffset:ie,setScissorTest:ae,activeTexture:Ve,bindTexture:Xe,unbindTexture:p,compressedTexImage2D:l,compressedTexImage3D:I,texImage2D:Te,texImage3D:te,updateUBOMapping:xe,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:Me,texSubImage2D:k,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:Re,scissor:fe,viewport:Pe,reset:Ie}}function Fu(e,t,n,i,a,r,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Qe,T=new WeakMap;let _;const M=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(p,l){return S?new OffscreenCanvas(p,l):Ho("canvas")}function R(p,l,I){let k=1;const $=Xe(p);if(($.width>I||$.height>I)&&(k=I/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const V=Math.floor(k*$.width),Re=Math.floor(k*$.height);_===void 0&&(_=L(V,Re));const re=l?L(V,Re):_;return re.width=V,re.height=Re,re.getContext("2d").drawImage(p,0,0,V,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+Re+")."),re}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),p;return p}function f(p){return p.generateMipmaps}function c(p){e.generateMipmap(p)}function D(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(p,l,I,k,$=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let V=l;if(l===e.RED&&(I===e.FLOAT&&(V=e.R32F),I===e.HALF_FLOAT&&(V=e.R16F),I===e.UNSIGNED_BYTE&&(V=e.R8)),l===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.R8UI),I===e.UNSIGNED_SHORT&&(V=e.R16UI),I===e.UNSIGNED_INT&&(V=e.R32UI),I===e.BYTE&&(V=e.R8I),I===e.SHORT&&(V=e.R16I),I===e.INT&&(V=e.R32I)),l===e.RG&&(I===e.FLOAT&&(V=e.RG32F),I===e.HALF_FLOAT&&(V=e.RG16F),I===e.UNSIGNED_BYTE&&(V=e.RG8)),l===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RG8UI),I===e.UNSIGNED_SHORT&&(V=e.RG16UI),I===e.UNSIGNED_INT&&(V=e.RG32UI),I===e.BYTE&&(V=e.RG8I),I===e.SHORT&&(V=e.RG16I),I===e.INT&&(V=e.RG32I)),l===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RGB8UI),I===e.UNSIGNED_SHORT&&(V=e.RGB16UI),I===e.UNSIGNED_INT&&(V=e.RGB32UI),I===e.BYTE&&(V=e.RGB8I),I===e.SHORT&&(V=e.RGB16I),I===e.INT&&(V=e.RGB32I)),l===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),I===e.UNSIGNED_INT&&(V=e.RGBA32UI),I===e.BYTE&&(V=e.RGBA8I),I===e.SHORT&&(V=e.RGBA16I),I===e.INT&&(V=e.RGBA32I)),l===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(V=e.R11F_G11F_B10F)),l===e.RGBA){const Re=$?_a:ot.getTransfer(k);I===e.FLOAT&&(V=e.RGBA32F),I===e.HALF_FLOAT&&(V=e.RGBA16F),I===e.UNSIGNED_BYTE&&(V=Re===tt?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(p,l){let I;return p?l===null||l===fn||l===ln?I=e.DEPTH24_STENCIL8:l===Ht?I=e.DEPTH32F_STENCIL8:l===Cn&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===fn||l===ln?I=e.DEPTH_COMPONENT24:l===Ht?I=e.DEPTH_COMPONENT32F:l===Cn&&(I=e.DEPTH_COMPONENT16),I}function U(p,l){return f(p)===!0||p.isFramebufferTexture&&p.minFilter!==$t&&p.minFilter!==Gt?Math.log2(Math.max(l.width,l.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?l.mipmaps.length:1}function x(p){const l=p.target;l.removeEventListener("dispose",x),H(l),l.isVideoTexture&&T.delete(l)}function P(p){const l=p.target;l.removeEventListener("dispose",P),d(l)}function H(p){const l=i.get(p);if(l.__webglInit===void 0)return;const I=p.source,k=M.get(I);if(k){const $=k[l.__cacheKey];$.usedTimes--,$.usedTimes===0&&h(p),Object.keys(k).length===0&&M.delete(I)}i.remove(p)}function h(p){const l=i.get(p);e.deleteTexture(l.__webglTexture);const I=p.source,k=M.get(I);delete k[l.__cacheKey],o.memory.textures--}function d(p){const l=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(l.__webglFramebuffer[k]))for(let $=0;$<l.__webglFramebuffer[k].length;$++)e.deleteFramebuffer(l.__webglFramebuffer[k][$]);else e.deleteFramebuffer(l.__webglFramebuffer[k]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[k])}else{if(Array.isArray(l.__webglFramebuffer))for(let k=0;k<l.__webglFramebuffer.length;k++)e.deleteFramebuffer(l.__webglFramebuffer[k]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let k=0;k<l.__webglColorRenderbuffer.length;k++)l.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[k]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const I=p.textures;for(let k=0,$=I.length;k<$;k++){const V=i.get(I[k]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(I[k])}i.remove(p)}let b=0;function B(){b=0}function K(){const p=b;return p>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+a.maxTextures),b+=1,p}function Y(p){const l=[];return l.push(p.wrapS),l.push(p.wrapT),l.push(p.wrapR||0),l.push(p.magFilter),l.push(p.minFilter),l.push(p.anisotropy),l.push(p.internalFormat),l.push(p.format),l.push(p.type),l.push(p.generateMipmaps),l.push(p.premultiplyAlpha),l.push(p.flipY),l.push(p.unpackAlignment),l.push(p.colorSpace),l.join()}function X(p,l){const I=i.get(p);if(p.isVideoTexture&&ae(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&I.__version!==p.version){const k=p.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(I,p,l);return}}else p.isExternalTexture&&(I.__webglTexture=p.sourceTexture?p.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+l)}function W(p,l){const I=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&I.__version!==p.version){z(I,p,l);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+l)}function ee(p,l){const I=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&I.__version!==p.version){z(I,p,l);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+l)}function G(p,l){const I=i.get(p);if(p.version>0&&I.__version!==p.version){j(I,p,l);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+l)}const me={[Jr]:e.REPEAT,[Qr]:e.CLAMP_TO_EDGE,[$r]:e.MIRRORED_REPEAT},_e={[$t]:e.NEAREST,[ea]:e.NEAREST_MIPMAP_NEAREST,[an]:e.NEAREST_MIPMAP_LINEAR,[Gt]:e.LINEAR,[Tn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},ue={[oo]:e.NEVER,[ao]:e.ALWAYS,[ro]:e.LESS,[ta]:e.LEQUAL,[io]:e.EQUAL,[no]:e.GEQUAL,[to]:e.GREATER,[eo]:e.NOTEQUAL};function Ne(p,l){if(l.type===Ht&&t.has("OES_texture_float_linear")===!1&&(l.magFilter===Gt||l.magFilter===Tn||l.magFilter===an||l.magFilter===Kt||l.minFilter===Gt||l.minFilter===Tn||l.minFilter===an||l.minFilter===Kt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,me[l.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,me[l.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,me[l.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,_e[l.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,_e[l.minFilter]),l.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,ue[l.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===$t||l.minFilter!==an&&l.minFilter!==Kt||l.type===Ht&&t.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(p,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,a.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function nt(p,l){let I=!1;p.__webglInit===void 0&&(p.__webglInit=!0,l.addEventListener("dispose",x));const k=l.source;let $=M.get(k);$===void 0&&($={},M.set(k,$));const V=Y(l);if(V!==p.__cacheKey){$[V]===void 0&&($[V]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[V].usedTimes++;const Re=$[p.__cacheKey];Re!==void 0&&($[p.__cacheKey].usedTimes--,Re.usedTimes===0&&h(l)),p.__cacheKey=V,p.__webglTexture=$[V].texture}return I}function je(p,l,I){return Math.floor(Math.floor(p/I)/l)}function He(p,l,I,k){const V=p.updateRanges;if(V.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,l.width,l.height,I,k,l.data);else{V.sort((te,fe)=>te.start-fe.start);let Re=0;for(let te=1;te<V.length;te++){const fe=V[Re],Pe=V[te],xe=fe.start+fe.count,ce=je(Pe.start,l.width,4),Ie=je(fe.start,l.width,4);Pe.start<=xe+1&&ce===Ie&&je(Pe.start+Pe.count-1,l.width,4)===ce?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Re,V[Re]=Pe)}V.length=Re+1;const re=e.getParameter(e.UNPACK_ROW_LENGTH),Me=e.getParameter(e.UNPACK_SKIP_PIXELS),Te=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,l.width);for(let te=0,fe=V.length;te<fe;te++){const Pe=V[te],xe=Math.floor(Pe.start/4),ce=Math.ceil(Pe.count/4),Ie=xe%l.width,A=Math.floor(xe/l.width),ne=ce,oe=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),e.pixelStorei(e.UNPACK_SKIP_ROWS,A),n.texSubImage2D(e.TEXTURE_2D,0,Ie,A,ne,oe,I,k,l.data)}p.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,re),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Me),e.pixelStorei(e.UNPACK_SKIP_ROWS,Te)}}function z(p,l,I){let k=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(k=e.TEXTURE_3D);const $=nt(p,l),V=l.source;n.bindTexture(k,p.__webglTexture,e.TEXTURE0+I);const Re=i.get(V);if(V.version!==Re.__version||$===!0){n.activeTexture(e.TEXTURE0+I);const re=ot.getPrimaries(ot.workingColorSpace),Me=l.colorSpace===Ft?null:ot.getPrimaries(l.colorSpace),Te=l.colorSpace===Ft||re===Me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=R(l.image,!1,a.maxTextureSize);te=Ve(l,te);const fe=r.convert(l.format,l.colorSpace),Pe=r.convert(l.type);let xe=w(l.internalFormat,fe,Pe,l.colorSpace,l.isVideoTexture);Ne(k,l);let ce;const Ie=l.mipmaps,A=l.isVideoTexture!==!0,ne=Re.__version===void 0||$===!0,oe=V.dataReady,he=U(l,te);if(l.isDepthTexture)xe=v(l.format===Rn,l.type),ne&&(A?n.texStorage2D(e.TEXTURE_2D,1,xe,te.width,te.height):n.texImage2D(e.TEXTURE_2D,0,xe,te.width,te.height,0,fe,Pe,null));else if(l.isDataTexture)if(Ie.length>0){A&&ne&&n.texStorage2D(e.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let Q=0,Z=Ie.length;Q<Z;Q++)ce=Ie[Q],A?oe&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ce.width,ce.height,fe,Pe,ce.data):n.texImage2D(e.TEXTURE_2D,Q,xe,ce.width,ce.height,0,fe,Pe,ce.data);l.generateMipmaps=!1}else A?(ne&&n.texStorage2D(e.TEXTURE_2D,he,xe,te.width,te.height),oe&&He(l,te,fe,Pe)):n.texImage2D(e.TEXTURE_2D,0,xe,te.width,te.height,0,fe,Pe,te.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){A&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,xe,Ie[0].width,Ie[0].height,te.depth);for(let Q=0,Z=Ie.length;Q<Z;Q++)if(ce=Ie[Q],l.format!==Ct)if(fe!==null)if(A){if(oe)if(l.layerUpdates.size>0){const ve=ar(ce.width,ce.height,l.format,l.type);for(const Ue of l.layerUpdates){const $e=ce.data.subarray(Ue*ve/ce.data.BYTES_PER_ELEMENT,(Ue+1)*ve/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,Ue,ce.width,ce.height,1,fe,$e)}l.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,fe,ce.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,xe,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?oe&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,fe,Pe,ce.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,xe,ce.width,ce.height,te.depth,0,fe,Pe,ce.data)}else{A&&ne&&n.texStorage2D(e.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let Q=0,Z=Ie.length;Q<Z;Q++)ce=Ie[Q],l.format!==Ct?fe!==null?A?oe&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,ce.width,ce.height,fe,ce.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?oe&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ce.width,ce.height,fe,Pe,ce.data):n.texImage2D(e.TEXTURE_2D,Q,xe,ce.width,ce.height,0,fe,Pe,ce.data)}else if(l.isDataArrayTexture)if(A){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,he,xe,te.width,te.height,te.depth),oe)if(l.layerUpdates.size>0){const Q=ar(te.width,te.height,l.format,l.type);for(const Z of l.layerUpdates){const ve=te.data.subarray(Z*Q/te.data.BYTES_PER_ELEMENT,(Z+1)*Q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,fe,Pe,ve)}l.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(l.isData3DTexture)A?(ne&&n.texStorage3D(e.TEXTURE_3D,he,xe,te.width,te.height,te.depth),oe&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Pe,te.data)):n.texImage3D(e.TEXTURE_3D,0,xe,te.width,te.height,te.depth,0,fe,Pe,te.data);else if(l.isFramebufferTexture){if(ne)if(A)n.texStorage2D(e.TEXTURE_2D,he,xe,te.width,te.height);else{let Q=te.width,Z=te.height;for(let ve=0;ve<he;ve++)n.texImage2D(e.TEXTURE_2D,ve,xe,Q,Z,0,fe,Pe,null),Q>>=1,Z>>=1}}else if(Ie.length>0){if(A&&ne){const Q=Xe(Ie[0]);n.texStorage2D(e.TEXTURE_2D,he,xe,Q.width,Q.height)}for(let Q=0,Z=Ie.length;Q<Z;Q++)ce=Ie[Q],A?oe&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,fe,Pe,ce):n.texImage2D(e.TEXTURE_2D,Q,xe,fe,Pe,ce);l.generateMipmaps=!1}else if(A){if(ne){const Q=Xe(te);n.texStorage2D(e.TEXTURE_2D,he,xe,Q.width,Q.height)}oe&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,fe,Pe,te)}else n.texImage2D(e.TEXTURE_2D,0,xe,fe,Pe,te);f(l)&&c(k),Re.__version=V.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function j(p,l,I){if(l.image.length!==6)return;const k=nt(p,l),$=l.source;n.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+I);const V=i.get($);if($.version!==V.__version||k===!0){n.activeTexture(e.TEXTURE0+I);const Re=ot.getPrimaries(ot.workingColorSpace),re=l.colorSpace===Ft?null:ot.getPrimaries(l.colorSpace),Me=l.colorSpace===Ft||Re===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Te=l.isCompressedTexture||l.image[0].isCompressedTexture,te=l.image[0]&&l.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Te&&!te?fe[Z]=R(l.image[Z],!0,a.maxCubemapSize):fe[Z]=te?l.image[Z].image:l.image[Z],fe[Z]=Ve(l,fe[Z]);const Pe=fe[0],xe=r.convert(l.format,l.colorSpace),ce=r.convert(l.type),Ie=w(l.internalFormat,xe,ce,l.colorSpace),A=l.isVideoTexture!==!0,ne=V.__version===void 0||k===!0,oe=$.dataReady;let he=U(l,Pe);Ne(e.TEXTURE_CUBE_MAP,l);let Q;if(Te){A&&ne&&n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ie,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){Q=fe[Z].mipmaps;for(let ve=0;ve<Q.length;ve++){const Ue=Q[ve];l.format!==Ct?xe!==null?A?oe&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ue.width,Ue.height,xe,Ue.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ie,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?oe&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ue.width,Ue.height,xe,ce,Ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ie,Ue.width,Ue.height,0,xe,ce,Ue.data)}}}else{if(Q=l.mipmaps,A&&ne){Q.length>0&&he++;const Z=Xe(fe[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ie,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){A?oe&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,xe,ce,fe[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,fe[Z].width,fe[Z].height,0,xe,ce,fe[Z].data);for(let ve=0;ve<Q.length;ve++){const $e=Q[ve].image[Z].image;A?oe&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,$e.width,$e.height,xe,ce,$e.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ie,$e.width,$e.height,0,xe,ce,$e.data)}}else{A?oe&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe,ce,fe[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,xe,ce,fe[Z]);for(let ve=0;ve<Q.length;ve++){const Ue=Q[ve];A?oe&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,xe,ce,Ue.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ie,xe,ce,Ue.image[Z])}}}f(l)&&c(e.TEXTURE_CUBE_MAP),V.__version=$.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function pe(p,l,I,k,$,V){const Re=r.convert(I.format,I.colorSpace),re=r.convert(I.type),Me=w(I.internalFormat,Re,re,I.colorSpace),Te=i.get(l),te=i.get(I);if(te.__renderTarget=l,!Te.__hasExternalTextures){const fe=Math.max(1,l.width>>V),Pe=Math.max(1,l.height>>V);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,V,Me,fe,Pe,l.depth,0,Re,re,null):n.texImage2D($,V,Me,fe,Pe,0,Re,re,null)}n.bindFramebuffer(e.FRAMEBUFFER,p),ie(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,$,te.__webglTexture,0,Se(l)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,$,te.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(p,l,I){if(e.bindRenderbuffer(e.RENDERBUFFER,p),l.depthBuffer){const k=l.depthTexture,$=k&&k.isDepthTexture?k.type:null,V=v(l.stencilBuffer,$),Re=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Se(l);ie(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,V,l.width,l.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,V,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,V,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Re,e.RENDERBUFFER,p)}else{const k=l.textures;for(let $=0;$<k.length;$++){const V=k[$],Re=r.convert(V.format,V.colorSpace),re=r.convert(V.type),Me=w(V.internalFormat,Re,re,V.colorSpace),Te=Se(l);I&&ie(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,Me,l.width,l.height):ie(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te,Me,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,Me,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(p,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,p),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(l.depthTexture);k.__renderTarget=l,(!k.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),X(l.depthTexture,0);const $=k.__webglTexture,V=Se(l);if(l.depthTexture.format===_i)ie(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(l.depthTexture.format===Rn)ie(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Fe(p){const l=i.get(p),I=p.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==p.depthTexture){const k=p.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),k){const $=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),l.__depthDisposeCallback=$}l.__boundDepthTexture=k}if(p.depthTexture&&!l.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const k=p.texture.mipmaps;k&&k.length>0?Ee(l.__webglFramebuffer[0],p):Ee(l.__webglFramebuffer,p)}else if(I){l.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[k]),l.__webglDepthbuffer[k]===void 0)l.__webglDepthbuffer[k]=e.createRenderbuffer(),ye(l.__webglDepthbuffer[k],p,!1);else{const $=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=l.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,V)}}else{const k=p.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),ye(l.__webglDepthbuffer,p,!1);else{const $=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,V)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function st(p,l,I){const k=i.get(p);l!==void 0&&pe(k.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Fe(p)}function E(p){const l=p.texture,I=i.get(p),k=i.get(l);p.addEventListener("dispose",P);const $=p.textures,V=p.isWebGLCubeRenderTarget===!0,Re=$.length>1;if(Re||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=l.version,o.memory.textures++),V){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let Me=0;Me<l.mipmaps.length;Me++)I.__webglFramebuffer[re][Me]=e.createFramebuffer()}else I.__webglFramebuffer[re]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<l.mipmaps.length;re++)I.__webglFramebuffer[re]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Re)for(let re=0,Me=$.length;re<Me;re++){const Te=i.get($[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=e.createTexture(),o.memory.textures++)}if(p.samples>0&&ie(p)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const Me=$[re];I.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[re]);const Te=r.convert(Me.format,Me.colorSpace),te=r.convert(Me.type),fe=w(Me.internalFormat,Te,te,Me.colorSpace,p.isXRRenderTarget===!0),Pe=Se(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe,fe,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,I.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(I.__webglDepthRenderbuffer,p,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Ne(e.TEXTURE_CUBE_MAP,l);for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0)for(let Me=0;Me<l.mipmaps.length;Me++)pe(I.__webglFramebuffer[re][Me],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me);else pe(I.__webglFramebuffer[re],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(l)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let re=0,Me=$.length;re<Me;re++){const Te=$[re],te=i.get(Te);let fe=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(fe=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),Ne(fe,Te),pe(I.__webglFramebuffer,p,Te,e.COLOR_ATTACHMENT0+re,fe,0),f(Te)&&c(fe)}n.unbindTexture()}else{let re=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(re=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(re,k.__webglTexture),Ne(re,l),l.mipmaps&&l.mipmaps.length>0)for(let Me=0;Me<l.mipmaps.length;Me++)pe(I.__webglFramebuffer[Me],p,l,e.COLOR_ATTACHMENT0,re,Me);else pe(I.__webglFramebuffer,p,l,e.COLOR_ATTACHMENT0,re,0);f(l)&&c(re),n.unbindTexture()}p.depthBuffer&&Fe(p)}function qe(p){const l=p.textures;for(let I=0,k=l.length;I<k;I++){const $=l[I];if(f($)){const V=D(p),Re=i.get($).__webglTexture;n.bindTexture(V,Re),c(V),n.unbindTexture()}}}const De=[],q=[];function F(p){if(p.samples>0){if(ie(p)===!1){const l=p.textures,I=p.width,k=p.height;let $=e.COLOR_BUFFER_BIT;const V=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Re=i.get(p),re=l.length>1;if(re)for(let Te=0;Te<l.length;Te++)n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Me=p.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Te=0;Te<l.length;Te++){if(p.resolveDepthBuffer&&(p.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);const te=i.get(l[Te]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,I,k,0,0,I,k,$,e.NEAREST),m===!0&&(De.length=0,q.length=0,De.push(e.COLOR_ATTACHMENT0+Te),p.depthBuffer&&p.resolveDepthBuffer===!1&&(De.push(V),q.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,q)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<l.length;Te++){n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);const te=i.get(l[Te]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,te,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&m){const l=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function Se(p){return Math.min(a.maxSamples,p.samples)}function ie(p){const l=i.get(p);return p.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function ae(p){const l=o.render.frame;T.get(p)!==l&&(T.set(p,l),p.update())}function Ve(p,l){const I=p.colorSpace,k=p.format,$=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||I!==In&&I!==Ft&&(ot.getTransfer(I)===tt?(k!==Ct||$!==zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),l}function Xe(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(g.width=p.naturalWidth||p.width,g.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(g.width=p.displayWidth,g.height=p.displayHeight):(g.width=p.width,g.height=p.height),g}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=st,this.setupRenderTarget=E,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ie}function Bu(e,t){function n(i,a=Ft){let r;const o=ot.getTransfer(a);if(i===zt)return e.UNSIGNED_BYTE;if(i===ra)return e.UNSIGNED_SHORT_4_4_4_4;if(i===aa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===fo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===uo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===po)return e.BYTE;if(i===ho)return e.SHORT;if(i===Cn)return e.UNSIGNED_SHORT;if(i===ca)return e.INT;if(i===fn)return e.UNSIGNED_INT;if(i===Ht)return e.FLOAT;if(i===Un)return e.HALF_FLOAT;if(i===mo)return e.ALPHA;if(i===_o)return e.RGB;if(i===Ct)return e.RGBA;if(i===_i)return e.DEPTH_COMPONENT;if(i===Rn)return e.DEPTH_STENCIL;if(i===go)return e.RED;if(i===la)return e.RED_INTEGER;if(i===vo)return e.RG;if(i===fa)return e.RG_INTEGER;if(i===ua)return e.RGBA_INTEGER;if(i===Hn||i===Vn||i===kn||i===zn)if(o===tt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bi||i===Ci||i===wi||i===yi)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ci)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pi||i===Li||i===Di)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pi||i===Li)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Di)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ui||i===Ii||i===Ni||i===Oi||i===Fi||i===Bi||i===Gi||i===Hi||i===Vi||i===ki||i===zi||i===Wi||i===Xi||i===Yi)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ui)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ii)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ni)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ki)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yi)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ki||i===qi||i===Zi)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ki)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ji||i===$i||i===Qi||i===Ji)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ji)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$i)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ji)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ln?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Gu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hu=`
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

}`;class Vu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new oa(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Wt({vertexShader:Gu,fragmentShader:Hu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ku extends Ia{constructor(t,n){super();const i=this;let a=null,r=1,o=null,s="local-floor",m=1,g=null,T=null,_=null,M=null,S=null,L=null;const R=typeof XRWebGLBinding<"u",f=new Vu,c={},D=n.getContextAttributes();let w=null,v=null;const U=[],x=[],P=new Qe;let H=null;const h=new jt;h.viewport=new mt;const d=new jt;d.viewport=new mt;const b=[h,d],B=new Na;let K=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=U[z];return j===void 0&&(j=new Gn,U[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=U[z];return j===void 0&&(j=new Gn,U[z]=j),j.getGripSpace()},this.getHand=function(z){let j=U[z];return j===void 0&&(j=new Gn,U[z]=j),j.getHandSpace()};function X(z){const j=x.indexOf(z.inputSource);if(j===-1)return;const pe=U[j];pe!==void 0&&(pe.update(z.inputSource,z.frame,g||o),pe.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ee);for(let z=0;z<U.length;z++){const j=x[z];j!==null&&(x[z]=null,U[z].disconnect(j))}K=null,Y=null,f.reset();for(const z in c)delete c[z];t.setRenderTarget(w),S=null,M=null,_=null,a=null,v=null,He.stop(),i.isPresenting=!1,t.setPixelRatio(H),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||o},this.setReferenceSpace=function(z){g=z},this.getBaseLayer=function(){return M!==null?M:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return L},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(w=t.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ee),D.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ye=null,Ee=null;D.depth&&(Ee=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=D.stencil?Rn:_i,ye=D.stencil?ln:fn);const Fe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};_=this.getBinding(),M=_.createProjectionLayer(Fe),a.updateRenderState({layers:[M]}),t.setPixelRatio(1),t.setSize(M.textureWidth,M.textureHeight,!1),v=new Jt(M.textureWidth,M.textureHeight,{format:Ct,type:zt,depthTexture:new jr(M.textureWidth,M.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const pe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(a,n,pe),a.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),v=new Jt(S.framebufferWidth,S.framebufferHeight,{format:Ct,type:zt,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(m),g=null,o=await a.requestReferenceSpace(s),He.setContext(a),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ee(z){for(let j=0;j<z.removed.length;j++){const pe=z.removed[j],ye=x.indexOf(pe);ye>=0&&(x[ye]=null,U[ye].disconnect(pe))}for(let j=0;j<z.added.length;j++){const pe=z.added[j];let ye=x.indexOf(pe);if(ye===-1){for(let Fe=0;Fe<U.length;Fe++)if(Fe>=x.length){x.push(pe),ye=Fe;break}else if(x[Fe]===null){x[Fe]=pe,ye=Fe;break}if(ye===-1)break}const Ee=U[ye];Ee&&Ee.connect(pe)}}const G=new Ae,me=new Ae;function _e(z,j,pe){G.setFromMatrixPosition(j.matrixWorld),me.setFromMatrixPosition(pe.matrixWorld);const ye=G.distanceTo(me),Ee=j.projectionMatrix.elements,Fe=pe.projectionMatrix.elements,st=Ee[14]/(Ee[10]-1),E=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],De=(Ee[9]-1)/Ee[5],q=(Ee[8]-1)/Ee[0],F=(Fe[8]+1)/Fe[0],Se=st*q,ie=st*F,ae=ye/(-q+F),Ve=ae*-q;if(j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ve),z.translateZ(ae),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Ee[10]===-1)z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Xe=st+ae,p=E+ae,l=Se-Ve,I=ie+(ye-Ve),k=qe*E/p*Xe,$=De*E/p*Xe;z.projectionMatrix.makePerspective(l,I,k,$,Xe,p),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ue(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let j=z.near,pe=z.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(pe=f.depthFar)),B.near=d.near=h.near=j,B.far=d.far=h.far=pe,(K!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,Y=B.far),B.layers.mask=z.layers.mask|6,h.layers.mask=B.layers.mask&3,d.layers.mask=B.layers.mask&5;const ye=z.parent,Ee=B.cameras;ue(B,ye);for(let Fe=0;Fe<Ee.length;Fe++)ue(Ee[Fe],ye);Ee.length===2?_e(B,h,d):B.projectionMatrix.copy(h.projectionMatrix),Ne(z,B,ye)};function Ne(z,j,pe){pe===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(pe.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Oa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(M===null&&S===null))return m},this.setFoveation=function(z){m=z,M!==null&&(M.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(z){return c[z]};let nt=null;function je(z,j){if(T=j.getViewerPose(g||o),L=j,T!==null){const pe=T.views;S!==null&&(t.setRenderTargetFramebuffer(v,S.framebuffer),t.setRenderTarget(v));let ye=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let E=0;E<pe.length;E++){const qe=pe[E];let De=null;if(S!==null)De=S.getViewport(qe);else{const F=_.getViewSubImage(M,qe);De=F.viewport,E===0&&(t.setRenderTargetTextures(v,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(v))}let q=b[E];q===void 0&&(q=new jt,q.layers.enable(E),q.viewport=new mt,b[E]=q),q.matrix.fromArray(qe.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(qe.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(De.x,De.y,De.width,De.height),E===0&&(B.matrix.copy(q.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(q)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){_=i.getBinding();const E=_.getDepthInformation(pe[0]);E&&E.isValid&&E.texture&&f.init(E,a.renderState)}if(Ee&&Ee.includes("camera-access")&&R){t.state.unbindTexture(),_=i.getBinding();for(let E=0;E<pe.length;E++){const qe=pe[E].camera;if(qe){let De=c[qe];De||(De=new oa,c[qe]=De);const q=_.getCameraImage(qe);De.sourceTexture=q}}}}for(let pe=0;pe<U.length;pe++){const ye=x[pe],Ee=U[pe];ye!==null&&Ee!==void 0&&Ee.update(ye,j,g||o)}nt&&nt(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),L=null}const He=new Ea;He.setAnimationLoop(je),this.setAnimationLoop=function(z){nt=z},this.dispose=function(){}}}const Nt=new ma,zu=new kt;function Wu(e,t){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,pa(e)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function a(f,c,D,w,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(f,c):c.isMeshToonMaterial?(r(f,c),_(f,c)):c.isMeshPhongMaterial?(r(f,c),T(f,c)):c.isMeshStandardMaterial?(r(f,c),M(f,c),c.isMeshPhysicalMaterial&&S(f,c,v)):c.isMeshMatcapMaterial?(r(f,c),L(f,c)):c.isMeshDepthMaterial?r(f,c):c.isMeshDistanceMaterial?(r(f,c),R(f,c)):c.isMeshNormalMaterial?r(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?m(f,c,D,w):c.isSpriteMaterial?g(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===At&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===At&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const D=t.get(c),w=D.envMap,v=D.envMapRotation;w&&(f.envMap.value=w,Nt.copy(v),Nt.x*=-1,Nt.y*=-1,Nt.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Nt.y*=-1,Nt.z*=-1),f.envMapRotation.value.setFromMatrix4(zu.makeRotationFromEuler(Nt)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function m(f,c,D,w){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*D,f.scale.value=w*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function g(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function T(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function _(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function M(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function S(f,c,D){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===At&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=D.texture,f.transmissionSamplerSize.value.set(D.width,D.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function L(f,c){c.matcap&&(f.matcap.value=c.matcap)}function R(f,c){const D=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(D.matrixWorld),f.nearDistance.value=D.shadow.camera.near,f.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Xu(e,t,n,i){let a={},r={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,w){const v=w.program;i.uniformBlockBinding(D,v)}function g(D,w){let v=a[D.id];v===void 0&&(L(D),v=T(D),a[D.id]=v,D.addEventListener("dispose",f));const U=w.program;i.updateUBOMapping(D,U);const x=t.render.frame;r[D.id]!==x&&(M(D),r[D.id]=x)}function T(D){const w=_();D.__bindingPointIndex=w;const v=e.createBuffer(),U=D.__size,x=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,U,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,v),v}function _(){for(let D=0;D<s;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(D){const w=a[D.id],v=D.uniforms,U=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let x=0,P=v.length;x<P;x++){const H=Array.isArray(v[x])?v[x]:[v[x]];for(let h=0,d=H.length;h<d;h++){const b=H[h];if(S(b,x,h,U)===!0){const B=b.__offset,K=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let X=0;X<K.length;X++){const W=K[X],ee=R(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function S(D,w,v,U){const x=D.value,P=w+"_"+v;if(U[P]===void 0)return typeof x=="number"||typeof x=="boolean"?U[P]=x:U[P]=x.clone(),!0;{const H=U[P];if(typeof x=="number"||typeof x=="boolean"){if(H!==x)return U[P]=x,!0}else if(H.equals(x)===!1)return H.copy(x),!0}return!1}function L(D){const w=D.uniforms;let v=0;const U=16;for(let P=0,H=w.length;P<H;P++){const h=Array.isArray(w[P])?w[P]:[w[P]];for(let d=0,b=h.length;d<b;d++){const B=h[d],K=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,X=K.length;Y<X;Y++){const W=K[Y],ee=R(W),G=v%U,me=G%ee.boundary,_e=G+me;v+=me,_e!==0&&U-_e<ee.storage&&(v+=U-_e),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ee.storage}}}const x=v%U;return x>0&&(v+=U-x),D.__size=v,D.__cache={},this}function R(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),w}function f(D){const w=D.target;w.removeEventListener("dispose",f);const v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),e.deleteBuffer(a[w.id]),delete a[w.id],delete r[w.id]}function c(){for(const D in a)e.deleteBuffer(a[D]);o=[],a={},r={}}return{bind:m,update:g,dispose:c}}class Yu{constructor(t={}){const{canvas:n=Da(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:T="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:M=!1}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const L=new Uint32Array(4),R=new Int32Array(4);let f=null,c=null;const D=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let U=!1;this._outputColorSpace=mi;let x=0,P=0,H=null,h=-1,d=null;const b=new mt,B=new mt;let K=null;const Y=new Je(0);let X=0,W=n.width,ee=n.height,G=1,me=null,_e=null;const ue=new mt(0,0,W,ee),Ne=new mt(0,0,W,ee);let nt=!1;const je=new qr;let He=!1,z=!1;const j=new kt,pe=new Ae,ye=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function st(){return H===null?G:1}let E=i;function qe(u,C){return n.getContext(u,C)}try{const u={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:T,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zr}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Q,!1),E===null){const C="webgl2";if(E=qe(C,u),E===null)throw qe(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let De,q,F,Se,ie,ae,Ve,Xe,p,l,I,k,$,V,Re,re,Me,Te,te,fe,Pe,xe,ce,Ie;function A(){De=new tf(E),De.init(),xe=new Bu(E,De),q=new ql(E,De,t,xe),F=new Ou(E,De),q.reversedDepthBuffer&&M&&F.buffers.depth.setReversed(!0),Se=new af(E),ie=new xu,ae=new Fu(E,De,F,ie,q,xe,Se),Ve=new jl(v),Xe=new ef(v),p=new fs(E),ce=new Yl(E,p),l=new nf(E,p,Se,ce),I=new sf(E,l,p,Se),te=new of(E,q,ae),re=new Zl(ie),k=new Tu(v,Ve,Xe,De,q,ce,re),$=new Wu(v,ie),V=new Ru,Re=new Lu(De),Te=new Xl(v,Ve,Xe,F,I,S,m),Me=new Iu(v,I,q),Ie=new Xu(E,Se,q,F),fe=new Kl(E,De,Se),Pe=new rf(E,De,Se),Se.programs=k.programs,v.capabilities=q,v.extensions=De,v.properties=ie,v.renderLists=V,v.shadowMap=Me,v.state=F,v.info=Se}A();const ne=new ku(v,E);this.xr=ne,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const u=De.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=De.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(u){u!==void 0&&(G=u,this.setSize(W,ee,!1))},this.getSize=function(u){return u.set(W,ee)},this.setSize=function(u,C,N=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=u,ee=C,n.width=Math.floor(u*G),n.height=Math.floor(C*G),N===!0&&(n.style.width=u+"px",n.style.height=C+"px"),this.setViewport(0,0,u,C)},this.getDrawingBufferSize=function(u){return u.set(W*G,ee*G).floor()},this.setDrawingBufferSize=function(u,C,N){W=u,ee=C,G=N,n.width=Math.floor(u*N),n.height=Math.floor(C*N),this.setViewport(0,0,u,C)},this.getCurrentViewport=function(u){return u.copy(b)},this.getViewport=function(u){return u.copy(ue)},this.setViewport=function(u,C,N,O){u.isVector4?ue.set(u.x,u.y,u.z,u.w):ue.set(u,C,N,O),F.viewport(b.copy(ue).multiplyScalar(G).round())},this.getScissor=function(u){return u.copy(Ne)},this.setScissor=function(u,C,N,O){u.isVector4?Ne.set(u.x,u.y,u.z,u.w):Ne.set(u,C,N,O),F.scissor(B.copy(Ne).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(u){F.setScissorTest(nt=u)},this.setOpaqueSort=function(u){me=u},this.setTransparentSort=function(u){_e=u},this.getClearColor=function(u){return u.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(u=!0,C=!0,N=!0){let O=0;if(u){let y=!1;if(H!==null){const J=H.texture.format;y=J===ua||J===fa||J===la}if(y){const J=H.texture.type,le=J===zt||J===fn||J===Cn||J===ln||J===ra||J===aa,ge=Te.getClearColor(),de=Te.getClearAlpha(),we=ge.r,Le=ge.g,be=ge.b;le?(L[0]=we,L[1]=Le,L[2]=be,L[3]=de,E.clearBufferuiv(E.COLOR,0,L)):(R[0]=we,R[1]=Le,R[2]=be,R[3]=de,E.clearBufferiv(E.COLOR,0,R))}else O|=E.COLOR_BUFFER_BIT}C&&(O|=E.DEPTH_BUFFER_BIT),N&&(O|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Q,!1),Te.dispose(),V.dispose(),Re.dispose(),ie.dispose(),Ve.dispose(),Xe.dispose(),I.dispose(),ce.dispose(),Ie.dispose(),k.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rt),ne.removeEventListener("sessionend",Ei),Lt.stop()};function oe(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const u=Se.autoReset,C=Me.enabled,N=Me.autoUpdate,O=Me.needsUpdate,y=Me.type;A(),Se.autoReset=u,Me.enabled=C,Me.autoUpdate=N,Me.needsUpdate=O,Me.type=y}function Q(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Z(u){const C=u.target;C.removeEventListener("dispose",Z),ve(C)}function ve(u){Ue(u),ie.remove(u)}function Ue(u){const C=ie.get(u).programs;C!==void 0&&(C.forEach(function(N){k.releaseProgram(N)}),u.isShaderMaterial&&k.releaseShaderCache(u))}this.renderBufferDirect=function(u,C,N,O,y,J){C===null&&(C=Ee);const le=y.isMesh&&y.matrixWorld.determinant()<0,ge=ba(u,C,N,O,y);F.setMaterial(O,le);let de=N.index,we=1;if(O.wireframe===!0){if(de=l.getWireframeAttribute(N),de===void 0)return;we=2}const Le=N.drawRange,be=N.attributes.position;let Ge=Le.start*we,Ye=(Le.start+Le.count)*we;J!==null&&(Ge=Math.max(Ge,J.start*we),Ye=Math.min(Ye,(J.start+J.count)*we)),de!==null?(Ge=Math.max(Ge,0),Ye=Math.min(Ye,de.count)):be!=null&&(Ge=Math.max(Ge,0),Ye=Math.min(Ye,be.count));const at=Ye-Ge;if(at<0||at===1/0)return;ce.setup(y,O,ge,N,de);let et,Ze=fe;if(de!==null&&(et=p.get(de),Ze=Pe,Ze.setIndex(et)),y.isMesh)O.wireframe===!0?(F.setLineWidth(O.wireframeLinewidth*st()),Ze.setMode(E.LINES)):Ze.setMode(E.TRIANGLES);else if(y.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),F.setLineWidth(Ce*st()),y.isLineSegments?Ze.setMode(E.LINES):y.isLineLoop?Ze.setMode(E.LINE_LOOP):Ze.setMode(E.LINE_STRIP)}else y.isPoints?Ze.setMode(E.POINTS):y.isSprite&&Ze.setMode(E.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ze.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else{const Ce=y._multiDrawStarts,it=y._multiDrawCounts,ke=y._multiDrawCount,gt=de?p.get(de).bytesPerElement:1,Xt=ie.get(O).currentProgram.getUniforms();for(let vt=0;vt<ke;vt++)Xt.setValue(E,"_gl_DrawID",vt),Ze.render(Ce[vt]/gt,it[vt])}else if(y.isInstancedMesh)Ze.renderInstances(Ge,at,y.count);else if(N.isInstancedBufferGeometry){const Ce=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,it=Math.min(N.instanceCount,Ce);Ze.renderInstances(Ge,at,it)}else Ze.render(Ge,at)};function $e(u,C,N){u.transparent===!0&&u.side===Et&&u.forceSinglePass===!1?(u.side=At,u.needsUpdate=!0,hn(u,C,N),u.side=cn,u.needsUpdate=!0,hn(u,C,N),u.side=Et):hn(u,C,N)}this.compile=function(u,C,N=null){N===null&&(N=u),c=Re.get(N),c.init(C),w.push(c),N.traverseVisible(function(y){y.isLight&&y.layers.test(C.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),u!==N&&u.traverseVisible(function(y){y.isLight&&y.layers.test(C.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),c.setupLights();const O=new Set;return u.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;const J=y.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const ge=J[le];$e(ge,N,y),O.add(ge)}else $e(J,N,y),O.add(J)}),c=w.pop(),O},this.compileAsync=function(u,C,N=null){const O=this.compile(u,C,N);return new Promise(y=>{function J(){if(O.forEach(function(le){ie.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){y(u);return}setTimeout(J,10)}De.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let We=null;function wt(u){We&&We(u)}function Rt(){Lt.stop()}function Ei(){Lt.start()}const Lt=new Ea;Lt.setAnimationLoop(wt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(u){We=u,ne.setAnimationLoop(u),u===null?Lt.stop():Lt.start()},ne.addEventListener("sessionstart",Rt),ne.addEventListener("sessionend",Ei),this.render=function(u,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),u.isScene===!0&&u.onBeforeRender(v,u,C,H),c=Re.get(u,w.length),c.init(C),w.push(c),j.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),je.setFromProjectionMatrix(j,Ri,C.reversedDepth),z=this.localClippingEnabled,He=re.init(this.clippingPlanes,z),f=V.get(u,D.length),f.init(),D.push(f),ne.enabled===!0&&ne.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&Fn(J,C,-1/0,v.sortObjects)}Fn(u,C,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(me,_e),Fe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Fe&&Te.addToRenderList(f,u),this.info.render.frame++,He===!0&&re.beginShadows();const N=c.state.shadowsArray;Me.render(N,u,C),He===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=f.opaque,y=f.transmissive;if(c.setupLights(),C.isArrayCamera){const J=C.cameras;if(y.length>0)for(let le=0,ge=J.length;le<ge;le++){const de=J[le];Mi(O,y,u,de)}Fe&&Te.render(u);for(let le=0,ge=J.length;le<ge;le++){const de=J[le];Si(f,u,de,de.viewport)}}else y.length>0&&Mi(O,y,u,C),Fe&&Te.render(u),Si(f,u,C);H!==null&&P===0&&(ae.updateMultisampleRenderTarget(H),ae.updateRenderTargetMipmap(H)),u.isScene===!0&&u.onAfterRender(v,u,C),ce.resetDefaultState(),h=-1,d=null,w.pop(),w.length>0?(c=w[w.length-1],He===!0&&re.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,D.pop(),D.length>0?f=D[D.length-1]:f=null};function Fn(u,C,N,O){if(u.visible===!1)return;if(u.layers.test(C.layers)){if(u.isGroup)N=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(C);else if(u.isLight)c.pushLight(u),u.castShadow&&c.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||je.intersectsSprite(u)){O&&ye.setFromMatrixPosition(u.matrixWorld).applyMatrix4(j);const le=I.update(u),ge=u.material;ge.visible&&f.push(u,le,ge,N,ye.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||je.intersectsObject(u))){const le=I.update(u),ge=u.material;if(O&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),ye.copy(u.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ye.copy(le.boundingSphere.center)),ye.applyMatrix4(u.matrixWorld).applyMatrix4(j)),Array.isArray(ge)){const de=le.groups;for(let we=0,Le=de.length;we<Le;we++){const be=de[we],Ge=ge[be.materialIndex];Ge&&Ge.visible&&f.push(u,le,Ge,N,ye.z,be)}}else ge.visible&&f.push(u,le,ge,N,ye.z,null)}}const J=u.children;for(let le=0,ge=J.length;le<ge;le++)Fn(J[le],C,N,O)}function Si(u,C,N,O){const y=u.opaque,J=u.transmissive,le=u.transparent;c.setupLightsView(N),He===!0&&re.setGlobalState(v.clippingPlanes,N),O&&F.viewport(b.copy(O)),y.length>0&&pn(y,C,N),J.length>0&&pn(J,C,N),le.length>0&&pn(le,C,N),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Mi(u,C,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[O.id]===void 0&&(c.state.transmissionRenderTarget[O.id]=new Jt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Un:zt,minFilter:Kt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const J=c.state.transmissionRenderTarget[O.id],le=O.viewport||b;J.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),de=v.getActiveCubeFace(),we=v.getActiveMipmapLevel();v.setRenderTarget(J),v.getClearColor(Y),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&Te.render(N);const Le=v.toneMapping;v.toneMapping=Pt;const be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),c.setupLightsView(O),He===!0&&re.setGlobalState(v.clippingPlanes,O),pn(u,N,O),ae.updateMultisampleRenderTarget(J),ae.updateRenderTargetMipmap(J),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ye=0,at=C.length;Ye<at;Ye++){const et=C[Ye],Ze=et.object,Ce=et.geometry,it=et.material,ke=et.group;if(it.side===Et&&Ze.layers.test(O.layers)){const gt=it.side;it.side=At,it.needsUpdate=!0,Ti(Ze,N,O,Ce,it,ke),it.side=gt,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(ae.updateMultisampleRenderTarget(J),ae.updateRenderTargetMipmap(J))}v.setRenderTarget(ge,de,we),v.setClearColor(Y,X),be!==void 0&&(O.viewport=be),v.toneMapping=Le}function pn(u,C,N){const O=C.isScene===!0?C.overrideMaterial:null;for(let y=0,J=u.length;y<J;y++){const le=u[y],ge=le.object,de=le.geometry,we=le.group;let Le=le.material;Le.allowOverride===!0&&O!==null&&(Le=O),ge.layers.test(N.layers)&&Ti(ge,C,N,de,Le,we)}}function Ti(u,C,N,O,y,J){u.onBeforeRender(v,C,N,O,y,J),u.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),y.onBeforeRender(v,C,N,O,u,J),y.transparent===!0&&y.side===Et&&y.forceSinglePass===!1?(y.side=At,y.needsUpdate=!0,v.renderBufferDirect(N,C,O,y,u,J),y.side=cn,y.needsUpdate=!0,v.renderBufferDirect(N,C,O,y,u,J),y.side=Et):v.renderBufferDirect(N,C,O,y,u,J),u.onAfterRender(v,C,N,O,y,J)}function hn(u,C,N){C.isScene!==!0&&(C=Ee);const O=ie.get(u),y=c.state.lights,J=c.state.shadowsArray,le=y.state.version,ge=k.getParameters(u,y.state,J,C,N),de=k.getProgramCacheKey(ge);let we=O.programs;O.environment=u.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(u.isMeshStandardMaterial?Xe:Ve).get(u.envMap||O.environment),O.envMapRotation=O.environment!==null&&u.envMap===null?C.environmentRotation:u.envMapRotation,we===void 0&&(u.addEventListener("dispose",Z),we=new Map,O.programs=we);let Le=we.get(de);if(Le!==void 0){if(O.currentProgram===Le&&O.lightsStateVersion===le)return Ai(u,ge),Le}else ge.uniforms=k.getUniforms(u),u.onBeforeCompile(ge,v),Le=k.acquireProgram(ge,de),we.set(de,Le),O.uniforms=ge.uniforms;const be=O.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(be.clippingPlanes=re.uniform),Ai(u,ge),O.needsLights=wa(u),O.lightsStateVersion=le,O.needsLights&&(be.ambientLightColor.value=y.state.ambient,be.lightProbe.value=y.state.probe,be.directionalLights.value=y.state.directional,be.directionalLightShadows.value=y.state.directionalShadow,be.spotLights.value=y.state.spot,be.spotLightShadows.value=y.state.spotShadow,be.rectAreaLights.value=y.state.rectArea,be.ltc_1.value=y.state.rectAreaLTC1,be.ltc_2.value=y.state.rectAreaLTC2,be.pointLights.value=y.state.point,be.pointLightShadows.value=y.state.pointShadow,be.hemisphereLights.value=y.state.hemi,be.directionalShadowMap.value=y.state.directionalShadowMap,be.directionalShadowMatrix.value=y.state.directionalShadowMatrix,be.spotShadowMap.value=y.state.spotShadowMap,be.spotLightMatrix.value=y.state.spotLightMatrix,be.spotLightMap.value=y.state.spotLightMap,be.pointShadowMap.value=y.state.pointShadowMap,be.pointShadowMatrix.value=y.state.pointShadowMatrix),O.currentProgram=Le,O.uniformsList=null,Le}function xi(u){if(u.uniformsList===null){const C=u.currentProgram.getUniforms();u.uniformsList=An.seqWithValue(C.seq,u.uniforms)}return u.uniformsList}function Ai(u,C){const N=ie.get(u);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function ba(u,C,N,O,y){C.isScene!==!0&&(C=Ee),ae.resetTextureUnits();const J=C.fog,le=O.isMeshStandardMaterial?C.environment:null,ge=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:In,de=(O.isMeshStandardMaterial?Xe:Ve).get(O.envMap||le),we=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Le=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!N.morphAttributes.position,Ge=!!N.morphAttributes.normal,Ye=!!N.morphAttributes.color;let at=Pt;O.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(at=v.toneMapping);const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ze=et!==void 0?et.length:0,Ce=ie.get(O),it=c.state.lights;if(He===!0&&(z===!0||u!==d)){const ut=u===d&&O.id===h;re.setState(O,u,ut)}let ke=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==it.state.version||Ce.outputColorSpace!==ge||y.isBatchedMesh&&Ce.batching===!1||!y.isBatchedMesh&&Ce.batching===!0||y.isBatchedMesh&&Ce.batchingColor===!0&&y.colorTexture===null||y.isBatchedMesh&&Ce.batchingColor===!1&&y.colorTexture!==null||y.isInstancedMesh&&Ce.instancing===!1||!y.isInstancedMesh&&Ce.instancing===!0||y.isSkinnedMesh&&Ce.skinning===!1||!y.isSkinnedMesh&&Ce.skinning===!0||y.isInstancedMesh&&Ce.instancingColor===!0&&y.instanceColor===null||y.isInstancedMesh&&Ce.instancingColor===!1&&y.instanceColor!==null||y.isInstancedMesh&&Ce.instancingMorph===!0&&y.morphTexture===null||y.isInstancedMesh&&Ce.instancingMorph===!1&&y.morphTexture!==null||Ce.envMap!==de||O.fog===!0&&Ce.fog!==J||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==we||Ce.vertexTangents!==Le||Ce.morphTargets!==be||Ce.morphNormals!==Ge||Ce.morphColors!==Ye||Ce.toneMapping!==at||Ce.morphTargetsCount!==Ze)&&(ke=!0):(ke=!0,Ce.__version=O.version);let gt=Ce.currentProgram;ke===!0&&(gt=hn(O,C,y));let Xt=!1,vt=!1,nn=!1;const rt=gt.getUniforms(),Mt=Ce.uniforms;if(F.useProgram(gt.program)&&(Xt=!0,vt=!0,nn=!0),O.id!==h&&(h=O.id,vt=!0),Xt||d!==u){F.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),rt.setValue(E,"projectionMatrix",u.projectionMatrix),rt.setValue(E,"viewMatrix",u.matrixWorldInverse);const dt=rt.map.cameraPosition;dt!==void 0&&dt.setValue(E,pe.setFromMatrixPosition(u.matrixWorld)),q.logarithmicDepthBuffer&&rt.setValue(E,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&rt.setValue(E,"isOrthographic",u.isOrthographicCamera===!0),d!==u&&(d=u,vt=!0,nn=!0)}if(y.isSkinnedMesh){rt.setOptional(E,y,"bindMatrix"),rt.setOptional(E,y,"bindMatrixInverse");const ut=y.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),rt.setValue(E,"boneTexture",ut.boneTexture,ae))}y.isBatchedMesh&&(rt.setOptional(E,y,"batchingTexture"),rt.setValue(E,"batchingTexture",y._matricesTexture,ae),rt.setOptional(E,y,"batchingIdTexture"),rt.setValue(E,"batchingIdTexture",y._indirectTexture,ae),rt.setOptional(E,y,"batchingColorTexture"),y._colorsTexture!==null&&rt.setValue(E,"batchingColorTexture",y._colorsTexture,ae));const Tt=N.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&te.update(y,N,gt),(vt||Ce.receiveShadow!==y.receiveShadow)&&(Ce.receiveShadow=y.receiveShadow,rt.setValue(E,"receiveShadow",y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Mt.envMap.value=de,Mt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(Mt.envMapIntensity.value=C.environmentIntensity),vt&&(rt.setValue(E,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Ca(Mt,nn),J&&O.fog===!0&&$.refreshFogUniforms(Mt,J),$.refreshMaterialUniforms(Mt,O,G,ee,c.state.transmissionRenderTarget[u.id]),An.upload(E,xi(Ce),Mt,ae)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(An.upload(E,xi(Ce),Mt,ae),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&rt.setValue(E,"center",y.center),rt.setValue(E,"modelViewMatrix",y.modelViewMatrix),rt.setValue(E,"normalMatrix",y.normalMatrix),rt.setValue(E,"modelMatrix",y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ut=O.uniformsGroups;for(let dt=0,Bn=ut.length;dt<Bn;dt++){const Dt=ut[dt];Ie.update(Dt,gt),Ie.bind(Dt,gt)}}return gt}function Ca(u,C){u.ambientLightColor.needsUpdate=C,u.lightProbe.needsUpdate=C,u.directionalLights.needsUpdate=C,u.directionalLightShadows.needsUpdate=C,u.pointLights.needsUpdate=C,u.pointLightShadows.needsUpdate=C,u.spotLights.needsUpdate=C,u.spotLightShadows.needsUpdate=C,u.rectAreaLights.needsUpdate=C,u.hemisphereLights.needsUpdate=C}function wa(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(u,C,N){const O=ie.get(u);O.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ie.get(u.texture).__webglTexture=C,ie.get(u.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,C){const N=ie.get(u);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0};const ya=E.createFramebuffer();this.setRenderTarget=function(u,C=0,N=0){H=u,x=C,P=N;let O=!0,y=null,J=!1,le=!1;if(u){const de=ie.get(u);if(de.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(E.FRAMEBUFFER,null),O=!1;else if(de.__webglFramebuffer===void 0)ae.setupRenderTarget(u);else if(de.__hasExternalTextures)ae.rebindTextures(u,ie.get(u.texture).__webglTexture,ie.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const be=u.depthTexture;if(de.__boundDepthTexture!==be){if(be!==null&&ie.has(be)&&(u.width!==be.image.width||u.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(u)}}const we=u.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(le=!0);const Le=ie.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Le[C])?y=Le[C][N]:y=Le[C],J=!0):u.samples>0&&ae.useMultisampledRTT(u)===!1?y=ie.get(u).__webglMultisampledFramebuffer:Array.isArray(Le)?y=Le[N]:y=Le,b.copy(u.viewport),B.copy(u.scissor),K=u.scissorTest}else b.copy(ue).multiplyScalar(G).floor(),B.copy(Ne).multiplyScalar(G).floor(),K=nt;if(N!==0&&(y=ya),F.bindFramebuffer(E.FRAMEBUFFER,y)&&O&&F.drawBuffers(u,y),F.viewport(b),F.scissor(B),F.setScissorTest(K),J){const de=ie.get(u.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,N)}else if(le){const de=C;for(let we=0;we<u.textures.length;we++){const Le=ie.get(u.textures[we]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+we,Le.__webglTexture,N,de)}}else if(u!==null&&N!==0){const de=ie.get(u.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,de.__webglTexture,N)}h=-1},this.readRenderTargetPixels=function(u,C,N,O,y,J,le,ge=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){F.bindFramebuffer(E.FRAMEBUFFER,de);try{const we=u.textures[ge],Le=we.format,be=we.type;if(!q.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=u.width-O&&N>=0&&N<=u.height-y&&(u.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ge),E.readPixels(C,N,O,y,xe.convert(Le),xe.convert(be),J))}finally{const we=H!==null?ie.get(H).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(u,C,N,O,y,J,le,ge=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ie.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(C>=0&&C<=u.width-O&&N>=0&&N<=u.height-y){F.bindFramebuffer(E.FRAMEBUFFER,de);const we=u.textures[ge],Le=we.format,be=we.type;if(!q.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ge),E.bufferData(E.PIXEL_PACK_BUFFER,J.byteLength,E.STREAM_READ),u.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+ge),E.readPixels(C,N,O,y,xe.convert(Le),xe.convert(be),0);const Ye=H!==null?ie.get(H).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Ye);const at=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ua(E,at,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ge),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,J),E.deleteBuffer(Ge),E.deleteSync(at),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,C=null,N=0){const O=Math.pow(2,-N),y=Math.floor(u.image.width*O),J=Math.floor(u.image.height*O),le=C!==null?C.x:0,ge=C!==null?C.y:0;ae.setTexture2D(u,0),E.copyTexSubImage2D(E.TEXTURE_2D,N,0,0,le,ge,y,J),F.unbindTexture()};const Pa=E.createFramebuffer(),La=E.createFramebuffer();this.copyTextureToTexture=function(u,C,N=null,O=null,y=0,J=null){J===null&&(y!==0?(ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=y,y=0):J=0);let le,ge,de,we,Le,be,Ge,Ye,at;const et=u.isCompressedTexture?u.mipmaps[J]:u.image;if(N!==null)le=N.max.x-N.min.x,ge=N.max.y-N.min.y,de=N.isBox3?N.max.z-N.min.z:1,we=N.min.x,Le=N.min.y,be=N.isBox3?N.min.z:0;else{const Tt=Math.pow(2,-y);le=Math.floor(et.width*Tt),ge=Math.floor(et.height*Tt),u.isDataArrayTexture?de=et.depth:u.isData3DTexture?de=Math.floor(et.depth*Tt):de=1,we=0,Le=0,be=0}O!==null?(Ge=O.x,Ye=O.y,at=O.z):(Ge=0,Ye=0,at=0);const Ze=xe.convert(C.format),Ce=xe.convert(C.type);let it;C.isData3DTexture?(ae.setTexture3D(C,0),it=E.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(ae.setTexture2DArray(C,0),it=E.TEXTURE_2D_ARRAY):(ae.setTexture2D(C,0),it=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,C.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,C.unpackAlignment);const ke=E.getParameter(E.UNPACK_ROW_LENGTH),gt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Xt=E.getParameter(E.UNPACK_SKIP_PIXELS),vt=E.getParameter(E.UNPACK_SKIP_ROWS),nn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,et.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,et.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,we),E.pixelStorei(E.UNPACK_SKIP_ROWS,Le),E.pixelStorei(E.UNPACK_SKIP_IMAGES,be);const rt=u.isDataArrayTexture||u.isData3DTexture,Mt=C.isDataArrayTexture||C.isData3DTexture;if(u.isDepthTexture){const Tt=ie.get(u),ut=ie.get(C),dt=ie.get(Tt.__renderTarget),Bn=ie.get(ut.__renderTarget);F.bindFramebuffer(E.READ_FRAMEBUFFER,dt.__webglFramebuffer),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Dt=0;Dt<de;Dt++)rt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ie.get(u).__webglTexture,y,be+Dt),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ie.get(C).__webglTexture,J,at+Dt)),E.blitFramebuffer(we,Le,le,ge,Ge,Ye,le,ge,E.DEPTH_BUFFER_BIT,E.NEAREST);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(y!==0||u.isRenderTargetTexture||ie.has(u)){const Tt=ie.get(u),ut=ie.get(C);F.bindFramebuffer(E.READ_FRAMEBUFFER,Pa),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,La);for(let dt=0;dt<de;dt++)rt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Tt.__webglTexture,y,be+dt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Tt.__webglTexture,y),Mt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ut.__webglTexture,J,at+dt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ut.__webglTexture,J),y!==0?E.blitFramebuffer(we,Le,le,ge,Ge,Ye,le,ge,E.COLOR_BUFFER_BIT,E.NEAREST):Mt?E.copyTexSubImage3D(it,J,Ge,Ye,at+dt,we,Le,le,ge):E.copyTexSubImage2D(it,J,Ge,Ye,we,Le,le,ge);F.bindFramebuffer(E.READ_FRAMEBUFFER,null),F.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Mt?u.isDataTexture||u.isData3DTexture?E.texSubImage3D(it,J,Ge,Ye,at,le,ge,de,Ze,Ce,et.data):C.isCompressedArrayTexture?E.compressedTexSubImage3D(it,J,Ge,Ye,at,le,ge,de,Ze,et.data):E.texSubImage3D(it,J,Ge,Ye,at,le,ge,de,Ze,Ce,et):u.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,J,Ge,Ye,le,ge,Ze,Ce,et.data):u.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,J,Ge,Ye,et.width,et.height,Ze,et.data):E.texSubImage2D(E.TEXTURE_2D,J,Ge,Ye,le,ge,Ze,Ce,et);E.pixelStorei(E.UNPACK_ROW_LENGTH,ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,gt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(E.UNPACK_SKIP_ROWS,vt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,nn),J===0&&C.generateMipmaps&&E.generateMipmap(it),F.unbindTexture()},this.initRenderTarget=function(u){ie.get(u).__webglFramebuffer===void 0&&ae.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?ae.setTextureCube(u,0):u.isData3DTexture?ae.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?ae.setTexture2DArray(u,0):ae.setTexture2D(u,0),F.unbindTexture()},this.resetState=function(){x=0,P=0,H=null,F.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(t),n.unpackColorSpace=ot._getUnpackColorSpace()}}const Hr={type:"change"},vi={type:"start"},Aa={type:"end"},Mn=new Ko,Vr=new na,Ku=Math.cos(70*Pn.DEG2RAD),ct=new Ae,pt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jn=1e-6;class qu extends Yo{constructor(t,n=null){super(t,n),this.state=Ke.NONE,this.target=new Ae,this.cursor=new Ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:qt.ROTATE,TWO:qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Ae,this._lastQuaternion=new yn,this._lastTargetPosition=new Ae,this._quat=new yn().setFromUnitVectors(t.up,new Ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new Ae,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new Ae,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ju.bind(this),this._onPointerDown=Zu.bind(this),this._onPointerUp=$u.bind(this),this._onContextMenu=rd.bind(this),this._onMouseWheel=ed.bind(this),this._onKeyDown=td.bind(this),this._onTouchStart=nd.bind(this),this._onTouchMove=id.bind(this),this._onMouseDown=Qu.bind(this),this._onMouseMove=Ju.bind(this),this._interceptControlDown=ad.bind(this),this._interceptControlUp=od.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hr),this.update(),this.state=Ke.NONE}update(t=null){const n=this.object.position;ct.copy(n).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=pt:i>Math.PI&&(i-=pt),a<-Math.PI?a+=pt:a>Math.PI&&(a-=pt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),n.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=ct.length();o=this._clampDistance(s*this._scale);const m=s-o;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),r=!!m}else if(this.object.isOrthographicCamera){const s=new Ae(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=m!==this.object.zoom;const g=new Ae(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(s),this.object.updateMatrixWorld(),o=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mn.origin.copy(this.object.position),Mn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mn.direction))<Ku?this.object.lookAt(this.target):(Vr.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mn.intersectPlane(Vr,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jn||this._lastTargetPosition.distanceToSquared(this.target)>Jn?(this.dispatchEvent(Hr),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pt/60*this.autoRotateSpeed*t:pt/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ct.setFromMatrixColumn(n,0),ct.multiplyScalar(-t),this._panOffset.add(ct)}_panUp(t,n){this.screenSpacePanning===!0?ct.setFromMatrixColumn(n,1):(ct.setFromMatrixColumn(n,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(t),this._panOffset.add(ct)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ct.copy(a).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,r=n-i.top,o=i.width,s=i.height;this._mouse.x=a/o*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,s=(t.pageY+n.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Qe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function ju(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function $u(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Aa),this.state=Ke.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Qu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ke.DOLLY;break;case Qt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ke.ROTATE}break;case Qt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vi)}function Ju(e){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function ed(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(e.preventDefault(),this.dispatchEvent(vi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Aa))}function td(e){this.enabled!==!1&&this._handleKeyDown(e)}function nd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ke.TOUCH_ROTATE;break;case qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ke.TOUCH_DOLLY_PAN;break;case qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vi)}function id(e){switch(this._trackPointer(e),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ke.NONE}}function rd(e){this.enabled!==!1&&e.preventDefault()}function ad(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function od(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kr={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Dn{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new gd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Pd(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,n,i,a){const r=new _d,o=[];for(let s=0,m=this.pluginCallbacks.length;s<m;s++)o.push(this.pluginCallbacks[s](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,n,a).catch(i)}parseAsync(t,n){const i=this;return new Promise(function(a,r){i.parse(t,a,r,n)})}}const Be={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ei="KHR_mesh_quantization",St={};St[$t]=Be.NEAREST;St[ea]=Be.NEAREST_MIPMAP_NEAREST;St[an]=Be.NEAREST_MIPMAP_LINEAR;St[Gt]=Be.LINEAR;St[Tn]=Be.LINEAR_MIPMAP_NEAREST;St[Kt]=Be.LINEAR_MIPMAP_LINEAR;St[Qr]=Be.CLAMP_TO_EDGE;St[Jr]=Be.REPEAT;St[$r]=Be.MIRRORED_REPEAT;const zr={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},sd=new Je,Wr=12,cd=1179937895,ld=2,Xr=8,fd=1313821514,ud=5130562;function sn(e,t){return e.length===t.length&&e.every(function(n,i){return n===t[i]})}function dd(e){return new TextEncoder().encode(e).buffer}function pd(e){return sn(e.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function hd(e,t,n){const i={min:new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let a=t;a<t+n;a++)for(let r=0;r<e.itemSize;r++){let o;e.itemSize>4?o=e.array[a*e.itemSize+r]:(r===0?o=e.getX(a):r===1?o=e.getY(a):r===2?o=e.getZ(a):r===3&&(o=e.getW(a)),e.normalized===!0&&(o=Pn.normalize(o,e.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Ra(e){return Math.ceil(e/4)*4}function ti(e,t=0){const n=Ra(e.byteLength);if(n!==e.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(e)),t!==0)for(let a=e.byteLength;a<n;a++)i[a]=t;return i.buffer}return e}function Yr(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function md(e,t){if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){let n;return t==="image/jpeg"?n=.92:t==="image/webp"&&(n=.8),e.convertToBlob({type:t,quality:n})}else return new Promise(n=>e.toBlob(n,t))}class _d{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Zr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,n,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const a=this,r=a.buffers,o=a.json;i=a.options;const s=a.extensionsUsed,m=a.extensionsRequired,g=new Blob(r,{type:"application/octet-stream"}),T=Object.keys(s),_=Object.keys(m);if(T.length>0&&(o.extensionsUsed=T),_.length>0&&(o.extensionsRequired=_),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=g.size),i.binary===!0){const M=new FileReader;M.readAsArrayBuffer(g),M.onloadend=function(){const S=ti(M.result),L=new DataView(new ArrayBuffer(Xr));L.setUint32(0,S.byteLength,!0),L.setUint32(4,ud,!0);const R=ti(dd(JSON.stringify(o)),32),f=new DataView(new ArrayBuffer(Xr));f.setUint32(0,R.byteLength,!0),f.setUint32(4,fd,!0);const c=new ArrayBuffer(Wr),D=new DataView(c);D.setUint32(0,cd,!0),D.setUint32(4,ld,!0);const w=Wr+f.byteLength+R.byteLength+L.byteLength+S.byteLength;D.setUint32(8,w,!0);const v=new Blob([c,f,R,L,S],{type:"application/octet-stream"}),U=new FileReader;U.readAsArrayBuffer(v),U.onloadend=function(){n(U.result)}}}else if(o.buffers&&o.buffers.length>0){const M=new FileReader;M.readAsDataURL(g),M.onloadend=function(){const S=M.result;o.buffers[0].uri=S,n(o)}}else n(o)}serializeUserData(t,n){if(Object.keys(t.userData).length===0)return;const i=this.options,a=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){n.extensions===void 0&&(n.extensions={});for(const o in r.gltfExtensions)n.extensions[o]=r.gltfExtensions[o],a[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(n.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,n=!1){if(this.uids.has(t)===!1){const a=new Map;a.set(!0,this.uid++),a.set(!1,this.uid++),this.uids.set(t,a)}return this.uids.get(t).get(n)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const i=new Ae;for(let a=0,r=t.count;a<r;a++)if(Math.abs(i.fromBufferAttribute(t,a).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const n=this.cache;if(n.attributesNormalized.has(t))return n.attributesNormalized.get(t);const i=t.clone(),a=new Ae;for(let r=0,o=i.count;r<o;r++)a.fromBufferAttribute(i,r),a.x===0&&a.y===0&&a.z===0?a.setX(1):a.normalize(),i.setXYZ(r,a.x,a.y,a.z);return n.attributesNormalized.set(t,i),i}applyTextureTransform(t,n){let i=!1;const a={};(n.offset.x!==0||n.offset.y!==0)&&(a.offset=n.offset.toArray(),i=!0),n.rotation!==0&&(a.rotation=n.rotation,i=!0),(n.repeat.x!==1||n.repeat.y!==1)&&(a.scale=n.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=a,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,n){if(t===n)return t;function i(S){return S.colorSpace===mi?function(R){return R<.04045?R*.0773993808:Math.pow(R*.9478672986+.0521327014,2.4)}:function(R){return R}}t instanceof Wn&&(t=await this.decompressTextureAsync(t)),n instanceof Wn&&(n=await this.decompressTextureAsync(n));const a=t?t.image:null,r=n?n.image:null,o=Math.max(a?a.width:0,r?r.width:0),s=Math.max(a?a.height:0,r?r.height:0),m=Yr();m.width=o,m.height=s;const g=m.getContext("2d",{willReadFrequently:!0});g.fillStyle="#00ffff",g.fillRect(0,0,o,s);const T=g.getImageData(0,0,o,s);if(a){g.drawImage(a,0,0,o,s);const S=i(t),L=g.getImageData(0,0,o,s).data;for(let R=2;R<L.length;R+=4)T.data[R]=S(L[R]/256)*256}if(r){g.drawImage(r,0,0,o,s);const S=i(n),L=g.getImageData(0,0,o,s).data;for(let R=1;R<L.length;R+=4)T.data[R]=S(L[R]/256)*256}g.putImageData(T,0,0);const M=(t||n).clone();return M.source=new qo(m),M.colorSpace=Ft,M.channel=(t||n).channel,t&&n&&t.channel!==n.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),M}async decompressTextureAsync(t,n=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,n)}processBuffer(t){const n=this.json,i=this.buffers;return n.buffers||(n.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,n,i,a,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let s;switch(n){case Be.BYTE:case Be.UNSIGNED_BYTE:s=1;break;case Be.SHORT:case Be.UNSIGNED_SHORT:s=2;break;default:s=4}let m=t.itemSize*s;r===Be.ARRAY_BUFFER&&(m=Math.ceil(m/4)*4);const g=Ra(a*m),T=new DataView(new ArrayBuffer(g));let _=0;for(let L=i;L<i+a;L++){for(let R=0;R<t.itemSize;R++){let f;t.itemSize>4?f=t.array[L*t.itemSize+R]:(R===0?f=t.getX(L):R===1?f=t.getY(L):R===2?f=t.getZ(L):R===3&&(f=t.getW(L)),t.normalized===!0&&(f=Pn.normalize(f,t.array))),n===Be.FLOAT?T.setFloat32(_,f,!0):n===Be.INT?T.setInt32(_,f,!0):n===Be.UNSIGNED_INT?T.setUint32(_,f,!0):n===Be.SHORT?T.setInt16(_,f,!0):n===Be.UNSIGNED_SHORT?T.setUint16(_,f,!0):n===Be.BYTE?T.setInt8(_,f):n===Be.UNSIGNED_BYTE&&T.setUint8(_,f),_+=s}_%m!==0&&(_+=m-_%m)}const M={buffer:this.processBuffer(T.buffer),byteOffset:this.byteOffset,byteLength:g};return r!==void 0&&(M.target=r),r===Be.ARRAY_BUFFER&&(M.byteStride=m),this.byteOffset+=g,o.bufferViews.push(M),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const n=this,i=n.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(a){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const o=ti(r.result),s={buffer:n.processBuffer(o),byteOffset:n.byteOffset,byteLength:o.byteLength};n.byteOffset+=o.byteLength,a(i.bufferViews.push(s)-1)}})}processAccessor(t,n,i,a){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let s;if(t.array.constructor===Float32Array)s=Be.FLOAT;else if(t.array.constructor===Int32Array)s=Be.INT;else if(t.array.constructor===Uint32Array)s=Be.UNSIGNED_INT;else if(t.array.constructor===Int16Array)s=Be.SHORT;else if(t.array.constructor===Uint16Array)s=Be.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)s=Be.BYTE;else if(t.array.constructor===Uint8Array)s=Be.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(a===void 0||a===1/0)&&(a=t.count),a===0)return null;const m=hd(t,i,a);let g;n!==void 0&&(g=t===n.index?Be.ELEMENT_ARRAY_BUFFER:Be.ARRAY_BUFFER);const T=this.processBufferView(t,s,i,a,g),_={bufferView:T.id,byteOffset:T.byteOffset,componentType:s,count:a,max:m.max,min:m.min,type:o[t.itemSize]};return t.normalized===!0&&(_.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(_)-1}processImage(t,n,i,a="image/png"){if(t!==null){const r=this,o=r.cache,s=r.json,m=r.options,g=r.pending;o.images.has(t)||o.images.set(t,{});const T=o.images.get(t),_=a+":flipY/"+i.toString();if(T[_]!==void 0)return T[_];s.images||(s.images=[]);const M={mimeType:a},S=Yr();S.width=Math.min(t.width,m.maxTextureSize),S.height=Math.min(t.height,m.maxTextureSize);const L=S.getContext("2d",{willReadFrequently:!0});if(i===!0&&(L.translate(0,S.height),L.scale(1,-1)),t.data!==void 0){n!==Ct&&console.error("GLTFExporter: Only RGBAFormat is supported.",n),(t.width>m.maxTextureSize||t.height>m.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let c=0;c<f.length;c+=4)f[c+0]=t.data[c+0],f[c+1]=t.data[c+1],f[c+2]=t.data[c+2],f[c+3]=t.data[c+3];L.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)L.drawImage(t,0,0,S.width,S.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");m.binary===!0?g.push(md(S,a).then(f=>r.processBufferViewImage(f)).then(f=>{M.bufferView=f})):M.uri=Zo.getDataURL(S,a);const R=s.images.push(M)-1;return T[_]=R,R}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const n=this.json;n.samplers||(n.samplers=[]);const i={magFilter:St[t.magFilter],minFilter:St[t.minFilter],wrapS:St[t.wrapS],wrapT:St[t.wrapT]};return n.samplers.push(i)-1}async processTextureAsync(t){const i=this.options,a=this.cache,r=this.json;if(a.textures.has(t))return a.textures.get(t);r.textures||(r.textures=[]),t instanceof Wn&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const s={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(s.name=t.name),await this._invokeAllAsync(async function(g){g.writeTexture&&await g.writeTexture(t,s)});const m=r.textures.push(s)-1;return a.textures.set(t,m),m}async processMaterialAsync(t){const n=this.cache,i=this.json;if(n.materials.has(t))return n.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(sn(r,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const s=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),m={index:await this.processTextureAsync(s),texCoord:s.channel};this.applyTextureTransform(m,s),a.pbrMetallicRoughness.metallicRoughnessTexture=m}if(t.map){const s={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(s,t.map),a.pbrMetallicRoughness.baseColorTexture=s}if(t.emissive){const s=t.emissive;if(Math.max(s.r,s.g,s.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const g={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(g,t.emissiveMap),a.emissiveTexture=g}}if(t.normalMap){const s={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(s.scale=t.normalScale.x),this.applyTextureTransform(s,t.normalMap),a.normalTexture=s}if(t.aoMap){const s={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(s.strength=t.aoMapIntensity),this.applyTextureTransform(s,t.aoMap),a.occlusionTexture=s}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===Et&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(s){s.writeMaterialAsync&&await s.writeMaterialAsync(t,a)});const o=i.materials.push(a)-1;return n.materials.set(t,o),o}async processMeshAsync(t){const n=this.cache,i=this.json,a=[t.geometry.uuid];if(Array.isArray(t.material))for(let v=0,U=t.material.length;v<U;v++)a.push(t.material[v].uuid);else a.push(t.material.uuid);const r=a.join(":");if(n.meshes.has(r))return n.meshes.get(r);const o=t.geometry;let s;t.isLineSegments?s=Be.LINES:t.isLineLoop?s=Be.LINE_LOOP:t.isLine?s=Be.LINE_STRIP:t.isPoints?s=Be.POINTS:s=t.material.wireframe?Be.LINES:Be.TRIANGLES;const m={},g={},T=[],_=[],M={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},S=o.getAttribute("normal");S!==void 0&&!this.isNormalizedNormalAttribute(S)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(S)));let L=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;const U=o.attributes[v];if(v=M[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),n.attributes.has(this.getUID(U))){g[v]=n.attributes.get(this.getUID(U));continue}L=null;const P=U.array;v==="JOINTS_0"&&!(P instanceof Uint16Array)&&!(P instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),L=new xt(new Uint16Array(P),U.itemSize,U.normalized)):(P instanceof Uint32Array||P instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),L=Dn.Utils.toFloat32BufferAttribute(U));const H=this.processAccessor(L||U,o);H!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,U),g[v]=H,n.attributes.set(this.getUID(U),H))}if(S!==void 0&&o.setAttribute("normal",S),Object.keys(g).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const v=[],U=[],x={};if(t.morphTargetDictionary!==void 0)for(const P in t.morphTargetDictionary)x[t.morphTargetDictionary[P]]=P;for(let P=0;P<t.morphTargetInfluences.length;++P){const H={};let h=!1;for(const d in o.morphAttributes){if(d!=="position"&&d!=="normal"){h||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),h=!0);continue}const b=o.morphAttributes[d][P],B=d.toUpperCase(),K=o.attributes[d];if(n.attributes.has(this.getUID(b,!0))){H[B]=n.attributes.get(this.getUID(b,!0));continue}const Y=b.clone();if(!o.morphTargetsRelative)for(let X=0,W=b.count;X<W;X++)for(let ee=0;ee<b.itemSize;ee++)ee===0&&Y.setX(X,b.getX(X)-K.getX(X)),ee===1&&Y.setY(X,b.getY(X)-K.getY(X)),ee===2&&Y.setZ(X,b.getZ(X)-K.getZ(X)),ee===3&&Y.setW(X,b.getW(X)-K.getW(X));H[B]=this.processAccessor(Y,o),n.attributes.set(this.getUID(K,!0),H[B])}_.push(H),v.push(t.morphTargetInfluences[P]),t.morphTargetDictionary!==void 0&&U.push(x[P])}m.weights=v,U.length>0&&(m.extras={},m.extras.targetNames=U)}const R=Array.isArray(t.material);if(R&&o.groups.length===0)return null;let f=!1;if(R&&o.index===null){const v=[];for(let U=0,x=o.attributes.position.count;U<x;U++)v[U]=U;o.setIndex(v),f=!0}const c=R?t.material:[t.material],D=R?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,U=D.length;v<U;v++){const x={mode:s,attributes:g};if(this.serializeUserData(o,x),_.length>0&&(x.targets=_),o.index!==null){let H=this.getUID(o.index);(D[v].start!==void 0||D[v].count!==void 0)&&(H+=":"+D[v].start+":"+D[v].count),n.attributes.has(H)?x.indices=n.attributes.get(H):(x.indices=this.processAccessor(o.index,o,D[v].start,D[v].count),n.attributes.set(H,x.indices)),x.indices===null&&delete x.indices}const P=await this.processMaterialAsync(c[D[v].materialIndex]);P!==null&&(x.material=P),T.push(x)}f===!0&&o.setIndex(null),m.primitives=T,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(t,m)});const w=i.meshes.push(m)-1;return n.meshes.set(r,w),w}detectMeshQuantization(t,n){if(this.extensionsUsed[ei])return;let i;switch(n.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}n.normalized&&(i+=" normalized");const a=t.split("_",1)[0];kr[a]&&kr[a].includes(i)&&(this.extensionsUsed[ei]=!0,this.extensionsRequired[ei]=!0)}processCamera(t){const n=this.json;n.cameras||(n.cameras=[]);const i=t.isOrthographicCamera,a={type:i?"orthographic":"perspective"};return i?a.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:a.perspective={aspectRatio:t.aspect,yfov:Pn.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(a.name=t.type),n.cameras.push(a)-1}processAnimation(t,n){const i=this.json,a=this.nodeMap;i.animations||(i.animations=[]),t=Dn.Utils.mergeMorphTargetTracks(t.clone(),n);const r=t.tracks,o=[],s=[];for(let g=0;g<r.length;++g){const T=r[g],_=Ln.parseTrackName(T.name);let M=Ln.findNode(n,_.nodeName);const S=zr[_.propertyName];if(_.objectName==="bones"&&(M.isSkinnedMesh===!0?M=M.skeleton.getBoneByName(_.objectIndex):M=void 0),!M||!S){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',T.name);continue}const L=1;let R=T.values.length/T.times.length;S===zr.morphTargetInfluences&&(R/=M.morphTargetInfluences.length);let f;T.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",R/=3):T.getInterpolation()===jo?f="STEP":f="LINEAR",s.push({input:this.processAccessor(new xt(T.times,L)),output:this.processAccessor(new xt(T.values,R)),interpolation:f}),o.push({sampler:s.length-1,target:{node:a.get(M),path:S}})}const m={name:t.name||"clip_"+i.animations.length,samplers:s,channels:o};return this.serializeUserData(t,m),i.animations.push(m),i.animations.length-1}processSkin(t){const n=this.json,i=this.nodeMap,a=n.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const s=[],m=new Float32Array(r.bones.length*16),g=new kt;for(let _=0;_<r.bones.length;++_)s.push(i.get(r.bones[_])),g.copy(r.boneInverses[_]),g.multiply(t.bindMatrix).toArray(m,_*16);return n.skins===void 0&&(n.skins=[]),n.skins.push({inverseBindMatrices:this.processAccessor(new xt(m,16)),joints:s,skeleton:i.get(o)}),a.skin=n.skins.length-1}async processNodeAsync(t){const n=this.json,i=this.options,a=this.nodeMap;n.nodes||(n.nodes=[]);const r={};if(i.trs){const s=t.quaternion.toArray(),m=t.position.toArray(),g=t.scale.toArray();sn(s,[0,0,0,1])||(r.rotation=s),sn(m,[0,0,0])||(r.translation=m),sn(g,[1,1,1])||(r.scale=g)}else t.matrixAutoUpdate&&t.updateMatrix(),pd(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const s=await this.processMeshAsync(t);s!==null&&(r.mesh=s)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const o=n.nodes.push(r)-1;if(a.set(t,o),t.children.length>0){const s=[];for(let m=0,g=t.children.length;m<g;m++){const T=t.children[m];if(T.visible||i.onlyVisible===!1){const _=await this.processNodeAsync(T);_!==null&&s.push(_)}}s.length>0&&(r.children=s)}return await this._invokeAllAsync(function(s){s.writeNode&&s.writeNode(t,r)}),o}async processSceneAsync(t){const n=this.json,i=this.options;n.scenes||(n.scenes=[],n.scene=0);const a={};t.name!==""&&(a.name=t.name),n.scenes.push(a);const r=[];for(let o=0,s=t.children.length;o<s;o++){const m=t.children[o];if(m.visible||i.onlyVisible===!1){const g=await this.processNodeAsync(m);g!==null&&r.push(g)}}r.length>0&&(a.nodes=r),this.serializeUserData(t,a)}async processObjectsAsync(t){const n=new pi;n.name="AuxScene";for(let i=0;i<t.length;i++)n.children.push(t[i]);await this.processSceneAsync(n)}async processInputAsync(t){const n=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(a){a.beforeParse&&a.beforeParse(t)});const i=[];for(let a=0;a<t.length;a++)t[a]instanceof pi?await this.processSceneAsync(t[a]):i.push(t[a]);i.length>0&&await this.processObjectsAsync(i);for(let a=0;a<this.skins.length;++a)this.processSkin(this.skins[a]);for(let a=0;a<n.animations.length;++a)this.processAnimation(n.animations[a],t[0]);await this._invokeAllAsync(function(a){a.afterParse&&a.afterParse(t)})}async _invokeAllAsync(t){for(let n=0,i=this.plugins.length;n<i;n++)await t(this.plugins[n])}}class gd{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,n){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const i=this.writer,a=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(a.extensions=a.extensions||{},a.extensions[this.name]={lights:[]},r[this.name]=!0);const s=a.extensions[this.name].lights;s.push(o),n.extensions=n.extensions||{},n.extensions[this.name]={light:s.length-1}}}class vd{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,n){if(!t.isMeshBasicMaterial)return;const a=this.writer.extensionsUsed;n.extensions=n.extensions||{},n.extensions[this.name]={},a[this.name]=!0,n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=.9}}class Ed{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Sd{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const a=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Md{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Td{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class xd{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Ad{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const a=this.writer.extensionsUsed,r={};r.ior=t.ior,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Rd{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(sd)&&!t.specularIntensityMap&&!t.specularColorMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.specularIntensityMap){const o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){const o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class bd{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.sheenRoughnessMap){const o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Cd{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.anisotropyMap){const o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class wd{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const a=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class yd{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.bumpMap){const o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Pd{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,n){if(!t.isInstancedMesh)return;const i=this.writer,a=t,r=new Float32Array(a.count*3),o=new Float32Array(a.count*4),s=new Float32Array(a.count*3),m=new kt,g=new Ae,T=new yn,_=new Ae;for(let S=0;S<a.count;S++)a.getMatrixAt(S,m),m.decompose(g,T,_),g.toArray(r,S*3),T.toArray(o,S*4),_.toArray(s,S*3);const M={TRANSLATION:i.processAccessor(new xt(r,3)),ROTATION:i.processAccessor(new xt(o,4)),SCALE:i.processAccessor(new xt(s,3))};a.instanceColor&&(M._COLOR_0=i.processAccessor(a.instanceColor)),n.extensions=n.extensions||{},n.extensions[this.name]={attributes:M},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}Dn.Utils={insertKeyframe:function(e,t){const i=e.getValueSize(),a=new e.TimeBufferType(e.times.length+1),r=new e.ValueBufferType(e.values.length+i),o=e.createInterpolant(new e.ValueBufferType(i));let s;if(e.times.length===0){a[0]=t;for(let m=0;m<i;m++)r[m]=0;s=0}else if(t<e.times[0]){if(Math.abs(e.times[0]-t)<.001)return 0;a[0]=t,a.set(e.times,1),r.set(o.evaluate(t),0),r.set(e.values,i),s=0}else if(t>e.times[e.times.length-1]){if(Math.abs(e.times[e.times.length-1]-t)<.001)return e.times.length-1;a[a.length-1]=t,a.set(e.times,0),r.set(e.values,0),r.set(o.evaluate(t),e.values.length),s=a.length-1}else for(let m=0;m<e.times.length;m++){if(Math.abs(e.times[m]-t)<.001)return m;if(e.times[m]<t&&e.times[m+1]>t){a.set(e.times.slice(0,m+1),0),a[m+1]=t,a.set(e.times.slice(m+1),m+2),r.set(e.values.slice(0,(m+1)*i),0),r.set(o.evaluate(t),(m+1)*i),r.set(e.values.slice((m+1)*i),(m+2)*i),s=m+1;break}}return e.times=a,e.values=r,s},mergeMorphTargetTracks:function(e,t){const n=[],i={},a=e.tracks;for(let r=0;r<a.length;++r){let o=a[r];const s=Ln.parseTrackName(o.name),m=Ln.findNode(t,s.nodeName);if(s.propertyName!=="morphTargetInfluences"||s.propertyIndex===void 0){n.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation($o)}const g=m.morphTargetInfluences.length,T=m.morphTargetDictionary[s.propertyIndex];if(T===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+s.propertyIndex);let _;if(i[m.uuid]===void 0){_=o.clone();const S=new _.ValueBufferType(g*_.times.length);for(let L=0;L<_.times.length;L++)S[L*g+T]=_.values[L];_.name=(s.nodeName||"")+".morphTargetInfluences",_.values=S,i[m.uuid]=_,n.push(_);continue}const M=o.createInterpolant(new o.ValueBufferType(1));_=i[m.uuid];for(let S=0;S<_.times.length;S++)_.values[S*g+T]=M.evaluate(_.times[S]);for(let S=0;S<o.times.length;S++){const L=this.insertKeyframe(_,o.times[S]);_.values[L*g+T]=o.values[S]}}return e.tracks=n,e},toFloat32BufferAttribute:function(e){const t=new xt(new Float32Array(e.count*e.itemSize),e.itemSize,!1);if(!e.normalized&&!e.isInterleavedBufferAttribute)return t.array.set(e.array),t;for(let n=0,i=e.count;n<i;n++)for(let a=0;a<e.itemSize;a++)t.setComponent(n,a,e.getComponent(n,a));return t}};const Ld=4096,Dd=8192;function Kr(e){return e.every(Number.isFinite)}function Ud(e){const t=e==null?void 0:e.surface,n=e==null?void 0:e.depth_mapping;if(!t||!n||!Array.isArray(t.positions)||!Array.isArray(t.indices)||!Array.isArray(t.colors))return null;const{positions:i,indices:a,colors:r}=t,o=i.length/3,s=a.length/3;if(e.method!=="single-view-relative-depth"||e.status!=="provisional"&&e.status!=="unresolved"||!e.source_id||n.kind!=="inverse-affine-prior"||!Number.isFinite(n.near)||!Number.isFinite(n.far)||n.near<=0||n.far<=n.near||!Array.isArray(e.assumptions)||!e.assumptions.every(g=>typeof g=="string")||i.length<9||i.length%3!==0||r.length!==i.length||a.length<3||a.length%3!==0||o>Ld||s>Dd||!Kr(i)||!Kr(r)||r.some(g=>g<0||g>1)||a.some(g=>!Number.isInteger(g)||g<0||g>=o))return null;const m=new un;return m.setAttribute("position",new cr(i,3)),m.setAttribute("color",new cr(r,3)),m.setIndex(new ga(a,1)),m.computeVertexNormals(),m.computeBoundingBox(),m.computeBoundingSphere(),m}function Id(e,t){const n=Ud(e);if(!n)return null;const i=t==="source-color"?new wn({vertexColors:!0,side:Et}):new va({color:12107708,roughness:.86,metalness:.02,side:Et}),a=new _t(n,i);return a.name="Environment depth surface",a.userData={kind:"environment",sourceId:e.source_id,method:e.method,status:e.status,assumptions:[...e.assumptions],depthMapping:{...e.depth_mapping}},a}function Od({scene:e,paths:t,time:n,selected:i,onSelect:a,mode:r,reset:o,exportRef:s,renderStyle:m="source-color",showSurface:g=!0,showPrimitives:T=!0,showHelpers:_=!1,still:M=!1,onOrbitAngle:S}){const L=Ut.useRef(null),R=Ut.useRef(n),f=Ut.useRef(a),c=Ut.useRef(S);c.current=S;const D=Ut.useRef(new Map);R.current=n,f.current=a;const[w,v]=Ut.useState("");return Ut.useEffect(()=>{var De;const U=L.current;let x;try{x=new Yu({antialias:!0,alpha:!1}),v("")}catch{v("3D rendering is unavailable. The scene list and numeric editors remain available.");return}x.setPixelRatio(Math.min(devicePixelRatio,2)),x.outputColorSpace=mi,U.appendChild(x.domElement),x.domElement.setAttribute("aria-label","Interactive spatial scene. Select geometry with the scene list; use view buttons to change the camera.");const P=new pi;P.background=new Je("#1c2226"),P.add(new Qo(15398127,3226947,2.4));const H=new Jo(16773596,2.5);H.position.set(4,9,6),P.add(H);const h=new lr(40,40,5926256,3424839);h.visible=r!=="source"&&(!e.structural||_),h.position.y=-.015,P.add(h);const d=new Xn;P.add(d);const b=new Map,B=new Xn;P.add(B);const K=new Map,Y=new Xn;P.add(Y);const X=new Set(((De=e.structural)==null?void 0:De.faces.map(q=>q.primitive_id))??[]);if(e.structural){const q=es(e,m);d.add(q),q.traverse(F=>{if(F instanceof _t&&F.userData.primitiveId){b.set(F.userData.primitiveId,F);const Se=new fr(new ur(F.geometry),new Yn({color:F.userData.primitiveId===i?9036237:5400427}));B.add(Se)}})}for(const q of e.primitives){if(X.has(q.id))continue;const F=new _t(ts(q),new va({color:q.color,roughness:.85,metalness:.04,side:Et,transparent:!0,opacity:q.status==="unresolved"?.35:.88}));F.name=q.label,F.userData={primitiveId:q.id,status:q.status,assumptions:q.assumptions},F.position.fromArray(q.position),F.quaternion.fromArray(q.quaternion),F.visible=T,d.add(F),b.set(q.id,F);const Se=new fr(new ur(F.geometry),new Yn({color:q.id===i?9036237:5400427,transparent:!0,opacity:q.id===i?1:.55}));Se.position.copy(F.position),Se.quaternion.copy(F.quaternion),Se.visible=F.visible,B.add(Se),K.set(q.id,Se)}const W=e.environment?Id(e.environment,m):null;if(W&&(W.visible=g,d.add(W)),e.structural&&_){for(const F of e.primitives.filter(Se=>X.has(Se.id))){const Se=dr(F.quaternion);Se&&Y.add(new pr(new Ae(...Se),new Ae(...F.position),.8,9036237));const ie=new lr(Math.max(F.dimensions[0],F.dimensions[2]),8,7984576,5400427);ie.position.fromArray(F.position),ie.quaternion.fromArray(F.quaternion),Y.add(ie)}const q=e.structural.camera_samples.filter(F=>F.capability==="scene-pose"&&F.camera&&!F.rejection_reason).sort((F,Se)=>F.timestamp_us-Se.timestamp_us);q.forEach((F,Se)=>{const ie=new _t(new hr(.045,8,8),new wn({color:14791028}));ie.position.fromArray(F.camera.position),P.add(ie);const ae=q[Se-1];ae&&ae.interval_start_us===F.interval_start_us&&ae.interval_end_us===F.interval_end_us&&!e.structural.camera_samples.some(Ve=>Ve.timestamp_us>ae.timestamp_us&&Ve.timestamp_us<F.timestamp_us&&Ve.capability!=="scene-pose")&&P.add(new mr(new un().setFromPoints([new Ae(...ae.camera.position),ie.position]),new Yn({color:14791028})))})}for(const q of t){for(const F of q.segments){const Se=q.points[F.from_index],ie=q.points[F.to_index];if(!Se||!ie||F.kind==="gap")continue;const ae=new mr(new un().setFromPoints(F.kind==="inferred"&&F.control_points?new ns(new Ae(...Se.position),new Ae(...F.control_points[0]),new Ae(...F.control_points[1]),new Ae(...ie.position)).getPoints(32):[new Ae(...Se.position),new Ae(...ie.position)]),new is({color:F.kind==="jump"?14791028:7984576,dashSize:.16,gapSize:.11}));ae.computeLineDistances(),P.add(ae)}for(const F of q.points){const Se=new _t(new hr(.065,10,8),new wn({color:12119263}));Se.position.fromArray(F.position),P.add(Se)}}const ee=new rs,G=new Ae,me=new Ae;d.traverse(q=>{q.visible&&q instanceof _t&&ee.expandByObject(q)}),ee.getCenter(G),ee.getSize(me),ee.isEmpty()&&(G.set(0,0,0),me.set(10,10,10));const _e=Math.max(me.x,me.y,me.z,5);let ue;r==="source"?ue=mn(_n(e,n,M).camera??e.camera):r==="top"?(ue=new di(-_e,_e,_e,-_e,.01,1e4),ue.position.copy(G).add(new Ae(0,_e*2,0)),ue.up.set(0,0,-1),ue.lookAt(G)):(ue=new jt(44,1,.01,1e4),ue.position.copy(G).add(new Ae(_e*.8,_e*.62,_e*.95)),ue.lookAt(G));const Ne=new qu(ue,x.domElement);Ne.enabled=r!=="source",Ne.enableRotate=r!=="top",Ne.target.copy(G),Ne.enableDamping=!0;const nt=`${e.id}:${r}:${o}`,je=D.current.get(nt);je&&r!=="source"&&(ue.position.copy(je.position),Ne.target.copy(je.target)),r!=="source"&&Ne.update();const He=mn(e.camera),z=new as(He);z.visible=!1,P.add(z);const j=new pr(new Ae(0,0,1),G,1,14791028);j.visible=!1,P.add(j);const pe=()=>{const q=U.clientWidth,F=U.clientHeight;if(x.setSize(q,F),r==="source"){const Se=e.camera.width/e.camera.height,ie=Math.min(q,F*Se),ae=ie/Se;x.setViewport((q-ie)/2,(F-ae)/2,ie,ae)}else ue instanceof jt?(ue.aspect=q/F,ue.updateProjectionMatrix()):(ue.left=-_e*q/F/1.5,ue.right=_e*q/F/1.5,ue.top=_e/1.5,ue.bottom=-_e/1.5,ue.updateProjectionMatrix())},ye=new ResizeObserver(pe);ye.observe(U),pe();const Ee=new os;let Fe=null;const st=q=>{Fe={x:q.clientX,y:q.clientY}},E=q=>{if(!Fe||Math.hypot(q.clientX-Fe.x,q.clientY-Fe.y)>5)return;const F=x.domElement.getBoundingClientRect();let Se=q.clientX-F.left,ie=q.clientY-F.top,ae=F.width,Ve=F.height;if(r==="source"){const p=e.camera.width/e.camera.height,l=Math.min(ae,Ve*p),I=l/p;Se-=(ae-l)/2,ie-=(Ve-I)/2,ae=l,Ve=I}Ee.setFromCamera(new Qe(Se/ae*2-1,-ie/Ve*2+1),ue);const Xe=Ee.intersectObjects([...b.values()],!1)[0];Xe&&f.current(Xe.object.userData.primitiveId)};x.domElement.addEventListener("pointerdown",st),x.domElement.addEventListener("pointerup",E),s.current=async()=>{const q=d.clone(!0);q.visible=!0;const F=await new Dn().parseAsync(q,{binary:!0,onlyVisible:!0});ss(F,"tweens-provisional-scene.glb","model/gltf-binary")};let qe=-1/0;return x.setAnimationLoop(()=>{var ie;for(const ae of t){const Ve=b.get(ae.primitive_id);if(!Ve)continue;const Xe=cs(ae,R.current);Ve.visible=T&&!!Xe,Xe&&Ve.position.fromArray(Xe);const p=K.get(ae.primitive_id);p&&(p.visible=Ve.visible,p.position.copy(Ve.position))}r!=="source"&&Ne.update();const q=_n(e,R.current,M);if(r==="source"&&e.structural){if(q.camera){const ae=mn(q.camera);ue.position.copy(ae.position),ue.quaternion.copy(ae.quaternion),ue.projectionMatrix.copy(ae.projectionMatrix),ue.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ue.updateMatrixWorld()}d.visible=!!q.camera}if(B.visible=d.visible,Y.visible=d.visible,z.visible=_&&!!q.camera&&r!=="source",z.visible){const ae=mn(q.camera);He.position.copy(ae.position),He.quaternion.copy(ae.quaternion),He.projectionMatrix.copy(ae.projectionMatrix),He.updateMatrixWorld(),z.update()}const F=e.primitives.find(ae=>ae.id===i),Se=F?dr(F.quaternion):null;if(j.visible=_&&!!q.camera&&!!F,j.visible){j.position.fromArray(F.position);const ae=q.camera.model==="orthographic"?new Ae(0,0,1).applyQuaternion(new yn(...q.camera.quaternion)):new Ae(...q.camera.position).sub(j.position);ae.lengthSq()>1e-12?j.setDirection(ae.normalize()):j.visible=!1}if(performance.now()-qe>150){qe=performance.now();const ae={...e.camera,model:ue instanceof di?"orthographic":"perspective",position:ue.position.toArray(),quaternion:ue.quaternion.toArray()};(ie=c.current)==null||ie.call(c,r==="source"||!Se||!F?null:ls(Se,F.position,ae))}x.render(P,ue)}),()=>{r!=="source"&&D.current.set(nt,{position:ue.position.clone(),target:Ne.target.clone()}),s.current=null,x.setAnimationLoop(null),ye.disconnect(),Ne.dispose(),x.domElement.removeEventListener("pointerdown",st),x.domElement.removeEventListener("pointerup",E),P.traverse(q=>{var ie;const F=q;(ie=F.geometry)==null||ie.dispose(),(Array.isArray(F.material)?F.material:[F.material]).forEach(ae=>ae==null?void 0:ae.dispose())}),x.dispose(),x.domElement.remove()}},[e,t,i,r,o,s,m,g,T,_,M]),gn.jsxs("div",{className:"scene-canvas",ref:L,children:[w&&gn.jsx("p",{className:"canvas-error",children:w}),e.structural&&!e.structural.faces.length&&!e.primitives.length&&r!=="source"&&gn.jsx("p",{className:"canvas-error",role:"status",children:"No finite planes were resolved for this hypothesis. Source features and camera observability remain available."}),r==="source"&&e.structural&&!_n(e,n,M).camera&&gn.jsxs("p",{className:"canvas-error",role:"status",children:[_n(e,n,M).label,". Switch to Orbit to inspect the geometry."]})]})}export{Od as default};
