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

/***/ "./src/app/_interceptors/custom-http.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/_interceptors/custom-http.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: CustomHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function() { return CustomHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





class CustomHttpInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        const token = this.authenticationService.getToken() || '';
        req = req.clone({
            setHeaders: {
                'token': token
            }
        });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    }
    handleError(error) {
        switch (error.status) {
            /*
            case 400:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_400);
                break;
            case 401:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_401);
                break;
            case 403:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_403);
                break;
            case 404:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_404);
                break;
            case 500:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_500);
                break;
            case 0:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_0);
                break;
            default:
                this.messageService.showNotice(Constants.TITLE_ERROR, Constants.ERROE_000);
            */
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
CustomHttpInterceptor.ɵfac = function CustomHttpInterceptor_Factory(t) { return new (t || CustomHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
CustomHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomHttpInterceptor, factory: CustomHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_interceptors/index.ts":
/*!****************************************!*\
  !*** ./src/app/_interceptors/index.ts ***!
  \****************************************/
/*! exports provided: CustomHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-http.interceptor */ "./src/app/_interceptors/custom-http.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function() { return _custom_http_interceptor__WEBPACK_IMPORTED_MODULE_0__["CustomHttpInterceptor"]; });




/***/ }),

/***/ "./src/app/_layout/public/index.ts":
/*!*****************************************!*\
  !*** ./src/app/_layout/public/index.ts ***!
  \*****************************************/
/*! exports provided: PublicComponent, PUBLIC_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ "./src/app/_layout/public/public.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return _public_component__WEBPACK_IMPORTED_MODULE_0__["PublicComponent"]; });

/* harmony import */ var _public_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.routes */ "./src/app/_layout/public/public.routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_ROUTES", function() { return _public_routes__WEBPACK_IMPORTED_MODULE_1__["PUBLIC_ROUTES"]; });





/***/ }),

/***/ "./src/app/_layout/public/public.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/public/public.component.ts ***!
  \****************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PublicComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) { return new (t || PublicComponent)(); };
PublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicComponent, selectors: [["app-public"]], decls: 1, vars: 0, template: function PublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvcHVibGljL3B1YmxpYy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public',
                templateUrl: './public.component.html',
                styleUrls: ['./public.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_layout/public/public.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/_layout/public/public.routes.ts ***!
  \*************************************************/
/*! exports provided: PUBLIC_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLIC_ROUTES", function() { return PUBLIC_ROUTES; });
/* harmony import */ var _public_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../public/login */ "./src/app/public/login/index.ts");

const PUBLIC_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: _public_login__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/_layout/secure/index.ts":
/*!*****************************************!*\
  !*** ./src/app/_layout/secure/index.ts ***!
  \*****************************************/
/*! exports provided: SecureComponent, SECURE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _secure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure.component */ "./src/app/_layout/secure/secure.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecureComponent", function() { return _secure_component__WEBPACK_IMPORTED_MODULE_0__["SecureComponent"]; });

/* harmony import */ var _secure_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secure.routes */ "./src/app/_layout/secure/secure.routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SECURE_ROUTES", function() { return _secure_routes__WEBPACK_IMPORTED_MODULE_1__["SECURE_ROUTES"]; });





/***/ }),

/***/ "./src/app/_layout/secure/secure.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/secure/secure.component.ts ***!
  \****************************************************/
/*! exports provided: SecureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureComponent", function() { return SecureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SecureComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SecureComponent.ɵfac = function SecureComponent_Factory(t) { return new (t || SecureComponent)(); };
SecureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecureComponent, selectors: [["app-secure"]], decls: 1, vars: 0, template: function SecureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvc2VjdXJlL3NlY3VyZS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secure',
                templateUrl: './secure.component.html',
                styleUrls: ['./secure.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_layout/secure/secure.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/_layout/secure/secure.routes.ts ***!
  \*************************************************/
