/*! For license information please see 964.js.LICENSE.txt */
(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[964],{48786:(t,e,i)=>{"use strict";i.d(e,{c:()=>f});var s=i(81396),n=i(54702);class a extends s.Mesh{constructor(t,e){super(),this.type="Line",this.part=n.B.line,this.computeLineDistances=(()=>{const t=new s.Vector3,e=new s.Vector3;return()=>{const i=this.geometry,n=i.attributes.instanceStart,a=i.attributes.instanceEnd,o=new Float32Array(2*n.data.count);for(let i=0,s=0,r=n.data.count;i<r;i++,s+=2)t.fromBufferAttribute(n,i),e.fromBufferAttribute(a,i),o[s]=0===s?0:o[s-1],o[s+1]=o[s]+t.distanceTo(e);return this.instanceDistanceBuffer?(this.instanceDistanceBuffer.set(o,0),this.instanceDistanceBuffer.needsUpdate=!0):(this.instanceDistanceBuffer=new s.InstancedInterleavedBuffer(o,2,1),i.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(this.instanceDistanceBuffer,1,0,!1)),i.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(this.instanceDistanceBuffer,1,1,!1))),this}})(),this.geometry=t,this.material=e}copy(t){throw Error("not implemented")}}class o extends s.InstancedBufferGeometry{constructor(){super(),this.type="LineSegmentsGeometry";this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.Float32BufferAttribute([0,1,.5,1,0,.5,.5,.5,0,0,.5,0,0,1,.5,1],2))}applyMatrix(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==e&&(e.applyMatrix4(t),i.applyMatrix4(t),this.positionBuffer.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(t){let e;return t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t)),e&&(this.positionBuffer?(this.positionBuffer.set(e,0),this.positionBuffer.needsUpdate=!0):(this.positionBuffer=new s.InstancedInterleavedBuffer(e,6,1),this.setAttribute("instanceStart",new s.InterleavedBufferAttribute(this.positionBuffer,3,0,!1)),this.setAttribute("instanceEnd",new s.InterleavedBufferAttribute(this.positionBuffer,3,3,!1))),this.computeBoundingBox(),this.computeBoundingSphere()),this}setColors(t){let e;return t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t)),e&&(this.colorBuffer?(this.colorBuffer.set(e,0),this.colorBuffer.needsUpdate=!0):(this.colorBuffer=new s.InstancedInterleavedBuffer(e,6,1),this.setAttribute("instanceColorStart",new s.InterleavedBufferAttribute(this.colorBuffer,3,0,!1)),this.setAttribute("instanceColorEnd",new s.InterleavedBufferAttribute(this.colorBuffer,3,3,!1)))),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new s.WireframeGeometry(t.geometry)),this}fromLineSegements(t){const e=t.geometry;return e instanceof s.BufferGeometry&&this.setPositions(e.position.array),this}computeBoundingBox(){this.boundingBox||(this.boundingBox=new s.Box3),this.box||(this.box=new s.Box3);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;void 0!==t&&void 0!==e&&(this.boundingBox.setFromBufferAttribute(t),this.box.setFromBufferAttribute(e),this.boundingBox.union(this.box))}computeBoundingSphere(){this.tempVector||(this.tempVector=new s.Vector3),this.boundingSphere||(this.boundingSphere=new s.Sphere),this.boundingBox||this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(void 0!==t&&void 0!==e){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let n=0,a=t.count;n<a;n++)this.tempVector.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(this.tempVector)),this.tempVector.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(this.tempVector));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}}class r extends o{constructor(){super(),this.type="LineGeometry",this.isLineGeometry=!0}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return o.prototype.setPositions.call(this,i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return o.prototype.setColors.call(this,i),this}fromLine(t){throw new Error("LineGeometry.fromLine not converted to TS yet")}copy(t){return this}}var h=i(67944),c=i(66990);class d extends s.Mesh{constructor(t,e,i=c.V9.endpointSelected,s=c.V9.endpointDefault){super(t,e),this.selectedSize=i,this.defaultSize=s,this.currentSize=c.V9.endpointDefault,this.currentSize=this.defaultSize,this.scale.set(c.Ey,c.Ey,c.Ey)}dispose(){this.material.dispose(),this.geometry.dispose()}billboardScale(t,e,i){const s=(0,h.mY)(e,t,this.position,i,.5),n=Math.max(Math.min(1/s*this.currentSize,c.g4),c.Ey);this.scale.set(n,n,n)}updateSelected(t){this.currentSize=t?this.selectedSize:this.defaultSize}}var l=i(12529),u=i(56512);class f{constructor(t,e,i,o,c){this.lineMaterial=i,this.options=o,this.endpointMaterial=c,this.startPosition=new s.Vector3,this.endPosition=new s.Vector3,this.endpoints=!1,this.isVisible=!0,this.meshToLinePartMap={},this.opacity=t=>(this.endpointMaterial&&this.endpointMaterial.setOpacity(t),this.lineMesh.material.setOpacity(t),this),this.updatePositions=(t,e)=>(this.startPosition.copy(t),this.endPosition.copy(e),this.options.beforeUpdatePositions&&(t=this.options.beforeUpdatePositions(t),e=this.options.beforeUpdatePositions(e)),this.lineMesh.geometry.setPositions([t.x,t.y,t.z,e.x,e.y,e.z]),this.endpoints&&(this.endMesh.position.copy(e),this.startMesh.position.copy(t),this.lastBillboardOptions&&this.updateBillboard(this.lastBillboardOptions)),this.lineMesh.material.dashed&&this.lineMesh.computeLineDistances(),this),this.updateBillboard=t=>{if(this.endpoints&&(t.rotation&&(this.endMesh.quaternion.copy(t.rotation),this.startMesh.quaternion.copy(t.rotation)),t.position&&t.projection&&!(0,h.s1)(t.projection))){const e=this.lineMesh.material.resolution.y;this.endMesh.billboardScale(t.position,t.projection,e),this.startMesh.billboardScale(t.position,t.projection,e)}return this.lastBillboardOptions=t,this},this.updateSelected=t=>(this.lineMesh.material.updateSelected(t),this.endpoints&&(this.endMesh.material.updateHovered(t),this.endMesh.updateSelected(t),this.startMesh.updateSelected(t)),this),this.setRenderLayer=t=>{this.children.forEach((e=>e.layers.mask=t.mask))},this.setRenderOrder=t=>{this.children.forEach((e=>e.renderOrder=t))},this.updateResolution=(t,e)=>(this.lineMesh.material.resolution.set(t,e),this),this.hide=()=>{this.options.onHide&&this.options.onHide(),this.isVisible=!1},this.show=()=>{this.options.onShow&&this.options.onShow(),this.isVisible=!0},this.toggle=t=>(t?this.show():this.hide(),this),this.dispose=()=>{this.options.onHide&&this.options.onHide(),this.lineMesh.geometry.dispose(),this.lineMesh.material.dispose(),this.endMesh&&this.endMesh.dispose(),this.startMesh&&this.startMesh.dispose(),this.meshToLinePartMap={}},this.overrideLineMaterial=t=>{this.lineMesh.material=t},this.restoreLineMaterial=()=>{this.lineMesh.material=this.lineMaterial},this.startPosition.copy(t),this.endPosition.copy(e),this.lineMesh=new a(new r,i),this.lineMesh.matrixAutoUpdate=!1,this.lineMesh.part=n.B.line,this.lineMesh.renderOrder=l.z.lines,this.meshToLinePartMap[n.B.line]=this.lineMesh,c&&(this.endpoints=!0,this.endMesh=new d((0,u.fc)(),c),this.endMesh.part=n.B.end,this.endMesh.renderOrder=l.z.endpoints,this.meshToLinePartMap[n.B.end]=this.endMesh,this.startMesh=new d((0,u.fc)(),c),this.startMesh.part=n.B.start,this.startMesh.renderOrder=l.z.endpoints,this.meshToLinePartMap[n.B.start]=this.startMesh),this.updatePositions(this.startPosition,this.endPosition),this.updateSelected(!1)}get currentOpacity(){return this.lineMesh.material.getOpacity()}getMesh(t){return this.meshToLinePartMap[t]}get children(){return Object.keys(this.meshToLinePartMap).map((t=>this.meshToLinePartMap[t]))}get visible(){return this.isVisible}}},54702:(t,e,i)=>{"use strict";var s;i.d(e,{B:()=>s}),function(t){t.line="line",t.start="start",t.end="end"}(s||(s={}))},85255:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>D,makeEndpointMaterial:()=>T,makeLineMaterial:()=>F});var s=i(97542),n=i(69170),a=i(81396),o=i(48786),r=i(87926);var h;!function(t){t[t.LINE_DEFAULT=0]="LINE_DEFAULT",t[t.LINE_HOVER=1]="LINE_HOVER",t[t.END_DEFAULT=2]="END_DEFAULT",t[t.END_HOVER=3]="END_HOVER"}(h||(h={}));class c{constructor(){const t=(0,r.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA4ZNBI+fLwLSGYE5aqgIgAAAAlUlEQVQoz2MAAy91mYNFSxjgwEjmDBAcVIbxPWPOgMHRKRA+c88ZKDhhABbYdgYOssEKchACx0BKPM4ggRagwBxkgZNAHTHIAkcNGJjOoAAFBkdUARGGNagCpxh0UAUOMdSgChxnkEEVOMhwBg1gCGBowTAUw1oMh2E4HcNzGN5HDyCMIMQIZPRowIgozKjEjGyM5AAACSg5ooJJElsAAAAASUVORK5CYII="),e=(0,r.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUAAAD/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/AVL/////+fr/5er/0tv/ytX/iaH/dJL/cpA84uD/AAAAC3RSTlMA45NBI8vAtIZgTrS8MGcAAAC5SURBVDjLhVPtDoQgDBuICPKpvP+7Xs4t6LlL2j9GWtYCG91w0XqTkvE2OtJYrEkTxi4v2gWhpyS4n+1bUtgeRfY1/cG6z/3Ma8Ui/rP+6LWU2sd04RxBfs+WBe2UpXAZSP4jP3DIWb4m9ua1whI5w/XzC+xiHEWWtreg8XoUh5EVhnj469u1oF+EJ45QtaByCGKrogWFGSiAFjAkPCa8KHjV6LHgc6OGgS2Hmha2PR4cPHp4eOH4fwAGdiPh+RS0GAAAAABJRU5ErkJggg=="),i=(0,r.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAIBAMAAABqq+CcAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy4AzqjrmZgAAABRJREFUCNdjAAMjERcXR2Uwc4AEAIn2CZHn9cAcAAAAAElFTkSuQmCC"),s=(0,r.p)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAIBAMAAABqq+CcAAAAGFBMVEUAAAD/AVL/AVL/AVL/////AVL/r7//OWiicYg+AAAABHRSTlMAy4AzqjrmZgAAABlJREFUCNdjYGBgVgwtcwGC9FAhAyB3YAQAVg4X6a0jaXAAAAAASUVORK5CYII=");this.textures={[h.LINE_DEFAULT]:i,[h.LINE_HOVER]:s,[h.END_DEFAULT]:t,[h.END_HOVER]:e},i.minFilter=a.LinearFilter,s.minFilter=a.LinearFilter,t.minFilter=a.LinearFilter,e.minFilter=a.LinearFilter}get(t){return this.textures[t]}dispose(){for(const t in this.textures){const e=Number(t);this.get(e).dispose()}}}var d=i(11677),l=i(44724),u=i.n(l),f=i(7188),p=i.n(f),m=i(52059),g=i.n(m),A=i(75215),v=i.n(A),S=i(56449),x=i.n(S);const y={endpoint:{uniforms:{opacity:{type:"f",value:1},color:{type:"c",value:new a.Color},bg:{type:"t",value:null}},vertexShader:d.Z.basicTextured.vertexShader,fragmentShader:u()},line:{uniforms:a.UniformsUtils.merge([a.UniformsLib.common,a.UniformsLib.fog,{linewidth:{value:4},resolution:{value:new a.Vector2(0,0)},dashScale:{value:1},dashSize:{value:.025},gapSize:{value:.05},mask:{value:null}}]),vertexShader:p(),fragmentShader:g()},screenline:{uniforms:{lineWidth:{value:1},screenSize:{value:new a.Vector2(0,0)},dashed:{value:0},dashSize:{value:1},gapSize:{value:1},antialiasWidth:{value:1},color:{value:new a.Color(1,0,0)},opacity:{value:1},start:{value:new a.Vector3},end:{value:new a.Vector3}},vertexShader:v(),fragmentShader:x()}};class M extends a.RawShaderMaterial{constructor(t,e,i){const s=a.UniformsUtils.clone(y.endpoint.uniforms);super({fragmentShader:y.endpoint.fragmentShader,vertexShader:y.endpoint.vertexShader,uniforms:s,name:"LineEndpointMaterial",transparent:!0,depthWrite:!1,depthTest:!0}),this.color=t,this.defaultTex=e,this.hoverTex=i,this.uniforms.bg.value=e,this.uniforms.color.value.copy(this.color)}clone(){return new M(this.color,this.defaultTex,this.hoverTex).copy(this)}setOpacity(t){this.uniforms&&t!==this.uniforms.opacity.value&&(this.uniforms.opacity.value=t)}getOpacity(){return this.uniforms.opacity.value}updateHovered(t){const e=t?this.hoverTex:this.defaultTex;this.uniforms.bg.value!==e&&(this.uniforms.bg.value=e)}}var w=i(66990);class b extends a.RawShaderMaterial{constructor(t,e,i,s=w.V9.lineSelected){super(),this.parameters=t,this.hoverTexture=e,this.defaultTexture=i,this.selectedWidth=s,this.type="LineMaterial",this.isLineMaterial=!0,this.defaultWidth=w.V9.lineDefault,this.setValues({uniforms:a.UniformsUtils.clone(y.line.uniforms),vertexShader:y.line.vertexShader,fragmentShader:y.line.fragmentShader,transparent:!0,depthWrite:!1,depthTest:!0,opacity:1}),this.setValues(t),i&&(this.mask=i),this.defaultWidth=t&&t.linewidth?t.linewidth:w.V9.lineDefault}updateSelected(t){const e=t?this.hoverTexture:this.defaultTexture;e&&this.mask!==e&&(this.mask=e,t?this.setLinewidth(this.selectedWidth):this.setLinewidth(this.defaultWidth))}setLinewidth(t){this.uniforms.linewidth||(this.uniforms=a.UniformsUtils.clone(y.line.uniforms)),this.getLinewidth()!==t&&(this.uniforms.linewidth.value=t)}getLinewidth(){return this.uniforms.linewidth.value}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}getOpacity(){return this.uniforms.opacity.value}setOpacity(t){this.uniforms||(this.uniforms=a.UniformsUtils.clone(y.line.uniforms)),this.getOpacity()!==t&&(this.uniforms.opacity.value=t)}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}set dashed(t){t?this.defines.USE_DASH="":delete this.defines.USE_DASH,this.needsUpdate=!0}get dashed(){return"USE_DASH"in this.defines}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value=t}set mask(t){this.uniforms.mask.value!==t&&(t?this.defines.USE_MASK="":delete this.defines.USE_MASK,this.uniforms.mask.value=t,this.needsUpdate=!0)}get mask(){return this.uniforms.mask.value}copy(t){return a.RawShaderMaterial.prototype.copy.call(this,t),this.parameters=t.parameters,this.color.copy(t.color),this.defaultWidth=t.defaultWidth,this.setLinewidth(t.getLinewidth()),this.resolution.copy(t.resolution),this.defaultTexture=t.defaultTexture,this.hoverTexture=t.hoverTexture,this.mask=t.mask,this.setOpacity(t.getOpacity()),this.dashed=t.dashed,this.dashScale=t.dashScale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}var E=i(9037),B=i(29537),C=i(5332);let k=null;function L(){return k||(k=new c),k}class D extends s.Y{constructor(){super(...arguments),this.name="lines"}async init(t,e){const i=await e.getModuleBySymbol(n.y.WEBGL_RENDERER);this.scene=i.getScene(),this.canvas=await e.market.waitForData(C.W),this.cameraData=await e.market.waitForData(E.M),this.bindings.push(this.canvas.onChanged(this.onCanvasChange.bind(this))),this.cameraPosition=new a.Vector3,this.segments=[]}onUpdate(){this.cameraPosition.copy(this.cameraData.pose.position)}dispose(t){super.dispose(t),this.segments.forEach((t=>t.dispose()))}makeLine(t,e,i,s,n=(()=>!1)){const a=n()?w.iV.OFFSET_TOWARDS_CAMERA:0,r=n()?t=>this.cameraPosition.clone().sub(t).setLength(a).add(t):t=>t,h=new o.c(t,e,i,{beforeUpdatePositions:r,onShow:()=>h.children.forEach((t=>this.scene.addChild(B.a.Root,t))),onHide:()=>h.children.forEach((t=>this.scene.removeChild(B.a.Root,t)))},s);return h.updateResolution(this.canvas.width,this.canvas.height),h.opacity(1),h.show(),h.updatePositions(t,e),this.segments.push(h),h}makeLineMaterial(t,e,i={},s,n){return F(t,e,i,s,n)}makeEndpointMaterial(t,e,i){return T(t,e,i)}onCanvasChange(t){for(const e of this.segments)e.updateResolution(t.width,t.height)}}function T(t,e,i){const s=i||L().get(h.END_HOVER),n=e||L().get(h.END_DEFAULT);return new M(new a.Color(t),n,s)}function F(t,e,i={},s,n){const o=n||L().get(h.LINE_HOVER),r=s||L().get(h.LINE_DEFAULT),c=new a.Vector2(window.innerWidth,window.innerHeight);return e?new b(Object.assign({color:new a.Color(t),resolution:c},i),o,r):new b(Object.assign({color:new a.Color(t)},i))}},66990:(t,e,i)=>{"use strict";i.d(e,{Ey:()=>a,V9:()=>n,g4:()=>o,iV:()=>s});const s={FADE_DURATION:300,LABEL_HIDDEN_OPACITY:.15,DEPTH_WRITE_THRESHOD:.15,ALIGN_LABELS:!1,LABEL_SIZING:.14,LABEL_NDC_SCALEFACTOR:.5,LABEL_ASPECT_SCALEFACTOR:.035,OFFSET_TOWARDS_CAMERA:.25,HIDE_LABELS:!1},n={dottedLineDefault:2,lineDefault:6,lineSelected:6,endpointDefault:2.5,endpointSelected:3.75},a=.01,o=5},94046:(t,e,i)=>{"use strict";i.d(e,{i:()=>n});var s=i(81396);class n extends s.Mesh{}},81248:(t,e,i)=>{"use strict";i.d(e,{Bv:()=>u,Dv:()=>h,TE:()=>c,l0:()=>l,o7:()=>d});var s=i(81396);const n=-1,a=10,o=5,r=-5,h=(t,e=n)=>i=>t.distanceToSquared(i.position)*e,c=(t,e=n)=>i=>t.distanceTo(i.position)*e,d=(t,e,i=a)=>{const n=new s.Vector3;return s=>n.copy(s.position).sub(t).normalize().dot(e)*i},l=(t,e=n)=>i=>t.distanceToSquared(i.floorPosition)*e,u=(t,e=o,i=r)=>s=>t===s.floorId?e:i},67557:(t,e,i)=>{"use strict";i.d(e,{Tz:()=>s,Ye:()=>b,Qi:()=>E});var s,n=i(97998);!function(t){t[t.NONE=0]="NONE",t[t.NUMERIC=1]="NUMERIC",t[t.ASCII=2]="ASCII"}(s||(s={}));const a={pages:[],chars:[],info:{face:"Loading",size:0,bold:0,italic:0,charset:[],unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[0,0],os2version:1},common:{lineHeight:0,base:0,scaleW:1,scaleH:1,pages:0,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},kernings:[]};var o=i(59279),r=i(95912);const h=(()=>{let t=null;return function(){return t||(t=Promise.all([i.e(764),i.e(422),i.e(143)]).then(i.bind(i,44422)).then((t=>t.load))),t}})();var c=i(60668),d=i(81396);const l=function(){const t=document.createElement("a");return document.body.appendChild(t),t.style.display="none",(e,i)=>{const s=e.toDataURL();t.href=s,t.download=i,t.click()}}(),u=(t,e)=>{const i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),i.setAttribute("download",e),i.click()};var f=i(75287);class p extends f.T{constructor(t){super(),this.packer=t,this.fontData=a,this.textures=[]}update(t,e){this.fontData=e,this.textures.forEach((t=>t.dispose())),this.textures.length=0,this.textures.push(...t),this.commit()}addCharsIfNeeded(t){this.packer.addChars(t)}}const m=new n.Z("font-packer"),g=.2,A="1"===(0,o.eY)("exportfont","0"),v=!0,S=!0,x={log:!1,marks:{rebuild:"rebuild",kern:"kerning",metrics:"metrics",pack:"pack",texture:"texture",bmfont:"load-bmfont"}};function y(t){return Math.log(t)/Math.log(2)%1==0}class M{constructor(t,e){if(this.needsRebuild=!1,this._atlas=new p(this),this._codepointToTexCoord={},this._loading=!1,this._loaded=!1,this._addedChars=[],this.charSet=new Set,this.kerningsMap={},this.measureMap={},this.metricsMap={},this.scale=1,this.updateCanvas=(t,e)=>{try{this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.height=t,this.canvas.width=e;const i=this.canvas&&this.canvas.getContext("2d");if(!i)throw Error("Unable to create canvas context for font-packer");this.ctx=i,this.ctx.fillStyle="white",this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left",this.ctx.font=this.contextFontFace}catch(t){m.error("Failed to create canvas rendering context",t)}},this.throttledRebuild=(0,r.P)((()=>{setTimeout((()=>this.rebuild()),0)}),1500),this.options=t,e&&(this.font=e),this.updateCanvas(this.options.height,this.options.width),this.packer=new c.cC(this.options.width,this.options.height,2*this.options.texturePadding),this.options.defaultCharset){(function(t=!1){const e=new Set(Array.from("m0123456789_-+'\"` \t")),i=[];t&&i.push([32,127]);for(const t of i)for(let i=t[0];i<t[1];i++)e.add(String.fromCharCode(i));return e})(this.options.defaultCharset===s.ASCII).forEach((t=>this.charSet.add(t)))}this.options.initialChars&&this.options.initialChars.forEach((t=>this.charSet.add(t))),this.options.squareSize&&!y(this.options.squareSize)&&m.error("font config squareSize must be a power of two")}get loaded(){return!this._loading&&this._loaded}async loadFont(){let t;x.log&&performance.mark(x.marks.bmfont);const e=`${this.options.fontFamily} for BitmapFontPacker`;if(!this.font){this._loading=!0;const i=await h(),s=await i(this.options.fontPath);this.font=s,t=new FontFace(e,`url("${this.options.fontPath}") format("woff")`,{style:`${this.options.fontStyle}`,weight:`${this.options.fontWeight}`}),await t.load();t.loaded;document.fonts.add(t)}return x.log&&performance.measure(x.marks.bmfont,x.marks.bmfont),this.scale=this.options.fontSize/this.font.unitsPerEm,this.contextFontFace=`${this.options.fontWeight} ${this.options.fontSize}px "${e}"`,this.ctx.font=this.contextFontFace,S&&m.debug({contextFontFace:this.contextFontFace,bmfont:this.font,charset:this.charSet}),this._loading=!1,this.fontFilename=`${this.options.fontFamily.toLowerCase()}-${this.options.fontWeight}-${this.options.fontSize}`+(this.options.outline?"-outline-"+this.options.outlineWidth:""),this.needsRebuild=!0,this.throttledRebuild(),{fontPath:this.options.fontPath,font:this.font,packer:this}}addChars(t){const e=this.charSet.size;return Array.from(t).forEach((t=>{this.charSet.has(t)||this._addedChars.push(t),this.charSet.add(t)})),e!==this.charSet.size&&this.loaded&&(this.needsRebuild=!0,this.throttledRebuild()),this.needsRebuild}atlas(){return this._atlas}codepointMap(){return this._codepointToTexCoord}rebuild(){if(!this.font)return;if(this.loaded&&this._addedChars.length<1)return void(this.needsRebuild=!1);v&&(m.debug(`Added ${this._addedChars.length} glyphs: \n${this._addedChars}`),this._addedChars.length=0),performance.mark(x.marks.rebuild),x.log&&performance.mark(x.marks.metrics);const t=this.getAllGlyphMetrics();x.log&&performance.measure(x.marks.metrics,x.marks.metrics),x.log&&performance.mark(x.marks.pack);const e=this.pack(t);x.log&&performance.measure(x.marks.pack,x.marks.pack),x.log&&performance.mark(x.marks.texture);const{chars:i,textures:s,codePointToTexCoord:n}=this.assembleTexture(e);x.log&&performance.measure(x.marks.texture,x.marks.texture),x.log&&performance.mark(x.marks.kern);const a=this.getKerningPairs();x.log&&performance.measure(x.marks.kern,x.marks.kern);const o=this.assembleFont(i,a,s);performance.measure(x.marks.rebuild,x.marks.rebuild),this._codepointToTexCoord=n,this._loaded=!0,this._atlas.update(s,o);const r=`Rebuilt atlas for ${this.charSet.size} chars with ${o.kernings.length} kerning pairs`;x.log?(m.debug(r,performance.getEntriesByName(x.marks.rebuild,"measure")[0],performance.getEntriesByType("measure").map((t=>({name:t.name,duration:t.duration}))),this.options),Object.values(x.marks).forEach((t=>{performance.clearMarks(t),performance.clearMeasures(t)}))):(m.debug(r,performance.getEntriesByName(x.marks.rebuild,"measure")[0]),performance.clearMarks(x.marks.rebuild),performance.clearMeasures(x.marks.rebuild))}pack(t){return this.packer.bins.length=0,this.packer.addArray(t),this.packer.bins.reverse()}assembleTexture(t){const e=[],i={},s=this.options.squareSize,n=t.map(((t,n)=>{const a=t.rects.length,{squareSize:o}=this.options,r=function(t){if(y(t))return t;let e=1;for(;e<t;)e<<=1;return e}(Math.ceil(Math.sqrt(a))),h=r*o,c=h,d=1/r;return s&&(h===this.canvas.width&&c===this.canvas.height||this.updateCanvas(c,h)),this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.options.transparent&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),t.rects.forEach(((t,a)=>{const l=t.data.charData;let u=t.x-l.xoffset,f=t.y+l.height+l.ymin-this.options.texturePadding;if(s){const t=a%r,e=Math.floor(a/r),s=t*o,p=e*o;u=s+o/2,f=p+o-(o-this.options.fontSize)/2,57344===l.id&&(f+=5),i[l.id]={x:s,y:p,u:s/h,v:1-(p+o)/c,page:n,uvScale:d},this.ctx.textAlign="center"}this.options.outline&&this.options.outlineWidth>0?function(t,e,i,s,n){const a=t.strokeStyle,o=t.fillStyle,r=t.lineJoin,h=t.miterLimit;t.lineJoin="miter",t.miterLimit=2,t.beginPath(),t.strokeStyle="black",t.lineWidth=n,t.strokeText(e,i,s),t.beginPath(),t.fillStyle="white",t.fillText(e,i,s),t.strokeStyle=a,t.fillStyle=o,t.lineJoin=r,t.miterLimit=h}(this.ctx,t.data.charData.char,u,f,this.options.outlineWidth):this.ctx.fillText(t.data.charData.char,u,f),l.x=t.x,l.y=t.y,l.page=n,e.push(t.data.charData)})),A&&l(this.ctx.canvas,`${this.fontFilename}_${n}.png`),this.makeCanvasTexture(n,!1)}));return{chars:e,textures:n,codePointToTexCoord:i}}getKerningPairs(){const t=[],e=[...this.charSet.values()].map((t=>this.font.charToGlyphIndex(t))).filter((t=>t>0));for(const i of e)for(const s of e){const e=`${i},${s}`;let n=this.kerningsMap[e];if(!n){n={first:i,second:s,amount:this.font.getKerningValue(i,s)*this.scale},this.kerningsMap[e]=n}n&&0!==n.amount&&t.push(n)}return t}assembleFont(t,e,i){const s=this.font.tables.os2,n=this.font.tables.name.fullName,a=n[Object.getOwnPropertyNames(n)[0]],o={pages:i.map(((t,e)=>`${this.fontFilename}_${e}.png`)),chars:t,info:{face:a,size:this.options.fontSize,bold:0,italic:0,charset:[...this.charSet.values()],unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[this.options.texturePadding,this.options.texturePadding],os2version:s.version},common:{lineHeight:(s.sTypoAscender-s.sTypoDescender+s.sTypoLineGap)*this.scale,base:this.font.ascender*this.scale,scaleW:this.options.width,scaleH:this.options.height,pages:this.packer.bins.length,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},kernings:e};return S&&m.debug({bmFontOutput:o,kerningPairCount:e.length}),A&&(u(JSON.stringify(o),`${this.fontFilename}.json`),u(JSON.stringify(this.options,void 0,2),`${this.fontFilename}-pack-options.json`)),o}getMetrics(t){const e=2*this.options.texturePadding,i=this.scale;let s,n,a,o,r,h;const c=this.font.charToGlyph(t),d=0!==c.index;if(d){let e=this.measureMap[t];e||(e=c.getMetrics(),this.measureMap[t]=e),s=(e.xMax-e.xMin)*i,n=(e.yMax-e.yMin)*i,a=e.xMin*i,o=e.yMin*i,r=e.yMax*i,h=(c.advanceWidth||0)*i}else{const e=this.measureChar(t);s=e.width,n=e.height,a=e.xMin,o=e.yMin,r=e.yMax,h=s}return{char:t,width:s+e,height:n+e,xmin:a,ymin:o,ymax:r,xadvance:h+(this.options.outline?this.options.outlineWidth*g:0),supported:d}}measureText(t){if(!this.loaded)return;let e=0;for(const i of Array.from(t)){const{width:t}=this.measureChar(i);e+=t}return e}measureChar(t){let e=this.metricsMap[t];e||(e=this.ctx.measureText(t),this.metricsMap[t]=e);const i=e.actualBoundingBoxLeft+e.actualBoundingBoxRight;return{width:e.width||i,height:e.actualBoundingBoxAscent+e.actualBoundingBoxDescent,xMin:e.actualBoundingBoxLeft,xMax:e.actualBoundingBoxRight,yMin:-e.actualBoundingBoxDescent,yMax:e.actualBoundingBoxAscent}}getAllGlyphMetrics(){const t=[],e=this.font.ascender*this.scale,i=this.options.texturePadding;for(const s of this.charSet.values()){const n=this.getMetrics(s),a={data:{charData:{char:s,id:s.charCodeAt(0),width:n.width,height:n.height,xoffset:n.xmin-i,yoffset:e-n.ymax-i,xadvance:n.xadvance,chnl:15,ymin:n.ymin}},width:n.width,height:n.height};t.push(a)}return t}makeCanvasTexture(t,e){if(e){const t=new Uint8Array(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data),e=new d.DataTexture(t,this.canvas.width,this.canvas.height,d.RGBAFormat);return e.needsUpdate=!0,e.flipY=!0,e}const i=new d.Texture(this.ctx.canvas);return i.name=`${this.ctx.font}_${t}`,i.format=d.RGBAFormat,i.needsUpdate=!0,i}}const w=new n.Z("FontManager"),b={fontPath:"fonts/roboto-700.woff",fontWeight:700,fontFamily:"Roboto",fontStyle:"normal",fontSize:60,width:2048,height:2048,transparent:!0,defaultCharset:s.ASCII,outline:!1,outlineWidth:4,texturePadding:6};class E{constructor(){this.defaultFontOptions=b,this.packerMap=new Map,this.optionsMap=new Map,this.parsedFontMap=new Map}static get instance(){return E._instance||(E._instance=new E),E._instance}getFontId(t=this.defaultFontOptions){const e=Object.assign(Object.assign({},this.defaultFontOptions),t),i=JSON.stringify(e);return this.optionsMap.set(i,e),i}getPacker(t){let e=this.packerMap.get(t);if(!e){const i=this.optionsMap.get(t)||JSON.parse(t),s=this.parsedFontMap.get(i.fontPath);e=new M(i,s),this.packerMap.set(t,e),e.loadFont().then((e=>{w.debug("font loaded",t,e.fontPath),this.parsedFontMap.set(e.fontPath,e.font)}))}return e}getFont(t){return this.getPacker(t).atlas()}getFontAndCodepoints(t){const e=this.getPacker(t);return{font:e.atlas(),codepointMap:e.codepointMap()}}measureText(t,e){const i=this.packerMap.get(t);if(i)return i.measureText(e)}}},44724:t=>{t.exports="precision highp float;precision highp int;uniform mat4 viewMatrix;uniform vec3 cameraPosition;uniform float opacity;uniform vec3 color;uniform sampler2D bg;varying vec2 vUv;void main(){vec4 bgColor=texture2D(bg,vUv);gl_FragColor=vec4(bgColor.rgb,bgColor.a*opacity);}"},52059:t=>{t.exports="precision highp float;precision highp int;uniform mat4 viewMatrix;uniform vec3 cameraPosition;uniform vec3 diffuse;uniform float opacity;uniform sampler2D mask;\n#ifdef USE_DASH\nuniform float dashSize;uniform float gapSize;\n#endif\nvarying float vLineDistance;\n#include <common>\nvarying vec2 vUv;void main(){\n#ifdef USE_DASH\nif(vUv.y<-1.||vUv.y>1.)discard;if(mod(vLineDistance,dashSize+gapSize)>dashSize)discard;\n#endif\n#ifdef USE_MASK\nvec2 modUv=vec2(vUv);modUv*=2.;vec4 texelColor=texture2D(mask,modUv);gl_FragColor=vec4(texelColor.rgb,min(texelColor.a,opacity));\n#else\ngl_FragColor=vec4(diffuse,opacity);\n#endif\n}"},7188:t=>{t.exports="precision highp float;precision highp int;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;\n#include <common>\nuniform float linewidth;uniform vec2 resolution;attribute vec3 instanceStart;attribute vec3 instanceEnd;attribute vec3 instanceColorStart;attribute vec3 instanceColorEnd;varying vec2 vUv;\n#ifdef USE_DASH\nuniform float dashScale;attribute float instanceDistanceStart;attribute float instanceDistanceEnd;varying float vLineDistance;\n#endif\nvoid trimSegment(const in vec4 start,inout vec4 end){float a=projectionMatrix[2][2];float b=projectionMatrix[3][2];float nearEstimate=-0.5*b/a;float alpha=(nearEstimate-start.z)/(end.z-start.z);end.xyz=mix(start.xyz,end.xyz,alpha);}void main(){\n#ifdef USE_COLOR\nvColor.xyz=(position.y<0.5)?instanceColorStart:instanceColorEnd;\n#endif\n#ifdef USE_DASH\nvLineDistance=(position.y<0.5)?dashScale*instanceDistanceStart:dashScale*instanceDistanceEnd;\n#endif\nfloat aspect=resolution.x/resolution.y;vUv=uv;vec4 start=modelViewMatrix*vec4(instanceStart,1.);vec4 end=modelViewMatrix*vec4(instanceEnd,1.);bool perspective=(projectionMatrix[2][3]==-1.);if(perspective){if(start.z<0.&&end.z>=0.){trimSegment(start,end);}else if(end.z<0.&&start.z>=0.){trimSegment(end,start);}}vec4 clipStart=projectionMatrix*start;vec4 clipEnd=projectionMatrix*end;vec2 ndcStart=clipStart.xy/clipStart.w;vec2 ndcEnd=clipEnd.xy/clipEnd.w;vec2 dir=ndcEnd-ndcStart;dir.x*=aspect;dir=normalize(dir);vec2 offset=vec2(dir.y,-dir.x);dir.x/=aspect;offset.x/=aspect;if(position.x<0.)offset*=-1.;offset*=linewidth;offset/=resolution.y;vec4 clip=(position.y<0.5)?clipStart:clipEnd;\n#ifdef USE_MASK\noffset*=(clipEnd.w+clipStart.w)*0.5;\n#else\noffset*=clip.w;\n#endif\nclip.xy+=offset;gl_Position=clip;\n#include <worldpos_vertex>\n}"},56449:t=>{t.exports="precision highp float;uniform vec3 color;uniform float antialiasWidth;uniform float lineWidth;uniform float dashed;uniform float dashSize;uniform float gapSize;uniform float opacity;varying float vDistanceFromAxis;varying float vDistanceAlong;void main(){float halfWidth=lineWidth*0.5;float antialiasing=1.-smoothstep(halfWidth,halfWidth+antialiasWidth,vDistanceFromAxis);float dashOpacity=1.;if(dashed>0.){\n#ifdef WORLDSPACE_DASH\nfloat dashAA=fwidth(vDistanceAlong)*antialiasWidth*0.5;\n#else\nfloat dashAA=antialiasWidth*0.5;\n#endif\nfloat dashT=mod(vDistanceAlong,dashSize+gapSize);dashOpacity=smoothstep(0.,dashAA,dashT)*(1.-smoothstep(dashSize-dashAA,dashSize,dashT));}gl_FragColor=vec4(color,opacity*dashOpacity*antialiasing);}"},75215:t=>{t.exports="precision highp float;uniform vec3 start;uniform vec3 end;uniform float lineWidth;uniform float antialiasWidth;uniform vec2 screenSize;uniform mat4 projectionMatrix;uniform mat4 modelViewMatrix;attribute float offsetDirection;attribute float t;varying float vDistanceFromAxis;varying float vDistanceAlong;vec2 rotate90(vec2 v){return vec2(-v.y,v.x);}vec2 ndcToScreen(vec4 pt){return pt.xy*screenSize/2.;}vec2 screenToNdc(vec2 pt){return pt*2./screenSize;}void main(){vec4 startNdc=projectionMatrix*modelViewMatrix*vec4(start,1.);vec4 endNdc=projectionMatrix*modelViewMatrix*vec4(end,1.);float z=mix(startNdc.z,endNdc.z,t);float w=mix(startNdc.w,endNdc.w,t);vec2 startScreen=ndcToScreen(startNdc/startNdc.w);vec2 endScreen=ndcToScreen(endNdc/endNdc.w);float halfWidth=lineWidth*0.5+antialiasWidth;vec2 directionScreen=endScreen-startScreen;vec2 widthOffsetScreen=rotate90(normalize(directionScreen))*offsetDirection*halfWidth;vec2 position=startScreen+directionScreen*t+widthOffsetScreen;vDistanceFromAxis=length(widthOffsetScreen);\n#ifdef WORLDSPACE_DASH\nvDistanceAlong=length((end-start)*t);\n#else\nvDistanceAlong=length(directionScreen*t);\n#endif\nvec2 posNdc=screenToNdc(position);gl_Position=vec4(posNdc*w,z,w);}"}}]);