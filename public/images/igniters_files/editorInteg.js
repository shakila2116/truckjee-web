"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}!function(){function a(){}a.init=function(){var b=function(a,b,c){return zmText.get("editorInteg",a,b,c)};a.staticVersion=zmail.editorStatic||"v53",a.language=zmail.user.lang,a.needplaintext=!0,a.editorCSS=!0,a.inlineQuotes=!0,a.modeChange=zmUtil.modeChange,a.spellcheckURL=zmail.urls.spellcheckURL,a.spellcheckProxyUrl=zmail.conPath+"/ze",a.useSameDomain=!0,a.useProxy=!0,a.domain=document.domain,a.tabKeyHandling=!0,a.needEditorFocus=!1,a.needEditorBorder=!0,a.needResizeImage=!1,a.removeInsertOptions=!1,a.removeFontFamily=!1,a.removeFontSize=!1,a.defaultFontSize="10pt",a.defaultFontFamily="Arial,Helvetica,sans-serif",a.defaultFontColor="blue",a.outGoingFontFamily="",a.outGoingFontSize="",a.outGoingColor="";var c=window.location.protocol;a.cssPath=a.imgPath="//"+zmail.jstatic+"/ze/"+a.staticVersion,a.jsPath="//"+zmail.jstatic+"/ze/"+a.staticVersion,a.toolbarOrder=[[["attach","Attachment","zei-attachment"]],[["bold",b("tooltip.bold"),"zei-bold"],["italic",b("tooltip.italic"),"zei-italic"],["underline",b("tooltip.underline"),"zei-underline"],["strikethrough",b("tooltip.strikethrough"),"zei-strike"]],[["fontfamily",b("tooltip.font"),"zei-fontfamily"]],[["fontsize",b("tooltip.fontSize"),"zei-arrow"]],[["forecolor",b("tooltip.fontColor"),"zei-textclr"],["backcolor",b("tooltip.backgroundColor"),"zei-bgclr"]],[["alignoptions",b("tooltip.alignOptions"),"zei-textleft"],["listoptions",b("tooltip.listOptions"),"zei-unorder"],["indentoptions",b("tooltip.indentOptions"),"zei-outdent"],["directionoptions",b("tooltip.directionOptions"),"zei-rtl"]],[["image",b("tooltip.insertImage"),"zei-image"],["link",b("tooltip.insertLink"),"zei-link"]],[["quote",b("tooltip.insertQuote"),"zei-quote"],["removeformat",b("tooltip.removeFormatting"),"zei-removeformat"]],[["table",b("tooltip.table"),"zei-table"],["inserthorizontalrule",b("tooltip.insertHR"),"zei-line"]],[["smiley",b("tooltip.insertSmiley"),"zei-smiley"]],[["otheroptions",b("tooltip.spellcheck"),"zei-arrow ze-big"]]],a.insertOptions=[["table",b("tooltip.bold"),"ze_tbl"],["inserthorizontalrule",b("tooltip.insertHR"),"ze_hr"],["object",b("tooltip.insertHtml"),"ze_obj"],["code",b("tooltip.insertCode"),"ze_icode"],["quote",b("tooltip.insertQuote"),"ze_quote"]],a.align=[{htm:b("dropdown.alignLeft"),datAttr:"justifyleft"},{htm:b("dropdown.alignRight"),datAttr:"justifyright"},{htm:b("dropdown.justify"),datAttr:"justifyfull"},{htm:b("dropdown.alignCenter"),datAttr:"justifycenter"}],a.list=[{htm:b("dropdown.bullets"),datAttr:"insertunorderedlist"},{htm:b("dropdown.numbering"),datAttr:"insertorderedlist"}],a.indent=[{htm:b("dropdown.incIndent"),datAttr:"indent"},{htm:b("dropdown.decIndent"),datAttr:"outdent"}],a.others=[{htm:b("dropdown.plainText"),datAttr:"switchmode"}],a.fontfamily=[{htm:"Serif",ff:"serif"},{htm:"Arial",ff:"arial,helvetica,sans-serif"},{htm:"Courier New",ff:"'courier new',courier,monospace"},{htm:"Georgia",ff:"georgia,times new roman,times,serif"},{htm:"Tahoma",ff:"tahoma,arial,helvetica,sans-serif"},{htm:"Times New Roman",ff:"'times new roman',times,serif"},{htm:"Trebuchet",ff:"'trebuchet ms',arial,helvetica,sans-serif"},{htm:"Verdana",ff:"verdana"},{htm:"Comic Sans MS",ff:"'Comic Sans MS'"},{htm:"Calibri",ff:"Calibri, Verdana, Arial, sans-serif"}],a.fontsize=[{htm:"8",datAttr:"1"},{htm:"10",datAttr:"2"},{htm:"12",datAttr:"3"},{htm:"14",datAttr:"4"},{htm:"18",datAttr:"5"},{htm:"24",datAttr:"6"},{htm:"36",datAttr:"7"}],a.insertOptions=[["image",b("tooltip.insertImage"),"ze_tim"],["smiley",b("tooltip.insertSmiley"),"ze_tis"],["link",b("tooltip.insertLink"),"ze_til"],["table",b("tooltip.table"),"ze_tbl"],["inserthorizontalrule",b("tooltip.insertHR"),"ze_hr"],["object",b("tooltip.insertHtml"),"ze_obj"],["code",b("tooltip.insertCode"),"ze_icode"],["quote",b("tooltip.insertQuote"),"ze_quote"]],a.textDir=[{htm:"RTL",datAttr:"rtl"},{htm:"LTR",datAttr:"ltr"}],a.SmarttoolbarOrder=[[["fontfamily",b("tooltip.font"),"zei-arrow"]],[["fontsize",b("tooltip.fontSize"),"zei-arrow"]],[["heading",b("tooltip.heading"),"zei-arrow"]],[["bold",b("tooltip.bold"),"zei-bold"],["italic",b("tooltip.italic"),"zei-italic"],["underline",b("tooltip.underline"),"zei-underline"],["strikethrough",b("tooltip.strikethrough"),"zei-strike"]],[["forecolor",b("tooltip.fontColor"),"zei-textclr"]],[["backcolor",b("tooltip.backgroundColor"),"zei-bgclr"]],[["link",b("tooltip.insertLink"),"zei-link"]],[["alignoptions",b("tooltip.alignOptions"),"zei-textleft"]],[["listoptions",b("tooltip.listOptions"),"zei-unorder"]]],a.Paragraphtoolbar=[[["heading",b("tooltip.heading"),"zei-arrow"]],[["alignLeft",b("dropdown.alignLeft"),"zei-textleft"],["alignRight",b("dropdown.alignRight"),"zei-textright"],["alignCenter",b("dropdown.alignCenter"),"zei-textcenter"],["alignjustify",b("dropdown.justify"),"zei-textjustify"]],[["NumBullets",b("dropdown.bullets"),"zei-order"],["DotBullets",b("dropdown.numbering"),"zei-unorder"]],[["LefttoRight",b("dropdown.rightToLeft"),"zei-rtl"],["RightToLeft",b("dropdown.leftToRight"),"zei-ltr"]]],a.insertToolbar=[[["quote",b("tooltip.insertQuote"),"zei-quote"]],[["image",b("tooltip.insertImage"),"zei-image"]],[["removeformat",b("tooltip.removeFormatting"),"zei-removeformat"]],[["link",b("tooltip.insertLink"),"zei-link"]],[["unlink",b("tooltip.removeLink"),"zei-unlink"]],[["tableGrid",b("tooltip.table"),"zei-table"]],[["inserthorizontalrule",b("tooltip.insertHR"),"zei-line"]],[["smiley",b("tooltip.insertSmiley"),"zei-smiley"]]],a.heading=[{htm:b("dropdown.normal"),datAttr:"Normal",fontsize:"20"},{htm:b("dropdown.heading1"),datAttr:"Heading1",fontsize:"26"},{htm:b("dropdown.heading2"),datAttr:"Heading2",fontsize:"24"},{htm:b("dropdown.heading3"),datAttr:"Heading3",fontsize:"22"},{htm:b("dropdown.heading4"),datAttr:"Heading4",fontsize:"20"},{htm:b("dropdown.heading5"),datAttr:"Heading5",fontsize:"18"},{htm:b("dropdown.heading6"),datAttr:"Heading6",fontsize:"16"}],a.imgAction="/ze/uploadImage",a.context="zm",a.imgAction="/zm/zeUploadImage.do",a.csrfParamVal="zmrcsr",a.plainTextDataDef=!0,a.csrfCookieVal=_zm.getCookie("zmcsr"),a.contextVal="zm",a.smileyPath=c+"//"+zmail.jstatic+"/ze/"+a.staticVersion+"/images/",a.imgParameters="?aId="+zmail.accId+"&mode=composeSet&frm=c",a.imgParametersFunction=function(){"object"!=typeof zmTab||"settings"!==zmTab.currentTab&&"zm-settings"!==zmTab.currentTab?a.imgParameters="?aId="+zmail.accId+"&mode=composeSet&frm=c":a.imgParameters="?aId="+zmail.defAccId+"&mode=composeSet&frm=s"},a.attachDrop=[{htm:b("dropdown.attachDesktop"),clk:function(a){zmComp.triggerUpload(a)}},{htm:b("dropdown.attachCloud"),clk:function(a){zmComp.triggerCloudUpload(a)}}],a.setContentProcessed=!1;var d=navigator.userAgent.toLowerCase();a.is_ie=d.indexOf("ie")!==-1,a.is_safari=d.indexOf("safari")!==-1,a.is_opera=d.indexOf("opera")!==-1,a.is_mac=d.indexOf("mac")!==-1,a.language=a.ElementInArray(["en","zh","da","nl","fr","de","hu","it","ja","pl","pt","ru","es","sv","tr","uk"],a.language)||"en",a.is_opera&&a.toolbarOrder.pop(),a.loadURL(a.cssPath+"/css/editor.min.css","css"),a.editorCoreLoaded=zmAppLoader.loadFiles("extjs",a.jsPath+"/js/i18n/"+a.language+"/zep.min.js"),a.loading=!0},a.attach=function(a){zmComp.triggerUpload(a)},a.loadURL=function(a,b){var c,d,e=document;"css"===b?(c=e.createElement("link"),c.type="text/css",c.rel="stylesheet",c.href=a,e.getElementsByTagName("head")[0].appendChild(c)):"js"===b&&(d=e.createElement("script"),d.type="text/javascript",d.src=a,d.charset="utf-8",e.getElementsByTagName("head")[0].appendChild(d))},a.ElementInArray=function(a,b){for(var c=a.shift();c;){if(c===b)return c;c=a.shift()}},a.loadInsertImage=function(a,b,c,d,e){var f="/mail/ImageSignature?fileName="+a+"&accountId="+c+"&storeName="+b;f+="c"===e?"&frm=c":"&frm=s",ZE&&ZE.activeEditor&&ZE.activeEditor.previewImage(f)},window.ZE_Init=a}();var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;if(void 0!==g)return g.call(d)};!function(){var a=zmail.Core.Namespaces,b=a.create("zmail.ZEditor.AutoComplete.System"),c=zmail.Components.AutoComplete,d=c.System.AbstractHTMLContentEditable,e=c.Utils,f=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"init",value:function(a){var c=this;c.editor=a,c.avoidEnterAction=!1,c.editor.initobj.isEnterKeyHandler=c.enterKeyHandler.bind(c),_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"init",this).call(this,a.doc.body)}},{key:"destroy",value:function(){var a=this;_get(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"destroy",this).call(this),a.editor=null}},{key:"getSelectionRange",value:function(){var a,b,c=this,d=c.editor,e=d.win,f=d.doc;return a=e.getSelection(),b=f.createRange(),a.rangeCount?(b.setStart(a.anchorNode,a.anchorOffset),b.setEnd(a.anchorNode,a.anchorOffset),b):null}},{key:"enterKeyHandler",value:function(){var a=this;return a.avoidEnterAction||setTimeout(function(){$(a).triggerHandler("textchange",{element:a.editor.doc.body,source:a,event:null})},0),a.avoidEnterAction}},{key:"replaceContent",value:function(a,b){var c=this,d=c.editor.win.getSelection(),e=c.getCurrentTypingWord(),f=c.getSelectionRange();f.setStart(f.startContainer,f.startOffset-e.length),d.removeAllRanges(),d.addRange(f),c.editor.insertHTML(b)}},{key:"getCurrentTypingWord",value:function(){var a=this,b=a.getSelectionRange(),c=b.startContainer,d=b.startOffset;if(3!==c.nodeType)return null;var f=c.nodeValue,g=e.findWordAtIndex(f,d);return g}},{key:"getListAnchorBounds",value:function(){var a=this,b=a.editor,c=a.getCurrentTypingWord(),d=a.getSelectionRange();d.setStart(d.startContainer,d.startOffset-c.length);var e=b.iframe.getBoundingClientRect(),f=d.getBoundingClientRect();return{top:e.top+f.top,right:e.left+f.left+f.width,left:e.left+f.left,bottom:e.top+f.top+f.height,height:f.height,width:f.width}}}]),b}(d);b.ZEditorUserInput=f}();