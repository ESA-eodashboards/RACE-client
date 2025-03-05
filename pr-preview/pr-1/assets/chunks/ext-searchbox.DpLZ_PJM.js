import{g as R}from"./commonjsHelpers.BosuxZz1.js";function w(u,b){for(var o=0;o<b.length;o++){const h=b[o];if(typeof h!="string"&&!Array.isArray(h)){for(const p in h)if(p!=="default"&&!(p in u)){const i=Object.getOwnPropertyDescriptor(h,p);i&&Object.defineProperty(u,p,i.get?i:{enumerable:!0,get:()=>h[p]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var O={exports:{}};(function(u,b){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(o,h,p){p.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(o,h,p){var i=o("../lib/dom"),m=o("../lib/lang"),l=o("../lib/event"),k=o("./searchbox-css"),S=o("../keyboard/hash_handler").HashHandler,C=o("../lib/keys"),s=o("../config").nls,v=999;i.importCssString(k,"ace_searchbox",!1);var x=function(){function e(t,n,c){this.activeInput;var r=i.createElement("div");i.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:s("search-box.find.placeholder","Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},s("search-box.find-all.text","All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:s("search-box.replace.placeholder","Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},s("search-box.replace-next.text","Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},s("search-box.replace-all.text","All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:s("search-box.toggle-replace.title","Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:s("search-box.toggle-regexp.title","RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:s("search-box.toggle-case.title","CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:s("search-box.toggle-whole-word.title","Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:s("search-box.toggle-in-selection.title","Search In Selection")},"S"]]],r),this.element=r.firstChild,this.setSession=this.setSession.bind(this),this.$onEditorInput=this.onEditorInput.bind(this),this.$init(),this.setEditor(t),i.importCssString(k,"ace_searchbox",t.container)}return e.prototype.setEditor=function(t){t.searchBox=this,t.renderer.scroller.appendChild(this.element),this.editor=t},e.prototype.setSession=function(t){this.searchRange=null,this.$syncOptions(!0)},e.prototype.onEditorInput=function(){this.find(!1,!1,!0)},e.prototype.$initElements=function(t){this.searchBox=t.querySelector(".ace_search_form"),this.replaceBox=t.querySelector(".ace_replace_form"),this.searchOption=t.querySelector("[action=searchInSelection]"),this.replaceOption=t.querySelector("[action=toggleReplace]"),this.regExpOption=t.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=t.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=t.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=t.querySelector(".ace_search_counter")},e.prototype.$init=function(){var t=this.element;this.$initElements(t);var n=this;l.addListener(t,"mousedown",function(c){setTimeout(function(){n.activeInput.focus()},0),l.stopPropagation(c)}),l.addListener(t,"click",function(c){var r=c.target||c.srcElement,a=r.getAttribute("action");a&&n[a]?n[a]():n.$searchBarKb.commands[a]&&n.$searchBarKb.commands[a].exec(n),l.stopPropagation(c)}),l.addCommandKeyListener(t,function(c,r,a){var d=C.keyCodeToString(a),f=n.$searchBarKb.findKeyCommand(r,d);f&&f.exec&&(f.exec(n),l.stopEvent(c))}),this.$onChange=m.delayedCall(function(){n.find(!1,!1)}),l.addListener(this.searchInput,"input",function(){n.$onChange.schedule(20)}),l.addListener(this.searchInput,"focus",function(){n.activeInput=n.searchInput,n.searchInput.value&&n.highlight()}),l.addListener(this.replaceInput,"focus",function(){n.activeInput=n.replaceInput,n.searchInput.value&&n.highlight()})},e.prototype.setSearchRange=function(t){this.searchRange=t,t?this.searchRangeMarker=this.editor.session.addMarker(t,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},e.prototype.$syncOptions=function(t){i.setCssClass(this.replaceOption,"checked",this.searchRange),i.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",i.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),i.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),i.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var n=this.editor.getReadOnly();this.replaceOption.style.display=n?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!n?"":"none",this.find(!1,!1,t)},e.prototype.highlight=function(t){this.editor.session.highlight(t||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},e.prototype.find=function(t,n,c){var r=this.editor.find(this.searchInput.value,{skipCurrent:t,backwards:n,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:c,range:this.searchRange}),a=!r&&this.searchInput.value;i.setCssClass(this.searchBox,"ace_nomatch",a),this.editor._emit("findSearchBox",{match:!a}),this.highlight(),this.updateCounter()},e.prototype.updateCounter=function(){var t=this.editor,n=t.$search.$options.re,c=n.unicode,r=0,a=0;if(n){var d=this.searchRange?t.session.getTextRange(this.searchRange):t.getValue();t.$search.$isMultilineSearch(t.getLastSearchOptions())&&(d=d.replace(/\r\n|\r|\n/g,`
`),t.session.doc.$autoNewLine=`
`);var f=t.session.doc.positionToIndex(t.selection.anchor);this.searchRange&&(f-=t.session.doc.positionToIndex(this.searchRange.start));for(var g=n.lastIndex=0,_;(_=n.exec(d))&&(r++,g=_.index,g<=f&&a++,!(r>v||!_[0]&&(n.lastIndex=g+=m.skipEmptyMatch(d,g,c),g>=d.length))););}this.searchCounter.textContent=s("search-box.search-counter","$0 of $1",[a,r>v?v+"+":r])},e.prototype.findNext=function(){this.find(!0,!1)},e.prototype.findPrev=function(){this.find(!0,!0)},e.prototype.findAll=function(){var t=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),n=!t&&this.searchInput.value;i.setCssClass(this.searchBox,"ace_nomatch",n),this.editor._emit("findSearchBox",{match:!n}),this.highlight(),this.hide()},e.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},e.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},e.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},e.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.editor.off("input",this.$onEditorInput),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},e.prototype.show=function(t,n){this.active=!0,this.editor.on("changeSession",this.setSession),this.editor.on("input",this.$onEditorInput),this.element.style.display="",this.replaceOption.checked=n,this.editor.$search.$options.regExp&&(t=m.escapeRegExp(t)),t&&(this.searchInput.value=t),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},e.prototype.isFocused=function(){var t=document.activeElement;return t==this.searchInput||t==this.replaceInput},e}(),y=new S;y.bindKeys({"Ctrl-f|Command-f":function(e){var t=e.isReplace=!e.isReplace;e.replaceBox.style.display=t?"":"none",e.replaceOption.checked=!1,e.$syncOptions(),e.searchInput.focus()},"Ctrl-H|Command-Option-F":function(e){e.editor.getReadOnly()||(e.replaceOption.checked=!0,e.$syncOptions(),e.replaceInput.focus())},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout(function(){e.hide()})},Return:function(e){e.activeInput==e.replaceInput&&e.replace(),e.findNext()},"Shift-Return":function(e){e.activeInput==e.replaceInput&&e.replace(),e.findPrev()},"Alt-Return":function(e){e.activeInput==e.replaceInput&&e.replaceAll(),e.findAll()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}}),y.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked,e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked,e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked,e.$syncOptions()}},{name:"toggleReplace",exec:function(e){e.replaceOption.checked=!e.replaceOption.checked,e.$syncOptions()}},{name:"searchInSelection",exec:function(e){e.searchOption.checked=!e.searchRange,e.setSearchRange(e.searchOption.checked&&e.editor.getSelectionRange()),e.$syncOptions()}}]);var I=new S([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}]);x.prototype.$searchBarKb=y,x.prototype.$closeSearchBarKb=I,h.SearchBox=x,h.Search=function(e,t){var n=e.searchBox||new x(e);n.show(e.session.getTextRange(),t)}}),function(){ace.require(["ace/ext/searchbox"],function(o){u&&(u.exports=o)})}()})(O);var A=O.exports;const $=R(A),E=w({__proto__:null,default:$},[A]);export{E as e};
