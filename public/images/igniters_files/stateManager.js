!function(){"use strict";var a=zmail.Core.Namespaces,b=a.create("zmState"),c={},d={},e={TAB_SWITCH:"/apps/tabSwitched",DATA_CHANGED:"session/dataChanged"},f={zm_Container:"m",zm_link:"l",zm_task:"t",zm_notes:"n",zcal_Container:"c",zm_Contacts:"cn"},g=function(){return c},h=function(){return d},i=function(){var a={},c={},d={},e=zmsuite.getCurrentAppObjId();return c.app=b.appInfo.getDataToSave(),c.app.currApp=zmApp.currentApp,d.list=b.tabInfo.getTabData(),zmTab.currentTab!==e&&(d.selected=zmTab.currentTab),c.tab=d,a.data=c,a.type="restore",{state:a}},j=function(){"restore"!==zmAdHocSettings.getLPageType()&&zmAdHocSettings.setLPageType("restore")},k=function(){b.tabInfo.init(),b.leftStateInfo.init();var a=zmAdHocSettings.getLPageType();"specific"!==a&&"restore"!==a||(b.getAndStoreSettingsValue(),"restore"===a&&zmAdHocSettings.setUiState({})),window.onbeforeunload=function(){"restore"===zmAdHocSettings.getLPageType()&&b.sendRequestToSaveState()},d={data:{app:{},tab:b.tabInfo.getTabInfo}},zmail.postJsDeffered.done(function(){$.subscribe(e.DATA_CHANGED,function(){b.sendRequestToSaveState()}),$.subscribe(e.TAB_SWITCH,function(){setTimeout(function(){b.sendRequestToSaveState()},0)})}),b.registerAppHandlers("m",function(a,b){zmUtil.restoreLeftState(a,b)}),b.registerAppHandlers("stream",function(a,b){zmUtil.restoreLeftState(a,b)}),b.registerAppHandlers("t",function(a,b){zmUtil.requireTaskModule().done(function(){zmTaskRestore.restoreTaskSession(a,b)})}),_zm._isPrivilegedUser()&&j()};b.rightInfo=function(a){return a}(b.rightInfo||{}),b.centerInfo=function(a){return a}(b.rightInfo||{});var l=function(){var a;if(c&&c.state&&c.state.data)switch(a=c.state.data,c.state.type){case"specific":b.setSpecificLandingPage(a);break;case"restore":b.restoreSessionFromData(a)}},m=function(a){var c,d=a.app,e=d.currApp,f=!0,g=$.Deferred();b.appHandlers[e]?(c=zmComponent.loadingMasks({maskText:"Restoring Session"}),f=!a.tab.selected,b.appHandlers[e](d,{avoidShow:f,deferred:g}),g.done(function(){c.remove(),b.tabInfo.setSavedTabInfo(a.tab)})):(zmApp.showApp("m"),1===zmail.mailOpt.isFol?zmList.showMailListing({fId:zmail.folId.iId}):zmList.showMailListing({fId:"zm_unread"}))};b.setSpecificLandingPage=function(a){var c=a.app,d=c.currApp;b.appHandlers[d]?b.appHandlers[d](c):(zmApp.showApp("m"),1===zmail.mailOpt.isFol?zmList.showMailListing({fId:zmail.folId.iId}):zmList.showMailListing({fId:"zm_unread"}))},b.sendRequestToSaveState=function(){var a=zmAdHocSettings.getLPageType();if("none"!==a&&"undefined"!=typeof zmApp&&"undefined"!=typeof zmTab){var c=zmAdHocSettings.getUiState();_.isEqual(c,b.getCurrentStateSnapshot())||zmAdHocSettings.setUiState(b.getCurrentStateSnapshot())}},b.getAndStoreSettingsValue=function(){c=zmAdHocSettings.getUiState()};var n=function(a,b){this.tabInfo.updateTabState(a,b),this.sendRequestToSaveState()},o=function(a,c){b.appHandlers[a]=c};b.getStoredSessionState=g,b.getCurrentStateObject=h,b.getCurrentStateSnapshot=i,b.setStoredLandingPageData=l,b.restoreSessionFromData=m,b.saveTabState=n,b.appHandlers={},b.registerAppHandlers=o,b.init=k,b.appsKeyMap=f}(),function(){"use strict";var a=zmail.Core.Namespaces,b={GROUP:",",VALUE:"__"},c="--",d=a.get("zmState"),e=a.create("zmState.leftStateInfo"),f=d.appsKeyMap,g=Object.keys(f).sort(),h={},i=function(){"undefined"!=typeof zmUtil&&zmUtil.debugLog(h)},j=function(a){var c;return c=_(h[a]).map(function(c,d){return a+b.VALUE+d})},k=function(){var a=[];return g.forEach(function(b){b=f[b],a=a.concat(j(b))}),a.join(b.GROUP)||c},l=function(){var a=k(),b=zmAdHocSettings.getLeftLayerState();b.collapsedState=a,zmAdHocSettings.setLeftLayerState(b)},m=function(a,b){h.hasOwnProperty(a)||(h[a]={});var c=h[a];return!c.hasOwnProperty(b)&&(c[b]=!0,i(),!0)},n=function(a,b){var c,d;return!!f.hasOwnProperty(a)&&(c=f[a],d=m(c,b),d&&l(),d)},o=function(a,b){var c;if(!f.hasOwnProperty(a))return!1;c=f[a];var d=h[c];return!(!d||!d.hasOwnProperty(b))&&(delete d[b],l(),i(),!0)},p=function(a){var c,d=a.split(b.GROUP);d.forEach(function(a){c=a.split(b.VALUE),m(c[0],c[1])})},q=function(){var a=zmAdHocSettings.getLeftLayerState();delete a.expandedState,zmAdHocSettings.setLeftLayerState(a)},r=function(){var a=zmAdHocSettings.getLeftLayerState().collapsedState||c,b=zmAdHocSettings.getLeftLayerState().expandedState;b&&q(),a!==c&&p(a)},s=function(a,b){if(!f.hasOwnProperty(b))return!1;var c=f[b],d=h[c];return!!d&&d.hasOwnProperty(a)},t={checkForPresence:function(a,b){return s(a,b)}};e.updateAdhocValues=l,e.getDataToStore=k,e.printData=i,e.addEntry=n,e.removeEntry=o,e.appsKeyMap=f,e.utils=_.extend({},t),e.init=r}(),function(){"use strict";var a=zmail.Core.Namespaces,b=a.get("zmState"),c=a.create("zmState.appInfo"),d=b.appsKeyMap,e={},f=function(){var a,b,c={};return"object"==typeof zmApp&&(b=zmsuite.getCurrentAppObjId(),d.hasOwnProperty(b)&&(a=d[b]),c.selInfo={id:zmsuite.getAppLeft().selId||"",layerId:zmsuite.getAppLeft().selLayerId||""},c.data=a&&e[a]||{}),c},g=function(a,b,c){var f;return!!d.hasOwnProperty(a)&&(f=d[a],!(e.hasOwnProperty(f)&&!c)&&(e[f]=b,!0))};c.getDataToSave=f,c.addNew=g}(),function(){"use strict";var a=zmail.Core.Namespaces,b=a.get("zmState"),c=a.create("zmState.tabInfo"),d={},e={},f={},g={m:function(a){zmRestore.restoreTabs(a)},stream:function(a,b){zmRestore.restoreTabs(a,b)},cmp:function(a,b){zmUtil.cmpRestore(a,b)},t:function(a){zmUtil.requireTaskModule().done(function(){zmTaskRestore.restoreTab(a)})}},h=function(){return e.list},i=function(){return e},j=function(a,b){var c,d=h();for(c=0;c<d.length;c+=1)if(d[c].appId===a)return d[c]=b,void(d[c].appId=b.appId||a);b.appId=a,d.push(b)},k=function(a){var b,c=h();for(b=0;b<c.length;b+=1)if(c[b].appId===a)return void Array.prototype.splice.call(c,b,1)},l=function(a){if(f[a])return f[a](a)},m=function(){e={list:[]},$.subscribe("/apps/tabSwitching",function(a,b,d){b!==d&&c.callIfStillPending(d)}),$.subscribe("mailsuite/appClosed",function(a,c){var d=c.appID;k(d),b.sendRequestToSaveState()})},n=function(a,b){g[a.app]&&g[a.app](a,b)},o=function(a){"function"==typeof zmUtil.modifyComposeObj&&zmUtil.modifyComposeObj(a)},p=function(a){var b,c,e,f,g,h=a.selected,i=!1;for(g=0;g<a.list.length;g+=1)h===a.list[g].appId&&(i=!0),0===a.list[g].appId.indexOf("Cmp")&&o(a.list[g]),c=a.list[g].appObj,b=c,zmsuite.isWorkspaceAvailable(b.appId)||(zmsuite.createWorkspace(b),j(a.list[g].appId,a.list[g]),d[a.list[g].appId]=a.list[g]),i&&!e&&(e=a.list[g].appId,f=a.list[g]);h&&e&&d[e]&&(d[e]="",zmsuite.showWorkSpace(e),n(f,e))},q=function(a){if(d[a]){var b=d[a];return d[a]="",n(b),!0}return!1},r=function(a,b){var c,d,e=zmTab.tabArr,f=e.length,g=h(),i=-1;if(c=_.map(g,function(a){return a.appId}),c.indexOf(a)!==-1)return void j(a,b);for(d=0;d<f;d++)if(e[d].appId===a){i=d;break}var k,l=i-1,m=i+1;if(b.appId=a,0===i)e.splice(0,b);else if(i===length-1)e.splice(length-1,b);else for(;l>-1||m<length;){if((k=c.indexOf(zmTab.tabArr[l].appId))!==-1){e.splice(k+1,b);break}if((k=c.indexOf(zmTab.tabArr[m].appId))!==-1){e.splice(k-1,b);break}l--,m++}};return c.getTabDataInfo=l,c.getTabInfo=i,c.getTabData=h,c.setSavedTabInfo=p,c.syncAndInsert=r,c.updateTabState=j,c.callIfStillPending=q,c.init=m,c}();