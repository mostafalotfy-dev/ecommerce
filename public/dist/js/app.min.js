/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yaireo/tagify/dist/tagify.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@yaireo/tagify/dist/tagify.min.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * Tagify (v 4.17.8) - tags input component
 * By undefined
 * https://github.com/yairEO/tagify
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * THE SOFTWARE IS NOT PERMISSIBLE TO BE SOLD.
 */

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function e(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?t(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var s=i.call(t,e||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const s=(t,e,i,s)=>(t=""+t,e=""+e,s&&(t=t.trim(),e=e.trim()),i?t==e:t.toLowerCase()==e.toLowerCase()),a=(t,e)=>t&&Array.isArray(t)&&t.map((t=>n(t,e)));function n(t,e){var i,s={};for(i in t)e.indexOf(i)<0&&(s[i]=t[i]);return s}function o(t){var e=document.createElement("div");return t.replace(/\&#?[0-9a-z]+;/gi,(function(t){return e.innerHTML=t,e.innerText}))}function r(t){return(new DOMParser).parseFromString(t.trim(),"text/html").body.firstElementChild}function l(t,e){for(e=e||"previous";t=t[e+"Sibling"];)if(3==t.nodeType)return t}function d(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/`|'/g,"&#039;"):t}function h(t){var e=Object.prototype.toString.call(t).split(" ")[1].slice(0,-1);return t===Object(t)&&"Array"!=e&&"Function"!=e&&"RegExp"!=e&&"HTMLUnknownElement"!=e}function g(t,e,i){function s(t,e){for(var i in e)if(e.hasOwnProperty(i)){if(h(e[i])){h(t[i])?s(t[i],e[i]):t[i]=Object.assign({},e[i]);continue}if(Array.isArray(e[i])){t[i]=Object.assign([],e[i]);continue}t[i]=e[i]}}return t instanceof Object||(t={}),s(t,e),i&&s(t,i),t}function p(){const t=[],e={};for(let i of arguments)for(let s of i)h(s)?e[s.value]||(t.push(s),e[s.value]=1):t.includes(s)||t.push(s);return t}function c(t){return String.prototype.normalize?"string"==typeof t?t.normalize("NFD").replace(/[\u0300-\u036f]/g,""):void 0:t}var u=()=>/(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);function m(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}function v(t){return t&&t.classList&&t.classList.contains(this.settings.classNames.tag)}function f(t,e){var i=window.getSelection();return e=e||i.getRangeAt(0),"string"==typeof t&&(t=document.createTextNode(t)),e&&(e.deleteContents(),e.insertNode(t)),t}function T(t,e,i){return t?(e&&(t.__tagifyTagData=i?e:g({},t.__tagifyTagData||{},e)),t.__tagifyTagData):(console.warn("tag element doesn't exist",t,e),e)}var w={delimiters:",",pattern:null,tagTextProp:"value",maxTags:1/0,callbacks:{},addTagOnBlur:!0,onChangeAfterBlur:!0,duplicates:!1,whitelist:[],blacklist:[],enforceWhitelist:!1,userInput:!0,keepInvalidTags:!1,createInvalidTags:!0,mixTagsAllowedAfter:/,|\.|\:|\s/,mixTagsInterpolator:["[[","]]"],backspace:!0,skipInvalid:!1,pasteAsTags:!0,editTags:{clicks:2,keepInvalid:!0},transformTag:()=>{},trim:!0,a11y:{focusableTags:!1},mixMode:{insertAfterTag:" "},autoComplete:{enabled:!0,rightKey:!1},classNames:{namespace:"tagify",mixMode:"tagify--mix",selectMode:"tagify--select",input:"tagify__input",focus:"tagify--focus",tagNoAnimation:"tagify--noAnim",tagInvalid:"tagify--invalid",tagNotAllowed:"tagify--notAllowed",scopeLoading:"tagify--loading",hasMaxTags:"tagify--hasMaxTags",hasNoTags:"tagify--noTags",empty:"tagify--empty",inputInvalid:"tagify__input--invalid",dropdown:"tagify__dropdown",dropdownWrapper:"tagify__dropdown__wrapper",dropdownHeader:"tagify__dropdown__header",dropdownFooter:"tagify__dropdown__footer",dropdownItem:"tagify__dropdown__item",dropdownItemActive:"tagify__dropdown__item--active",dropdownItemHidden:"tagify__dropdown__item--hidden",dropdownInital:"tagify__dropdown--initial",tag:"tagify__tag",tagText:"tagify__tag-text",tagX:"tagify__tag__removeBtn",tagLoading:"tagify__tag--loading",tagEditing:"tagify__tag--editable",tagFlash:"tagify__tag--flash",tagHide:"tagify__tag--hide"},dropdown:{classname:"",enabled:2,maxItems:10,searchKeys:["value","searchBy"],fuzzySearch:!0,caseSensitive:!1,accentedSearch:!0,includeSelectedTags:!1,highlightFirst:!1,closeOnSelect:!0,clearOnSelect:!0,position:"all",appendTarget:null},hooks:{beforeRemoveTag:()=>Promise.resolve(),beforePaste:()=>Promise.resolve(),suggestionClick:()=>Promise.resolve()}};function b(){this.dropdown={};for(let t in this._dropdown)this.dropdown[t]="function"==typeof this._dropdown[t]?this._dropdown[t].bind(this):this._dropdown[t];this.dropdown.refs()}var y={refs(){this.DOM.dropdown=this.parseTemplate("dropdown",[this.settings]),this.DOM.dropdown.content=this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-wrapper']")},getHeaderRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-header']")},getFooterRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-footer']")},getAllSuggestionsRefs(){return[...this.DOM.dropdown.content.querySelectorAll(this.settings.classNames.dropdownItemSelector)]},show(t){var e,i,a,n=this.settings,o="mix"==n.mode&&!n.enforceWhitelist,r=!n.whitelist||!n.whitelist.length,l="manual"==n.dropdown.position;if(t=void 0===t?this.state.inputText:t,!(r&&!o&&!n.templates.dropdownItemNoMatch||!1===n.dropdown.enable||this.state.isLoading||this.settings.readonly)){if(clearTimeout(this.dropdownHide__bindEventsTimeout),this.suggestedListItems=this.dropdown.filterListItems(t),t&&!this.suggestedListItems.length&&(this.trigger("dropdown:noMatch",t),n.templates.dropdownItemNoMatch&&(a=n.templates.dropdownItemNoMatch.call(this,{value:t}))),!a){if(this.suggestedListItems.length)t&&o&&!this.state.editing.scope&&!s(this.suggestedListItems[0].value,t)&&this.suggestedListItems.unshift({value:t});else{if(!t||!o||this.state.editing.scope)return this.input.autocomplete.suggest.call(this),void this.dropdown.hide();this.suggestedListItems=[{value:t}]}i=""+(h(e=this.suggestedListItems[0])?e.value:e),n.autoComplete&&i&&0==i.indexOf(t)&&this.input.autocomplete.suggest.call(this,e)}this.dropdown.fill(a),n.dropdown.highlightFirst&&this.dropdown.highlightOption(this.DOM.dropdown.content.querySelector(n.classNames.dropdownItemSelector)),this.state.dropdown.visible||setTimeout(this.dropdown.events.binding.bind(this)),this.state.dropdown.visible=t||!0,this.state.dropdown.query=t,this.setStateSelection(),l||setTimeout((()=>{this.dropdown.position(),this.dropdown.render()})),setTimeout((()=>{this.trigger("dropdown:show",this.DOM.dropdown)}))}},hide(t){var e=this.DOM,i=e.scope,s=e.dropdown,a="manual"==this.settings.dropdown.position&&!t;if(s&&document.body.contains(s)&&!a)return window.removeEventListener("resize",this.dropdown.position),this.dropdown.events.binding.call(this,!1),i.setAttribute("aria-expanded",!1),s.parentNode.removeChild(s),setTimeout((()=>{this.state.dropdown.visible=!1}),100),this.state.dropdown.query=this.state.ddItemData=this.state.ddItemElm=this.state.selection=null,this.state.tag&&this.state.tag.value.length&&(this.state.flaggedTags[this.state.tag.baseOffset]=this.state.tag),this.trigger("dropdown:hide",s),this},toggle(t){this.dropdown[this.state.dropdown.visible&&!t?"hide":"show"]()},render(){var t,e,i,s=(t=this.DOM.dropdown,(i=t.cloneNode(!0)).style.cssText="position:fixed; top:-9999px; opacity:0",document.body.appendChild(i),e=i.clientHeight,i.parentNode.removeChild(i),e),a=this.settings;return"number"==typeof a.dropdown.enabled&&a.dropdown.enabled>=0?(this.DOM.scope.setAttribute("aria-expanded",!0),document.body.contains(this.DOM.dropdown)||(this.DOM.dropdown.classList.add(a.classNames.dropdownInital),this.dropdown.position(s),a.dropdown.appendTarget.appendChild(this.DOM.dropdown),setTimeout((()=>this.DOM.dropdown.classList.remove(a.classNames.dropdownInital)))),this):this},fill(t){t="string"==typeof t?t:this.dropdown.createListHTML(t||this.suggestedListItems);var e,i=this.settings.templates.dropdownContent.call(this,t);this.DOM.dropdown.content.innerHTML=(e=i)?e.replace(/\>[\r\n ]+\</g,"><").replace(/(<.*?>)|\s+/g,((t,e)=>e||" ")):""},fillHeaderFooter(){var t=this.dropdown.filterListItems(this.state.dropdown.query),e=this.parseTemplate("dropdownHeader",[t]),i=this.parseTemplate("dropdownFooter",[t]),s=this.dropdown.getHeaderRef(),a=this.dropdown.getFooterRef();e&&s?.parentNode.replaceChild(e,s),i&&a?.parentNode.replaceChild(i,a)},refilter(t){t=t||this.state.dropdown.query||"",this.suggestedListItems=this.dropdown.filterListItems(t),this.dropdown.fill(),this.suggestedListItems.length||this.dropdown.hide(),this.trigger("dropdown:updated",this.DOM.dropdown)},position(t){var e=this.settings.dropdown;if("manual"!=e.position){var i,s,a,n,o,r,l=this.DOM.dropdown,d=e.placeAbove,h=e.appendTarget===document.body,g=h?window.pageYOffset:e.appendTarget.scrollTop,p=document.fullscreenElement||document.webkitFullscreenElement||document.documentElement,c=p.clientHeight,u=Math.max(p.clientWidth||0,window.innerWidth||0)>480?e.position:"all",m=this.DOM["input"==u?"input":"scope"];if(t=t||l.clientHeight,this.state.dropdown.visible){if("text"==u?(a=(i=function(){const t=document.getSelection();if(t.rangeCount){const e=t.getRangeAt(0),i=e.startContainer,s=e.startOffset;let a,n;if(s>0)return n=document.createRange(),n.setStart(i,s-1),n.setEnd(i,s),a=n.getBoundingClientRect(),{left:a.right,top:a.top,bottom:a.bottom};if(i.getBoundingClientRect)return i.getBoundingClientRect()}return{left:-9999,top:-9999}}()).bottom,s=i.top,n=i.left,o="auto"):(r=function(t){for(var e=0,i=0;t&&t!=p;)e+=t.offsetLeft||0,i+=t.offsetTop||0,t=t.parentNode;return{left:e,top:i}}(e.appendTarget),s=(i=m.getBoundingClientRect()).top-r.top,a=i.bottom-1-r.top,n=i.left-r.left,o=i.width+"px"),!h){let t=function(){for(var t=0,i=e.appendTarget.parentNode;i;)t+=i.scrollTop||0,i=i.parentNode;return t}();s+=t,a+=t}s=Math.floor(s),a=Math.ceil(a),d=void 0===d?c-i.bottom<t:d,l.style.cssText="left:"+(n+window.pageXOffset)+"px; width:"+o+";"+(d?"top: "+(s+g)+"px":"top: "+(a+g)+"px"),l.setAttribute("placement",d?"top":"bottom"),l.setAttribute("position",u)}}},events:{binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e=this.dropdown.events.callbacks,i=this.listeners.dropdown=this.listeners.dropdown||{position:this.dropdown.position.bind(this,null),onKeyDown:e.onKeyDown.bind(this),onMouseOver:e.onMouseOver.bind(this),onMouseLeave:e.onMouseLeave.bind(this),onClick:e.onClick.bind(this),onScroll:e.onScroll.bind(this)},s=t?"addEventListener":"removeEventListener";"manual"!=this.settings.dropdown.position&&(document[s]("scroll",i.position,!0),window[s]("resize",i.position),window[s]("keydown",i.onKeyDown)),this.DOM.dropdown[s]("mouseover",i.onMouseOver),this.DOM.dropdown[s]("mouseleave",i.onMouseLeave),this.DOM.dropdown[s]("mousedown",i.onClick),this.DOM.dropdown.content[s]("scroll",i.onScroll)},callbacks:{onKeyDown(t){if(this.state.hasFocus&&!this.state.composing){var e=this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector),i=this.dropdown.getSuggestionDataByNode(e);switch(t.key){case"ArrowDown":case"ArrowUp":case"Down":case"Up":t.preventDefault();var s=this.dropdown.getAllSuggestionsRefs(),a="ArrowUp"==t.key||"Up"==t.key;e&&(e=this.dropdown.getNextOrPrevOption(e,!a)),e&&e.matches(this.settings.classNames.dropdownItemSelector)||(e=s[a?s.length-1:0]),this.dropdown.highlightOption(e,!0);break;case"Escape":case"Esc":this.dropdown.hide();break;case"ArrowRight":if(this.state.actions.ArrowLeft)return;case"Tab":if("mix"!=this.settings.mode&&e&&!this.settings.autoComplete.rightKey&&!this.state.editing){t.preventDefault();var n=this.dropdown.getMappedValue(i);return this.input.autocomplete.set.call(this,n),!1}return!0;case"Enter":t.preventDefault(),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{if(e)return this.dropdown.selectOption(e),e=this.dropdown.getNextOrPrevOption(e,!a),void this.dropdown.highlightOption(e);this.dropdown.hide(),"mix"!=this.settings.mode&&this.addTags(this.state.inputText.trim(),!0)})).catch((t=>t));break;case"Backspace":{if("mix"==this.settings.mode||this.state.editing.scope)return;const t=this.input.raw.call(this);""!=t&&8203!=t.charCodeAt(0)||(!0===this.settings.backspace?this.removeTags():"edit"==this.settings.backspace&&setTimeout(this.editTag.bind(this),0))}}}},onMouseOver(t){var e=t.target.closest(this.settings.classNames.dropdownItemSelector);e&&this.dropdown.highlightOption(e)},onMouseLeave(t){this.dropdown.highlightOption()},onClick(t){if(0==t.button&&t.target!=this.DOM.dropdown&&t.target!=this.DOM.dropdown.content){var e=t.target.closest(this.settings.classNames.dropdownItemSelector),i=this.dropdown.getSuggestionDataByNode(e);this.state.actions.selectOption=!0,setTimeout((()=>this.state.actions.selectOption=!1),50),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{e?this.dropdown.selectOption(e,t):this.dropdown.hide()})).catch((t=>console.warn(t)))}},onScroll(t){var e=t.target,i=e.scrollTop/(e.scrollHeight-e.parentNode.clientHeight)*100;this.trigger("dropdown:scroll",{percentage:Math.round(i)})}}},getSuggestionDataByNode(t){var e=t&&t.getAttribute("value");return this.suggestedListItems.find((t=>t.value==e))||null},getNextOrPrevOption(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.dropdown.getAllSuggestionsRefs(),s=i.findIndex((e=>e===t));return e?i[s+1]:i[s-1]},highlightOption(t,e){var i,s=this.settings.classNames.dropdownItemActive;if(this.state.ddItemElm&&(this.state.ddItemElm.classList.remove(s),this.state.ddItemElm.removeAttribute("aria-selected")),!t)return this.state.ddItemData=null,this.state.ddItemElm=null,void this.input.autocomplete.suggest.call(this);i=this.dropdown.getSuggestionDataByNode(t),this.state.ddItemData=i,this.state.ddItemElm=t,t.classList.add(s),t.setAttribute("aria-selected",!0),e&&(t.parentNode.scrollTop=t.clientHeight+t.offsetTop-t.parentNode.clientHeight),this.settings.autoComplete&&(this.input.autocomplete.suggest.call(this,i),this.dropdown.position())},selectOption(t,e){var i=this.settings.dropdown,s=i.clearOnSelect,a=i.closeOnSelect;if(!t)return this.addTags(this.state.inputText,!0),void(a&&this.dropdown.hide());e=e||{};var n=t.getAttribute("value"),o="noMatch"==n,r=this.suggestedListItems.find((t=>(t.value??t)==n));this.trigger("dropdown:select",{data:r,elm:t,event:e}),n&&(r||o)?(this.state.editing?this.onEditTagDone(null,g({__isValid:!0},this.normalizeTags([r])[0])):this["mix"==this.settings.mode?"addMixTags":"addTags"]([r||this.input.raw.call(this)],s),this.DOM.input.parentNode&&(setTimeout((()=>{this.DOM.input.focus(),this.toggleFocusClass(!0)})),a&&setTimeout(this.dropdown.hide.bind(this)),t.addEventListener("transitionend",(()=>{this.dropdown.fillHeaderFooter(),setTimeout((()=>t.remove()),100)}),{once:!0}),t.classList.add(this.settings.classNames.dropdownItemHidden))):a&&setTimeout(this.dropdown.hide.bind(this))},selectAll(t){this.suggestedListItems.length=0,this.dropdown.hide(),this.dropdown.filterListItems("");var e=this.dropdown.filterListItems("");return t||(e=this.state.dropdown.suggestions),this.addTags(e,!0),this},filterListItems(t,e){var i,s,a,n,o,r=this.settings,l=r.dropdown,d=(e=e||{},[]),g=[],p=r.whitelist,u=l.maxItems>=0?l.maxItems:1/0,m=l.searchKeys,v=0;if(!(t="select"==r.mode&&this.value.length&&this.value[0][r.tagTextProp]==t?"":t)||!m.length)return d=l.includeSelectedTags?p:p.filter((t=>!this.isTagDuplicate(h(t)?t.value:t))),this.state.dropdown.suggestions=d,d.slice(0,u);function f(t,e){return e.toLowerCase().split(" ").every((e=>t.includes(e.toLowerCase())))}for(o=l.caseSensitive?""+t:(""+t).toLowerCase();v<p.length;v++){let t,r;i=p[v]instanceof Object?p[v]:{value:p[v]};let u=!Object.keys(i).some((t=>m.includes(t)))?["value"]:m;l.fuzzySearch&&!e.exact?(a=u.reduce(((t,e)=>t+" "+(i[e]||"")),"").toLowerCase().trim(),l.accentedSearch&&(a=c(a),o=c(o)),t=0==a.indexOf(o),r=a===o,s=f(a,o)):(t=!0,s=u.some((t=>{var s=""+(i[t]||"");return l.accentedSearch&&(s=c(s),o=c(o)),l.caseSensitive||(s=s.toLowerCase()),r=s===o,e.exact?s===o:0==s.indexOf(o)}))),n=!l.includeSelectedTags&&this.isTagDuplicate(h(i)?i.value:i),s&&!n&&(r&&t?g.push(i):"startsWith"==l.sortby&&t?d.unshift(i):d.push(i))}return this.state.dropdown.suggestions=g.concat(d),"function"==typeof l.sortby?l.sortby(g.concat(d),o):g.concat(d).slice(0,u)},getMappedValue(t){var e=this.settings.dropdown.mapValueTo;return e?"function"==typeof e?e(t):t[e]||t.value:t.value},createListHTML(t){return g([],t).map(((t,i)=>{"string"!=typeof t&&"number"!=typeof t||(t={value:t});var s=this.dropdown.getMappedValue(t);return s="string"==typeof s?d(s):s,this.settings.templates.dropdownItem.apply(this,[e(e({},t),{},{mappedValue:s}),this])})).join("")}};const x="@yaireo/tagify/";var O,D={empty:"empty",exceed:"number of tags exceeded",pattern:"pattern mismatch",duplicate:"already exists",notAllowed:"not allowed"},M={wrapper:(t,e)=>`<tags class="${e.classNames.namespace} ${e.mode?`${e.classNames[e.mode+"Mode"]}`:""} ${t.className}"\n                    ${e.readonly?"readonly":""}\n                    ${e.disabled?"disabled":""}\n                    ${e.required?"required":""}\n                    ${"select"===e.mode?"spellcheck='false'":""}\n                    tabIndex="-1">\n            <span ${!e.readonly&&e.userInput?"contenteditable":""} tabIndex="0" data-placeholder="${e.placeholder||"&#8203;"}" aria-placeholder="${e.placeholder||""}"\n                class="${e.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix"==e.mode}"></span>\n                &#8203;\n        </tags>`,tag(t,e){let i=e.settings;return`<tag title="${t.title||t.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${i.a11y.focusableTags?0:-1}"\n                    class="${i.classNames.tag} ${t.class||""}"\n                    ${this.getAttributes(t)}>\n            <x title='' class="${i.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${i.classNames.tagText}">${t[i.tagTextProp]||t.value}</span>\n            </div>\n        </tag>`},dropdown(t){var e=t.dropdown,i="manual"==e.position,s=`${t.classNames.dropdown}`;return`<div class="${i?"":s} ${e.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-suggestions-wrapper' class="${t.classNames.dropdownWrapper}"></div>\n                </div>`},dropdownContent(t){var e=this.settings,i=this.state.dropdown.suggestions;return`\n            ${e.templates.dropdownHeader.call(this,i)}\n            ${t}\n            ${e.templates.dropdownFooter.call(this,i)}\n        `},dropdownItem(t){return`<div ${this.getAttributes(t)}\n                    class='${this.settings.classNames.dropdownItem} ${t.class?t.class:""}'\n                    tabindex="0"\n                    role="option">${t.mappedValue||t.value}</div>`},dropdownHeader(t){return`<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`},dropdownFooter(t){var e=t.length-this.settings.dropdown.maxItems;return e>0?`<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${e} more items. Refine your search.\n            </footer>`:""},dropdownItemNoMatch:null};var I={customBinding(){this.customEventsList.forEach((t=>{this.on(t,this.settings.callbacks[t])}))},binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e,i=this.events.callbacks,s=t?"addEventListener":"removeEventListener";if(!this.state.mainEvents||!t){for(var a in this.state.mainEvents=t,t&&!this.listeners.main&&(this.events.bindGlobal.call(this),this.settings.isJQueryPlugin&&jQuery(this.DOM.originalInput).on("tagify.removeAllTags",this.removeAllTags.bind(this))),e=this.listeners.main=this.listeners.main||{focus:["input",i.onFocusBlur.bind(this)],keydown:["input",i.onKeydown.bind(this)],click:["scope",i.onClickScope.bind(this)],dblclick:["scope",i.onDoubleClickScope.bind(this)],paste:["input",i.onPaste.bind(this)],drop:["input",i.onDrop.bind(this)],compositionstart:["input",i.onCompositionStart.bind(this)],compositionend:["input",i.onCompositionEnd.bind(this)]})this.DOM[e[a][0]][s](a,e[a][1]);clearInterval(this.listeners.main.originalInputValueObserverInterval),this.listeners.main.originalInputValueObserverInterval=setInterval(i.observeOriginalInputValue.bind(this),500);var n=this.listeners.main.inputMutationObserver||new MutationObserver(i.onInputDOMChange.bind(this));n.disconnect(),"mix"==this.settings.mode&&n.observe(this.DOM.input,{childList:!0})}},bindGlobal(t){var e,i=this.events.callbacks,s=t?"removeEventListener":"addEventListener";if(this.listeners&&(t||!this.listeners.global))for(e of(this.listeners.global=this.listeners.global||[{type:this.isIE?"keydown":"input",target:this.DOM.input,cb:i[this.isIE?"onInputIE":"onInput"].bind(this)},{type:"keydown",target:window,cb:i.onWindowKeyDown.bind(this)},{type:"blur",target:this.DOM.input,cb:i.onFocusBlur.bind(this)},{type:"click",target:document,cb:i.onClickAnywhere.bind(this)}],this.listeners.global))e.target[s](e.type,e.cb)},unbindGlobal(){this.events.bindGlobal.call(this,!0)},callbacks:{onFocusBlur(t){var e=this.settings,i=t.target?this.trim(t.target.textContent):"",s=this.value?.[0]?.[e.tagTextProp],a=t.type,n=e.dropdown.enabled>=0,o={relatedTarget:t.relatedTarget},r=this.state.actions.selectOption&&(n||!e.dropdown.closeOnSelect),l=this.state.actions.addNew&&n,d=t.relatedTarget&&v.call(this,t.relatedTarget)&&this.DOM.scope.contains(t.relatedTarget);if("blur"==a){if(t.relatedTarget===this.DOM.scope)return this.dropdown.hide(),void this.DOM.input.focus();this.postUpdate(),e.onChangeAfterBlur&&this.triggerChangeEvent()}if(!r&&!l)if(this.state.hasFocus="focus"==a&&+new Date,this.toggleFocusClass(this.state.hasFocus),"mix"!=e.mode){if("focus"==a)return this.trigger("focus",o),void(0!==e.dropdown.enabled&&e.userInput||this.dropdown.show(this.value.length?"":void 0));"blur"==a&&(this.trigger("blur",o),this.loading(!1),"select"==e.mode&&(d&&(this.removeTags(),i=""),s===i&&(i="")),i&&!this.state.actions.selectOption&&e.addTagOnBlur&&this.addTags(i,!0)),this.DOM.input.removeAttribute("style"),this.dropdown.hide()}else"focus"==a?this.trigger("focus",o):"blur"==t.type&&(this.trigger("blur",o),this.loading(!1),this.dropdown.hide(),this.state.dropdown.visible=void 0,this.setStateSelection())},onCompositionStart(t){this.state.composing=!0},onCompositionEnd(t){this.state.composing=!1},onWindowKeyDown(t){var e,i=document.activeElement,s=v.call(this,i)&&this.DOM.scope.contains(document.activeElement),a=s&&i.hasAttribute("readonly");if(s&&!a)switch(e=i.nextElementSibling,t.key){case"Backspace":this.settings.readonly||(this.removeTags(i),(e||this.DOM.input).focus());break;case"Enter":setTimeout(this.editTag.bind(this),0,i)}},onKeydown(t){var e=this.settings;if(!this.state.composing&&e.userInput){"select"==e.mode&&e.enforceWhitelist&&this.value.length&&"Tab"!=t.key&&t.preventDefault();var i=this.trim(t.target.textContent);if(this.trigger("keydown",{event:t}),"mix"==e.mode){switch(t.key){case"Left":case"ArrowLeft":this.state.actions.ArrowLeft=!0;break;case"Delete":case"Backspace":if(this.state.editing)return;var s=document.getSelection(),a="Delete"==t.key&&s.anchorOffset==(s.anchorNode.length||0),n=s.anchorNode.previousSibling,r=1==s.anchorNode.nodeType||!s.anchorOffset&&n&&1==n.nodeType&&s.anchorNode.previousSibling;o(this.DOM.input.innerHTML);var d,h,g,p=this.getTagElms();if("edit"==e.backspace&&r)return d=1==s.anchorNode.nodeType?null:s.anchorNode.previousElementSibling,setTimeout(this.editTag.bind(this),0,d),void t.preventDefault();if(u()&&r instanceof Element)return g=l(r),r.hasAttribute("readonly")||r.remove(),this.DOM.input.focus(),void setTimeout((()=>{this.placeCaretAfterNode(g),this.DOM.input.click()}));if("BR"==s.anchorNode.nodeName)return;if((a||r)&&1==s.anchorNode.nodeType?h=0==s.anchorOffset?a?p[0]:null:p[Math.min(p.length,s.anchorOffset)-1]:a?h=s.anchorNode.nextElementSibling:r instanceof Element&&(h=r),3==s.anchorNode.nodeType&&!s.anchorNode.nodeValue&&s.anchorNode.previousElementSibling&&t.preventDefault(),(r||a)&&!e.backspace)return void t.preventDefault();if("Range"!=s.type&&!s.anchorOffset&&s.anchorNode==this.DOM.input&&"Delete"!=t.key)return void t.preventDefault();if("Range"!=s.type&&h&&h.hasAttribute("readonly"))return void this.placeCaretAfterNode(l(h));clearTimeout(O),O=setTimeout((()=>{var t=document.getSelection();o(this.DOM.input.innerHTML),!a&&t.anchorNode.previousSibling,this.value=[].map.call(p,((t,e)=>{var i=T(t);if(t.parentNode||i.readonly)return i;this.trigger("remove",{tag:t,index:e,data:i})})).filter((t=>t))}),20)}return!0}switch(t.key){case"Backspace":"select"==e.mode&&e.enforceWhitelist&&this.value.length?this.removeTags():this.state.dropdown.visible&&"manual"!=e.dropdown.position||""!=t.target.textContent&&8203!=i.charCodeAt(0)||(!0===e.backspace?this.removeTags():"edit"==e.backspace&&setTimeout(this.editTag.bind(this),0));break;case"Esc":case"Escape":if(this.state.dropdown.visible)return;t.target.blur();break;case"Down":case"ArrowDown":this.state.dropdown.visible||this.dropdown.show();break;case"ArrowRight":{let t=this.state.inputSuggestion||this.state.ddItemData;if(t&&e.autoComplete.rightKey)return void this.addTags([t],!0);break}case"Tab":{let s="select"==e.mode;if(!i||s)return!0;t.preventDefault()}case"Enter":if(this.state.dropdown.visible&&"manual"!=e.dropdown.position)return;t.preventDefault(),setTimeout((()=>{this.state.dropdown.visible||this.state.actions.selectOption||this.addTags(i,!0)}))}}},onInput(t){this.postUpdate();var e=this.settings;if("mix"==e.mode)return this.events.callbacks.onMixTagsInput.call(this,t);var i=this.input.normalize.call(this),s=i.length>=e.dropdown.enabled,a={value:i,inputElm:this.DOM.input},n=this.validateTag({value:i});"select"==e.mode&&this.toggleScopeValidation(n),a.isValid=n,this.state.inputText!=i&&(this.input.set.call(this,i,!1),-1!=i.search(e.delimiters)?this.addTags(i)&&this.input.set.call(this):e.dropdown.enabled>=0&&this.dropdown[s?"show":"hide"](i),this.trigger("input",a))},onMixTagsInput(t){var e,i,s,a,n,o,r,l,d=this.settings,h=this.value.length,p=this.getTagElms(),c=document.createDocumentFragment(),m=window.getSelection().getRangeAt(0),v=[].map.call(p,(t=>T(t).value));if("deleteContentBackward"==t.inputType&&u()&&this.events.callbacks.onKeydown.call(this,{target:t.target,key:"Backspace"}),this.value.slice().forEach((t=>{t.readonly&&!v.includes(t.value)&&c.appendChild(this.createTagElem(t))})),c.childNodes.length&&(m.insertNode(c),this.setRangeAtStartEnd(!1,c.lastChild)),p.length!=h)return this.value=[].map.call(this.getTagElms(),(t=>T(t))),void this.update({withoutChangeEvent:!0});if(this.hasMaxTags())return!0;if(window.getSelection&&(o=window.getSelection()).rangeCount>0&&3==o.anchorNode.nodeType){if((m=o.getRangeAt(0).cloneRange()).collapse(!0),m.setStart(o.focusNode,0),s=(e=m.toString().slice(0,m.endOffset)).split(d.pattern).length-1,(i=e.match(d.pattern))&&(a=e.slice(e.lastIndexOf(i[i.length-1]))),a){if(this.state.actions.ArrowLeft=!1,this.state.tag={prefix:a.match(d.pattern)[0],value:a.replace(d.pattern,"")},this.state.tag.baseOffset=o.baseOffset-this.state.tag.value.length,l=this.state.tag.value.match(d.delimiters))return this.state.tag.value=this.state.tag.value.replace(d.delimiters,""),this.state.tag.delimiters=l[0],this.addTags(this.state.tag.value,d.dropdown.clearOnSelect),void this.dropdown.hide();n=this.state.tag.value.length>=d.dropdown.enabled;try{r=(r=this.state.flaggedTags[this.state.tag.baseOffset]).prefix==this.state.tag.prefix&&r.value[0]==this.state.tag.value[0],this.state.flaggedTags[this.state.tag.baseOffset]&&!this.state.tag.value&&delete this.state.flaggedTags[this.state.tag.baseOffset]}catch(t){}(r||s<this.state.mixMode.matchedPatternCount)&&(n=!1)}else this.state.flaggedTags={};this.state.mixMode.matchedPatternCount=s}setTimeout((()=>{this.update({withoutChangeEvent:!0}),this.trigger("input",g({},this.state.tag,{textContent:this.DOM.input.textContent})),this.state.tag&&this.dropdown[n?"show":"hide"](this.state.tag.value)}),10)},onInputIE(t){var e=this;setTimeout((function(){e.events.callbacks.onInput.call(e,t)}))},observeOriginalInputValue(){this.DOM.originalInput.parentNode||this.destroy(),this.DOM.originalInput.value!=this.DOM.originalInput.tagifyValue&&this.loadOriginalValues()},onClickAnywhere(t){t.target==this.DOM.scope||this.DOM.scope.contains(t.target)||(this.toggleFocusClass(!1),this.state.hasFocus=!1)},onClickScope(t){var e=this.settings,i=t.target.closest("."+e.classNames.tag),s=+new Date-this.state.hasFocus;if(t.target!=this.DOM.scope){if(!t.target.classList.contains(e.classNames.tagX))return i?(this.trigger("click",{tag:i,index:this.getNodeIndex(i),data:T(i),event:t}),void(1!==e.editTags&&1!==e.editTags.clicks||this.events.callbacks.onDoubleClickScope.call(this,t))):void(t.target==this.DOM.input&&("mix"==e.mode&&this.fixFirefoxLastTagNoCaret(),s>500)?this.state.dropdown.visible?this.dropdown.hide():0===e.dropdown.enabled&&"mix"!=e.mode&&this.dropdown.show(this.value.length?"":void 0):"select"!=e.mode||0!==e.dropdown.enabled||this.state.dropdown.visible||this.dropdown.show());this.removeTags(t.target.parentNode)}else this.DOM.input.focus()},onPaste(t){t.preventDefault();var e,i,s=this.settings;if("select"==s.mode&&s.enforceWhitelist||!s.userInput)return!1;s.readonly||(e=t.clipboardData||window.clipboardData,i=e.getData("Text"),s.hooks.beforePaste(t,{tagify:this,pastedText:i,clipboardData:e}).then((e=>{void 0===e&&(e=i),e&&(this.injectAtCaret(e,window.getSelection().getRangeAt(0)),"mix"==this.settings.mode?this.events.callbacks.onMixTagsInput.call(this,t):this.settings.pasteAsTags?this.addTags(this.state.inputText+e,!0):this.state.inputText=e)})).catch((t=>t)))},onDrop(t){t.preventDefault()},onEditTagInput(t,e){var i=t.closest("."+this.settings.classNames.tag),s=this.getNodeIndex(i),a=T(i),n=this.input.normalize.call(this,t),o={[this.settings.tagTextProp]:n,__tagId:a.__tagId},r=this.validateTag(o);this.editTagChangeDetected(g(a,o))||!0!==t.originalIsValid||(r=!0),i.classList.toggle(this.settings.classNames.tagInvalid,!0!==r),a.__isValid=r,i.title=!0===r?a.title||a.value:r,n.length>=this.settings.dropdown.enabled&&(this.state.editing&&(this.state.editing.value=n),this.dropdown.show(n)),this.trigger("edit:input",{tag:i,index:s,data:g({},this.value[s],{newValue:n}),event:e})},onEditTagPaste(t,e){var i=(e.clipboardData||window.clipboardData).getData("Text");e.preventDefault();var s=f(i);this.setRangeAtStartEnd(!1,s)},onEditTagFocus(t){this.state.editing={scope:t,input:t.querySelector("[contenteditable]")}},onEditTagBlur(t){if(this.state.hasFocus||this.toggleFocusClass(),this.DOM.scope.contains(t)){var e,i,s=this.settings,a=t.closest("."+s.classNames.tag),n=T(a),o=this.input.normalize.call(this,t),r={[s.tagTextProp]:o,__tagId:n.__tagId},l=n.__originalData,d=this.editTagChangeDetected(g(n,r)),h=this.validateTag(r);if(o)if(d){if(e=this.hasMaxTags(),i=g({},l,{[s.tagTextProp]:this.trim(o),__isValid:h}),s.transformTag.call(this,i,l),!0!==(h=(!e||!0===l.__isValid)&&this.validateTag(i))){if(this.trigger("invalid",{data:i,tag:a,message:h}),s.editTags.keepInvalid)return;s.keepInvalidTags?i.__isValid=h:i=l}else s.keepInvalidTags&&(delete i.title,delete i["aria-invalid"],delete i.class);this.onEditTagDone(a,i)}else this.onEditTagDone(a,l);else this.onEditTagDone(a)}},onEditTagkeydown(t,e){if(!this.state.composing)switch(this.trigger("edit:keydown",{event:t}),t.key){case"Esc":case"Escape":e.parentNode.replaceChild(e.__tagifyTagData.__originalHTML,e),this.state.editing=!1;case"Enter":case"Tab":t.preventDefault(),t.target.blur()}},onDoubleClickScope(t){var e,i,s=t.target.closest("."+this.settings.classNames.tag),a=T(s),n=this.settings;s&&n.userInput&&!1!==a.editable&&(e=s.classList.contains(this.settings.classNames.tagEditing),i=s.hasAttribute("readonly"),"select"==n.mode||n.readonly||e||i||!this.settings.editTags||this.editTag(s),this.toggleFocusClass(!0),this.trigger("dblclick",{tag:s,index:this.getNodeIndex(s),data:T(s)}))},onInputDOMChange(t){t.forEach((t=>{t.addedNodes.forEach((t=>{if("<div><br></div>"==t.outerHTML)t.replaceWith(document.createElement("br"));else if(1==t.nodeType&&t.querySelector(this.settings.classNames.tagSelector)){let e=document.createTextNode("");3==t.childNodes[0].nodeType&&"BR"!=t.previousSibling.nodeName&&(e=document.createTextNode("\n")),t.replaceWith(e,...[...t.childNodes].slice(0,-1)),this.placeCaretAfterNode(e)}else if(v.call(this,t)&&(3!=t.previousSibling?.nodeType||t.previousSibling.textContent||t.previousSibling.remove(),t.previousSibling&&"BR"==t.previousSibling.nodeName)){t.previousSibling.replaceWith("\n​");let e=t.nextSibling,i="";for(;e;)i+=e.textContent,e=e.nextSibling;i.trim()&&this.placeCaretAfterNode(t.previousSibling)}})),t.removedNodes.forEach((t=>{t&&"BR"==t.nodeName&&v.call(this,e)&&(this.removeTags(e),this.fixFirefoxLastTagNoCaret())}))}));var e=this.DOM.input.lastChild;e&&""==e.nodeValue&&e.remove(),e&&"BR"==e.nodeName||this.DOM.input.appendChild(document.createElement("br"))}}};function N(t,e){if(!t){console.warn("Tagify:","input element not found",t);const e=new Proxy(this,{get:()=>()=>e});return e}if(t.__tagify)return console.warn("Tagify: ","input element is already Tagified - Same instance is returned.",t),t.__tagify;var i;g(this,function(t){var e=document.createTextNode("");function i(t,i,s){s&&i.split(/\s+/g).forEach((i=>e[t+"EventListener"].call(e,i,s)))}return{off(t,e){return i("remove",t,e),this},on(t,e){return e&&"function"==typeof e&&i("add",t,e),this},trigger(i,s,a){var n;if(a=a||{cloneData:!0},i)if(t.settings.isJQueryPlugin)"remove"==i&&(i="removeTag"),jQuery(t.DOM.originalInput).triggerHandler(i,[s]);else{try{var o="object"==typeof s?s:{value:s};if((o=a.cloneData?g({},o):o).tagify=this,s.event&&(o.event=this.cloneEvent(s.event)),s instanceof Object)for(var r in s)s[r]instanceof HTMLElement&&(o[r]=s[r]);n=new CustomEvent(i,{detail:o})}catch(t){console.warn(t)}e.dispatchEvent(n)}}}}(this)),this.isFirefox=/firefox|fxios/i.test(navigator.userAgent)&&!/seamonkey/i.test(navigator.userAgent),this.isIE=window.document.documentMode,e=e||{},this.getPersistedData=(i=e.id,t=>{let e,s="/"+t;if(1==localStorage.getItem(x+i+"/v",1))try{e=JSON.parse(localStorage[x+i+s])}catch(t){}return e}),this.setPersistedData=(t=>t?(localStorage.setItem(x+t+"/v",1),(e,i)=>{let s="/"+i,a=JSON.stringify(e);e&&i&&(localStorage.setItem(x+t+s,a),dispatchEvent(new Event("storage")))}):()=>{})(e.id),this.clearPersistedData=(t=>e=>{const i=x+"/"+t+"/";if(e)localStorage.removeItem(i+e);else for(let t in localStorage)t.includes(i)&&localStorage.removeItem(t)})(e.id),this.applySettings(t,e),this.state={inputText:"",editing:!1,composing:!1,actions:{},mixMode:{},dropdown:{},flaggedTags:{}},this.value=[],this.listeners={},this.DOM={},this.build(t),b.call(this),this.getCSSVars(),this.loadOriginalValues(),this.events.customBinding.call(this),this.events.binding.call(this),t.autofocus&&this.DOM.input.focus(),t.__tagify=this}return N.prototype={_dropdown:y,getSetTagData:T,helpers:{sameStr:s,removeCollectionProp:a,omit:n,isObject:h,parseHTML:r,escapeHTML:d,extend:g,concatWithoutDups:p,getUID:m,isNodeTag:v},customEventsList:["change","add","remove","invalid","input","click","keydown","focus","blur","edit:input","edit:beforeUpdate","edit:updated","edit:start","edit:keydown","dropdown:show","dropdown:hide","dropdown:select","dropdown:updated","dropdown:noMatch","dropdown:scroll"],dataProps:["__isValid","__removed","__originalData","__originalHTML","__tagId"],trim(t){return this.settings.trim&&t&&"string"==typeof t?t.trim():t},parseHTML:r,templates:M,parseTemplate(t,e){return r((t=this.settings.templates[t]||t).apply(this,e))},set whitelist(t){const e=t&&Array.isArray(t);this.settings.whitelist=e?t:[],this.setPersistedData(e?t:[],"whitelist")},get whitelist(){return this.settings.whitelist},generateClassSelectors(t){for(let e in t){let i=e;Object.defineProperty(t,i+"Selector",{get(){return"."+this[i].split(" ")[0]}})}},applySettings(t,i){w.templates=this.templates;var s=g({},w,"mix"==i.mode?{dropdown:{position:"text"}}:{}),a=this.settings=g({},s,i);if(a.disabled=t.hasAttribute("disabled"),a.readonly=a.readonly||t.hasAttribute("readonly"),a.placeholder=d(t.getAttribute("placeholder")||a.placeholder||""),a.required=t.hasAttribute("required"),this.generateClassSelectors(a.classNames),void 0===a.dropdown.includeSelectedTags&&(a.dropdown.includeSelectedTags=a.duplicates),this.isIE&&(a.autoComplete=!1),["whitelist","blacklist"].forEach((e=>{var i=t.getAttribute("data-"+e);i&&(i=i.split(a.delimiters))instanceof Array&&(a[e]=i)})),"autoComplete"in i&&!h(i.autoComplete)&&(a.autoComplete=w.autoComplete,a.autoComplete.enabled=i.autoComplete),"mix"==a.mode&&(a.pattern=a.pattern||/@/,a.autoComplete.rightKey=!0,a.delimiters=i.delimiters||null,a.tagTextProp&&!a.dropdown.searchKeys.includes(a.tagTextProp)&&a.dropdown.searchKeys.push(a.tagTextProp)),t.pattern)try{a.pattern=new RegExp(t.pattern)}catch(t){}if(a.delimiters){a._delimiters=a.delimiters;try{a.delimiters=new RegExp(this.settings.delimiters,"g")}catch(t){}}a.disabled&&(a.userInput=!1),this.TEXTS=e(e({},D),a.texts||{}),("select"!=a.mode||i.dropdown?.enabled)&&a.userInput||(a.dropdown.enabled=0),a.dropdown.appendTarget=i.dropdown?.appendTarget||document.body;let n=this.getPersistedData("whitelist");Array.isArray(n)&&(this.whitelist=Array.isArray(a.whitelist)?p(a.whitelist,n):n)},getAttributes(t){var e,i=this.getCustomAttributes(t),s="";for(e in i)s+=" "+e+(void 0!==t[e]?`="${i[e]}"`:"");return s},getCustomAttributes(t){if(!h(t))return"";var e,i={};for(e in t)"__"!=e.slice(0,2)&&"class"!=e&&t.hasOwnProperty(e)&&void 0!==t[e]&&(i[e]=d(t[e]));return i},setStateSelection(){var t=window.getSelection(),e={anchorOffset:t.anchorOffset,anchorNode:t.anchorNode,range:t.getRangeAt&&t.rangeCount&&t.getRangeAt(0)};return this.state.selection=e,e},getCSSVars(){var t=getComputedStyle(this.DOM.scope,null);var e;this.CSSVars={tagHideTransition:(t=>{let e=t.value;return"s"==t.unit?1e3*e:e})(function(t){if(!t)return{};var e=(t=t.trim().split(" ")[0]).split(/\d+/g).filter((t=>t)).pop().trim();return{value:+t.split(e).filter((t=>t))[0].trim(),unit:e}}((e="tag-hide-transition",t.getPropertyValue("--"+e))))}},build(t){var e=this.DOM;this.settings.mixMode.integrated?(e.originalInput=null,e.scope=t,e.input=t):(e.originalInput=t,e.originalInput_tabIndex=t.tabIndex,e.scope=this.parseTemplate("wrapper",[t,this.settings]),e.input=e.scope.querySelector(this.settings.classNames.inputSelector),t.parentNode.insertBefore(e.scope,t),t.tabIndex=-1)},destroy(){this.events.unbindGlobal.call(this),this.DOM.scope.parentNode.removeChild(this.DOM.scope),this.DOM.originalInput.tabIndex=this.DOM.originalInput_tabIndex,delete this.DOM.originalInput.__tagify,this.dropdown.hide(!0),clearTimeout(this.dropdownHide__bindEventsTimeout),clearInterval(this.listeners.main.originalInputValueObserverInterval)},loadOriginalValues(t){var e,i=this.settings;if(this.state.blockChangeEvent=!0,void 0===t){const e=this.getPersistedData("value");t=e&&!this.DOM.originalInput.value?e:i.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value}if(this.removeAllTags(),t)if("mix"==i.mode)this.parseMixTags(t),(e=this.DOM.input.lastChild)&&"BR"==e.tagName||this.DOM.input.insertAdjacentHTML("beforeend","<br>");else{try{JSON.parse(t)instanceof Array&&(t=JSON.parse(t))}catch(t){}this.addTags(t,!0).forEach((t=>t&&t.classList.add(i.classNames.tagNoAnimation)))}else this.postUpdate();this.state.lastOriginalValueReported=i.mixMode.integrated?"":this.DOM.originalInput.value},cloneEvent(t){var e={};for(var i in t)"path"!=i&&(e[i]=t[i]);return e},loading(t){return this.state.isLoading=t,this.DOM.scope.classList[t?"add":"remove"](this.settings.classNames.scopeLoading),this},tagLoading(t,e){return t&&t.classList[e?"add":"remove"](this.settings.classNames.tagLoading),this},toggleClass(t,e){"string"==typeof t&&this.DOM.scope.classList.toggle(t,e)},toggleScopeValidation(t){var e=!0===t||void 0===t;!this.settings.required&&t&&t===this.TEXTS.empty&&(e=!0),this.toggleClass(this.settings.classNames.tagInvalid,!e),this.DOM.scope.title=e?"":t},toggleFocusClass(t){this.toggleClass(this.settings.classNames.focus,!!t)},triggerChangeEvent:function(){if(!this.settings.mixMode.integrated){var t=this.DOM.originalInput,e=this.state.lastOriginalValueReported!==t.value,i=new CustomEvent("change",{bubbles:!0});e&&(this.state.lastOriginalValueReported=t.value,i.simulated=!0,t._valueTracker&&t._valueTracker.setValue(Math.random()),t.dispatchEvent(i),this.trigger("change",this.state.lastOriginalValueReported),t.value=this.state.lastOriginalValueReported)}},events:I,fixFirefoxLastTagNoCaret(){},setRangeAtStartEnd(t,e){if(e){t="number"==typeof t?t:!!t,e=e.lastChild||e;var i=document.getSelection();if(i.focusNode instanceof Element&&!this.DOM.input.contains(i.focusNode))return!0;try{i.rangeCount>=1&&["Start","End"].forEach((s=>i.getRangeAt(0)["set"+s](e,t||e.length)))}catch(t){}}},placeCaretAfterNode(t){if(t&&t.parentNode){var e=t,i=window.getSelection(),s=i.getRangeAt(0);i.rangeCount&&(s.setStartAfter(e),s.collapse(!0),i.removeAllRanges(),i.addRange(s))}},insertAfterTag(t,e){if(e=e||this.settings.mixMode.insertAfterTag,t&&t.parentNode&&e)return e="string"==typeof e?document.createTextNode(e):e,t.parentNode.insertBefore(e,t.nextSibling),e},editTagChangeDetected(t){var e=t.__originalData;for(var i in e)if(!this.dataProps.includes(i)&&t[i]!=e[i])return!0;return!1},getTagTextNode(t){return t.querySelector(this.settings.classNames.tagTextSelector)},setTagTextNode(t,e){this.getTagTextNode(t).innerHTML=d(e)},editTag(t,e){t=t||this.getLastTag(),e=e||{},this.dropdown.hide();var i=this.settings,s=this.getTagTextNode(t),a=this.getNodeIndex(t),n=T(t),o=this.events.callbacks,r=this,l=!0;if(s){if(!(n instanceof Object&&"editable"in n)||n.editable)return n=T(t,{__originalData:g({},n),__originalHTML:t.cloneNode(!0)}),T(n.__originalHTML,n.__originalData),s.setAttribute("contenteditable",!0),t.classList.add(i.classNames.tagEditing),s.addEventListener("focus",o.onEditTagFocus.bind(this,t)),s.addEventListener("blur",(function(){setTimeout((()=>o.onEditTagBlur.call(r,r.getTagTextNode(t))))})),s.addEventListener("input",o.onEditTagInput.bind(this,s)),s.addEventListener("paste",o.onEditTagPaste.bind(this,s)),s.addEventListener("keydown",(e=>o.onEditTagkeydown.call(this,e,t))),s.addEventListener("compositionstart",o.onCompositionStart.bind(this)),s.addEventListener("compositionend",o.onCompositionEnd.bind(this)),e.skipValidation||(l=this.editTagToggleValidity(t)),s.originalIsValid=l,this.trigger("edit:start",{tag:t,index:a,data:n,isValid:l}),s.focus(),this.setRangeAtStartEnd(!1,s),this}else console.warn("Cannot find element in Tag template: .",i.classNames.tagTextSelector)},editTagToggleValidity(t,e){var i;if(e=e||T(t))return(i=!("__isValid"in e)||!0===e.__isValid)||this.removeTagsFromValue(t),this.update(),t.classList.toggle(this.settings.classNames.tagNotAllowed,!i),e.__isValid;console.warn("tag has no data: ",t,e)},onEditTagDone(t,e){e=e||{};var i={tag:t=t||this.state.editing.scope,index:this.getNodeIndex(t),previousData:T(t),data:e};this.trigger("edit:beforeUpdate",i,{cloneData:!1}),this.state.editing=!1,delete e.__originalData,delete e.__originalHTML,t&&e[this.settings.tagTextProp]?(t=this.replaceTag(t,e),this.editTagToggleValidity(t,e),this.settings.a11y.focusableTags?t.focus():this.placeCaretAfterNode(t)):t&&this.removeTags(t),this.trigger("edit:updated",i),this.dropdown.hide(),this.settings.keepInvalidTags&&this.reCheckInvalidTags()},replaceTag(t,e){e&&e.value||(e=t.__tagifyTagData),e.__isValid&&1!=e.__isValid&&g(e,this.getInvalidTagAttrs(e,e.__isValid));var i=this.createTagElem(e);return t.parentNode.replaceChild(i,t),this.updateValueByDOMTags(),i},updateValueByDOMTags(){this.value.length=0,[].forEach.call(this.getTagElms(),(t=>{t.classList.contains(this.settings.classNames.tagNotAllowed.split(" ")[0])||this.value.push(T(t))})),this.update()},injectAtCaret(t,e){return!(e=e||this.state.selection?.range)&&t?(this.appendMixTags(t),this):(f(t,e),this.setRangeAtStartEnd(!1,t),this.updateValueByDOMTags(),this.update(),this)},input:{set(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.settings.dropdown.closeOnSelect;this.state.inputText=t,e&&(this.DOM.input.innerHTML=d(""+t)),!t&&i&&this.dropdown.hide.bind(this),this.input.autocomplete.suggest.call(this),this.input.validate.call(this)},raw(){return this.DOM.input.textContent},validate(){var t=!this.state.inputText||!0===this.validateTag({value:this.state.inputText});return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid,!t),t},normalize(t){var e=t||this.DOM.input,i=[];e.childNodes.forEach((t=>3==t.nodeType&&i.push(t.nodeValue))),i=i.join("\n");try{i=i.replace(/(?:\r\n|\r|\n)/g,this.settings.delimiters.source.charAt(0))}catch(t){}return i=i.replace(/\s/g," "),this.trim(i)},autocomplete:{suggest(t){if(this.settings.autoComplete.enabled){"string"==typeof(t=t||{value:""})&&(t={value:t});var e=this.dropdown.getMappedValue(t);if("number"!=typeof e){var i=e.substr(0,this.state.inputText.length).toLowerCase(),s=e.substring(this.state.inputText.length);e&&this.state.inputText&&i==this.state.inputText.toLowerCase()?(this.DOM.input.setAttribute("data-suggest",s),this.state.inputSuggestion=t):(this.DOM.input.removeAttribute("data-suggest"),delete this.state.inputSuggestion)}}},set(t){var e=this.DOM.input.getAttribute("data-suggest"),i=t||(e?this.state.inputText+e:null);return!!i&&("mix"==this.settings.mode?this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix+i)):(this.input.set.call(this,i),this.setRangeAtStartEnd(!1,this.DOM.input)),this.input.autocomplete.suggest.call(this),this.dropdown.hide(),!0)}}},getTagIdx(t){return this.value.findIndex((e=>e.__tagId==(t||{}).__tagId))},getNodeIndex(t){var e=0;if(t)for(;t=t.previousElementSibling;)e++;return e},getTagElms(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var s="."+[...this.settings.classNames.tag.split(" "),...e].join(".");return[].slice.call(this.DOM.scope.querySelectorAll(s))},getLastTag(){var t=this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);return t[t.length-1]},isTagDuplicate(t,e,i){var a=0;if("select"==this.settings.mode)return!1;for(let n of this.value){s(this.trim(""+t),n.value,e)&&i!=n.__tagId&&a++}return a},getTagIndexByValue(t){var e=[];return this.getTagElms().forEach(((i,a)=>{s(this.trim(i.textContent),t,this.settings.dropdown.caseSensitive)&&e.push(a)})),e},getTagElmByValue(t){var e=this.getTagIndexByValue(t)[0];return this.getTagElms()[e]},flashTag(t){t&&(t.classList.add(this.settings.classNames.tagFlash),setTimeout((()=>{t.classList.remove(this.settings.classNames.tagFlash)}),100))},isTagBlacklisted(t){return t=this.trim(t.toLowerCase()),this.settings.blacklist.filter((e=>(""+e).toLowerCase()==t)).length},isTagWhitelisted(t){return!!this.getWhitelistItem(t)},getWhitelistItem(t,e,i){e=e||"value";var a,n=this.settings;return(i=i||n.whitelist).some((i=>{var o="string"==typeof i?i:i[e]||i.value;if(s(o,t,n.dropdown.caseSensitive,n.trim))return a="string"==typeof i?{value:i}:i,!0})),a||"value"!=e||"value"==n.tagTextProp||(a=this.getWhitelistItem(t,n.tagTextProp,i)),a},validateTag(t){var e=this.settings,i="value"in t?"value":e.tagTextProp,s=this.trim(t[i]+"");return(t[i]+"").trim()?e.pattern&&e.pattern instanceof RegExp&&!e.pattern.test(s)?this.TEXTS.pattern:!e.duplicates&&this.isTagDuplicate(s,e.dropdown.caseSensitive,t.__tagId)?this.TEXTS.duplicate:this.isTagBlacklisted(s)||e.enforceWhitelist&&!this.isTagWhitelisted(s)?this.TEXTS.notAllowed:!e.validate||e.validate(t):this.TEXTS.empty},getInvalidTagAttrs(t,e){return{"aria-invalid":!0,class:`${t.class||""} ${this.settings.classNames.tagNotAllowed}`.trim(),title:e}},hasMaxTags(){return this.value.length>=this.settings.maxTags&&this.TEXTS.exceed},setReadonly(t,e){var i=this.settings;document.activeElement.blur(),i[e||"readonly"]=t,this.DOM.scope[(t?"set":"remove")+"Attribute"](e||"readonly",!0),this.setContentEditable(!t)},setContentEditable(t){this.settings.userInput&&(this.DOM.input.contentEditable=t,this.DOM.input.tabIndex=t?0:-1)},setDisabled(t){this.setReadonly(t,"disabled")},normalizeTags(t){var e=this.settings,i=e.whitelist,s=e.delimiters,a=e.mode,n=e.tagTextProp,o=[],r=!!i&&i[0]instanceof Object,l=Array.isArray(t),d=l&&t[0].value,h=t=>(t+"").split(s).filter((t=>t)).map((t=>({[n]:this.trim(t),value:this.trim(t)})));if("number"==typeof t&&(t=t.toString()),"string"==typeof t){if(!t.trim())return[];t=h(t)}else l&&(t=[].concat(...t.map((t=>null!=t.value?t:h(t)))));return r&&!d&&(t.forEach((t=>{var e=o.map((t=>t.value)),i=this.dropdown.filterListItems.call(this,t[n],{exact:!0});this.settings.duplicates||(i=i.filter((t=>!e.includes(t.value))));var s=i.length>1?this.getWhitelistItem(t[n],n,i):i[0];s&&s instanceof Object?o.push(s):"mix"!=a&&(null==t.value&&(t.value=t[n]),o.push(t))})),o.length&&(t=o)),t},parseMixTags(t){var e=this.settings,i=e.mixTagsInterpolator,s=e.duplicates,a=e.transformTag,n=e.enforceWhitelist,o=e.maxTags,r=e.tagTextProp,l=[];return t=t.split(i[0]).map(((t,e)=>{var d,h,g,p=t.split(i[1]),c=p[0],u=l.length==o;try{if(c==+c)throw Error;h=JSON.parse(c)}catch(t){h=this.normalizeTags(c)[0]||{value:c}}if(a.call(this,h),u||!(p.length>1)||n&&!this.isTagWhitelisted(h.value)||!s&&this.isTagDuplicate(h.value)){if(t)return e?i[0]+t:t}else h[d=h[r]?r:"value"]=this.trim(h[d]),g=this.createTagElem(h),l.push(h),g.classList.add(this.settings.classNames.tagNoAnimation),p[0]=g.outerHTML,this.value.push(h);return p.join("")})).join(""),this.DOM.input.innerHTML=t,this.DOM.input.appendChild(document.createTextNode("")),this.DOM.input.normalize(),this.getTagElms().forEach(((t,e)=>T(t,l[e]))),this.update({withoutChangeEvent:!0}),t},replaceTextWithNode(t,e){if(this.state.tag||e){e=e||this.state.tag.prefix+this.state.tag.value;var i,s,a=this.state.selection||window.getSelection(),n=a.anchorNode,o=this.state.tag.delimiters?this.state.tag.delimiters.length:0;return n.splitText(a.anchorOffset-o),-1==(i=n.nodeValue.lastIndexOf(e))?!0:(s=n.splitText(i),t&&n.parentNode.replaceChild(t,s),!0)}},selectTag(t,e){var i=this.settings;if(!i.enforceWhitelist||this.isTagWhitelisted(e.value)){this.input.set.call(this,e[i.tagTextProp]||e.value,!0),this.state.actions.selectOption&&setTimeout((()=>this.setRangeAtStartEnd(!1,this.DOM.input)));var s=this.getLastTag();return s?this.replaceTag(s,e):this.appendTag(t),this.value[0]=e,this.update(),this.trigger("add",{tag:t,data:e}),[t]}},addEmptyTag(t){var e=g({value:""},t||{}),i=this.createTagElem(e);T(i,e),this.appendTag(i),this.editTag(i,{skipValidation:!0})},addTags(t,e,i){var s=[],a=this.settings,n=[],o=document.createDocumentFragment();if(i=i||a.skipInvalid,!t||0==t.length)return s;switch(t=this.normalizeTags(t),a.mode){case"mix":return this.addMixTags(t);case"select":e=!1,this.removeAllTags()}return this.DOM.input.removeAttribute("style"),t.forEach((t=>{var e,r={},l=Object.assign({},t,{value:t.value+""});if(t=Object.assign({},l),a.transformTag.call(this,t),t.__isValid=this.hasMaxTags()||this.validateTag(t),!0!==t.__isValid){if(i)return;if(g(r,this.getInvalidTagAttrs(t,t.__isValid),{__preInvalidData:l}),t.__isValid==this.TEXTS.duplicate&&this.flashTag(this.getTagElmByValue(t.value)),!a.createInvalidTags)return void n.push(t.value)}if("readonly"in t&&(t.readonly?r["aria-readonly"]=!0:delete t.readonly),e=this.createTagElem(t,r),s.push(e),"select"==a.mode)return this.selectTag(e,t);o.appendChild(e),t.__isValid&&!0===t.__isValid?(this.value.push(t),this.trigger("add",{tag:e,index:this.value.length-1,data:t})):(this.trigger("invalid",{data:t,index:this.value.length,tag:e,message:t.__isValid}),a.keepInvalidTags||setTimeout((()=>this.removeTags(e,!0)),1e3)),this.dropdown.position()})),this.appendTag(o),this.update(),t.length&&e&&(this.input.set.call(this,a.createInvalidTags?"":n.join(a._delimiters)),this.setRangeAtStartEnd(!1,this.DOM.input)),a.dropdown.enabled&&this.dropdown.refilter(),s},addMixTags(t){if((t=this.normalizeTags(t))[0].prefix||this.state.tag)return this.prefixedTextToTag(t[0]);var e=document.createDocumentFragment();return t.forEach((t=>{var i=this.createTagElem(t);e.appendChild(i)})),this.appendMixTags(e),e},appendMixTags(t){var e=!!this.state.selection;e?this.injectAtCaret(t):(this.DOM.input.focus(),(e=this.setStateSelection()).range.setStart(this.DOM.input,e.range.endOffset),e.range.setEnd(this.DOM.input,e.range.endOffset),this.DOM.input.appendChild(t),this.updateValueByDOMTags(),this.update())},prefixedTextToTag(t){var e,i=this.settings,s=this.state.tag.delimiters;if(i.transformTag.call(this,t),t.prefix=t.prefix||this.state.tag?this.state.tag.prefix:(i.pattern.source||i.pattern)[0],e=this.createTagElem(t),this.replaceTextWithNode(e)||this.DOM.input.appendChild(e),setTimeout((()=>e.classList.add(this.settings.classNames.tagNoAnimation)),300),this.value.push(t),this.update(),!s){var a=this.insertAfterTag(e)||e;setTimeout(this.placeCaretAfterNode,0,a)}return this.state.tag=null,this.trigger("add",g({},{tag:e},{data:t})),e},appendTag(t){var e=this.DOM,i=e.input;e.scope.insertBefore(t,i)},createTagElem(t,i){t.__tagId=m();var s,a=g({},t,e({value:d(t.value+"")},i));return function(t){for(var e,i=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,null,!1);e=i.nextNode();)e.textContent.trim()||e.parentNode.removeChild(e)}(s=this.parseTemplate("tag",[a,this])),T(s,t),s},reCheckInvalidTags(){var t=this.settings;this.getTagElms(t.classNames.tagNotAllowed).forEach(((e,i)=>{var s=T(e),a=this.hasMaxTags(),n=this.validateTag(s),o=!0===n&&!a;if("select"==t.mode&&this.toggleScopeValidation(n),o)return s=s.__preInvalidData?s.__preInvalidData:{value:s.value},this.replaceTag(e,s);e.title=a||n}))},removeTags(t,e,i){var s,a=this.settings;if(t=t&&t instanceof HTMLElement?[t]:t instanceof Array?t:t?[t]:[this.getLastTag()],s=t.reduce(((t,e)=>{e&&"string"==typeof e&&(e=this.getTagElmByValue(e));var i=T(e);return e&&i&&!i.readonly&&t.push({node:e,idx:this.getTagIdx(i),data:T(e,{__removed:!0})}),t}),[]),i="number"==typeof i?i:this.CSSVars.tagHideTransition,"select"==a.mode&&(i=0,this.input.set.call(this)),1==s.length&&"select"!=a.mode&&s[0].node.classList.contains(a.classNames.tagNotAllowed)&&(e=!0),s.length)return a.hooks.beforeRemoveTag(s,{tagify:this}).then((()=>{function t(t){t.node.parentNode&&(t.node.parentNode.removeChild(t.node),e?a.keepInvalidTags&&this.trigger("remove",{tag:t.node,index:t.idx}):(this.trigger("remove",{tag:t.node,index:t.idx,data:t.data}),this.dropdown.refilter(),this.dropdown.position(),this.DOM.input.normalize(),a.keepInvalidTags&&this.reCheckInvalidTags()))}i&&i>10&&1==s.length?function(e){e.node.style.width=parseFloat(window.getComputedStyle(e.node).width)+"px",document.body.clientTop,e.node.classList.add(a.classNames.tagHide),setTimeout(t.bind(this),i,e)}.call(this,s[0]):s.forEach(t.bind(this)),e||(this.removeTagsFromValue(s.map((t=>t.node))),this.update(),"select"==a.mode&&this.setContentEditable(!0))})).catch((t=>{}))},removeTagsFromDOM(){[].slice.call(this.getTagElms()).forEach((t=>t.parentNode.removeChild(t)))},removeTagsFromValue(t){(t=Array.isArray(t)?t:[t]).forEach((t=>{var e=T(t),i=this.getTagIdx(e);i>-1&&this.value.splice(i,1)}))},removeAllTags(t){t=t||{},this.value=[],"mix"==this.settings.mode?this.DOM.input.innerHTML="":this.removeTagsFromDOM(),this.dropdown.refilter(),this.dropdown.position(),this.state.dropdown.visible&&setTimeout((()=>{this.DOM.input.focus()})),"select"==this.settings.mode&&(this.input.set.call(this),this.setContentEditable(!0)),this.update(t)},postUpdate(){this.state.blockChangeEvent=!1;var t=this.settings,e=t.classNames,i="mix"==t.mode?t.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value.trim():this.value.length+this.input.raw.call(this).length;this.toggleClass(e.hasMaxTags,this.value.length>=t.maxTags),this.toggleClass(e.hasNoTags,!this.value.length),this.toggleClass(e.empty,!i),"select"==t.mode&&this.toggleScopeValidation(this.value?.[0]?.__isValid)},setOriginalInputValue(t){var e=this.DOM.originalInput;this.settings.mixMode.integrated||(e.value=t,e.tagifyValue=e.value,this.setPersistedData(t,"value"))},update(t){clearTimeout(this.debouncedUpdateTimeout),this.debouncedUpdateTimeout=setTimeout(function(){var e=this.getInputValue();this.setOriginalInputValue(e),this.settings.onChangeAfterBlur&&(t||{}).withoutChangeEvent||this.state.blockChangeEvent||this.triggerChangeEvent();this.postUpdate()}.bind(this),100)},getInputValue(){var t=this.getCleanValue();return"mix"==this.settings.mode?this.getMixedTagsAsString(t):t.length?this.settings.originalInputValueFormat?this.settings.originalInputValueFormat(t):JSON.stringify(t):""},getCleanValue(t){return a(t||this.value,this.dataProps)},getMixedTagsAsString(){var t="",e=this,i=this.settings,s=i.originalInputValueFormat||JSON.stringify,a=i.mixTagsInterpolator;return function i(o){o.childNodes.forEach((o=>{if(1==o.nodeType){const r=T(o);if("BR"==o.tagName&&(t+="\r\n"),r&&v.call(e,o)){if(r.__removed)return;t+=a[0]+s(n(r,e.dataProps))+a[1]}else o.getAttribute("style")||["B","I","U"].includes(o.tagName)?t+=o.textContent:"DIV"!=o.tagName&&"P"!=o.tagName||(t+="\r\n",i(o))}else t+=o.textContent}))}(this.DOM.input),t}},N.prototype.removeTag=N.prototype.removeTags,N}));


/***/ }),

/***/ "./node_modules/alpinejs/dist/module.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/alpinejs/dist/module.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ module_default)
/* harmony export */ });
// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}

// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, {scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  }});
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}

// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, {subtree: true, childList: true, attributes: true, attributeOldValue: true});
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = new Map();
  let removedAttributes = new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({name, value: el.getAttribute(name)});
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
    if (node._x_cleanups) {
      while (node._x_cleanups.length)
        node._x_cleanups.pop()();
    }
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}

// packages/alpinejs/src/scope.js
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  let thisProxy = new Proxy({}, {
    ownKeys: () => {
      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
    },
    has: (target, name) => {
      return objects.some((obj) => obj.hasOwnProperty(name));
    },
    get: (target, name) => {
      return (objects.find((obj) => {
        if (obj.hasOwnProperty(name)) {
          let descriptor = Object.getOwnPropertyDescriptor(obj, name);
          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
            return true;
          }
          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
            let getter = descriptor.get;
            let setter = descriptor.set;
            let property = descriptor;
            getter = getter && getter.bind(thisProxy);
            setter = setter && setter.bind(thisProxy);
            if (getter)
              getter._x_alreadyBound = true;
            if (setter)
              setter._x_alreadyBound = true;
            Object.defineProperty(obj, name, {
              ...property,
              get: getter,
              set: setter
            });
          }
          return true;
        }
        return false;
      }) || {})[name];
    },
    set: (target, name, value) => {
      let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
      if (closestObjectWithKey) {
        closestObjectWithKey[name] = value;
      } else {
        objects[objects.length - 1][name] = value;
      }
      return true;
    }
  });
  return thisProxy;
}

// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, {value, enumerable}]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}

// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    let memoizedUtilities = null;
    function getUtilities() {
      if (memoizedUtilities) {
        return memoizedUtilities;
      } else {
        let [utilities, cleanup2] = getElementBoundUtilities(el);
        memoizedUtilities = {interceptor, ...utilities};
        onElRemoved(el, cleanup2);
        return memoizedUtilities;
      }
    }
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, getUtilities());
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, {el, expression});
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}

// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, {scope: scope2 = {}, params = []} = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, {scope: scope2 = {}, params = []} = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}

// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({name, value}));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({name, value}) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return {name, value};
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({name, value}) => {
    let {name: newName, value: newValue} = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, {name, value});
    if (newName !== name)
      callback(newName, name);
    return {name: newName, value: newValue};
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({name}) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({name, value}) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}

// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
}

// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}

// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}

// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
  initInterceptors2.push(callback);
}
function initTree(el, walker = walk, intercept = () => {
}) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      intercept(el2, skip);
      initInterceptors2.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => cleanupAttributes(el));
}

// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}

// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}

// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// packages/alpinejs/src/utils/once.js
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}

// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, {value, modifiers, expression}, {evaluate: evaluate2}) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: {during: defaultValue, start: defaultValue, end: defaultValue},
      leave: {during: defaultValue, start: defaultValue, end: defaultValue},
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning.beforeCancel(() => reject({isFromCancelledTransition: true}));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, {during, start: start2, end} = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}

// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}

// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}

// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// packages/alpinejs/src/plugin.js
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}

// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors(stores[name]);
}
function getStores() {
  return stores;
}

// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({name, value}));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
}

// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/alpine.js
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.12.3",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  closestRoot,
  destroyTree,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  bound: getBinding,
  $data: scope,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;

// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
var slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ =  true ? Object.freeze({}) : 0;
var EMPTY_ARR =  true ? Object.freeze([]) : 0;
var extend = Object.assign;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);

// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? "iterate" : 0);
var MAP_KEY_ITERATE_KEY = Symbol( true ? "Map key iterate" : 0);
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const {deps} = effect3;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var shallowGet = /* @__PURE__ */ createGetter(false, true);
var readonlyGet = /* @__PURE__ */ createGetter(true);
var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
var arrayInstrumentations = {};
["includes", "indexOf", "lastIndexOf"].forEach((key) => {
  const method = Array.prototype[key];
  arrayInstrumentations[key] = function(...args) {
    const arr = toRaw(this);
    for (let i = 0, l = this.length; i < l; i++) {
      track(arr, "get", i + "");
    }
    const res = method.apply(arr, args);
    if (res === -1 || res === false) {
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
  const method = Array.prototype[key];
  arrayInstrumentations[key] = function(...args) {
    pauseTracking();
    const res = method.apply(this, args);
    resetTracking();
    return res;
  };
});
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
var shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var shallowReactiveHandlers = extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
var toReactive = (value) => isObject(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const {has: has2} = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const {has: has2, get: get3} = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const {has: has2, get: get3} = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget =  true ? isMap(target) ? new Map(target) : new Set(target) : 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const {value, done} = innerIterator.next();
        return done ? {value, done} : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
var mutableInstrumentations = {
  get(key) {
    return get$1(this, key);
  },
  get size() {
    return size(this);
  },
  has: has$1,
  add,
  set: set$1,
  delete: deleteEntry,
  clear,
  forEach: createForEach(false, false)
};
var shallowInstrumentations = {
  get(key) {
    return get$1(this, key, false, true);
  },
  get size() {
    return size(this);
  },
  has: has$1,
  add,
  set: set$1,
  delete: deleteEntry,
  clear,
  forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
  get(key) {
    return get$1(this, key, true);
  },
  get size() {
    return size(this, true);
  },
  has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"),
  set: createReadonlyMethod("set"),
  delete: createReadonlyMethod("delete"),
  clear: createReadonlyMethod("clear"),
  forEach: createForEach(true, false)
};
var shallowReadonlyInstrumentations = {
  get(key) {
    return get$1(this, key, true, true);
  },
  get size() {
    return size(this, true);
  },
  has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"),
  set: createReadonlyMethod("set"),
  delete: createReadonlyMethod("delete"),
  clear: createReadonlyMethod("clear"),
  forEach: createForEach(true, true)
};
var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
iteratorMethods.forEach((method) => {
  mutableInstrumentations[method] = createIterableMethod(method, false, false);
  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
  shallowInstrumentations[method] = createIterableMethod(method, false, true);
  shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", () => nextTick);

// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el) => dispatch.bind(dispatch, el));

// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, {evaluateLater: evaluateLater2, effect: effect3}) => (key, callback) => {
  let evaluate2 = evaluateLater2(key);
  let firstTime = true;
  let oldValue;
  let effectReference = effect3(() => evaluate2((value) => {
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
  el._x_effects.delete(effectReference);
});

// packages/alpinejs/src/magics/$store.js
magic("store", getStores);

// packages/alpinejs/src/magics/$data.js
magic("data", (el) => scope(el));

// packages/alpinejs/src/magics/$root.js
magic("root", (el) => closestRoot(el));

// packages/alpinejs/src/magics/$refs.js
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}

// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}

// packages/alpinejs/src/magics/$id.js
magic("id", (el) => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
});

// packages/alpinejs/src/magics/$el.js
magic("el", (el) => el);

// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

// packages/alpinejs/src/entangle.js
function entangle({get: outerGet, set: outerSet}, {get: innerGet, set: innerSet}) {
  let firstRun = true;
  let outerHash, innerHash, outerHashLatest, innerHashLatest;
  let reference = effect(() => {
    let outer, inner;
    if (firstRun) {
      outer = outerGet();
      innerSet(outer);
      inner = innerGet();
      firstRun = false;
    } else {
      outer = outerGet();
      inner = innerGet();
      outerHashLatest = JSON.stringify(outer);
      innerHashLatest = JSON.stringify(inner);
      if (outerHashLatest !== outerHash) {
        inner = innerGet();
        innerSet(outer);
        inner = outer;
      } else {
        outerSet(inner);
        outer = inner;
      }
    }
    outerHash = JSON.stringify(outer);
    innerHash = JSON.stringify(inner);
  });
  return () => {
    release(reference);
  };
}

// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2}) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, {scope: {__placeholder: val}});
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle({
      get() {
        return outerGet();
      },
      set(value) {
        outerSet(value);
      }
    }, {
      get() {
        return innerGet();
      },
      set(value) {
        innerSet(value);
      }
    });
    cleanup2(releaseEntanglement);
  });
});

// packages/alpinejs/src/directives/x-teleport.js
var teleportContainerDuringClone = document.createElement("div");
directive("teleport", (el, {modifiers, expression}, {cleanup: cleanup2}) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  mutateDom(() => {
    if (modifiers.includes("prepend")) {
      target.parentNode.insertBefore(clone2, target);
    } else if (modifiers.includes("append")) {
      target.parentNode.insertBefore(clone2, target.nextSibling);
    } else {
      target.appendChild(clone2);
    }
    initTree(clone2);
    clone2._x_ignore = true;
  });
  cleanup2(() => clone2.remove());
});

// packages/alpinejs/src/directives/x-ignore.js
var handler = () => {
};
handler.inline = (el, {modifiers}, {cleanup: cleanup2}) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);

// packages/alpinejs/src/directives/x-effect.js
directive("effect", (el, {expression}, {effect: effect3}) => effect3(evaluateLater(el, expression)));

// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  handler4 = wrapHandler(handler4, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(subject))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "=",
    minus: "-",
    underscore: "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}

// packages/alpinejs/src/directives/x-model.js
directive("model", (el, {modifiers, expression}, {effect: effect3, cleanup: cleanup2}) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: {__placeholder: value}
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()));
  });
  if (modifiers.includes("fill") && [null, ""].includes(getValue())) {
    el.dispatchEvent(new Event(event, {}));
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(el.value));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    value = value === void 0 ? getValue() : value;
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail ?? event.target.value;
    else if (el.type === "checkbox") {
      if (Array.isArray(currentValue)) {
        let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
        return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
        let rawValue = option.value || option.text;
        return safeParseNumber(rawValue);
      }) : Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let rawValue = event.target.value;
      return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}

// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));

// packages/alpinejs/src/directives/x-init.js
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, {expression}, {evaluate: evaluate2}) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate2(expression, {}, false);
  }
  return evaluate2(expression, {}, false);
}));

// packages/alpinejs/src/directives/x-text.js
directive("text", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-html.js
directive("html", (el, {expression}, {effect: effect3, evaluateLater: evaluateLater2}) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, {value, modifiers, expression, original}, {effect: effect3}) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, {scope: bindingProviders});
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
};
handler2.inline = (el, {value, modifiers, expression}) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = {expression, extract: false};
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}

// packages/alpinejs/src/directives/x-data.js
addRootSelector(() => `[${prefix("data")}]`);
directive("data", skipDuringClone((el, {expression}, {cleanup: cleanup2}) => {
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, {scope: dataProviderContext});
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
}));

// packages/alpinejs/src/directives/x-show.js
directive("show", (el, {modifiers, expression}, {effect: effect3}) => {
  let evaluate2 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once((value) => value ? show() : hide(), (value) => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});

// packages/alpinejs/src/directives/x-for.js
directive("for", (el, {expression}, {effect: effect3, cleanup: cleanup2}) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), {scope: {index: key, ...scope2}});
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), {scope: {index: i, ...scope2}});
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!!lookup[key]._x_effects) {
        lookup[key]._x_effects.forEach(dequeueJob);
      }
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-ref.js
function handler3() {
}
handler3.inline = (el, {expression}, {cleanup: cleanup2}) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);

// packages/alpinejs/src/directives/x-if.js
directive("if", (el, {expression}, {effect: effect3, cleanup: cleanup2}) => {
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      walk(clone2, (node) => {
        if (!!node._x_effects) {
          node._x_effects.forEach(dequeueJob);
        }
      });
      clone2.remove();
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});

// packages/alpinejs/src/directives/x-id.js
directive("id", (el, {expression}, {evaluate: evaluate2}) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});

// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, {value, modifiers, expression}, {cleanup: cleanup2}) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, {scope: {$event: e}, params: [e]});
  });
  cleanup2(() => removeListener());
}));

// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName2, slug) {
  directive(directiveName2, (el) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({reactive: reactive2, effect: effect2, release: stop, raw: toRaw});
var src_default = alpine_default;

// packages/alpinejs/builds/module.js
var module_default = src_default;



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _plugins_select2_js_select2_full_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/select2/js/select2.full.min.js */ "./resources/plugins/select2/js/select2.full.min.js");
/* harmony import */ var _plugins_bootstrap_slider_bootstrap_slider_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/bootstrap-slider/bootstrap-slider.min.js */ "./resources/plugins/bootstrap-slider/bootstrap-slider.min.js");
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yaireo/tagify */ "./node_modules/@yaireo/tagify/dist/tagify.min.js");





// tinymce

tinymce.init({
  selector: 'textarea.tinymce',
  // Replace this CSS selector to match the placeholder element for TinyMCE
  plugins: 'table lists',
  toolbar: 'undo redo | formatselect| bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist |  table',
  promotion: false
});

// alpine
window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_0__["default"].start();

