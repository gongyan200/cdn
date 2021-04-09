(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[29],{1296:function(e,a,t){e.exports=t(1308)},1297:function(e,a,t){},1308:function(e,a,t){"use strict";t.r(a);var r=t(5),l=t(6),n=t(8),i=t(7),o=t(0),s=t.n(o),d=t(23),p=t.n(d),c=t(4),u=t(1),m=t(70),f=t(51),b=t(26),h=t(195),g=t.n(h),F=t(115),v=t.n(F),E=t(9),U=t(3),k="uploading",y="error",S="isSaving",O="uploaded",C=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).onUploadCancel=function(e){e.preventDefault(),l.props.onUploadCancel(l.props.resumableFile)},l.onUploadRetry=function(e){e.preventDefault(),l.props.onUploadRetry(l.props.resumableFile)},l.formatFileSize=function(e){return"number"!==typeof e?"":e>=1e9?(e/1e9).toFixed(1)+" G":e>=1e6?(e/1e6).toFixed(1)+" M":e>=1e3?(e/1e3).toFixed(1)+" K":e.toFixed(1)+" B"},l.state={uploadState:k},l}return Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.resumableFile,t=k;a.error?t=y:(0!==a.remainingTime||a.isSaved||(t=S),a.isSaved&&(t=O)),this.setState({uploadState:t})}},{key:"render",value:function(){var e=this.props.resumableFile,a=Math.round(100*e.progress()),t=e.error;return s.a.createElement("tr",{className:"file-upload-item"},s.a.createElement("td",{className:"upload-name"},s.a.createElement("div",{className:"ellipsis"},e.newFileName)),s.a.createElement("td",null,s.a.createElement("span",{className:"file-size"},this.formatFileSize(e.size))),s.a.createElement("td",{className:"upload-progress"},(this.state.uploadState===k||this.state.uploadState===S)&&s.a.createElement(o.Fragment,null,e.size>=1e8&&s.a.createElement(o.Fragment,null,e.isUploading()&&s.a.createElement("div",{className:"progress-container"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})),-1===e.remainingTime&&s.a.createElement("div",{className:"progress-text"},Object(u.nb)("Preparing to upload...")),e.remainingTime>0&&s.a.createElement("div",{className:"progress-text"},Object(u.nb)("Remaining")," ",c.a.formatTime(e.remainingTime)),0===e.remainingTime&&s.a.createElement("div",{className:"progress-text"},Object(u.nb)("Indexing..."))),!e.isUploading()&&s.a.createElement("div",{className:"progress-container d-flex align-items-center"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})))),e.size<1e8&&s.a.createElement("div",{className:"progress-container d-flex align-items-center"},s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})))),this.state.uploadState===y&&s.a.createElement("div",{className:"message err-message ml-0",dangerouslySetInnerHTML:{__html:t}})),s.a.createElement("td",{className:"upload-operation"},s.a.createElement(o.Fragment,null,this.state.uploadState===k&&s.a.createElement("a",{href:"#",onClick:this.onUploadCancel},Object(u.nb)("Cancel")),this.state.uploadState===y&&s.a.createElement("a",{href:"#",onClick:this.onUploadRetry},Object(u.nb)("Retry")),this.state.uploadState===S&&s.a.createElement("span",{className:"saving"},Object(u.nb)("Saving...")),this.state.uploadState===O&&s.a.createElement("span",{className:"uploaded"},Object(u.nb)("Uploaded")))))}}]),t}(s.a.Component),L=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.file,a=Object(u.nb)("Please upload files less than {placeholder}M").replace("{placeholder}",u.Lb);return s.a.createElement("tr",{className:"file-upload-item"},s.a.createElement("td",{className:"upload-name"},s.a.createElement("div",{className:"ellipsis"},e.name)),s.a.createElement("td",{colSpan:3,className:"error"},a))}}]),t}(s.a.Component),N=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).toggleDropdown=function(){l.setState({dropdownOpen:!l.state.dropdownOpen})},l.state={dropdownOpen:!1},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props.allFilesUploaded;return s.a.createElement(o.Fragment,null,s.a.createElement("div",{className:"text-center"},s.a.createElement(U.d,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},s.a.createElement(U.o,{color:"primary",caret:!0},Object(u.nb)("Upload")),s.a.createElement(U.n,null,s.a.createElement(U.m,{onClick:this.props.onFileUpload},Object(u.nb)("Upload Files")),s.a.createElement(U.m,{onClick:this.props.onFolderUpload},Object(u.nb)("Upload Folder")))),s.a.createElement(U.c,{color:"primary",outline:!0,className:"ml-4",onClick:this.props.onCancelAllUploading,disabled:a},Object(u.nb)("Cancel All"))),s.a.createElement("div",{className:"mt-4 mh-2"},s.a.createElement("table",{className:"table-thead-hidden"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{width:"35%"},Object(u.nb)("name")),s.a.createElement("th",{width:"15%"},Object(u.nb)("size")),s.a.createElement("th",{width:"35%"},Object(u.nb)("progress")),s.a.createElement("th",{width:"15%"},Object(u.nb)("state")))),s.a.createElement("tbody",null,this.props.forbidUploadFileList.map((function(e,a){return s.a.createElement(L,{key:a,file:e})})),this.props.uploadFileList.map((function(a,t){return s.a.createElement(C,{key:t,resumableFile:a,onUploadCancel:e.props.onUploadCancel,onUploadRetry:e.props.onUploadRetry})}))))))}}]),t}(s.a.Component),j=t(10),w=(t(415),function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).componentWillUnmount=function(){window.onbeforeunload=null,!0===l.props.dragAndDrop&&l.resumable.disableDropOnDocument()},l.onbeforeunload=function(){if(window.uploader&&window.uploader.isUploadProgressDialogShow&&100!==window.uploader.totalProgress)return""},l.bindCallbackHandler=function(){var e=l.props,a=e.minFileSizeErrorCallback,t=e.fileTypeErrorCallback;l.maxFilesErrorCallback&&(l.resumable.opts.maxFilesErrorCallback=l.maxFilesErrorCallback),a&&(l.resumable.opts.minFileSizeErrorCallback=l.props.minFileSizeErrorCallback),l.maxFileSizeErrorCallback&&(l.resumable.opts.maxFileSizeErrorCallback=l.maxFileSizeErrorCallback),t&&(l.resumable.opts.fileTypeErrorCallback=l.props.fileTypeErrorCallback)},l.bindEventHandler=function(){l.resumable.on("chunkingComplete",l.onChunkingComplete.bind(Object(b.a)(l))),l.resumable.on("fileAdded",l.onFileAdded.bind(Object(b.a)(l))),l.resumable.on("fileProgress",l.onFileProgress.bind(Object(b.a)(l))),l.resumable.on("fileSuccess",l.onFileUploadSuccess.bind(Object(b.a)(l))),l.resumable.on("progress",l.onProgress.bind(Object(b.a)(l))),l.resumable.on("complete",l.onComplete.bind(Object(b.a)(l))),l.resumable.on("fileError",l.onFileError.bind(Object(b.a)(l))),l.resumable.on("error",l.onError.bind(Object(b.a)(l))),l.resumable.on("dragstart",l.onDragStart.bind(Object(b.a)(l)))},l.maxFilesErrorCallback=function(e,a){var t=u.Kb,r=Object(u.nb)("Please upload no more than {maxFiles} files at a time.");r=r.replace("{maxFiles}",t),j.a.danger(r)},l.maxFileSizeErrorCallback=function(e){var a=l.state.forbidUploadFileList;a.push(e),l.setState({forbidUploadFileList:a})},l.onChunkingComplete=function(e){!0===l.state.allFilesUploaded&&l.setState({allFilesUploaded:!1});var a=l.props.path,t=e.fileName,r=e.relativePath,n=t===r;if(e.formData={},n)e.formData={parent_dir:a};else{var i=r.slice(0,r.lastIndexOf("/")+1);e.formData={parent_dir:a,relative_path:i}}},l.onFileAdded=function(e,a){if(e.fileName===e.relativePath&&1===a.length){l.setUploadFileList(l.resumable.files),E.a.sharedUploadLinkGetFileUploadUrl(l.props.token).then((function(a){l.resumable.opts.target=a.data.upload_link+"?ret-json=1",l.resumableUpload(e)})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)}))}else l.setUploadFileList(l.resumable.files),l.isUploadLinkLoaded||(l.isUploadLinkLoaded=!0,E.a.sharedUploadLinkGetFileUploadUrl(l.props.token).then((function(e){l.resumable.opts.target=e.data.upload_link+"?ret-json=1",l.resumable.upload()})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)})))},l.resumableUpload=function(e){var a=l.props,t=a.repoID,r=a.path;E.a.getFileUploadedBytes(t,r,e.fileName).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(u.Zb)*1024||1048576,n=Math.floor(t/r);e.markChunksCompleted(n),l.resumable.upload()})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)}))},l.filesAddedComplete=function(e,a){l.state.forbidUploadFileList.length>0&&0===a.length&&l.setState({isUploadProgressDialogShow:!0,totalProgress:100})},l.setUploadFileList=function(){var e=l.resumable.files;l.setState({uploadFileList:e,isUploadProgressDialogShow:!0}),c.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!0)},l.onFileProgress=function(e){var a=l.getBitrate(),t=l.state.uploadFileList.map((function(t){if(t.uniqueIdentifier===e.uniqueIdentifier&&a){var r=8*(t.size-t.size*t.progress()),l=Math.floor(r/a);t.remainingTime=l}return t}));l.setState({uploadBitrate:a,uploadFileList:t})},l.getBitrate=function(){var e=0,a=0,t=(new Date).getTime();if(l.resumable.files.forEach((function(a){e+=a.progress()*a.size})),l.timestamp){var r=t-l.timestamp;if(r<l.bitrateInterval)return l.state.uploadBitrate;(e<l.loaded||0===l.loaded)&&(l.loaded=e),a=(e-l.loaded)*(1e3/r)*8}return l.timestamp=t,l.loaded=e,a},l.onProgress=function(){var e=Math.round(100*l.resumable.progress());l.setState({totalProgress:e}),c.a.registerGlobalVariable("uploader","totalProgress",e)},l.onFileUploadSuccess=function(e,a){var t=e.formData,r=(new Date).getTime()/1e3;if(a=t.replace?a:JSON.parse(a)[0],t.relative_path){var n=t.relative_path,i=n.slice(0,n.indexOf("/")),o={id:a.id,name:i,type:"dir",mtime:r};l.notifiedFolders.some((function(e){return e.name===o.name}))||(l.notifiedFolders.push(o),l.props.onFileUploadSuccess(o));var s=l.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=n+a.name,t.isSaved=!0),t}));l.setState({uploadFileList:s})}else if(t.replace){var d=e.fileName,p={id:a,name:d,type:"file",mtime:r};l.props.onFileUploadSuccess(p);var c=l.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.newFileName=d,a.isSaved=!0),a}));l.setState({uploadFileList:c})}else{var u={id:a.id,type:"file",name:a.name,size:a.size,mtime:r};l.props.onFileUploadSuccess(u);var m=l.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=a.name,t.isSaved=!0),t}));l.setState({uploadFileList:m})}},l.onFileError=function(e,a){var t="";if(a){var r=a.replace(/\n/g,"");r=JSON.parse(r),"File locked by others."===(t=r.error)&&(t=Object(u.nb)("File is locked by others.")),"Internal error."===t&&(t=Object(u.nb)("Internal Server Error"))}else t=Object(u.nb)("Network error");var n=l.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(l.state.retryFileList.push(a),a.error=t),a}));l.loaded=0,l.setState({retryFileList:l.state.retryFileList,uploadFileList:n})},l.onComplete=function(){l.notifiedFolders=[],l.isUploadLinkLoaded=!1,l.setState({allFilesUploaded:!0})},l.onError=function(e){l.isUploadLinkLoaded=!1,c.a.registerGlobalVariable("uploader","totalProgress",100)},l.setHeaders=function(e,a){var t=a.offset,r=a.getOpt("chunkSize"),l=0===e.size?1:e.size,n=0!==t?t*r:0,i=Math.min(l,(t+1)*r)-1;return l-a.endByte<r&&!a.getOpt("forceChunkSize")&&(i=l),{Accept:"application/json; text/javascript, */*; q=0.01","Content-Disposition":'attachment; filename="'+encodeURI(e.fileName)+'"',"Content-Range":"bytes "+n+"-"+i+"/"+l}},l.setQuery=function(e){return e.formData},l.generateUniqueIdentifier=function(e){var a=e.webkitRelativePath||e.relativePath||e.fileName||e.name;return v()(a+new Date)+a},l.onClick=function(e){e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()},l.onFileUpload=function(){l.uploadInput.current.removeAttribute("webkitdirectory"),l.uploadInput.current.click()},l.onFolderUpload=function(){l.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory"),l.uploadInput.current.click()},l.onDragStart=function(){l.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory")},l.onCloseUploadDialog=function(){l.loaded=0,l.resumable.files=[],l.isUploadLinkLoaded=!1,l.setState({isUploadProgressDialogShow:!1,uploadFileList:[],forbidUploadFileList:[]}),c.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!1)},l.onUploadCancel=function(e){var a=l.state.uploadFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier||(a.cancel(),!1)}));l.resumable.isUploading()||(l.setState({totalProgress:"100",allFilesUploaded:!0}),l.loaded=0),l.setState({uploadFileList:a})},l.onCancelAllUploading=function(){var e=l.state.uploadFileList.filter((function(e){return!Math.round(1!==e.progress())||(e.cancel(),!1)}));l.loaded=0,l.setState({allFilesUploaded:!0,totalProgress:"100",uploadFileList:e}),l.isUploadLinkLoaded=!1},l.onUploadRetry=function(e){E.a.sharedUploadLinkGetFileUploadUrl(l.props.token).then((function(a){l.resumable.opts.target=a.data.upload_link+"?ret-json=1";var t=l.state.retryFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier})),r=l.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.error=null,l.retryUploadFile(a)),a}));l.setState({retryFileList:t,uploadFileList:r})})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)}))},l.retryUploadFile=function(e){var a=l.props,t=a.repoID,r=a.path,n=e.fileName;if(!(e.fileName===e.relativePath)){var i=e.formData.relative_path;n=("/"===r?r+i:r+"/"+i)+n}e.bootstrap();var o=!1;e.resumableObj.on("chunkingComplete",(function(){o||E.a.getFileUploadedBytes(t,r,n).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(u.Zb)*1024||1048576,l=Math.floor(t/r);e.markChunksCompleted(l),e.resumableObj.upload()})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)})),o=!0}))},l.replaceRepetitionFile=function(){var e=l.props,a=e.repoID,t=e.path;E.a.getUpdateLink(a,t).then((function(e){l.resumable.opts.target=e.data;var a=l.resumable.files[l.resumable.files.length-1];a.formData.replace=1,a.formData.target_file=a.formData.parent_dir+a.fileName,l.setUploadFileList(l.resumable.files),l.resumable.upload()})).catch((function(e){var a=c.a.getErrorMsg(e);j.a.danger(a)}))},l.cancelFileUpload=function(){l.resumable.files.pop()},l.state={retryFileList:[],uploadFileList:[],forbidUploadFileList:[],totalProgress:0,isUploadProgressDialogShow:!1,currentResumableFile:null,uploadBitrate:0,allFilesUploaded:!1},l.uploadInput=s.a.createRef(),l.notifiedFolders=[],l.timestamp=null,l.loaded=0,l.bitrateInterval=500,l.isUploadLinkLoaded=!1,window.onbeforeunload=l.onbeforeunload,l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.resumable=new g.a({target:"",query:this.setQuery||{},fileType:this.props.filetypes,maxFiles:u.Kb||void 0,maxFileSize:1e3*u.Lb*1e3||void 0,testMethod:this.props.testMethod||"post",testChunks:this.props.testChunks||!1,headers:this.setHeaders||{},withCredentials:this.props.withCredentials||!1,chunkSize:1024*parseInt(u.Zb)*1024||1048576,simultaneousUploads:this.props.simultaneousUploads||1,fileParameterName:this.props.fileParameterName,generateUniqueIdentifier:this.generateUniqueIdentifier,forceChunkSize:!0,maxChunkRetries:3,minFileSize:0}),this.resumable.assignBrowse(this.uploadInput.current,!0),this.props.dragAndDrop&&this.resumable.assignDrop(document.getElementById("upload-link-drop-zone")),this.bindCallbackHandler(),this.bindEventHandler()}},{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement("div",{className:"file-uploader-container"},s.a.createElement("div",{className:"file-uploader"},s.a.createElement("input",{className:"upload-input",type:"file",ref:this.uploadInput,onClick:this.onClick}))),s.a.createElement(N,{retryFileList:this.state.retryFileList,uploadFileList:this.state.uploadFileList,forbidUploadFileList:this.state.forbidUploadFileList,totalProgress:this.state.totalProgress,uploadBitrate:this.state.uploadBitrate,allFilesUploaded:this.state.allFilesUploaded,onCloseUploadDialog:this.onCloseUploadDialog,onCancelAllUploading:this.onCancelAllUploading,onUploadCancel:this.onUploadCancel,onUploadRetry:this.onUploadRetry,onFileUpload:this.onFileUpload,onFolderUpload:this.onFolderUpload}))}}]),t}(s.a.Component)),I=(t(1297),window.app.pageOptions.username),x=window.uploadLink,D=x.dirName,P=x.sharedBy,z=x.noQuota,_=x.maxUploadFileSize,M=x.token,q=x.repoID,R=x.path,T=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"h-100 d-flex flex-column"},s.a.createElement("div",{className:"top-header d-flex justify-content-between"},s.a.createElement(m.a,null),I&&s.a.createElement(f.a,null)),s.a.createElement("div",{className:"o-auto"},s.a.createElement("div",{className:"py-4 px-6 mx-auto rounded",id:"upload-link-panel"},s.a.createElement("h3",{className:"h5",dangerouslySetInnerHTML:{__html:Object(u.nb)("Upload files to {folder_name_placeholder}").replace("{folder_name_placeholder}",'<span class="op-target">'.concat(c.a.HTMLescape(D),"</span>"))}}),s.a.createElement("p",{className:"small shared-by",dangerouslySetInnerHTML:{__html:"".concat(Object(u.nb)("shared by:")," ").concat(P.avatar," ").concat(P.name)}}),z?s.a.createElement("div",{className:"py-6 text-center"},s.a.createElement("span",{className:"sf3-font sf3-font-tips warning-icon"}),s.a.createElement("p",null,Object(u.nb)("The owner of this library has run out of space."))):s.a.createElement(o.Fragment,null,s.a.createElement("ol",{className:"small text-gray"},s.a.createElement("li",{className:"tip-list-item"},Object(u.nb)("Folder upload is limited to Chrome, Firefox 50+, and Microsoft Edge.")),_&&s.a.createElement("li",{className:"tip-list-item"},Object(u.nb)("File size should be smaller than {max_size_placeholder}.").replace("{max_size_placeholder}",_))),s.a.createElement("div",{id:"upload-link-drop-zone",className:"text-center mt-2 mb-4"},s.a.createElement("span",{className:"sf3-font sf3-font-upload upload-icon"}),s.a.createElement("p",{className:"small text-gray mb-0"},Object(u.nb)("Drag and drop files or folders here."))),s.a.createElement(w,{ref:function(a){return e.uploader=a},dragAndDrop:!0,token:M,repoID:q,path:R,onFileUploadSuccess:function(){}})))))}}]),t}(s.a.Component);p.a.render(s.a.createElement(T,null),document.getElementById("wrapper"))}},[[1296,1,0]]]);
//# sourceMappingURL=uploadLink.chunk.js.map