/*! exports provided: SECURE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURE_ROUTES", function() { return SECURE_ROUTES; });
/* harmony import */ var _secure_asset_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../secure/asset-list */ "./src/app/secure/asset-list/index.ts");
/* harmony import */ var _secure_location_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../secure/location-list */ "./src/app/secure/location-list/index.ts");
/* harmony import */ var _secure_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../secure/location */ "./src/app/secure/location/index.ts");
/* harmony import */ var _secure_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../secure/scanner */ "./src/app/secure/scanner/index.ts");




const SECURE_ROUTES = [
    { path: 'asset-list', component: _secure_asset_list__WEBPACK_IMPORTED_MODULE_0__["AssetListComponent"] },
    { path: 'location-list', component: _secure_location_list__WEBPACK_IMPORTED_MODULE_1__["LocationListComponent"] },
    { path: 'location', component: _secure_location__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"] },
    { path: 'scanner', component: _secure_scanner__WEBPACK_IMPORTED_MODULE_3__["ScannerComponent"] }
];


/***/ }),

/***/ "./src/app/_model/index.ts":
/*!*********************************!*\
  !*** ./src/app/_model/index.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_model/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });




/***/ }),

/***/ "./src/app/_model/user.ts":
/*!********************************!*\
  !*** ./src/app/_model/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(opts) {
        if (opts) {
            Object.assign(this, opts);
        }
    }
}


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model */ "./src/app/_model/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");







class AuthenticationService {
    constructor(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    login(account, password) {
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
        let user = new _model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        user.account = account;
        this.userService.setCurrentUser(user);
    }
    logout() {
        this.clearStorageData();
        this.router.navigate(['/login']);
    }
    saveToken(token) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN, token);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN_CREATE_TIME, new Date().getMilliseconds().toString());
    }
    getToken() {
        return localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN);
    }
    getTokenCreateTime() {
        let tokenCreateTime = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN_CREATE_TIME);
        if (tokenCreateTime === null || tokenCreateTime === undefined || tokenCreateTime === '') {
            return 0;
        }
        return Number(tokenCreateTime);
    }
    clearStorageData() {
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER);
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__IDLING);
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__IDLING_EXPIRY);
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__LAST_TIME);
        localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__TOKEN);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model */ "./src/app/_model/index.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class UserService {
    //message
    constructor(http) {
        this.http = http;
    }
    setCurrentUser(user) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER, JSON.stringify(user));
    }
    getCurrentUser() {
        let strCurrentUser = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].STORAGE_ITEM__CURRENT_USER);
        if (strCurrentUser) {
            try {
                return Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["plainToClass"])(_model__WEBPACK_IMPORTED_MODULE_2__["User"], JSON.parse(strCurrentUser));
            }
            catch (_a) {
                return null;
            }
        }
        return null;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/public */ "./src/app/_layout/public/index.ts");
/* harmony import */ var _layout_secure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/secure */ "./src/app/_layout/secure/index.ts");
/* harmony import */ var _common_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/auth.guard */ "./src/app/common/auth.guard.ts");







const routes = [
    {
        path: '',
        component: _layout_public__WEBPACK_IMPORTED_MODULE_2__["PublicComponent"],
        canActivate: [],
        data: { title: 'Public Views' },
        children: _layout_public__WEBPACK_IMPORTED_MODULE_2__["PUBLIC_ROUTES"]
    },
    {
        path: '',
        component: _layout_secure__WEBPACK_IMPORTED_MODULE_3__["SecureComponent"],
        canActivate: [_common_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { title: 'Secure Views' },
        children: _layout_secure__WEBPACK_IMPORTED_MODULE_3__["SECURE_ROUTES"]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
        this.title = 'Asset Tracking System';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_interceptors */ "./src/app/_interceptors/index.ts");
/* harmony import */ var _common_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/auth.guard */ "./src/app/common/auth.guard.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _public_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/login */ "./src/app/public/login/index.ts");
/* harmony import */ var _secure_location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./secure/location */ "./src/app/secure/location/index.ts");
/* harmony import */ var _secure_location_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secure/location-list */ "./src/app/secure/location-list/index.ts");
/* harmony import */ var _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./secure/asset-list */ "./src/app/secure/asset-list/index.ts");
/* harmony import */ var _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_layout/secure/secure.component */ "./src/app/_layout/secure/secure.component.ts");
/* harmony import */ var _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_layout/public/public.component */ "./src/app/_layout/public/public.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _secure_scanner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./secure/scanner */ "./src/app/secure/scanner/index.ts");





























