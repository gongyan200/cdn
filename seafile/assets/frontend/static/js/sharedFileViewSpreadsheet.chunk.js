(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[24],{1245:function(e,t,n){e.exports=n(1246)},1246:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(6),o=n(8),c=n(7),i=n(0),s=n.n(i),u=n(23),l=n.n(u),d=n(9),f=n(1),h=n(66),m=n(61),b=n(15),g=(n(429),window.shared.pageOptions),p=g.repoID,v=g.filePath,O=g.err,E=g.commitID,j=g.fileType,k=g.fileName,w=g.sharedToken,y=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(h.a,{content:s.a.createElement(L,null)})}}]),n}(s.a.Component),L=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},r.state={isLoading:!O,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!O){!function t(){d.a.queryOfficeFileConvertStatus(p,E,v,j.toLowerCase(),w).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(f.nb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(f.nb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(f.nb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return O?s.a.createElement(m.a,null):t?s.a.createElement(b.a,null):n?s.a.createElement(m.a,{errorMsg:n}):s.a.createElement("div",{className:"shared-file-view-body spreadsheet-file-view"},s.a.createElement("iframe",{id:"spreadsheet-container",title:k,src:"".concat(f.lc,"office-convert/static/").concat(p,"/").concat(E).concat(encodeURIComponent(v),"/index.html?token=").concat(w),onLoad:this.setIframeHeight}))}}]),n}(s.a.Component);l.a.render(s.a.createElement(y,null),document.getElementById("wrapper"))},429:function(e,t,n){}},[[1245,1,0]]]);
//# sourceMappingURL=sharedFileViewSpreadsheet.chunk.js.map