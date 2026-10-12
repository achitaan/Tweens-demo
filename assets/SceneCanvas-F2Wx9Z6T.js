import{c as Ma,N as yt,S as ci,C as $e,F as Or,V as Re,R as Fr,a as mt,w as Zn,M as Vt,W as Ei,b as Jt,d as at,L as Kt,H as Cn,U as kt,D as vt,B as At,e as cn,f as wn,p as Ta,E as xa,g as Ze,P as $t,A as Aa,h as In,i as Ct,j as Mn,k as li,l as ln,m as fn,n as Br,o as Ra,q as Ot,r as Tn,s as ba,t as Ca,u as rn,O as wa,v as Pa,x as ya,y as La,z as Da,G as Ua,I as Ia,J as Na,K as Oa,Q as Fa,T as Ba,X as Ga,Y as Ha,Z as Va,_ as ka,$ as Gr,a0 as Hr,a1 as Vr,a2 as vn,a3 as Bt,a4 as an,a5 as kr,a6 as jt,a7 as za,a8 as Wa,a9 as Xa,aa as Ya,ab as zr,ac as Ka,ad as qa,ae as Za,af as Wr,ag as ze,ah as $a,ai as ja,aj as Qa,ak as zt,al as Pn,am as Tt,an as xt,ao as Xr,ap as Ht,aq as Pt,ar as xn,as as Yr,at as Kr,au as qr,av as Zr,aw as Ja,ax as eo,ay as to,az as no,aA as $r,aB as Gt,aC as io,aD as ro,aE as ao,aF as jr,aG as oo,aH as Qr,aI as Jr,aJ as Nn,aK as On,aL as Fn,aM as Bn,aN as Qe,aO as Si,aP as Mi,aQ as Ti,aR as xi,aS as Ai,aT as Ri,aU as bi,aV as Ci,aW as wi,aX as Pi,aY as yi,aZ as Li,a_ as Di,a$ as Ui,b0 as Ii,b1 as Ni,b2 as Oi,b3 as Fi,b4 as Bi,b5 as Gi,b6 as Hi,b7 as Vi,b8 as ki,b9 as zi,ba as Wi,bb as Xi,bc as Yi,bd as Ki,be as $n,bf as jn,bg as Qn,bh as Jn,bi as ei,bj as ti,bk as ni,bl as so,bm as qi,bn as co,bo as En,bp as lo,bq as Zi,br as $i,bs as ji,bt as ii,bu as ri,bv as fo,bw as ea,bx as uo,by as yn,bz as po,bA as ho,bB as ta,bC as na,bD as Qi,bE as ia,bF as Ji,bG as ra,bH as un,bI as en,bJ as aa,bK as fi,bL as mo,bM as oa,bN as _o,bO as er,bP as ht,bQ as go,bR as vo,bS as Eo,bT as So,bU as Mo,bV as To,bW as xo,bX as Ao,bY as Ro,bZ as bo,b_ as Co,b$ as wo,c0 as Po,c1 as yo,c2 as Lo,c3 as Do,c4 as Uo,c5 as Io,c6 as No,c7 as Qt,c8 as qt,c9 as ai,ca as tr,cb as Oo,cc as An,cd as Gn,ce as Fo,cf as Bo,cg as Rn,ch as Go,ci as oi,cj as Ho,ck as sa,cl as nr,cm as Xt,cn as Vo,co as ko,cp as zo,cq as Wo,cr as Xo,cs as Yo,ct as Ko,cu as qo,cv as Zo,cw as $o,cx as jo,cy as Qo,cz as Jo,cA as es,cB as ts,cC as ns,cD as is,cE as ir}from"./index-G7bdyDr3.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ca(){let e=null,t=!1,n=null,i=null;function r(a,o){n(a,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function rs(e){const t=new WeakMap;function n(s,m){const _=s.array,T=s.usage,g=_.byteLength,M=e.createBuffer();e.bindBuffer(m,M),e.bufferData(m,_,T),s.onUploadCallback();let E;if(_ instanceof Float32Array)E=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)E=e.HALF_FLOAT;else if(_ instanceof Uint16Array)s.isFloat16BufferAttribute?E=e.HALF_FLOAT:E=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)E=e.SHORT;else if(_ instanceof Uint32Array)E=e.UNSIGNED_INT;else if(_ instanceof Int32Array)E=e.INT;else if(_ instanceof Int8Array)E=e.BYTE;else if(_ instanceof Uint8Array)E=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)E=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:E,bytesPerElement:_.BYTES_PER_ELEMENT,version:s.version,size:g}}function i(s,m,_){const T=m.array,g=m.updateRanges;if(e.bindBuffer(_,s),g.length===0)e.bufferSubData(_,0,T);else{g.sort((E,L)=>E.start-L.start);let M=0;for(let E=1;E<g.length;E++){const L=g[M],A=g[E];A.start<=L.start+L.count+1?L.count=Math.max(L.count,A.start+A.count-L.start):(++M,g[M]=A)}g.length=M+1;for(let E=0,L=g.length;E<L;E++){const A=g[E];e.bufferSubData(_,A.start*T.BYTES_PER_ELEMENT,T,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const m=t.get(s);m&&(e.deleteBuffer(m.buffer),t.delete(s))}function o(s,m){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const T=t.get(s);(!T||T.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const _=t.get(s);if(_===void 0)t.set(s,n(s,m));else if(_.version<s.version){if(_.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,s,m),_.version=s.version}}return{get:r,remove:a,update:o}}var as=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,os=`#ifdef USE_ALPHAHASH
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
#endif`,ss=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ls=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,us=`#ifdef USE_AOMAP
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
#endif`,ds=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ps=`#ifdef USE_BATCHING
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
#endif`,hs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ms=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_s=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vs=`#ifdef USE_IRIDESCENCE
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
#endif`,Es=`#ifdef USE_BUMPMAP
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
#endif`,Ss=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ms=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ts=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,As=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cs=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ws=`#define PI 3.141592653589793
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
} // validated`,Ps=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ys=`vec3 transformedNormal = objectNormal;
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
#endif`,Ls=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ds=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Us=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Is=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ns="gl_FragColor = linearToOutputTexel( gl_FragColor );",Os=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fs=`#ifdef USE_ENVMAP
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
#endif`,Bs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gs=`#ifdef USE_ENVMAP
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
#endif`,Hs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vs=`#ifdef USE_ENVMAP
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
#endif`,ks=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ws=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ys=`#ifdef USE_GRADIENTMAP
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
}`,Ks=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$s=`uniform bool receiveShadow;
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
#endif`,js=`#ifdef USE_ENVMAP
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
#endif`,Qs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Js=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ec=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nc=`PhysicalMaterial material;
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
#endif`,ic=`struct PhysicalMaterial {
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
}`,rc=`
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
#endif`,ac=`#if defined( RE_IndirectDiffuse )
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
#endif`,oc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hc=`#if defined( USE_POINTS_UV )
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
#endif`,mc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_c=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ec=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sc=`#ifdef USE_MORPHTARGETS
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
#endif`,Mc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ac=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cc=`#ifdef USE_NORMALMAP
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
#endif`,wc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ic=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zc=`float getShadowMask() {
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
}`,Wc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,Yc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kc=`#ifdef USE_SKINNING
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
#endif`,qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$c=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qc=`#ifdef USE_TRANSMISSION
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
#endif`,Jc=`#ifdef USE_TRANSMISSION
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
#endif`,el=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,il=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,al=`uniform sampler2D t2D;
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
}`,ol=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ll=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fl=`#include <common>
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
}`,ul=`#if DEPTH_PACKING == 3200
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
}`,dl=`#define DISTANCE
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
}`,pl=`#define DISTANCE
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
}`,hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ml=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_l=`uniform float scale;
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
}`,gl=`uniform vec3 diffuse;
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
}`,vl=`#include <common>
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
}`,El=`uniform vec3 diffuse;
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
}`,Sl=`#define LAMBERT
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
}`,Ml=`#define LAMBERT
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
}`,Tl=`#define MATCAP
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
}`,xl=`#define MATCAP
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
}`,Al=`#define NORMAL
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
}`,Rl=`#define NORMAL
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
}`,bl=`#define PHONG
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
}`,Cl=`#define PHONG
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
}`,wl=`#define STANDARD
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
}`,Pl=`#define STANDARD
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
}`,yl=`#define TOON
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
}`,Ll=`#define TOON
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
}`,Dl=`uniform float size;
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
}`,Ul=`uniform vec3 diffuse;
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
}`,Il=`#include <common>
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
}`,Nl=`uniform vec3 color;
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
}`,Ol=`uniform float rotation;
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
}`,Fl=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:as,alphahash_pars_fragment:os,alphamap_fragment:ss,alphamap_pars_fragment:cs,alphatest_fragment:ls,alphatest_pars_fragment:fs,aomap_fragment:us,aomap_pars_fragment:ds,batching_pars_vertex:ps,batching_vertex:hs,begin_vertex:ms,beginnormal_vertex:_s,bsdfs:gs,iridescence_fragment:vs,bumpmap_pars_fragment:Es,clipping_planes_fragment:Ss,clipping_planes_pars_fragment:Ms,clipping_planes_pars_vertex:Ts,clipping_planes_vertex:xs,color_fragment:As,color_pars_fragment:Rs,color_pars_vertex:bs,color_vertex:Cs,common:ws,cube_uv_reflection_fragment:Ps,defaultnormal_vertex:ys,displacementmap_pars_vertex:Ls,displacementmap_vertex:Ds,emissivemap_fragment:Us,emissivemap_pars_fragment:Is,colorspace_fragment:Ns,colorspace_pars_fragment:Os,envmap_fragment:Fs,envmap_common_pars_fragment:Bs,envmap_pars_fragment:Gs,envmap_pars_vertex:Hs,envmap_physical_pars_fragment:js,envmap_vertex:Vs,fog_vertex:ks,fog_pars_vertex:zs,fog_fragment:Ws,fog_pars_fragment:Xs,gradientmap_pars_fragment:Ys,lightmap_pars_fragment:Ks,lights_lambert_fragment:qs,lights_lambert_pars_fragment:Zs,lights_pars_begin:$s,lights_toon_fragment:Qs,lights_toon_pars_fragment:Js,lights_phong_fragment:ec,lights_phong_pars_fragment:tc,lights_physical_fragment:nc,lights_physical_pars_fragment:ic,lights_fragment_begin:rc,lights_fragment_maps:ac,lights_fragment_end:oc,logdepthbuf_fragment:sc,logdepthbuf_pars_fragment:cc,logdepthbuf_pars_vertex:lc,logdepthbuf_vertex:fc,map_fragment:uc,map_pars_fragment:dc,map_particle_fragment:pc,map_particle_pars_fragment:hc,metalnessmap_fragment:mc,metalnessmap_pars_fragment:_c,morphinstance_vertex:gc,morphcolor_vertex:vc,morphnormal_vertex:Ec,morphtarget_pars_vertex:Sc,morphtarget_vertex:Mc,normal_fragment_begin:Tc,normal_fragment_maps:xc,normal_pars_fragment:Ac,normal_pars_vertex:Rc,normal_vertex:bc,normalmap_pars_fragment:Cc,clearcoat_normal_fragment_begin:wc,clearcoat_normal_fragment_maps:Pc,clearcoat_pars_fragment:yc,iridescence_pars_fragment:Lc,opaque_fragment:Dc,packing:Uc,premultiplied_alpha_fragment:Ic,project_vertex:Nc,dithering_fragment:Oc,dithering_pars_fragment:Fc,roughnessmap_fragment:Bc,roughnessmap_pars_fragment:Gc,shadowmap_pars_fragment:Hc,shadowmap_pars_vertex:Vc,shadowmap_vertex:kc,shadowmask_pars_fragment:zc,skinbase_vertex:Wc,skinning_pars_vertex:Xc,skinning_vertex:Yc,skinnormal_vertex:Kc,specularmap_fragment:qc,specularmap_pars_fragment:Zc,tonemapping_fragment:$c,tonemapping_pars_fragment:jc,transmission_fragment:Qc,transmission_pars_fragment:Jc,uv_pars_fragment:el,uv_pars_vertex:tl,uv_vertex:nl,worldpos_vertex:il,background_vert:rl,background_frag:al,backgroundCube_vert:ol,backgroundCube_frag:sl,cube_vert:cl,cube_frag:ll,depth_vert:fl,depth_frag:ul,distanceRGBA_vert:dl,distanceRGBA_frag:pl,equirect_vert:hl,equirect_frag:ml,linedashed_vert:_l,linedashed_frag:gl,meshbasic_vert:vl,meshbasic_frag:El,meshlambert_vert:Sl,meshlambert_frag:Ml,meshmatcap_vert:Tl,meshmatcap_frag:xl,meshnormal_vert:Al,meshnormal_frag:Rl,meshphong_vert:bl,meshphong_frag:Cl,meshphysical_vert:wl,meshphysical_frag:Pl,meshtoon_vert:yl,meshtoon_frag:Ll,points_vert:Dl,points_frag:Ul,shadow_vert:Il,shadow_frag:Nl,sprite_vert:Ol,sprite_frag:Fl},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},bt={basic:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:ht([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:ht([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:ht([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:ht([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:ht([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:ht([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:ht([ie.common,ie.displacementmap,{referencePosition:{value:new Re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:ht([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};bt.physical={uniforms:ht([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const hn={r:0,b:0,g:0},Ut=new ia,Bl=new Vt;function Gl(e,t,n,i,r,a,o){const s=new $e(0);let m=a===!0?0:1,_,T,g=null,M=0,E=null;function L(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?n:t).get(v)),v}function A(b){let v=!1;const D=L(b);D===null?c(s,m):D&&D.isColor&&(c(D,1),v=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(b,v){const D=L(v);D&&(D.isCubeTexture||D.mapping===yn)?(T===void 0&&(T=new xt(new na(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Qi(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(R,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(T)),Ut.copy(v.backgroundRotation),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),T.material.uniforms.envMap.value=D,T.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,T.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,T.material.uniforms.backgroundRotation.value.setFromMatrix4(Bl.makeRotationFromEuler(Ut)),T.material.toneMapped=at.getTransfer(D.colorSpace)!==Qe,(g!==D||M!==D.version||E!==e.toneMapping)&&(T.material.needsUpdate=!0,g=D,M=D.version,E=e.toneMapping),T.layers.enableAll(),b.unshift(T,T.geometry,T.material,0,0,null)):D&&D.isTexture&&(_===void 0&&(_=new xt(new Zr(2,2),new zt({name:"BackgroundMaterial",uniforms:Qi(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(_)),_.material.uniforms.t2D.value=D,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.toneMapped=at.getTransfer(D.colorSpace)!==Qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),_.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||M!==D.version||E!==e.toneMapping)&&(_.material.needsUpdate=!0,g=D,M=D.version,E=e.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null))}function c(b,v){b.getRGB(hn,ta(e)),i.buffers.color.setClear(hn.r,hn.g,hn.b,v,o)}function w(){T!==void 0&&(T.geometry.dispose(),T.material.dispose(),T=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,v=1){s.set(b),m=v,c(s,m)},getClearAlpha:function(){return m},setClearAlpha:function(b){m=b,c(s,m)},render:A,addToRenderList:f,dispose:w}}function Hl(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=M(null);let a=r,o=!1;function s(d,C,O,B,W){let Y=!1;const X=g(B,O,C);a!==X&&(a=X,_(a.object)),Y=E(d,B,O,W),Y&&L(d,B,O,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(d,C,O,B),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return e.createVertexArray()}function _(d){return e.bindVertexArray(d)}function T(d){return e.deleteVertexArray(d)}function g(d,C,O){const B=O.wireframe===!0;let W=i[d.id];W===void 0&&(W={},i[d.id]=W);let Y=W[C.id];Y===void 0&&(Y={},W[C.id]=Y);let X=Y[B];return X===void 0&&(X=M(m()),Y[B]=X),X}function M(d){const C=[],O=[],B=[];for(let W=0;W<n;W++)C[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:d,attributes:{},index:null}}function E(d,C,O,B){const W=a.attributes,Y=C.attributes;let X=0;const ee=O.getAttributes();for(const k in ee)if(ee[k].location>=0){const Te=W[k];let De=Y[k];if(De===void 0&&(k==="instanceMatrix"&&d.instanceMatrix&&(De=d.instanceMatrix),k==="instanceColor"&&d.instanceColor&&(De=d.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;X++}return a.attributesNum!==X||a.index!==B}function L(d,C,O,B){const W={},Y=C.attributes;let X=0;const ee=O.getAttributes();for(const k in ee)if(ee[k].location>=0){let Te=Y[k];Te===void 0&&(k==="instanceMatrix"&&d.instanceMatrix&&(Te=d.instanceMatrix),k==="instanceColor"&&d.instanceColor&&(Te=d.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),W[k]=De,X++}a.attributes=W,a.attributesNum=X,a.index=B}function A(){const d=a.newAttributes;for(let C=0,O=d.length;C<O;C++)d[C]=0}function f(d){c(d,0)}function c(d,C){const O=a.newAttributes,B=a.enabledAttributes,W=a.attributeDivisors;O[d]=1,B[d]===0&&(e.enableVertexAttribArray(d),B[d]=1),W[d]!==C&&(e.vertexAttribDivisor(d,C),W[d]=C)}function w(){const d=a.newAttributes,C=a.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==d[O]&&(e.disableVertexAttribArray(O),C[O]=0)}function b(d,C,O,B,W,Y,X){X===!0?e.vertexAttribIPointer(d,C,O,W,Y):e.vertexAttribPointer(d,C,O,B,W,Y)}function v(d,C,O,B){A();const W=B.attributes,Y=O.getAttributes(),X=C.defaultAttributeValues;for(const ee in Y){const k=Y[ee];if(k.location>=0){let he=W[ee];if(he===void 0&&(ee==="instanceMatrix"&&d.instanceMatrix&&(he=d.instanceMatrix),ee==="instanceColor"&&d.instanceColor&&(he=d.instanceColor)),he!==void 0){const Te=he.normalized,De=he.itemSize,Ve=t.get(he);if(Ve===void 0)continue;const ce=Ve.buffer,fe=Ve.type,Pe=Ve.bytesPerElement,H=fe===e.INT||fe===e.UNSIGNED_INT||he.gpuType===$r;if(he.isInterleavedBufferAttribute){const K=he.data,se=K.stride,Ce=he.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<k.locationSize;ge++)c(k.location+ge,K.meshPerAttribute);d.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<k.locationSize;ge++)f(k.location+ge);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let ge=0;ge<k.locationSize;ge++)b(k.location+ge,De/k.locationSize,fe,Te,se*Pe,(Ce+De/k.locationSize*ge)*Pe,H)}else{if(he.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)c(k.location+K,he.meshPerAttribute);d.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let K=0;K<k.locationSize;K++)f(k.location+K);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let K=0;K<k.locationSize;K++)b(k.location+K,De/k.locationSize,fe,Te,De*Pe,De/k.locationSize*K*Pe,H)}}else if(X!==void 0){const Te=X[ee];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(k.location,Te);break;case 3:e.vertexAttrib3fv(k.location,Te);break;case 4:e.vertexAttrib4fv(k.location,Te);break;default:e.vertexAttrib1fv(k.location,Te)}}}}w()}function D(){G();for(const d in i){const C=i[d];for(const O in C){const B=C[O];for(const W in B)T(B[W].object),delete B[W];delete C[O]}delete i[d]}}function R(d){if(i[d.id]===void 0)return;const C=i[d.id];for(const O in C){const B=C[O];for(const W in B)T(B[W].object),delete B[W];delete C[O]}delete i[d.id]}function I(d){for(const C in i){const O=i[C];if(O[d.id]===void 0)continue;const B=O[d.id];for(const W in B)T(B[W].object),delete B[W];delete O[d.id]}}function G(){h(),o=!0,a!==r&&(a=r,_(a.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:G,resetDefaultState:h,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:f,disableUnusedAttributes:w}}function Vl(e,t,n){let i;function r(_){i=_}function a(_,T){e.drawArrays(i,_,T),n.update(T,i,1)}function o(_,T,g){g!==0&&(e.drawArraysInstanced(i,_,T,g),n.update(T,i,g))}function s(_,T,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,_,0,T,0,g);let E=0;for(let L=0;L<g;L++)E+=T[L];n.update(E,i,1)}function m(_,T,g,M){if(g===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let L=0;L<_.length;L++)o(_[L],T[L],M[L]);else{E.multiDrawArraysInstancedWEBGL(i,_,0,T,0,M,0,g);let L=0;for(let A=0;A<g;A++)L+=T[A]*M[A];n.update(L,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=m}function kl(e,t,n,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Ct&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(I){const G=I===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==kt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gt&&!G)}function m(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=n.precision!==void 0?n.precision:"highp";const T=m(_);T!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",T,"instead."),_=T);const g=n.logarithmicDepthBuffer===!0,M=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=L>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:m,textureFormatReadable:o,textureTypeReadable:s,precision:_,logarithmicDepthBuffer:g,reversedDepthBuffer:M,maxTextures:E,maxVertexTextures:L,maxTextureSize:A,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:D,maxSamples:R}}function zl(e){const t=this;let n=null,i=0,r=!1,a=!1;const o=new Wr,s=new ze,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,M){const E=g.length!==0||M||i!==0||r;return r=M,i=g.length,E},this.beginShadows=function(){a=!0,T(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,M){n=T(g,M,0)},this.setState=function(g,M,E){const L=g.clippingPlanes,A=g.clipIntersection,f=g.clipShadows,c=e.get(g);if(!r||L===null||L.length===0||a&&!f)a?T(null):_();else{const w=a?0:i,b=w*4;let v=c.clippingState||null;m.value=v,v=T(L,M,b,E);for(let D=0;D!==b;++D)v[D]=n[D];c.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function _(){m.value!==n&&(m.value=n,m.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function T(g,M,E,L){const A=g!==null?g.length:0;let f=null;if(A!==0){if(f=m.value,L!==!0||f===null){const c=E+A*4,w=M.matrixWorldInverse;s.getNormalMatrix(w),(f===null||f.length<c)&&(f=new Float32Array(c));for(let b=0,v=E;b!==A;++b,v+=4)o.copy(g[b]).applyMatrix4(w,s),o.normal.toArray(f,v),f[v+3]=o.constant}m.value=f,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,f}}function Wl(e){let t=new WeakMap;function n(o,s){return s===ii?o.mapping=un:s===ri&&(o.mapping=en),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ii||s===ri)if(t.has(o)){const m=t.get(o).texture;return n(m,o.mapping)}else{const m=o.image;if(m&&m.height>0){const _=new fo(m.height);return _.fromEquirectangularTexture(e,o),t.set(o,_),o.addEventListener("dispose",r),n(_.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const m=t.get(s);m!==void 0&&(t.delete(s),m.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const Zt=4,rr=[.125,.215,.35,.446,.526,.582],Ft=20,Hn=new aa,ar=new $e;let Vn=null,kn=0,zn=0,Wn=!1;const Nt=(1+Math.sqrt(5))/2,Yt=1/Nt,or=[new Re(-Nt,Yt,0),new Re(Nt,Yt,0),new Re(-Yt,0,Nt),new Re(Yt,0,Nt),new Re(0,Nt,-Yt),new Re(0,Nt,Yt),new Re(-1,1,-1),new Re(1,1,-1),new Re(-1,1,1),new Re(1,1,1)],Xl=new Re;class sr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,a={}){const{size:o=256,position:s=Xl}=a;Vn=this._renderer.getRenderTarget(),kn=this._renderer.getActiveCubeFace(),zn=this._renderer.getActiveMipmapLevel(),Wn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,i,r,m,s),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vn,kn,zn),this._renderer.xr.enabled=Wn,t.scissorTest=!1,mn(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===un||t.mapping===en?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vn=this._renderer.getRenderTarget(),kn=this._renderer.getActiveCubeFace(),zn=this._renderer.getActiveMipmapLevel(),Wn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Cn,format:Ct,colorSpace:wn,depthBuffer:!1},r=cr(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cr(t,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yl(a)),this._blurMaterial=Kl(a,t,n)}return r}_compileMaterial(t){const n=new xt(this._lodPlanes[0],t);this._renderer.compile(n,Hn)}_sceneToCubeUV(t,n,i,r,a){const m=new $t(90,1,n,i),_=[1,-1,1,1,1,1],T=[1,1,1,-1,-1,-1],g=this._renderer,M=g.autoClear,E=g.toneMapping;g.getClearColor(ar),g.toneMapping=yt,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const A=new fi({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),f=new xt(new na,A);let c=!1;const w=t.background;w?w.isColor&&(A.color.copy(w),t.background=null,c=!0):(A.color.copy(ar),c=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(m.up.set(0,_[b],0),m.position.set(a.x,a.y,a.z),m.lookAt(a.x+T[b],a.y,a.z)):v===1?(m.up.set(0,0,_[b]),m.position.set(a.x,a.y,a.z),m.lookAt(a.x,a.y+T[b],a.z)):(m.up.set(0,_[b],0),m.position.set(a.x,a.y,a.z),m.lookAt(a.x,a.y,a.z+T[b]));const D=this._cubeSize;mn(r,v*D,b>2?D:0,D,D),g.setRenderTarget(r),c&&g.render(f,m),g.render(t,m)}f.geometry.dispose(),f.material.dispose(),g.toneMapping=E,g.autoClear=M,t.background=w}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===un||t.mapping===en;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lr());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=t;const m=this._cubeSize;mn(n,0,0,3*m,2*m),i.setRenderTarget(n),i.render(o,Hn)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=or[(r-a-1)%or.length];this._blur(t,a-1,a,o,s)}n.autoClear=i}_blur(t,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",a),this._halfBlur(o,t,i,i,r,"longitudinal",a)}_halfBlur(t,n,i,r,a,o,s){const m=this._renderer,_=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const T=3,g=new xt(this._lodPlanes[r],_),M=_.uniforms,E=this._sizeLods[i]-1,L=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*Ft-1),A=a/L,f=isFinite(a)?1+Math.floor(T*A):Ft;f>Ft&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ft}`);const c=[];let w=0;for(let I=0;I<Ft;++I){const G=I/A,h=Math.exp(-G*G/2);c.push(h),I===0?w+=h:I<f&&(w+=2*h)}for(let I=0;I<c.length;I++)c[I]=c[I]/w;M.envMap.value=t.texture,M.samples.value=f,M.weights.value=c,M.latitudinal.value=o==="latitudinal",s&&(M.poleAxis.value=s);const{_lodMax:b}=this;M.dTheta.value=L,M.mipInt.value=b-i;const v=this._sizeLods[r],D=3*v*(r>b-Zt?r-b+Zt:0),R=4*(this._cubeSize-v);mn(n,D,R,3*v,2*v),m.setRenderTarget(n),m.render(g,Hn)}}function Yl(e){const t=[],n=[],i=[];let r=e;const a=e-Zt+1+rr.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let m=1/s;o>e-Zt?m=rr[o-e+Zt-1]:o===0&&(m=0),i.push(m);const _=1/(s-2),T=-_,g=1+_,M=[T,T,g,T,g,g,T,T,g,g,T,g],E=6,L=6,A=3,f=2,c=1,w=new Float32Array(A*L*E),b=new Float32Array(f*L*E),v=new Float32Array(c*L*E);for(let R=0;R<E;R++){const I=R%3*2/3-1,G=R>2?0:-1,h=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];w.set(h,A*L*R),b.set(M,f*L*R);const d=[R,R,R,R,R,R];v.set(d,c*L*R)}const D=new Pn;D.setAttribute("position",new Tt(w,A)),D.setAttribute("uv",new Tt(b,f)),D.setAttribute("faceIndex",new Tt(v,c)),t.push(D),r>Zt&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function cr(e,t,n){const i=new Jt(e,t,n);return i.texture.mapping=yn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mn(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Kl(e,t,n){const i=new Float32Array(Ft),r=new Re(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Ft,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ui(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function lr(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ui(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function fr(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ui(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function ui(){return`

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
	`}function ql(e){let t=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const m=s.mapping,_=m===ii||m===ri,T=m===un||m===en;if(_||T){let g=t.get(s);const M=g!==void 0?g.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==M)return n===null&&(n=new sr(e)),g=_?n.fromEquirectangular(s,g):n.fromCubemap(s,g),g.texture.pmremVersion=s.pmremVersion,t.set(s,g),g.texture;if(g!==void 0)return g.texture;{const E=s.image;return _&&E&&E.height>0||T&&E&&r(E)?(n===null&&(n=new sr(e)),g=_?n.fromEquirectangular(s):n.fromCubemap(s),g.texture.pmremVersion=s.pmremVersion,t.set(s,g),s.addEventListener("dispose",a),g.texture):null}}}return s}function r(s){let m=0;const _=6;for(let T=0;T<_;T++)s[T]!==void 0&&m++;return m===_}function a(s){const m=s.target;m.removeEventListener("dispose",a);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zl(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $l(e,t,n,i){const r={},a=new WeakMap;function o(g){const M=g.target;M.index!==null&&t.remove(M.index);for(const L in M.attributes)t.remove(M.attributes[L]);M.removeEventListener("dispose",o),delete r[M.id];const E=a.get(M);E&&(t.remove(E),a.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function s(g,M){return r[M.id]===!0||(M.addEventListener("dispose",o),r[M.id]=!0,n.memory.geometries++),M}function m(g){const M=g.attributes;for(const E in M)t.update(M[E],e.ARRAY_BUFFER)}function _(g){const M=[],E=g.index,L=g.attributes.position;let A=0;if(E!==null){const w=E.array;A=E.version;for(let b=0,v=w.length;b<v;b+=3){const D=w[b+0],R=w[b+1],I=w[b+2];M.push(D,R,R,I,I,D)}}else if(L!==void 0){const w=L.array;A=L.version;for(let b=0,v=w.length/3-1;b<v;b+=3){const D=b+0,R=b+1,I=b+2;M.push(D,R,R,I,I,D)}}else return;const f=new(_o(M)?mo:oa)(M,1);f.version=A;const c=a.get(g);c&&t.remove(c),a.set(g,f)}function T(g){const M=a.get(g);if(M){const E=g.index;E!==null&&M.version<E.version&&_(g)}else _(g);return a.get(g)}return{get:s,update:m,getWireframeAttribute:T}}function jl(e,t,n){let i;function r(M){i=M}let a,o;function s(M){a=M.type,o=M.bytesPerElement}function m(M,E){e.drawElements(i,E,a,M*o),n.update(E,i,1)}function _(M,E,L){L!==0&&(e.drawElementsInstanced(i,E,a,M*o,L),n.update(E,i,L))}function T(M,E,L){if(L===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,a,M,0,L);let f=0;for(let c=0;c<L;c++)f+=E[c];n.update(f,i,1)}function g(M,E,L,A){if(L===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<M.length;c++)_(M[c]/o,E[c],A[c]);else{f.multiDrawElementsInstancedWEBGL(i,E,0,a,M,0,A,0,L);let c=0;for(let w=0;w<L;w++)c+=E[w]*A[w];n.update(c,i,1)}}this.setMode=r,this.setIndex=s,this.render=m,this.renderInstances=_,this.renderMultiDraw=T,this.renderMultiDrawInstances=g}function Ql(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=s*(a/3);break;case e.LINES:n.lines+=s*(a/2);break;case e.LINE_STRIP:n.lines+=s*(a-1);break;case e.LINE_LOOP:n.lines+=s*a;break;case e.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Jl(e,t,n){const i=new WeakMap,r=new mt;function a(o,s,m){const _=o.morphTargetInfluences,T=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,g=T!==void 0?T.length:0;let M=i.get(s);if(M===void 0||M.count!==g){let h=function(){I.dispose(),i.delete(s),s.removeEventListener("dispose",h)};M!==void 0&&M.texture.dispose();const E=s.morphAttributes.position!==void 0,L=s.morphAttributes.normal!==void 0,A=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],w=s.morphAttributes.color||[];let b=0;E===!0&&(b=1),L===!0&&(b=2),A===!0&&(b=3);let v=s.attributes.position.count*b,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const R=new Float32Array(v*D*4*g),I=new ea(R,v,D,g);I.type=Gt,I.needsUpdate=!0;const G=b*4;for(let d=0;d<g;d++){const C=f[d],O=c[d],B=w[d],W=v*D*4*d;for(let Y=0;Y<C.count;Y++){const X=Y*G;E===!0&&(r.fromBufferAttribute(C,Y),R[W+X+0]=r.x,R[W+X+1]=r.y,R[W+X+2]=r.z,R[W+X+3]=0),L===!0&&(r.fromBufferAttribute(O,Y),R[W+X+4]=r.x,R[W+X+5]=r.y,R[W+X+6]=r.z,R[W+X+7]=0),A===!0&&(r.fromBufferAttribute(B,Y),R[W+X+8]=r.x,R[W+X+9]=r.y,R[W+X+10]=r.z,R[W+X+11]=B.itemSize===4?r.w:1)}}M={count:g,texture:I,size:new Ze(v,D)},i.set(s,M),s.addEventListener("dispose",h)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)m.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let E=0;for(let A=0;A<_.length;A++)E+=_[A];const L=s.morphTargetsRelative?1:1-E;m.getUniforms().setValue(e,"morphTargetBaseInfluence",L),m.getUniforms().setValue(e,"morphTargetInfluences",_)}m.getUniforms().setValue(e,"morphTargetsTexture",M.texture,n),m.getUniforms().setValue(e,"morphTargetsTextureSize",M.size)}return{update:a}}function ef(e,t,n,i){let r=new WeakMap;function a(m){const _=i.render.frame,T=m.geometry,g=t.get(m,T);if(r.get(g)!==_&&(t.update(g),r.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",s)===!1&&m.addEventListener("dispose",s),r.get(m)!==_&&(n.update(m.instanceMatrix,e.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,e.ARRAY_BUFFER),r.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;r.get(M)!==_&&(M.update(),r.set(M,_))}return g}function o(){r=new WeakMap}function s(m){const _=m.target;_.removeEventListener("dispose",s),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:a,dispose:o}}const la=new wo,ur=new Br(1,1),fa=new ea,ua=new Co,da=new bo,dr=[],pr=[],hr=new Float32Array(16),mr=new Float32Array(9),_r=new Float32Array(4);function tn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let a=dr[r];if(a===void 0&&(a=new Float32Array(r),dr[r]=a),t!==0){i.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=n,e[o].toArray(a,s)}return a}function ct(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function lt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ln(e,t){let n=pr[t];n===void 0&&(n=new Int32Array(t),pr[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function tf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ct(n,t))return;e.uniform2fv(this.addr,t),lt(n,t)}}function rf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ct(n,t))return;e.uniform3fv(this.addr,t),lt(n,t)}}function af(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ct(n,t))return;e.uniform4fv(this.addr,t),lt(n,t)}}function of(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ct(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),lt(n,t)}else{if(ct(n,i))return;_r.set(i),e.uniformMatrix2fv(this.addr,!1,_r),lt(n,i)}}function sf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ct(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),lt(n,t)}else{if(ct(n,i))return;mr.set(i),e.uniformMatrix3fv(this.addr,!1,mr),lt(n,i)}}function cf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ct(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),lt(n,t)}else{if(ct(n,i))return;hr.set(i),e.uniformMatrix4fv(this.addr,!1,hr),lt(n,i)}}function lf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ff(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ct(n,t))return;e.uniform2iv(this.addr,t),lt(n,t)}}function uf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ct(n,t))return;e.uniform3iv(this.addr,t),lt(n,t)}}function df(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ct(n,t))return;e.uniform4iv(this.addr,t),lt(n,t)}}function pf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ct(n,t))return;e.uniform2uiv(this.addr,t),lt(n,t)}}function mf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ct(n,t))return;e.uniform3uiv(this.addr,t),lt(n,t)}}function _f(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ct(n,t))return;e.uniform4uiv(this.addr,t),lt(n,t)}}function gf(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(ur.compareFunction=zr,a=ur):a=la,n.setTexture2D(t||a,r)}function vf(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||ua,r)}function Ef(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||da,r)}function Sf(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||fa,r)}function Mf(e){switch(e){case 5126:return tf;case 35664:return nf;case 35665:return rf;case 35666:return af;case 35674:return of;case 35675:return sf;case 35676:return cf;case 5124:case 35670:return lf;case 35667:case 35671:return ff;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return pf;case 36294:return hf;case 36295:return mf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Sf}}function Tf(e,t){e.uniform1fv(this.addr,t)}function xf(e,t){const n=tn(t,this.size,2);e.uniform2fv(this.addr,n)}function Af(e,t){const n=tn(t,this.size,3);e.uniform3fv(this.addr,n)}function Rf(e,t){const n=tn(t,this.size,4);e.uniform4fv(this.addr,n)}function bf(e,t){const n=tn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cf(e,t){const n=tn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wf(e,t){const n=tn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Pf(e,t){e.uniform1iv(this.addr,t)}function yf(e,t){e.uniform2iv(this.addr,t)}function Lf(e,t){e.uniform3iv(this.addr,t)}function Df(e,t){e.uniform4iv(this.addr,t)}function Uf(e,t){e.uniform1uiv(this.addr,t)}function If(e,t){e.uniform2uiv(this.addr,t)}function Nf(e,t){e.uniform3uiv(this.addr,t)}function Of(e,t){e.uniform4uiv(this.addr,t)}function Ff(e,t,n){const i=this.cache,r=t.length,a=Ln(n,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||la,a[o])}function Bf(e,t,n){const i=this.cache,r=t.length,a=Ln(n,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||ua,a[o])}function Gf(e,t,n){const i=this.cache,r=t.length,a=Ln(n,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||da,a[o])}function Hf(e,t,n){const i=this.cache,r=t.length,a=Ln(n,r);ct(i,a)||(e.uniform1iv(this.addr,a),lt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||fa,a[o])}function Vf(e){switch(e){case 5126:return Tf;case 35664:return xf;case 35665:return Af;case 35666:return Rf;case 35674:return bf;case 35675:return Cf;case 35676:return wf;case 5124:case 35670:return Pf;case 35667:case 35671:return yf;case 35668:case 35672:return Lf;case 35669:case 35673:return Df;case 5125:return Uf;case 36294:return If;case 36295:return Nf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Hf}}class kf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mf(n.type)}}class zf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vf(n.type)}}class Wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(t,n[s.id],i)}}}const Xn=/(\w+)(\])?(\[|\.)?/g;function gr(e,t){e.seq.push(t),e.map[t.id]=t}function Xf(e,t,n){const i=e.name,r=i.length;for(Xn.lastIndex=0;;){const a=Xn.exec(i),o=Xn.lastIndex;let s=a[1];const m=a[2]==="]",_=a[3];if(m&&(s=s|0),_===void 0||_==="["&&o+2===r){gr(n,_===void 0?new kf(s,e,t):new zf(s,e,t));break}else{let g=n.map[s];g===void 0&&(g=new Wf(s),gr(n,g)),n=g}}}class Sn{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(n,r),o=t.getUniformLocation(n,a.name);Xf(a,o,this)}}setValue(t,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],m=i[s.id];m.needsUpdate!==!1&&s.setValue(t,m.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,a=t.length;r!==a;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function vr(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Yf=37297;let Kf=0;function qf(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const Er=new ze;function Zf(e){at._getMatrix(Er,at.workingColorSpace,e);const t=`mat3( ${Er.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(e)){case ra:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sr(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+qf(e.getShaderSource(t),s)}else return a}function $f(e,t){const n=Zf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jf(e,t){let n;switch(t){case Ro:n="Linear";break;case Ao:n="Reinhard";break;case xo:n="Cineon";break;case To:n="ACESFilmic";break;case Mo:n="AgX";break;case So:n="Neutral";break;case Eo:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _n=new Re;function Qf(){at.getLuminanceCoefficients(_n);const e=_n.x.toFixed(4),t=_n.y.toFixed(4),n=_n.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(on).join(`
`)}function eu(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function tu(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(t,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function on(e){return e!==""}function Mr(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nu=/^[ \t]*#include +<([\w\d./]+)>/gm;function si(e){return e.replace(nu,ru)}const iu=new Map;function ru(e,t){let n=Fe[t];if(n===void 0){const i=iu.get(t);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return si(n)}const au=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xr(e){return e.replace(au,ou)}function ou(e,t,n,i){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ar(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function su(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Xr?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===vo?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Pt&&(t="SHADOWMAP_TYPE_VSM"),t}function cu(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case un:case en:t="ENVMAP_TYPE_CUBE";break;case yn:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lu(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case en:t="ENVMAP_MODE_REFRACTION";break}return t}function fu(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Do:t="ENVMAP_BLENDING_MULTIPLY";break;case Lo:t="ENVMAP_BLENDING_MIX";break;case yo:t="ENVMAP_BLENDING_ADD";break}return t}function uu(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function du(e,t,n,i){const r=e.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const m=su(n),_=cu(n),T=lu(n),g=fu(n),M=uu(n),E=Jf(n),L=eu(a),A=r.createProgram();let f,c,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L].filter(on).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L].filter(on).join(`
`),c.length>0&&(c+=`
`)):(f=[Ar(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+T:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),c=[Ar(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,L,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.envMap?"#define "+T:"",n.envMap?"#define "+g:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yt?"#define TONE_MAPPING":"",n.toneMapping!==yt?Fe.tonemapping_pars_fragment:"",n.toneMapping!==yt?jf("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,$f("linearToOutputTexel",n.outputColorSpace),Qf(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(on).join(`
`)),o=si(o),o=Mr(o,n),o=Tr(o,n),s=si(s),s=Mr(s,n),s=Tr(s,n),o=xr(o),s=xr(s),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===er?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===er?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const b=w+f+o,v=w+c+s,D=vr(r,r.VERTEX_SHADER,b),R=vr(r,r.FRAGMENT_SHADER,v);r.attachShader(A,D),r.attachShader(A,R),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function I(C){if(e.debug.checkShaderErrors){const O=r.getProgramInfoLog(A)||"",B=r.getShaderInfoLog(D)||"",W=r.getShaderInfoLog(R)||"",Y=O.trim(),X=B.trim(),ee=W.trim();let k=!0,he=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,A,D,R);else{const Te=Sr(r,D,"vertex"),De=Sr(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+Te+`
`+De)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ee==="")&&(he=!1);he&&(C.diagnostics={runnable:k,programLog:Y,vertexShader:{log:X,prefix:f},fragmentShader:{log:ee,prefix:c}})}r.deleteShader(D),r.deleteShader(R),G=new Sn(r,A),h=tu(r,A)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let h;this.getAttributes=function(){return h===void 0&&I(this),h};let d=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=r.getProgramParameter(A,Yf)),d},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=R,this}let pu=0;class hu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new mu(t),n.set(t,i)),i}}class mu{constructor(t){this.id=pu++,this.code=t,this.usedTimes=0}}function _u(e,t,n,i,r,a,o){const s=new go,m=new hu,_=new Set,T=[],g=r.logarithmicDepthBuffer,M=r.vertexTextures;let E=r.precision;const L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(h){return _.add(h),h===0?"uv":`uv${h}`}function f(h,d,C,O,B){const W=O.fog,Y=B.geometry,X=h.isMeshStandardMaterial?O.environment:null,ee=(h.isMeshStandardMaterial?n:t).get(h.envMap||X),k=ee&&ee.mapping===yn?ee.image.height:null,he=L[h.type];h.precision!==null&&(E=r.getMaxPrecision(h.precision),E!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",E,"instead."));const Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,De=Te!==void 0?Te.length:0;let Ve=0;Y.morphAttributes.position!==void 0&&(Ve=1),Y.morphAttributes.normal!==void 0&&(Ve=2),Y.morphAttributes.color!==void 0&&(Ve=3);let ce,fe,Pe,H;if(he){const We=bt[he];ce=We.vertexShader,fe=We.fragmentShader}else ce=h.vertexShader,fe=h.fragmentShader,m.update(h),Pe=m.getVertexShaderID(h),H=m.getFragmentShaderID(h);const K=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,Be=!!h.map,ot=!!h.matcap,S=!!ee,Je=!!h.aoMap,Ie=!!h.lightMap,ye=!!h.bumpMap,me=!!h.normalMap,et=!!h.displacementMap,_e=!!h.emissiveMap,Oe=!!h.metalnessMap,ft=!!h.roughnessMap,rt=h.anisotropy>0,p=h.clearcoat>0,l=h.dispersion>0,U=h.iridescence>0,z=h.sheen>0,Z=h.transmission>0,V=rt&&!!h.anisotropyMap,Me=p&&!!h.clearcoatMap,te=p&&!!h.clearcoatNormalMap,ve=p&&!!h.clearcoatRoughnessMap,Ee=U&&!!h.iridescenceMap,Q=U&&!!h.iridescenceThicknessMap,oe=z&&!!h.sheenColorMap,we=z&&!!h.sheenRoughnessMap,Se=!!h.specularMap,re=!!h.specularColorMap,Ne=!!h.specularIntensityMap,x=Z&&!!h.transmissionMap,J=Z&&!!h.thicknessMap,ne=!!h.gradientMap,ue=!!h.alphaMap,$=h.alphaTest>0,q=!!h.alphaHash,pe=!!h.extensions;let Ue=yt;h.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ue=e.toneMapping);const qe={shaderID:he,shaderType:h.type,shaderName:h.name,vertexShader:ce,fragmentShader:fe,defines:h.defines,customVertexShaderID:Pe,customFragmentShaderID:H,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:E,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:wn,alphaToCoverage:!!h.alphaToCoverage,map:Be,matcap:ot,envMap:S,envMapMode:S&&ee.mapping,envMapCubeUVHeight:k,aoMap:Je,lightMap:Ie,bumpMap:ye,normalMap:me,displacementMap:M&&et,emissiveMap:_e,normalMapObjectSpace:me&&h.normalMapType===ho,normalMapTangentSpace:me&&h.normalMapType===po,metalnessMap:Oe,roughnessMap:ft,anisotropy:rt,anisotropyMap:V,clearcoat:p,clearcoatMap:Me,clearcoatNormalMap:te,clearcoatRoughnessMap:ve,dispersion:l,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:z,sheenColorMap:oe,sheenRoughnessMap:we,specularMap:Se,specularColorMap:re,specularIntensityMap:Ne,transmission:Z,transmissionMap:x,thicknessMap:J,gradientMap:ne,opaque:h.transparent===!1&&h.blending===En&&h.alphaToCoverage===!1,alphaMap:ue,alphaTest:$,alphaHash:q,combine:h.combine,mapUv:Be&&A(h.map.channel),aoMapUv:Je&&A(h.aoMap.channel),lightMapUv:Ie&&A(h.lightMap.channel),bumpMapUv:ye&&A(h.bumpMap.channel),normalMapUv:me&&A(h.normalMap.channel),displacementMapUv:et&&A(h.displacementMap.channel),emissiveMapUv:_e&&A(h.emissiveMap.channel),metalnessMapUv:Oe&&A(h.metalnessMap.channel),roughnessMapUv:ft&&A(h.roughnessMap.channel),anisotropyMapUv:V&&A(h.anisotropyMap.channel),clearcoatMapUv:Me&&A(h.clearcoatMap.channel),clearcoatNormalMapUv:te&&A(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(h.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(h.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&A(h.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&A(h.sheenColorMap.channel),sheenRoughnessMapUv:we&&A(h.sheenRoughnessMap.channel),specularMapUv:Se&&A(h.specularMap.channel),specularColorMapUv:re&&A(h.specularColorMap.channel),specularIntensityMapUv:Ne&&A(h.specularIntensityMap.channel),transmissionMapUv:x&&A(h.transmissionMap.channel),thicknessMapUv:J&&A(h.thicknessMap.channel),alphaMapUv:ue&&A(h.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(me||rt),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Be||ue),fog:!!W,useFog:h.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:h.flatShading===!0&&h.wireframe===!1,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ve,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Be&&h.map.isVideoTexture===!0&&at.getTransfer(h.map.colorSpace)===Qe,decodeVideoTextureEmissive:_e&&h.emissiveMap.isVideoTexture===!0&&at.getTransfer(h.emissiveMap.colorSpace)===Qe,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===vt,flipSided:h.side===At,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:pe&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&h.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return qe.vertexUv1s=_.has(1),qe.vertexUv2s=_.has(2),qe.vertexUv3s=_.has(3),_.clear(),qe}function c(h){const d=[];if(h.shaderID?d.push(h.shaderID):(d.push(h.customVertexShaderID),d.push(h.customFragmentShaderID)),h.defines!==void 0)for(const C in h.defines)d.push(C),d.push(h.defines[C]);return h.isRawShaderMaterial===!1&&(w(d,h),b(d,h),d.push(e.outputColorSpace)),d.push(h.customProgramCacheKey),d.join()}function w(h,d){h.push(d.precision),h.push(d.outputColorSpace),h.push(d.envMapMode),h.push(d.envMapCubeUVHeight),h.push(d.mapUv),h.push(d.alphaMapUv),h.push(d.lightMapUv),h.push(d.aoMapUv),h.push(d.bumpMapUv),h.push(d.normalMapUv),h.push(d.displacementMapUv),h.push(d.emissiveMapUv),h.push(d.metalnessMapUv),h.push(d.roughnessMapUv),h.push(d.anisotropyMapUv),h.push(d.clearcoatMapUv),h.push(d.clearcoatNormalMapUv),h.push(d.clearcoatRoughnessMapUv),h.push(d.iridescenceMapUv),h.push(d.iridescenceThicknessMapUv),h.push(d.sheenColorMapUv),h.push(d.sheenRoughnessMapUv),h.push(d.specularMapUv),h.push(d.specularColorMapUv),h.push(d.specularIntensityMapUv),h.push(d.transmissionMapUv),h.push(d.thicknessMapUv),h.push(d.combine),h.push(d.fogExp2),h.push(d.sizeAttenuation),h.push(d.morphTargetsCount),h.push(d.morphAttributeCount),h.push(d.numDirLights),h.push(d.numPointLights),h.push(d.numSpotLights),h.push(d.numSpotLightMaps),h.push(d.numHemiLights),h.push(d.numRectAreaLights),h.push(d.numDirLightShadows),h.push(d.numPointLightShadows),h.push(d.numSpotLightShadows),h.push(d.numSpotLightShadowsWithMaps),h.push(d.numLightProbes),h.push(d.shadowMapType),h.push(d.toneMapping),h.push(d.numClippingPlanes),h.push(d.numClipIntersection),h.push(d.depthPacking)}function b(h,d){s.disableAll(),d.supportsVertexTextures&&s.enable(0),d.instancing&&s.enable(1),d.instancingColor&&s.enable(2),d.instancingMorph&&s.enable(3),d.matcap&&s.enable(4),d.envMap&&s.enable(5),d.normalMapObjectSpace&&s.enable(6),d.normalMapTangentSpace&&s.enable(7),d.clearcoat&&s.enable(8),d.iridescence&&s.enable(9),d.alphaTest&&s.enable(10),d.vertexColors&&s.enable(11),d.vertexAlphas&&s.enable(12),d.vertexUv1s&&s.enable(13),d.vertexUv2s&&s.enable(14),d.vertexUv3s&&s.enable(15),d.vertexTangents&&s.enable(16),d.anisotropy&&s.enable(17),d.alphaHash&&s.enable(18),d.batching&&s.enable(19),d.dispersion&&s.enable(20),d.batchingColor&&s.enable(21),d.gradientMap&&s.enable(22),h.push(s.mask),s.disableAll(),d.fog&&s.enable(0),d.useFog&&s.enable(1),d.flatShading&&s.enable(2),d.logarithmicDepthBuffer&&s.enable(3),d.reversedDepthBuffer&&s.enable(4),d.skinning&&s.enable(5),d.morphTargets&&s.enable(6),d.morphNormals&&s.enable(7),d.morphColors&&s.enable(8),d.premultipliedAlpha&&s.enable(9),d.shadowMapEnabled&&s.enable(10),d.doubleSided&&s.enable(11),d.flipSided&&s.enable(12),d.useDepthPacking&&s.enable(13),d.dithering&&s.enable(14),d.transmission&&s.enable(15),d.sheen&&s.enable(16),d.opaque&&s.enable(17),d.pointsUvs&&s.enable(18),d.decodeVideoTexture&&s.enable(19),d.decodeVideoTextureEmissive&&s.enable(20),d.alphaToCoverage&&s.enable(21),h.push(s.mask)}function v(h){const d=L[h.type];let C;if(d){const O=bt[d];C=uo.clone(O.uniforms)}else C=h.uniforms;return C}function D(h,d){let C;for(let O=0,B=T.length;O<B;O++){const W=T[O];if(W.cacheKey===d){C=W,++C.usedTimes;break}}return C===void 0&&(C=new du(e,d,h,a),T.push(C)),C}function R(h){if(--h.usedTimes===0){const d=T.indexOf(h);T[d]=T[T.length-1],T.pop(),h.destroy()}}function I(h){m.remove(h)}function G(){m.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:v,acquireProgram:D,releaseProgram:R,releaseShaderCache:I,programs:T,dispose:G}}function gu(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,m){e.get(o)[s]=m}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:a}}function vu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Rr(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function br(){const e=[];let t=0;const n=[],i=[],r=[];function a(){t=0,n.length=0,i.length=0,r.length=0}function o(g,M,E,L,A,f){let c=e[t];return c===void 0?(c={id:g.id,object:g,geometry:M,material:E,groupOrder:L,renderOrder:g.renderOrder,z:A,group:f},e[t]=c):(c.id=g.id,c.object=g,c.geometry=M,c.material=E,c.groupOrder=L,c.renderOrder=g.renderOrder,c.z=A,c.group=f),t++,c}function s(g,M,E,L,A,f){const c=o(g,M,E,L,A,f);E.transmission>0?i.push(c):E.transparent===!0?r.push(c):n.push(c)}function m(g,M,E,L,A,f){const c=o(g,M,E,L,A,f);E.transmission>0?i.unshift(c):E.transparent===!0?r.unshift(c):n.unshift(c)}function _(g,M){n.length>1&&n.sort(g||vu),i.length>1&&i.sort(M||Rr),r.length>1&&r.sort(M||Rr)}function T(){for(let g=t,M=e.length;g<M;g++){const E=e[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:m,finish:T,sort:_}}function Eu(){let e=new WeakMap;function t(i,r){const a=e.get(i);let o;return a===void 0?(o=new br,e.set(i,[o])):r>=a.length?(o=new br,a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Su(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Re,color:new $e};break;case"SpotLight":n={position:new Re,direction:new Re,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Re,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Re,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new Re,halfWidth:new Re,halfHeight:new Re};break}return e[t.id]=n,n}}}function Mu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Tu=0;function xu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Au(e){const t=new Su,n=Mu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new Re);const r=new Re,a=new Vt,o=new Vt;function s(_){let T=0,g=0,M=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let E=0,L=0,A=0,f=0,c=0,w=0,b=0,v=0,D=0,R=0,I=0;_.sort(xu);for(let h=0,d=_.length;h<d;h++){const C=_[h],O=C.color,B=C.intensity,W=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)T+=O.r*B,g+=O.g*B,M+=O.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],B);I++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,k=n.get(C);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,i.directionalShadow[E]=k,i.directionalShadowMap[E]=Y,i.directionalShadowMatrix[E]=C.shadow.matrix,w++}i.directional[E]=X,E++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[A]=X;const ee=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,ee.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[A]=ee.matrix,C.castShadow){const k=n.get(C);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,i.spotShadow[A]=k,i.spotShadowMap[A]=Y,v++}A++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=X,f++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ee=C.shadow,k=n.get(C);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,i.pointShadow[L]=k,i.pointShadowMap[L]=Y,i.pointShadowMatrix[L]=C.shadow.matrix,b++}i.point[L]=X,L++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[c]=X,c++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=T,i.ambient[1]=g,i.ambient[2]=M;const G=i.hash;(G.directionalLength!==E||G.pointLength!==L||G.spotLength!==A||G.rectAreaLength!==f||G.hemiLength!==c||G.numDirectionalShadows!==w||G.numPointShadows!==b||G.numSpotShadows!==v||G.numSpotMaps!==D||G.numLightProbes!==I)&&(i.directional.length=E,i.spot.length=A,i.rectArea.length=f,i.point.length=L,i.hemi.length=c,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,G.directionalLength=E,G.pointLength=L,G.spotLength=A,G.rectAreaLength=f,G.hemiLength=c,G.numDirectionalShadows=w,G.numPointShadows=b,G.numSpotShadows=v,G.numSpotMaps=D,G.numLightProbes=I,i.version=Tu++)}function m(_,T){let g=0,M=0,E=0,L=0,A=0;const f=T.matrixWorldInverse;for(let c=0,w=_.length;c<w;c++){const b=_[c];if(b.isDirectionalLight){const v=i.directional[g];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),g++}else if(b.isSpotLight){const v=i.spot[E];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),E++}else if(b.isRectAreaLight){const v=i.rectArea[L];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),L++}else if(b.isPointLight){const v=i.point[M];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),M++}else if(b.isHemisphereLight){const v=i.hemi[A];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(f),A++}}}return{setup:s,setupView:m,state:i}}function Cr(e){const t=new Au(e),n=[],i=[];function r(T){_.camera=T,n.length=0,i.length=0}function a(T){n.push(T)}function o(T){i.push(T)}function s(){t.setup(n)}function m(T){t.setupView(n,T)}const _={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:_,setupLights:s,setupLightsView:m,pushLight:a,pushShadow:o}}function Ru(e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let s;return o===void 0?(s=new Cr(e),t.set(r,[s])):a>=o.length?(s=new Cr(e),o.push(s)):s=o[a],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const bu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cu=`uniform sampler2D shadow_pass;
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
}`;function wu(e,t,n){let i=new Or;const r=new Ze,a=new Ze,o=new mt,s=new $a({depthPacking:ja}),m=new Qa,_={},T=n.maxTextureSize,g={[cn]:At,[At]:cn,[vt]:vt},M=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:bu,fragmentShader:Cu}),E=M.clone();E.defines.HORIZONTAL_PASS=1;const L=new Pn;L.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new xt(L,M),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let c=this.type;this.render=function(R,I,G){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const h=e.getRenderTarget(),d=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ht),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=c!==Pt&&this.type===Pt,W=c===Pt&&this.type!==Pt;for(let Y=0,X=R.length;Y<X;Y++){const ee=R[Y],k=ee.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const he=k.getFrameExtents();if(r.multiply(he),a.copy(k.mapSize),(r.x>T||r.y>T)&&(r.x>T&&(a.x=Math.floor(T/he.x),r.x=a.x*he.x,k.mapSize.x=a.x),r.y>T&&(a.y=Math.floor(T/he.y),r.y=a.y*he.y,k.mapSize.y=a.y)),k.map===null||B===!0||W===!0){const De=this.type!==Pt?{minFilter:jt,magFilter:jt}:{};k.map!==null&&k.map.dispose(),k.map=new Jt(r.x,r.y,De),k.map.texture.name=ee.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const Te=k.getViewportCount();for(let De=0;De<Te;De++){const Ve=k.getViewport(De);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),O.viewport(o),k.updateMatrices(ee,De),i=k.getFrustum(),v(I,G,k.camera,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Pt&&w(k,G),k.needsUpdate=!1}c=this.type,f.needsUpdate=!1,e.setRenderTarget(h,d,C)};function w(R,I){const G=t.update(A);M.defines.VSM_SAMPLES!==R.blurSamples&&(M.defines.VSM_SAMPLES=R.blurSamples,E.defines.VSM_SAMPLES=R.blurSamples,M.needsUpdate=!0,E.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jt(r.x,r.y)),M.uniforms.shadow_pass.value=R.map.texture,M.uniforms.resolution.value=R.mapSize,M.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(I,null,G,M,A,null),E.uniforms.shadow_pass.value=R.mapPass.texture,E.uniforms.resolution.value=R.mapSize,E.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(I,null,G,E,A,null)}function b(R,I,G,h){let d=null;const C=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)d=C;else if(d=G.isPointLight===!0?m:s,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const O=d.uuid,B=I.uuid;let W=_[O];W===void 0&&(W={},_[O]=W);let Y=W[B];Y===void 0&&(Y=d.clone(),W[B]=Y,I.addEventListener("dispose",D)),d=Y}if(d.visible=I.visible,d.wireframe=I.wireframe,h===Pt?d.side=I.shadowSide!==null?I.shadowSide:I.side:d.side=I.shadowSide!==null?I.shadowSide:g[I.side],d.alphaMap=I.alphaMap,d.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,d.map=I.map,d.clipShadows=I.clipShadows,d.clippingPlanes=I.clippingPlanes,d.clipIntersection=I.clipIntersection,d.displacementMap=I.displacementMap,d.displacementScale=I.displacementScale,d.displacementBias=I.displacementBias,d.wireframeLinewidth=I.wireframeLinewidth,d.linewidth=I.linewidth,G.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const O=e.properties.get(d);O.light=G}return d}function v(R,I,G,h,d){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&d===Pt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const Y=B.groups;for(let X=0,ee=Y.length;X<ee;X++){const k=Y[X],he=W[k.materialIndex];if(he&&he.visible){const Te=b(R,he,h,d);R.onBeforeShadow(e,R,I,G,B,Te,k),e.renderBufferDirect(G,null,B,Te,R,k),R.onAfterShadow(e,R,I,G,B,Te,k)}}}else if(W.visible){const Y=b(R,W,h,d);R.onBeforeShadow(e,R,I,G,B,Y,null),e.renderBufferDirect(G,null,B,Y,R,null),R.onAfterShadow(e,R,I,G,B,Y,null)}}const O=R.children;for(let B=0,W=O.length;B<W;B++)v(O[B],I,G,h,d)}function D(R){R.target.removeEventListener("dispose",D);for(const G in _){const h=_[G],d=R.target.uuid;d in h&&(h[d].dispose(),delete h[d])}}}const Pu={[ni]:ti,[ei]:jn,[Jn]:$n,[Tn]:Qn,[ti]:ni,[jn]:ei,[$n]:Jn,[Qn]:Tn};function yu(e,t){function n(){let x=!1;const J=new mt;let ne=null;const ue=new mt(0,0,0,0);return{setMask:function($){ne!==$&&!x&&(e.colorMask($,$,$,$),ne=$)},setLocked:function($){x=$},setClear:function($,q,pe,Ue,qe){qe===!0&&($*=Ue,q*=Ue,pe*=Ue),J.set($,q,pe,Ue),ue.equals(J)===!1&&(e.clearColor($,q,pe,Ue),ue.copy(J))},reset:function(){x=!1,ne=null,ue.set(-1,0,0,0)}}}function i(){let x=!1,J=!1,ne=null,ue=null,$=null;return{setReversed:function(q){if(J!==q){const pe=t.get("EXT_clip_control");q?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),J=q;const Ue=$;$=null,this.setClear(Ue)}},getReversed:function(){return J},setTest:function(q){q?K(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(q){ne!==q&&!x&&(e.depthMask(q),ne=q)},setFunc:function(q){if(J&&(q=Pu[q]),ue!==q){switch(q){case ni:e.depthFunc(e.NEVER);break;case ti:e.depthFunc(e.ALWAYS);break;case ei:e.depthFunc(e.LESS);break;case Tn:e.depthFunc(e.LEQUAL);break;case Jn:e.depthFunc(e.EQUAL);break;case Qn:e.depthFunc(e.GEQUAL);break;case jn:e.depthFunc(e.GREATER);break;case $n:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=q}},setLocked:function(q){x=q},setClear:function(q){$!==q&&(J&&(q=1-q),e.clearDepth(q),$=q)},reset:function(){x=!1,ne=null,ue=null,$=null,J=!1}}}function r(){let x=!1,J=null,ne=null,ue=null,$=null,q=null,pe=null,Ue=null,qe=null;return{setTest:function(We){x||(We?K(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(We){J!==We&&!x&&(e.stencilMask(We),J=We)},setFunc:function(We,wt,Rt){(ne!==We||ue!==wt||$!==Rt)&&(e.stencilFunc(We,wt,Rt),ne=We,ue=wt,$=Rt)},setOp:function(We,wt,Rt){(q!==We||pe!==wt||Ue!==Rt)&&(e.stencilOp(We,wt,Rt),q=We,pe=wt,Ue=Rt)},setLocked:function(We){x=We},setClear:function(We){qe!==We&&(e.clearStencil(We),qe=We)},reset:function(){x=!1,J=null,ne=null,ue=null,$=null,q=null,pe=null,Ue=null,qe=null}}}const a=new n,o=new i,s=new r,m=new WeakMap,_=new WeakMap;let T={},g={},M=new WeakMap,E=[],L=null,A=!1,f=null,c=null,w=null,b=null,v=null,D=null,R=null,I=new $e(0,0,0),G=0,h=!1,d=null,C=null,O=null,B=null,W=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=ee>=1):k.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=ee>=2);let he=null,Te={};const De=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),ce=new mt().fromArray(De),fe=new mt().fromArray(Ve);function Pe(x,J,ne,ue){const $=new Uint8Array(4),q=e.createTexture();e.bindTexture(x,q),e.texParameteri(x,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(x,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<ne;pe++)x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(J+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return q}const H={};H[e.TEXTURE_2D]=Pe(e.TEXTURE_2D,e.TEXTURE_2D,1),H[e.TEXTURE_CUBE_MAP]=Pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[e.TEXTURE_2D_ARRAY]=Pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),H[e.TEXTURE_3D]=Pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),K(e.DEPTH_TEST),o.setFunc(Tn),ye(!1),me(qi),K(e.CULL_FACE),Je(Ht);function K(x){T[x]!==!0&&(e.enable(x),T[x]=!0)}function se(x){T[x]!==!1&&(e.disable(x),T[x]=!1)}function Ce(x,J){return g[x]!==J?(e.bindFramebuffer(x,J),g[x]=J,x===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=J),x===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=J),!0):!1}function ge(x,J){let ne=E,ue=!1;if(x){ne=M.get(J),ne===void 0&&(ne=[],M.set(J,ne));const $=x.textures;if(ne.length!==$.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let q=0,pe=$.length;q<pe;q++)ne[q]=e.COLOR_ATTACHMENT0+q;ne.length=$.length,ue=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,ue=!0);ue&&e.drawBuffers(ne)}function Be(x){return L!==x?(e.useProgram(x),L=x,!0):!1}const ot={[rn]:e.FUNC_ADD,[Ca]:e.FUNC_SUBTRACT,[ba]:e.FUNC_REVERSE_SUBTRACT};ot[Uo]=e.MIN,ot[Io]=e.MAX;const S={[ka]:e.ZERO,[Va]:e.ONE,[Ha]:e.SRC_COLOR,[Ga]:e.SRC_ALPHA,[Ba]:e.SRC_ALPHA_SATURATE,[Fa]:e.DST_COLOR,[Oa]:e.DST_ALPHA,[Na]:e.ONE_MINUS_SRC_COLOR,[Ia]:e.ONE_MINUS_SRC_ALPHA,[Ua]:e.ONE_MINUS_DST_COLOR,[Da]:e.ONE_MINUS_DST_ALPHA,[La]:e.CONSTANT_COLOR,[ya]:e.ONE_MINUS_CONSTANT_COLOR,[Pa]:e.CONSTANT_ALPHA,[wa]:e.ONE_MINUS_CONSTANT_ALPHA};function Je(x,J,ne,ue,$,q,pe,Ue,qe,We){if(x===Ht){A===!0&&(se(e.BLEND),A=!1);return}if(A===!1&&(K(e.BLEND),A=!0),x!==lo){if(x!==f||We!==h){if((c!==rn||v!==rn)&&(e.blendEquation(e.FUNC_ADD),c=rn,v=rn),We)switch(x){case En:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFunc(e.ONE,e.ONE);break;case $i:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case En:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case $i:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zi:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}w=null,b=null,D=null,R=null,I.set(0,0,0),G=0,f=x,h=We}return}$=$||J,q=q||ne,pe=pe||ue,(J!==c||$!==v)&&(e.blendEquationSeparate(ot[J],ot[$]),c=J,v=$),(ne!==w||ue!==b||q!==D||pe!==R)&&(e.blendFuncSeparate(S[ne],S[ue],S[q],S[pe]),w=ne,b=ue,D=q,R=pe),(Ue.equals(I)===!1||qe!==G)&&(e.blendColor(Ue.r,Ue.g,Ue.b,qe),I.copy(Ue),G=qe),f=x,h=!1}function Ie(x,J){x.side===vt?se(e.CULL_FACE):K(e.CULL_FACE);let ne=x.side===At;J&&(ne=!ne),ye(ne),x.blending===En&&x.transparent===!1?Je(Ht):Je(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),a.setMask(x.colorWrite);const ue=x.stencilWrite;s.setTest(ue),ue&&(s.setMask(x.stencilWriteMask),s.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),s.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),_e(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(x){d!==x&&(x?e.frontFace(e.CW):e.frontFace(e.CCW),d=x)}function me(x){x!==so?(K(e.CULL_FACE),x!==C&&(x===qi?e.cullFace(e.BACK):x===co?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),C=x}function et(x){x!==O&&(X&&e.lineWidth(x),O=x)}function _e(x,J,ne){x?(K(e.POLYGON_OFFSET_FILL),(B!==J||W!==ne)&&(e.polygonOffset(J,ne),B=J,W=ne)):se(e.POLYGON_OFFSET_FILL)}function Oe(x){x?K(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ft(x){x===void 0&&(x=e.TEXTURE0+Y-1),he!==x&&(e.activeTexture(x),he=x)}function rt(x,J,ne){ne===void 0&&(he===null?ne=e.TEXTURE0+Y-1:ne=he);let ue=Te[ne];ue===void 0&&(ue={type:void 0,texture:void 0},Te[ne]=ue),(ue.type!==x||ue.texture!==J)&&(he!==ne&&(e.activeTexture(ne),he=ne),e.bindTexture(x,J||H[x]),ue.type=x,ue.texture=J)}function p(){const x=Te[he];x!==void 0&&x.type!==void 0&&(e.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function l(){try{e.compressedTexImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function z(){try{e.texSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Z(){try{e.texSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function te(){try{e.texStorage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ve(){try{e.texStorage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ee(){try{e.texImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Q(){try{e.texImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(x){ce.equals(x)===!1&&(e.scissor(x.x,x.y,x.z,x.w),ce.copy(x))}function we(x){fe.equals(x)===!1&&(e.viewport(x.x,x.y,x.z,x.w),fe.copy(x))}function Se(x,J){let ne=_.get(J);ne===void 0&&(ne=new WeakMap,_.set(J,ne));let ue=ne.get(x);ue===void 0&&(ue=e.getUniformBlockIndex(J,x.name),ne.set(x,ue))}function re(x,J){const ue=_.get(J).get(x);m.get(J)!==ue&&(e.uniformBlockBinding(J,ue,x.__bindingPointIndex),m.set(J,ue))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),T={},he=null,Te={},g={},M=new WeakMap,E=[],L=null,A=!1,f=null,c=null,w=null,b=null,v=null,D=null,R=null,I=new $e(0,0,0),G=0,h=!1,d=null,C=null,O=null,B=null,W=null,ce.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:K,disable:se,bindFramebuffer:Ce,drawBuffers:ge,useProgram:Be,setBlending:Je,setMaterial:Ie,setFlipSided:ye,setCullFace:me,setLineWidth:et,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:ft,bindTexture:rt,unbindTexture:p,compressedTexImage2D:l,compressedTexImage3D:U,texImage2D:Ee,texImage3D:Q,updateUBOMapping:Se,uniformBlockBinding:re,texStorage2D:te,texStorage3D:ve,texSubImage2D:z,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:Me,scissor:oe,viewport:we,reset:Ne}}function Lu(e,t,n,i,r,a,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ze,T=new WeakMap;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(p,l){return E?new OffscreenCanvas(p,l):Po("canvas")}function A(p,l,U){let z=1;const Z=rt(p);if((Z.width>U||Z.height>U)&&(z=U/Math.max(Z.width,Z.height)),z<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const V=Math.floor(z*Z.width),Me=Math.floor(z*Z.height);g===void 0&&(g=L(V,Me));const te=l?L(V,Me):g;return te.width=V,te.height=Me,te.getContext("2d").drawImage(p,0,0,V,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+Me+")."),te}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),p;return p}function f(p){return p.generateMipmaps}function c(p){e.generateMipmap(p)}function w(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(p,l,U,z,Z=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let V=l;if(l===e.RED&&(U===e.FLOAT&&(V=e.R32F),U===e.HALF_FLOAT&&(V=e.R16F),U===e.UNSIGNED_BYTE&&(V=e.R8)),l===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.R8UI),U===e.UNSIGNED_SHORT&&(V=e.R16UI),U===e.UNSIGNED_INT&&(V=e.R32UI),U===e.BYTE&&(V=e.R8I),U===e.SHORT&&(V=e.R16I),U===e.INT&&(V=e.R32I)),l===e.RG&&(U===e.FLOAT&&(V=e.RG32F),U===e.HALF_FLOAT&&(V=e.RG16F),U===e.UNSIGNED_BYTE&&(V=e.RG8)),l===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RG8UI),U===e.UNSIGNED_SHORT&&(V=e.RG16UI),U===e.UNSIGNED_INT&&(V=e.RG32UI),U===e.BYTE&&(V=e.RG8I),U===e.SHORT&&(V=e.RG16I),U===e.INT&&(V=e.RG32I)),l===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RGB8UI),U===e.UNSIGNED_SHORT&&(V=e.RGB16UI),U===e.UNSIGNED_INT&&(V=e.RGB32UI),U===e.BYTE&&(V=e.RGB8I),U===e.SHORT&&(V=e.RGB16I),U===e.INT&&(V=e.RGB32I)),l===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),U===e.UNSIGNED_INT&&(V=e.RGBA32UI),U===e.BYTE&&(V=e.RGBA8I),U===e.SHORT&&(V=e.RGBA16I),U===e.INT&&(V=e.RGBA32I)),l===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(V=e.R11F_G11F_B10F)),l===e.RGBA){const Me=Z?ra:at.getTransfer(z);U===e.FLOAT&&(V=e.RGBA32F),U===e.HALF_FLOAT&&(V=e.RGBA16F),U===e.UNSIGNED_BYTE&&(V=Me===Qe?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(p,l){let U;return p?l===null||l===fn||l===ln?U=e.DEPTH24_STENCIL8:l===Gt?U=e.DEPTH32F_STENCIL8:l===xn&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===fn||l===ln?U=e.DEPTH_COMPONENT24:l===Gt?U=e.DEPTH_COMPONENT32F:l===xn&&(U=e.DEPTH_COMPONENT16),U}function D(p,l){return f(p)===!0||p.isFramebufferTexture&&p.minFilter!==jt&&p.minFilter!==Bt?Math.log2(Math.max(l.width,l.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?l.mipmaps.length:1}function R(p){const l=p.target;l.removeEventListener("dispose",R),G(l),l.isVideoTexture&&T.delete(l)}function I(p){const l=p.target;l.removeEventListener("dispose",I),d(l)}function G(p){const l=i.get(p);if(l.__webglInit===void 0)return;const U=p.source,z=M.get(U);if(z){const Z=z[l.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&h(p),Object.keys(z).length===0&&M.delete(U)}i.remove(p)}function h(p){const l=i.get(p);e.deleteTexture(l.__webglTexture);const U=p.source,z=M.get(U);delete z[l.__cacheKey],o.memory.textures--}function d(p){const l=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(l.__webglFramebuffer[z]))for(let Z=0;Z<l.__webglFramebuffer[z].length;Z++)e.deleteFramebuffer(l.__webglFramebuffer[z][Z]);else e.deleteFramebuffer(l.__webglFramebuffer[z]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[z])}else{if(Array.isArray(l.__webglFramebuffer))for(let z=0;z<l.__webglFramebuffer.length;z++)e.deleteFramebuffer(l.__webglFramebuffer[z]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let z=0;z<l.__webglColorRenderbuffer.length;z++)l.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[z]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const U=p.textures;for(let z=0,Z=U.length;z<Z;z++){const V=i.get(U[z]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[z])}i.remove(p)}let C=0;function O(){C=0}function B(){const p=C;return p>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+r.maxTextures),C+=1,p}function W(p){const l=[];return l.push(p.wrapS),l.push(p.wrapT),l.push(p.wrapR||0),l.push(p.magFilter),l.push(p.minFilter),l.push(p.anisotropy),l.push(p.internalFormat),l.push(p.format),l.push(p.type),l.push(p.generateMipmaps),l.push(p.premultiplyAlpha),l.push(p.flipY),l.push(p.unpackAlignment),l.push(p.colorSpace),l.join()}function Y(p,l){const U=i.get(p);if(p.isVideoTexture&&Oe(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&U.__version!==p.version){const z=p.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(U,p,l);return}}else p.isExternalTexture&&(U.__webglTexture=p.sourceTexture?p.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+l)}function X(p,l){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){H(U,p,l);return}n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+l)}function ee(p,l){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){H(U,p,l);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+l)}function k(p,l){const U=i.get(p);if(p.version>0&&U.__version!==p.version){K(U,p,l);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+l)}const he={[Vr]:e.REPEAT,[Hr]:e.CLAMP_TO_EDGE,[Gr]:e.MIRRORED_REPEAT},Te={[jt]:e.NEAREST,[kr]:e.NEAREST_MIPMAP_NEAREST,[an]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[vn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},De={[Za]:e.NEVER,[qa]:e.ALWAYS,[Ka]:e.LESS,[zr]:e.LEQUAL,[Ya]:e.EQUAL,[Xa]:e.GEQUAL,[Wa]:e.GREATER,[za]:e.NOTEQUAL};function Ve(p,l){if(l.type===Gt&&t.has("OES_texture_float_linear")===!1&&(l.magFilter===Bt||l.magFilter===vn||l.magFilter===an||l.magFilter===Kt||l.minFilter===Bt||l.minFilter===vn||l.minFilter===an||l.minFilter===Kt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,he[l.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,he[l.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,he[l.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Te[l.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Te[l.minFilter]),l.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,De[l.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===jt||l.minFilter!==an&&l.minFilter!==Kt||l.type===Gt&&t.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(p,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,r.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function ce(p,l){let U=!1;p.__webglInit===void 0&&(p.__webglInit=!0,l.addEventListener("dispose",R));const z=l.source;let Z=M.get(z);Z===void 0&&(Z={},M.set(z,Z));const V=W(l);if(V!==p.__cacheKey){Z[V]===void 0&&(Z[V]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[V].usedTimes++;const Me=Z[p.__cacheKey];Me!==void 0&&(Z[p.__cacheKey].usedTimes--,Me.usedTimes===0&&h(l)),p.__cacheKey=V,p.__webglTexture=Z[V].texture}return U}function fe(p,l,U){return Math.floor(Math.floor(p/U)/l)}function Pe(p,l,U,z){const V=p.updateRanges;if(V.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,l.width,l.height,U,z,l.data);else{V.sort((Q,oe)=>Q.start-oe.start);let Me=0;for(let Q=1;Q<V.length;Q++){const oe=V[Me],we=V[Q],Se=oe.start+oe.count,re=fe(we.start,l.width,4),Ne=fe(oe.start,l.width,4);we.start<=Se+1&&re===Ne&&fe(we.start+we.count-1,l.width,4)===re?oe.count=Math.max(oe.count,we.start+we.count-oe.start):(++Me,V[Me]=we)}V.length=Me+1;const te=e.getParameter(e.UNPACK_ROW_LENGTH),ve=e.getParameter(e.UNPACK_SKIP_PIXELS),Ee=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,l.width);for(let Q=0,oe=V.length;Q<oe;Q++){const we=V[Q],Se=Math.floor(we.start/4),re=Math.ceil(we.count/4),Ne=Se%l.width,x=Math.floor(Se/l.width),J=re,ne=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ne),e.pixelStorei(e.UNPACK_SKIP_ROWS,x),n.texSubImage2D(e.TEXTURE_2D,0,Ne,x,J,ne,U,z,l.data)}p.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,te),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function H(p,l,U){let z=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(z=e.TEXTURE_3D);const Z=ce(p,l),V=l.source;n.bindTexture(z,p.__webglTexture,e.TEXTURE0+U);const Me=i.get(V);if(V.version!==Me.__version||Z===!0){n.activeTexture(e.TEXTURE0+U);const te=at.getPrimaries(at.workingColorSpace),ve=l.colorSpace===Ot?null:at.getPrimaries(l.colorSpace),Ee=l.colorSpace===Ot||te===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=A(l.image,!1,r.maxTextureSize);Q=ft(l,Q);const oe=a.convert(l.format,l.colorSpace),we=a.convert(l.type);let Se=b(l.internalFormat,oe,we,l.colorSpace,l.isVideoTexture);Ve(z,l);let re;const Ne=l.mipmaps,x=l.isVideoTexture!==!0,J=Me.__version===void 0||Z===!0,ne=V.dataReady,ue=D(l,Q);if(l.isDepthTexture)Se=v(l.format===Mn,l.type),J&&(x?n.texStorage2D(e.TEXTURE_2D,1,Se,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,Se,Q.width,Q.height,0,oe,we,null));else if(l.isDataTexture)if(Ne.length>0){x&&J&&n.texStorage2D(e.TEXTURE_2D,ue,Se,Ne[0].width,Ne[0].height);for(let $=0,q=Ne.length;$<q;$++)re=Ne[$],x?ne&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,oe,we,re.data):n.texImage2D(e.TEXTURE_2D,$,Se,re.width,re.height,0,oe,we,re.data);l.generateMipmaps=!1}else x?(J&&n.texStorage2D(e.TEXTURE_2D,ue,Se,Q.width,Q.height),ne&&Pe(l,Q,oe,we)):n.texImage2D(e.TEXTURE_2D,0,Se,Q.width,Q.height,0,oe,we,Q.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){x&&J&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Se,Ne[0].width,Ne[0].height,Q.depth);for(let $=0,q=Ne.length;$<q;$++)if(re=Ne[$],l.format!==Ct)if(oe!==null)if(x){if(ne)if(l.layerUpdates.size>0){const pe=Ji(re.width,re.height,l.format,l.type);for(const Ue of l.layerUpdates){const qe=re.data.subarray(Ue*pe/re.data.BYTES_PER_ELEMENT,(Ue+1)*pe/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ue,re.width,re.height,1,oe,qe)}l.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,Q.depth,oe,re.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Se,re.width,re.height,Q.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else x?ne&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,Q.depth,oe,we,re.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,Se,re.width,re.height,Q.depth,0,oe,we,re.data)}else{x&&J&&n.texStorage2D(e.TEXTURE_2D,ue,Se,Ne[0].width,Ne[0].height);for(let $=0,q=Ne.length;$<q;$++)re=Ne[$],l.format!==Ct?oe!==null?x?ne&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,oe,re.data):n.compressedTexImage2D(e.TEXTURE_2D,$,Se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?ne&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,oe,we,re.data):n.texImage2D(e.TEXTURE_2D,$,Se,re.width,re.height,0,oe,we,re.data)}else if(l.isDataArrayTexture)if(x){if(J&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Se,Q.width,Q.height,Q.depth),ne)if(l.layerUpdates.size>0){const $=Ji(Q.width,Q.height,l.format,l.type);for(const q of l.layerUpdates){const pe=Q.data.subarray(q*$/Q.data.BYTES_PER_ELEMENT,(q+1)*$/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,oe,we,pe)}l.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,we,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,Q.width,Q.height,Q.depth,0,oe,we,Q.data);else if(l.isData3DTexture)x?(J&&n.texStorage3D(e.TEXTURE_3D,ue,Se,Q.width,Q.height,Q.depth),ne&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,we,Q.data)):n.texImage3D(e.TEXTURE_3D,0,Se,Q.width,Q.height,Q.depth,0,oe,we,Q.data);else if(l.isFramebufferTexture){if(J)if(x)n.texStorage2D(e.TEXTURE_2D,ue,Se,Q.width,Q.height);else{let $=Q.width,q=Q.height;for(let pe=0;pe<ue;pe++)n.texImage2D(e.TEXTURE_2D,pe,Se,$,q,0,oe,we,null),$>>=1,q>>=1}}else if(Ne.length>0){if(x&&J){const $=rt(Ne[0]);n.texStorage2D(e.TEXTURE_2D,ue,Se,$.width,$.height)}for(let $=0,q=Ne.length;$<q;$++)re=Ne[$],x?ne&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,oe,we,re):n.texImage2D(e.TEXTURE_2D,$,Se,oe,we,re);l.generateMipmaps=!1}else if(x){if(J){const $=rt(Q);n.texStorage2D(e.TEXTURE_2D,ue,Se,$.width,$.height)}ne&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,we,Q)}else n.texImage2D(e.TEXTURE_2D,0,Se,oe,we,Q);f(l)&&c(z),Me.__version=V.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function K(p,l,U){if(l.image.length!==6)return;const z=ce(p,l),Z=l.source;n.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+U);const V=i.get(Z);if(Z.version!==V.__version||z===!0){n.activeTexture(e.TEXTURE0+U);const Me=at.getPrimaries(at.workingColorSpace),te=l.colorSpace===Ot?null:at.getPrimaries(l.colorSpace),ve=l.colorSpace===Ot||Me===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=l.isCompressedTexture||l.image[0].isCompressedTexture,Q=l.image[0]&&l.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!Ee&&!Q?oe[q]=A(l.image[q],!0,r.maxCubemapSize):oe[q]=Q?l.image[q].image:l.image[q],oe[q]=ft(l,oe[q]);const we=oe[0],Se=a.convert(l.format,l.colorSpace),re=a.convert(l.type),Ne=b(l.internalFormat,Se,re,l.colorSpace),x=l.isVideoTexture!==!0,J=V.__version===void 0||z===!0,ne=Z.dataReady;let ue=D(l,we);Ve(e.TEXTURE_CUBE_MAP,l);let $;if(Ee){x&&J&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ne,we.width,we.height);for(let q=0;q<6;q++){$=oe[q].mipmaps;for(let pe=0;pe<$.length;pe++){const Ue=$[pe];l.format!==Ct?Se!==null?x?ne&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Ue.width,Ue.height,Se,Ue.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Ne,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):x?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Ue.width,Ue.height,Se,re,Ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Ne,Ue.width,Ue.height,0,Se,re,Ue.data)}}}else{if($=l.mipmaps,x&&J){$.length>0&&ue++;const q=rt(oe[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ne,q.width,q.height)}for(let q=0;q<6;q++)if(Q){x?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,oe[q].width,oe[q].height,Se,re,oe[q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,oe[q].width,oe[q].height,0,Se,re,oe[q].data);for(let pe=0;pe<$.length;pe++){const qe=$[pe].image[q].image;x?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,qe.width,qe.height,Se,re,qe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Ne,qe.width,qe.height,0,Se,re,qe.data)}}else{x?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Se,re,oe[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,Se,re,oe[q]);for(let pe=0;pe<$.length;pe++){const Ue=$[pe];x?ne&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Se,re,Ue.image[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Ne,Se,re,Ue.image[q])}}}f(l)&&c(e.TEXTURE_CUBE_MAP),V.__version=Z.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function se(p,l,U,z,Z,V){const Me=a.convert(U.format,U.colorSpace),te=a.convert(U.type),ve=b(U.internalFormat,Me,te,U.colorSpace),Ee=i.get(l),Q=i.get(U);if(Q.__renderTarget=l,!Ee.__hasExternalTextures){const oe=Math.max(1,l.width>>V),we=Math.max(1,l.height>>V);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,V,ve,oe,we,l.depth,0,Me,te,null):n.texImage2D(Z,V,ve,oe,we,0,Me,te,null)}n.bindFramebuffer(e.FRAMEBUFFER,p),_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Z,Q.__webglTexture,0,et(l)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Z,Q.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(p,l,U){if(e.bindRenderbuffer(e.RENDERBUFFER,p),l.depthBuffer){const z=l.depthTexture,Z=z&&z.isDepthTexture?z.type:null,V=v(l.stencilBuffer,Z),Me=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=et(l);_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,V,l.width,l.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,te,V,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,V,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,p)}else{const z=l.textures;for(let Z=0;Z<z.length;Z++){const V=z[Z],Me=a.convert(V.format,V.colorSpace),te=a.convert(V.type),ve=b(V.internalFormat,Me,te,V.colorSpace),Ee=et(l);U&&_e(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ve,l.width,l.height):_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee,ve,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,ve,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(p,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,p),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(l.depthTexture);z.__renderTarget=l,(!z.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),Y(l.depthTexture,0);const Z=z.__webglTexture,V=et(l);if(l.depthTexture.format===li)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(l.depthTexture.format===Mn)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(p){const l=i.get(p),U=p.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==p.depthTexture){const z=p.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),z){const Z=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,z.removeEventListener("dispose",Z)};z.addEventListener("dispose",Z),l.__depthDisposeCallback=Z}l.__boundDepthTexture=z}if(p.depthTexture&&!l.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const z=p.texture.mipmaps;z&&z.length>0?ge(l.__webglFramebuffer[0],p):ge(l.__webglFramebuffer,p)}else if(U){l.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[z]),l.__webglDepthbuffer[z]===void 0)l.__webglDepthbuffer[z]=e.createRenderbuffer(),Ce(l.__webglDepthbuffer[z],p,!1);else{const Z=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=l.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,V)}}else{const z=p.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),Ce(l.__webglDepthbuffer,p,!1);else{const Z=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,V)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(p,l,U){const z=i.get(p);l!==void 0&&se(z.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Be(p)}function S(p){const l=p.texture,U=i.get(p),z=i.get(l);p.addEventListener("dispose",I);const Z=p.textures,V=p.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=l.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let te=0;te<6;te++)if(l.mipmaps&&l.mipmaps.length>0){U.__webglFramebuffer[te]=[];for(let ve=0;ve<l.mipmaps.length;ve++)U.__webglFramebuffer[te][ve]=e.createFramebuffer()}else U.__webglFramebuffer[te]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){U.__webglFramebuffer=[];for(let te=0;te<l.mipmaps.length;te++)U.__webglFramebuffer[te]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Me)for(let te=0,ve=Z.length;te<ve;te++){const Ee=i.get(Z[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),o.memory.textures++)}if(p.samples>0&&_e(p)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const ve=Z[te];U.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[te]);const Ee=a.convert(ve.format,ve.colorSpace),Q=a.convert(ve.type),oe=b(ve.internalFormat,Ee,Q,ve.colorSpace,p.isXRRenderTarget===!0),we=et(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,oe,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,U.__webglColorRenderbuffer[te])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,p,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,l);for(let te=0;te<6;te++)if(l.mipmaps&&l.mipmaps.length>0)for(let ve=0;ve<l.mipmaps.length;ve++)se(U.__webglFramebuffer[te][ve],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve);else se(U.__webglFramebuffer[te],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(l)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let te=0,ve=Z.length;te<ve;te++){const Ee=Z[te],Q=i.get(Ee);let oe=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(oe=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(oe,Q.__webglTexture),Ve(oe,Ee),se(U.__webglFramebuffer,p,Ee,e.COLOR_ATTACHMENT0+te,oe,0),f(Ee)&&c(oe)}n.unbindTexture()}else{let te=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(te=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(te,z.__webglTexture),Ve(te,l),l.mipmaps&&l.mipmaps.length>0)for(let ve=0;ve<l.mipmaps.length;ve++)se(U.__webglFramebuffer[ve],p,l,e.COLOR_ATTACHMENT0,te,ve);else se(U.__webglFramebuffer,p,l,e.COLOR_ATTACHMENT0,te,0);f(l)&&c(te),n.unbindTexture()}p.depthBuffer&&Be(p)}function Je(p){const l=p.textures;for(let U=0,z=l.length;U<z;U++){const Z=l[U];if(f(Z)){const V=w(p),Me=i.get(Z).__webglTexture;n.bindTexture(V,Me),c(V),n.unbindTexture()}}}const Ie=[],ye=[];function me(p){if(p.samples>0){if(_e(p)===!1){const l=p.textures,U=p.width,z=p.height;let Z=e.COLOR_BUFFER_BIT;const V=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(p),te=l.length>1;if(te)for(let Ee=0;Ee<l.length;Ee++)n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ve=p.texture.mipmaps;ve&&ve.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<l.length;Ee++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const Q=i.get(l[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,U,z,0,0,U,z,Z,e.NEAREST),m===!0&&(Ie.length=0,ye.length=0,Ie.push(e.COLOR_ATTACHMENT0+Ee),p.depthBuffer&&p.resolveDepthBuffer===!1&&(Ie.push(V),ye.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let Ee=0;Ee<l.length;Ee++){n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const Q=i.get(l[Ee]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,Q,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&m){const l=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function et(p){return Math.min(r.maxSamples,p.samples)}function _e(p){const l=i.get(p);return p.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function Oe(p){const l=o.render.frame;T.get(p)!==l&&(T.set(p,l),p.update())}function ft(p,l){const U=p.colorSpace,z=p.format,Z=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||U!==wn&&U!==Ot&&(at.getTransfer(U)===Qe?(z!==Ct||Z!==kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),l}function rt(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(_.width=p.naturalWidth||p.width,_.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(_.width=p.displayWidth,_.height=p.displayHeight):(_.width=p.width,_.height=p.height),_}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=k,this.rebindTextures=ot,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_e}function Du(e,t){function n(i,r=Ot){let a;const o=at.getTransfer(r);if(i===kt)return e.UNSIGNED_BYTE;if(i===Yr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Kr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ja)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===eo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===to)return e.BYTE;if(i===no)return e.SHORT;if(i===xn)return e.UNSIGNED_SHORT;if(i===$r)return e.INT;if(i===fn)return e.UNSIGNED_INT;if(i===Gt)return e.FLOAT;if(i===Cn)return e.HALF_FLOAT;if(i===io)return e.ALPHA;if(i===ro)return e.RGB;if(i===Ct)return e.RGBA;if(i===li)return e.DEPTH_COMPONENT;if(i===Mn)return e.DEPTH_STENCIL;if(i===ao)return e.RED;if(i===jr)return e.RED_INTEGER;if(i===oo)return e.RG;if(i===Qr)return e.RG_INTEGER;if(i===Jr)return e.RGBA_INTEGER;if(i===Nn||i===On||i===Fn||i===Bn)if(o===Qe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Nn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===On)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Nn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===On)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Si||i===Mi||i===Ti||i===xi)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Si)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ti)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xi)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ai||i===Ri||i===bi)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ai||i===Ri)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===bi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ci||i===wi||i===Pi||i===yi||i===Li||i===Di||i===Ui||i===Ii||i===Ni||i===Oi||i===Fi||i===Bi||i===Gi||i===Hi)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ci)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Li)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Di)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ui)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ii)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ni)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hi)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vi||i===ki||i===zi)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Vi)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ki)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zi)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wi||i===Xi||i===Yi||i===Ki)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Wi)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yi)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ki)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ln?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iu=`
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

}`;class Nu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new qr(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new zt({vertexShader:Uu,fragmentShader:Iu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xt(new Zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ou extends xa{constructor(t,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",m=1,_=null,T=null,g=null,M=null,E=null,L=null;const A=typeof XRWebGLBinding<"u",f=new Nu,c={},w=n.getContextAttributes();let b=null,v=null;const D=[],R=[],I=new Ze;let G=null;const h=new $t;h.viewport=new mt;const d=new $t;d.viewport=new mt;const C=[h,d],O=new Aa;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=D[H];return K===void 0&&(K=new In,D[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=D[H];return K===void 0&&(K=new In,D[H]=K),K.getGripSpace()},this.getHand=function(H){let K=D[H];return K===void 0&&(K=new In,D[H]=K),K.getHandSpace()};function Y(H){const K=R.indexOf(H.inputSource);if(K===-1)return;const se=D[K];se!==void 0&&(se.update(H.inputSource,H.frame,_||o),se.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ee);for(let H=0;H<D.length;H++){const K=R[H];K!==null&&(R[H]=null,D[H].disconnect(K))}B=null,W=null,f.reset();for(const H in c)delete c[H];t.setRenderTarget(b),E=null,M=null,g=null,r=null,v=null,Pe.stop(),i.isPresenting=!1,t.setPixelRatio(G),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||o},this.setReferenceSpace=function(H){_=H},this.getBaseLayer=function(){return M!==null?M:E},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return L},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ce=null,ge=null;w.depth&&(ge=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=w.stencil?Mn:li,Ce=w.stencil?ln:fn);const Be={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:a};g=this.getBinding(),M=g.createProjectionLayer(Be),r.updateRenderState({layers:[M]}),t.setPixelRatio(1),t.setSize(M.textureWidth,M.textureHeight,!1),v=new Jt(M.textureWidth,M.textureHeight,{format:Ct,type:kt,depthTexture:new Br(M.textureWidth,M.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),v=new Jt(E.framebufferWidth,E.framebufferHeight,{format:Ct,type:kt,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(m),_=null,o=await r.requestReferenceSpace(s),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ee(H){for(let K=0;K<H.removed.length;K++){const se=H.removed[K],Ce=R.indexOf(se);Ce>=0&&(R[Ce]=null,D[Ce].disconnect(se))}for(let K=0;K<H.added.length;K++){const se=H.added[K];let Ce=R.indexOf(se);if(Ce===-1){for(let Be=0;Be<D.length;Be++)if(Be>=R.length){R.push(se),Ce=Be;break}else if(R[Be]===null){R[Be]=se,Ce=Be;break}if(Ce===-1)break}const ge=D[Ce];ge&&ge.connect(se)}}const k=new Re,he=new Re;function Te(H,K,se){k.setFromMatrixPosition(K.matrixWorld),he.setFromMatrixPosition(se.matrixWorld);const Ce=k.distanceTo(he),ge=K.projectionMatrix.elements,Be=se.projectionMatrix.elements,ot=ge[14]/(ge[10]-1),S=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],Ie=(ge[9]-1)/ge[5],ye=(ge[8]-1)/ge[0],me=(Be[8]+1)/Be[0],et=ot*ye,_e=ot*me,Oe=Ce/(-ye+me),ft=Oe*-ye;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ft),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ge[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const rt=ot+Oe,p=S+Oe,l=et-ft,U=_e+(Ce-ft),z=Je*S/p*rt,Z=Ie*S/p*rt;H.projectionMatrix.makePerspective(l,U,z,Z,rt,p),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function De(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let K=H.near,se=H.far;f.texture!==null&&(f.depthNear>0&&(K=f.depthNear),f.depthFar>0&&(se=f.depthFar)),O.near=d.near=h.near=K,O.far=d.far=h.far=se,(B!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,W=O.far),O.layers.mask=H.layers.mask|6,h.layers.mask=O.layers.mask&3,d.layers.mask=O.layers.mask&5;const Ce=H.parent,ge=O.cameras;De(O,Ce);for(let Be=0;Be<ge.length;Be++)De(ge[Be],Ce);ge.length===2?Te(O,h,d):O.projectionMatrix.copy(h.projectionMatrix),Ve(H,O,Ce)};function Ve(H,K,se){se===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ra*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(M===null&&E===null))return m},this.setFoveation=function(H){m=H,M!==null&&(M.fixedFoveation=H),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=H)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function(H){return c[H]};let ce=null;function fe(H,K){if(T=K.getViewerPose(_||o),L=K,T!==null){const se=T.views;E!==null&&(t.setRenderTargetFramebuffer(v,E.framebuffer),t.setRenderTarget(v));let Ce=!1;se.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let S=0;S<se.length;S++){const Je=se[S];let Ie=null;if(E!==null)Ie=E.getViewport(Je);else{const me=g.getViewSubImage(M,Je);Ie=me.viewport,S===0&&(t.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(v))}let ye=C[S];ye===void 0&&(ye=new $t,ye.layers.enable(S),ye.viewport=new mt,C[S]=ye),ye.matrix.fromArray(Je.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Je.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),S===0&&(O.matrix.copy(ye.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(ye)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){g=i.getBinding();const S=g.getDepthInformation(se[0]);S&&S.isValid&&S.texture&&f.init(S,r.renderState)}if(ge&&ge.includes("camera-access")&&A){t.state.unbindTexture(),g=i.getBinding();for(let S=0;S<se.length;S++){const Je=se[S].camera;if(Je){let Ie=c[Je];Ie||(Ie=new qr,c[Je]=Ie);const ye=g.getCameraImage(Je);Ie.sourceTexture=ye}}}}for(let se=0;se<D.length;se++){const Ce=R[se],ge=D[se];Ce!==null&&ge!==void 0&&ge.update(Ce,K,_||o)}ce&&ce(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),L=null}const Pe=new ca;Pe.setAnimationLoop(fe),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}const It=new ia,Fu=new Vt;function Bu(e,t){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,ta(e)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,w,b,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(f,c):c.isMeshToonMaterial?(a(f,c),g(f,c)):c.isMeshPhongMaterial?(a(f,c),T(f,c)):c.isMeshStandardMaterial?(a(f,c),M(f,c),c.isMeshPhysicalMaterial&&E(f,c,v)):c.isMeshMatcapMaterial?(a(f,c),L(f,c)):c.isMeshDepthMaterial?a(f,c):c.isMeshDistanceMaterial?(a(f,c),A(f,c)):c.isMeshNormalMaterial?a(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?m(f,c,w,b):c.isSpriteMaterial?_(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===At&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===At&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const w=t.get(c),b=w.envMap,v=w.envMapRotation;b&&(f.envMap.value=b,It.copy(v),It.x*=-1,It.y*=-1,It.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),f.envMapRotation.value.setFromMatrix4(Fu.makeRotationFromEuler(It)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function m(f,c,w,b){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*w,f.scale.value=b*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function _(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function T(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function g(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function M(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function E(f,c,w){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===At&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function L(f,c){c.matcap&&(f.matcap.value=c.matcap)}function A(f,c){const w=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gu(e,t,n,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,b){const v=b.program;i.uniformBlockBinding(w,v)}function _(w,b){let v=r[w.id];v===void 0&&(L(w),v=T(w),r[w.id]=v,w.addEventListener("dispose",f));const D=b.program;i.updateUBOMapping(w,D);const R=t.render.frame;a[w.id]!==R&&(M(w),a[w.id]=R)}function T(w){const b=g();w.__bindingPointIndex=b;const v=e.createBuffer(),D=w.__size,R=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,D,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,v),v}function g(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(w){const b=r[w.id],v=w.uniforms,D=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let R=0,I=v.length;R<I;R++){const G=Array.isArray(v[R])?v[R]:[v[R]];for(let h=0,d=G.length;h<d;h++){const C=G[h];if(E(C,R,h,D)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],ee=A(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,O+W,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function E(w,b,v,D){const R=w.value,I=b+"_"+v;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{const G=D[I];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return D[I]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function L(w){const b=w.uniforms;let v=0;const D=16;for(let I=0,G=b.length;I<G;I++){const h=Array.isArray(b[I])?b[I]:[b[I]];for(let d=0,C=h.length;d<C;d++){const O=h[d],B=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=B.length;W<Y;W++){const X=B[W],ee=A(X),k=v%D,he=k%ee.boundary,Te=k+he;v+=he,Te!==0&&D-Te<ee.storage&&(v+=D-Te),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=ee.storage}}}const R=v%D;return R>0&&(v+=D-R),w.__size=v,w.__cache={},this}function A(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function f(w){const b=w.target;b.removeEventListener("dispose",f);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),e.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function c(){for(const w in r)e.deleteBuffer(r[w]);o=[],r={},a={}}return{bind:m,update:_,dispose:c}}class Hu{constructor(t={}){const{canvas:n=Ma(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:_=!1,powerPreference:T="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:M=!1}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=o;const L=new Uint32Array(4),A=new Int32Array(4);let f=null,c=null;const w=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let D=!1;this._outputColorSpace=ci;let R=0,I=0,G=null,h=-1,d=null;const C=new mt,O=new mt;let B=null;const W=new $e(0);let Y=0,X=n.width,ee=n.height,k=1,he=null,Te=null;const De=new mt(0,0,X,ee),Ve=new mt(0,0,X,ee);let ce=!1;const fe=new Or;let Pe=!1,H=!1;const K=new Vt,se=new Re,Ce=new mt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ot(){return G===null?k:1}let S=i;function Je(u,P){return n.getContext(u,P)}try{const u={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:m,preserveDrawingBuffer:_,powerPreference:T,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fr}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",$,!1),S===null){const P="webgl2";if(S=Je(P,u),S===null)throw Je(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let Ie,ye,me,et,_e,Oe,ft,rt,p,l,U,z,Z,V,Me,te,ve,Ee,Q,oe,we,Se,re,Ne;function x(){Ie=new Zl(S),Ie.init(),Se=new Du(S,Ie),ye=new kl(S,Ie,t,Se),me=new yu(S,Ie),ye.reversedDepthBuffer&&M&&me.buffers.depth.setReversed(!0),et=new Ql(S),_e=new gu,Oe=new Lu(S,Ie,me,_e,ye,Se,et),ft=new Wl(v),rt=new ql(v),p=new rs(S),re=new Hl(S,p),l=new $l(S,p,et,re),U=new ef(S,l,p,et),Q=new Jl(S,ye,Oe),te=new zl(_e),z=new _u(v,ft,rt,Ie,ye,re,te),Z=new Bu(v,_e),V=new Eu,Me=new Ru(Ie),Ee=new Gl(v,ft,rt,me,U,E,m),ve=new wu(v,U,ye),Ne=new Gu(S,et,ye,me),oe=new Vl(S,Ie,et),we=new jl(S,Ie,et),et.programs=z.programs,v.capabilities=ye,v.extensions=Ie,v.properties=_e,v.renderLists=V,v.shadowMap=ve,v.state=me,v.info=et}x();const J=new Ou(v,S);this.xr=J,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const u=Ie.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=Ie.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(u){u!==void 0&&(k=u,this.setSize(X,ee,!1))},this.getSize=function(u){return u.set(X,ee)},this.setSize=function(u,P,N=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=u,ee=P,n.width=Math.floor(u*k),n.height=Math.floor(P*k),N===!0&&(n.style.width=u+"px",n.style.height=P+"px"),this.setViewport(0,0,u,P)},this.getDrawingBufferSize=function(u){return u.set(X*k,ee*k).floor()},this.setDrawingBufferSize=function(u,P,N){X=u,ee=P,k=N,n.width=Math.floor(u*N),n.height=Math.floor(P*N),this.setViewport(0,0,u,P)},this.getCurrentViewport=function(u){return u.copy(C)},this.getViewport=function(u){return u.copy(De)},this.setViewport=function(u,P,N,F){u.isVector4?De.set(u.x,u.y,u.z,u.w):De.set(u,P,N,F),me.viewport(C.copy(De).multiplyScalar(k).round())},this.getScissor=function(u){return u.copy(Ve)},this.setScissor=function(u,P,N,F){u.isVector4?Ve.set(u.x,u.y,u.z,u.w):Ve.set(u,P,N,F),me.scissor(O.copy(Ve).multiplyScalar(k).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(u){me.setScissorTest(ce=u)},this.setOpaqueSort=function(u){he=u},this.setTransparentSort=function(u){Te=u},this.getClearColor=function(u){return u.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(u=!0,P=!0,N=!0){let F=0;if(u){let y=!1;if(G!==null){const j=G.texture.format;y=j===Jr||j===Qr||j===jr}if(y){const j=G.texture.type,ae=j===kt||j===fn||j===xn||j===ln||j===Yr||j===Kr,de=Ee.getClearColor(),le=Ee.getClearAlpha(),be=de.r,Le=de.g,xe=de.b;ae?(L[0]=be,L[1]=Le,L[2]=xe,L[3]=le,S.clearBufferuiv(S.COLOR,0,L)):(A[0]=be,A[1]=Le,A[2]=xe,A[3]=le,S.clearBufferiv(S.COLOR,0,A))}else F|=S.COLOR_BUFFER_BIT}P&&(F|=S.DEPTH_BUFFER_BIT),N&&(F|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Ee.dispose(),V.dispose(),Me.dispose(),_e.dispose(),ft.dispose(),rt.dispose(),U.dispose(),re.dispose(),Ne.dispose(),z.dispose(),J.dispose(),J.removeEventListener("sessionstart",Rt),J.removeEventListener("sessionend",pi),Lt.stop()};function ne(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const u=et.autoReset,P=ve.enabled,N=ve.autoUpdate,F=ve.needsUpdate,y=ve.type;x(),et.autoReset=u,ve.enabled=P,ve.autoUpdate=N,ve.needsUpdate=F,ve.type=y}function $(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function q(u){const P=u.target;P.removeEventListener("dispose",q),pe(P)}function pe(u){Ue(u),_e.remove(u)}function Ue(u){const P=_e.get(u).programs;P!==void 0&&(P.forEach(function(N){z.releaseProgram(N)}),u.isShaderMaterial&&z.releaseShaderCache(u))}this.renderBufferDirect=function(u,P,N,F,y,j){P===null&&(P=ge);const ae=y.isMesh&&y.matrixWorld.determinant()<0,de=ma(u,P,N,F,y);me.setMaterial(F,ae);let le=N.index,be=1;if(F.wireframe===!0){if(le=l.getWireframeAttribute(N),le===void 0)return;be=2}const Le=N.drawRange,xe=N.attributes.position;let He=Le.start*be,Xe=(Le.start+Le.count)*be;j!==null&&(He=Math.max(He,j.start*be),Xe=Math.min(Xe,(j.start+j.count)*be)),le!==null?(He=Math.max(He,0),Xe=Math.min(Xe,le.count)):xe!=null&&(He=Math.max(He,0),Xe=Math.min(Xe,xe.count));const it=Xe-He;if(it<0||it===1/0)return;re.setup(y,F,de,N,le);let je,Ke=oe;if(le!==null&&(je=p.get(le),Ke=we,Ke.setIndex(je)),y.isMesh)F.wireframe===!0?(me.setLineWidth(F.wireframeLinewidth*ot()),Ke.setMode(S.LINES)):Ke.setMode(S.TRIANGLES);else if(y.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*ot()),y.isLineSegments?Ke.setMode(S.LINES):y.isLineLoop?Ke.setMode(S.LINE_LOOP):Ke.setMode(S.LINE_STRIP)}else y.isPoints?Ke.setMode(S.POINTS):y.isSprite&&Ke.setMode(S.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)Zn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Ke.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else{const Ae=y._multiDrawStarts,tt=y._multiDrawCounts,ke=y._multiDrawCount,_t=le?p.get(le).bytesPerElement:1,Wt=_e.get(F).currentProgram.getUniforms();for(let gt=0;gt<ke;gt++)Wt.setValue(S,"_gl_DrawID",gt),Ke.render(Ae[gt]/_t,tt[gt])}else if(y.isInstancedMesh)Ke.renderInstances(He,it,y.count);else if(N.isInstancedBufferGeometry){const Ae=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,tt=Math.min(N.instanceCount,Ae);Ke.renderInstances(He,it,tt)}else Ke.render(He,it)};function qe(u,P,N){u.transparent===!0&&u.side===vt&&u.forceSinglePass===!1?(u.side=At,u.needsUpdate=!0,pn(u,P,N),u.side=cn,u.needsUpdate=!0,pn(u,P,N),u.side=vt):pn(u,P,N)}this.compile=function(u,P,N=null){N===null&&(N=u),c=Me.get(N),c.init(P),b.push(c),N.traverseVisible(function(y){y.isLight&&y.layers.test(P.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),u!==N&&u.traverseVisible(function(y){y.isLight&&y.layers.test(P.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),c.setupLights();const F=new Set;return u.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;const j=y.material;if(j)if(Array.isArray(j))for(let ae=0;ae<j.length;ae++){const de=j[ae];qe(de,N,y),F.add(de)}else qe(j,N,y),F.add(j)}),c=b.pop(),F},this.compileAsync=function(u,P,N=null){const F=this.compile(u,P,N);return new Promise(y=>{function j(){if(F.forEach(function(ae){_e.get(ae).currentProgram.isReady()&&F.delete(ae)}),F.size===0){y(u);return}setTimeout(j,10)}Ie.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let We=null;function wt(u){We&&We(u)}function Rt(){Lt.stop()}function pi(){Lt.start()}const Lt=new ca;Lt.setAnimationLoop(wt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(u){We=u,J.setAnimationLoop(u),u===null?Lt.stop():Lt.start()},J.addEventListener("sessionstart",Rt),J.addEventListener("sessionend",pi),this.render=function(u,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(P),P=J.getCamera()),u.isScene===!0&&u.onBeforeRender(v,u,P,G),c=Me.get(u,b.length),c.init(P),b.push(c),K.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),fe.setFromProjectionMatrix(K,Ei,P.reversedDepth),H=this.localClippingEnabled,Pe=te.init(this.clippingPlanes,H),f=V.get(u,w.length),f.init(),w.push(f),J.enabled===!0&&J.isPresenting===!0){const j=v.xr.getDepthSensingMesh();j!==null&&Dn(j,P,-1/0,v.sortObjects)}Dn(u,P,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(he,Te),Be=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Be&&Ee.addToRenderList(f,u),this.info.render.frame++,Pe===!0&&te.beginShadows();const N=c.state.shadowsArray;ve.render(N,u,P),Pe===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=f.opaque,y=f.transmissive;if(c.setupLights(),P.isArrayCamera){const j=P.cameras;if(y.length>0)for(let ae=0,de=j.length;ae<de;ae++){const le=j[ae];mi(F,y,u,le)}Be&&Ee.render(u);for(let ae=0,de=j.length;ae<de;ae++){const le=j[ae];hi(f,u,le,le.viewport)}}else y.length>0&&mi(F,y,u,P),Be&&Ee.render(u),hi(f,u,P);G!==null&&I===0&&(Oe.updateMultisampleRenderTarget(G),Oe.updateRenderTargetMipmap(G)),u.isScene===!0&&u.onAfterRender(v,u,P),re.resetDefaultState(),h=-1,d=null,b.pop(),b.length>0?(c=b[b.length-1],Pe===!0&&te.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function Dn(u,P,N,F){if(u.visible===!1)return;if(u.layers.test(P.layers)){if(u.isGroup)N=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(P);else if(u.isLight)c.pushLight(u),u.castShadow&&c.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||fe.intersectsSprite(u)){F&&Ce.setFromMatrixPosition(u.matrixWorld).applyMatrix4(K);const ae=U.update(u),de=u.material;de.visible&&f.push(u,ae,de,N,Ce.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||fe.intersectsObject(u))){const ae=U.update(u),de=u.material;if(F&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Ce.copy(u.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ce.copy(ae.boundingSphere.center)),Ce.applyMatrix4(u.matrixWorld).applyMatrix4(K)),Array.isArray(de)){const le=ae.groups;for(let be=0,Le=le.length;be<Le;be++){const xe=le[be],He=de[xe.materialIndex];He&&He.visible&&f.push(u,ae,He,N,Ce.z,xe)}}else de.visible&&f.push(u,ae,de,N,Ce.z,null)}}const j=u.children;for(let ae=0,de=j.length;ae<de;ae++)Dn(j[ae],P,N,F)}function hi(u,P,N,F){const y=u.opaque,j=u.transmissive,ae=u.transparent;c.setupLightsView(N),Pe===!0&&te.setGlobalState(v.clippingPlanes,N),F&&me.viewport(C.copy(F)),y.length>0&&dn(y,P,N),j.length>0&&dn(j,P,N),ae.length>0&&dn(ae,P,N),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function mi(u,P,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[F.id]===void 0&&(c.state.transmissionRenderTarget[F.id]=new Jt(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Cn:kt,minFilter:Kt,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const j=c.state.transmissionRenderTarget[F.id],ae=F.viewport||C;j.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const de=v.getRenderTarget(),le=v.getActiveCubeFace(),be=v.getActiveMipmapLevel();v.setRenderTarget(j),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Be&&Ee.render(N);const Le=v.toneMapping;v.toneMapping=yt;const xe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),c.setupLightsView(F),Pe===!0&&te.setGlobalState(v.clippingPlanes,F),dn(u,N,F),Oe.updateMultisampleRenderTarget(j),Oe.updateRenderTargetMipmap(j),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Xe=0,it=P.length;Xe<it;Xe++){const je=P[Xe],Ke=je.object,Ae=je.geometry,tt=je.material,ke=je.group;if(tt.side===vt&&Ke.layers.test(F.layers)){const _t=tt.side;tt.side=At,tt.needsUpdate=!0,_i(Ke,N,F,Ae,tt,ke),tt.side=_t,tt.needsUpdate=!0,He=!0}}He===!0&&(Oe.updateMultisampleRenderTarget(j),Oe.updateRenderTargetMipmap(j))}v.setRenderTarget(de,le,be),v.setClearColor(W,Y),xe!==void 0&&(F.viewport=xe),v.toneMapping=Le}function dn(u,P,N){const F=P.isScene===!0?P.overrideMaterial:null;for(let y=0,j=u.length;y<j;y++){const ae=u[y],de=ae.object,le=ae.geometry,be=ae.group;let Le=ae.material;Le.allowOverride===!0&&F!==null&&(Le=F),de.layers.test(N.layers)&&_i(de,P,N,le,Le,be)}}function _i(u,P,N,F,y,j){u.onBeforeRender(v,P,N,F,y,j),u.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),y.onBeforeRender(v,P,N,F,u,j),y.transparent===!0&&y.side===vt&&y.forceSinglePass===!1?(y.side=At,y.needsUpdate=!0,v.renderBufferDirect(N,P,F,y,u,j),y.side=cn,y.needsUpdate=!0,v.renderBufferDirect(N,P,F,y,u,j),y.side=vt):v.renderBufferDirect(N,P,F,y,u,j),u.onAfterRender(v,P,N,F,y,j)}function pn(u,P,N){P.isScene!==!0&&(P=ge);const F=_e.get(u),y=c.state.lights,j=c.state.shadowsArray,ae=y.state.version,de=z.getParameters(u,y.state,j,P,N),le=z.getProgramCacheKey(de);let be=F.programs;F.environment=u.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(u.isMeshStandardMaterial?rt:ft).get(u.envMap||F.environment),F.envMapRotation=F.environment!==null&&u.envMap===null?P.environmentRotation:u.envMapRotation,be===void 0&&(u.addEventListener("dispose",q),be=new Map,F.programs=be);let Le=be.get(le);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===ae)return vi(u,de),Le}else de.uniforms=z.getUniforms(u),u.onBeforeCompile(de,v),Le=z.acquireProgram(de,le),be.set(le,Le),F.uniforms=de.uniforms;const xe=F.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(xe.clippingPlanes=te.uniform),vi(u,de),F.needsLights=ga(u),F.lightsStateVersion=ae,F.needsLights&&(xe.ambientLightColor.value=y.state.ambient,xe.lightProbe.value=y.state.probe,xe.directionalLights.value=y.state.directional,xe.directionalLightShadows.value=y.state.directionalShadow,xe.spotLights.value=y.state.spot,xe.spotLightShadows.value=y.state.spotShadow,xe.rectAreaLights.value=y.state.rectArea,xe.ltc_1.value=y.state.rectAreaLTC1,xe.ltc_2.value=y.state.rectAreaLTC2,xe.pointLights.value=y.state.point,xe.pointLightShadows.value=y.state.pointShadow,xe.hemisphereLights.value=y.state.hemi,xe.directionalShadowMap.value=y.state.directionalShadowMap,xe.directionalShadowMatrix.value=y.state.directionalShadowMatrix,xe.spotShadowMap.value=y.state.spotShadowMap,xe.spotLightMatrix.value=y.state.spotLightMatrix,xe.spotLightMap.value=y.state.spotLightMap,xe.pointShadowMap.value=y.state.pointShadowMap,xe.pointShadowMatrix.value=y.state.pointShadowMatrix),F.currentProgram=Le,F.uniformsList=null,Le}function gi(u){if(u.uniformsList===null){const P=u.currentProgram.getUniforms();u.uniformsList=Sn.seqWithValue(P.seq,u.uniforms)}return u.uniformsList}function vi(u,P){const N=_e.get(u);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function ma(u,P,N,F,y){P.isScene!==!0&&(P=ge),Oe.resetTextureUnits();const j=P.fog,ae=F.isMeshStandardMaterial?P.environment:null,de=G===null?v.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:wn,le=(F.isMeshStandardMaterial?rt:ft).get(F.envMap||ae),be=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Le=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!N.morphAttributes.position,He=!!N.morphAttributes.normal,Xe=!!N.morphAttributes.color;let it=yt;F.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(it=v.toneMapping);const je=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ke=je!==void 0?je.length:0,Ae=_e.get(F),tt=c.state.lights;if(Pe===!0&&(H===!0||u!==d)){const ut=u===d&&F.id===h;te.setState(F,u,ut)}let ke=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==tt.state.version||Ae.outputColorSpace!==de||y.isBatchedMesh&&Ae.batching===!1||!y.isBatchedMesh&&Ae.batching===!0||y.isBatchedMesh&&Ae.batchingColor===!0&&y.colorTexture===null||y.isBatchedMesh&&Ae.batchingColor===!1&&y.colorTexture!==null||y.isInstancedMesh&&Ae.instancing===!1||!y.isInstancedMesh&&Ae.instancing===!0||y.isSkinnedMesh&&Ae.skinning===!1||!y.isSkinnedMesh&&Ae.skinning===!0||y.isInstancedMesh&&Ae.instancingColor===!0&&y.instanceColor===null||y.isInstancedMesh&&Ae.instancingColor===!1&&y.instanceColor!==null||y.isInstancedMesh&&Ae.instancingMorph===!0&&y.morphTexture===null||y.isInstancedMesh&&Ae.instancingMorph===!1&&y.morphTexture!==null||Ae.envMap!==le||F.fog===!0&&Ae.fog!==j||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==be||Ae.vertexTangents!==Le||Ae.morphTargets!==xe||Ae.morphNormals!==He||Ae.morphColors!==Xe||Ae.toneMapping!==it||Ae.morphTargetsCount!==Ke)&&(ke=!0):(ke=!0,Ae.__version=F.version);let _t=Ae.currentProgram;ke===!0&&(_t=pn(F,P,y));let Wt=!1,gt=!1,nn=!1;const nt=_t.getUniforms(),St=Ae.uniforms;if(me.useProgram(_t.program)&&(Wt=!0,gt=!0,nn=!0),F.id!==h&&(h=F.id,gt=!0),Wt||d!==u){me.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),nt.setValue(S,"projectionMatrix",u.projectionMatrix),nt.setValue(S,"viewMatrix",u.matrixWorldInverse);const dt=nt.map.cameraPosition;dt!==void 0&&dt.setValue(S,se.setFromMatrixPosition(u.matrixWorld)),ye.logarithmicDepthBuffer&&nt.setValue(S,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&nt.setValue(S,"isOrthographic",u.isOrthographicCamera===!0),d!==u&&(d=u,gt=!0,nn=!0)}if(y.isSkinnedMesh){nt.setOptional(S,y,"bindMatrix"),nt.setOptional(S,y,"bindMatrixInverse");const ut=y.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),nt.setValue(S,"boneTexture",ut.boneTexture,Oe))}y.isBatchedMesh&&(nt.setOptional(S,y,"batchingTexture"),nt.setValue(S,"batchingTexture",y._matricesTexture,Oe),nt.setOptional(S,y,"batchingIdTexture"),nt.setValue(S,"batchingIdTexture",y._indirectTexture,Oe),nt.setOptional(S,y,"batchingColorTexture"),y._colorsTexture!==null&&nt.setValue(S,"batchingColorTexture",y._colorsTexture,Oe));const Mt=N.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Q.update(y,N,_t),(gt||Ae.receiveShadow!==y.receiveShadow)&&(Ae.receiveShadow=y.receiveShadow,nt.setValue(S,"receiveShadow",y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(St.envMap.value=le,St.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(St.envMapIntensity.value=P.environmentIntensity),gt&&(nt.setValue(S,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&_a(St,nn),j&&F.fog===!0&&Z.refreshFogUniforms(St,j),Z.refreshMaterialUniforms(St,F,k,ee,c.state.transmissionRenderTarget[u.id]),Sn.upload(S,gi(Ae),St,Oe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Sn.upload(S,gi(Ae),St,Oe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&nt.setValue(S,"center",y.center),nt.setValue(S,"modelViewMatrix",y.modelViewMatrix),nt.setValue(S,"normalMatrix",y.normalMatrix),nt.setValue(S,"modelMatrix",y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ut=F.uniformsGroups;for(let dt=0,Un=ut.length;dt<Un;dt++){const Dt=ut[dt];Ne.update(Dt,_t),Ne.bind(Dt,_t)}}return _t}function _a(u,P){u.ambientLightColor.needsUpdate=P,u.lightProbe.needsUpdate=P,u.directionalLights.needsUpdate=P,u.directionalLightShadows.needsUpdate=P,u.pointLights.needsUpdate=P,u.pointLightShadows.needsUpdate=P,u.spotLights.needsUpdate=P,u.spotLightShadows.needsUpdate=P,u.rectAreaLights.needsUpdate=P,u.hemisphereLights.needsUpdate=P}function ga(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(u,P,N){const F=_e.get(u);F.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),_e.get(u.texture).__webglTexture=P,_e.get(u.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:N,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,P){const N=_e.get(u);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0};const va=S.createFramebuffer();this.setRenderTarget=function(u,P=0,N=0){G=u,R=P,I=N;let F=!0,y=null,j=!1,ae=!1;if(u){const le=_e.get(u);if(le.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(S.FRAMEBUFFER,null),F=!1;else if(le.__webglFramebuffer===void 0)Oe.setupRenderTarget(u);else if(le.__hasExternalTextures)Oe.rebindTextures(u,_e.get(u.texture).__webglTexture,_e.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const xe=u.depthTexture;if(le.__boundDepthTexture!==xe){if(xe!==null&&_e.has(xe)&&(u.width!==xe.image.width||u.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(u)}}const be=u.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ae=!0);const Le=_e.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Le[P])?y=Le[P][N]:y=Le[P],j=!0):u.samples>0&&Oe.useMultisampledRTT(u)===!1?y=_e.get(u).__webglMultisampledFramebuffer:Array.isArray(Le)?y=Le[N]:y=Le,C.copy(u.viewport),O.copy(u.scissor),B=u.scissorTest}else C.copy(De).multiplyScalar(k).floor(),O.copy(Ve).multiplyScalar(k).floor(),B=ce;if(N!==0&&(y=va),me.bindFramebuffer(S.FRAMEBUFFER,y)&&F&&me.drawBuffers(u,y),me.viewport(C),me.scissor(O),me.setScissorTest(B),j){const le=_e.get(u.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,N)}else if(ae){const le=P;for(let be=0;be<u.textures.length;be++){const Le=_e.get(u.textures[be]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+be,Le.__webglTexture,N,le)}}else if(u!==null&&N!==0){const le=_e.get(u.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,le.__webglTexture,N)}h=-1},this.readRenderTargetPixels=function(u,P,N,F,y,j,ae,de=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ae!==void 0&&(le=le[ae]),le){me.bindFramebuffer(S.FRAMEBUFFER,le);try{const be=u.textures[de],Le=be.format,xe=be.type;if(!ye.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=u.width-F&&N>=0&&N<=u.height-y&&(u.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(P,N,F,y,Se.convert(Le),Se.convert(xe),j))}finally{const be=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(S.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(u,P,N,F,y,j,ae,de=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&ae!==void 0&&(le=le[ae]),le)if(P>=0&&P<=u.width-F&&N>=0&&N<=u.height-y){me.bindFramebuffer(S.FRAMEBUFFER,le);const be=u.textures[de],Le=be.format,xe=be.type;if(!ye.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,He),S.bufferData(S.PIXEL_PACK_BUFFER,j.byteLength,S.STREAM_READ),u.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(P,N,F,y,Se.convert(Le),Se.convert(xe),0);const Xe=G!==null?_e.get(G).__webglFramebuffer:null;me.bindFramebuffer(S.FRAMEBUFFER,Xe);const it=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Ta(S,it,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,He),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,j),S.deleteBuffer(He),S.deleteSync(it),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,P=null,N=0){const F=Math.pow(2,-N),y=Math.floor(u.image.width*F),j=Math.floor(u.image.height*F),ae=P!==null?P.x:0,de=P!==null?P.y:0;Oe.setTexture2D(u,0),S.copyTexSubImage2D(S.TEXTURE_2D,N,0,0,ae,de,y,j),me.unbindTexture()};const Ea=S.createFramebuffer(),Sa=S.createFramebuffer();this.copyTextureToTexture=function(u,P,N=null,F=null,y=0,j=null){j===null&&(y!==0?(Zn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=y,y=0):j=0);let ae,de,le,be,Le,xe,He,Xe,it;const je=u.isCompressedTexture?u.mipmaps[j]:u.image;if(N!==null)ae=N.max.x-N.min.x,de=N.max.y-N.min.y,le=N.isBox3?N.max.z-N.min.z:1,be=N.min.x,Le=N.min.y,xe=N.isBox3?N.min.z:0;else{const Mt=Math.pow(2,-y);ae=Math.floor(je.width*Mt),de=Math.floor(je.height*Mt),u.isDataArrayTexture?le=je.depth:u.isData3DTexture?le=Math.floor(je.depth*Mt):le=1,be=0,Le=0,xe=0}F!==null?(He=F.x,Xe=F.y,it=F.z):(He=0,Xe=0,it=0);const Ke=Se.convert(P.format),Ae=Se.convert(P.type);let tt;P.isData3DTexture?(Oe.setTexture3D(P,0),tt=S.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Oe.setTexture2DArray(P,0),tt=S.TEXTURE_2D_ARRAY):(Oe.setTexture2D(P,0),tt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,P.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,P.unpackAlignment);const ke=S.getParameter(S.UNPACK_ROW_LENGTH),_t=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Wt=S.getParameter(S.UNPACK_SKIP_PIXELS),gt=S.getParameter(S.UNPACK_SKIP_ROWS),nn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,je.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,je.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,be),S.pixelStorei(S.UNPACK_SKIP_ROWS,Le),S.pixelStorei(S.UNPACK_SKIP_IMAGES,xe);const nt=u.isDataArrayTexture||u.isData3DTexture,St=P.isDataArrayTexture||P.isData3DTexture;if(u.isDepthTexture){const Mt=_e.get(u),ut=_e.get(P),dt=_e.get(Mt.__renderTarget),Un=_e.get(ut.__renderTarget);me.bindFramebuffer(S.READ_FRAMEBUFFER,dt.__webglFramebuffer),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Dt=0;Dt<le;Dt++)nt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,_e.get(u).__webglTexture,y,xe+Dt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,_e.get(P).__webglTexture,j,it+Dt)),S.blitFramebuffer(be,Le,ae,de,He,Xe,ae,de,S.DEPTH_BUFFER_BIT,S.NEAREST);me.bindFramebuffer(S.READ_FRAMEBUFFER,null),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(y!==0||u.isRenderTargetTexture||_e.has(u)){const Mt=_e.get(u),ut=_e.get(P);me.bindFramebuffer(S.READ_FRAMEBUFFER,Ea),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,Sa);for(let dt=0;dt<le;dt++)nt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mt.__webglTexture,y,xe+dt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Mt.__webglTexture,y),St?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ut.__webglTexture,j,it+dt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ut.__webglTexture,j),y!==0?S.blitFramebuffer(be,Le,ae,de,He,Xe,ae,de,S.COLOR_BUFFER_BIT,S.NEAREST):St?S.copyTexSubImage3D(tt,j,He,Xe,it+dt,be,Le,ae,de):S.copyTexSubImage2D(tt,j,He,Xe,be,Le,ae,de);me.bindFramebuffer(S.READ_FRAMEBUFFER,null),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else St?u.isDataTexture||u.isData3DTexture?S.texSubImage3D(tt,j,He,Xe,it,ae,de,le,Ke,Ae,je.data):P.isCompressedArrayTexture?S.compressedTexSubImage3D(tt,j,He,Xe,it,ae,de,le,Ke,je.data):S.texSubImage3D(tt,j,He,Xe,it,ae,de,le,Ke,Ae,je):u.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,j,He,Xe,ae,de,Ke,Ae,je.data):u.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,j,He,Xe,je.width,je.height,Ke,je.data):S.texSubImage2D(S.TEXTURE_2D,j,He,Xe,ae,de,Ke,Ae,je);S.pixelStorei(S.UNPACK_ROW_LENGTH,ke),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_t),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Wt),S.pixelStorei(S.UNPACK_SKIP_ROWS,gt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,nn),j===0&&P.generateMipmaps&&S.generateMipmap(tt),me.unbindTexture()},this.initRenderTarget=function(u){_e.get(u).__webglFramebuffer===void 0&&Oe.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?Oe.setTextureCube(u,0):u.isData3DTexture?Oe.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?Oe.setTexture2DArray(u,0):Oe.setTexture2D(u,0),me.unbindTexture()},this.resetState=function(){R=0,I=0,G=null,me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(t),n.unpackColorSpace=at._getUnpackColorSpace()}}const wr={type:"change"},di={type:"start"},pa={type:"end"},gn=new Oo,Pr=new Wr,Vu=Math.cos(70*An.DEG2RAD),st=new Re,pt=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yn=1e-6;class ku extends No{constructor(t,n=null){super(t,n),this.state=Ye.NONE,this.target=new Re,this.cursor=new Re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:qt.ROTATE,TWO:qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Re,this._lastQuaternion=new ai,this._lastTargetPosition=new Re,this._quat=new ai().setFromUnitVectors(t.up,new Re(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tr,this._sphericalDelta=new tr,this._scale=1,this._panOffset=new Re,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new Re,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wu.bind(this),this._onPointerDown=zu.bind(this),this._onPointerUp=Xu.bind(this),this._onContextMenu=Qu.bind(this),this._onMouseWheel=qu.bind(this),this._onKeyDown=Zu.bind(this),this._onTouchStart=$u.bind(this),this._onTouchMove=ju.bind(this),this._onMouseDown=Yu.bind(this),this._onMouseMove=Ku.bind(this),this._interceptControlDown=Ju.bind(this),this._interceptControlUp=ed.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wr),this.update(),this.state=Ye.NONE}update(t=null){const n=this.object.position;st.copy(n).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pt:i>Math.PI&&(i-=pt),r<-Math.PI?r+=pt:r>Math.PI&&(r-=pt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),n.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=st.length();o=this._clampDistance(s*this._scale);const m=s-o;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),a=!!m}else if(this.object.isOrthographicCamera){const s=new Re(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=m!==this.object.zoom;const _=new Re(this._mouse.x,this._mouse.y,0);_.unproject(this.object),this.object.position.sub(_).add(s),this.object.updateMatrixWorld(),o=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gn.origin.copy(this.object.position),gn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gn.direction))<Vu?this.object.lookAt(this.target):(Pr.setFromNormalAndCoplanarPoint(this.object.up,this.target),gn.intersectPlane(Pr,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Yn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yn||this._lastTargetPosition.distanceToSquared(this.target)>Yn?(this.dispatchEvent(wr),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pt/60*this.autoRotateSpeed*t:pt/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){st.setFromMatrixColumn(n,0),st.multiplyScalar(-t),this._panOffset.add(st)}_panUp(t,n){this.screenSpacePanning===!0?st.setFromMatrixColumn(n,1):(st.setFromMatrixColumn(n,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(t),this._panOffset.add(st)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;st.copy(r).sub(this.target);let a=st.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,a=n-i.top,o=i.width,s=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,s=(t.pageY+n.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ze,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Wu(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Xu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pa),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Yu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ye.DOLLY;break;case Qt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ye.ROTATE}break;case Qt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(di)}function Ku(e){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function qu(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(e.preventDefault(),this.dispatchEvent(di),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(pa))}function Zu(e){this.enabled!==!1&&this._handleKeyDown(e)}function $u(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ye.TOUCH_ROTATE;break;case qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ye.TOUCH_DOLLY_PAN;break;case qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(di)}function ju(e){switch(this._trackPointer(e),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ye.NONE}}function Qu(e){this.enabled!==!1&&e.preventDefault()}function Ju(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ed(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yr={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class bn{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Ad(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,n,i,r){const a=new fd,o=[];for(let s=0,m=this.pluginCallbacks.length;s<m;s++)o.push(this.pluginCallbacks[s](a));a.setPlugins(o),a.setTextureUtils(this.textureUtils),a.writeAsync(t,n,r).catch(i)}parseAsync(t,n){const i=this;return new Promise(function(r,a){i.parse(t,r,a,n)})}}const Ge={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Kn="KHR_mesh_quantization",Et={};Et[jt]=Ge.NEAREST;Et[kr]=Ge.NEAREST_MIPMAP_NEAREST;Et[an]=Ge.NEAREST_MIPMAP_LINEAR;Et[Bt]=Ge.LINEAR;Et[vn]=Ge.LINEAR_MIPMAP_NEAREST;Et[Kt]=Ge.LINEAR_MIPMAP_LINEAR;Et[Hr]=Ge.CLAMP_TO_EDGE;Et[Vr]=Ge.REPEAT;Et[Gr]=Ge.MIRRORED_REPEAT;const Lr={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},td=new $e,Dr=12,nd=1179937895,id=2,Ur=8,rd=1313821514,ad=5130562;function sn(e,t){return e.length===t.length&&e.every(function(n,i){return n===t[i]})}function od(e){return new TextEncoder().encode(e).buffer}function sd(e){return sn(e.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function cd(e,t,n){const i={min:new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=t;r<t+n;r++)for(let a=0;a<e.itemSize;a++){let o;e.itemSize>4?o=e.array[r*e.itemSize+a]:(a===0?o=e.getX(r):a===1?o=e.getY(r):a===2?o=e.getZ(r):a===3&&(o=e.getW(r)),e.normalized===!0&&(o=An.normalize(o,e.array))),i.min[a]=Math.min(i.min[a],o),i.max[a]=Math.max(i.max[a],o)}return i}function ha(e){return Math.ceil(e/4)*4}function qn(e,t=0){const n=ha(e.byteLength);if(n!==e.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(e)),t!==0)for(let r=e.byteLength;r<n;r++)i[r]=t;return i.buffer}return e}function Ir(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ld(e,t){if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){let n;return t==="image/jpeg"?n=.92:t==="image/webp"&&(n=.8),e.convertToBlob({type:t,quality:n})}else return new Promise(n=>e.toBlob(n,t))}class fd{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Fr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,n,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const r=this,a=r.buffers,o=r.json;i=r.options;const s=r.extensionsUsed,m=r.extensionsRequired,_=new Blob(a,{type:"application/octet-stream"}),T=Object.keys(s),g=Object.keys(m);if(T.length>0&&(o.extensionsUsed=T),g.length>0&&(o.extensionsRequired=g),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=_.size),i.binary===!0){const M=new FileReader;M.readAsArrayBuffer(_),M.onloadend=function(){const E=qn(M.result),L=new DataView(new ArrayBuffer(Ur));L.setUint32(0,E.byteLength,!0),L.setUint32(4,ad,!0);const A=qn(od(JSON.stringify(o)),32),f=new DataView(new ArrayBuffer(Ur));f.setUint32(0,A.byteLength,!0),f.setUint32(4,rd,!0);const c=new ArrayBuffer(Dr),w=new DataView(c);w.setUint32(0,nd,!0),w.setUint32(4,id,!0);const b=Dr+f.byteLength+A.byteLength+L.byteLength+E.byteLength;w.setUint32(8,b,!0);const v=new Blob([c,f,A,L,E],{type:"application/octet-stream"}),D=new FileReader;D.readAsArrayBuffer(v),D.onloadend=function(){n(D.result)}}}else if(o.buffers&&o.buffers.length>0){const M=new FileReader;M.readAsDataURL(_),M.onloadend=function(){const E=M.result;o.buffers[0].uri=E,n(o)}}else n(o)}serializeUserData(t,n){if(Object.keys(t.userData).length===0)return;const i=this.options,r=this.extensionsUsed;try{const a=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&a.gltfExtensions){n.extensions===void 0&&(n.extensions={});for(const o in a.gltfExtensions)n.extensions[o]=a.gltfExtensions[o],r[o]=!0;delete a.gltfExtensions}Object.keys(a).length>0&&(n.extras=a)}catch(a){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+a.message)}}getUID(t,n=!1){if(this.uids.has(t)===!1){const r=new Map;r.set(!0,this.uid++),r.set(!1,this.uid++),this.uids.set(t,r)}return this.uids.get(t).get(n)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const i=new Re;for(let r=0,a=t.count;r<a;r++)if(Math.abs(i.fromBufferAttribute(t,r).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const n=this.cache;if(n.attributesNormalized.has(t))return n.attributesNormalized.get(t);const i=t.clone(),r=new Re;for(let a=0,o=i.count;a<o;a++)r.fromBufferAttribute(i,a),r.x===0&&r.y===0&&r.z===0?r.setX(1):r.normalize(),i.setXYZ(a,r.x,r.y,r.z);return n.attributesNormalized.set(t,i),i}applyTextureTransform(t,n){let i=!1;const r={};(n.offset.x!==0||n.offset.y!==0)&&(r.offset=n.offset.toArray(),i=!0),n.rotation!==0&&(r.rotation=n.rotation,i=!0),(n.repeat.x!==1||n.repeat.y!==1)&&(r.scale=n.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=r,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,n){if(t===n)return t;function i(E){return E.colorSpace===ci?function(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}:function(A){return A}}t instanceof Gn&&(t=await this.decompressTextureAsync(t)),n instanceof Gn&&(n=await this.decompressTextureAsync(n));const r=t?t.image:null,a=n?n.image:null,o=Math.max(r?r.width:0,a?a.width:0),s=Math.max(r?r.height:0,a?a.height:0),m=Ir();m.width=o,m.height=s;const _=m.getContext("2d",{willReadFrequently:!0});_.fillStyle="#00ffff",_.fillRect(0,0,o,s);const T=_.getImageData(0,0,o,s);if(r){_.drawImage(r,0,0,o,s);const E=i(t),L=_.getImageData(0,0,o,s).data;for(let A=2;A<L.length;A+=4)T.data[A]=E(L[A]/256)*256}if(a){_.drawImage(a,0,0,o,s);const E=i(n),L=_.getImageData(0,0,o,s).data;for(let A=1;A<L.length;A+=4)T.data[A]=E(L[A]/256)*256}_.putImageData(T,0,0);const M=(t||n).clone();return M.source=new Fo(m),M.colorSpace=Ot,M.channel=(t||n).channel,t&&n&&t.channel!==n.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),M}async decompressTextureAsync(t,n=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,n)}processBuffer(t){const n=this.json,i=this.buffers;return n.buffers||(n.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,n,i,r,a){const o=this.json;o.bufferViews||(o.bufferViews=[]);let s;switch(n){case Ge.BYTE:case Ge.UNSIGNED_BYTE:s=1;break;case Ge.SHORT:case Ge.UNSIGNED_SHORT:s=2;break;default:s=4}let m=t.itemSize*s;a===Ge.ARRAY_BUFFER&&(m=Math.ceil(m/4)*4);const _=ha(r*m),T=new DataView(new ArrayBuffer(_));let g=0;for(let L=i;L<i+r;L++){for(let A=0;A<t.itemSize;A++){let f;t.itemSize>4?f=t.array[L*t.itemSize+A]:(A===0?f=t.getX(L):A===1?f=t.getY(L):A===2?f=t.getZ(L):A===3&&(f=t.getW(L)),t.normalized===!0&&(f=An.normalize(f,t.array))),n===Ge.FLOAT?T.setFloat32(g,f,!0):n===Ge.INT?T.setInt32(g,f,!0):n===Ge.UNSIGNED_INT?T.setUint32(g,f,!0):n===Ge.SHORT?T.setInt16(g,f,!0):n===Ge.UNSIGNED_SHORT?T.setUint16(g,f,!0):n===Ge.BYTE?T.setInt8(g,f):n===Ge.UNSIGNED_BYTE&&T.setUint8(g,f),g+=s}g%m!==0&&(g+=m-g%m)}const M={buffer:this.processBuffer(T.buffer),byteOffset:this.byteOffset,byteLength:_};return a!==void 0&&(M.target=a),a===Ge.ARRAY_BUFFER&&(M.byteStride=m),this.byteOffset+=_,o.bufferViews.push(M),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const n=this,i=n.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(r){const a=new FileReader;a.readAsArrayBuffer(t),a.onloadend=function(){const o=qn(a.result),s={buffer:n.processBuffer(o),byteOffset:n.byteOffset,byteLength:o.byteLength};n.byteOffset+=o.byteLength,r(i.bufferViews.push(s)-1)}})}processAccessor(t,n,i,r){const a=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let s;if(t.array.constructor===Float32Array)s=Ge.FLOAT;else if(t.array.constructor===Int32Array)s=Ge.INT;else if(t.array.constructor===Uint32Array)s=Ge.UNSIGNED_INT;else if(t.array.constructor===Int16Array)s=Ge.SHORT;else if(t.array.constructor===Uint16Array)s=Ge.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)s=Ge.BYTE;else if(t.array.constructor===Uint8Array)s=Ge.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(r===void 0||r===1/0)&&(r=t.count),r===0)return null;const m=cd(t,i,r);let _;n!==void 0&&(_=t===n.index?Ge.ELEMENT_ARRAY_BUFFER:Ge.ARRAY_BUFFER);const T=this.processBufferView(t,s,i,r,_),g={bufferView:T.id,byteOffset:T.byteOffset,componentType:s,count:r,max:m.max,min:m.min,type:o[t.itemSize]};return t.normalized===!0&&(g.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(g)-1}processImage(t,n,i,r="image/png"){if(t!==null){const a=this,o=a.cache,s=a.json,m=a.options,_=a.pending;o.images.has(t)||o.images.set(t,{});const T=o.images.get(t),g=r+":flipY/"+i.toString();if(T[g]!==void 0)return T[g];s.images||(s.images=[]);const M={mimeType:r},E=Ir();E.width=Math.min(t.width,m.maxTextureSize),E.height=Math.min(t.height,m.maxTextureSize);const L=E.getContext("2d",{willReadFrequently:!0});if(i===!0&&(L.translate(0,E.height),L.scale(1,-1)),t.data!==void 0){n!==Ct&&console.error("GLTFExporter: Only RGBAFormat is supported.",n),(t.width>m.maxTextureSize||t.height>m.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let c=0;c<f.length;c+=4)f[c+0]=t.data[c+0],f[c+1]=t.data[c+1],f[c+2]=t.data[c+2],f[c+3]=t.data[c+3];L.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)L.drawImage(t,0,0,E.width,E.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");m.binary===!0?_.push(ld(E,r).then(f=>a.processBufferViewImage(f)).then(f=>{M.bufferView=f})):M.uri=Bo.getDataURL(E,r);const A=s.images.push(M)-1;return T[g]=A,A}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const n=this.json;n.samplers||(n.samplers=[]);const i={magFilter:Et[t.magFilter],minFilter:Et[t.minFilter],wrapS:Et[t.wrapS],wrapT:Et[t.wrapT]};return n.samplers.push(i)-1}async processTextureAsync(t){const i=this.options,r=this.cache,a=this.json;if(r.textures.has(t))return r.textures.get(t);a.textures||(a.textures=[]),t instanceof Gn&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const s={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(s.name=t.name),await this._invokeAllAsync(async function(_){_.writeTexture&&await _.writeTexture(t,s)});const m=a.textures.push(s)-1;return r.textures.set(t,m),m}async processMaterialAsync(t){const n=this.cache,i=this.json;if(n.materials.has(t))return n.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const r={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const a=t.color.toArray().concat([t.opacity]);if(sn(a,[1,1,1,1])||(r.pbrMetallicRoughness.baseColorFactor=a),t.isMeshStandardMaterial?(r.pbrMetallicRoughness.metallicFactor=t.metalness,r.pbrMetallicRoughness.roughnessFactor=t.roughness):(r.pbrMetallicRoughness.metallicFactor=0,r.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const s=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),m={index:await this.processTextureAsync(s),texCoord:s.channel};this.applyTextureTransform(m,s),r.pbrMetallicRoughness.metallicRoughnessTexture=m}if(t.map){const s={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(s,t.map),r.pbrMetallicRoughness.baseColorTexture=s}if(t.emissive){const s=t.emissive;if(Math.max(s.r,s.g,s.b)>0&&(r.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const _={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(_,t.emissiveMap),r.emissiveTexture=_}}if(t.normalMap){const s={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(s.scale=t.normalScale.x),this.applyTextureTransform(s,t.normalMap),r.normalTexture=s}if(t.aoMap){const s={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(s.strength=t.aoMapIntensity),this.applyTextureTransform(s,t.aoMap),r.occlusionTexture=s}t.transparent?r.alphaMode="BLEND":t.alphaTest>0&&(r.alphaMode="MASK",r.alphaCutoff=t.alphaTest),t.side===vt&&(r.doubleSided=!0),t.name!==""&&(r.name=t.name),this.serializeUserData(t,r),await this._invokeAllAsync(async function(s){s.writeMaterialAsync&&await s.writeMaterialAsync(t,r)});const o=i.materials.push(r)-1;return n.materials.set(t,o),o}async processMeshAsync(t){const n=this.cache,i=this.json,r=[t.geometry.uuid];if(Array.isArray(t.material))for(let v=0,D=t.material.length;v<D;v++)r.push(t.material[v].uuid);else r.push(t.material.uuid);const a=r.join(":");if(n.meshes.has(a))return n.meshes.get(a);const o=t.geometry;let s;t.isLineSegments?s=Ge.LINES:t.isLineLoop?s=Ge.LINE_LOOP:t.isLine?s=Ge.LINE_STRIP:t.isPoints?s=Ge.POINTS:s=t.material.wireframe?Ge.LINES:Ge.TRIANGLES;const m={},_={},T=[],g=[],M={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},E=o.getAttribute("normal");E!==void 0&&!this.isNormalizedNormalAttribute(E)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(E)));let L=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;const D=o.attributes[v];if(v=M[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),n.attributes.has(this.getUID(D))){_[v]=n.attributes.get(this.getUID(D));continue}L=null;const I=D.array;v==="JOINTS_0"&&!(I instanceof Uint16Array)&&!(I instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),L=new Tt(new Uint16Array(I),D.itemSize,D.normalized)):(I instanceof Uint32Array||I instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),L=bn.Utils.toFloat32BufferAttribute(D));const G=this.processAccessor(L||D,o);G!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,D),_[v]=G,n.attributes.set(this.getUID(D),G))}if(E!==void 0&&o.setAttribute("normal",E),Object.keys(_).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const v=[],D=[],R={};if(t.morphTargetDictionary!==void 0)for(const I in t.morphTargetDictionary)R[t.morphTargetDictionary[I]]=I;for(let I=0;I<t.morphTargetInfluences.length;++I){const G={};let h=!1;for(const d in o.morphAttributes){if(d!=="position"&&d!=="normal"){h||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),h=!0);continue}const C=o.morphAttributes[d][I],O=d.toUpperCase(),B=o.attributes[d];if(n.attributes.has(this.getUID(C,!0))){G[O]=n.attributes.get(this.getUID(C,!0));continue}const W=C.clone();if(!o.morphTargetsRelative)for(let Y=0,X=C.count;Y<X;Y++)for(let ee=0;ee<C.itemSize;ee++)ee===0&&W.setX(Y,C.getX(Y)-B.getX(Y)),ee===1&&W.setY(Y,C.getY(Y)-B.getY(Y)),ee===2&&W.setZ(Y,C.getZ(Y)-B.getZ(Y)),ee===3&&W.setW(Y,C.getW(Y)-B.getW(Y));G[O]=this.processAccessor(W,o),n.attributes.set(this.getUID(B,!0),G[O])}g.push(G),v.push(t.morphTargetInfluences[I]),t.morphTargetDictionary!==void 0&&D.push(R[I])}m.weights=v,D.length>0&&(m.extras={},m.extras.targetNames=D)}const A=Array.isArray(t.material);if(A&&o.groups.length===0)return null;let f=!1;if(A&&o.index===null){const v=[];for(let D=0,R=o.attributes.position.count;D<R;D++)v[D]=D;o.setIndex(v),f=!0}const c=A?t.material:[t.material],w=A?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,D=w.length;v<D;v++){const R={mode:s,attributes:_};if(this.serializeUserData(o,R),g.length>0&&(R.targets=g),o.index!==null){let G=this.getUID(o.index);(w[v].start!==void 0||w[v].count!==void 0)&&(G+=":"+w[v].start+":"+w[v].count),n.attributes.has(G)?R.indices=n.attributes.get(G):(R.indices=this.processAccessor(o.index,o,w[v].start,w[v].count),n.attributes.set(G,R.indices)),R.indices===null&&delete R.indices}const I=await this.processMaterialAsync(c[w[v].materialIndex]);I!==null&&(R.material=I),T.push(R)}f===!0&&o.setIndex(null),m.primitives=T,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(t,m)});const b=i.meshes.push(m)-1;return n.meshes.set(a,b),b}detectMeshQuantization(t,n){if(this.extensionsUsed[Kn])return;let i;switch(n.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}n.normalized&&(i+=" normalized");const r=t.split("_",1)[0];yr[r]&&yr[r].includes(i)&&(this.extensionsUsed[Kn]=!0,this.extensionsRequired[Kn]=!0)}processCamera(t){const n=this.json;n.cameras||(n.cameras=[]);const i=t.isOrthographicCamera,r={type:i?"orthographic":"perspective"};return i?r.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:r.perspective={aspectRatio:t.aspect,yfov:An.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(r.name=t.type),n.cameras.push(r)-1}processAnimation(t,n){const i=this.json,r=this.nodeMap;i.animations||(i.animations=[]),t=bn.Utils.mergeMorphTargetTracks(t.clone(),n);const a=t.tracks,o=[],s=[];for(let _=0;_<a.length;++_){const T=a[_],g=Rn.parseTrackName(T.name);let M=Rn.findNode(n,g.nodeName);const E=Lr[g.propertyName];if(g.objectName==="bones"&&(M.isSkinnedMesh===!0?M=M.skeleton.getBoneByName(g.objectIndex):M=void 0),!M||!E){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',T.name);continue}const L=1;let A=T.values.length/T.times.length;E===Lr.morphTargetInfluences&&(A/=M.morphTargetInfluences.length);let f;T.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",A/=3):T.getInterpolation()===Go?f="STEP":f="LINEAR",s.push({input:this.processAccessor(new Tt(T.times,L)),output:this.processAccessor(new Tt(T.values,A)),interpolation:f}),o.push({sampler:s.length-1,target:{node:r.get(M),path:E}})}const m={name:t.name||"clip_"+i.animations.length,samplers:s,channels:o};return this.serializeUserData(t,m),i.animations.push(m),i.animations.length-1}processSkin(t){const n=this.json,i=this.nodeMap,r=n.nodes[i.get(t)],a=t.skeleton;if(a===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const s=[],m=new Float32Array(a.bones.length*16),_=new Vt;for(let g=0;g<a.bones.length;++g)s.push(i.get(a.bones[g])),_.copy(a.boneInverses[g]),_.multiply(t.bindMatrix).toArray(m,g*16);return n.skins===void 0&&(n.skins=[]),n.skins.push({inverseBindMatrices:this.processAccessor(new Tt(m,16)),joints:s,skeleton:i.get(o)}),r.skin=n.skins.length-1}async processNodeAsync(t){const n=this.json,i=this.options,r=this.nodeMap;n.nodes||(n.nodes=[]);const a={};if(i.trs){const s=t.quaternion.toArray(),m=t.position.toArray(),_=t.scale.toArray();sn(s,[0,0,0,1])||(a.rotation=s),sn(m,[0,0,0])||(a.translation=m),sn(_,[1,1,1])||(a.scale=_)}else t.matrixAutoUpdate&&t.updateMatrix(),sd(t.matrix)===!1&&(a.matrix=t.matrix.elements);if(t.name!==""&&(a.name=String(t.name)),this.serializeUserData(t,a),t.isMesh||t.isLine||t.isPoints){const s=await this.processMeshAsync(t);s!==null&&(a.mesh=s)}else t.isCamera&&(a.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const o=n.nodes.push(a)-1;if(r.set(t,o),t.children.length>0){const s=[];for(let m=0,_=t.children.length;m<_;m++){const T=t.children[m];if(T.visible||i.onlyVisible===!1){const g=await this.processNodeAsync(T);g!==null&&s.push(g)}}s.length>0&&(a.children=s)}return await this._invokeAllAsync(function(s){s.writeNode&&s.writeNode(t,a)}),o}async processSceneAsync(t){const n=this.json,i=this.options;n.scenes||(n.scenes=[],n.scene=0);const r={};t.name!==""&&(r.name=t.name),n.scenes.push(r);const a=[];for(let o=0,s=t.children.length;o<s;o++){const m=t.children[o];if(m.visible||i.onlyVisible===!1){const _=await this.processNodeAsync(m);_!==null&&a.push(_)}}a.length>0&&(r.nodes=a),this.serializeUserData(t,r)}async processObjectsAsync(t){const n=new oi;n.name="AuxScene";for(let i=0;i<t.length;i++)n.children.push(t[i]);await this.processSceneAsync(n)}async processInputAsync(t){const n=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(r){r.beforeParse&&r.beforeParse(t)});const i=[];for(let r=0;r<t.length;r++)t[r]instanceof oi?await this.processSceneAsync(t[r]):i.push(t[r]);i.length>0&&await this.processObjectsAsync(i);for(let r=0;r<this.skins.length;++r)this.processSkin(this.skins[r]);for(let r=0;r<n.animations.length;++r)this.processAnimation(n.animations[r],t[0]);await this._invokeAllAsync(function(r){r.afterParse&&r.afterParse(t)})}async _invokeAllAsync(t){for(let n=0,i=this.plugins.length;n<i;n++)await t(this.plugins[n])}}class ud{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,n){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const i=this.writer,r=i.json,a=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),a[this.name]||(r.extensions=r.extensions||{},r.extensions[this.name]={lights:[]},a[this.name]=!0);const s=r.extensions[this.name].lights;s.push(o),n.extensions=n.extensions||{},n.extensions[this.name]={light:s.length-1}}}class dd{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,n){if(!t.isMeshBasicMaterial)return;const r=this.writer.extensionsUsed;n.extensions=n.extensions||{},n.extensions[this.name]={},r[this.name]=!0,n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=.9}}class pd{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const i=this.writer,r=i.extensionsUsed,a={};if(a.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),a.clearcoatTexture=o}if(a.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),a.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),a.clearcoatNormalTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class hd{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const r=this.writer.extensionsUsed,a={};a.dispersion=t.dispersion,n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class md{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const i=this.writer,r=i.extensionsUsed,a={};if(a.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),a.iridescenceTexture=o}if(a.iridescenceIor=t.iridescenceIOR,a.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],a.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),a.iridescenceThicknessTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class _d{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,r=i.extensionsUsed,a={};if(a.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),a.transmissionTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class gd{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,r=i.extensionsUsed,a={};if(a.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),a.thicknessTexture=o}t.attenuationDistance!==1/0&&(a.attenuationDistance=t.attenuationDistance),a.attenuationColor=t.attenuationColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class vd{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const r=this.writer.extensionsUsed,a={};a.ior=t.ior,n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class Ed{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(td)&&!t.specularIntensityMap&&!t.specularColorMap)return;const i=this.writer,r=i.extensionsUsed,a={};if(t.specularIntensityMap){const o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),a.specularTexture=o}if(t.specularColorMap){const o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),a.specularColorTexture=o}a.specularFactor=t.specularIntensity,a.specularColorFactor=t.specularColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class Sd{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const i=this.writer,r=i.extensionsUsed,a={};if(t.sheenRoughnessMap){const o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),a.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),a.sheenColorTexture=o}a.sheenRoughnessFactor=t.sheenRoughness,a.sheenColorFactor=t.sheenColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class Md{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const i=this.writer,r=i.extensionsUsed,a={};if(t.anisotropyMap){const o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),a.anisotropyTexture=o}a.anisotropyStrength=t.anisotropy,a.anisotropyRotation=t.anisotropyRotation,n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class Td{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const r=this.writer.extensionsUsed,a={};a.emissiveStrength=t.emissiveIntensity,n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class xd{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const i=this.writer,r=i.extensionsUsed,a={};if(t.bumpMap){const o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),a.bumpTexture=o}a.bumpFactor=t.bumpScale,n.extensions=n.extensions||{},n.extensions[this.name]=a,r[this.name]=!0}}class Ad{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,n){if(!t.isInstancedMesh)return;const i=this.writer,r=t,a=new Float32Array(r.count*3),o=new Float32Array(r.count*4),s=new Float32Array(r.count*3),m=new Vt,_=new Re,T=new ai,g=new Re;for(let E=0;E<r.count;E++)r.getMatrixAt(E,m),m.decompose(_,T,g),_.toArray(a,E*3),T.toArray(o,E*4),g.toArray(s,E*3);const M={TRANSLATION:i.processAccessor(new Tt(a,3)),ROTATION:i.processAccessor(new Tt(o,4)),SCALE:i.processAccessor(new Tt(s,3))};r.instanceColor&&(M._COLOR_0=i.processAccessor(r.instanceColor)),n.extensions=n.extensions||{},n.extensions[this.name]={attributes:M},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}bn.Utils={insertKeyframe:function(e,t){const i=e.getValueSize(),r=new e.TimeBufferType(e.times.length+1),a=new e.ValueBufferType(e.values.length+i),o=e.createInterpolant(new e.ValueBufferType(i));let s;if(e.times.length===0){r[0]=t;for(let m=0;m<i;m++)a[m]=0;s=0}else if(t<e.times[0]){if(Math.abs(e.times[0]-t)<.001)return 0;r[0]=t,r.set(e.times,1),a.set(o.evaluate(t),0),a.set(e.values,i),s=0}else if(t>e.times[e.times.length-1]){if(Math.abs(e.times[e.times.length-1]-t)<.001)return e.times.length-1;r[r.length-1]=t,r.set(e.times,0),a.set(e.values,0),a.set(o.evaluate(t),e.values.length),s=r.length-1}else for(let m=0;m<e.times.length;m++){if(Math.abs(e.times[m]-t)<.001)return m;if(e.times[m]<t&&e.times[m+1]>t){r.set(e.times.slice(0,m+1),0),r[m+1]=t,r.set(e.times.slice(m+1),m+2),a.set(e.values.slice(0,(m+1)*i),0),a.set(o.evaluate(t),(m+1)*i),a.set(e.values.slice((m+1)*i),(m+2)*i),s=m+1;break}}return e.times=r,e.values=a,s},mergeMorphTargetTracks:function(e,t){const n=[],i={},r=e.tracks;for(let a=0;a<r.length;++a){let o=r[a];const s=Rn.parseTrackName(o.name),m=Rn.findNode(t,s.nodeName);if(s.propertyName!=="morphTargetInfluences"||s.propertyIndex===void 0){n.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ho)}const _=m.morphTargetInfluences.length,T=m.morphTargetDictionary[s.propertyIndex];if(T===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+s.propertyIndex);let g;if(i[m.uuid]===void 0){g=o.clone();const E=new g.ValueBufferType(_*g.times.length);for(let L=0;L<g.times.length;L++)E[L*_+T]=g.values[L];g.name=(s.nodeName||"")+".morphTargetInfluences",g.values=E,i[m.uuid]=g,n.push(g);continue}const M=o.createInterpolant(new o.ValueBufferType(1));g=i[m.uuid];for(let E=0;E<g.times.length;E++)g.values[E*_+T]=M.evaluate(g.times[E]);for(let E=0;E<o.times.length;E++){const L=this.insertKeyframe(g,o.times[E]);g.values[L*_+T]=o.values[E]}}return e.tracks=n,e},toFloat32BufferAttribute:function(e){const t=new Tt(new Float32Array(e.count*e.itemSize),e.itemSize,!1);if(!e.normalized&&!e.isInterleavedBufferAttribute)return t.array.set(e.array),t;for(let n=0,i=e.count;n<i;n++)for(let r=0;r<e.itemSize;r++)t.setComponent(n,r,e.getComponent(n,r));return t}};const Rd=4096,bd=8192;function Nr(e){return e.every(Number.isFinite)}function Cd(e){const t=e==null?void 0:e.surface,n=e==null?void 0:e.depth_mapping;if(!t||!n||!Array.isArray(t.positions)||!Array.isArray(t.indices)||!Array.isArray(t.colors))return null;const{positions:i,indices:r,colors:a}=t,o=i.length/3,s=r.length/3;if(e.method!=="single-view-relative-depth"||e.status!=="provisional"&&e.status!=="unresolved"||!e.source_id||n.kind!=="inverse-affine-prior"||!Number.isFinite(n.near)||!Number.isFinite(n.far)||n.near<=0||n.far<=n.near||!Array.isArray(e.assumptions)||!e.assumptions.every(_=>typeof _=="string")||i.length<9||i.length%3!==0||a.length!==i.length||r.length<3||r.length%3!==0||o>Rd||s>bd||!Nr(i)||!Nr(a)||a.some(_=>_<0||_>1)||r.some(_=>!Number.isInteger(_)||_<0||_>=o))return null;const m=new Pn;return m.setAttribute("position",new nr(i,3)),m.setAttribute("color",new nr(a,3)),m.setIndex(new oa(r,1)),m.computeVertexNormals(),m.computeBoundingBox(),m.computeBoundingSphere(),m}function wd(e,t){const n=Cd(e);if(!n)return null;const i=t==="source-color"?new fi({vertexColors:!0,side:vt}):new sa({color:12107708,roughness:.86,metalness:.02,side:vt}),r=new xt(n,i);return r.name="Environment depth surface",r.userData={kind:"environment",sourceId:e.source_id,method:e.method,status:e.status,assumptions:[...e.assumptions],depthMapping:{...e.depth_mapping}},r}function yd({scene:e,paths:t,time:n,selected:i,onSelect:r,mode:a,reset:o,exportRef:s,renderStyle:m="source-color",showSurface:_=!0,showPrimitives:T=!0}){const g=Xt.useRef(null),M=Xt.useRef(n),E=Xt.useRef(r),L=Xt.useRef(new Map);M.current=n,E.current=r;const[A,f]=Xt.useState("");return Xt.useEffect(()=>{const c=g.current;let w;try{w=new Hu({antialias:!0,alpha:!1}),f("")}catch{f("3D rendering is unavailable. The scene list and numeric editors remain available.");return}w.setPixelRatio(Math.min(devicePixelRatio,2)),w.outputColorSpace=ci,c.appendChild(w.domElement),w.domElement.setAttribute("aria-label","Interactive spatial scene. Select geometry with the scene list; use view buttons to change the camera.");const b=new oi;b.background=new $e("#1c2226"),b.add(new Vo(15398127,3226947,2.4));const v=new ko(16773596,2.5);v.position.set(4,9,6),b.add(v);const D=new zo(40,40,5926256,3424839);D.visible=a!=="source",D.position.y=-.015,b.add(D);const R=new Wo;b.add(R);const I=new Map;for(const ce of e.primitives){const fe=new xt(Xo(ce),new sa({color:ce.color,roughness:.85,metalness:.04,side:vt,transparent:!0,opacity:ce.status==="unresolved"?.35:.88}));fe.name=ce.label,fe.userData={primitiveId:ce.id,status:ce.status,assumptions:ce.assumptions},fe.position.fromArray(ce.position),fe.quaternion.fromArray(ce.quaternion),fe.visible=T,R.add(fe),I.set(ce.id,fe);const Pe=new Yo(new Ko(fe.geometry),new qo({color:ce.id===i?9036237:5400427,transparent:!0,opacity:ce.id===i?1:.55}));fe.add(Pe)}const G=e.environment?wd(e.environment,m):null;G&&(G.visible=_,R.add(G));for(const ce of t){for(const fe of ce.segments){const Pe=ce.points[fe.from_index],H=ce.points[fe.to_index];if(!Pe||!H||fe.kind==="gap")continue;const K=new Zo(new Pn().setFromPoints(fe.kind==="inferred"&&fe.control_points?new $o(new Re(...Pe.position),new Re(...fe.control_points[0]),new Re(...fe.control_points[1]),new Re(...H.position)).getPoints(32):[new Re(...Pe.position),new Re(...H.position)]),new jo({color:fe.kind==="jump"?14791028:7984576,dashSize:.16,gapSize:.11}));K.computeLineDistances(),b.add(K)}for(const fe of ce.points){const Pe=new xt(new Qo(.065,10,8),new fi({color:12119263}));Pe.position.fromArray(fe.position),b.add(Pe)}}const h=new Jo,d=new Re,C=new Re;R.traverse(ce=>{ce.visible&&ce instanceof xt&&h.expandByObject(ce)}),h.getCenter(d),h.getSize(C),h.isEmpty()&&(d.set(0,0,0),C.set(10,10,10));const O=Math.max(C.x,C.y,C.z,5);let B;a==="source"?B=es(e.camera):a==="top"?(B=new aa(-O,O,O,-O,.01,1e4),B.position.copy(d).add(new Re(0,O*2,0)),B.up.set(0,0,-1),B.lookAt(d)):(B=new $t(44,1,.01,1e4),B.position.copy(d).add(new Re(O*.8,O*.62,O*.95)),B.lookAt(d));const W=new ku(B,w.domElement);W.enabled=a!=="source",W.enableRotate=a!=="top",W.target.copy(d),W.enableDamping=!0;const Y=`${e.id}:${a}:${o}`,X=L.current.get(Y);X&&a!=="source"&&(B.position.copy(X.position),W.target.copy(X.target)),a!=="source"&&W.update();const ee=()=>{const ce=c.clientWidth,fe=c.clientHeight;if(w.setSize(ce,fe),a==="source"){const Pe=e.camera.width/e.camera.height,H=Math.min(ce,fe*Pe),K=H/Pe;w.setViewport((ce-H)/2,(fe-K)/2,H,K)}else B instanceof $t?(B.aspect=ce/fe,B.updateProjectionMatrix()):(B.left=-O*ce/fe/1.5,B.right=O*ce/fe/1.5,B.top=O/1.5,B.bottom=-O/1.5,B.updateProjectionMatrix())},k=new ResizeObserver(ee);k.observe(c),ee();const he=new ts;let Te=null;const De=ce=>{Te={x:ce.clientX,y:ce.clientY}},Ve=ce=>{if(!Te||Math.hypot(ce.clientX-Te.x,ce.clientY-Te.y)>5)return;const fe=w.domElement.getBoundingClientRect();let Pe=ce.clientX-fe.left,H=ce.clientY-fe.top,K=fe.width,se=fe.height;if(a==="source"){const ge=e.camera.width/e.camera.height,Be=Math.min(K,se*ge),ot=Be/ge;Pe-=(K-Be)/2,H-=(se-ot)/2,K=Be,se=ot}he.setFromCamera(new Ze(Pe/K*2-1,-H/se*2+1),B);const Ce=he.intersectObjects([...I.values()],!1)[0];Ce&&E.current(Ce.object.userData.primitiveId)};return w.domElement.addEventListener("pointerdown",De),w.domElement.addEventListener("pointerup",Ve),s.current=async()=>{const ce=await new bn().parseAsync(R,{binary:!0,onlyVisible:!0});ns(ce,"tweens-provisional-scene.glb","model/gltf-binary")},w.setAnimationLoop(()=>{for(const ce of t){const fe=I.get(ce.primitive_id);if(!fe)continue;const Pe=is(ce,M.current);fe.visible=T&&!!Pe,Pe&&fe.position.fromArray(Pe)}a!=="source"&&W.update(),w.render(b,B)}),()=>{a!=="source"&&L.current.set(Y,{position:B.position.clone(),target:W.target.clone()}),s.current=null,w.setAnimationLoop(null),k.disconnect(),W.dispose(),w.domElement.removeEventListener("pointerdown",De),w.domElement.removeEventListener("pointerup",Ve),b.traverse(ce=>{var H;const fe=ce;(H=fe.geometry)==null||H.dispose(),(Array.isArray(fe.material)?fe.material:[fe.material]).forEach(K=>K==null?void 0:K.dispose())}),w.dispose(),w.domElement.remove()}},[e,t,i,a,o,s,m,_,T]),ir.jsx("div",{className:"scene-canvas",ref:g,children:A&&ir.jsx("p",{className:"canvas-error",children:A})})}export{yd as default};
