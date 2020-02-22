function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/_interceptors/custom-http.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_interceptors/custom-http.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: CustomHttpInterceptor */

  /***/
  function srcApp_interceptorsCustomHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function () {
      return CustomHttpInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var CustomHttpInterceptor =
    /*#__PURE__*/
    function () {
      function CustomHttpInterceptor(authenticationService) {
        _classCallCheck(this, CustomHttpInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(CustomHttpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.authenticationService.getToken() || '';
          req = req.clone({
            setHeaders: {
              'token': token
            }
          });
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          switch (error.status) {}

          // return an observable with a user-facing error message
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
      }]);

      return CustomHttpInterceptor;
    }();

    CustomHttpInterceptor.ɵfac = function CustomHttpInterceptor_Factory(t) {
      return new (t || CustomHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    CustomHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomHttpInterceptor,
      factory: CustomHttpInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_interceptors/index.ts":
  /*!****************************************!*\
    !*** ./src/app/_interceptors/index.ts ***!
    \****************************************/

  /*! exports provided: CustomHttpInterceptor */

  /***/
  function srcApp_interceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _custom_http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-http.interceptor */
    "./src/app/_interceptors/custom-http.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function () {
      return _custom_http_interceptor__WEBPACK_IMPORTED_MODULE_0__["CustomHttpInterceptor"];
    });
    /***/

  },

  /***/
  "./src/app/_layout/public/public.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/_layout/public/public.component.ts ***!
    \****************************************************/

  /*! exports provided: PublicComponent */

  /***/
  function srcApp_layoutPublicPublicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicComponent", function () {
      return PublicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PublicComponent =
    /*#__PURE__*/
    function () {
      function PublicComponent() {
        _classCallCheck(this, PublicComponent);
      }

      _createClass(PublicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublicComponent;
    }();

    PublicComponent.ɵfac = function PublicComponent_Factory(t) {
      return new (t || PublicComponent)();
    };

    PublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicComponent,
      selectors: [["app-public"]],
      decls: 1,
      vars: 0,
      template: function PublicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvcHVibGljL3B1YmxpYy5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-public',
          templateUrl: './public.component.html',
          styleUrls: ['./public.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_layout/secure/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/_layout/secure/index.ts ***!
    \*****************************************/

  /*! exports provided: SecureComponent, SECURE_ROUTES */

  /***/
  function srcApp_layoutSecureIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _secure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./secure.component */
    "./src/app/_layout/secure/secure.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SecureComponent", function () {
      return _secure_component__WEBPACK_IMPORTED_MODULE_0__["SecureComponent"];
    });
    /* harmony import */


    var _secure_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./secure.routes */
    "./src/app/_layout/secure/secure.routes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SECURE_ROUTES", function () {
      return _secure_routes__WEBPACK_IMPORTED_MODULE_1__["SECURE_ROUTES"];
    });
    /***/

  },

  /***/
  "./src/app/_layout/secure/secure.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/_layout/secure/secure.component.ts ***!
    \****************************************************/

  /*! exports provided: SecureComponent */

  /***/
  function srcApp_layoutSecureSecureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecureComponent", function () {
      return SecureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SecureComponent =
    /*#__PURE__*/
    function () {
      function SecureComponent() {
        _classCallCheck(this, SecureComponent);
      }

      _createClass(SecureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecureComponent;
    }();

    SecureComponent.ɵfac = function SecureComponent_Factory(t) {
      return new (t || SecureComponent)();
    };

    SecureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecureComponent,
      selectors: [["app-secure"]],
      decls: 1,
      vars: 0,
      template: function SecureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvc2VjdXJlL3NlY3VyZS5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-secure',
          templateUrl: './secure.component.html',
          styleUrls: ['./secure.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_layout/secure/secure.routes.ts":
  /*!*************************************************!*\
    !*** ./src/app/_layout/secure/secure.routes.ts ***!
    \*************************************************/

  /*! exports provided: SECURE_ROUTES */

  /***/
  function srcApp_layoutSecureSecureRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECURE_ROUTES", function () {
      return SECURE_ROUTES;
    });
    /* harmony import */


    var _secure_asset_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../secure/asset-list */
    "./src/app/secure/asset-list/index.ts");
    /* harmony import */


    var _secure_location_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../secure/location-list */
    "./src/app/secure/location-list/index.ts");
    /* harmony import */


    var _secure_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../secure/location */
    "./src/app/secure/location/index.ts");
    /* harmony import */


    var _secure_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../secure/scanner */
    "./src/app/secure/scanner/index.ts");

    var SECURE_ROUTES = [{
      path: '',
      redirectTo: 'location-list',
      pathMatch: 'full'
    }, {
      path: 'asset-list',
      component: _secure_asset_list__WEBPACK_IMPORTED_MODULE_0__["AssetListComponent"]
    }, {
      path: 'location-list',
      component: _secure_location_list__WEBPACK_IMPORTED_MODULE_1__["LocationListComponent"]
    }, {
      path: 'location',
      component: _secure_location__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
    }, {
      path: 'scanner',
      component: _secure_scanner__WEBPACK_IMPORTED_MODULE_3__["ScannerComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/_model/index.ts":
  /*!*********************************!*\
    !*** ./src/app/_model/index.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user */
    "./src/app/_model/user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user__WEBPACK_IMPORTED_MODULE_0__["User"];
    });
    /***/

  },

  /***/
  "./src/app/_model/user.ts":
  /*!********************************!*\
    !*** ./src/app/_model/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(opts) {
      _classCallCheck(this, User);

      if (opts) {
        Object.assign(this, opts);
      }
    };
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_model */
    "./src/app/_model/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router, userService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
        this.userService = userService;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(account, password) {
          /*
          return this.http.post<any>(Constants.API_ACCOUNT_LOGIN, { "Account": account, "Password": password })
            .pipe(timeout(Constants.TIMEOUT), map(res => {
              if (res.Status !== 'success') {
                  //this.messageService.showNotice(res.Status,res.Message);
                  return;
              }
              let user = new User(),
                  pingTime = new Date().getTime();
                user.account = account;
              this.userService.setCurrentUser(user);
                localStorage.setItem(Constants.STORAGE_ITEM__LAST_TIME, pingTime.toString())
              return user;
          }));
          */
          var user = new _model__WEBPACK_IMPORTED_MODULE_2__["User"]();
          user.account = account;
          this.userService.setCurrentUser(user);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.clearStorageData();
          this.router.navigate(['/login']);
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN, token);
          localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN_CREATE_TIME, new Date().getMilliseconds().toString());
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN);
        }
      }, {
        key: "getTokenCreateTime",
        value: function getTokenCreateTime() {
          var tokenCreateTime = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN_CREATE_TIME);

          if (tokenCreateTime === null || tokenCreateTime === undefined || tokenCreateTime === '') {
            return 0;
          }

          return Number(tokenCreateTime);
        }
      }, {
        key: "clearStorageData",
        value: function clearStorageData() {
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER);
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__IDLING);
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__IDLING_EXPIRY);
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__LAST_TIME);
          localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: UserService, AuthenticationService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_model */
    "./src/app/_model/index.ts");
    /* harmony import */


    var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! class-transformer */
    "./node_modules/class-transformer/index.js");
    /* harmony import */


    var class_transformer__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      //message
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "setCurrentUser",
        value: function setCurrentUser(user) {
          localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER, JSON.stringify(user));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var strCurrentUser = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER);

          if (strCurrentUser) {
            try {
              return Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["plainToClass"])(_model__WEBPACK_IMPORTED_MODULE_2__["User"], JSON.parse(strCurrentUser));
            } catch (_a) {
              return null;
            }
          }

          return null;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_secure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_layout/secure */
    "./src/app/_layout/secure/index.ts");

    var routes = [
    /*
    {
      path: '',
      component: PublicComponent,
      canActivate: [],
      data: { title: 'Public Views' },
      children: PUBLIC_ROUTES
    },
    */
    {
      path: '',
      component: _layout_secure__WEBPACK_IMPORTED_MODULE_2__["SecureComponent"],
      //canActivate: [AuthGuard],
      canActivate: [],
      data: {
        title: 'Secure Views'
      },
      children: _layout_secure__WEBPACK_IMPORTED_MODULE_2__["SECURE_ROUTES"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(_dialog) {
      _classCallCheck(this, AppComponent);

      this._dialog = _dialog;
      this.title = 'Asset Tracking System';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_interceptors */
    "./src/app/_interceptors/index.ts");
    /* harmony import */


    var _common_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/auth.guard */
    "./src/app/common/auth.guard.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _public_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./public/login */
    "./src/app/public/login/index.ts");
    /* harmony import */


    var _secure_location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./secure/location */
    "./src/app/secure/location/index.ts");
    /* harmony import */


    var _secure_location_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./secure/location-list */
    "./src/app/secure/location-list/index.ts");
    /* harmony import */


    var _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./secure/asset-list */
    "./src/app/secure/asset-list/index.ts");
    /* harmony import */


    var _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_layout/secure/secure.component */
    "./src/app/_layout/secure/secure.component.ts");
    /* harmony import */


    var _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_layout/public/public.component */
    "./src/app/_layout/public/public.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/menu */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var _secure_scanner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./secure/scanner */
    "./src/app/secure/scanner/index.ts");

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__["faBarcode"]);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FaIconLibrary"]));
      },
      providers: [_common_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["CustomHttpInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _public_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _secure_location__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"], _secure_location_list__WEBPACK_IMPORTED_MODULE_10__["LocationListComponent"], _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__["AssetListComponent"], _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__["SecureComponent"], _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"], _secure_scanner__WEBPACK_IMPORTED_MODULE_26__["ScannerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _public_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _secure_location__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"], _secure_location_list__WEBPACK_IMPORTED_MODULE_10__["LocationListComponent"], _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__["AssetListComponent"], _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__["SecureComponent"], _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"], _secure_scanner__WEBPACK_IMPORTED_MODULE_26__["ScannerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]],
          providers: [_common_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["CustomHttpInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FaIconLibrary"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/common/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCommonAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(userService) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var user = this.userService.getCurrentUser();

          if (user === null || user.account === null || user.account === undefined || user.account === '') {
            // not yet logged in
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.TIMEOUT = 60000;
    Constants.STORAGE_ITEM__CURRENT_USER = 'currentUser';
    Constants.STORAGE_ITEM__IDLING = 'ng2Idle.main.idling';
    Constants.STORAGE_ITEM__IDLING_EXPIRY = 'ng2Idle.main.expiry';
    Constants.STORAGE_ITEM__LAST_TIME = 'lastTime';
    Constants.EXTERNAL_AUTH_URL = './auth/login';
    Constants.STORAGE_ITEM__TOKEN = 'token';
    Constants.STORAGE_ITEM__TOKEN_CREATE_TIME = 'tokenCreateTime';
    Constants.API_BASE_HREF = './api/';
    Constants.API_ACCOUNT_LOGIN = Constants.API_BASE_HREF + 'accounts/account/login/';
    Constants.LANDING_PAGE = '/location-list';
    /***/
  },

  /***/
  "./src/app/public/login/index.ts":
  /*!***************************************!*\
    !*** ./src/app/public/login/index.ts ***!
    \***************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublicLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/public/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });
    /***/

  },

  /***/
  "./src/app/public/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/public/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublicLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_model */
    "./src/app/_model/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.user = new _model__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authenticationService.clearStorageData();
        }
      }, {
        key: "login",
        value: function login() {
          console.log(this.authenticationService.login(this.user.account, this.user.password));
          this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].LANDING_PAGE]);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 2,
      consts: [[1, "ui-float-label"], ["id", "txt-account", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "txt-account"], ["id", "txt-password", "type", "password", "pPassword", "", 3, "ngModel", "ngModelChange"], ["for", "txt-password"], ["id", "btn-login", "type", "button", "label", "Login", "pButton", "", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.user.account = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_password__WEBPACK_IMPORTED_MODULE_7__["Password"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/secure/asset-list/asset-list.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/secure/asset-list/asset-list.component.ts ***!
    \***********************************************************/

  /*! exports provided: AssetListComponent */

  /***/
  function srcAppSecureAssetListAssetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetListComponent", function () {
      return AssetListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssetListComponent =
    /*#__PURE__*/
    function () {
      function AssetListComponent() {
        _classCallCheck(this, AssetListComponent);
      }

      _createClass(AssetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssetListComponent;
    }();

    AssetListComponent.ɵfac = function AssetListComponent_Factory(t) {
      return new (t || AssetListComponent)();
    };

    AssetListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssetListComponent,
      selectors: [["app-asset-list"]],
      decls: 2,
      vars: 0,
      template: function AssetListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "asset-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9hc3NldC1saXN0L2Fzc2V0LWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-asset-list',
          templateUrl: './asset-list.component.html',
          styleUrls: ['./asset-list.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/secure/asset-list/index.ts":
  /*!********************************************!*\
    !*** ./src/app/secure/asset-list/index.ts ***!
    \********************************************/

  /*! exports provided: AssetListComponent */

  /***/
  function srcAppSecureAssetListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _asset_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./asset-list.component */
    "./src/app/secure/asset-list/asset-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AssetListComponent", function () {
      return _asset_list_component__WEBPACK_IMPORTED_MODULE_0__["AssetListComponent"];
    });
    /***/

  },

  /***/
  "./src/app/secure/location-list/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/secure/location-list/index.ts ***!
    \***********************************************/

  /*! exports provided: LocationListComponent */

  /***/
  function srcAppSecureLocationListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _location_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./location-list.component */
    "./src/app/secure/location-list/location-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocationListComponent", function () {
      return _location_list_component__WEBPACK_IMPORTED_MODULE_0__["LocationListComponent"];
    });
    /***/

  },

  /***/
  "./src/app/secure/location-list/location-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/secure/location-list/location-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LocationListComponent */

  /***/
  function srcAppSecureLocationListLocationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationListComponent", function () {
      return LocationListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../scanner */
    "./src/app/secure/scanner/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var LocationListComponent =
    /*#__PURE__*/
    function () {
      function LocationListComponent(_dialog) {
        _classCallCheck(this, LocationListComponent);

        this._dialog = _dialog;
      }

      _createClass(LocationListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startScan",
        value: function startScan() {
          var _this = this;

          var data = {};

          this._dialog.open(_scanner__WEBPACK_IMPORTED_MODULE_1__["ScannerComponent"], {
            data: data
          }).afterClosed().subscribe(function (x) {
            if (x) {
              _this.barcodeValue = x;
            }
          });
        }
      }]);

      return LocationListComponent;
    }();

    LocationListComponent.ɵfac = function LocationListComponent_Factory(t) {
      return new (t || LocationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    LocationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LocationListComponent,
      selectors: [["app-location-list"]],
      decls: 6,
      vars: 1,
      consts: [["type", "text", "id", "txt-assigned-location", "pInputText", "", 3, "ngModel", "ngModelChange"], ["icon", "barcode", 2, "font-size", "40px", "margin-left", "5px", "vertical-align", "middle", "cursor", "pointer", 3, "click"]],
      template: function LocationListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assigned Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocationListComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.barcodeValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_Template_fa_icon_click_5_listener($event) {
            return ctx.startScan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.barcodeValue);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9sb2NhdGlvbi1saXN0L2xvY2F0aW9uLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-location-list',
          templateUrl: './location-list.component.html',
          styleUrls: ['./location-list.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/secure/location/index.ts":
  /*!******************************************!*\
    !*** ./src/app/secure/location/index.ts ***!
    \******************************************/

  /*! exports provided: LocationComponent */

  /***/
  function srcAppSecureLocationIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _location_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./location.component */
    "./src/app/secure/location/location.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
      return _location_component__WEBPACK_IMPORTED_MODULE_0__["LocationComponent"];
    });
    /***/

  },

  /***/
  "./src/app/secure/location/location.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/secure/location/location.component.ts ***!
    \*******************************************************/

  /*! exports provided: LocationComponent */

  /***/
  function srcAppSecureLocationLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
      return LocationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocationComponent =
    /*#__PURE__*/
    function () {
      function LocationComponent() {
        _classCallCheck(this, LocationComponent);
      }

      _createClass(LocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LocationComponent;
    }();

    LocationComponent.ɵfac = function LocationComponent_Factory(t) {
      return new (t || LocationComponent)();
    };

    LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LocationComponent,
      selectors: [["app-location"]],
      decls: 2,
      vars: 0,
      template: function LocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-location',
          templateUrl: './location.component.html',
          styleUrls: ['./location.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/secure/scanner/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/secure/scanner/index.ts ***!
    \*****************************************/

  /*! exports provided: ScannerComponent */

  /***/
  function srcAppSecureScannerIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./scanner.component */
    "./src/app/secure/scanner/scanner.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScannerComponent", function () {
      return _scanner_component__WEBPACK_IMPORTED_MODULE_0__["ScannerComponent"];
    });
    /***/

  },

  /***/
  "./src/app/secure/scanner/scanner.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/secure/scanner/scanner.component.ts ***!
    \*****************************************************/

  /*! exports provided: ScannerComponent */

  /***/
  function srcAppSecureScannerScannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScannerComponent", function () {
      return ScannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @zxing/library */
    "./node_modules/@zxing/library/esm5/index.js");
    /* harmony import */


    var _zxing_library__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @zxing/ngx-scanner */
    "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ScannerComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Waiting for camera permission.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ScannerComponent_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You denied the camera permission, please grant the camera permission in order to use the scanner function.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ScannerComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Couldn't check for devices.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ScannerComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No camera was found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var PREVIOUS_SELECTED_CAMERA_LABEL = 'PREVIOUS_SELECTED_CAMERA_LABEL';

    var ScannerComponent =
    /*#__PURE__*/
    function () {
      function ScannerComponent(data, _dialogRef) {
        _classCallCheck(this, ScannerComponent);

        this.data = data;
        this._dialogRef = _dialogRef;
        this.delayShowCheckingMessage = true;
        this.showScanner = false;
        this.isFirstTime = true;
        this.tryHarder = false;
        this.currentDevice = null;
        this.formatsEnabled = [_zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_39, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_93, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_8, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].PDF_417, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].QR_CODE];
      }

      _createClass(ScannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.delayShowCheckingMessage = false;
          }, 1000 * 2);
        }
      }, {
        key: "scanSuccess",
        value: function scanSuccess(value) {
          this.beep();

          this._dialogRef.close(value);
        }
      }, {
        key: "stopScan",
        value: function stopScan() {
          this._dialogRef.close();
        }
      }, {
        key: "onHasPermission",
        value: function onHasPermission(has) {
          this.hasPermission = has;
        }
      }, {
        key: "onCamerasFound",
        value: function onCamerasFound(devices) {
          this.availableDevices = devices;
          this.hasDevices = Boolean(devices && devices.length);
        }
      }, {
        key: "onAutostarted",
        value: function onAutostarted() {
          var _this3 = this;

          this.isFirstTime = false;
          this.currentDevice = this.scanner.device;
          var previousSelectedCameraLabel = localStorage.getItem(PREVIOUS_SELECTED_CAMERA_LABEL);
          var currentSelectedCameraLabel = this.currentDevice.label;

          if (!previousSelectedCameraLabel) {
            // first time use scanner
            localStorage.setItem(PREVIOUS_SELECTED_CAMERA_LABEL, currentSelectedCameraLabel);
            this.showScanner = true;
          } else {
            // not first time use scanner
            if (previousSelectedCameraLabel !== currentSelectedCameraLabel) {
              // previous selected camera is not same as the current default camera, change it to previous selected camera
              setTimeout(function () {
                _this3.currentDevice = _this3.availableDevices.find(function (device) {
                  return device.label === previousSelectedCameraLabel;
                });
                _this3.showScanner = true;
              }, 1000 * 1);
            } else {
              this.showScanner = true;
            }
          }
        }
      }, {
        key: "onDeviceChange",
        value: function onDeviceChange() {
          if (!this.isFirstTime) {
            localStorage.setItem(PREVIOUS_SELECTED_CAMERA_LABEL, this.currentDevice.label);
          }
        }
      }, {
        key: "beep",
        value: function beep() {
          var audio = new Audio();
          audio.src = "../../../assets/beep.wav";
          audio.load();
          audio.play();
        }
      }]);

      return ScannerComponent;
    }();

    ScannerComponent.ɵfac = function ScannerComponent_Factory(t) {
      return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    ScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScannerComponent,
      selectors: [["app-scanner"]],
      viewQuery: function ScannerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
        }
      },
      decls: 14,
      vars: 13,
      consts: [[1, "scanner-shell", 3, "hidden"], [2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0", "background", "white"], [2, "position", "absolute", "top", "0", "bottom", "0", "left", "0", "right", "0", "background", "white", "z-index", "2000", 3, "hidden"], [2, "position", "absolute", "top", "10px", "right", "10px", "z-index", "1500", "background-color", "white"], ["optionLabel", "label", 2, "vertical-align", "top", 3, "options", "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "ui-button-danger", 3, "click"], [2, "position", "absolute", "z-index", "1000", 3, "tryHarder", "formats", "device", "deviceChange", "autostarted", "scanSuccess", "permissionResponse", "camerasFound"], [2, "position", "absolute", "top", "50%", "left", "50%", "-moz-transform", "translateX(-50%) translateY(-50%)", "-webkit-transform", "translateX(-50%) translateY(-50%)", "transform", "translateX(-50%) translateY(-50%)", "z-index", "500", 3, "hidden"], [3, "hidden"], [4, "ngIf"]],
      template: function ScannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-dropdown", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_p_dropdown_ngModelChange_4_listener($event) {
            return ctx.currentDevice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScannerComponent_Template_button_click_5_listener($event) {
            return ctx.stopScan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "zxing-scanner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function ScannerComponent_Template_zxing_scanner_deviceChange_6_listener($event) {
            return ctx.onDeviceChange();
          })("autostarted", function ScannerComponent_Template_zxing_scanner_autostarted_6_listener($event) {
            return ctx.onAutostarted();
          })("scanSuccess", function ScannerComponent_Template_zxing_scanner_scanSuccess_6_listener($event) {
            return ctx.scanSuccess($event);
          })("permissionResponse", function ScannerComponent_Template_zxing_scanner_permissionResponse_6_listener($event) {
            return ctx.onHasPermission($event);
          })("camerasFound", function ScannerComponent_Template_zxing_scanner_camerasFound_6_listener($event) {
            return ctx.onCamerasFound($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Loading Camera... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ScannerComponent_ng_container_10_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScannerComponent_ng_container_11_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ScannerComponent_ng_container_12_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ScannerComponent_ng_container_13_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.hasDevices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showScanner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.availableDevices)("ngModel", ctx.currentDevice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tryHarder", ctx.tryHarder)("formats", ctx.formatsEnabled)("device", ctx.currentDevice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.delayShowCheckingMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.delayShowCheckingMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPermission === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPermission === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === false);
        }
      },
      directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scanner',
          templateUrl: './scanner.component.html',
          styleUrls: ['./scanner.component.sass']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, {
        scanner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]]
        }]
      });
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! C:\Leo\Project\Accenture\STP\ATS\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map