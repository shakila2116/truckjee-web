!function(){"use strict";var a,b,c,d,e=zmail.Core.Namespaces.create("zmAttach"),f=zmText.get("attachmentUtil"),g={},h={openLinkedMail:{icon:'<font><i class = "msi-mail" title="Open linked email" data-msg="linkedMail"></i></font>'},addEvent:{icon:'<font><i class = "msi-calendar" title = "Add event" data-msg="addEvent"></i></font>'},download:{icon:'<font><i class = "msi-download" title="Download" data-msg="download"></i></font>'},view:{icon:'<font><i class = "msi-zoomin" title= "View" data-msg="view"></i></font>'},cloud:{icon:'<font><i class = "msi-addcloud" title="Add to cloud" data-msg="addtocloud"></i></font>',text:"<font>"+f.attachmentmenu.addtocloud+"</font>"},newMail:{icon:'<font><i class = "msi-send" title="Attach to new email" data-msg="newMail"></i></font>',text:"<font>"+f.attachmentmenu.newMail+"</font>"},newPost:{icon:'<font><i class = "msi-status" title="Attach to new message" data-msg="newPost"></i></font>',text:"<font>"+f.attachmentmenu.newPost+"</font>"},showmore:{icon:'<font><i class = "msi-action" title="More" data-msg="showMore"></i></font>'}},i={basic:[{getElem:function(){if(a&&"attpop"===a.from&&a.isThread)return h.openLinkedMail.icon}},{getElem:function(a){var b=a.filename;if(b.indexOf(".ics")!==-1&&!a.isInvitation)return h.addEvent.icon}},{getElem:function(){return h.download.icon}},{getElem:function(a){var b=a.fileExtn,c=a.filename;if("msi-attdoc"===b||"msi-attppt"===b||"msi-attsheet"===b||"msi-attpdf"===b||"msi-attimg"===b||"msi-attaudio"===b||"msi-attothers"===b&&(c.indexOf(".txt")!==-1||c.indexOf(".htm")!==-1||c.indexOf(".xml")!==-1))return h.view.icon}}],more:[{name:"addtocloud",getElem:function(a){var b=a&&a.action||"";if(zmUtil.isAddToCloudAllowed()){var c="showMore"===b?h.cloud.text:h.cloud.icon;return c}}},{name:"newPost",getElem:function(a){if(!zmUtil.isChildWindow()){var b=a&&a.action||"",c="showMore"===b?h.newPost.text:h.newPost.icon;return c}}},{name:"newMail",getElem:function(a){if(!zmUtil.isChildWindow()){var b=a&&a.action||"",c="showMore"===b?h.newMail.text:h.newMail.icon;return c}}}]};g.dom={},g.dom.date=function(a){return a&&"attpop"===a.from&&a.ts?'<div class="zmDate"><span>'+a.ts+"</span></div>":""},g.dom.sender=function(a){return a&&"attpop"===a.from&&a.dn?'<div class="zmAtt_sender">'+a.dn+"</div>":""},g.showMore=function(a,d){$(a).closest(".zmL, ."+c).addClass("sel");var e=$(a).attr("data-showFrom")||$(a.children).attr("data-showFrom"),f=i.more;f=f.slice(e,f.length);var h,j=[];for(h in f)j.push({htm:f[h].getElem({action:"showMore"}),data:{attObj:d,action:f[h].name}});var k={divId:"moreAttachMenu",par:a,showArrow:!0,spanClass:"SC_arm",list:j,onHide:function(){$(a).parents(".zmL.zmAch").removeClass("sel")},clk:function(a,b){g.bindMenus(b,a)}};b=zmsuite.showMenu(k)},g.imageElem=function(a){var b,c=zmUtil.fileTyp(a.fn);return b=a.thn?"<img src='"+a.thn+"'>":"<i class='"+c[1]+"'></i>"},g.downloadAttach=function(a,b){var c,d="",e={},f=zmail.mailObj[a.e],g="";f&&zmUtil.isSharedFolder(f.FD)&&(c=zmUtil.getShareId(f.FD)),"dwn"===b?(a.fn&&(g=a.fn.replace(/;/gi,"")),d+=zmail.conPath+"/FileDownload/"+zmUtil.encodeFileName(g),e={mode:"dwn",accId:zmail.accId,attachId:a.Id,entityType:a.et,entityId:a.e,partId:a.p},101===a.ft&&(e.isImg=!0)):"downloadall"===b?(a.n&&(g=a.n.replace(/;/gi,"")),d+=zmail.conPath+"/FileDownload/",e={accId:zmail.accId,entityId:a.e,entityType:a.et,mode:b}):"tmpdwn"===b&&(d+=zmail.conPath+"/FileDownload/"+zmUtil.encodeFileName(a.n),e={mode:"tmpdwn",accId:zmail.accId,fpath:a.fP,fstorename:a.sN,entityType:a.et}),d.length&&(c&&(e.shId=c),f&&f.streams&&(delete e.accId,e.streamsView=!0,e.groupId=f.groupId,e.actionType="viewGroupEntity")),zmAjq.formSubmit(e,d)},g.showAttachmentOnSlideshow=function(a,b){var c=zmUtil.fileTyp(b.fn),d={txt:!0,js:!0,java:!0,css:!0,jsp:!0,jspf:!0,c:!0,cpp:!0,html:!0,htm:!0,xml:!0,go:!0,eml:!0,sh:!0,bat:!0,log:!0},e={xml:!0,js:!0,css:!0};if("msi-attimg"!==c[1]&&zmUtil.hideMenu(),b)if("msi-attdoc"!==c[1]&&"msi-attppt"!==c[1]&&"msi-attsheet"!==c[1]||d[c[2]]||"xml"===c[2])if("msi-attpdf"===c[1]||"msi-attdoc"===c[1]&&d[c[2]]||"msi-attothers"===c[1]&&d[c[2]])if((window.ActiveXObject||"ActiveXObject"in window)&&e[c[2]])$(a).find(".zmImg").trigger("click");else{var f=zmUtil.isChildWindow();f?zmWindow.viewAttachment(b,"web",c[1]):g.viewAttachment(b,"web",c[1])}else"msi-attothers"===c[1]&&c[2].indexOf("htm")!==-1||"msi-attdoc"===c[1]&&"xml"===c[2]?g.viewHTMLFile(b,"html"):"msi-attimg"!==c[1]&&"msi-attaudio"!==c[1]&&"msi-attvideo"!==c[1]||$(a).find(".zmImg").trigger("click");else zmUtil.isChildWindow()?zmWindow.viewAttachment(b,"view",c[1]):g.viewAttachment(b,"view",c[1])},g.viewHTMLFile=function(a){var b="",c="";b+=zmail.conPath+"/FileDownload/"+zmUtil.encodeFileName(a.fn),b+="?mode=view&accId="+zmail.accId+"&attachId="+a.Id+"&entityType="+a.et,b+="&entityId="+a.e+"&partId="+a.p,zmail.mailObj[a.e]&&zmUtil.isSharedFolder(zmail.mailObj[a.e].FD)&&(c=zmUtil.getShareId(zmail.mailObj[a.e].FD),b+="&shId="+c),window.open(b)},g.addEventToCalender=function(a,b){var c={entityId:a.e,attachId:a.Id,entityType:a.et},d=zmail.mailObj[b];d?(d.streams?(c.groupId=d.groupId,c.streamsView=!0,c.actionType="viewGroupEntity"):c.accId=zmail.accId,zmUtil.isSharedFolder(d.FD)&&(c.shId=zmUtil.getShareId(d.FD))):c.accId=zmail.accId;var e=function(a){var b={added:f.attachmentmenu.eventadded,exist:f.attachmentmenu.eventupdated,error:f.attachmentmenu.eventerror};"error"===a.msg?zmUtil.succErrMsg("e",b[a.msg]):a.msg&&zmUtil.succErrMsg("s",b[a.msg])};zmAjq.XHR({u:zmail.conPath+"/OpenDocument/"+zmUtil.encodeFileName(a.fn),t:"POST",fn:e,p:c,ep:{}})},g.viewAttachment=function(a,b,c){var d,e,g,h=_zm.escapeTags(a.fn),i="zm_viewatt_"+a.Id+a.e,j="",k=zmail.mailObj[a.e];if(zmsuite.isWorkspaceAvailable(i)&&"restore"!==a.src)e=zmsuite.getCenter(i),zmsuite.showWorkSpace(i);else{c=c||zmUtil.fileTyp(a.fn)[1];var l={appname:h,appId:i,faqKey:"attach",data:{CNodes:"3"},appIcon:c},m=$.extend({},l);"restore"!==a.src&&zmsuite.setWorkSpace(l),e=zmsuite.getCenter(i);var n=e[0].getNodes(),o=[{iconList:["msi-addcloud"],data:"addcloud",tooltip:f.attachmentmenu.addtocloud},{iconList:["msi-download"],data:"download",tooltip:f.attachmentmenu.download}];"FileDownload"===zmUtil.isPreviewAvailable(a.fn).apiName&&o.push({iconList:["msi-print"],data:"print",tooltip:f.attachmentmenu.print}),o.push({iconList:["msi-action"],data:"more",tooltip:f.attachmentmenu.moreact}),o.push({iconList:["msi-close"],data:"close",tooltip:f.attachmentmenu.close});var p={list:{left:[],right:[{actionArr:o}]},clk:function(b,c,d){if("close"===d)zmsuite.closeWorkspace(i);else if("download"===d)zmUtil.downloadAttachment(a);else if("addcloud"===d)zmUtil.cloudUploader(a);else if("print"===d){var g=e[0].getNodes()[2].$el.find("iframe")[0];"visible"===g.style.visibility&&g.contentWindow.print()}else if("more"===d){var h=$(b.target||b.srcElement),j=h.closest("li"),k=[{htm:f.attachmentmenu.sendInMail,data:{action:"send email"}},{htm:f.attachmentmenu.shareInPost,data:{action:"share"}}];j.find("b").addClass("SC_ddn"),zmsuite.showMenu({par:j,list:k,clk:function(b){"send email"===b.action?zmUtil.openComposeWithAtt([a]):"share"===b.action&&zmUtil.loadNewPostDialog("",[a]),zmUtil.hideMenu()}})}}},q={list:{left:{leftHTML:h,centerAlign:!0}}};n[0].push(p.list),n[0].setListener("click",p.clk),n[1].push(q.list),"view"===b?d=zmail.conPath+"/OpenDocument/"+zmUtil.getDummyFilename(a.fn)+"?attachId="+a.Id+"&entityType="+a.et+"&entityId="+a.e+"&partId="+a.p:"web"===b&&(d=zmail.conPath+"/FileDownload/"+zmUtil.getDummyFilename(a.fn)+"?mode=view&attachId="+a.Id+"&entityType="+a.et+"&entityId="+a.e+"&partId="+a.p);var r=k?k.FD:"";if(r&&zmUtil.isSharedFolder(r)){var s=zmUtil.getShareId(r);d+="&shId="+s}d+=k&&k.streams?"&streamsView=true&groupId="+k.groupId+"&actionType=viewGroupEntity":"&accId="+zmail.accId,j=$('<iframe style="visibility:hidden" frameborder="0" width="100%" height="100%"scrolling="auto" src="'+d+'"></iframe>'),g=zmComponent.loadingBand({container:n[2].$el[0],type:"loading"}),(window.ActiveXObject||"ActiveXObject"in window)&&"msi-attpdf"===zmUtil.fileTyp(a.fn)[1]?window.setTimeout(function(){g(),j.css("visibility","visible")},2e3):j.load(function(){g(),j.css("visibility","visible")}),zmsuite.renderCenter(),zmsuite.showWorkSpace(i),n[2].$el.append(j),$.publish("zmail/SaveTabState",[{appId:i,app:"m",appObj:m,category:"mail_attachment",data:{attObj:a,fileExtn:c,mode:b}}])}e[0].$el.addClass("SC_attachviewer")},g.bindMenus=function(a,b){var c=b.action,d=b.attObj;switch(c){case"addtocloud":d&&zmUtil.cloudUploader(d);break;case"newMail":zmUtil.openComposeWithAtt([d]),zmUtil.hideMenu();break;case"newPost":zmUtil.loadNewPostDialog("",[d])}},g.bindoptions=function(a,d){d=d||{};var e=a.srcElement||a.target||a;b&&(b.remove(),b=void 0);var f=d.from,h=$(e).attr("data-msg");if(void 0!==h){if("close"===h)return void zmUtil.hideMenu();var i=$(e).closest("."+c),j=$(i).attr("data-eid")||d.eId,k="attpop"===f?$(i).attr("data-atid"):$(i).attr("data-detail"),l=function(a){return"preview"===f?zmail.prevMails[j].data.mdata.NEWATT[k]:"attpop"===f?zmList.getCachedAttachmentData(j,a.eId,a.mailType)[parseInt(k)-1]:"streams"===f?d.attList[d.index]:void 0},m=d.attData||l(d);switch($(e).closest(".zmL, ."+c).removeClass("sel"),h){case"downloadall":g.downloadAttach({e:j,et:1},"downloadall");break;case"download":m&&("streams"===f?zmUtil.downloadAttachment(m):g.downloadAttach(m,"dwn"));break;case"addtocloud":m&&zmUtil.cloudUploader(m);break;case"view":"streams"===f?zmUtil.initAttSlideShow(d.attList,d.index):g.showAttachmentOnSlideshow($(e).closest("."+c),m);break;case"addEvent":if("streams"===f)d.type===zmStreamsApp.PostApp.constants.streamTypeName.mail?g.addEventToCalender(m,d.pid):zmUtil.addEventsToCal(m);else{var n=zmUtil.fileTyp(m.fn);m&&"msi-attothers"===n[1]&&"ics"===n[2]&&g.addEventToCalender(m,j)}break;case"linkedMail":zmList.getMailData({msgId:j,opentype:2,type:"lt",src:"external"});break;case"showMore":g.showMore(e,m);break;case"newMail":zmUtil.openComposeWithAtt([m]),zmUtil.hideMenu();break;case"newPost":zmUtil.loadNewPostDialog("",[m]);break;case"close":zmUtil.hideMenu()}}},g.removeMAct=function(){b&&b.remove()};var j=function(b,f){var h=e.util.imageElem(b),j=b.fn;j=j.replace(/</gi,"&lt;"),j=j.replace(/>/gi,"&gt;");var k,l,m,n,o,p=zmUtil.getSubString(d,j),q=zmUtil.fileTyp(b.fn),r=q[1],s=b.dn,t=zmUtil.sizeValueUnround(b.fs)||"",u=b.fn.toLowerCase(),v=4,w=[];for(o in i.basic)l=i.basic[o].getElem({senderName:s,filename:u,fileExtn:r}),l&&w.push(l);m=w.length;var x=[];for(o in i.more)l=i.more[o].getElem(),l&&x.push(l);n=x.length;var y=m+n;return y<=v?w=w.concat(x):(y+=1,x.splice(n-(y-v),y-v),w=w.concat(x),w.push("".concat('<font><i class = "msi-action" title="More" data-msg="showMore"'," data-showFrom =",n-(y-v),"></i></font>"))),w=w.join(""),k=['<div data-atid="'+b.Id+'" class="zmL '+c+'" data-detail="'+f+'"data-eId="'+b.e+'">','<div class="zmLst">','<div class="zmDtl">',g.dom.date({ts:b.rt,from:a.from}),'<div class="zmImg">'+h+"</div>",'<div class="zmFrm"><span title="'+zmUtil.encodeFileName(b.fn)+'" data-msg="view">'+p+'</span></div><div class="zmSub">'+w+g.dom.sender({dn:b.dn,from:a.from}),"</div>",'<div class="zmSze"><span class="sum">'+t+"</span></div>","</div>","</div></div>"].join("")},k=function(b,e){a=e||{},d="attpop"===a.from?22:12,c=a.attClass||"zmAch";var f,g=[],h={},i=b.length;for(f=0;f<i;f++)h=b[f],g.push(j(h,f));return g=g.join("")};e.build=k,e.util=g}();