class AppModule {
    constructor(library) {
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__["faBarcode"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FaIconLibrary"])); }, providers: [
        _common_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["CustomHttpInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _public_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _secure_location__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"],
        _secure_location_list__WEBPACK_IMPORTED_MODULE_10__["LocationListComponent"],
        _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__["AssetListComponent"],
        _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__["SecureComponent"],
        _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"],
        _secure_scanner__WEBPACK_IMPORTED_MODULE_26__["ScannerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _public_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _secure_location__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"],
                    _secure_location_list__WEBPACK_IMPORTED_MODULE_10__["LocationListComponent"],
                    _secure_asset_list__WEBPACK_IMPORTED_MODULE_11__["AssetListComponent"],
                    _layout_secure_secure_component__WEBPACK_IMPORTED_MODULE_12__["SecureComponent"],
                    _layout_public_public_component__WEBPACK_IMPORTED_MODULE_13__["PublicComponent"],
                    _secure_scanner__WEBPACK_IMPORTED_MODULE_26__["ScannerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_25__["ZXingScannerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                    primeng_password__WEBPACK_IMPORTED_MODULE_17__["PasswordModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                ],
                providers: [
                    _common_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["CustomHttpInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/common/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



class AuthGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate() {
        let user = this.userService.getCurrentUser();
        if (user === null ||
            user.account === null ||
            user.account === undefined ||
            user.account === '') { // not yet logged in
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
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


/***/ }),

/***/ "./src/app/public/login/index.ts":
/*!***************************************!*\
  !*** ./src/app/public/login/index.ts ***!
  \***************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/public/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/public/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/public/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_model */ "./src/app/_model/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");










class LoginComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = new _model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
        this.authenticationService.clearStorageData();
    }
    login() {
        console.log(this.authenticationService.login(this.user.account, this.user.password));
        this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].LANDING_PAGE]);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 2, consts: [[1, "ui-float-label"], ["id", "txt-account", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "txt-account"], ["id", "txt-password", "type", "password", "pPassword", "", 3, "ngModel", "ngModelChange"], ["for", "txt-password"], ["id", "btn-login", "type", "button", "label", "Login", "pButton", "", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) { return ctx.user.account = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener($event) { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_password__WEBPACK_IMPORTED_MODULE_7__["Password"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/secure/asset-list/asset-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/secure/asset-list/asset-list.component.ts ***!
  \***********************************************************/
/*! exports provided: AssetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetListComponent", function() { return AssetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AssetListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AssetListComponent.ɵfac = function AssetListComponent_Factory(t) { return new (t || AssetListComponent)(); };
AssetListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssetListComponent, selectors: [["app-asset-list"]], decls: 2, vars: 0, template: function AssetListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "asset-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9hc3NldC1saXN0L2Fzc2V0LWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asset-list',
                templateUrl: './asset-list.component.html',
                styleUrls: ['./asset-list.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/secure/asset-list/index.ts":
/*!********************************************!*\
  !*** ./src/app/secure/asset-list/index.ts ***!
  \********************************************/
/*! exports provided: AssetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset-list.component */ "./src/app/secure/asset-list/asset-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetListComponent", function() { return _asset_list_component__WEBPACK_IMPORTED_MODULE_0__["AssetListComponent"]; });




/***/ }),

/***/ "./src/app/secure/location-list/index.ts":
/*!***********************************************!*\
  !*** ./src/app/secure/location-list/index.ts ***!
  \***********************************************/
/*! exports provided: LocationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _location_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-list.component */ "./src/app/secure/location-list/location-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationListComponent", function() { return _location_list_component__WEBPACK_IMPORTED_MODULE_0__["LocationListComponent"]; });




/***/ }),

/***/ "./src/app/secure/location-list/location-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/secure/location-list/location-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationListComponent", function() { return LocationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scanner */ "./src/app/secure/scanner/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







class LocationListComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
    }
    ngOnInit() {
    }
    startScan() {
        const data = {};
        this._dialog
            .open(_scanner__WEBPACK_IMPORTED_MODULE_1__["ScannerComponent"], { data })
            .afterClosed()
            .subscribe(x => { if (x) {
            this.barcodeValue = x;
        } });
    }
}
LocationListComponent.ɵfac = function LocationListComponent_Factory(t) { return new (t || LocationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LocationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationListComponent, selectors: [["app-location-list"]], decls: 6, vars: 1, consts: [["type", "text", "id", "txt-assigned-location", "pInputText", "", 3, "ngModel", "ngModelChange"], ["icon", "barcode", 2, "font-size", "40px", "margin-left", "5px", "vertical-align", "middle", "cursor", "pointer", 3, "click"]], template: function LocationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assigned Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocationListComponent_Template_input_ngModelChange_4_listener($event) { return ctx.barcodeValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationListComponent_Template_fa_icon_click_5_listener($event) { return ctx.startScan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.barcodeValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9sb2NhdGlvbi1saXN0L2xvY2F0aW9uLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location-list',
                templateUrl: './location-list.component.html',
                styleUrls: ['./location-list.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/secure/location/index.ts":
/*!******************************************!*\
  !*** ./src/app/secure/location/index.ts ***!
  \******************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.component */ "./src/app/secure/location/location.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return _location_component__WEBPACK_IMPORTED_MODULE_0__["LocationComponent"]; });




/***/ }),

/***/ "./src/app/secure/location/location.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/secure/location/location.component.ts ***!
  \*******************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(); };
LocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], decls: 2, vars: 0, template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "location works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location',
                templateUrl: './location.component.html',
                styleUrls: ['./location.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/secure/scanner/index.ts":
/*!*****************************************!*\
  !*** ./src/app/secure/scanner/index.ts ***!
  \*****************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner.component */ "./src/app/secure/scanner/scanner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return _scanner_component__WEBPACK_IMPORTED_MODULE_0__["ScannerComponent"]; });




/***/ }),

