/*! For license information please see 62.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[62],{62576:(i,n,t)=>{t.d(n,{Bl:()=>c,Lm:()=>d,Pi:()=>o,RV:()=>s,e_:()=>l,v6:()=>a});var e=t(19663);class a extends e.m{constructor(){super(),this.id="PLUGIN_RESET_ALL",this.payload={}}}class s extends e.m{constructor(i,n,t,e){super(),this.id="PLUGIN_RELOAD",this.payload={name:i,config:n,configMeta:t,permissions:e||{}}}}class o extends e.m{constructor(i,n,t,e){super(),this.id="PLUGIN_LOAD",this.payload={name:i,config:n,configMeta:t,permissions:e||{}}}}class l extends e.m{constructor(i){super(),this.id="PLUGIN_UNLOAD",this.payload={name:i}}}class d extends e.m{constructor(i,n){super(),this.id="PLUGIN_CONFIG_FETCH_DATA",this.payload={operation:i,callback:n}}}class c extends e.m{constructor(i,n){super(),this.id="ATTACHMENT_ASSOCIATE_WITH_PLUGIN",this.payload={attachmentId:i,pluginId:n}}}},98062:(i,n,t)=>{t.r(n),t.d(n,{default:()=>w});var e=t(61864),a=t(92810),s=t(48913),o=t(97542),l=t(73339),d=t(23748),c=t(54244),r=t(10374),u=t(62576),g=t(80361),h=t(1581),p=t.n(h),f=t(5477),m=t.n(f),P=t(2957);class y{getFactory(i){return i.messengerFactory}}class w extends o.Y{constructor(){super(...arguments),this.name="plugin",this.data=new l.e,this.allowLoad=!1,this.allowLiveReload=!0,this.ajv=new(p())({strict:!1}),this.onResetPlugins=async()=>{await this.unloadPlugins(),await this.loadConfigured()},this.onLoadPlugin=async({config:i,configMeta:n,permissions:t},e)=>{var a;if(this.allowLiveReload&&e){const s={properties:n,required:[]};for(const i of Object.keys(s.properties)){(null===(a=s.properties[i].required)||void 0===a?void 0:a.includes(i))&&s.required.push(i)}if(!this.ajv.validate(s,i))return;await this.load(Object.assign(Object.assign(Object.assign({},e),{config:i}),t))}},this.onUnloadPlugin=async i=>{if(this.allowLiveReload&&i){const n={applicationKey:i.applicationKey,id:i.id};await this.unload(n)}},this.onReloadPlugin=async({name:i,config:n,configMeta:t,permissions:e},a)=>{this.allowLiveReload&&(await this.onUnloadPlugin(a),await this.onLoadPlugin({name:i,config:n,configMeta:t,permissions:e},a))},this.debouncedOnReloadPlugin=(0,g.D)(this.onReloadPlugin,500),this.onReloadPluginCommand=async i=>{if(!this.allowLiveReload)return;let n=this.configuredPlugins.find((n=>n.id===i.name));n||(n=this.createLoadableConfig(i.name)),this.debouncedOnReloadPlugin(i,n)},this.debouncedOnLoadPlugin=(0,g.D)(this.onLoadPlugin,500),this.onLoadPluginCommand=async i=>{this.debouncedOnLoadPlugin(i,this.createLoadableConfig(i.name))},this.debouncedOnUnloadPlugin=(0,g.D)(this.onUnloadPlugin,500),this.onUnloadPluginCommand=async i=>{let n=this.configuredPlugins.find((n=>n.id===i.name));if(!n){const t=this.availablePlugins.get(i.name);t&&(n={applicationKey:t.applicationKey,id:t.name})}this.debouncedOnUnloadPlugin(n)},this.onFetchSdkDataCommand=async i=>{const n=this.pluginConfigDataModule.serviceSdkKey;class t{constructor(i){this.sdk=i}connect(){return this.sdk.connectPlugin(n,"PluginConfigRootConnection")}cancelConnecting(){}}this.serviceSdkConnection||(this.serviceSdkConnection=await s.tK.connect(new t(this.sdk),new y,window));const[e,a]=i.operation.split(".");let o;try{const i=this.serviceSdkConnection[e][a];o=i.subscribe?await new Promise(((n,t)=>{const e=i.subscribe((i=>{e.cancel(),n(i)}))})):await i()}catch(n){throw new Error("Failed to run command: "+i.operation)}i.callback(o)}}async init(i,n){if(m()(this.ajv),[this.ses,this.sdk,this.pluginConfigDataModule]=await Promise.all([n.getModuleBySymbol(a.lC),n.getModuleBySymbol(e.Mv),n.getModuleBySymbol(a.Yi)]),this.engine=n,this.allowLoad=i.pluginPolicies.enabled,this.allowLiveReload=this.allowLoad&&!this.pluginConfigDataModule.pluginConfigData.disabled&&!this.pluginConfigDataModule.pluginConfigData.preventLiveEdit,this.allowLoad){const i=n.subscribe(r.LZ,(async({phase:t,application:e})=>{t===c.nh.PLAYING&&(i.cancel(),this.allowLiveReload?await this.loadConfigured():(this.log.devInfo("Reached PLAYING stage, checking whether configured plugins need to load to start: ",e),e===c.Mx.SHOWCASE&&await this.loadConfigured(),this.bindings.push(n.subscribe(r.pB,(async i=>{if(this.log.devInfo("Switch in active application detected by plugin system: ",i.application),i.application===c.Mx.WORKSHOP)try{await this.disposeAll()}catch(i){this.log.debugWarn("Entering workshop, one or more plugins failed to dispose properly:",i)}else i.application===c.Mx.SHOWCASE&&await this.loadConfigured()})))))}))}this.bindings.push(n.commandBinder.addBinding(u.v6,this.onResetPlugins),n.commandBinder.addBinding(u.RV,this.onReloadPluginCommand),n.commandBinder.addBinding(u.Pi,this.onLoadPluginCommand),n.commandBinder.addBinding(u.e_,this.onUnloadPluginCommand),n.commandBinder.addBinding(u.Lm,this.onFetchSdkDataCommand)),n.market.register(this,l.e,this.data)}async loadConfigured(){if(this.pluginConfigDataModule.registryLoaded){if(this.pluginConfigDataModule.pluginConfigData.disabled)return void this.log.debug("Cannot load plugins! Disabled by URL parameter.");this.configuredPlugins=await this.pluginConfigDataModule.getConfiguredPlugins(),this.availablePlugins=this.pluginConfigDataModule.pluginConfigData.availablePlugins,this.log.debug("Combined configuration with registry data, loading plugins: "+JSON.stringify(this.configuredPlugins,void 0,2)),await this.waitForPluginLoad()}}async waitForPluginLoad(){if(!this.configuredPlugins)return void this.log.error("Waiting for load before plugin records fetched.");const i=[];for(const n of this.configuredPlugins)i.push(this.load(n).then((()=>{this.engine.broadcast(new P.I(n.id,n.src,Date.now()-performance.timing.navigationStart))})));try{await Promise.all(i)}catch(i){this.log.warn("Issues were encountered loading configured plugins.")}}async fetchPlugin(i,n,t,e){e.strict&&this.ses.freezeForStrict();const a=await this.ses.makeSecureEnvironment(i+""+(t?"-"+t:""),n,e,this.pluginConfigDataModule.pluginConfigData.eventTarget);if(a){return[a,a.compartment.globalThis.plugin]}return null}async unload(i){const n=i.id&&""!==i.id?i.id:"default",t={applicationKey:i.applicationKey,id:n},e=this.data.get(t);let a=null;if(e){try{a=e.dispose()}catch(i){this.log.warn("An error occurred when disposing a plugin, it may be in a partially disposed state",i)}this.data.delete(t)}return a||Promise.resolve()}async load(i){const{applicationKey:n,src:t,id:e,strict:a,fetchLevel:s=d.u.None}=i;if(!this.allowLoad){const i=t.startsWith("http")?t:`${t.substring(0,16)}...`;return Promise.reject(`Load for plugin <${e}:${i}> requested, but plugin system is not available.`)}const o=void 0===a||a,l=e||"default",c={applicationKey:n,id:l};if(this.data.get(c))return Promise.reject(`Plugin for ${n}-${l} already loaded.`);const r={strict:o,canFetch:s>=d.u.AnonymousFetch,canFetchAsUser:s>=d.u.UserFetch},[u,g]=await this.fetchPlugin(n,t,l,r)||[];u&&g&&await this.initPlugin(u,g.factory,i,l)}async initPlugin(i,n,t,e){const a=n(),{applicationKey:o,id:l,config:d}=t;let c=()=>{};const r=a.onInit||a.init;let u=Promise.resolve();if(r){class i{constructor(i){this.sdk=i}connect(){return this.sdk.connectPlugin(o,l)}cancelConnecting(){}}const n=await s.tK.connect(new i(this.sdk),new y,window);u=r.call(a,n,d),c=()=>n.disconnect()}const g=this.pluginConfigDataModule.pluginConfigData.eventTarget;async function h(){const n=a.onDestroy||a.dispose;return((null==n?void 0:n.call(a))||Promise.resolve()).finally((()=>{c(),g.delete(e),i.dispose()}))}const p={applicationKey:o,id:l};try{return await u,this.data.set(p,a,h),Promise.resolve()}catch(i){this.log.warn("Plugin initialization failed: ",i),this.log.debugWarn("Attemptying dispose for clean up...");try{await h()}catch(i){this.log.warn("Auto-cleanup of plugin had errors: ",i)}return Promise.reject(i)}}dispose(i){super.dispose(i),this.disposeAll().catch((i=>{this.log.warn("One or more plugins failed to dispose properly.",i)}))}disposeAll(){return this.configuredPlugins=[],this.unloadPlugins()}unloadPlugins(){const i=[];for(const[n,t]of this.data.plugins.entries())i.push(t.dispose());return this.data.plugins.clear(),Promise.all(i)}createLoadableConfig(i){const n=this.availablePlugins.get(i),{src:t,config:e,applicationKey:a,strict:s,outputs:o}=n;return{id:i,src:t,config:e,outputs:o,applicationKey:a,strict:s}}}}}]);