(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout>\n  <nz-header [style.top]=\"-headerOffset + 'px'\">\n    <app-header [isFloating]=\"headerOffset === 0\"></app-header>\n  </nz-header>\n  <nz-content>\n    <app-midi-background [notes]=\"notes\"></app-midi-background>\n    <div id=\"jumbotron\" #jumbotron>\n      <nz-carousel nzAutoPlay>\n        <div nz-carousel-content *ngFor=\"let index of [1, 2, 3, 4, 5, 6]\">\n          <h3>{{ index }}</h3>\n        </div>\n      </nz-carousel>\n      <div id=\"jumbotron-logo\">\n        <img src=\"assets/img/yt_lyric.png\" />\n      </div>\n    </div>\n    <app-songs-menu [songs]=\"songs\"></app-songs-menu>\n  </nz-content>\n  <nz-footer>\n    Footer (applay footer piano to fit the midi notes of the background)\n  </nz-footer>\n</nz-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header-content\" nz-row>\n  <div nz-col nzSpan=\"8\">\n    {{ isFloating ? \"floating\" : \"fixed\" }} Header WOOHOO!!!!!!!!!!!\n  </div>\n  <div nz-col nzSpan=\"8\">\n    <nz-input-group [nzPrefix]=\"suffixIconSearch\">\n      <input type=\"text\" nz-input placeholder=\"Search... (does not work yet)\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <i id=\"suffix-icon-search\" nz-icon nzType=\"search\" (click)=\"log()\"></i>\n    </ng-template>\n  </div>\n  <div nz-col nzSpan=\"8\">Get In Touch!</div>\n</div>\n<!--\nconst cards = document.getElementById('cards');\nconst songs = []\nfor (let card of cards.children) {\n  const [imageDiv, contentDiv, revealDiv] = card.children;\n  const img = imageDiv.children[0].src;\n  let [{textContent: title}, {textContent: source}] = contentDiv.children;\n  title = title.trim();\n  source = source.trim();\n  let [,{children: [{textContent: composer}, {textContent: transcriber}]}] = revealDiv.children;\n  composer = composer.trim();\n  transcriber = transcriber.trim();\n  songs.push({img, title, source, composer, transcriber})\n}\nconsole.log(JSON.stringify(songs, null, 2));\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>jumbotron works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"midi-container\">\r\n  <!-- TODO: use real MIDI notes -->\r\n  <div\r\n    *ngFor=\"let note of notes\"\r\n    [style.left]=\"15 * note.noteType + 'px'\"\r\n    [style.bottom]=\"note.timing * 3 + 'px'\"\r\n    [style.height]=\"note.length * 2 + 'px'\"\r\n    class=\"midi-note\"\r\n  ></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>card-drawer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card [nzCover]=\"coverTemplate\" [nzActions]=\"[actionDownload, actionShare]\">\n  <nz-card-meta\n    [nzTitle]=\"song.title\"\n    [nzDescription]=\"true ? cardDescription : false\"\n  >\n    <ng-template #cardDescription>\n      <div\n        class=\"card-description\"\n        nz-tooltip\n        nzTooltipTitle=\"prompt text\"\n        [title]=\"song.source\"\n      >\n        {{ song.source }}\n      </div>\n      <div\n        class=\"drawer bottom download-drawer\"\n        [class.drawn]=\"openedDrawer === DRAWERS.DOWNLOAD\"\n      >\n        <div nz-rownzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\">\n            <i nz-icon nzType=\"file-pdf\" nzTheme=\"outline\"></i>\n            <span>Sheets (PDF)</span>\n          </a>\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\">\n            <i nz-icon nzType=\"file-markdown\" nzTheme=\"outline\"></i>\n            <span>MIDI</span>\n          </a>\n        </div>\n        <div nz-row nzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\">\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>\n            <span>open MP3 in browser</span>\n          </a>\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\">\n            <i nz-icon nzType=\"youtube\" nzTheme=\"outline\"></i>\n            <span>Play On YouTube</span>\n          </a>\n        </div>\n      </div>\n    </ng-template>\n  </nz-card-meta>\n</nz-card>\n<ng-template #coverTemplate>\n  <!-- TODO: add id to the link -->\n  <a class=\"card-cover-image-overlay\">\n    <div>\n      <div>\n        Open Song Page\n      </div>\n    </div>\n  </a>\n  <div\n    class=\"card-cover-image\"\n    [style.background-image]=\"'url(' + song.img + ')'\"\n  ></div>\n</ng-template>\n<ng-template #actionDownload>\n  <i nz-icon nzType=\"download\" (click)=\"toggleDrawer(DRAWERS.DOWNLOAD)\"></i>\n</ng-template>\n<ng-template #actionShare>\n  <i nz-icon nzType=\"share-alt\" (click)=\"toggleDrawer(DRAWERS.SHARE)\"></i>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-list\n  [nzDataSource]=\"songs\"\n  [nzRenderItem]=\"item\"\n  [nzGrid]=\"{ gutter: 16, xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }\"\n>\n  <ng-template #item let-item>\n    <nz-list-item [nzContent]=\"nzContent\">\n      <ng-template #nzContent>\n        <app-song-card [song]=\"item\"></app-song-card>\n      </ng-template>\n    </nz-list-item>\n  </ng-template>\n</nz-list>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nz-header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 1; /* Dammit I hate z-index, but we need it so the header would be above the content. */\r\n  padding: 0; /* Override AntD header padding */\r\n  -webkit-transition: top 0.2s ease-in-out;\r\n  transition: top 0.2s ease-in-out;\r\n  -webkit-transition: top 0.2s cubic-bezier(0.8, 0, 0.2, 1);\r\n  transition: top 0.2s cubic-bezier(0.8, 0, 0.2, 1);\r\n}\r\nnz-content {\r\n  position: relative;\r\n  background: #192129;\r\n}\r\n#jumbotron-logo {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  width: 64px;\r\n  pointer-events: visible;\r\n  border-radius: 50%;\r\n}\r\n#jumbotron-logo > img {\r\n  width: 64px;\r\n  border-radius: 50%;\r\n}\r\n#songs-content {\r\n  padding: 15px 10vw 5px;\r\n}\r\n[nz-carousel-content] {\r\n  text-align: center;\r\n  height: 260px;\r\n  line-height: 160px;\r\n  background: #33538e;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBRSxvRkFBb0Y7RUFDaEcsVUFBVSxFQUFFLGlDQUFpQztFQUM3Qyx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQ2hDLHlEQUFpRDtFQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB6LWluZGV4OiAxOyAvKiBEYW1taXQgSSBoYXRlIHotaW5kZXgsIGJ1dCB3ZSBuZWVkIGl0IHNvIHRoZSBoZWFkZXIgd291bGQgYmUgYWJvdmUgdGhlIGNvbnRlbnQuICovXHJcbiAgcGFkZGluZzogMDsgLyogT3ZlcnJpZGUgQW50RCBoZWFkZXIgcGFkZGluZyAqL1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjgsIDAsIDAuMiwgMSk7XHJcbn1cclxubnotY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMxOTIxMjk7XHJcbn1cclxuI2p1bWJvdHJvbi1sb2dvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNqdW1ib3Ryb24tbG9nbyA+IGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNzb25ncy1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDEwdncgNXB4O1xyXG59XHJcbltuei1jYXJvdXNlbC1jb250ZW50XSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMzUzOGU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _songs_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs.json */ "./src/app/songs.json.ts");
/* harmony import */ var _midiNotes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midiNotes.json */ "./src/app/midiNotes.json.ts");