// boot up
var tagifyElement = document.querySelector("textarea.tagify");
if (tagifyElement) new _yaireo_tagify__WEBPACK_IMPORTED_MODULE_3__(tagifyElement);
document.querySelectorAll("input[type='checkbox']").forEach(function (html) {
  return new Switchery(html);
});
// bootstrap slider
$("input.slider").slider();
// select 2
$("select[data-ajax-url]").select2({
  ajax: {
    url: $(undefined).attr("data-ajax-url")
  }
});
function select2(id) {
  $("#" + id).select2({
    ajax: {
      url: $("#" + id).attr("data-ajax-url"),
      processResults: function processResults(data) {
        return data;
      },
      method: "GET"
    }
  });
}
select2("brand_name");
select2("branch_name");

/***/ }),

/***/ "./resources/plugins/bootstrap-slider/bootstrap-slider.min.js":
/*!********************************************************************!*\
  !*** ./resources/plugins/bootstrap-slider/bootstrap-slider.min.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */


function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (a) {
    return _typeof2(a);
  } : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : _typeof2(a);
  },
  windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
!function (a) {
  if ("function" == typeof define && define.amd) define(["jquery"], a);else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
    var b;
    try {
      b = require("jquery");
    } catch (c) {
      b = null;
    }
    module.exports = a(b);
  } else window && (window.Slider = a(window.jQuery));
}(function (a) {
  var b = "slider",
    c = "bootstrapSlider";
  windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function () {}), windowIsDefined && !window.console.warn && (window.console.warn = function () {});
  var d;
  return function (a) {
    function b() {}
    function c(a) {
      function c(b) {
        b.prototype.option || (b.prototype.option = function (b) {
          a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
        });
      }
      function e(b, c) {
        a.fn[b] = function (e) {
          if ("string" == typeof e) {
            for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
              var j = this[h],
                k = a.data(j, b);
              if (k) {
                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                  var l = k[e].apply(k, g);
                  if (void 0 !== l && l !== k) return l;
                } else f("no such method '" + e + "' for " + b + " instance");
              } else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'");
            }
            return this;
          }
          var m = this.map(function () {
            var d = a.data(this, b);
            return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this);
          });
          return 1 === m.length ? m[0] : m;
        };
      }
      if (a) {
        var f = "undefined" == typeof console ? b : function (a) {
          console.error(a);
        };
        return a.bridget = function (a, b) {
          c(b), e(a, b);
        }, a.bridget;
      }
    }
    var d = Array.prototype.slice;
    c(a);
  }(a), function (a) {
    function e(b, c) {
      function d(a, b) {
        var c = "data-slider-" + b.replace(/_/g, "-"),
          d = a.getAttribute(c);
        try {
          return JSON.parse(d);
        } catch (e) {
          return d;
        }
      }
      this._state = {
        value: null,
        enabled: null,
        offset: null,
        size: null,
        percentage: null,
        inDrag: !1,
        over: !1,
        tickIndex: null
      }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {};
      for (var e = Object.keys(this.defaultOptions), f = c.hasOwnProperty("min"), g = c.hasOwnProperty("max"), i = 0; i < e.length; i++) {
        var j = e[i],
          k = c[j];
        k = "undefined" != typeof k ? k : d(this.element, j), k = null !== k ? k : this.defaultOptions[j], this.options || (this.options = {}), this.options[j] = k;
      }
      if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), "auto" === this.options.rtl) {
        var l = window.getComputedStyle(this.element);
        null != l ? this.options.rtl = "rtl" === l.direction : this.options.rtl = "rtl" === this.element.style.direction;
      }
      "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";
      var m,
        n,
        o,
        p,
        q,
        r = this.element.style.width,
        s = !1,
        t = this.element.parentNode;
      if (this.sliderElem) s = !0;else {
        this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
        var u = document.createElement("div");
        u.className = "slider-track", n = document.createElement("div"), n.className = "slider-track-low", m = document.createElement("div"), m.className = "slider-selection", o = document.createElement("div"), o.className = "slider-track-high", p = document.createElement("div"), p.className = "slider-handle min-slider-handle", p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", this.options.min), p.setAttribute("aria-valuemax", this.options.max), q = document.createElement("div"), q.className = "slider-handle max-slider-handle", q.setAttribute("role", "slider"), q.setAttribute("aria-valuemin", this.options.min), q.setAttribute("aria-valuemax", this.options.max), u.appendChild(n), u.appendChild(m), u.appendChild(o), this.rangeHighlightElements = [];
        var v = this.options.rangeHighlights;
        if (Array.isArray(v) && v.length > 0) for (var w = 0; w < v.length; w++) {
          var x = document.createElement("div"),
            y = v[w]["class"] || "";
          x.className = "slider-rangeHighlight slider-selection " + y, this.rangeHighlightElements.push(x), u.appendChild(x);
        }
        var z = Array.isArray(this.options.labelledby);
        if (z && this.options.labelledby[0] && p.setAttribute("aria-labelledby", this.options.labelledby[0]), z && this.options.labelledby[1] && q.setAttribute("aria-labelledby", this.options.labelledby[1]), !z && this.options.labelledby && (p.setAttribute("aria-labelledby", this.options.labelledby), q.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
          for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", i = 0; i < this.options.ticks.length; i++) {
            var A = document.createElement("div");
            if (A.className = "slider-tick", this.options.ticks_tooltip) {
              var B = this._addTickListener(),
                C = B.addMouseEnter(this, A, i),
                D = B.addMouseLeave(this, A);
              this.ticksCallbackMap[i] = {
                mouseEnter: C,
                mouseLeave: D
              };
            }
            this.ticks.push(A), this.ticksContainer.appendChild(A);
          }
          m.className += " tick-slider-selection";
        }
        if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", i = 0; i < this.options.ticks_labels.length; i++) {
          var E = document.createElement("div"),
            F = 0 === this.options.ticks_positions.length,
            G = this.options.reversed && F ? this.options.ticks_labels.length - (i + 1) : i;
          E.className = "slider-tick-label", E.innerHTML = this.options.ticks_labels[G], this.tickLabels.push(E), this.tickLabelContainer.appendChild(E);
        }
        var H = function H(a) {
            var b = document.createElement("div");
            b.className = "arrow";
            var c = document.createElement("div");
            c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c);
          },
          I = document.createElement("div");
        I.className = "tooltip tooltip-main", I.setAttribute("role", "presentation"), H(I);
        var J = document.createElement("div");
        J.className = "tooltip tooltip-min", J.setAttribute("role", "presentation"), H(J);
        var K = document.createElement("div");
        K.className = "tooltip tooltip-max", K.setAttribute("role", "presentation"), H(K), this.sliderElem.appendChild(u), this.sliderElem.appendChild(I), this.sliderElem.appendChild(J), this.sliderElem.appendChild(K), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(p), this.sliderElem.appendChild(q), t.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
      }
      if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), h[this.options.scale] && (this.options.scale = h[this.options.scale]), s === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function (a) {
        this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a);
      }, this), [this.handle1, this.handle2].forEach(function (a) {
        this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top");
      }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (a) {
        this._removeProperty(a, "bs-tooltip-left"), this._removeProperty(a, "bs-tooltip-right"), this._removeProperty(a, "bs-tooltip-top"), this._removeClass(a, "bs-tooltip-right"), this._removeClass(a, "bs-tooltip-left"), this._removeClass(a, "bs-tooltip-top");
      }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = r, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (g || (this.options.max = Math.max.apply(Math, this.options.ticks)), f || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = n || this.trackLow, this.trackSelection = m || this.trackSelection, this.trackHigh = o || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = p || this.handle1, this.handle2 = q || this.handle2, s === !0) for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), i = 0; i < this.ticks.length; i++) this._removeClass(this.ticks[i], "round triangle hide");
      var L = ["round", "triangle", "custom"],
        M = -1 !== L.indexOf(this.options.handle);
      if (M) for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), i = 0; i < this.ticks.length; i++) this._addClass(this.ticks[i], this.options.handle);
      if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;else {
        if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
          var N = this._addTickListener(),
            O = N.addMouseEnter(this, this.handle1),
            P = N.addMouseLeave(this, this.handle1);
          this.handleCallbackMap.handle1 = {
            mouseEnter: O,
            mouseLeave: P
          }, O = N.addMouseEnter(this, this.handle2), P = N.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
            mouseEnter: O,
            mouseLeave: P
          };
        } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));
        this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1));
      }
      this.options.enabled ? this.enable() : this.disable();
    }
    var f = void 0,
      g = {
        formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(a) {
          return "Invalid input value '" + a + "' passed in";
        },
        callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
      },
      h = {
        linear: {
          getValue: function getValue(a, b) {
            return a < b.min ? b.min : a > b.max ? b.max : a;
          },
          toValue: function toValue(a) {
            var b = a / 100 * (this.options.max - this.options.min),
              c = !0;
            if (this.options.ticks_positions.length > 0) {
              for (var d, e, f, g = 0, i = 1; i < this.options.ticks_positions.length; i++) if (a <= this.options.ticks_positions[i]) {
                d = this.options.ticks[i - 1], f = this.options.ticks_positions[i - 1], e = this.options.ticks[i], g = this.options.ticks_positions[i];
                break;
              }
              var j = (a - f) / (g - f);
              b = d + j * (e - d), c = !1;
            }
            var k = c ? this.options.min : 0,
              l = k + Math.round(b / this.options.step) * this.options.step;
            return h.linear.getValue(l, this.options);
          },
          toPercentage: function toPercentage(a) {
            if (this.options.max === this.options.min) return 0;
            if (this.options.ticks_positions.length > 0) {
              for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++) if (a <= this.options.ticks[f]) {
                b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f];
                break;
              }
              if (f > 0) {
                var g = (a - b) / (c - b);
                return d + g * (e - d);
              }
            }
            return 100 * (a - this.options.min) / (this.options.max - this.options.min);
          }
        },
        logarithmic: {
          toValue: function toValue(a) {
            var b = 1 - this.options.min,
              c = Math.log(this.options.min + b),
              d = Math.log(this.options.max + b),
              e = Math.exp(c + (d - c) * a / 100) - b;
            return Math.round(e) === d ? d : (e = this.options.min + Math.round((e - this.options.min) / this.options.step) * this.options.step, h.linear.getValue(e, this.options));
          },
          toPercentage: function toPercentage(a) {
            if (this.options.max === this.options.min) return 0;
            var b = 1 - this.options.min,
              c = Math.log(this.options.max + b),
              d = Math.log(this.options.min + b),
              e = Math.log(a + b);
            return 100 * (e - d) / (c - d);
          }
        }
      };
    d = function d(a, b) {
      return e.call(this, a, b), this;
    }, d.prototype = {
      _init: function _init() {},
      constructor: d,
      defaultOptions: {
        id: "",
        min: 0,
        max: 10,
        step: 1,
        precision: 0,
        orientation: "horizontal",
        value: 5,
        range: !1,
        selection: "before",
        tooltip: "show",
        tooltip_split: !1,
        lock_to_ticks: !1,
        handle: "round",
        reversed: !1,
        rtl: "auto",
        enabled: !0,
        formatter: function formatter(a) {
          return Array.isArray(a) ? a[0] + " : " + a[1] : a;
        },
        natural_arrow_keys: !1,
        ticks: [],
        ticks_positions: [],
        ticks_labels: [],
        ticks_snap_bounds: 0,
        ticks_tooltip: !1,
        scale: "linear",
        focus: !1,
        tooltip_position: null,
        labelledby: null,
        rangeHighlights: []
      },
      getElement: function getElement() {
        return this.sliderElem;
      },
      getValue: function getValue() {
        return this.options.range ? this._state.value : this._state.value[0];
      },
      setValue: function setValue(a, b, c) {
        a || (a = 0);
        var d = this.getValue();
        this._state.value = this._validateInputValue(a);
        var e = this._applyPrecision.bind(this);
        this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
        var f = this.options.range ? this._state.value : this._state.value[0];
        this._setDataVal(f), b === !0 && this._trigger("slide", f);
        var g = !1;
        return g = Array.isArray(f) ? d[0] !== f[0] || d[1] !== f[1] : d !== f, g && c === !0 && this._trigger("change", {
          oldValue: d,
          newValue: f
        }), this;
      },
      destroy: function destroy() {
        this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), f === b && this.$element.removeData(f), this.$element.removeData(c));
      },
      disable: function disable() {
        return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this;
      },
      enable: function enable() {
        return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this;
      },
      toggle: function toggle() {
        return this._state.enabled ? this.disable() : this.enable(), this;
      },
      isEnabled: function isEnabled() {
        return this._state.enabled;
      },
      on: function on(a, b) {
        return this._bindNonQueryEventHandler(a, b), this;
      },
      off: function off(b, c) {
        a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c);
      },
      getAttribute: function getAttribute(a) {
        return a ? this.options[a] : this.options;
      },
      setAttribute: function setAttribute(a, b) {
        return this.options[a] = b, this;
      },
      refresh: function refresh(d) {
        var g = this.getValue();
        return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), d && d.useCurrentValue === !0 && this.setValue(g), a && (f === b ? (a.data(this.element, b, this), a.data(this.element, c, this)) : a.data(this.element, c, this)), this;
      },
      relayout: function relayout() {
        return this._resize(), this;
      },
      _removeTooltipListener: function _removeTooltipListener(a, b) {
        this.handle1.removeEventListener(a, b, !1), this.handle2.removeEventListener(a, b, !1);
      },
      _removeSliderEventHandlers: function _removeSliderEventHandlers() {
        if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
          for (var a = this.ticksContainer.getElementsByClassName("slider-tick"), b = 0; b < a.length; b++) a[b].removeEventListener("mouseenter", this.ticksCallbackMap[b].mouseEnter, !1), a[b].removeEventListener("mouseleave", this.ticksCallbackMap[b].mouseLeave, !1);
          this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
        }
        this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
      },
      _bindNonQueryEventHandler: function _bindNonQueryEventHandler(a, b) {
        void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b);
      },
      _unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(a, b) {
        var c = this.eventToCallbackMap[a];
        if (void 0 !== c) for (var d = 0; d < c.length; d++) if (c[d] === b) {
          c.splice(d, 1);
          break;
        }
      },
      _cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
        for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
          var c = a[b];
          delete this.eventToCallbackMap[c];
        }
      },
      _showTooltip: function _showTooltip() {
        this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
      },
      _hideTooltip: function _hideTooltip() {
        this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
      },
      _setToolTipOnMouseOver: function _setToolTipOnMouseOver(a) {
        function b(a, b) {
          return b ? [100 - a.percentage[0], c.options.range ? 100 - a.percentage[1] : a.percentage[1]] : [a.percentage[0], a.percentage[1]];
        }
        var c = this,
          d = this.options.formatter(a ? a.value[0] : this._state.value[0]),
          e = a ? b(a, this.options.reversed) : b(this._state, this.options.reversed);
        this._setText(this.tooltipInner, d), this.tooltip.style[this.stylePos] = e[0] + "%";
      },
      _copyState: function _copyState() {
        return {
          value: [this._state.value[0], this._state.value[1]],
          enabled: this._state.enabled,
          offset: this._state.offset,
          size: this._state.size,
          percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]],
          inDrag: this._state.inDrag,
          over: this._state.over,
          dragged: this._state.dragged,
          keyCtrl: this._state.keyCtrl
        };
      },
      _addTickListener: function _addTickListener() {
        return {
          addMouseEnter: function addMouseEnter(a, b, c) {
            var d = function d() {
              var d = a._copyState(),
                e = b === a.handle1 ? d.value[0] : d.value[1],
                f = void 0;
              void 0 !== c ? (e = a.options.ticks[c], f = a.options.ticks_positions.length > 0 && a.options.ticks_positions[c] || a._toPercentage(a.options.ticks[c])) : f = a._toPercentage(e), d.value[0] = e, d.percentage[0] = f, a._setToolTipOnMouseOver(d), a._showTooltip();
            };
            return b.addEventListener("mouseenter", d, !1), d;
          },
          addMouseLeave: function addMouseLeave(a, b) {
            var c = function c() {
              a._hideTooltip();
            };
            return b.addEventListener("mouseleave", c, !1), c;
          }
        };
      },
      _layout: function _layout() {
        var a, b;
        if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), b = this.options.formatter(this._state.value[0]), isNaN(b) ? this.handle1.setAttribute("aria-valuetext", b) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), b = this.options.formatter(this._state.value[1]), isNaN(b) ? this.handle2.setAttribute("aria-valuetext", b) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) for (var c = 0; c < this.options.rangeHighlights.length; c++) {
          var d = this._toPercentage(this.options.rangeHighlights[c].start),
            e = this._toPercentage(this.options.rangeHighlights[c].end);
          if (this.options.reversed) {
            var f = 100 - e;
            e = 100 - d, d = f;
          }
          var g = this._createHighlightRange(d, e);
          g ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[c].style.top = g.start + "%", this.rangeHighlightElements[c].style.height = g.size + "%") : (this.options.rtl ? this.rangeHighlightElements[c].style.right = g.start + "%" : this.rangeHighlightElements[c].style.left = g.start + "%", this.rangeHighlightElements[c].style.width = g.size + "%") : this.rangeHighlightElements[c].style.display = "none";
        }
        if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
          var h,
            i = "vertical" === this.options.orientation ? "height" : "width";
          h = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";
          var j = this._state.size / (this.options.ticks.length - 1);
          if (this.tickLabelContainer) {
            var k = 0;
            if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[h] = -j / 2 + "px"), k = this.tickLabelContainer.offsetHeight;else for (l = 0; l < this.tickLabelContainer.childNodes.length; l++) this.tickLabelContainer.childNodes[l].offsetHeight > k && (k = this.tickLabelContainer.childNodes[l].offsetHeight);
            "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = k + "px");
          }
          for (var l = 0; l < this.options.ticks.length; l++) {
            var m = this.options.ticks_positions[l] || this._toPercentage(this.options.ticks[l]);
            this.options.reversed && (m = 100 - m), this.ticks[l].style[this.stylePos] = m + "%", this._removeClass(this.ticks[l], "in-selection"), this.options.range ? m >= a[0] && m <= a[1] && this._addClass(this.ticks[l], "in-selection") : "after" === this.options.selection && m >= a[0] ? this._addClass(this.ticks[l], "in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.ticks[l], "in-selection"), this.tickLabels[l] && (this.tickLabels[l].style[i] = j + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[l] ? (this.tickLabels[l].style.position = "absolute", this.tickLabels[l].style[this.stylePos] = m + "%", this.tickLabels[l].style[h] = -j / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[l].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[l].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[h] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[l], "label-in-selection label-is-selection"), this.options.range ? m >= a[0] && m <= a[1] && (this._addClass(this.tickLabels[l], "label-in-selection"), (m === a[0] || a[1]) && this._addClass(this.tickLabels[l], "label-is-selection")) : ("after" === this.options.selection && m >= a[0] ? this._addClass(this.tickLabels[l], "label-in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.tickLabels[l], "label-in-selection"), m === a[0] && this._addClass(this.tickLabels[l], "label-is-selection")));
          }
        }
        var n;
        if (this.options.range) {
          n = this.options.formatter(this._state.value), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%";
          var o = this.options.formatter(this._state.value[0]);
          this._setText(this.tooltipInner_min, o);
          var p = this.options.formatter(this._state.value[1]);
          this._setText(this.tooltipInner_max, p), this.tooltip_min.style[this.stylePos] = a[0] + "%", this.tooltip_max.style[this.stylePos] = a[1] + "%";
        } else n = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = a[0] + "%";
        if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";else {
          "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(a[0], a[1]) + "%" : this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";
          var q = this.tooltip_min.getBoundingClientRect(),
            r = this.tooltip_max.getBoundingClientRect();
          "bottom" === this.options.tooltip_position ? q.right > r.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : q.right > r.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
        }
      },
      _createHighlightRange: function _createHighlightRange(a, b) {
        return this._isHighlightRange(a, b) ? a > b ? {
          start: b,
          size: a - b
        } : {
          start: a,
          size: b - a
        } : null;
      },
      _isHighlightRange: function _isHighlightRange(a, b) {
        return a >= 0 && 100 >= a && b >= 0 && 100 >= b ? !0 : !1;
      },
      _resize: function _resize(a) {
        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
      },
      _removeProperty: function _removeProperty(a, b) {
        a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b);
      },
      _mousedown: function _mousedown(a) {
        if (!this._state.enabled) return !1;
        a.preventDefault && a.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
        var b = this._getPercentage(a);
        if (this.options.range) {
          var c = Math.abs(this._state.percentage[0] - b),
            d = Math.abs(this._state.percentage[1] - b);
          this._state.dragged = d > c ? 0 : 1, this._adjustPercentageForRangeSliders(b);
        } else this._state.dragged = 0;
        this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
        var e = this._calculateValue();
        return this._trigger("slideStart", e), this.setValue(e, !1, !0), a.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
      },
      _touchstart: function _touchstart(a) {
        this._mousedown(a);
      },
      _triggerFocusOnHandle: function _triggerFocusOnHandle(a) {
        0 === a && this.handle1.focus(), 1 === a && this.handle2.focus();
      },
      _keydown: function _keydown(a, b) {
        if (!this._state.enabled) return !1;
        var c;
        switch (b.keyCode) {
          case 37:
          case 40:
            c = -1;
            break;
          case 39:
          case 38:
            c = 1;
        }
        if (c) {
          if (this.options.natural_arrow_keys) {
            var d = "horizontal" === this.options.orientation,
              e = "vertical" === this.options.orientation,
              f = this.options.rtl,
              g = this.options.reversed;
            d ? f ? g || (c = -c) : g && (c = -c) : e && (g || (c = -c));
          }
          var h;
          if (this.ticksAreValid && this.options.lock_to_ticks) {
            var i = void 0;
            i = this.options.ticks.indexOf(this._state.value[a]), -1 === i && (i = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), i += c, i = Math.max(0, Math.min(this.options.ticks.length - 1, i)), h = this.options.ticks[i];
          } else h = this._state.value[a] + c * this.options.step;
          var j = this._toPercentage(h);
          if (this._state.keyCtrl = a, this.options.range) {
            this._adjustPercentageForRangeSliders(j);
            var k = this._state.keyCtrl ? this._state.value[0] : h,
              l = this._state.keyCtrl ? h : this._state.value[1];
            h = [Math.max(this.options.min, Math.min(this.options.max, k)), Math.max(this.options.min, Math.min(this.options.max, l))];
          } else h = Math.max(this.options.min, Math.min(this.options.max, h));
          return this._trigger("slideStart", h), this.setValue(h, !0, !0), this._trigger("slideStop", h), this._pauseEvent(b), delete this._state.keyCtrl, !1;
        }
      },
      _pauseEvent: function _pauseEvent(a) {
        a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1;
      },
      _mousemove: function _mousemove(a) {
        if (!this._state.enabled) return !1;
        var b = this._getPercentage(a);
        this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b;
        var c = this._calculateValue(!0);
        return this.setValue(c, !0, !0), !1;
      },
      _touchmove: function _touchmove(a) {
        void 0 !== a.changedTouches && a.preventDefault && a.preventDefault();
      },
      _adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(a) {
        if (this.options.range) {
          var b = this._getNumDigitsAfterDecimalPlace(a);
          b = b ? b - 1 : 0;
          var c = this._applyToFixedAndParseFloat(a, b);
          0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._toPercentage(this._state.value[1]) < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._toPercentage(this._state.value[0]) > a && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
        }
      },
      _mouseup: function _mouseup(a) {
        if (!this._state.enabled) return !1;
        var b = this._getPercentage(a);
        this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
        var c = this._calculateValue(!0);
        return this.setValue(c, !1, !0), this._trigger("slideStop", c), this._state.dragged = null, !1;
      },
      _setValues: function _setValues(a, b) {
        var c = 0 === a ? 0 : 100;
        this._state.percentage[a] !== c && (b.data[a] = this._toValue(this._state.percentage[a]), b.data[a] = this._applyPrecision(b.data[a]));
      },
      _calculateValue: function _calculateValue(a) {
        var b = {};
        return this.options.range ? (b.data = [this.options.min, this.options.max], this._setValues(0, b), this._setValues(1, b), a && (b.data[0] = this._snapToClosestTick(b.data[0]), b.data[1] = this._snapToClosestTick(b.data[1]))) : (b.data = this._toValue(this._state.percentage[0]), b.data = parseFloat(b.data), b.data = this._applyPrecision(b.data), a && (b.data = this._snapToClosestTick(b.data))), b.data;
      },
      _snapToClosestTick: function _snapToClosestTick(a) {
        for (var b = [a, 1 / 0], c = 0; c < this.options.ticks.length; c++) {
          var d = Math.abs(this.options.ticks[c] - a);
          d <= b[1] && (b = [this.options.ticks[c], d]);
        }
        return b[1] <= this.options.ticks_snap_bounds ? b[0] : a;
      },
      _applyPrecision: function _applyPrecision(a) {
        var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
        return this._applyToFixedAndParseFloat(a, b);
      },
      _getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(a) {
        var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
      },
      _applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(a, b) {
        var c = a.toFixed(b);
        return parseFloat(c);
      },
      _getPercentage: function _getPercentage(a) {
        !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type && "touchend" !== a.type || (a = a.changedTouches[0]);
        var b = a[this.mousePos],
          c = this._state.offset[this.stylePos],
          d = b - c;
        "right" === this.stylePos && (d = -d);
        var e = d / this._state.size * 100;
        return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e));
      },
      _validateInputValue: function _validateInputValue(a) {
        if (isNaN(+a)) {
          if (Array.isArray(a)) return this._validateArray(a), a;
          throw new Error(g.formatInvalidInputErrorMsg(a));
        }
        return +a;
      },
      _validateArray: function _validateArray(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if ("number" != typeof c) throw new Error(g.formatInvalidInputErrorMsg(c));
        }
      },
      _setDataVal: function _setDataVal(a) {
        this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a;
      },
      _trigger: function _trigger(b, c) {
        c = c || 0 === c ? c : void 0;
        var d = this.eventToCallbackMap[b];
        if (d && d.length) for (var e = 0; e < d.length; e++) {
          var f = d[e];
          f(c);
        }
        a && this._triggerJQueryEvent(b, c);
      },
      _triggerJQueryEvent: function _triggerJQueryEvent(a, b) {
        var c = {
          type: a,
          value: b
        };
        this.$element.trigger(c), this.$sliderElem.trigger(c);
      },
      _unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
        this.$element.off(), this.$sliderElem.off();
      },
      _setText: function _setText(a, b) {
        "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b);
      },
      _removeClass: function _removeClass(a, b) {
        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
          var f = c[e],
            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");
          d = d.replace(g, " ");
        }
        a.className = d.trim();
      },
      _addClass: function _addClass(a, b) {
        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
          var f = c[e],
            g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
            h = g.test(d);
          h || (d += " " + f);
        }
        a.className = d.trim();
      },
      _offsetLeft: function _offsetLeft(a) {
        return a.getBoundingClientRect().left;
      },
      _offsetRight: function _offsetRight(a) {
        return a.getBoundingClientRect().right;
      },
      _offsetTop: function _offsetTop(a) {
        for (var b = a.offsetTop; (a = a.offsetParent) && !isNaN(a.offsetTop);) b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
        return b;
      },
      _offset: function _offset(a) {
        return {
          left: this._offsetLeft(a),
          right: this._offsetRight(a),
          top: this._offsetTop(a)
        };
      },
      _css: function _css(b, c, d) {
        if (a) a.style(b, c, d);else {
          var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
            return b.toUpperCase();
          });
          b.style[e] = d;
        }
      },
      _toValue: function _toValue(a) {
        return this.options.scale.toValue.apply(this, [a]);
      },
      _toPercentage: function _toPercentage(a) {
        return this.options.scale.toPercentage.apply(this, [a]);
      },
      _setTooltipPosition: function _setTooltipPosition() {
        var a = [this.tooltip, this.tooltip_min, this.tooltip_max];
        if ("vertical" === this.options.orientation) {
          var b;
          b = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";
          var c = "left" === b ? "right" : "left";
          a.forEach(function (a) {
            this._addClass(a, "bs-tooltip-" + b), a.style[c] = "100%";
          }.bind(this));
        } else "bottom" === this.options.tooltip_position ? a.forEach(function (a) {
          this._addClass(a, "bs-tooltip-bottom"), a.style.top = "22px";
        }.bind(this)) : a.forEach(function (a) {
          this._addClass(a, "bs-tooltip-top"), a.style.top = -this.tooltip.outerHeight - 14 + "px";
        }.bind(this));
      },
      _getClosestTickIndex: function _getClosestTickIndex(a) {
        for (var b = Math.abs(a - this.options.ticks[0]), c = 0, d = 0; d < this.options.ticks.length; ++d) {
          var e = Math.abs(a - this.options.ticks[d]);
          b > e && (b = e, c = d);
        }
        return c;
      },
      _setTickIndex: function _setTickIndex() {
        this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
      }
    }, a && a.fn && (a.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), f = c) : (a.bridget(b, d), f = b), a.bridget(c, d), a(function () {
      a("input[data-provide=slider]")[f]();
    }));
  }(a), d;
});

