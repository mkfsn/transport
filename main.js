(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tra_tra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tra/tra.component */ "./src/app/components/tra/tra.component.ts");
/* harmony import */ var _components_thsr_thsr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/thsr/thsr.component */ "./src/app/components/thsr/thsr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'tra', component: _components_tra_tra_component__WEBPACK_IMPORTED_MODULE_2__["TraComponent"] },
    { path: 'thsr', component: _components_thsr_thsr_component__WEBPACK_IMPORTED_MODULE_3__["ThsrComponent"] },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tra_tra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tra/tra.component */ "./src/app/components/tra/tra.component.ts");
/* harmony import */ var _components_thsr_thsr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/thsr/thsr.component */ "./src/app/components/thsr/thsr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_tra_tra_component__WEBPACK_IMPORTED_MODULE_7__["TraComponent"],
                _components_thsr_thsr_component__WEBPACK_IMPORTED_MODULE_8__["ThsrComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/thsr/thsr.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/thsr/thsr.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n    <div class=\"search-from\">\n        <select [(ngModel)]=\"stationFrom\">\n            <option>-</option>\n            <option *ngFor=\"let s of stations | async\" [ngValue]=\"s\">{{ s.StationName.Zh_tw }}</option>\n        </select>\n    </div>\n    <div class=\"search-to\">\n        <select [(ngModel)]=\"stationTo\">\n            <option>-</option>\n            <option *ngFor=\"let s of stations | async\" [ngValue]=\"s\">{{ s.StationName.Zh_tw }}</option>\n        </select>\n    </div>\n    <div class=\"search-reverse\">\n        <button (click)=\"reverse()\">&lt;-&gt;</button>\n    </div>\n\n    <div class=\"search-date\">\n        <input type=\"datetime-local\" [(ngModel)]=\"date\">\n    </div>\n\n    <div class=\"search-type\">\n        <label>\n            <input type=\"radio\" name=\"searchType\" [(ngModel)]=\"searchType\" value=\"出發\">出發\n        </label>\n        <label>\n            <input type=\"radio\" name=\"searchType\" [(ngModel)]=\"searchType\" value=\"抵達\">抵達\n        </label>\n    </div>\n\n    <div class=\"search-button\">\n        <button (click)=\"search()\">Search</button>\n    </div>\n</div>\n<hr/>\n\n<div class=\"result\">\n    <table>\n    <tbody>\n        <tr *ngFor=\"let t of timetables | async\">\n            <td>{{ t.DailyTrainInfo.TrainNo }}</td>\n            <td>{{ t.OriginStopTime.DepartureTime }}</td>\n            <td>{{ t.DestinationStopTime.ArrivalTime }}</td>\n            <td>{{ t.DailyTrainInfo.Note.Zh_tw }}</td>\n            <td></td>\n        </tr>\n    </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/thsr/thsr.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/thsr/thsr.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/thsr/thsr.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/thsr/thsr.component.ts ***!
  \***************************************************/
/*! exports provided: ThsrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThsrComponent", function() { return ThsrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_thsr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/thsr.service */ "./src/app/services/thsr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThsrComponent = /** @class */ (function () {
    function ThsrComponent(thsrService) {
        this.thsrService = thsrService;
        this.stations = this.thsrService.getStations();
        var now = new Date();
        now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
        this.date = now.toISOString().slice(0, 16);
    }
    ThsrComponent.prototype.ngOnInit = function () {
        this.thsrService.getStations().subscribe(function (res) {
            console.log(res);
        });
    };
    ThsrComponent.prototype.reverse = function () {
        var tmp = this.stationFrom;
        this.stationFrom = this.stationTo;
        this.stationTo = tmp;
    };
    ThsrComponent.prototype.search = function () {
        var _this = this;
        if (!this.stationFrom || !this.stationTo) {
            return;
        }
        console.debug('from:', this.stationFrom, 'to:', this.stationTo, 'type:', this.searchType);
        this.timetables = this.thsrService.getTimetables(this.stationFrom, this.stationTo, new Date(this.date)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tables) {
            var compareFn = function (a, b) {
                var x = new Date(a.TrainDate + ' ' + a.OriginStopTime.DepartureTime), y = new Date(b.TrainDate + ' ' + b.OriginStopTime.DepartureTime);
                if (x == y) {
                    return 0;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return -1;
                }
            };
            var filterFn = function (x) {
                if (_this.searchType == '出發') {
                    return new Date(x.TrainDate + ' ' + x.OriginStopTime.DepartureTime) >= new Date(_this.date);
                }
                else if (_this.searchType == '抵達') {
                    return new Date(x.TrainDate + ' ' + x.DestinationStopTime.ArrivalTime) <= new Date(_this.date);
                }
            };
            return tables.filter(filterFn).sort(compareFn);
        }));
    };
    ThsrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thsr',
            template: __webpack_require__(/*! ./thsr.component.html */ "./src/app/components/thsr/thsr.component.html"),
            styles: [__webpack_require__(/*! ./thsr.component.scss */ "./src/app/components/thsr/thsr.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_thsr_service__WEBPACK_IMPORTED_MODULE_2__["ThsrService"]])
    ], ThsrComponent);
    return ThsrComponent;
}());