let AppComponent = class AppComponent {
    constructor() {
        this.title = "desktop";
        this.songs = _songs_json__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.notes = _midiNotes_json__WEBPACK_IMPORTED_MODULE_3__["default"];
        // How much should the header be above the page in pixles.
        this.headerOffset = 100;
    }
    // Set an event listener for when the user scrolls the page.
    onScroll(event) {
        // The window's scroll event current target should always be the window.
        if (event.currentTarget === window) {
            const scrollTop = event.currentTarget.scrollY;
            // Set the header to the top of the page when scrolling past the height of the jumbotron.
            const headerThreshold = this.jambotron.nativeElement.offsetHeight;
            this.headerOffset = scrollTop > headerThreshold ? 0 : headerThreshold;
        }
        else {
            console.error("window scroll event current target is not the window");
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("jumbotron", { static: true })
], AppComponent.prototype, "jambotron", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"]) // for window scroll events
], AppComponent.prototype, "onScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _midi_background_midi_background_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./midi-background/midi-background.component */ "./src/app/midi-background/midi-background.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var _songs_menu_songs_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./songs-menu/songs-menu.component */ "./src/app/songs-menu/songs-menu.component.ts");
/* harmony import */ var _songs_menu_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./songs-menu/song-card/song-card.component */ "./src/app/songs-menu/song-card/song-card.component.ts");
/* harmony import */ var _songs_menu_song_card_card_drawer_card_drawer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./songs-menu/song-card/card-drawer/card-drawer.component */ "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts");

















Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _midi_background_midi_background_component__WEBPACK_IMPORTED_MODULE_12__["MidiBackgroundComponent"],
            _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_13__["JumbotronComponent"],
            _songs_menu_songs_menu_component__WEBPACK_IMPORTED_MODULE_14__["SongsMenuComponent"],
            _songs_menu_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_15__["SongCardComponent"],
            _songs_menu_song_card_card_drawer_card_drawer_component__WEBPACK_IMPORTED_MODULE_16__["CardDrawerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ],
        providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["en_US"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-content {\r\n  background: #2378c7;\r\n  color: white;\r\n}\r\n#suffix-icon-search {\r\n  cursor: pointer; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogIzIzNzhjNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3N1ZmZpeC1pY29uLXNlYXJjaCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    log() {
        console.log(1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "isFloating", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/*!***************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.ts ***!
  \**************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JumbotronComponent = class JumbotronComponent {
    constructor() { }
    ngOnInit() {
    }
};
JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jumbotron',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jumbotron.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jumbotron.component.css */ "./src/app/jumbotron/jumbotron.component.css")).default]
    })
], JumbotronComponent);



/***/ }),

/***/ "./src/app/midi-background/midi-background.component.css":
/*!***************************************************************!*\
  !*** ./src/app/midi-background/midi-background.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.midi-note {\r\n  position: absolute;\r\n  /* Length */\r\n  --note-length: 100;\r\n  height: calc(1px * var(--note-length));\r\n  width: 15px;\r\n  /* Timing */\r\n  --note-timing: 1300;\r\n  bottom: calc(1px * var(--note-timing));\r\n  /* Note */\r\n  --thick: 15px;\r\n  left: 50px;\r\n  /* Channel */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#e64646), to(#e446bf));\r\n  background: linear-gradient(to bottom, #e64646, #e446bf);\r\n  box-shadow: 0 -20px 30px #e64646, 0 20px 30px #e446bf;\r\n  border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkaS1iYWNrZ3JvdW5kL21pZGktYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUE4QjtJQUE5Qiw4QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWix1RkFBd0Q7RUFBeEQsd0RBQXdEO0VBQ3hELHFEQUFxRDtFQUNyRCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9taWRpLWJhY2tncm91bmQvbWlkaS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1pZGktbm90ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIExlbmd0aCAqL1xyXG4gIC0tbm90ZS1sZW5ndGg6IDEwMDtcclxuICBoZWlnaHQ6IGNhbGMoMXB4ICogdmFyKC0tbm90ZS1sZW5ndGgpKTtcclxuICB3aWR0aDogMTVweDtcclxuICAvKiBUaW1pbmcgKi9cclxuICAtLW5vdGUtdGltaW5nOiAxMzAwO1xyXG4gIGJvdHRvbTogY2FsYygxcHggKiB2YXIoLS1ub3RlLXRpbWluZykpO1xyXG4gIC8qIE5vdGUgKi9cclxuICAtLXRoaWNrOiAxNXB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgLyogQ2hhbm5lbCAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlNjQ2NDYsICNlNDQ2YmYpO1xyXG4gIGJveC1zaGFkb3c6IDAgLTIwcHggMzBweCAjZTY0NjQ2LCAwIDIwcHggMzBweCAjZTQ0NmJmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/midi-background/midi-background.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/midi-background/midi-background.component.ts ***!
  \**************************************************************/
/*! exports provided: MidiBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidiBackgroundComponent", function() { return MidiBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MidiBackgroundComponent = class MidiBackgroundComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MidiBackgroundComponent.prototype, "notes", void 0);
MidiBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-midi-background",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./midi-background.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./midi-background.component.css */ "./src/app/midi-background/midi-background.component.css")).default]
    })
], MidiBackgroundComponent);



/***/ }),

