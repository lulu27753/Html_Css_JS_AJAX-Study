function UET(o){var n,i,t;this.stringExists=function(n){return n&&n.length>0},this.domain="bat.bing.com",this.secondaryDomain="bat.r.msn.com",this.URLLENGTHLIMIT=2048,this.pageLoadEvt="pageLoad",this.customEvt="custom",o.Ver=o.Ver!==undefined&&(o.Ver==="1"||o.Ver===1)?1:2,this.supportsCORS=this.supportsXDR=!1,this.validKeyNames={ec:1,el:1,ev:1,ea:1},this.validCustomEventKeyNames={ec:1,el:1,ev:1,ea:1,gv:1,gc:1},this.invalidKeyException="Invalid data: Key Name: ",this.invalidEventException="Invalid event type: Event Type: ",this.evq=o.q||[],delete o.q,this.evqDispatch=!1,this.pageLoadDispatch=!1,this.documentLoaded=!!document.body,this.eventPushQueue=[],n=this,this.checkuetHostdocumentload=function(){this.documentLoaded=!!document.body;if(n.documentLoaded){if(n.eventPushQueue.length>0){for(var t=0;t<n.eventPushQueue.length;t++)n._push(n.eventPushQueue[t]);n.eventPushQueue=[]}}else setTimeout(function(){n.checkuetHostdocumentload()},5)},this.checkuetHostdocumentload(),window.XMLHttpRequest!==undefined&&"withCredentials"in new XMLHttpRequest&&(this.supportsCORS=!0),typeof XDomainRequest!="undefined"&&(this.supportsXDR=!0),this.push=function(){var i=arguments,t;i.length===1&&(t=i[0],n.documentLoaded?n._push(t):n.eventPushQueue.push(t))},this._push=function(n){n===this.pageLoadEvt?this.evt(this.pageLoadEvt):this.evt(this.customEvt,n)},this.dispatchq=function(){this.evqDispatch=!0;for(var n=0;n<this.evq.length;n++)this.push(this.evq[n]),this.evq[n].qe=!0},i=window.location.protocol,t=0,o.Ver===1&&o.advertiserId!==undefined&&(t=o.advertiserId),this.postURL=i+"//"+this.domain+"/action/"+t,this.urlPrefix=this.postURL+"?",this.secondPostURL=i+"//"+this.secondaryDomain+"/action-uic/"+t,this.secondUrlPrefix=this.secondPostURL+"?",delete o.advertiserId,delete o.adv,o.Ver!==1&&(this.stringExists(o.tagId)&&!this.stringExists(o.ti)&&(o.ti=o.tagId),delete o.tagId,delete o.Sig),this.invisibleDiv=null,this.invisibleFrame=null,this.getGuid=function(){function n(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()},o.mid=this.getGuid(),this.stringifyToRequest=function(n,t){var r="",u="",i;t&&(u=t+".");for(i in n)r+=typeof n[i]=="object"?this.stringifyToRequest(n[i],u+i):u+i+"="+n[i]+"&";return r},this.createInvisibleElement=function(n,t){var i=document.createElement(t);return i.setAttribute("style","width:0px; height:0px; display:none; visibility:hidden;"),i.id="batBeacon"+Math.random("bat"),n.appendChild(i),i},this.createInvisibleDiv=function(n){return this.invisibleDiv=this.createInvisibleElement(n,"div"),this.invisibleDiv.id},this.fireBeaconImg=function(n){var t=this.createInvisibleElement(this.invisibleDiv,"img"),i,r;return t.width=0,t.height=0,i=Math.floor(Math.random()*1e6),r=n+"&rn="+i,o.alt&&t.setAttribute("alt",o.alt),t.setAttribute("src",r),i},this.addLoadTime=function(n){var t,i;return window.performance&&(t=window.performance.timing.domContentLoadedEventEnd,window.performance.timing.loadEventEnd&&(t=window.performance.timing.loadEventEnd),t!==undefined&&t!==0&&(i=t-window.performance.timing.navigationStart,n.lt=i)),n},this.hashCode=function(n){var t=0,i,r;if(n.length===0)return t;for(i=0;i<n.length;i++)r=n.charCodeAt(i),t=(t<<5)-t+r,t=t&t;return t},this.addPluginData=function(n){for(var f=[],u,r,t,i=0;i<window.navigator.plugins.length;i++)f.push({name:window.navigator.plugins[i].name});for(u=f.sort(function(n,t){return n.name>t.name?1:n.name<t.name?-1:0}),r="",t=0;t<u.length;t++)r+=u[t].name;return n.pi=this.hashCode(r),n},this.addFraudSignals=function(n){n=this.addPluginData(n);var t=window.navigator.userLanguage||window.navigator.language;return this.stringExists(t)&&(n.lg=t),screen&&(screen.width&&(n.sw=screen.width),screen.height&&(n.sh=screen.height),screen.colorDepth&&(n.sc=screen.colorDepth)),n},this.addPageData=function(n){var u,t,r;n=this.addLoadTime(n),n=this.addFraudSignals(n),u="",t=window.document.referrer,this.stringExists(t)&&(n.r=encodeURIComponent(t),u=t.split("?")[0]),r=window.document.title,this.stringExists(r)&&(n.tl=r);if(window.self!=window.top)n.hasOwnProperty("r")&&(n.p=n.r,n.r="");else{var i=window.location.href,f=window.location.hash,e=i.indexOf(f)>=0?i:i+f;n.p=encodeURIComponent(e),n.r=encodeURIComponent(u)}return n},this.removeTrailingAmp=function(n){var t=n.charAt(n.length-1);return(t==="&"||t==="?")&&(n=n.substring(0,n.length-1)),n},this.throwError=function(n){if(typeof CustomEvent=="function"){var i={errMsg:n,tagId:o.ti},t=new CustomEvent("uetError",{detail:i});window.dispatchEvent(t)}throw n;},this.validateValue=function(n,t,i){var r=0,u=t,f=i===undefined||i===0?!0:!1;return t.toString().indexOf(",")!==-1&&(u=t.replace(/,/g,"")),r=parseFloat(u),(isNaN(u)||isNaN(r)||f&&r.toString().indexOf(".")!==-1)&&this.throwError(n+" should be "+(f?"an integer":"a number")),r>9999999?this.throwError(n+" cannot be greater than 9999999"):r<0?this.throwError(n+" cannot be less than 0"):this.getDecimalPlaces(r)>i&&this.throwError(n+" cannot have more than "+i+" decimal places"),r},this.validateCurrency=function(n){var t=n.toString();return t.match(/^[a-zA-Z]{3}$/)||this.throwError("gc value must be ISO standard currency code"),t},this.getDecimalPlaces=function(n){var i=parseFloat(n),t;if(isNaN(n)||isNaN(i))return 0;return t=(""+n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},this.validateDataObject=function(n,t){var r,i;n||this.throwError(this.invalidEventException+"undefined event."),n!==this.pageLoadEvt&&n!==this.customEvt&&this.throwError(this.invalidEventException+n),t||this.throwError("undefined data object passed to validate");if(typeof t!="object")return;r=this.validKeyNames,n!==this.pageLoadEvt&&(r=this.validCustomEventKeyNames);for(i in t)r[i]||this.throwError(this.invalidKeyException+i);t.hasOwnProperty("ev")>0&&(t.ev=this.validateValue("ev",t.ev,3)),t.hasOwnProperty("gv")>0&&(t.gv=this.validateValue("gv",t.gv,3)),t.hasOwnProperty("gc")>0&&(t.gc=this.validateCurrency(t.gc))},this.evt=function(n,t){var i,r;if(n===this.pageLoadEvt&&this.pageLoadDispatch===!0)return;t=t||{};if(t instanceof Array)if(t.length>0)t=t[0];else return;if(typeof t!="object")return;this.validateDataObject(n,t);if(n===this.customEvt){i=[];for(r in t)i.push(r);if(i.length===0)return}this.invisibleDiv||this.createInvisibleDiv(document.body),t.evt=n,window.self!=window.top&&(t.ifm=1),n===this.pageLoadEvt&&(t=this.addPageData(t),this.fireBeacon(t,!0),this.pageLoadDispatch=!0),this.fireBeacon(t),t.abf=!0,n===this.pageLoadEvt&&this.evqDispatch===!1&&this.dispatchq()},this.createIframe=function(n){return this.invisibleFrame=this.createInvisibleElement(n,"iframe"),this.invisibleFrame.src="",this.invisibleFrame.name=this.invisibleFrame.id,this.invisibleFrame.id},this.clone=function(n,t){t===undefined&&(t={});for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return t},this.combine=function(n,t){var i=this.clone(n);return i.alt&&delete i.alt,i=this.clone(t,i)},this.addHiddenFields=function(n,t,i,r){var e="",u,f;r&&(e=r+".");for(u in n)n.hasOwnProperty(u)&&(typeof n[u]=="object"?this.addHiddenFields(n[u],t,i,e+u):(f=i.createElement("input"),f.setAttribute("type","hidden"),f.setAttribute("name",e+u),f.setAttribute("value",n[u]),t.appendChild(f)))},this.fireBeacon=function(n,t){var u=this.urlPrefix,e=this.postURL;t&&(u=this.secondUrlPrefix,e=this.secondPostURL);var i=this.combine(o,n),r=this.stringifyToRequest(i),f=this.removeTrailingAmp(u+r);f.length>this.URLLENGTHLIMIT&&(delete i.p,r=this.stringifyToRequest(i),f=this.removeTrailingAmp(u+r)),this.fireBeaconImg(f)}}