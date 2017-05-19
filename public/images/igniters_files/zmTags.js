window.zmlab=function(){"use strict";var a=zmText.get("zmTags","tags"),b="#96ccf5",c=function(a,b){for(var c in zmail.mailObj){var d=$.inArray(String(a),zmail.mailObj[c].TAG||[]),e=$.inArray(String(a),zmail.mailObj[c].TTAGS||[]);d!==-1&&("del"===b&&zmail.mailObj[c].TAG.splice(d,1),zmPreviewTemplate.refreshLabelsForMail(c)),e!==-1&&("del"===b&&zmail.mailObj[c].TTAGS.splice(d,1),zmPreviewTemplate.refreshLabelsForMail(c))}},d=function(a,b){var d=zmInit.getListingDetObj();c(a,b),d.label===a&&("del"===b&&(""!==d.fId?zmInit.foldView({folId:d.fId,reInitialize:!0}):(zmInit.foldView({folId:zmail.folId.iId,reInitialize:!0}),zmail.mailLeft.selRow(String(zmail.folId.iId),"zmlTreeH"))),zmInit.updateHeaderBand())},e=function(b){if(b&&b.id){var c,e,f=b.id,g="zmllabelH";c=zmail.mailLeft.getNodes()[0].getLayer(g),e=zmList.getRowInfo(f,g),d(f,"del"),$.publish("label/deleted",{labelID:f}),c.deleteNode(e)}else b.e&&zmUtil.succErrMsg("e",a.errors.processError)},f=function(b,c){var e,f,g,h,i,j,k,l,m="zmllabelH",n="",o="";if(l=zmail.labInfo,"default"===c.accType&&zmail.accId!==zmail.defAccId&&(l=zmUtil.getTagList(c.accType)),b.e)zmUtil.succErrMsg("e",a.errors.processError);else{if(k=b.id,"a"===c.mode&&($.isEmptyObject(l)&&$("#zmllabelH .SC_ltl .SC_frt").show(),l[k]={}),g=l[k].system||"0",h=l[k].shId||"-1",l[k]={color:b.c,id:b.id,label:b.n,dispName:b.n,fav:"true",system:g,shId:h},"a"===c.mode&&$.publish("label/added",{label:l[k],info:b}),e=zmail.mailLeft.getNodes()[0].getLayer(m),f=zmList.getRowInfo(k,m),f[k]||"default"!==c.accType||(f={}),j=b.seq,1!==j){var p=$("#zmllabel #"+k).prev();p.length&&(o=p.attr("id"))}"e"===c.mode&&(d(k,"upd"),$.publish("label/renamed",{label:l[k],info:b}),e.deleteNode(f));for(i in f){f[i].label=b.n,f[i].color=b.c,f[i].dispName=b.n;break}var q=Object.keys(l);for(i=0;i<q.length;i++)if(q[i]===b.id){j=i+1;break}$.isEmptyObject(f)||(1!==j||$("#zmllabel .SC_tre").length?1===j?(n=$("#zmllabel .SC_tre").eq(0).attr("id"),e.insertNodeBefore(f,e.mapObject,n)):(n=$("#zmllabel .SC_tre").eq(j-2).attr("id"),n||(n=o),n?e.insertNodeAfter(f,e.mapObject,n):e.prependNode(f,e.mapObject)):(n="zmllabel",e.appendNode(f,e.mapObject))),l[k].se=j,zmail.accId===zmail.defAccId&&(zmail.labInfo=l,zmail.zohoAccLabInfo=$.extend({},l))}c.reqDoneClbk&&c.reqDoneClbk(!b.e,k)},g=function(a,c,d,g){var h={mode:a,accType:d},i={accId:zmail.accId,mode:a},j=zmail.labInfo;"default"===d&&(j=zmUtil.getTagList(d),i.accId=zmail.defAccId),"d"!==a&&"m"!==a&&(i.name=c,"e"!==a?i.color=g.color||b:i.color=j[zmlab.labelId].color),"a"!==a&&"m"!==a&&(i.labId=zmlab.labelId);var k=f;"d"===a?k=e:"m"===a&&(i.labIdArr=g.labIdArr,k=""),g&&"function"==typeof g.reqDoneClbk&&(h.reqDoneClbk=g.reqDoneClbk),zmAjq.XHR({u:zmail.conPath+"/lA.do",t:"POST",fn:k,p:i,csr:"s",ep:h})},h=function(a){var b=[],c={},d=[];if("selected"===a.type)d=zmUtil.getSelectedMails(),d[0].forEach(function(a){b.push({id:a,ttag:!1})}),d[1].forEach(function(a){b.push({id:a,ttag:!0})});else{if("list"!==a.type)return;b=a.list}if(b.length>=1){var e,f=(b[0].ttag?zmail.mailObj[b[0].id].TTAGS:zmail.mailObj[b[0].id].TAG)||[];for(e in zmail.labInfo)$.inArray(e,f)!==-1&&(c[e]="check");if(b.length>1)for(var g=1,h=b.length;g<h;g++){f=(b[g].ttag?zmail.mailObj[b[g].id].TTAGS:zmail.mailObj[b[g].id].TAG)||[];for(e in zmail.labInfo)$.inArray(e,f)!==-1?c[e]||(c[e]="partial"):c[e]&&(c[e]="partial")}}return c},i=function(a){var b,c,d,e="";for(a=a||{},b=["#e5e5e5","#f9baab","#f9d3a2","#fef86a","#d7f3b0","#c8e5fb","#e0ceef","#f6d0e6","#c4c4c4","#e07861","#ecb772","#f6e565","#badf88","#96ccf5","#b99fce","#e099c2","#808080","#ce232c","#dd902f","#d0c04b","#90ca40","#70abec","#a97ac6","#c26a9d","#000000","#9d1812","#a56016","#a69646","#5b8828","#4c76a2","#8343a0","#ba3682"],d=b.length,c=0;c<d;c++)e+=b[c]===a.selColor?"#000000"===b[c]?"<div class='sel black' style='background-color:"+b[c]+"'></div>":"<div class='sel' style='background-color:"+b[c]+"'></div>":"<div style='background-color:"+b[c]+"'></div>";return e},j={DEFAULT_COLOR:b,labelId:"",labelmov:function(a,b,c){var d,e,f,h,i,j=[];if(0===zmail.mailOpt.labSort){if(!c.id||"zmllabelH"!==c.id)for(e in c)i=e;for(h=zmail.mailLeft.getNodes()[0].getLayer("zmllabelH"),h.moveNode(b,h.mapObject,i),d=$("#zmllabel").find(".SC_tre"),f=d.length,e=0;e<f;e++)j.push(d[e].id);g(a,"","",{labIdArr:j})}},labelCreate:function(a,b,c){g("a",a,b,c)},labelreq:function(b,c,d){var e="";"d"!==b&&(e=$.trim($("#"+c).text())),(e.length||"d"===b)&&g(b,e),"e"!==b||d||$("#"+c).html(a.labels.editTag).attr("contentEditable",!1)},isValidLabel:function(a,b){var c=$.trim($("#"+a).text().toLowerCase());return!!j.isValidName(c,b)||($("#"+a).focus(),!1)},isValidName:function(b,c,d,e){var f,g=zmail.labInfo;if("default"===d&&(g=zmUtil.getTagList(d)),b=$.trim(b.toLowerCase()),!b.length)return zmUtil.succErrMsg("e",a.errors.empty,e),!1;if(zmUtil.hasSpecialChars(b))return zmUtil.succErrMsg("e",a.errors.specialCharacters,e),!1;if(b.length>25)return zmUtil.succErrMsg("e",a.errors.lengthExceeded,e),!1;if("info"===b||"important"===b||"follow-up"===b)return zmUtil.succErrMsg("e",a.errors.retrictedWord,e),!1;for(f in g)if(("rename"!==c||zmlab.labelId!==f)&&g[f].label.toLowerCase()===b)return zmUtil.succErrMsg("e",a.errors.exists,e),!1;return!0},createColorPicker:function(a){var b;b=i(),zmlab.labelId=a.parent()[0].id,zmsuite.showMenu({par:a,list:[{htm:b}],align:"colorpicker",ulClass:"SC_cp",clk:function(a,b){"DIV"===b.tagName&&(zmlab.updateLabColor(a,b),zmUtil.hideMenu())}})},updateLabColor:function(a,b){var c=$(b);zmail.labInfo[zmlab.labelId].color=zmlab.convertRGBtoHex($(c).css("background-color")),zmail.zohoAccLabInfo[zmlab.labelId]&&(zmail.zohoAccLabInfo[zmlab.labelId].color=zmail.labInfo[zmlab.labelId].color),zmlab.labelreq("e",zmlab.labelId,!0)},convertRGBtoHex:function(a){var b;if(a.indexOf("rgb")!==-1){a=a.replace(/rgb\(|\)/g,"").split(","),b=a.length;for(var c=0;c<b;c++)a[c]=parseInt(a[c]).toString(16),a[c]=1===a[c].length?"0"+a[c]:a[c];a="#"+a.join("")}return a},labelSelectionInfo:h,labelMenuHadler:function(a){a=a||"a";var b=$(this.activeMenu.activeMenuElement),c=b[0].id;return zmlab.isValidLabel(c,"add")?(zmlab.labelreq(a,c),!0):(b.focus(),!1)},showCreateTagPopUp:function(c){var d,e,f,h,j,k,l,m,n,o,p="",q=200;c=c||{},n=c.accType||"";var r=zmUtil.getTagList(n);h=c.mode||"new";var s=zmsuite.getAppLeft().getNodes()[0].getLayer("zmllabelH").el;o=$(".zm_compose"),k=o.offset();var t,u=k.left+o.width();t=s.position().top<0?$(".zm_compose").offset().top:s.offset().top,j=t+350-$(document.body).height(),j>0&&(t-=j),"rename"===h?(f=a.labels.editTag,p=r[zmlab.labelId].label,m=r[zmlab.labelId].color):"new"===h&&(f=a.labels.createTag,m=b),d={title:f,style:{width:q+"px","min-width":"168px","max-width":"168px"},posParent:{top:t+"px",left:u+"px"},customClass:"noanim",buttons:[{txt:a.labels.save,selected:!0,callback:function(){var a;a=$("#zm_createlabelpopup").find("input:first").val(),c.callback?c.callback("a",a,m):zmlab.isValidName(a,h,n,{parElem:$("#zm_createlabelpopup")[0]})&&("new"===h?g("a",a,n,{color:m}):"rename"===h&&(r[zmlab.labelId].color=m,g("e",a,n,{color:m})),zmsDialog.remove())}},{isCancel:!0,txt:a.labels.cancel,callback:function(){zmsDialog.remove()}}],closeaction:function(){$("#zm_createlabelpopup").remove()},afterDisplay:function(){$("#zm_createlabelpopup").find("input").focus()}},l=i({selColor:m}),e=$("<div id='zm_createlabelpopup'><ul><li><input type='text' class='SC_tiput' value='"+p+"' data-enableshortcuts='true' placeholder='"+a.labels.tagName+"'/></li><li><div>"+a.labels.tagColor+"</div><ul  class='SC_cp'><li>"+l+"</li></ul></div></li>"),e.find(".SC_cp").on("click","div",function(a){var b;zmUtil.stopEvents(a,!0),b=a.target||a.srcElement,b=$(b),m=b.css("background-color"),m=zmlab.convertRGBtoHex(m),$("#zm_createlabelpopup").find(".sel").removeClass("sel black"),b.addClass("sel"),"#000000"===m&&b.addClass("black")}),$("#zm_createlabelpopup").length||$(document.body).append(e),zmsDialog.create("zm_createlabelpopup",d),$("#zmsdialog_zm_createlabelpopup").mousedown(function(a){zmUtil.stopEvents(a,!0)}),$("#zmsdialog_zm_createlabelpopup").click(function(){zmUtil.hideMenu(!1,!0)})}};return j}();