/***/ "./src/app/midiNotes.json.ts":
/*!***********************************!*\
  !*** ./src/app/midiNotes.json.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const NOTES = [
    { noteType: 52, timing: 1815, length: 80 },
    { noteType: 69, timing: 2993, length: 140 },
    { noteType: 64, timing: 4822, length: 100 },
    { noteType: 23, timing: 1227, length: 230 },
    { noteType: 5, timing: 1657, length: 110 },
    { noteType: 4, timing: 41, length: 180 },
    { noteType: 28, timing: 4505, length: 200 },
    { noteType: 77, timing: 2306, length: 190 },
    { noteType: 59, timing: 2029, length: 50 },
    { noteType: 79, timing: 1888, length: 140 },
    { noteType: 45, timing: 3047, length: 110 },
    { noteType: 87, timing: 2979, length: 210 },
    { noteType: 66, timing: 4135, length: 180 },
    { noteType: 28, timing: 846, length: 70 },
    { noteType: 78, timing: 4879, length: 100 },
    { noteType: 73, timing: 2400, length: 220 },
    { noteType: 15, timing: 1608, length: 230 },
    { noteType: 75, timing: 2739, length: 190 },
    { noteType: 6, timing: 3750, length: 20 },
    { noteType: 28, timing: 666, length: 140 },
    { noteType: 13, timing: 690, length: 10 },
    { noteType: 85, timing: 4402, length: 90 },
    { noteType: 28, timing: 3743, length: 160 },
    { noteType: 45, timing: 1815, length: 190 },
    { noteType: 2, timing: 4481, length: 10 },
    { noteType: 61, timing: 4880, length: 150 },
    { noteType: 20, timing: 3178, length: 140 },
    { noteType: 81, timing: 17, length: 230 },
    { noteType: 22, timing: 1835, length: 220 },
    { noteType: 11, timing: 4376, length: 10 },
    { noteType: 39, timing: 2756, length: 120 },
    { noteType: 62, timing: 1041, length: 60 },
    { noteType: 53, timing: 4560, length: 40 },
    { noteType: 54, timing: 3789, length: 10 },
    { noteType: 48, timing: 4803, length: 30 },
    { noteType: 40, timing: 1013, length: 140 },
    { noteType: 19, timing: 1166, length: 230 },
    { noteType: 85, timing: 3948, length: 30 },
    { noteType: 5, timing: 4350, length: 220 },
    { noteType: 65, timing: 3607, length: 170 },
    { noteType: 30, timing: 367, length: 40 },
    { noteType: 65, timing: 1380, length: 170 },
    { noteType: 85, timing: 2508, length: 200 },
    { noteType: 47, timing: 2565, length: 100 },
    { noteType: 33, timing: 1863, length: 110 },
    { noteType: 78, timing: 2754, length: 100 },
    { noteType: 88, timing: 116, length: 60 },
    { noteType: 24, timing: 3604, length: 160 },
    { noteType: 81, timing: 285, length: 240 },
    { noteType: 82, timing: 920, length: 110 },
    { noteType: 9, timing: 4030, length: 120 },
    { noteType: 57, timing: 1861, length: 10 },
    { noteType: 73, timing: 3823, length: 240 },
    { noteType: 19, timing: 3182, length: 230 },
    { noteType: 32, timing: 1371, length: 170 },
    { noteType: 33, timing: 3956, length: 50 },
    { noteType: 44, timing: 1988, length: 150 },
    { noteType: 45, timing: 471, length: 240 },
    { noteType: 71, timing: 755, length: 180 },
    { noteType: 2, timing: 3389, length: 0 },
    { noteType: 66, timing: 1899, length: 130 },
    { noteType: 51, timing: 3170, length: 0 },
    { noteType: 10, timing: 2846, length: 220 },
    { noteType: 13, timing: 2366, length: 40 },
    { noteType: 14, timing: 1359, length: 190 },
    { noteType: 22, timing: 2004, length: 90 },
    { noteType: 82, timing: 4634, length: 190 },
    { noteType: 41, timing: 4852, length: 80 },
    { noteType: 82, timing: 2736, length: 230 },
    { noteType: 85, timing: 4174, length: 140 },
    { noteType: 46, timing: 2477, length: 60 },
    { noteType: 78, timing: 3247, length: 80 },
    { noteType: 10, timing: 3818, length: 70 },
    { noteType: 30, timing: 2031, length: 160 },
    { noteType: 72, timing: 4520, length: 50 },
    { noteType: 6, timing: 115, length: 200 },
    { noteType: 44, timing: 2901, length: 100 },
    { noteType: 28, timing: 554, length: 60 },
    { noteType: 86, timing: 3702, length: 210 },
    { noteType: 19, timing: 25, length: 210 },
    { noteType: 14, timing: 1882, length: 190 },
    { noteType: 48, timing: 3367, length: 120 },
    { noteType: 48, timing: 3537, length: 100 },
    { noteType: 26, timing: 1247, length: 70 },
    { noteType: 16, timing: 3796, length: 160 },
    { noteType: 80, timing: 3886, length: 150 },
    { noteType: 29, timing: 4072, length: 170 },
    { noteType: 63, timing: 3532, length: 20 },
    { noteType: 15, timing: 1373, length: 120 },
    { noteType: 45, timing: 973, length: 60 },
    { noteType: 12, timing: 406, length: 10 },
    { noteType: 43, timing: 3164, length: 70 },
    { noteType: 44, timing: 3658, length: 40 },
    { noteType: 66, timing: 4410, length: 0 },
    { noteType: 45, timing: 2181, length: 80 },
    { noteType: 79, timing: 4472, length: 160 },
    { noteType: 40, timing: 4199, length: 150 },
    { noteType: 52, timing: 632, length: 80 },
    { noteType: 42, timing: 3829, length: 100 },
    { noteType: 77, timing: 919, length: 70 }
];
/* harmony default export */ __webpack_exports__["default"] = (NOTES);


/***/ }),

/***/ "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drawer {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -100%;\r\n    -webkit-transition: bottom 0.2s ease-out;\r\n    transition: bottom 0.2s ease-out;\r\n    background-color: white;\r\n  }\r\n  .drawer.drawn {\r\n    bottom: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25nLWNhcmQvY2FyZC1kcmF3ZXIvY2FyZC1kcmF3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9zb25ncy1tZW51L3NvbmctY2FyZC9jYXJkLWRyYXdlci9jYXJkLWRyYXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4ycyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZHJhd2VyLmRyYXduIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDrawerComponent", function() { return CardDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardDrawerComponent = class CardDrawerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-drawer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-drawer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-drawer.component.css */ "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css")).default]
    })
], CardDrawerComponent);



/***/ }),