/***/ "./src/app/secure/scanner/scanner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/secure/scanner/scanner.component.ts ***!
  \*****************************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/__ivy_ngcc__/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function ScannerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Waiting for camera permission.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ScannerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You denied the camera permission, please grant the camera permission in order to use the scanner function.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ScannerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Couldn't check for devices.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ScannerComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No camera was found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const PREVIOUS_SELECTED_CAMERA_LABEL = 'PREVIOUS_SELECTED_CAMERA_LABEL';
class ScannerComponent {
    constructor(data, _dialogRef) {
        this.data = data;
        this._dialogRef = _dialogRef;
        this.delayShowCheckingMessage = true;
        this.showScanner = false;
        this.isFirstTime = true;
        this.tryHarder = false;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_39,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_93,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_8,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].PDF_417,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].QR_CODE
        ];
        //let selectedCamera = localStorage.getItem(CAMERA);
        //try {
        // alert('selectedCamera');
        // alert(selectedCamera);
        // alert(JSON.parse(selectedCamera));
        // let json = JSON.parse(selectedCamera);
        // let camera: MediaDeviceInfo = plainToClass(AAA, JSON.parse(selectedCamera));
        // alert(camera);
        // this.currentDevice = camera;
        //this.currentDevice = plainToClass(MediaDeviceInfo, JSON.parse(selectedCamera));
        /*
        let camera: MediaDeviceInfo = new MediaDeviceInfo();
        camera.deviceId = json.deviceId;
        camera.groupId = json.groupId;
        camera.kind = json.kind;
        camera.label = json.label;
        this.currentDevice = camera;
        */
        //} catch {
        //  alert('error');
        //}
        //alert('constructor');
        //alert(this.currentDevice);
    }
    ngOnInit() {
        setTimeout(() => {
            this.delayShowCheckingMessage = false;
        }, 1000 * 2);
    }
    scanSuccess(value) {
        this._dialogRef.close(value);
    }
    stopScan() {
        this._dialogRef.close();
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    onAutostarted() {
        //alert('auto started');
        this.isFirstTime = false;
        this.currentDevice = this.scanner.device;
        let previousSelectedCameraLabel = localStorage.getItem(PREVIOUS_SELECTED_CAMERA_LABEL);
        let currentSelectedCameraLabel = this.currentDevice.label;
        if (!previousSelectedCameraLabel) { // first time use scanner
            localStorage.setItem(PREVIOUS_SELECTED_CAMERA_LABEL, currentSelectedCameraLabel);
            this.showScanner = true;
            //alert('1');
        }
        else { // not first time use scanner
            if (previousSelectedCameraLabel !== currentSelectedCameraLabel) { // previous selected camera is not same as the current default camera, change it to previous selected camera
                setTimeout(() => {
                    this.currentDevice = this.availableDevices.find(device => device.label === previousSelectedCameraLabel);
                    this.showScanner = true;
                    //alert('2');
                }, 1000 * 1);
            }
            else {
                this.showScanner = true;
                //alert('3');
            }
        }
    }
    onDeviceChange() {
        //alert('device change');
        //alert(this.currentDevice.label);
        if (!this.isFirstTime) {
            localStorage.setItem(PREVIOUS_SELECTED_CAMERA_LABEL, this.currentDevice.label);
            //alert(this.currentDevice.label);
        }
    }
}
ScannerComponent.ɵfac = function ScannerComponent_Factory(t) { return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScannerComponent, selectors: [["app-scanner"]], viewQuery: function ScannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scanner = _t.first);
    } }, decls: 14, vars: 13, consts: [[1, "scanner-shell", 3, "hidden"], [2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0", "background", "white"], [2, "position", "absolute", "top", "0", "bottom", "0", "left", "0", "right", "0", "background", "white", "z-index", "2000", 3, "hidden"], [2, "position", "absolute", "top", "10px", "right", "10px", "z-index", "1500", "background-color", "white"], ["optionLabel", "label", 2, "vertical-align", "top", 3, "options", "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "icon", "pi pi-times", 1, "ui-button-danger", 3, "click"], [2, "position", "absolute", "z-index", "1000", 3, "tryHarder", "formats", "device", "deviceChange", "autostarted", "scanSuccess", "permissionResponse", "camerasFound"], [2, "position", "absolute", "top", "50%", "left", "50%", "-moz-transform", "translateX(-50%) translateY(-50%)", "-webkit-transform", "translateX(-50%) translateY(-50%)", "transform", "translateX(-50%) translateY(-50%)", "z-index", "500", 3, "hidden"], [3, "hidden"], [4, "ngIf"]], template: function ScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_p_dropdown_ngModelChange_4_listener($event) { return ctx.currentDevice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScannerComponent_Template_button_click_5_listener($event) { return ctx.stopScan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "zxing-scanner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function ScannerComponent_Template_zxing_scanner_deviceChange_6_listener($event) { return ctx.onDeviceChange(); })("autostarted", function ScannerComponent_Template_zxing_scanner_autostarted_6_listener($event) { return ctx.onAutostarted(); })("scanSuccess", function ScannerComponent_Template_zxing_scanner_scanSuccess_6_listener($event) { return ctx.scanSuccess($event); })("permissionResponse", function ScannerComponent_Template_zxing_scanner_permissionResponse_6_listener($event) { return ctx.onHasPermission($event); })("camerasFound", function ScannerComponent_Template_zxing_scanner_camerasFound_6_listener($event) { return ctx.onCamerasFound($event); });
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
    } if (rf & 2) {
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
    } }, directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyZS9zY2FubmVyL3NjYW5uZXIuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scanner',
                templateUrl: './scanner.component.html',
                styleUrls: ['./scanner.component.sass']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, { scanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Leo\Project\Accenture\STP\ATS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map