/***/ }),

/***/ "./resources/plugins/select2/js/select2.full.min.js":
/*!**********************************************************!*\
  !*** ./resources/plugins/select2/js/select2.full.min.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
  "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
    return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
  } : n(jQuery);
}(function (d) {
  var e = function () {
      if (d && d.fn && d.fn.select2 && d.fn.select2.amd) var e = d.fn.select2.amd;
      var t, n, i, h, o, _s, f, g, m, v, y, _, r, a, w, l;
      function b(e, t) {
        return r.call(e, t);
      }
      function c(e, t) {
        var n,
          i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          h = t && t.split("/"),
          f = y.map,
          g = f && f["*"] || {};
        if (e) {
          for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) if ("." === (p = e[u])) e.splice(u, 1), --u;else if (".." === p) {
            if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
            0 < u && (e.splice(u - 1, 2), u -= 2);
          }
          e = e.join("/");
        }
        if ((h || g) && f) {
          for (u = (n = e.split("/")).length; 0 < u; --u) {
            if (i = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; --d) if (r = (r = f[h.slice(0, d).join("/")]) && r[i]) {
              o = r, a = u;
              break;
            }
            if (o) break;
            !l && g && g[i] && (l = g[i], c = u);
          }
          !o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"));
        }
        return e;
      }
      function A(t, n) {
        return function () {
          var e = a.call(arguments, 0);
          return "string" != typeof e[0] && 1 === e.length && e.push(null), _s.apply(h, e.concat([t, n]));
        };
      }
      function x(t) {
        return function (e) {
          m[t] = e;
        };
      }
      function D(e) {
        if (b(v, e)) {
          var t = v[e];
          delete v[e], _[e] = !0, o.apply(h, t);
        }
        if (!b(m, e) && !b(_, e)) throw new Error("No " + e);
        return m[e];
      }
      function u(e) {
        var t,
          n = e ? e.indexOf("!") : -1;
        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
      }
      function S(e) {
        return e ? u(e) : [];
      }
      return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function f(e, t) {
        var n,
          i,
          r = u(e),
          o = r[0],
          s = t[1];
        return e = r[1], o && (n = D(o = c(o, s))), o ? e = n && n.normalize ? n.normalize(e, (i = s, function (e) {
          return c(e, i);
        })) : c(e, s) : (o = (r = u(e = c(e, s)))[0], e = r[1], o && (n = D(o))), {
          f: o ? o + "!" + e : e,
          n: e,
          pr: o,
          p: n
        };
      }, g = {
        require: function require(e) {
          return A(e);
        },
        exports: function exports(e) {
          var t = m[e];
          return void 0 !== t ? t : m[e] = {};
        },
        module: function module(e) {
          return {
            id: e,
            uri: "",
            exports: m[e],
            config: (t = e, function () {
              return y && y.config && y.config[t] || {};
            })
          };
          var t;
        }
      }, o = function o(e, t, n, i) {
        var r,
          o,
          s,
          a,
          l,
          c,
          u,
          d = [],
          p = _typeof(n);
        if (c = S(i = i || e), "undefined" == p || "function" == p) {
          for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e);else if ("exports" === o) d[l] = g.exports(e), u = !0;else if ("module" === o) r = d[l] = g.module(e);else if (b(m, o) || b(v, o) || b(_, o)) d[l] = D(o);else {
            if (!a.p) throw new Error(e + " missing " + o);
            a.p.load(a.n, A(i, !0), x(o), {}), d[l] = m[o];
          }
          s = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== h && r.exports !== m[e] ? m[e] = r.exports : s === h && u || (m[e] = s));
        } else e && (m[e] = n);
      }, t = n = _s = function s(e, t, n, i, r) {
        if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);
        if (!e.splice) {
          if ((y = e).deps && _s(y.deps, y.callback), !t) return;
          t.splice ? (e = t, t = n, n = null) : e = h;
        }
        return t = t || function () {}, "function" == typeof n && (n = i, i = r), i ? o(h, e, t, n) : setTimeout(function () {
          o(h, e, t, n);
        }, 4), _s;
      }, _s.config = function (e) {
        return _s(e);
      }, t._defined = m, (i = function i(e, t, n) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n]);
      }).amd = {
        jQuery: !0
      }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function () {}), e.define("jquery", [], function () {
        var e = d || $;
        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
      }), e.define("select2/utils", ["jquery"], function (o) {
        var r = {};
        function u(e) {
          var t = e.prototype,
            n = [];
          for (var i in t) {
            "function" == typeof t[i] && "constructor" !== i && n.push(i);
          }
          return n;
        }
        r.Extend = function (e, t) {
          var n = {}.hasOwnProperty;
          function i() {
            this.constructor = e;
          }
          for (var r in t) n.call(t, r) && (e[r] = t[r]);
          return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
        }, r.Decorate = function (i, r) {
          var e = u(r),
            t = u(i);
          function o() {
            var e = Array.prototype.unshift,
              t = r.prototype.constructor.length,
              n = i.prototype.constructor;
            0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments);
          }
          r.displayName = i.displayName, o.prototype = new function () {
            this.constructor = o;
          }();
          for (var n = 0; n < t.length; n++) {
            var s = t[n];
            o.prototype[s] = i.prototype[s];
          }
          function a(e) {
            var t = function t() {};
            e in o.prototype && (t = o.prototype[e]);
            var n = r.prototype[e];
            return function () {
              return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
            };
          }
          for (var l = 0; l < e.length; l++) {
            var c = e[l];
            o.prototype[c] = a(c);
          }
          return o;
        };
        function e() {
          this.listeners = {};
        }
        e.prototype.on = function (e, t) {
          this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
        }, e.prototype.trigger = function (e) {
          var t = Array.prototype.slice,
            n = t.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, e.prototype.invoke = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
        }, r.Observable = e, r.generateChars = function (e) {
          for (var t = "", n = 0; n < e; n++) {
            t += Math.floor(36 * Math.random()).toString(36);
          }
          return t;
        }, r.bind = function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, r._convertData = function (e) {
          for (var t in e) {
            var n = t.split("-"),
              i = e;
            if (1 !== n.length) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o];
              }
              delete e[t];
            }
          }
          return e;
        }, r.hasScroll = function (e, t) {
          var n = o(t),
            i = t.style.overflowX,
            r = t.style.overflowY;
          return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
        }, r.escapeMarkup = function (e) {
          var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, r.appendMany = function (e, t) {
          if ("1.7" === o.fn.jquery.substr(0, 3)) {
            var n = o();
            o.map(t, function (e) {
              n = n.add(e);
            }), t = n;
          }
          e.append(t);
        }, r.__cache = {};
        var n = 0;
        return r.GetUniqueElementId = function (e) {
          var t = e.getAttribute("data-select2-id");
          return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t;
        }, r.StoreData = function (e, t, n) {
          var i = r.GetUniqueElementId(e);
          r.__cache[i] || (r.__cache[i] = {}), r.__cache[i][t] = n;
        }, r.GetData = function (e, t) {
          var n = r.GetUniqueElementId(e);
          return t ? r.__cache[n] && null != r.__cache[n][t] ? r.__cache[n][t] : o(e).data(t) : r.__cache[n];
        }, r.RemoveData = function (e) {
          var t = r.GetUniqueElementId(e);
          null != r.__cache[t] && delete r.__cache[t], e.removeAttribute("data-select2-id");
        }, r;
      }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
        function i(e, t, n) {
          this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this);
        }
        return f.Extend(i, f.Observable), i.prototype.render = function () {
          var e = h('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
        }, i.prototype.clear = function () {
          this.$results.empty();
        }, i.prototype.displayMessage = function (e) {
          var t = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
            i = this.options.get("translations").get(e.message);
          n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
        }, i.prototype.hideMessages = function () {
          this.$results.find(".select2-results__message").remove();
        }, i.prototype.append = function (e) {
          this.hideLoading();
          var t = [];
          if (null != e.results && 0 !== e.results.length) {
            e.results = this.sort(e.results);
            for (var n = 0; n < e.results.length; n++) {
              var i = e.results[n],
                r = this.option(i);
              t.push(r);
            }
            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          });
        }, i.prototype.position = function (e, t) {
          t.find(".select2-results").append(e);
        }, i.prototype.sort = function (e) {
          return this.options.get("sorter")(e);
        }, i.prototype.highlightFirstItem = function () {
          var e = this.$results.find(".select2-results__option[aria-selected]"),
            t = e.filter("[aria-selected=true]");
          0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, i.prototype.setClasses = function () {
          var t = this;
          this.data.current(function (e) {
            var i = h.map(e, function (e) {
              return e.id.toString();
            });
            t.$results.find(".select2-results__option[aria-selected]").each(function () {
              var e = h(this),
                t = f.GetData(this, "data"),
                n = "" + t.id;
              null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false");
            });
          });
        }, i.prototype.showLoading = function (e) {
          this.hideLoading();
          var t = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e)
            },
            n = this.option(t);
          n.className += " loading-results", this.$results.prepend(n);
        }, i.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove();
        }, i.prototype.option = function (e) {
          var t = document.createElement("li");
          t.className = "select2-results__option";
          var n = {
              role: "option",
              "aria-selected": "false"
            },
            i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
          for (var r in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
            var o = n[r];
            t.setAttribute(r, o);
          }
          if (e.children) {
            var s = h(t),
              a = document.createElement("strong");
            a.className = "select2-results__group";
            h(a);
            this.template(e, a);
            for (var l = [], c = 0; c < e.children.length; c++) {
              var u = e.children[c],
                d = this.option(u);
              l.push(d);
            }
            var p = h("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested"
            });
            p.append(l), s.append(a), s.append(p);
          } else this.template(e, t);
          return f.StoreData(t, "data", e), t;
        }, i.prototype.bind = function (t, e) {
          var l = this,
            n = t.id + "-results";
          this.$results.attr("id", n), t.on("results:all", function (e) {
            l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
          }), t.on("results:append", function (e) {
            l.append(e.data), t.isOpen() && l.setClasses();
          }), t.on("query", function (e) {
            l.hideMessages(), l.showLoading(e);
          }), t.on("select", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("unselect", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("open", function () {
            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
          }), t.on("close", function () {
            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
          }), t.on("results:toggle", function () {
            var e = l.getHighlightedResults();
            0 !== e.length && e.trigger("mouseup");
          }), t.on("results:select", function () {
            var e = l.getHighlightedResults();
            if (0 !== e.length) {
              var t = f.GetData(e[0], "data");
              "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                data: t
              });
            }
          }), t.on("results:previous", function () {
            var e = l.getHighlightedResults(),
              t = l.$results.find("[aria-selected]"),
              n = t.index(e);
            if (!(n <= 0)) {
              var i = n - 1;
              0 === e.length && (i = 0);
              var r = t.eq(i);
              r.trigger("mouseenter");
              var o = l.$results.offset().top,
                s = r.offset().top,
                a = l.$results.scrollTop() + (s - o);
              0 === i ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a);
            }
          }), t.on("results:next", function () {
            var e = l.getHighlightedResults(),
              t = l.$results.find("[aria-selected]"),
              n = t.index(e) + 1;
            if (!(n >= t.length)) {
              var i = t.eq(n);
              i.trigger("mouseenter");
              var r = l.$results.offset().top + l.$results.outerHeight(!1),
                o = i.offset().top + i.outerHeight(!1),
                s = l.$results.scrollTop() + o - r;
              0 === n ? l.$results.scrollTop(0) : r < o && l.$results.scrollTop(s);
            }
          }), t.on("results:focus", function (e) {
            e.element.addClass("select2-results__option--highlighted");
          }), t.on("results:message", function (e) {
            l.displayMessage(e);
          }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = l.$results.scrollTop(),
              n = l.$results.get(0).scrollHeight - t + e.deltaY,
              i = 0 < e.deltaY && t - e.deltaY <= 0,
              r = e.deltaY < 0 && n <= l.$results.height();
            i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
            var t = h(this),
              n = f.GetData(this, "data");
            "true" !== t.attr("aria-selected") ? l.trigger("select", {
              originalEvent: e,
              data: n
            }) : l.options.get("multiple") ? l.trigger("unselect", {
              originalEvent: e,
              data: n
            }) : l.trigger("close", {});
          }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
            var t = f.GetData(this, "data");
            l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
              data: t,
              element: h(this)
            });
          });
        }, i.prototype.getHighlightedResults = function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, i.prototype.destroy = function () {
          this.$results.remove();
        }, i.prototype.ensureHighlightVisible = function () {
          var e = this.getHighlightedResults();
          if (0 !== e.length) {
            var t = this.$results.find("[aria-selected]").index(e),
              n = this.$results.offset().top,
              i = e.offset().top,
              r = this.$results.scrollTop() + (i - n),
              o = i - n;
            r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r);
          }
        }, i.prototype.template = function (e, t) {
          var n = this.options.get("templateResult"),
            i = this.options.get("escapeMarkup"),
            r = n(e, t);
          null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r);
        }, i;
      }), e.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
      }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, r) {
        function o(e, t) {
          this.$element = e, this.options = t, o.__super__.constructor.call(this);
        }
        return i.Extend(o, i.Observable), o.prototype.render = function () {
          var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
        }, o.prototype.bind = function (e, t) {
          var n = this,
            i = e.id + "-results";
          this.container = e, this.$selection.on("focus", function (e) {
            n.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            n._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            n.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            n.update(e.data);
          }), e.on("open", function () {
            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e);
          }), e.on("close", function () {
            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
          }), e.on("enable", function () {
            n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
          });
        }, o.prototype._handleBlur = function (e) {
          var t = this;
          window.setTimeout(function () {
            document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
          }, 1);
        }, o.prototype._attachCloseHandler = function (e) {
          n(document.body).on("mousedown.select2." + e.id, function (e) {
            var t = n(e.target).closest(".select2");
            n(".select2.select2-container--open").each(function () {
              this != t[0] && i.GetData(this, "element").select2("close");
            });
          });
        }, o.prototype._detachCloseHandler = function (e) {
          n(document.body).off("mousedown.select2." + e.id);
        }, o.prototype.position = function (e, t) {
          t.find(".selection").append(e);
        }, o.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }, o.prototype.update = function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, o.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, o.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, o;
      }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
        function r() {
          r.__super__.constructor.apply(this, arguments);
        }
        return n.Extend(r, t), r.prototype.render = function () {
          var e = r.__super__.render.call(this);
          return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, r.prototype.bind = function (t, e) {
          var n = this;
          r.__super__.bind.apply(this, arguments);
          var i = t.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
            t.isOpen() || n.$selection.trigger("focus");
          });
        }, r.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, r.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, r.prototype.selectionContainer = function () {
          return e("<span></span>");
        }, r.prototype.update = function (e) {
          if (0 !== e.length) {
            var t = e[0],
              n = this.$selection.find(".select2-selection__rendered"),
              i = this.display(t, n);
            n.empty().append(i);
            var r = t.title || t.text;
            r ? n.attr("title", r) : n.removeAttr("title");
          } else this.clear();
        }, r;
      }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (r, e, l) {
        function n(e, t) {
          n.__super__.constructor.apply(this, arguments);
        }
        return l.Extend(n, e), n.prototype.render = function () {
          var e = n.__super__.render.call(this);
          return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, n.prototype.bind = function (e, t) {
          var i = this;
          n.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
            i.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
            if (!i.isDisabled()) {
              var t = r(this).parent(),
                n = l.GetData(t[0], "data");
              i.trigger("unselect", {
                originalEvent: e,
                data: n
              });
            }
          });
        }, n.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, n.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, n.prototype.selectionContainer = function () {
          return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        }, n.prototype.update = function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n],
                r = this.selectionContainer(),
                o = this.display(i, r);
              r.append(o);
              var s = i.title || i.text;
              s && r.attr("title", s), l.StoreData(r[0], "data", i), t.push(r);
            }
            var a = this.$selection.find(".select2-selection__rendered");
            l.appendMany(a, t);
          }
        }, n;
      }), e.define("select2/selection/placeholder", ["../utils"], function (e) {
        function t(e, t, n) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
        }
        return t.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, t.prototype.createPlaceholder = function (e, t) {
          var n = this.selectionContainer();
          return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
        }, t.prototype.update = function (e, t) {
          var n = 1 == t.length && t[0].id != this.placeholder.id;
          if (1 < t.length || n) return e.call(this, t);
          this.clear();
          var i = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(i);
        }, t;
      }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (r, i, a) {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            i._handleClear(e);
          }), t.on("keypress", function (e) {
            i._handleKeyboardClear(e, t);
          });
        }, e.prototype._handleClear = function (e, t) {
          if (!this.isDisabled()) {
            var n = this.$selection.find(".select2-selection__clear");
            if (0 !== n.length) {
              t.stopPropagation();
              var i = a.GetData(n[0], "data"),
                r = this.$element.val();
              this.$element.val(this.placeholder.id);
              var o = {
                data: i
              };
              if (this.trigger("clear", o), o.prevented) this.$element.val(r);else {
                for (var s = 0; s < i.length; s++) if (o = {
                  data: i[s]
                }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, e.prototype._handleKeyboardClear = function (e, t, n) {
          n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t);
        }, e.prototype.update = function (e, t) {
          if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
            var n = this.options.get("translations").get("removeAllItems"),
              i = r('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
            a.StoreData(i[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(i);
          }
        }, e;
      }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, a, l) {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return e.prototype.render = function (e) {
          var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
          this.$searchContainer = t, this.$search = t.find("input");
          var n = e.call(this);
          return this._transferTabIndex(), n;
        }, e.prototype.bind = function (e, t, n) {
          var i = this,
            r = t.id + "-results";
          e.call(this, t, n), t.on("open", function () {
            i.$search.attr("aria-controls", r), i.$search.trigger("focus");
          }), t.on("close", function () {
            i.$search.val(""), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
          }), t.on("enable", function () {
            i.$search.prop("disabled", !1), i._transferTabIndex();
          }), t.on("disable", function () {
            i.$search.prop("disabled", !0);
          }), t.on("focus", function (e) {
            i.$search.trigger("focus");
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            i.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            i._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === i.$search.val()) {
              var t = i.$searchContainer.prev(".select2-selection__choice");
              if (0 < t.length) {
                var n = a.GetData(t[0], "data");
                i.searchRemoveChoice(n), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            i.$search.val() && e.stopPropagation();
          });
          var o = document.documentMode,
            s = o && o <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            s ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (s && "input" === e.type) i.$selection.off("input.search input.searchcheck");else {
              var t = e.which;
              t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && i.handleSearch(e);
            }
          });
        }, e.prototype._transferTabIndex = function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, e.prototype.createPlaceholder = function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, e.prototype.update = function (e, t) {
          var n = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus");
        }, e.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = this.$search.val();
            this.trigger("query", {
              term: e
            });
          }
          this._keyUpPrevented = !1;
        }, e.prototype.searchRemoveChoice = function (e, t) {
          this.trigger("unselect", {
            data: t
          }), this.$search.val(t.text), this.handleSearch();
        }, e.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var e = "";
          "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
          this.$search.css("width", e);
        }, e;
      }), e.define("select2/selection/eventRelay", ["jquery"], function (s) {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          var i = this,
            r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
            o = ["opening", "closing", "selecting", "unselecting", "clearing"];
          e.call(this, t, n), t.on("*", function (e, t) {
            if (-1 !== s.inArray(e, r)) {
              t = t || {};
              var n = s.Event("select2:" + e, {
                params: t
              });
              i.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = n.isDefaultPrevented());
            }
          });
        }, e;
      }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
        function i(e) {
          this.dict = e || {};
        }
        return i.prototype.all = function () {
          return this.dict;
        }, i.prototype.get = function (e) {
          return this.dict[e];
        }, i.prototype.extend = function (e) {
          this.dict = t.extend({}, e.all(), this.dict);
        }, i._cache = {}, i.loadPath = function (e) {
          if (!(e in i._cache)) {
            var t = n(e);
            i._cache[e] = t;
          }
          return new i(i._cache[e]);
        }, i;
      }), e.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
      }), e.define("select2/data/base", ["../utils"], function (i) {
        function n(e, t) {
          n.__super__.constructor.call(this);
        }
        return i.Extend(n, i.Observable), n.prototype.current = function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, n.prototype.query = function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, n.prototype.bind = function (e, t) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (e, t) {
          var n = e.id + "-result-";
          return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n;
        }, n;
      }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }
        return a.Extend(n, e), n.prototype.current = function (e) {
          var n = [],
            i = this;
          this.$element.find(":selected").each(function () {
            var e = l(this),
              t = i.item(e);
            n.push(t);
          }), e(n);
        }, n.prototype.select = function (r) {
          var o = this;
          if (r.selected = !0, l(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function (e) {
            var t = [];
            (r = [r]).push.apply(r, e);
            for (var n = 0; n < r.length; n++) {
              var i = r[n].id;
              -1 === l.inArray(i, t) && t.push(i);
            }
            o.$element.val(t), o.$element.trigger("input").trigger("change");
          });else {
            var e = r.id;
            this.$element.val(e), this.$element.trigger("input").trigger("change");
          }
        }, n.prototype.unselect = function (r) {
          var o = this;
          if (this.$element.prop("multiple")) {
            if (r.selected = !1, l(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("input").trigger("change");
            this.current(function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n].id;
                i !== r.id && -1 === l.inArray(i, t) && t.push(i);
              }
              o.$element.val(t), o.$element.trigger("input").trigger("change");
            });
          }
        }, n.prototype.bind = function (e, t) {
          var n = this;
          (this.container = e).on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, n.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            a.RemoveData(this);
          });
        }, n.prototype.query = function (i, e) {
          var r = [],
            o = this;
          this.$element.children().each(function () {
            var e = l(this);
            if (e.is("option") || e.is("optgroup")) {
              var t = o.item(e),
                n = o.matches(i, t);
              null !== n && r.push(n);
            }
          }), e({
            results: r
          });
        }, n.prototype.addOptions = function (e) {
          a.appendMany(this.$element, e);
        }, n.prototype.option = function (e) {
          var t;
          e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
          var n = l(t),
            i = this._normalizeItem(e);
          return i.element = t, a.StoreData(t, "data", i), n;
        }, n.prototype.item = function (e) {
          var t = {};
          if (null != (t = a.GetData(e[0], "data"))) return t;
          if (e.is("option")) t = {
            id: e.val(),
            text: e.text(),
            disabled: e.prop("disabled"),
            selected: e.prop("selected"),
            title: e.prop("title")
          };else if (e.is("optgroup")) {
            t = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            };
            for (var n = e.children("option"), i = [], r = 0; r < n.length; r++) {
              var o = l(n[r]),
                s = this.item(o);
              i.push(s);
            }
            t.children = i;
          }
          return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t;
        }, n.prototype._normalizeItem = function (e) {
          e !== Object(e) && (e = {
            id: e,
            text: e
          });
          return null != (e = l.extend({}, {
            text: ""
          }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, {
            selected: !1,
            disabled: !1
          }, e);
        }, n.prototype.matches = function (e, t) {
          return this.options.get("matcher")(e, t);
        }, n;
      }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, f, g) {
        function i(e, t) {
          this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t);
        }
        return f.Extend(i, e), i.prototype.bind = function (e, t) {
          i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, i.prototype.select = function (n) {
          var e = this.$element.find("option").filter(function (e, t) {
            return t.value == n.id.toString();
          });
          0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n);
        }, i.prototype.convertToOptions = function (e) {
          var t = this,
            n = this.$element.find("option"),
            i = n.map(function () {
              return t.item(g(this)).id;
            }).get(),
            r = [];
          function o(e) {
            return function () {
              return g(this).val() == e.id;
            };
          }
          for (var s = 0; s < e.length; s++) {
            var a = this._normalizeItem(e[s]);
            if (0 <= g.inArray(a.id, i)) {
              var l = n.filter(o(a)),
                c = this.item(l),
                u = g.extend(!0, {}, a, c),
                d = this.option(u);
              l.replaceWith(d);
            } else {
              var p = this.option(a);
              if (a.children) {
                var h = this.convertToOptions(a.children);
                f.appendMany(p, h);
              }
              r.push(p);
            }
          }
          return r;
        }, i;
      }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, o) {
        function n(e, t) {
          this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
        }
        return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
          var t = {
            data: function data(e) {
              return o.extend({}, e, {
                q: e.term
              });
            },
            transport: function transport(e, t, n) {
              var i = o.ajax(e);
              return i.then(t), i.fail(n), i;
            }
          };
          return o.extend({}, t, e, !0);
        }, n.prototype.processResults = function (e) {
          return e;
        }, n.prototype.query = function (n, i) {
          var r = this;
          null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var t = o.extend({
            type: "GET"
          }, this.ajaxOptions);
          function e() {
            var e = t.transport(t, function (e) {
              var t = r.processResults(e, n);
              r.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t);
            }, function () {
              "status" in e && (0 === e.status || "0" === e.status) || r.trigger("results:message", {
                message: "errorLoading"
              });
            });
            r._request = e;
          }
          "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
        }, n;
      }), e.define("select2/data/tags", ["jquery"], function (u) {
        function e(e, t, n) {
          var i = n.get("tags"),
            r = n.get("createTag");
          void 0 !== r && (this.createTag = r);
          var o = n.get("insertTag");
          if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), u.isArray(i)) for (var s = 0; s < i.length; s++) {
            var a = i[s],
              l = this._normalizeItem(a),
              c = this.option(l);
            this.$element.append(c);
          }
        }
        return e.prototype.query = function (e, c, u) {
          var d = this;
          this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
            for (var i = t.results, r = 0; r < i.length; r++) {
              var o = i[r],
                s = null != o.children && !e({
                  results: o.children
                }, !0);
              if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = i, void u(t));
            }
            if (n) return !0;
            var a = d.createTag(c);
            if (null != a) {
              var l = d.option(a);
              l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a);
            }
            t.results = i, u(t);
          }) : e.call(this, c, u);
        }, e.prototype.createTag = function (e, t) {
          var n = u.trim(t.term);
          return "" === n ? null : {
            id: n,
            text: n
          };
        }, e.prototype.insertTag = function (e, t, n) {
          t.unshift(n);
        }, e.prototype._removeOldTags = function (e) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || u(this).remove();
          });
        }, e;
      }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
        function e(e, t, n) {
          var i = n.get("tokenizer");
          void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
        }
        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
        }, e.prototype.query = function (e, t, n) {
          var r = this;
          t.term = t.term || "";
          var i = this.tokenizer(t, this.options, function (e) {
            var t,
              n = r._normalizeItem(e);
            if (!r.$element.find("option").filter(function () {
              return d(this).val() === n.id;
            }).length) {
              var i = r.option(n);
              i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i]);
            }
            t = n, r.trigger("select", {
              data: t
            });
          });
          i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n);
        }, e.prototype.tokenizer = function (e, t, n, i) {
          for (var r = n.get("tokenSeparators") || [], o = t.term, s = 0, a = this.createTag || function (e) {
              return {
                id: e.term,
                text: e.term
              };
            }; s < o.length;) {
            var l = o[s];
            if (-1 !== d.inArray(l, r)) {
              var c = o.substr(0, s),
                u = a(d.extend({}, t, {
                  term: c
                }));
              null != u ? (i(u), o = o.substr(s + 1) || "", s = 0) : s++;
            } else s++;
          }
          return {
            term: o
          };
        }, e;
      }), e.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
        }
        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
        }
        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
        }
        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function () {
            i._checkIfMaximumSelected();
          });
        }, e.prototype.query = function (e, t, n) {
          var i = this;
          this._checkIfMaximumSelected(function () {
            e.call(i, t, n);
          });
        }, e.prototype._checkIfMaximumSelected = function (e, n) {
          var i = this;
          this.current(function (e) {
            var t = null != e ? e.length : 0;
            0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: i.maximumSelectionLength
              }
            }) : n && n();
          });
        }, e;
      }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }
        return e.Extend(n, e.Observable), n.prototype.render = function () {
          var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
        }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
          this.$dropdown.remove();
        }, n;
      }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
        function t() {}
        return t.prototype.render = function (e) {
          var t = e.call(this),
            n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t;
        }, t.prototype.bind = function (e, t, n) {
          var i = this,
            r = t.id + "-results";
          e.call(this, t, n), this.$search.on("keydown", function (e) {
            i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
          }), this.$search.on("input", function (e) {
            o(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            i.handleSearch(e);
          }), t.on("open", function () {
            i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", r), i.$search.trigger("focus"), window.setTimeout(function () {
              i.$search.trigger("focus");
            }, 0);
          }), t.on("close", function () {
            i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur");
          }), t.on("focus", function () {
            t.isOpen() || i.$search.trigger("focus");
          }), t.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"));
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          });
        }, t.prototype.handleSearch = function (e) {
          if (!this._keyUpPrevented) {
            var t = this.$search.val();
            this.trigger("query", {
              term: t
            });
          }
          this._keyUpPrevented = !1;
        }, t.prototype.showSearch = function (e, t) {
          return !0;
        }, t;
      }), e.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i);
        }
        return e.prototype.append = function (e, t) {
          t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.removePlaceholder = function (e, t) {
          for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
            var r = t[i];
            this.placeholder.id === r.id && n.splice(i, 1);
          }
          return n;
        }, e;
      }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, i) {
          this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
        }
        return e.prototype.append = function (e, t) {
          this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("query", function (e) {
            i.lastParams = e, i.loading = !0;
          }), t.on("query:append", function (e) {
            i.lastParams = e, i.loading = !0;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, e.prototype.loadMoreIfNeeded = function () {
          var e = n.contains(document.documentElement, this.$loadingMore[0]);
          if (!this.loading && e) {
            var t = this.$results.offset().top + this.$results.outerHeight(!1);
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
          }
        }, e.prototype.loadMore = function () {
          this.loading = !0;
          var e = n.extend({}, {
            page: 1
          }, this.lastParams);
          e.page++, this.trigger("query:append", e);
        }, e.prototype.showLoadingMore = function (e, t) {
          return t.pagination && t.pagination.more;
        }, e.prototype.createLoadingMore = function () {
          var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
            t = this.options.get("translations").get("loadingMore");
          return e.html(t(this.lastParams)), e;
        }, e;
      }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
        function e(e, t, n) {
          this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n);
        }
        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("open", function () {
            i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            i._hideDropdown(), i._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, e.prototype.destroy = function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, e.prototype.position = function (e, t, n) {
          t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
            position: "absolute",
            top: -999999
          }), this.$container = n;
        }, e.prototype.render = function (e) {
          var t = f("<span></span>"),
            n = e.call(this);
          return t.append(n), this.$dropdownContainer = t;
        }, e.prototype._hideDropdown = function (e) {
          this.$dropdownContainer.detach();
        }, e.prototype._bindContainerResultHandlers = function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = this;
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = !0;
          }
        }, e.prototype._attachPositioningHandler = function (e, t) {
          var n = this,
            i = "scroll.select2." + t.id,
            r = "resize.select2." + t.id,
            o = "orientationchange.select2." + t.id,
            s = this.$container.parents().filter(a.hasScroll);
          s.each(function () {
            a.StoreData(this, "select2-scroll-position", {
              x: f(this).scrollLeft(),
              y: f(this).scrollTop()
            });
          }), s.on(i, function (e) {
            var t = a.GetData(this, "select2-scroll-position");
            f(this).scrollTop(t.y);
          }), f(window).on(i + " " + r + " " + o, function (e) {
            n._positionDropdown(), n._resizeDropdown();
          });
        }, e.prototype._detachPositioningHandler = function (e, t) {
          var n = "scroll.select2." + t.id,
            i = "resize.select2." + t.id,
            r = "orientationchange.select2." + t.id;
          this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r);
        }, e.prototype._positionDropdown = function () {
          var e = f(window),
            t = this.$dropdown.hasClass("select2-dropdown--above"),
            n = this.$dropdown.hasClass("select2-dropdown--below"),
            i = null,
            r = this.$container.offset();
          r.bottom = r.top + this.$container.outerHeight(!1);
          var o = {
            height: this.$container.outerHeight(!1)
          };
          o.top = r.top, o.bottom = r.top + o.height;
          var s = this.$dropdown.outerHeight(!1),
            a = e.scrollTop(),
            l = e.scrollTop() + e.height(),
            c = a < r.top - s,
            u = l > r.bottom + s,
            d = {
              left: r.left,
              top: o.bottom
            },
            p = this.$dropdownParent;
          "static" === p.css("position") && (p = p.offsetParent());
          var h = {
            top: 0,
            left: 0
          };
          (f.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = o.top - h.top - s), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d);
        }, e.prototype._resizeDropdown = function () {
          var e = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
        }, e.prototype._showDropdown = function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, e;
      }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
        }
        return e.prototype.showSearch = function (e, t) {
          return !(function e(t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var r = t[i];
              r.children ? n += e(r.children) : n++;
            }
            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
      }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("close", function (e) {
            i._handleSelectOnClose(e);
          });
        }, e.prototype._handleSelectOnClose = function (e, t) {
          if (t && null != t.originalSelect2Event) {
            var n = t.originalSelect2Event;
            if ("select" === n._type || "unselect" === n._type) return;
          }
          var i = this.getHighlightedResults();
          if (!(i.length < 1)) {
            var r = o.GetData(i[0], "data");
            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
              data: r
            });
          }
        }, e;
      }), e.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function (e) {
            i._selectTriggered(e);
          }), t.on("unselect", function (e) {
            i._selectTriggered(e);
          });
        }, e.prototype._selectTriggered = function (e, t) {
          var n = t.originalEvent;
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: n,
            originalSelect2Event: t
          });
        }, e;
      }), e.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function errorLoading() {
            return "The results could not be loaded.";
          },
          inputTooLong: function inputTooLong(e) {
            var t = e.input.length - e.maximum,
              n = "Please delete " + t + " character";
            return 1 != t && (n += "s"), n;
          },
          inputTooShort: function inputTooShort(e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function loadingMore() {
            return "Loading more results…";
          },
          maximumSelected: function maximumSelected(e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function noResults() {
            return "No results found";
          },
          searching: function searching() {
            return "Searching…";
          },
          removeAllItems: function removeAllItems() {
            return "Remove all items";
          }
        };
      }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (c, u, d, p, h, f, g, m, v, y, s, t, _, w, $, b, A, x, D, S, C, E, O, T, q, j, L, I, e) {
        function n() {
          this.reset();
        }
        return n.prototype.apply = function (e) {
          if (null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter) {
            if (null != e.ajax ? e.dataAdapter = $ : null != e.data ? e.dataAdapter = w : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, x)), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, D)), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate(e.dataAdapter, S)), e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, b)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate(e.dataAdapter, A)), null != e.query) {
              var t = u(e.amdBase + "compat/query");
              e.dataAdapter = y.Decorate(e.dataAdapter, t);
            }
            if (null != e.initSelection) {
              var n = u(e.amdBase + "compat/initSelection");
              e.dataAdapter = y.Decorate(e.dataAdapter, n);
            }
          }
          if (null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)), null != e.placeholder && (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)), e.selectOnClose && (e.resultsAdapter = y.Decorate(e.resultsAdapter, L))), null == e.dropdownAdapter) {
            if (e.multiple) e.dropdownAdapter = C;else {
              var i = y.Decorate(C, E);
              e.dropdownAdapter = i;
            }
            if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)), e.closeOnSelect && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, I)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
              var r = u(e.amdBase + "compat/dropdownCss");
              e.dropdownAdapter = y.Decorate(e.dropdownAdapter, r);
            }
            e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q);
          }
          if (null == e.selectionAdapter) {
            if (e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)), e.allowClear && (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)), e.multiple && (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
              var o = u(e.amdBase + "compat/containerCss");
              e.selectionAdapter = y.Decorate(e.selectionAdapter, o);
            }
            e.selectionAdapter = y.Decorate(e.selectionAdapter, v);
          }
          e.language = this._resolveLanguage(e.language), e.language.push("en");
          for (var s = [], a = 0; a < e.language.length; a++) {
            var l = e.language[a];
            -1 === s.indexOf(l) && s.push(l);
          }
          return e.language = s, e.translations = this._processTranslations(e.language, e.debug), e;
        }, n.prototype.reset = function () {
          function a(e) {
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return t[e] || e;
            });
          }
          this.defaults = {
            amdBase: "./",
            amdLanguageBase: "./i18n/",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: y.escapeMarkup,
            language: {},
            matcher: function e(t, n) {
              if ("" === c.trim(t.term)) return n;
              if (n.children && 0 < n.children.length) {
                for (var i = c.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) null == e(t, n.children[r]) && i.children.splice(r, 1);
                return 0 < i.children.length ? i : e(t, i);
              }
              var o = a(n.text).toUpperCase(),
                s = a(t.term).toUpperCase();
              return -1 < o.indexOf(s) ? n : null;
            },
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            scrollAfterSelect: !1,
            sorter: function sorter(e) {
              return e;
            },
            templateResult: function templateResult(e) {
              return e.text;
            },
            templateSelection: function templateSelection(e) {
              return e.text;
            },
            theme: "default",
            width: "resolve"
          };
        }, n.prototype.applyFromElement = function (e, t) {
          var n = e.language,
            i = this.defaults.language,
            r = t.prop("lang"),
            o = t.closest("[lang]").prop("lang"),
            s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
          return e.language = s, e;
        }, n.prototype._resolveLanguage = function (e) {
          if (!e) return [];
          if (c.isEmptyObject(e)) return [];
          if (c.isPlainObject(e)) return [e];
          var t;
          t = c.isArray(e) ? e : [e];
          for (var n = [], i = 0; i < t.length; i++) if (n.push(t[i]), "string" == typeof t[i] && 0 < t[i].indexOf("-")) {
            var r = t[i].split("-")[0];
            n.push(r);
          }
          return n;
        }, n.prototype._processTranslations = function (e, t) {
          for (var n = new s(), i = 0; i < e.length; i++) {
            var r = new s(),
              o = e[i];
            if ("string" == typeof o) try {
              r = s.loadPath(o);
            } catch (e) {
              try {
                o = this.defaults.amdLanguageBase + o, r = s.loadPath(o);
              } catch (e) {
                t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else r = c.isPlainObject(o) ? new s(o) : o;
            n.extend(r);
          }
          return n;
        }, n.prototype.set = function (e, t) {
          var n = {};
          n[c.camelCase(e)] = t;
          var i = y._convertData(n);
          c.extend(!0, this.defaults, i);
        }, new n();
      }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (i, d, r, p) {
        function e(e, t) {
          if (this.options = e, null != t && this.fromElement(t), null != t && (this.options = r.applyFromElement(this.options, t)), this.options = r.apply(this.options), t && t.is("input")) {
            var n = i(this.get("amdBase") + "compat/inputData");
            this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n);
          }
        }
        return e.prototype.fromElement = function (e) {
          var t = ["select2"];
          null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
          var n = {};
          function i(e, t) {
            return t.toUpperCase();
          }
          for (var r = 0; r < e[0].attributes.length; r++) {
            var o = e[0].attributes[r].name,
              s = "data-";
            if (o.substr(0, s.length) == s) {
              var a = o.substring(s.length),
                l = p.GetData(e[0], a);
              n[a.replace(/-([a-z])/g, i)] = l;
            }
          }
          d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
          var c = d.extend(!0, {}, p.GetData(e[0]), n);
          for (var u in c = p._convertData(c)) -1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
          return this;
        }, e.prototype.get = function (e) {
          return this.options[e];
        }, e.prototype.set = function (e, t) {
          this.options[e] = t;
        }, e;
      }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (o, c, u, i) {
        var d = function d(e, t) {
          null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
          var n = e.attr("tabindex") || 0;
          u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
          var i = this.options.get("dataAdapter");
          this.dataAdapter = new i(e, this.options);
          var r = this.render();
          this._placeContainer(r);
          var o = this.options.get("selectionAdapter");
          this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
          var s = this.options.get("dropdownAdapter");
          this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
          var a = this.options.get("resultsAdapter");
          this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var l = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            l.trigger("selection:update", {
              data: e
            });
          }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
        };
        return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, d.prototype._placeContainer = function (e) {
          e.insertAfter(this.$element);
          var t = this._resolveWidth(this.$element, this.options.get("width"));
          null != t && e.css("width", t);
        }, d.prototype._resolveWidth = function (e, t) {
          var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
          if ("resolve" == t) {
            var i = this._resolveWidth(e, "style");
            return null != i ? i : this._resolveWidth(e, "element");
          }
          if ("element" == t) {
            var r = e.outerWidth(!1);
            return r <= 0 ? "auto" : r + "px";
          }
          if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
          var o = e.attr("style");
          if ("string" != typeof o) return null;
          for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
            var c = s[a].replace(/\s/g, "").match(n);
            if (null !== c && 1 <= c.length) return c[1];
          }
          return null;
        }, d.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, d.prototype._registerDomEvents = function () {
          var t = this;
          this.$element.on("change.select2", function () {
            t.dataAdapter.current(function (e) {
              t.trigger("selection:update", {
                data: e
              });
            });
          }), this.$element.on("focus.select2", function (e) {
            t.trigger("focus", e);
          }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
          var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          null != e ? (this._observer = new e(function (e) {
            t._syncA(), t._syncS(null, e);
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            childList: !0,
            subtree: !1
          })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
        }, d.prototype._registerDataEvents = function () {
          var n = this;
          this.dataAdapter.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerSelectionEvents = function () {
          var n = this,
            i = ["toggle", "focus"];
          this.selection.on("toggle", function () {
            n.toggleDropdown();
          }), this.selection.on("focus", function (e) {
            n.focus(e);
          }), this.selection.on("*", function (e, t) {
            -1 === o.inArray(e, i) && n.trigger(e, t);
          });
        }, d.prototype._registerDropdownEvents = function () {
          var n = this;
          this.dropdown.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerResultsEvents = function () {
          var n = this;
          this.results.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerEvents = function () {
          var n = this;
          this.on("open", function () {
            n.$container.addClass("select2-container--open");
          }), this.on("close", function () {
            n.$container.removeClass("select2-container--open");
          }), this.on("enable", function () {
            n.$container.removeClass("select2-container--disabled");
          }), this.on("disable", function () {
            n.$container.addClass("select2-container--disabled");
          }), this.on("blur", function () {
            n.$container.removeClass("select2-container--focus");
          }), this.on("query", function (t) {
            n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
              n.trigger("results:all", {
                data: e,
                query: t
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (e) {
              n.trigger("results:append", {
                data: e,
                query: t
              });
            });
          }), this.on("keypress", function (e) {
            var t = e.which;
            n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault());
          });
        }, d.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, d.prototype._isChangeMutation = function (e, t) {
          var n = !1,
            i = this;
          if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
            if (t) {
              if (t.addedNodes && 0 < t.addedNodes.length) for (var r = 0; r < t.addedNodes.length; r++) {
                t.addedNodes[r].selected && (n = !0);
              } else t.removedNodes && 0 < t.removedNodes.length ? n = !0 : o.isArray(t) && o.each(t, function (e, t) {
                if (i._isChangeMutation(e, t)) return !(n = !0);
              });
            } else n = !0;
            return n;
          }
        }, d.prototype._syncSubtree = function (e, t) {
          var n = this._isChangeMutation(e, t),
            i = this;
          n && this.dataAdapter.current(function (e) {
            i.trigger("selection:update", {
              data: e
            });
          });
        }, d.prototype.trigger = function (e, t) {
          var n = d.__super__.trigger,
            i = {
              open: "opening",
              close: "closing",
              select: "selecting",
              unselect: "unselecting",
              clear: "clearing"
            };
          if (void 0 === t && (t = {}), e in i) {
            var r = i[e],
              o = {
                prevented: !1,
                name: e,
                args: t
              };
            if (n.call(this, r, o), o.prevented) return void (t.prevented = !0);
          }
          n.call(this, e, t);
        }, d.prototype.toggleDropdown = function () {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, d.prototype.open = function () {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, d.prototype.close = function (e) {
          this.isOpen() && this.trigger("close", {
            originalEvent: e
          });
        }, d.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, d.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, d.prototype.isOpen = function () {
          return this.$container.hasClass("select2-container--open");
        }, d.prototype.hasFocus = function () {
          return this.$container.hasClass("select2-container--focus");
        }, d.prototype.focus = function (e) {
          this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
        }, d.prototype.enable = function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
          var t = !e[0];
          this.$element.prop("disabled", t);
        }, d.prototype.data = function () {
          this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var t = [];
          return this.dataAdapter.current(function (e) {
            t = e;
          }), t;
        }, d.prototype.val = function (e) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
          var t = e[0];
          o.isArray(t) && (t = o.map(t, function (e) {
            return e.toString();
          })), this.$element.val(t).trigger("input").trigger("change");
        }, d.prototype.destroy = function () {
          this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, d.prototype.render = function () {
          var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
        }, d;
      }), e.define("select2/compat/utils", ["jquery"], function (s) {
        return {
          syncCssClasses: function syncCssClasses(e, t, n) {
            var i,
              r,
              o = [];
            (i = s.trim(e.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function () {
              0 === this.indexOf("select2-") && o.push(this);
            }), (i = s.trim(t.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function () {
              0 !== this.indexOf("select2-") && null != (r = n(this)) && o.push(r);
            }), e.attr("class", o.join(" "));
          }
        };
      }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function (s, a) {
        function l(e) {
          return null;
        }
        function e() {}
        return e.prototype.render = function (e) {
          var t = e.call(this),
            n = this.options.get("containerCssClass") || "";
          s.isFunction(n) && (n = n(this.$element));
          var i = this.options.get("adaptContainerCssClass");
          if (i = i || l, -1 !== n.indexOf(":all:")) {
            n = n.replace(":all:", "");
            var r = i;
            i = function i(e) {
              var t = r(e);
              return null != t ? t + " " + e : e;
            };
          }
          var o = this.options.get("containerCss") || {};
          return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t;
        }, e;
      }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (s, a) {
        function l(e) {
          return null;
        }
        function e() {}
        return e.prototype.render = function (e) {
          var t = e.call(this),
            n = this.options.get("dropdownCssClass") || "";
          s.isFunction(n) && (n = n(this.$element));
          var i = this.options.get("adaptDropdownCssClass");
          if (i = i || l, -1 !== n.indexOf(":all:")) {
            n = n.replace(":all:", "");
            var r = i;
            i = function i(e) {
              var t = r(e);
              return null != t ? t + " " + e : e;
            };
          }
          var o = this.options.get("dropdownCss") || {};
          return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t;
        }, e;
      }), e.define("select2/compat/initSelection", ["jquery"], function (i) {
        function e(e, t, n) {
          n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n);
        }
        return e.prototype.current = function (e, t) {
          var n = this;
          this._isInitialized ? e.call(this, t) : this.initSelection.call(null, this.$element, function (e) {
            n._isInitialized = !0, i.isArray(e) || (e = [e]), t(e);
          });
        }, e;
      }), e.define("select2/compat/inputData", ["jquery", "../utils"], function (s, i) {
        function e(e, t, n) {
          this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n);
        }
        return e.prototype.current = function (e, t) {
          function i(e, t) {
            var n = [];
            return e.selected || -1 !== s.inArray(e.id, t) ? (e.selected = !0, n.push(e)) : e.selected = !1, e.children && n.push.apply(n, i(e.children, t)), n;
          }
          for (var n = [], r = 0; r < this._currentData.length; r++) {
            var o = this._currentData[r];
            n.push.apply(n, i(o, this.$element.val().split(this._valueSeparator)));
          }
          t(n);
        }, e.prototype.select = function (e, t) {
          if (this.options.get("multiple")) {
            var n = this.$element.val();
            n += this._valueSeparator + t.id, this.$element.val(n), this.$element.trigger("input").trigger("change");
          } else this.current(function (e) {
            s.map(e, function (e) {
              e.selected = !1;
            });
          }), this.$element.val(t.id), this.$element.trigger("input").trigger("change");
        }, e.prototype.unselect = function (e, r) {
          var o = this;
          r.selected = !1, this.current(function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n];
              r.id != i.id && t.push(i.id);
            }
            o.$element.val(t.join(o._valueSeparator)), o.$element.trigger("input").trigger("change");
          });
        }, e.prototype.query = function (e, t, n) {
          for (var i = [], r = 0; r < this._currentData.length; r++) {
            var o = this._currentData[r],
              s = this.matches(t, o);
            null !== s && i.push(s);
          }
          n({
            results: i
          });
        }, e.prototype.addOptions = function (e, t) {
          var n = s.map(t, function (e) {
            return i.GetData(e[0], "data");
          });
          this._currentData.push.apply(this._currentData, n);
        }, e;
      }), e.define("select2/compat/matcher", ["jquery"], function (s) {
        return function (o) {
          return function (e, t) {
            var n = s.extend(!0, {}, t);
            if (null == e.term || "" === s.trim(e.term)) return n;
            if (t.children) {
              for (var i = t.children.length - 1; 0 <= i; i--) {
                var r = t.children[i];
                o(e.term, r.text, r) || n.children.splice(i, 1);
              }
              if (0 < n.children.length) return n;
            }
            return o(e.term, t.text, t) ? n : null;
          };
        };
      }), e.define("select2/compat/query", [], function () {
        function e(e, t, n) {
          n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n);
        }
        return e.prototype.query = function (e, t, n) {
          t.callback = n, this.options.get("query").call(null, t);
        }, e;
      }), e.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return e.prototype.position = function (e, t, n) {
          n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below");
        }, e;
      }), e.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n);
          this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
            e.stopPropagation();
          });
        }, e;
      }), e.define("select2/selection/stopPropagation", [], function () {
        function e() {}
        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n);
          this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {
            e.stopPropagation();
          });
        }, e;
      }), l = function l(p) {
        var h,
          f,
          e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          g = Array.prototype.slice;
        if (p.event.fixHooks) for (var n = e.length; n;) p.event.fixHooks[e[--n]] = p.event.mouseHooks;
        var m = p.event.special.mousewheel = {
          version: "3.1.12",
          setup: function setup() {
            if (this.addEventListener) for (var e = t.length; e;) this.addEventListener(t[--e], i, !1);else this.onmousewheel = i;
            p.data(this, "mousewheel-line-height", m.getLineHeight(this)), p.data(this, "mousewheel-page-height", m.getPageHeight(this));
          },
          teardown: function teardown() {
            if (this.removeEventListener) for (var e = t.length; e;) this.removeEventListener(t[--e], i, !1);else this.onmousewheel = null;
            p.removeData(this, "mousewheel-line-height"), p.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function getLineHeight(e) {
            var t = p(e),
              n = t["offsetParent" in p.fn ? "offsetParent" : "parent"]();
            return n.length || (n = p("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16;
          },
          getPageHeight: function getPageHeight(e) {
            return p(e).height();
          },
          settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
          }
        };
        function i(e) {
          var t,
            n = e || window.event,
            i = g.call(arguments, 1),
            r = 0,
            o = 0,
            s = 0,
            a = 0,
            l = 0;
          if ((e = p.event.fix(n)).type = "mousewheel", "detail" in n && (s = -1 * n.detail), "wheelDelta" in n && (s = n.wheelDelta), "wheelDeltaY" in n && (s = n.wheelDeltaY), "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * s, s = 0), r = 0 === s ? o : s, "deltaY" in n && (r = s = -1 * n.deltaY), "deltaX" in n && (o = n.deltaX, 0 === s && (r = -1 * o)), 0 !== s || 0 !== o) {
            if (1 === n.deltaMode) {
              var c = p.data(this, "mousewheel-line-height");
              r *= c, s *= c, o *= c;
            } else if (2 === n.deltaMode) {
              var u = p.data(this, "mousewheel-page-height");
              r *= u, s *= u, o *= u;
            }
            if (t = Math.max(Math.abs(s), Math.abs(o)), (!f || t < f) && y(n, f = t) && (f /= 40), y(n, t) && (r /= 40, o /= 40, s /= 40), r = Math[1 <= r ? "floor" : "ceil"](r / f), o = Math[1 <= o ? "floor" : "ceil"](o / f), s = Math[1 <= s ? "floor" : "ceil"](s / f), m.settings.normalizeOffset && this.getBoundingClientRect) {
              var d = this.getBoundingClientRect();
              a = e.clientX - d.left, l = e.clientY - d.top;
            }
            return e.deltaX = o, e.deltaY = s, e.deltaFactor = f, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift(e, r, o, s), h && clearTimeout(h), h = setTimeout(v, 200), (p.event.dispatch || p.event.handle).apply(this, i);
          }
        }
        function v() {
          f = null;
        }
        function y(e, t) {
          return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
        }
        p.fn.extend({
          mousewheel: function mousewheel(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function unmousewheel(e) {
            return this.unbind("mousewheel", e);
          }
        });
      }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], l) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = l : l(d), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (r, e, o, t, s) {
        if (null == r.fn.select2) {
          var a = ["open", "close", "destroy"];
          r.fn.select2 = function (t) {
            if ("object" == _typeof(t = t || {})) return this.each(function () {
              var e = r.extend(!0, {}, t);
              new o(r(this), e);
            }), this;
            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
            var n,
              i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var e = s.GetData(this, "select2");
              null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i);
            }), -1 < r.inArray(t, a) ? this : n;
          };
        }
        return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), o;
      }), {
        define: e.define,
        require: e.require
      };
    }(),
    t = e.require("jquery.select2");
  return d.fn.select2.amd = e, t;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/app": 0,
/******/ 			"dist/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;