/***/ "./src/app/songs-menu/song-card/song-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/songs-menu/song-card/song-card.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nz-card {\r\n  max-width: 350px;\r\n  margin: auto;\r\n}\r\n\r\nnz-card > ::ng-deep.ant-card-cover {\r\n  position: relative;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card-cover-image-overlay {\r\n  cursor: pointer;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n\r\n.card-cover-image-overlay > div {\r\n  position: relative;\r\n  height: 50%;\r\n  width: 100%;\r\n\r\n  /* Locate the ... above the overlay (=negetive the height) */\r\n  top: -50%;\r\n  /* Give the element a border radius from the bottom (50%) to the left and\r\n     right borders of the element (default value 0 - no border radius) */\r\n  border-bottom-right-radius: 50% 0;\r\n  border-bottom-left-radius: 50% 0;\r\n  /* The transition for the top and border values for when the overlay is hovered */\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n\r\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, white), to(hsla(0, 0%, 100%, 0.6)));\r\n\r\n  background: linear-gradient(white 50%, hsla(0, 0%, 100%, 0.6));\r\n}\r\n\r\n.card-cover-image-overlay:hover > div {\r\n  /* Locate the ... within the overlay (=negetive half of the height) */\r\n  top: -25%;\r\n  /* Round the borders all the way to the middle of the ... (50%) */\r\n  border-bottom-right-radius: 50% 50%;\r\n  border-bottom-left-radius: 50% 50%;\r\n}\r\n\r\n.card-cover-image-overlay > div > div {\r\n  /* Position the ... in lower half of the ... */\r\n  position: relative;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: -50%;\r\n  height: 50%;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  /* Center the content/text of the ... */\r\n  align-content: center;\r\n  text-align: center;\r\n  /* Pad the bottom of the ... by half of the font size */\r\n  padding-bottom: 0.5em;\r\n\r\n  color: hsla(0, 0%, 30%, 1);\r\n  font-weight: 700; /* bold */\r\n  /* Do not allow the user to select the text (it's annoying) */\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nnz-card > ::ng-deep.ant-card-body {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Make the icons in the card actions to take the whole space,\r\n   because only the icons can invoke a click event. */\r\n\r\n:host ::ng-deep.ant-card-actions > li {\r\n  margin: 0;\r\n}\r\n\r\n:host ::ng-deep.ant-card-actions > li > span {\r\n  width: 100%;\r\n}\r\n\r\n:host ::ng-deep.ant-card-actions > li > span > i {\r\n  width: inherit;\r\n  padding: 9px 0;\r\n}\r\n\r\n.card-description {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: gray;\r\n}\r\n\r\n.card-cover-image {\r\n  height: 150px;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-color: #fff;\r\n}\r\n\r\n.drawer {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  -webkit-transition: left 0.2s ease-out, top 0.2s ease-out;\r\n  transition: left 0.2s ease-out, top 0.2s ease-out;\r\n  background-color: white;\r\n}\r\n\r\n.drawer.top {\r\n  top: -100%;\r\n}\r\n\r\n.drawer.bottom {\r\n  top: 100%;\r\n}\r\n\r\n.drawer.left {\r\n  left: -100%;\r\n}\r\n\r\n.drawer.right {\r\n  left: 100%;\r\n}\r\n\r\n.drawer.drawn {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.download-drawer > div {\r\n  height: 50%;\r\n}\r\n\r\n.download-drawer > div > a {\r\n  height: 100%;\r\n  -webkit-transition: box-shadow 0.1s ease-in-out;\r\n  transition: box-shadow 0.1s ease-in-out;\r\n}\r\n\r\n.download-drawer > div > a:hover {\r\n  box-shadow: 0px 0px 4px 3px #0000004d;\r\n}\r\n\r\ni[nz-icon] {\r\n  color: #1890ff;\r\n  -webkit-transition: -webkit-filter 0.2s ease-in-out;\r\n  transition: -webkit-filter 0.2s ease-in-out;\r\n  transition: filter 0.2s ease-in-out;\r\n  transition: filter 0.2s ease-in-out, -webkit-filter 0.2s ease-in-out;\r\n}\r\n\r\ni[nz-icon]:hover {\r\n  -webkit-filter: drop-shadow(0px 0px 1px #1890ffaa);\r\n          filter: drop-shadow(0px 0px 1px #1890ffaa);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25nLWNhcmQvc29uZy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXOztFQUVYLDREQUE0RDtFQUM1RCxTQUFTO0VBQ1Q7d0VBQ3NFO0VBQ3RFLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsaUZBQWlGO0VBQ2pGLHdDQUFnQztFQUFoQyxnQ0FBZ0M7O0VBRWhDLCtHQUE4RDs7RUFBOUQsOERBQThEO0FBQ2hFOztBQUNBO0VBQ0UscUVBQXFFO0VBQ3JFLFNBQVM7RUFDVCxpRUFBaUU7RUFDakUsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVzs7RUFFWCxvQkFBYTs7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix1REFBdUQ7RUFDdkQscUJBQXFCOztFQUVyQiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUUsU0FBUztFQUMzQiw2REFBNkQ7RUFDN0QseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtxREFDcUQ7O0FBQ3JEO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTix5REFBaUQ7RUFBakQsaURBQWlEO0VBQ2pELHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osK0NBQXVDO0VBQXZDLHVDQUF1QztBQUN6Qzs7QUFDQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtREFBbUM7RUFBbkMsMkNBQW1DO0VBQW5DLG1DQUFtQztFQUFuQyxvRUFBbUM7QUFDckM7O0FBQ0E7RUFDRSxrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvc29uZ3MtbWVudS9zb25nLWNhcmQvc29uZy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxubnotY2FyZCA+IDo6bmctZGVlcC5hbnQtY2FyZC1jb3ZlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uY2FyZC1jb3Zlci1pbWFnZS1vdmVybGF5IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY2FyZC1jb3Zlci1pbWFnZS1vdmVybGF5ID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC8qIExvY2F0ZSB0aGUgLi4uIGFib3ZlIHRoZSBvdmVybGF5ICg9bmVnZXRpdmUgdGhlIGhlaWdodCkgKi9cclxuICB0b3A6IC01MCU7XHJcbiAgLyogR2l2ZSB0aGUgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgZnJvbSB0aGUgYm90dG9tICg1MCUpIHRvIHRoZSBsZWZ0IGFuZFxyXG4gICAgIHJpZ2h0IGJvcmRlcnMgb2YgdGhlIGVsZW1lbnQgKGRlZmF1bHQgdmFsdWUgMCAtIG5vIGJvcmRlciByYWRpdXMpICovXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJSAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJSAwO1xyXG4gIC8qIFRoZSB0cmFuc2l0aW9uIGZvciB0aGUgdG9wIGFuZCBib3JkZXIgdmFsdWVzIGZvciB3aGVuIHRoZSBvdmVybGF5IGlzIGhvdmVyZWQgKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlIDUwJSwgaHNsYSgwLCAwJSwgMTAwJSwgMC42KSk7XHJcbn1cclxuLmNhcmQtY292ZXItaW1hZ2Utb3ZlcmxheTpob3ZlciA+IGRpdiB7XHJcbiAgLyogTG9jYXRlIHRoZSAuLi4gd2l0aGluIHRoZSBvdmVybGF5ICg9bmVnZXRpdmUgaGFsZiBvZiB0aGUgaGVpZ2h0KSAqL1xyXG4gIHRvcDogLTI1JTtcclxuICAvKiBSb3VuZCB0aGUgYm9yZGVycyBhbGwgdGhlIHdheSB0byB0aGUgbWlkZGxlIG9mIHRoZSAuLi4gKDUwJSkgKi9cclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlIDUwJTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCUgNTAlO1xyXG59XHJcbi5jYXJkLWNvdmVyLWltYWdlLW92ZXJsYXkgPiBkaXYgPiBkaXYge1xyXG4gIC8qIFBvc2l0aW9uIHRoZSAuLi4gaW4gbG93ZXIgaGFsZiBvZiB0aGUgLi4uICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAtNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogQ2VudGVyIHRoZSBjb250ZW50L3RleHQgb2YgdGhlIC4uLiAqL1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogUGFkIHRoZSBib3R0b20gb2YgdGhlIC4uLiBieSBoYWxmIG9mIHRoZSBmb250IHNpemUgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcblxyXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAzMCUsIDEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IC8qIGJvbGQgKi9cclxuICAvKiBEbyBub3QgYWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IHRoZSB0ZXh0IChpdCdzIGFubm95aW5nKSAqL1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5uei1jYXJkID4gOjpuZy1kZWVwLmFudC1jYXJkLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qIE1ha2UgdGhlIGljb25zIGluIHRoZSBjYXJkIGFjdGlvbnMgdG8gdGFrZSB0aGUgd2hvbGUgc3BhY2UsXHJcbiAgIGJlY2F1c2Ugb25seSB0aGUgaWNvbnMgY2FuIGludm9rZSBhIGNsaWNrIGV2ZW50LiAqL1xyXG46aG9zdCA6Om5nLWRlZXAuYW50LWNhcmQtYWN0aW9ucyA+IGxpIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwLmFudC1jYXJkLWFjdGlvbnMgPiBsaSA+IHNwYW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcC5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuID4gaSB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogOXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmNhcmQtY292ZXItaW1hZ2Uge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZHJhd2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4ycyBlYXNlLW91dCwgdG9wIDAuMnMgZWFzZS1vdXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmRyYXdlci50b3Age1xyXG4gIHRvcDogLTEwMCU7XHJcbn1cclxuLmRyYXdlci5ib3R0b20ge1xyXG4gIHRvcDogMTAwJTtcclxufVxyXG4uZHJhd2VyLmxlZnQge1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG59XHJcbi5kcmF3ZXIucmlnaHQge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbn1cclxuLmRyYXdlci5kcmF3biB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1kcmF3ZXIgPiBkaXYge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi5kb3dubG9hZC1kcmF3ZXIgPiBkaXYgPiBhIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kb3dubG9hZC1kcmF3ZXIgPiBkaXYgPiBhOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAzcHggIzAwMDAwMDRkO1xyXG59XHJcblxyXG5pW256LWljb25dIHtcclxuICBjb2xvcjogIzE4OTBmZjtcclxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5pW256LWljb25dOmhvdmVyIHtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMXB4ICMxODkwZmZhYSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/songs-menu/song-card/song-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/songs-menu/song-card/song-card.component.ts ***!
  \*************************************************************/
