function triggerbind(a,b,c){a=a||getZuid(),b=b||getRawSid(),c=c||getSid();var d={uid:a};b&&(d.rsid=b),c&&(d.sid=c),wmsconnectorframe.contentWindow.postMessage('["bind",'+JSON.stringify(d)+"]",pdomain)}function abortBind(){wmsconnectorframe.contentWindow.postMessage('["abortbind",{}]',pdomain)}function clearAndRegister(){var a={config:getWmsConfig()};wmsconnectorframe.contentWindow.postMessage('["clearregister",'+JSON.stringify(a)+"]",pdomain)}function setIdleStatusInClient(a){var b={isidle:a};wmsconnectorframe.contentWindow.postMessage('["sessionidle",'+JSON.stringify(b)+"]",pdomain)}function assignBridgeVariables(){if(isCrossOriginAllowed()===!1){window.getWmsConfig=window.parent.getWmsConfig,window.getNickName=window.parent.getNickName,window.getZuid=window.parent.getZuid,window.getSid=window.parent.getSid,window.getRawSid=window.parent.getRawSid,window.getITicket=window.parent.getITicket,window.isdisablewms=window.parent.isdisablewms,window.getWmsContacts=window.parent.getWmsContacts,window.updateWmsContacts=window.parent.updateWmsContacts,window.getAuthType=window.parent._getAuthType,window.getAuthToken=window.parent.getAuthToken||function(){},window.getAuthScope=window.parent.getAuthScope||function(){},window.getZAID=window.parent.getZAID||function(){},typeof window.parent.WebMessanger=="function"?(window.parent.WebMessanger.triggerbind=window.triggerbind,window.parent.WebMessanger.abortBind=window.abortBind,window.parent.WebMessanger.clearAndRegister=window.clearAndRegister,window.parent.WebMessanger.setIdleStatusInClient=window.setIdleStatusInClient):typeof window.parent.WmsLite=="function"&&(window.parent.WmsLite.triggerbind=window.triggerbind,window.parent.WmsLite.abortBind=window.abortBind,window.parent.WmsLite.clearAndRegister=window.clearAndRegister,window.parent.WmsLite.setIdleStatusInClient=window.setIdleStatusInClient);try{window.handlePexEvent=window.parent.PexBridge.handleEvent,window.parent.PexBridge.submitEvent=window.submitEvent}catch(a){}}}function initializeConnectivity(){function d(){var a={prd:prd,_uselp:_uselp,sdomain:_SDOMAIN,sstservice:_SSTSERVICE};a.config=typeof getWmsConfig=="function"&&getWmsConfig()||_SESSIONCONFIG,a.ticket=typeof getITicket=="function"&&getITicket(),a.uname=typeof getUserName=="function"&&getUserName(),a.zuid=typeof getZuid=="function"&&getZuid()||uname,a.nname=typeof getNickName=="function"&&getNickName(),a.authtype=typeof getAuthType=="function"&&getAuthType(),a.authtoken=typeof getAuthToken=="function"&&getAuthToken(),a.authscope=typeof getAuthScope=="function"&&getAuthScope(),a.zaid=typeof getZAID=="function"&&getZAID(),wmsconnectorframe.contentWindow.postMessage('["register",'+JSON.stringify(a)+"]",pdomain)}if(typeof JSON=="undefined"){var a=document.createElement("script"),b=window.location.protocol,c=b==="https:"?staticdetails.staticversion+"_https":staticdetails.staticversion;a.type="text/javascript",a.src=b+"//"+staticdetails.jsstaticdomain+"/ichat/"+c+"/js/json2.min.js",document.body.appendChild(a),attachonload.call(a,d)}else d()}function attachonload(a){typeof this.readyState!="undefined"?this.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&a.call(this)}:this.onload=function(){a.call(this)}}function constructWMSIframe(){var a=window.location.protocol+"//"+wmsserver+"/v2/"+_HTML+".html?az=02"+nocachefix();if(typeof getAuthType=="function"&&getAuthType()===10)samedomain&&(a=window.location.protocol+"//"+window.location.hostname+"/wmssrv/v2/"+_HTML+".html?az=02"+nocachefix()),typeof getZAID=="function"&&getZAID()&&typeof _IAMCLIENTSERVER!="undefined"?a=_IAMCLIENTSERVER+"/accounts/signin?client_auth=true&client_portal=true&servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(a)+"&portal="+getZAID():a=_IAMSERVER+"/login?client_auth=true&servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(a);else{samedomain&&(a="/wmssrv/v2/"+_HTML+".html?az=02"+nocachefix());if(_SSTSERVICE&&!samedomain||typeof getAuthType=="function"&&getAuthType()===7)a=_IAMSERVER+"/login?servicename="+_SERVICE+"&serviceurl="+encodeURIComponent(a)}wmsconnectorframe&&wmsconnectorframe.parentNode&&wmsconnectorframe.parentNode.removeChild(wmsconnectorframe),wmsconnectorframe=document.createElement("iframe"),wmsconnectorframe.name="wms",wmsconnectorframe.src=a,attachonload.call(wmsconnectorframe,initializeConnectivity),document.body.appendChild(wmsconnectorframe)}function loadwms(){assignBridgeVariables(),deactchat&&(parent._WMSCONFIG&=-2),constructWMSIframe();try{window.parent.WebMessanger.setUserConfig(_USERCONFIG),window.parent.WebMessanger.setCSRFParamName(_CFPARAMNAME),window.parent.WebMessanger.setCSRFTokenCookieName(_CFTOKENCOOKIENAME),window.parent.WebMessanger.setChatCSRFParamName(_CHATCSRFPARAMNAME),window.parent.WebMessanger.setChatCSRFCookieName(_CHATCSRFCOOKIENAME),window.parent.WebMessanger.setChatServer(_CHATSERVERURL),window.parent.WebMessanger.setCalendarServer(_CALENDARSERVERURL),window.parent.WebMessanger.setMailServer(_MAILSERVERURL),window.parent.WebMessanger.setMeetingUrl(_MEETINGSERVERURL),window.parent.WebMessanger.setPhotoServer(_PHOTOSERVERURL),window.parent.WebMessanger.setBarSettingsValue(_WMSSETTINGS),window.parent.WebMessanger.documentready()}catch(a){}try{typeof window.parent.WmsLite!="undefined"&&window.parent.WmsLite.setUserConfig&&window.parent.WmsLite.setUserConfig(_USERCONFIG),typeof window.parent.WmsLite!="undefined"&&window.parent.WmsLite.setBarSettingsValue&&window.parent.WmsLite.setBarSettingsValue(_WMSSETTINGS),typeof window.parent.WmsLite!="undefined"&&window.parent.WmsLite.setChatCSRFParamName&&window.parent.WmsLite.setChatCSRFParamName(_CHATCSRFPARAMNAME),typeof window.parent.WmsLite!="undefined"&&window.parent.WmsLite.setChatCSRFCookieName&&window.parent.WmsLite.setChatCSRFCookieName(_CHATCSRFCOOKIENAME)}catch(a){}}function submitEvent(a){if(isWSSupported()===!0)wmsconnectorframe.contentWindow.postMessage('["submitEvent",'+JSON.stringify(a)+"]",pdomain);else{var b=a.o.split("@"),c=b[0].split("."),d;if(c[0]==="req"){var e=c[1],f=b[1].split(":")[1],g;window.XMLHttpRequest?g=new XMLHttpRequest:window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLHTTP")),g.evid=a.i;if(typeof a.d!="undefined")if(typeof a.d=="string")d=a.d;else if(e==="PUT")d=JSON.stringify(a.d);else{var h=[];for(var i in a.d)h.push(i+"="+a.d[i]);d=h.join("&"),e==="GET"&&(f+="?"+d)}g.open(e,"/"+f,!0);for(var j in a.h){if(j==="Cookie")continue;g.setRequestHeader(j,a.h[j])}(e!=="GET"||a.h&&typeof a.h["Content-Type"]=="undefined")&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),g.onreadystatechange=function(){if(this.readyState===4){var a={};a.eid=this.evid;if(this.status===200){a.rs="4";if(this.responseText!==""){var b=this.responseText;try{b=JSON.parse(b)}catch(c){}}a.res={d:b,eid:this.evid}}else a.rs="-1",a.err={c:this.status,rc:this.status,rm:this.responseText};handlePexEvent(this.evid,a)}},e==="GET"?g.send():g.send(d)}}}function pushMsg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.mtype=="-12"||c.mtype=="-17")reloadcount<3&&(constructWMSIframe(),reloadcount++);else if(c.mtype==="0"){var d=c.msg,e='["bind",{"uid" : "'+d.uid+'" , "rsid" : "'+d.rsid+'"  , "sid" : "'+d.sid+'" , "nname" : "'+d.nname+'", "binding":true }]';wmsconnectorframe.contentWindow.postMessage(e,pdomain),reloadcount=0}callParentMethod("push",[c])}}function isValidDomain(a){try{function b(a){return a.replace(/:\d*$/,"")}a=b(a);if(wmssubdomain&&a){if(a===window.location.protocol+"//"+wmssubdomain)return!0;if(a.split(".").length>2)return a.substring(a.length-(wmssubdomain.length+1))==="."+wmssubdomain}return!1}catch(c){return!1}}function getDomain(a){var b="";return a.domain!==undefined?b=a.domain:a.origin!==undefined&&(b=a.origin),b}function isCrossOriginAllowed(){return typeof _CROSSORIGINALLOWED!="undefined"&&_CROSSORIGINALLOWED&&uname.charAt(0)==="$"?!0:!1}function callParentMethod(a,b){var c=["push","disablewms","goOffline","updatecontacts","requestsuccess","serverup","serverdown","updateDebugInfo"];if(c.indexOf(a)!==-1)if(isCrossOriginAllowed()){var d={opr:a};b&&(d.params=b),window.parent.postMessage(JSON.stringify(d),"*")}else typeof window.parent[a]=="function"?window.parent[a].apply(null,b):window.parent.WmsLite?window.parent.WmsLite[a].apply(null,b):window.parent.WebMessanger[a].apply(null,b)}function nocachefix(){return"&nocache="+(new Date).getTime()}var wmsconnectorframe,pdomain="*",isWSSupported,setWSSupport,reloadcount=0;_NODOMAINCHANGE==="false"&&samedomain===!1&&(document.domain=wmssubdomain),function(){var a;setWSSupport=function(b){a=b},isWSSupported=function(){return a}}(),addEvent(window,"message",function(a){if(isValidDomain(getDomain(a))){var b=JSON.parse(a.data),c=b[0],d=b[1],e=b[2];e&&e.wsopen!=undefined&&setWSSupport(e.wsopen);if(c==="push")pushMsg(d);else if(c==="disablewms")callParentMethod("disablewms");else if(c==="goOffline")callParentMethod("goOffline");else if(c==="isdisablewms")wmsconnectorframe.contentWindow.postMessage('["setdisablewms",{"value" : "'+isdisablewms()+'"}]',pdomain);else if(c==="getcontacts"){var f=getWmsContacts(),g=d;try{wmsconnectorframe.contentWindow.postMessage('["updatecontacts",{"childsid" : "'+g+'" , "contacts" : '+JSON.stringify(f)+"}]",pdomain)}catch(h){}}else c==="updatecontacts"?updateWmsContacts(d):c==="serverup"?callParentMethod("serverup"):c==="serverdown"?callParentMethod("serverdown",[d.min_delay,d.max_delay]):c==="pexevt"?handlePexEvent(d.eid,d):c==="wssupport"?setWSSupport(d):c==="debuginfo"&&callParentMethod("updateDebugInfo",[d])}else if(isCrossOriginAllowed()===!1)throw new Error("Invalid cross domain access in bridge")}),isCrossOriginAllowed()===!0&&addEvent(window,"message",function(a){if(a.source===parent){var b=JSON.parse(a.data),c=b.opr,d=b.params;c==="triggerbind"?triggerbind(d.zuid,d.rawsid,d.sid):c==="abortBind"?abortBind():c==="clearAndRegister"&&clearAndRegister()}});