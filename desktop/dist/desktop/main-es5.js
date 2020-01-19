function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nz-layout>\n  <nz-header [style.top]=\"-headerOffset + 'px'\">\n    <app-header [isFloating]=\"headerOffset === 0\"></app-header>\n  </nz-header>\n  <nz-content>\n    <app-midi-background [notes]=\"notes\"></app-midi-background>\n    <div id=\"jumbotron\" #jumbotron>\n      <nz-carousel nzAutoPlay>\n        <div nz-carousel-content *ngFor=\"let index of [1, 2, 3, 4, 5, 6]\">\n          <h3>{{ index }}</h3>\n        </div>\n      </nz-carousel>\n      <div id=\"jumbotron-logo\">\n        <img src=\"assets/img/yt_lyric.png\" />\n      </div>\n    </div>\n    <app-songs-menu [songs]=\"songs\"></app-songs-menu>\n  </nz-content>\n  <nz-footer>\n    Footer (applay footer piano to fit the midi notes of the background)\n  </nz-footer>\n</nz-layout>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"header-content\" nz-row>\n  <div nz-col nzSpan=\"8\">\n    {{ isFloating ? \"floating\" : \"fixed\" }} Header!\n  </div>\n  <div nz-col nzSpan=\"8\">\n    <nz-input-group [nzPrefix]=\"suffixIconSearch\">\n      <input type=\"text\" nz-input placeholder=\"Search... (does not work yet)\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <i id=\"suffix-icon-search\" nz-icon nzType=\"search\" (click)=\"log()\"></i>\n    </ng-template>\n  </div>\n  <div nz-col nzSpan=\"8\" style=\"text-align: end;\">Get In Touch!</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJumbotronJumbotronComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>jumbotron works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMidiBackgroundMidiBackgroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"midi-container\">\r\n  <!-- TODO: use real MIDI notes -->\r\n  <div\r\n    *ngFor=\"let note of notes\"\r\n    [style.left]=\"15 * note.noteType + 'px'\"\r\n    [style.bottom]=\"note.timing * 3 + 'px'\"\r\n    [style.height]=\"note.length * 2 + 'px'\"\r\n    class=\"midi-note\"\r\n  ></div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSongsMenuSongCardCardDrawerCardDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>card-drawer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSongsMenuSongCardSongCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nz-card [nzCover]=\"coverTemplate\" [nzActions]=\"[actionDownload, actionShare]\">\n  <nz-card-meta\n    [nzTitle]=\"song.title\"\n    [nzDescription]=\"true ? cardDescription : false\"\n  >\n    <ng-template #cardDescription>\n      <div\n        class=\"card-description\"\n        nz-tooltip\n        nzTooltipTitle=\"prompt text\"\n        [title]=\"song.source\"\n      >\n        {{ song.source }}\n      </div>\n      <div\n        class=\"drawer bottom download-drawer\"\n        [class.drawn]=\"openedDrawer === DRAWERS.DOWNLOAD\"\n      >\n        <div nz-rownzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\" [href]=\"'https://lyricwulf.com/songs/' + song.urlId + '/download/pdf'\">\n            <i nz-icon nzType=\"file-pdf\" nzTheme=\"outline\"></i>\n            <span>Sheets (PDF)</span>\n          </a>\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\" [href]=\"'https://lyricwulf.com/songs/' + song.urlId + '/download/mid'\">\n            <i nz-icon nzType=\"file-markdown\" nzTheme=\"outline\"></i>\n            <span>MIDI</span>\n          </a>\n        </div>\n        <div nz-row nzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a nz-col nzSpan=\"12\">\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>\n            <span>Play MP3 (not done)</span>\n          </a>\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"12\"\n            [href]=\"'https://www.youtube.com/watch?v=' + song.youtubeId\"\n          >\n            <i nz-icon nzType=\"youtube\" nzTheme=\"outline\"></i>\n            <span>YouTube</span>\n          </a>\n        </div>\n      </div>\n      <div\n        class=\"drawer top share-drawer\"\n        [class.drawn]=\"openedDrawer === DRAWERS.SHARE\"\n      >\n        <div nz-rownzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://pinterest.com/pin/create/bookmarklet/?media=LyricWulf&amp;url=https://lyricwulf.com/songs/' + song.urlId + '&amp;is_video=false&amp;description=Lyricwulf%27s arrangement of ' + song.title\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/Pinterest.svg\"\n              alt=\"Pinterest\"\n              class=\"responsive-img\"\n              style=\"background-color: #bd081c;\"\n            />\n          </a>\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://www.reddit.com/submit?url=https://lyricwulf.com/songs/' + song.urlId + '&amp;title=Lyricwulf%27s arrangement of ' + song.title\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/Reddit.svg\"\n              alt=\"Reddit\"\n              class=\"responsive-img\"\n              style=\"background-color: orangered;\"\n            />\n          </a>\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://twitter.com/intent/tweet?status=Lyricwulf%27s arrangement of ' + song.title + '+https://lyricwulf.com/songs/' + song.urlId\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/Twitter.svg\"\n              alt=\"Twitter\"\n              class=\"responsive-img\"\n              style=\"background-color: #55acee;\"\n            />\n          </a>\n        </div>\n        <div nz-rownzType=\"flex\">\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://www.facebook.com/sharer/sharer.php?u=https://lyricwulf.com/songs/' + song.urlId + '&amp;title=Lyricwulf%27s arrangement of ' + song.title\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/Facebook.svg\"\n              alt=\"Facebook\"\n              class=\"responsive-img\"\n              style=\"background-color: #3a5a99;\"\n            />\n          </a>\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://www.tumblr.com/share?v=3&amp;u=https://lyricwulf.com/songs/' + song.urlId + '&amp;t=LyricWulf%27s arrangement of ' + song.title\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/Tumblr.svg\"\n              alt=\"Tumblr\"\n              class=\"responsive-img\"\n              style=\"background-color: #3b445c;\"\n            />\n          </a>\n          <!-- TODO: add id to the link -->\n          <a\n            nz-col\n            nzSpan=\"8\"\n            [href]=\"'https://wa.me/?text=Lyricwulf%27s arrangement of ' + song.title + ':%0Ahttps://lyricwulf.com/songs/' + song.urlId\"\n            class=\"waves-effect waves-light\"\n          >\n            <img\n              src=\"assets/img/icons/WhatsApp.svg\"\n              alt=\"WhatsApp\"\n              class=\"responsive-img\"\n              style=\"background-color: #45d354;\"\n            />\n          </a>\n        </div>\n      </div>\n    </ng-template>\n  </nz-card-meta>\n</nz-card>\n<ng-template #coverTemplate>\n  <!-- TODO: add id to the link -->\n  <a class=\"card-cover-image-overlay\" [href]=\"'https://lyricwulf.com/songs/' + song.urlId\">\n    <div>\n      <div>\n        Open Song Page\n      </div>\n    </div>\n  </a>\n  <div\n    class=\"card-cover-image\"\n    [style.background-image]=\"\n      'url(https://img.youtube.com/vi/' + song.youtubeId + '/mqdefault.jpg)'\n    \"\n  ></div>\n</ng-template>\n<ng-template #actionDownload>\n  <i nz-icon nzType=\"download\" (click)=\"toggleDrawer(DRAWERS.DOWNLOAD)\"></i>\n</ng-template>\n<ng-template #actionShare>\n  <i nz-icon nzType=\"share-alt\" (click)=\"toggleDrawer(DRAWERS.SHARE)\"></i>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSongsMenuSongsMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nz-list\n  [nzDataSource]=\"songs\"\n  [nzRenderItem]=\"item\"\n  [nzGrid]=\"{ gutter: 16, xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }\"\n>\n  <ng-template #item let-item>\n    <nz-list-item [nzContent]=\"nzContent\">\n      <ng-template #nzContent>\n        <app-song-card [song]=\"item\"></app-song-card>\n      </ng-template>\n    </nz-list-item>\n  </ng-template>\n</nz-list>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nz-header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 1; /* Dammit I hate z-index, but we need it so the header would be above the content. */\r\n  padding: 0; /* Override AntD header padding */\r\n  -webkit-transition: top 0.2s ease-in-out;\r\n  transition: top 0.2s ease-in-out;\r\n  -webkit-transition: top 0.2s cubic-bezier(0.8, 0, 0.2, 1);\r\n  transition: top 0.2s cubic-bezier(0.8, 0, 0.2, 1);\r\n}\r\nnz-content {\r\n  position: relative;\r\n  background: #192129;\r\n}\r\n#jumbotron-logo {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  width: 64px;\r\n  pointer-events: visible;\r\n  border-radius: 50%;\r\n}\r\n#jumbotron-logo > img {\r\n  width: 64px;\r\n  border-radius: 50%;\r\n}\r\n#songs-content {\r\n  padding: 15px 10vw 5px;\r\n}\r\n[nz-carousel-content] {\r\n  text-align: center;\r\n  height: 260px;\r\n  line-height: 160px;\r\n  background: #33538e;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBRSxvRkFBb0Y7RUFDaEcsVUFBVSxFQUFFLGlDQUFpQztFQUM3Qyx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQ2hDLHlEQUFpRDtFQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB6LWluZGV4OiAxOyAvKiBEYW1taXQgSSBoYXRlIHotaW5kZXgsIGJ1dCB3ZSBuZWVkIGl0IHNvIHRoZSBoZWFkZXIgd291bGQgYmUgYWJvdmUgdGhlIGNvbnRlbnQuICovXHJcbiAgcGFkZGluZzogMDsgLyogT3ZlcnJpZGUgQW50RCBoZWFkZXIgcGFkZGluZyAqL1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjgsIDAsIDAuMiwgMSk7XHJcbn1cclxubnotY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMxOTIxMjk7XHJcbn1cclxuI2p1bWJvdHJvbi1sb2dvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNqdW1ib3Ryb24tbG9nbyA+IGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNzb25ncy1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDEwdncgNXB4O1xyXG59XHJcbltuei1jYXJvdXNlbC1jb250ZW50XSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMzUzOGU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _songs_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./songs.json */
    "./src/app/songs.json.ts");
    /* harmony import */


    var _midiNotes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./midiNotes.json */
    "./src/app/midiNotes.json.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "desktop";
        this.songs = _songs_json__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.notes = _midiNotes_json__WEBPACK_IMPORTED_MODULE_3__["default"]; // How much should the header be above the page in pixles.

        this.headerOffset = 100;
      } // Set an event listener for when the user scrolls the page.


      _createClass(AppComponent, [{
        key: "onScroll",
        value: function onScroll(event) {
          // The window's scroll event current target should always be the window.
          if (event.currentTarget === window) {
            var scrollTop = event.currentTarget.scrollY; // Set the header to the top of the page when scrolling past the height of the jumbotron.

            var headerThreshold = this.jambotron.nativeElement.offsetHeight;
            this.headerOffset = scrollTop > headerThreshold ? 0 : headerThreshold;
          } else {
            console.error("window scroll event current target is not the window");
          }
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("jumbotron", {
      static: true
    })], AppComponent.prototype, "jambotron", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"]) // for window scroll events
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "./node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _midi_background_midi_background_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./midi-background/midi-background.component */
    "./src/app/midi-background/midi-background.component.ts");
    /* harmony import */


    var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./jumbotron/jumbotron.component */
    "./src/app/jumbotron/jumbotron.component.ts");
    /* harmony import */


    var _songs_menu_songs_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./songs-menu/songs-menu.component */
    "./src/app/songs-menu/songs-menu.component.ts");
    /* harmony import */


    var _songs_menu_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./songs-menu/song-card/song-card.component */
    "./src/app/songs-menu/song-card/song-card.component.ts");
    /* harmony import */


    var _songs_menu_song_card_card_drawer_card_drawer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./songs-menu/song-card/card-drawer/card-drawer.component */
    "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _midi_background_midi_background_component__WEBPACK_IMPORTED_MODULE_12__["MidiBackgroundComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_13__["JumbotronComponent"], _songs_menu_songs_menu_component__WEBPACK_IMPORTED_MODULE_14__["SongsMenuComponent"], _songs_menu_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_15__["SongCardComponent"], _songs_menu_song_card_card_drawer_card_drawer_component__WEBPACK_IMPORTED_MODULE_16__["CardDrawerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["en_US"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#header-content {\r\n  padding: 0 10px;\r\n  background: #2378c7;\r\n  color: white;\r\n}\r\n#suffix-icon-search {\r\n  cursor: pointer; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjM3OGM3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jc3VmZml4LWljb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "log",
        value: function log() {
          console.log(1);
        }
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "isFloating", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/jumbotron/jumbotron.component.css":
  /*!***************************************************!*\
    !*** ./src/app/jumbotron/jumbotron.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJumbotronJumbotronComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/jumbotron/jumbotron.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/jumbotron/jumbotron.component.ts ***!
    \**************************************************/

  /*! exports provided: JumbotronComponent */

  /***/
  function srcAppJumbotronJumbotronComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function () {
      return JumbotronComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JumbotronComponent =
    /*#__PURE__*/
    function () {
      function JumbotronComponent() {
        _classCallCheck(this, JumbotronComponent);
      }

      _createClass(JumbotronComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JumbotronComponent;
    }();

    JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jumbotron',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jumbotron.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/jumbotron/jumbotron.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jumbotron.component.css */
      "./src/app/jumbotron/jumbotron.component.css")).default]
    })], JumbotronComponent);
    /***/
  },

  /***/
  "./src/app/midi-background/midi-background.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/midi-background/midi-background.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMidiBackgroundMidiBackgroundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n            flex-direction: column-reverse;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.midi-note {\r\n  position: absolute;\r\n  /* Length */\r\n  --note-length: 100;\r\n  height: calc(1px * var(--note-length));\r\n  width: 15px;\r\n  /* Timing */\r\n  --note-timing: 1300;\r\n  bottom: calc(1px * var(--note-timing));\r\n  /* Note */\r\n  --thick: 15px;\r\n  left: 50px;\r\n  /* Channel */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#e64646), to(#e446bf));\r\n  background: linear-gradient(to bottom, #e64646, #e446bf);\r\n  box-shadow: 0 -20px 30px #e64646, 0 20px 30px #e446bf;\r\n  border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkaS1iYWNrZ3JvdW5kL21pZGktYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUE4QjtJQUE5Qiw4QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWix1RkFBd0Q7RUFBeEQsd0RBQXdEO0VBQ3hELHFEQUFxRDtFQUNyRCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9taWRpLWJhY2tncm91bmQvbWlkaS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1pZGktbm90ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIExlbmd0aCAqL1xyXG4gIC0tbm90ZS1sZW5ndGg6IDEwMDtcclxuICBoZWlnaHQ6IGNhbGMoMXB4ICogdmFyKC0tbm90ZS1sZW5ndGgpKTtcclxuICB3aWR0aDogMTVweDtcclxuICAvKiBUaW1pbmcgKi9cclxuICAtLW5vdGUtdGltaW5nOiAxMzAwO1xyXG4gIGJvdHRvbTogY2FsYygxcHggKiB2YXIoLS1ub3RlLXRpbWluZykpO1xyXG4gIC8qIE5vdGUgKi9cclxuICAtLXRoaWNrOiAxNXB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgLyogQ2hhbm5lbCAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlNjQ2NDYsICNlNDQ2YmYpO1xyXG4gIGJveC1zaGFkb3c6IDAgLTIwcHggMzBweCAjZTY0NjQ2LCAwIDIwcHggMzBweCAjZTQ0NmJmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/midi-background/midi-background.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/midi-background/midi-background.component.ts ***!
    \**************************************************************/

  /*! exports provided: MidiBackgroundComponent */

  /***/
  function srcAppMidiBackgroundMidiBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MidiBackgroundComponent", function () {
      return MidiBackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MidiBackgroundComponent =
    /*#__PURE__*/
    function () {
      function MidiBackgroundComponent() {
        _classCallCheck(this, MidiBackgroundComponent);
      }

      _createClass(MidiBackgroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MidiBackgroundComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MidiBackgroundComponent.prototype, "notes", void 0);
    MidiBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-midi-background",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./midi-background.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/midi-background/midi-background.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./midi-background.component.css */
      "./src/app/midi-background/midi-background.component.css")).default]
    })], MidiBackgroundComponent);
    /***/
  },

  /***/
  "./src/app/midiNotes.json.ts":
  /*!***********************************!*\
    !*** ./src/app/midiNotes.json.ts ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppMidiNotesJsonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var NOTES = [{
      noteType: 52,
      timing: 1815,
      length: 80
    }, {
      noteType: 69,
      timing: 2993,
      length: 140
    }, {
      noteType: 64,
      timing: 4822,
      length: 100
    }, {
      noteType: 23,
      timing: 1227,
      length: 230
    }, {
      noteType: 5,
      timing: 1657,
      length: 110
    }, {
      noteType: 4,
      timing: 41,
      length: 180
    }, {
      noteType: 28,
      timing: 4505,
      length: 200
    }, {
      noteType: 77,
      timing: 2306,
      length: 190
    }, {
      noteType: 59,
      timing: 2029,
      length: 50
    }, {
      noteType: 79,
      timing: 1888,
      length: 140
    }, {
      noteType: 45,
      timing: 3047,
      length: 110
    }, {
      noteType: 87,
      timing: 2979,
      length: 210
    }, {
      noteType: 66,
      timing: 4135,
      length: 180
    }, {
      noteType: 28,
      timing: 846,
      length: 70
    }, {
      noteType: 78,
      timing: 4879,
      length: 100
    }, {
      noteType: 73,
      timing: 2400,
      length: 220
    }, {
      noteType: 15,
      timing: 1608,
      length: 230
    }, {
      noteType: 75,
      timing: 2739,
      length: 190
    }, {
      noteType: 6,
      timing: 3750,
      length: 20
    }, {
      noteType: 28,
      timing: 666,
      length: 140
    }, {
      noteType: 13,
      timing: 690,
      length: 10
    }, {
      noteType: 85,
      timing: 4402,
      length: 90
    }, {
      noteType: 28,
      timing: 3743,
      length: 160
    }, {
      noteType: 45,
      timing: 1815,
      length: 190
    }, {
      noteType: 2,
      timing: 4481,
      length: 10
    }, {
      noteType: 61,
      timing: 4880,
      length: 150
    }, {
      noteType: 20,
      timing: 3178,
      length: 140
    }, {
      noteType: 81,
      timing: 17,
      length: 230
    }, {
      noteType: 22,
      timing: 1835,
      length: 220
    }, {
      noteType: 11,
      timing: 4376,
      length: 10
    }, {
      noteType: 39,
      timing: 2756,
      length: 120
    }, {
      noteType: 62,
      timing: 1041,
      length: 60
    }, {
      noteType: 53,
      timing: 4560,
      length: 40
    }, {
      noteType: 54,
      timing: 3789,
      length: 10
    }, {
      noteType: 48,
      timing: 4803,
      length: 30
    }, {
      noteType: 40,
      timing: 1013,
      length: 140
    }, {
      noteType: 19,
      timing: 1166,
      length: 230
    }, {
      noteType: 85,
      timing: 3948,
      length: 30
    }, {
      noteType: 5,
      timing: 4350,
      length: 220
    }, {
      noteType: 65,
      timing: 3607,
      length: 170
    }, {
      noteType: 30,
      timing: 367,
      length: 40
    }, {
      noteType: 65,
      timing: 1380,
      length: 170
    }, {
      noteType: 85,
      timing: 2508,
      length: 200
    }, {
      noteType: 47,
      timing: 2565,
      length: 100
    }, {
      noteType: 33,
      timing: 1863,
      length: 110
    }, {
      noteType: 78,
      timing: 2754,
      length: 100
    }, {
      noteType: 88,
      timing: 116,
      length: 60
    }, {
      noteType: 24,
      timing: 3604,
      length: 160
    }, {
      noteType: 81,
      timing: 285,
      length: 240
    }, {
      noteType: 82,
      timing: 920,
      length: 110
    }, {
      noteType: 9,
      timing: 4030,
      length: 120
    }, {
      noteType: 57,
      timing: 1861,
      length: 10
    }, {
      noteType: 73,
      timing: 3823,
      length: 240
    }, {
      noteType: 19,
      timing: 3182,
      length: 230
    }, {
      noteType: 32,
      timing: 1371,
      length: 170
    }, {
      noteType: 33,
      timing: 3956,
      length: 50
    }, {
      noteType: 44,
      timing: 1988,
      length: 150
    }, {
      noteType: 45,
      timing: 471,
      length: 240
    }, {
      noteType: 71,
      timing: 755,
      length: 180
    }, {
      noteType: 2,
      timing: 3389,
      length: 0
    }, {
      noteType: 66,
      timing: 1899,
      length: 130
    }, {
      noteType: 51,
      timing: 3170,
      length: 0
    }, {
      noteType: 10,
      timing: 2846,
      length: 220
    }, {
      noteType: 13,
      timing: 2366,
      length: 40
    }, {
      noteType: 14,
      timing: 1359,
      length: 190
    }, {
      noteType: 22,
      timing: 2004,
      length: 90
    }, {
      noteType: 82,
      timing: 4634,
      length: 190
    }, {
      noteType: 41,
      timing: 4852,
      length: 80
    }, {
      noteType: 82,
      timing: 2736,
      length: 230
    }, {
      noteType: 85,
      timing: 4174,
      length: 140
    }, {
      noteType: 46,
      timing: 2477,
      length: 60
    }, {
      noteType: 78,
      timing: 3247,
      length: 80
    }, {
      noteType: 10,
      timing: 3818,
      length: 70
    }, {
      noteType: 30,
      timing: 2031,
      length: 160
    }, {
      noteType: 72,
      timing: 4520,
      length: 50
    }, {
      noteType: 6,
      timing: 115,
      length: 200
    }, {
      noteType: 44,
      timing: 2901,
      length: 100
    }, {
      noteType: 28,
      timing: 554,
      length: 60
    }, {
      noteType: 86,
      timing: 3702,
      length: 210
    }, {
      noteType: 19,
      timing: 25,
      length: 210
    }, {
      noteType: 14,
      timing: 1882,
      length: 190
    }, {
      noteType: 48,
      timing: 3367,
      length: 120
    }, {
      noteType: 48,
      timing: 3537,
      length: 100
    }, {
      noteType: 26,
      timing: 1247,
      length: 70
    }, {
      noteType: 16,
      timing: 3796,
      length: 160
    }, {
      noteType: 80,
      timing: 3886,
      length: 150
    }, {
      noteType: 29,
      timing: 4072,
      length: 170
    }, {
      noteType: 63,
      timing: 3532,
      length: 20
    }, {
      noteType: 15,
      timing: 1373,
      length: 120
    }, {
      noteType: 45,
      timing: 973,
      length: 60
    }, {
      noteType: 12,
      timing: 406,
      length: 10
    }, {
      noteType: 43,
      timing: 3164,
      length: 70
    }, {
      noteType: 44,
      timing: 3658,
      length: 40
    }, {
      noteType: 66,
      timing: 4410,
      length: 0
    }, {
      noteType: 45,
      timing: 2181,
      length: 80
    }, {
      noteType: 79,
      timing: 4472,
      length: 160
    }, {
      noteType: 40,
      timing: 4199,
      length: 150
    }, {
      noteType: 52,
      timing: 632,
      length: 80
    }, {
      noteType: 42,
      timing: 3829,
      length: 100
    }, {
      noteType: 77,
      timing: 919,
      length: 70
    }];
    /* harmony default export */

    __webpack_exports__["default"] = NOTES;
    /***/
  },

  /***/
  "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSongsMenuSongCardCardDrawerCardDrawerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawer {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -100%;\r\n    -webkit-transition: bottom 0.2s ease-out;\r\n    transition: bottom 0.2s ease-out;\r\n    background-color: white;\r\n  }\r\n  .drawer.drawn {\r\n    bottom: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25nLWNhcmQvY2FyZC1kcmF3ZXIvY2FyZC1kcmF3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9zb25ncy1tZW51L3NvbmctY2FyZC9jYXJkLWRyYXdlci9jYXJkLWRyYXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4ycyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZHJhd2VyLmRyYXduIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/songs-menu/song-card/card-drawer/card-drawer.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CardDrawerComponent */

  /***/
  function srcAppSongsMenuSongCardCardDrawerCardDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDrawerComponent", function () {
      return CardDrawerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardDrawerComponent =
    /*#__PURE__*/
    function () {
      function CardDrawerComponent() {
        _classCallCheck(this, CardDrawerComponent);
      }

      _createClass(CardDrawerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardDrawerComponent;
    }();

    CardDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-drawer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-drawer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/card-drawer/card-drawer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-drawer.component.css */
      "./src/app/songs-menu/song-card/card-drawer/card-drawer.component.css")).default]
    })], CardDrawerComponent);
    /***/
  },

  /***/
  "./src/app/songs-menu/song-card/song-card.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/songs-menu/song-card/song-card.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSongsMenuSongCardSongCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nz-card {\r\n  max-width: 350px;\r\n  margin: auto;\r\n}\r\n\r\nnz-card > ::ng-deep.ant-card-cover {\r\n  position: relative;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card-cover-image-overlay {\r\n  cursor: pointer;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n\r\n.card-cover-image-overlay > div {\r\n  position: relative;\r\n  height: 50%;\r\n  width: 100%;\r\n\r\n  /* Locate the ... above the overlay (=negetive the height) */\r\n  top: -50%;\r\n  /* Give the element a border radius from the bottom (50%) to the left and\r\n     right borders of the element (default value 0 - no border radius) */\r\n  border-bottom-right-radius: 50% 0;\r\n  border-bottom-left-radius: 50% 0;\r\n  /* The transition for the top and border values for when the overlay is hovered */\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n\r\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%, white), to(hsla(0, 0%, 100%, 0.6)));\r\n\r\n  background: linear-gradient(white 50%, hsla(0, 0%, 100%, 0.6));\r\n}\r\n\r\n.card-cover-image-overlay:hover > div {\r\n  /* Locate the ... within the overlay (=negetive half of the height) */\r\n  top: -25%;\r\n  /* Round the borders all the way to the middle of the ... (50%) */\r\n  border-bottom-right-radius: 50% 50%;\r\n  border-bottom-left-radius: 50% 50%;\r\n}\r\n\r\n.card-cover-image-overlay > div > div {\r\n  /* Position the ... in lower half of the ... */\r\n  position: relative;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: -50%;\r\n  height: 50%;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  /* Center the content/text of the ... */\r\n  align-content: center;\r\n  text-align: center;\r\n  /* Pad the bottom of the ... by half of the font size */\r\n  padding-bottom: 0.5em;\r\n\r\n  color: hsla(0, 0%, 30%, 1);\r\n  font-weight: 700; /* bold */\r\n  /* Do not allow the user to select the text (it's annoying) */\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nnz-card > ::ng-deep.ant-card-body {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Make the icons in the card actions to take the whole space,\r\n   because only the icons can invoke a click event. */\r\n\r\n:host ::ng-deep.ant-card-actions > li {\r\n  margin: 0;\r\n}\r\n\r\n:host ::ng-deep.ant-card-actions > li > span {\r\n  width: 100%;\r\n}\r\n\r\n:host ::ng-deep.ant-card-actions > li > span > i {\r\n  width: inherit;\r\n  padding: 9px 0;\r\n}\r\n\r\n.card-description {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: gray;\r\n}\r\n\r\n.card-cover-image {\r\n  height: 150px;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-color: #fff;\r\n}\r\n\r\n.drawer {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  -webkit-transition: left 0.2s ease-out, top 0.2s ease-out;\r\n  transition: left 0.2s ease-out, top 0.2s ease-out;\r\n  background-color: white;\r\n}\r\n\r\n.drawer.top {\r\n  top: -100%;\r\n}\r\n\r\n.drawer.bottom {\r\n  top: 100%;\r\n}\r\n\r\n.drawer.left {\r\n  left: -100%;\r\n}\r\n\r\n.drawer.right {\r\n  left: 100%;\r\n}\r\n\r\n.drawer.drawn {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.download-drawer > div,\r\n.share-drawer > div {\r\n  height: 50%;\r\n}\r\n\r\n.download-drawer > div > a,\r\n.share-drawer > div > a {\r\n  height: 100%;\r\n  -webkit-transition: box-shadow 0.1s ease-in-out;\r\n  transition: box-shadow 0.1s ease-in-out;\r\n}\r\n\r\n.download-drawer > div > a:hover,\r\n.share-drawer > div > a:hover {\r\n  z-index: 1; /* z-index for apearing in front of sibling elements. */\r\n  box-shadow: 0px 0px 4px 3px #0000004d;\r\n}\r\n\r\n.share-drawer > div > a > img {\r\n  height: 100%;\r\n  /* margin: auto; */\r\n  width: 100%;\r\n}\r\n\r\ni[nz-icon] {\r\n  color: #1890ff;\r\n  -webkit-transition: -webkit-filter 0.2s ease-in-out;\r\n  transition: -webkit-filter 0.2s ease-in-out;\r\n  transition: filter 0.2s ease-in-out;\r\n  transition: filter 0.2s ease-in-out, -webkit-filter 0.2s ease-in-out;\r\n}\r\n\r\ni[nz-icon]:hover {\r\n  -webkit-filter: drop-shadow(0px 0px 1px #1890ffaa);\r\n          filter: drop-shadow(0px 0px 1px #1890ffaa);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25nLWNhcmQvc29uZy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXOztFQUVYLDREQUE0RDtFQUM1RCxTQUFTO0VBQ1Q7d0VBQ3NFO0VBQ3RFLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsaUZBQWlGO0VBQ2pGLHdDQUFnQztFQUFoQyxnQ0FBZ0M7O0VBRWhDLCtHQUE4RDs7RUFBOUQsOERBQThEO0FBQ2hFOztBQUNBO0VBQ0UscUVBQXFFO0VBQ3JFLFNBQVM7RUFDVCxpRUFBaUU7RUFDakUsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVzs7RUFFWCxvQkFBYTs7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix1REFBdUQ7RUFDdkQscUJBQXFCOztFQUVyQiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUUsU0FBUztFQUMzQiw2REFBNkQ7RUFDN0QseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtxREFDcUQ7O0FBQ3JEO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTix5REFBaUQ7RUFBakQsaURBQWlEO0VBQ2pELHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUNBOztFQUVFLFlBQVk7RUFDWiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0FBQ3pDOztBQUNBOztFQUVFLFVBQVUsRUFBRSx1REFBdUQ7RUFDbkUscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbURBQW1DO0VBQW5DLDJDQUFtQztFQUFuQyxtQ0FBbUM7RUFBbkMsb0VBQW1DO0FBQ3JDOztBQUNBO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL3NvbmdzLW1lbnUvc29uZy1jYXJkL3NvbmctY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm56LWNhcmQgPiA6Om5nLWRlZXAuYW50LWNhcmQtY292ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuLmNhcmQtY292ZXItaW1hZ2Utb3ZlcmxheSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNhcmQtY292ZXItaW1hZ2Utb3ZlcmxheSA+IGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvKiBMb2NhdGUgdGhlIC4uLiBhYm92ZSB0aGUgb3ZlcmxheSAoPW5lZ2V0aXZlIHRoZSBoZWlnaHQpICovXHJcbiAgdG9wOiAtNTAlO1xyXG4gIC8qIEdpdmUgdGhlIGVsZW1lbnQgYSBib3JkZXIgcmFkaXVzIGZyb20gdGhlIGJvdHRvbSAoNTAlKSB0byB0aGUgbGVmdCBhbmRcclxuICAgICByaWdodCBib3JkZXJzIG9mIHRoZSBlbGVtZW50IChkZWZhdWx0IHZhbHVlIDAgLSBubyBib3JkZXIgcmFkaXVzKSAqL1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCUgMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCUgMDtcclxuICAvKiBUaGUgdHJhbnNpdGlvbiBmb3IgdGhlIHRvcCBhbmQgYm9yZGVyIHZhbHVlcyBmb3Igd2hlbiB0aGUgb3ZlcmxheSBpcyBob3ZlcmVkICovXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSA1MCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuNikpO1xyXG59XHJcbi5jYXJkLWNvdmVyLWltYWdlLW92ZXJsYXk6aG92ZXIgPiBkaXYge1xyXG4gIC8qIExvY2F0ZSB0aGUgLi4uIHdpdGhpbiB0aGUgb3ZlcmxheSAoPW5lZ2V0aXZlIGhhbGYgb2YgdGhlIGhlaWdodCkgKi9cclxuICB0b3A6IC0yNSU7XHJcbiAgLyogUm91bmQgdGhlIGJvcmRlcnMgYWxsIHRoZSB3YXkgdG8gdGhlIG1pZGRsZSBvZiB0aGUgLi4uICg1MCUpICovXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJSA1MCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlIDUwJTtcclxufVxyXG4uY2FyZC1jb3Zlci1pbWFnZS1vdmVybGF5ID4gZGl2ID4gZGl2IHtcclxuICAvKiBQb3NpdGlvbiB0aGUgLi4uIGluIGxvd2VyIGhhbGYgb2YgdGhlIC4uLiAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogLTUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIENlbnRlciB0aGUgY29udGVudC90ZXh0IG9mIHRoZSAuLi4gKi9cclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIFBhZCB0aGUgYm90dG9tIG9mIHRoZSAuLi4gYnkgaGFsZiBvZiB0aGUgZm9udCBzaXplICovXHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG5cclxuICBjb2xvcjogaHNsYSgwLCAwJSwgMzAlLCAxKTtcclxuICBmb250LXdlaWdodDogNzAwOyAvKiBib2xkICovXHJcbiAgLyogRG8gbm90IGFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCB0aGUgdGV4dCAoaXQncyBhbm5veWluZykgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxubnotY2FyZCA+IDo6bmctZGVlcC5hbnQtY2FyZC1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4vKiBNYWtlIHRoZSBpY29ucyBpbiB0aGUgY2FyZCBhY3Rpb25zIHRvIHRha2UgdGhlIHdob2xlIHNwYWNlLFxyXG4gICBiZWNhdXNlIG9ubHkgdGhlIGljb25zIGNhbiBpbnZva2UgYSBjbGljayBldmVudC4gKi9cclxuOmhvc3QgOjpuZy1kZWVwLmFudC1jYXJkLWFjdGlvbnMgPiBsaSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcC5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAuYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiA+IGkge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDlweCAwO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbi5jYXJkLWNvdmVyLWltYWdlIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRyYXdlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZS1vdXQsIHRvcCAwLjJzIGVhc2Utb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kcmF3ZXIudG9wIHtcclxuICB0b3A6IC0xMDAlO1xyXG59XHJcbi5kcmF3ZXIuYm90dG9tIHtcclxuICB0b3A6IDEwMCU7XHJcbn1cclxuLmRyYXdlci5sZWZ0IHtcclxuICBsZWZ0OiAtMTAwJTtcclxufVxyXG4uZHJhd2VyLnJpZ2h0IHtcclxuICBsZWZ0OiAxMDAlO1xyXG59XHJcbi5kcmF3ZXIuZHJhd24ge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uZG93bmxvYWQtZHJhd2VyID4gZGl2LFxyXG4uc2hhcmUtZHJhd2VyID4gZGl2IHtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uZG93bmxvYWQtZHJhd2VyID4gZGl2ID4gYSxcclxuLnNoYXJlLWRyYXdlciA+IGRpdiA+IGEge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmRvd25sb2FkLWRyYXdlciA+IGRpdiA+IGE6aG92ZXIsXHJcbi5zaGFyZS1kcmF3ZXIgPiBkaXYgPiBhOmhvdmVyIHtcclxuICB6LWluZGV4OiAxOyAvKiB6LWluZGV4IGZvciBhcGVhcmluZyBpbiBmcm9udCBvZiBzaWJsaW5nIGVsZW1lbnRzLiAqL1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDNweCAjMDAwMDAwNGQ7XHJcbn1cclxuLnNoYXJlLWRyYXdlciA+IGRpdiA+IGEgPiBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlbbnotaWNvbl0ge1xyXG4gIGNvbG9yOiAjMTg5MGZmO1xyXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlbbnotaWNvbl06aG92ZXIge1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggIzE4OTBmZmFhKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/songs-menu/song-card/song-card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/songs-menu/song-card/song-card.component.ts ***!
    \*************************************************************/

  /*! exports provided: SongCardComponent */

  /***/
  function srcAppSongsMenuSongCardSongCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongCardComponent", function () {
      return SongCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Drawers;

    (function (Drawers) {
      Drawers[Drawers["DOWNLOAD"] = 0] = "DOWNLOAD";
      Drawers[Drawers["SHARE"] = 1] = "SHARE";
    })(Drawers || (Drawers = {}));

    var SongCardComponent =
    /*#__PURE__*/
    function () {
      function SongCardComponent() {
        _classCallCheck(this, SongCardComponent);

        this.openedDrawer = null;
        this.DRAWERS = Drawers;
      }

      _createClass(SongCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Open a drawer, if it already open, close it
         * @param drawer the enum of the drawer.
         */

      }, {
        key: "toggleDrawer",
        value: function toggleDrawer(drawer) {
          this.openedDrawer = this.openedDrawer !== drawer ? drawer : null;
        }
      }]);

      return SongCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongCardComponent.prototype, "song", void 0);
    SongCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-song-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./song-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/song-card/song-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./song-card.component.css */
      "./src/app/songs-menu/song-card/song-card.component.css")).default]
    })], SongCardComponent);
    /***/
  },

  /***/
  "./src/app/songs-menu/songs-menu.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/songs-menu/songs-menu.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSongsMenuSongsMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  display: block;\r\n  overflow-y: hidden;\r\n}\r\nnz-list {\r\n  padding: 15px 10vw 5px;\r\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\r\n  transition: -webkit-transform 0.5s ease-in-out;\r\n  transition: transform 0.5s ease-in-out;\r\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\r\n}\r\nnz-list.rolled {\r\n  -webkit-transform: translateY(-100vh);\r\n          transform: translateY(-100vh);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZ3MtbWVudS9zb25ncy1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0RBQXNDO0VBQXRDLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMsMEVBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc29uZ3MtbWVudS9zb25ncy1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbm56LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDE1cHggMTB2dyA1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxubnotbGlzdC5yb2xsZWQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/songs-menu/songs-menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/songs-menu/songs-menu.component.ts ***!
    \****************************************************/

  /*! exports provided: SongsMenuComponent */

  /***/
  function srcAppSongsMenuSongsMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongsMenuComponent", function () {
      return SongsMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SongsMenuComponent =
    /*#__PURE__*/
    function () {
      function SongsMenuComponent() {
        _classCallCheck(this, SongsMenuComponent);
      }

      _createClass(SongsMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SongsMenuComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongsMenuComponent.prototype, "songs", void 0);
    SongsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-songs-menu",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./songs-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/songs-menu/songs-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./songs-menu.component.css */
      "./src/app/songs-menu/songs-menu.component.css")).default]
    })], SongsMenuComponent);
    /***/
  },

  /***/
  "./src/app/songs.json.ts":
  /*!*******************************!*\
    !*** ./src/app/songs.json.ts ***!
    \*******************************/

  /*! exports provided: default */

  /***/
  function srcAppSongsJsonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SONGS = [{
      urlId: "etude-of-a-songbird",
      youtubeId: "P57u7-LwBfI",
      title: "Etude of a Songbird",
      source: "Breathe",
      composer: "Laura Platt",
      transcriber: "LyricWulf"
    }, {
      urlId: "goodbye-to-a-world",
      youtubeId: "6tZPKke2ugI",
      title: "Goodbye To A World",
      source: "Porter Robinson",
      composer: "Porter Robinson",
      transcriber: "LyricWulf"
    }, {
      urlId: "perfume",
      youtubeId: "EerhhZ8cZtw",
      title: "Perfume",
      source: "fusq",
      composer: "fusq",
      transcriber: "LyricWulf"
    }, {
      urlId: "hot-milk",
      youtubeId: "c54P5qA-UP0",
      title: "Hot Milk",
      source: "Snail's House",
      composer: "Snail's House",
      transcriber: "LyricWulf"
    }, {
      urlId: "super-animal-theme",
      youtubeId: "tJBtuw2Q75c",
      title: "Super Animal Theme",
      source: "Super Animal Royale",
      composer: "Jake Butineau",
      transcriber: "LyricWulf"
    }, {
      urlId: "exhale",
      youtubeId: "tOOwaMhC0BQ",
      title: "Exhale",
      source: "Celeste",
      composer: "Lena Raine",
      transcriber: "LyricWulf"
    }, {
      urlId: "sweet-sweet-canyon",
      youtubeId: "xJxFl-mcK9U",
      title: "Sweet Sweet Canyon",
      source: "Mario Kart 8",
      composer: "Shiho Fujii",
      transcriber: "LyricWulf"
    }, {
      urlId: "marble-soda",
      youtubeId: "gH8vd4PpUJ0",
      title: "Marble Soda",
      source: "Shawn Wasabi",
      composer: "Shawn Wasabi",
      transcriber: "LyricWulf"
    }, {
      urlId: "right-now",
      youtubeId: "iTUHx6kS7ws",
      title: "Right Now",
      source: "The Living Tombstone",
      composer: "The Living Tombstone",
      transcriber: "LyricWulf"
    }, {
      urlId: "rise",
      youtubeId: "5YkPSWIOViM",
      title: "RISE",
      source: "League of Legends Worlds 2018",
      composer: "The Glitch Mob, Mako and The Word Alive",
      transcriber: "LyricWulf"
    }, {
      urlId: "-catgroove-piano-cover",
      youtubeId: "rTiGD4jm67M",
      title: "Catgroove (Piano Cover)",
      source: "PandaTooth x LyricWulf",
      composer: "Parov Stelar",
      transcriber: "LyricWulf"
    }, {
      urlId: "ready-as-ill-ever-be",
      youtubeId: "Wo4zW5MsBWs",
      title: "Ready as I'll Ever Be",
      source: "Tangled: The Series",
      composer: "Alan Menken",
      transcriber: "LyricWulf"
    }, {
      urlId: "fish",
      youtubeId: "shi3yv-9n54",
      title: "Fish",
      source: "JonKaGor",
      composer: "JonKaGor",
      transcriber: "LyricWulf"
    }, {
      urlId: "rush-lyric",
      youtubeId: "iA7QEtwgti0",
      title: "Rush Lyric",
      source: "LyricWulf",
      composer: "Sheet Music Boss",
      transcriber: "LyricWulf"
    }, {
      urlId: "we-deserve-to-shine",
      youtubeId: "YqM2xuqQqm4",
      title: "We Deserve to Shine",
      source: "Steven Universe",
      composer: "Rebecca Sugar",
      transcriber: "LyricWulf"
    }, {
      urlId: "moonsetter",
      youtubeId: "LDK8i9pjtqs",
      title: "Moonsetter",
      source: "Homestuck",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "bubble-tea",
      youtubeId: "6rNG3ixpfEo",
      title: "Bubble Tea",
      source: "dark cat",
      composer: "dark cat",
      transcriber: "LyricWulf"
    }, {
      urlId: "pokemart-theme",
      youtubeId: "Uj77rXONpJ0",
      title: "PokéMart Theme",
      source: "Pokémon Ruby/Sapphire/Emerald",
      composer: "Go Ichinose",
      transcriber: "LyricWulf"
    }, {
      urlId: "paw-patrol-theme",
      youtubeId: "9cj4BHlZ2UQ",
      title: "PAW Patrol Theme",
      source: "PAW Patrol",
      composer: "Little Ditto",
      transcriber: "LyricWulf"
    }, {
      urlId: "an-unwavering-heart",
      youtubeId: "CP6VZENSe5w",
      title: "An Unwavering Heart",
      source: "Pokemon X/Y",
      composer: "Shota Kageyama",
      transcriber: "LyricWulf"
    }, {
      urlId: "hello-world",
      youtubeId: "FentCyS1O5k",
      title: "Hello World",
      source: "Louie Zong",
      composer: "Louie Zong",
      transcriber: "LyricWulf"
    }, {
      urlId: "ruby-rider",
      youtubeId: "XGYyEiAjBf8",
      title: "Ruby Rider",
      source: "Steven Universe",
      composer: "Jeff Liu",
      transcriber: "LyricWulf"
    }, {
      urlId: "tribe-of-heavenly-kami",
      youtubeId: "9jHUBuEZHbI",
      title: "Tribe of Heavenly Kami",
      source: "Ōkami",
      composer: "Rei Kondo",
      transcriber: "LyricWulf"
    }, {
      urlId: "little-one",
      youtubeId: "f_jjy5BlgjE",
      title: "Little One",
      source: "Detroit: Become Human",
      composer: "Philip Sheppard",
      transcriber: "LyricWulf"
    }, {
      urlId: "dramophone",
      youtubeId: "yR7ahR5ouZI",
      title: "Dramophone",
      source: "Caravan Palace",
      composer: "Caravan Palace",
      transcriber: "LyricWulf"
    }, {
      urlId: "odd-future",
      youtubeId: "otW95iPB_LY",
      title: "Odd Future",
      source: "My Hero Academia OP 4",
      composer: "Yuki Hayashi",
      transcriber: "LyricWulf"
    }, {
      urlId: "arstotzkan-anthem",
      youtubeId: "itQD8B90tTk",
      title: "Arstotzkan Anthem",
      source: "Papers, Please Main Theme",
      composer: "Lucas Pope",
      transcriber: "LyricWulf"
    }, {
      urlId: "pixel-galaxy",
      youtubeId: "gF-9APdJkcI",
      title: "Pixel Galaxy",
      source: "Snail's House",
      composer: "Snail's House",
      transcriber: "LyricWulf"
    }, {
      urlId: "yiay-piano-remix",
      youtubeId: "4cI8JtjIMzo",
      title: "YIAY (Piano Remix)",
      source: "Jacksfilms",
      composer: "Jacksfilms",
      transcriber: "LyricWulf"
    }, {
      urlId: "through-the-fire-and-flames",
      youtubeId: "RxIrtUvr9G4",
      title: "Through the Fire and Flames",
      source: "Dragonforce",
      composer: "Dragonforce",
      transcriber: "LyricWulf"
    }, {
      urlId: "mii-plaza",
      youtubeId: "4nGZDidTTz8",
      title: "Mii Plaza",
      source: "Mii Channel Theme",
      composer: "Kazumi Totaka",
      transcriber: "LyricWulf"
    }, {
      urlId: "the-eevee-song",
      youtubeId: "QyCsLINxijc",
      title: "The Eevee Song",
      source: "Random Encounters",
      composer: "Random Encounters",
      transcriber: "LyricWulf"
    }, {
      urlId: "issuns-theme",
      youtubeId: "m6-yxp2Cygg",
      title: "Issun's Theme",
      source: "Okami",
      composer: "Hiroshi Yamaguchi",
      transcriber: "LyricWulf"
    }, {
      urlId: "blueshift",
      youtubeId: "XOxowDPJBt8",
      title: "Blueshift",
      source: "Exurb1a",
      composer: "Exurb1a",
      transcriber: "LyricWulf"
    }, {
      urlId: "parasailing-minigame",
      youtubeId: "GegS8INc3ps",
      title: "Parasailing Minigame",
      source: "Breath of the Wild",
      composer: "Manaka Kataoka",
      transcriber: "LyricWulf"
    }, {
      urlId: "no-surprises-piano-stride",
      youtubeId: "DhljN7BbEas",
      title: "No Surprises (Piano Stride)",
      source: "Westworld",
      composer: "Ramin Djawadi",
      transcriber: "LyricWulf"
    }, {
      urlId: "cold",
      youtubeId: "gXIvln7Kwrg",
      title: "Cold",
      source: "RWBY",
      composer: "Jeff Williams",
      transcriber: "LyricWulf"
    }, {
      urlId: "shelter",
      youtubeId: "ORapqw2ru4M",
      title: "Shelter",
      source: "Porter Robinson & Madeon",
      composer: "Porter Robinson & Madeon",
      transcriber: "LyricWulf"
    }, {
      urlId: "believer",
      youtubeId: "3OKSroKAK88",
      title: "Believer",
      source: "Imagine Dragons",
      composer: "Imagine Dragons",
      transcriber: "LyricWulf"
    }, {
      urlId: "the-dog-wrestler-waltz",
      youtubeId: "10Ry2uOnXoo",
      title: "The Dog Wrestler Waltz",
      source: "Exurb1a",
      composer: "Exurb1a",
      transcriber: "LyricWulf"
    }, {
      urlId: "the-wolf",
      youtubeId: "RQmQ3xBoGeo",
      title: "The Wolf",
      source: "SIAMÉS",
      composer: "SIAMÉS",
      transcriber: "LyricWulf"
    }, {
      urlId: "battle-zinnia",
      youtubeId: "51aAXlEfwYg",
      title: "Battle! Zinnia",
      source: "Pokemon ORAS",
      composer: "Shota Kageyama",
      transcriber: "LyricWulf"
    }, {
      urlId: "otter-pop",
      youtubeId: "y8ok8geXiNk",
      title: "Otter Pop",
      source: "Shawn Wasabi",
      composer: "Shawn Wasabi",
      transcriber: "LyricWulf"
    }, {
      urlId: "phase-2",
      youtubeId: "tXFPo6LXfuU",
      title: "Phase 2",
      source: "Disbelief Papyrus",
      composer: "JimmyTheBassist",
      transcriber: "LyricWulf"
    }, {
      urlId: "lone-digger",
      youtubeId: "Gx47FE1Soww",
      title: "Lone Digger",
      source: "‹ |°_°| ›",
      composer: "Caravan Palace",
      transcriber: "LyricWulf"
    }, {
      urlId: "demolitale-main-theme",
      youtubeId: "rBeang8p74I",
      title: "Demolitale Main Theme",
      source: "Demolitale",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "the-calm",
      youtubeId: "61WsFfTzOQg",
      title: "The Calm",
      source: "LyricWulf Original Song",
      composer: "Wulfenite",
      transcriber: "LyricWulf"
    }, {
      urlId: "ironic",
      youtubeId: "JG-ujtkrdOg",
      title: "Ironic",
      source: "Words Words Words",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "forlorn",
      youtubeId: "QQB1OKkMda4",
      title: "Forlorn",
      source: "Undertale Yellow",
      composer: "MyNewSoundtrack, Master Sword",
      transcriber: "LyricWulf"
    }, {
      urlId: "final-chance",
      youtubeId: "WjyOEdFn4qg",
      title: "Final Chance",
      source: "Undertale AU",
      composer: "Fanmade UNDERTALE AU",
      transcriber: "LyricWulf"
    }, {
      urlId: "aviator",
      youtubeId: "7GwtK2DXbFk",
      title: "Aviator",
      source: "OneShot Soundtrack",
      composer: "Nightmargin",
      transcriber: "LyricWulf"
    }, {
      urlId: "moonmen",
      youtubeId: "jwjPmjqcFTI",
      title: "Moonmen",
      source: "Pocket Mortys OST",
      composer: "Ryan Elder",
      transcriber: "LyricWulf"
    }, {
      urlId: "mogolovonio-mp3",
      youtubeId: "5HZEorKnWcM",
      title: "MOGOLOVONIO.MP3",
      source: "april fool to you",
      composer: "SR POLO & TOBO FOOX",
      transcriber: "LyricWulf"
    }, {
      urlId: "niko-and-the-world-machine",
      youtubeId: "2vq--uOOpwM",
      title: "Niko and the World Machine",
      source: "OneShot Soundtrack",
      composer: "Nightmargin (Casey Gu)",
      transcriber: "LyricWulf"
    }, {
      urlId: "to-the-gateway",
      youtubeId: "p28uVJ_7tWY",
      title: "To the Gateway",
      source: "Super Mario Galaxy",
      composer: "Mahito Yokota",
      transcriber: "LyricWulf"
    }, {
      urlId: "we-are-number-one",
      youtubeId: "FD-ictCbjJA",
      title: "We Are Number One",
      source: "LazyTown",
      composer: "MÃ¡ni Svavarsson",
      transcriber: "LyricWulf"
    }, {
      urlId: "underline",
      youtubeId: "4k2DZw5S1cs",
      title: "Underline",
      source: "Fanmade UNDERTALE AU",
      composer: "Xalia",
      transcriber: "LyricWulf"
    }, {
      urlId: "megalovania-fandom-medley",
      youtubeId: "AB08g5EEcjI",
      title: "MegaloVania FANDOM MEDLEY",
      source: "Fanmade UNDERTALE AU, Homestuck, Gravity Falls, Smash, FNAF, Doctor Who, Steven Universe, Adventure Time, Gumball, and Star vs. the Forces of Evil!",
      composer: "Yan Ade",
      transcriber: "LyricWulf"
    }, {
      urlId: "ewe",
      youtubeId: "HaNAOj32TfE",
      title: "ewe",
      source: "LyricWulf Original Composition",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "champion-cynthia",
      youtubeId: "29_Ti5xVBEI",
      title: "Champion Cynthia",
      source: "PokÃ©mon Diamond & PokÃ©mon Pearl: Super Music Collection",
      composer: "Go Ichinose",
      transcriber: "LyricWulf"
    }, {
      urlId: "waterfall",
      youtubeId: "cHLhC8Od5JU",
      title: "Waterfall",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "karlas-lullaby",
      youtubeId: "jo1mvfNW630",
      title: "Karla's Lullaby",
      source: "Words",
      composer: "Louie Zong",
      transcriber: "LyricWulf"
    }, {
      urlId: "fourteen-residents",
      youtubeId: "se7K-3eHMjo",
      title: "Fourteen Residents",
      source: "OFF",
      composer: "Alias Conrad Coldwood",
      transcriber: "LyricWulf"
    }, {
      urlId: "hypnotik",
      youtubeId: "JBWMn3CdPN8",
      title: "HYPNOTIK",
      source: "KiseijÅ« Sei no Kakuritsu (Parasyte -the maxim-)",
      composer: "Ken Arai",
      transcriber: "LyricWulf"
    }, {
      urlId: "supermoon",
      youtubeId: "X2N3XvZCpIc",
      title: "Supermoon",
      source: "No Man's Sky: Music for an Infinite Universe",
      composer: "65daysofstatic",
      transcriber: "LyricWulf"
    }, {
      urlId: "again",
      youtubeId: "kyoTZQ-VSt4",
      title: "Again",
      source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
      composer: "Masaru Yokoyama",
      transcriber: "LyricWulf"
    }, {
      urlId: "just-3-days",
      youtubeId: "2-cFJEqIrVk",
      title: "Just 3 Days",
      source: "Majora's Mask Song",
      composer: "MandoPony",
      transcriber: "LyricWulf"
    }, {
      urlId: "amarillo",
      youtubeId: "waLTe4j4LjE",
      title: "Amarillo",
      source: "The Fall",
      composer: "Gorillaz",
      transcriber: "LyricWulf"
    }, {
      urlId: "land-of-hints",
      youtubeId: "C3SykOb6aqo",
      title: "Land of Hints",
      source: "LISA the Joyful Soundtrack",
      composer: "Widdly 2 Diddly",
      transcriber: "LyricWulf"
    }, {
      urlId: "deep-piano",
      youtubeId: "spIWGAnp_3w",
      title: "#Deep [Piano]",
      source: "what.",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "deep-piano-and-voice",
      youtubeId: "KkVff0gxC2c",
      title: "#Deep [Piano and Voice]",
      source: "what.",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "wishing",
      youtubeId: "FoEB9mgrMzI",
      title: "Wishing",
      source: "Re:Zero kara Hajimeru Isekai Seikatsu (Starting Life in Another World)",
      composer: "Hige Driver, Ayato Shinozaki",
      transcriber: "LyricWulf"
    }, {
      urlId: "edgy-sans-is-edgy",
      youtubeId: "lPbxlkO3KVE",
      title: "Edgy Sans is Edgy",
      source: "Fanmade UNDERTALE AU",
      composer: "Jeffrey Watkins",
      transcriber: "LyricWulf"
    }, {
      urlId: "how-far-ill-go",
      youtubeId: "ope9jAWeu80",
      title: "How Far I'll Go",
      source: "Moana (Original Motion Picture Soundtrack)",
      composer: "Lin-Manuel Miranda",
      transcriber: "LyricWulf"
    }, {
      urlId: "lazy-afternoons",
      youtubeId: "oAWO56Bl5FA",
      title: "Lazy Afternoons",
      source: "Kingdom Hearts Piano Collections",
      composer: "Yoko Shimomura, Sachiko Miyano",
      transcriber: "LyricWulf"
    }, {
      urlId: "sugar-coma-foxtrot",
      youtubeId: "7HtaJKneBMk",
      title: "Sugar Coma Foxtrot",
      source: "HOME OST",
      composer: "xLightningWolFx",
      transcriber: "LyricWulf"
    }, {
      urlId: "death-by-glamour",
      youtubeId: "wOWe33No8m0",
      title: "Death by Glamour",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "let-it-be",
      youtubeId: "q_JvkaHLPvQ",
      title: "Let It Be",
      source: "Miracle",
      composer: "Blackmill",
      transcriber: "LyricWulf"
    }, {
      urlId: "heartache",
      youtubeId: "0C5xp2WKKdM",
      title: "Heartache",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "battle-against-a-true-parent",
      youtubeId: "2PtQZlbp5CY",
      title: "Battle Against a True Parent",
      source: "Fanmade UNDERTALE AU",
      composer: "Whirligig231",
      transcriber: "LyricWulf"
    }, {
      urlId: "bonetrousle-underswap",
      youtubeId: "3ud93T3-Mgs",
      title: "Bonetrousle (Underswap)",
      source: "Fanmade UNDERTALE AU",
      composer: "nerdylizardeperson",
      transcriber: "LyricWulf"
    }, {
      urlId: "mother-earth",
      youtubeId: "ghwlmbHDQMw",
      title: "Mother Earth",
      source: "Mother 1+2",
      composer: "Hirokazu Tanaka",
      transcriber: "LyricWulf"
    }, {
      urlId: "outset-island",
      youtubeId: "CGBLjkg2-_8",
      title: "Outset Island",
      source: "The Legend of Zelda: The Wind Waker",
      composer: "Kenta Nagata, Hajime Wakai, Toru Minegishi, Koji Kondo",
      transcriber: "LyricWulf"
    }, {
      urlId: "backbone",
      youtubeId: "KmBiqJCpGUU",
      title: "Backbone",
      source: "Fanmade UNDERTALE AU",
      composer: "Sean Evans [Lone]",
      transcriber: "LyricWulf"
    }, {
      urlId: "bonetrousle",
      youtubeId: "_Dda2PebeIA",
      title: "Bonetrousle",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "foxs-forgotten-love-krystal",
      youtubeId: "-wZHV13hrvc",
      title: "Fox's Forgotten Love, Krystal",
      source: "Star Fox Command",
      composer: "Hajime Wakai",
      transcriber: "LyricWulf"
    }, {
      urlId: "showtime-piano-refrain",
      youtubeId: "zF6R3bMRWOU",
      title: "Showtime (Piano Refrain)",
      source: "Homestuck Vol. 1â€‹-â€‹4",
      composer: "Malcolm Brown, Kevin Regamey",
      transcriber: "LyricWulf"
    }, {
      urlId: "thundersnail",
      youtubeId: "qyIXXFL3I2w",
      title: "Thundersnail",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "hes-my-dad",
      youtubeId: "3qqfUe_-jZA",
      title: "He's My Dad",
      source: "LISA the Joyful Soundtrack",
      composer: "Widdly 2 Diddly",
      transcriber: "LyricWulf"
    }, {
      urlId: "art-is-dead-piano",
      youtubeId: "MZdogDXQJm0",
      title: "art is dead. [Piano]",
      source: "Words Words Words",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "nyeh-heh-heh-bonetrousle",
      youtubeId: "Rn0Zso6u7mI",
      title: "Nyeh Heh Heh! & Bonetrousle",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "art-is-dead-piano-and-voice",
      youtubeId: "BSg0UD51Rhs",
      title: "art is dead. [Piano and Voice]",
      source: "Words Words Words",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "unnecessary-tension",
      youtubeId: "_Xr-hIdP_yQ",
      title: "Unnecessary Tension",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "wrong-enemy",
      youtubeId: "P6nz4-PHQbk",
      title: "Wrong Enemy ?!",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "live-death-report",
      youtubeId: "MrN4UpxhsxE",
      title: "Live & Death Report",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "shes-playing-piano",
      youtubeId: "sYOF1eJiZtk",
      title: "She's Playing Piano",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "snow-fairy",
      youtubeId: "GuLhZRzAlzc",
      title: "Snow Fairy",
      source: "Fairy Tail",
      composer: "FUNKIST, NateWantsToBattle",
      transcriber: "LyricWulf"
    }, {
      urlId: "oh-one-true-love",
      youtubeId: "ZKYIylDO5_I",
      title: "Oh! One True Love",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "gourmet-race",
      youtubeId: "uGQTVGUso9k",
      title: "Gourmet Race",
      source: "Kirby Super Star",
      composer: "Jun Ishikawa, Dan Miyakawa",
      transcriber: "LyricWulf"
    }, {
      urlId: "lower-your-expectations-piano",
      youtubeId: "ok3O805bfAM",
      title: "Lower Your Expectations [Piano]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "histrousle",
      youtubeId: "bu5SF_xk8bw",
      title: "Histrousle",
      source: "Fanmade UNDERTALE AU",
      composer: "Keno9988ii",
      transcriber: "LyricWulf"
    }, {
      urlId: "ori-lost-in-the-storm",
      youtubeId: "2pLJ00yWlZo",
      title: "Ori, Lost in the Storm",
      source: "Ori and the Blind Forest (Original Soundtrack)",
      composer: "Gareth Coker",
      transcriber: "LyricWulf"
    }, {
      urlId: "power-of-neo-ikarus-remix",
      youtubeId: "gcxKvYdDH4A",
      title: 'Power of "NEO" (IKARUS Remix)',
      source: "Fanmade UNDERTALE AU",
      composer: "IKarus",
      transcriber: "LyricWulf"
    }, {
      urlId: "battle-against-a-true-hero",
      youtubeId: "1PiX8y04ibo",
      title: "Battle Against a True Hero",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "are-you-happy-piano",
      youtubeId: "T5pbrjMSxjs",
      title: "Are You Happy? [Piano]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "straight-white-male-piano",
      youtubeId: "MY9Y7GUZS4o",
      title: "Straight White Male [Piano]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "kill-yourself-piano",
      youtubeId: "sQEihEB-Tfo",
      title: "Kill Yourself [Piano]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "sad-piano",
      youtubeId: "otmmT7A3zGw",
      title: "Sad [Piano]",
      source: "what.",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "drop-pop-candy",
      youtubeId: "OOpgiEP8xfc",
      title: "Drop Pop Candy",
      source: "No Title+",
      composer: "Giga-P",
      transcriber: "LyricWulf"
    }, {
      urlId: "lower-your-expectations-piano-and-voice",
      youtubeId: "oKhE908PdXY",
      title: "Lower Your Expectations [Piano and Voice]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "battle-theme",
      youtubeId: "GQk9uK1DDnM",
      title: "Battle Theme",
      source: "Final Fantasy X",
      composer: "Nobuo Uematsu",
      transcriber: "LyricWulf"
    }, {
      urlId: "technolight",
      youtubeId: "QERryArA4qo",
      title: "Technolight",
      source: "LyricWulf Original Composition",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "kill-yourself-piano-and-voice",
      youtubeId: "tnFtK9lcJTs",
      title: "Kill Yourself [Piano and Voice]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "disbelief",
      youtubeId: "27OZgSe7WJM",
      title: "Disbelief",
      source: "Fanmade UNDERTALE AU",
      composer: "ROCK CANDY (DBOYD x KOMMISAR)",
      transcriber: "LyricWulf"
    }, {
      urlId: "are-you-happy-piano-and-voice",
      youtubeId: "rKPuSjB1VZI",
      title: "Are You Happy? [Piano and Voice]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "with-your-drilla",
      youtubeId: "9br9mVz9KaY",
      title: "With Your Drillâ€¦",
      source: "Tengen Toppa Gurren Lagann OST 1",
      composer: "Taku Iwasaki",
      transcriber: "LyricWulf"
    }, {
      urlId: "quiet-water",
      youtubeId: "VV1PCUJm8lU",
      title: "Quiet Water",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "bird-that-carries-you-over-a-disproportionately-small-gap",
      youtubeId: "94seJuUBe-E",
      title: "Bird That Carries You Over a Disproportionately Small Gap",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "stronger-than-you",
      youtubeId: "c7FVeokCIW4",
      title: "Stronger Than You",
      source: "FUSION MIXTAPE",
      composer: "Rebecca Sugar",
      transcriber: "LyricWulf"
    }, {
      urlId: "straight-white-male-piano-and-voice",
      youtubeId: "Uu777jQw8vU",
      title: "Straight White Male [Piano and Voice]",
      source: "Make Happy",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "metal-crusher",
      youtubeId: "G3tWQxI-dPo",
      title: "Metal Crusher",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "sad-piano-and-voice",
      youtubeId: "CFGDAnelVDE",
      title: "Sad [Piano and Voice]",
      source: "what.",
      composer: "Bo Burnham",
      transcriber: "LyricWulf"
    }, {
      urlId: "believe-me",
      youtubeId: "ZzlSOBzOTOI",
      title: "Believe Me",
      source: "Steins;Gate",
      composer: "Takeshi Abo",
      transcriber: "LyricWulf"
    }, {
      urlId: "why-am-i-so-happy",
      youtubeId: "Vr0JrIQ8yvY",
      title: "Why Am I So Happy?",
      source: "Why Am I So Happy?",
      composer: "Spose",
      transcriber: "LyricWulf"
    }, {
      urlId: "prove-it-all",
      youtubeId: "q8kvvAVUivU",
      title: "Prove It All",
      source: "LyricWulf Original Composition",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "once-upon-a-time",
      youtubeId: "ageNKR7g55g",
      title: "Once Upon a Time",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "alphys-takes-action",
      youtubeId: "-7M0CQ0fuV4",
      title: "Alphys Takes Action",
      source: "Fanmade UNDERTALE AU",
      composer: "coffE K",
      transcriber: "LyricWulf"
    }, {
      urlId: "alphys",
      youtubeId: "y3iiJldFZ-Y",
      title: "Alphys",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "amalgam",
      youtubeId: "KlqxVi4UPb4",
      title: "Amalgam",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "fighting",
      youtubeId: "A47tIVw-ts0",
      title: "Fighting",
      source: "Final Fantasy VII",
      composer: "Nobuo Uematsu",
      transcriber: "LyricWulf"
    }, {
      urlId: "rocket-jump-waltz",
      youtubeId: "3jNvph5ovtM",
      title: "Rocket Jump Waltz",
      source: "Team Fortress 2 Official Soundtrack",
      composer: "Mike Morasky",
      transcriber: "LyricWulf"
    }, {
      urlId: "sans",
      youtubeId: "-7kwk7RxAYY",
      title: "sans.",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "dark-darker-yet-darker",
      youtubeId: "-1jOzmNOlpA",
      title: "Dark, Darker, Yet Darker",
      source: "Fanmade UNDERTALE AU",
      composer: "The Great Anansi",
      transcriber: "LyricWulf"
    }, {
      urlId: "respite",
      youtubeId: "FlC51eUBIRM",
      title: "Respite",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "spider-dance",
      youtubeId: "4YklRbdcdT0",
      title: "Spider Dance",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "sweet-sugar-love",
      youtubeId: "Eo4vEkao_88",
      title: "Sweet Sugar Love",
      source: "Phyrnna",
      composer: "Phyrnna",
      transcriber: "LyricWulf"
    }, {
      urlId: "megalo-strike-back",
      youtubeId: "vtJiP3aI6IQ",
      title: "Megalo Strike Back",
      source: "I Miss You - EarthBound 2012",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "song-that-might-play-when-you-fight-sans",
      youtubeId: "yZprr3ImCiY",
      title: "Song That Might Play When You Fight Sans",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "cold-short-version",
      youtubeId: "96KzZ_O_nr8",
      title: "Cold (Short Version)",
      source: "RWBY",
      composer: "Jeff Williams",
      transcriber: "LyricWulf"
    }, {
      urlId: "ooo",
      youtubeId: "wCsCLdepGyQ",
      title: "Ooo",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "spooky-scary-skeletons",
      youtubeId: "Q2ED9U5eudI",
      title: "Spooky Scary Skeletons",
      source: "Halloween Howls",
      composer: "Andrew Gold",
      transcriber: "LyricWulf"
    }, {
      urlId: "memory",
      youtubeId: "Zb1K1FZ68zo",
      title: "Memory",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "here-we-are",
      youtubeId: "P6lBwJbEWGc",
      title: "Here We Are",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "friendship",
      youtubeId: "V_pKFcImjbg",
      title: "Friendship",
      source: "toby fox",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "walking-by-the-sea",
      youtubeId: "eCX3OkOzR0M",
      title: "Walking by the sea",
      source: "Deemo, Vol.2",
      composer: "Edmud Fu",
      transcriber: "LyricWulf"
    }, {
      urlId: "stronger-monsters",
      youtubeId: "mMJN4pcmTcg",
      title: "Stronger Monsters",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "finale",
      youtubeId: "uNIEWzo7Wj4",
      title: "Finale",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "dancing-mad-5th-movement",
      youtubeId: "PZvk-hz7Ik8",
      title: "Dancing Mad 5th Movement",
      source: "Final Fantasy VI",
      composer: "Nobuo Uematsu",
      transcriber: "LyricWulf"
    }, {
      urlId: "megalovania",
      youtubeId: "dKkRaBwsyBQ",
      title: "MEGALOVANIA",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "try-everything",
      youtubeId: "vuAVdxWMPPE",
      title: "Try Everything",
      source: "Zootopia",
      composer: "Shakira",
      transcriber: "LyricWulf"
    }, {
      urlId: "his-theme",
      youtubeId: "X1xltv1OIwM",
      title: "His Theme",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "its-raining-somewhere-else",
      youtubeId: "OugKuIXt9ig",
      title: "It's Raining Somewhere Else",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "fallen-down-reprise",
      youtubeId: "HtCjh8iZpJI",
      title: "Fallen Down (Reprise)",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "bergentruckung-asgore",
      youtubeId: "kflpz9uU99Q",
      title: "Bergentrückung & ASGORE",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "final-power",
      youtubeId: "pL-8ChSS4v4",
      title: "Final Power",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "run",
      youtubeId: "yix8tQ13Ohs",
      title: "Run!",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "snowy",
      youtubeId: "nMVE_YGD4wg",
      title: "Snowy",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "an-ending",
      youtubeId: "kP2Yt1j5O34",
      title: "An Ending",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "sigh-of-dog",
      youtubeId: "J9-yo3j6erk",
      title: "Sigh of Dog",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "snowdin-town",
      youtubeId: "5gMBfKNGXww",
      title: "Snowdin Town",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "anticipation-enemy-approaching",
      youtubeId: "R97Eo63W0l8",
      title: "Anticipation & Enemy Approaching",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "hopes-and-dreams-last-goodbye",
      youtubeId: "Yuxees4a4DE",
      title: "Hopes and Dreams & Last Goodbye",
      source: "UNDERTALE Soundtrack",
      composer: "toby fox",
      transcriber: "LyricWulf"
    }, {
      urlId: "where",
      youtubeId: "EEl6Cql0LWk",
      title: "Where",
      source: "LyricWulf Original Composition",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "we-are-the-crystal-gems",
      youtubeId: "1NqEVEAgigA",
      title: "We Are the Crystal Gems",
      source: "Steven Universe",
      composer: "Rebecca Sugar, Aivi & Surasshu",
      transcriber: "LyricWulf"
    }, {
      urlId: "randall-piano",
      youtubeId: "vyAY78lb9bU",
      title: "Randall [Piano]",
      source: "Brave Frontier",
      composer: "Hikoshi Hashimoto",
      transcriber: "LyricWulf"
    }, {
      urlId: "randall-full-score",
      youtubeId: "FcNIleFnRK4",
      title: "Randall [Full Score]",
      source: "Brave Frontier",
      composer: "Hikoshi Hashimoto",
      transcriber: "LyricWulf"
    }, {
      urlId: "chasing-cars",
      youtubeId: "-zMlycr-LJo",
      title: "Chasing Cars",
      source: "Eyes Open",
      composer: "Snow Patrol",
      transcriber: "LyricWulf"
    }, {
      urlId: "kimi-wa-wasurerareru-no",
      youtubeId: "HOT7YZpl8xM",
      title: "Kimi wa Wasurerareru no",
      source: "Shigatsu wa Kimi no Uso (Your Lie in April)",
      composer: "Masaru Yokoyama",
      transcriber: "LyricWulf"
    }, {
      urlId: "sister-rust",
      youtubeId: "TrpCK0Q6wAY",
      title: "Sister Rust",
      source: "Lucy",
      composer: "Damon Albarn",
      transcriber: "LyricWulf"
    }, {
      urlId: "last-battle",
      youtubeId: "CXqJhS0vmxA",
      title: "Last Battle ",
      source: "Cave Story",
      composer: "Daisuke Amaya",
      transcriber: "LyricWulf"
    }, {
      urlId: "blackout",
      youtubeId: "f2qlB-kRj5c",
      title: "Blackout",
      source: "Hell Is What You Make It",
      composer: "Breathe Carolina",
      transcriber: "LyricWulf"
    }, {
      urlId: "home-of-the-blues",
      youtubeId: "Kei-nTdHuaA",
      title: "Home of the Blues",
      source: "Owl City Cover",
      composer: "Owl City",
      transcriber: "LyricWulf"
    }, {
      urlId: "rewel",
      youtubeId: "p3-MYUxTsic",
      title: "ReWel",
      source: "Catalyst",
      composer: "Tristam & Rogue",
      transcriber: "LyricWulf"
    }, {
      urlId: "ingame-theme",
      youtubeId: "KjdbqrUI-KE",
      title: "InGame Theme",
      source: "Castles II: Siege and Conquest",
      composer: "Charles Deenen",
      transcriber: "LyricWulf"
    }, {
      urlId: "heros-end",
      youtubeId: "2SJOboPkRgY",
      title: "Hero's End",
      source: "Cave Story",
      composer: "Daisuke Amaya",
      transcriber: "LyricWulf"
    }, {
      urlId: "quantus",
      youtubeId: "iXndMLBSNGQ",
      title: "Quantus",
      source: "LyricWulf Original Composition",
      composer: "LyricWulf",
      transcriber: "LyricWulf"
    }, {
      urlId: "unused-track-1",
      youtubeId: "z5j_rI3JeSQ",
      title: "Unused Track 1",
      source: "Clannad",
      composer: "Shinji Orito",
      transcriber: "LyricWulf"
    }, {
      urlId: "gypsy-dance",
      youtubeId: "594VKbWySFU",
      title: "Gypsy Dance",
      source: "Joseph Compello",
      composer: "Joseph Compello",
      transcriber: "LyricWulf"
    }, {
      urlId: "shy-violet",
      youtubeId: "ysWv8SJ0bDk",
      title: "Shy Violet",
      source: "All Things Bright and Beautiful",
      composer: "Owl City",
      transcriber: "LyricWulf"
    }];
    /* harmony default export */

    __webpack_exports__["default"] = SONGS;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Programing\Lyric\angular2\desktop\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map