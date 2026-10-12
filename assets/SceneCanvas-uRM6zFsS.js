import{c as ga,N as yt,S as si,C as $e,F as Ur,V as Ae,R as Ir,a as mt,w as qn,M as Vt,W as vi,b as Jt,d as at,L as Kt,H as Cn,U as kt,D as xt,B as Tt,e as cn,f as wn,p as va,E as Ea,g as Ze,P as $t,A as Sa,h as Un,i as bt,j as Mn,k as ci,l as ln,m as fn,n as Nr,o as Ma,q as Ot,r as Tn,s as Ta,t as xa,u as rn,O as Aa,v as Ra,x as ba,y as Ca,z as wa,G as Pa,I as ya,J as La,K as Da,Q as Ua,T as Ia,X as Na,Y as Oa,Z as Fa,_ as Ba,$ as Or,a0 as Fr,a1 as Br,a2 as vn,a3 as Bt,a4 as an,a5 as Hr,a6 as jt,a7 as Ha,a8 as Ga,a9 as Va,aa as ka,ab as Gr,ac as za,ad as Wa,ae as Xa,af as Vr,ag as Ve,ah as Ya,ai as Ka,aj as qa,ak as zt,al as li,am as Mt,an as Ct,ao as kr,ap as Gt,aq as Pt,ar as xn,as as zr,at as Wr,au as Xr,av as Yr,aw as Za,ax as $a,ay as ja,az as Qa,aA as Kr,aB as Ht,aC as Ja,aD as eo,aE as to,aF as qr,aG as no,aH as Zr,aI as $r,aJ as In,aK as Nn,aL as On,aM as Fn,aN as Qe,aO as Ei,aP as Si,aQ as Mi,aR as Ti,aS as xi,aT as Ai,aU as Ri,aV as bi,aW as Ci,aX as wi,aY as Pi,aZ as yi,a_ as Li,a$ as Di,b0 as Ui,b1 as Ii,b2 as Ni,b3 as Oi,b4 as Fi,b5 as Bi,b6 as Hi,b7 as Gi,b8 as Vi,b9 as ki,ba as zi,bb as Wi,bc as Xi,bd as Yi,be as Zn,bf as $n,bg as jn,bh as Qn,bi as Jn,bj as ei,bk as ti,bl as io,bm as Ki,bn as ro,bo as En,bp as ao,bq as qi,br as Zi,bs as $i,bt as ni,bu as ii,bv as oo,bw as jr,bx as so,by as Pn,bz as co,bA as lo,bB as Qr,bC as Jr,bD as ji,bE as ea,bF as Qi,bG as ta,bH as un,bI as en,bJ as na,bK as ia,bL as fo,bM as uo,bN as po,bO as Ji,bP as ht,bQ as ho,bR as mo,bS as _o,bT as go,bU as vo,bV as Eo,bW as So,bX as Mo,bY as To,bZ as xo,b_ as Ao,b$ as Ro,c0 as bo,c1 as Co,c2 as wo,c3 as Po,c4 as yo,c5 as Lo,c6 as Do,c7 as Qt,c8 as qt,c9 as ri,ca as er,cb as Uo,cc as An,cd as Bn,ce as Io,cf as No,cg as Rn,ch as Oo,ci as ai,cj as Fo,ck as Xt,cl as Bo,cm as Ho,cn as Go,co as Vo,cp as ko,cq as zo,cr as Wo,cs as Xo,ct as Yo,cu as Ko,cv as qo,cw as Zo,cx as $o,cy as jo,cz as Qo,cA as Jo,cB as es,cC as ts,cD as tr}from"./index-IgErJslZ.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ra(){let e=null,t=!1,n=null,i=null;function a(r,o){n(r,o),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ns(e){const t=new WeakMap;function n(s,m){const v=s.array,x=s.usage,_=v.byteLength,M=e.createBuffer();e.bindBuffer(m,M),e.bufferData(m,v,x),s.onUploadCallback();let E;if(v instanceof Float32Array)E=e.FLOAT;else if(typeof Float16Array<"u"&&v instanceof Float16Array)E=e.HALF_FLOAT;else if(v instanceof Uint16Array)s.isFloat16BufferAttribute?E=e.HALF_FLOAT:E=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=e.SHORT;else if(v instanceof Uint32Array)E=e.UNSIGNED_INT;else if(v instanceof Int32Array)E=e.INT;else if(v instanceof Int8Array)E=e.BYTE;else if(v instanceof Uint8Array)E=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:M,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:s.version,size:_}}function i(s,m,v){const x=m.array,_=m.updateRanges;if(e.bindBuffer(v,s),_.length===0)e.bufferSubData(v,0,x);else{_.sort((E,y)=>E.start-y.start);let M=0;for(let E=1;E<_.length;E++){const y=_[M],T=_[E];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++M,_[M]=T)}_.length=M+1;for(let E=0,y=_.length;E<y;E++){const T=_[E];e.bufferSubData(v,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const m=t.get(s);m&&(e.deleteBuffer(m.buffer),t.delete(s))}function o(s,m){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const x=t.get(s);(!x||x.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const v=t.get(s);if(v===void 0)t.set(s,n(s,m));else if(v.version<s.version){if(v.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,s,m),v.version=s.version}}return{get:a,remove:r,update:o}}var is=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rs=`#ifdef USE_ALPHAHASH
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
#endif`,as=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,os=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ss=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ls=`#ifdef USE_AOMAP
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
#endif`,fs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,us=`#ifdef USE_BATCHING
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
#endif`,ds=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ps=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ms=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_s=`#ifdef USE_IRIDESCENCE
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
#endif`,gs=`#ifdef USE_BUMPMAP
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
#endif`,vs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Es=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ss=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ms=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ts=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,As=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rs=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bs=`#define PI 3.141592653589793
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
} // validated`,Cs=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ws=`vec3 transformedNormal = objectNormal;
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
#endif`,Ps=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ys=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ls=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ds=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Us="gl_FragColor = linearToOutputTexel( gl_FragColor );",Is=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ns=`#ifdef USE_ENVMAP
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
#endif`,Os=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fs=`#ifdef USE_ENVMAP
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
#endif`,Bs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hs=`#ifdef USE_ENVMAP
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
#endif`,Gs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ks=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ws=`#ifdef USE_GRADIENTMAP
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
}`,Xs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ys=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ks=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qs=`uniform bool receiveShadow;
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
#endif`,Zs=`#ifdef USE_ENVMAP
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
#endif`,$s=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,js=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Js=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ec=`PhysicalMaterial material;
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
#endif`,tc=`struct PhysicalMaterial {
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
}`,nc=`
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
#endif`,ic=`#if defined( RE_IndirectDiffuse )
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
#endif`,rc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ac=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dc=`#if defined( USE_POINTS_UV )
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
#endif`,pc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_c=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vc=`#ifdef USE_MORPHTARGETS
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
#endif`,Ec=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ac=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rc=`#ifdef USE_NORMALMAP
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
#endif`,bc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ic=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vc=`float getShadowMask() {
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
}`,kc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zc=`#ifdef USE_SKINNING
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
#endif`,Wc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,Yc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$c=`#ifdef USE_TRANSMISSION
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
#endif`,jc=`#ifdef USE_TRANSMISSION
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
#endif`,Qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,el=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,il=`uniform sampler2D t2D;
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
}`,rl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,al=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ol=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cl=`#include <common>
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
}`,ll=`#if DEPTH_PACKING == 3200
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
}`,fl=`#define DISTANCE
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
}`,ul=`#define DISTANCE
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
}`,dl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hl=`uniform float scale;
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
}`,ml=`uniform vec3 diffuse;
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
}`,_l=`#include <common>
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
}`,gl=`uniform vec3 diffuse;
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
}`,vl=`#define LAMBERT
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
}`,El=`#define LAMBERT
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
}`,Sl=`#define MATCAP
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
}`,Ml=`#define MATCAP
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
}`,Tl=`#define NORMAL
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
}`,xl=`#define NORMAL
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
}`,Al=`#define PHONG
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
}`,Rl=`#define PHONG
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
}`,bl=`#define STANDARD
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
}`,Cl=`#define STANDARD
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
}`,wl=`#define TOON
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
}`,Pl=`#define TOON
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
}`,yl=`uniform float size;
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
}`,Ll=`uniform vec3 diffuse;
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
}`,Dl=`#include <common>
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
}`,Ul=`uniform vec3 color;
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
}`,Il=`uniform float rotation;
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
}`,Nl=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:is,alphahash_pars_fragment:rs,alphamap_fragment:as,alphamap_pars_fragment:os,alphatest_fragment:ss,alphatest_pars_fragment:cs,aomap_fragment:ls,aomap_pars_fragment:fs,batching_pars_vertex:us,batching_vertex:ds,begin_vertex:ps,beginnormal_vertex:hs,bsdfs:ms,iridescence_fragment:_s,bumpmap_pars_fragment:gs,clipping_planes_fragment:vs,clipping_planes_pars_fragment:Es,clipping_planes_pars_vertex:Ss,clipping_planes_vertex:Ms,color_fragment:Ts,color_pars_fragment:xs,color_pars_vertex:As,color_vertex:Rs,common:bs,cube_uv_reflection_fragment:Cs,defaultnormal_vertex:ws,displacementmap_pars_vertex:Ps,displacementmap_vertex:ys,emissivemap_fragment:Ls,emissivemap_pars_fragment:Ds,colorspace_fragment:Us,colorspace_pars_fragment:Is,envmap_fragment:Ns,envmap_common_pars_fragment:Os,envmap_pars_fragment:Fs,envmap_pars_vertex:Bs,envmap_physical_pars_fragment:Zs,envmap_vertex:Hs,fog_vertex:Gs,fog_pars_vertex:Vs,fog_fragment:ks,fog_pars_fragment:zs,gradientmap_pars_fragment:Ws,lightmap_pars_fragment:Xs,lights_lambert_fragment:Ys,lights_lambert_pars_fragment:Ks,lights_pars_begin:qs,lights_toon_fragment:$s,lights_toon_pars_fragment:js,lights_phong_fragment:Qs,lights_phong_pars_fragment:Js,lights_physical_fragment:ec,lights_physical_pars_fragment:tc,lights_fragment_begin:nc,lights_fragment_maps:ic,lights_fragment_end:rc,logdepthbuf_fragment:ac,logdepthbuf_pars_fragment:oc,logdepthbuf_pars_vertex:sc,logdepthbuf_vertex:cc,map_fragment:lc,map_pars_fragment:fc,map_particle_fragment:uc,map_particle_pars_fragment:dc,metalnessmap_fragment:pc,metalnessmap_pars_fragment:hc,morphinstance_vertex:mc,morphcolor_vertex:_c,morphnormal_vertex:gc,morphtarget_pars_vertex:vc,morphtarget_vertex:Ec,normal_fragment_begin:Sc,normal_fragment_maps:Mc,normal_pars_fragment:Tc,normal_pars_vertex:xc,normal_vertex:Ac,normalmap_pars_fragment:Rc,clearcoat_normal_fragment_begin:bc,clearcoat_normal_fragment_maps:Cc,clearcoat_pars_fragment:wc,iridescence_pars_fragment:Pc,opaque_fragment:yc,packing:Lc,premultiplied_alpha_fragment:Dc,project_vertex:Uc,dithering_fragment:Ic,dithering_pars_fragment:Nc,roughnessmap_fragment:Oc,roughnessmap_pars_fragment:Fc,shadowmap_pars_fragment:Bc,shadowmap_pars_vertex:Hc,shadowmap_vertex:Gc,shadowmask_pars_fragment:Vc,skinbase_vertex:kc,skinning_pars_vertex:zc,skinning_vertex:Wc,skinnormal_vertex:Xc,specularmap_fragment:Yc,specularmap_pars_fragment:Kc,tonemapping_fragment:qc,tonemapping_pars_fragment:Zc,transmission_fragment:$c,transmission_pars_fragment:jc,uv_pars_fragment:Qc,uv_pars_vertex:Jc,uv_vertex:el,worldpos_vertex:tl,background_vert:nl,background_frag:il,backgroundCube_vert:rl,backgroundCube_frag:al,cube_vert:ol,cube_frag:sl,depth_vert:cl,depth_frag:ll,distanceRGBA_vert:fl,distanceRGBA_frag:ul,equirect_vert:dl,equirect_frag:pl,linedashed_vert:hl,linedashed_frag:ml,meshbasic_vert:_l,meshbasic_frag:gl,meshlambert_vert:vl,meshlambert_frag:El,meshmatcap_vert:Sl,meshmatcap_frag:Ml,meshnormal_vert:Tl,meshnormal_frag:xl,meshphong_vert:Al,meshphong_frag:Rl,meshphysical_vert:bl,meshphysical_frag:Cl,meshtoon_vert:wl,meshtoon_frag:Pl,points_vert:yl,points_frag:Ll,shadow_vert:Dl,shadow_frag:Ul,sprite_vert:Il,sprite_frag:Nl},ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Rt={basic:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:ht([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:ht([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:ht([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:ht([ae.common,ae.displacementmap,{referencePosition:{value:new Ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:ht([ae.lights,ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Rt.physical={uniforms:ht([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const hn={r:0,b:0,g:0},Ut=new ea,Ol=new Vt;function Fl(e,t,n,i,a,r,o){const s=new $e(0);let m=r===!0?0:1,v,x,_=null,M=0,E=null;function y(C){let g=C.isScene===!0?C.background:null;return g&&g.isTexture&&(g=(C.backgroundBlurriness>0?n:t).get(g)),g}function T(C){let g=!1;const D=y(C);D===null?c(s,m):D&&D.isColor&&(c(D,1),g=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(C,g){const D=y(g);D&&(D.isCubeTexture||D.mapping===Pn)?(x===void 0&&(x=new Ct(new Jr(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ji(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(R,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),Ut.copy(g.backgroundRotation),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),x.material.uniforms.envMap.value=D,x.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Ol.makeRotationFromEuler(Ut)),x.material.toneMapped=at.getTransfer(D.colorSpace)!==Qe,(_!==D||M!==D.version||E!==e.toneMapping)&&(x.material.needsUpdate=!0,_=D,M=D.version,E=e.toneMapping),x.layers.enableAll(),C.unshift(x,x.geometry,x.material,0,0,null)):D&&D.isTexture&&(v===void 0&&(v=new Ct(new Yr(2,2),new zt({name:"BackgroundMaterial",uniforms:ji(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(v)),v.material.uniforms.t2D.value=D,v.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.material.toneMapped=at.getTransfer(D.colorSpace)!==Qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),v.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||M!==D.version||E!==e.toneMapping)&&(v.material.needsUpdate=!0,_=D,M=D.version,E=e.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null))}function c(C,g){C.getRGB(hn,Qr(e)),i.buffers.color.setClear(hn.r,hn.g,hn.b,g,o)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return s},setClearColor:function(C,g=1){s.set(C),m=g,c(s,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,c(s,m)},render:T,addToRenderList:f,dispose:L}}function Bl(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=M(null);let r=a,o=!1;function s(d,b,B,X,Y){let W=!1;const k=_(X,B,b);r!==k&&(r=k,v(r.object)),W=E(d,X,B,Y),W&&y(d,X,B,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,g(d,b,B,X),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return e.createVertexArray()}function v(d){return e.bindVertexArray(d)}function x(d){return e.deleteVertexArray(d)}function _(d,b,B){const X=B.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let W=Y[b.id];W===void 0&&(W={},Y[b.id]=W);let k=W[X];return k===void 0&&(k=M(m()),W[X]=k),k}function M(d){const b=[],B=[],X=[];for(let Y=0;Y<n;Y++)b[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:X,object:d,attributes:{},index:null}}function E(d,b,B,X){const Y=r.attributes,W=b.attributes;let k=0;const ne=B.getAttributes();for(const G in ne)if(ne[G].location>=0){const Q=Y[G];let pe=W[G];if(pe===void 0&&(G==="instanceMatrix"&&d.instanceMatrix&&(pe=d.instanceMatrix),G==="instanceColor"&&d.instanceColor&&(pe=d.instanceColor)),Q===void 0||Q.attribute!==pe||pe&&Q.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==X}function y(d,b,B,X){const Y={},W=b.attributes;let k=0;const ne=B.getAttributes();for(const G in ne)if(ne[G].location>=0){let Q=W[G];Q===void 0&&(G==="instanceMatrix"&&d.instanceMatrix&&(Q=d.instanceMatrix),G==="instanceColor"&&d.instanceColor&&(Q=d.instanceColor));const pe={};pe.attribute=Q,Q&&Q.data&&(pe.data=Q.data),Y[G]=pe,k++}r.attributes=Y,r.attributesNum=k,r.index=X}function T(){const d=r.newAttributes;for(let b=0,B=d.length;b<B;b++)d[b]=0}function f(d){c(d,0)}function c(d,b){const B=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;B[d]=1,X[d]===0&&(e.enableVertexAttribArray(d),X[d]=1),Y[d]!==b&&(e.vertexAttribDivisor(d,b),Y[d]=b)}function L(){const d=r.newAttributes,b=r.enabledAttributes;for(let B=0,X=b.length;B<X;B++)b[B]!==d[B]&&(e.disableVertexAttribArray(B),b[B]=0)}function C(d,b,B,X,Y,W,k){k===!0?e.vertexAttribIPointer(d,b,B,Y,W):e.vertexAttribPointer(d,b,B,X,Y,W)}function g(d,b,B,X){T();const Y=X.attributes,W=B.getAttributes(),k=b.defaultAttributeValues;for(const ne in W){const G=W[ne];if(G.location>=0){let $=Y[ne];if($===void 0&&(ne==="instanceMatrix"&&d.instanceMatrix&&($=d.instanceMatrix),ne==="instanceColor"&&d.instanceColor&&($=d.instanceColor)),$!==void 0){const Q=$.normalized,pe=$.itemSize,ye=t.get($);if(ye===void 0)continue;const Fe=ye.buffer,Ye=ye.type,ke=ye.bytesPerElement,z=Ye===e.INT||Ye===e.UNSIGNED_INT||$.gpuType===Kr;if($.isInterleavedBufferAttribute){const q=$.data,fe=q.stride,Pe=$.offset;if(q.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)c(G.location+Me,q.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Me=0;Me<G.locationSize;Me++)f(G.location+Me);e.bindBuffer(e.ARRAY_BUFFER,Fe);for(let Me=0;Me<G.locationSize;Me++)C(G.location+Me,pe/G.locationSize,Ye,Q,fe*ke,(Pe+pe/G.locationSize*Me)*ke,z)}else{if($.isInstancedBufferAttribute){for(let q=0;q<G.locationSize;q++)c(G.location+q,$.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let q=0;q<G.locationSize;q++)f(G.location+q);e.bindBuffer(e.ARRAY_BUFFER,Fe);for(let q=0;q<G.locationSize;q++)C(G.location+q,pe/G.locationSize,Ye,Q,pe*ke,pe/G.locationSize*q*ke,z)}}else if(k!==void 0){const Q=k[ne];if(Q!==void 0)switch(Q.length){case 2:e.vertexAttrib2fv(G.location,Q);break;case 3:e.vertexAttrib3fv(G.location,Q);break;case 4:e.vertexAttrib4fv(G.location,Q);break;default:e.vertexAttrib1fv(G.location,Q)}}}}L()}function D(){F();for(const d in i){const b=i[d];for(const B in b){const X=b[B];for(const Y in X)x(X[Y].object),delete X[Y];delete b[B]}delete i[d]}}function R(d){if(i[d.id]===void 0)return;const b=i[d.id];for(const B in b){const X=b[B];for(const Y in X)x(X[Y].object),delete X[Y];delete b[B]}delete i[d.id]}function U(d){for(const b in i){const B=i[b];if(B[d.id]===void 0)continue;const X=B[d.id];for(const Y in X)x(X[Y].object),delete X[Y];delete B[d.id]}}function F(){p(),o=!0,r!==a&&(r=a,v(r.object))}function p(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:F,resetDefaultState:p,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:f,disableUnusedAttributes:L}}function Hl(e,t,n){let i;function a(v){i=v}function r(v,x){e.drawArrays(i,v,x),n.update(x,i,1)}function o(v,x,_){_!==0&&(e.drawArraysInstanced(i,v,x,_),n.update(x,i,_))}function s(v,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,x,0,_);let E=0;for(let y=0;y<_;y++)E+=x[y];n.update(E,i,1)}function m(v,x,_,M){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<v.length;y++)o(v[y],x[y],M[y]);else{E.multiDrawArraysInstancedWEBGL(i,v,0,x,0,M,0,_);let y=0;for(let T=0;T<_;T++)y+=x[T]*M[T];n.update(y,i,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=m}function Gl(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(U){return!(U!==bt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(U){const F=U===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==kt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ht&&!F)}function m(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=n.precision!==void 0?n.precision:"highp";const x=m(v);x!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",x,"instead."),v=x);const _=n.logarithmicDepthBuffer===!0,M=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),C=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:m,textureFormatReadable:o,textureTypeReadable:s,precision:v,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:E,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:g,vertexTextures:D,maxSamples:R}}function Vl(e){const t=this;let n=null,i=0,a=!1,r=!1;const o=new Vr,s=new Ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,M){const E=_.length!==0||M||i!==0||a;return a=M,i=_.length,E},this.beginShadows=function(){r=!0,x(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,M){n=x(_,M,0)},this.setState=function(_,M,E){const y=_.clippingPlanes,T=_.clipIntersection,f=_.clipShadows,c=e.get(_);if(!a||y===null||y.length===0||r&&!f)r?x(null):v();else{const L=r?0:i,C=L*4;let g=c.clippingState||null;m.value=g,g=x(y,M,C,E);for(let D=0;D!==C;++D)g[D]=n[D];c.clippingState=g,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function v(){m.value!==n&&(m.value=n,m.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function x(_,M,E,y){const T=_!==null?_.length:0;let f=null;if(T!==0){if(f=m.value,y!==!0||f===null){const c=E+T*4,L=M.matrixWorldInverse;s.getNormalMatrix(L),(f===null||f.length<c)&&(f=new Float32Array(c));for(let C=0,g=E;C!==T;++C,g+=4)o.copy(_[C]).applyMatrix4(L,s),o.normal.toArray(f,g),f[g+3]=o.constant}m.value=f,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,f}}function kl(e){let t=new WeakMap;function n(o,s){return s===ni?o.mapping=un:s===ii&&(o.mapping=en),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ni||s===ii)if(t.has(o)){const m=t.get(o).texture;return n(m,o.mapping)}else{const m=o.image;if(m&&m.height>0){const v=new oo(m.height);return v.fromEquirectangularTexture(e,o),t.set(o,v),o.addEventListener("dispose",a),n(v.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const m=t.get(s);m!==void 0&&(t.delete(s),m.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zt=4,nr=[.125,.215,.35,.446,.526,.582],Ft=20,Hn=new na,ir=new $e;let Gn=null,Vn=0,kn=0,zn=!1;const Nt=(1+Math.sqrt(5))/2,Yt=1/Nt,rr=[new Ae(-Nt,Yt,0),new Ae(Nt,Yt,0),new Ae(-Yt,0,Nt),new Ae(Yt,0,Nt),new Ae(0,Nt,-Yt),new Ae(0,Nt,Yt),new Ae(-1,1,-1),new Ae(1,1,-1),new Ae(-1,1,1),new Ae(1,1,1)],zl=new Ae;class ar{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:o=256,position:s=zl}=r;Gn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,i,a,m,s),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gn,Vn,kn),this._renderer.xr.enabled=zn,t.scissorTest=!1,mn(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===un||t.mapping===en?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Cn,format:bt,colorSpace:wn,depthBuffer:!1},a=or(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=or(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wl(r)),this._blurMaterial=Xl(r,t,n)}return a}_compileMaterial(t){const n=new Ct(this._lodPlanes[0],t);this._renderer.compile(n,Hn)}_sceneToCubeUV(t,n,i,a,r){const m=new $t(90,1,n,i),v=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,M=_.autoClear,E=_.toneMapping;_.getClearColor(ir),_.toneMapping=yt,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const T=new ia({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),f=new Ct(new Jr,T);let c=!1;const L=t.background;L?L.isColor&&(T.color.copy(L),t.background=null,c=!0):(T.color.copy(ir),c=!0);for(let C=0;C<6;C++){const g=C%3;g===0?(m.up.set(0,v[C],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x+x[C],r.y,r.z)):g===1?(m.up.set(0,0,v[C]),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y+x[C],r.z)):(m.up.set(0,v[C],0),m.position.set(r.x,r.y,r.z),m.lookAt(r.x,r.y,r.z+x[C]));const D=this._cubeSize;mn(a,g*D,C>2?D:0,D,D),_.setRenderTarget(a),c&&_.render(f,m),_.render(t,m)}f.geometry.dispose(),f.material.dispose(),_.toneMapping=E,_.autoClear=M,t.background=L}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===un||t.mapping===en;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sr());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const m=this._cubeSize;mn(n,0,0,3*m,2*m),i.setRenderTarget(n),i.render(o,Hn)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=rr[(a-r-1)%rr.length];this._blur(t,r-1,r,o,s)}n.autoClear=i}_blur(t,n,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,a,"latitudinal",r),this._halfBlur(o,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,o,s){const m=this._renderer,v=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Ct(this._lodPlanes[a],v),M=v.uniforms,E=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*E):2*Math.PI/(2*Ft-1),T=r/y,f=isFinite(r)?1+Math.floor(x*T):Ft;f>Ft&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ft}`);const c=[];let L=0;for(let U=0;U<Ft;++U){const F=U/T,p=Math.exp(-F*F/2);c.push(p),U===0?L+=p:U<f&&(L+=2*p)}for(let U=0;U<c.length;U++)c[U]=c[U]/L;M.envMap.value=t.texture,M.samples.value=f,M.weights.value=c,M.latitudinal.value=o==="latitudinal",s&&(M.poleAxis.value=s);const{_lodMax:C}=this;M.dTheta.value=y,M.mipInt.value=C-i;const g=this._sizeLods[a],D=3*g*(a>C-Zt?a-C+Zt:0),R=4*(this._cubeSize-g);mn(n,D,R,3*g,2*g),m.setRenderTarget(n),m.render(_,Hn)}}function Wl(e){const t=[],n=[],i=[];let a=e;const r=e-Zt+1+nr.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);n.push(s);let m=1/s;o>e-Zt?m=nr[o-e+Zt-1]:o===0&&(m=0),i.push(m);const v=1/(s-2),x=-v,_=1+v,M=[x,x,_,x,_,_,x,x,_,_,x,_],E=6,y=6,T=3,f=2,c=1,L=new Float32Array(T*y*E),C=new Float32Array(f*y*E),g=new Float32Array(c*y*E);for(let R=0;R<E;R++){const U=R%3*2/3-1,F=R>2?0:-1,p=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];L.set(p,T*y*R),C.set(M,f*y*R);const d=[R,R,R,R,R,R];g.set(d,c*y*R)}const D=new li;D.setAttribute("position",new Mt(L,T)),D.setAttribute("uv",new Mt(C,f)),D.setAttribute("faceIndex",new Mt(g,c)),t.push(D),a>Zt&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function or(e,t,n){const i=new Jt(e,t,n);return i.texture.mapping=Pn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mn(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function Xl(e,t,n){const i=new Float32Array(Ft),a=new Ae(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Ft,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fi(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function sr(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fi(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function cr(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function fi(){return`

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
	`}function Yl(e){let t=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const m=s.mapping,v=m===ni||m===ii,x=m===un||m===en;if(v||x){let _=t.get(s);const M=_!==void 0?_.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==M)return n===null&&(n=new ar(e)),_=v?n.fromEquirectangular(s,_):n.fromCubemap(s,_),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),_.texture;if(_!==void 0)return _.texture;{const E=s.image;return v&&E&&E.height>0||x&&E&&a(E)?(n===null&&(n=new ar(e)),_=v?n.fromEquirectangular(s):n.fromCubemap(s),_.texture.pmremVersion=s.pmremVersion,t.set(s,_),s.addEventListener("dispose",r),_.texture):null}}}return s}function a(s){let m=0;const v=6;for(let x=0;x<v;x++)s[x]!==void 0&&m++;return m===v}function r(s){const m=s.target;m.removeEventListener("dispose",r);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Kl(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&qn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ql(e,t,n,i){const a={},r=new WeakMap;function o(_){const M=_.target;M.index!==null&&t.remove(M.index);for(const y in M.attributes)t.remove(M.attributes[y]);M.removeEventListener("dispose",o),delete a[M.id];const E=r.get(M);E&&(t.remove(E),r.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,n.memory.geometries--}function s(_,M){return a[M.id]===!0||(M.addEventListener("dispose",o),a[M.id]=!0,n.memory.geometries++),M}function m(_){const M=_.attributes;for(const E in M)t.update(M[E],e.ARRAY_BUFFER)}function v(_){const M=[],E=_.index,y=_.attributes.position;let T=0;if(E!==null){const L=E.array;T=E.version;for(let C=0,g=L.length;C<g;C+=3){const D=L[C+0],R=L[C+1],U=L[C+2];M.push(D,R,R,U,U,D)}}else if(y!==void 0){const L=y.array;T=y.version;for(let C=0,g=L.length/3-1;C<g;C+=3){const D=C+0,R=C+1,U=C+2;M.push(D,R,R,U,U,D)}}else return;const f=new(po(M)?fo:uo)(M,1);f.version=T;const c=r.get(_);c&&t.remove(c),r.set(_,f)}function x(_){const M=r.get(_);if(M){const E=_.index;E!==null&&M.version<E.version&&v(_)}else v(_);return r.get(_)}return{get:s,update:m,getWireframeAttribute:x}}function Zl(e,t,n){let i;function a(M){i=M}let r,o;function s(M){r=M.type,o=M.bytesPerElement}function m(M,E){e.drawElements(i,E,r,M*o),n.update(E,i,1)}function v(M,E,y){y!==0&&(e.drawElementsInstanced(i,E,r,M*o,y),n.update(E,i,y))}function x(M,E,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,r,M,0,y);let f=0;for(let c=0;c<y;c++)f+=E[c];n.update(f,i,1)}function _(M,E,y,T){if(y===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<M.length;c++)v(M[c]/o,E[c],T[c]);else{f.multiDrawElementsInstancedWEBGL(i,E,0,r,M,0,T,0,y);let c=0;for(let L=0;L<y;L++)c+=E[L]*T[L];n.update(c,i,1)}}this.setMode=a,this.setIndex=s,this.render=m,this.renderInstances=v,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function $l(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=s*(r/3);break;case e.LINES:n.lines+=s*(r/2);break;case e.LINE_STRIP:n.lines+=s*(r-1);break;case e.LINE_LOOP:n.lines+=s*r;break;case e.POINTS:n.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function jl(e,t,n){const i=new WeakMap,a=new mt;function r(o,s,m){const v=o.morphTargetInfluences,x=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,_=x!==void 0?x.length:0;let M=i.get(s);if(M===void 0||M.count!==_){let p=function(){U.dispose(),i.delete(s),s.removeEventListener("dispose",p)};M!==void 0&&M.texture.dispose();const E=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,T=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],L=s.morphAttributes.color||[];let C=0;E===!0&&(C=1),y===!0&&(C=2),T===!0&&(C=3);let g=s.attributes.position.count*C,D=1;g>t.maxTextureSize&&(D=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const R=new Float32Array(g*D*4*_),U=new jr(R,g,D,_);U.type=Ht,U.needsUpdate=!0;const F=C*4;for(let d=0;d<_;d++){const b=f[d],B=c[d],X=L[d],Y=g*D*4*d;for(let W=0;W<b.count;W++){const k=W*F;E===!0&&(a.fromBufferAttribute(b,W),R[Y+k+0]=a.x,R[Y+k+1]=a.y,R[Y+k+2]=a.z,R[Y+k+3]=0),y===!0&&(a.fromBufferAttribute(B,W),R[Y+k+4]=a.x,R[Y+k+5]=a.y,R[Y+k+6]=a.z,R[Y+k+7]=0),T===!0&&(a.fromBufferAttribute(X,W),R[Y+k+8]=a.x,R[Y+k+9]=a.y,R[Y+k+10]=a.z,R[Y+k+11]=X.itemSize===4?a.w:1)}}M={count:_,texture:U,size:new Ze(g,D)},i.set(s,M),s.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)m.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let E=0;for(let T=0;T<v.length;T++)E+=v[T];const y=s.morphTargetsRelative?1:1-E;m.getUniforms().setValue(e,"morphTargetBaseInfluence",y),m.getUniforms().setValue(e,"morphTargetInfluences",v)}m.getUniforms().setValue(e,"morphTargetsTexture",M.texture,n),m.getUniforms().setValue(e,"morphTargetsTextureSize",M.size)}return{update:r}}function Ql(e,t,n,i){let a=new WeakMap;function r(m){const v=i.render.frame,x=m.geometry,_=t.get(m,x);if(a.get(_)!==v&&(t.update(_),a.set(_,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",s)===!1&&m.addEventListener("dispose",s),a.get(m)!==v&&(n.update(m.instanceMatrix,e.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,e.ARRAY_BUFFER),a.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;a.get(M)!==v&&(M.update(),a.set(M,v))}return _}function o(){a=new WeakMap}function s(m){const v=m.target;v.removeEventListener("dispose",s),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:r,dispose:o}}const aa=new Ro,lr=new Nr(1,1),oa=new jr,sa=new Ao,ca=new xo,fr=[],ur=[],dr=new Float32Array(16),pr=new Float32Array(9),hr=new Float32Array(4);function tn(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=fr[a];if(r===void 0&&(r=new Float32Array(a),fr[a]=r),t!==0){i.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=n,e[o].toArray(r,s)}return r}function st(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ct(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function yn(e,t){let n=ur[t];n===void 0&&(n=new Int32Array(t),ur[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Jl(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ef(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(st(n,t))return;e.uniform2fv(this.addr,t),ct(n,t)}}function tf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(st(n,t))return;e.uniform3fv(this.addr,t),ct(n,t)}}function nf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(st(n,t))return;e.uniform4fv(this.addr,t),ct(n,t)}}function rf(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(st(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ct(n,t)}else{if(st(n,i))return;hr.set(i),e.uniformMatrix2fv(this.addr,!1,hr),ct(n,i)}}function af(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(st(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ct(n,t)}else{if(st(n,i))return;pr.set(i),e.uniformMatrix3fv(this.addr,!1,pr),ct(n,i)}}function of(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(st(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ct(n,t)}else{if(st(n,i))return;dr.set(i),e.uniformMatrix4fv(this.addr,!1,dr),ct(n,i)}}function sf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(st(n,t))return;e.uniform2iv(this.addr,t),ct(n,t)}}function lf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(st(n,t))return;e.uniform3iv(this.addr,t),ct(n,t)}}function ff(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(st(n,t))return;e.uniform4iv(this.addr,t),ct(n,t)}}function uf(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function df(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(st(n,t))return;e.uniform2uiv(this.addr,t),ct(n,t)}}function pf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(st(n,t))return;e.uniform3uiv(this.addr,t),ct(n,t)}}function hf(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(st(n,t))return;e.uniform4uiv(this.addr,t),ct(n,t)}}function mf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(lr.compareFunction=Gr,r=lr):r=aa,n.setTexture2D(t||r,a)}function _f(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||sa,a)}function gf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||ca,a)}function vf(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||oa,a)}function Ef(e){switch(e){case 5126:return Jl;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return af;case 35676:return of;case 5124:case 35670:return sf;case 35667:case 35671:return cf;case 35668:case 35672:return lf;case 35669:case 35673:return ff;case 5125:return uf;case 36294:return df;case 36295:return pf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return vf}}function Sf(e,t){e.uniform1fv(this.addr,t)}function Mf(e,t){const n=tn(t,this.size,2);e.uniform2fv(this.addr,n)}function Tf(e,t){const n=tn(t,this.size,3);e.uniform3fv(this.addr,n)}function xf(e,t){const n=tn(t,this.size,4);e.uniform4fv(this.addr,n)}function Af(e,t){const n=tn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rf(e,t){const n=tn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bf(e,t){const n=tn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cf(e,t){e.uniform1iv(this.addr,t)}function wf(e,t){e.uniform2iv(this.addr,t)}function Pf(e,t){e.uniform3iv(this.addr,t)}function yf(e,t){e.uniform4iv(this.addr,t)}function Lf(e,t){e.uniform1uiv(this.addr,t)}function Df(e,t){e.uniform2uiv(this.addr,t)}function Uf(e,t){e.uniform3uiv(this.addr,t)}function If(e,t){e.uniform4uiv(this.addr,t)}function Nf(e,t,n){const i=this.cache,a=t.length,r=yn(n,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==a;++o)n.setTexture2D(t[o]||aa,r[o])}function Of(e,t,n){const i=this.cache,a=t.length,r=yn(n,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==a;++o)n.setTexture3D(t[o]||sa,r[o])}function Ff(e,t,n){const i=this.cache,a=t.length,r=yn(n,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==a;++o)n.setTextureCube(t[o]||ca,r[o])}function Bf(e,t,n){const i=this.cache,a=t.length,r=yn(n,a);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==a;++o)n.setTexture2DArray(t[o]||oa,r[o])}function Hf(e){switch(e){case 5126:return Sf;case 35664:return Mf;case 35665:return Tf;case 35666:return xf;case 35674:return Af;case 35675:return Rf;case 35676:return bf;case 5124:case 35670:return Cf;case 35667:case 35671:return wf;case 35668:case 35672:return Pf;case 35669:case 35673:return yf;case 5125:return Lf;case 36294:return Df;case 36295:return Uf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}class Gf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ef(n.type)}}class Vf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hf(n.type)}}class kf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,n[s.id],i)}}}const Wn=/(\w+)(\])?(\[|\.)?/g;function mr(e,t){e.seq.push(t),e.map[t.id]=t}function zf(e,t,n){const i=e.name,a=i.length;for(Wn.lastIndex=0;;){const r=Wn.exec(i),o=Wn.lastIndex;let s=r[1];const m=r[2]==="]",v=r[3];if(m&&(s=s|0),v===void 0||v==="["&&o+2===a){mr(n,v===void 0?new Gf(s,e,t):new Vf(s,e,t));break}else{let _=n.map[s];_===void 0&&(_=new kf(s),mr(n,_)),n=_}}}class Sn{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),o=t.getUniformLocation(n,r.name);zf(r,o,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,o=n.length;r!==o;++r){const s=n[r],m=i[s.id];m.needsUpdate!==!1&&s.setValue(t,m.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in n&&i.push(o)}return i}}function _r(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Wf=37297;let Xf=0;function Yf(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===t?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const gr=new Ve;function Kf(e){at._getMatrix(gr,at.workingColorSpace,e);const t=`mat3( ${gr.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(e)){case ta:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function vr(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Yf(e.getShaderSource(t),s)}else return r}function qf(e,t){const n=Kf(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Zf(e,t){let n;switch(t){case To:n="Linear";break;case Mo:n="Reinhard";break;case So:n="Cineon";break;case Eo:n="ACESFilmic";break;case vo:n="AgX";break;case go:n="Neutral";break;case _o:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _n=new Ae;function $f(){at.getLuminanceCoefficients(_n);const e=_n.x.toFixed(4),t=_n.y.toFixed(4),n=_n.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(on).join(`
`)}function Qf(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Jf(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),o=r.name;let s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function on(e){return e!==""}function Er(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eu=/^[ \t]*#include +<([\w\d./]+)>/gm;function oi(e){return e.replace(eu,nu)}const tu=new Map;function nu(e,t){let n=Ne[t];if(n===void 0){const i=tu.get(t);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oi(n)}const iu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mr(e){return e.replace(iu,ru)}function ru(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Tr(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function au(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===kr?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===mo?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Pt&&(t="SHADOWMAP_TYPE_VSM"),t}function ou(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case un:case en:t="ENVMAP_TYPE_CUBE";break;case Pn:t="ENVMAP_TYPE_CUBE_UV";break}return t}function su(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case en:t="ENVMAP_MODE_REFRACTION";break}return t}function cu(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case wo:t="ENVMAP_BLENDING_MIX";break;case Co:t="ENVMAP_BLENDING_ADD";break}return t}function lu(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function fu(e,t,n,i){const a=e.getContext(),r=n.defines;let o=n.vertexShader,s=n.fragmentShader;const m=au(n),v=ou(n),x=su(n),_=cu(n),M=lu(n),E=jf(n),y=Qf(r),T=a.createProgram();let f,c,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(on).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(on).join(`
`),c.length>0&&(c+=`
`)):(f=[Tr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),c=[Tr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yt?"#define TONE_MAPPING":"",n.toneMapping!==yt?Ne.tonemapping_pars_fragment:"",n.toneMapping!==yt?Zf("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,qf("linearToOutputTexel",n.outputColorSpace),$f(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(on).join(`
`)),o=oi(o),o=Er(o,n),o=Sr(o,n),s=oi(s),s=Er(s,n),s=Sr(s,n),o=Mr(o),s=Mr(s),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,f=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===Ji?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ji?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const C=L+f+o,g=L+c+s,D=_r(a,a.VERTEX_SHADER,C),R=_r(a,a.FRAGMENT_SHADER,g);a.attachShader(T,D),a.attachShader(T,R),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(b){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(T)||"",X=a.getShaderInfoLog(D)||"",Y=a.getShaderInfoLog(R)||"",W=B.trim(),k=X.trim(),ne=Y.trim();let G=!0,$=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,T,D,R);else{const Q=vr(a,D,"vertex"),pe=vr(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+Q+`
`+pe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||ne==="")&&($=!1);$&&(b.diagnostics={runnable:G,programLog:W,vertexShader:{log:k,prefix:f},fragmentShader:{log:ne,prefix:c}})}a.deleteShader(D),a.deleteShader(R),F=new Sn(a,T),p=Jf(a,T)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let p;this.getAttributes=function(){return p===void 0&&U(this),p};let d=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=a.getProgramParameter(T,Wf)),d},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xf++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=D,this.fragmentShader=R,this}let uu=0;class du{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new pu(t),n.set(t,i)),i}}class pu{constructor(t){this.id=uu++,this.code=t,this.usedTimes=0}}function hu(e,t,n,i,a,r,o){const s=new ho,m=new du,v=new Set,x=[],_=a.logarithmicDepthBuffer,M=a.vertexTextures;let E=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(p){return v.add(p),p===0?"uv":`uv${p}`}function f(p,d,b,B,X){const Y=B.fog,W=X.geometry,k=p.isMeshStandardMaterial?B.environment:null,ne=(p.isMeshStandardMaterial?n:t).get(p.envMap||k),G=ne&&ne.mapping===Pn?ne.image.height:null,$=y[p.type];p.precision!==null&&(E=a.getMaxPrecision(p.precision),E!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",E,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=Q!==void 0?Q.length:0;let ye=0;W.morphAttributes.position!==void 0&&(ye=1),W.morphAttributes.normal!==void 0&&(ye=2),W.morphAttributes.color!==void 0&&(ye=3);let Fe,Ye,ke,z;if($){const ze=Rt[$];Fe=ze.vertexShader,Ye=ze.fragmentShader}else Fe=p.vertexShader,Ye=p.fragmentShader,m.update(p),ke=m.getVertexShaderID(p),z=m.getFragmentShaderID(p);const q=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),Pe=X.isInstancedMesh===!0,Me=X.isBatchedMesh===!0,He=!!p.map,ft=!!p.matcap,S=!!ne,Je=!!p.aoMap,De=!!p.lightMap,Ce=!!p.bumpMap,me=!!p.normalMap,et=!!p.displacementMap,_e=!!p.emissiveMap,Ie=!!p.metalnessMap,lt=!!p.roughnessMap,rt=p.anisotropy>0,h=p.clearcoat>0,l=p.dispersion>0,I=p.iridescence>0,V=p.sheen>0,Z=p.transmission>0,H=rt&&!!p.anisotropyMap,Se=h&&!!p.clearcoatMap,ie=h&&!!p.clearcoatNormalMap,ge=h&&!!p.clearcoatRoughnessMap,ve=I&&!!p.iridescenceMap,ee=I&&!!p.iridescenceThicknessMap,ce=V&&!!p.sheenColorMap,be=V&&!!p.sheenRoughnessMap,Ee=!!p.specularMap,oe=!!p.specularColorMap,Ue=!!p.specularIntensityMap,A=Z&&!!p.transmissionMap,te=Z&&!!p.thicknessMap,re=!!p.gradientMap,ue=!!p.alphaMap,j=p.alphaTest>0,K=!!p.alphaHash,he=!!p.extensions;let Le=yt;p.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Le=e.toneMapping);const qe={shaderID:$,shaderType:p.type,shaderName:p.name,vertexShader:Fe,fragmentShader:Ye,defines:p.defines,customVertexShaderID:ke,customFragmentShaderID:z,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:E,batching:Me,batchingColor:Me&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:wn,alphaToCoverage:!!p.alphaToCoverage,map:He,matcap:ft,envMap:S,envMapMode:S&&ne.mapping,envMapCubeUVHeight:G,aoMap:Je,lightMap:De,bumpMap:Ce,normalMap:me,displacementMap:M&&et,emissiveMap:_e,normalMapObjectSpace:me&&p.normalMapType===lo,normalMapTangentSpace:me&&p.normalMapType===co,metalnessMap:Ie,roughnessMap:lt,anisotropy:rt,anisotropyMap:H,clearcoat:h,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:l,iridescence:I,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:V,sheenColorMap:ce,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:oe,specularIntensityMap:Ue,transmission:Z,transmissionMap:A,thicknessMap:te,gradientMap:re,opaque:p.transparent===!1&&p.blending===En&&p.alphaToCoverage===!1,alphaMap:ue,alphaTest:j,alphaHash:K,combine:p.combine,mapUv:He&&T(p.map.channel),aoMapUv:Je&&T(p.aoMap.channel),lightMapUv:De&&T(p.lightMap.channel),bumpMapUv:Ce&&T(p.bumpMap.channel),normalMapUv:me&&T(p.normalMap.channel),displacementMapUv:et&&T(p.displacementMap.channel),emissiveMapUv:_e&&T(p.emissiveMap.channel),metalnessMapUv:Ie&&T(p.metalnessMap.channel),roughnessMapUv:lt&&T(p.roughnessMap.channel),anisotropyMapUv:H&&T(p.anisotropyMap.channel),clearcoatMapUv:Se&&T(p.clearcoatMap.channel),clearcoatNormalMapUv:ie&&T(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&T(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&T(p.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&T(p.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&T(p.sheenColorMap.channel),sheenRoughnessMapUv:be&&T(p.sheenRoughnessMap.channel),specularMapUv:Ee&&T(p.specularMap.channel),specularColorMapUv:oe&&T(p.specularColorMap.channel),specularIntensityMapUv:Ue&&T(p.specularIntensityMap.channel),transmissionMapUv:A&&T(p.transmissionMap.channel),thicknessMapUv:te&&T(p.thicknessMap.channel),alphaMapUv:ue&&T(p.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||rt),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(He||ue),fog:!!Y,useFog:p.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:fe,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ye,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:He&&p.map.isVideoTexture===!0&&at.getTransfer(p.map.colorSpace)===Qe,decodeVideoTextureEmissive:_e&&p.emissiveMap.isVideoTexture===!0&&at.getTransfer(p.emissiveMap.colorSpace)===Qe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===xt,flipSided:p.side===Tt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:he&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&p.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return qe.vertexUv1s=v.has(1),qe.vertexUv2s=v.has(2),qe.vertexUv3s=v.has(3),v.clear(),qe}function c(p){const d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(const b in p.defines)d.push(b),d.push(p.defines[b]);return p.isRawShaderMaterial===!1&&(L(d,p),C(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function L(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function C(p,d){s.disableAll(),d.supportsVertexTextures&&s.enable(0),d.instancing&&s.enable(1),d.instancingColor&&s.enable(2),d.instancingMorph&&s.enable(3),d.matcap&&s.enable(4),d.envMap&&s.enable(5),d.normalMapObjectSpace&&s.enable(6),d.normalMapTangentSpace&&s.enable(7),d.clearcoat&&s.enable(8),d.iridescence&&s.enable(9),d.alphaTest&&s.enable(10),d.vertexColors&&s.enable(11),d.vertexAlphas&&s.enable(12),d.vertexUv1s&&s.enable(13),d.vertexUv2s&&s.enable(14),d.vertexUv3s&&s.enable(15),d.vertexTangents&&s.enable(16),d.anisotropy&&s.enable(17),d.alphaHash&&s.enable(18),d.batching&&s.enable(19),d.dispersion&&s.enable(20),d.batchingColor&&s.enable(21),d.gradientMap&&s.enable(22),p.push(s.mask),s.disableAll(),d.fog&&s.enable(0),d.useFog&&s.enable(1),d.flatShading&&s.enable(2),d.logarithmicDepthBuffer&&s.enable(3),d.reversedDepthBuffer&&s.enable(4),d.skinning&&s.enable(5),d.morphTargets&&s.enable(6),d.morphNormals&&s.enable(7),d.morphColors&&s.enable(8),d.premultipliedAlpha&&s.enable(9),d.shadowMapEnabled&&s.enable(10),d.doubleSided&&s.enable(11),d.flipSided&&s.enable(12),d.useDepthPacking&&s.enable(13),d.dithering&&s.enable(14),d.transmission&&s.enable(15),d.sheen&&s.enable(16),d.opaque&&s.enable(17),d.pointsUvs&&s.enable(18),d.decodeVideoTexture&&s.enable(19),d.decodeVideoTextureEmissive&&s.enable(20),d.alphaToCoverage&&s.enable(21),p.push(s.mask)}function g(p){const d=y[p.type];let b;if(d){const B=Rt[d];b=so.clone(B.uniforms)}else b=p.uniforms;return b}function D(p,d){let b;for(let B=0,X=x.length;B<X;B++){const Y=x[B];if(Y.cacheKey===d){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new fu(e,d,p,r),x.push(b)),b}function R(p){if(--p.usedTimes===0){const d=x.indexOf(p);x[d]=x[x.length-1],x.pop(),p.destroy()}}function U(p){m.remove(p)}function F(){m.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:g,acquireProgram:D,releaseProgram:R,releaseShaderCache:U,programs:x,dispose:F}}function mu(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function a(o,s,m){e.get(o)[s]=m}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function _u(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function xr(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ar(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function o(_,M,E,y,T,f){let c=e[t];return c===void 0?(c={id:_.id,object:_,geometry:M,material:E,groupOrder:y,renderOrder:_.renderOrder,z:T,group:f},e[t]=c):(c.id=_.id,c.object=_,c.geometry=M,c.material=E,c.groupOrder=y,c.renderOrder=_.renderOrder,c.z=T,c.group=f),t++,c}function s(_,M,E,y,T,f){const c=o(_,M,E,y,T,f);E.transmission>0?i.push(c):E.transparent===!0?a.push(c):n.push(c)}function m(_,M,E,y,T,f){const c=o(_,M,E,y,T,f);E.transmission>0?i.unshift(c):E.transparent===!0?a.unshift(c):n.unshift(c)}function v(_,M){n.length>1&&n.sort(_||_u),i.length>1&&i.sort(M||xr),a.length>1&&a.sort(M||xr)}function x(){for(let _=t,M=e.length;_<M;_++){const E=e[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:s,unshift:m,finish:x,sort:v}}function gu(){let e=new WeakMap;function t(i,a){const r=e.get(i);let o;return r===void 0?(o=new Ar,e.set(i,[o])):a>=r.length?(o=new Ar,r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function vu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Ae,color:new $e};break;case"SpotLight":n={position:new Ae,direction:new Ae,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Ae,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Ae,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new Ae,halfWidth:new Ae,halfHeight:new Ae};break}return e[t.id]=n,n}}}function Eu(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Su=0;function Mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tu(e){const t=new vu,n=Eu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new Ae);const a=new Ae,r=new Vt,o=new Vt;function s(v){let x=0,_=0,M=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let E=0,y=0,T=0,f=0,c=0,L=0,C=0,g=0,D=0,R=0,U=0;v.sort(Mu);for(let p=0,d=v.length;p<d;p++){const b=v[p],B=b.color,X=b.intensity,Y=b.distance,W=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)x+=B.r*X,_+=B.g*X,M+=B.b*X;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],X);U++}else if(b.isDirectionalLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ne=b.shadow,G=n.get(b);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[E]=G,i.directionalShadowMap[E]=W,i.directionalShadowMatrix[E]=b.shadow.matrix,L++}i.directional[E]=k,E++}else if(b.isSpotLight){const k=t.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(B).multiplyScalar(X),k.distance=Y,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[T]=k;const ne=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,ne.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[T]=ne.matrix,b.castShadow){const G=n.get(b);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[T]=G,i.spotShadowMap[T]=W,g++}T++}else if(b.isRectAreaLight){const k=t.get(b);k.color.copy(B).multiplyScalar(X),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=k,f++}else if(b.isPointLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const ne=b.shadow,G=n.get(b);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[y]=G,i.pointShadowMap[y]=W,i.pointShadowMatrix[y]=b.shadow.matrix,C++}i.point[y]=k,y++}else if(b.isHemisphereLight){const k=t.get(b);k.skyColor.copy(b.color).multiplyScalar(X),k.groundColor.copy(b.groundColor).multiplyScalar(X),i.hemi[c]=k,c++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=x,i.ambient[1]=_,i.ambient[2]=M;const F=i.hash;(F.directionalLength!==E||F.pointLength!==y||F.spotLength!==T||F.rectAreaLength!==f||F.hemiLength!==c||F.numDirectionalShadows!==L||F.numPointShadows!==C||F.numSpotShadows!==g||F.numSpotMaps!==D||F.numLightProbes!==U)&&(i.directional.length=E,i.spot.length=T,i.rectArea.length=f,i.point.length=y,i.hemi.length=c,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=g+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,F.directionalLength=E,F.pointLength=y,F.spotLength=T,F.rectAreaLength=f,F.hemiLength=c,F.numDirectionalShadows=L,F.numPointShadows=C,F.numSpotShadows=g,F.numSpotMaps=D,F.numLightProbes=U,i.version=Su++)}function m(v,x){let _=0,M=0,E=0,y=0,T=0;const f=x.matrixWorldInverse;for(let c=0,L=v.length;c<L;c++){const C=v[c];if(C.isDirectionalLight){const g=i.directional[_];g.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(f),_++}else if(C.isSpotLight){const g=i.spot[E];g.position.setFromMatrixPosition(C.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(f),E++}else if(C.isRectAreaLight){const g=i.rectArea[y];g.position.setFromMatrixPosition(C.matrixWorld),g.position.applyMatrix4(f),o.identity(),r.copy(C.matrixWorld),r.premultiply(f),o.extractRotation(r),g.halfWidth.set(C.width*.5,0,0),g.halfHeight.set(0,C.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),y++}else if(C.isPointLight){const g=i.point[M];g.position.setFromMatrixPosition(C.matrixWorld),g.position.applyMatrix4(f),M++}else if(C.isHemisphereLight){const g=i.hemi[T];g.direction.setFromMatrixPosition(C.matrixWorld),g.direction.transformDirection(f),T++}}}return{setup:s,setupView:m,state:i}}function Rr(e){const t=new Tu(e),n=[],i=[];function a(x){v.camera=x,n.length=0,i.length=0}function r(x){n.push(x)}function o(x){i.push(x)}function s(){t.setup(n)}function m(x){t.setupView(n,x)}const v={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:v,setupLights:s,setupLightsView:m,pushLight:r,pushShadow:o}}function xu(e){let t=new WeakMap;function n(a,r=0){const o=t.get(a);let s;return o===void 0?(s=new Rr(e),t.set(a,[s])):r>=o.length?(s=new Rr(e),o.push(s)):s=o[r],s}function i(){t=new WeakMap}return{get:n,dispose:i}}const Au=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ru=`uniform sampler2D shadow_pass;
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
}`;function bu(e,t,n){let i=new Ur;const a=new Ze,r=new Ze,o=new mt,s=new Ya({depthPacking:Ka}),m=new qa,v={},x=n.maxTextureSize,_={[cn]:Tt,[Tt]:cn,[xt]:xt},M=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Au,fragmentShader:Ru}),E=M.clone();E.defines.HORIZONTAL_PASS=1;const y=new li;y.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ct(y,M),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let c=this.type;this.render=function(R,U,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const p=e.getRenderTarget(),d=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Gt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=c!==Pt&&this.type===Pt,Y=c===Pt&&this.type!==Pt;for(let W=0,k=R.length;W<k;W++){const ne=R[W],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const $=G.getFrameExtents();if(a.multiply($),r.copy(G.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(r.x=Math.floor(x/$.x),a.x=r.x*$.x,G.mapSize.x=r.x),a.y>x&&(r.y=Math.floor(x/$.y),a.y=r.y*$.y,G.mapSize.y=r.y)),G.map===null||X===!0||Y===!0){const pe=this.type!==Pt?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Jt(a.x,a.y,pe),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();const Q=G.getViewportCount();for(let pe=0;pe<Q;pe++){const ye=G.getViewport(pe);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),B.viewport(o),G.updateMatrices(ne,pe),i=G.getFrustum(),g(U,F,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Pt&&L(G,F),G.needsUpdate=!1}c=this.type,f.needsUpdate=!1,e.setRenderTarget(p,d,b)};function L(R,U){const F=t.update(T);M.defines.VSM_SAMPLES!==R.blurSamples&&(M.defines.VSM_SAMPLES=R.blurSamples,E.defines.VSM_SAMPLES=R.blurSamples,M.needsUpdate=!0,E.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jt(a.x,a.y)),M.uniforms.shadow_pass.value=R.map.texture,M.uniforms.resolution.value=R.mapSize,M.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(U,null,F,M,T,null),E.uniforms.shadow_pass.value=R.mapPass.texture,E.uniforms.resolution.value=R.mapSize,E.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(U,null,F,E,T,null)}function C(R,U,F,p){let d=null;const b=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)d=b;else if(d=F.isPointLight===!0?m:s,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const B=d.uuid,X=U.uuid;let Y=v[B];Y===void 0&&(Y={},v[B]=Y);let W=Y[X];W===void 0&&(W=d.clone(),Y[X]=W,U.addEventListener("dispose",D)),d=W}if(d.visible=U.visible,d.wireframe=U.wireframe,p===Pt?d.side=U.shadowSide!==null?U.shadowSide:U.side:d.side=U.shadowSide!==null?U.shadowSide:_[U.side],d.alphaMap=U.alphaMap,d.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,d.map=U.map,d.clipShadows=U.clipShadows,d.clippingPlanes=U.clippingPlanes,d.clipIntersection=U.clipIntersection,d.displacementMap=U.displacementMap,d.displacementScale=U.displacementScale,d.displacementBias=U.displacementBias,d.wireframeLinewidth=U.wireframeLinewidth,d.linewidth=U.linewidth,F.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const B=e.properties.get(d);B.light=F}return d}function g(R,U,F,p,d){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&d===Pt)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const X=t.update(R),Y=R.material;if(Array.isArray(Y)){const W=X.groups;for(let k=0,ne=W.length;k<ne;k++){const G=W[k],$=Y[G.materialIndex];if($&&$.visible){const Q=C(R,$,p,d);R.onBeforeShadow(e,R,U,F,X,Q,G),e.renderBufferDirect(F,null,X,Q,R,G),R.onAfterShadow(e,R,U,F,X,Q,G)}}}else if(Y.visible){const W=C(R,Y,p,d);R.onBeforeShadow(e,R,U,F,X,W,null),e.renderBufferDirect(F,null,X,W,R,null),R.onAfterShadow(e,R,U,F,X,W,null)}}const B=R.children;for(let X=0,Y=B.length;X<Y;X++)g(B[X],U,F,p,d)}function D(R){R.target.removeEventListener("dispose",D);for(const F in v){const p=v[F],d=R.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}const Cu={[ti]:ei,[Jn]:$n,[Qn]:Zn,[Tn]:jn,[ei]:ti,[$n]:Jn,[Zn]:Qn,[jn]:Tn};function wu(e,t){function n(){let A=!1;const te=new mt;let re=null;const ue=new mt(0,0,0,0);return{setMask:function(j){re!==j&&!A&&(e.colorMask(j,j,j,j),re=j)},setLocked:function(j){A=j},setClear:function(j,K,he,Le,qe){qe===!0&&(j*=Le,K*=Le,he*=Le),te.set(j,K,he,Le),ue.equals(te)===!1&&(e.clearColor(j,K,he,Le),ue.copy(te))},reset:function(){A=!1,re=null,ue.set(-1,0,0,0)}}}function i(){let A=!1,te=!1,re=null,ue=null,j=null;return{setReversed:function(K){if(te!==K){const he=t.get("EXT_clip_control");K?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Le=j;j=null,this.setClear(Le)}},getReversed:function(){return te},setTest:function(K){K?q(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(K){re!==K&&!A&&(e.depthMask(K),re=K)},setFunc:function(K){if(te&&(K=Cu[K]),ue!==K){switch(K){case ti:e.depthFunc(e.NEVER);break;case ei:e.depthFunc(e.ALWAYS);break;case Jn:e.depthFunc(e.LESS);break;case Tn:e.depthFunc(e.LEQUAL);break;case Qn:e.depthFunc(e.EQUAL);break;case jn:e.depthFunc(e.GEQUAL);break;case $n:e.depthFunc(e.GREATER);break;case Zn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=K}},setLocked:function(K){A=K},setClear:function(K){j!==K&&(te&&(K=1-K),e.clearDepth(K),j=K)},reset:function(){A=!1,re=null,ue=null,j=null,te=!1}}}function a(){let A=!1,te=null,re=null,ue=null,j=null,K=null,he=null,Le=null,qe=null;return{setTest:function(ze){A||(ze?q(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(ze){te!==ze&&!A&&(e.stencilMask(ze),te=ze)},setFunc:function(ze,wt,At){(re!==ze||ue!==wt||j!==At)&&(e.stencilFunc(ze,wt,At),re=ze,ue=wt,j=At)},setOp:function(ze,wt,At){(K!==ze||he!==wt||Le!==At)&&(e.stencilOp(ze,wt,At),K=ze,he=wt,Le=At)},setLocked:function(ze){A=ze},setClear:function(ze){qe!==ze&&(e.clearStencil(ze),qe=ze)},reset:function(){A=!1,te=null,re=null,ue=null,j=null,K=null,he=null,Le=null,qe=null}}}const r=new n,o=new i,s=new a,m=new WeakMap,v=new WeakMap;let x={},_={},M=new WeakMap,E=[],y=null,T=!1,f=null,c=null,L=null,C=null,g=null,D=null,R=null,U=new $e(0,0,0),F=0,p=!1,d=null,b=null,B=null,X=null,Y=null;const W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=ne>=2);let $=null,Q={};const pe=e.getParameter(e.SCISSOR_BOX),ye=e.getParameter(e.VIEWPORT),Fe=new mt().fromArray(pe),Ye=new mt().fromArray(ye);function ke(A,te,re,ue){const j=new Uint8Array(4),K=e.createTexture();e.bindTexture(A,K),e.texParameteri(A,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(A,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let he=0;he<re;he++)A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,j):e.texImage2D(te+he,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,j);return K}const z={};z[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),q(e.DEPTH_TEST),o.setFunc(Tn),Ce(!1),me(Ki),q(e.CULL_FACE),Je(Gt);function q(A){x[A]!==!0&&(e.enable(A),x[A]=!0)}function fe(A){x[A]!==!1&&(e.disable(A),x[A]=!1)}function Pe(A,te){return _[A]!==te?(e.bindFramebuffer(A,te),_[A]=te,A===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=te),A===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Me(A,te){let re=E,ue=!1;if(A){re=M.get(te),re===void 0&&(re=[],M.set(te,re));const j=A.textures;if(re.length!==j.length||re[0]!==e.COLOR_ATTACHMENT0){for(let K=0,he=j.length;K<he;K++)re[K]=e.COLOR_ATTACHMENT0+K;re.length=j.length,ue=!0}}else re[0]!==e.BACK&&(re[0]=e.BACK,ue=!0);ue&&e.drawBuffers(re)}function He(A){return y!==A?(e.useProgram(A),y=A,!0):!1}const ft={[rn]:e.FUNC_ADD,[xa]:e.FUNC_SUBTRACT,[Ta]:e.FUNC_REVERSE_SUBTRACT};ft[yo]=e.MIN,ft[Lo]=e.MAX;const S={[Ba]:e.ZERO,[Fa]:e.ONE,[Oa]:e.SRC_COLOR,[Na]:e.SRC_ALPHA,[Ia]:e.SRC_ALPHA_SATURATE,[Ua]:e.DST_COLOR,[Da]:e.DST_ALPHA,[La]:e.ONE_MINUS_SRC_COLOR,[ya]:e.ONE_MINUS_SRC_ALPHA,[Pa]:e.ONE_MINUS_DST_COLOR,[wa]:e.ONE_MINUS_DST_ALPHA,[Ca]:e.CONSTANT_COLOR,[ba]:e.ONE_MINUS_CONSTANT_COLOR,[Ra]:e.CONSTANT_ALPHA,[Aa]:e.ONE_MINUS_CONSTANT_ALPHA};function Je(A,te,re,ue,j,K,he,Le,qe,ze){if(A===Gt){T===!0&&(fe(e.BLEND),T=!1);return}if(T===!1&&(q(e.BLEND),T=!0),A!==ao){if(A!==f||ze!==p){if((c!==rn||g!==rn)&&(e.blendEquation(e.FUNC_ADD),c=rn,g=rn),ze)switch(A){case En:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $i:e.blendFunc(e.ONE,e.ONE);break;case Zi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case qi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case En:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $i:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Zi:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qi:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}L=null,C=null,D=null,R=null,U.set(0,0,0),F=0,f=A,p=ze}return}j=j||te,K=K||re,he=he||ue,(te!==c||j!==g)&&(e.blendEquationSeparate(ft[te],ft[j]),c=te,g=j),(re!==L||ue!==C||K!==D||he!==R)&&(e.blendFuncSeparate(S[re],S[ue],S[K],S[he]),L=re,C=ue,D=K,R=he),(Le.equals(U)===!1||qe!==F)&&(e.blendColor(Le.r,Le.g,Le.b,qe),U.copy(Le),F=qe),f=A,p=!1}function De(A,te){A.side===xt?fe(e.CULL_FACE):q(e.CULL_FACE);let re=A.side===Tt;te&&(re=!re),Ce(re),A.blending===En&&A.transparent===!1?Je(Gt):Je(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);const ue=A.stencilWrite;s.setTest(ue),ue&&(s.setMask(A.stencilWriteMask),s.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),s.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),_e(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(A){d!==A&&(A?e.frontFace(e.CW):e.frontFace(e.CCW),d=A)}function me(A){A!==io?(q(e.CULL_FACE),A!==b&&(A===Ki?e.cullFace(e.BACK):A===ro?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):fe(e.CULL_FACE),b=A}function et(A){A!==B&&(k&&e.lineWidth(A),B=A)}function _e(A,te,re){A?(q(e.POLYGON_OFFSET_FILL),(X!==te||Y!==re)&&(e.polygonOffset(te,re),X=te,Y=re)):fe(e.POLYGON_OFFSET_FILL)}function Ie(A){A?q(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function lt(A){A===void 0&&(A=e.TEXTURE0+W-1),$!==A&&(e.activeTexture(A),$=A)}function rt(A,te,re){re===void 0&&($===null?re=e.TEXTURE0+W-1:re=$);let ue=Q[re];ue===void 0&&(ue={type:void 0,texture:void 0},Q[re]=ue),(ue.type!==A||ue.texture!==te)&&($!==re&&(e.activeTexture(re),$=re),e.bindTexture(A,te||z[A]),ue.type=A,ue.texture=te)}function h(){const A=Q[$];A!==void 0&&A.type!==void 0&&(e.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function l(){try{e.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{e.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{e.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{e.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{e.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{e.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{e.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{e.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(A){Fe.equals(A)===!1&&(e.scissor(A.x,A.y,A.z,A.w),Fe.copy(A))}function be(A){Ye.equals(A)===!1&&(e.viewport(A.x,A.y,A.z,A.w),Ye.copy(A))}function Ee(A,te){let re=v.get(te);re===void 0&&(re=new WeakMap,v.set(te,re));let ue=re.get(A);ue===void 0&&(ue=e.getUniformBlockIndex(te,A.name),re.set(A,ue))}function oe(A,te){const ue=v.get(te).get(A);m.get(te)!==ue&&(e.uniformBlockBinding(te,ue,A.__bindingPointIndex),m.set(te,ue))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),x={},$=null,Q={},_={},M=new WeakMap,E=[],y=null,T=!1,f=null,c=null,L=null,C=null,g=null,D=null,R=null,U=new $e(0,0,0),F=0,p=!1,d=null,b=null,B=null,X=null,Y=null,Fe.set(0,0,e.canvas.width,e.canvas.height),Ye.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:q,disable:fe,bindFramebuffer:Pe,drawBuffers:Me,useProgram:He,setBlending:Je,setMaterial:De,setFlipSided:Ce,setCullFace:me,setLineWidth:et,setPolygonOffset:_e,setScissorTest:Ie,activeTexture:lt,bindTexture:rt,unbindTexture:h,compressedTexImage2D:l,compressedTexImage3D:I,texImage2D:ve,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:ge,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:ce,viewport:be,reset:Ue}}function Pu(e,t,n,i,a,r,o){const s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Ze,x=new WeakMap;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(h,l){return E?new OffscreenCanvas(h,l):bo("canvas")}function T(h,l,I){let V=1;const Z=rt(h);if((Z.width>I||Z.height>I)&&(V=I/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){const H=Math.floor(V*Z.width),Se=Math.floor(V*Z.height);_===void 0&&(_=y(H,Se));const ie=l?y(H,Se):_;return ie.width=H,ie.height=Se,ie.getContext("2d").drawImage(h,0,0,H,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+Se+")."),ie}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),h;return h}function f(h){return h.generateMipmaps}function c(h){e.generateMipmap(h)}function L(h){return h.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?e.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(h,l,I,V,Z=!1){if(h!==null){if(e[h]!==void 0)return e[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let H=l;if(l===e.RED&&(I===e.FLOAT&&(H=e.R32F),I===e.HALF_FLOAT&&(H=e.R16F),I===e.UNSIGNED_BYTE&&(H=e.R8)),l===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(H=e.R8UI),I===e.UNSIGNED_SHORT&&(H=e.R16UI),I===e.UNSIGNED_INT&&(H=e.R32UI),I===e.BYTE&&(H=e.R8I),I===e.SHORT&&(H=e.R16I),I===e.INT&&(H=e.R32I)),l===e.RG&&(I===e.FLOAT&&(H=e.RG32F),I===e.HALF_FLOAT&&(H=e.RG16F),I===e.UNSIGNED_BYTE&&(H=e.RG8)),l===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(H=e.RG8UI),I===e.UNSIGNED_SHORT&&(H=e.RG16UI),I===e.UNSIGNED_INT&&(H=e.RG32UI),I===e.BYTE&&(H=e.RG8I),I===e.SHORT&&(H=e.RG16I),I===e.INT&&(H=e.RG32I)),l===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(H=e.RGB8UI),I===e.UNSIGNED_SHORT&&(H=e.RGB16UI),I===e.UNSIGNED_INT&&(H=e.RGB32UI),I===e.BYTE&&(H=e.RGB8I),I===e.SHORT&&(H=e.RGB16I),I===e.INT&&(H=e.RGB32I)),l===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),I===e.UNSIGNED_INT&&(H=e.RGBA32UI),I===e.BYTE&&(H=e.RGBA8I),I===e.SHORT&&(H=e.RGBA16I),I===e.INT&&(H=e.RGBA32I)),l===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),l===e.RGBA){const Se=Z?ta:at.getTransfer(V);I===e.FLOAT&&(H=e.RGBA32F),I===e.HALF_FLOAT&&(H=e.RGBA16F),I===e.UNSIGNED_BYTE&&(H=Se===Qe?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function g(h,l){let I;return h?l===null||l===fn||l===ln?I=e.DEPTH24_STENCIL8:l===Ht?I=e.DEPTH32F_STENCIL8:l===xn&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===fn||l===ln?I=e.DEPTH_COMPONENT24:l===Ht?I=e.DEPTH_COMPONENT32F:l===xn&&(I=e.DEPTH_COMPONENT16),I}function D(h,l){return f(h)===!0||h.isFramebufferTexture&&h.minFilter!==jt&&h.minFilter!==Bt?Math.log2(Math.max(l.width,l.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?l.mipmaps.length:1}function R(h){const l=h.target;l.removeEventListener("dispose",R),F(l),l.isVideoTexture&&x.delete(l)}function U(h){const l=h.target;l.removeEventListener("dispose",U),d(l)}function F(h){const l=i.get(h);if(l.__webglInit===void 0)return;const I=h.source,V=M.get(I);if(V){const Z=V[l.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&p(h),Object.keys(V).length===0&&M.delete(I)}i.remove(h)}function p(h){const l=i.get(h);e.deleteTexture(l.__webglTexture);const I=h.source,V=M.get(I);delete V[l.__cacheKey],o.memory.textures--}function d(h){const l=i.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),i.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(l.__webglFramebuffer[V]))for(let Z=0;Z<l.__webglFramebuffer[V].length;Z++)e.deleteFramebuffer(l.__webglFramebuffer[V][Z]);else e.deleteFramebuffer(l.__webglFramebuffer[V]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[V])}else{if(Array.isArray(l.__webglFramebuffer))for(let V=0;V<l.__webglFramebuffer.length;V++)e.deleteFramebuffer(l.__webglFramebuffer[V]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let V=0;V<l.__webglColorRenderbuffer.length;V++)l.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[V]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const I=h.textures;for(let V=0,Z=I.length;V<Z;V++){const H=i.get(I[V]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(I[V])}i.remove(h)}let b=0;function B(){b=0}function X(){const h=b;return h>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+a.maxTextures),b+=1,h}function Y(h){const l=[];return l.push(h.wrapS),l.push(h.wrapT),l.push(h.wrapR||0),l.push(h.magFilter),l.push(h.minFilter),l.push(h.anisotropy),l.push(h.internalFormat),l.push(h.format),l.push(h.type),l.push(h.generateMipmaps),l.push(h.premultiplyAlpha),l.push(h.flipY),l.push(h.unpackAlignment),l.push(h.colorSpace),l.join()}function W(h,l){const I=i.get(h);if(h.isVideoTexture&&Ie(h),h.isRenderTargetTexture===!1&&h.isExternalTexture!==!0&&h.version>0&&I.__version!==h.version){const V=h.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(I,h,l);return}}else h.isExternalTexture&&(I.__webglTexture=h.sourceTexture?h.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+l)}function k(h,l){const I=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&I.__version!==h.version){z(I,h,l);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+l)}function ne(h,l){const I=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&I.__version!==h.version){z(I,h,l);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+l)}function G(h,l){const I=i.get(h);if(h.version>0&&I.__version!==h.version){q(I,h,l);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+l)}const $={[Br]:e.REPEAT,[Fr]:e.CLAMP_TO_EDGE,[Or]:e.MIRRORED_REPEAT},Q={[jt]:e.NEAREST,[Hr]:e.NEAREST_MIPMAP_NEAREST,[an]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[vn]:e.LINEAR_MIPMAP_NEAREST,[Kt]:e.LINEAR_MIPMAP_LINEAR},pe={[Xa]:e.NEVER,[Wa]:e.ALWAYS,[za]:e.LESS,[Gr]:e.LEQUAL,[ka]:e.EQUAL,[Va]:e.GEQUAL,[Ga]:e.GREATER,[Ha]:e.NOTEQUAL};function ye(h,l){if(l.type===Ht&&t.has("OES_texture_float_linear")===!1&&(l.magFilter===Bt||l.magFilter===vn||l.magFilter===an||l.magFilter===Kt||l.minFilter===Bt||l.minFilter===vn||l.minFilter===an||l.minFilter===Kt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(h,e.TEXTURE_WRAP_S,$[l.wrapS]),e.texParameteri(h,e.TEXTURE_WRAP_T,$[l.wrapT]),(h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY)&&e.texParameteri(h,e.TEXTURE_WRAP_R,$[l.wrapR]),e.texParameteri(h,e.TEXTURE_MAG_FILTER,Q[l.magFilter]),e.texParameteri(h,e.TEXTURE_MIN_FILTER,Q[l.minFilter]),l.compareFunction&&(e.texParameteri(h,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(h,e.TEXTURE_COMPARE_FUNC,pe[l.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===jt||l.minFilter!==an&&l.minFilter!==Kt||l.type===Ht&&t.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(h,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,a.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function Fe(h,l){let I=!1;h.__webglInit===void 0&&(h.__webglInit=!0,l.addEventListener("dispose",R));const V=l.source;let Z=M.get(V);Z===void 0&&(Z={},M.set(V,Z));const H=Y(l);if(H!==h.__cacheKey){Z[H]===void 0&&(Z[H]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Z[H].usedTimes++;const Se=Z[h.__cacheKey];Se!==void 0&&(Z[h.__cacheKey].usedTimes--,Se.usedTimes===0&&p(l)),h.__cacheKey=H,h.__webglTexture=Z[H].texture}return I}function Ye(h,l,I){return Math.floor(Math.floor(h/I)/l)}function ke(h,l,I,V){const H=h.updateRanges;if(H.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,l.width,l.height,I,V,l.data);else{H.sort((ee,ce)=>ee.start-ce.start);let Se=0;for(let ee=1;ee<H.length;ee++){const ce=H[Se],be=H[ee],Ee=ce.start+ce.count,oe=Ye(be.start,l.width,4),Ue=Ye(ce.start,l.width,4);be.start<=Ee+1&&oe===Ue&&Ye(be.start+be.count-1,l.width,4)===oe?ce.count=Math.max(ce.count,be.start+be.count-ce.start):(++Se,H[Se]=be)}H.length=Se+1;const ie=e.getParameter(e.UNPACK_ROW_LENGTH),ge=e.getParameter(e.UNPACK_SKIP_PIXELS),ve=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,l.width);for(let ee=0,ce=H.length;ee<ce;ee++){const be=H[ee],Ee=Math.floor(be.start/4),oe=Math.ceil(be.count/4),Ue=Ee%l.width,A=Math.floor(Ee/l.width),te=oe,re=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,A),n.texSubImage2D(e.TEXTURE_2D,0,Ue,A,te,re,I,V,l.data)}h.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ie),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function z(h,l,I){let V=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(V=e.TEXTURE_3D);const Z=Fe(h,l),H=l.source;n.bindTexture(V,h.__webglTexture,e.TEXTURE0+I);const Se=i.get(H);if(H.version!==Se.__version||Z===!0){n.activeTexture(e.TEXTURE0+I);const ie=at.getPrimaries(at.workingColorSpace),ge=l.colorSpace===Ot?null:at.getPrimaries(l.colorSpace),ve=l.colorSpace===Ot||ie===ge?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=T(l.image,!1,a.maxTextureSize);ee=lt(l,ee);const ce=r.convert(l.format,l.colorSpace),be=r.convert(l.type);let Ee=C(l.internalFormat,ce,be,l.colorSpace,l.isVideoTexture);ye(V,l);let oe;const Ue=l.mipmaps,A=l.isVideoTexture!==!0,te=Se.__version===void 0||Z===!0,re=H.dataReady,ue=D(l,ee);if(l.isDepthTexture)Ee=g(l.format===Mn,l.type),te&&(A?n.texStorage2D(e.TEXTURE_2D,1,Ee,ee.width,ee.height):n.texImage2D(e.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ce,be,null));else if(l.isDataTexture)if(Ue.length>0){A&&te&&n.texStorage2D(e.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let j=0,K=Ue.length;j<K;j++)oe=Ue[j],A?re&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,be,oe.data):n.texImage2D(e.TEXTURE_2D,j,Ee,oe.width,oe.height,0,ce,be,oe.data);l.generateMipmaps=!1}else A?(te&&n.texStorage2D(e.TEXTURE_2D,ue,Ee,ee.width,ee.height),re&&ke(l,ee,ce,be)):n.texImage2D(e.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ce,be,ee.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){A&&te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Ee,Ue[0].width,Ue[0].height,ee.depth);for(let j=0,K=Ue.length;j<K;j++)if(oe=Ue[j],l.format!==bt)if(ce!==null)if(A){if(re)if(l.layerUpdates.size>0){const he=Qi(oe.width,oe.height,l.format,l.type);for(const Le of l.layerUpdates){const qe=oe.data.subarray(Le*he/oe.data.BYTES_PER_ELEMENT,(Le+1)*he/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,Le,oe.width,oe.height,1,ce,qe)}l.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Ee,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?re&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,ce,be,oe.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,Ee,oe.width,oe.height,ee.depth,0,ce,be,oe.data)}else{A&&te&&n.texStorage2D(e.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let j=0,K=Ue.length;j<K;j++)oe=Ue[j],l.format!==bt?ce!==null?A?re&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,oe.data):n.compressedTexImage2D(e.TEXTURE_2D,j,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?re&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,oe.width,oe.height,ce,be,oe.data):n.texImage2D(e.TEXTURE_2D,j,Ee,oe.width,oe.height,0,ce,be,oe.data)}else if(l.isDataArrayTexture)if(A){if(te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ue,Ee,ee.width,ee.height,ee.depth),re)if(l.layerUpdates.size>0){const j=Qi(ee.width,ee.height,l.format,l.type);for(const K of l.layerUpdates){const he=ee.data.subarray(K*j/ee.data.BYTES_PER_ELEMENT,(K+1)*j/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,be,he)}l.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,be,ee.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,ce,be,ee.data);else if(l.isData3DTexture)A?(te&&n.texStorage3D(e.TEXTURE_3D,ue,Ee,ee.width,ee.height,ee.depth),re&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,be,ee.data)):n.texImage3D(e.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,ce,be,ee.data);else if(l.isFramebufferTexture){if(te)if(A)n.texStorage2D(e.TEXTURE_2D,ue,Ee,ee.width,ee.height);else{let j=ee.width,K=ee.height;for(let he=0;he<ue;he++)n.texImage2D(e.TEXTURE_2D,he,Ee,j,K,0,ce,be,null),j>>=1,K>>=1}}else if(Ue.length>0){if(A&&te){const j=rt(Ue[0]);n.texStorage2D(e.TEXTURE_2D,ue,Ee,j.width,j.height)}for(let j=0,K=Ue.length;j<K;j++)oe=Ue[j],A?re&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ce,be,oe):n.texImage2D(e.TEXTURE_2D,j,Ee,ce,be,oe);l.generateMipmaps=!1}else if(A){if(te){const j=rt(ee);n.texStorage2D(e.TEXTURE_2D,ue,Ee,j.width,j.height)}re&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,be,ee)}else n.texImage2D(e.TEXTURE_2D,0,Ee,ce,be,ee);f(l)&&c(V),Se.__version=H.version,l.onUpdate&&l.onUpdate(l)}h.__version=l.version}function q(h,l,I){if(l.image.length!==6)return;const V=Fe(h,l),Z=l.source;n.bindTexture(e.TEXTURE_CUBE_MAP,h.__webglTexture,e.TEXTURE0+I);const H=i.get(Z);if(Z.version!==H.__version||V===!0){n.activeTexture(e.TEXTURE0+I);const Se=at.getPrimaries(at.workingColorSpace),ie=l.colorSpace===Ot?null:at.getPrimaries(l.colorSpace),ge=l.colorSpace===Ot||Se===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=l.isCompressedTexture||l.image[0].isCompressedTexture,ee=l.image[0]&&l.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!ve&&!ee?ce[K]=T(l.image[K],!0,a.maxCubemapSize):ce[K]=ee?l.image[K].image:l.image[K],ce[K]=lt(l,ce[K]);const be=ce[0],Ee=r.convert(l.format,l.colorSpace),oe=r.convert(l.type),Ue=C(l.internalFormat,Ee,oe,l.colorSpace),A=l.isVideoTexture!==!0,te=H.__version===void 0||V===!0,re=Z.dataReady;let ue=D(l,be);ye(e.TEXTURE_CUBE_MAP,l);let j;if(ve){A&&te&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ue,be.width,be.height);for(let K=0;K<6;K++){j=ce[K].mipmaps;for(let he=0;he<j.length;he++){const Le=j[he];l.format!==bt?Ee!==null?A?re&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Le.width,Le.height,Ee,Le.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Le.width,Le.height,Ee,oe,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ue,Le.width,Le.height,0,Ee,oe,Le.data)}}}else{if(j=l.mipmaps,A&&te){j.length>0&&ue++;const K=rt(ce[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ue,K.width,K.height)}for(let K=0;K<6;K++)if(ee){A?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Ee,oe,ce[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,ce[K].width,ce[K].height,0,Ee,oe,ce[K].data);for(let he=0;he<j.length;he++){const qe=j[he].image[K].image;A?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,qe.width,qe.height,Ee,oe,qe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ue,qe.width,qe.height,0,Ee,oe,qe.data)}}else{A?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,oe,ce[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,Ee,oe,ce[K]);for(let he=0;he<j.length;he++){const Le=j[he];A?re&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Ee,oe,Le.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ue,Ee,oe,Le.image[K])}}}f(l)&&c(e.TEXTURE_CUBE_MAP),H.__version=Z.version,l.onUpdate&&l.onUpdate(l)}h.__version=l.version}function fe(h,l,I,V,Z,H){const Se=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),ge=C(I.internalFormat,Se,ie,I.colorSpace),ve=i.get(l),ee=i.get(I);if(ee.__renderTarget=l,!ve.__hasExternalTextures){const ce=Math.max(1,l.width>>H),be=Math.max(1,l.height>>H);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,H,ge,ce,be,l.depth,0,Se,ie,null):n.texImage2D(Z,H,ge,ce,be,0,Se,ie,null)}n.bindFramebuffer(e.FRAMEBUFFER,h),_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,Z,ee.__webglTexture,0,et(l)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,Z,ee.__webglTexture,H),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(h,l,I){if(e.bindRenderbuffer(e.RENDERBUFFER,h),l.depthBuffer){const V=l.depthTexture,Z=V&&V.isDepthTexture?V.type:null,H=g(l.stencilBuffer,Z),Se=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=et(l);_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie,H,l.width,l.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,H,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,H,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,h)}else{const V=l.textures;for(let Z=0;Z<V.length;Z++){const H=V[Z],Se=r.convert(H.format,H.colorSpace),ie=r.convert(H.type),ge=C(H.internalFormat,Se,ie,H.colorSpace),ve=et(l);I&&_e(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,ge,l.width,l.height):_e(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve,ge,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,ge,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(h,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,h),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(l.depthTexture);V.__renderTarget=l,(!V.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),W(l.depthTexture,0);const Z=V.__webglTexture,H=et(l);if(l.depthTexture.format===ci)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(l.depthTexture.format===Mn)_e(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function He(h){const l=i.get(h),I=h.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==h.depthTexture){const V=h.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),V){const Z=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),l.__depthDisposeCallback=Z}l.__boundDepthTexture=V}if(h.depthTexture&&!l.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=h.texture.mipmaps;V&&V.length>0?Me(l.__webglFramebuffer[0],h):Me(l.__webglFramebuffer,h)}else if(I){l.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[V]),l.__webglDepthbuffer[V]===void 0)l.__webglDepthbuffer[V]=e.createRenderbuffer(),Pe(l.__webglDepthbuffer[V],h,!1);else{const Z=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=l.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,H)}}else{const V=h.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),Pe(l.__webglDepthbuffer,h,!1);else{const Z=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,H)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(h,l,I){const V=i.get(h);l!==void 0&&fe(V.__webglFramebuffer,h,h.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&He(h)}function S(h){const l=h.texture,I=i.get(h),V=i.get(l);h.addEventListener("dispose",U);const Z=h.textures,H=h.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=l.version,o.memory.textures++),H){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(l.mipmaps&&l.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let ge=0;ge<l.mipmaps.length;ge++)I.__webglFramebuffer[ie][ge]=e.createFramebuffer()}else I.__webglFramebuffer[ie]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<l.mipmaps.length;ie++)I.__webglFramebuffer[ie]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Se)for(let ie=0,ge=Z.length;ie<ge;ie++){const ve=i.get(Z[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),o.memory.textures++)}if(h.samples>0&&_e(h)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const ge=Z[ie];I.__webglColorRenderbuffer[ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const ve=r.convert(ge.format,ge.colorSpace),ee=r.convert(ge.type),ce=C(ge.internalFormat,ve,ee,ge.colorSpace,h.isXRRenderTarget===!0),be=et(h);e.renderbufferStorageMultisample(e.RENDERBUFFER,be,ce,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),h.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,h,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),ye(e.TEXTURE_CUBE_MAP,l);for(let ie=0;ie<6;ie++)if(l.mipmaps&&l.mipmaps.length>0)for(let ge=0;ge<l.mipmaps.length;ge++)fe(I.__webglFramebuffer[ie][ge],h,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge);else fe(I.__webglFramebuffer[ie],h,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);f(l)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ie=0,ge=Z.length;ie<ge;ie++){const ve=Z[ie],ee=i.get(ve);let ce=e.TEXTURE_2D;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(ce=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ce,ee.__webglTexture),ye(ce,ve),fe(I.__webglFramebuffer,h,ve,e.COLOR_ATTACHMENT0+ie,ce,0),f(ve)&&c(ce)}n.unbindTexture()}else{let ie=e.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(ie=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ie,V.__webglTexture),ye(ie,l),l.mipmaps&&l.mipmaps.length>0)for(let ge=0;ge<l.mipmaps.length;ge++)fe(I.__webglFramebuffer[ge],h,l,e.COLOR_ATTACHMENT0,ie,ge);else fe(I.__webglFramebuffer,h,l,e.COLOR_ATTACHMENT0,ie,0);f(l)&&c(ie),n.unbindTexture()}h.depthBuffer&&He(h)}function Je(h){const l=h.textures;for(let I=0,V=l.length;I<V;I++){const Z=l[I];if(f(Z)){const H=L(h),Se=i.get(Z).__webglTexture;n.bindTexture(H,Se),c(H),n.unbindTexture()}}}const De=[],Ce=[];function me(h){if(h.samples>0){if(_e(h)===!1){const l=h.textures,I=h.width,V=h.height;let Z=e.COLOR_BUFFER_BIT;const H=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=i.get(h),ie=l.length>1;if(ie)for(let ve=0;ve<l.length;ve++)n.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ge=h.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<l.length;ve++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),ie){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=i.get(l[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ee,0)}e.blitFramebuffer(0,0,I,V,0,0,I,V,Z,e.NEAREST),m===!0&&(De.length=0,Ce.length=0,De.push(e.COLOR_ATTACHMENT0+ve),h.depthBuffer&&h.resolveDepthBuffer===!1&&(De.push(H),Ce.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<l.length;ve++){n.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=i.get(l[ve]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,ee,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&m){const l=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function et(h){return Math.min(a.maxSamples,h.samples)}function _e(h){const l=i.get(h);return h.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function Ie(h){const l=o.render.frame;x.get(h)!==l&&(x.set(h,l),h.update())}function lt(h,l){const I=h.colorSpace,V=h.format,Z=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||I!==wn&&I!==Ot&&(at.getTransfer(I)===Qe?(V!==bt||Z!==kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),l}function rt(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(v.width=h.naturalWidth||h.width,v.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(v.width=h.displayWidth,v.height=h.displayHeight):(v.width=h.width,v.height=h.height),v}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=ft,this.setupRenderTarget=S,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function yu(e,t){function n(i,a=Ot){let r;const o=at.getTransfer(a);if(i===kt)return e.UNSIGNED_BYTE;if(i===zr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Wr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Za)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$a)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ja)return e.BYTE;if(i===Qa)return e.SHORT;if(i===xn)return e.UNSIGNED_SHORT;if(i===Kr)return e.INT;if(i===fn)return e.UNSIGNED_INT;if(i===Ht)return e.FLOAT;if(i===Cn)return e.HALF_FLOAT;if(i===Ja)return e.ALPHA;if(i===eo)return e.RGB;if(i===bt)return e.RGBA;if(i===ci)return e.DEPTH_COMPONENT;if(i===Mn)return e.DEPTH_STENCIL;if(i===to)return e.RED;if(i===qr)return e.RED_INTEGER;if(i===no)return e.RG;if(i===Zr)return e.RG_INTEGER;if(i===$r)return e.RGBA_INTEGER;if(i===In||i===Nn||i===On||i===Fn)if(o===Qe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===In)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===In)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ei||i===Si||i===Mi||i===Ti)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ei)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Si)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ti)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xi||i===Ai||i===Ri)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xi||i===Ai)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ri)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bi||i===Ci||i===wi||i===Pi||i===yi||i===Li||i===Di||i===Ui||i===Ii||i===Ni||i===Oi||i===Fi||i===Bi||i===Hi)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ci)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Li)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Di)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ui)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ii)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ni)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hi)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gi||i===Vi||i===ki)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Gi)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ki)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zi||i===Wi||i===Xi||i===Yi)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zi)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wi)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yi)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ln?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Lu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Du=`
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

}`;class Uu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Xr(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new zt({vertexShader:Lu,fragmentShader:Du,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ct(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iu extends Ea{constructor(t,n){super();const i=this;let a=null,r=1,o=null,s="local-floor",m=1,v=null,x=null,_=null,M=null,E=null,y=null;const T=typeof XRWebGLBinding<"u",f=new Uu,c={},L=n.getContextAttributes();let C=null,g=null;const D=[],R=[],U=new Ze;let F=null;const p=new $t;p.viewport=new mt;const d=new $t;d.viewport=new mt;const b=[p,d],B=new Sa;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=D[z];return q===void 0&&(q=new Un,D[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=D[z];return q===void 0&&(q=new Un,D[z]=q),q.getGripSpace()},this.getHand=function(z){let q=D[z];return q===void 0&&(q=new Un,D[z]=q),q.getHandSpace()};function W(z){const q=R.indexOf(z.inputSource);if(q===-1)return;const fe=D[q];fe!==void 0&&(fe.update(z.inputSource,z.frame,v||o),fe.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",ne);for(let z=0;z<D.length;z++){const q=R[z];q!==null&&(R[z]=null,D[z].disconnect(q))}X=null,Y=null,f.reset();for(const z in c)delete c[z];t.setRenderTarget(C),E=null,M=null,_=null,a=null,g=null,ke.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||o},this.setReferenceSpace=function(z){v=z},this.getBaseLayer=function(){return M!==null?M:E},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(C=t.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",k),a.addEventListener("inputsourceschange",ne),L.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,Me=null;L.depth&&(Me=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=L.stencil?Mn:ci,Pe=L.stencil?ln:fn);const He={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:r};_=this.getBinding(),M=_.createProjectionLayer(He),a.updateRenderState({layers:[M]}),t.setPixelRatio(1),t.setSize(M.textureWidth,M.textureHeight,!1),g=new Jt(M.textureWidth,M.textureHeight,{format:bt,type:kt,depthTexture:new Nr(M.textureWidth,M.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const fe={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};E=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),g=new Jt(E.framebufferWidth,E.framebufferHeight,{format:bt,type:kt,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(m),v=null,o=await a.requestReferenceSpace(s),ke.setContext(a),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(z){for(let q=0;q<z.removed.length;q++){const fe=z.removed[q],Pe=R.indexOf(fe);Pe>=0&&(R[Pe]=null,D[Pe].disconnect(fe))}for(let q=0;q<z.added.length;q++){const fe=z.added[q];let Pe=R.indexOf(fe);if(Pe===-1){for(let He=0;He<D.length;He++)if(He>=R.length){R.push(fe),Pe=He;break}else if(R[He]===null){R[He]=fe,Pe=He;break}if(Pe===-1)break}const Me=D[Pe];Me&&Me.connect(fe)}}const G=new Ae,$=new Ae;function Q(z,q,fe){G.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const Pe=G.distanceTo($),Me=q.projectionMatrix.elements,He=fe.projectionMatrix.elements,ft=Me[14]/(Me[10]-1),S=Me[14]/(Me[10]+1),Je=(Me[9]+1)/Me[5],De=(Me[9]-1)/Me[5],Ce=(Me[8]-1)/Me[0],me=(He[8]+1)/He[0],et=ft*Ce,_e=ft*me,Ie=Pe/(-Ce+me),lt=Ie*-Ce;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(lt),z.translateZ(Ie),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Me[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const rt=ft+Ie,h=S+Ie,l=et-lt,I=_e+(Pe-lt),V=Je*S/h*rt,Z=De*S/h*rt;z.projectionMatrix.makePerspective(l,I,V,Z,rt,h),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function pe(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let q=z.near,fe=z.far;f.texture!==null&&(f.depthNear>0&&(q=f.depthNear),f.depthFar>0&&(fe=f.depthFar)),B.near=d.near=p.near=q,B.far=d.far=p.far=fe,(X!==B.near||Y!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,Y=B.far),B.layers.mask=z.layers.mask|6,p.layers.mask=B.layers.mask&3,d.layers.mask=B.layers.mask&5;const Pe=z.parent,Me=B.cameras;pe(B,Pe);for(let He=0;He<Me.length;He++)pe(Me[He],Pe);Me.length===2?Q(B,p,d):B.projectionMatrix.copy(p.projectionMatrix),ye(z,B,Pe)};function ye(z,q,fe){fe===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(fe.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ma*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(M===null&&E===null))return m},this.setFoveation=function(z){m=z,M!==null&&(M.fixedFoveation=z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(z){return c[z]};let Fe=null;function Ye(z,q){if(x=q.getViewerPose(v||o),y=q,x!==null){const fe=x.views;E!==null&&(t.setRenderTargetFramebuffer(g,E.framebuffer),t.setRenderTarget(g));let Pe=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let S=0;S<fe.length;S++){const Je=fe[S];let De=null;if(E!==null)De=E.getViewport(Je);else{const me=_.getViewSubImage(M,Je);De=me.viewport,S===0&&(t.setRenderTargetTextures(g,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(g))}let Ce=b[S];Ce===void 0&&(Ce=new $t,Ce.layers.enable(S),Ce.viewport=new mt,b[S]=Ce),Ce.matrix.fromArray(Je.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Je.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),S===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(Ce)}const Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&T){_=i.getBinding();const S=_.getDepthInformation(fe[0]);S&&S.isValid&&S.texture&&f.init(S,a.renderState)}if(Me&&Me.includes("camera-access")&&T){t.state.unbindTexture(),_=i.getBinding();for(let S=0;S<fe.length;S++){const Je=fe[S].camera;if(Je){let De=c[Je];De||(De=new Xr,c[Je]=De);const Ce=_.getCameraImage(Je);De.sourceTexture=Ce}}}}for(let fe=0;fe<D.length;fe++){const Pe=R[fe],Me=D[fe];Pe!==null&&Me!==void 0&&Me.update(Pe,q,v||o)}Fe&&Fe(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),y=null}const ke=new ra;ke.setAnimationLoop(Ye),this.setAnimationLoop=function(z){Fe=z},this.dispose=function(){}}}const It=new ea,Nu=new Vt;function Ou(e,t){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Qr(e)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function a(f,c,L,C,g){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(f,c):c.isMeshToonMaterial?(r(f,c),_(f,c)):c.isMeshPhongMaterial?(r(f,c),x(f,c)):c.isMeshStandardMaterial?(r(f,c),M(f,c),c.isMeshPhysicalMaterial&&E(f,c,g)):c.isMeshMatcapMaterial?(r(f,c),y(f,c)):c.isMeshDepthMaterial?r(f,c):c.isMeshDistanceMaterial?(r(f,c),T(f,c)):c.isMeshNormalMaterial?r(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?m(f,c,L,C):c.isSpriteMaterial?v(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Tt&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Tt&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const L=t.get(c),C=L.envMap,g=L.envMapRotation;C&&(f.envMap.value=C,It.copy(g),It.x*=-1,It.y*=-1,It.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),f.envMapRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(It)),f.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function m(f,c,L,C){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*L,f.scale.value=C*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function v(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function x(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function _(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function M(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function E(f,c,L){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Tt&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=L.texture,f.transmissionSamplerSize.value.set(L.width,L.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,c){c.matcap&&(f.matcap.value=c.matcap)}function T(f,c){const L=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(L.matrixWorld),f.nearDistance.value=L.shadow.camera.near,f.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Fu(e,t,n,i){let a={},r={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,C){const g=C.program;i.uniformBlockBinding(L,g)}function v(L,C){let g=a[L.id];g===void 0&&(y(L),g=x(L),a[L.id]=g,L.addEventListener("dispose",f));const D=C.program;i.updateUBOMapping(L,D);const R=t.render.frame;r[L.id]!==R&&(M(L),r[L.id]=R)}function x(L){const C=_();L.__bindingPointIndex=C;const g=e.createBuffer(),D=L.__size,R=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,g),e.bufferData(e.UNIFORM_BUFFER,D,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,C,g),g}function _(){for(let L=0;L<s;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(L){const C=a[L.id],g=L.uniforms,D=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,C);for(let R=0,U=g.length;R<U;R++){const F=Array.isArray(g[R])?g[R]:[g[R]];for(let p=0,d=F.length;p<d;p++){const b=F[p];if(E(b,R,p,D)===!0){const B=b.__offset,X=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let W=0;W<X.length;W++){const k=X[W],ne=T(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,B+Y,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function E(L,C,g,D){const R=L.value,U=C+"_"+g;if(D[U]===void 0)return typeof R=="number"||typeof R=="boolean"?D[U]=R:D[U]=R.clone(),!0;{const F=D[U];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return D[U]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function y(L){const C=L.uniforms;let g=0;const D=16;for(let U=0,F=C.length;U<F;U++){const p=Array.isArray(C[U])?C[U]:[C[U]];for(let d=0,b=p.length;d<b;d++){const B=p[d],X=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,W=X.length;Y<W;Y++){const k=X[Y],ne=T(k),G=g%D,$=G%ne.boundary,Q=G+$;g+=$,Q!==0&&D-Q<ne.storage&&(g+=D-Q),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=g,g+=ne.storage}}}const R=g%D;return R>0&&(g+=D-R),L.__size=g,L.__cache={},this}function T(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function f(L){const C=L.target;C.removeEventListener("dispose",f);const g=o.indexOf(C.__bindingPointIndex);o.splice(g,1),e.deleteBuffer(a[C.id]),delete a[C.id],delete r[C.id]}function c(){for(const L in a)e.deleteBuffer(a[L]);o=[],a={},r={}}return{bind:m,update:v,dispose:c}}class Bu{constructor(t={}){const{canvas:n=ga(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:v=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:M=!1}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=o;const y=new Uint32Array(4),T=new Int32Array(4);let f=null,c=null;const L=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let D=!1;this._outputColorSpace=si;let R=0,U=0,F=null,p=-1,d=null;const b=new mt,B=new mt;let X=null;const Y=new $e(0);let W=0,k=n.width,ne=n.height,G=1,$=null,Q=null;const pe=new mt(0,0,k,ne),ye=new mt(0,0,k,ne);let Fe=!1;const Ye=new Ur;let ke=!1,z=!1;const q=new Vt,fe=new Ae,Pe=new mt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ft(){return F===null?G:1}let S=i;function Je(u,w){return n.getContext(u,w)}try{const u={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:m,preserveDrawingBuffer:v,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ir}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",j,!1),S===null){const w="webgl2";if(S=Je(w,u),S===null)throw Je(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let De,Ce,me,et,_e,Ie,lt,rt,h,l,I,V,Z,H,Se,ie,ge,ve,ee,ce,be,Ee,oe,Ue;function A(){De=new Kl(S),De.init(),Ee=new yu(S,De),Ce=new Gl(S,De,t,Ee),me=new wu(S,De),Ce.reversedDepthBuffer&&M&&me.buffers.depth.setReversed(!0),et=new $l(S),_e=new mu,Ie=new Pu(S,De,me,_e,Ce,Ee,et),lt=new kl(g),rt=new Yl(g),h=new ns(S),oe=new Bl(S,h),l=new ql(S,h,et,oe),I=new Ql(S,l,h,et),ee=new jl(S,Ce,Ie),ie=new Vl(_e),V=new hu(g,lt,rt,De,Ce,oe,ie),Z=new Ou(g,_e),H=new gu,Se=new xu(De),ve=new Fl(g,lt,rt,me,I,E,m),ge=new bu(g,I,Ce),Ue=new Fu(S,et,Ce,me),ce=new Hl(S,De,et),be=new Zl(S,De,et),et.programs=V.programs,g.capabilities=Ce,g.extensions=De,g.properties=_e,g.renderLists=H,g.shadowMap=ge,g.state=me,g.info=et}A();const te=new Iu(g,S);this.xr=te,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const u=De.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=De.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(u){u!==void 0&&(G=u,this.setSize(k,ne,!1))},this.getSize=function(u){return u.set(k,ne)},this.setSize=function(u,w,N=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=u,ne=w,n.width=Math.floor(u*G),n.height=Math.floor(w*G),N===!0&&(n.style.width=u+"px",n.style.height=w+"px"),this.setViewport(0,0,u,w)},this.getDrawingBufferSize=function(u){return u.set(k*G,ne*G).floor()},this.setDrawingBufferSize=function(u,w,N){k=u,ne=w,G=N,n.width=Math.floor(u*N),n.height=Math.floor(w*N),this.setViewport(0,0,u,w)},this.getCurrentViewport=function(u){return u.copy(b)},this.getViewport=function(u){return u.copy(pe)},this.setViewport=function(u,w,N,O){u.isVector4?pe.set(u.x,u.y,u.z,u.w):pe.set(u,w,N,O),me.viewport(b.copy(pe).multiplyScalar(G).round())},this.getScissor=function(u){return u.copy(ye)},this.setScissor=function(u,w,N,O){u.isVector4?ye.set(u.x,u.y,u.z,u.w):ye.set(u,w,N,O),me.scissor(B.copy(ye).multiplyScalar(G).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(u){me.setScissorTest(Fe=u)},this.setOpaqueSort=function(u){$=u},this.setTransparentSort=function(u){Q=u},this.getClearColor=function(u){return u.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(u=!0,w=!0,N=!0){let O=0;if(u){let P=!1;if(F!==null){const J=F.texture.format;P=J===$r||J===Zr||J===qr}if(P){const J=F.texture.type,se=J===kt||J===fn||J===xn||J===ln||J===zr||J===Wr,de=ve.getClearColor(),le=ve.getClearAlpha(),Re=de.r,we=de.g,Te=de.b;se?(y[0]=Re,y[1]=we,y[2]=Te,y[3]=le,S.clearBufferuiv(S.COLOR,0,y)):(T[0]=Re,T[1]=we,T[2]=Te,T[3]=le,S.clearBufferiv(S.COLOR,0,T))}else O|=S.COLOR_BUFFER_BIT}w&&(O|=S.DEPTH_BUFFER_BIT),N&&(O|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",j,!1),ve.dispose(),H.dispose(),Se.dispose(),_e.dispose(),lt.dispose(),rt.dispose(),I.dispose(),oe.dispose(),Ue.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",At),te.removeEventListener("sessionend",di),Lt.stop()};function re(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const u=et.autoReset,w=ge.enabled,N=ge.autoUpdate,O=ge.needsUpdate,P=ge.type;A(),et.autoReset=u,ge.enabled=w,ge.autoUpdate=N,ge.needsUpdate=O,ge.type=P}function j(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function K(u){const w=u.target;w.removeEventListener("dispose",K),he(w)}function he(u){Le(u),_e.remove(u)}function Le(u){const w=_e.get(u).programs;w!==void 0&&(w.forEach(function(N){V.releaseProgram(N)}),u.isShaderMaterial&&V.releaseShaderCache(u))}this.renderBufferDirect=function(u,w,N,O,P,J){w===null&&(w=Me);const se=P.isMesh&&P.matrixWorld.determinant()<0,de=ua(u,w,N,O,P);me.setMaterial(O,se);let le=N.index,Re=1;if(O.wireframe===!0){if(le=l.getWireframeAttribute(N),le===void 0)return;Re=2}const we=N.drawRange,Te=N.attributes.position;let Be=we.start*Re,We=(we.start+we.count)*Re;J!==null&&(Be=Math.max(Be,J.start*Re),We=Math.min(We,(J.start+J.count)*Re)),le!==null?(Be=Math.max(Be,0),We=Math.min(We,le.count)):Te!=null&&(Be=Math.max(Be,0),We=Math.min(We,Te.count));const it=We-Be;if(it<0||it===1/0)return;oe.setup(P,O,de,N,le);let je,Ke=ce;if(le!==null&&(je=h.get(le),Ke=be,Ke.setIndex(je)),P.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*ft()),Ke.setMode(S.LINES)):Ke.setMode(S.TRIANGLES);else if(P.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),me.setLineWidth(xe*ft()),P.isLineSegments?Ke.setMode(S.LINES):P.isLineLoop?Ke.setMode(S.LINE_LOOP):Ke.setMode(S.LINE_STRIP)}else P.isPoints?Ke.setMode(S.POINTS):P.isSprite&&Ke.setMode(S.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)qn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ke.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xe=P._multiDrawStarts,tt=P._multiDrawCounts,Ge=P._multiDrawCount,_t=le?h.get(le).bytesPerElement:1,Wt=_e.get(O).currentProgram.getUniforms();for(let gt=0;gt<Ge;gt++)Wt.setValue(S,"_gl_DrawID",gt),Ke.render(xe[gt]/_t,tt[gt])}else if(P.isInstancedMesh)Ke.renderInstances(Be,it,P.count);else if(N.isInstancedBufferGeometry){const xe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,tt=Math.min(N.instanceCount,xe);Ke.renderInstances(Be,it,tt)}else Ke.render(Be,it)};function qe(u,w,N){u.transparent===!0&&u.side===xt&&u.forceSinglePass===!1?(u.side=Tt,u.needsUpdate=!0,pn(u,w,N),u.side=cn,u.needsUpdate=!0,pn(u,w,N),u.side=xt):pn(u,w,N)}this.compile=function(u,w,N=null){N===null&&(N=u),c=Se.get(N),c.init(w),C.push(c),N.traverseVisible(function(P){P.isLight&&P.layers.test(w.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),u!==N&&u.traverseVisible(function(P){P.isLight&&P.layers.test(w.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),c.setupLights();const O=new Set;return u.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const J=P.material;if(J)if(Array.isArray(J))for(let se=0;se<J.length;se++){const de=J[se];qe(de,N,P),O.add(de)}else qe(J,N,P),O.add(J)}),c=C.pop(),O},this.compileAsync=function(u,w,N=null){const O=this.compile(u,w,N);return new Promise(P=>{function J(){if(O.forEach(function(se){_e.get(se).currentProgram.isReady()&&O.delete(se)}),O.size===0){P(u);return}setTimeout(J,10)}De.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let ze=null;function wt(u){ze&&ze(u)}function At(){Lt.stop()}function di(){Lt.start()}const Lt=new ra;Lt.setAnimationLoop(wt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(u){ze=u,te.setAnimationLoop(u),u===null?Lt.stop():Lt.start()},te.addEventListener("sessionstart",At),te.addEventListener("sessionend",di),this.render=function(u,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(w),w=te.getCamera()),u.isScene===!0&&u.onBeforeRender(g,u,w,F),c=Se.get(u,C.length),c.init(w),C.push(c),q.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),Ye.setFromProjectionMatrix(q,vi,w.reversedDepth),z=this.localClippingEnabled,ke=ie.init(this.clippingPlanes,z),f=H.get(u,L.length),f.init(),L.push(f),te.enabled===!0&&te.isPresenting===!0){const J=g.xr.getDepthSensingMesh();J!==null&&Ln(J,w,-1/0,g.sortObjects)}Ln(u,w,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort($,Q),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&ve.addToRenderList(f,u),this.info.render.frame++,ke===!0&&ie.beginShadows();const N=c.state.shadowsArray;ge.render(N,u,w),ke===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=f.opaque,P=f.transmissive;if(c.setupLights(),w.isArrayCamera){const J=w.cameras;if(P.length>0)for(let se=0,de=J.length;se<de;se++){const le=J[se];hi(O,P,u,le)}He&&ve.render(u);for(let se=0,de=J.length;se<de;se++){const le=J[se];pi(f,u,le,le.viewport)}}else P.length>0&&hi(O,P,u,w),He&&ve.render(u),pi(f,u,w);F!==null&&U===0&&(Ie.updateMultisampleRenderTarget(F),Ie.updateRenderTargetMipmap(F)),u.isScene===!0&&u.onAfterRender(g,u,w),oe.resetDefaultState(),p=-1,d=null,C.pop(),C.length>0?(c=C[C.length-1],ke===!0&&ie.setGlobalState(g.clippingPlanes,c.state.camera)):c=null,L.pop(),L.length>0?f=L[L.length-1]:f=null};function Ln(u,w,N,O){if(u.visible===!1)return;if(u.layers.test(w.layers)){if(u.isGroup)N=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(w);else if(u.isLight)c.pushLight(u),u.castShadow&&c.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Ye.intersectsSprite(u)){O&&Pe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(q);const se=I.update(u),de=u.material;de.visible&&f.push(u,se,de,N,Pe.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Ye.intersectsObject(u))){const se=I.update(u),de=u.material;if(O&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Pe.copy(u.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Pe.copy(se.boundingSphere.center)),Pe.applyMatrix4(u.matrixWorld).applyMatrix4(q)),Array.isArray(de)){const le=se.groups;for(let Re=0,we=le.length;Re<we;Re++){const Te=le[Re],Be=de[Te.materialIndex];Be&&Be.visible&&f.push(u,se,Be,N,Pe.z,Te)}}else de.visible&&f.push(u,se,de,N,Pe.z,null)}}const J=u.children;for(let se=0,de=J.length;se<de;se++)Ln(J[se],w,N,O)}function pi(u,w,N,O){const P=u.opaque,J=u.transmissive,se=u.transparent;c.setupLightsView(N),ke===!0&&ie.setGlobalState(g.clippingPlanes,N),O&&me.viewport(b.copy(O)),P.length>0&&dn(P,w,N),J.length>0&&dn(J,w,N),se.length>0&&dn(se,w,N),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function hi(u,w,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[O.id]===void 0&&(c.state.transmissionRenderTarget[O.id]=new Jt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Cn:kt,minFilter:Kt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const J=c.state.transmissionRenderTarget[O.id],se=O.viewport||b;J.setSize(se.z*g.transmissionResolutionScale,se.w*g.transmissionResolutionScale);const de=g.getRenderTarget(),le=g.getActiveCubeFace(),Re=g.getActiveMipmapLevel();g.setRenderTarget(J),g.getClearColor(Y),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),He&&ve.render(N);const we=g.toneMapping;g.toneMapping=yt;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),c.setupLightsView(O),ke===!0&&ie.setGlobalState(g.clippingPlanes,O),dn(u,N,O),Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J),De.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let We=0,it=w.length;We<it;We++){const je=w[We],Ke=je.object,xe=je.geometry,tt=je.material,Ge=je.group;if(tt.side===xt&&Ke.layers.test(O.layers)){const _t=tt.side;tt.side=Tt,tt.needsUpdate=!0,mi(Ke,N,O,xe,tt,Ge),tt.side=_t,tt.needsUpdate=!0,Be=!0}}Be===!0&&(Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J))}g.setRenderTarget(de,le,Re),g.setClearColor(Y,W),Te!==void 0&&(O.viewport=Te),g.toneMapping=we}function dn(u,w,N){const O=w.isScene===!0?w.overrideMaterial:null;for(let P=0,J=u.length;P<J;P++){const se=u[P],de=se.object,le=se.geometry,Re=se.group;let we=se.material;we.allowOverride===!0&&O!==null&&(we=O),de.layers.test(N.layers)&&mi(de,w,N,le,we,Re)}}function mi(u,w,N,O,P,J){u.onBeforeRender(g,w,N,O,P,J),u.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),P.onBeforeRender(g,w,N,O,u,J),P.transparent===!0&&P.side===xt&&P.forceSinglePass===!1?(P.side=Tt,P.needsUpdate=!0,g.renderBufferDirect(N,w,O,P,u,J),P.side=cn,P.needsUpdate=!0,g.renderBufferDirect(N,w,O,P,u,J),P.side=xt):g.renderBufferDirect(N,w,O,P,u,J),u.onAfterRender(g,w,N,O,P,J)}function pn(u,w,N){w.isScene!==!0&&(w=Me);const O=_e.get(u),P=c.state.lights,J=c.state.shadowsArray,se=P.state.version,de=V.getParameters(u,P.state,J,w,N),le=V.getProgramCacheKey(de);let Re=O.programs;O.environment=u.isMeshStandardMaterial?w.environment:null,O.fog=w.fog,O.envMap=(u.isMeshStandardMaterial?rt:lt).get(u.envMap||O.environment),O.envMapRotation=O.environment!==null&&u.envMap===null?w.environmentRotation:u.envMapRotation,Re===void 0&&(u.addEventListener("dispose",K),Re=new Map,O.programs=Re);let we=Re.get(le);if(we!==void 0){if(O.currentProgram===we&&O.lightsStateVersion===se)return gi(u,de),we}else de.uniforms=V.getUniforms(u),u.onBeforeCompile(de,g),we=V.acquireProgram(de,le),Re.set(le,we),O.uniforms=de.uniforms;const Te=O.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Te.clippingPlanes=ie.uniform),gi(u,de),O.needsLights=pa(u),O.lightsStateVersion=se,O.needsLights&&(Te.ambientLightColor.value=P.state.ambient,Te.lightProbe.value=P.state.probe,Te.directionalLights.value=P.state.directional,Te.directionalLightShadows.value=P.state.directionalShadow,Te.spotLights.value=P.state.spot,Te.spotLightShadows.value=P.state.spotShadow,Te.rectAreaLights.value=P.state.rectArea,Te.ltc_1.value=P.state.rectAreaLTC1,Te.ltc_2.value=P.state.rectAreaLTC2,Te.pointLights.value=P.state.point,Te.pointLightShadows.value=P.state.pointShadow,Te.hemisphereLights.value=P.state.hemi,Te.directionalShadowMap.value=P.state.directionalShadowMap,Te.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Te.spotShadowMap.value=P.state.spotShadowMap,Te.spotLightMatrix.value=P.state.spotLightMatrix,Te.spotLightMap.value=P.state.spotLightMap,Te.pointShadowMap.value=P.state.pointShadowMap,Te.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=we,O.uniformsList=null,we}function _i(u){if(u.uniformsList===null){const w=u.currentProgram.getUniforms();u.uniformsList=Sn.seqWithValue(w.seq,u.uniforms)}return u.uniformsList}function gi(u,w){const N=_e.get(u);N.outputColorSpace=w.outputColorSpace,N.batching=w.batching,N.batchingColor=w.batchingColor,N.instancing=w.instancing,N.instancingColor=w.instancingColor,N.instancingMorph=w.instancingMorph,N.skinning=w.skinning,N.morphTargets=w.morphTargets,N.morphNormals=w.morphNormals,N.morphColors=w.morphColors,N.morphTargetsCount=w.morphTargetsCount,N.numClippingPlanes=w.numClippingPlanes,N.numIntersection=w.numClipIntersection,N.vertexAlphas=w.vertexAlphas,N.vertexTangents=w.vertexTangents,N.toneMapping=w.toneMapping}function ua(u,w,N,O,P){w.isScene!==!0&&(w=Me),Ie.resetTextureUnits();const J=w.fog,se=O.isMeshStandardMaterial?w.environment:null,de=F===null?g.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wn,le=(O.isMeshStandardMaterial?rt:lt).get(O.envMap||se),Re=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,we=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!N.morphAttributes.position,Be=!!N.morphAttributes.normal,We=!!N.morphAttributes.color;let it=yt;O.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(it=g.toneMapping);const je=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ke=je!==void 0?je.length:0,xe=_e.get(O),tt=c.state.lights;if(ke===!0&&(z===!0||u!==d)){const ut=u===d&&O.id===p;ie.setState(O,u,ut)}let Ge=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tt.state.version||xe.outputColorSpace!==de||P.isBatchedMesh&&xe.batching===!1||!P.isBatchedMesh&&xe.batching===!0||P.isBatchedMesh&&xe.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xe.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xe.instancing===!1||!P.isInstancedMesh&&xe.instancing===!0||P.isSkinnedMesh&&xe.skinning===!1||!P.isSkinnedMesh&&xe.skinning===!0||P.isInstancedMesh&&xe.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xe.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xe.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xe.instancingMorph===!1&&P.morphTexture!==null||xe.envMap!==le||O.fog===!0&&xe.fog!==J||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ie.numPlanes||xe.numIntersection!==ie.numIntersection)||xe.vertexAlphas!==Re||xe.vertexTangents!==we||xe.morphTargets!==Te||xe.morphNormals!==Be||xe.morphColors!==We||xe.toneMapping!==it||xe.morphTargetsCount!==Ke)&&(Ge=!0):(Ge=!0,xe.__version=O.version);let _t=xe.currentProgram;Ge===!0&&(_t=pn(O,w,P));let Wt=!1,gt=!1,nn=!1;const nt=_t.getUniforms(),Et=xe.uniforms;if(me.useProgram(_t.program)&&(Wt=!0,gt=!0,nn=!0),O.id!==p&&(p=O.id,gt=!0),Wt||d!==u){me.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),nt.setValue(S,"projectionMatrix",u.projectionMatrix),nt.setValue(S,"viewMatrix",u.matrixWorldInverse);const dt=nt.map.cameraPosition;dt!==void 0&&dt.setValue(S,fe.setFromMatrixPosition(u.matrixWorld)),Ce.logarithmicDepthBuffer&&nt.setValue(S,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&nt.setValue(S,"isOrthographic",u.isOrthographicCamera===!0),d!==u&&(d=u,gt=!0,nn=!0)}if(P.isSkinnedMesh){nt.setOptional(S,P,"bindMatrix"),nt.setOptional(S,P,"bindMatrixInverse");const ut=P.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),nt.setValue(S,"boneTexture",ut.boneTexture,Ie))}P.isBatchedMesh&&(nt.setOptional(S,P,"batchingTexture"),nt.setValue(S,"batchingTexture",P._matricesTexture,Ie),nt.setOptional(S,P,"batchingIdTexture"),nt.setValue(S,"batchingIdTexture",P._indirectTexture,Ie),nt.setOptional(S,P,"batchingColorTexture"),P._colorsTexture!==null&&nt.setValue(S,"batchingColorTexture",P._colorsTexture,Ie));const St=N.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&ee.update(P,N,_t),(gt||xe.receiveShadow!==P.receiveShadow)&&(xe.receiveShadow=P.receiveShadow,nt.setValue(S,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Et.envMap.value=le,Et.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&w.environment!==null&&(Et.envMapIntensity.value=w.environmentIntensity),gt&&(nt.setValue(S,"toneMappingExposure",g.toneMappingExposure),xe.needsLights&&da(Et,nn),J&&O.fog===!0&&Z.refreshFogUniforms(Et,J),Z.refreshMaterialUniforms(Et,O,G,ne,c.state.transmissionRenderTarget[u.id]),Sn.upload(S,_i(xe),Et,Ie)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Sn.upload(S,_i(xe),Et,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&nt.setValue(S,"center",P.center),nt.setValue(S,"modelViewMatrix",P.modelViewMatrix),nt.setValue(S,"normalMatrix",P.normalMatrix),nt.setValue(S,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ut=O.uniformsGroups;for(let dt=0,Dn=ut.length;dt<Dn;dt++){const Dt=ut[dt];Ue.update(Dt,_t),Ue.bind(Dt,_t)}}return _t}function da(u,w){u.ambientLightColor.needsUpdate=w,u.lightProbe.needsUpdate=w,u.directionalLights.needsUpdate=w,u.directionalLightShadows.needsUpdate=w,u.pointLights.needsUpdate=w,u.pointLightShadows.needsUpdate=w,u.spotLights.needsUpdate=w,u.spotLightShadows.needsUpdate=w,u.rectAreaLights.needsUpdate=w,u.hemisphereLights.needsUpdate=w}function pa(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(u,w,N){const O=_e.get(u);O.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_e.get(u.texture).__webglTexture=w,_e.get(u.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,w){const N=_e.get(u);N.__webglFramebuffer=w,N.__useDefaultFramebuffer=w===void 0};const ha=S.createFramebuffer();this.setRenderTarget=function(u,w=0,N=0){F=u,R=w,U=N;let O=!0,P=null,J=!1,se=!1;if(u){const le=_e.get(u);if(le.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(S.FRAMEBUFFER,null),O=!1;else if(le.__webglFramebuffer===void 0)Ie.setupRenderTarget(u);else if(le.__hasExternalTextures)Ie.rebindTextures(u,_e.get(u.texture).__webglTexture,_e.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const Te=u.depthTexture;if(le.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(u.width!==Te.image.width||u.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(u)}}const Re=u.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(se=!0);const we=_e.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(we[w])?P=we[w][N]:P=we[w],J=!0):u.samples>0&&Ie.useMultisampledRTT(u)===!1?P=_e.get(u).__webglMultisampledFramebuffer:Array.isArray(we)?P=we[N]:P=we,b.copy(u.viewport),B.copy(u.scissor),X=u.scissorTest}else b.copy(pe).multiplyScalar(G).floor(),B.copy(ye).multiplyScalar(G).floor(),X=Fe;if(N!==0&&(P=ha),me.bindFramebuffer(S.FRAMEBUFFER,P)&&O&&me.drawBuffers(u,P),me.viewport(b),me.scissor(B),me.setScissorTest(X),J){const le=_e.get(u.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+w,le.__webglTexture,N)}else if(se){const le=w;for(let Re=0;Re<u.textures.length;Re++){const we=_e.get(u.textures[Re]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Re,we.__webglTexture,N,le)}}else if(u!==null&&N!==0){const le=_e.get(u.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,le.__webglTexture,N)}p=-1},this.readRenderTargetPixels=function(u,w,N,O,P,J,se,de=0){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&se!==void 0&&(le=le[se]),le){me.bindFramebuffer(S.FRAMEBUFFER,le);try{const Re=u.textures[de],we=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=u.width-O&&N>=0&&N<=u.height-P&&(u.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(w,N,O,P,Ee.convert(we),Ee.convert(Te),J))}finally{const Re=F!==null?_e.get(F).__webglFramebuffer:null;me.bindFramebuffer(S.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(u,w,N,O,P,J,se,de=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=_e.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&se!==void 0&&(le=le[se]),le)if(w>=0&&w<=u.width-O&&N>=0&&N<=u.height-P){me.bindFramebuffer(S.FRAMEBUFFER,le);const Re=u.textures[de],we=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Be),S.bufferData(S.PIXEL_PACK_BUFFER,J.byteLength,S.STREAM_READ),u.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+de),S.readPixels(w,N,O,P,Ee.convert(we),Ee.convert(Te),0);const We=F!==null?_e.get(F).__webglFramebuffer:null;me.bindFramebuffer(S.FRAMEBUFFER,We);const it=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await va(S,it,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Be),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,J),S.deleteBuffer(Be),S.deleteSync(it),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,w=null,N=0){const O=Math.pow(2,-N),P=Math.floor(u.image.width*O),J=Math.floor(u.image.height*O),se=w!==null?w.x:0,de=w!==null?w.y:0;Ie.setTexture2D(u,0),S.copyTexSubImage2D(S.TEXTURE_2D,N,0,0,se,de,P,J),me.unbindTexture()};const ma=S.createFramebuffer(),_a=S.createFramebuffer();this.copyTextureToTexture=function(u,w,N=null,O=null,P=0,J=null){J===null&&(P!==0?(qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=P,P=0):J=0);let se,de,le,Re,we,Te,Be,We,it;const je=u.isCompressedTexture?u.mipmaps[J]:u.image;if(N!==null)se=N.max.x-N.min.x,de=N.max.y-N.min.y,le=N.isBox3?N.max.z-N.min.z:1,Re=N.min.x,we=N.min.y,Te=N.isBox3?N.min.z:0;else{const St=Math.pow(2,-P);se=Math.floor(je.width*St),de=Math.floor(je.height*St),u.isDataArrayTexture?le=je.depth:u.isData3DTexture?le=Math.floor(je.depth*St):le=1,Re=0,we=0,Te=0}O!==null?(Be=O.x,We=O.y,it=O.z):(Be=0,We=0,it=0);const Ke=Ee.convert(w.format),xe=Ee.convert(w.type);let tt;w.isData3DTexture?(Ie.setTexture3D(w,0),tt=S.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Ie.setTexture2DArray(w,0),tt=S.TEXTURE_2D_ARRAY):(Ie.setTexture2D(w,0),tt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,w.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,w.unpackAlignment);const Ge=S.getParameter(S.UNPACK_ROW_LENGTH),_t=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Wt=S.getParameter(S.UNPACK_SKIP_PIXELS),gt=S.getParameter(S.UNPACK_SKIP_ROWS),nn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,je.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,je.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Re),S.pixelStorei(S.UNPACK_SKIP_ROWS,we),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Te);const nt=u.isDataArrayTexture||u.isData3DTexture,Et=w.isDataArrayTexture||w.isData3DTexture;if(u.isDepthTexture){const St=_e.get(u),ut=_e.get(w),dt=_e.get(St.__renderTarget),Dn=_e.get(ut.__renderTarget);me.bindFramebuffer(S.READ_FRAMEBUFFER,dt.__webglFramebuffer),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Dt=0;Dt<le;Dt++)nt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,_e.get(u).__webglTexture,P,Te+Dt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,_e.get(w).__webglTexture,J,it+Dt)),S.blitFramebuffer(Re,we,se,de,Be,We,se,de,S.DEPTH_BUFFER_BIT,S.NEAREST);me.bindFramebuffer(S.READ_FRAMEBUFFER,null),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(P!==0||u.isRenderTargetTexture||_e.has(u)){const St=_e.get(u),ut=_e.get(w);me.bindFramebuffer(S.READ_FRAMEBUFFER,ma),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,_a);for(let dt=0;dt<le;dt++)nt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,St.__webglTexture,P,Te+dt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,St.__webglTexture,P),Et?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ut.__webglTexture,J,it+dt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ut.__webglTexture,J),P!==0?S.blitFramebuffer(Re,we,se,de,Be,We,se,de,S.COLOR_BUFFER_BIT,S.NEAREST):Et?S.copyTexSubImage3D(tt,J,Be,We,it+dt,Re,we,se,de):S.copyTexSubImage2D(tt,J,Be,We,Re,we,se,de);me.bindFramebuffer(S.READ_FRAMEBUFFER,null),me.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Et?u.isDataTexture||u.isData3DTexture?S.texSubImage3D(tt,J,Be,We,it,se,de,le,Ke,xe,je.data):w.isCompressedArrayTexture?S.compressedTexSubImage3D(tt,J,Be,We,it,se,de,le,Ke,je.data):S.texSubImage3D(tt,J,Be,We,it,se,de,le,Ke,xe,je):u.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,J,Be,We,se,de,Ke,xe,je.data):u.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,J,Be,We,je.width,je.height,Ke,je.data):S.texSubImage2D(S.TEXTURE_2D,J,Be,We,se,de,Ke,xe,je);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ge),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_t),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Wt),S.pixelStorei(S.UNPACK_SKIP_ROWS,gt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,nn),J===0&&w.generateMipmaps&&S.generateMipmap(tt),me.unbindTexture()},this.initRenderTarget=function(u){_e.get(u).__webglFramebuffer===void 0&&Ie.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?Ie.setTextureCube(u,0):u.isData3DTexture?Ie.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?Ie.setTexture2DArray(u,0):Ie.setTexture2D(u,0),me.unbindTexture()},this.resetState=function(){R=0,U=0,F=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(t),n.unpackColorSpace=at._getUnpackColorSpace()}}const br={type:"change"},ui={type:"start"},la={type:"end"},gn=new Uo,Cr=new Vr,Hu=Math.cos(70*An.DEG2RAD),ot=new Ae,pt=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xn=1e-6;class Gu extends Do{constructor(t,n=null){super(t,n),this.state=Xe.NONE,this.target=new Ae,this.cursor=new Ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qt.ROTATE,MIDDLE:Qt.DOLLY,RIGHT:Qt.PAN},this.touches={ONE:qt.ROTATE,TWO:qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Ae,this._lastQuaternion=new ri,this._lastTargetPosition=new Ae,this._quat=new ri().setFromUnitVectors(t.up,new Ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new er,this._sphericalDelta=new er,this._scale=1,this._panOffset=new Ae,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new Ae,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ku.bind(this),this._onPointerDown=Vu.bind(this),this._onPointerUp=zu.bind(this),this._onContextMenu=$u.bind(this),this._onMouseWheel=Yu.bind(this),this._onKeyDown=Ku.bind(this),this._onTouchStart=qu.bind(this),this._onTouchMove=Zu.bind(this),this._onMouseDown=Wu.bind(this),this._onMouseMove=Xu.bind(this),this._interceptControlDown=ju.bind(this),this._interceptControlUp=Qu.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(br),this.update(),this.state=Xe.NONE}update(t=null){const n=this.object.position;ot.copy(n).sub(this.target),ot.applyQuaternion(this._quat),this._spherical.setFromVector3(ot),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=pt:i>Math.PI&&(i-=pt),a<-Math.PI?a+=pt:a>Math.PI&&(a-=pt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ot.setFromSpherical(this._spherical),ot.applyQuaternion(this._quatInverse),n.copy(this.target).add(ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=ot.length();o=this._clampDistance(s*this._scale);const m=s-o;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),r=!!m}else if(this.object.isOrthographicCamera){const s=new Ae(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=m!==this.object.zoom;const v=new Ae(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(s),this.object.updateMatrixWorld(),o=ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gn.origin.copy(this.object.position),gn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gn.direction))<Hu?this.object.lookAt(this.target):(Cr.setFromNormalAndCoplanarPoint(this.object.up,this.target),gn.intersectPlane(Cr,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xn||this._lastTargetPosition.distanceToSquared(this.target)>Xn?(this.dispatchEvent(br),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pt/60*this.autoRotateSpeed*t:pt/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ot.setFromMatrixColumn(n,0),ot.multiplyScalar(-t),this._panOffset.add(ot)}_panUp(t,n){this.screenSpacePanning===!0?ot.setFromMatrixColumn(n,1):(ot.setFromMatrixColumn(n,0),ot.crossVectors(this.object.up,ot)),ot.multiplyScalar(t),this._panOffset.add(ot)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ot.copy(a).sub(this.target);let r=ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,r=n-i.top,o=i.width,s=i.height;this._mouse.x=a/o*2-1,this._mouse.y=-(r/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pt*this._rotateDelta.x/n.clientHeight),this._rotateUp(pt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,s=(t.pageY+n.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ze,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Vu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function ku(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function zu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(la),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Wu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Xe.DOLLY;break;case Qt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}break;case Qt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(ui)}function Xu(e){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Yu(e){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(e.preventDefault(),this.dispatchEvent(ui),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(la))}function Ku(e){this.enabled!==!1&&this._handleKeyDown(e)}function qu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Xe.TOUCH_ROTATE;break;case qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Xe.TOUCH_DOLLY_PAN;break;case qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(ui)}function Zu(e){switch(this._trackPointer(e),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Xe.NONE}}function $u(e){this.enabled!==!1&&e.preventDefault()}function ju(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qu(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wr={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class bn{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new ld(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Td(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,n,i,a){const r=new cd,o=[];for(let s=0,m=this.pluginCallbacks.length;s<m;s++)o.push(this.pluginCallbacks[s](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,n,a).catch(i)}parseAsync(t,n){const i=this;return new Promise(function(a,r){i.parse(t,a,r,n)})}}const Oe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Yn="KHR_mesh_quantization",vt={};vt[jt]=Oe.NEAREST;vt[Hr]=Oe.NEAREST_MIPMAP_NEAREST;vt[an]=Oe.NEAREST_MIPMAP_LINEAR;vt[Bt]=Oe.LINEAR;vt[vn]=Oe.LINEAR_MIPMAP_NEAREST;vt[Kt]=Oe.LINEAR_MIPMAP_LINEAR;vt[Fr]=Oe.CLAMP_TO_EDGE;vt[Br]=Oe.REPEAT;vt[Or]=Oe.MIRRORED_REPEAT;const Pr={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Ju=new $e,yr=12,ed=1179937895,td=2,Lr=8,nd=1313821514,id=5130562;function sn(e,t){return e.length===t.length&&e.every(function(n,i){return n===t[i]})}function rd(e){return new TextEncoder().encode(e).buffer}function ad(e){return sn(e.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function od(e,t,n){const i={min:new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let a=t;a<t+n;a++)for(let r=0;r<e.itemSize;r++){let o;e.itemSize>4?o=e.array[a*e.itemSize+r]:(r===0?o=e.getX(a):r===1?o=e.getY(a):r===2?o=e.getZ(a):r===3&&(o=e.getW(a)),e.normalized===!0&&(o=An.normalize(o,e.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function fa(e){return Math.ceil(e/4)*4}function Kn(e,t=0){const n=fa(e.byteLength);if(n!==e.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(e)),t!==0)for(let a=e.byteLength;a<n;a++)i[a]=t;return i.buffer}return e}function Dr(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function sd(e,t){if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){let n;return t==="image/jpeg"?n=.92:t==="image/webp"&&(n=.8),e.convertToBlob({type:t,quality:n})}else return new Promise(n=>e.toBlob(n,t))}class cd{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Ir}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,n,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const a=this,r=a.buffers,o=a.json;i=a.options;const s=a.extensionsUsed,m=a.extensionsRequired,v=new Blob(r,{type:"application/octet-stream"}),x=Object.keys(s),_=Object.keys(m);if(x.length>0&&(o.extensionsUsed=x),_.length>0&&(o.extensionsRequired=_),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=v.size),i.binary===!0){const M=new FileReader;M.readAsArrayBuffer(v),M.onloadend=function(){const E=Kn(M.result),y=new DataView(new ArrayBuffer(Lr));y.setUint32(0,E.byteLength,!0),y.setUint32(4,id,!0);const T=Kn(rd(JSON.stringify(o)),32),f=new DataView(new ArrayBuffer(Lr));f.setUint32(0,T.byteLength,!0),f.setUint32(4,nd,!0);const c=new ArrayBuffer(yr),L=new DataView(c);L.setUint32(0,ed,!0),L.setUint32(4,td,!0);const C=yr+f.byteLength+T.byteLength+y.byteLength+E.byteLength;L.setUint32(8,C,!0);const g=new Blob([c,f,T,y,E],{type:"application/octet-stream"}),D=new FileReader;D.readAsArrayBuffer(g),D.onloadend=function(){n(D.result)}}}else if(o.buffers&&o.buffers.length>0){const M=new FileReader;M.readAsDataURL(v),M.onloadend=function(){const E=M.result;o.buffers[0].uri=E,n(o)}}else n(o)}serializeUserData(t,n){if(Object.keys(t.userData).length===0)return;const i=this.options,a=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){n.extensions===void 0&&(n.extensions={});for(const o in r.gltfExtensions)n.extensions[o]=r.gltfExtensions[o],a[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(n.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,n=!1){if(this.uids.has(t)===!1){const a=new Map;a.set(!0,this.uid++),a.set(!1,this.uid++),this.uids.set(t,a)}return this.uids.get(t).get(n)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const i=new Ae;for(let a=0,r=t.count;a<r;a++)if(Math.abs(i.fromBufferAttribute(t,a).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const n=this.cache;if(n.attributesNormalized.has(t))return n.attributesNormalized.get(t);const i=t.clone(),a=new Ae;for(let r=0,o=i.count;r<o;r++)a.fromBufferAttribute(i,r),a.x===0&&a.y===0&&a.z===0?a.setX(1):a.normalize(),i.setXYZ(r,a.x,a.y,a.z);return n.attributesNormalized.set(t,i),i}applyTextureTransform(t,n){let i=!1;const a={};(n.offset.x!==0||n.offset.y!==0)&&(a.offset=n.offset.toArray(),i=!0),n.rotation!==0&&(a.rotation=n.rotation,i=!0),(n.repeat.x!==1||n.repeat.y!==1)&&(a.scale=n.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=a,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,n){if(t===n)return t;function i(E){return E.colorSpace===si?function(T){return T<.04045?T*.0773993808:Math.pow(T*.9478672986+.0521327014,2.4)}:function(T){return T}}t instanceof Bn&&(t=await this.decompressTextureAsync(t)),n instanceof Bn&&(n=await this.decompressTextureAsync(n));const a=t?t.image:null,r=n?n.image:null,o=Math.max(a?a.width:0,r?r.width:0),s=Math.max(a?a.height:0,r?r.height:0),m=Dr();m.width=o,m.height=s;const v=m.getContext("2d",{willReadFrequently:!0});v.fillStyle="#00ffff",v.fillRect(0,0,o,s);const x=v.getImageData(0,0,o,s);if(a){v.drawImage(a,0,0,o,s);const E=i(t),y=v.getImageData(0,0,o,s).data;for(let T=2;T<y.length;T+=4)x.data[T]=E(y[T]/256)*256}if(r){v.drawImage(r,0,0,o,s);const E=i(n),y=v.getImageData(0,0,o,s).data;for(let T=1;T<y.length;T+=4)x.data[T]=E(y[T]/256)*256}v.putImageData(x,0,0);const M=(t||n).clone();return M.source=new Io(m),M.colorSpace=Ot,M.channel=(t||n).channel,t&&n&&t.channel!==n.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),M}async decompressTextureAsync(t,n=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,n)}processBuffer(t){const n=this.json,i=this.buffers;return n.buffers||(n.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,n,i,a,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let s;switch(n){case Oe.BYTE:case Oe.UNSIGNED_BYTE:s=1;break;case Oe.SHORT:case Oe.UNSIGNED_SHORT:s=2;break;default:s=4}let m=t.itemSize*s;r===Oe.ARRAY_BUFFER&&(m=Math.ceil(m/4)*4);const v=fa(a*m),x=new DataView(new ArrayBuffer(v));let _=0;for(let y=i;y<i+a;y++){for(let T=0;T<t.itemSize;T++){let f;t.itemSize>4?f=t.array[y*t.itemSize+T]:(T===0?f=t.getX(y):T===1?f=t.getY(y):T===2?f=t.getZ(y):T===3&&(f=t.getW(y)),t.normalized===!0&&(f=An.normalize(f,t.array))),n===Oe.FLOAT?x.setFloat32(_,f,!0):n===Oe.INT?x.setInt32(_,f,!0):n===Oe.UNSIGNED_INT?x.setUint32(_,f,!0):n===Oe.SHORT?x.setInt16(_,f,!0):n===Oe.UNSIGNED_SHORT?x.setUint16(_,f,!0):n===Oe.BYTE?x.setInt8(_,f):n===Oe.UNSIGNED_BYTE&&x.setUint8(_,f),_+=s}_%m!==0&&(_+=m-_%m)}const M={buffer:this.processBuffer(x.buffer),byteOffset:this.byteOffset,byteLength:v};return r!==void 0&&(M.target=r),r===Oe.ARRAY_BUFFER&&(M.byteStride=m),this.byteOffset+=v,o.bufferViews.push(M),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const n=this,i=n.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(a){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const o=Kn(r.result),s={buffer:n.processBuffer(o),byteOffset:n.byteOffset,byteLength:o.byteLength};n.byteOffset+=o.byteLength,a(i.bufferViews.push(s)-1)}})}processAccessor(t,n,i,a){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let s;if(t.array.constructor===Float32Array)s=Oe.FLOAT;else if(t.array.constructor===Int32Array)s=Oe.INT;else if(t.array.constructor===Uint32Array)s=Oe.UNSIGNED_INT;else if(t.array.constructor===Int16Array)s=Oe.SHORT;else if(t.array.constructor===Uint16Array)s=Oe.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)s=Oe.BYTE;else if(t.array.constructor===Uint8Array)s=Oe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(a===void 0||a===1/0)&&(a=t.count),a===0)return null;const m=od(t,i,a);let v;n!==void 0&&(v=t===n.index?Oe.ELEMENT_ARRAY_BUFFER:Oe.ARRAY_BUFFER);const x=this.processBufferView(t,s,i,a,v),_={bufferView:x.id,byteOffset:x.byteOffset,componentType:s,count:a,max:m.max,min:m.min,type:o[t.itemSize]};return t.normalized===!0&&(_.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(_)-1}processImage(t,n,i,a="image/png"){if(t!==null){const r=this,o=r.cache,s=r.json,m=r.options,v=r.pending;o.images.has(t)||o.images.set(t,{});const x=o.images.get(t),_=a+":flipY/"+i.toString();if(x[_]!==void 0)return x[_];s.images||(s.images=[]);const M={mimeType:a},E=Dr();E.width=Math.min(t.width,m.maxTextureSize),E.height=Math.min(t.height,m.maxTextureSize);const y=E.getContext("2d",{willReadFrequently:!0});if(i===!0&&(y.translate(0,E.height),y.scale(1,-1)),t.data!==void 0){n!==bt&&console.error("GLTFExporter: Only RGBAFormat is supported.",n),(t.width>m.maxTextureSize||t.height>m.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const f=new Uint8ClampedArray(t.height*t.width*4);for(let c=0;c<f.length;c+=4)f[c+0]=t.data[c+0],f[c+1]=t.data[c+1],f[c+2]=t.data[c+2],f[c+3]=t.data[c+3];y.putImageData(new ImageData(f,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)y.drawImage(t,0,0,E.width,E.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");m.binary===!0?v.push(sd(E,a).then(f=>r.processBufferViewImage(f)).then(f=>{M.bufferView=f})):M.uri=No.getDataURL(E,a);const T=s.images.push(M)-1;return x[_]=T,T}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const n=this.json;n.samplers||(n.samplers=[]);const i={magFilter:vt[t.magFilter],minFilter:vt[t.minFilter],wrapS:vt[t.wrapS],wrapT:vt[t.wrapT]};return n.samplers.push(i)-1}async processTextureAsync(t){const i=this.options,a=this.cache,r=this.json;if(a.textures.has(t))return a.textures.get(t);r.textures||(r.textures=[]),t instanceof Bn&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const s={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(s.name=t.name),await this._invokeAllAsync(async function(v){v.writeTexture&&await v.writeTexture(t,s)});const m=r.textures.push(s)-1;return a.textures.set(t,m),m}async processMaterialAsync(t){const n=this.cache,i=this.json;if(n.materials.has(t))return n.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(sn(r,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const s=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),m={index:await this.processTextureAsync(s),texCoord:s.channel};this.applyTextureTransform(m,s),a.pbrMetallicRoughness.metallicRoughnessTexture=m}if(t.map){const s={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(s,t.map),a.pbrMetallicRoughness.baseColorTexture=s}if(t.emissive){const s=t.emissive;if(Math.max(s.r,s.g,s.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const v={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(v,t.emissiveMap),a.emissiveTexture=v}}if(t.normalMap){const s={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(s.scale=t.normalScale.x),this.applyTextureTransform(s,t.normalMap),a.normalTexture=s}if(t.aoMap){const s={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(s.strength=t.aoMapIntensity),this.applyTextureTransform(s,t.aoMap),a.occlusionTexture=s}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===xt&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(s){s.writeMaterialAsync&&await s.writeMaterialAsync(t,a)});const o=i.materials.push(a)-1;return n.materials.set(t,o),o}async processMeshAsync(t){const n=this.cache,i=this.json,a=[t.geometry.uuid];if(Array.isArray(t.material))for(let g=0,D=t.material.length;g<D;g++)a.push(t.material[g].uuid);else a.push(t.material.uuid);const r=a.join(":");if(n.meshes.has(r))return n.meshes.get(r);const o=t.geometry;let s;t.isLineSegments?s=Oe.LINES:t.isLineLoop?s=Oe.LINE_LOOP:t.isLine?s=Oe.LINE_STRIP:t.isPoints?s=Oe.POINTS:s=t.material.wireframe?Oe.LINES:Oe.TRIANGLES;const m={},v={},x=[],_=[],M={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},E=o.getAttribute("normal");E!==void 0&&!this.isNormalizedNormalAttribute(E)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(E)));let y=null;for(let g in o.attributes){if(g.slice(0,5)==="morph")continue;const D=o.attributes[g];if(g=M[g]||g.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(g)||(g="_"+g),n.attributes.has(this.getUID(D))){v[g]=n.attributes.get(this.getUID(D));continue}y=null;const U=D.array;g==="JOINTS_0"&&!(U instanceof Uint16Array)&&!(U instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),y=new Mt(new Uint16Array(U),D.itemSize,D.normalized)):(U instanceof Uint32Array||U instanceof Int32Array)&&!g.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${g}" converted to type FLOAT.`),y=bn.Utils.toFloat32BufferAttribute(D));const F=this.processAccessor(y||D,o);F!==null&&(g.startsWith("_")||this.detectMeshQuantization(g,D),v[g]=F,n.attributes.set(this.getUID(D),F))}if(E!==void 0&&o.setAttribute("normal",E),Object.keys(v).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const g=[],D=[],R={};if(t.morphTargetDictionary!==void 0)for(const U in t.morphTargetDictionary)R[t.morphTargetDictionary[U]]=U;for(let U=0;U<t.morphTargetInfluences.length;++U){const F={};let p=!1;for(const d in o.morphAttributes){if(d!=="position"&&d!=="normal"){p||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),p=!0);continue}const b=o.morphAttributes[d][U],B=d.toUpperCase(),X=o.attributes[d];if(n.attributes.has(this.getUID(b,!0))){F[B]=n.attributes.get(this.getUID(b,!0));continue}const Y=b.clone();if(!o.morphTargetsRelative)for(let W=0,k=b.count;W<k;W++)for(let ne=0;ne<b.itemSize;ne++)ne===0&&Y.setX(W,b.getX(W)-X.getX(W)),ne===1&&Y.setY(W,b.getY(W)-X.getY(W)),ne===2&&Y.setZ(W,b.getZ(W)-X.getZ(W)),ne===3&&Y.setW(W,b.getW(W)-X.getW(W));F[B]=this.processAccessor(Y,o),n.attributes.set(this.getUID(X,!0),F[B])}_.push(F),g.push(t.morphTargetInfluences[U]),t.morphTargetDictionary!==void 0&&D.push(R[U])}m.weights=g,D.length>0&&(m.extras={},m.extras.targetNames=D)}const T=Array.isArray(t.material);if(T&&o.groups.length===0)return null;let f=!1;if(T&&o.index===null){const g=[];for(let D=0,R=o.attributes.position.count;D<R;D++)g[D]=D;o.setIndex(g),f=!0}const c=T?t.material:[t.material],L=T?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let g=0,D=L.length;g<D;g++){const R={mode:s,attributes:v};if(this.serializeUserData(o,R),_.length>0&&(R.targets=_),o.index!==null){let F=this.getUID(o.index);(L[g].start!==void 0||L[g].count!==void 0)&&(F+=":"+L[g].start+":"+L[g].count),n.attributes.has(F)?R.indices=n.attributes.get(F):(R.indices=this.processAccessor(o.index,o,L[g].start,L[g].count),n.attributes.set(F,R.indices)),R.indices===null&&delete R.indices}const U=await this.processMaterialAsync(c[L[g].materialIndex]);U!==null&&(R.material=U),x.push(R)}f===!0&&o.setIndex(null),m.primitives=x,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(g){g.writeMesh&&g.writeMesh(t,m)});const C=i.meshes.push(m)-1;return n.meshes.set(r,C),C}detectMeshQuantization(t,n){if(this.extensionsUsed[Yn])return;let i;switch(n.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}n.normalized&&(i+=" normalized");const a=t.split("_",1)[0];wr[a]&&wr[a].includes(i)&&(this.extensionsUsed[Yn]=!0,this.extensionsRequired[Yn]=!0)}processCamera(t){const n=this.json;n.cameras||(n.cameras=[]);const i=t.isOrthographicCamera,a={type:i?"orthographic":"perspective"};return i?a.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:a.perspective={aspectRatio:t.aspect,yfov:An.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(a.name=t.type),n.cameras.push(a)-1}processAnimation(t,n){const i=this.json,a=this.nodeMap;i.animations||(i.animations=[]),t=bn.Utils.mergeMorphTargetTracks(t.clone(),n);const r=t.tracks,o=[],s=[];for(let v=0;v<r.length;++v){const x=r[v],_=Rn.parseTrackName(x.name);let M=Rn.findNode(n,_.nodeName);const E=Pr[_.propertyName];if(_.objectName==="bones"&&(M.isSkinnedMesh===!0?M=M.skeleton.getBoneByName(_.objectIndex):M=void 0),!M||!E){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',x.name);continue}const y=1;let T=x.values.length/x.times.length;E===Pr.morphTargetInfluences&&(T/=M.morphTargetInfluences.length);let f;x.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",T/=3):x.getInterpolation()===Oo?f="STEP":f="LINEAR",s.push({input:this.processAccessor(new Mt(x.times,y)),output:this.processAccessor(new Mt(x.values,T)),interpolation:f}),o.push({sampler:s.length-1,target:{node:a.get(M),path:E}})}const m={name:t.name||"clip_"+i.animations.length,samplers:s,channels:o};return this.serializeUserData(t,m),i.animations.push(m),i.animations.length-1}processSkin(t){const n=this.json,i=this.nodeMap,a=n.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const s=[],m=new Float32Array(r.bones.length*16),v=new Vt;for(let _=0;_<r.bones.length;++_)s.push(i.get(r.bones[_])),v.copy(r.boneInverses[_]),v.multiply(t.bindMatrix).toArray(m,_*16);return n.skins===void 0&&(n.skins=[]),n.skins.push({inverseBindMatrices:this.processAccessor(new Mt(m,16)),joints:s,skeleton:i.get(o)}),a.skin=n.skins.length-1}async processNodeAsync(t){const n=this.json,i=this.options,a=this.nodeMap;n.nodes||(n.nodes=[]);const r={};if(i.trs){const s=t.quaternion.toArray(),m=t.position.toArray(),v=t.scale.toArray();sn(s,[0,0,0,1])||(r.rotation=s),sn(m,[0,0,0])||(r.translation=m),sn(v,[1,1,1])||(r.scale=v)}else t.matrixAutoUpdate&&t.updateMatrix(),ad(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const s=await this.processMeshAsync(t);s!==null&&(r.mesh=s)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const o=n.nodes.push(r)-1;if(a.set(t,o),t.children.length>0){const s=[];for(let m=0,v=t.children.length;m<v;m++){const x=t.children[m];if(x.visible||i.onlyVisible===!1){const _=await this.processNodeAsync(x);_!==null&&s.push(_)}}s.length>0&&(r.children=s)}return await this._invokeAllAsync(function(s){s.writeNode&&s.writeNode(t,r)}),o}async processSceneAsync(t){const n=this.json,i=this.options;n.scenes||(n.scenes=[],n.scene=0);const a={};t.name!==""&&(a.name=t.name),n.scenes.push(a);const r=[];for(let o=0,s=t.children.length;o<s;o++){const m=t.children[o];if(m.visible||i.onlyVisible===!1){const v=await this.processNodeAsync(m);v!==null&&r.push(v)}}r.length>0&&(a.nodes=r),this.serializeUserData(t,a)}async processObjectsAsync(t){const n=new ai;n.name="AuxScene";for(let i=0;i<t.length;i++)n.children.push(t[i]);await this.processSceneAsync(n)}async processInputAsync(t){const n=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(a){a.beforeParse&&a.beforeParse(t)});const i=[];for(let a=0;a<t.length;a++)t[a]instanceof ai?await this.processSceneAsync(t[a]):i.push(t[a]);i.length>0&&await this.processObjectsAsync(i);for(let a=0;a<this.skins.length;++a)this.processSkin(this.skins[a]);for(let a=0;a<n.animations.length;++a)this.processAnimation(n.animations[a],t[0]);await this._invokeAllAsync(function(a){a.afterParse&&a.afterParse(t)})}async _invokeAllAsync(t){for(let n=0,i=this.plugins.length;n<i;n++)await t(this.plugins[n])}}class ld{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,n){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const i=this.writer,a=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(a.extensions=a.extensions||{},a.extensions[this.name]={lights:[]},r[this.name]=!0);const s=a.extensions[this.name].lights;s.push(o),n.extensions=n.extensions||{},n.extensions[this.name]={light:s.length-1}}}class fd{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,n){if(!t.isMeshBasicMaterial)return;const a=this.writer.extensionsUsed;n.extensions=n.extensions||{},n.extensions[this.name]={},a[this.name]=!0,n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=.9}}class ud{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class dd{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const a=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class pd{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class hd{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class md{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const i=this.writer,a=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class _d{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const a=this.writer.extensionsUsed,r={};r.ior=t.ior,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class gd{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Ju)&&!t.specularIntensityMap&&!t.specularColorMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.specularIntensityMap){const o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){const o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class vd{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.sheenRoughnessMap){const o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Ed{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,n){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.anisotropyMap){const o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Sd{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const a=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Md{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,n){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const i=this.writer,a=i.extensionsUsed,r={};if(t.bumpMap){const o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,n.extensions=n.extensions||{},n.extensions[this.name]=r,a[this.name]=!0}}class Td{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,n){if(!t.isInstancedMesh)return;const i=this.writer,a=t,r=new Float32Array(a.count*3),o=new Float32Array(a.count*4),s=new Float32Array(a.count*3),m=new Vt,v=new Ae,x=new ri,_=new Ae;for(let E=0;E<a.count;E++)a.getMatrixAt(E,m),m.decompose(v,x,_),v.toArray(r,E*3),x.toArray(o,E*4),_.toArray(s,E*3);const M={TRANSLATION:i.processAccessor(new Mt(r,3)),ROTATION:i.processAccessor(new Mt(o,4)),SCALE:i.processAccessor(new Mt(s,3))};a.instanceColor&&(M._COLOR_0=i.processAccessor(a.instanceColor)),n.extensions=n.extensions||{},n.extensions[this.name]={attributes:M},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}bn.Utils={insertKeyframe:function(e,t){const i=e.getValueSize(),a=new e.TimeBufferType(e.times.length+1),r=new e.ValueBufferType(e.values.length+i),o=e.createInterpolant(new e.ValueBufferType(i));let s;if(e.times.length===0){a[0]=t;for(let m=0;m<i;m++)r[m]=0;s=0}else if(t<e.times[0]){if(Math.abs(e.times[0]-t)<.001)return 0;a[0]=t,a.set(e.times,1),r.set(o.evaluate(t),0),r.set(e.values,i),s=0}else if(t>e.times[e.times.length-1]){if(Math.abs(e.times[e.times.length-1]-t)<.001)return e.times.length-1;a[a.length-1]=t,a.set(e.times,0),r.set(e.values,0),r.set(o.evaluate(t),e.values.length),s=a.length-1}else for(let m=0;m<e.times.length;m++){if(Math.abs(e.times[m]-t)<.001)return m;if(e.times[m]<t&&e.times[m+1]>t){a.set(e.times.slice(0,m+1),0),a[m+1]=t,a.set(e.times.slice(m+1),m+2),r.set(e.values.slice(0,(m+1)*i),0),r.set(o.evaluate(t),(m+1)*i),r.set(e.values.slice((m+1)*i),(m+2)*i),s=m+1;break}}return e.times=a,e.values=r,s},mergeMorphTargetTracks:function(e,t){const n=[],i={},a=e.tracks;for(let r=0;r<a.length;++r){let o=a[r];const s=Rn.parseTrackName(o.name),m=Rn.findNode(t,s.nodeName);if(s.propertyName!=="morphTargetInfluences"||s.propertyIndex===void 0){n.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Fo)}const v=m.morphTargetInfluences.length,x=m.morphTargetDictionary[s.propertyIndex];if(x===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+s.propertyIndex);let _;if(i[m.uuid]===void 0){_=o.clone();const E=new _.ValueBufferType(v*_.times.length);for(let y=0;y<_.times.length;y++)E[y*v+x]=_.values[y];_.name=(s.nodeName||"")+".morphTargetInfluences",_.values=E,i[m.uuid]=_,n.push(_);continue}const M=o.createInterpolant(new o.ValueBufferType(1));_=i[m.uuid];for(let E=0;E<_.times.length;E++)_.values[E*v+x]=M.evaluate(_.times[E]);for(let E=0;E<o.times.length;E++){const y=this.insertKeyframe(_,o.times[E]);_.values[y*v+x]=o.values[E]}}return e.tracks=n,e},toFloat32BufferAttribute:function(e){const t=new Mt(new Float32Array(e.count*e.itemSize),e.itemSize,!1);if(!e.normalized&&!e.isInterleavedBufferAttribute)return t.array.set(e.array),t;for(let n=0,i=e.count;n<i;n++)for(let a=0;a<e.itemSize;a++)t.setComponent(n,a,e.getComponent(n,a));return t}};function Ad({scene:e,paths:t,time:n,selected:i,onSelect:a,mode:r,reset:o,exportRef:s}){const m=Xt.useRef(null),v=Xt.useRef(n),x=Xt.useRef(a),_=Xt.useRef(new Map);v.current=n,x.current=a;const[M,E]=Xt.useState("");return Xt.useEffect(()=>{const y=m.current;let T;try{T=new Bu({antialias:!0,alpha:!1}),E("")}catch{E("3D rendering is unavailable. The scene list and numeric editors remain available.");return}T.setPixelRatio(Math.min(devicePixelRatio,2)),T.outputColorSpace=si,y.appendChild(T.domElement),T.domElement.setAttribute("aria-label","Interactive spatial scene. Select geometry with the scene list; use view buttons to change the camera.");const f=new ai;f.background=new $e("#1c2226"),f.add(new Bo(15398127,3226947,2.4));const c=new Ho(16773596,2.5);c.position.set(4,9,6),f.add(c);const L=new Go(40,40,5926256,3424839);L.position.y=-.015,f.add(L);const C=new Vo;f.add(C);const g=new Map;for(const $ of e.primitives){const Q=new Ct(ko($),new zo({color:$.color,roughness:.85,metalness:.04,side:xt,transparent:!0,opacity:$.status==="unresolved"?.35:.88}));Q.name=$.label,Q.userData={primitiveId:$.id,status:$.status,assumptions:$.assumptions},Q.position.fromArray($.position),Q.quaternion.fromArray($.quaternion),C.add(Q),g.set($.id,Q);const pe=new Wo(new Xo(Q.geometry),new Yo({color:$.id===i?9036237:5400427,transparent:!0,opacity:$.id===i?1:.55}));Q.add(pe)}for(const $ of t){for(const Q of $.segments){const pe=$.points[Q.from_index],ye=$.points[Q.to_index];if(!pe||!ye||Q.kind==="gap")continue;const Fe=new Ko(new li().setFromPoints(Q.kind==="inferred"&&Q.control_points?new qo(new Ae(...pe.position),new Ae(...Q.control_points[0]),new Ae(...Q.control_points[1]),new Ae(...ye.position)).getPoints(32):[new Ae(...pe.position),new Ae(...ye.position)]),new Zo({color:Q.kind==="jump"?14791028:7984576,dashSize:.16,gapSize:.11}));Fe.computeLineDistances(),f.add(Fe)}for(const Q of $.points){const pe=new Ct(new $o(.065,10,8),new ia({color:12119263}));pe.position.fromArray(Q.position),f.add(pe)}}const D=new jo().setFromObject(C),R=new Ae,U=new Ae;D.getCenter(R),D.getSize(U),D.isEmpty()&&(R.set(0,0,0),U.set(10,10,10));const F=Math.max(U.x,U.y,U.z,5);let p;r==="source"?p=Qo(e.camera):r==="top"?(p=new na(-F,F,F,-F,.01,1e4),p.position.copy(R).add(new Ae(0,F*2,0)),p.up.set(0,0,-1),p.lookAt(R)):(p=new $t(44,1,.01,1e4),p.position.copy(R).add(new Ae(F*.8,F*.62,F*.95)),p.lookAt(R));const d=new Gu(p,T.domElement);d.enabled=r!=="source",d.enableRotate=r!=="top",d.target.copy(R),d.enableDamping=!0;const b=`${e.id}:${r}:${o}`,B=_.current.get(b);B&&r!=="source"&&(p.position.copy(B.position),d.target.copy(B.target)),r!=="source"&&d.update();const X=()=>{const $=y.clientWidth,Q=y.clientHeight;if(T.setSize($,Q),r==="source"){const pe=e.camera.width/e.camera.height,ye=Math.min($,Q*pe),Fe=ye/pe;T.setViewport(($-ye)/2,(Q-Fe)/2,ye,Fe)}else p instanceof $t?(p.aspect=$/Q,p.updateProjectionMatrix()):(p.left=-F*$/Q/1.5,p.right=F*$/Q/1.5,p.top=F/1.5,p.bottom=-F/1.5,p.updateProjectionMatrix())},Y=new ResizeObserver(X);Y.observe(y),X();const W=new Jo;let k=null;const ne=$=>{k={x:$.clientX,y:$.clientY}},G=$=>{if(!k||Math.hypot($.clientX-k.x,$.clientY-k.y)>5)return;const Q=T.domElement.getBoundingClientRect();let pe=$.clientX-Q.left,ye=$.clientY-Q.top,Fe=Q.width,Ye=Q.height;if(r==="source"){const z=e.camera.width/e.camera.height,q=Math.min(Fe,Ye*z),fe=q/z;pe-=(Fe-q)/2,ye-=(Ye-fe)/2,Fe=q,Ye=fe}W.setFromCamera(new Ze(pe/Fe*2-1,-ye/Ye*2+1),p);const ke=W.intersectObjects([...g.values()],!1)[0];ke&&x.current(ke.object.userData.primitiveId)};return T.domElement.addEventListener("pointerdown",ne),T.domElement.addEventListener("pointerup",G),s.current=async()=>{const $=await new bn().parseAsync(C,{binary:!0});es($,"tweens-provisional-scene.glb","model/gltf-binary")},T.setAnimationLoop(()=>{for(const $ of t){const Q=g.get($.primitive_id);if(!Q)continue;const pe=ts($,v.current);Q.visible=!!pe,pe&&Q.position.fromArray(pe)}r!=="source"&&d.update(),T.render(f,p)}),()=>{r!=="source"&&_.current.set(b,{position:p.position.clone(),target:d.target.clone()}),s.current=null,T.setAnimationLoop(null),Y.disconnect(),d.dispose(),T.domElement.removeEventListener("pointerdown",ne),T.domElement.removeEventListener("pointerup",G),f.traverse($=>{var ye;const Q=$;(ye=Q.geometry)==null||ye.dispose(),(Array.isArray(Q.material)?Q.material:[Q.material]).forEach(Fe=>Fe==null?void 0:Fe.dispose())}),T.dispose(),T.domElement.remove()}},[e,t,i,r,o,s]),tr.jsx("div",{className:"scene-canvas",ref:m,children:M&&tr.jsx("p",{className:"canvas-error",children:M})})}export{Ad as default};