/*! exports provided: SongCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongCardComponent", function() { return SongCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var Drawers;
(function (Drawers) {
    Drawers[Drawers["DOWNLOAD"] = 0] = "DOWNLOAD";
    Drawers[Drawers["SHARE"] = 1] = "SHARE";
})(Drawers || (Drawers = {}));
let SongCardComponent = class SongCardComponent {
    constructor() {
        this.openedDrawer = null;
        this.DRAWERS = Drawers;
    }
    ngOnInit() { }
    /**
     * Open a drawer, if it already open, close it
     * @param drawer the enum of the drawer.
     */
    toggleDrawer(drawer) {
        this.openedDrawer = this.openedDrawer !== drawer ? drawer : null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongCardComponent.prototype, "song", void 0);
SongCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-song-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-card.component.css */ "./src/app/songs-menu/song-card/song-card.component.css")).default]
    })
], SongCardComponent);



/***/ }),

/***/ "./src/app/songs-menu/songs-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/songs-menu/songs-menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: block;\r\n  overflow-y: hidden;\r\n}\r\nnz-list {\r\n  padding: 15px 10vw 5px;\r\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\r\n  transition: -webkit-transform 0.5s ease-in-out;\r\n  transition: transform 0.5s ease-in-out;\r\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\r\n}\r\nnz-list.rolled {\r\n  -webkit-transform: translateY(-100vh);\r\n          transform: translateY(-100vh);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25ncy1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0RBQXNDO0VBQXRDLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMsMEVBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc29uZ3MtbWVudS9zb25ncy1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbm56LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDE1cHggMTB2dyA1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxubnotbGlzdC5yb2xsZWQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/songs-menu/songs-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/songs-menu/songs-menu.component.ts ***!
  \****************************************************/
/*! exports provided: SongsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsMenuComponent", function() { return SongsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SongsMenuComponent = class SongsMenuComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongsMenuComponent.prototype, "songs", void 0);
SongsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-songs-menu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./songs-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./songs-menu.component.css */ "./src/app/songs-menu/songs-menu.component.css")).default]
    })
], SongsMenuComponent);



/***/ }),

