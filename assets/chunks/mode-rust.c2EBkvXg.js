import{g as b}from"./commonjsHelpers.BosuxZz1.js";function v(p,x){for(var o=0;o<x.length;o++){const l=x[o];if(typeof l!="string"&&!Array.isArray(l)){for(const h in l)if(h!=="default"&&!(h in p)){const d=Object.getOwnPropertyDescriptor(l,h);d&&Object.defineProperty(p,h,d.get?d:{enumerable:!0,get:()=>l[h]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}};(function(p,x){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,l,h){var d=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},a.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};d.inherits(a,f),a.getTagRule=function(g){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},a.getStartRule=function(g){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:g}},a.getEndRule=function(g){return{token:"comment.doc",regex:"\\*\\/",next:g}},l.DocCommentHighlightRules=a}),ace.define("ace/mode/rust_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/doc_comment_highlight_rules"],function(o,l,h){var d=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,a=o("./doc_comment_highlight_rules").DocCommentHighlightRules,g=/\\(?:[nrt0'"\\]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\})/.source,e=/[a-zA-Z_\xa1-\uffff][a-zA-Z0-9_\xa1-\uffff]*/.source,t=function(){var r=this.createKeywordMapper({"keyword.source.rust":"abstract|alignof|as|async|await|become|box|break|catch|continue|const|crate|default|do|dyn|else|enum|extern|for|final|if|impl|in|let|loop|macro|match|mod|move|mut|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield|try","storage.type.source.rust":"Self|isize|usize|char|bool|u8|u16|u32|u64|u128|f16|f32|f64|i8|i16|i32|i64|i128|str|option|either|c_float|c_double|c_void|FILE|fpos_t|DIR|dirent|c_char|c_schar|c_uchar|c_short|c_ushort|c_int|c_uint|c_long|c_ulong|size_t|ptrdiff_t|clock_t|time_t|c_longlong|c_ulonglong|intptr_t|uintptr_t|off_t|dev_t|ino_t|pid_t|mode_t|ssize_t","constant.language.source.rust":"true|false|Some|None|Ok|Err|FALSE|TRUE","support.constant.source.rust":"EXIT_FAILURE|EXIT_SUCCESS|RAND_MAX|EOF|SEEK_SET|SEEK_CUR|SEEK_END|_IOFBF|_IONBF|_IOLBF|BUFSIZ|FOPEN_MAX|FILENAME_MAX|L_tmpnam|TMP_MAX|O_RDONLY|O_WRONLY|O_RDWR|O_APPEND|O_CREAT|O_EXCL|O_TRUNC|S_IFIFO|S_IFCHR|S_IFBLK|S_IFDIR|S_IFREG|S_IFMT|S_IEXEC|S_IWRITE|S_IREAD|S_IRWXU|S_IXUSR|S_IWUSR|S_IRUSR|F_OK|R_OK|W_OK|X_OK|STDIN_FILENO|STDOUT_FILENO|STDERR_FILENO","constant.language":"macro_rules|mac_variant"},"identifier");this.$rules={start:[{token:"variable.other.source.rust",regex:"'"+e+"(?![\\'])"},{token:"string.quoted.single.source.rust",regex:"'(?:[^'\\\\]|"+g+")'"},{token:"identifier",regex:"r#"+e+"\\b"},{stateName:"bracketedComment",onMatch:function(s,u,n){return n.unshift(this.next,s.length-1,u),"string.quoted.raw.source.rust"},regex:/r#*"/,next:[{onMatch:function(s,u,n){var c="string.quoted.raw.source.rust";return s.length>=n[1]?(s.length>n[1]&&(c="invalid"),n.shift(),n.shift(),this.next=n.shift()):this.next="",c},regex:/"#*/,next:"start"},{defaultToken:"string.quoted.raw.source.rust"}]},{token:"string.quoted.double.source.rust",regex:'"',push:[{token:"string.quoted.double.source.rust",regex:'"',next:"pop"},{token:"constant.character.escape.source.rust",regex:g},{defaultToken:"string.quoted.double.source.rust"}]},{token:["keyword.source.rust","text","entity.name.function.source.rust","punctuation"],regex:"\\b(fn)(\\s+)((?:r#)?"+e+")(<)(?!<)",push:"generics"},{token:["keyword.source.rust","text","entity.name.function.source.rust"],regex:"\\b(fn)(\\s+)((?:r#)?"+e+")"},{token:["support.constant","punctuation"],regex:"("+e+"::)(<)(?!<)",push:"generics"},{token:"support.constant",regex:e+"::"},{token:"variable.language.source.rust",regex:"\\bself\\b"},a.getStartRule("doc-start"),{token:"comment.line.doc.source.rust",regex:"///.*$"},{token:"comment.line.doc.source.rust",regex:"//!.*$"},{token:"comment.line.double-dash.source.rust",regex:"//.*$"},{token:"comment.start.block.source.rust",regex:"/\\*",stateName:"comment",push:[{token:"comment.start.block.source.rust",regex:"/\\*",push:"comment"},{token:"comment.end.block.source.rust",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.source.rust"}]},{token:["keyword.source.rust","identifier","punctuaction"],regex:"(?:(impl)|("+e+"))(<)(?!<)",stateName:"generics",push:[{token:"keyword.operator",regex:/<<|=/},{token:"punctuaction",regex:"<(?!<)",push:"generics"},{token:"variable.other.source.rust",regex:"'"+e+"(?![\\'])"},{token:"storage.type.source.rust",regex:"\\b(u8|u16|u32|u64|u128|usize|i8|i16|i32|i64|i128|isize|char|bool)\\b"},{token:"keyword",regex:"\\b(?:const|dyn)\\b"},{token:"punctuation",regex:">",next:"pop"},{include:"punctuation"},{include:"operators"},{include:"constants"},{token:"identifier",regex:"\\b"+e+"\\b"}]},{token:r,regex:e},{token:"meta.preprocessor.source.rust",regex:"\\b\\w\\(\\w\\)*!|#\\[[\\w=\\(\\)_]+\\]\\b"},{include:"punctuation"},{include:"operators"},{include:"constants"}],punctuation:[{token:"paren.lparen",regex:/[\[({]/},{token:"paren.rparen",regex:/[\])}]/},{token:"punctuation.operator",regex:/[?:,;.]/}],operators:[{token:"keyword.operator",regex:/\$|[-=]>|[-+%^=!&|<>]=?|[*/](?![*/])=?/}],constants:[{token:"constant.numeric.source.rust",regex:/\b(?:0x[a-fA-F0-9_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*(?!\.))(?:[iu](?:size|8|16|32|64|128))?\b/},{token:"constant.numeric.source.rust",regex:/\b(?:[0-9][0-9_]*)(?:\.[0-9][0-9_]*)?(?:[Ee][+-][0-9][0-9_]*)?(?:f32|f64)?\b/}]},this.embedRules(a,"doc-",[a.getEndRule("start")]),this.normalizeRules()};t.metaData={fileTypes:["rs","rc"],foldingStartMarker:"^.*\\bfn\\s*(\\w+\\s*)?\\([^\\)]*\\)(\\s*\\{[^\\}]*)?\\s*$",foldingStopMarker:"^\\s*\\}",name:"Rust",scopeName:"source.rust"},d.inherits(t,f),l.RustHighlightRules=t}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,l,h){var d=o("../../lib/oop"),f=o("../../range").Range,a=o("./fold_mode").FoldMode,g=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(g,a),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var s=e.getLine(r);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var u=this._getFoldWidgetBase(e,t,r);return!u&&this.startRegionRe.test(s)?"start":u},this.getFoldWidgetRange=function(e,t,r,s){var u=e.getLine(r);if(this.startRegionRe.test(u))return this.getCommentRegionBlock(e,u,r);var i=u.match(this.foldingStartMarker);if(i){var n=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,n);var c=e.getCommentFoldRange(r,n+i[0].length,1);return c&&!c.isMultiLine()&&(s?c=this.getSectionRange(e,r):t!="all"&&(c=null)),c}if(t!=="markbegin"){var i=u.match(this.foldingStopMarker);if(i){var n=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],r,n):e.getCommentFoldRange(r,n,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),s=r.search(/\S/),u=t,n=r.length;t=t+1;for(var c=t,i=e.getLength();++t<i;){r=e.getLine(t);var _=r.search(/\S/);if(_!==-1){if(s>_)break;var m=this.getFoldWidgetRange(e,"all",t);if(m){if(m.start.row<=u)break;if(m.isMultiLine())t=m.end.row;else if(s==_)break}c=t}}return new f(u,n,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,t,r){for(var s=t.search(/\s*$/),u=e.getLength(),n=r,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++r<u;){t=e.getLine(r);var _=c.exec(t);if(_&&(_[1]?i--:i++,!i))break}var m=r;if(m>n)return new f(n,s,m,t.length)}}).call(g.prototype)}),ace.define("ace/mode/rust",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rust_highlight_rules","ace/mode/folding/cstyle"],function(o,l,h){var d=o("../lib/oop"),f=o("./text").Mode,a=o("./rust_highlight_rules").RustHighlightRules,g=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=a,this.foldingRules=new g,this.$behaviour=this.$defaultBehaviour};d.inherits(e,f),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/",nestable:!0},this.$quotes={'"':'"'},this.$id="ace/mode/rust"}).call(e.prototype),l.Mode=e}),function(){ace.require(["ace/mode/rust"],function(o){p&&(p.exports=o)})}()})(k);var R=k.exports;const S=b(R),F=v({__proto__:null,default:S},[R]);export{F as m};
