!function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Constants"))}(function(){"use strict";this.CONTACTS_TYPES={PERSONAL:"personal",ZOHO_ORG:"org"},this.MODES={MOST_USED:"500",ZUID:"zuid",EMAIL_ID:"200",CATEGORY_ID:"300",SEARCH:"query",STREAM_GROUPS:"groups",STREAM_GROUP_MEMBERS:"groupid",ORG_MEMBERS:"orgdata"}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Utils"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("zmail.Utils.EmailValidator");this.isEmailID=function(){var a=b.validate.apply(this,arguments)||{};return a.status===!0};var c=/^\d+$/;this.isNumber=function(a){return c.test(a)}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Models.Logs"))}(function(){"use strict";var a=function(b){return this instanceof a?(b=b||{},this.logs=b.logs||{},void(this.delimiter=b.delimiter||"$:$")):new a(b)};this.RequestLog=a,a.prototype={hash:function(a){return[a.str||"",a.ids||"",a.typ||""].join(this.delimiter)},add:function(a){return a.hash=this.hash(a),this.logs[a.hash]=a,this},getLog:function(a){var b=this.hash(a);return this.logs[b]},getSuperSetLog:function(a){for(var b,c=a.str,d=c.length,e=1;e<d;e++)if(b=this.hash({str:c.substring(0,d-e),ids:a.ids,typ:a.typ}),b in this.logs)return this.logs[b]},get:function(a){var b=this.getLog(a);return b||(b=this.getSuperSetLog(a)),b}}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Models"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("_"),c=function(a){return this instanceof c?(this.attrs={},b.extend(this.attrs,this.defaults(),a),void delete this.defaults):new c(a)};this.Contact=c,c.prototype={defaults:function(){return{zid:void 0,eid:void 0,fn:"",mn:"",ln:"",nn:"",photo:void 0,chat:!1}},equals:function(a){return this===a||a instanceof c&&this.id()===a.id()},toJSON:function(){return this.attrs},id:function(){var a=this.attrs;return a.zid||a.eid||(a.fn||"")+(a.mn||"")+(a.ln||"")+(a.nn||"")},photo:function(){return this.attrs.photo},name:function(){var a=this.attrs;return[a.fn||"",a.mn||"",a.ln||""].join(" ")||a.nn||""},isStartsWith:function(a){var c=this.attrs;for(var d in a){var e=c[d],f=a[d];if(b.isString(e)&&b.isString(f)){var g=e.indexOf(f);if(0===g)return!0}}},isOrg:function(){return void 0!==this.attrs.zid}}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Models"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("_"),c=a("zmail.Maps.IndexedMap"),d=function(){this.me={},this.idMap={},this.nameMap=new c};this.GroupBook=d,d.prototype={add:function(a){this.idMap=a.groups||this.idMap,this.me=a.me||this.me;var b=this.idMap,c=this.nameMap;return(a.order||[]).forEach(function(a){var d=b[a];c.add(d.name,d.id)}),this},getValues:function(a){var b=this.idMap;return a.reduce(function(a,c){return a.push(b[c]),a},[])},getMembers:function(a){b.isArray(a)&&(a=[a]);var c=this;a.reduce(function(a,b){if(c.has(b)){var d=c.idMap[b];return a.contact(d.members)}return a},[])},get:function(a){if(this.has(a))return this.idMap[a];var b=this.nameMap.get(a);return this.getValues(b)},getAll:function(){var a=this.nameMap.getAll();return this.getValues(a)},has:function(a){return a in this.idMap}}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Models"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("_"),c=a("zmail.Maps.IndexedMap"),d=function(){this.idMap={},this.nameMap=new c};this.CategoryBook=d,d.prototype={add:function(a){if(!a)return this;b.isArray(a)||(a=[a]);var c=this.idMap,d=this.nameMap;return a.forEach(function(a){c[a.cid]=a,d.add(a.cname,a.cid)}),this},getValues:function(a){var b=this.idMap;return a.reduce(function(a,c){return a.push(b[c]),a},[])},get:function(a){var b=this.nameMap.get(a);return this.getValues(b)},getAll:function(){var a=this.nameMap.getAll();return this.getValues(a)},has:function(a){return a in this.idMap}}}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook.Models"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("_"),c=a("$.Deferred"),d=a("Backbone.ajax"),e=a("zmail.Maps.Map"),f=a("zmail.Maps.IndexedMap"),g=a("zmail.Maps.MapKeeper"),h=a("zmail.ContactBook.Constants"),i=a("zmail.ContactBook.Utils"),j=a("zmail.ContactBook.Models.Contact"),k=a("zmail.ContactBook.Models.GroupBook"),l=a("zmail.ContactBook.Models.CategoryBook"),m=a("zmail.ContactBook.Models.Logs.RequestLog"),n=["eid","fn","mn","ln","nn"],o=["eid","fn"],p=["start","offset","contactType"],q=h.CONTACTS_TYPES,r=h.MODES,s={getLogEntry:function(a){return{str:a.str||a.eid&&a.eid.join(",")||a.fn||a.mn||a.ln||a.nn||"",ids:a.zuid&&a.zuid.join(",")||a.categoryid&&a.categoryid.join(",")||a.groupid&&a.groupid.join(",")||"",typ:a.type||""}}},t=function(){this.log=new m,this.idMap={},this.mapKeeper=new g(n.reduce(function(a,b){return a[b]=new f,a},{})),this.categories=new l,this.categoryMap=new e,this.groups=new k,this.mostUsedFetched=c(),this.groupsFetched=c()};t.prototype={expected:50,url:zmail.conPath+"/getContactsAlias.do",isMoreThanExpected:function(a,b){var c=a.length,d=b.expected;return 0!==c&&c>=d},isPaginationAvail:function(a){return!a||a.pagination!==!1},isMostUsedFetched:function(){return"resolved"===this.mostUsedFetched.state()},isGroupsFetched:function(){return"resolved"===this.groupsFetched.state()},has:function(a){var c=this.idMap;return b.isString(a)?a in c:b(a).every(function(a){return a in c})},updateGroupsLog:function(){var a=this;this.groups.getAll().forEach(function(b){a.log.add({ids:b.id,pagination:!a.has(b.members)})})},parseQuery:function(a){var c=b.isString(a)?{str:a,eid:i.isEmailID(a)?a:void 0,categoryid:this.categories.has(a)?a:void 0,groupid:this.groups.has(a)?a:void 0,expected:this.expected}:a;if(c.str&&o.reduce(function(a,b){return a[b]||(a[b]=a.str),a},c),b.isArray(c.eid)||i.isEmailID(c.eid||c.str)){var d=c.eid||c.str;c.eid=b.isArray(d)?d:[d],c.mode=r.EMAIL_ID}else if(b.isArray(c.categoryid)||this.categories.has(c.categoryid||c.str)){var e=c.categoryid||c.str;c.categoryid=b.isArray(e)?e:[e],c.mode=r.CATEGORY_ID}else if(b.isArray(c.groupid)||this.groups.has(c.groupid||c.str)){var f=c.groupid||c.str;c.groupid=b.isArray(f)?f:[f],c.mode=r.STREAM_GROUPS}else if(c.zuid||i.isNumber(c.str)){var g=c.zuid||c.str;c.zuid=b.isArray(g)?g:[g],c.mode=r.ZUID}else c.mode=r.SEARCH;return void 0===c.expected&&(c.expected=this.expected),c},getIds:function(a){return a.mode===r.CATEGORY_ID?this.categoryMap.get(a.categoryid):a.mode===r.STREAM_GROUPS?this.groups.getMembers(a.groupid):a.mode===r.ZUID?a.zuid:this.mapKeeper.get(a)},getContacts:function(a){a&&b.isString(a)&&(a=a.split(",")),a=a||[];var c=this.idMap;return a.map(function(a){return c[a]})},request:function(a){var c=a.mode;if(c===r.MOST_USED&&!this.isMostUsedFetched()||c===r.STREAM_GROUPS&&!this.isGroupsFetched())return{mode:c};if(c===r.ZUID)return{mode:c,zuids:b.isArray(a.zuid)?a.zuid.join(","):a.zuid};if(c===r.EMAIL_ID)return{mode:c,email:b.isArray(a.eid)?a.eid.join(","):a.eid};if(c===r.CATEGORY_ID)return{mode:c,cId:b.isArray(a.categoryid)?a.categoryid.join(","):a.categoryid};if(c===r.STREAM_GROUP_MEMBERS)return{mode:r.STREAM_GROUP_MEMBERS,groupid:b.isArray(a.groupid)?a.groupid.join(","):a.groupid};if(c===r.SEARCH){var d={mode:r.SEARCH,query:a.str||a.eid||a.fn||a.mn||a.ln||a.nn};return p.reduce(function(b,c){return c in a&&(b[c]=a[c]),b},d)}},fetch:function(a){var b=c(),e=this.request(a);return e?d({data:e,url:this.url}).then(function(a){var c=1===a[0]?"resolve":"reject";b[c](a[1])}):b.reject(),b.promise()},updateMaps:function(a){var b=a.id();if(!(b in this.idMap)){this.idMap[b]=a;var c=a.toJSON();this.mapKeeper.add(n.reduce(function(a,d){return d in c&&(a[d]={name:c[d],value:b}),a},{}))}return this},set:function(a){return b.isArray(a)||(a=[a]),a.forEach(function(a){a instanceof j||(a=new j(a)),this.updateMaps(a)},this),this},responseHandler:function(a,b,c){var d,e,f=a.mode,g=this;if(f===r.ZUID||f===r.EMAIL_ID)this.set(b[f]);else if(f===r.STREAM_GROUP_MEMBERS)this.set(b.clist[r.ZUID]);else if(f===r.STREAM_GROUPS)this.groups.add(b),this.groupsFetched.resolve();else if(f===r.MOST_USED){d=b.clist;for(e in d)this.set(d[e]);this.categories.add(b.catlist),this.mostUsedFetched.resolve()}else if(f===r.SEARCH){d=b.clist;for(e in d)this.set(d[e]);c.pagination=b.pagination,this.log.add(c)}else if(f===r.CATEGORY_ID){d=b.clist;var h=function(a){var b=new j(a);g.set(b),g.categoryMap.add(e,b.id())};for(e in d)(d[e]||[]).forEach(h);this.log.add({ids:a.categoryid,pagination:!1})}this.updateGroupsLog()},filter:function(a,b){var c=b.mode,d=b.type;return c!==r.CATEGORY_ID&&c!==r.STREAM_GROUP_MEMBERS||(a=a.filter(function(a){return a.isStartsWith(b)})),d===q.ZOHO_ORG&&(a=a.filter(function(a){return a.isOrg()})),a},get:function(a){var b=c();if(!a)return b.reject().promise();var d=this.parseQuery(a),e=this.getIds(d),f=this.getContacts(e),g=this;if(f=this.filter(f,d),this.isMoreThanExpected(f,d))b.resolve(f);else{var h=s.getLogEntry(d),i=this.log.get(h);this.isPaginationAvail(i)?this.fetch(d).then(function(a){g.responseHandler(d,a,h),e=g.getIds(d),f=g.getContacts(e),f=g.filter(f,d),b.resolve(f)}):b.resolve(f)}return b.promise()},getCategories:function(a){return a?this.categories.get(a):this.categories.getAll()},getGroups:function(a){return a?this.groups.get(a):this.groups.getAll()},fetchMostUsed:b.once(function(){var a={mode:r.MOST_USED},b=this;return this.fetch(a).then(function(c){b.responseHandler(a,c)})}),fetchGroups:b.once(function(){var a={mode:r.STREAM_GROUPS},b=this;return this.fetch(a).then(function(c){b.responseHandler(a,c)})})},this.ContactBook=t}),function(a){"use strict";a.call(zmail.Core.Namespaces.create("zmail.ContactBook"),zmail.Core.Namespaces.get)}(function(a){"use strict";var b=a("zmail.ContactBook.Models.ContactBook");delete this.Constants,delete this.Models,delete this.Utils,delete this.__namespace;var c=this,d=new b;["get","getContacts","getCategories","getGroups","fetchMostUsed","fetchGroups"].forEach(function(a){c[a]=d[a].bind(d)}),zmail.showFeature&&(c.fetchMostUsed(),c.fetchGroups())});