/***/ "./src/app/songs.json.ts":
/*!*******************************!*\
  !*** ./src/app/songs.json.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SONGS = [
    {
        img: "https://img.youtube.com/vi/P57u7-LwBfI/mqdefault.jpg",
        title: "Etude of a Songbird",
        source: "Breathe",
        composer: "Laura Platt",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/6tZPKke2ugI/mqdefault.jpg",
        title: "Goodbye To A World",
        source: "Porter Robinson",
        composer: "Porter Robinson",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/EerhhZ8cZtw/mqdefault.jpg",
        title: "Perfume",
        source: "fusq",
        composer: "fusq",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/c54P5qA-UP0/mqdefault.jpg",
        title: "Hot Milk",
        source: "Snail's House",
        composer: "Snail's House",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/tJBtuw2Q75c/mqdefault.jpg",
        title: "Super Animal Theme",
        source: "Super Animal Royale",
        composer: "Jake Butineau",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/tOOwaMhC0BQ/mqdefault.jpg",
        title: "Exhale",
        source: "Celeste",
        composer: "Lena Raine",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/xJxFl-mcK9U/mqdefault.jpg",
        title: "Sweet Sweet Canyon",
        source: "Mario Kart 8",
        composer: "Shiho Fujii",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/gH8vd4PpUJ0/mqdefault.jpg",
        title: "Marble Soda",
        source: "Shawn Wasabi",
        composer: "Shawn Wasabi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/iTUHx6kS7ws/mqdefault.jpg",
        title: "Right Now",
        source: "The Living Tombstone",
        composer: "The Living Tombstone",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/5YkPSWIOViM/mqdefault.jpg",
        title: "RISE",
        source: "League of Legends Worlds 2018",
        composer: "The Glitch Mob, Mako and The Word Alive",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/rTiGD4jm67M/mqdefault.jpg",
        title: "Catgroove (Piano Cover)",
        source: "PandaTooth x LyricWulf",
        composer: "Parov Stelar",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Wo4zW5MsBWs/mqdefault.jpg",
        title: "Ready as I'll Ever Be",
        source: "Tangled: The Series",
        composer: "Alan Menken",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/shi3yv-9n54/mqdefault.jpg",
        title: "Fish",
        source: "JonKaGor",
        composer: "JonKaGor",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/iA7QEtwgti0/mqdefault.jpg",
        title: "Rush Lyric",
        source: "LyricWulf",
        composer: "Sheet Music Boss",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/YqM2xuqQqm4/mqdefault.jpg",
        title: "We Deserve to Shine",
        source: "Steven Universe",
        composer: "Rebecca Sugar",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/LDK8i9pjtqs/mqdefault.jpg",
        title: "Moonsetter",
        source: "Homestuck",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/6rNG3ixpfEo/mqdefault.jpg",
        title: "Bubble Tea",
        source: "dark cat",
        composer: "dark cat",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Uj77rXONpJ0/mqdefault.jpg",
        title: "PokéMart Theme",
        source: "Pokémon Ruby/Sapphire/Emerald",
        composer: "Go Ichinose",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/9cj4BHlZ2UQ/mqdefault.jpg",
        title: "PAW Patrol Theme",
        source: "PAW Patrol",
        composer: "Little Ditto",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/CP6VZENSe5w/mqdefault.jpg",
        title: "An Unwavering Heart",
        source: "Pokemon X/Y",
        composer: "Shota Kageyama",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/FentCyS1O5k/mqdefault.jpg",
        title: "Hello World",
        source: "Louie Zong",
        composer: "Louie Zong",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/XGYyEiAjBf8/mqdefault.jpg",
        title: "Ruby Rider",
        source: "Steven Universe",
        composer: "Jeff Liu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/9jHUBuEZHbI/mqdefault.jpg",
        title: "Tribe of Heavenly Kami",
        source: "Ōkami",
        composer: "Rei Kondo",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/f_jjy5BlgjE/mqdefault.jpg",
        title: "Little One",
        source: "Detroit: Become Human",
        composer: "Philip Sheppard",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/yR7ahR5ouZI/mqdefault.jpg",
        title: "Dramophone",
        source: "Caravan Palace",
        composer: "Caravan Palace",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/otW95iPB_LY/mqdefault.jpg",
        title: "Odd Future",
        source: "My Hero Academia OP 4",
        composer: "Yuki Hayashi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/itQD8B90tTk/mqdefault.jpg",
        title: "Arstotzkan Anthem",
        source: "Papers, Please Main Theme",
        composer: "Lucas Pope",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/gF-9APdJkcI/mqdefault.jpg",
        title: "Pixel Galaxy",
        source: "Snail's House",
        composer: "Snail's House",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/4cI8JtjIMzo/mqdefault.jpg",
        title: "YIAY (Piano Remix)",
        source: "Jacksfilms",
        composer: "Jacksfilms",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/RxIrtUvr9G4/mqdefault.jpg",
        title: "Through the Fire and Flames",
        source: "Dragonforce",
        composer: "Dragonforce",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/4nGZDidTTz8/mqdefault.jpg",
        title: "Mii Plaza",
        source: "Mii Channel Theme",
        composer: "Kazumi Totaka",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/QyCsLINxijc/mqdefault.jpg",
        title: "The Eevee Song",
        source: "Random Encounters",
        composer: "Random Encounters",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/m6-yxp2Cygg/mqdefault.jpg",
        title: "Issun's Theme",
        source: "Okami",
        composer: "Hiroshi Yamaguchi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/XOxowDPJBt8/mqdefault.jpg",
        title: "Blueshift",
        source: "Exurb1a",
        composer: "Exurb1a",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/GegS8INc3ps/mqdefault.jpg",
        title: "Parasailing Minigame",
        source: "Breath of the Wild",
        composer: "Manaka Kataoka",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/DhljN7BbEas/mqdefault.jpg",
        title: "No Surprises (Piano Stride)",
        source: "Westworld",
        composer: "Ramin Djawadi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/gXIvln7Kwrg/mqdefault.jpg",
        title: "Cold",
        source: "RWBY",
        composer: "Jeff Williams",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ORapqw2ru4M/mqdefault.jpg",
        title: "Shelter",
        source: "Porter Robinson & Madeon",
        composer: "Porter Robinson & Madeon",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/3OKSroKAK88/mqdefault.jpg",
        title: "Believer",
        source: "Imagine Dragons",
        composer: "Imagine Dragons",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/10Ry2uOnXoo/mqdefault.jpg",
        title: "The Dog Wrestler Waltz",
        source: "Exurb1a",
        composer: "Exurb1a",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/RQmQ3xBoGeo/mqdefault.jpg",
        title: "The Wolf",
        source: "SIAMÉS",
        composer: "SIAMÉS",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/51aAXlEfwYg/mqdefault.jpg",
        title: "Battle! Zinnia",
        source: "Pokemon ORAS",
        composer: "Shota Kageyama",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/y8ok8geXiNk/mqdefault.jpg",
        title: "Otter Pop",
        source: "Shawn Wasabi",
        composer: "Shawn Wasabi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/tXFPo6LXfuU/mqdefault.jpg",
        title: "Phase 2",
        source: "Disbelief Papyrus",
        composer: "JimmyTheBassist",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Gx47FE1Soww/mqdefault.jpg",
        title: "Lone Digger",
        source: "‹ |°_°| ›",
        composer: "Caravan Palace",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/rBeang8p74I/mqdefault.jpg",
        title: "Demolitale Main Theme",
        source: "Demolitale",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/61WsFfTzOQg/mqdefault.jpg",
        title: "The Calm",
        source: "LyricWulf Original Song",
        composer: "Wulfenite",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/JG-ujtkrdOg/mqdefault.jpg",
        title: "Ironic",
        source: "Words Words Words",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/QQB1OKkMda4/mqdefault.jpg",
        title: "Forlorn",
        source: "Undertale Yellow",
        composer: "MyNewSoundtrack, Master Sword",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/WjyOEdFn4qg/mqdefault.jpg",
        title: "Final Chance",
        source: "Undertale AU",
        composer: "Fanmade UNDERTALE AU",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/7GwtK2DXbFk/mqdefault.jpg",
        title: "Aviator",
        source: "OneShot Soundtrack",
        composer: "Nightmargin",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/jwjPmjqcFTI/mqdefault.jpg",
        title: "Moonmen",
        source: "Pocket Mortys OST",
        composer: "Ryan Elder",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/5HZEorKnWcM/mqdefault.jpg",
        title: "MOGOLOVONIO.MP3",
        source: "april fool to you",
        composer: "SR POLO & TOBO FOOX",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/2vq--uOOpwM/mqdefault.jpg",
        title: "Niko and the World Machine",
        source: "OneShot Soundtrack",
        composer: "Nightmargin (Casey Gu)",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/p28uVJ_7tWY/mqdefault.jpg",
        title: "To the Gateway",
        source: "Super Mario Galaxy",
        composer: "Mahito Yokota",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/FD-ictCbjJA/mqdefault.jpg",
        title: "We Are Number One",
        source: "LazyTown",
        composer: "MÃ¡ni Svavarsson",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/4k2DZw5S1cs/mqdefault.jpg",
        title: "Underline",
        source: "Fanmade UNDERTALE AU",
        composer: "Xalia",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/AB08g5EEcjI/mqdefault.jpg",
        title: "MegaloVania FANDOM MEDLEY",
        source: "Fanmade UNDERTALE AU, Homestuck, Gravity Falls, Smash, FNAF, Doctor Who, Steven Universe, Adventure Time, Gumball, and Star vs. the Forces of Evil!",
        composer: "Yan Ade",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/HaNAOj32TfE/mqdefault.jpg",
        title: "ewe",
        source: "LyricWulf Original Composition",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/29_Ti5xVBEI/mqdefault.jpg",
        title: "Champion Cynthia",
        source: "PokÃ©mon Diamond & PokÃ©mon Pearl: Super Music Collection",
        composer: "Go Ichinose",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/cHLhC8Od5JU/mqdefault.jpg",
        title: "Waterfall",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/jo1mvfNW630/mqdefault.jpg",
        title: "Karla's Lullaby",
        source: "Words",
        composer: "Louie Zong",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/se7K-3eHMjo/mqdefault.jpg",
        title: "Fourteen Residents",
        source: "OFF",
        composer: "Alias Conrad Coldwood",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/JBWMn3CdPN8/mqdefault.jpg",
        title: "HYPNOTIK",
        source: "KiseijÅ« Sei no Kakuritsu (Parasyte -the maxim-)",
        composer: "Ken Arai",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/X2N3XvZCpIc/mqdefault.jpg",
        title: "Supermoon",
        source: "No Man's Sky: Music for an Infinite Universe",
        composer: "65daysofstatic",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/kyoTZQ-VSt4/mqdefault.jpg",
        title: "Again",
        source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
        composer: "Masaru Yokoyama",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/2-cFJEqIrVk/mqdefault.jpg",
        title: "Just 3 Days",
        source: "Majora's Mask Song",
        composer: "MandoPony",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/waLTe4j4LjE/mqdefault.jpg",
        title: "Amarillo",
        source: "The Fall",
        composer: "Gorillaz",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/C3SykOb6aqo/mqdefault.jpg",
        title: "Land of Hints",
        source: "LISA the Joyful Soundtrack",
        composer: "Widdly 2 Diddly",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/spIWGAnp_3w/mqdefault.jpg",
        title: "#Deep [Piano]",
        source: "what.",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/KkVff0gxC2c/mqdefault.jpg",
        title: "#Deep [Piano and Voice]",
        source: "what.",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/FoEB9mgrMzI/mqdefault.jpg",
        title: "Wishing",
        source: "Re:Zero kara Hajimeru Isekai Seikatsu (Starting Life in Another World)",
        composer: "Hige Driver, Ayato Shinozaki",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/lPbxlkO3KVE/mqdefault.jpg",
        title: "Edgy Sans is Edgy",
        source: "Fanmade UNDERTALE AU",
        composer: "Jeffrey Watkins",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ope9jAWeu80/mqdefault.jpg",
        title: "How Far I'll Go",
        source: "Moana (Original Motion Picture Soundtrack)",
        composer: "Lin-Manuel Miranda",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/oAWO56Bl5FA/mqdefault.jpg",
        title: "Lazy Afternoons",
        source: "Kingdom Hearts Piano Collections",
        composer: "Yoko Shimomura, Sachiko Miyano",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/7HtaJKneBMk/mqdefault.jpg",
        title: "Sugar Coma Foxtrot",
        source: "HOME OST",
        composer: "xLightningWolFx",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/wOWe33No8m0/mqdefault.jpg",
        title: "Death by Glamour",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/q_JvkaHLPvQ/mqdefault.jpg",
        title: "Let It Be",
        source: "Miracle",
        composer: "Blackmill",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/0C5xp2WKKdM/mqdefault.jpg",
        title: "Heartache",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/2PtQZlbp5CY/mqdefault.jpg",
        title: "Battle Against a True Parent",
        source: "Fanmade UNDERTALE AU",
        composer: "Whirligig231",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/3ud93T3-Mgs/mqdefault.jpg",
        title: "Bonetrousle (Underswap)",
        source: "Fanmade UNDERTALE AU",
        composer: "nerdylizardeperson",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ghwlmbHDQMw/mqdefault.jpg",
        title: "Mother Earth",
        source: "Mother 1+2",
        composer: "Hirokazu Tanaka",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/CGBLjkg2-_8/mqdefault.jpg",
        title: "Outset Island",
        source: "The Legend of Zelda: The Wind Waker",
        composer: "Kenta Nagata, Hajime Wakai, Toru Minegishi, Koji Kondo",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/KmBiqJCpGUU/mqdefault.jpg",
        title: "Backbone",
        source: "Fanmade UNDERTALE AU",
        composer: "Sean Evans [Lone]",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/_Dda2PebeIA/mqdefault.jpg",
        title: "Bonetrousle",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/-wZHV13hrvc/mqdefault.jpg",
        title: "Fox's Forgotten Love, Krystal",
        source: "Star Fox Command",
        composer: "Hajime Wakai",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/zF6R3bMRWOU/mqdefault.jpg",
        title: "Showtime (Piano Refrain)",
        source: "Homestuck Vol. 1â€‹-â€‹4",
        composer: "Malcolm Brown, Kevin Regamey",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/qyIXXFL3I2w/mqdefault.jpg",
        title: "Thundersnail",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/3qqfUe_-jZA/mqdefault.jpg",
        title: "He's My Dad",
        source: "LISA the Joyful Soundtrack",
        composer: "Widdly 2 Diddly",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/MZdogDXQJm0/mqdefault.jpg",
        title: "art is dead. [Piano]",
        source: "Words Words Words",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Rn0Zso6u7mI/mqdefault.jpg",
        title: "Nyeh Heh Heh! & Bonetrousle",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/BSg0UD51Rhs/mqdefault.jpg",
        title: "art is dead. [Piano and Voice]",
        source: "Words Words Words",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/_Xr-hIdP_yQ/mqdefault.jpg",
        title: "Unnecessary Tension",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/P6nz4-PHQbk/mqdefault.jpg",
        title: "Wrong Enemy ?!",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/MrN4UpxhsxE/mqdefault.jpg",
        title: "Live & Death Report",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/sYOF1eJiZtk/mqdefault.jpg",
        title: "She's Playing Piano",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/GuLhZRzAlzc/mqdefault.jpg",
        title: "Snow Fairy",
        source: "Fairy Tail",
        composer: "FUNKIST, NateWantsToBattle",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ZKYIylDO5_I/mqdefault.jpg",
        title: "Oh! One True Love",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/uGQTVGUso9k/mqdefault.jpg",
        title: "Gourmet Race",
        source: "Kirby Super Star",
        composer: "Jun Ishikawa, Dan Miyakawa",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ok3O805bfAM/mqdefault.jpg",
        title: "Lower Your Expectations [Piano]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/bu5SF_xk8bw/mqdefault.jpg",
        title: "Histrousle",
        source: "Fanmade UNDERTALE AU",
        composer: "Keno9988ii",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/2pLJ00yWlZo/mqdefault.jpg",
        title: "Ori, Lost in the Storm",
        source: "Ori and the Blind Forest (Original Soundtrack)",
        composer: "Gareth Coker",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/gcxKvYdDH4A/mqdefault.jpg",
        title: 'Power of "NEO" (IKARUS Remix)',
        source: "Fanmade UNDERTALE AU",
        composer: "IKarus",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/1PiX8y04ibo/mqdefault.jpg",
        title: "Battle Against a True Hero",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/T5pbrjMSxjs/mqdefault.jpg",
        title: "Are You Happy? [Piano]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/MY9Y7GUZS4o/mqdefault.jpg",
        title: "Straight White Male [Piano]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/sQEihEB-Tfo/mqdefault.jpg",
        title: "Kill Yourself [Piano]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/otmmT7A3zGw/mqdefault.jpg",
        title: "Sad [Piano]",
        source: "what.",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/OOpgiEP8xfc/mqdefault.jpg",
        title: "Drop Pop Candy",
        source: "No Title+",
        composer: "Giga-P",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/oKhE908PdXY/mqdefault.jpg",
        title: "Lower Your Expectations [Piano and Voice]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/GQk9uK1DDnM/mqdefault.jpg",
        title: "Battle Theme",
        source: "Final Fantasy X",
        composer: "Nobuo Uematsu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/QERryArA4qo/mqdefault.jpg",
        title: "Technolight",
        source: "LyricWulf Original Composition",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/tnFtK9lcJTs/mqdefault.jpg",
        title: "Kill Yourself [Piano and Voice]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/27OZgSe7WJM/mqdefault.jpg",
        title: "Disbelief",
        source: "Fanmade UNDERTALE AU",
        composer: "ROCK CANDY (DBOYD x KOMMISAR)",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/rKPuSjB1VZI/mqdefault.jpg",
        title: "Are You Happy? [Piano and Voice]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/9br9mVz9KaY/mqdefault.jpg",
        title: "With Your Drillâ€¦",
        source: "Tengen Toppa Gurren Lagann OST 1",
        composer: "Taku Iwasaki",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/VV1PCUJm8lU/mqdefault.jpg",
        title: "Quiet Water",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/94seJuUBe-E/mqdefault.jpg",
        title: "Bird That Carries You Over a Disproportionately Small Gap",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/c7FVeokCIW4/mqdefault.jpg",
        title: "Stronger Than You",
        source: "FUSION MIXTAPE",
        composer: "Rebecca Sugar",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Uu777jQw8vU/mqdefault.jpg",
        title: "Straight White Male [Piano and Voice]",
        source: "Make Happy",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/G3tWQxI-dPo/mqdefault.jpg",
        title: "Metal Crusher",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/CFGDAnelVDE/mqdefault.jpg",
        title: "Sad [Piano and Voice]",
        source: "what.",
        composer: "Bo Burnham",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ZzlSOBzOTOI/mqdefault.jpg",
        title: "Believe Me",
        source: "Steins;Gate",
        composer: "Takeshi Abo",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Vr0JrIQ8yvY/mqdefault.jpg",
        title: "Why Am I So Happy?",
        source: "Why Am I So Happy?",
        composer: "Spose",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/q8kvvAVUivU/mqdefault.jpg",
        title: "Prove It All",
        source: "LyricWulf Original Composition",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ageNKR7g55g/mqdefault.jpg",
        title: "Once Upon a Time",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/-7M0CQ0fuV4/mqdefault.jpg",
        title: "Alphys Takes Action",
        source: "Fanmade UNDERTALE AU",
        composer: "coffE K",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/y3iiJldFZ-Y/mqdefault.jpg",
        title: "Alphys",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/KlqxVi4UPb4/mqdefault.jpg",
        title: "Amalgam",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/A47tIVw-ts0/mqdefault.jpg",
        title: "Fighting",
        source: "Final Fantasy VII",
        composer: "Nobuo Uematsu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/3jNvph5ovtM/mqdefault.jpg",
        title: "Rocket Jump Waltz",
        source: "Team Fortress 2 Official Soundtrack",
        composer: "Mike Morasky",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/-7kwk7RxAYY/mqdefault.jpg",
        title: "sans.",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/-1jOzmNOlpA/mqdefault.jpg",
        title: "Dark, Darker, Yet Darker",
        source: "Fanmade UNDERTALE AU",
        composer: "The Great Anansi",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/FlC51eUBIRM/mqdefault.jpg",
        title: "Respite",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/4YklRbdcdT0/mqdefault.jpg",
        title: "Spider Dance",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Eo4vEkao_88/mqdefault.jpg",
        title: "Sweet Sugar Love",
        source: "Phyrnna",
        composer: "Phyrnna",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/vtJiP3aI6IQ/mqdefault.jpg",
        title: "Megalo Strike Back",
        source: "I Miss You - EarthBound 2012",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/yZprr3ImCiY/mqdefault.jpg",
        title: "Song That Might Play When You Fight Sans",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/96KzZ_O_nr8/mqdefault.jpg",
        title: "Cold (Short Version)",
        source: "RWBY",
        composer: "Jeff Williams",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/wCsCLdepGyQ/mqdefault.jpg",
        title: "Ooo",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Q2ED9U5eudI/mqdefault.jpg",
        title: "Spooky Scary Skeletons",
        source: "Halloween Howls",
        composer: "Andrew Gold",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Zb1K1FZ68zo/mqdefault.jpg",
        title: "Memory",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/P6lBwJbEWGc/mqdefault.jpg",
        title: "Here We Are",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/V_pKFcImjbg/mqdefault.jpg",
        title: "Friendship",
        source: "toby fox",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/eCX3OkOzR0M/mqdefault.jpg",
        title: "Walking by the sea",
        source: "Deemo, Vol.2",
        composer: "Edmud Fu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/mMJN4pcmTcg/mqdefault.jpg",
        title: "Stronger Monsters",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/uNIEWzo7Wj4/mqdefault.jpg",
        title: "Finale",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/PZvk-hz7Ik8/mqdefault.jpg",
        title: "Dancing Mad 5th Movement",
        source: "Final Fantasy VI",
        composer: "Nobuo Uematsu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/dKkRaBwsyBQ/mqdefault.jpg",
        title: "MEGALOVANIA",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/vuAVdxWMPPE/mqdefault.jpg",
        title: "Try Everything",
        source: "Zootopia",
        composer: "Shakira",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/X1xltv1OIwM/mqdefault.jpg",
        title: "His Theme",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/OugKuIXt9ig/mqdefault.jpg",
        title: "It's Raining Somewhere Else",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/HtCjh8iZpJI/mqdefault.jpg",
        title: "Fallen Down (Reprise)",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/kflpz9uU99Q/mqdefault.jpg",
        title: "Bergentrückung & ASGORE",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/pL-8ChSS4v4/mqdefault.jpg",
        title: "Final Power",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/yix8tQ13Ohs/mqdefault.jpg",
        title: "Run!",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/nMVE_YGD4wg/mqdefault.jpg",
        title: "Snowy",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/kP2Yt1j5O34/mqdefault.jpg",
        title: "An Ending",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/J9-yo3j6erk/mqdefault.jpg",
        title: "Sigh of Dog",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/5gMBfKNGXww/mqdefault.jpg",
        title: "Snowdin Town",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/R97Eo63W0l8/mqdefault.jpg",
        title: "Anticipation & Enemy Approaching",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Yuxees4a4DE/mqdefault.jpg",
        title: "Hopes and Dreams & Last Goodbye",
        source: "UNDERTALE Soundtrack",
        composer: "toby fox",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/EEl6Cql0LWk/mqdefault.jpg",
        title: "Where",
        source: "LyricWulf Original Composition",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/1NqEVEAgigA/mqdefault.jpg",
        title: "We Are the Crystal Gems",
        source: "Steven Universe",
        composer: "Rebecca Sugar, Aivi & Surasshu",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/vyAY78lb9bU/mqdefault.jpg",
        title: "Randall [Piano]",
        source: "Brave Frontier",
        composer: "Hikoshi Hashimoto",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/FcNIleFnRK4/mqdefault.jpg",
        title: "Randall [Full Score]",
        source: "Brave Frontier",
        composer: "Hikoshi Hashimoto",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/-zMlycr-LJo/mqdefault.jpg",
        title: "Chasing Cars",
        source: "Eyes Open",
        composer: "Snow Patrol",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/HOT7YZpl8xM/mqdefault.jpg",
        title: "Kimi wa Wasurerareru no",
        source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
        composer: "Masaru Yokoyama",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/TrpCK0Q6wAY/mqdefault.jpg",
        title: "Sister Rust",
        source: "Lucy",
        composer: "Damon Albarn",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/CXqJhS0vmxA/mqdefault.jpg",
        title: "Last Battle ",
        source: "Cave Story",
        composer: "Daisuke Amaya",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/f2qlB-kRj5c/mqdefault.jpg",
        title: "Blackout",
        source: "Hell Is What You Make It",
        composer: "Breathe Carolina",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/Kei-nTdHuaA/mqdefault.jpg",
        title: "Home of the Blues",
        source: "Owl City Cover",
        composer: "Owl City",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/p3-MYUxTsic/mqdefault.jpg",
        title: "ReWel",
        source: "Catalyst",
        composer: "Tristam & Rogue",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/KjdbqrUI-KE/mqdefault.jpg",
        title: "InGame Theme",
        source: "Castles II: Siege and Conquest",
        composer: "Charles Deenen",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/2SJOboPkRgY/mqdefault.jpg",
        title: "Hero's End",
        source: "Cave Story",
        composer: "Daisuke Amaya",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/iXndMLBSNGQ/mqdefault.jpg",
        title: "Quantus",
        source: "LyricWulf Original Composition",
        composer: "LyricWulf",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/z5j_rI3JeSQ/mqdefault.jpg",
        title: "Unused Track 1",
        source: "Clannad",
        composer: "Shinji Orito",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/594VKbWySFU/mqdefault.jpg",
        title: "Gypsy Dance",
        source: "Joseph Compello",
        composer: "Joseph Compello",
        transcriber: "LyricWulf"
    },
    {
        img: "https://img.youtube.com/vi/ysWv8SJ0bDk/mqdefault.jpg",
        title: "Shy Violet",
        source: "All Things Bright and Beautiful",
        composer: "Owl City",
        transcriber: "LyricWulf"
    }
];
/* harmony default export */ __webpack_exports__["default"] = (SONGS);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Programing\Lyric\angular2\desktop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map