/***/ }),

/***/ "./src/app/components/tra/tra.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tra/tra.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n    <div class=\"search-from\">\n        <select [(ngModel)]=\"stationFrom\">\n            <option>-</option>\n            <option *ngFor=\"let s of stations | async\" [ngValue]=\"s\">{{ s.StationName.Zh_tw }}</option>\n        </select>\n    </div>\n    <div class=\"search-to\">\n        <select [(ngModel)]=\"stationTo\">\n            <option>-</option>\n            <option *ngFor=\"let s of stations | async\" [ngValue]=\"s\">{{ s.StationName.Zh_tw }}</option>\n        </select>\n    </div>\n    <div class=\"search-reverse\">\n        <button (click)=\"reverse()\">\n            <fa-icon [icon]=\"reverseIcon\" rotate=\"90\" size=\"2x\"></fa-icon>\n        </button>\n    </div>\n\n    <div class=\"search-date\">\n        <input type=\"datetime-local\" [(ngModel)]=\"date\">\n    </div>\n\n    <div class=\"search-type\">\n        <label>\n            <input type=\"radio\" name=\"searchType\" [(ngModel)]=\"searchType\" value=\"出發\">出發\n        </label>\n        <label>\n            <input type=\"radio\" name=\"searchType\" [(ngModel)]=\"searchType\" value=\"抵達\">抵達\n        </label>\n    </div>\n\n    <div class=\"search-submit\">\n        <button (click)=\"search()\">Search</button>\n    </div>\n</div>\n<hr/>\n\n<div class=\"result\">\n    <table>\n    <tbody>\n        <tr *ngFor=\"let t of timetables | async\">\n            <td>{{ t.DailyTrainInfo.TrainTypeName.Zh_tw }}</td>\n            <td>{{ t.DailyTrainInfo.TrainNo }}</td>\n            <td>{{ t.OriginStopTime.DepartureTime }}</td>\n            <td>{{ t.DestinationStopTime.ArrivalTime }}</td>\n            <td>{{ t.DailyTrainInfo.Note.Zh_tw }}</td>\n            <td></td>\n        </tr>\n    </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tra/tra.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tra/tra.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 50%;\n  margin: 0 auto;\n  max-width: 480px;\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: \"from from from reverse\" \"to   to   to   reverse\" \"date date type submit\"; }\n  .search .search-from {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-area: from; }\n  .search .search-to {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-area: to; }\n  .search .search-reverse {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n    -ms-grid-column: 4;\n    grid-area: reverse; }\n  .search .search-reverse button {\n      height: 3rem;\n      border-radius: 3px; }\n  .search .search-date {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: date; }\n  .search .search-type {\n    -ms-grid-row: 3;\n    -ms-grid-column: 3;\n    grid-area: type; }\n  .search .search-submit {\n    -ms-grid-row: 3;\n    -ms-grid-column: 4;\n    grid-area: submit; }\n"

/***/ }),

/***/ "./src/app/components/tra/tra.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tra/tra.component.ts ***!
  \*************************************************/
