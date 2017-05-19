window.zmStreamsApp.PostActions=function(a){"use strict";var b=zmStreamsApp.constants.notifications;a.init=function(b,c){var d;a.collection||(a.collection=new a.models.PostsCollection({}));var e=a.collection;if(b.id.indexOf("#")===-1){var f=b.groupId?b.groupId:zmail.zuid;b.id=f+"#"+b.id}var g=new a.models.Post(b);g=e.add(g,{silent:!0,merge:!0});var h=new a.views.Post({model:g});return d=h.$el,c&&$(c).append(d),d};var c=function(b){var c=a.collection,d=[];return b.eid.indexOf("#")===-1&&b.group.id&&"1"!==b.entityId&&(b.eid=b.group.id+"#"+b.eid),c&&c.models&&(d=_.find(c.models,function(a){return a.id===b.eid})),d};return a.removeViews=function(a){var b,d;_.each(a,function(a){b=$(a).data();var e=c({eid:b.id});e&&(d=e.getView(b.postactionviewid),d.onClose())})},a.getActivityLogs=function(a,b,d){var e={eid:a.id,group:a.gnrl?a.gnrl.group:a.groupId,elem:d[0],isSeeMore:!1},f=c(e);b?(e.isSeeMore=!0,f.trigger("change:activityLog",e)):f.getActivity(e)},a.getPostTemplate=function(b){b.isPrint=!0;var c=a.template.actionData(b);$(b.elm).append(c)},a.getSharedMail=function(b,c,d){d.comment.id=b;var e=d.commentuuid;e instanceof Array&&(e=e[0]);var f=_zm.getDOM(["DIV",{attrs:{"class":"SCS_postWra",id:"zms_"+b}}]);c.appendChild(f),d.elm=f;var g={shId:d.shId,shOwner:d.comment.shOwner,isSharedFolder:!0,id:b,groupId:d.comment.shOwner,etype:"1",sharedUsers:d.sharedUsers};a.init(g,f);var h={comments:d.comment,shId:d.shId,shOwner:d.comment.shOwner,isSharedFolder:!0,id:b,groupId:d.comment.shOwner,etype:"1"};zmStreamsApp.CommentModule.init(h,f,e)},"undefined"!=typeof zmNCenter&&zmNCenter.handlers.add("streams",function(a,d){d=_zm.copyOf(d),"string"==typeof d.group&&(d.group=$.parseJSON(d.group));var e=c(d),f=d.ntype;if(!_.isEmpty(e)){if(d.nby!==zmail.zuid){var g=f===b.like,h=f===b.unlike;if(g||h){var i=e.get("likes");i=g?i+1:i-1;var j=e.get("likeList");if(g){var k=_.indexOf(j,d.nby);k===-1?j.push(d.nby):i-=1}else j=_.without(j,d.nby);e.set("likeList",j),e.set("likes",i),e.trigger("change:like")}var l=f===b.invite,m=f===b.unshared;if(l||m){var n=e.get("invitee");e.set("inviteeList",d.followList.split(",")),n=l?n+1:n-1,e.set("invitee",n),e.trigger("change:InviteeList")}if(f===b.lock_invites||f===b.unlock_invites){var o=e.get("showinvite");e.set("showinvite",!o),e.set("lockInvites",f===b.lock_invites),e.trigger("change:lockInvites")}}var p=f===b.add_comment||f===b.comment_group_mention||f===b.comment_mention;if(p){var q=e.get("inviteeList"),r=e.get("invitee"),s=d.followList.split(",");r=q.length<s.length?r+1:r-1,e.set("invitee",r),e.set("inviteeList",s),e.trigger("change:InviteeList")}}}),a}(zmStreamsApp.PostActions||Zmail.App.extend({})),window.zmStreamsApp.PostActions.template=function(){"use strict";var a=zmStreamsApp.i18ntext.streams.activitylog,b=zmText.get("streams"),c={},d={1:a.invited,2:a.removed,100:a.sharedemail,200:a.createnote,300:a.createtask,400:a.createevent,600:a.poststatus,1000:a.postlink,202:a.changetitle,203:a.modifycontent,204:a.addattach,205:a.removeattach,206:a.changebackground,301:a.changetitle,302:a.changedesc,303:a.changepriority,305:a.assigntask,306:a.changecategory,307:a.setduedt,308:a.setstart,309:a.setremind,311:a.addattach,312:a.removeattach,313:a.subtask,sharedDraft:a.shareddraft,sentEmail:a.sentemail};return c.showInviteeList=function(a){a=a||[],_.isArray(a)||(a=Object.keys(a));var b,c,d,e,f,g=a.length,h=[],i=[];if(g){var j=1===g?"View 1 share":"View "+g+" shares";for(d=["SPAN",{attrs:{"class":"SC_lnk SCShowinvite"},child:[["text",j]]}],g=g>10?10:g,b=0;b<g;b++)e=String(a[b]),c=zmCont.isGroup(e)?zmCont.getGroup(e):zmCont.getOrgContacts(e)[e],f=c.fn||c.name,h.push(["IMG",{attrs:{src:c.photo,title:f}}]);i=["DIV",{attrs:{"class":"mailSLWra"},child:[["DIV",{attrs:{"class":"mailSharedList"},child:[["UL",{child:[["LI",{child:h}]]}],d]}]]}]}return _zm.getDOM(i)},c.actionData=function(a){var d=String(a.by),e=a.invitee,f=a.likes,g=a.groupId,h=a.shGroup,i=function(a){return a=parseInt(a),a=!isNaN(a)&&a>0?a:""};e=i(e),f=i(f);var j=f?"contentLiked":"",k=f?"contentLiked":"display:none",l=a.like?" contentILiked":"",m=b.common.labels.sendPrivateOwner,n=a.lockInvites?"msi-invite msi-Dinvitee":"msi-invite msi-Ainvitee inviteeColor",o=a.pvtcmts&&a.pvtcmts.privateToPost,p=d!==zmail.zuid&&a.privateToPost?["I",{attrs:{"class":"SndPrv SndPrvO",style:o?"display:none":""},child:[["text",m]]}]:[],q=zmCont.getGroup(g),r=q&&q.moderator&&q.moderator.indexOf(zmail.zuid)!==-1,s=a.isOwner||r||zmail.zuid===a.by?" lockInviteClass":" cursorDefault",t=a.inviteeList;t&&!_.isArray(t)&&(t=Object.keys(t));var u=t&&t.length?"":" SC_dyn",v=c.getFontDOM(t,a),w=e&&!a.isPrint?c.showImageInvite(t,h):[],x=a.isPrint?[]:["SPAN",{attrs:{"class":"SC_SDot dispDot"+u}}],y=["DIV",{attrs:{"class":"SCSpostAct"},child:[["DIV",{attrs:{"class":"SCS_postAct"},child:[["DIV",{attrs:{"class":l+" "+j},child:[["I",{attrs:{"class":"msi-love"}}],["FONT",{attrs:{style:k},child:[["text",f]]}],["SPAN",{attrs:{"class":"SC_SDot"}}],["I",{attrs:{"class":String(n)+s}}],x,w,v]}],p]}]]}];return _zm.getDOM(y)},c.activityLogs=function(b,d,e){var f=b.length>5&&!e.isSeeMore?["SPAN",{attrs:{"class":"SC_lnk SC_seemore"},child:[["text",a.seeall]]}]:[],g=c.activityLogDetails(b,d,e),h=[["DIV",{attrs:{"class":"SCS_activitiyFeed"},child:[["B",{attrs:{"class":"cursorPointer timeline"},child:[["text",a.timeline]]}],g,f]}]];return _zm.getDOM(h)},c.activityLogDetails=function(b,c,e){var f,g,h,i,j=e.isSeeMore,k=e.groupId,l=["UL",{child:[]}],m="";for(var n in b){switch(g=["LI",{child:[]}],h=b[n],c=h.invitees,i=zmStreamsApp.util.getNameOfInvitee(h.by,c,h.name),g[1].child.push(["SPAN",{child:[["text",i]]}]),m=e.isDraft&&100===h.activityType?d.sharedDraft:e.etype!==zmStreamsApp.PostApp.constants.streamTypeName.mail||e.shared||100!==h.activityType?d[h.activityType]:d.sentEmail,m=void 0===m?" ":" "+m+" ",h.activityType){case 305:f=h.activityMessage.split(","),m+=zmStreamsApp.util.getNameOfInvitee(f[1],c,h.name);break;case 1:case 2:f=h.activityMessage,m+=zmStreamsApp.util.getNameOfInvitee(f,c,h.name);break;case 301:m+=h.activityMessage.split(",")[1];break;case 202:m+=h.activityMessage;break;case 206:m+=znBox.getConstantsValues(h.activityMessage,"color");break;case 308:case 307:var o=h.activityMessage.split(",");m=o[1]?m+o[1]:a.remduedt;break;case 306:m+=zmtCom.getProjectName(k,h.activityMessage.split(",")[1]);break;case 303:m+=zmtCom.getPriorityByValue(parseInt(h.activityMessage.split(",")[1]));break;case 304:var p=h.activityMessage.split(","),q=zmtCom.getStatusByValue(p[1]);m+="2"===p[0]&&"3"===p[1]?zmText.applyArgs(a.taskcomp,{status:q}):zmText.applyArgs(a.taskreop,{status:q})}g[1].child.push(["text",m]);var r=new Date(h.on),s=Date.parse(r)?zmStreamsApp.util.getHourAndTime(parseInt(h.time)):"";if(g[1].child.push(["SPAN",{child:[["text",h.on+" "+s]]}]),l[1].child.push(g),"4"===n&&!j)break}return l},c.showImageInvite=function(a,b){var c,d,e=[],f=[],g=0;for(var h in a){c=!1,d=a[h];var i;if(zmCont.isGroup(d))i=zmCont.getGroup(d);else{for(var j in b)b[j].id===d&&(i={},i.photo=zmail.defaultGroupPhoto,c=!0);c||(i=zmCont.getOrgContacts(d)[d])}if(e.push(["IMG",{attrs:{src:i.photo}}]),g++,3===g)break}return f=["UL",{attrs:{"class":"invitedList clicktoLoad imageList"},child:[["LI",{child:e}]]}]},c.getFontDOM=function(a,b){var c="",d=3;(b.lockInvites===!1||b.isOwner||zmail.zuid===b.by)&&(c="+"),a&&a.length>d&&(""===c&&(c="+"),c+=a.length-d),b.isPrint&&(c=a.length?a.length:"");var e=["FONT",{attrs:{"class":"clicktoLoad fontClass SC_thm"},child:[["text",c]]}];return e},c}(),zmStreamsApp.PostActions=function(a){"use strict";return a}(zmStreamsApp.PostActions||Zmail.App.extend({})),zmStreamsApp.PostActions.models=function(a){"use strict";return a.Post=Zmail.Model.extend({getActivity:function(a){this.sync("getActivity",this,a)},like:function(a,b){var c=a?"getLikes":"like";this.sync(c,this,{elem:b,error:function(){b.removeClass("zmLockLike")}})},lockInvites:function(){this.sync("lockInvites",this,{})},addRemoveInvite:function(a,b){this.sync("invitee",this,{zuids:a,atype:b?"addInvitee":"unInvite"})},setView:function(a,b){var c=this.get("views");c=c||{},c[a]=b,this.set("views",c)},getView:function(a){var b=this.get("views");return b[a]},fetchInvitees:function(a){a.list?this.set({inviteeList:a.list,shGroup:a.shgroup}):this.sync("getInvitees",this,{})},updateModel:function(a,b,c,d){var e=this.data;if("like"===c){var f=e.like,g=b.get("likes");g=f?g+1:g-1;var h=b.get("likeList");f?h.push(zmail.zuid):h=_.without(h,zmail.zuid),b.set("likeList",h),b.set("likes",g),b.set("like",f)}else if("getLikes"===c){var i=a.list;i=i?Object.keys(i):[],b.set("likes",i.length),b.trigger("change:liked",i,d)}else if("lockInvites"===c){var j=b.get("lockInvites");b.get("by")!==zmail.zuid&&b.set("showinvite",j),b.set("lockInvites",!j)}else if("invitee"===c){var k="addInvitee"===e.actionType,l=String(e.fZuid).split(","),m=b.get("inviteeList")||{};if(k){var n,o=l.length;for(n=0;n<o;n++)m[l[n]]=zmail.zuid}else delete m[l];b.set("invitee",Object.keys(m).length),b.set("inviteeList",m),b.trigger("change:InviteeList")}else if("getActivity"===c){var p=zmStreamsApp.util.orderComments(a.list,a.order);b.set("activityLog",p,{silent:!0}),b.trigger("change:activityLog",d)}},url:zmail.conPath+"/post.do",serialized:function(a,b){var c=this;b.callback=c.updateModel;var d={entityId:c.id,entityType:c.get("etype"),streamsView:!0,groupId:c.get("groupId")};b.extraParam={elem:b.elem,isSeeMore:b.isSeeMore},b.success=function(d){b.callback(d,c,a,b.extraParam)},"like"===a?(d.mode="like",d.like=!c.get("like"),d.actionType=d.like?"like":"unlike",d.authorZuid=c.get("by")):"getLikes"===a?(d.mode="like",d.actionType=c.get("actionType")):"invitee"===a?(d.mode="invite",d.actionType=b.atype,d.fZuid=b.zuids,this.get("postUuid")&&(d.cdate=c.get("postUuid"))):"getInvitees"===a?(d.mode="invite",d.actionType=c.get("actionType"),b.success=""):"lockInvites"===a?(d.mode="lockinvites",d.actionType=c.get("lockInvites")?"unlockInvites":"lockInvites"):"getActivity"===a&&(d.mode="activity",d.actionType=c.get("groupId")===zmail.zuid?"viewSelfData":"viewGroupEntity");var e=d.entityId;return e&&e.indexOf("#")!==-1&&(d.entityId=e.substring(e.indexOf("#")+1,e.length)),d}}),a.PostsCollection=Zmail.Collection.extend({model:a.Post}),a}(zmStreamsApp.PostActions.models),zmStreamsApp.PostActions=function(a){"use strict";return a}(zmStreamsApp.PostActions||Zmail.App.extend({})),zmStreamsApp.PostActions.views=function(a){"use strict";var b=zmText.get("streams");return a.Post=Zmail.View.extend({template:zmStreamsApp.PostActions.template,events:{"click .msi-love":function(a){var b=$(a.currentTarget);b.hasClass("zmLockLike")||(b.toggleClass("zmLockLike"),this.model.like("",b))},"click .msi-love + font":function(a){var b=this.model.get("likeList");this.likeCount(b,{elem:a.currentTarget})},"click .lockInviteClass":function(){this.model.lockInvites()},"click .clicktoLoad":"addinvitee","click .msi-invitee + font":"showInvitee","click .SndPrvO":"addPrivateToOwner","click .SCShowinvite":"showInviteeList","click .SC_seemore":function(a){var b=$(a.currentTarget).parents(".SCSpostAct");zmStreamsApp.PostActions.getActivityLogs(this.model,!0,b)},"click .timeline":function(a){var b=$(a.currentTarget);b.next().toggle(),b.parent().find(".SC_seemore").toggle()}},like:function(){var a=this.model,c=this.$el,d=c.find(".msi-love"),e=d.parent();d.removeClass("zmLockLike"),a.get("like")?(e.addClass("contentILiked "),zmComponent.tooltip({elm:d[0],text:b.streams.tooltip.unlikePost,arrow:"top"})):(e.removeClass("contentILiked "),zmComponent.tooltip({elm:d[0],text:b.streams.tooltip.likePost,arrow:"top"}));var f=a.get("likes")||"",g=e.children("font:first");g.text(f),f?(g.show(),e.addClass("contentLiked")):(g.hide(),e.removeClass("contentLiked"))},showInviteeList:function(){var a=this.model.get("sharedUsers");_.isArray(a)||(a=Object.keys(a)),zmStreamsApp.util.showMembersDialog(a,b.common.labels.folderShareList)},addPrivateToOwner:function(a){var b=a.currentTarget,c=$(b).data("commentView"),d=$(b).parents(".SCS_postWra"),e=d.siblings(".sc_cmdv");e.length||(e=d.children(".sc_cmdv").length?d.children(".sc_cmdv"):$(b).parents(".SCS-post").children(".sc_cmdv")),$(b).hide(),zmStreamsApp.CommentModule.sendPrivateToOwner(this.model.id,e,c)},likeCount:function(a,b){var c=this.$el.find(".msi-love").next(),d=zmCont.getOrgContacts(a.join(","),"Array");$(c).text(d.length),zmStreamsApp.util.createPopup({items:d,parent:b.elem,ulclass:"SC_Pr",parentClass:"SC_Slke",type:"oneLine"})},addinvitee:function(a){var c=a.currentTarget;if($(c).hasClass("clicktoLoad")&&!$(c).hasClass("locked")){$(c).addClass("locked");var d=this,e={items:d.model.get("inviteeList"),shGroup:d.model.get("shGroup"),parent:c,isOwner:d.model.get("isOwner"),type:"invitee_popup",invite:!0};this.model.sync("getInvitees",d.model,{}).done(function(a){a=a[1],$.isEmptyObject(a)||d.model.fetchInvitees(a),e.items=a.list,e.shGroup=a.shgroup,e.showInvite=d.model.get("showinvite"),e.dialogDidMount=function(a){d.bindInvitee(d,a.$els.$contentWrapper)},e.showInvite&&(e.buttons=[{name:b.common.labels.invite,callback:function(a){var b=$(a.$els.$contentWrapper).find("input"),c=zmAutoFill.getAddress(b,"id");c&&d.model.addRemoveInvite(c,!0),zmStreamsApp.util.hideMenu(),a.remove()}},{name:b.common.labels.cancel,callback:function(a){a.remove(),zmStreamsApp.util.hideMenu()},isCancel:!0}]),zmStreamsApp.util.createDialog(e),$(c).removeClass("locked")})}},bindInvitee:function(a,b){var c=$(b).find(".zm_sgst"),d=a.model.get("inviteeList"),e=a.model.get("groupId"),f=a.model.get("mentionList"),g=[];d&&!_.isArray(d)&&(g=Object.keys(d)),g.push(a.model.get("by")),f&&!_.isArray(f)&&(f=Object.keys(f)),g=_.union(g,f);var h={contentArray:"org:"+e,compare:["fn","","nn","eid"],LType:"3",OType:"2",display:"fn",eliminateAt:!0,restrict:g,groupId:!0,addtolist:!0};zmAutoFill.setAutofill(h,c),zmAutoFill.resizeInput(c),$(b).find(".SC_cs .msi-close").click(function(){var b=$(this).parent(),d=$(b).data("uid");$(b).parent().remove(),a.model.addRemoveInvite(d),g=_.without(g,String(d)),h.restrict=g,zmAutoFill.setAutofill(h,c)})},showInvitee:function(a){var b=this.model,c=a.currentTarget,d={items:b.get("inviteeList"),shGroup:b.get("shGroup"),parent:c,ulclass:"SC_Phr SC_P2r",type:"invitee_popup",parentClass:"SC_Sinv"};if(this.model.get("inviteeList"))zmStreamsApp.util.createPopup(d);else{var e=this;this.model.sync("getInvitees",b,{}).done(function(a){a=a[1],$.isEmptyObject(a)||e.model.fetchInvitees(a),d.items=a.list,d.shGroup=a.shgroup,zmStreamsApp.util.createPopup(d)})}},lockInvitee:function(){var a=this.model,c=a.get("id"),d=this.$el,e=d.find(".msi-invite"),f=a.get("lockInvites");f?e.filter(".msi-invite").removeClass("msi-Ainvitee inviteeColor").addClass("msi-Dinvitee"):e.filter(".msi-invite").removeClass("msi-Dinvitee").addClass("msi-Ainvitee inviteeColor");var g=e.filter(".msi-invite");g.hasClass("cursorDefault")?g.hasClass("msi-Dinvitee")&&zmComponent.tooltip({elm:g[0],text:b.streams.tooltip.ownerdeny,arrow:"top"}):g.hasClass("lockInviteClass")&&(g.hasClass("msi-Ainvitee")?zmComponent.tooltip({elm:g[0],text:b.common.labels.denyInvites,arrow:"top"}):g.hasClass("msi-Dinvitee")&&zmComponent.tooltip({elm:g[0],text:b.common.labels.allowInvites,arrow:"top"}));var h=zmStreamsApp.PostApp?zmStreamsApp.PostApp.models.posts:[];if(_.size(h)&&(h=h.get(c)||{},_.size(h))){h.get("myact").showinvite=a.get("showinvite");var i=zmStreamsApp.util.getMentionList(h);zmStreamsApp.CommentModule.setMentions(c,i)}a.trigger("change:InviteeList")},activityLog:function(a){var b=$(a.elem).find(".SCSpostAct").length?$(a.elem).find(".SCSpostAct"):$(a.elem).filter(".SCSpostAct"),c=this.model,d=c.get("activityLog");if(d.length){$(b).find(".SCS_activitiyFeed").remove();var e={isSeeMore:a.isSeeMore,groupId:c.get("groupId"),isDraft:c.get("isDraft"),etype:c.get("etype"),shared:c.get("shared")};$(b).prepend(this.template.activityLogs(d,c.get("shGroup"),e))}},inviteeCount:function(){var a=this.model,c=this.template,d=this.$el,e=d.find(".msi-invite"),f=$(e).next(),g=a.get("invitee"),h=a.get("inviteeList");h&&!_.isArray(h)&&(h=Object.keys(h)),g||h.length?$(f).removeClass("SC_dyn"):$(f).addClass("SC_dyn");var i=[];h.length&&h[0].length&&(i=_zm.getDOM(c.showImageInvite(h))),$(d).find(".imageList").remove(),$(d).find(".fontClass").remove();var j=a.get("lockInvites"),k={lockInvites:j,isOwner:a.get("isOwner"),by:a.get("by"),groupId:a.get("groupId")},l=_zm.getDOM(c.getFontDOM(h,k)),m=$(d).find(".msi-invite").parent();m.append(i),m.append(l);var n=$(l).filter(".fontClass"),o=$(i).filter(".imageList");a.get("showinvite")?(n.length&&zmComponent.tooltip({elm:n[0],text:b.streams.tooltip.addviewinvite,arrow:"top"}),o.length&&zmComponent.tooltip({elm:o[0],text:b.streams.tooltip.addviewinvite,arrow:"top"})):(n.length&&zmComponent.tooltip({elm:n[0],text:b.streams.tooltip.viewinvite,arrow:"top"}),o.length&&zmComponent.tooltip({elm:o[0],text:b.streams.tooltip.viewinvite,arrow:"top"}))},initialize:function(){this.render(),this.listenTo(this.model,"change:like",this.like),this.listenTo(this.model,"change:liked",this.likeCount),this.listenTo(this.model,"change:InviteeList",this.inviteeCount),this.listenTo(this.model,"change:lockInvites",this.lockInvitee),this.listenTo(this.model,"change:activityLog",this.activityLog)},addTitle:function(){var a=this.$el,c=$(a).find(".msi-love");c.length&&(this.model.get("like")?zmComponent.tooltip({elm:c[0],text:b.streams.tooltip.unlikePost,arrow:"top"}):zmComponent.tooltip({elm:c[0],text:b.streams.tooltip.likePost,arrow:"top"}));var d=$(a).find(".msi-invite");d.hasClass("cursorDefault")?d.hasClass("msi-Dinvitee")&&zmComponent.tooltip({elm:d[0],text:b.streams.tooltip.ownerdeny,arrow:"top"}):d.hasClass("lockInviteClass")&&(d.hasClass("msi-Ainvitee")?zmComponent.tooltip({elm:d[0],text:b.common.labels.denyInvites,arrow:"top"}):d.hasClass("msi-Dinvitee")&&zmComponent.tooltip({elm:d[0],text:b.common.labels.allowInvites,arrow:"top"}));var e=$(a).find(".fontClass"),f=$(a).find(".imageList");this.model.get("showinvite")?(e.length&&zmComponent.tooltip({elm:e[0],text:b.streams.tooltip.addviewinvite,arrow:"top"}),f.length&&zmComponent.tooltip({elm:f[0],text:b.streams.tooltip.addviewinvite,arrow:"top"})):(e.length&&zmComponent.tooltip({elm:e[0],text:b.streams.tooltip.viewinvite,arrow:"top"}),f.length&&zmComponent.tooltip({elm:f[0],text:b.streams.tooltip.viewinvite,arrow:"top"}))},onClose:function(){this.remove()},render:function(){var a=this.model,b=a.get("lockInvites");if(void 0===b){var c=a.get("id");c.indexOf("#")===-1&&(c=a.get("groupId")+"#"+c),b=zmStreamsApp.CommentModule.getLockValue(c),a.set("lockInvites",b)}var d,e=this.cid;return d=a.get("isSharedFolder")?this.template.showInviteeList(a.get("sharedUsers")):this.template.actionData(a.toJSON()),this.$el=$(d),this.addTitle(),$(d).attr("data-postActionViewId",e).attr("data-id",a.id),this.model.setView(e,this),this}}),a}(zmStreamsApp.PostActions.views);