/*! exports provided: TraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraComponent", function() { return TraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_tra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tra.service */ "./src/app/services/tra.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TraComponent = /** @class */ (function () {
    function TraComponent(traService) {
        this.traService = traService;
        this.reverseIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExchangeAlt"];
        this.stations = this.traService.getStations();
        this.searchType = '出發';
        var now = new Date();
        now.setHours(now.getHours() - now.getTimezoneOffset() / 60);
        this.date = now.toISOString().slice(0, 16);
    }
    TraComponent.prototype.ngOnInit = function () { };
    TraComponent.prototype.reverse = function () {
        var tmp = this.stationFrom;
        this.stationFrom = this.stationTo;
        this.stationTo = tmp;
    };
    TraComponent.prototype.search = function () {
        var _this = this;
        if (!this.stationFrom || !this.stationTo) {
            return;
        }
        console.debug('from:', this.stationFrom, 'to:', this.stationTo, 'type:', this.searchType);
        this.timetables = this.traService.getTimetables(this.stationFrom, this.stationTo, new Date(this.date)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tables) {
            var compareFn = function (a, b) {
                var x = new Date(a.TrainDate + ' ' + a.OriginStopTime.DepartureTime), y = new Date(b.TrainDate + ' ' + b.OriginStopTime.DepartureTime);
                if (x == y) {
                    return 0;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return -1;
                }
            };
            var filterFn = function (x) {
                if (_this.searchType == '出發') {
                    return new Date(x.TrainDate + ' ' + x.OriginStopTime.DepartureTime) >= new Date(_this.date);
                }
                else if (_this.searchType == '抵達') {
                    return new Date(x.TrainDate + ' ' + x.DestinationStopTime.ArrivalTime) <= new Date(_this.date);
                }
            };
            return tables.filter(filterFn).sort(compareFn);
        }));
    };
    TraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tra',
            template: __webpack_require__(/*! ./tra.component.html */ "./src/app/components/tra/tra.component.html"),
            styles: [__webpack_require__(/*! ./tra.component.scss */ "./src/app/components/tra/tra.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tra_service__WEBPACK_IMPORTED_MODULE_3__["TraService"]])
    ], TraComponent);
    return TraComponent;
}());



/***/ }),

/***/ "./src/app/services/thsr.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/thsr.service.ts ***!
  \******************************************/
/*! exports provided: ThsrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThsrService", function() { return ThsrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThsrService = /** @class */ (function () {
    function ThsrService(http) {
        this.http = http;
        this.getStations();
    }
    ThsrService.prototype.paddingZero = function (n, length) {
        var s = n.toString();
        return s.padStart(length, '0');
    };
    ;
    ThsrService.prototype.getStations = function () {
        var url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/Station?$format=JSON';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (stations) { return stations; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    ThsrService.prototype.getTimetables = function (from, to, date) {
        if (date === void 0) { date = new Date(); }
        var formattedDate = this.paddingZero(date.getFullYear(), 4) + "-" + this.paddingZero(date.getMonth() + 1, 2) + "-" + this.paddingZero(date.getDate(), 2);
        var url = "https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/" + from.StationID + "/to/" + to.StationID + "/" + formattedDate + "?$format=JSON";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (timetables) { return timetables; }));
    };
    ThsrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ThsrService);
    return ThsrService;
}());



/***/ }),

/***/ "./src/app/services/tra.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tra.service.ts ***!
  \*****************************************/
/*! exports provided: TraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraService", function() { return TraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TraService = /** @class */ (function () {
    function TraService(http) {
        this.http = http;
        this.getStations();
    }
    TraService.prototype.paddingZero = function (n, length) {
        var s = n.toString();
        return s.padStart(length, '0');
    };
    ;
    TraService.prototype.getStations = function () {
        var url = 'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$format=JSON';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (stations) { return stations; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    TraService.prototype.getTimetables = function (from, to, date) {
        if (date === void 0) { date = new Date(); }
        var formattedDate = this.paddingZero(date.getFullYear(), 4) + "-" + this.paddingZero(date.getMonth() + 1, 2) + "-" + this.paddingZero(date.getDate(), 2);
        var url = "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/" + from.StationID + "/to/" + to.StationID + "/" + formattedDate + "?$format=JSON";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (timetables) { return timetables; }));
    };
    TraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TraService);
    return TraService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/mkfsn/transport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map